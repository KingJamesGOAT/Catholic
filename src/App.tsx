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
import { cn } from "./components/ui/utils";
import { useIsMobile } from "./components/ui/use-mobile";
import GlossarySearch from "./components/GlossarySearch";
import { Button } from "./components/ui/button";

// ------------------------------------------------------------------
// OPTIMIZATION: Lazy load Top-Level Views to reduce initial bundle size
// ------------------------------------------------------------------
const Home = lazy(() => import("./components/Home"));
const EarlyChurch = lazy(
  () => import("./components/EarlyChurch"),
);
const ScienceAndMiracles = lazy(
  () => import("./components/ScienceAndMiracles"),
);
const GlossaryPage = lazy(
  () => import("./components/GlossaryPage"),
);
const DoctrineExplorer = lazy(
  () => import("./components/DoctrineExplorer"),
);
const TraditionalLatinMass = lazy(
  () => import("./components/TraditionalLatinMass"),
);

// ------------------------------------------------------------------
// Topic Components (Already Lazy Loaded)
// ------------------------------------------------------------------
const ExistenceOfGod = lazy(
  () => import("./components/Topics/ExistenceOfGod"),
);
const ProofOfResurrection = lazy(
  () => import("./components/Topics/ProofOfResurrection"),
);
const WhyBeCatholic = lazy(
  () => import("./components/Topics/WhyBeCatholic"),
);
const YouLoseSoIWinFallacy = lazy(
  () => import("./components/Topics/YouLoseSoIWinFallacy"),
);
const AuthorityDilemmaFallacy = lazy(
  () => import("./components/Topics/AuthorityDilemmaFallacy"),
);
const WhyNotSolaScriptura = lazy(
  () => import("./components/Topics/WhyNotSolaScriptura"),
);
const ScholasticApproaches = lazy(
  () => import("./components/Topics/ScholasticApproaches"),
);
const SolaScripturaImpossible = lazy(
  () => import("./components/Topics/SolaScripturaImpossible"),
);
const CanonDilemma = lazy(
  () => import("./components/Topics/CanonDilemma"),
);
const SeventyThreeBooks = lazy(
  () => import("./components/Topics/SeventyThreeBooks"),
);
const PeterFirstPope = lazy(
  () => import("./components/Topics/PeterFirstPope"),
);
const Magisterium = lazy(
  () => import("./components/Topics/Magisterium"),
);
const WhatIsWorship = lazy(
  () => import("./components/Topics/WhatIsWorship"),
);
const MarianDogma = lazy(
  () => import("./components/Topics/MarianDogma"),
);
const NoFilioque = lazy(
  () => import("./components/Topics/NoFilioque"),
);

type TopicComponentProps = {
  onComplete?: () => void;
  onScienceClick?: () => void;
};

export interface Topic {
  id: string;
  title: string;
  shortTitle: string;
  component: React.ComponentType<TopicComponentProps>;
  transition?: string;
}

