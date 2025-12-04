import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Info,
  X,
  Target,
  User,
  Mail,
  Menu,
  MoreVertical,
  Search,
  Youtube,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { aboutTranslations } from "../lib/i18n/aboutTranslations";
import { t } from "../lib/i18n/translations";
import { useIsMobile } from "./ui/use-mobile";

type Tab = "mission" | "author" | "contact" | "channels";

export default function AboutOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("mission");
  const { language } = useLanguage();
  const isMobile = useIsMobile();

  const trans = aboutTranslations;

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // CHANNELS DATA
  const channels = [

    {
      name: "Catholic Apologetics",
      sub: "Featured Playlist",
      desc: {
        en: "A playlist of videos that explain what Catholics believe and why. Made to help anyone curious or asking questions about the faith",
        fr: "Une playlist de vidéos expliquant ce que croient les catholiques et pourquoi. Conçue pour aider toute personne curieuse ou se posant des questions sur la foi",
        es: "Una lista de reproducción de videos que explican qué creen los católicos y por qué. Hecha para ayudar a cualquiera que tenga curiosidad o preguntas sobre la fe",
        de: "Eine Playlist mit Videos, die erklären, was Katholiken glauben und warum. Gedacht für alle, die neugierig sind oder Fragen zum Glauben haben",
      },
      link: "https://youtube.com/playlist?list=PLFIUyfQr51fMx-XFFm_60YTGdbmOKQB9o",
      image: "",
    },
    
    {
      name: "Joshua Charles",
      sub: "Eternal Christendom",
      desc: {
        en: "Evangelical turned Catholic",
        fr: "D'évangélique à catholique",
        es: "De evangélico a católico",
        de: "Vom Evangelikalen zum Katholiken",
      },
      link: "https://youtube.com/@eternal_christendom",
      image: "",
    },
    {
      name: "Shameless Popery",
      sub: "Joe Heschmeyer",
      desc: {
        en: "Engaging apologetics content from a Catholic convert’s perspective",
        fr: "Contenu apologétique captivant d'un point de vue catholique",
        es: "Contenido apologético atractivo desde una perspectiva católica",
        de: "Spannende Apologetik aus katholischer Perspektive",
      },
      link: "https://www.youtube.com/@shamelesspopery",
      image: "",
    },
    {
      name: "Brian Holdsworth",
      sub: "",
      desc: {
        en: "Clear, artistic videos addressing culture, tradition, and theology",
        fr: "Vidéos claires et artistiques sur la culture et la théologie",
        es: "Videos claros y artísticos sobre cultura y teología",
        de: "Klare, künstlerische Videos über Kultur und Theologie",
      },
      link: "https://www.youtube.com/@BrianHoldsworth",
      image: "",
    },
    {
      name: "Trent Horn",
      sub: "The Counsel of Trent",
      desc: {
        en: "Catholic apologist known for his debates and reasoned presentations",
        fr: "Apologète catholique connu pour ses débats et son raisonnement",
        es: "Apologista católico conocido por sus debates y razonamiento",
        de: "Katholischer Apologet, bekannt für Debatten und Argumente",
      },
      link: "https://www.youtube.com/@TheCounselofTrent",
      image: "",
    },
    {
      name: "Militant Thomist",
      sub: "Christian Wagner",
      desc: {
        en: "Deep dives into Scholastic theology and Thomism",
        fr: "Analyses approfondies de la théologie scolastique et du thomisme",
        es: "Análisis profundos de la teología escolástica y el tomismo",
        de: "Vertiefung in scholastische Theologie und Thomismus",
      },
      link: "https://www.youtube.com/@MilitantThomist",
      image: "",
    },
    {
      name: "Keith Nester",
      sub: "",
      desc: {
        en: "Conversion and practical Catholic living",
        fr: "Conversion et vie catholique pratique",
        es: "Conversión y vida católica práctica",
        de: "Bekehrung und praktisches katholisches Leben",
      },
      link: "https://www.youtube.com/@KeithNester",
      image: "",
    },
    {
      name: "Capturing Christianity",
      sub: "Cameron Bertuzzi",
      desc: {
        en: "Useful for apologetics and interfaith dialogue",
        fr: "Utile pour l'apologétique et le dialogue interreligieux",
        es: "Útil para la apologética y el diálogo interreligioso",
        de: "Nützlich für Apologetik und interreligiösen Dialog",
      },
      link: "https://www.youtube.com/@CapturingChristianity",
      image: "",
    },
    {
      name: "Jimmy Akin",
      sub: "",
      desc: {
        en: "Apologist known for clarity and depth",
        fr: "Apologète reconnu pour sa clarté et sa profondeur",
        es: "Apologista conocido por su claridad y profundidad",
        de: "Apologet bekannt für Klarheit und Tiefe",
      },
      link: "https://www.youtube.com/@JimmyAkin",
      image: "",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "mission":
        return (
          <motion.div
            key="mission"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center mb-4 border border-blue-500/30">
                <Target className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 text-center md:text-left">
                {t(trans.mission.title, language)}
              </h3>
            </div>

            <div className="max-h-[300px] md:max-h-none overflow-y-auto pr-2 custom-scrollbar bg-gray-900/20 md:bg-transparent p-1 md:p-0 rounded-lg">
              <p className="text-gray-300 leading-relaxed text-sm md:text-lg mb-8">
                {t(trans.mission.mainText, language)}
              </p>

              <div className="bg-gray-900/50 rounded-xl p-4 md:p-5 border border-gray-800">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2 border-b border-gray-800 pb-2">
                  {t(trans.mission.howItWorksTitle, language)}
                </h4>

                {isMobile ? (
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <div className="shrink-0 w-8 h-8 rounded bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400">
                        <Menu size={18} />
                      </div>
                      <p className="text-gray-400 text-sm leading-tight mt-1.5">
                        {t(trans.mission.mobileMenu, language)}
                      </p>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="shrink-0 w-8 h-8 rounded bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400">
                        <MoreVertical size={18} />
                      </div>
                      <p className="text-gray-400 text-sm leading-tight mt-1.5">
                        {t(trans.mission.mobileOptions, language)}
                      </p>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="shrink-0 w-8 h-8 rounded bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400">
                        <Search size={18} />
                      </div>
                      <p className="text-gray-400 text-sm leading-tight mt-1.5">
                        {t(trans.mission.mobileSearch, language)}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <div className="shrink-0 w-8 h-8 rounded bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400">
                        <Menu size={18} />
                      </div>
                      <p className="text-gray-400 text-base leading-tight mt-1">
                        {t(trans.mission.pcAllTopics, language)}
                      </p>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="shrink-0 w-8 h-8 rounded bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400">
                        <Search size={18} />
                      </div>
                      <p className="text-gray-400 text-base leading-tight mt-1">
                        {t(trans.mission.pcSearch, language)}
                      </p>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="shrink-0 w-8 h-8 rounded bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400">
                        <span className="text-[10px] font-bold">TOP</span>
                      </div>
                      <p className="text-gray-400 text-base leading-tight mt-1">
                        {t(trans.mission.pcTopSubjects, language)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        );

      case "author":
        return (
          <motion.div
            key="author"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="flex flex-col items-center md:items-start">
              {/* Avatar with Embedded Iframe */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-4 border-2 border-purple-500/30 shadow-lg shadow-purple-900/20 relative bg-black">
                <iframe
                  src="https://jumpshare.com/embed/rJkViXx5JfGH6a9rWtVg"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover"
                  title="Author Image"
                  style={{ pointerEvents: "none" }}
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 text-center md:text-left">
                {t(trans.author.title, language)}
              </h3>
            </div>

            <div className="max-h-[300px] md:max-h-none overflow-y-auto pr-2 md:pr-0 custom-scrollbar bg-gray-900/20 md:bg-transparent p-1 md:p-0 rounded-lg">
              <p className="text-gray-300 leading-relaxed text-sm md:text-lg whitespace-pre-line">
                {t(trans.author.text, language)}
              </p>
            </div>
          </motion.div>
        );

      case "contact":
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center mb-4 border border-green-500/30">
                <Mail className="text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {t(trans.contact.title, language)}
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-lg">
              {t(trans.contact.text, language)}
            </p>

            <a
              href={`mailto:${trans.contact.email}`}
              className="inline-flex items-center gap-3 px-6 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl transition-all group w-full md:w-auto justify-center"
            >
              <Mail
                size={20}
                className="text-gray-400 group-hover:text-white transition-colors"
              />
              <span className="text-blue-400 font-medium group-hover:text-blue-300 break-all">
                {trans.contact.email}
              </span>
            </a>
          </motion.div>
        );

      case "channels":
        return (
          <motion.div
            key="channels"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4 h-full flex flex-col"
          >
            <div className="flex flex-col items-center md:items-start shrink-0">
              <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center mb-4 border border-red-500/30">
                <Youtube className="text-red-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {t(trans.channels.title, language)}
              </h3>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
              <div className="grid grid-cols-1 gap-3">
                {channels.map((channel, index) => (
                  <a
                    key={index}
                    href={channel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-gray-900/40 border border-gray-800 hover:bg-gray-900/80 hover:border-gray-600 transition-all duration-300"
                  >
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600/10 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                      <Youtube className="text-red-500 w-5 h-5 md:w-6 md:h-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <h4 className="text-white font-bold text-base truncate group-hover:text-red-400 transition-colors">
                          {channel.name}
                        </h4>
                        {channel.sub && (
                          <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                            {channel.sub}
                          </span>
                        )}
                      </div>

                      <p className="text-gray-400 text-xs md:text-sm mt-0.5 line-clamp-2 group-hover:text-gray-300">
                        {t(channel.desc, language)}
                      </p>
                    </div>

                    <ExternalLink className="shrink-0 text-gray-600 group-hover:text-white transition-colors w-4 h-4 md:w-5 md:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-50 h-11 min-w-[44px] px-0 md:px-4 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-xl border border-white/10 text-white/60 transition-all duration-300 hover:bg-black/40 hover:text-white hover:border-white/20 shadow-2xl gap-2"
        aria-label="About & Contact"
      >
        <Info strokeWidth={1.5} size={20} />
        <span className="hidden md:inline font-medium text-sm">
          {t(trans.infoButton, language)}
        </span>
      </motion.button>

      {/* MODAL - ALWAYS RENDERED FOR INSTANT LOAD
        We use CSS transitions for visibility instead of conditional rendering.
      */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Blurred Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-all duration-300 ${
            isOpen ? "backdrop-blur-md" : "backdrop-blur-none"
          }`}
        />

        {/* Content Modal */}
        <div
          className={`relative bg-black border border-gray-800 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] md:max-h-[800px] transition-all duration-300 ${
            isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}
        >
          {/* Header (Fixed) */}
          <div className="p-4 md:p-6 border-b border-gray-800/50 bg-black/50 backdrop-blur-sm shrink-0 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white bg-gray-900/50 hover:bg-gray-800 rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Tabs Grid */}
            <div className="grid grid-cols-4 gap-2 bg-gray-900/50 p-1 rounded-xl border border-gray-800/50 mr-8">
              {(
                ["mission", "author", "contact", "channels"] as const
              ).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 md:px-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 truncate ${
                    activeTab === tab
                      ? "bg-gray-800 text-white shadow-lg"
                      : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/50"
                  }`}
                >
                  {t(trans[tab].button, language)}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div className="p-4 md:p-8 overflow-y-auto flex-1">
            <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
          </div>
        </div>
      </div>

      {/* HIDDEN PRELOADER 
        This forces the browser to load the Author iframe resource immediately
        when the site loads, ensuring it's ready when the user clicks.
      */}
      <div className="hidden" aria-hidden="true">
        <iframe
          src="https://jumpshare.com/embed/rJkViXx5JfGH6a9rWtVg"
          title="Preloader"
        />
      </div>
    </>
  );
}
