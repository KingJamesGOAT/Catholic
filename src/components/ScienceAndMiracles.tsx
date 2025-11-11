import { useState } from "react";
import { motion } from "motion/react";
import { Separator } from "./ui/separator";
import {
  Link as LinkIcon,
  Download,
  Youtube,
  BookOpen,
  Sparkles,
  Heart,
  CheckCircle, // Add this
} from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { t } from "../lib/i18n/translations";
import { scienceAndMiraclesTranslations } from "../lib/i18n/ScienceAndMiraclesTranslations";
import TableOfContents from "./Journey/TableOfContents"; // 1. IMPORTED

type Topic = "shroud" | "marian" | "eucharistic";

// Helper component for YouTube embeds
const YouTubeEmbed = ({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) => (
  <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800 my-6">
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
);

// Helper component for PDF embeds
const PdfEmbed = ({
  src,
  title,
}: {
  src: string;
  title: string;
}) => (
  <div className="aspect-[4/5] w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800 my-6">
    <iframe
      src={src}
      title={title}
      width="100%"
      height="100%"
      className="w-full h-full"
    ></iframe>
  </div>
);

// Helper component for external links
const ResourceLink = ({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon: React.ReactNode;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-200"
  >
    {icon}
    <span>{text}</span>
  </motion.a>
);

export default function ScienceAndMiracles() {
  const [selectedTopic, setSelectedTopic] =
    useState<Topic | null>(null);
  const { language } = useLanguage();
  const trans = scienceAndMiraclesTranslations;

  // 2. MODIFIED THIS FUNCTION per your plan
  const renderContent = () => {
    switch (selectedTopic) {
      case "shroud":
        return (
          <main>
            <TableOfContents key="toc-shroud" />
            <ShroudContent />
          </main>
        );
      case "marian":
        return (
          <main>
            <TableOfContents key="toc-marian" />
            <MarianContent />
          </main>
        );
      case "eucharistic":
        return (
          <main>
            <TableOfContents key="toc-eucharistic" />
            <EucharisticContent />
          </main>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl relative">
      {/* 3. REMOVED TableOfContents from here */}

      {/* Header (No sidebar) */}
      <motion.header
        className="text-center max-w-4xl mx-auto mb-12 pt-24" // Added pt-24 here
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight mb-4">
          {t(trans.title, language)}
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-8">
          {t(trans.subtitle, language)}
        </p>
        <div className="border-l-4 border-blue-600 pl-6 py-2 bg-gray-900/50 rounded-r-lg max-w-2xl mx-auto">
          <blockquote className="italic text-gray-300">
            "{t(trans.quote.text, language)}"
          </blockquote>
          <cite className="block text-gray-500 mt-2 not-italic">
            — {t(trans.quote.source, language)}
          </cite>
        </div>
      </motion.header>

      {/* 4. REMOVED <main> wrapper from here */}
      {/* 3-Block Selector */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SelectorButton
          title={t(trans.selector.title1, language)}
          icon={
            <BookOpen className="w-6 h-6 text-yellow-300" />
          }
          isSelected={selectedTopic === "shroud"}
          onClick={() => setSelectedTopic("shroud")}
          colorClass="hover:border-yellow-300/50"
          selectedClass="border-yellow-300/80 bg-yellow-900/20"
        />
        <SelectorButton
          title={t(trans.selector.title2, language)}
          icon={<Sparkles className="w-6 h-6 text-blue-300" />}
          isSelected={selectedTopic === "marian"}
          onClick={() => setSelectedTopic("marian")}
          colorClass="hover:border-blue-300/50"
          selectedClass="border-blue-300/80 bg-blue-900/20"
        />
        <SelectorButton
          title={t(trans.selector.title3, language)}
          icon={<Heart className="w-6 h-6 text-red-300" />}
          isSelected={selectedTopic === "eucharistic"}
          onClick={() => setSelectedTopic("eucharistic")}
          colorClass="hover:border-red-300/50"
          selectedClass="border-red-300/80 bg-red-900/20"
        />
      </motion.div>
      <p className="text-center text-gray-500 text-sm mb-12">
        {t(trans.selector.prompt, language)}
      </p>

      {/* Content Area */}
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none prose-h2:text-white prose-h2:mb-6 prose-h3:text-gray-200 prose-h3:mb-4 prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-li:text-gray-300 prose-li:leading-relaxed">
          {/* This now renders the <main> tag, ToC, and Content */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

// --- Selector Button Component ---
const SelectorButton = ({
  title,
  icon,
  isSelected,
  onClick,
  colorClass,
  selectedClass,
}: {
  title: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
  colorClass: string;
  selectedClass: string;
}) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.03 }}
    className={`p-6 rounded-lg border bg-gray-900/50 transition-all duration-300 text-left ${
      isSelected
        ? selectedClass
        : `border-gray-800 ${colorClass} opacity-60 hover:opacity-100`
    }`}
  >
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0">{icon}</div>
      <h3 className="text-white text-lg font-semibold">
        {title}
      </h3>
    </div>
  </motion.button>
);

// --- Content Components ---
// 4. THESE ARE UNCHANGED. The <motion.section> root is correct.
const ShroudContent = () => {
  const { language } = useLanguage();
  const trans = scienceAndMiraclesTranslations.shroud;
  return (
    <motion.section
      key="shroud"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2>{t(trans.h2, language)}</h2>
      <YouTubeEmbed
        videoId="OElbxDPsqpw"
        title={t(trans.h2, language)}
      />
      <p>{t(trans.p1, language)}</p>
      <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
        <p className="italic">"{t(trans.q1.text, language)}"</p>
        <p className="text-gray-500 mt-2">
          — {t(trans.q1.source, language)}
        </p>
      </div>
      <p>{t(trans.p2, language)}</p>

      <h3>{t(trans.desc.h3, language)}</h3>
      <ul className="list-none space-y-2 pl-6">
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          <span
            dangerouslySetInnerHTML={{
              __html: t(trans.desc.li1, language),
            }}
          />
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          <span
            dangerouslySetInnerHTML={{
              __html: t(trans.desc.li2, language),
            }}
          />
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          <span
            dangerouslySetInnerHTML={{
              __html: t(trans.desc.li3, language),
            }}
          />
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          <span
            dangerouslySetInnerHTML={{
              __html: t(trans.desc.li4, language),
            }}
          />
        </li>
      </ul>

      <h3>{t(trans.sci.h3, language)}</h3>
      <h4>{t(trans.sci.A.h4, language)}</h4>
      <ul className="list-none space-y-2 pl-6">
        {/* ... (List items) ... */}
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.sci.A.li1, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.sci.A.li2, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.sci.A.li3, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.sci.A.li4, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.sci.A.li5, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.sci.A.li6, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.sci.A.li7, language)}
        </li>
      </ul>
      <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
        <p className="italic">
          "{t(trans.sci.A.q.text, language)}"
        </p>
        <p className="text-gray-500 mt-2">
          — {t(trans.sci.A.q.source, language)}
        </p>
      </div>
      <h4>{t(trans.sci.B.h4, language)}</h4>
      <ul className="list-none space-y-2 pl-6">
        {/* ... (List items) ... */}
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.sci.B.li1, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.sci.B.li2, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.sci.B.li3, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.sci.B.li4, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.sci.B.li5, language)}
        </li>
      </ul>
      <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
        <p className="italic">
          "{t(trans.sci.B.q.text, language)}"
        </p>
        <p className="text-gray-500 mt-2">
          — {t(trans.sci.B.q.source, language)}
        </p>
      </div>

      <h3>{t(trans.c14.h3, language)}</h3>
      <p>{t(trans.c14.p1, language)}</p>
      <ul className="list-none space-y-2 pl-6">
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.c14.li1, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.c14.li2, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.c14.li3, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.c14.li4, language)}
        </li>
      </ul>
      <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
        <p className="italic">
          "{t(trans.c14.q.text, language)}"
        </p>
        <p className="text-gray-500 mt-2">
          — {t(trans.c14.q.source, language)}
        </p>
      </div>

      <h3>{t(trans.history.h3, language)}</h3>
      <ul className="list-none space-y-2 pl-6">
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.history.li1, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.history.li2, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.history.li3, language)}
        </li>
      </ul>

      <h3>{t(trans.anomalies.h3, language)}</h3>
      <p>{t(trans.anomalies.p1, language)}</p>
      <ul className="list-none space-y-2 pl-6">
        {/* ... (List items) ... */}
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.anomalies.li1, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.anomalies.li2, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.anomalies.li3, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.anomalies.li4, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.anomalies.li5, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.anomalies.li6, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.anomalies.li7, language)}
        </li>
      </ul>
      <p>{t(trans.anomalies.p2, language)}</p>

      <h3>{t(trans.impact.h3, language)}</h3>
      <ul className="list-none space-y-2 pl-6">
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.impact.li1, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.impact.li2, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.impact.li3, language)}
        </li>
      </ul>
      <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
        <p className="italic">
          "{t(trans.impact.q.text, language)}"
        </p>
        <p className="text-gray-500 mt-2">
          — {t(trans.impact.q.source, language)}
        </p>
      </div>

      <h3>{t(trans.conclusion.h3, language)}</h3>
      <p>{t(trans.conclusion.p1, language)}</p>
      <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
        <p className="italic">
          "{t(trans.conclusion.q.text, language)}"
        </p>
        <p className="text-gray-500 mt-2">
          — {t(trans.conclusion.q.source, language)}
        </p>
      </div>

      <h3>{t(trans.sources.h3, language)}</h3>
      <YouTubeEmbed
        videoId="YT1R2kDPHFA"
        title={t(trans.sources.vid1, language)}
      />
      <div className="flex flex-wrap gap-4">
        <ResourceLink
          href={t(trans.sources.link1, language)}
          text="Shroud.com"
          icon={<LinkIcon size={16} />}
        />
        <ResourceLink
          href={t(trans.sources.link2, language)}
          text="ShroudPhotos.com"
          icon={<LinkIcon size={16} />}
        />
        <ResourceLink
          href={t(trans.sources.link3_url, language)}
          text={t(trans.sources.link3_text, language)}
          icon={<LinkIcon size={16} />}
        />
        {/* <PdfEmbed src={t(trans.sources.pdf1_url, language)} title="3D Reconstruction (PDF)" /> */}
        <ResourceLink
          href={t(trans.sources.link4, language)}
          text="STURP Conclusions"
          icon={<LinkIcon size={16} />}
        />
        <ResourceLink
          href={t(trans.sources.link5, language)}
          text="Radiocarbon Study"
          icon={<LinkIcon size={16} />}
        />
        <ResourceLink
          href={t(trans.sources.link6, language)}
          text="X-ray Dating Study"
          icon={<LinkIcon size={16} />}
        />
        <ResourceLink
          href={t(trans.sources.link7, language)}
          text="Pollen Studies"
          icon={<LinkIcon size={16} />}
        />
      </div>
      <PdfEmbed
        src={t(trans.sources.pdf1_url, language)}
        title={t(trans.sources.pdf1_name, language)}
      />
    </motion.section>
  );
};