export const topics: Topic[] = [
  {
    id: "existence-of-god",
    title: "Existence of God",
    shortTitle: "God Exists",
    component: ExistenceOfGod,
    transition:
      "Having explored the evidence for God's existence, let's turn to the most pivotal event in history...",
  },
  {
    id: "proof-of-resurrection",
    title: "Proof of the Resurrection",
    shortTitle: "The Resurrection",
    component: ProofOfResurrection,
    transition:
      "Now that we've seen the historical evidence for Christ's resurrection, the question becomes: which Christian tradition most faithfully preserves His teaching?",
  },
  {
    id: "why-be-catholic",
    title: "Why Be Catholic?",
    shortTitle: "Why Catholic",
    component: WhyBeCatholic,
    transition:
      "Before we dive deeper into Catholic teaching, let's address some common logical fallacies in theological debates...",
  },
  {
    id: "you-lose-so-i-win",
    title: 'The "You Lose, So I Win" Fallacy',
    shortTitle: "Logical Fallacies",
    component: YouLoseSoIWinFallacy,
    transition:
      "Understanding this fallacy helps us recognize another common error in discussions of religious authority...",
  },
  {
    id: "authority-dilemma",
    title: "The Authority Dilemma Fallacy",
    shortTitle: "Authority Dilemma",
    component: AuthorityDilemmaFallacy,
    transition:
      "This brings us to one of the most debated topics between Catholics and Protestants: the doctrine of Scripture alone...",
  },
  {
    id: "why-not-sola-scriptura",
    title: "Why Not Sola Scriptura?",
    shortTitle: "Against Sola Scriptura",
    component: WhyNotSolaScriptura,
    transition:
      "Let's see how great thinkers throughout history have approached this question...",
  },
  {
    id: "scholastic-approaches",
    title: "Scholastic Approaches to Sola Scriptura",
    shortTitle: "Scholastic Views",
    component: ScholasticApproaches,
    transition:
      "These theological perspectives lead us to a profound conclusion about Scripture alone...",
  },
  {
    id: "sola-scriptura-impossible",
    title: "Sola Scriptura is Impossible",
    shortTitle: "Impossibility of Sola Scriptura",
    component: SolaScripturaImpossible,
    transition:
      "If the Bible alone isn't sufficient, this raises a crucial question: how do we even know which books belong in the Bible?",
  },
  {
    id: "canon-dilemma",
    title: "The Canon Dilemma",
    shortTitle: "Canon Question",
    component: CanonDilemma,
    transition:
      "The issue of the biblical canon brings us to an important difference between Catholic and Protestant Bibles...",
  },
  {
    id: "73-books",
    title: "73 Books?",
    shortTitle: "73 Books",
    component: SeventyThreeBooks,
    transition:
      "Understanding the fullness of Scripture leads us back to the question of authority. Who has the right to teach in Christ's name?",
  },
  {
    id: "peter-first-pope",
    title: "Was Peter the First Pope?",
    shortTitle: "Peter & Papacy",
    component: PeterFirstPope,
    transition:
      "Peter's role as the first pope leads us to understand the broader teaching authority of the Church...",
  },
  {
    id: "magisterium",
    title: "The Magisterium",
    shortTitle: "Church Authority",
    component: Magisterium,
    transition:
      "The Magisterium preserves essential doctrines, including ones that define our understanding of God Himself...",
  },
  {
    id: "what-is-worship",
    title: "What is Worship?",
    shortTitle: "What is Worship?",
    component: WhatIsWorship,
    transition:
      "Having established that true worship (latria) belongs to God alone, we can now ask: what about the honor we give to saints, and especially to Mary?",
  },
  {
    id: "marian-dogma",
    title: "Marian Dogma",
    shortTitle: "Marian Dogma",
    component: MarianDogma,
    transition:
      "From the visible mother of the Church, we now turn our gaze to the invisible mystery of the Trinity and the Holy Spirit...",
  },
  {
    id: "no-filioque",
    title: "No Filioque? No Trinity.",
    shortTitle: "Filioque & Trinity",
    component: NoFilioque,
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
  | "tlm";

function AppContent() {
  // Core State
  const [currentView, setCurrentView] = useState<View>("home");
  const [currentTopicIndex, setCurrentTopicIndex] =
    useState(-1);

  // Navigation & Progress State
  const [showTransition, setShowTransition] = useState(false);
  const [direction, setDirection] = useState<
    "forward" | "backward"
  >("forward");
  const [completedTopics, setCompletedTopics] = useState<
    Set<number>
  >(new Set());

  // Command Palette State
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { language } = useLanguage();
  const trans = translations;
  const isMobile = useIsMobile();
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  // ------------------------------------------------------------------
  // HELPER: Sync State with URL (Deep Linking)
  // ------------------------------------------------------------------
  const updateURL = (view: View, topicId?: string) => {
    const params = new URLSearchParams();

    // Only add params if we are NOT on home
    if (view !== "home") {
      params.set("view", view);
    }

    // If it's a topic, add the topic ID
    if (view === "topic" && topicId) {
      params.set("topic", topicId);
    }

    // Create the new query string
    const queryString = params.toString();
    const newUrl = queryString
      ? `?${queryString}`
      : window.location.pathname;

    // Push to browser history without reloading
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
      if (hoverTimeoutRef.current)
        clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const isProgressVisible =
    (currentView === "home" || currentView === "topic") &&
    (isMobile || currentView === "home" || isHovering);

  // ------------------------------------------------------------------
  // 1. INITIALIZATION: Load from URL (Priority) + Local Storage (Backup)
  // ------------------------------------------------------------------
  useEffect(() => {
    // A. Always load "Completed Topics" from Local Storage
    const saved = localStorage.getItem("journey-progress");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.completed) {
        setCompletedTopics(new Set(parsed.completed));
      }
    }

    // B. Check URL for Current View (Source of Truth)
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get("view") as View;
    const topicParam = params.get("topic");

    if (viewParam) {
      // If URL has a view, use it immediately
      setCurrentView(viewParam);

      if (viewParam === "topic" && topicParam) {
        // Find the index that matches the ID in the URL
        const idx = topics.findIndex(
          (t) => t.id === topicParam,
        );
        if (idx !== -1) {
          setCurrentTopicIndex(idx);
        }
      }
    } else {
      // If URL is empty (e.g. catholic.site), default to Home.
      // We explicitly DO NOT load the 'view' from local storage here
      // so that typing the main URL always gives you a fresh Home screen.
      setCurrentView("home");
      setCurrentTopicIndex(-1);
    }
  }, []);

  // ------------------------------------------------------------------
  // 2. LISTEN FOR BACK BUTTON (PopState)
  // ------------------------------------------------------------------
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(
        window.location.search,
      );
      const view = (params.get("view") as View) || "home";
      const topicId = params.get("topic");

      setCurrentView(view);

      if (view === "topic" && topicId) {
        const idx = topics.findIndex((t) => t.id === topicId);
        if (idx !== -1) setCurrentTopicIndex(idx);
      } else {
        // If we went back to a non-topic page, reset index
        setCurrentTopicIndex(-1);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () =>
      window.removeEventListener("popstate", handlePopState);
  }, []);

  // 3. Save Progress to Local Storage
  // (We still save it so 'completedTopics' works, but we don't rely on 'view' for loading anymore)
  useEffect(() => {
    localStorage.setItem(
      "journey-progress",
      JSON.stringify({
        index: currentTopicIndex,
        completed: Array.from(completedTopics),
        view: currentView,
      }),
    );
  }, [currentTopicIndex, completedTopics, currentView]);

  // 4. Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentView !== "topic" || isSearchOpen) return;

      if (e.key === "ArrowRight") {
        nextTopic();
      } else if (e.key === "ArrowLeft") {
        previousTopic();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [currentTopicIndex, currentView, isSearchOpen]);

 // 5. Dynamic Document Titles
  useEffect(() => {
    switch (currentView) {
      case "home":
        // CHANGE THIS LINE:
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
      case "topic":
        if (
          currentTopicIndex >= 0 &&
          topics[currentTopicIndex]
        ) {
          document.title = `${topics[currentTopicIndex].title} | Catholic Route`;
        }
        break;
      default:
        document.title = "Catholic Route";
    }
  }, [currentTopicIndex, currentView]);

  // ------------------------------------------------------------------
  // UPDATED NAVIGATION HANDLERS (Now Update URL)
  // ------------------------------------------------------------------

  const handleViewChange = (view: View) => {
    setCurrentView(view);
    updateURL(view); // Sync URL
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToTopic = (index: number) => {
    if (
      index === currentTopicIndex &&
      currentView === "topic"
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setDirection(
      index > currentTopicIndex ? "forward" : "backward",
    );

    if (index > currentTopicIndex) {
      setCompletedTopics(
        (prev) => new Set([...prev, currentTopicIndex]),
      );
    }

    setCurrentTopicIndex(index);
    setCurrentView("topic");

    // Sync URL using the Topic ID (more robust than index)
    if (topics[index]) {
      updateURL("topic", topics[index].id);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const markCurrentTopicComplete = () => {
    setCompletedTopics(
      (prev) => new Set([...prev, currentTopicIndex]),
    );
  };

  const nextTopic = () => {
    markCurrentTopicComplete();
    if (currentTopicIndex < topics.length - 1) {
      if (topics[currentTopicIndex].transition) {
        setShowTransition(true);
        setTimeout(() => {
          setShowTransition(false);
          goToTopic(currentTopicIndex + 1);
        }, 3000);
      } else {
        goToTopic(currentTopicIndex + 1);
      }
    }
  };

  const previousTopic = () => {
    if (currentTopicIndex > 0) {
      goToTopic(currentTopicIndex - 1);
    }
  };

  const BlankTopic: React.ComponentType<
    TopicComponentProps
  > = () => null;

  const CurrentTopicComponent =
    currentTopicIndex >= 0
      ? topics[currentTopicIndex].component
      : BlankTopic;

  const startJourney = () => {
    setCurrentTopicIndex(0);
    setCurrentView("topic");
    // Sync URL for the first topic
    if (topics[0]) {
      updateURL("topic", topics[0].id);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setCurrentTopicIndex(-1);
    handleViewChange("home"); // This will call updateURL('home') which clears params
  };

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      <GlossarySearch
        open={isSearchOpen}
        setOpen={setIsSearchOpen}
      />

      <Navigation
        currentTopicIndex={currentTopicIndex}
        onNavigate={goToTopic}
        completedTopics={completedTopics}
        onEarlyChurchClick={() =>
          handleViewChange("early-church")
        }
        onScienceClick={() => handleViewChange("science")}
        onGlossaryClick={() => handleViewChange("glossary")}
        onDoctrineClick={() => handleViewChange("doctrine")}
        onTLMClick={() => handleViewChange("tlm")}
        onLogoClick={handleBackToHome}
        onSearchClick={() => setIsSearchOpen(true)}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        // Props for active state highlighting
        isSpecialPage={currentView !== "topic"}
        showEarlyChurch={currentView === "early-church"}
        showScience={currentView === "science"}
        showGlossary={currentView === "glossary"}
        showDoctrine={currentView === "doctrine"}
        showTLM={currentView === "tlm"}
      />

      <ProgressTracker
        currentIndex={
          currentView === "home" ? -1 : currentTopicIndex
        }
        total={topics.length}
        completedTopics={completedTopics}
        isVisible={isProgressVisible}
        onNavigate={goToTopic}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      />

      {/* Main Content Area - WRAPPED IN SUSPENSE */}
      <Suspense
        fallback={
          <div className="min-h-[80vh] flex items-center justify-center text-gray-400">
            Loading...
          </div>
        }
      >
        {currentView === "home" && (
          <Home onStart={startJourney} />
        )}

        {currentView === "early-church" && <EarlyChurch />}
        {currentView === "science" && <ScienceAndMiracles />}
        {currentView === "glossary" && <GlossaryPage />}
        {currentView === "doctrine" && <DoctrineExplorer />}
        {currentView === "tlm" && <TraditionalLatinMass />}
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
                      language,
                    )
                  : ""
              }
            />
          ) : (
            <motion.main
              key={currentTopicIndex}
              initial={{
                opacity: 0,
                x: direction === "forward" ? 100 : -100,
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
              exit={{
                opacity: 0,
                x: direction === "forward" ? -100 : 100,
              }}
              transition={{
                opacity: { duration: 0.5 },
                x: { duration: 0.5 },
                paddingTop: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
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
                  onScienceClick={() =>
                    handleViewChange("science")
                  }
                />
              </Suspense>
              <div className="container mx-auto px-4 pb-16 max-w-4xl">
                <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-8 gap-6 md:gap-4 mt-16">
                  <div className="text-center text-gray-500 order-1 md:order-2 text-sm md:text-base">
                    {t(trans.progress.topicOf, language)}{" "}
                    {currentTopicIndex + 1}{" "}
                    {t(trans.progress.of, language)}{" "}
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
                    <Button
                      size="lg"
                      onClick={nextTopic}
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
