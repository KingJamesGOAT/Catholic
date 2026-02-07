import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  History as HistoryIcon, 
  User, 
  ScrollText, 
  Crown,
  ZoomIn,
  ZoomOut,
  Maximize2,
  CalendarArrowUp,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Tag,
  CornerDownLeft,
  RotateCcw
} from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

// Import data
import { COUNCILS, SAINTS, POPES, WRITINGS, TimelineEvent, TIMELINE_UI } from '../lib/data/timelineData'; 
import { cn } from './ui/utils'; 

// --- CONFIGURATION ---
const DATA_START_YEAR = 0;
const DATA_END_YEAR = 2100;

// Base sizes
const DESKTOP_BASE_HEIGHT = 90;
const MOBILE_BASE_HEIGHT = 65; 

const DESKTOP_EVENT_GAP = 12;
const MOBILE_EVENT_GAP = 4;

// --- TYPES ---
type SearchTag = 
  | { kind: 'event'; id: string; name: string; event: TimelineEvent }
  | { kind: 'filter'; id: string; label: string; value: string; type: 'text' | 'category' | 'year_gt' | 'year_lt' | 'year_range' | 'year_exact' };

export default function HistoryTimeline() {
  const { language } = useLanguage();
  
  // --- SEARCH & FILTER STATE ---
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  
  // Smart Search State
  const [searchTags, setSearchTags] = useState<SearchTag[]>([]);
  const [searchMode, setSearchMode] = useState<'OR' | 'AND'>('OR');
  const [suggestions, setSuggestions] = useState<(TimelineEvent | { isCommand: true; label: string; value: string; type: string })[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  
  // Refs
  const searchInputRef = useRef<HTMLInputElement>(null);
  const helpRef = useRef<HTMLDivElement>(null); 

  // Controls state
  const [pixelsPerYear, setPixelsPerYear] = useState(2); 
  const [targetYear, setTargetYear] = useState('');
  const [containerWidth, setContainerWidth] = useState(1000); 
  const [scrollLeft, setScrollLeft] = useState(0); 

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const miniMapRef = useRef<HTMLDivElement>(null);
  const isDraggingMiniMap = useRef(false);
  
  // Drag to Scroll Refs (PC)
  const isDraggingTimeline = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  // --- RESPONSIVE CONSTANTS ---
  const isMobile = containerWidth < 768;
  const currentEventGap = isMobile ? MOBILE_EVENT_GAP : DESKTOP_EVENT_GAP;

  // --- 1. DYNAMIC HEIGHT CALCULATION ---
  const currentLaneHeight = useMemo(() => {
    if (isMobile) {
      return Math.max(45, MOBILE_BASE_HEIGHT - (pixelsPerYear * 0.2));
    } else {
      return Math.max(50, DESKTOP_BASE_HEIGHT - (pixelsPerYear * 2));
    }
  }, [isMobile, pixelsPerYear]);

  // --- 2. ZOOM LIMITS ---
  const minZoom = useMemo(() => {
    if (isMobile) return containerWidth / 500;
    return containerWidth / (DATA_END_YEAR - DATA_START_YEAR);
  }, [containerWidth, isMobile]);

  const maxZoom = useMemo(() => containerWidth / 50, [containerWidth]);

  useEffect(() => {
    if (pixelsPerYear < minZoom) setPixelsPerYear(minZoom);
    if (pixelsPerYear > maxZoom) setPixelsPerYear(maxZoom);
  }, [minZoom, maxZoom, pixelsPerYear]);

  useEffect(() => {
    const updateWidth = () => {
      if (scrollContainerRef.current) {
        setContainerWidth(scrollContainerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // --- CLICK OUTSIDE HANDLER ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (helpRef.current && !helpRef.current.contains(event.target as Node)) {
        setShowHelp(false);
      }
    };
    if (showHelp) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showHelp]);

  // --- 3. DATA PREPARATION ---
  const allEvents = useMemo(() => {
    const councils = COUNCILS || [];
    const saints = SAINTS || [];
    const popes = POPES || [];
    const writings = WRITINGS || [];

    return [
      ...councils.map(e => ({ ...e, type: 'council' as const })),
      ...saints.map(e => ({ ...e, type: 'saint' as const })),
      ...popes.map(e => ({ ...e, type: 'pope' as const })),
      ...writings.map(e => ({ ...e, type: 'writing' as const }))
    ].sort((a, b) => a.startYear - b.startYear);
  }, []);

  // --- 4. SMART SEARCH LOGIC ---
  useEffect(() => {
    const query = searchQuery.trim();
    if (!query) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    let matches: any[] = [];

    // A. COMMAND MODE
    if (query.startsWith('/')) {
      const cmd = query.slice(1).toLowerCase();
      const commands = [
        { isCommand: true, label: 'Filter: Council', value: 'council', type: 'category' },
        { isCommand: true, label: 'Filter: Saint', value: 'saint', type: 'category' },
        { isCommand: true, label: 'Filter: Pope', value: 'pope', type: 'category' },
        { isCommand: true, label: 'Filter: Writing', value: 'writing', type: 'category' },
      ];
      matches = commands.filter(c => c.value.startsWith(cmd));
      
      if (cmd.length > 0) {
        matches.push({ isCommand: true, label: `Contains text: "${cmd}"`, value: cmd, type: 'text' });
      }
    } 
    // B. OPERATOR MODE
    else if (query.startsWith('>') || query.startsWith('<') || query.startsWith('=')) {
      const operator = query[0];
      const val = query.slice(1);
      if (val.length > 0 && !isNaN(parseInt(val))) {
        let type = 'year_exact';
        let label = `Year ${val}`;
        
        if (operator === '>') { type = 'year_gt'; label = `Year > ${val}`; }
        else if (operator === '<') { type = 'year_lt'; label = `Year < ${val}`; }
        else if (operator === '=') { type = 'year_exact'; label = `Year is ${val}`; }

        matches.push({ isCommand: true, label, value: val, type });
      }
    }
    // C. RANGE MODE
    else if (/^\d{1,4}-\d{1,4}$/.test(query)) {
      const [start, end] = query.split('-');
      if (parseInt(start) < parseInt(end)) {
        matches.push({
          isCommand: true,
          label: `Range: ${start} to ${end}`,
          value: query,
          type: 'year_range'
        });
      }
    }
    // D. CENTURY MODE
    else if (/^\d{1,2}(c|th|st|nd|rd)$/i.test(query)) {
      const century = parseInt(query.match(/\d+/)?.[0] || '0');
      if (century > 0) {
        const start = (century - 1) * 100; 
        const end = start + 99;
        matches.push({
          isCommand: true,
          label: `${century}${query.replace(/\d/g,'')} Century (${start}-${end})`,
          value: `${start}-${end}`, 
          type: 'year_range'
        });
      }
    }
    // E. STANDARD SEARCH
    else {
      matches = allEvents
        .filter(e => 
          !searchTags.find(t => t.kind === 'event' && t.id === e.id) &&
          (e.name[language].toLowerCase().includes(query.toLowerCase()) || 
           e.description[language].toLowerCase().includes(query.toLowerCase()))
        )
        .slice(0, 3);
    }

    setSuggestions(matches);
    setShowSuggestions(true);
    setActiveSuggestionIndex(0);
  }, [searchQuery, allEvents, language, searchTags]);

  const addSearchTag = (item: any) => {
    let targetScrollYear: number | null = null;

    if (item.isCommand) {
      const newTag: SearchTag = {
        kind: 'filter',
        id: `filter-${item.type}-${item.value}-${Date.now()}`,
        label: item.label.replace('Filter: ', '').replace('Range: ', ''),
        value: item.value,
        type: item.type
      };
      setSearchTags(prev => [...prev, newTag]);

      if (item.type === 'year_exact' || item.type === 'year_gt' || item.type === 'year_lt') {
        targetScrollYear = parseInt(item.value);
      } else if (item.type === 'year_range') {
        const parts = item.value.split('-');
        if (parts.length > 0) targetScrollYear = parseInt(parts[0]);
      }

    } else {
      const newTag: SearchTag = {
        kind: 'event',
        id: item.id,
        name: item.name[language],
        event: item
      };
      setSearchTags(prev => [...prev, newTag]);
      targetScrollYear = item.startYear;
    }

    if (targetScrollYear !== null && !isNaN(targetScrollYear) && scrollContainerRef.current) {
        const safeYear = Math.min(Math.max(targetScrollYear, DATA_START_YEAR), DATA_END_YEAR);
        const pixelPos = (safeYear - DATA_START_YEAR) * pixelsPerYear;
        const centerOffset = containerWidth / 2;
        const scrollPos = Math.max(0, pixelPos - centerOffset);
        scrollContainerRef.current.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }

    setSearchQuery('');
    setShowSuggestions(false);
  };

  const removeSearchTag = (id: string) => {
    setSearchTags(prev => prev.filter(t => t.id !== id));
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex(prev => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (suggestions.length > 0) {
        addSearchTag(suggestions[activeSuggestionIndex]);
      } else if (searchQuery.length > 0) {
        if (/^\d+-\d+$/.test(searchQuery)) {
           addSearchTag({ isCommand: true, label: `Range: ${searchQuery}`, value: searchQuery, type: 'year_range' });
        } else if (searchQuery.startsWith('=')) {
           addSearchTag({ isCommand: true, label: `Year ${searchQuery.slice(1)}`, value: searchQuery.slice(1), type: 'year_exact' });
        } else if (searchQuery.startsWith('>')) {
           addSearchTag({ isCommand: true, label: `Year > ${searchQuery.slice(1)}`, value: searchQuery.slice(1), type: 'year_gt' });
        } else if (searchQuery.startsWith('<')) {
           addSearchTag({ isCommand: true, label: `Year < ${searchQuery.slice(1)}`, value: searchQuery.slice(1), type: 'year_lt' });
        } else {
           addSearchTag({ isCommand: true, label: `"${searchQuery}"`, value: searchQuery, type: 'text' });
        }
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setShowHelp(false);
    }
  };

  // --- 5. TIMELINE FILTERING ---
  const filteredEvents = useMemo(() => {
    return allEvents.filter(event => {
      // 1. Search Tags
      if (searchTags.length > 0) {
        const tagMatches = (tag: SearchTag) => {
          if (tag.kind === 'event') return tag.id === event.id;
          if (tag.kind === 'filter') {
            if (tag.type === 'category') return event.type === tag.value;
            if (tag.type === 'text') {
              const q = tag.value.toLowerCase();
              return event.name[language].toLowerCase().includes(q) || 
                     event.description[language].toLowerCase().includes(q);
            }
            if (tag.type === 'year_gt') return event.startYear > parseInt(tag.value);
            if (tag.type === 'year_lt') return event.startYear < parseInt(tag.value);
            if (tag.type === 'year_exact') return event.startYear === parseInt(tag.value);
            if (tag.type === 'year_range') {
              const [start, end] = tag.value.split('-').map(Number);
              return event.startYear >= start && event.startYear <= end;
            }
          }
          return false;
        };

        const hasMatch = searchMode === 'OR' 
          ? searchTags.some(tagMatches) 
          : searchTags.every(tagMatches);

        if (!hasMatch) return false;
      }

      // 2. Global Type Buttons (Always AND)
      if (selectedTypes.length > 0 && !selectedTypes.includes(event.type)) return false;
      
      return true; 
    });
  }, [allEvents, selectedTypes, searchTags, language, searchMode]);

  const { positionedEvents, totalLanes } = useMemo(() => {
    const lanes: number[] = []; 
    const positioned = filteredEvents.map(event => {
      if (event.startYear === undefined) return null;
      const startPixel = (event.startYear - DATA_START_YEAR) * pixelsPerYear;
      const duration = (event.endYear || event.startYear) - event.startYear;
      const minWidth = isMobile ? 65 : 140; 
      const widthPixel = Math.max(duration * pixelsPerYear, minWidth);
      const endPixel = startPixel + widthPixel + (isMobile ? 10 : 20);

      let laneIndex = -1;
      for (let i = 0; i < lanes.length; i++) {
        if (lanes[i] < startPixel) {
          laneIndex = i;
          lanes[i] = endPixel; 
          break;
        }
      }
      if (laneIndex === -1) {
        laneIndex = lanes.length;
        lanes.push(endPixel);
      }
      return { ...event, lane: laneIndex, x: startPixel, width: widthPixel };
    }).filter(e => e !== null);
    return { positionedEvents: positioned, totalLanes: lanes.length };
  }, [filteredEvents, pixelsPerYear, isMobile]);

  // --- 6. SCROLL & ZOOM LOGIC ---
  const handleMainScroll = () => { if (scrollContainerRef.current) setScrollLeft(scrollContainerRef.current.scrollLeft); };
  
  const jumpToPercentage = (percentage: number) => {
    if (!scrollContainerRef.current) return;
    const maxScroll = scrollContainerRef.current.scrollWidth - containerWidth;
    scrollContainerRef.current.scrollLeft = Math.max(0, Math.min(maxScroll, percentage * maxScroll));
  };
  
  const handleZoom = (dir: 'in' | 'out' | 'reset') => {
    setPixelsPerYear(prev => {
      if (dir === 'reset') return minZoom; 
      const factor = 1.25;
      return Math.min(Math.max(dir === 'in' ? prev * factor : prev / factor, minZoom), maxZoom);
    });
  };
  
  const jumpToYear = () => {
    const year = parseInt(targetYear);
    if (isNaN(year) || !scrollContainerRef.current) return;
    const pixelPos = (Math.min(Math.max(year, DATA_START_YEAR), DATA_END_YEAR) - DATA_START_YEAR) * pixelsPerYear;
    scrollContainerRef.current.scrollTo({ left: Math.max(0, pixelPos - containerWidth / 2), behavior: 'smooth' });
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => { if (e.key === 'Enter') jumpToYear(); };
  
  const handleNavigate = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8; 
    
    container.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  const toggleFilter = (type: string) => {
    if (type === 'all') { setSelectedTypes([]); return; }
    setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  };

  // --- 7. MOUSE DRAG SCROLL HANDLERS ---
  const handleTimelineMouseDown = (e: React.MouseEvent) => {
    isDraggingTimeline.current = true;
    if(scrollContainerRef.current) {
        startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
        scrollLeftStart.current = scrollContainerRef.current.scrollLeft;
        scrollContainerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleTimelineMouseLeave = () => {
    isDraggingTimeline.current = false;
    if(scrollContainerRef.current) scrollContainerRef.current.style.cursor = 'grab';
  };

  const handleTimelineMouseUp = () => {
    isDraggingTimeline.current = false;
    if(scrollContainerRef.current) scrollContainerRef.current.style.cursor = 'grab';
  };

  const handleTimelineMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingTimeline.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current); 
    scrollContainerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  // --- 8. UI HELPERS ---
  const getColors = (type: string) => {
    switch(type) {
      case 'council': return { bg: 'bg-indigo-600', border: 'border-indigo-400', hover: 'hover:bg-indigo-500' };
      case 'saint': return { bg: 'bg-amber-600', border: 'border-amber-400', hover: 'hover:bg-amber-500' };
      case 'pope': return { bg: 'bg-red-600', border: 'border-red-400', hover: 'hover:bg-red-500' };
      case 'writing': return { bg: 'bg-green-600', border: 'border-green-400', hover: 'hover:bg-green-500' };
      default: return { bg: 'bg-gray-700', border: 'border-gray-500', hover: 'hover:bg-gray-600' };
    }
  };
  const getIcon = (type: string) => {
    const size = isMobile ? Math.min(10, currentLaneHeight * 0.4) : Math.min(16, currentLaneHeight * 0.3);
    switch(type) {
      case 'council': return <ScrollText size={size} className="text-indigo-100" />;
      case 'saint': return <User size={size} className="text-amber-100" />;
      case 'pope': return <Crown size={size} className="text-red-100" />;
      case 'writing': return <BookOpen size={size} className="text-green-100" />;
      default: return <HistoryIcon size={size} />;
    }
  };

  // --- RENDER ---
  const totalContentWidth = (DATA_END_YEAR - DATA_START_YEAR) * pixelsPerYear;
  const containerStyleHeight = Math.max(totalLanes * (currentLaneHeight + currentEventGap) + 150, 500);
  const tickInterval = pixelsPerYear < 2 ? 100 : pixelsPerYear < 5 ? 50 : 10;
  const ticks = [];
  for (let y = DATA_START_YEAR; y <= DATA_END_YEAR; y += tickInterval) ticks.push(y);

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white pt-24 px-4 pb-12 flex flex-col gap-6">
      <style>{`
        .timeline-scrollbar::-webkit-scrollbar { height: 14px; background: #0a0a0a; }
        .timeline-scrollbar::-webkit-scrollbar-thumb { background-color: #3b82f6; border-radius: 7px; border: 3px solid #0a0a0a; }
        .timeline-scrollbar::-webkit-scrollbar-track { background: #1a1a1a; border-radius: 7px; }
      `}</style>

      {/* TITLE */}
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
          <HistoryIcon className="text-blue-500 hidden md:block" size={32} />
          {TIMELINE_UI.title[language]}
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">{TIMELINE_UI.subtitle[language]}</p>
      </div>

      {/* CONTROLS */}
      <div className="container mx-auto w-full max-w-7xl bg-[#121212] border border-gray-800 p-4 rounded-xl shadow-lg">
        {/* Type Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
           <button onClick={() => toggleFilter('all')} className={cn("px-3 py-1.5 text-xs md:text-sm rounded-lg border font-medium", selectedTypes.length === 0 ? "bg-blue-600 border-blue-500 text-white" : "bg-[#1a1a1a] border-gray-700 text-gray-400 hover:text-white")}>{TIMELINE_UI.filters['all'][language]}</button>
           {(['council', 'saint', 'pope', 'writing'] as const).map(type => (
              <button key={type} onClick={() => toggleFilter(type)} className={cn("px-3 py-1.5 text-xs md:text-sm rounded-lg border font-medium capitalize", selectedTypes.includes(type) ? `${getColors(type).bg} ${getColors(type).border} text-white` : "bg-[#1a1a1a] border-gray-700 text-gray-400 hover:text-white")}>
                {TIMELINE_UI.filters[type][language]}
              </button>
           ))}
        </div>

        {/* Layout Fix: Outer container flex-col, but inner row maintains button alignment */}
        <div className="flex flex-col gap-2 w-full">
          
          {/* Tag Row */}
          {searchTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-1">
              {searchTags.map(tag => (
                <span key={tag.id} className="inline-flex items-center gap-1 bg-blue-900/50 text-blue-200 border border-blue-700 px-2 py-1 rounded-md text-xs">
                  {tag.kind === 'event' ? <HistoryIcon size={10} /> : <Tag size={10} />}
                  {tag.kind === 'event' ? tag.name : tag.label}
                  <button onClick={() => removeSearchTag(tag.id)} className="hover:text-white"><X size={12} /></button>
                </span>
              ))}
              <button 
                onClick={() => setSearchTags([])} 
                className="inline-flex items-center gap-1.5 bg-red-900/20 text-red-400 border border-red-900/50 px-2 py-1 rounded-md text-xs hover:bg-red-900/40 hover:text-red-300 transition-colors"
              >
                <RotateCcw size={10} />
                Reset all
              </button>
            </div>
          )}

          {/* Main Controls Row: Search Box and Navigation/Zoom aligned horizontally */}
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between w-full">
            
            {/* Search Bar Container */}
            <div className="w-full md:flex-1 relative z-30">
              <div className="relative group flex items-center bg-[#0a0a0a] rounded-lg border border-gray-700 px-3 py-2 focus-within:border-blue-500 transition-all w-full">
                <Search size={16} className="text-gray-500 shrink-0 mr-2" />
                <input 
                  ref={searchInputRef}
                  type="text" 
                  placeholder={TIMELINE_UI.searchPlaceholder[language]}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-600 w-full"
                />
                
                {searchTags.length > 1 && (
                   <button 
                     onClick={() => setSearchMode(m => m === 'OR' ? 'AND' : 'OR')}
                     className={cn(
                       "ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded border transition-colors uppercase whitespace-nowrap",
                       searchMode === 'AND' 
                         ? "bg-blue-900/50 border-blue-500 text-blue-200" 
                         : "bg-gray-800 border-gray-600 text-gray-400 hover:text-white"
                     )}
                     title={searchMode === 'OR' ? TIMELINE_UI.logicAny[language] : TIMELINE_UI.logicAll[language]}
                   >
                     {searchMode}
                   </button>
                )}

                <button onClick={() => setShowHelp(!showHelp)} className="text-gray-500 hover:text-blue-400 transition-colors ml-2" title="Search Options">
                  <CircleHelp size={16} />
                </button>
                {(searchQuery || searchTags.length > 0) && (
                  <button onClick={() => {setSearchQuery(''); setSearchTags([]); setSearchMode('OR');}} className="text-gray-500 hover:text-white transition-colors ml-2"><X size={14} /></button>
                )}
              </div>

              {/* Suggestions Dropdown (Absolute to not push buttons) */}
              <AnimatePresence>
                {showSuggestions && suggestions.length > 0 && (
                  <motion.ul initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl overflow-hidden z-30">
                    {suggestions.map((item, idx) => (
                      <li 
                        key={idx}
                        onClick={() => addSearchTag(item)}
                        className={cn("px-4 py-3 cursor-pointer border-b border-gray-800 last:border-0 flex items-center justify-between transition-colors", idx === activeSuggestionIndex ? "bg-blue-600 text-white" : "text-gray-100 hover:bg-gray-800")}
                      >
                        {'isCommand' in item ? (
                          <div className="flex items-center gap-2"><Tag size={14} className="opacity-70"/><span className="font-bold">{item.label}</span></div>
                        ) : (
                          <>
                            <div className="flex items-center gap-2"><span className="text-xs opacity-50 uppercase w-12">{item.type}</span><span className="font-medium text-sm">{item.name[language]}</span></div>
                            <span className="text-xs opacity-50">{item.startYear}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              {/* Help Dropdown */}
              <AnimatePresence>
                {showHelp && (
                  <motion.div 
                    ref={helpRef}
                    initial={{ opacity: 0, y: 5 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 5 }} 
                    className="absolute top-full right-0 mt-2 w-72 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl p-4 z-30 text-xs text-gray-300"
                  >
                    <div className="flex justify-between items-center mb-2"><h4 className="font-bold text-white">{TIMELINE_UI.searchHelpTitle[language]}</h4><button onClick={() => setShowHelp(false)}><X size={14}/></button></div>
                    <ul className="space-y-2">
                      <li className="flex justify-between"><span><code>/category</code></span> <span className="text-gray-500">{TIMELINE_UI.helpCategory[language]}</span></li>
                      <li className="flex justify-between"><span><code>/text</code></span> <span className="text-gray-500">{TIMELINE_UI.helpText[language]}</span></li>
                      <li className="flex justify-between"><span><code>1000-1200</code></span> <span className="text-gray-500">{TIMELINE_UI.helpRange[language]}</span></li>
                      <li className="flex justify-between"><span><code>13c / 13th</code></span> <span className="text-gray-500">{TIMELINE_UI.helpCentury[language]}</span></li>
                      <li className="flex justify-between"><span><code>&gt; 1000</code></span> <span className="text-gray-500">{TIMELINE_UI.helpAfter[language]}</span></li>
                      <li className="flex justify-between"><span><code>&lt; 500</code></span> <span className="text-gray-500">{TIMELINE_UI.helpBefore[language]}</span></li>
                      <li className="flex justify-between"><span><code>= 1517</code></span> <span className="text-gray-500">{TIMELINE_UI.helpExact[language]}</span></li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Buttons & Year Jumper */}
            <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
              {isMobile ? (
                <div className="w-full flex flex-col gap-3">
                  <div className="flex justify-center items-center gap-1 bg-[#0a0a0a] rounded-lg p-1 border border-gray-700 self-center">
                    <button onClick={() => handleZoom('out')} disabled={pixelsPerYear <= minZoom} className="p-3 hover:bg-gray-800 disabled:opacity-30 rounded text-gray-300"><ZoomOut size={20}/></button>
                    <button onClick={() => handleZoom('reset')} className="p-3 hover:bg-gray-800 rounded text-gray-300"><Maximize2 size={20}/></button>
                    <button onClick={() => handleZoom('in')} disabled={pixelsPerYear >= maxZoom} className="p-3 hover:bg-gray-800 disabled:opacity-30 rounded text-gray-300"><ZoomIn size={20}/></button>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <button onClick={() => handleNavigate('left')} className="bg-[#0a0a0a] border border-gray-700 hover:bg-gray-800 rounded-lg p-3 text-gray-300"><ChevronLeft size={20} /></button>
                    <div className="flex items-center bg-[#0a0a0a] rounded-lg border border-gray-700 px-3 py-2">
                      <input type="number" placeholder="Year" value={targetYear} onChange={(e) => setTargetYear(e.target.value)} onKeyDown={handleKeyDown} className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-600 w-16 text-center"/>
                      <button onClick={jumpToYear} className="bg-gray-800 hover:bg-gray-700 rounded p-1 text-white ml-1"><CornerDownLeft size={16} /></button>
                    </div>
                    <button onClick={() => handleNavigate('right')} className="bg-[#0a0a0a] border border-gray-700 hover:bg-gray-800 rounded-lg p-3 text-gray-300"><ChevronRight size={20} /></button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleNavigate('left')} className="bg-[#0a0a0a] border border-gray-700 hover:bg-gray-800 rounded-lg p-2 text-gray-300"><ChevronLeft size={16} /></button>
                    <div className="flex items-center bg-[#0a0a0a] rounded-lg border border-gray-700 px-3 py-1.5">
                      <input type="number" placeholder="Year" value={targetYear} onChange={(e) => setTargetYear(e.target.value)} onKeyDown={handleKeyDown} className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-600 w-16"/>
                      <button onClick={jumpToYear} className="bg-gray-800 hover:bg-gray-700 rounded p-1 text-white ml-1"><CornerDownLeft size={14} /></button>
                    </div>
                    <button onClick={() => handleNavigate('right')} className="bg-[#0a0a0a] border border-gray-700 hover:bg-gray-800 rounded-lg p-2 text-gray-300"><ChevronRight size={16} /></button>
                  </div>
                  <div className="flex items-center gap-1 bg-[#0a0a0a] rounded-lg p-1 border border-gray-700">
                    <button onClick={() => handleZoom('out')} disabled={pixelsPerYear <= minZoom} className="p-2 hover:bg-gray-800 disabled:opacity-30 rounded text-gray-300"><ZoomOut size={18}/></button>
                    <button onClick={() => handleZoom('reset')} className="p-2 hover:bg-gray-800 rounded text-gray-300"><Maximize2 size={18}/></button>
                    <button onClick={() => handleZoom('in')} disabled={pixelsPerYear >= maxZoom} className="p-2 hover:bg-gray-800 disabled:opacity-30 rounded text-gray-300"><ZoomIn size={18}/></button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MINIMAP */}
      <div className="container mx-auto w-full max-w-[98%] lg:max-w-7xl select-none">
        <div className="w-full h-8 bg-[#121212] rounded-lg border border-gray-700 relative overflow-hidden cursor-pointer touch-none hover:border-blue-500/50 transition-colors"
          ref={miniMapRef} onPointerDown={(e)=>{e.preventDefault();isDraggingMiniMap.current=true;(e.target as HTMLElement).setPointerCapture(e.pointerId);if(miniMapRef.current){const r=miniMapRef.current.getBoundingClientRect();jumpToPercentage((e.clientX-r.left)/r.width);}}} onPointerMove={(e)=>{if(isDraggingMiniMap.current&&miniMapRef.current){e.preventDefault();const r=miniMapRef.current.getBoundingClientRect();jumpToPercentage((e.clientX-r.left)/r.width);}}} onPointerUp={(e)=>{isDraggingMiniMap.current=false;(e.target as HTMLElement).releasePointerCapture(e.pointerId);}} onPointerLeave={(e)=>{isDraggingMiniMap.current=false;(e.target as HTMLElement).releasePointerCapture(e.pointerId);}}
        >
          <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none z-0"><span className="text-[10px] text-gray-500 font-mono font-bold">0 AD</span><span className="text-[10px] text-gray-500 font-mono font-bold">2100</span></div>
          <div className="absolute top-0 bottom-0 bg-blue-600 border-x border-white/20 z-10 cursor-grab active:cursor-grabbing hover:bg-blue-500 transition-colors rounded-sm shadow-lg pointer-events-none" style={{ left: `${(scrollLeft / (totalContentWidth||1)) * 100}%`, width: `${Math.min(100, (containerWidth / (totalContentWidth||1)) * 100)}%` }} />
        </div>
      </div>

      {/* TIMELINE */}
      <div className="container mx-auto w-full max-w-[98%] lg:max-w-7xl flex-1 flex flex-col min-h-[60vh]">
        <div className="relative w-full h-full flex-1 border border-gray-700 rounded-xl bg-[#080808] shadow-2xl overflow-hidden flex flex-col select-none">
          <div 
            className="flex-1 w-full overflow-x-auto overflow-y-auto relative timeline-scrollbar cursor-grab active:cursor-grabbing" 
            ref={scrollContainerRef} 
            onScroll={handleMainScroll}
            onMouseDown={handleTimelineMouseDown}
            onMouseMove={handleTimelineMouseMove}
            onMouseUp={handleTimelineMouseUp}
            onMouseLeave={handleTimelineMouseLeave}
            style={{ scrollBehavior: 'auto', touchAction: 'auto' }}
          >
            <div className="relative" style={{ width: `${totalContentWidth}px`, height: '100%', minHeight: `${containerStyleHeight}px` }}>
              <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px)`, backgroundSize: `${100 * pixelsPerYear}px 100%` }} />
              
              {/* Sticky Top Axis - Reduced to Z-20 */}
              <div className="sticky top-0 left-0 right-0 h-12 border-b border-gray-800 bg-[#0a0a0a]/95 backdrop-blur-md z-20 flex items-end shadow-md pointer-events-none">
                 {ticks.map(year => (
                   <div key={year} className="absolute bottom-0 flex flex-col items-center" style={{ left: `${(year - DATA_START_YEAR) * pixelsPerYear}px` }}>
                     <div className="h-3 w-px bg-gray-500" />
                     <span className="text-xs text-gray-400 font-mono mb-1 transform -translate-x-1/2">{year}</span>
                   </div>
                 ))}
              </div>
              <div className="sticky top-12 left-0 right-0 h-0.5 bg-blue-600/50 shadow-[0_0_10px_rgba(37,99,235,0.5)] z-20 pointer-events-none" />

              <div className="absolute top-16 left-0 right-0 bottom-4">
                {positionedEvents.length === 0 && <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500 text-lg">No events match the selected filters.</div>}
                {positionedEvents.map((event) => {
                    const colors = getColors(event.type);
                    const isHighlighted = searchTags.some(t => t.kind === 'event' && t.id === event.id);
                    return (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} 
                            whileHover={{ scale: 1.02, zIndex: 15 }}
                            onClick={() => setSelectedEvent(event as TimelineEvent)}
                            className={cn(
                              "absolute rounded-lg border flex flex-col cursor-pointer shadow-lg transition-all z-10 event-card", 
                              isHighlighted ? "ring-2 ring-white shadow-white/20" : "", 
                              isMobile ? "px-1.5 py-0.5 justify-start overflow-hidden" : "px-4 justify-center", 
                              colors.bg, colors.border, colors.hover
                            )}
                            style={{ left: `${event.x}px`, width: `${event.width}px`, top: `${event.lane * (currentLaneHeight + currentEventGap)}px`, height: `${currentLaneHeight}px` }}
                        >
                            <div className="flex items-start gap-2 h-full">
                                <span className="shrink-0 mt-0.5 hidden md:block">{getIcon(event.type)}</span>
                                <div className="flex flex-col min-w-0 justify-center h-full">
                                    <span className={cn(
                                      "text-white shadow-black drop-shadow-md", 
                                      isMobile 
                                        ? "text-[8px] font-medium leading-[9px] tracking-tight whitespace-normal" 
                                        : "font-bold leading-tight " + (currentLaneHeight < 60 ? "text-xs line-clamp-2" : "text-sm line-clamp-2")
                                    )}>
                                        {event.name[language]}
                                    </span>
                                    {!isMobile && currentLaneHeight > 35 && <span className="truncate text-white/80 mt-0.5 text-[10px]">{event.startYear} {event.endYear && event.endYear !== event.startYear ? `- ${event.endYear}` : ''}</span>}
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 h-1 w-full bg-black/20" />
                        </motion.div>
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedEvent(null)}>
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="bg-[#111] border border-gray-700 rounded-2xl w-[90%] max-w-md shadow-2xl overflow-hidden relative">
              <div className={cn("h-32 relative flex items-end p-6 border-b", getColors(selectedEvent.type).bg, getColors(selectedEvent.type).border)}>
                <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-4 bg-black/40 hover:bg-black/70 rounded-full p-2 text-white transition-colors z-50"><X size={20} /></button>
                <div className="relative z-10 w-full"><div className="text-xs uppercase tracking-widest font-bold mb-2 flex items-center gap-2 text-white/90">{getIcon(selectedEvent.type)} {selectedEvent.type}</div><h2 className="text-3xl font-bold text-white leading-none">{selectedEvent.name[language]}</h2></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6 text-gray-400 font-mono text-sm border-b border-gray-800 pb-4"><span className="text-white">Duration:</span>{selectedEvent.startYear} {selectedEvent.endYear && selectedEvent.endYear !== selectedEvent.startYear ? ` - ${selectedEvent.endYear}` : ''} AD</div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">{selectedEvent.description[language]}</p>
                {selectedEvent.details && <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800 text-sm text-gray-400 leading-relaxed">{selectedEvent.details[language]}</div>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
