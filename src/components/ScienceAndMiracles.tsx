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
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { t } from "../lib/i18n/translations";
import { scienceAndMiraclesTranslations } from "../lib/i18n/ScienceAndMiraclesTranslations";
import TableOfContents from "./Journey/TableOfContents";

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
      {/* Header (No sidebar) */}
      <motion.header
        className="text-center max-w-4xl mx-auto mb-12 pt-24"
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

        <div className="border-l-4 border-blue-600 px-6 py-4 bg-gray-900/50 rounded-lg max-w-2xl mx-auto text-center">
          <blockquote className="italic text-gray-300">
            "{t(trans.quote.text, language)}"
          </blockquote>
          <cite className="block text-gray-500 mt-2 not-italic">
            — {t(trans.quote.source, language)}
          </cite>
        </div>
      </motion.header>

      {/* 3-Block Selector (Centered) */}
      <motion.div
        // Added flex and justify-center for centering the inner block
        className="flex justify-center max-w-5xl mx-auto mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Inner div restricts width to content and applies the grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-fit">
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
            icon={
              <Sparkles className="w-6 h-6 text-blue-300" />
            }
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
        </div>
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

  const keySciList = [
    trans.fatima.keySci.li1,
    trans.fatima.keySci.li2,
    trans.fatima.keySci.li3,
    trans.fatima.keySci.li4,
    trans.fatima.keySci.li5,
  ];

  const invalidList = [
    trans.fatima.invalid.li1,
    trans.fatima.invalid.li2,
    trans.fatima.invalid.li3,
    trans.fatima.invalid.li4,
  ];

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

      {/* RENDER KEY SCIENTIFIC OBSERVATIONS - NEW STYLED VERSION */}
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h4 className="text-white mb-4">
          {t(trans.fatima.keySci.h4, language)}
        </h4>
        <div className="space-y-4">
          {keySciList.map((item, index) => {
            // Logic to separate the leading number (1., 2., 3., etc.) from the content
            const rawHtml = t(item, language);
            const match = rawHtml.match(/^(\d+\.\s)(.*)/s);

            const number = match ? match[1] : "";
            const content = match ? match[2] : rawHtml;

            return (
              <div
                key={index}
                // Apply a visually distinct card-like style for each observation
                className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-blue-700 transition-all duration-300"
              >
                <span className="text-blue-400 font-semibold flex-shrink-0 mt-1">
                  {number}
                </span>
                <span
                  className="text-gray-300 leading-relaxed"
                  // Use dangerouslySetInnerHTML for the remaining complex content
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* RENDER INVALIDATED HYPOTHESES - NEW STYLED VERSION */}
      <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 mt-6">
        <h4 className="text-white mb-4">
          {t(trans.fatima.invalid.h4, language)}
        </h4>
        <div className="space-y-4">
          {invalidList.map((item, index) => (
            <div
              key={index}
              // Style block to clearly mark refuted hypothesis
              className="flex items-start gap-3 p-3 bg-red-900/30 rounded-lg border border-red-700"
            >
              <XCircle
                className="text-red-400 mt-1 flex-shrink-0"
                size={20}
              />
              <span
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(item, language),
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* RENDER CONCLUSION IN STYLED BLOCK */}
      <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800 rounded-lg p-6">
        <h4 className="text-white mb-2">
          {t(trans.fatima.conclusion.h4, language)}
        </h4>
        <p className="text-gray-300">
          {t(trans.fatima.conclusion.p1, language)}
        </p>
      </div>

      {/* RENDER ARGUMENT PDF */}
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
        videoId="ZbSjuMxXX-E?start=128"
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
      <p
        dangerouslySetInnerHTML={{
          __html: t(trans.intro.p1, language),
        }}
      />
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
      <p>{t(trans.lanciano.findings.p1_intro, language)}</p>

      {/* Re-formatted 6 points */}
      <div className="space-y-4 mt-6">
        {/* Point 1 */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-400 flex-shrink-0 mt-1"
              size={20}
            />
            <div>
              <h5 className="text-white font-semibold mb-1">
                {t(trans.lanciano.findings.li1_title, language)}
              </h5>
              <p className="text-gray-400 mb-3">
                {t(trans.lanciano.findings.li1_desc, language)}
              </p>
              <div className="bg-gray-800/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-300 italic text-sm">
                  "{t(trans.lanciano.findings.li1_quote, language)}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Point 2 */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-400 flex-shrink-0 mt-1"
              size={20}
            />
            <div>
              <h5 className="text-white font-semibold mb-1">
                {t(trans.lanciano.findings.li2_title, language)}
              </h5>
              <p className="text-gray-400 mb-3">
                {t(trans.lanciano.findings.li2_desc, language)}
              </p>
              <div className="bg-gray-800/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-300 italic text-sm">
                  "{t(trans.lanciano.findings.li2_quote, language)}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Point 3 */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-400 flex-shrink-0 mt-1"
              size={20}
            />
            <div>
              <h5 className="text-white font-semibold mb-1">
                {t(trans.lanciano.findings.li3_title, language)}
              </h5>
              <p className="text-gray-400 mb-3">
                {t(trans.lanciano.findings.li3_desc, language)}
              </p>
              <div className="bg-gray-800/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-300 italic text-sm">
                  "{t(trans.lanciano.findings.li3_quote, language)}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Point 4 */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-400 flex-shrink-0 mt-1"
              size={20}
            />
            <div>
              <h5 className="text-white font-semibold mb-1">
                {t(trans.lanciano.findings.li4_title, language)}
              </h5>
              <p className="text-gray-400 mb-3">
                {t(trans.lanciano.findings.li4_desc, language)}
              </p>
              <div className="bg-gray-800/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-300 italic text-sm">
                  "{t(trans.lanciano.findings.li4_quote, language)}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Point 5 */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-400 flex-shrink-0 mt-1"
              size={20}
            />
            <div>
              <h5 className="text-white font-semibold mb-1">
                {t(trans.lanciano.findings.li5_title, language)}
              </h5>
              <p className="text-gray-400 mb-3">
                {t(trans.lanciano.findings.li5_desc, language)}
              </p>
              <div className="bg-gray-800/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-300 italic text-sm">
                  "{t(trans.lanciano.findings.li5_quote, language)}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Point 6 */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-400 flex-shrink-0 mt-1"
              size={20}
            />
            <div>
              <h5 className="text-white font-semibold mb-1">
                {t(trans.lanciano.findings.li6_title, language)}
              </h5>
              <p className="text-gray-400 mb-3">
                {t(trans.lanciano.findings.li6_desc, language)}
              </p>
              <div className="bg-gray-800/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-300 italic text-sm">
                  "{t(trans.lanciano.findings.li6_quote, language)}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Anomalous Freshness */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
        <h5 className="text-white mb-3">
          {t(trans.lanciano.freshness.h5, language)}
        </h5>
        <p className="text-gray-300">
          {t(trans.lanciano.freshness.p1, language)}
        </p>
        <div className="bg-gray-800/50 border-l-4 border-purple-600 p-4 rounded-r-lg mt-4">
          <p className="text-gray-300 italic text-sm">
            "{t(trans.lanciano.freshness.quote, language)}"
          </p>
        </div>
        <p className="text-gray-400 mt-4">
          {t(trans.lanciano.freshness.p2, language)}
        </p>
      </div>

      {/* Conclusion */}
      <div className="bg-green-900/10 border border-green-800 rounded-lg p-6 my-6">
        <h5 className="text-white mb-3">{t(trans.lanciano.conclusion.h5, language)}</h5>
        <p className="text-gray-300 mb-4">
          {t(trans.lanciano.conclusion.p1_methods, language)}
        </p>
        <ul className="list-none space-y-2 pl-4 mb-4">
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">•</span>
            <span className="text-gray-300">
              {t(trans.lanciano.conclusion.li_methods1, language)}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">•</span>
            <span className="text-gray-300">
              {t(trans.lanciano.conclusion.li_methods2, language)}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">•</span>
            <span className="text-gray-300">
              {t(trans.lanciano.conclusion.li_methods3, language)}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">•</span>
            <span className="text-gray-300">
              {t(trans.lanciano.conclusion.li_methods4, language)}
            </span>
          </li>
        </ul>
        <p className="text-gray-300 mb-4">
          {t(trans.lanciano.conclusion.p2_results, language)}
        </p>
        <ul className="list-none space-y-2 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">•</span>
            <span className="text-gray-300">
              {t(trans.lanciano.conclusion.li_results1, language)}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">•</span>
            <span className="text-gray-300">
              {t(trans.lanciano.conclusion.li_results2, language)}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">•</span>
            <span className="text-gray-300">
              {t(trans.lanciano.conclusion.li_results3, language)}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">•</span>
            <span className="text-gray-300">
              {t(trans.lanciano.conclusion.li_results4, language)}
            </span>
          </li>
        </ul>
        <p className="text-white font-semibold mt-4">
          {t(trans.lanciano.conclusion.p3_final, language)}
        </p>
      </div>

      <Separator className="my-12 bg-gray-800" />

      {/* Scientific Rebuttal Section */}
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h4 className="text-white mb-3">
          {t(trans.critique.h4, language)}
        </h4>
        <div className="space-y-6">
          <div className="bg-blue-900/10 border border-blue-800 rounded-lg p-6">
            <h5 className="text-white font-semibold mb-2">
              Abstract & Introduction
            </h5>
            <p
              className="text-gray-300 mb-4"
              dangerouslySetInnerHTML={{
                __html: t(trans.critique.abs, language),
              }}
            />
            <p
              className="text-gray-400 text-sm"
              dangerouslySetInnerHTML={{
                __html: t(trans.critique.p_intro, language),
              }}
            />
          </div>

          <div className="space-y-4">
            {/* I. Myocardial Histopathology */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(trans.critique.p_hist, language),
                }}
              />
            </div>

            {/* II. Presence of Viable Inflammatory Cells */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(trans.critique.p_immune, language),
                }}
              />
            </div>

            {/* III. DNA Analysis and STR Limitations */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(trans.critique.p_dna, language),
                }}
              />
            </div>

            {/* Clarifying the Misunderstanding */}
            <div className="bg-blue-900/10 border border-blue-800 rounded-lg p-6">
              <p
                className="text-gray-300 font-medium"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.critique.p_dna_clarify,
                    language,
                  ),
                }}
              />
            </div>

            {/* IV. Blood Typing and Hemagglutination Analysis */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p
                className="text-gray-300 mb-4"
                dangerouslySetInnerHTML={{
                  __html: t(trans.critique.p_blood, language),
                }}
              />
              <p
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.critique.p_blood_rebuttal,
                    language,
                  ),
                }}
              />
            </div>

            {/* V. Microscopic Fusion of Tissue and Bread Matrix (Highlight Fusion Point) */}
            <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Sparkles
                  className="text-red-400 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  {/* The title is now rendered via dangerouslySetInnerHTML from trans.critique.p_fusion, which starts with a bold tag */}
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: t(
                        trans.critique.p_fusion,
                        language,
                      ),
                    }}
                  />
                </div>
              </div>
            </div>

            {/* VI. Statistical Improbability and Multi-Case Consistency */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(trans.critique.p_stats, language),
                }}
              />
            </div>

            {/* VII. Methodological Clarifications and Minimum Protocol */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(trans.critique.p_method, language),
                }}
              />
            </div>
          </div>

          {/* Final Conclusion Block (Styled as a compelling summary) */}
          <div className="bg-green-900/10 border border-green-800 rounded-lg p-8 mt-6">
            <h3 className="text-white mb-4 flex items-center gap-3">
              <CheckCircle className="text-green-400" size={24} />
              {t(trans.critique.conclusionTitle, language)}
            </h3>
            <p
              className="text-gray-300 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: t(trans.critique.p_conc, language),
              }}
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 mt-6">
        <h4 className="text-white mb-3">
          {t(trans.critique.faq.h4, language)}
        </h4>
        <ul className="list-none space-y-4">
          {/* FAQ list items rendering logic must remain here */}
          {trans.critique.faq.q1 &&
            Array.from({ length: 10 }).map((_, index) => {
              // Type assertion to access dynamic keys safely
              const qKey = `q${index + 1}` as keyof typeof trans.critique.faq;
              const aKey = `a${index + 1}` as keyof typeof trans.critique.faq;

              // Ensure both Q and A keys exist before trying to render
              if (
                !trans.critique.faq[qKey] ||
                !trans.critique.faq[aKey]
              )
                return null;

              return (
                <li key={index}>
                  <p className="text-gray-400 italic">
                    {t(trans.critique.faq[qKey], language)}
                  </p>
                  <p
                    className="text-gray-300 pl-4 border-l-2 border-blue-700 ml-2 mt-2"
                    dangerouslySetInnerHTML={{
                      __html: t(
                        trans.critique.faq[aKey],
                        language,
                      ),
                    }}
                  />
                </li>
              );
            })}
        </ul>
      </div>

      {/* Semantics PDF */}
      <p className="text-gray-300 font-semibold mb-3 mt-8">
        {t(trans.critique.pdf_semantics_name, language)}
      </p>
      <PdfEmbed
        src={t(trans.critique.pdf_semantics_url, language)}
        title={t(trans.critique.pdf_semantics_name, language)}
      />

      {/* Demonic Question */}
      <h3>{t(trans.demonic.h3, language)}</h3>
      <YouTubeEmbed
        videoId="TpY0hIwqtUU"
        title={t(trans.demonic.vid, language)}
      />

      {/* Books Section */}
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