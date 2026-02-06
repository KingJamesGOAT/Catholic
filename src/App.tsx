import {
  useState,
  useEffect,
  useRef,
  lazy,
  Suspense,
} from "react";
import AboutOverlay from "./components/AboutOverlay";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/Journey/Navigation";
import ProgressTracker from "./components/Journey/ProgressTracker";
import TopicTransition from "./components/Journey/TopicTransition";
import { Toaster } from "./components/ui/sonner";
import {
  LanguageProvider,
  useLanguage,
} from "./lib/i18n/LanguageContext";
import { translations, t } from "./lib/i18n/translations";
import { useIsMobile } from "./components/ui/use-mobile";
import GlossarySearch from "./components/GlossarySearch";
import { Button } from "./components/ui/button";

// ------------------------------------------------------------------
// 1. OPTIMIZATION: Define Loaders so we can preload them manually
// ------------------------------------------------------------------

// Main Views Loaders
const loadHome = () => import("./components/Home");
const loadEarlyChurch = () => import("./components/EarlyChurch");
const loadScience = () => import("./components/ScienceAndMiracles");
const loadGlossary = () => import("./components/GlossaryPage");
const loadDoctrine = () => import("./components/DoctrineExplorer");
const loadTLM = () => import("./components/TraditionalLatinMass");
const loadReformation = () => import("./components/ReformationHistory"); // NEW

// Topic Loaders
const loadExistenceOfGod = () => import("./components/Topics/ExistenceOfGod");
const loadProofOfResurrection = () => import("./components/Topics/ProofOfResurrection");
const loadWhyBeCatholic = () => import("./components/Topics/WhyBeCatholic");
const loadYouLoseSoIWin = () => import("./components/Topics/YouLoseSoIWinFallacy");
const loadAuthorityDilemma = () => import("./components/Topics/AuthorityDilemmaFallacy");
const loadWhyNotSola = () => import("./components/Topics/WhyNotSolaScriptura");
const loadScholastic = () => import("./components/Topics/ScholasticApproaches");
const loadSolaImpossible = () => import("./components/Topics/SolaScripturaImpossible");
const loadCanonDilemma = () => import("./components/Topics/CanonDilemma");
const load73Books = () => import("./components/Topics/SeventyThreeBooks");
const loadPeterFirstPope = () => import("./components/Topics/PeterFirstPope");
const loadMagisterium = () => import("./components/Topics/Magisterium");
const loadWhatIsWorship = () => import("./components/Topics/WhatIsWorship");
const loadMarianDogma = () => import("./components/Topics/MarianDogma");
const loadNoFilioque = () => import("./components/Topics/NoFilioque");

// ------------------------------------------------------------------
// 2. Lazy Components (Using the loaders)
// ------------------------------------------------------------------
const Home = lazy(loadHome);
const EarlyChurch = lazy(loadEarlyChurch);
const ScienceAndMiracles = lazy(loadScience);
const GlossaryPage = lazy(loadGlossary);
const DoctrineExplorer = lazy(loadDoctrine);
const TraditionalLatinMass = lazy(loadTLM);
const ReformationHistory = lazy(loadReformation); // NEW
const HistoryTimeline = lazy(() => import("./components/HistoryTimeline"));

const ExistenceOfGod = lazy(loadExistenceOfGod);
const ProofOfResurrection = lazy(loadProofOfResurrection);
const WhyBeCatholic = lazy(loadWhyBeCatholic);
const YouLoseSoIWinFallacy = lazy(loadYouLoseSoIWin);
const AuthorityDilemmaFallacy = lazy(loadAuthorityDilemma);
const WhyNotSolaScriptura = lazy(loadWhyNotSola);
const ScholasticApproaches = lazy(loadScholastic);
const SolaScripturaImpossible = lazy(loadSolaImpossible);
const CanonDilemma = lazy(loadCanonDilemma);
const SeventyThreeBooks = lazy(load73Books);
const PeterFirstPope = lazy(loadPeterFirstPope);
const Magisterium = lazy(loadMagisterium);
const WhatIsWorship = lazy(loadWhatIsWorship);
const MarianDogma = lazy(loadMarianDogma);
const NoFilioque = lazy(loadNoFilioque);

type TopicComponentProps = {
  onComplete?: () => void;
  onScienceClick?: () => void;
  onReformationClick?: () => void; // Added this
};

export interface Topic {
  id: string;
  title: string;
  shortTitle: string;
  component: React.ComponentType<TopicComponentProps>;
  transition?: string;
  preload: () => Promise<any>; // Added preload function to interface
}

