import {
  useState,
  useEffect,
  useRef,
  lazy,
  Suspense,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import Navigation from "./components/Journey/Navigation";
import ProgressTracker from "./components/Journey/ProgressTracker";
import TopicTransition from "./components/Journey/TopicTransition";
import EarlyChurch from "./components/EarlyChurch";
import Home from "./components/Home";
import { Toaster } from "./components/ui/sonner";
import {
  LanguageProvider,
  useLanguage,
} from "./lib/i18n/LanguageContext";
import { translations, t } from "./lib/i18n/translations";
import { cn } from "./components/ui/utils";
import { useIsMobile } from "./components/ui/use-mobile";
import GlossarySearch from "./components/GlossarySearch";
import GlossaryPage from "./components/GlossaryPage";
import DoctrineExplorer from "./components/DoctrineExplorer";
import { Button } from "./components/ui/button"; // <--- ADD THIS LINE

// Topic Components
import ScienceAndMiracles from "./components/ScienceAndMiracles";

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
  // description field removed - using i18n lookup instead
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

// ... [Rest of the AppContent and App functions remains exactly the same as before]
function AppContent() {
  const [currentTopicIndex, setCurrentTopicIndex] =
    useState(-1);
  const [showTransition, setShowTransition] = useState(false);
  const [direction, setDirection] = useState<
    "forward" | "backward"
  >("forward");
  const [completedTopics, setCompletedTopics] = useState<
    Set<number>
  >(new Set());

  // State for Page Routing
  const [showHome, setShowHome] = useState(true);
  const [showEarlyChurch, setShowEarlyChurch] = useState(false);
  const [showScience, setShowScience] = useState(false);
  const [showGlossary, setShowGlossary] = useState(false);
  const [showDoctrine, setShowDoctrine] = useState(false);

  // Command Palette State
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { language } = useLanguage();
  const trans = translations;
  const isMobile = useIsMobile();
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

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
    !(
      showEarlyChurch ||
      showScience ||
      showGlossary ||
      showDoctrine
    ) &&
    (isMobile || showHome || isHovering);

  useEffect(() => {
    const saved = localStorage.getItem("journey-progress");
    if (saved) {
      const {
        index,
        completed,
        earlyChurch,
        science,
        glossary,
        doctrine,
      } = JSON.parse(saved);

      if (completed) {
        setCompletedTopics(new Set(completed));
      }

      // Restore special pages state
      if (earlyChurch) {
        setShowEarlyChurch(true);
        setShowHome(false);
      } else if (science) {
        setShowScience(true);
        setShowHome(false);
      } else if (glossary) {
        setShowGlossary(true);
        setShowHome(false);
      } else if (doctrine) {
        setShowDoctrine(true);
        setShowHome(false);
      } else if (index !== undefined && index !== -1) {
        setCurrentTopicIndex(index);
        setShowHome(false);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "journey-progress",
      JSON.stringify({
        index: currentTopicIndex,
        completed: Array.from(completedTopics),
        earlyChurch: showEarlyChurch,
        science: showScience,
        glossary: showGlossary,
        doctrine: showDoctrine,
      }),
    );
  }, [
    currentTopicIndex,
    completedTopics,
    showEarlyChurch,
    showScience,
    showGlossary,
    showDoctrine,
  ]);

  // 2. Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable if special pages are open or search is active
      if (
        showHome ||
        showEarlyChurch ||
        showScience ||
        showGlossary ||
        showDoctrine ||
        isSearchOpen
      )
        return;

      if (e.key === "ArrowRight") {
        nextTopic();
      } else if (e.key === "ArrowLeft") {
        previousTopic();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [
    currentTopicIndex,
    showHome,
    showEarlyChurch,
    showScience,
    showGlossary,
    showDoctrine,
    isSearchOpen,
  ]);

  // 3. Dynamic Document Titles
  useEffect(() => {
    if (showHome) {
      document.title = "Home | Catholic Foundations";
    } else if (showEarlyChurch) {
      document.title =
        "Early Church Fathers | Catholic Foundations";
    } else if (showScience) {
      document.title =
        "Science & Miracles | Catholic Foundations";
    } else if (showGlossary) {
      document.title =
        "Catholic Glossary | Catholic Foundations";
    } else if (showDoctrine) {
      document.title =
        "Doctrine Explorer | Catholic Foundations";
    } else if (
      currentTopicIndex >= 0 &&
      topics[currentTopicIndex]
    ) {
      document.title = `${topics[currentTopicIndex].title} | Catholic Foundations`;
    } else {
      document.title = "Catholic Foundations";
    }
  }, [
    currentTopicIndex,
    showHome,
    showEarlyChurch,
    showScience,
    showGlossary,
    showDoctrine,
  ]);

  const goToTopic = (index: number) => {
    setShowHome(false);
    setShowEarlyChurch(false);
    setShowScience(false);
    setShowGlossary(false);
    setShowDoctrine(false);

    if (index === currentTopicIndex) {
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

  const handleEarlyChurchClick = () => {
    setShowHome(false);
    setShowScience(false);
    setShowGlossary(false);
    setShowDoctrine(false);
    setShowEarlyChurch(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScienceClick = () => {
    setShowHome(false);
    setShowEarlyChurch(false);
    setShowGlossary(false);
    setShowDoctrine(false);
    setShowScience(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGlossaryClick = () => {
    setShowHome(false);
    setShowEarlyChurch(false);
    setShowScience(false);
    setShowDoctrine(false);
    setShowGlossary(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDoctrineClick = () => {
    setShowHome(false);
    setShowEarlyChurch(false);
    setShowScience(false);
    setShowGlossary(false);
    setShowDoctrine(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setCurrentTopicIndex(-1);
    setShowHome(true);
    setShowEarlyChurch(false);
    setShowScience(false);
    setShowGlossary(false);
    setShowDoctrine(false);

    localStorage.setItem(
      "journey-progress",
      JSON.stringify({
        index: -1,
        completed: Array.from(completedTopics),
        earlyChurch: false,
        science: false,
        glossary: false,
        doctrine: false,
      }),
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startJourney = () => {
    setShowHome(false);
    setCurrentTopicIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        onEarlyChurchClick={handleEarlyChurchClick}
        onScienceClick={handleScienceClick}
        onGlossaryClick={handleGlossaryClick}
        onSearchClick={() => setIsSearchOpen(true)}
        onDoctrineClick={handleDoctrineClick}
        showDoctrine={showDoctrine}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        isSpecialPage={
          showEarlyChurch ||
          showScience ||
          showHome ||
          showGlossary ||
          showDoctrine
        }
        showEarlyChurch={showEarlyChurch}
        showScience={showScience}
        showGlossary={showGlossary}
        onLogoClick={handleBackToHome}
      />
      <ProgressTracker
        currentIndex={showHome ? -1 : currentTopicIndex}
        total={topics.length}
        completedTopics={completedTopics}
        isVisible={isProgressVisible}
        onNavigate={goToTopic}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      />
      {showHome ? (
        <Home onStart={startJourney} />
      ) : showEarlyChurch ||
        showScience ||
        showGlossary ||
        showDoctrine ? (
        <>
          {showEarlyChurch && <EarlyChurch />}
          {showScience && <ScienceAndMiracles />}
          {showGlossary && <GlossaryPage />}
          {showDoctrine && <DoctrineExplorer />}
        </>
      ) : (
        currentTopicIndex >= 0 && (
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
                    onScienceClick={handleScienceClick}
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
        )
      )}
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