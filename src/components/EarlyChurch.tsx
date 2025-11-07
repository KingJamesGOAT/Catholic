import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { Download, BookOpen, Cross, Users, Award, ChevronDown, ChevronUp, Church } from 'lucide-react';
import { Separator } from './ui/separator';
import { useLanguage } from '../lib/i18n/LanguageContext';
import { translations, t } from '../lib/i18n/translations';
import { themeTranslations } from '../lib/i18n/earlyChurchTranslations';
import { earlyChurchDocumentsData } from '../lib/i18n/earlyChurchData';

interface Quote {
  text: string;
  reference: string;
  theme?: string;
}

interface Document {
  title: string;
  author: string;
  date: string;
  summary: string;
  primaryQuote: Quote;
  additionalQuotes?: Quote[];
  pdfFile: string;
  themes?: string[];
}

// Helper function to get localized documents
function getLocalizedDocuments(lang: string): Document[] {
  return earlyChurchDocumentsData.map(doc => ({
    title: doc.title[lang as 'en' | 'fr' | 'es' | 'de'],
    author: doc.author[lang as 'en' | 'fr' | 'es' | 'de'],
    date: doc.date[lang as 'en' | 'fr' | 'es' | 'de'],
    summary: doc.summary[lang as 'en' | 'fr' | 'es' | 'de'],
    primaryQuote: {
      text: doc.primaryQuote.text[lang as 'en' | 'fr' | 'es' | 'de'],
      reference: doc.primaryQuote.reference[lang as 'en' | 'fr' | 'es' | 'de'],
      theme: doc.primaryQuote.theme
    },
    additionalQuotes: doc.additionalQuotes?.map(quote => ({
      text: quote.text[lang as 'en' | 'fr' | 'es' | 'de'],
      reference: quote.reference[lang as 'en' | 'fr' | 'es' | 'de'],
      theme: quote.theme
    })),
    pdfFile: doc.pdfFile,
    themes: doc.themes
  }));
}

