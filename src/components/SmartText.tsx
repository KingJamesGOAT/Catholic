import React, { useMemo } from 'react';
import { glossaryTerms } from '../lib/i18n/glossaryData'; 
import { useLanguage } from '../lib/i18n/LanguageContext';
import GlossaryTooltip from './GlossaryTooltip';

// --- EXTENDED BLOCKLIST ---
// These words will NEVER be highlighted/defined.
const GLOBAL_IGNORED_TERMS = [
  // --- Deity & Holy Figures ---
  "God", "Lord", "Almighty", "Creator", "Father", "Son", "Holy Spirit", "Spirit", "Trinity",
  "Jesus", "Christ", "Messiah", "Savior", "Redeemer", "Lamb of God", "Good Shepherd",
  "Mary", "Virgin Mary", "Mother of God", "Joseph", "Saint Joseph", "Holy Family",
  "Angel", "Archangel", "Guardian Angel", "Saint", "Martyr", "Prophet", "Apostle", "Disciple", "Evangelist",

  // --- Common Biblical Names ---
  "Adam", "Eve", "Noah", "Abraham", "Isaac", "Jacob", "Moses", "Aaron", "David", "Solomon", "Elijah",
  "Peter", "Paul", "John", "James", "Andrew", "Philip", "Thomas", "Matthew", "Bartholomew", 
  "Simon", "Jude", "Judas", "Matthias", "Mark", "Luke", "Timothy", "Titus", "Barnabas", "Stephen",

  // --- Scripture & Texts ---
  "Bible", "Scripture", "Holy Scripture", "Word of God", "Old Testament", "New Testament",
  "Gospel", "Epistle", "Letter", "Psalm", "Proverb", "Revelation", "Chapter", "Verse", "Text",

  // --- Church Structure & Roles ---
  "Church", "Catholic", "Roman Catholic", "Christian", "Christianity", "Protestant", "Protestantism", "Orthodox",
  "Pope", "Papacy", "Cardinal", "Bishop", "Archbishop", "Priest", "Deacon", "Clergy", "Laity", "Layperson",
  "Monk", "Nun", "Sister", "Brother", "Friar", "Abbot", "Abbess", "Superior",
  "Diocese", "Parish", "Vatican", "Holy See", "Rome", "Magisterium", "Hierarchy",

  // --- Liturgy & Sacraments (Common Terms) ---
  "Mass", "Liturgy", "Service", "Rite", "Ritual", "Ceremony", "Celebration",
  "Sacrament", "Baptism", "Confirmation", "Eucharist", "Communion", "Holy Communion",
  "Confession", "Penance", "Reconciliation", "Matrimony", "Marriage", "Holy Orders", "Ordination",
  "Anointing", "Blessing", "Benediction", "Consecration", "Dedication",
  "Prayer", "Pray", "Worship", "Adoration", "Praise", "Thanksgiving", "Petition", "Intercession",
  "Homily", "Sermon", "Preaching", "Reading", "Gospel Reading", "Sign of the Cross", "Amen", "Alleluia",

  // --- Theological Concepts (Common) ---
  "Faith", "Hope", "Charity", "Love", "Grace", "Mercy", "Justice", "Peace", "Joy",
  "Salvation", "Redemption", "Justification", "Sanctification", "Holiness", "Glory",
  "Sin", "Evil", "Devil", "Satan", "Demon", "Hell", "Purgatory", "Heaven", "Paradise", "Kingdom of God",
  "Life", "Death", "Eternal Life", "Resurrection", "Ascension", "Incarnation", "Virgin Birth",
  "Soul", "Body", "Spirit", "Flesh", "Heart", "Mind", "Conscience", "Free Will", "Reason", "Will",
  "Truth", "Wisdom", "Knowledge", "Understanding", "Mystery", "Miracle", "Sign", "Symbol",
  "Covenant", "Commandment", "Law", "Gospel", "Doctrine", "Dogma", "Teaching", "Tradition",
  "Virtue", "Vice", "Good", "Bad", "Right", "Wrong", "Moral", "Morality", "Ethics",

  // --- Objects & Places ---
  "Cross", "Crucifix", "Rosary", "Altar", "Tabernacle", "Sanctuary", "Nave", "Choir",
  "Cathedral", "Basilica", "Chapel", "Shrine", "Temple", "Synagogue",
  "Bread", "Wine", "Body and Blood", "Host", "Chalice", "Candle", "Incense", "Holy Water",
  "Vestment", "Robes", "Image", "Statue", "Icon", "Painting", "Book",

  // --- Seasons & Days ---
  "Advent", "Christmas", "Lent", "Easter", "Pentecost", "Sunday", "Sabbath", "Holy Week", "Good Friday",

  // --- General/Abstract ---
  "Religion", "Religious", "Spiritual", "Spirituality", "Divine", "Human", "Natural", "Supernatural",
  "World", "Creation", "Universe", "Earth", "Man", "Woman", "Child", "Family", "Community", "Society",
  "History", "Historical", "Tradition", "Traditional", "Modern", "Ancient",
  "Time", "Eternity", "Beginning", "End", "Alpha", "Omega", "Light", "Darkness"
];