const MarianContent = () => {
  const { language } = useLanguage();
  const trans = scienceAndMiraclesTranslations.marian;
  return (
    <motion.section
      key="marian"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2>{t(trans.h2, language)}</h2>
      <YouTubeEmbed
        videoId="STMjSIORieU"
        title={t(trans.h2, language)}
      />
      <p>{t(trans.intro, language)}</p>

      <h3>{t(trans.doubleStandard.h3, language)}</h3>
      <p>{t(trans.doubleStandard.p1, language)}</p>
      <p>{t(trans.doubleStandard.p2, language)}</p>
      <p>{t(trans.doubleStandard.p3, language)}</p>
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h4 className="text-white mb-3">Key points:</h4>
        <ul className="list-none space-y-2 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.doubleStandard.key.li1, language)}
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.doubleStandard.key.li2, language)}
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.doubleStandard.key.li3, language)}
          </li>
        </ul>
      </div>

      <Separator className="my-12 bg-gray-800" />

      <h3>{t(trans.fatima.h3, language)}</h3>
      <YouTubeEmbed
        videoId="z5YKZHaYVPY"
        title={t(trans.fatima.h3, language)}
      />
      <p>{t(trans.fatima.p1, language)}</p>
      <p>{t(trans.fatima.p2, language)}</p>
      <p>{t(trans.fatima.p3, language)}</p>
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h4 className="text-white mb-3">
          {t(trans.fatima.facts.h4, language)}
        </h4>
        <ul className="list-none space-y-2 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.fatima.facts.li1, language)}
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.fatima.facts.li2, language)}
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.fatima.facts.li3, language)}
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.fatima.facts.li4, language)}
          </li>
        </ul>
      </div>
      <PdfEmbed
        src={t(trans.fatima.pdf1_url, language)}
        title={t(trans.fatima.pdf1_name, language)}
      />

      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h4 className="text-white mb-3">
          {t(trans.fatima.keySci.h4, language)}
        </h4>
        <ul className="list-none space-y-2 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.fatima.keySci.li1, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.fatima.keySci.li2, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.fatima.keySci.li3, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.fatima.keySci.li4, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.fatima.keySci.li5, language),
              }}
            />
          </li>
        </ul>
      </div>

      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h4 className="text-white mb-3">
          {t(trans.fatima.invalid.h4, language)}
        </h4>
        <ul className="list-none space-y-2 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.fatima.invalid.li1, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.fatima.invalid.li2, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.fatima.invalid.li3, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.fatima.invalid.li4, language),
              }}
            />
          </li>
        </ul>
      </div>

      <h4>{t(trans.fatima.conclusion.h4, language)}</h4>
      <p>{t(trans.fatima.conclusion.p1, language)}</p>

      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h4 className="text-white mb-3">
          {t(trans.fatima.argument.h4, language)}
        </h4>
        <p>{t(trans.fatima.argument.p1, language)}</p>
        <PdfEmbed
          src={t(trans.fatima.argument.pdf_url, language)}
          title={t(trans.fatima.argument.pdf_name, language)}
        />
      </div>

      <Separator className="my-12 bg-gray-800" />

      <h3>{t(trans.zeitoun.h3, language)}</h3>
      <YouTubeEmbed
        videoId="A0YRTRezSeM"
        title={t(trans.zeitoun.h3, language)}
      />
      <p>{t(trans.zeitoun.p1, language)}</p>
      <p>{t(trans.zeitoun.p2, language)}</p>
      <p>{t(trans.zeitoun.p3, language)}</p>
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h4 className="text-white mb-3">
          {t(trans.zeitoun.facts.h4, language)}
        </h4>
        <ul className="list-none space-y-2 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.zeitoun.facts.li1, language)}
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.zeitoun.facts.li2, language)}
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.zeitoun.facts.li3, language)}
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.zeitoun.facts.li4, language)}
          </li>
        </ul>
      </div>
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h4 className="text-white mb-2">
          {t(trans.zeitoun.book.title, language)}
        </h4>
        <p className="text-gray-500 text-sm mb-3">
          by {t(trans.zeitoun.book.author, language)}
        </p>
        <p>{t(trans.zeitoun.book.desc, language)}</p>
        <PdfEmbed
          src={t(trans.zeitoun.book.pdf_url, language)}
          title={t(trans.zeitoun.book.pdf_name, language)}
        />
      </div>

      <Separator className="my-12 bg-gray-800" />

      <h3>{t(trans.guadalupe.h3, language)}</h3>
      <p>{t(trans.guadalupe.p1, language)}</p>
      <p>{t(trans.guadalupe.p2, language)}</p>
      <p>{t(trans.guadalupe.p3, language)}</p>
      <p>{t(trans.guadalupe.p4, language)}</p>
      <p>{t(trans.guadalupe.p5, language)}</p>
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h4 className="text-white mb-3">
          {t(trans.guadalupe.anomalies.h4, language)}
        </h4>
        <ul className="list-none space-y-2 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.guadalupe.anomalies.li1, language)}
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.guadalupe.anomalies.li2, language)}
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.guadalupe.anomalies.li3, language)}
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.guadalupe.anomalies.li4, language)}
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.guadalupe.anomalies.li5, language)}
          </li>
        </ul>
      </div>
      <PdfEmbed
        src={t(trans.guadalupe.pdf1_url, language)}
        title={t(trans.guadalupe.pdf1_name, language)}
      />
      <PdfEmbed
        src={t(trans.guadalupe.pdf2_url, language)}
        title={t(trans.guadalupe.pdf2_name, language)}
      />

      <h3>{t(trans.conclusion.h3, language)}</h3>
      <p>{t(trans.conclusion.p1, language)}</p>
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h4 className="text-white mb-3">
          {t(trans.conclusion.summary.h4, language)}
        </h4>
        <ul className="list-none space-y-2 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.conclusion.summary.li1,
                  language,
                ),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.conclusion.summary.li2,
                  language,
                ),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.conclusion.summary.li3,
                  language,
                ),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.conclusion.summary.li4,
                  language,
                ),
              }}
            />
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

