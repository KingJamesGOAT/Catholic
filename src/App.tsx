import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navigation from "./components/Journey/Navigation";
import ProgressTracker from "./components/Journey/ProgressTracker";
import TopicTransition from "./components/Journey/TopicTransition";
import EarlyChurch from "./components/EarlyChurch";
import { Toaster } from "./components/ui/sonner";
import {
  LanguageProvider,
  useLanguage,
} from "./lib/i18n/LanguageContext";
import { translations, t } from "./lib/i18n/translations";
import LanguageSelector from "./components/LanguageSelector";

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

export interface Topic {
  id: string;
  title: string;
  shortTitle: string;
  component: React.ComponentType;
  transition?: string;
}

// --- THIS IS THE FIX ---
// The 'topics' array is now at the top level and EXPORTED,
// so 'Navigation.tsx' can import it.
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
// --- END OF FIX ---

function AppContent() {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [showTransition, setShowTransition] = useState(false);
  const [direction, setDirection] = useState<
    "forward" | "backward"
  >("forward");
  const [completedTopics, setCompletedTopics] = useState<
    Set<number>
  >(new Set());
  const [showEarlyChurch, setShowEarlyChurch] = useState(false);
  const [showScience, setShowScience] = useState(false); // State for new page
  const { language } = useLanguage();
  const trans = translations;

  const [showOnLoad, setShowOnLoad] = useState(true);
  const [isNavHovering, setIsNavHovering] = useState(false);
  const [isProgressHovering, setIsProgressHovering] =
    useState(false);

  const isProgressVisible =
    showOnLoad || isNavHovering || isProgressHovering;

  useEffect(() => {
    const saved = localStorage.getItem("journey-progress");
    if (saved) {
      const { index, completed } = JSON.parse(saved);
      setCurrentTopicIndex(index);
      setCompletedTopics(new Set(completed));
    }
  }, []);

  useEffect(() => {
    // Check if on a special page
    if (showTransition || showEarlyChurch || showScience) return;

    setShowOnLoad(true);

    const timer = setTimeout(() => {
      setShowOnLoad(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentTopicIndex, showTransition, showEarlyChurch, showScience]); // Added dependencies

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
    if (index === currentTopicIndex) return;

    // Hide special pages when navigating
    setShowEarlyChurch(false);
    setShowScience(false);

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

  const nextTopic = () => {
    if (currentTopicIndex < topics.length - 1) {
      const currentTopic = topics[currentTopicIndex];

      setCompletedTopics(
        (prev) => new Set([...prev, currentTopicIndex]),
      );

      if (currentTopic.transition) {
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

  const CurrentTopicComponent =
    topics[currentTopicIndex].component;

  // Click handler for Early Church
  const handleEarlyChurchClick = () => {
    setShowScience(false);
    setShowEarlyChurch(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Click handler for Science & Miracles
  const handleScienceClick = () => {
    setShowEarlyChurch(false);
    setShowScience(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Click handler to return to main journey
  const handleBackToJourney = () => {
    setShowEarlyChurch(false);
    setShowScience(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      {/* Show special page OR the main journey */}
      {showEarlyChurch || showScience ? (
        <>
          {/* Simplified nav for special pages */}
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800"
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-20">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                  onClick={handleBackToJourney}
                >
                  <h1 className="text-white tracking-wide">
                    {t(trans.nav.title, language)}
                  </h1>
                  <p className="text-xs text-gray-500">
                    {t(trans.nav.subtitle, language)}
                  </p>
                </motion.div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={handleBackToJourney}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    ← {t(trans.nav.backToJourney, language)}
                  </button>
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </motion.nav>
          
          {/* Render the correct special page */}
          {showEarlyChurch && <EarlyChurch />}
          {showScience && <ScienceAndMiracles />}
        </>
      ) : (
        // Main Journey View
        <>
          <Navigation
            currentTopicIndex={currentTopicIndex}
            onNavigate={goToTopic}
            completedTopics={completedTopics}
            onEarlyChurchClick={handleEarlyChurchClick}
            onScienceClick={handleScienceClick} // Pass the new handler
            onHoverStart={() => setIsNavHovering(true)}
            onHoverEnd={() => setIsNavHovering(false)}
          />

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
                  paddingTop: isProgressVisible
                    ? "256px"
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
                <CurrentTopicComponent />

                {/* Next/Previous Buttons */}
                <div className="container mx-auto px-4 py-16 max-w-4xl">
                  <div className="flex items-center justify-between border-t border-gray-800 pt-8">
                    <button
                      onClick={previousTopic}
                      disabled={currentTopicIndex === 0}
                      className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                        currentTopicIndex === 0
                          ? "bg-gray-900 text-gray-600 cursor-not-allowed"
                          : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      ← {t(trans.progress.previous, language)}
                    </button>

                    <div className="text-center text-gray-500">
                      {t(trans.progress.topicOf, language)}{" "}
                      {currentTopicIndex + 1}{" "}
                      {t(trans.progress.of, language)}{" "}
                      {topics.length}
                    </div>

                    <button
                      onClick={nextTopic}
                      disabled={
                        currentTopicIndex === topics.length - 1
                      }
                      className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                        currentTopicIndex === topics.length - 1
                          ? "bg-gray-900 text-gray-600 cursor-not-allowed"
                          : "bg-white text-black hover:bg-gray-200"
                      }`}
                    >
                      {currentTopicIndex === topics.length - 1
                        ? t(trans.progress.complete, language)
                        : `${t(trans.progress.next, language)} →`}
                    </button>
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