interface SmartTextProps {
  children: React.ReactNode;
  ignore?: string[]; // Optional: Pass specific words to ignore on a specific page
}

export default function SmartText({ children, ignore = [] }: SmartTextProps) {
  const { language } = useLanguage();

  // 1. Prepare the map of terms for the current language
  const termsMap = useMemo(() => {
    const map = new Map();
    
    // Combine global blocklist with any local page-specific ignores
    // We convert to lowercase for case-insensitive comparison
    const blocklist = new Set(
      [...GLOBAL_IGNORED_TERMS, ...ignore].map(w => w.toLowerCase())
    );
    
    // SAFETY FIX: Filter out any undefined/empty items from the data first
    const validTerms = glossaryTerms.filter(item => item && item.term);

    // We sort terms by length (Longest -> Shortest).
    // Why? So we match "Hypostatic Union" before we match just "Union" (if "Union" was a term).
    validTerms.sort((a, b) => {
      const getLen = (item: any) => {
        const t = item.term[language] || item.term['en'] || '';
        return t.length;
      };
      return getLen(b) - getLen(a);
    });

    validTerms.forEach(term => {
      // Get the term in the current language (or fallback to English)
      // Using 'any' casting for safety with dynamic keys
      const termObj = term.term as any;
      const text = termObj[language] || termObj['en'];
      
      if (text) {
        const lowerText = text.toLowerCase();
        // Only add if it's NOT in our blocklist
        if (!blocklist.has(lowerText)) {
           map.set(lowerText, term);
        }
      }
    });
    return map;
  }, [language, ignore]);

  // 2. Recursive function to process text nodes within React children
  const processText = (text: string): React.ReactNode[] => {
    if (!text) return [text];

    // Create a regex pattern from all glossary keys
    // We escape special regex characters to prevent errors
    const keys = Array.from(termsMap.keys());
    if (keys.length === 0) return [text];

    const termsPattern = keys.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    
    // Match whole words only (\b)
    const regex = new RegExp(`\\b(${termsPattern})\\b`, 'gi');
    
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const lowerPart = part.toLowerCase();
      const termData = termsMap.get(lowerPart);

      if (termData) {
        return (
          <GlossaryTooltip 
            key={`${part}-${index}`} 
            word={part} 
            termData={termData} 
          />
        );
      }
      return part;
    });
  };

  // 3. Helper to traverse the React Component tree
  // This ensures we only replace text inside strings, not breaking other HTML/Components
  const traverse = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === 'string') {
      return processText(node);
    }
    
    if (Array.isArray(node)) {
      return node.map((child, i) => <span key={i}>{traverse(child)}</span>);
    }

    if (typeof node === 'object' && node !== null && 'props' in node) {
      const element = node as React.ReactElement;
      // If the element has children, process them recursively
      if (element.props && element.props.children) {
        return React.cloneElement(element, {
          ...element.props,
          children: traverse(element.props.children)
        });
      }
    }

    return node;
  };

  // 4. Run the processor
  return <>{traverse(children)}</>;
}