const OLD_documents: Document[] = [
  {
    title: 'Letter of Barnabas',
    author: 'St. Barnabas',
    date: 'c. 75 AD',
    summary: 'An early epistle attributed to Barnabas, companion of St. Paul. Demonstrates early Christian use of the deuterocanonical books as Scripture.',
    primaryQuote: {
      text: 'Since, therefore, He was about to be manifested and to suffer in the flesh, His suffering was foreshown. For the prophet speaks against Israel, "Woe to their soul, because they have counseled an evil counsel against themselves" saying, "Let us bind the just one, because he is displeasing to us."',
      reference: 'Letter of Barnabas §6, citing Isaiah 3:9 and Wisdom 2:12',
      theme: 'Deuterocanon'
    },
    pdfFile: 'Letter_of_Barnabas.pdf',
    themes: ['Deuterocanon', 'Scripture', 'Prophecy']
  },
  {
    title: 'First Epistle of Clement to the Corinthians',
    author: 'St. Pope Clement I',
    date: 'c. 80 AD',
    summary: 'Written by the fourth Pope to restore order in Corinth. Demonstrates papal authority, apostolic succession, and early use of deuterocanonical books.',
    primaryQuote: {
      text: 'The apostles have preached the gospel to us from the Lord Jesus Christ... they appointed the first fruits of their labors, having first proved them by the Spirit, to be bishops and deacons... they appointed those ministers already mentioned, and afterwards gave instructions, that when these should fall asleep, other approved men should succeed them in their ministry.',
      reference: '1 Clement §§42, 44',
      theme: 'Succession'
    },
    additionalQuotes: [
      {
        text: 'By the word of His might He established all things, and by His word He can overthrow them. "Who shall say unto Him, \'What have you done?\' or, \'Who shall resist the power of His strength?\'"',
        reference: '1 Clement §27, citing Wisdom 12:12',
        theme: 'Deuterocanon'
      },
      {
        text: 'You therefore, who laid the foundation of this sedition, submit yourselves to the presbyters... If, however, any shall disobey the words spoken by Him through us, let them know that they will involve themselves in transgression and serious danger.',
        reference: '1 Clement §§57-59',
        theme: 'Authority'
      },
      {
        text: 'The church of God which sojourns at Rome, to the church of God sojourning at Corinth... that shameful and detestable sedition... has suffered grievous injury. It is right and holy therefore, men and brethren, rather to obey God than to follow those who, through pride and sedition, have become the leaders of a detestable emulation.',
        reference: '1 Clement §§1, 14',
        theme: 'Primacy'
      }
    ],
    pdfFile: 'Clement_of_Rome.pdf',
    themes: ['Authority', 'Succession', 'Primacy', 'Deuterocanon']
  },
  {
    title: 'Letters of Ignatius of Antioch',
    author: 'St. Ignatius of Antioch',
    date: 'c. 107 AD',
    summary: 'Seven letters written en route to martyrdom in Rome. First use of "Catholic Church," affirms episcopal structure, Real Presence, and Roman primacy.',
    primaryQuote: {
      text: 'Let no man do anything connected with the Church without the bishop. Let that be deemed a proper Eucharist, which is administered either by the bishop, or by one to whom he has entrusted it. Wherever the bishop shall appear, there let the multitude also be; even as, wherever Jesus Christ is, there is the Catholic Church.',
      reference: 'Letter to the Smyrnaeans §8',
      theme: 'Catholic Church'
    },
    additionalQuotes: [
      {
        text: 'Ignatius... to the Church which has obtained mercy... which is beloved and enlightened... which also presides in the place of the region of the Romans, worthy of God, worthy of honor, worthy of the highest happiness... and which presides over love, is named from Christ, and from the Father.',
        reference: 'Letter to the Romans, Introduction',
        theme: 'Primacy'
      },
      {
        text: 'You have never envied anyone; you have taught others... I do not, as Peter and Paul, issue commandments unto you.',
        reference: 'Letter to the Romans §§3-4',
        theme: 'Primacy'
      }
    ],
    pdfFile: 'Ignatius_of_Antioch.pdf',
    themes: ['Catholic Church', 'Eucharist', 'Authority', 'Primacy']
  },
  {
    title: 'Epistle to the Philippians',
    author: 'St. Polycarp',
    date: 'c. 110–140 AD',
    summary: 'Letter from direct disciple of St. John the Apostle. Affirms faith and works, cites deuterocanonical Scripture as authoritative.',
    primaryQuote: {
      text: 'Stand fast, therefore, in these things... When you can do good, defer it not, because "alms delivers from death." Be all of you subject one to another, "having your conduct blameless among the Gentiles," that you may both receive praise for your good works, and the Lord may not be blasphemed through you.',
      reference: 'Epistle to the Philippians §10, citing Tobit 4:10, 12:9',
      theme: 'Deuterocanon'
    },
    pdfFile: 'Polycarp_Epistle_Philippians.pdf',
    themes: ['Faith', 'Works', 'Deuterocanon']
  },
  {
    title: 'Memoirs of Hegesippus',
    author: 'St. Hegesippus',
    date: 'c. 130 AD',
    summary: 'Early Church historian who documented apostolic succession in Rome. His testimony establishes the continuity of papal succession.',
    primaryQuote: {
      text: 'And when I had come to Rome I remained there until Pope Anicetus, whose deacon was Eleutherus. And Anicetus was succeeded by Soter, and he by Eleutherus. In every succession, and in every city that is held which is preached by the law and the prophets and the Lord.',
      reference: 'Memoirs, quoted in Eusebius, Church History Book 4, Ch. 22, §3',
      theme: 'Succession'
    },
    pdfFile: 'Hegesippus_Memoirs.pdf',
    themes: ['Succession', 'Primacy', 'Tradition']
  },
  {
    title: 'Martyrdom of Polycarp',
    author: 'Eyewitness (Church of Smyrna)',
    date: 'c. 155 AD',
    summary: 'Eyewitness account of St. Polycarp\'s martyrdom. Second use of term "Catholic Church" in Christian literature.',
    primaryQuote: {
      text: 'This, then, is the account of the blessed Polycarp... He was not merely an illustrious teacher, but also a pre-eminent martyr... having through patience overcome the unjust governor, and thus acquired the crown of immortality, he now, with the apostles and all the righteous, rejoicingly glorifies God... and blesses our Lord Jesus Christ, the Savior of our souls, the Governor of our bodies, and the Shepherd of the Catholic Church throughout the world.',
      reference: 'Martyrdom of Polycarp §19',
      theme: 'Catholic Church'
    },
    additionalQuotes: [
      {
        text: 'Like a noble ram... he was ready to be offered as a whole burnt offering to God.',
        reference: 'Martyrdom §14',
        theme: 'Martyrdom'
      }
    ],
    pdfFile: 'Martyrdom_of_Polycarp.pdf',
    themes: ['Martyrdom', 'Catholic Church', 'Witness']
  },
  {
    title: 'First Apology & Dialogue with Trypho',
    author: 'St. Justin Martyr',
    date: 'c. 155–165 AD',
    summary: 'Defense of Christianity to Roman Emperor. Explains Real Presence in Eucharist, references "Catholic faith," and develops Marian typology.',
    primaryQuote: {
      text: 'Not as common bread and common drink do we receive these; but... we have been taught that the food which is blessed by the prayer of His word, and from which our blood and flesh by transmutation are nourished, is the flesh and blood of that Jesus who was made flesh.',
      reference: 'First Apology §66',
      theme: 'Eucharist'
    },
    additionalQuotes: [
      {
        text: 'For the men of former generations, who instituted private and public rites in honor of such as were more powerful, caused forgetfulness of the Catholic faith to take possession of their posterity.',
        reference: 'On the Sole Government of God, Ch. 1',
        theme: 'Catholic Church'
      },
      {
        text: '[Jesus] became man by the Virgin, in order that the disobedience which proceeded from the serpent might receive its destruction in the same manner in which it derived its origin. For Eve, who was a virgin and undefiled, having conceived the word of the serpent, brought forth disobedience and death. But the Virgin Mary received faith and joy... And by her has He been born... and by whom God destroys both the serpent and those angels and men who are like him.',
        reference: 'Dialogue with Trypho §100',
        theme: 'Mary'
      }
    ],
    pdfFile: 'Justin_martyr.pdf',
    themes: ['Eucharist', 'Catholic Church', 'Mary', 'Apologetics']
  },
  {
    title: 'Diatessaron',
    author: 'Tatian the Syrian',
    date: 'c. 160–175 AD',
    summary: 'Gospel harmony demonstrating early recognition of Peter as the Rock upon which Christ built His Church.',
    primaryQuote: {
      text: 'He said unto them, "And you, what say you that I am?" Simon Cephas answered and said, "Thou art the Messiah, the Son of the living God." Jesus answered and said unto him, "Blessed art thou, Simon son of Jonah... thou art Cephas, and on this rock will I build my church; and the gates of Hades shall not prevail against it."',
      reference: 'Diatessaron §23, citing Matthew 16:16-18',
      theme: 'Primacy'
    },
    pdfFile: 'Tatian_Diatessaron.pdf',
    themes: ['Primacy', 'Rock', 'Authority']
  },
  {
    title: 'To Diognetus',
    author: 'Mathetes',
    date: 'c. 160 AD',
    summary: 'Anonymous letter defending Christianity. References preservation of apostolic tradition through the Church.',
    primaryQuote: {
      text: 'This is He who, being from everlasting, is today called the Son; through whom the Church is enriched, and grace, widely spread, increases in the saints... Then the fear of the law is chanted, and the grace of the prophets is known, and the faith of the gospels is established, and the tradition of the Apostles is preserved, and the grace of the Church exults.',
      reference: 'To Diognetus §11',
      theme: 'Tradition'
    },
    pdfFile: 'To_Diognetus.pdf',
    themes: ['Tradition', 'Church', 'Apostles']
  },
  {
    title: 'Letter to Pope Soter',
    author: 'St. Dionysius of Corinth',
    date: 'c. 170 AD',
    summary: 'Letter to Pope Soter affirming Peter and Paul\'s joint founding of Rome and Corinth, and Roman charitable primacy.',
    primaryQuote: {
      text: 'You have thus by such an admonition bound together the planting of Peter and of Paul at Rome and Corinth. For both of them planted and likewise taught us in our Corinth. And they taught together in like manner in Italy, and suffered martyrdom at the same time.',
      reference: 'Letter to Pope Soter, quoted in Eusebius, Church History Book 2, Ch. 28, §8',
      theme: 'Primacy'
    },
    additionalQuotes: [
      {
        text: 'From the beginning it has been your practice to do good to all the brethren in various ways... Thus relieving the want of the needy... you Romans keep up the hereditary customs of the Romans, which your blessed bishop Soter has not only maintained, but also added to.',
        reference: 'Quoted in Eusebius, Church History Book 4, Ch. 23, §§9-11',
        theme: 'Primacy'
      },
      {
        text: 'To-day we have passed the Lord\'s holy day, in which we have read your epistle. From it, whenever we read it, we shall always be able to draw advice, as also from the former epistle, which was written to us through Clement.',
        reference: 'Quoted in Eusebius, Church History Book 4, Ch. 23, §11',
        theme: 'Tradition'
      }
    ],
    pdfFile: 'Dionysius_of_Corinth.pdf',
    themes: ['Primacy', 'Rome', 'Tradition']
  },
  {
    title: 'Against Heresies',
    author: 'St. Irenaeus of Lyon',
    date: 'c. 180 AD',
    summary: 'Monumental defense of orthodoxy against Gnosticism. Establishes apostolic succession, Roman primacy, Marian typology, deuterocanonical authority, and universal Catholic faith.',
    primaryQuote: {
      text: 'It is within the power of all, therefore, in every Church, who may wish to see the truth, to contemplate clearly the tradition of the apostles manifested throughout the whole world... Since, however, it would be very tedious to reckon up the successions of all the Churches, we do put to confusion all those who assemble in unauthorized meetings by indicating that tradition derived from the apostles, of the very great, the very ancient, and universally known Church founded and organized at Rome by the two most glorious apostles, Peter and Paul... For it is a matter of necessity that every Church should agree with this Church, on account of its pre-eminent authority.',
      reference: 'Against Heresies Book 3, Ch. 3, §§1-2',
      theme: 'Primacy'
    },
    additionalQuotes: [
      {
        text: 'The Universal Church, moreover, through the whole world, has received this tradition from the apostles... But [the superior skill spoken of] is not found in this... while the Catholic Church possesses one and the same faith throughout the whole world, as we have already said.',
        reference: 'Against Heresies Book 1, Ch. 10, §3; Book 2, Ch. 9, §1',
        theme: 'Catholic Church'
      },
      {
        text: 'The Church, having received this preaching and this faith, although scattered throughout the whole world, yet, as if occupying but one house, carefully preserves it... For the Churches which have been planted in Germany do not believe or hand down anything different, nor do those in Spain, nor those in Gaul, nor those in the East, nor those in Egypt, nor those in Libya... But as the sun, that creature of God, is one and the same throughout the whole world, so also the preaching of the truth shines everywhere.',
        reference: 'Against Heresies Book 1, Ch. 10, §2',
        theme: 'Catholic Church'
      },
      {
        text: 'Matthew also issued a written Gospel among the Hebrews in their own dialect, while Peter and Paul were preaching at Rome, and laying the foundations of the Church.',
        reference: 'Against Heresies Book 3, Ch. 1, §1',
        theme: 'Primacy'
      },
      {
        text: 'The blessed apostles, then, having founded and built up the Church, committed into the hands of Linus the office of the episcopate... To this Clement there succeeded Evaristus. Alexander followed Evaristus; then, sixth from the apostles, Sixtus was appointed... Soter having succeeded Anicetus, Eleutherius does now, in the twelfth place from the apostles, hold the inheritance of the episcopate.',
        reference: 'Against Heresies Book 3, Ch. 3, §3',
        theme: 'Succession'
      },
      {
        text: 'But Polycarp also was not only instructed by apostles, and conversed with many who had seen Christ, but was also, by apostles in Asia, appointed bishop of the Church in Smyrna... having always taught the things which he had learned from the apostles, and which the Church has handed down, and which alone are true.',
        reference: 'Against Heresies Book 3, Ch. 3, §4',
        theme: 'Tradition'
      },
      {
        text: 'Those, however, who are believed to be presbyters by many, but serve their own lusts... shall be convicted by the Word... and they shall hear those words, to be found in Daniel the prophet: "O you seed of Canaan, and not of Judah, beauty has deceived you, and lust perverted your heart. You that are waxen old in wicked days, now your sins which you have committed aforetime have come to light."',
        reference: 'Against Heresies Book 4, Ch. 26, §3, citing Daniel 13:56 (Deuterocanon)',
        theme: 'Deuterocanon'
      },
      {
        text: 'In accordance with this design, Mary the Virgin is found obedient, saying, "Behold the handmaid of the Lord; be it unto me according to your word." But Eve was disobedient... And even as she, having indeed a husband, Adam, but being nevertheless as yet a virgin... having become disobedient, was made the cause of death, both to herself and to the entire human race; so also did Mary... by yielding obedience, become the cause of salvation, both to herself and the whole human race.',
        reference: 'Against Heresies Book 3, Ch. 22, §4',
        theme: 'Mary'
      },
      {
        text: 'That the Lord then was manifestly coming to His own things... through the obedience which was exhibited by Himself when He hung upon a tree, the effects also of that deception being done away with, by which that virgin Eve... was unhappily misled—was happily announced, through means of the truth spoken by the angel to the Virgin Mary... And thus, as the human race fell into bondage to death by means of a virgin, so is it rescued by a virgin; virginal disobedience having been balanced in the opposite scale by virginal obedience.',
        reference: 'Against Heresies Book 5, Ch. 19, §1',
        theme: 'Mary'
      }
    ],
    pdfFile: 'Irenaeu.pdf',
    themes: ['Primacy', 'Succession', 'Catholic Church', 'Mary', 'Deuterocanon', 'Tradition']
  },
  {
    title: 'The Stromata',
    author: 'St. Clement of Alexandria',
    date: 'c. 190–200 AD',
    summary: 'Theological work affirming the antiquity and singularity of the Catholic Church as the true Church of Christ.',
    primaryQuote: {
      text: 'For that the human assemblies which they held were posterior to the Catholic Church requires not many words to show... For from the very reason that God is one, and the Lord one, that which is in the highest degree honorable is lauded in consequence of its singleness, being an imitation of the one first principle... Therefore in substance and idea, in origin, in pre-eminence, we say that the ancient and Catholic Church is alone.',
      reference: 'The Stromata Book 7, Ch. 17',
      theme: 'Catholic Church'
    },
    pdfFile: 'Clement_of_Alexandria_Stromata.pdf',
    themes: ['Catholic Church', 'Unity', 'Authority']
  }
]; // End of OLD_documents - not used anymore

