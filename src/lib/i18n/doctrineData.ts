export interface BibleVerse {
  book: string;
  chapter: string;
  verse: string;
  text: string;
}

export interface Doctrine {
  id: string;
  title: { en: string; fr: string; es: string; de: string };
  subtitle: { en: string; fr: string; es: string; de: string };
  relatedTag: string; // Must match tags in earlyChurchData.ts
  verses: { [key: string]: BibleVerse[] };
}

export const doctrineData: Doctrine[] = [
  {
    id: "eucharist",
    title: {
      en: "The Eucharist",
      fr: "L'Eucharistie",
      es: "La Eucaristía",
      de: "Die Eucharistie",
    },
    subtitle: {
      en: "Real Presence",
      fr: "Présence Réelle",
      es: "Presencia Real",
      de: "Realpräsenz",
    },
    relatedTag: "Eucharist",
    verses: {
      en: [
        {
          book: "John",
          chapter: "6",
          verse: "53-55",
          text: "Amen, amen, I say to you, unless you eat the flesh of the Son of Man and drink his blood, you do not have life within you. For my flesh is true food, and my blood is true drink.",
        },
        {
          book: "Luke",
          chapter: "22",
          verse: "19",
          text: "This is my body, which is given for you. Do this in remembrance of me.",
        },
        {
          book: "1 Corinthians",
          chapter: "11",
          verse: "27",
          text: "Whoever, therefore, eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty concerning the body and blood of the Lord.",
        },
      ],
      fr: [
        {
          book: "Jean",
          chapter: "6",
          verse: "53-55",
          text: "En vérité, en vérité, je vous le dis, si vous ne mangez la chair du Fils de l'homme, et si vous ne buvez son sang, vous n'avez point la vie en vous...",
        },
      ],
      es: [],
      de: [],
    },
  },
  {
    id: "authority",
    title: {
      en: "Church Authority",
      fr: "Autorité de l'Église",
      es: "Autoridad de la Iglesia",
      de: "Kirchenautorität",
    },
    subtitle: {
      en: "The Papacy & Peter",
      fr: "La Papauté & Pierre",
      es: "El Papado y Pedro",
      de: "Das Papsttum & Petrus",
    },
    relatedTag: "Authority",
    verses: {
      en: [
        {
          book: "Matthew",
          chapter: "16",
          verse: "18-19",
          text: "And I tell you, you are Peter, and on this rock I will build my church... I will give you the keys of the kingdom of heaven.",
        },
        {
          book: "Isaiah",
          chapter: "22",
          verse: "22",
          text: "I will place on his shoulder the key of the house of David. He shall open, and none shall shut; and he shall shut, and none shall open.",
        },
        {
          book: "1 Timothy",
          chapter: "3",
          verse: "15",
          text: "...the church of the living God, the pillar and foundation of truth.",
        },
      ],
      fr: [],
      es: [],
      de: [],
    },
  },
  {
    id: "salvation",
    title: {
      en: "Salvation",
      fr: "Le Salut",
      es: "La Salvación",
      de: "Das Heil",
    },
    subtitle: {
      en: "Faith & Works",
      fr: "Foi et Œuvres",
      es: "Fe y Obras",
      de: "Glaube und Werke",
    },
    relatedTag: "Salvation",
    verses: {
      en: [
        {
          book: "James",
          chapter: "2",
          verse: "24",
          text: "You see that a person is justified by works and not by faith alone.",
        },
        {
          book: "Matthew",
          chapter: "7",
          verse: "21",
          text: "Not everyone who says to me, 'Lord, Lord,' will enter the kingdom of heaven, but the one who does the will of my Father who is in heaven.",
        },
      ],
      fr: [],
      es: [],
      de: [],
    },
  },
  {
    id: "baptism",
    title: {
      en: "Baptism",
      fr: "Baptême",
      es: "Bautismo",
      de: "Taufe",
    },
    subtitle: {
      en: "Regeneration",
      fr: "Régénération",
      es: "Regeneración",
      de: "Wiedergeburt",
    },
    relatedTag: "Baptism",
    verses: {
      en: [
        {
          book: "1 Peter",
          chapter: "3",
          verse: "21",
          text: "Baptism, which corresponds to this, now saves you, not as a removal of dirt from the body but as an appeal to God for a good conscience.",
        },
        {
          book: "Acts",
          chapter: "22",
          verse: "16",
          text: "And now why do you wait? Rise and be baptized and wash away your sins, calling on his name.",
        },
      ],
      fr: [],
      es: [],
      de: [],
    },
  },
  {
    id: "confession",
    title: {
      en: "Confession",
      fr: "Confession",
      es: "Confesión",
      de: "Beichte",
    },
    subtitle: {
      en: "Forgiving Sins",
      fr: "Pardonner les péchés",
      es: "Perdonar pecados",
      de: "Sünden vergeben",
    },
    relatedTag: "Confession",
    verses: {
      en: [
        {
          book: "John",
          chapter: "20",
          verse: "22-23",
          text: "He breathed on them and said to them, 'Receive the Holy Spirit. If you forgive the sins of any, they are forgiven them; if you withhold forgiveness from any, it is withheld.'",
        },
        {
          book: "James",
          chapter: "5",
          verse: "16",
          text: "Therefore, confess your sins to one another and pray for one another, that you may be healed.",
        },
      ],
      fr: [],
      es: [],
      de: [],
    },
  },
  {
    id: "mary",
    title: {
      en: "Mary",
      fr: "Marie",
      es: "María",
      de: "Maria",
    },
    subtitle: {
      en: "Mother of God",
      fr: "Mère de Dieu",
      es: "Madre de Dios",
      de: "Mutter Gottes",
    },
    relatedTag: "Mary",
    verses: {
      en: [
        {
          book: "Luke",
          chapter: "1",
          verse: "43",
          text: "And why is this granted to me that the mother of my Lord should come to me?",
        },
        {
          book: "Luke",
          chapter: "1",
          verse: "48",
          text: "For behold, from now on all generations will call me blessed.",
        },
      ],
      fr: [],
      es: [],
      de: [],
    },
  },
];