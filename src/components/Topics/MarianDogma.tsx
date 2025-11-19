import SmartText from "../SmartText";
import React from 'react';
import TopicLayout from '../Journey/TopicLayout';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { translations, t } from '../../lib/i18n/translations';

export default function MarianDogma() {
  const { language } = useLanguage();
  const trans = translations.marianDogma;

  return (
    <TopicLayout
      title={t(trans.title, language)}
      subtitle={t(trans.subtitle, language)}
      topicId="marian-dogma"
    >
      {/* Intro: Worship vs Veneration */}
      <section className="mb-12">
        <div className="bg-blue-950/30 border border-blue-800/50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t(trans.worshipTitle, language)}</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
                <SmartText ignore={["Latria", "Dulia", "Hyperdulia"]}>{t(trans.worshipIntro, language)}</SmartText>
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-yellow-500">
                        <h3 className="text-yellow-400 font-semibold">Latria</h3>
                        <p className="text-sm text-gray-400">{t(trans.latria, language)}</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-blue-500">
                        <h3 className="text-blue-400 font-semibold">Dulia</h3>
                        <p className="text-sm text-gray-400">{t(trans.dulia, language)}</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-purple-500">
                        <h3 className="text-purple-400 font-semibold">Hyperdulia</h3>
                        <p className="text-sm text-gray-400">{t(trans.hyperdulia, language)}</p>
                    </div>
                </div>
                <div className="aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                     <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/bSogHgWvJpk"
                        title="Do Catholics Worship Mary?"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
            <p className="mt-6 italic text-center text-gray-400">"{t(trans.augustineQuote, language)}"</p>
        </div>
      </section>

      {/* The New Eve */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-blue-500 rounded-full"/>
            {t(trans.newEveTitle, language)}
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
             <div className="space-y-4 text-gray-300">
                <p>{t(trans.newEveIntro, language)}</p>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h4 className="text-white font-semibold mb-2">{t(trans.patristicTitle, language)}</h4>
                    <blockquote className="italic text-gray-400 border-l-2 border-gray-700 pl-4 mb-2">
                        "{t(trans.irenaeusQuote, language)}"
                    </blockquote>
                     <p className="text-xs text-gray-500 text-right">— St. Irenaeus of Lyon</p>
                </div>
                <p>{t(trans.newEveImplication, language)}</p>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ywUTtlpTCA0"
                title="Mary as New Eve"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
            </div>
        </div>
      </section>

      {/* The Four Dogmas Intro */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-400 mb-4">
            {t(trans.dogmasTitle, language)}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">{t(trans.dogmasIntro, language)}</p>
        <div className="aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
             <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/HzqMkEu-OTo"
                title="The 4 Marian Dogmas"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
      </div>

      {/* Dogma 1: Mother of God */}
      <section className="mb-16 scroll-mt-20" id="theotokos">
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden">
            <div className="bg-gray-900/80 p-4 border-b border-gray-800 flex items-center justify-between">
                 <h3 className="text-xl font-bold text-white">1. {t(trans.theotokosTitle, language)}</h3>
                 <span className="text-xs font-mono text-blue-400 border border-blue-900 bg-blue-900/20 px-2 py-1 rounded">AD 431</span>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <p className="text-gray-300">
                      <SmartText ignore={["Theotokos"]}>{t(trans.theotokosContent, language)}</SmartText>
                    </p>
                    <div className="bg-blue-900/10 p-4 rounded-lg border border-blue-900/30">
                        <p className="italic text-blue-200 text-sm">"{t(trans.theotokosDef, language)}"</p>
                        <p className="text-xs text-blue-500 mt-2 text-right">Council of Ephesus</p>
                    </div>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden bg-black">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/NWyzrSeClr0"
                        title="Mother of God"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Dogma 2: Perpetual Virginity */}
      <section className="mb-16 scroll-mt-20" id="virginity">
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden">
             <div className="bg-gray-900/80 p-4 border-b border-gray-800 flex items-center justify-between">
                 <h3 className="text-xl font-bold text-white">2. {t(trans.virginityTitle, language)}</h3>
                 <span className="text-xs font-mono text-blue-400 border border-blue-900 bg-blue-900/20 px-2 py-1 rounded">AD 649</span>
            </div>
            <div className="p-6">
                <div className="mb-6 text-gray-300 space-y-4">
                    <p>{t(trans.virginityContent, language)}</p>
                    <p className="text-sm text-gray-400 italic border-l-2 border-indigo-500 pl-4">
                        "{t(trans.virginityJerome, language)}" — St. Jerome
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                     <div className="aspect-video rounded-lg overflow-hidden bg-black">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/9HPZWOUXArg" title="Virginity 1" allowFullScreen />
                    </div>
                    <div className="aspect-video rounded-lg overflow-hidden bg-black">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/m-mwIMPwhgQ" title="Virginity 2" allowFullScreen />
                    </div>
                    <div className="aspect-video rounded-lg overflow-hidden bg-black">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/QzZLq_OeV7Q" title="Virginity 3" allowFullScreen />
                    </div>
                </div>
            </div>
        </div>
      </section>

       {/* Dogma 3: Immaculate Conception */}
      <section className="mb-16 scroll-mt-20" id="immaculate">
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden">
             <div className="bg-gray-900/80 p-4 border-b border-gray-800 flex items-center justify-between">
                 <h3 className="text-xl font-bold text-white">3. {t(trans.immaculateTitle, language)}</h3>
                 <span className="text-xs font-mono text-blue-400 border border-blue-900 bg-blue-900/20 px-2 py-1 rounded">AD 1854</span>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <p className="text-gray-300">{t(trans.immaculateContent, language)}</p>
                    <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-800/50 text-center">
                        <p className="text-lg text-indigo-200 font-serif italic mb-2">"{t(trans.immaculateDef, language)}..."</p>
                        <p className="text-sm text-indigo-400">Ineffabilis Deus (Pope Pius IX)</p>
                    </div>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden bg-black shadow-2xl border border-gray-800">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/E4JLkcTKINc"
                        title="Is The Immaculate Conception Really Biblical?"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Dogma 4: Assumption */}
      <section className="mb-16 scroll-mt-20" id="assumption">
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden">
             <div className="bg-gray-900/80 p-4 border-b border-gray-800 flex items-center justify-between">
                 <h3 className="text-xl font-bold text-white">4. {t(trans.assumptionTitle, language)}</h3>
                 <span className="text-xs font-mono text-blue-400 border border-blue-900 bg-blue-900/20 px-2 py-1 rounded">AD 1950</span>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                     <p className="text-gray-300">{t(trans.assumptionContent, language)}</p>
                     <ul className="list-disc pl-5 space-y-2 text-gray-400 text-sm">
                        <li>{t(trans.assumptionPoint1, language)}</li>
                        <li>{t(trans.assumptionPoint2, language)}</li>
                     </ul>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden bg-black">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/PFc0Jndw-ng"
                        title="Assumption of Mary"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Other Doctrines */}
      <section className="mb-12 text-gray-300">
        <h2 className="text-xl font-bold text-white mb-4">{t(trans.otherDoctrinesTitle, language)}</h2>
        <p className="mb-4">{t(trans.otherDoctrinesIntro, language)}</p>
        <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-800/40 rounded-lg">
                <h4 className="font-bold text-white mb-1">Mediatrix & Advocate</h4>
                <p className="text-sm text-gray-400">{t(trans.mediatrixDesc, language)}</p>
            </div>
            <div className="p-4 bg-gray-800/40 rounded-lg">
                <h4 className="font-bold text-white mb-1">Queen of Heaven</h4>
                <p className="text-sm text-gray-400">{t(trans.queenDesc, language)}</p>
            </div>
        </div>
      </section>

      {/* Video: Every Objection Answered */}
      <section className="mb-16">
        <h3 className="text-xl font-bold text-white mb-4">{t(trans.videoObjectionsTitle, language)}</h3>
        <p className="text-gray-300 mb-6">{t(trans.videoObjectionsDesc, language)}</p>
        <div className="aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
            <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/0wzjAEHyizk"
            title="Every Objection to Mary Answered"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
        </div>
      </section>

      {/* Conclusion */}
      <div className="bg-gradient-to-br from-gray-900 to-blue-900/20 border border-gray-800 rounded-xl p-8 text-center mb-12">
        <h3 className="text-2xl font-bold text-white mb-4">{t(trans.conclusionTitle, language)}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
          {t(trans.conclusionText, language)}
        </p>
        <p className="text-blue-200 font-serif italic">
          "{t(trans.conclusionQuote, language)}"
        </p>
      </div>
      
      {/* Bridge */}
       <div className="bg-gray-900/50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
        <h3 className="text-lg font-bold text-white mb-2">{t(trans.bridge.title, language)}</h3>
        <p className="text-gray-300">{t(trans.bridge.p1, language)}</p>
      </div>

    </TopicLayout>
  );
}