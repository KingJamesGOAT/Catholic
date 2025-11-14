import { useState, useEffect } from "react";
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
import { useIsMobile } from "./components/ui/use-mobile"; // Added import

// Topic Components
import ExistenceOfGod from "./components/Topics/ExistenceOfGod";
import ProofOfResurrection from "./components/Topics/ProofOfResurrection";
import WhyBeCatholic from "./components/Topics/WhyBeCatholic";
import YouLoseSoIWinFallacy from "./components/Topics/YouLoseSoIWinFallacy";
import AuthorityDilemmaFallacy from "./components/Topics/AuthorityDilemmaFallacy";
import WhyNotSolaScriptura from "./components/Topics/WhyNotSolaScriptura";
import ScholasticApproaches from "./components/Topics/ScholasticApproaches";
import SolaScripturaImpossible from "./components/Topics/SolaScripturaImpossible";
import CanonDilemma from "./components/Topics/CanonDilemma";
import SeventyThreeBooks from "./components/Topics/SeventyThreeBooks";
import PeterFirstPope from "./components/Topics/PeterFirstPope";
import Magisterium from "./components/Topics/Magisterium";
import NoFilioque from "./components/Topics/NoFilioque";
import ScienceAndMiracles from "./components/ScienceAndMiracles";

// Define prop types for Topic Components to avoid TS errors
type TopicComponentProps = {
  onComplete?: () => void;
};

export interface Topic {
  id: string;
  title: string;
  shortTitle: string;
  component: React.ComponentType<TopicComponentProps>;
  transition?: string;
}

// The 'topics' array is exported for use in Navigation.tsx
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
    id: "no-filioque",
    title: "No Filioque? No Trinity.",
    shortTitle: "Filioque & Trinity",
    component: NoFilioque,
  },
];

function AppContent() {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [showTransition, setShowTransition] = useState(false);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [completedTopics, setCompletedTopics] = useState<Set<number>>(new Set());
  
  // State for Page Routing
  const [showHome, setShowHome] = useState(true);
  const [showEarlyChurch, setShowEarlyChurch] = useState(false);
  const [showScience, setShowScience] = useState(false);
  
  const { language } = useLanguage();
  const trans = translations;
  const isMobile = useIsMobile(); // Detect mobile device

  const [isNavHovering, setIsNavHovering] = useState(false);
  const [isProgressHovering, setIsProgressHovering] = useState(false);

  // Progress tracker visibility logic
  // MODIFIED: If isMobile is true, always show tracker (unless on EarlyChurch/Science pages)
  const isProgressVisible = 
    !(showEarlyChurch || showScience) && 
    (isMobile || showHome || isNavHovering || isProgressHovering);

  useEffect(() => {
    const saved = localStorage.getItem("journey-progress");
    if (saved) {
      const { index, completed } = JSON.parse(saved);
      setCurrentTopicIndex(index);
      setCompletedTopics(new Set(completed));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "journey-progress",
      JSON.stringify({
        index: currentTopicIndex,
        completed: Array.from(completedTopics),
      }),
    );
  }, [currentTopicIndex, completedTopics]);

  const goToTopic = (index: number) => {
    setShowHome(false);
    setShowEarlyChurch(false);
    setShowScience(false);
    
    if (index === currentTopicIndex) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }

    setDirection(index > currentTopicIndex ? "forward" : "backward");

    if (index > currentTopicIndex) {
      setCompletedTopics((prev) => new Set([...prev, currentTopicIndex]));
    }

    setCurrentTopicIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const markCurrentTopicComplete = () => {
    setCompletedTopics((prev) => new Set([...prev, currentTopicIndex]));
  };

  const nextTopic = () => {
    // Always mark current as complete when clicking Next/Complete
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

  const CurrentTopicComponent = topics[currentTopicIndex].component;

  // Navigation Handlers
  const handleEarlyChurchClick = () => {
    setShowHome(false);
    setShowScience(false);
    setShowEarlyChurch(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScienceClick = () => {
    setShowHome(false);
    setShowEarlyChurch(false);
    setShowScience(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setShowEarlyChurch(false);
    setShowScience(false);
    setShowHome(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startJourney = () => {
    setShowHome(false);
    goToTopic(currentTopicIndex);
  };

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      
      {/* UNIFIED NAVIGATION BAR */}
      <Navigation
        currentTopicIndex={currentTopicIndex}
        onNavigate={goToTopic}
        completedTopics={completedTopics}
        onEarlyChurchClick={handleEarlyChurchClick}
        onScienceClick={handleScienceClick}
        onHoverStart={() => setIsNavHovering(true)}
        onHoverEnd={() => setIsNavHovering(false)}
        isSpecialPage={showEarlyChurch || showScience || showHome}
        showEarlyChurch={showEarlyChurch}
        showScience={showScience}
        onLogoClick={handleBackToHome}
      />
      
      {/* CONTENT ROUTER */}
      {showHome ? (
        <>
          <ProgressTracker
            currentIndex={-1} 
            total={topics.length}
            completedTopics={completedTopics}
            isVisible={true} 
            onNavigate={goToTopic}
            onHoverStart={() => setIsProgressHovering(true)}
            onHoverEnd={() => setIsProgressHovering(false)}
          />
          <Home onStart={startJourney} />
        </>
      ) : showEarlyChurch || showScience ? (
        <>
          {showEarlyChurch && <EarlyChurch />}
          {showScience && <ScienceAndMiracles />}
        </>
      ) : (
        <>
          <ProgressTracker
            currentIndex={currentTopicIndex}
            total={topics.length}
            completedTopics={completedTopics}
            isVisible={isProgressVisible}
            onNavigate={goToTopic}
            onHoverStart={() => setIsProgressHovering(true)}
            onHoverEnd={() => setIsProgressHovering(false)}
          />

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
                  // Adjust padding based on whether the progress bar is visible to prevent overlap
                  paddingTop: isProgressVisible ? "200px" : "80px", 
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
                {/* PASS ONCOMPLETE PROP HERE */}
                <CurrentTopicComponent onComplete={markCurrentTopicComplete} />

                {/* Next/Previous Buttons */}
                <div className="container mx-auto px-4 py-16 max-w-4xl">
                  <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-8 gap-6 md:gap-4">
                    
                    <div className="text-center text-gray-500 order-1 md:order-2 text-sm md:text-base">
                      {t(trans.progress.topicOf, language)}{" "}
                      {currentTopicIndex + 1}{" "}
                      {t(trans.progress.of, language)}{" "}
                      {topics.length}
                    </div>

                    <div className="flex w-full md:w-auto justify-between gap-4 order-2 md:contents">
                      <button
                        onClick={previousTopic}
                        disabled={currentTopicIndex === 0}
                        className={`px-6 py-3 rounded-lg transition-all duration-300 md:order-1 ${
                          currentTopicIndex === 0
                            ? "bg-gray-900 text-gray-600 cursor-not-allowed"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`}
                      >
                        ← {t(trans.progress.previous, language)}
                      </button>

                      <button
                        onClick={nextTopic}
                        className="px-6 py-3 rounded-lg transition-all duration-300 md:order-3 bg-white text-black hover:bg-gray-200"
                      >
                        {currentTopicIndex === topics.length - 1
                          ? t(trans.progress.complete, language)
                          : `${t(trans.progress.next, language)} →`}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.main>
            )}
          </AnimatePresence>
        </>
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