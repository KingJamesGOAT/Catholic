import { useState, useEffect } from "react";
import { Command as CommandPrimitive } from "cmdk";
import { 
  Command, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem 
} from "./ui/command";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { glossaryTerms } from "../lib/i18n/glossaryData";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { translations, t } from "../lib/i18n/translations";
import { Book, ArrowLeft, Search } from "lucide-react";
import { useIsMobile } from "./ui/use-mobile";

interface GlossarySearchProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function GlossarySearch({ open, setOpen }: GlossarySearchProps) {
  const { language } = useLanguage();
  const trans = translations;
  const isMobile = useIsMobile();

  const allTerms = glossaryTerms || [];

  const terms = allTerms.map(item => ({
    id: item.id,
    term: item.term[language as keyof typeof item.term] || item.term['en'],
    definition: item.definition[language as keyof typeof item.definition] || item.definition['en']
  }));

  const [selectedTerm, setSelectedTerm] = useState<typeof terms[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setSelectedTerm(null);
        setSearchQuery("");
      }, 300);
    }
  }, [open]);

  // Dynamic limit: 1 for mobile, 3 for desktop/tablet
  const resultLimit = isMobile ? 1 : 3;

  const filteredTerms = searchQuery.length > 0
    ? terms.filter((item) =>
        item.term.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, resultLimit)
    : [];

  // Dynamic Mobile Classes
  // Definition View (Mobile): Center screen, auto height (fits content perfectly), max height constraint
  // Search View (Mobile): Top of screen (avoid keyboard), fixed compact height
  const mobileClasses = selectedTerm 
    ? "top-[50%] translate-y-[-50%] h-auto max-h-[80vh]" 
    : "top-[8vh] translate-y-0 h-[200px]";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className={`
        fixed left-[50%] translate-x-[-50%] 
        bg-gray-950/80 backdrop-blur-xl border-4 border-blue-800 rounded-3xl 
        p-0 overflow-hidden shadow-2xl shadow-black/50 
        w-[90vw] sm:max-w-xl gap-0 ring-0 outline-none 
        
        /* Animation: Only fade/zoom on entry/exit. 
           Transition is removed to prevent "sliding" when switching between search/definition modes. */
        data-[state=open]:animate-in data-[state=closed]:animate-out 
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
        data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
        duration-200

        /* Mobile Dynamic Positioning */
        ${mobileClasses}

        /* Desktop Overrides: Always centered, fixed height */
        md:top-[50%] md:translate-y-[-50%] md:h-[350px]
      `}>
        <DialogTitle className="sr-only">{t(trans.glossary.title, language)}</DialogTitle>

        <Command shouldFilter={false} className="bg-transparent h-full w-full rounded-none flex flex-col">
          
          {selectedTerm ? (
            // --- DEFINITION VIEW ---
            <div className="flex flex-col h-full bg-transparent p-6 md:p-8 animate-in fade-in duration-300">
              <button
                onClick={() => setSelectedTerm(null)}
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 mb-4 transition-colors w-fit group shrink-0"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                {t(trans.glossary.searchPlaceholder, language)}
              </button>
              
              <div className="space-y-4 overflow-y-auto custom-scrollbar pr-2">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-xl bg-blue-900/20 border border-blue-800/50 shrink-0">
                    <Book className="text-blue-500" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {selectedTerm.term}
                  </h3>
                </div>
                
                <div className="h-px w-full bg-blue-900/50 shrink-0" />
                
                <p className="text-gray-300 text-base leading-relaxed">
                  {selectedTerm.definition}
                </p>
              </div>
            </div>
          ) : (
            // --- SEARCH LIST VIEW ---
            // CHANGED: bg-gray-950 -> bg-transparent
            <div className="flex flex-col w-full h-full bg-transparent">
              
              <div className="flex items-center px-6 py-4 border-b border-blue-900/30 shrink-0">
                <Search className="text-blue-600 shrink-0 mr-4" size={24} />
                
                <CommandPrimitive.Input
                  placeholder={t(trans.glossary.searchPlaceholder, language)}
                  className="flex-1 h-10 bg-transparent text-lg text-white placeholder:text-gray-500 outline-none border-none ring-0"
                  value={searchQuery}
                  onValueChange={setSearchQuery}
                />
              </div>

              <CommandList className="bg-gray-950 p-2 h-full overflow-y-auto custom-scrollbar">
                {searchQuery.length > 0 && (
                  <>
                    {filteredTerms.length === 0 ? (
                      <CommandEmpty className="py-6 text-center text-gray-500 h-full flex items-center justify-center">
                        {t(trans.glossary.noResults, language)}
                      </CommandEmpty>
                    ) : (
                      <CommandGroup 
                        heading={isMobile ? "" : t(trans.glossary.title, language)} 
                        className={`text-gray-500 px-2 py-2 ${isMobile ? '[&_[cmdk-group-heading]]:hidden' : ''}`}
                      >
                        {filteredTerms.map((item) => (
                          <CommandItem
                            key={item.id}
                            value={item.term}
                            onSelect={() => setSelectedTerm(item)}
                            className="flex items-center gap-4 p-4 cursor-pointer rounded-xl transition-all data-[selected=true]:bg-blue-900/40 data-[selected=true]:text-white text-gray-300 mb-1"
                          >
                            <Book className="w-5 h-5 text-blue-600 opacity-70 shrink-0" />
                            <span className="font-medium text-lg truncate">{item.term}</span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    )}
                  </>
                )}
              </CommandList>
            </div>
          )}
        </Command>
      </DialogContent>
    </Dialog>
  );
}