export const topics: Topic[] = [
  {
    id: "existence-of-god",
    title: "Existence of God",
    shortTitle: "God Exists",
    component: ExistenceOfGod,
    preload: loadExistenceOfGod,
    transition:
      "Having explored the evidence for God's existence, let's turn to the most pivotal event in history...",
  },
  {
    id: "proof-of-resurrection",
    title: "Proof of the Resurrection",
    shortTitle: "The Resurrection",
    component: ProofOfResurrection,
    preload: loadProofOfResurrection,
    transition:
      "Now that we've seen the historical evidence for Christ's resurrection, the question becomes: which Christian tradition most faithfully preserves His teaching?",
  },
  {
    id: "why-be-catholic",
    title: "Why Be Catholic?",
    shortTitle: "Why Catholic",
    component: WhyBeCatholic,
    preload: loadWhyBeCatholic,
    transition:
      "Before we dive deeper into Catholic teaching, let's address some common logical fallacies in theological debates...",
  },
  {
    id: "you-lose-so-i-win",
    title: 'The "You Lose, So I Win" Fallacy',
    shortTitle: "Logical Fallacies",
    component: YouLoseSoIWinFallacy,
    preload: loadYouLoseSoIWin,
    transition:
      "Understanding this fallacy helps us recognize another common error in discussions of religious authority...",
  },
  {
    id: "authority-dilemma",
    title: "The Authority Dilemma Fallacy",
    shortTitle: "Authority Dilemma",
    component: AuthorityDilemmaFallacy,
    preload: loadAuthorityDilemma,
    transition:
      "This brings us to one of the most debated topics between Catholics and Protestants: the doctrine of Scripture alone...",
  },
  {
    id: "why-not-sola-scriptura",
    title: "Why Not Sola Scriptura?",
    shortTitle: "Against Sola Scriptura",
    component: WhyNotSolaScriptura,
    preload: loadWhyNotSola,
    transition:
      "Let's see how great thinkers throughout history have approached this question...",
  },
  {
    id: "scholastic-approaches",
    title: "Scholastic Approaches to Sola Scriptura",
    shortTitle: "Scholastic Views",
    component: ScholasticApproaches,
    preload: loadScholastic,
    transition:
      "These theological perspectives lead us to a profound conclusion about Scripture alone...",
  },
  {
    id: "sola-scriptura-impossible",
    title: "Sola Scriptura is Impossible",
    shortTitle: "Impossibility of Sola Scriptura",
    component: SolaScripturaImpossible,
    preload: loadSolaImpossible,
    transition:
      "If the Bible alone isn't sufficient, this raises a crucial question: how do we even know which books belong in the Bible?",
  },
  {
    id: "canon-dilemma",
    title: "The Canon Dilemma",
    shortTitle: "Canon Question",
    component: CanonDilemma,
    preload: loadCanonDilemma,
    transition:
      "The issue of the biblical canon brings us to an important difference between Catholic and Protestant Bibles...",
  },
  {
    id: "73-books",
    title: "73 Books?",
    shortTitle: "73 Books",
    component: SeventyThreeBooks,
    preload: load73Books,
    transition:
      "Understanding the fullness of Scripture leads us back to the question of authority. Who has the right to teach in Christ's name?",
  },
  {
    id: "peter-first-pope",
    title: "Was Peter the First Pope?",
    shortTitle: "Peter & Papacy",
    component: PeterFirstPope,
    preload: loadPeterFirstPope,
    transition:
      "Peter's role as the first pope leads us to understand the broader teaching authority of the Church...",
  },
  {
    id: "magisterium",
    title: "The Magisterium",
    shortTitle: "Church Authority",
    component: Magisterium,
    preload: loadMagisterium,
    transition:
      "The Magisterium preserves essential doctrines, including ones that define our understanding of God Himself...",
  },
  {
    id: "what-is-worship",
    title: "What is Worship?",
    shortTitle: "What is Worship?",
    component: WhatIsWorship,
    preload: loadWhatIsWorship,
    transition:
      "Having established that true worship (latria) belongs to God alone, we can now ask: what about the honor we give to saints, and especially to Mary?",
  },
  {
    id: "marian-dogma",
    title: "Marian Dogma",
    shortTitle: "Marian Dogma",
    component: MarianDogma,
    preload: loadMarianDogma,
    transition:
      "From the visible mother of the Church, we now turn our gaze to the invisible mystery of the Trinity and the Holy Spirit...",
  },
  {
    id: "no-filioque",
    title: "No Filioque? No Trinity.",
    shortTitle: "Filioque & Trinity",
    component: NoFilioque,
    preload: loadNoFilioque,
  },
];

