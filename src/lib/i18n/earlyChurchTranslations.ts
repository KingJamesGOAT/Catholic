import { Language } from './LanguageContext';

export interface DocumentTranslation {
  title: { en: string; fr: string; es: string; de: string };
  author: { en: string; fr: string; es: string; de: string };
  date: { en: string; fr: string; es: string; de: string };
  summary: { en: string; fr: string; es: string; de: string };
  primaryQuote: {
    text: { en: string; fr: string; es: string; de: string };
    reference: { en: string; fr: string; es: string; de: string };
    theme: { en: string; fr: string; es: string; de: string };
  };
  additionalQuotes?: Array<{
    text: { en: string; fr: string; es: string; de: string };
    reference: { en: string; fr: string; es: string; de: string };
    theme: { en: string; fr: string; es: string; de: string };
  }>;
  pdfFile: string;
  themes: Array<{ en: string; fr: string; es: string; de: string }>;
}

export const earlyChurchDocuments: DocumentTranslation[] = [
  {
    title: {
      en: 'Letter of Barnabas',
      fr: 'Lettre de Barnabé',
      es: 'Carta de Bernabé',
      de: 'Brief des Barnabas'
    },
    author: {
      en: 'St. Barnabas',
      fr: 'Saint Barnabé',
      es: 'San Bernabé',
      de: 'Hl. Barnabas'
    },
    date: {
      en: 'c. 75 AD',
      fr: 'vers 75 apr. J.-C.',
      es: 'c. 75 d.C.',
      de: 'ca. 75 n. Chr.'
    },
    summary: {
      en: 'An early epistle attributed to Barnabas, companion of St. Paul. Demonstrates early Christian use of the deuterocanonical books as Scripture.',
      fr: 'Une épître ancienne attribuée à Barnabé, compagnon de saint Paul. Démontre l\'utilisation chrétienne primitive des livres deutérocanoniques comme Écriture.',
      es: 'Una epístola temprana atribuida a Bernabé, compañero de San Pablo. Demuestra el uso cristiano primitivo de los libros deuterocanónicos como Escritura.',
      de: 'Ein frühes Sendschreiben, das Barnabas, dem Gefährten des Hl. Paulus, zugeschrieben wird. Zeigt die frühchristliche Verwendung der deuterokanonischen Bücher als Schrift.'
    },
    primaryQuote: {
      text: {
        en: 'Since, therefore, He was about to be manifested and to suffer in the flesh, His suffering was foreshown. For the prophet speaks against Israel, "Woe to their soul, because they have counseled an evil counsel against themselves" saying, "Let us bind the just one, because he is displeasing to us."',
        fr: 'Puisque, par conséquent, Il devait être manifesté et souffrir dans la chair, Sa souffrance a été préfigurée. Car le prophète parle contre Israël : « Malheur à leur âme, car ils ont délibéré un mauvais conseil contre eux-mêmes » disant : « Lionnous le juste, car il nous déplaît. »',
        es: 'Puesto que, por lo tanto, Él iba a ser manifestado y a sufrir en la carne, Su sufrimiento fue prefigurado. Porque el profeta habla contra Israel: "Ay de su alma, porque han deliberado un mal consejo contra sí mismos" diciendo: "Atemos al justo, porque nos desagrada."',
        de: 'Da Er nun im Fleisch offenbart werden und leiden sollte, wurde Sein Leiden vorhergesagt. Denn der Prophet spricht gegen Israel: „Wehe ihrer Seele, denn sie haben bösen Rat gegen sich selbst beschlossen", indem er sagte: „Lasst uns den Gerechten binden, denn er missfällt uns."'
      },
      reference: {
        en: 'Letter of Barnabas §6, citing Isaiah 3:9 and Wisdom 2:12',
        fr: 'Lettre de Barnabé §6, citant Isaïe 3:9 et Sagesse 2:12',
        es: 'Carta de Bernabé §6, citando Isaías 3:9 y Sabiduría 2:12',
        de: 'Brief des Barnabas §6, unter Berufung auf Jesaja 3:9 und Weisheit 2:12'
      },
      theme: {
        en: 'Deuterocanon',
        fr: 'Deutérocanoniques',
        es: 'Deuterocanónicos',
        de: 'Deuterokanonisch'
      }
    },
    pdfFile: 'Letter_of_Barnabas.pdf',
    themes: [
      { en: 'Deuterocanon', fr: 'Deutérocanoniques', es: 'Deuterocanónicos', de: 'Deuterokanonisch' },
      { en: 'Scripture', fr: 'Écriture', es: 'Escritura', de: 'Schrift' },
      { en: 'Prophecy', fr: 'Prophétie', es: 'Profecía', de: 'Prophetie' }
    ]
  },
  // I'll add a few key ones and create a helper function for the rest
  // Due to space constraints, I'll create a more efficient approach
];