const themeIcons: { [key: string]: any } = {
  'Baptism': BookOpen,
  'Eucharist': Cross,
  'Authority': Award,
  'Unity': Users,
  'Succession': Award,
  'Faith': Cross,
  'Martyrdom': Cross,
  'Tradition': BookOpen,
  'Catholic Church': Church,
  'Primacy': Award,
  'Deuterocanon': BookOpen,
  'Mary': Users,
  'Rock': Award
};

function TimelineCard({ document, index }: { document: Document; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;
  const [showAdditional, setShowAdditional] = useState(false);
  const { language } = useLanguage();
  const trans = translations;

  return (
    <div className="relative flex items-center justify-center w-full mb-24">
      {/* Timeline dot - Desktop center */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-black z-10 hidden md:block"
      />

      {/* Timeline dot - Mobile left */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute left-4 w-3 h-3 rounded-full bg-blue-500 border-2 border-black z-10 md:hidden"
      />

      {/* Connecting line - Desktop */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-blue-500 to-transparent top-full hidden md:block"
        style={{ originTop: 'top' }}
      />

      {/* Connecting line - Mobile */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute left-4 w-0.5 h-24 bg-gradient-to-b from-blue-500 to-transparent top-full md:hidden"
        style={{ originTop: 'top' }}
      />

      {/* Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
        transition={{ duration: 0.6 }}
        className={`w-full pl-12 md:pl-0 md:w-[calc(50%-3rem)] ${
          isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
        }`}
      >
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-blue-900/20">
          {/* Date badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="inline-block px-3 py-1 bg-blue-900/30 border border-blue-800 rounded-full text-xs text-blue-300 mb-4"
          >
            {document.date}
          </motion.div>

          {/* Title and Author */}
          <h3 className="text-white mb-2">{document.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{t(trans.earlyChurch.by, language)} {document.author}</p>

          {/* Themes */}
          {document.themes && (
            <div className="flex flex-wrap gap-2 mb-4">
              {document.themes.map((theme) => {
                const Icon = themeIcons[theme] || BookOpen;
                const translatedTheme = themeTranslations[theme] ? t(themeTranslations[theme], language) : theme;
                return (
                  <div
                    key={theme}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-400"
                  >
                    <Icon size={12} />
                    <span>{translatedTheme}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Summary */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {document.summary}
          </p>

          {/* Primary Quote */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-black/40 border-l-4 border-blue-600 p-4 mb-4 rounded-r"
          >
            <p className="text-gray-300 italic text-sm mb-2">
              "{document.primaryQuote.text}"
            </p>
            <p className="text-gray-500 text-xs">— {document.primaryQuote.reference}</p>
            {document.primaryQuote.theme && (
              <span className="inline-block mt-2 px-2 py-1 bg-blue-900/30 rounded text-xs text-blue-400">
                {themeTranslations[document.primaryQuote.theme] ? t(themeTranslations[document.primaryQuote.theme], language) : document.primaryQuote.theme}
              </span>
            )}
          </motion.div>

          {/* Additional Quotes */}
          {document.additionalQuotes && document.additionalQuotes.length > 0 && (
            <div className="mb-4">
              <button
                onClick={() => setShowAdditional(!showAdditional)}
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors mb-3"
              >
                {showAdditional ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                <span>
                  {showAdditional ? t(trans.earlyChurch.hideAdditional, language) : t(trans.earlyChurch.showAdditional, language)} {document.additionalQuotes.length} {document.additionalQuotes.length > 1 ? t(trans.earlyChurch.additionalQuotes, language) : t(trans.earlyChurch.additionalQuote, language)}
                </span>
              </button>

              <AnimatePresence>
                {showAdditional && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    {document.additionalQuotes.map((quote, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.01 }}
                        className="bg-black/40 border-l-4 border-gray-600 p-4 rounded-r"
                      >
                        <p className="text-gray-300 italic text-sm mb-2">
                          "{quote.text}"
                        </p>
                        <p className="text-gray-500 text-xs">— {quote.reference}</p>
                        {quote.theme && (
                          <span className="inline-block mt-2 px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-400">
                            {themeTranslations[quote.theme] ? t(themeTranslations[quote.theme], language) : quote.theme}
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Download button */}
          <motion.a
            href={`/pdfs/${document.pdfFile}`}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 hover:bg-blue-900/50 border border-blue-800 hover:border-blue-700 rounded text-sm text-blue-300 hover:text-blue-200 transition-all duration-200"
          >
            <Download size={16} />
            <span>{t(trans.earlyChurch.downloadPDF, language)}</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default function EarlyChurch() {
  const timelineRef = useRef(null);
  const { language } = useLanguage();
  const trans = translations;
  const documents = getLocalizedDocuments(language);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-900 via-black to-black pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-4">{t(trans.earlyChurch.title, language)}</h1>
            <p className="text-xl text-gray-400 mb-6">
              {t(trans.earlyChurch.subtitle, language)}
            </p>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-400 leading-relaxed">
                {t(trans.earlyChurch.intro, language)}
              </p>
            </div>
          </motion.div>

          {/* Decorative separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto mt-12"
          />
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative px-4 pb-32" ref={timelineRef}>
        <div className="container mx-auto max-w-6xl">
          {/* Central vertical line - desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 via-blue-800 to-transparent top-0 hidden md:block" />
          
          {/* Left vertical line - mobile */}
          <div className="absolute left-4 w-0.5 h-full bg-gradient-to-b from-blue-600 via-blue-800 to-transparent top-0 md:hidden" />

          {/* Timeline cards */}
          <div className="relative">
            {documents.map((document, index) => (
              <TimelineCard key={document.title} document={document} index={index} />
            ))}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center mt-12"
          >
            <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-black" />
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16 max-w-2xl mx-auto"
          >
            <Separator className="mb-8 bg-gray-800" />
            <p className="text-gray-400 leading-relaxed mb-4">
              {t(trans.earlyChurch.conclusion, language)}
            </p>
            <p className="text-gray-500 text-sm italic">
              {t(trans.earlyChurch.conclusionQuote, language)}
            </p>
            <p className="text-gray-600 text-xs mt-2">— {t(trans.earlyChurch.conclusionAttribution, language)}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