const EucharisticContent = () => {
  const { language } = useLanguage();
  const trans = scienceAndMiraclesTranslations.eucharistic;
  return (
    <motion.section
      key="eucharistic"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2>{t(trans.h2, language)}</h2>
      <YouTubeEmbed
        videoId="ZbSjuMxXX-E"
        title={t(trans.h2, language)}
      />
      <div className="flex flex-wrap gap-4">
        <ResourceLink
          href={t(trans.link1, language)}
          text="Magis Center"
          icon={<LinkIcon size={16} />}
        />
        <ResourceLink
          href={t(trans.link2, language)}
          text="SaintBeluga.org"
          icon={<LinkIcon size={16} />}
        />
      </div>
      <h3>{t(trans.intro.h3, language)}</h3>
      <p>{t(trans.intro.p1, language)}</p>
      <p>{t(trans.intro.p2, language)}</p>
      <ul className="list-none space-y-2 pl-6">
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.intro.li1, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.intro.li2, language)}
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-400 mt-1">•</span>
          {t(trans.intro.li3, language)}
        </li>
      </ul>
      <p>{t(trans.intro.p3, language)}</p>
      <PdfEmbed
        src={t(trans.intro.pdf_url, language)}
        title={t(trans.intro.pdf_name, language)}
      />

      <h3>{t(trans.buenosAires.h3, language)}</h3>
      <p>{t(trans.buenosAires.p1, language)}</p>
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <ul className="list-none space-y-2 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.buenosAires.li1, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.buenosAires.li2, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.buenosAires.li3, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.buenosAires.li4, language),
              }}
            />
          </li>
        </ul>
      </div>
      <p>{t(trans.buenosAires.p2, language)}</p>

      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h4 className="text-white mb-3">
          {t(trans.buenosAires.zugibe.h4, language)}
        </h4>
        <h5 className="text-gray-300 my-4">
          {t(trans.buenosAires.zugibe.h5, language)}
        </h5>
        <p>{t(trans.buenosAires.zugibe.p1, language)}</p>
        <ul className="list-none space-y-2 pl-4 my-4">
          <li
            className="text-gray-300"
            dangerouslySetInnerHTML={{
              __html: t(trans.buenosAires.zugibe.li1, language),
            }}
          />
          <li
            className="text-gray-300"
            dangerouslySetInnerHTML={{
              __html: t(trans.buenosAires.zugibe.li2, language),
            }}
          />
          <li
            className="text-gray-300"
            dangerouslySetInnerHTML={{
              __html: t(trans.buenosAires.zugibe.li3, language),
            }}
          />
          <li
            className="text-gray-300"
            dangerouslySetInnerHTML={{
              __html: t(trans.buenosAires.zugibe.li4, language),
            }}
          />
        </ul>
        <h5 className="text-gray-300 mb-2">
          {t(trans.buenosAires.zugibe.conc.h5, language)}
        </h5>
        <p>{t(trans.buenosAires.zugibe.conc.p1, language)}</p>
        <ul className="list-none space-y-2 pl-4 my-4">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.buenosAires.zugibe.conc.li1_c, language)}
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.buenosAires.zugibe.conc.li2_c, language)}
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.buenosAires.zugibe.conc.li3_c, language)}
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.buenosAires.zugibe.conc.li4_c, language)}
          </li>
        </ul>
        <p>{t(trans.buenosAires.zugibe.conc.p2, language)}</p>
        <PdfEmbed
          src={t(trans.buenosAires.zugibe.pdf1_url, language)}
          title={t(
            trans.buenosAires.zugibe.pdf1_name,
            language,
          )}
        />
      </div>

      <Separator className="my-12 bg-gray-800" />

      <h3>{t(trans.tixtla.h3, language)}</h3>
      <p>{t(trans.tixtla.p1, language)}</p>
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <ul className="list-none space-y-2 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.tixtla.li1, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.tixtla.li2, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.tixtla.li3, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.tixtla.li4, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            {t(trans.tixtla.li5, language)}
          </li>
        </ul>
      </div>

      <Separator className="my-12 bg-gray-800" />

      <h3>{t(trans.sokolka.h3, language)}</h3>
      <p>{t(trans.sokolka.p1, language)}</p>
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <ul className="list-none space-y-2 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.sokolka.li1, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.sokolka.li2, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.sokolka.li3, language),
              }}
            />
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: t(trans.sokolka.li4, language),
              }}
            />
          </li>
        </ul>
      </div>
      <p>{t(trans.sokolka.p2, language)}</p>

      <Separator className="my-12 bg-gray-800" />

      <h3>{t(trans.lanciano.h3, language)}</h3>
      <YouTubeEmbed
        videoId="OaoaHNhX1pk"
        title={t(trans.lanciano.vid1, language)}
      />


      
      <h4>{t(trans.lanciano.h4, language)}</h4>
      <p>
        {t(trans.lanciano.p1, language)}
      </p>

      {/* Re-formatted 6 points */}
      <div className="space-y-4 mt-6">
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-400 flex-shrink-0 mt-1"
              size={20}
            />
            <div>
              <h5 className="text-white font-semibold mb-1">
                1. Presence of Human Blood Components
              </h5>
              <p className="text-gray-400 mb-3">
                The blood was confirmed to be genuine through the presence of
                hemoglobin and alkaline hematin, using layer chromatography:
              </p>
              <div className="bg-gray-800/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-300 italic text-sm">
                  "The blood of the Eucharistic miracle of Lanciano was truly
                  such based on the demonstration of hemoglobin [and] alkaline
                  hematin within layer chromatography."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-400 flex-shrink-0 mt-1"
              size={20}
            />
            <div>
              <h5 className="text-white font-semibold mb-1">
                2. Identification of Myocardial Tissue (Human Heart Muscle)
              </h5>
              <p className="text-gray-400 mb-3">
                The solid part (flesh) was determined to be striated muscle
                tissue, specifically myocardium (heart muscle), as proven by
                the syncytial structure of the fibers:
              </p>
              <div className="bg-gray-800/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-300 italic text-sm">
                  "The flesh was made up of striated muscle tissue which due to
                  the syncytial union of the fibers proves to belong to the
                  myocardium."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-400 flex-shrink-0 mt-1"
              size={20}
            />
            <div>
              <h5 className="text-white font-semibold mb-1">
                3. Confirmation of Human Origin
              </h5>
              <p className="text-gray-400 mb-3">
                Using immunological testing... both the flesh and blood were
                confirmed to be of human origin:
              </p>
              <div className="bg-gray-800/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-300 italic text-sm">
                  "Flesh and blood belong to the human species as ascertained
                  based on the zonal precipitation reaction of Oudin-Hoeff."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-400 flex-shrink-0 mt-1"
              size={20}
            />
            <div>
              <h5 className="text-white font-semibold mb-1">
                4. AB Blood Type in Both Flesh and Blood
              </h5>
              <p className="text-gray-400 mb-3">
                The blood type was identified as AB, which is the same in
                both the blood and the tissue:
              </p>
              <div className="bg-gray-800/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-300 italic text-sm">
                  "The blood group determined by the absorption-elution method
                  was identical — AB — in the flesh and blood."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-400 flex-shrink-0 mt-1"
              size={20}
            />
            <div>
              <h5 className="text-white font-semibold mb-1">
                5. Protein Profile Matches That of Normal Human Blood
              </h5>
              <p className="text-gray-400 mb-3">
                The serum protein profile matched that of freshly drawn human
                blood, including Albumin and Globulins in normal ratios:
              </p>
              <div className="bg-gray-800/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-300 italic text-sm">
                  "Proteins have been demonstrated in the blood elution liquid
                  fractioned in the percentage ratios that occur in the serum
                  protein framework of normal fresh blood."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-400 flex-shrink-0 mt-1"
              size={20}
            />
            <div>
              <h5 className="text-white font-semibold mb-1">
                6. Presence of Electrolytes and Elevated Calcium
              </h5>
              <p className="text-gray-400 mb-3">
                The blood samples contained Chlorides, Phosphorus, Potassium,
                Sodium, and a significantly elevated level of calcium:
              </p>
              <div className="bg-gray-800/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-300 italic text-sm">
                  "Chlorides, phosphorus, potassium and sodium were found in
                  the blood, while calcium was significantly increased."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Anomalous Freshness */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
        <h5 className="text-white mb-3">Anomalous Freshness of the Samples</h5>
        <p className="text-gray-300">
          One of the most striking aspects of the analysis was the
          observation that the blood appeared fresh, despite being over
          1,200 years old.
        </p>
        <div className="bg-gray-800/50 border-l-4 border-purple-600 p-4 rounded-r-lg mt-4">
          <p className="text-gray-300 italic text-sm">
            "It was amazing how he stated that this appeared to be normal
            fresh blood. How can 1200-year-old blood appear to be fresh?"
          </p>
        </div>
        <p className="text-gray-400 mt-4">
          This characteristic defies known principles of biology and natural
          preservation and remains one of the key scientific anomalies
          pointing to the miraculous nature of the event.
        </p>
      </div>

      {/* Conclusion */}
      <div className="bg-green-900/10 border border-green-800 rounded-lg p-6 my-6">
        <h5 className="text-white mb-3">Conclusion</h5>
        <p className="text-gray-300 mb-4">
          Dr. Linoli’s investigation employed modern medical and scientific
          techniques, including:
        </p>
        <ul className="list-none space-y-2 pl-4 mb-4">
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">•</span>
            <span className="text-gray-300">
              Histological analysis of muscle fibers
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">•</span>
            <span className="text-gray-300">
              Immunological testing for species identification
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">•</span>
            <span className="text-gray-300">
              Biochemical profiling of blood contents
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">•</span>
            <span className="text-gray-300">
              Serological identification of blood group
            </span>
          </li>
        </ul>
        <p className="text-gray-300 mb-4">
          These techniques revealed that the samples are:
        </p>
        <ul className="list-none space-y-2 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">•</span>
            <span className="text-gray-300">Human myocardial tissue</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">•</span>
            <span className="text-gray-300">Human AB blood</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">•</span>
            <span className="text-gray-300">
              Biochemically active with preserved protein structure
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">•</span>
            <span className="text-gray-300">
              Physiologically similar to fresh samples, despite originating
              in the 8th century
            </span>
          </li>
        </ul>
        <p className="text-white font-semibold mt-4">
          The inexplicable preservation and biological integrity of the
          samples suggest that no natural explanation suffices, reinforcing
          the traditional claim of a Eucharistic miracle.
        </p>
      </div>




      

      <Separator className="my-12 bg-gray-800" />


      

      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h4 className="text-white mb-3">
          {t(trans.critique.h4, language)}
        </h4>
        <p className="whitespace-pre-wrap">
          {t(trans.critique.abs, language)}
        </p>
        <br />
        <p className="whitespace-pre-wrap">
          {t(trans.critique.p_intro, language)}
        </p>
        <br />
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.critique.p_hist, language),
          }}
        />
        <br />
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.critique.p_immune, language),
          }}
        />
        <br />
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.critique.p_dna, language),
          }}
        />
        <br />
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.critique.p_dna_clarify, language),
          }}
        />
        <br />
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.critique.p_blood, language),
          }}
        />
        <br />
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              trans.critique.p_blood_rebuttal,
              language,
            ),
          }}
        />
        <br />
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.critique.p_fusion, language),
          }}
        />
        <br />
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.critique.p_stats, language),
          }}
        />
        <br />
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.critique.p_method, language),
          }}
        />
        <br />
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.critique.p_conc, language),
          }}
        />
      </div>

      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h4 className="text-white mb-3">
          {t(trans.critique.faq.h4, language)}
        </h4>
        <ul className="list-none space-y-4">
          <li>
            <p className="text-gray-400 italic">
              {t(trans.critique.faq.q1, language)}
            </p>
            <p
              className="text-gray-300 pl-4 border-l-2 border-blue-700 ml-2 mt-2"
              dangerouslySetInnerHTML={{
                __html: t(trans.critique.faq.a1, language),
              }}
            />
          </li>
          <li>
            <p className="text-gray-400 italic">
              {t(trans.critique.faq.q2, language)}
            </p>
            <p
              className="text-gray-300 pl-4 border-l-2 border-blue-700 ml-2 mt-2"
              dangerouslySetInnerHTML={{
                __html: t(trans.critique.faq.a2, language),
              }}
            />
          </li>
          <li>
            <p className="text-gray-400 italic">
              {t(trans.critique.faq.q3, language)}
            </p>
            <p
              className="text-gray-300 pl-4 border-l-2 border-blue-700 ml-2 mt-2"
              dangerouslySetInnerHTML={{
                __html: t(trans.critique.faq.a3, language),
              }}
            />
          </li>
          <li>
            <p className="text-gray-400 italic">
              {t(trans.critique.faq.q4, language)}
            </p>
            <p
              className="text-gray-300 pl-4 border-l-2 border-blue-700 ml-2 mt-2"
              dangerouslySetInnerHTML={{
                __html: t(trans.critique.faq.a4, language),
              }}
            />
          </li>
          <li>
            <p className="text-gray-400 italic">
              {t(trans.critique.faq.q5, language)}
            </p>
            <p
              className="text-gray-300 pl-4 border-l-2 border-blue-700 ml-2 mt-2"
              dangerouslySetInnerHTML={{
                __html: t(trans.critique.faq.a5, language),
              }}
            />
          </li>
          <li>
            <p className="text-gray-400 italic">
              {t(trans.critique.faq.q6, language)}
            </p>
            <p
              className="text-gray-300 pl-4 border-l-2 border-blue-700 ml-2 mt-2"
              dangerouslySetInnerHTML={{
                __html: t(trans.critique.faq.a6, language),
              }}
            />
          </li>
          <li>
            <p className="text-gray-400 italic">
              {t(trans.critique.faq.q7, language)}
            </p>
            <p
              className="text-gray-300 pl-4 border-l-2 border-blue-700 ml-2 mt-2"
              dangerouslySetInnerHTML={{
                __html: t(trans.critique.faq.a7, language),
              }}
            />
          </li>
          <li>
            <p className="text-gray-400 italic">
              {t(trans.critique.faq.q8, language)}
            </p>
            <p
              className="text-gray-300 pl-4 border-l-2 border-blue-700 ml-2 mt-2"
              dangerouslySetInnerHTML={{
                __html: t(trans.critique.faq.a8, language),
              }}
            />
          </li>
          <li>
            <p className="text-gray-400 italic">
              {t(trans.critique.faq.q9, language)}
            </p>
            <p
              className="text-gray-300 pl-4 border-l-2 border-blue-700 ml-2 mt-2"
              dangerouslySetInnerHTML={{
                __html: t(trans.critique.faq.a9, language),
              }}
            />
          </li>
          <li>
            <p className="text-gray-400 italic">
              {t(trans.critique.faq.q10, language)}
            </p>
            <p
              className="text-gray-300 pl-4 border-l-2 border-blue-700 ml-2 mt-2"
              dangerouslySetInnerHTML={{
                __html: t(trans.critique.faq.a10, language),
              }}
            />
          </li>
        </ul>
      </div>
      <PdfEmbed
        src={t(trans.critique.pdf_semantics_url, language)}
        title={t(trans.critique.pdf_semantics_name, language)}
      />

      <h3>{t(trans.demonic.h3, language)}</h3>
      <YouTubeEmbed
        videoId="TpY0hIwqtUU"
        title={t(trans.demonic.vid, language)}
      />

      <h3>{t(trans.books.h3, language)}</h3>
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h4 className="text-white mb-2">
          {t(trans.books.book1.title, language)}
        </h4>
        <p className="text-gray-500 text-sm mb-3">
          {t(trans.books.book1.author, language)}
        </p>
        <p>{t(trans.books.book1.desc, language)}</p>
      </div>
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h4 className="text-white mb-2">
          {t(trans.books.book2.title, language)}
        </h4>
        <p className="text-gray-500 text-sm mb-3">
          {t(trans.books.book2.author, language)}
        </p>
        <p>{t(trans.books.book2.desc, language)}</p>
        <p className="text-gray-500 text-sm mt-4">
          {t(trans.books.book2.source, language)}
        </p>
      </div>
    </motion.section>
  );
};