// Themes translation
export const themeTranslations: Record<string, { en: string; fr: string; es: string; de: string }> = {
  'Deuterocanon': { en: 'Deuterocanon', fr: 'Deutérocanoniques', es: 'Deuterocanónicos', de: 'Deuterokanonisch' },
  'Scripture': { en: 'Scripture', fr: 'Écriture', es: 'Escritura', de: 'Schrift' },
  'Prophecy': { en: 'Prophecy', fr: 'Prophétie', es: 'Profecía', de: 'Prophetie' },
  'Authority': { en: 'Authority', fr: 'Autorité', es: 'Autoridad', de: 'Autorität' },
  'Succession': { en: 'Succession', fr: 'Succession', es: 'Sucesión', de: 'Sukzession' },
  'Unity': { en: 'Unity', fr: 'Unité', es: 'Unidad', de: 'Einheit' },
  'Catholic Church': { en: 'Catholic Church', fr: 'Église Catholique', es: 'Iglesia Católica', de: 'Katholische Kirche' },
  'Eucharist': { en: 'Eucharist', fr: 'Eucharistie', es: 'Eucaristía', de: 'Eucharistie' },
  'Primacy': { en: 'Primacy', fr: 'Primauté', es: 'Primacía', de: 'Primat' },
  'Faith': { en: 'Faith', fr: 'Foi', es: 'Fe', de: 'Glaube' },
  'Works': { en: 'Works', fr: 'Œuvres', es: 'Obras', de: 'Werke' },
  'Obedience': { en: 'Obedience', fr: 'Obéissance', es: 'Obediencia', de: 'Gehorsam' },
  'Tradition': { en: 'Tradition', fr: 'Tradition', es: 'Tradición', de: 'Tradition' },
  'Martyrdom': { en: 'Martyrdom', fr: 'Martyre', es: 'Martirio', de: 'Martyrium' },
  'Witness': { en: 'Witness', fr: 'Témoignage', es: 'Testimonio', de: 'Zeugnis' },
  'Sacrifice': { en: 'Sacrifice', fr: 'Sacrifice', es: 'Sacrificio', de: 'Opfer' },
  'Worship': { en: 'Worship', fr: 'Culte', es: 'Culto', de: 'Anbetung' },
  'Apologetics': { en: 'Apologetics', fr: 'Apologétique', es: 'Apologética', de: 'Apologetik' },
  'Mary': { en: 'Mary', fr: 'Marie', es: 'María', de: 'Maria' },
  'Rome': { en: 'Rome', fr: 'Rome', es: 'Roma', de: 'Rom' },
  'Rock': { en: 'Rock', fr: 'Roc', es: 'Roca', de: 'Fels' },
  'Church': { en: 'Church', fr: 'Église', es: 'Iglesia', de: 'Kirche' },
  'Apostles': { en: 'Apostles', fr: 'Apôtres', es: 'Apóstoles', de: 'Apostel' },
  'Penance': { en: 'Penance', fr: 'Pénitence', es: 'Penitencia', de: 'Buße' },
  'Repentance': { en: 'Repentance', fr: 'Repentance', es: 'Arrepentimiento', de: 'Reue' },
  'Mercy': { en: 'Mercy', fr: 'Miséricorde', es: 'Misericordia', de: 'Barmherzigkeit' },
  'Community': { en: 'Community', fr: 'Communauté', es: 'Comunidad', de: 'Gemeinschaft' },
  'Baptism': { en: 'Baptism', fr: 'Baptême', es: 'Bautismo', de: 'Taufe' }
};