// Define the possible views for the application
type View =
  | "home"
  | "topic"
  | "early-church"
  | "science"
  | "glossary"
  | "doctrine"
  | "tlm"
  | "reformation" // NEW
  | "timeline"; // <--- Add this

function AppContent() {
  // Core State
  const [currentView, setCurrentView] = useState<View>("home");
  const [currentTopicIndex, setCurrentTopicIndex] = useState(-1);

  // Navigation & Progress State
  const [showTransition, setShowTransition] = useState(false);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [completedTopics, setCompletedTopics] = useState<Set<number>>(new Set());

  // Command Palette State
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { language } = useLanguage();
  const trans = translations;
  const isMobile = useIsMobile();
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ------------------------------------------------------------------
  // PRELOAD LOGIC
  // ------------------------------------------------------------------
  
  // Helper to preload a specific topic by index
  const preloadTopic = (index: number) => {
    if (index >= 0 && index < topics.length) {
      topics[index].preload();
    }
  };


  
  // Preload Heavy Pages and First Topic on Mount
  useEffect(() => {
    // 1. If on Home, preload the first topic immediately
    if (currentView === "home") {
      preloadTopic(0);
    }

    // 2. Preload major sections in the background (1 second delay)
    const heavyTimer = setTimeout(() => {
      loadEarlyChurch();
      loadScience();
      loadTLM();
      loadDoctrine();
      loadReformation(); 
    }, 1000);

    // 3. BACKGROUND PRELOAD ALL TOPICS (4 second delay)
    // This downloads every topic one by one so they are ready before the user clicks.
    const allTopicsTimer = setTimeout(() => {
      topics.forEach((topic, index) => {
         setTimeout(() => {
           topic.preload();
         }, index * 200); // Stagger downloads (200ms apart) to prevent freezing
      });
    }, 4000);

    return () => {
      clearTimeout(heavyTimer);
      clearTimeout(allTopicsTimer);
    };
  }, []);


  

  // ------------------------------------------------------------------
  // HELPER: Sync State with URL (Deep Linking)
  // ------------------------------------------------------------------
  const updateURL = (view: View, topicId?: string) => {
    const params = new URLSearchParams();
    if (view !== "home") {
      params.set("view", view);
    }
    if (view === "topic" && topicId) {
      params.set("topic", topicId);
    }
    const queryString = params.toString();
    const newUrl = queryString ? `?${queryString}` : window.location.pathname;
    window.history.pushState({}, "", newUrl);
  };

  const handleHoverStart = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsHovering(true);
  };

  const handleHoverEnd = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const isProgressVisible =
    (currentView === "home" || currentView === "topic") &&
    (isMobile || currentView === "home" || isHovering);

  // ------------------------------------------------------------------
  // 1. INITIALIZATION: Load from URL (Priority) + Local Storage (Backup)
  // ------------------------------------------------------------------
  useEffect(() => {
    const saved = localStorage.getItem("journey-progress");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.completed) {
        setCompletedTopics(new Set(parsed.completed));
      }
    }

    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get("view") as View;
    const topicParam = params.get("topic");

    if (viewParam) {
      setCurrentView(viewParam);
      if (viewParam === "topic" && topicParam) {
        const idx = topics.findIndex((t) => t.id === topicParam);
        if (idx !== -1) {
          setCurrentTopicIndex(idx);
        }
      }
    } else {
      setCurrentView("home");
      setCurrentTopicIndex(-1);
    }
  }, []);

  // ------------------------------------------------------------------
  // 2. LISTEN FOR BACK BUTTON (PopState)
  // ------------------------------------------------------------------
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const view = (params.get("view") as View) || "home";
      const topicId = params.get("topic");

      setCurrentView(view);

      if (view === "topic" && topicId) {
        const idx = topics.findIndex((t) => t.id === topicId);
        if (idx !== -1) setCurrentTopicIndex(idx);
      } else {
        setCurrentTopicIndex(-1);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // 3. Save Progress
  useEffect(() => {
    localStorage.setItem(
      "journey-progress",
      JSON.stringify({
        index: currentTopicIndex,
        completed: Array.from(completedTopics),
        view: currentView,
      })
    );
  }, [currentTopicIndex, completedTopics, currentView]);

  // 4. Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentView !== "topic" || isSearchOpen) return;
      if (e.key === "ArrowRight") nextTopic();
      else if (e.key === "ArrowLeft") previousTopic();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentTopicIndex, currentView, isSearchOpen]);

  // 5. Dynamic Document Titles
  useEffect(() => {
    switch (currentView) {
      case "home":
        document.title = "Catholic Route | Apologetics & Faith Journey";
        break;
      case "early-church":
        document.title = "Early Church Fathers | Catholic Route";
        break;
      case "science":
        document.title = "Science & Miracles | Catholic Route";
        break;
      case "glossary":
        document.title = "Catholic Glossary | Catholic Route";
        break;
      case "doctrine":
        document.title = "Doctrine Explorer | Catholic Route";
        break;
      case "tlm":
        document.title = "The Latin Mass | Catholic Route";
        break;
      case "reformation": // NEW
        document.title = "Reformation History | Catholic Route";
        break;
      case "topic":
        if (currentTopicIndex >= 0 && topics[currentTopicIndex]) {
          document.title = `${topics[currentTopicIndex].title} | Catholic Route`;
        }
        break;
      default:
        document.title = "Catholic Route";
    }
  }, [currentTopicIndex, currentView]);

  // ------------------------------------------------------------------
  // NAVIGATION HANDLERS
  // ------------------------------------------------------------------

  const handleViewChange = (view: View) => {
    // If navigating to a major page, trigger its loader specifically just in case
    if (view === 'early-church') loadEarlyChurch();
    if (view === 'science') loadScience();
    if (view === 'doctrine') loadDoctrine();
    if (view === 'tlm') loadTLM();
    if (view === 'glossary') loadGlossary();
    if (view === 'reformation') loadReformation(); // NEW

    setCurrentView(view);
    updateURL(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToTopic = (index: number) => {
    if (index === currentTopicIndex && currentView === "topic") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Preload the target topic immediately
    preloadTopic(index);

    setDirection(index > currentTopicIndex ? "forward" : "backward");

    if (index > currentTopicIndex) {
      setCompletedTopics((prev) => new Set([...prev, currentTopicIndex]));
    }

    setCurrentTopicIndex(index);
    setCurrentView("topic");

    if (topics[index]) {
      updateURL("topic", topics[index].id);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const markCurrentTopicComplete = () => {
    setCompletedTopics((prev) => new Set([...prev, currentTopicIndex]));
  };

  const nextTopic = () => {
    markCurrentTopicComplete();
    if (currentTopicIndex < topics.length - 1) {
      const nextIndex = currentTopicIndex + 1;
      
      // 1. TRIGGER PRELOAD IMMEDIATELY
      preloadTopic(nextIndex);

      if (topics[currentTopicIndex].transition) {
        setShowTransition(true);
        setTimeout(() => {
          setShowTransition(false);
          goToTopic(nextIndex);
        }, 3000); // During this 3s wait, the next page is loading!
      } else {
        goToTopic(nextIndex);
      }
    }
  };

  const previousTopic = () => {
    if (currentTopicIndex > 0) {
      goToTopic(currentTopicIndex - 1);
    }
  };

  const BlankTopic: React.ComponentType<TopicComponentProps> = () => null;
  const CurrentTopicComponent =
    currentTopicIndex >= 0 ? topics[currentTopicIndex].component : BlankTopic;

  const startJourney = () => {
    preloadTopic(0);
    setCurrentTopicIndex(0);
    setCurrentView("topic");
    if (topics[0]) {
      updateURL("topic", topics[0].id);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- ADD THIS ---
  const handleTimelineClick = () => {
    handleViewChange("timeline");
  };
  // ----------------

  const handleBackToHome = () => {
    setCurrentTopicIndex(-1);
    handleViewChange("home");
  };

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      <GlossarySearch open={isSearchOpen} setOpen={setIsSearchOpen} />

      <Navigation
        currentTopicIndex={currentTopicIndex}
        onNavigate={goToTopic}
        completedTopics={completedTopics}
        onEarlyChurchClick={() => handleViewChange("early-church")}
        onScienceClick={() => handleViewChange("science")}
        onGlossaryClick={() => handleViewChange("glossary")}
        onDoctrineClick={() => handleViewChange("doctrine")}
        onTLMClick={() => handleViewChange("tlm")}
        onReformationClick={() => handleViewChange("reformation")} // NEW

        // --- ADD THESE TWO LINES ---
        onTimelineClick={handleTimelineClick}
        showTimeline={currentView === "timeline"}
        // ---------------------------


        onLogoClick={handleBackToHome}
        onSearchClick={() => setIsSearchOpen(true)}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        isSpecialPage={currentView !== "topic"}
        showEarlyChurch={currentView === "early-church"}
        showScience={currentView === "science"}
        showGlossary={currentView === "glossary"}
        showDoctrine={currentView === "doctrine"}
        showTLM={currentView === "tlm"}
        showReformation={currentView === "reformation"} // NEW
      />

      {/* PASS PRELOAD HANDLER TO PROGRESS TRACKER */}
      <ProgressTracker
        currentIndex={currentView === "home" ? -1 : currentTopicIndex}
        total={topics.length}
        completedTopics={completedTopics}
        isVisible={isProgressVisible}
        onNavigate={goToTopic}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        // @ts-ignore - You will update ProgressTracker next
        onPreloadTopic={preloadTopic} 
      />

      <Suspense
        fallback={
          <div className="min-h-[80vh] flex items-center justify-center text-gray-400">
            Loading...
          </div>
        }
      >
        {currentView === "home" && <Home onStart={startJourney} />}
        {currentView === "early-church" && <EarlyChurch />}
        {currentView === "science" && <ScienceAndMiracles />}
        {currentView === "glossary" && <GlossaryPage />}
        {currentView === "doctrine" && <DoctrineExplorer />}
        {currentView === "tlm" && <TraditionalLatinMass />}
        {currentView === "reformation" && <ReformationHistory />} {/* NEW */}

        {/* --- ADD THIS BLOCK --- */}
        {currentView === "timeline" && <HistoryTimeline />}
        {/* ---------------------- */}
        
      </Suspense>

      {currentView === "topic" && currentTopicIndex >= 0 && (
        <AnimatePresence mode="wait">
          {showTransition ? (
            <TopicTransition
              key="transition"
              message={
                topics[currentTopicIndex].transition
                  ? t(
                      trans.topicTransitions[
                        topics[currentTopicIndex]
                          .id as keyof typeof trans.topicTransitions
                      ],
                      language
                    )
                  : ""
              }
            />
          ) : (


          
          <motion.main
              key={currentTopicIndex}
              // MODIFIED: If mobile, start at x:0 (no slide). If desktop, slide 100px.
              initial={{ 
                opacity: 0, 
                x: isMobile ? 0 : (direction === "forward" ? 100 : -100) 
              }}
              animate={{
                opacity: 1,
                x: 0,
                paddingTop: isProgressVisible
                  ? isMobile
                    ? "100px"
                    : "200px"
                  : "80px",
              }}
              // MODIFIED: If mobile, exit at x:0 (fade only). If desktop, slide away.
              exit={{ 
                opacity: 0, 
                x: isMobile ? 0 : (direction === "forward" ? -100 : 100) 
              }}
              transition={{
                opacity: { duration: 0.3 }, 
                // MODIFIED: If mobile, duration is 0 (Instant/No Slide). Desktop gets 0.5s.
                x: { duration: isMobile ? 0 : 0.5 },
                paddingTop: { duration: 0.3, ease: "easeInOut" },
              }}
            >



              
              <Suspense
                fallback={
                  <div className="min-h-[50vh] flex items-center justify-center">
                    Loading...
                  </div>
                }
              >
                
                <CurrentTopicComponent
                  onComplete={markCurrentTopicComplete}
                  onScienceClick={() => handleViewChange("science")}
                  onReformationClick={() => handleViewChange("reformation")} // Added this
                />

                
              </Suspense>
              <div className="container mx-auto px-4 pb-16 max-w-4xl">
                <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-8 gap-6 md:gap-4 mt-16">
                  <div className="text-center text-gray-500 order-1 md:order-2 text-sm md:text-base">
                    {t(trans.progress.topicOf, language)}{" "}
                    {currentTopicIndex + 1} {t(trans.progress.of, language)}{" "}
                    {topics.length}
                  </div>

                  <div className="flex w-full md:w-auto gap-4 order-2 md:contents">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={previousTopic}
                      disabled={currentTopicIndex === 0}
                      className="flex-1 md:flex-none md:order-1 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
                    >
                      ← {t(trans.progress.previous, language)}
                    </Button>
                    
                    {/* ADD HOVER PRELOAD HERE */}
                    <Button
                      size="lg"
                      onClick={nextTopic}
                      onMouseEnter={() => {
                        if (currentTopicIndex < topics.length - 1) {
                          preloadTopic(currentTopicIndex + 1);
                        }
                      }}
                      className="flex-1 md:flex-none md:order-3 bg-white text-black hover:bg-gray-200 border-0"
                    >
                      {currentTopicIndex === topics.length - 1
                        ? t(trans.progress.complete, language)
                        : `${t(trans.progress.next, language)} →`}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.main>
          )}
        </AnimatePresence>
      )}
      <AboutOverlay />
      <Toaster />

{/* NEW FOOTER CODE */}
      <footer className="w-full py-12 mt-auto border-t border-gray-900 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm font-light tracking-widest">
            © 2026 <span className="text-gray-400">CatholicRoute</span>
          </p>
        </div>
      </footer>

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
