import { Language } from "./LanguageContext";

export const translations = {
  // Navigation & Common
  nav: {
    title: {
      en: "Catholic Foundations",
      fr: "Fondements Catholiques",
      es: "Fundamentos Católicos",
      de: "Katholische Grundlagen",
    },
    subtitle: {
      en: "Your Journey to Truth",
      fr: "Votre Voyage vers la Vérité",
      es: "Tu Viaje a la Verdad",
      de: "Ihre Reise zur Wahrheit",
    },
    allTopics: {
      en: "All Topics",
      fr: "Tous les Sujets",
      es: "Todos los Temas",
      de: "Alle Themen",
    },
    earlyChurch: {
      en: "Early Church",
      fr: "Église Primitive",
      es: "Iglesia Primitiva",
      de: "Frühe Kirche",
    },

    // --- ADD THIS ---
    scienceAndMiracles: {
      en: "Science & Miracles",
      fr: "Science & Miracles", // Placeholder
      es: "Ciencia y Milagros", // Placeholder
      de: "Wissenschaft & Wunder", // Placeholder
    },

    scienceAndMiraclesDescription: {
      en: "Explore supernatural phenomena",
      fr: "Explorer les phénomènes surnaturels", // Placeholder
      es: "Explorar fenómenos sobrenaturales", // Placeholder
      de: "Übernatürliche Phänomene entdecken", // Placeholder
    },

    backToJourney: {
      en: "Back to Journey",
      fr: "Retour au Parcours",
      es: "Volver al Viaje",
      de: "Zurück zur Reise",
    },
    journeyTopics: {
      en: "Journey Topics",
      fr: "Sujets du Parcours",
      es: "Temas del Viaje",
      de: "Reisethemen",
    },
    selectTopic: {
      en: "Select a topic to explore",
      fr: "Sélectionnez un sujet à explorer",
      es: "Selecciona un tema para explorar",
      de: "Wählen Sie ein Thema zum Erkunden",
    },
  },

  glossary: {
    title: {
      en: "Catholic Glossary",
      fr: "Glossaire Catholique",
      es: "Glosario Católico",
      de: "Katholisches Glossar",
    },
    subtitle: {
      en: "Essential theological terms and definitions to help you navigate the richness of the faith.",
      fr: "Termes théologiques essentiels et définitions pour vous aider à naviguer dans la richesse de la foi.",
      es: "Términos teológicos esenciales y definiciones para ayudarte a navegar la riqueza de la fe.",
      de: "Wesentliche theologische Begriffe und Definitionen, um Ihnen durch den Reichtum des Glaubens zu helfen.",
    },
    searchPlaceholder: {
      en: "Search theological terms...",
      fr: "Rechercher des termes théologiques...",
      es: "Buscar términos teológicos...",
      de: "Theologische Begriffe suchen...",
    },
    tip: {
      en: "(Tip: Press Ctrl + K to search instantly from anywhere)",
      fr: "(Astuce : Appuyez sur Ctrl + K pour rechercher instantanément)",
      es: "(Consejo: Presiona Ctrl + K para buscar al instante)",
      de: "(Tipp: Drücken Sie Strg + K, um sofort zu suchen)",
    },
    noResults: {
      en: "No results found.",
      fr: "Aucun résultat trouvé.",
      es: "No se encontraron resultados.",
      de: "Keine Ergebnisse gefunden.",
    },
    index: {
      en: "Index",
      fr: "Index",
      es: "Índice",
      de: "Index",
    }
  },
  
  // --- NEW HOME SECTION ---
  home: {
    title: {
      en: "Begin Your Journey into the <span class='text-blue-500'>Catholic Faith</span>",
      fr: "Commencez Votre Voyage dans la <span class='text-blue-500'>Foi Catholique</span>",
      es: "Comienza Tu Viaje hacia la <span class='text-blue-500'>Fe Católica</span>",
      de: "Beginnen Sie Ihre Reise in den <span class='text-blue-500'>Katholischen Glauben</span>",
    },
    quote: {
      en: "You will know how people ought to conduct themselves in God’s household, which is the <span class='text-blue-400'>church</span> of the living God, <span class='text-blue-400'>the pillar and foundation of the truth.</span>",
      fr: "Tu sauras comment il faut se conduire dans la maison de Dieu, qui est l'<span class='text-blue-400'>Église</span> du Dieu vivant, <span class='text-blue-400'>la colonne et l'appui de la vérité.</span>",
      es: "Para que sepas cómo debes conducirte en la casa de Dios, que es la <span class='text-blue-400'>iglesia</span> del Dios viviente, <span class='text-blue-400'>columna y baluarte de la verdad.</span>",
      de: "Damit du weißt, wie man sich verhalten soll im Hause Gottes, das ist die <span class='text-blue-400'>Gemeinde</span> des lebendigen Gottes, <span class='text-blue-400'>ein Pfeiler und eine Grundfeste der Wahrheit.</span>",
    },
    quoteSource: {
      en: "1 Timothy 3:15",
      fr: "1 Timothée 3:15",
      es: "1 Timoteo 3:15",
      de: "1. Timotheus 3:15",
    },
    description: {
      en: "This apologetics website offers a clear and structured exploration of the fundamental arguments for the Catholic Church. While not exhaustive, it focuses on essential topics regarding authority, history, and Scripture. It is designed to help Christians examine the historical and theological case for Catholicism and reflect deeply on the fullness of the faith.",
      fr: "Ce site d'apologétique offre une exploration claire et structurée des arguments fondamentaux en faveur de l'Église catholique. Bien que non exhaustive, elle se concentre sur des sujets essentiels concernant l'autorité, l'histoire et l'Écriture. Elle est conçue pour aider les chrétiens à examiner le cas historique et théologique du catholicisme et à réfléchir profondément à la plénitude de la foi.",
      es: "Este sitio web de apologética ofrece una exploración clara y estructurada de los argumentos fundamentales a favor de la Iglesia Católica. Aunque no es exhaustiva, se centra en temas esenciales sobre autoridad, historia y Escritura. Está diseñada para ayudar a los cristianos a examinar el caso histórico y teológico del catolicismo y reflexionar profundamente sobre la plenitud de la fe.",
      de: "Diese Apologetik-Website bietet eine klare und strukturierte Untersuchung der grundlegenden Argumente für die katholische Kirche. Obwohl nicht erschöpfend, konzentriert sie sich auf wesentliche Themen in Bezug auf Autorität, Geschichte und Schrift. Sie soll Christen helfen, den historischen und theologischen Fall für den Katholizismus zu prüfen und tief über die Fülle des Glaubens nachzudenken.",
    },
    startJourney: {
      en: "Start the Journey",
      fr: "Commencer le Voyage",
      es: "Comenzar el Viaje",
      de: "Die Reise Beginnen",
    },
  },
  


  // Progress & Navigation
  progress: {
    yourProgress: {
      en: "Your Progress",
      fr: "Votre Progrès",
      es: "Tu Progreso",
      de: "Ihr Fortschritt",
    },
    completed: {
      en: "completed",
      fr: "terminé",
      es: "completado",
      de: "abgeschlossen",
    },
    previous: {
      en: "Previous",
      fr: "Précédent",
      es: "Anterior",
      de: "Zurück",
    },
    next: {
      en: "Next",
      fr: "Suivant",
      es: "Siguiente",
      de: "Weiter",
    },
    complete: {
      en: "Complete",
      fr: "Terminé",
      es: "Completado",
      de: "Fertig",
    },
    topicOf: {
      en: "Topic",
      fr: "Sujet",
      es: "Tema",
      de: "Thema",
    },
    of: {
      en: "of",
      fr: "de",
      es: "de",
      de: "von",
    },
  },

  // Early Church Timeline
  earlyChurch: {
    title: {
      en: "Early Church Timeline",
      fr: "Chronologie de l'Église Primitive",
      es: "Cronología de la Iglesia Primitiva",
      de: "Zeitleiste der Frühen Kirche",
    },
    subtitle: {
      en: "Discover the voices of the first Christians and their testimony to Catholic belief before Nicaea.",
      fr: "Découvrez les voix des premiers chrétiens et leur témoignage de la foi catholique avant Nicée.",
      es: "Descubre las voces de los primeros cristianos y su testimonio de la fe católica antes de Nicea.",
      de: "Entdecken Sie die Stimmen der ersten Christen und ihr Zeugnis des katholischen Glaubens vor Nicäa.",
    },
    intro: {
      en: "A curated timeline of foundational pre-Nicene writings, demonstrating how early Christians lived, taught, and defended the Catholic faith. Each entry highlights key themes, quotes, and primary texts from the Church Fathers who walked with the Apostles and their immediate successors.",
      fr: "Une chronologie des écrits pré-nicéens fondamentaux, démontrant comment les premiers chrétiens vivaient, enseignaient et défendaient la foi catholique. Chaque entrée met en évidence des thèmes clés, des citations et des textes des Pères de l'Église qui ont marché avec les Apôtres et leurs successeurs immédiats.",
      es: "Una cronología de escritos pre-nicenos fundamentales, demostrando cómo los primeros cristianos vivían, enseñaban y defendían la fe católica. Cada entrada destaca temas clave, citas y textos de los Padres de la Iglesia que caminaron con los Apóstoles y sus sucesores inmediatos.",
      de: "Eine kuratierte Zeitleiste grundlegender vornizänischer Schriften, die zeigt, wie die frühen Christen lebten, lehrten und den katholischen Glauben verteidigten. Jeder Eintrag hebt Schlüsselthemen, Zitate und Primärtexte der Kirchenväter hervor, die mit den Aposteln und ihren unmittelbaren Nachfolgern gingen.",
    },
    showAdditional: {
      en: "Show",
      fr: "Afficher",
      es: "Mostrar",
      de: "Anzeigen",
    },
    hideAdditional: {
      en: "Hide",
      fr: "Masquer",
      es: "Ocultar",
      de: "Verbergen",
    },
    additionalQuote: {
      en: "additional quote",
      fr: "citation supplémentaire",
      es: "cita adicional",
      de: "zusätzliches Zitat",
    },
    additionalQuotes: {
      en: "additional quotes",
      fr: "citations supplémentaires",
      es: "citas adicionales",
      de: "zusätzliche Zitate",
    },
    downloadPDF: {
      en: "Download PDF",
      fr: "Télécharger le PDF",
      es: "Descargar PDF",
      de: "PDF herunterladen",
    },
    by: {
      en: "by",
      fr: "par",
      es: "por",
      de: "von",
    },
    conclusion: {
      en: 'These writings span the first two centuries of Christianity, from the Apostolic Age through the age of the early apologists and Church Fathers. They provide powerful testimony to the continuity of Catholic doctrine—including apostolic succession, Roman primacy, the deuterocanonical books, Marian theology, and the universal "Catholic Church"—from the time of Christ to the present day.',
      fr: "Ces écrits couvrent les deux premiers siècles du christianisme, de l'ère apostolique à l'époque des premiers apologistes et Pères de l'Église. Ils fournissent un témoignage puissant de la continuité de la doctrine catholique—y compris la succession apostolique, la primauté romaine, les livres deutérocanoniques, la théologie mariale et l'« Église catholique » universelle—du temps du Christ à nos jours.",
      es: 'Estos escritos abarcan los primeros dos siglos del cristianismo, desde la Era Apostólica hasta la época de los primeros apologistas y Padres de la Iglesia. Proporcionan un poderoso testimonio de la continuidad de la doctrina católica—incluyendo la sucesión apostólica, la primacía romana, los libros deuterocanónicos, la teología mariana y la "Iglesia Católica" universal—desde el tiempo de Cristo hasta nuestros días.',
      de: 'Diese Schriften umfassen die ersten zwei Jahrhunderte des Christentums, vom apostolischen Zeitalter bis zum Zeitalter der frühen Apologeten und Kirchenväter. Sie bieten ein kraftvolles Zeugnis für die Kontinuität der katholischen Lehre—einschließlich apostolischer Sukzession, römischem Primat, deuterokanonischen Büchern, marianischer Theologie und der universellen „katholischen Kirche"—von der Zeit Christi bis heute.',
    },
    conclusionQuote: {
      en: '"The Church, having received this preaching and this faith, although scattered throughout the whole world, yet, as if occupying but one house, carefully preserves it."',
      fr: "« L'Église, ayant reçu cette prédication et cette foi, bien que dispersée dans le monde entier, les conserve soigneusement comme si elle n'occupait qu'une seule maison. »",
      es: '"La Iglesia, habiendo recibido esta predicación y esta fe, aunque dispersa por todo el mundo, las conserva cuidadosamente como si ocupara una sola casa."',
      de: '„Die Kirche hat diese Verkündigung und diesen Glauben empfangen und bewahrt sie sorgfältig, obwohl sie über die ganze Welt verstreut ist, als ob sie nur ein Haus bewohnen würde."',
    },
    conclusionAttribution: {
      en: "St. Irenaeus of Lyon, Against Heresies 1.10.2",
      fr: "Saint Irénée de Lyon, Contre les Hérésies 1.10.2",
      es: "San Ireneo de Lyon, Contra las Herejías 1.10.2",
      de: "Hl. Irenäus von Lyon, Gegen die Häresien 1.10.2",
    },
    earlyChurchTimelineLink: {
      en: "Early Church Timeline",
      fr: "Chronologie de l'Église Primitive",
      es: "Cronología de la Iglesia Primitiva",
      de: "Zeitleiste der Frühen Kirche",
    },
    earlyChurchDescription: {
      en: "Explore pre-Nicene Church Fathers and documents",
      fr: "Explorez les Pères de l'Église et documents pré-nicéens",
      es: "Explora los Padres de la Iglesia y documentos pre-nicenos",
      de: "Erkunden Sie vornizänische Kirchenväter und Dokumente",
    },
  },

  // Topic Titles (short versions for navigation)
  topicTitles: {
    "existence-of-god": {
      en: "God Exists",
      fr: "Dieu Existe",
      es: "Dios Existe",
      de: "Gott Existiert",
    },
    "proof-of-resurrection": {
      en: "The Resurrection",
      fr: "La Résurrection",
      es: "La Resurrección",
      de: "Die Auferstehung",
    },
    "why-be-catholic": {
      en: "Why Catholic",
      fr: "Pourquoi Catholique",
      es: "Por Qué Católico",
      de: "Warum Katholisch",
    },
    "you-lose-so-i-win": {
      en: "Logical Fallacies",
      fr: "Sophismes Logiques",
      es: "Falacias Lógicas",
      de: "Logische Fehlschlüsse",
    },
    "authority-dilemma": {
      en: "Authority Dilemma",
      fr: "Dilemme d'Autorité",
      es: "Dilema de Autoridad",
      de: "Autoritätsdilemma",
    },
    "why-not-sola-scriptura": {
      en: "Against Sola Scriptura",
      fr: "Contre Sola Scriptura",
      es: "Contra Sola Scriptura",
      de: "Gegen Sola Scriptura",
    },
    "scholastic-approaches": {
      en: "Scholastic Views",
      fr: "Vues Scolastiques",
      es: "Perspectivas Escolásticas",
      de: "Scholastische Ansichten",
    },
    "sola-scriptura-impossible": {
      en: "Impossibility of Sola Scriptura",
      fr: "Impossibilité de Sola Scriptura",
      es: "Imposibilidad de Sola Scriptura",
      de: "Unmöglichkeit von Sola Scriptura",
    },
    "canon-dilemma": {
      en: "Canon Question",
      fr: "Question du Canon",
      es: "Cuestión del Canon",
      de: "Kanonfrage",
    },
    "73-books": {
      en: "73 Books",
      fr: "73 Livres",
      es: "73 Libros",
      de: "73 Bücher",
    },
    "peter-first-pope": {
      en: "Peter & Papacy",
      fr: "Pierre & Papauté",
      es: "Pedro & Papado",
      de: "Petrus & Papsttum",
    },
    magisterium: {
      en: "Church Authority",
      fr: "Autorité de l'Église",
      es: "Autoridad de la Iglesia",
      de: "Kirchliche Autorität",
    },
    "no-filioque": {
      en: "Filioque & Trinity",
      fr: "Filioque & Trinité",
      es: "Filioque & Trinidad",
      de: "Filioque & Trinität",
    },
  },

  // Full Topic Titles (for menu display)
  topicFullTitles: {
    "existence-of-god": {
      en: "Existence of God",
      fr: "Existence de Dieu",
      es: "Existencia de Dios",
      de: "Existenz Gottes",
    },
    "proof-of-resurrection": {
      en: "Proof of the Resurrection",
      fr: "Preuve de la Résurrection",
      es: "Prueba de la Resurrección",
      de: "Beweis der Auferstehung",
    },
    "why-be-catholic": {
      en: "Why Be Catholic?",
      fr: "Pourquoi Être Catholique ?",
      es: "¿Por Qué Ser Católico?",
      de: "Warum Katholisch Sein?",
    },
    "you-lose-so-i-win": {
      en: 'The "You Lose, So I Win" Fallacy',
      fr: "Le Sophisme « Tu Perds, Donc Je Gagne »",
      es: 'La Falacia "Tú Pierdes, Entonces Yo Gano"',
      de: 'Der Fehlschluss „Du Verlierst, Also Gewinne Ich"',
    },
    "authority-dilemma": {
      en: "The Authority Dilemma Fallacy",
      fr: "Le Sophisme du Dilemme d'Autorité",
      es: "La Falacia del Dilema de Autoridad",
      de: "Der Fehlschluss des Autoritätsdilemmas",
    },
    "why-not-sola-scriptura": {
      en: "Why Not Sola Scriptura?",
      fr: "Pourquoi Pas Sola Scriptura ?",
      es: "¿Por Qué No Sola Scriptura?",
      de: "Warum Nicht Sola Scriptura?",
    },
    "scholastic-approaches": {
      en: "Scholastic Approaches to Sola Scriptura",
      fr: "Approches Scolastiques de Sola Scriptura",
      es: "Enfoques Escolásticos de Sola Scriptura",
      de: "Scholastische Ansätze zu Sola Scriptura",
    },
    "sola-scriptura-impossible": {
      en: "Sola Scriptura is Impossible",
      fr: "Sola Scriptura est Impossible",
      es: "Sola Scriptura es Imposible",
      de: "Sola Scriptura ist Unmöglich",
    },
    "canon-dilemma": {
      en: "The Canon Dilemma",
      fr: "Le Dilemme du Canon",
      es: "El Dilema del Canon",
      de: "Das Kanondilemma",
    },
    "73-books": {
      en: "73 Books?",
      fr: "73 Livres ?",
      es: "¿73 Libros?",
      de: "73 Bücher?",
    },
    "peter-first-pope": {
      en: "Was Peter the First Pope?",
      fr: "Pierre était-il le Premier Pape ?",
      es: "¿Fue Pedro el Primer Papa?",
      de: "War Petrus der Erste Papst?",
    },
    magisterium: {
      en: "The Magisterium",
      fr: "Le Magistère",
      es: "El Magisterio",
      de: "Das Lehramt",
    },
    "no-filioque": {
      en: "No Filioque? No Trinity.",
      fr: "Pas de Filioque ? Pas de Trinité.",
      es: "¿Sin Filioque? Sin Trinidad.",
      de: "Kein Filioque? Keine Trinität.",
    },

    // --- ADD THIS ---
    "science-and-miracles": {
      en: "Science & Miracles",
      fr: "Science & Miracles", // Placeholder
      es: "Ciencia y Milagros", // Placeholder
      de: "Wissenschaft & Wunder", // Placeholder
    },
  },

  // Topic Transitions
  topicTransitions: {
    "existence-of-god": {
      en: "Having explored the evidence for God's existence, let's turn to the most pivotal event in history...",
      fr: "Après avoir exploré les preuves de l'existence de Dieu, tournons-nous vers l'événement le plus crucial de l'histoire...",
      es: "Habiendo explorado la evidencia de la existencia de Dios, volvámonos al evento más crucial de la historia...",
      de: "Nachdem wir die Beweise für Gottes Existenz untersucht haben, wenden wir uns dem entscheidendsten Ereignis der Geschichte zu...",
    },
    "proof-of-resurrection": {
      en: "Now that we've seen the historical evidence for Christ's resurrection, the question becomes: which Christian tradition most faithfully preserves His teaching?",
      fr: "Maintenant que nous avons vu les preuves historiques de la résurrection du Christ, la question devient : quelle tradition chrétienne préserve le plus fidèlement Son enseignement ?",
      es: "Ahora que hemos visto la evidencia histórica de la resurrección de Cristo, la pregunta se convierte en: ¿qué tradición cristiana preserva más fielmente Su enseñanza?",
      de: "Nachdem wir die historischen Beweise für Christi Auferstehung gesehen haben, lautet die Frage: Welche christliche Tradition bewahrt Seine Lehre am treuesten?",
    },
    "why-be-catholic": {
      en: "Before we dive deeper into Catholic teaching, let's address some common logical fallacies in theological debates...",
      fr: "Avant d'approfondir l'enseignement catholique, abordons quelques sophismes logiques courants dans les débats théologiques...",
      es: "Antes de profundizar en la enseñanza católica, abordemos algunas falacias lógicas comunes en los debates teológicos...",
      de: "Bevor wir tiefer in die katholische Lehre eintauchen, lassen Sie uns einige häufige logische Fehlschlüsse in theologischen Debatten ansprechen...",
    },
    "you-lose-so-i-win": {
      en: "Understanding this fallacy helps us recognize another common error in discussions of religious authority...",
      fr: "Comprendre ce sophisme nous aide à reconnaître une autre erreur courante dans les discussions sur l'autorité religieuse...",
      es: "Comprender esta falacia nos ayuda a reconocer otro error común en las discusiones sobre autoridad religiosa...",
      de: "Das Verständnis dieses Fehlschlusses hilft uns, einen weiteren häufigen Fehler in Diskussionen über religiöse Autorität zu erkennen...",
    },
    "authority-dilemma": {
      en: "This brings us to one of the most debated topics between Catholics and Protestants: the doctrine of Scripture alone...",
      fr: "Cela nous amène à l'un des sujets les plus débattus entre catholiques et protestants : la doctrine de l'Écriture seule...",
      es: "Esto nos lleva a uno de los temas más debatidos entre católicos y protestantes: la doctrina de la Escritura sola...",
      de: "Dies bringt uns zu einem der meistdiskutierten Themen zwischen Katholiken und Protestanten: die Lehre von der Schrift allein...",
    },
    "why-not-sola-scriptura": {
      en: "Let's see how great thinkers throughout history have approached this question...",
      fr: "Voyons comment les grands penseurs à travers l'histoire ont abordé cette question...",
      es: "Veamos cómo los grandes pensadores a lo largo de la historia han abordado esta cuestión...",
      de: "Sehen wir uns an, wie große Denker im Laufe der Geschichte diese Frage angegangen sind...",
    },
    "scholastic-approaches": {
      en: "These theological perspectives lead us to a profound conclusion about Scripture alone...",
      fr: "Ces perspectives théologiques nous mènent à une conclusion profonde sur l'Écriture seule...",
      es: "Estas perspectivas teológicas nos llevan a una conclusión profunda sobre la Escritura sola...",
      de: "Diese theologischen Perspektiven führen uns zu einer tiefgreifenden Schlussfolgerung über die Schrift allein...",
    },
    "sola-scriptura-impossible": {
      en: "If the Bible alone isn't sufficient, this raises a crucial question: how do we even know which books belong in the Bible?",
      fr: "Si la Bible seule n'est pas suffisante, cela soulève une question cruciale : comment savons-nous même quels livres appartiennent à la Bible ?",
      es: "Si la Biblia sola no es suficiente, esto plantea una pregunta crucial: ¿cómo sabemos siquiera qué libros pertenecen a la Biblia?",
      de: "Wenn die Bibel allein nicht ausreicht, wirft dies eine entscheidende Frage auf: Woher wissen wir überhaupt, welche Bücher zur Bibel gehören?",
    },
    "canon-dilemma": {
      en: "The issue of the biblical canon brings us to an important difference between Catholic and Protestant Bibles...",
      fr: "La question du canon biblique nous amène à une différence importante entre les Bibles catholique et protestante...",
      es: "El tema del canon bíblico nos lleva a una diferencia importante entre las Biblias católica y protestante...",
      de: "Die Frage des biblischen Kanons bringt uns zu einem wichtigen Unterschied zwischen katholischen und protestantischen Bibeln...",
    },
    "73-books": {
      en: "Understanding the fullness of Scripture leads us back to the question of authority. Who has the right to teach in Christ's name?",
      fr: "Comprendre la plénitude de l'Écriture nous ramène à la question de l'autorité. Qui a le droit d'enseigner au nom du Christ ?",
      es: "Comprender la plenitud de la Escritura nos lleva de vuelta a la cuestión de la autoridad. ¿Quién tiene el derecho de enseñar en el nombre de Cristo?",
      de: "Das Verständnis der Fülle der Schrift führt uns zurück zur Frage der Autorität. Wer hat das Recht, im Namen Christi zu lehren?",
    },
    "peter-first-pope": {
      en: "Peter's role as the first pope leads us to understand the broader teaching authority of the Church...",
      fr: "Le rôle de Pierre en tant que premier pape nous amène à comprendre l'autorité d'enseignement plus large de l'Église...",
      es: "El papel de Pedro como primer papa nos lleva a comprender la autoridad de enseñanza más amplia de la Iglesia...",
      de: "Petrus' Rolle als erster Papst führt uns dazu, die umfassendere Lehrautorität der Kirche zu verstehen...",
    },
    magisterium: {
      en: "The Magisterium preserves essential doctrines, including ones that define our understanding of God Himself...",
      fr: "Le Magistère préserve les doctrines essentielles, y compris celles qui définissent notre compréhension de Dieu Lui-même...",
      es: "El Magisterio preserva doctrinas esenciales, incluyendo aquellas que definen nuestra comprensión de Dios mismo...",
      de: "Das Lehramt bewahrt wesentliche Lehren, einschließlich jener, die unser Verständnis von Gott selbst definieren...",
    },
  },

  // Menu UI Text
  menu: {
    current: {
      en: "Current",
      fr: "Actuel",
      es: "Actual",
      de: "Aktuell",
    },
    completedStatus: {
      en: "Completed",
      fr: "Terminé",
      es: "Completado",
      de: "Abgeschlossen",
    },
    topicLabel: {
      en: "Topic",
      fr: "Sujet",
      es: "Tema",
      de: "Thema",
    },
    completedOf: {
      en: "of",
      fr: "sur",
      es: "de",
      de: "von",
    },
    topicsCompleted: {
      en: "topics completed",
      fr: "sujets terminés",
      es: "temas completados",
      de: "Themen abgeschlossen",
    },
  },

  // Table of Contents
  toc: {
    onThisPage: {
      en: "On this page",
      fr: "Sur cette page",
      es: "En esta página",
      de: "Auf dieser Seite",
    },
    backToTop: {
      en: "Back to top",
      fr: "Retour en haut",
      es: "Volver arriba",
      de: "Nach oben",
    },
  },

  // Existence of God Topic
  existenceOfGod: {
    title: {
      en: "Five Reasons Why You Can Believe God Exists",
      fr: "Cinq Raisons Pour Lesquelles Vous Pouvez Croire que Dieu Existe",
      es: "Cinco Razones Por Las Que Puede Creer Que Dios Existe",
      de: "Fünf Gründe, Warum Sie Glauben Können, Dass Gott Existiert",
    },
    subtitle: {
      en: "Responding to the New Atheism with rational arguments",
      fr: "Répondre au Nouvel Athéisme avec des arguments rationnels",
      es: "Respondiendo al Nuevo Ateísmo con argumentos racionales",
      de: "Antwort auf den Neuen Atheismus mit rationalen Argumenten",
    },
    quote: {
      en: "The heavens declare the glory of God; the skies proclaim the work of his hands.",
      fr: "Les cieux racontent la gloire de Dieu ; le firmament proclame l'œuvre de ses mains.",
      es: "Los cielos cuentan la gloria de Dios; los cielos proclaman la obra de sus manos.",
      de: "Die Himmel erzählen die Herrlichkeit Gottes; das Firmament verkündet das Werk seiner Hände.",
    },
    quoteSource: {
      en: "Psalm 19:1",
      fr: "Psaume 19:1",
      es: "Salmo 19:1",
      de: "Psalm 19:1",
    },

    // Introduction paragraphs
    intro1: {
      en: 'In the 21st century, the resurgence of militant atheism—often called the "New Atheism"—has led to a cultural shift. Figures like Richard Dawkins, Sam Harris, Christopher Hitchens, and Daniel Dennett argue that belief in God is irrational, outdated, and even dangerous.',
      fr: "Au 21e siècle, la résurgence de l'athéisme militant — souvent appelé le « Nouvel Athéisme » — a conduit à un changement culturel. Des figures comme Richard Dawkins, Sam Harris, Christopher Hitchens et Daniel Dennett soutiennent que la croyance en Dieu est irrationnelle, dépassée et même dangereuse.",
      es: 'En el siglo XXI, el resurgimiento del ateísmo militante —a menudo llamado el "Nuevo Ateísmo"— ha llevado a un cambio cultural. Figuras como Richard Dawkins, Sam Harris, Christopher Hitchens y Daniel Dennett argumentan que la creencia en Dios es irracional, anticuada e incluso peligrosa.',
      de: 'Im 21. Jahrhundert hat das Wiederaufleben des militanten Atheismus — oft als „Neuer Atheismus" bezeichnet — zu einem kulturellen Wandel geführt. Persönlichkeiten wie Richard Dawkins, Sam Harris, Christopher Hitchens und Daniel Dennett argumentieren, dass der Glaube an Gott irrational, veraltet und sogar gefährlich sei.',
    },
    intro2: {
      en: "Christian apologetics seeks to counter such claims, offering a rational foundation for theism rooted in philosophy, science, and historical evidence.",
      fr: "L'apologétique chrétienne cherche à contrer de telles affirmations, offrant un fondement rationnel pour le théisme enraciné dans la philosophie, la science et les preuves historiques.",
      es: "La apologética cristiana busca contrarrestar tales afirmaciones, ofreciendo un fundamento racional para el teísmo arraigado en la filosofía, la ciencia y la evidencia histórica.",
      de: "Die christliche Apologetik versucht, solchen Behauptungen entgegenzutreten, indem sie eine rationale Grundlage für den Theismus bietet, die in Philosophie, Wissenschaft und historischen Beweisen verwurzelt ist.",
    },
    intro3: {
      en: "Philosopher William Lane Craig responds directly to the New Atheism by presenting five philosophical arguments for the existence of God. These arguments do not depend on religious experience or sacred texts but aim to show that belief in God is rational and supported by reason.",
      fr: "Le philosophe William Lane Craig répond directement au Nouvel Athéisme en présentant cinq arguments philosophiques pour l'existence de Dieu. Ces arguments ne dépendent pas de l'expérience religieuse ou des textes sacrés, mais visent à montrer que la croyance en Dieu est rationnelle et soutenue par la raison.",
      es: "El filósofo William Lane Craig responde directamente al Nuevo Ateísmo presentando cinco argumentos filosóficos para la existencia de Dios. Estos argumentos no dependen de la experiencia religiosa o los textos sagrados, sino que buscan mostrar que la creencia en Dios es racional y está respaldada por la razón.",
      de: "Der Philosoph William Lane Craig antwortet direkt auf den Neuen Atheismus, indem er fünf philosophische Argumente für die Existenz Gottes präsentiert. Diese Argumente hängen nicht von religiöser Erfahrung oder heiligen Texten ab, sondern zielen darauf ab zu zeigen, dass der Glaube an Gott rational und durch Vernunft gestützt ist.",
    },

    // Five Arguments Cards
    arg1Title: {
      en: "Cosmological Argument",
      fr: "Argument Cosmologique",
      es: "Argumento Cosmológico",
      de: "Kosmologisches Argument",
    },
    arg1Subtitle: {
      en: "Kalam Form",
      fr: "Forme Kalam",
      es: "Forma Kalam",
      de: "Kalam-Form",
    },
    arg2Title: {
      en: "Fine-Tuning Argument",
      fr: "Argument du Réglage Fin",
      es: "Argumento del Ajuste Fino",
      de: "Feinabstimmungs-Argument",
    },
    arg2Subtitle: {
      en: "Design from Physics",
      fr: "Dessein de la Physique",
      es: "Diseño de la Física",
      de: "Design aus der Physik",
    },
    arg3Title: {
      en: "Moral Argument",
      fr: "Argument Moral",
      es: "Argumento Moral",
      de: "Moralisches Argument",
    },
    arg3Subtitle: {
      en: "Objective Values",
      fr: "Valeurs Objectives",
      es: "Valores Objetivos",
      de: "Objektive Werte",
    },
    arg4Title: {
      en: "Resurrection of Jesus",
      fr: "Résurrection de Jésus",
      es: "Resurrección de Jesús",
      de: "Auferstehung Jesu",
    },
    arg4Subtitle: {
      en: "Historical Evidence",
      fr: "Preuves Historiques",
      es: "Evidencia Histórica",
      de: "Historische Beweise",
    },
    arg5Title: {
      en: "Ontological Argument",
      fr: "Argument Ontologique",
      es: "Argumento Ontológico",
      de: "Ontologisches Argument",
    },
    arg5Subtitle: {
      en: "Modal Logic",
      fr: "Logique Modale",
      es: "Lógica Modal",
      de: "Modallogik",
    },

    // Section: The Five Arguments for God
    fiveArgumentsHeading: {
      en: "The Five Arguments for God",
      fr: "Les Cinq Arguments pour Dieu",
      es: "Los Cinco Argumentos para Dios",
      de: "Die Fünf Argumente für Gott",
    },

    // Argument 1: Cosmological
    cosmological: {
      heading: {
        en: "1. The Cosmological Argument (Kalam Form)",
        fr: "1. L'Argument Cosmologique (Forme Kalam)",
        es: "1. El Argumento Cosmológico (Forma Kalam)",
        de: "1. Das Kosmologische Argument (Kalam-Form)",
      },
      tagline: {
        en: "Everything that begins must have a cause",
        fr: "Tout ce qui commence doit avoir une cause",
        es: "Todo lo que comienza debe tener una causa",
        de: "Alles, was beginnt, muss eine Ursache haben",
      },
      summaryLabel: {
        en: "Argument Summary:",
        fr: "Résumé de l'Argument :",
        es: "Resumen del Argumento:",
        de: "Argumentzusammenfassung:",
      },
      premise1: {
        en: "Everything that begins to exist has a cause.",
        fr: "Tout ce qui commence à exister a une cause.",
        es: "Todo lo que comienza a existir tiene una causa.",
        de: "Alles, was zu existieren beginnt, hat eine Ursache.",
      },
      premise2: {
        en: "The universe began to exist.",
        fr: "L'univers a commencé à exister.",
        es: "El universo comenzó a existir.",
        de: "Das Universum begann zu existieren.",
      },
      conclusion: {
        en: "Therefore, the universe has a cause.",
        fr: "Par conséquent, l'univers a une cause.",
        es: "Por lo tanto, el universo tiene una causa.",
        de: "Daher hat das Universum eine Ursache.",
      },
      explanation1: {
        en: "This cause, Craig argues, must be spaceless, timeless, immaterial, and immensely powerful—characteristics that align with classical conceptions of God.",
        fr: "Cette cause, argue Craig, doit être sans espace, intemporelle, immatérielle et immensément puissante — des caractéristiques qui s'alignent avec les conceptions classiques de Dieu.",
        es: "Esta causa, argumenta Craig, debe ser sin espacio, atemporal, inmaterial e inmensamente poderosa—características que se alinean con las concepciones clásicas de Dios.",
        de: "Diese Ursache, argumentiert Craig, muss raumlos, zeitlos, immateriell und immens mächtig sein — Eigenschaften, die mit klassischen Vorstellungen von Gott übereinstimmen.",
      },
      scientificSupport: {
        en: "Scientific support:",
        fr: "Soutien scientifique :",
        es: "Apoyo científico:",
        de: "Wissenschaftliche Unterstützung:",
      },
      explanation2: {
        en: "The Big Bang theory confirms that the universe had a beginning. Additionally, the impossibility of an actual infinite series of past events supports the idea that time and space had an absolute beginning.",
        fr: "La théorie du Big Bang confirme que l'univers a eu un début. De plus, l'impossibilité d'une série infinie réelle d'événements passés soutient l'idée que le temps et l'espace ont eu un début absolu.",
        es: "La teoría del Big Bang confirma que el universo tuvo un comienzo. Además, la imposibilidad de una serie infinita real de eventos pasados apoya la idea de que el tiempo y el espacio tuvieron un comienzo absoluto.",
        de: "Die Urknalltheorie bestätigt, dass das Universum einen Anfang hatte. Darüber hinaus unterstützt die Unmöglichkeit einer tatsächlich unendlichen Reihe vergangener Ereignisse die Idee, dass Zeit und Raum einen absoluten Anfang hatten.",
      },
      quote1: {
        en: "The origin of the universe…points beyond itself to a transcendent cause.",
        fr: "L'origine de l'univers... pointe au-delà d'elle-même vers une cause transcendante.",
        es: "El origen del universo... señala más allá de sí mismo hacia una causa trascendente.",
        de: "Der Ursprung des Universums... weist über sich selbst hinaus auf eine transzendente Ursache.",
      },
    },

    // Argument 2: Fine-Tuning
    fineTuning: {
      heading: {
        en: "2. The Fine-Tuning Argument",
        fr: "2. L'Argument du Réglage Fin",
        es: "2. El Argumento del Ajuste Fino",
        de: "2. Das Feinabstimmungs-Argument",
      },
      tagline: {
        en: "The universe is precisely calibrated for life",
        fr: "L'univers est précisément calibré pour la vie",
        es: "El universo está precisamente calibrado para la vida",
        de: "Das Universum ist präzise auf das Leben abgestimmt",
      },
      premise1: {
        en: "The constants of nature and the initial conditions of the universe are finely tuned for life.",
        fr: "Les constantes de la nature et les conditions initiales de l'univers sont finement ajustées pour la vie.",
        es: "Las constantes de la naturaleza y las condiciones iniciales del universo están finamente ajustadas para la vida.",
        de: "Die Naturkonstanten und die Anfangsbedingungen des Universums sind fein auf das Leben abgestimmt.",
      },
      premise2: {
        en: "This fine-tuning is either due to physical necessity, chance, or design.",
        fr: "Ce réglage fin est dû soit à la nécessité physique, au hasard, ou à la conception.",
        es: "Este ajuste fino se debe a la necesidad física, al azar o al diseño.",
        de: "Diese Feinabstimmung ist entweder auf physikalische Notwendigkeit, Zufall oder Design zurückzuführen.",
      },
      premise3: {
        en: "It is not due to physical necessity or chance.",
        fr: "Ce n'est pas dû à la nécessité physique ou au hasard.",
        es: "No se debe a la necesidad física o al azar.",
        de: "Es liegt nicht an physikalischer Notwendigkeit oder Zufall.",
      },
      conclusion: {
        en: "Therefore, it is due to design.",
        fr: "Par conséquent, c'est dû à la conception.",
        es: "Por lo tanto, se debe al diseño.",
        de: "Daher ist es auf Design zurückzuführen.",
      },
      explanation: {
        en: "Craig highlights the astronomical improbability of life-permitting constants existing by chance. For instance, if the force of gravity or the cosmological constant were altered by even a fraction, life could not exist.",
        fr: "Craig souligne l'improbabilité astronomique que des constantes permettant la vie existent par hasard. Par exemple, si la force de gravité ou la constante cosmologique étaient modifiées ne serait-ce qu'une fraction, la vie ne pourrait pas exister.",
        es: "Craig destaca la improbabilidad astronómica de que las constantes que permiten la vida existan por casualidad. Por ejemplo, si la fuerza de la gravedad o la constante cosmológica se alteraran incluso una fracción, la vida no podría existir.",
        de: "Craig hebt die astronomische Unwahrscheinlichkeit hervor, dass lebensermöglichende Konstanten zufällig existieren. Wenn zum Beispiel die Schwerkraft oder die kosmologische Konstante auch nur geringfügig verändert würden, könnte Leben nicht existieren.",
      },
      quote: {
        en: "The universe is fine-tuned for the existence of intelligent life with a precision and delicacy that literally defy human comprehension.",
        fr: "L'univers est finement ajusté pour l'existence de la vie intelligente avec une précision et une délicatesse qui défient littéralement la compréhension humaine.",
        es: "El universo está finamente ajustado para la existencia de vida inteligente con una precisión y delicadeza que literalmente desafían la comprensión humana.",
        de: "Das Universum ist für die Existenz intelligenten Lebens mit einer Präzision und Feinheit abgestimmt, die buchstäblich das menschliche Verständnis übersteigt.",
      },
    },

    // Argument 3: Moral
    moral: {
      heading: {
        en: "3. The Moral Argument",
        fr: "3. L'Argument Moral",
        es: "3. El Argumento Moral",
        de: "3. Das Moralische Argument",
      },
      tagline: {
        en: "Objective morality requires a moral lawgiver",
        fr: "La moralité objective nécessite un législateur moral",
        es: "La moralidad objetiva requiere un legislador moral",
        de: "Objektive Moral erfordert einen moralischen Gesetzgeber",
      },
      premise1: {
        en: "If God does not exist, objective moral values and duties do not exist.",
        fr: "Si Dieu n'existe pas, les valeurs et devoirs moraux objectifs n'existent pas.",
        es: "Si Dios no existe, los valores y deberes morales objetivos no existen.",
        de: "Wenn Gott nicht existiert, existieren keine objektiven moralischen Werte und Pflichten.",
      },
      premise2: {
        en: "Objective moral values and duties do exist.",
        fr: "Les valeurs et devoirs moraux objectifs existent.",
        es: "Los valores y deberes morales objetivos existen.",
        de: "Objektive moralische Werte und Pflichten existieren.",
      },
      conclusion: {
        en: "Therefore, God exists.",
        fr: "Par conséquent, Dieu existe.",
        es: "Por lo tanto, Dios existe.",
        de: "Daher existiert Gott.",
      },
      explanation: {
        en: "Atheistic naturalism struggles to ground moral obligations. Under materialism, humans are merely biological machines. Yet we know intuitively that certain actions (like torturing babies for fun) are objectively wrong. This points to a transcendent moral lawgiver.",
        fr: "Le naturalisme athée a du mal à fonder les obligations morales. Sous le matérialisme, les humains ne sont que des machines biologiques. Pourtant, nous savons intuitivement que certaines actions (comme torturer des bébés pour le plaisir) sont objectivement mauvaises. Cela pointe vers un législateur moral transcendant.",
        es: "El naturalismo ateo lucha por fundamentar las obligaciones morales. Bajo el materialismo, los humanos son meramente máquinas biológicas. Sin embargo, sabemos intuitivamente que ciertas acciones (como torturar bebés por diversión) son objetivamente incorrectas. Esto apunta a un legislador moral trascendente.",
        de: "Der atheistische Naturalismus hat Schwierigkeiten, moralische Verpflichtungen zu begründen. Unter dem Materialismus sind Menschen lediglich biologische Maschinen. Dennoch wissen wir intuitiv, dass bestimmte Handlungen (wie Babys zum Spaß zu foltern) objektiv falsch sind. Dies weist auf einen transzendenten moralischen Gesetzgeber hin.",
      },
      quote: {
        en: "Objective values are rooted in the character of a holy and loving God.",
        fr: "Les valeurs objectives sont enracinées dans le caractère d'un Dieu saint et aimant.",
        es: "Los valores objetivos están arraigados en el carácter de un Dios santo y amoroso.",
        de: "Objektive Werte sind im Charakter eines heiligen und liebenden Gottes verwurzelt.",
      },
    },

    // Argument 4: Resurrection
    resurrection: {
      heading: {
        en: "4. The Argument from the Resurrection of Jesus",
        fr: "4. L'Argument de la Résurrection de Jésus",
        es: "4. El Argumento de la Resurrección de Jesús",
        de: "4. Das Argument der Auferstehung Jesu",
      },
      tagline: {
        en: "Historical evidence for divine intervention",
        fr: "Preuves historiques d'intervention divine",
        es: "Evidencia histórica de intervención divina",
        de: "Historische Beweise für göttliches Eingreifen",
      },
      intro: {
        en: "Craig affirms that the historical evidence for Jesus's resurrection is compelling. He outlines three key facts agreed upon by the majority of New Testament scholars:",
        fr: "Craig affirme que les preuves historiques de la résurrection de Jésus sont convaincantes. Il décrit trois faits clés reconnus par la majorité des spécialistes du Nouveau Testament :",
        es: "Craig afirma que la evidencia histórica de la resurrección de Jesús es convincente. Describe tres hechos clave acordados por la mayoría de los eruditos del Nuevo Testamento:",
        de: "Craig bekräftigt, dass die historischen Beweise für Jesu Auferstehung überzeugend sind. Er umreißt drei Schlüsselfakten, die von der Mehrheit der neutestamentlichen Gelehrten anerkannt werden:",
      },
      fact1: {
        en: "Jesus was buried in a known tomb.",
        fr: "Jésus a été enterré dans un tombeau connu.",
        es: "Jesús fue enterrado en una tumba conocida.",
        de: "Jesus wurde in einem bekannten Grab beigesetzt.",
      },
      fact2: {
        en: "His tomb was found empty",
        fr: "Son tombeau a été trouvé vide",
        es: "Su tumba fue encontrada vacía",
        de: "Sein Grab wurde leer vorgefunden",
      },
      fact2Detail: {
        en: "by a group of women followers.",
        fr: "par un groupe de femmes disciples.",
        es: "por un grupo de mujeres seguidoras.",
        de: "von einer Gruppe von Frauen, die ihm nachfolgten.",
      },
      fact3: {
        en: "Multiple individuals and groups experienced appearances",
        fr: "Plusieurs individus et groupes ont vécu des apparitions",
        es: "Múltiples individuos y grupos experimentaron apariciones",
        de: "Mehrere Individuen und Gruppen erlebten Erscheinungen",
      },
      fact3Detail: {
        en: "of Jesus alive after His death.",
        fr: "de Jésus vivant après Sa mort.",
        es: "de Jesús vivo después de Su muerte.",
        de: "von Jesus lebendig nach Seinem Tod.",
      },
      explanation: {
        en: "Naturalistic explanations (like hallucinations, theft, or myth development) fail to account for all the data. The resurrection is the best explanation, implying divine confirmation of Jesus's claims.",
        fr: "Les explications naturalistes (comme les hallucinations, le vol ou le développement du mythe) ne parviennent pas à expliquer toutes les données. La résurrection est la meilleure explication, impliquant une confirmation divine des affirmations de Jésus.",
        es: "Las explicaciones naturalistas (como alucinaciones, robo o desarrollo de mitos) no logran explicar todos los datos. La resurrección es la mejor explicación, lo que implica una confirmación divina de las afirmaciones de Jesús.",
        de: "Naturalistische Erklärungen (wie Halluzinationen, Diebstahl oder Mythenbildung) können nicht alle Daten erklären. Die Auferstehung ist die beste Erklärung, was eine göttliche Bestätigung von Jesu Ansprüchen impliziert.",
      },
    },

    // Argument 5: Ontological
    ontological: {
      heading: {
        en: "5. The Ontological Argument (Modern Modal Version)",
        fr: "5. L'Argument Ontologique (Version Modale Moderne)",
        es: "5. El Argumento Ontológico (Versión Modal Moderna)",
        de: "5. Das Ontologische Argument (Moderne Modalversion)",
      },
      tagline: {
        en: "From possibility to necessity",
        fr: "De la possibilité à la nécessité",
        es: "De la posibilidad a la necesidad",
        de: "Von der Möglichkeit zur Notwendigkeit",
      },
      intro: {
        en: "This argument, originally proposed by Anselm and modernized by Alvin Plantinga, proposes:",
        fr: "Cet argument, proposé à l'origine par Anselme et modernisé par Alvin Plantinga, propose :",
        es: "Este argumento, propuesto originalmente por Anselmo y modernizado por Alvin Plantinga, propone:",
        de: "Dieses Argument, ursprünglich von Anselm vorgeschlagen und von Alvin Plantinga modernisiert, schlägt vor:",
      },
      premise1: {
        en: "It is possible that a maximally great being exists.",
        fr: "Il est possible qu'un être maximalement grand existe.",
        es: "Es posible que un ser máximamente grande exista.",
        de: "Es ist möglich, dass ein maximal großartiges Wesen existiert.",
      },
      premise2: {
        en: "If it is possible, then such a being exists in some possible world.",
        fr: "Si c'est possible, alors un tel être existe dans un monde possible.",
        es: "Si es posible, entonces tal ser existe en algún mundo posible.",
        de: "Wenn es möglich ist, dann existiert ein solches Wesen in einer möglichen Welt.",
      },
      premise3: {
        en: "If it exists in some possible world, it exists in every possible world.",
        fr: "S'il existe dans un monde possible, il existe dans tous les mondes possibles.",
        es: "Si existe en algún mundo posible, existe en todos los mundos posibles.",
        de: "Wenn es in einer möglichen Welt existiert, existiert es in jeder möglichen Welt.",
      },
      premise4: {
        en: "If it exists in every possible world, it exists in the actual world.",
        fr: "S'il existe dans tous les mondes possibles, il existe dans le monde actuel.",
        es: "Si existe en todos los mundos posibles, existe en el mundo actual.",
        de: "Wenn es in jeder möglichen Welt existiert, existiert es in der wirklichen Welt.",
      },
      conclusion: {
        en: "Therefore, a maximally great being (i.e., God) exists.",
        fr: "Par conséquent, un être maximalement grand (c.-à-d. Dieu) existe.",
        es: "Por lo tanto, un ser máximamente grande (es decir, Dios) existe.",
        de: "Daher existiert ein maximal großartiges Wesen (d. h. Gott).",
      },
      explanation: {
        en: "Though abstract, this argument appeals to metaphysical possibility and logically entails the existence of God if the first premise is accepted.",
        fr: "Bien qu'abstrait, cet argument fait appel à la possibilité métaphysique et implique logiquement l'existence de Dieu si la première prémisse est acceptée.",
        es: "Aunque abstracto, este argumento apela a la posibilidad metafísica e implica lógicamente la existencia de Dios si se acepta la primera premisa.",
        de: "Obwohl abstrakt, beruft sich dieses Argument auf metaphysische Möglichkeit und impliziert logisch die Existenz Gottes, wenn die erste Prämisse akzeptiert wird.",
      },
    },

    // Answering Objections
    objections: {
      heading: {
        en: "Answering New Atheist Objections",
        fr: "Répondre aux Objections des Nouveaux Athées",
        es: "Respondiendo a las Objeciones de los Nuevos Ateos",
        de: "Antwort auf Einwände der Neuen Atheisten",
      },
      intro: {
        en: "The New Atheism is not primarily philosophical but rhetorical and emotional. It often relies on strawman versions of religion, confusing fundamentalist literalism with historic Christianity.",
        fr: "Le Nouvel Athéisme n'est pas principalement philosophique mais rhétorique et émotionnel. Il s'appuie souvent sur des versions caricaturales de la religion, confondant le littéralisme fondamentaliste avec le christianisme historique.",
        es: "El Nuevo Ateísmo no es principalmente filosófico sino retórico y emocional. A menudo se basa en versiones caricaturescas de la religión, confundiendo el literalismo fundamentalista con el cristianismo histórico.",
        de: "Der Neue Atheismus ist nicht primär philosophisch, sondern rhetorisch und emotional. Er stützt sich oft auf Strohmann-Versionen der Religion und verwechselt fundamentalistischen Literalismus mit historischem Christentum.",
      },
      obj1Title: {
        en: '"Faith is irrational."',
        fr: "« La foi est irrationnelle. »",
        es: '"La fe es irracional."',
        de: '„Glaube ist irrational."',
      },
      obj1Response: {
        en: "→ Christian faith is not blind but supported by reason and evidence.",
        fr: "→ La foi chrétienne n'est pas aveugle mais soutenue par la raison et les preuves.",
        es: "→ La fe cristiana no es ciega sino respaldada por la razón y la evidencia.",
        de: "→ Der christliche Glaube nicht blind ist, sondern durch Vernunft und Beweise gestützt wird.",
      },
      obj2Title: {
        en: '"Religion causes violence."',
        fr: "« La religion cause la violence. »",
        es: '"La religión causa violencia."',
        de: '„Religion verursacht Gewalt."',
      },
      obj2Response: {
        en: "→ While misused religion has caused harm, so have secular ideologies (Nazism, Communism). The problem is not religion per se but human sin.",
        fr: "→ Bien que la religion mal utilisée ait causé du tort, les idéologies séculaires (nazisme, communisme) l'ont également fait. Le problème n'est pas la religion en soi mais le péché humain.",
        es: "→ Si bien la religión mal utilizada ha causado daño, también lo han hecho las ideologías seculares (nazismo, comunismo). El problema no es la religión per se sino el pecado humano.",
        de: "→ Während missbrauchte Religion Schaden angerichtet hat, haben dies auch säkulare Ideologien (Nazismus, Kommunismus) getan. Das Problem ist nicht die Religion an sich, sondern die menschliche Sünde.",
      },
      obj3Title: {
        en: '"Science explains everything."',
        fr: "« La science explique tout. »",
        es: '"La ciencia lo explica todo."',
        de: '„Wissenschaft erklärt alles."',
      },
      obj3Response: {
        en: "→ Science explains the how, not the why. Science presupposes logic, mathematics, and the uniformity of nature—all of which require philosophical justification.",
        fr: "→ La science explique le comment, pas le pourquoi. La science présuppose la logique, les mathématiques et l'uniformité de la nature — tout cela nécessite une justification philosophique.",
        es: "→ La ciencia explica el cómo, no el por qué. La ciencia presupone lógica, matemáticas y la uniformidad de la naturaleza—todo lo cual requiere justificación filosófica.",
        de: "→ Wissenschaft erklärt das Wie, nicht das Warum. Wissenschaft setzt Logik, Mathematik und die Einheitlichkeit der Natur voraus — all dies erfordert philosophische Rechtfertigung.",
      },
      craigQuote: {
        en: "The New Atheists are generally not trained in philosophy or theology. Their attacks often miss their mark because they don't understand what they're attacking.",
        fr: "Les Nouveaux Athées ne sont généralement pas formés en philosophie ou en théologie. Leurs attaques manquent souvent leur cible parce qu'ils ne comprennent pas ce qu'ils attaquent.",
        es: "Los Nuevos Ateos generalmente no están capacitados en filosofía o teología. Sus ataques a menudo fallan porque no entienden lo que están atacando.",
        de: "Die Neuen Atheisten sind im Allgemeinen nicht in Philosophie oder Theologie ausgebildet. Ihre Angriffe verfehlen oft ihr Ziel, weil sie nicht verstehen, was sie angreifen.",
      },
    },

    // Conclusion
    conclusion: {
      heading: {
        en: "Conclusion",
        fr: "Conclusion",
        es: "Conclusión",
        de: "Schlussfolgerung",
      },
      para1: {
        en: "Basic apologetics shows that belief in God is intellectually reasonable and supported by powerful philosophical arguments. The New Atheism's claims—though popular—are often superficial.",
        fr: "L'apologétique de base montre que la croyance en Dieu est intellectuellement raisonnable et soutenue par de puissants arguments philosophiques. Les affirmations du Nouvel Athéisme — bien que populaires — sont souvent superficielles.",
        es: "La apologética básica muestra que la creencia en Dios es intelectualmente razonable y está respaldada por poderosos argumentos filosóficos. Las afirmaciones del Nuevo Ateísmo—aunque populares—a menudo son superficiales.",
        de: "Grundlegende Apologetik zeigt, dass der Glaube an Gott intellektuell vernünftig und durch kraftvolle philosophische Argumente gestützt ist. Die Behauptungen des Neuen Atheismus — obwohl populär — sind oft oberflächlich.",
      },
      para2: {
        en: "Christians are called not only to believe but to be able to give a reason for the hope that is in them (1 Peter 3:15).",
        fr: "Les chrétiens sont appelés non seulement à croire mais à être capables de donner une raison de l'espérance qui est en eux (1 Pierre 3:15).",
        es: "Los cristianos están llamados no solo a creer sino a poder dar una razón de la esperanza que hay en ellos (1 Pedro 3:15).",
        de: "Christen sind nicht nur aufgerufen zu glauben, sondern auch Rechenschaft über die Hoffnung zu geben, die in ihnen ist (1. Petrus 3:15).",
      },
      para3: {
        en: "Through the cosmological, fine-tuning, moral, resurrection, and ontological arguments, Craig demonstrates that Christianity is not just a leap of faith but a worldview grounded in reason, evidence, and historical reality.",
        fr: "À travers les arguments cosmologique, du réglage fin, moral, de la résurrection et ontologique, Craig démontre que le christianisme n'est pas simplement un saut de foi mais une vision du monde ancrée dans la raison, les preuves et la réalité historique.",
        es: "A través de los argumentos cosmológico, de ajuste fino, moral, de la resurrección y ontológico, Craig demuestra que el cristianismo no es solo un salto de fe sino una cosmovisión fundamentada en la razón, la evidencia y la realidad histórica.",
        de: "Durch die kosmologischen, Feinabstimmungs-, moralischen, Auferstehungs- und ontologischen Argumente zeigt Craig, dass das Christentum nicht nur ein Glaubenssprung ist, sondern eine Weltanschauung, die in Vernunft, Beweisen und historischer Realität verwurzelt ist.",
      },
    },

    // Bridge to Next Topic
    bridge: {
      heading: {
        en: "Where Do We Go From Here?",
        fr: "Où Allons-Nous Maintenant ?",
        es: "¿Hacia Dónde Vamos Ahora?",
        de: "Wo Gehen Wir Von Hier Aus?",
      },
      para1: {
        en: "These arguments collectively present a powerful case that God exists. But knowing that God exists raises another question: Has God revealed Himself to us? Has He acted in history?",
        fr: "Ces arguments présentent collectivement un cas puissant que Dieu existe. Mais savoir que Dieu existe soulève une autre question : Dieu s'est-Il révélé à nous ? A-t-Il agi dans l'histoire ?",
        es: "Estos argumentos presentan colectivamente un caso poderoso de que Dios existe. Pero saber que Dios existe plantea otra pregunta: ¿Se ha revelado Dios a nosotros? ¿Ha actuado en la historia?",
        de: "Diese Argumente präsentieren gemeinsam einen starken Fall, dass Gott existiert. Aber zu wissen, dass Gott existiert, wirft eine weitere Frage auf: Hat sich Gott uns offenbart? Hat Er in der Geschichte gehandelt?",
      },
      para2: {
        en: "If God created the universe and cares about humanity, it makes sense that He would communicate with us. And indeed, billions of people claim He has—through Jesus Christ. But is there evidence for this claim? Let's explore the most pivotal event in history: the Resurrection.",
        fr: "Si Dieu a créé l'univers et se soucie de l'humanité, il est logique qu'Il communique avec nous. Et en effet, des milliards de personnes affirment qu'Il l'a fait — par Jésus-Christ. Mais y a-t-il des preuves de cette affirmation ? Explorons l'événement le plus crucial de l'histoire : la Résurrection.",
        es: "Si Dios creó el universo y se preocupa por la humanidad, tiene sentido que Él se comunique con nosotros. Y de hecho, miles de millones de personas afirman que lo ha hecho—a través de Jesucristo. Pero ¿hay evidencia de esta afirmación? Exploremos el evento más crucial de la historia: la Resurrección.",
        de: "Wenn Gott das Universum geschaffen hat und sich um die Menschheit kümmert, macht es Sinn, dass Er mit uns kommuniziert. Und tatsächlich behaupten Milliarden von Menschen, dass Er es getan hat — durch Jesus Christus. Aber gibt es Beweise für diese Behauptung? Lassen Sie uns das entscheidendste Ereignis der Geschichte erkunden: die Auferstehung.",
      },
    },
  },

  // Evidence for the Resurrection Topic
  proofOfResurrection: {
    title: {
      en: "Evidence for the Resurrection",
      fr: "Preuves de la Résurrection",
      es: "Evidencia de la Resurrección",
      de: "Beweise für die Auferstehung",
    },
    subtitle: {
      en: "The Case for Christianity through Historical Evidence",
      fr: "Le Cas pour le Christianisme à Travers les Preuves Historiques",
      es: "El Caso del Cristianismo a Través de la Evidencia Histórica",
      de: "Der Fall für das Christentum durch Historische Beweise",
    },
    quote: {
      en: "If Christ has not been raised, then our preaching is in vain and your faith is in vain.",
      fr: "Si Christ n'a pas été ressuscité, alors notre prédication est vaine et votre foi est vaine.",
      es: "Si Cristo no ha resucitado, entonces nuestra predicación es en vano y vuestra fe es en vano.",
      de: "Wenn Christus nicht auferstanden ist, dann ist unsere Predigt vergeblich und euer Glaube ist vergeblich.",
    },
    quoteSource: {
      en: "1 Corinthians 15:14",
      fr: "1 Corinthiens 15:14",
      es: "1 Corintios 15:14",
      de: "1 Korinther 15:14",
    },

    // Introduction
    introHeading: {
      en: "Is Christianity Rooted in History?",
      fr: "Le Christianisme Est-il Enraciné dans l'Histoire ?",
      es: "¿Está el Cristianismo Arraigado en la Historia?",
      de: "Ist das Christentum in der Geschichte verwurzelt?",
    },
    introPara1: {
      en: "The Christian faith is not founded on abstract ideas or moral ideals alone. It is grounded in historical events—real occurrences in space and time that can be investigated, analyzed, and compared with other events in ancient history.",
      fr: "La foi chrétienne n'est pas fondée uniquement sur des idées abstraites ou des idéaux moraux. Elle est ancrée dans des événements historiques — des occurrences réelles dans l'espace et le temps qui peuvent être enquêtées, analysées et comparées avec d'autres événements de l'histoire ancienne.",
      es: "La fe cristiana no se funda únicamente en ideas abstractas o ideales morales. Está arraigada en eventos históricos—ocurrencias reales en el espacio y el tiempo que pueden ser investigadas, analizadas y comparadas con otros eventos de la historia antigua.",
      de: "Der christliche Glaube gründet sich nicht allein auf abstrakte Ideen oder moralische Ideale. Er ist in historischen Ereignissen verwurzelt — tatsächlichen Vorkommnissen in Raum und Zeit, die untersucht, analysiert und mit anderen Ereignissen der antiken Geschichte verglichen werden können.",
    },
    introPara2: {
      en: 'If these events are true, Christianity stands as the most rational worldview available. If not, as Paul wrote: "If Christ has not been raised, then our preaching is in vain and your faith is in vain." (1 Corinthians 15:14)',
      fr: "Si ces événements sont vrais, le christianisme se présente comme la vision du monde la plus rationnelle disponible. Sinon, comme Paul l'a écrit : « Si Christ n'a pas été ressuscité, alors notre prédication est vaine et votre foi est vaine. » (1 Corinthiens 15:14)",
      es: 'Si estos eventos son verdaderos, el cristianismo se presenta como la cosmovisión más racional disponible. Si no, como escribió Pablo: "Si Cristo no ha resucitado, entonces nuestra predicación es en vano y vuestra fe es en vano." (1 Corintios 15:14)',
      de: 'Wenn diese Ereignisse wahr sind, steht das Christentum als die rationalste verfügbare Weltanschauung da. Wenn nicht, wie Paulus schrieb: „Wenn Christus nicht auferstanden ist, dann ist unsere Predigt vergeblich und euer Glaube ist vergeblich." (1 Korinther 15:14)',
    },

    // Section 1: Minimal Facts
    minimalFacts: {
      heading: {
        en: '1. The "Minimal Facts" Approach',
        fr: "1. L'Approche des « Faits Minimaux »",
        es: '1. El Enfoque de los "Hechos Mínimos"',
        de: '1. Der Ansatz der „Minimalen Fakten"',
      },
      intro: {
        en: "Developed by scholars like Gary Habermas, the Minimal Facts Approach builds a case for the resurrection of Jesus based on a small set of historical data that meet two criteria:",
        fr: "Développée par des chercheurs comme Gary Habermas, l'Approche des Faits Minimaux construit un cas pour la résurrection de Jésus basé sur un petit ensemble de données historiques qui répondent à deux critères :",
        es: "Desarrollado por académicos como Gary Habermas, el Enfoque de los Hechos Mínimos construye un caso para la resurrección de Jesús basado en un pequeño conjunto de datos históricos que cumplen dos criterios:",
        de: "Entwickelt von Gelehrten wie Gary Habermas, baut der Ansatz der Minimalen Fakten einen Fall für die Auferstehung Jesu auf, basierend auf einer kleinen Menge historischer Daten, die zwei Kriterien erfüllen:",
      },
      criterion1: {
        en: "They are strongly evidenced by multiple, independent sources.",
        fr: "Ils sont fortement attestés par de multiples sources indépendantes.",
        es: "Están fuertemente evidenciados por múltiples fuentes independientes.",
        de: "Sie sind durch mehrere unabhängige Quellen stark belegt.",
      },
      criterion2: {
        en: "They are accepted by the vast majority of scholars in the field, including skeptical ones.",
        fr: "Ils sont acceptés par la grande majorité des chercheurs du domaine, y compris les sceptiques.",
        es: "Son aceptados por la gran mayoría de los académicos en el campo, incluidos los escépticos.",
        de: "Sie werden von der überwiegenden Mehrheit der Wissenschaftler auf diesem Gebiet akzeptiert, einschließlich skeptischer.",
      },
    },

    // --- DÉBUT DE LA MODIFICATION ---
    rankHistorical: {
      en: "Historical Document #",
      fr: "Document Historique n°",
      es: "Documento Histórico n.º",
      de: "Historisches Dokument Nr.",
    },
    rankUnmatched: {
      en: "The Unmatched Standard",
      fr: "Le Standard Inégalé",
      es: "El Estándar Inigualable",
      de: "Der Unübertroffene Standard",
    },
    typeChristian: {
      en: "The Christian Scriptures",
      fr: "Les Écritures Chrétiennes",
      es: "Las Escrituras Cristianas",
      de: "Die Christlichen Schriften",
    },
    typeSecular: {
      en: "Secular/Classical Text",
      fr: "Texte Séculier/Classique",
      es: "Texto Secular/Clásico",
      de: "Säkularer/Klassischer Text",
    },
    labelManuscripts: {
      en: "Manuscripts",
      fr: "Manuscrits",
      es: "Manuscritos",
      de: "Manuskripte",
    },
    labelTimeGap: {
      en: "Time Gap to Original Event:",
      fr: "Écart Temporel à l'Événement Original:",
      es: "Intervalo de Tiempo al Evento Original:",
      de: "Zeitspanne zum Originalereignis:",
    },
    scaleCount: {
      en: "The Overwhelming Count",
      fr: "Le Compte Écrasant",
      es: "El Recuento Abrumador",
      de: "Die Überwältigende Zahl",
    },
    scaleMaxMs: {
      en: "Scale: {0} max",
      fr: "Échelle: {0} max",
      es: "Escala: {0} máx",
      de: "Skala: {0} max",
    },
    scaleTimeClose: {
      en: "The Closest in Time",
      fr: "Le Plus Proche dans le Temps",
      es: "El Más Cercano en el Temps",
      de: "Der Zeitlich Nächste",
    },
    scaleMaxGap: {
      en: "Max Gap: {0} years",
      fr: "Écart Max: {0} ans",
      es: "Intervalo Máx: {0} años",
      de: "Max. Zeitspanne: {0} Jahre",
    },
    scaleVisualNote: {
      en: "(Visual length of bar indicates relative closeness to original document)",
      fr: "(La longueur visuelle de la barre indique la proximité relative avec le document original)",
      es: "(La longitud visual de la barre indique la proximidad relative au document original)",
      de: "(Die visuelle Länge des Balkens gibt die relative Nähe zum Originaldokument an)",
    },

    // Section 2: Manuscript Evidence
    manuscriptEvidence: {
      heading: {
        en: "2. Unmatched Manuscript Evidence for the New Testament",
        fr: "2. Preuves Manuscrites Inégalées pour le Nouveau Testament",
        es: "2. Evidencia Manuscrita Incomparable del Nuevo Testamento",
        de: "2. Unübertroffene Manuskript-Beweise für das Neue Testament",
      },
      intro: {
        en: "When comparing the New Testament with other ancient works, its textual support is overwhelming:",
        fr: "Lorsqu'on compare le Nouveau Testament avec d'autres œuvres anciennes, son soutien textuel est écrasant :",
        es: "Al comparar el Nuevo Testamento con otras obras antiguas, su respaldo textual es abrumador:",
        de: "Beim Vergleich des Neuen Testaments mit anderen antiken Werken ist seine textliche Unterstützung überwältigend:",
      },
      tableAuthor: {
        en: "Author",
        fr: "Auteur",
        es: "Autor",
        de: "Autor",
      },
      tableTimeGap: {
        en: "Time Gap (Event to Earliest Copy)",
        fr: "Écart Temporel (Événement à la Première Copie)",
        es: "Intervalo de Tiempo (Evento a la Primera Copia)",
        de: "Zeitspanne (Ereignis zur frühesten Kopie)",
      },
      tableManuscripts: {
        en: "Number of Manuscripts",
        fr: "Nombre de Manuscrits",
        es: "Número de Manuscritos",
        de: "Anzahl der Manuskripte",
      },
      newTestament: {
        en: "New Testament",
        fr: "Nouveau Testament",
        es: "Nuevo Testamento",
        de: "Neues Testament",
      },
      timeGap25: {
        en: "25 years",
        fr: "25 ans",
        es: "25 años",
        de: "25 Jahre",
      },
      timeGap400: {
        en: "400 years",
        fr: "400 ans",
        es: "400 años",
        de: "400 Jahre",
      },
      timeGap1000: {
        en: "1,000 years",
        fr: "1 000 ans",
        es: "1.000 años",
        de: "1.000 Jahre",
      },
      timeGap1200: {
        en: "1,200 years",
        fr: "1 200 ans",
        es: "1.200 años",
        de: "1.200 Jahre",
      },
      timeGap1400: {
        en: "1,400 years",
        fr: "1 400 ans",
        es: "1.400 años",
        de: "1.400 Jahre",
      },
      conclusion: {
        en: "No other ancient document comes close in terms of early attestation and manuscript quantity. This makes the New Testament the most historically reliable document of antiquity.",
        fr: "Aucun autre document ancien n'approche en termes d'attestation précoce et de quantité de manuscrits. Cela fait du Nouveau Testament le document le plus historiquement fiable de l'antiquité.",
        es: "Ningún otro documento antiguo se acerca en términos de atestación temprana y cantidad de manuscritos. Esto hace del Nuevo Testamento el documento más históricamente confiable de la antigüedad.",
        de: "Kein anderes antikes Dokument kommt in Bezug auf frühe Bezeugung und Manuskriptmenge nahe. Dies macht das Neue Testament zum historisch zuverlässigsten Dokument der Antike.",
      },
      timeGap750: {
        en: "750 years",
        fr: "750 ans",
        es: "750 años",
        de: "750 Jahre",
      },
    },

    // Author Name Translations
    authorHomer: {
      en: "Homer",
      fr: "Homère",
      es: "Homero",
      de: "Homer",
    },
    authorDemosthenes: {
      en: "Demosthenes",
      fr: "Démosthène",
      es: "Demóstenes",
      de: "Demosthenes",
    },
    authorHerodotus: {
      en: "Herodotus",
      fr: "Hérodote",
      es: "Heródoto",
      de: "Herodot",
    },
    authorPlato: {
      en: "Plato",
      fr: "Platon",
      es: "Platón",
      de: "Plato",
    },
    authorTacitus: {
      en: "Tacitus",
      fr: "Tacite",
      es: "Tácito",
      de: "Tacitus",
    },
    authorCaesar: {
      en: "Caesar",
      fr: "César",
      es: "César",
      de: "Cäsar",
    },
    authorPliny: {
      en: "Pliny",
      fr: "Pline",
      es: "Plinio",
      de: "Plinius",
    },

    // Visualization and Scale Keys
    rankHistorical: {
      en: "Historical Document #",
      fr: "Document Historique n°",
      es: "Documento Histórico n.º",
      de: "Historisches Dokument Nr.",
    },
    rankUnmatched: {
      en: "The Unmatched Standard",
      fr: "Le Standard Inégalé",
      es: "El Estándar Inigualable",
      de: "Der Unübertroffene Standard",
    },
    scaleCount: {
      en: "The Overwhelming Count",
      fr: "Le Compte Écrasant",
      es: "El Recuento Abrumador",
      de: "Die Überwältigende Zahl",
    },
    scaleMaxMs: {
      en: "Scale: {0} max",
      fr: "Échelle: {0} max",
      es: "Escala: {0} máx",
      de: "Skala: {0} max",
    },
    scaleTimeClose: {
      en: "The Closest in Time",
      fr: "Le Plus Proche dans le Temps",
      es: "El Más Cercano en el Temps",
      de: "Der Zeitlich Nächste",
    },
    scaleMaxGap: {
      en: "Max Gap: {0} years",
      fr: "Écart Max: {0} ans",
      es: "Intervalo Máx: {0} años",
      de: "Max. Zeitspanne: {0} Jahre",
    },
    scaleVisualNote: {
      en: "(Visual length of bar indicates relative closeness to original document)",
      fr: "(La longueur visuelle de la barre indique la proximité relative avec le document original)",
      es: "(La longitud visual de la barre indique la proximité relative au document original)",
      de: "(Die visuelle Länge des Balkens gibt die relative Nähe zum Originaldokument an)",
    },

    // Section 3: Who Was Jesus
    whoWasJesus: {
      heading: {
        en: "3. Who Was Jesus of Nazareth?",
        fr: "3. Qui Était Jésus de Nazareth ?",
        es: "3. ¿Quién Era Jesús de Nazaret?",
        de: "3. Wer War Jesus von Nazareth?",
      },
      intro: {
        en: "Historians—both religious and secular—agree on key facts about Jesus:",
        fr: "Les historiens — tant religieux que laïques — s'accordent sur des faits clés concernant Jésus :",
        es: "Los historiadores—tanto religiosos como seculares—concuerdan en hechos clave sobre Jesús:",
        de: "Historiker — sowohl religiöse als auch säkulare — stimmen in wichtigen Fakten über Jesus überein:",
      },
      fact1: {
        en: "He was a Jew from Galilee, born between 7–5 B.C.",
        fr: "Il était un Juif de Galilée, né entre 7 et 5 av. J.-C.",
        es: "Era un judío de Galilea, nacido entre el 7 y el 5 a.C.",
        de: "Er war ein Jude aus Galiläa, geboren zwischen 7–5 v. Chr.",
      },
      fact2: {
        en: "He was crucified under Pontius Pilate.",
        fr: "Il a été crucifié sous Ponce Pilate.",
        es: "Fue crucificado bajo Poncio Pilato.",
        de: "Er wurde unter Pontius Pilatus gekreuzigt.",
      },
      fact3: {
        en: "His followers came to believe He rose from the dead and began proclaiming this in Jerusalem just weeks later.",
        fr: "Ses disciples en sont venus à croire qu'Il était ressuscité des morts et ont commencé à le proclamer à Jérusalem quelques semaines plus tard.",
        es: "Sus seguidores llegaron a creer que Él resucitó de entre los muertos y comenzaron a proclamar esto en Jerusalén apenas semanas después.",
        de: "Seine Anhänger kamen zu dem Glauben, dass Er von den Toten auferstanden war, und begannen, dies nur wenige Wochen später in Jerusalem zu verkünden.",
      },
      divineClaimIntro: {
        en: "The claim that Jesus believed Himself to be God is attested in the Gospels. In John 8:58, Jesus said:",
        fr: "L'affirmation selon laquelle Jésus croyait être Dieu est attestée dans les Évangiles. Dans Jean 8:58, Jésus a dit :",
        es: "La afirmación de que Jesús creía ser Dios está atestiguada en los Evangelios. En Juan 8:58, Jesús dijo:",
        de: "Die Behauptung, dass Jesus glaubte, Gott zu sein, ist in den Evangelien bezeugt. In Johannes 8:58 sagte Jesus:",
      },
      john858: {
        en: "Before Abraham was, I AM.",
        fr: "Avant qu'Abraham fût, je suis.",
        es: "Antes de que Abraham fuera, YO SOY.",
        de: "Ehe Abraham war, bin ICH.",
      },
      blasphemy: {
        en: "This divine claim led to accusations of blasphemy and ultimately to His execution.",
        fr: "Cette affirmation divine a conduit à des accusations de blasphème et finalement à Son exécution.",
        es: "Esta afirmación divina llevó a acusaciones de blasfemia y finalmente a Su ejecución.",
        de: "Diese göttliche Behauptung führte zu Blasphemievorwürfen und letztlich zu Seiner Hinrichtung.",
      },
    },

    // Section 4: Four Minimal Facts
    fourMinimalFacts: {
      heading: {
        en: "4. The Four Minimal Facts Accepted by Nearly All Scholars",
        fr: "4. Les Quatre Faits Minimaux Acceptés par Presque Tous les Chercheurs",
        es: "4. Los Cuatro Hechos Mínimos Aceptados por Casi Todos los Académicos",
        de: "4. Die Vier Minimalen Fakten, die von Fast Allen Gelehrten Akzeptiert Werden",
      },
      fact1: {
        en: "Jesus died by crucifixion",
        fr: "Jésus est mort par crucifixion",
        es: "Jesús murió por crucifixión",
        de: "Jesus starb durch Kreuzigung",
      },
      fact2: {
        en: "His tomb was found empty",
        fr: "Son tombeau a été trouvé vide",
        es: "Su tumba fue encontrada vacía",
        de: "Sein Grab wurde leer vorgefunden",
      },
      fact3: {
        en: "His disciples sincerely believed He rose and appeared to them",
        fr: "Ses disciples croyaient sincèrement qu'Il était ressuscité et leur était apparu",
        es: "Sus discípulos creyeron sinceramente que Él resucitó y se les apareció",
        de: "Seine Jünger glaubten aufrichtig, dass Er auferstanden war und ihnen erschien",
      },
      fact4: {
        en: "Paul and James both converted based on post-resurrection appearances",
        fr: "Paul et Jacques se sont tous deux convertis sur la base d'apparitions post-résurrection",
        es: "Pablo y Santiago se convirtieron basándose en apariciones post-resurrección",
        de: "Paulus und Jakobus bekehrten sich beide aufgrund von Erscheinungen nach der Auferstehung",
      },
      support: {
        en: "These facts are supported by early creeds, independent Gospel sources, and external historical writings (Josephus, Tacitus, etc.).",
        fr: "Ces faits sont soutenus par des crédos anciens, des sources évangéliques indépendantes et des écrits historiques externes (Josèphe, Tacite, etc.).",
        es: "Estos hechos están respaldados por credos tempranos, fuentes evangélicas independientes y escritos históricos externos (Josefo, Tácito, etc.).",
        de: "Diese Fakten werden durch frühe Glaubensbekenntnisse, unabhängige Evangelienquellen und externe historische Schriften (Josephus, Tacitus usw.) gestützt.",
      },
    },

    // Section 5: Evaluating Explanations
    evaluatingExplanations: {
      heading: {
        en: "5. Evaluating the Explanations",
        fr: "5. Évaluation des Explications",
        es: "5. Evaluando las Explicaciones",
        de: "5. Bewertung der Erklärungen",
      },
      intro: {
        en: "Historians and skeptics have proposed various explanations for these facts. Each alternative theory fails under scrutiny:",
        fr: "Les historiens et les sceptiques ont proposé diverses explications pour ces faits. Chaque théorie alternative échoue à l'examen :",
        es: "Los historiadores y escépticos han propuesto varias explicaciones para estos hechos. Cada teoría alternativa falla bajo escrutinio:",
        de: "Historiker und Skeptiker haben verschiedene Erklärungen für diese Fakten vorgeschlagen. Jede alternative Theorie versagt bei genauerer Prüfung:",
      },

      hallucinationTitle: {
        en: "A. Hallucination Hypothesis",
        fr: "A. Hypothèse de l'Hallucination",
        es: "A. Hipótesis de la Alucinación",
        de: "A. Halluzinations-Hypothese",
      },
      hallucinationIntro: {
        en: "This theory fails because:",
        fr: "Cette théorie échoue parce que :",
        es: "Esta teoría falla porque:",
        de: "Diese Theorie scheitert, weil:",
      },
      hallucinationPoint1: {
        en: "Hallucinations are private experiences, yet the resurrection appearances were group events (e.g., 1 Corinthians 15:6).",
        fr: "Les hallucinations sont des expériences privées, pourtant les apparitions de la résurrection étaient des événements de groupe (par ex., 1 Corinthiens 15:6).",
        es: "Las alucinaciones son experiencias privadas, sin embargo, las apariciones de la resurrección fueron eventos grupales (p. ej., 1 Corintios 15:6).",
        de: "Halluzinationen sind private Erfahrungen, dennoch waren die Auferstehungserscheinungen Gruppenereignisse (z. B. 1 Korinther 15:6).",
      },
      hallucinationPoint2: {
        en: "It cannot explain the empty tomb.",
        fr: "Elle ne peut pas expliquer le tombeau vide.",
        es: "No puede explicar la tumba vacía.",
        de: "Sie kann das leere Grab nicht erklären.",
      },

      wrongTombTitle: {
        en: "B. Wrong Tomb Hypothesis",
        fr: "B. Hypothèse du Mauvais Tombeau",
        es: "B. Hipótesis de la Tumba Equivocada",
        de: "B. Falsch-Grab-Hypothese",
      },
      wrongTombIntro: {
        en: "This fails because:",
        fr: "Cela échoue parce que :",
        es: "Esto falla porque:",
        de: "Dies scheitert, weil:",
      },
      wrongTombPoint1: {
        en: "The tomb belonged to Joseph of Arimathea, a member of the Sanhedrin. It was a known, public location.",
        fr: "Le tombeau appartenait à Joseph d'Arimathie, membre du Sanhédrin. C'était un lieu connu et public.",
        es: "La tumba pertenecía a José de Arimatea, miembro del Sanedrín. Era una ubicación conocida y pública.",
        de: "Das Grab gehörte Josef von Arimathäa, einem Mitglied des Sanhedrins. Es war ein bekannter, öffentlicher Ort.",
      },
      wrongTombPoint2: {
        en: "The Jewish authorities could have produced the body to stop the Christian movement.",
        fr: "Les autorités juives auraient pu produire le corps pour arrêter le mouvement chrétien.",
        es: "Las autoridades judías podrían haber producido el cuerpo para detener el movimiento cristiano.",
        de: "Die jüdischen Behörden hätten den Leichnam vorlegen können, um die christliche Bewegung zu stoppen.",
      },

      stolenBodyTitle: {
        en: "C. Stolen Body Theory",
        fr: "C. Théorie du Corps Volé",
        es: "C. Teoría del Cuerpo Robado",
        de: "C. Gestohlener-Körper-Theorie",
      },
      stolenBodyIntro: {
        en: "This fails because:",
        fr: "Cela échoue parce que :",
        es: "Esto falla porque:",
        de: "Dies scheitert, weil:",
      },
      stolenBodyPoint1: {
        en: "The disciples were not expecting a resurrection and had no motive to lie and face martyrdom.",
        fr: "Les disciples ne s'attendaient pas à une résurrection et n'avaient aucun motif de mentir et d'affronter le martyre.",
        es: "Los discípulos no esperaban una resurrección y no tenían motivo para mentir y enfrentar el martirio.",
        de: "Die Jünger erwarteten keine Auferstehung und hatten kein Motiv zu lügen und das Martyrium zu erleiden.",
      },
      stolenBodyPoint2: {
        en: "It cannot explain the post-mortem appearances and the transformation of the disciples.",
        fr: "Elle ne peut pas expliquer les apparitions post-mortem et la transformation des disciples.",
        es: "No puede explicar las apariciones post-mortem y la transformación de los discípulos.",
        de: "Sie kann die Erscheinungen nach dem Tod und die Verwandlung der Jünger nicht erklären.",
      },

      resurrectionTitle: {
        en: "D. Resurrection Hypothesis",
        fr: "D. Hypothèse de la Résurrection",
        es: "D. Hipótesis de la Resurrección",
        de: "D. Auferstehungs-Hypothese",
      },
      resurrectionIntro: {
        en: "This best fits all the facts:",
        fr: "Cela correspond le mieux à tous les faits :",
        es: "Esto se ajusta mejor a todos los hechos:",
        de: "Dies passt am besten zu allen Fakten:",
      },
      resurrectionPoint1: {
        en: "Explains the empty tomb, appearances, conversions, and explosion of early Christianity.",
        fr: "Explique le tombeau vide, les apparitions, les conversions et l'explosion du christianisme primitif.",
        es: "Explica la tumba vacía, las apariciones, las conversiones y la explosión del cristianismo primitivo.",
        de: "Erklärt das leere Grab, die Erscheinungen, Bekehrungen und die Explosion des frühen Christentums.",
      },
      resurrectionPoint2: {
        en: "It is coherent, explanatorily powerful, and less ad hoc than other hypotheses.",
        fr: "Elle est cohérente, explicativement puissante et moins ad hoc que d'autres hypothèses.",
        es: "Es coherente, explicativamente poderosa y menos ad hoc que otras hipótesis.",
        de: "Sie ist kohärent, erklärungskräftig und weniger ad hoc als andere Hypothesen.",
      },
    },

    // Section 6: Rationality
    rationality: {
      heading: {
        en: "6. Rationality of the Resurrection",
        fr: "6. Rationalité de la Résurrection",
        es: "6. Racionalidad de la Resurrección",
        de: "6. Rationalität der Auferstehung",
      },
      intro: {
        en: "The resurrection of Jesus is not merely a religious belief—it is the best historical explanation of a collection of widely agreed-upon facts.",
        fr: "La résurrection de Jésus n'est pas simplement une croyance religieuse — c'est la meilleure explication historique d'un ensemble de faits largement reconnus.",
        es: "La resurrección de Jesús no es meramente una creencia religiosa—es la mejor explicación histórica de un conjunto de hechos ampliamente acordados.",
        de: "Die Auferstehung Jesu ist nicht nur ein religiöser Glaube — sie ist die beste historische Erklärung für eine Sammlung weithin anerkannter Fakten.",
      },
      hypothesisLabel: {
        en: "The hypothesis is:",
        fr: "L'hypothèse est :",
        es: "La hipótesis es:",
        de: "Die Hypothese ist:",
      },
      plausible: {
        en: "Plausible:",
        fr: "Plausible :",
        es: "Plausible:",
        de: "Plausibel:",
      },
      plausibleDetail: {
        en: "Fits the historical and cultural context of first-century Judea.",
        fr: "Correspond au contexte historique et culturel de la Judée du premier siècle.",
        es: "Se ajusta al contexto histórico y cultural de Judea del primer siglo.",
        de: "Passt zum historischen und kulturellen Kontext des ersten Jahrhunderts in Judäa.",
      },
      powerful: {
        en: "Powerful:",
        fr: "Puissante :",
        es: "Poderosa:",
        de: "Kraftvoll:",
      },
      powerfulDetail: {
        en: "Explains all the known data.",
        fr: "Explique toutes les données connues.",
        es: "Explica todos los datos conocidos.",
        de: "Erklärt alle bekannten Daten.",
      },
      consistent: {
        en: "Consistent:",
        fr: "Cohérente :",
        es: "Consistente:",
        de: "Konsistent:",
      },
      consistentDetail: {
        en: "Aligns with early Christian writings and external testimony.",
        fr: "S'aligne avec les écrits chrétiens primitifs et les témoignages externes.",
        es: "Se alinea con los escritos cristianos tempranos y el testimonio externo.",
        de: "Stimmt mit frühen christlichen Schriften und externen Zeugnissen überein.",
      },
      craigQuote: {
        en: "Belief in the resurrection is not a leap into the dark, but a step into the light.",
        fr: "La croyance en la résurrection n'est pas un saut dans l'obscurité, mais un pas vers la lumière.",
        es: "La creencia en la resurrección no es un salto en la oscuridad, sino un paso hacia la luz.",
        de: "Der Glaube an die Auferstehung ist kein Sprung ins Dunkle, sondern ein Schritt ins Licht.",
      },
    },

    // Conclusion
    conclusion: {
      heading: {
        en: "7. Faith Rooted in History",
        fr: "7. Foi Enracinée dans l'Histoire",
        es: "7. Fe Arraigada en la Historia",
        de: "7. Glaube Verwurzelt in der Geschichte",
      },
      para1: {
        en: "Faith in Christ is not blind. It is a reasonable trust based on strong historical evidence. As early as the Book of Acts, Christians were defending their faith using historical arguments (see Acts 26). Christianity invites examination—and it passes the test.",
        fr: "La foi en Christ n'est pas aveugle. C'est une confiance raisonnable basée sur de solides preuves historiques. Dès le Livre des Actes, les chrétiens défendaient leur foi en utilisant des arguments historiques (voir Actes 26). Le christianisme invite à l'examen — et il passe le test.",
        es: "La fe en Cristo no es ciega. Es una confianza razonable basada en sólidas evidencias históricas. Ya en el Libro de los Hechos, los cristianos defendían su fe usando argumentos históricos (véase Hechos 26). El cristianismo invita al examen—y pasa la prueba.",
        de: "Der Glaube an Christus ist nicht blind. Es ist ein vernünftiges Vertrauen, das auf starken historischen Beweisen basiert. Bereits im Buch der Apostelgeschichte verteidigten Christen ihren Glauben mit historischen Argumenten (siehe Apostelgeschichte 26). Das Christentum lädt zur Prüfung ein — und es besteht den Test.",
      },
      para2: {
        en: "When we align our worldview with the historical reality of the life, death, and resurrection of Jesus, we are not merely embracing a religion. We are aligning ourselves with the truth about history itself.",
        fr: "Lorsque nous alignons notre vision du monde avec la réalité historique de la vie, de la mort et de la résurrection de Jésus, nous n'embrassons pas simplement une religion. Nous nous alignons avec la vérité sur l'histoire elle-même.",
        es: "Cuando alineamos nuestra cosmovisión con la realidad histórica de la vida, muerte y resurrección de Jesús, no estamos meramente abrazando una religión. Nos estamos alineando con la verdad sobre la historia misma.",
        de: "Wenn wir unsere Weltanschauung mit der historischen Realität von Leben, Tod und Auferstehung Jesu in Einklang bringen, nehmen wir nicht nur eine Religion an. Wir richten uns nach der Wahrheit über die Geschichte selbst.",
      },
    },

    // Bridge to Next Topic
    bridge: {
      heading: {
        en: "Moving Forward",
        fr: "Aller de l'Avant",
        es: "Avanzando",
        de: "Weitergehen",
      },
      para1: {
        en: "If Jesus rose from the dead, His claims about Himself are validated. He is who He said He was. But this raises a new question: Which Christian tradition most faithfully preserves His teachings?",
        fr: "Si Jésus est ressuscité des morts, Ses affirmations sur Lui-même sont validées. Il est qui Il a dit être. Mais cela soulève une nouvelle question : Quelle tradition chrétienne préserve le plus fidèlement Ses enseignements ?",
        es: "Si Jesús resucitó de entre los muertos, Sus afirmaciones sobre Sí mismo están validadas. Él es quien dijo ser. Pero esto plantea una nueva pregunta: ¿Qué tradición cristiana preserva más fielmente Sus enseñanzas?",
        de: "Wenn Jesus von den Toten auferstanden ist, werden Seine Behauptungen über Sich selbst bestätigt. Er ist, wer Er sagte zu sein. Aber dies wirft eine neue Frage auf: Welche christliche Tradition bewahrt Seine Lehren am treuesten?",
      },
      para2: {
        en: "With God's existence established and Christ's resurrection confirmed, we can now ask: Why be Catholic specifically, rather than simply \"Christian\"? Let's explore what makes Catholicism unique.",
        fr: "Avec l'existence de Dieu établie et la résurrection du Christ confirmée, nous pouvons maintenant demander : Pourquoi être catholique spécifiquement, plutôt que simplement « chrétien » ? Explorons ce qui rend le catholicisme unique.",
        es: 'Con la existencia de Dios establecida y la resurrección de Cristo confirmada, ahora podemos preguntar: ¿Por qué ser católico específicamente, en lugar de simplemente "cristiano"? Exploremos qué hace único al catolicismo.',
        de: 'Mit der festgestellten Existenz Gottes und der bestätigten Auferstehung Christi können wir nun fragen: Warum speziell katholisch sein, anstatt einfach „christlich"? Lassen Sie uns erkunden, was den Katholizismus einzigartig macht.',
      },
    },
  },

  // Why Be Catholic Topic
  whyBeCatholic: {
    title: {
      en: "Why Be Catholic?",
      fr: "Pourquoi Être Catholique ?",
      es: "¿Por Qué Ser Católico?",
      de: "Warum Katholisch Sein?",
    },
    subtitle: {
      en: "And not just Christian?",
      fr: "Et pas simplement chrétien ?",
      es: "¿Y no solo cristiano?",
      de: "Und nicht nur christlich?",
    },
    quote: {
      en: "Wherever the bishop appears, there let the people be; as wherever Jesus Christ is, there is the Catholic Church.",
      fr: "Où paraît l'évêque, là que soit le peuple ; comme là où est Jésus-Christ, là est l'Église catholique.",
      es: "Donde aparece el obispo, allí esté el pueblo; así como donde está Jesucristo, allí está la Iglesia Católica.",
      de: "Wo der Bischof erscheint, da soll das Volk sein; wie dort, wo Jesus Christus ist, dort ist die katholische Kirche.",
    },
    quoteSource: {
      en: "St. Ignatius of Antioch, c. 110 AD",
      fr: "Saint Ignace d'Antioche, c. 110 ap. J.-C.",
      es: "San Ignacio de Antioquía, c. 110 d.C.",
      de: "Hl. Ignatius von Antiochien, ca. 110 n. Chr.",
    },

    // Introduction
    introPara1: {
      en: 'Why be Catholic and not just "Christian"? It\'s a fair question—one that arises from both genuine curiosity and theological challenge. For many, Catholicism appears as just one denomination among many. But Catholics claim something radically different: that Catholicism is not a denomination, but the Church founded by Jesus Christ, in full continuity with the apostles and the earliest Christians.',
      fr: "Pourquoi être catholique et pas simplement « chrétien » ? C'est une question légitime — qui naît à la fois d'une curiosité authentique et d'un défi théologique. Pour beaucoup, le catholicisme apparaît comme une simple dénomination parmi d'autres. Mais les catholiques revendiquent quelque chose de radicalement différent : que le catholicisme n'est pas une dénomination, mais l'Église fondée par Jésus-Christ, en pleine continuité avec les apôtres et les premiers chrétiens.",
      es: '¿Por qué ser católico y no solo "cristiano"? Es una pregunta justa—una que surge tanto de la curiosidad genuina como del desafío teológico. Para muchos, el catolicismo parece ser solo una denominación entre muchas. Pero los católicos reclaman algo radicalmente diferente: que el catolicismo no es una denominación, sino la Iglesia fundada por Jesucristo, en plena continuidad con los apóstoles y los primeros cristianos.',
      de: 'Warum katholisch sein und nicht nur „christlich"? Das ist eine berechtigte Frage — eine, die sowohl aus echter Neugier als auch aus theologischer Herausforderung entsteht. Für viele erscheint der Katholizismus als nur eine Konfession unter vielen. Aber Katholiken behaupten etwas radikal Anderes: dass der Katholizismus keine Konfession ist, sondern die von Jesus Christus gegründete Kirche, in voller Kontinuität mit den Aposteln und den frühesten Christen.',
    },
    introPara2: {
      en: "This exploration examines the biblical, historical, rational, and spiritual case for Catholicism—not as a break from Christianity, but as its fullness.",
      fr: "Cette exploration examine le cas biblique, historique, rationnel et spirituel du catholicisme — non pas comme une rupture avec le christianisme, mais comme sa plénitude.",
      es: "Esta exploración examina el caso bíblico, histórico, racional y espiritual del catolicismo—no como una ruptura del cristianismo, sino como su plenitud.",
      de: "Diese Untersuchung prüft den biblischen, historischen, rationalen und spirituellen Fall für den Katholizismus — nicht als Bruch mit dem Christentum, sondern als dessen Fülle.",
    },

    // Key Points
    keyPoints: {
      notDenomination: {
        en: "Not a Denomination",
        fr: "Pas une Dénomination",
        es: "No una Denominación",
        de: "Keine Konfession",
      },
      notDenominationDesc: {
        en: "The Church founded by Christ, not a branch that split off",
        fr: "L'Église fondée par le Christ, pas une branche qui s'est séparée",
        es: "La Iglesia fundada por Cristo, no una rama que se separó",
        de: "Die von Christus gegründete Kirche, kein Zweig, der sich abgespalten hat",
      },
      fullnessFaith: {
        en: "Fullness of Faith",
        fr: "Plénitude de la Foi",
        es: "Plenitud de la Fe",
        de: "Fülle des Glaubens",
      },
      fullnessFaithDesc: {
        en: "Scripture, Tradition, and Magisterium working together",
        fr: "Écriture, Tradition et Magistère travaillant ensemble",
        es: "Escritura, Tradición y Magisterio trabajando juntos",
        de: "Schrift, Tradition und Lehramt wirken zusammen",
      },
      apostolicSuccession: {
        en: "Apostolic Succession",
        fr: "Succession Apostolique",
        es: "Sucesión Apostólica",
        de: "Apostolische Sukzession",
      },
      apostolicSuccessionDesc: {
        en: "Unbroken line from the apostles to today's bishops",
        fr: "Lignée ininterrompue des apôtres aux évêques d'aujourd'hui",
        es: "Línea ininterrumpida desde los apóstoles hasta los obispos de hoy",
        de: "Ununterbrochene Linie von den Aposteln zu den heutigen Bischöfen",
      },
      historicalContinuity: {
        en: "Historical Continuity",
        fr: "Continuité Historique",
        es: "Continuidad Histórica",
        de: "Historische Kontinuität",
      },
      historicalContinuityDesc: {
        en: "2,000 years of consistent teaching and practice",
        fr: "2 000 ans d'enseignement et de pratique cohérents",
        es: "2,000 años de enseñanza y práctica consistentes",
        de: "2.000 Jahre konsistenter Lehre und Praxis",
      },
      faithReason: {
        en: "Faith & Reason",
        fr: "Foi et Raison",
        es: "Fe y Razón",
        de: "Glaube & Vernunft",
      },
      faithReasonDesc: {
        en: "Logic, philosophy, and theology in harmony",
        fr: "Logique, philosophie et théologie en harmonie",
        es: "Lógica, filosofía y teología en armonía",
        de: "Logik, Philosophie und Theologie in Harmonie",
      },
      sacramentalLife: {
        en: "Sacramental Life",
        fr: "Vie Sacramentelle",
        es: "Vida Sacramental",
        de: "Sakramentales Leben",
      },
      sacramentalLifeDesc: {
        en: "Grace transmitted through visible signs instituted by Christ",
        fr: "Grâce transmise par des signes visibles institués par le Christ",
        es: "Gracia transmitida a través de signos visibles instituidos por Cristo",
        de: "Gnade, übertragen durch von Christus eingesetzte sichtbare Zeichen",
      },
    },

    // Section 1: False Dilemma
    section1: {
      heading: {
        en: '1. A False Dilemma: "Catholic or Christian?"',
        fr: "1. Un Faux Dilemme : « Catholique ou Chrétien ? »",
        es: '1. Un Falso Dilema: "¿Católico o Cristiano?"',
        de: '1. Ein Falsches Dilemma: „Katholisch oder Christlich?"',
      },
      para1: {
        en: 'The question "Why be Catholic instead of Christian?" presumes a category error. Catholicism isn\'t an alternative to Christianity—it is Christianity, historically and theologically. Saying "I\'m Christian, not Catholic" is like saying, "I\'m a fruit, not an apple," when in reality, Catholicism claims to be the whole tree—not a branch.',
        fr: "La question « Pourquoi être catholique au lieu de chrétien ? » présume une erreur de catégorie. Le catholicisme n'est pas une alternative au christianisme — il est le christianisme, historiquement et théologiquement. Dire « Je suis chrétien, pas catholique » revient à dire « Je suis un fruit, pas une pomme », alors qu'en réalité, le catholicisme prétend être l'arbre entier — pas une branche.",
        es: 'La pregunta "¿Por qué ser católico en lugar de cristiano?" presume un error de categoría. El catolicismo no es una alternativa al cristianismo—es el cristianismo, histórica y teológicamente. Decir "Soy cristiano, no católico" es como decir "Soy una fruta, no una manzana", cuando en realidad, el catolicismo afirma ser el árbol entero—no una rama.',
        de: 'Die Frage „Warum katholisch statt christlich sein?" setzt einen Kategoriefehler voraus. Der Katholizismus ist keine Alternative zum Christentum — er ist das Christentum, historisch und theologisch. „Ich bin christlich, nicht katholisch" zu sagen, ist wie zu sagen: „Ich bin eine Frucht, keine Apfel", während der Katholizismus in Wirklichkeit behauptet, der ganze Baum zu sein — kein Zweig.',
      },
      holdsworthQuote: {
        en: "Catholicism is the whole of which all the others, to whatever degree they are true, portray some aspect.",
        fr: "Le catholicisme est le tout dont tous les autres, dans la mesure où ils sont vrais, représentent un aspect.",
        es: "El catolicismo es el todo del cual todos los demás, en cualquier grado que sean verdaderos, retratan algún aspecto.",
        de: "Der Katholizismus ist das Ganze, von dem alle anderen, in welchem Grad sie auch wahr sind, einen Aspekt darstellen.",
      },
    },

    // Section 2: Fullness of Faith
    section2: {
      heading: {
        en: "2. Catholicism Claims to Be the Fullness of the Faith",
        fr: "2. Le Catholicisme Prétend Être la Plénitude de la Foi",
        es: "2. El Catolicismo Afirma Ser la Plenitud de la Fe",
        de: "2. Der Katholizismus Beansprucht, die Fülle des Glaubens zu Sein",
      },
      para1: {
        en: "Catholics believe that Jesus didn't simply leave us a book or a general spiritual community. He founded a visible, unified, hierarchical Church—with authority passed through the apostles to their successors (bishops). This Church is:",
        fr: "Les catholiques croient que Jésus ne nous a pas simplement laissé un livre ou une communauté spirituelle générale. Il a fondé une Église visible, unifiée et hiérarchique — avec une autorité transmise par les apôtres à leurs successeurs (évêques). Cette Église est :",
        es: "Los católicos creen que Jesús no simplemente nos dejó un libro o una comunidad espiritual general. Fundó una Iglesia visible, unificada y jerárquica—con autoridad transmitida a través de los apóstoles a sus sucesores (obispos). Esta Iglesia es:",
        de: "Katholiken glauben, dass Jesus uns nicht einfach ein Buch oder eine allgemeine spirituelle Gemeinschaft hinterlassen hat. Er gründete eine sichtbare, vereinte, hierarchische Kirche — mit Autorität, die durch die Apostel an ihre Nachfolger (Bischöfe) weitergegeben wurde. Diese Kirche ist:",
      },
      one: {
        en: "One",
        fr: "Une",
        es: "Una",
        de: "Eine",
      },
      holy: {
        en: "Holy",
        fr: "Sainte",
        es: "Santa",
        de: "Heilige",
      },
      holyDesc: {
        en: "(set apart and sanctified)",
        fr: "(mise à part et sanctifiée)",
        es: "(apartada y santificada)",
        de: "(abgesondert und geheiligt)",
      },
      catholic: {
        en: "Catholic",
        fr: "Catholique",
        es: "Católica",
        de: "Katholische",
      },
      catholicDesc: {
        en: "(universal and whole)",
        fr: "(universelle et complète)",
        es: "(universal y completa)",
        de: "(universal und ganz)",
      },
      apostolic: {
        en: "Apostolic",
        fr: "Apostolique",
        es: "Apostólica",
        de: "Apostolische",
      },
      apostolicDesc: {
        en: "(rooted in apostolic succession)",
        fr: "(enracinée dans la succession apostolique)",
        es: "(arraigada en la sucesión apostólica)",
        de: "(verwurzelt in apostolischer Sukzession)",
      },
      para2: {
        en: "This is not self-referential circular logic—it's a claim tested by Scripture, history, and logic.",
        fr: "Ce n'est pas une logique circulaire autoréférentielle — c'est une affirmation testée par l'Écriture, l'histoire et la logique.",
        es: "Esto no es una lógica circular autorreferencial—es una afirmación probada por la Escritura, la historia y la lógica.",
        de: "Dies ist keine selbstreferentielle Zirkellogik — es ist eine Behauptung, die durch die Schrift, Geschichte und Logik geprüft wird.",
      },
    },

    // Section 3: Scripture Alone
    section3: {
      heading: {
        en: "3. Scripture Alone? A Flawed Foundation",
        fr: "3. L'Écriture Seule ? Un Fondement Défectueux",
        es: "3. ¿Solo la Escritura? Un Fundamento Defectuoso",
        de: "3. Allein die Schrift? Ein Fehlerhaftes Fundament",
      },
      para1: {
        en: "Many objections to Catholicism come from the assumption of Sola Scriptura—that the Bible alone is the Christian's only authority. But:",
        fr: "De nombreuses objections au catholicisme proviennent de la supposition de la Sola Scriptura — que la Bible seule est la seule autorité du chrétien. Mais :",
        es: "Muchas objeciones al catolicismo provienen de la suposición de Sola Scriptura—que solo la Biblia es la única autoridad del cristiano. Pero:",
        de: "Viele Einwände gegen den Katholizismus stammen von der Annahme der Sola Scriptura — dass die Bibel allein die einzige Autorität des Christen ist. Aber:",
      },
      point1: {
        en: "The Bible never teaches Sola Scriptura.",
        fr: "La Bible n'enseigne jamais la Sola Scriptura.",
        es: "La Biblia nunca enseña Sola Scriptura.",
        de: "Die Bibel lehrt nie Sola Scriptura.",
      },
      point2: {
        en: "The Bible doesn't define its own canon—that list came from Church councils (Rome 382, Hippo 393, Carthage 397).",
        fr: "La Bible ne définit pas son propre canon — cette liste provient des conciles de l'Église (Rome 382, Hippone 393, Carthage 397).",
        es: "La Biblia no define su propio canon—esa lista vino de los concilios de la Iglesia (Roma 382, Hipona 393, Cartago 397).",
        de: "Die Bibel definiert ihren eigenen Kanon nicht — diese Liste stammte von Kirchenkonzilen (Rom 382, Hippo 393, Karthago 397).",
      },
      point3: {
        en: "Scripture commands oral Tradition:",
        fr: "L'Écriture commande la Tradition orale :",
        es: "La Escritura ordena la Tradición oral:",
        de: "Die Schrift befiehlt mündliche Tradition:",
      },
      thessaloniansQuote: {
        en: "Hold to the traditions you were taught by us, either by word of mouth or by letter.",
        fr: "Tenez fermement les traditions que vous avez apprises de nous, soit par la parole, soit par notre lettre.",
        es: "Mantengan las tradiciones que les fueron enseñadas por nosotros, ya sea de palabra o por carta.",
        de: "Haltet fest an den Überlieferungen, die ihr von uns gelernt habt, sei es durch Wort oder durch Brief.",
      },
      thessaloniansSource: {
        en: "2 Thessalonians 2:15",
        fr: "2 Thessaloniciens 2:15",
        es: "2 Tesalonicenses 2:15",
        de: "2 Thessalonicher 2:15",
      },
      para2: {
        en: "Without the Catholic Church, you wouldn't have the Bible as you know it today.",
        fr: "Sans l'Église catholique, vous n'auriez pas la Bible telle que vous la connaissez aujourd'hui.",
        es: "Sin la Iglesia Católica, no tendrías la Biblia como la conoces hoy.",
        de: "Ohne die katholische Kirche hätten Sie die Bibel nicht so, wie Sie sie heute kennen.",
      },
      holdsworthQuote2: {
        en: "There's a middleman between Protestants and their 'highest authority'—the Catholic Church.",
        fr: "Il y a un intermédiaire entre les protestants et leur « autorité suprême » — l'Église catholique.",
        es: "Hay un intermediario entre los protestantes y su 'máxima autoridad'—la Iglesia Católica.",
        de: 'Es gibt einen Mittelsmann zwischen Protestanten und ihrer „höchsten Autorität" — die katholische Kirche.',
      },
    },

    // Section 4: Early Church
    section4: {
      heading: {
        en: "4. The Early Church Was Catholic",
        fr: "4. L'Église Primitive Était Catholique",
        es: "4. La Iglesia Primitiva Era Católica",
        de: "4. Die Frühe Kirche War Katholisch",
      },
      para1: {
        en: 'Before there was a "Bible," there was the Church. And from the first century onward, the Church was visibly Catholic:',
        fr: "Avant qu'il y ait une « Bible », il y avait l'Église. Et dès le premier siècle, l'Église était visiblement catholique :",
        es: 'Antes de que hubiera una "Biblia", estaba la Iglesia. Y desde el primer siglo en adelante, la Iglesia era visiblemente católica:',
        de: 'Bevor es eine „Bibel" gab, gab es die Kirche. Und vom ersten Jahrhundert an war die Kirche sichtbar katholisch:',
      },
      point1: {
        en: "It had bishops (e.g., Ignatius of Antioch, 110 AD)",
        fr: "Elle avait des évêques (par ex., Ignace d'Antioche, 110 ap. J.-C.)",
        es: "Tenía obispos (p. ej., Ignacio de Antioquía, 110 d.C.)",
        de: "Sie hatte Bischöfe (z. B. Ignatius von Antiochien, 110 n. Chr.)",
      },
      point2: {
        en: "It had sacraments: the Eucharist, baptism, confession",
        fr: "Elle avait des sacrements : l'Eucharistie, le baptême, la confession",
        es: "Tenía sacramentos: la Eucaristía, el bautismo, la confesión",
        de: "Sie hatte Sakramente: die Eucharistie, Taufe, Beichte",
      },
      point3: {
        en: "It believed in the Real Presence of Jesus in the Eucharist",
        fr: "Elle croyait en la Présence Réelle de Jésus dans l'Eucharistie",
        es: "Creía en la Presencia Real de Jesús en la Eucaristía",
        de: "Sie glaubte an die wirkliche Gegenwart Jesu in der Eucharistie",
      },
      point4: {
        en: "It honored Mary, prayed for the dead, and venerated saints",
        fr: "Elle honorait Marie, priait pour les morts et vénérait les saints",
        es: "Honraba a María, oraba por los muertos y veneraba a los santos",
        de: "Sie ehrte Maria, betete für die Toten und verehrte Heilige",
      },
      point5: {
        en: "It referred to itself as the Catholic Church before the New Testament was finalized",
        fr: "Elle se désignait comme l'Église catholique avant que le Nouveau Testament ne soit finalisé",
        es: "Se refería a sí misma como la Iglesia Católica antes de que se finalizara el Nuevo Testamento",
        de: "Sie bezeichnete sich selbst als katholische Kirche, bevor das Neue Testament fertiggestellt wurde",
      },
      ignatiusQuote: {
        en: "Wherever the bishop appears, there is the Catholic Church.",
        fr: "Où paraît l'évêque, là est l'Église catholique.",
        es: "Donde aparece el obispo, allí está la Iglesia Católica.",
        de: "Wo der Bischof erscheint, dort ist die katholische Kirche.",
      },
      ignatiusSource: {
        en: "Ignatius of Antioch, disciple of John the Apostle",
        fr: "Ignace d'Antioche, disciple de Jean l'Apôtre",
        es: "Ignacio de Antioquía, discípulo de Juan el Apóstol",
        de: "Ignatius von Antiochien, Jünger des Apostels Johannes",
      },
    },

    // Section 5: Private Judgment
    section5: {
      heading: {
        en: "5. The Problem of Private Judgment",
        fr: "5. Le Problème du Jugement Privé",
        es: "5. El Problema del Juicio Privado",
        de: "5. Das Problem des Privaturteils",
      },
      para1: {
        en: "If the Bible alone is your authority, who interprets it? Every individual? That's how we get thousands of denominations, all claiming biblical authority and contradicting each other.",
        fr: "Si la Bible seule est votre autorité, qui l'interprète ? Chaque individu ? C'est ainsi que nous obtenons des milliers de dénominations, toutes revendiquant l'autorité biblique et se contredisant mutuellement.",
        es: "Si solo la Biblia es tu autoridad, ¿quién la interpreta? ¿Cada individuo? Así es como obtenemos miles de denominaciones, todas reclamando autoridad bíblica y contradiciéndose entre sí.",
        de: "Wenn die Bibel allein Ihre Autorität ist, wer interpretiert sie? Jeder Einzelne? So bekommen wir Tausende von Konfessionen, die alle biblische Autorität beanspruchen und sich gegenseitig widersprechen.",
      },
      para2: {
        en: 'But Jesus never left us with "each man his own Bible." He established:',
        fr: "Mais Jésus ne nous a jamais laissés avec « chaque homme sa propre Bible ». Il a établi :",
        es: 'Pero Jesús nunca nos dejó con "cada hombre su propia Biblia". Él estableció:',
        de: 'Aber Jesus hat uns nie mit „jeder Mann seine eigene Bibel" zurückgelassen. Er gründete:',
      },
      timothyQuote: {
        en: "A Church that is the pillar and bulwark of the truth.",
        fr: "Une Église qui est la colonne et le soutien de la vérité.",
        es: "Una Iglesia que es columna y baluarte de la verdad.",
        de: "Eine Kirche, die die Säule und Stütze der Wahrheit ist.",
      },
      timothySource: {
        en: "1 Timothy 3:15",
        fr: "1 Timothée 3:15",
        es: "1 Timoteo 3:15",
        de: "1 Timotheus 3:15",
      },
      para3: {
        en: "The Catholic Church claims to have this authority through:",
        fr: "L'Église catholique prétend avoir cette autorité par :",
        es: "La Iglesia Católica afirma tener esta autoridad a través de:",
        de: "Die katholische Kirche beansprucht diese Autorität durch:",
      },
      magisterium: {
        en: "The Magisterium (teaching office)",
        fr: "Le Magistère (office d'enseignement)",
        es: "El Magisterio (oficio de enseñanza)",
        de: "Das Lehramt (Lehramt)",
      },
      tradition: {
        en: "Sacred Tradition (oral teaching of the apostles)",
        fr: "La Sainte Tradition (enseignement oral des apôtres)",
        es: "Sagrada Tradición (enseñanza oral de los apóstoles)",
        de: "Heilige Tradition (mündliche Lehre der Apostel)",
      },
      scripture: {
        en: "Scripture (written apostolic witness)",
        fr: "L'Écriture (témoignage apostolique écrit)",
        es: "Escritura (testimonio apostólico escrito)",
        de: "Schrift (geschriebenes apostolisches Zeugnis)",
      },
      para4: {
        en: "These are not three separate authorities—they are one united source: the deposit of faith.",
        fr: "Ce ne sont pas trois autorités séparées — elles sont une source unie : le dépôt de la foi.",
        es: "Estas no son tres autoridades separadas—son una fuente unida: el depósito de la fe.",
        de: "Dies sind nicht drei separate Autoritäten — sie sind eine vereinte Quelle: das Glaubensgut.",
      },
    },

    // Section 6: Apostolic Succession
    section6: {
      heading: {
        en: "6. Apostolic Succession: A Test of Authenticity",
        fr: "6. Succession Apostolique : Un Test d'Authenticité",
        es: "6. Sucesión Apostólica: Una Prueba de Autenticidad",
        de: "6. Apostolische Sukzession: Ein Test der Authentizität",
      },
      para1: {
        en: "Jesus gave the apostles binding authority:",
        fr: "Jésus a donné aux apôtres une autorité contraignante :",
        es: "Jesús dio a los apóstoles autoridad vinculante:",
        de: "Jesus gab den Aposteln bindende Autorität:",
      },
      matthewQuote: {
        en: "Whatever you bind on earth shall be bound in heaven.",
        fr: "Tout ce que vous lierez sur la terre sera lié dans le ciel.",
        es: "Todo lo que aten en la tierra quedará atado en el cielo.",
        de: "Was ihr auf Erden binden werdet, wird auch im Himmel gebunden sein.",
      },
      matthewSource: {
        en: "Matthew 16:19, 18:18",
        fr: "Matthieu 16:19, 18:18",
        es: "Mateo 16:19, 18:18",
        de: "Matthäus 16:19, 18:18",
      },
      johnQuote: {
        en: "If they forgive the sins of any, they are forgiven.",
        fr: "Si vous remettez les péchés de quelqu'un, ils lui seront remis.",
        es: "Si perdonan los pecados de alguien, les son perdonados.",
        de: "Wenn ihr jemandem die Sünden vergebt, dem sind sie vergeben.",
      },
      johnSource: {
        en: "John 20:23",
        fr: "Jean 20:23",
        es: "Juan 20:23",
        de: "Johannes 20:23",
      },
      para2: {
        en: "Catholics believe this apostolic authority didn't die out—it was passed down through bishops, with Peter's successor in Rome (the Pope) having a unique role as the \"rock\" (Matthew 16:18).",
        fr: "Les catholiques croient que cette autorité apostolique ne s'est pas éteinte — elle a été transmise par les évêques, avec le successeur de Pierre à Rome (le Pape) ayant un rôle unique comme le « roc » (Matthieu 16:18).",
        es: 'Los católicos creen que esta autoridad apostólica no murió—fue transmitida a través de los obispos, con el sucesor de Pedro en Roma (el Papa) teniendo un papel único como la "roca" (Mateo 16:18).',
        de: "Katholiken glauben, dass diese apostolische Autorität nicht ausgestorben ist — sie wurde durch Bischöfe weitergegeben, wobei Petrus' Nachfolger in Rom (der Papst) eine einzigartige Rolle als der „Fels\" hat (Matthäus 16:18).",
      },
      para3: {
        en: "No Protestant denomination today can trace its ordination lineage to the apostles. The Catholic, Orthodox, and Eastern Churches can.",
        fr: "Aucune dénomination protestante aujourd'hui ne peut retracer sa lignée d'ordination jusqu'aux apôtres. Les Églises catholique, orthodoxe et orientales le peuvent.",
        es: "Ninguna denominación protestante hoy puede rastrear su linaje de ordenación hasta los apóstoles. Las Iglesias Católica, Ortodoxa y Oriental pueden.",
        de: "Keine protestantische Konfession kann heute ihre Ordinationslinie zu den Aposteln zurückverfolgen. Die katholischen, orthodoxen und östlichen Kirchen können es.",
      },
    },

    // Section 7: Church That Gave Bible
    section7: {
      heading: {
        en: "7. The Church That Gave You the Bible",
        fr: "7. L'Église Qui Vous a Donné la Bible",
        es: "7. La Iglesia Que Te Dio la Biblia",
        de: "7. Die Kirche, die Ihnen die Bibel Gab",
      },
      para1: {
        en: "The early Church fathers—those who preserved the faith, debated heresies, and formed the canon—were Catholic in their belief and practice. To name a few:",
        fr: "Les premiers Pères de l'Église — ceux qui ont préservé la foi, débattu des hérésies et formé le canon — étaient catholiques dans leur croyance et leur pratique. Pour n'en nommer que quelques-uns :",
        es: "Los primeros padres de la Iglesia—aquellos que preservaron la fe, debatieron herejías y formaron el canon—eran católicos en su creencia y práctica. Por nombrar algunos:",
        de: "Die frühen Kirchenväter — diejenigen, die den Glauben bewahrten, Häresien debattierten und den Kanon bildeten — waren katholisch in ihrem Glauben und ihrer Praxis. Um nur einige zu nennen:",
      },
      ignatius: {
        en: "Ignatius of Antioch (c. 110 AD): taught the Eucharist is the flesh of Christ and obedience to bishops is necessary",
        fr: "Ignace d'Antioche (c. 110 ap. J.-C.) : enseignait que l'Eucharistie est la chair du Christ et que l'obéissance aux évêques est nécessaire",
        es: "Ignacio de Antioquía (c. 110 d.C.): enseñó que la Eucaristía es la carne de Cristo y que la obediencia a los obispos es necesaria",
        de: "Ignatius von Antiochien (ca. 110 n. Chr.): lehrte, dass die Eucharistie das Fleisch Christi ist und Gehorsam gegenüber Bischöfen notwendig ist",
      },
      irenaeus: {
        en: "Irenaeus of Lyons (c. 180 AD): affirmed apostolic succession and the authority of Rome",
        fr: "Irénée de Lyon (c. 180 ap. J.-C.) : affirmait la succession apostolique et l'autorité de Rome",
        es: "Ireneo de Lyon (c. 180 d.C.): afirmó la sucesión apostólica y la autoridad de Roma",
        de: "Irenäus von Lyon (ca. 180 n. Chr.): bekräftigte die apostolische Sukzession und die Autorität Roms",
      },
      others: {
        en: "Cyril of Jerusalem, Augustine, Athanasius—all upheld Marian devotion, sacraments, prayers for the dead, and the necessity of the visible Church",
        fr: "Cyrille de Jérusalem, Augustin, Athanase — tous ont soutenu la dévotion mariale, les sacrements, les prières pour les morts et la nécessité de l'Église visible",
        es: "Cirilo de Jerusalén, Agustín, Atanasio—todos defendieron la devoción mariana, los sacramentos, las oraciones por los muertos y la necesidad de la Iglesia visible",
        de: "Kyrill von Jerusalem, Augustinus, Athanasius — alle unterstützten die Marienverehrung, Sakramente, Gebete für die Toten und die Notwendigkeit der sichtbaren Kirche",
      },
      para2: {
        en: "To ignore the Fathers is to sever yourself from the faith as lived by the earliest Christians.",
        fr: "Ignorer les Pères, c'est se couper de la foi telle que vécue par les premiers chrétiens.",
        es: "Ignorar a los Padres es separarse de la fe como la vivieron los primeros cristianos.",
        de: "Die Väter zu ignorieren bedeutet, sich vom Glauben, wie er von den frühesten Christen gelebt wurde, zu trennen.",
      },
    },

    // Section 8: Historical Continuity
    section8: {
      heading: {
        en: "8. Historical Continuity Matters",
        fr: "8. La Continuité Historique Compte",
        es: "8. La Continuidad Histórica Importa",
        de: "8. Historische Kontinuität Ist Wichtig",
      },
      para1: {
        en: "Jesus didn't write the Bible—He founded a Church. And that Church:",
        fr: "Jésus n'a pas écrit la Bible — Il a fondé une Église. Et cette Église :",
        es: "Jesús no escribió la Biblia—fundó una Iglesia. Y esa Iglesia:",
        de: "Jesus schrieb nicht die Bibel — Er gründete eine Kirche. Und diese Kirche:",
      },
      point1: {
        en: "Evangelized the Roman Empire",
        fr: "A évangélisé l'Empire romain",
        es: "Evangelizó el Imperio Romano",
        de: "Evangelisierte das Römische Reich",
      },
      point2: {
        en: "Preserved Scripture through the Dark Ages",
        fr: "A préservé l'Écriture à travers le Moyen Âge",
        es: "Preservó la Escritura a través de la Edad Oscura",
        de: "Bewahrte die Schrift durch das dunkle Zeitalter",
      },
      point3: {
        en: "Settled dogmas through councils (Trinity, Christ's divinity)",
        fr: "A établi des dogmes par les conciles (Trinité, divinité du Christ)",
        es: "Estableció dogmas a través de concilios (Trinidad, divinidad de Cristo)",
        de: "Legte Dogmen durch Konzile fest (Dreifaltigkeit, Göttlichkeit Christi)",
      },
      point4: {
        en: "Developed doctrine faithfully over centuries",
        fr: "A développé fidèlement la doctrine au fil des siècles",
        es: "Desarrolló la doctrina fielmente a lo largo de siglos",
        de: "Entwickelte die Lehre über Jahrhunderte hinweg treu",
      },
      point5: {
        en: "Continues today with over a billion members",
        fr: "Continue aujourd'hui avec plus d'un milliard de membres",
        es: "Continúa hoy con más de mil millones de miembros",
        de: "Besteht heute mit über einer Milliarde Mitgliedern weiter",
      },
      para2: {
        en: "Only one Church can claim that historical, theological, and sacramental continuity: the Catholic Church.",
        fr: "Une seule Église peut revendiquer cette continuité historique, théologique et sacramentelle : l'Église catholique.",
        es: "Solo una Iglesia puede reclamar esa continuidad histórica, teológica y sacramental: la Iglesia Católica.",
        de: "Nur eine Kirche kann diese historische, theologische und sakramentale Kontinuität beanspruchen: die katholische Kirche.",
      },
    },

    // Section 9: Holiness, Universality, Unity
    section9: {
      heading: {
        en: "9. Holiness, Universality, and Unity",
        fr: "9. Sainteté, Universalité et Unité",
        es: "9. Santidad, Universalidad y Unidad",
        de: "9. Heiligkeit, Universalität und Einheit",
      },
      para1: {
        en: "No human institution has lasted 2,000 years and produced more saints, theologians, hospitals, schools, and charitable institutions than the Catholic Church.",
        fr: "Aucune institution humaine n'a duré 2 000 ans et produit plus de saints, de théologiens, d'hôpitaux, d'écoles et d'institutions caritatives que l'Église catholique.",
        es: "Ninguna institución humana ha durado 2,000 años y producido más santos, teólogos, hospitales, escuelas e instituciones caritativas que la Iglesia Católica.",
        de: "Keine menschliche Institution hat 2.000 Jahre überdauert und mehr Heilige, Theologen, Krankenhäuser, Schulen und Wohltätigkeitseinrichtungen hervorgebracht als die katholische Kirche.",
      },
      para2: {
        en: "Despite the failures of individuals, the Church has remained a beacon of:",
        fr: "Malgré les échecs d'individus, l'Église est restée un phare de :",
        es: "A pesar de los fracasos de los individuos, la Iglesia ha permanecido como un faro de:",
        de: "Trotz der Fehler von Einzelpersonen ist die Kirche ein Leuchtturm geblieben von:",
      },
      doctrinalConsistency: {
        en: "Doctrinal consistency",
        fr: "Cohérence doctrinale",
        es: "Consistencia doctrinal",
        de: "Lehrmäßige Beständigkeit",
      },
      sacramentalGrace: {
        en: "Sacramental grace",
        fr: "Grâce sacramentelle",
        es: "Gracia sacramental",
        de: "Sakramentale Gnade",
      },
      moralTeaching: {
        en: "Moral teaching",
        fr: "Enseignement moral",
        es: "Enseñanza moral",
        de: "Moralische Lehre",
      },
      globalOutreach: {
        en: "Global outreach",
        fr: "Portée mondiale",
        es: "Alcance global",
        de: "Globale Reichweite",
      },
      para3: {
        en: "And it continues to be what Christ promised:",
        fr: "Et elle continue d'être ce que le Christ a promis :",
        es: "Y continúa siendo lo que Cristo prometió:",
        de: "Und sie bleibt weiterhin, was Christus versprach:",
      },
      matthewQuote: {
        en: "The gates of hell shall not prevail against it.",
        fr: "Les portes de l'enfer ne prévaudront pas contre elle.",
        es: "Las puertas del infierno no prevalecerán contra ella.",
        de: "Die Pforten der Hölle werden sie nicht überwältigen.",
      },
      matthewSource: {
        en: "Matthew 16:18",
        fr: "Matthieu 16:18",
        es: "Mateo 16:18",
        de: "Matthäus 16:18",
      },
    },

    // Section 10: Reason, Faith, Fulfillment
    section10: {
      heading: {
        en: "10. Reason, Faith, and Fulfillment",
        fr: "10. Raison, Foi et Accomplissement",
        es: "10. Razón, Fe y Cumplimiento",
        de: "10. Vernunft, Glaube und Erfüllung",
      },
      para1: {
        en: "Catholicism doesn't reject reason—it embraces it. From Aquinas to Augustine, Catholic thinkers have used logic, history, and philosophy to defend the faith.",
        fr: "Le catholicisme ne rejette pas la raison — il l'embrasse. D'Aquin à Augustin, les penseurs catholiques ont utilisé la logique, l'histoire et la philosophie pour défendre la foi.",
        es: "El catolicismo no rechaza la razón—la abraza. Desde Aquino hasta Agustín, los pensadores católicos han usado la lógica, la historia y la filosofía para defender la fe.",
        de: "Der Katholizismus lehnt die Vernunft nicht ab — er umarmt sie. Von Aquin bis Augustinus haben katholische Denker Logik, Geschichte und Philosophie verwendet, um den Glauben zu verteidigen.",
      },
      para2: {
        en: "Faith and reason go together in Catholicism:",
        fr: "Foi et raison vont de pair dans le catholicisme :",
        es: "Fe y razón van juntas en el catolicismo:",
        de: "Glaube und Vernunft gehen im Katholizismus zusammen:",
      },
      point1: {
        en: "The Church interprets the Word of God",
        fr: "L'Église interprète la Parole de Dieu",
        es: "La Iglesia interpreta la Palabra de Dios",
        de: "Die Kirche interpretiert das Wort Gottes",
      },
      point2: {
        en: "The Sacraments transmit His grace",
        fr: "Les Sacrements transmettent Sa grâce",
        es: "Los Sacramentos transmiten Su gracia",
        de: "Die Sakramente übertragen Seine Gnade",
      },
      point3: {
        en: "The Magisterium preserves unity and truth",
        fr: "Le Magistère préserve l'unité et la vérité",
        es: "El Magisterio preserva la unidad y la verdad",
        de: "Das Lehramt bewahrt Einheit und Wahrheit",
      },
      quote: {
        en: "Despite its sinners, the Catholic Church has never failed to be the Body of Christ, led by His Spirit, and charged with His mission.",
        fr: "Malgré ses pécheurs, l'Église catholique n'a jamais cessé d'être le Corps du Christ, dirigée par Son Esprit et chargée de Sa mission.",
        es: "A pesar de sus pecadores, la Iglesia Católica nunca ha dejado de ser el Cuerpo de Cristo, guiada por Su Espíritu y encargada de Su misión.",
        de: "Trotz ihrer Sünder hat die katholische Kirche nie aufgehört, der Leib Christi zu sein, geführt von Seinem Geist und beauftragt mit Seiner Mission.",
      },
    },

    // Conclusion
    conclusion: {
      heading: {
        en: "Conclusion: Why Be Catholic?",
        fr: "Conclusion : Pourquoi Être Catholique ?",
        es: "Conclusión: ¿Por Qué Ser Católico?",
        de: "Schlussfolgerung: Warum Katholisch Sein?",
      },
      intro: {
        en: "Because it is:",
        fr: "Parce qu'elle est :",
        es: "Porque es:",
        de: "Weil sie ist:",
      },
      reason1: {
        en: "The Church founded by Christ",
        fr: "L'Église fondée par le Christ",
        es: "La Iglesia fundada por Cristo",
        de: "Die von Christus gegründete Kirche",
      },
      reason2: {
        en: "The guardian of the full deposit of faith",
        fr: "La gardienne du dépôt complet de la foi",
        es: "La guardiana del depósito completo de la fe",
        de: "Die Hüterin des vollständigen Glaubensguts",
      },
      reason3: {
        en: "The home of the sacraments instituted by Jesus",
        fr: "Le foyer des sacrements institués par Jésus",
        es: "El hogar de los sacramentos instituidos por Jesús",
        de: "Die Heimat der von Jesus eingesetzten Sakramente",
      },
      reason4: {
        en: "The community of saints, living and dead",
        fr: "La communauté des saints, vivants et morts",
        es: "La comunidad de los santos, vivos y muertos",
        de: "Die Gemeinschaft der Heiligen, lebend und tot",
      },
      reason5: {
        en: "The pillar and bulwark of truth in a divided world",
        fr: "La colonne et le rempart de la vérité dans un monde divisé",
        es: "La columna y baluarte de la verdad en un mundo dividido",
        de: "Die Säule und das Bollwerk der Wahrheit in einer geteilten Welt",
      },
      para: {
        en: 'Catholicism isn\'t "just another Christian option." It is the fullness of Christianity—biblical, historical, sacramental, and apostolic.',
        fr: "Le catholicisme n'est pas « simplement une autre option chrétienne ». C'est la plénitude du christianisme — biblique, historique, sacramentelle et apostolique.",
        es: 'El catolicismo no es "solo otra opción cristiana". Es la plenitud del cristianismo—bíblico, histórico, sacramental y apostólico.',
        de: 'Der Katholizismus ist nicht „nur eine weitere christliche Option". Er ist die Fülle des Christentums — biblisch, historisch, sakramental und apostolisch.',
      },
      newmanQuote: {
        en: "To be deep in history is to cease to be Protestant.",
        fr: "Être profondément dans l'histoire, c'est cesser d'être protestant.",
        es: "Estar profundamente en la historia es dejar de ser protestante.",
        de: "Tief in der Geschichte zu sein bedeutet, aufzuhören, Protestant zu sein.",
      },
      newmanSource: {
        en: "St. John Henry Newman",
        fr: "Saint John Henry Newman",
        es: "San John Henry Newman",
        de: "Hl. John Henry Newman",
      },
    },

    // Bridge to Next Topic
    bridge: {
      heading: {
        en: "Moving Forward",
        fr: "Aller de l'Avant",
        es: "Avanzando",
        de: "Weitergehen",
      },
      para1: {
        en: "The case for Catholicism is strong—historically, scripturally, and logically. But in discussions about faith, it's important to think clearly and avoid common logical fallacies that can derail productive conversation.",
        fr: "Le cas pour le catholicisme est solide — historiquement, scripturellement et logiquement. Mais dans les discussions sur la foi, il est important de penser clairement et d'éviter les sophismes logiques courants qui peuvent faire dérailler une conversation productive.",
        es: "El caso del catolicismo es sólido—histórica, escritural y lógicamente. Pero en las discusiones sobre la fe, es importante pensar con claridad y evitar las falacias lógicas comunes que pueden descarrilar la conversación productiva.",
        de: "Der Fall für den Katholizismus ist stark — historisch, schriftlich und logisch. Aber in Diskussionen über den Glauben ist es wichtig, klar zu denken und häufige logische Fehlschlüsse zu vermeiden, die ein produktives Gespräch entgleisen lassen können.",
      },
      para2: {
        en: "Before we dive deeper into specific Catholic teachings, let's equip ourselves with some critical thinking tools to recognize faulty arguments when we encounter them.",
        fr: "Avant d'approfondir les enseignements catholiques spécifiques, équipons-nous d'outils de pensée critique pour reconnaître les arguments défectueux lorsque nous les rencontrons.",
        es: "Antes de profundizar en las enseñanzas católicas específicas, equipémonos con algunas herramientas de pensamiento crítico para reconocer argumentos defectuosos cuando los encontramos.",
        de: "Bevor wir tiefer in spezifische katholische Lehren eintauchen, rüsten wir uns mit einigen kritischen Denkwerkzeugen aus, um fehlerhafte Argumente zu erkennen, wenn wir auf sie stoßen.",
      },
    },
  },

  // You Lose So I Win Fallacy Topic
  youLoseSoIWinFallacy: {
    title: {
      en: 'The "You Lose, So I Win" Fallacy',
      fr: "Le Sophisme « Vous Perdez, Donc Je Gagne »",
      es: 'La Falacia "Tú Pierdes, Luego Yo Gano"',
      de: "Der Trugschluss „Du verlierst, also gewinne ich“",
    },
    subtitle: {
      en: "Can We Know the Biblical Canon Without an Infallible Church?",
      fr: "Peut-on Connaître le Canon Biblique Sans une Église Infaillible ?",
      es: "¿Podemos Conocer el Canon Bíblico Sin una Iglesia Infalible?",
      de: "Können Wir den Biblischen Kanon Ohne eine Unfehlbare Kirche Kennen?",
    },
    quote: {
      en: "Come now, let us reason together.",
      fr: "Venez maintenant, raisonnons ensemble.",
      es: "Vengan ahora, razonemos juntos.",
      de: "Kommt nun, lasst uns miteinander rechten.",
    },
    quoteSource: {
      en: "Isaiah 1:18",
      fr: "Isaïe 1:18",
      es: "Isaías 1:18",
      de: "Jesaja 1:18",
    },

    // Introduction
    introPara1: {
      en: "In debates between Catholics, Protestants, and Orthodox Christians, one of the most pressing and foundational questions is this:",
      fr: "Dans les débats entre catholiques, protestants et chrétiens orthodoxes, l'une des questions les plus pressantes et fondamentales est la suivante :",
      es: "En los debates entre católicos, protestantes y cristianos ortodoxos, una de las preguntas más urgentes y fundamentales es esta:",
      de: "In Debatten zwischen Katholiken, Protestanten und orthodoxen Christen ist eine der dringendsten und grundlegendsten Fragen diese:",
    },
    canonQuestion: {
      en: "How do we know which books belong in the Bible?",
      fr: "Comment savons-nous quels livres appartiennent à la Bible ?",
      es: "¿Cómo sabemos qué libros pertenecen a la Biblia?",
      de: "Wie wissen wir, welche Bücher zur Bibel gehören?",
    },
    introPara2: {
      en: "Catholics argue that since the canon of Scripture is <strong>infallible</strong>, the process by which it was recognized must also be <strong>infallible</strong>. But Protestants often reply with one of two responses:",
      fr: "Les catholiques soutiennent que puisque le canon de l'Écriture est <strong>infaillible</strong>, le processus par lequel il a été reconnu doit également être <strong>infaillible</strong>. Mais les protestants répondent souvent par l'une des deux réponses suivantes :",
      es: "Los católicos argumentan que dado que el canon de las Escrituras es <strong>infalible</strong>, el proceso por el cual fue reconocido también debe ser <strong>infalible</strong>. Pero los protestantes a menudo responden con una de dos respuestas:",
      de: "Katholiken argumentieren, dass da der Kanon der Schrift <strong>unfehlbar</strong> ist, auch der Prozess, durch den er erkannt wurde, <strong>unfehlbar</strong> sein muss. Aber Protestanten antworten oft mit einer von zwei Antworten:",
    },
    response1: {
      en: "\"We don't need infallibility to know something is true. I'm fallible, yet I know God is infallible.\"",
      fr: "« Nous n'avons pas besoin d'infaillibilité pour savoir que quelque chose est vrai. Je suis faillible, mais je sais que Dieu est infaillible. »",
      es: '"No necesitamos infalibilidad para saber que algo es verdad. Soy falible, pero sé que Dios es infalible."',
      de: '„Wir brauchen keine Unfehlbarkeit, um zu wissen, dass etwas wahr ist. Ich bin fehlbar, aber ich weiß, dass Gott unfehlbar ist."',
    },
    response2: {
      en: '"We can use historical methods—manuscript evidence, early church usage, and apostolic authorship—to identify the correct books."',
      fr: "« Nous pouvons utiliser des méthodes historiques — preuves manuscrites, usage de l'Église primitive et paternité apostolique — pour identifier les bons livres. »",
      es: '"Podemos usar métodos históricos—evidencia de manuscritos, uso de la iglesia primitiva y autoría apostólica—para identificar los libros correctos."',
      de: '„Wir können historische Methoden verwenden — Manuskriptbeweise, frühe kirchliche Nutzung und apostolische Autorschaft — um die richtigen Bücher zu identifizieren."',
    },
    introPara3: {
      en: "At first glance, these seem reasonable. But a closer look reveals significant logical and theological problems.",
      fr: "À première vue, celles-ci semblent raisonnables. Mais un examen plus approfondi révèle des problèmes logiques et théologiques importants.",
      es: "A primera vista, estas parecen razonables. Pero una mirada más cercana revela problemas lógicos y teológicos significativos.",
      de: "Auf den ersten Blick scheinen diese vernünftig. Aber ein genauerer Blick offenbart erhebliche logische und theologische Probleme.",
    },
    introPara4: {
      en: "This exploration examines two main issues:",
      fr: "Cette exploration examine deux problèmes principaux :",
      es: "Esta exploración examina dos temas principales:",
      de: "Diese Untersuchung prüft zwei Hauptthemen:",
    },
    issue1: {
      en: 'The <strong>"You Lose, So I Win" fallacy</strong>—a logical misstep common in critiques of Catholicism.',
      fr: "Le <strong>sophisme « Vous perdez, donc je gagne »</strong> — un faux pas logique courant dans les critiques du catholicisme.",
      es: 'La <strong>falacia "Tú pierdes, luego yo gano"</strong>—un error lógico común en las críticas al catolicismo.',
      de: 'Der <strong>„Du verlierst, also gewinne ich" Fehlschluss</strong> — ein logischer Fehltritt, der in Kritiken am Katholizismus häufig vorkommt.',
    },
    issue2: {
      en: 'The <strong>limits of appealing to historical or "scientific" methods</strong> as the sole basis for identifying the canon of Scripture.',
      fr: "Les <strong>limites de l'appel aux méthodes historiques ou « scientifiques »</strong> comme seule base pour identifier le canon de l'Écriture.",
      es: 'Los <strong>límites de apelar a métodos históricos o "científicos"</strong> como la única base para identificar el canon de las Escrituras.',
      de: 'Die <strong>Grenzen der Berufung auf historische oder „wissenschaftliche" Methoden</strong> als alleinige Grundlage zur Identifizierung des Kanons der Schrift.',
    },

    // Section 1: The Fallacy
    section1: {
      heading: {
        en: '1. The Fallacy of "You Lose, So I Win"',
        fr: "1. Le Sophisme « Vous Perdez, Donc Je Gagne »",
        es: '1. La Falacia de "Tú Pierdes, Luego Yo Gano"',
        de: '1. Der Fehlschluss „Du Verlierst, Also Gewinne Ich"',
      },
      para1: {
        en: "One of the most common moves in Protestant apologetics is to critique the Catholic Church's claim to infallibility by pointing out disagreements in Church history, corrupt Popes, or doctrinal development. From there, the argument concludes that since the Catholic position is flawed, <strong>Sola Scriptura must be true</strong>.",
        fr: "L'un des mouvements les plus courants dans l'apologétique protestante est de critiquer la revendication d'infaillibilité de l'Église catholique en signalant des désaccords dans l'histoire de l'Église, des papes corrompus ou le développement doctrinal. De là, l'argument conclut que puisque la position catholique est défectueuse, <strong>la Sola Scriptura doit être vraie</strong>.",
        es: "Uno de los movimientos más comunes en la apologética protestante es criticar la afirmación de la Iglesia Católica de infalibilidad señalando desacuerdos en la historia de la Iglesia, Papas corruptos o desarrollo doctrinal. De ahí, el argumento concluye que dado que la posición católica es defectuosa, <strong>Sola Scriptura debe ser verdad</strong>.",
        de: "Einer der häufigsten Züge in der protestantischen Apologetik ist es, den Anspruch der katholischen Kirche auf Unfehlbarkeit zu kritisieren, indem man auf Meinungsverschiedenheiten in der Kirchengeschichte, korrupte Päpste oder doktrinale Entwicklung hinweist. Von dort schließt das Argument, dass da die katholische Position fehlerhaft ist, <strong>Sola Scriptura wahr sein muss</strong>.",
      },
      para2: {
        en: 'This reasoning commits the <strong>"You Lose, So I Win" fallacy</strong>—a form of <strong>false dichotomy</strong>. It assumes that there are only two options: Catholicism or Protestantism. If Catholicism is false, Protestantism must be true. But this does not logically follow.',
        fr: "Ce raisonnement commet le <strong>sophisme « Vous perdez, donc je gagne »</strong> — une forme de <strong>faux dilemme</strong>. Il suppose qu'il n'y a que deux options : le catholicisme ou le protestantisme. Si le catholicisme est faux, le protestantisme doit être vrai. Mais cela ne suit pas logiquement.",
        es: 'Este razonamiento comete la <strong>falacia "Tú pierdes, luego yo gano"</strong>—una forma de <strong>falso dilema</strong>. Asume que solo hay dos opciones: catolicismo o protestantismo. Si el catolicismo es falso, el protestantismo debe ser verdadero. Pero esto no sigue lógicamente.',
        de: 'Diese Argumentation begeht den <strong>„Du verlierst, also gewinne ich" Fehlschluss</strong> — eine Form des <strong>falschen Dilemmas</strong>. Es nimmt an, dass es nur zwei Optionen gibt: Katholizismus oder Protestantismus. Wenn der Katholizismus falsch ist, muss der Protestantismus wahr sein. Aber das folgt nicht logisch.',
      },
      kreeftQuote: {
        en: "Refuting a position is not the same as proving its opposite.",
        fr: "Réfuter une position n'est pas la même chose que prouver son contraire.",
        es: "Refutar una posición no es lo mismo que probar su opuesto.",
        de: "Eine Position zu widerlegen ist nicht dasselbe wie ihr Gegenteil zu beweisen.",
      },
      para3: {
        en: "This fallacy is especially dangerous in matters of authority and doctrine. Consider an atheist who says:",
        fr: "Ce sophisme est particulièrement dangereux en matière d'autorité et de doctrine. Considérez un athée qui dit :",
        es: "Esta falacia es especialmente peligrosa en asuntos de autoridad y doctrina. Considere un ateo que dice:",
        de: "Dieser Fehlschluss ist besonders gefährlich in Fragen der Autorität und Lehre. Betrachten Sie einen Atheisten, der sagt:",
      },
      atheistExample: {
        en: "If you can't prove that God exists, then nature is all there is.",
        fr: "Si vous ne pouvez pas prouver que Dieu existe, alors la nature est tout ce qu'il y a.",
        es: "Si no puedes probar que Dios existe, entonces la naturaleza es todo lo que hay.",
        de: "Wenn Sie nicht beweisen können, dass Gott existiert, dann ist die Natur alles, was es gibt.",
      },
      atheistLogic1: {
        en: "Nature is the only observable reality.",
        fr: "La nature est la seule réalité observable.",
        es: "La naturaleza es la única realidad observable.",
        de: "Die Natur ist die einzige beobachtbare Realität.",
      },
      atheistLogic2: {
        en: "If you can't prove God exists,",
        fr: "Si vous ne pouvez pas prouver que Dieu existe,",
        es: "Si no puedes probar que Dios existe,",
        de: "Wenn Sie nicht beweisen können, dass Gott existiert,",
      },
      atheistLogic3: {
        en: "then nature is all there is.",
        fr: "alors la nature est tout ce qu'il y a.",
        es: "entonces la naturaleza es todo lo que hay.",
        de: "dann ist die Natur alles, was es gibt.",
      },
      para4: {
        en: "A Christian rightly sees the problem: <strong>the atheist assumes naturalism as the default</strong> and shifts the burden of proof entirely onto the theist, offering no positive case for his own worldview.",
        fr: "Un chrétien voit à juste titre le problème : <strong>l'athée suppose le naturalisme par défaut</strong> et déplace entièrement le fardeau de la preuve sur le théiste, n'offrant aucun argument positif pour sa propre vision du monde.",
        es: "Un cristiano ve correctamente el problema: <strong>el ateo asume el naturalismo como predeterminado</strong> y traslada la carga de la prueba completamente al teísta, sin ofrecer ningún caso positivo para su propia cosmovisión.",
        de: "Ein Christ sieht zu Recht das Problem: <strong>der Atheist nimmt Naturalismus als Standard an</strong> und verlagert die Beweislast vollständig auf den Theisten, ohne einen positiven Fall für seine eigene Weltanschauung anzubieten.",
      },
      para5: {
        en: "In the same way, a Protestant might say:",
        fr: "De la même manière, un protestant pourrait dire :",
        es: "De la misma manera, un protestante podría decir:",
        de: "Auf dieselbe Weise könnte ein Protestant sagen:",
      },
      protestantExample: {
        en: "If you can't prove that the Church is infallible, then Scripture alone must be the only infallible rule of faith.",
        fr: "Si vous ne pouvez pas prouver que l'Église est infaillible, alors l'Écriture seule doit être la seule règle infaillible de foi.",
        es: "Si no puedes probar que la Iglesia es infalible, entonces solo la Escritura debe ser la única regla infalible de fe.",
        de: "Wenn Sie nicht beweisen können, dass die Kirche unfehlbar ist, dann muss die Schrift allein die einzige unfehlbare Glaubensregel sein.",
      },
      protestantLogic1: {
        en: "Scripture is one known infallible rule of faith.",
        fr: "L'Écriture est une règle infaillible connue de la foi.",
        es: "La Escritura es una regla infalible conocida de fe.",
        de: "Die Schrift ist eine bekannte unfehlbare Glaubensregel.",
      },
      protestantLogic2: {
        en: "If you can't prove that Tradition or the Magisterium are also infallible,",
        fr: "Si vous ne pouvez pas prouver que la Tradition ou le Magistère sont également infaillibles,",
        es: "Si no puedes probar que la Tradición o el Magisterio también son infalibles,",
        de: "Wenn Sie nicht beweisen können, dass Tradition oder Lehramt auch unfehlbar sind,",
      },
      protestantLogic3: {
        en: "then Scripture alone must be the only rule of faith.",
        fr: "alors l'Écriture seule doit être la seule règle de foi.",
        es: "entonces solo la Escritura debe ser la única regla de fe.",
        de: "dann muss die Schrift allein die einzige Glaubensregel sein.",
      },
      para6: {
        en: "But this <strong>assumes</strong> Sola Scriptura by default and avoids the harder question: <strong>Can Sola Scriptura justify itself? Can it provide a canon of infallible books with a fallible process?</strong>",
        fr: "Mais cela <strong>suppose</strong> la Sola Scriptura par défaut et évite la question plus difficile : <strong>La Sola Scriptura peut-elle se justifier ? Peut-elle fournir un canon de livres infaillibles avec un processus faillible ?</strong>",
        es: "Pero esto <strong>asume</strong> Sola Scriptura por defecto y evita la pregunta más difícil: <strong>¿Puede Sola Scriptura justificarse a sí misma? ¿Puede proporcionar un canon de libros infalibles con un proceso falible?</strong>",
        de: "Aber dies <strong>nimmt</strong> Sola Scriptura standardmäßig an und vermeidet die schwierigere Frage: <strong>Kann Sola Scriptura sich selbst rechtfertigen? Kann sie einen Kanon unfehlbarer Bücher mit einem fehlbaren Prozess liefern?</strong>",
      },
    },

    // Bridge Analogy
    bridgeAnalogy: {
      heading: {
        en: "A Real-Life Analogy: Bridges and Engineers",
        fr: "Une Analogie Réelle : Ponts et Ingénieurs",
        es: "Una Analogía de la Vida Real: Puentes e Ingenieros",
        de: "Eine Analogie aus dem wirklichen Leben: Brücken und Ingenieure",
      },
      para1: {
        en: "Imagine two people debating whether a bridge is safe to cross:",
        fr: "Imaginez deux personnes débattant de savoir si un pont est sûr à traverser :",
        es: "Imagina dos personas debatiendo si un puente es seguro para cruzar:",
        de: "Stellen Sie sich zwei Personen vor, die darüber debattieren, ob eine Brücke sicher zu überqueren ist:",
      },
      personA: {
        en: '<strong>Person A</strong> says: "This bridge was built by certified engineers and approved by safety inspectors."',
        fr: "<strong>Personne A</strong> dit : « Ce pont a été construit par des ingénieurs certifiés et approuvé par des inspecteurs de sécurité. »",
        es: '<strong>Persona A</strong> dice: "Este puente fue construido por ingenieros certificados y aprobado por inspectores de seguridad."',
        de: '<strong>Person A</strong> sagt: „Diese Brücke wurde von zertifizierten Ingenieuren gebaut und von Sicherheitsinspektoren genehmigt."',
      },
      personB: {
        en: '<strong>Person B</strong> replies: "Well, maybe those engineers were wrong—so my homemade bridge is just as good."',
        fr: "<strong>Personne B</strong> répond : « Eh bien, peut-être que ces ingénieurs se sont trompés — donc mon pont fait maison est tout aussi bon. »",
        es: '<strong>Persona B</strong> responde: "Bueno, tal vez esos ingenieros estaban equivocados—así que mi puente casero es igual de bueno."',
        de: '<strong>Person B</strong> antwortet: „Nun, vielleicht lagen diese Ingenieure falsch — also ist meine selbstgemachte Brücke genauso gut."',
      },
      para2: {
        en: "Clearly, pointing out a potential flaw in A's position doesn't make B's position credible. B must demonstrate that <em>his own bridge is trustworthy</em>.",
        fr: "Clairement, signaler un défaut potentiel dans la position de A ne rend pas la position de B crédible. B doit démontrer que <em>son propre pont est digne de confiance</em>.",
        es: "Claramente, señalar un defecto potencial en la posición de A no hace creíble la posición de B. B debe demostrar que <em>su propio puente es confiable</em>.",
        de: "Eindeutig macht das Aufzeigen eines potenziellen Fehlers in As Position Bs Position nicht glaubwürdig. B muss zeigen, dass <em>seine eigene Brücke vertrauenswürdig ist</em>.",
      },
      para3: {
        en: "Likewise, pointing out disagreements or developments within Catholic history doesn't prove that Protestantism is right. It simply raises questions about Catholicism. But Protestantism still needs to justify its own mechanism for identifying the canon. <strong>Rejecting the Catholic Church doesn't automatically validate the Protestant method.</strong>",
        fr: "De même, signaler des désaccords ou des développements dans l'histoire catholique ne prouve pas que le protestantisme a raison. Cela soulève simplement des questions sur le catholicisme. Mais le protestantisme doit encore justifier son propre mécanisme pour identifier le canon. <strong>Rejeter l'Église catholique ne valide pas automatiquement la méthode protestante.</strong>",
        es: "Del mismo modo, señalar desacuerdos o desarrollos dentro de la historia católica no prueba que el protestantismo tenga razón. Simplemente plantea preguntas sobre el catolicismo. Pero el protestantismo todavía necesita justificar su propio mecanismo para identificar el canon. <strong>Rechazar la Iglesia Católica no valida automáticamente el método protestante.</strong>",
        de: "Ebenso beweist das Aufzeigen von Meinungsverschiedenheiten oder Entwicklungen innerhalb der katholischen Geschichte nicht, dass der Protestantismus richtig ist. Es wirft lediglich Fragen über den Katholizismus auf. Aber der Protestantismus muss noch seinen eigenen Mechanismus zur Identifizierung des Kanons rechtfertigen. <strong>Die Ablehnung der katholischen Kirche validiert nicht automatisch die protestantische Methode.</strong>",
      },
    },

    // Science Parallel
    scienceParallel: {
      heading: {
        en: "A Parallel from Science",
        fr: "Un Parallèle de la Science",
        es: "Un Paralelo de la Ciencia",
        de: "Eine Parallele aus der Wissenschaft",
      },
      para1: {
        en: "Consider debates in science: Refuting one theory doesn't automatically prove another.",
        fr: "Considérez les débats en science : Réfuter une théorie ne prouve pas automatiquement une autre.",
        es: "Considere los debates en la ciencia: Refutar una teoría no prueba automáticamente otra.",
        de: "Betrachten Sie Debatten in der Wissenschaft: Eine Theorie zu widerlegen beweist nicht automatisch eine andere.",
      },
      point1: {
        en: "Einstein's critique of quantum mechanics didn't automatically revalidate Newtonian physics.",
        fr: "La critique d'Einstein de la mécanique quantique n'a pas automatiquement revalidé la physique newtonienne.",
        es: "La crítica de Einstein a la mecánica cuántica no revalidó automáticamente la física newtoniana.",
        de: "Einsteins Kritik an der Quantenmechanik hat nicht automatisch die Newtonsche Physik revalidiert.",
      },
      point2: {
        en: "Pointing out weaknesses in Darwinian evolution doesn't prove Intelligent Design.",
        fr: "Signaler les faiblesses de l'évolution darwinienne ne prouve pas le Dessein Intelligent.",
        es: "Señalar debilidades en la evolución darwiniana no prueba el Diseño Inteligente.",
        de: "Schwächen in der darwinschen Evolution aufzuzeigen beweist nicht Intelligent Design.",
      },
      para2: {
        en: "Each theory must be evaluated on its <strong>own merits</strong>—its internal coherence, evidential support, and explanatory power. Likewise, each model of Christian authority—Magisterium, Tradition, Sola Scriptura—must be tested not just by criticizing rivals, but by <strong>positively defending itself</strong>.",
        fr: "Chaque théorie doit être évaluée sur ses <strong>propres mérites</strong> — sa cohérence interne, son soutien probant et son pouvoir explicatif. De même, chaque modèle d'autorité chrétienne — Magistère, Tradition, Sola Scriptura — doit être testé non seulement en critiquant ses rivaux, mais en <strong>se défendant positivement</strong>.",
        es: "Cada teoría debe ser evaluada por sus <strong>propios méritos</strong>—su coherencia interna, apoyo evidencial y poder explicativo. Del mismo modo, cada modelo de autoridad cristiana—Magisterio, Tradición, Sola Scriptura—debe ser probado no solo criticando rivales, sino <strong>defendiéndose positivamente</strong>.",
        de: "Jede Theorie muss nach ihren <strong>eigenen Vorzügen</strong> bewertet werden — ihrer internen Kohärenz, evidenziellen Unterstützung und Erklärungskraft. Ebenso muss jedes Modell christlicher Autorität — Lehramt, Tradition, Sola Scriptura — nicht nur durch Kritik an Rivalen getestet werden, sondern durch <strong>positive Selbstverteidigung</strong>.",
      },
    },

    // Section 2: Can Science/History Determine Canon
    section2: {
      heading: {
        en: '2. Can "Science" or History Determine the Canon?',
        fr: "2. La « Science » ou l'Histoire Peut-elle Déterminer le Canon ?",
        es: '2. ¿Puede la "Ciencia" o la Historia Determinar el Canon?',
        de: '2. Kann „Wissenschaft" oder Geschichte den Kanon Bestimmen?',
      },
      para1: {
        en: "Many Protestants argue that the biblical canon can be identified using <strong>historical criteria</strong>—early dates, apostolic authorship, orthodoxy, and widespread use in the early Church. According to this view, if we sift through the evidence like detectives or historians, we can deduce which books are inspired.",
        fr: "De nombreux protestants soutiennent que le canon biblique peut être identifié en utilisant des <strong>critères historiques</strong> — dates anciennes, paternité apostolique, orthodoxie et usage répandu dans l'Église primitive. Selon cette vision, si nous examinons les preuves comme des détectives ou des historiens, nous pouvons déduire quels livres sont inspirés.",
        es: "Muchos protestantes argumentan que el canon bíblico puede ser identificado usando <strong>criterios históricos</strong>—fechas tempranas, autoría apostólica, ortodoxia y uso generalizado en la Iglesia primitiva. Según este punto de vista, si examinamos la evidencia como detectives o historiadores, podemos deducir qué libros están inspirados.",
        de: "Viele Protestanten argumentieren, dass der biblische Kanon anhand <strong>historischer Kriterien</strong> identifiziert werden kann — frühe Daten, apostolische Autorschaft, Orthodoxie und weit verbreitete Nutzung in der frühen Kirche. Nach dieser Ansicht können wir, wenn wir die Beweise wie Detektive oder Historiker durchsieben, ableiten, welche Bücher inspiriert sind.",
      },
      para2: {
        en: "At first, this seems like a promising strategy. But it ultimately <strong>fails to provide the certainty</strong> that Christians demand for something as crucial as the Word of God.",
        fr: "Au premier abord, cela semble être une stratégie prometteuse. Mais cela ne parvient finalement <strong>pas à fournir la certitude</strong> que les chrétiens exigent pour quelque chose d'aussi crucial que la Parole de Dieu.",
        es: "Al principio, esto parece una estrategia prometedora. Pero finalmente <strong>no proporciona la certeza</strong> que los cristianos exigen para algo tan crucial como la Palabra de Dios.",
        de: "Zunächst scheint dies eine vielversprechende Strategie zu sein. Aber es gelingt letztendlich nicht, <strong>die Gewissheit zu liefern</strong>, die Christen für etwas so Entscheidendes wie das Wort Gottes fordern.",
      },
    },

    // What This Method Assumes
    methodAssumptions: {
      heading: {
        en: "What This Method Assumes",
        fr: "Ce que Cette Méthode Suppose",
        es: "Lo Que Este Método Asume",
        de: "Was Diese Methode Annimmt",
      },
      para1: {
        en: "This historical approach depends on several <strong>assumptions</strong>:",
        fr: "Cette approche historique dépend de plusieurs <strong>suppositions</strong> :",
        es: "Este enfoque histórico depende de varias <strong>suposiciones</strong>:",
        de: "Dieser historische Ansatz hängt von mehreren <strong>Annahmen</strong> ab:",
      },
      assumption1: {
        en: 'That we can objectively determine which books are "apostolic" and "orthodox."',
        fr: "Que nous pouvons déterminer objectivement quels livres sont « apostoliques » et « orthodoxes ».",
        es: 'Que podemos determinar objetivamente qué libros son "apostólicos" y "ortodoxos".',
        de: 'Dass wir objektiv bestimmen können, welche Bücher „apostolisch" und „orthodox" sind.',
      },
      assumption2: {
        en: 'That we know which documents "contradict Scripture"—even though that assumes we already have a stable canon.',
        fr: "Que nous savons quels documents « contredisent l'Écriture » — même si cela suppose que nous ayons déjà un canon stable.",
        es: 'Que sabemos qué documentos "contradicen las Escrituras"—aunque eso asume que ya tenemos un canon estable.',
        de: 'Dass wir wissen, welche Dokumente „der Schrift widersprechen" — obwohl das voraussetzt, dass wir bereits einen stabilen Kanon haben.',
      },
      assumption3: {
        en: "That widespread early use is enough to determine divine inspiration.",
        fr: "Que l'usage primitif répandu suffit à déterminer l'inspiration divine.",
        es: "Que el uso temprano generalizado es suficiente para determinar la inspiración divina.",
        de: "Dass weit verbreitete frühe Nutzung ausreicht, um göttliche Inspiration zu bestimmen.",
      },
      para2: {
        en: "But this creates a <strong>circular problem</strong>: we're using a standard (\"Scripture\") to judge whether a book belongs in Scripture. And we're relying on <strong>fallible, human investigation</strong> to reach infallible conclusions.",
        fr: "Mais cela crée un <strong>problème circulaire</strong> : nous utilisons une norme (« l'Écriture ») pour juger si un livre appartient à l'Écriture. Et nous nous appuyons sur une <strong>investigation humaine faillible</strong> pour parvenir à des conclusions infaillibles.",
        es: 'Pero esto crea un <strong>problema circular</strong>: estamos usando un estándar ("Escritura") para juzgar si un libro pertenece a las Escrituras. Y estamos confiando en una <strong>investigación humana falible</strong> para llegar a conclusiones infalibles.',
        de: 'Aber dies schafft ein <strong>Zirkelproblem</strong>: Wir verwenden einen Standard („Schrift"), um zu beurteilen, ob ein Buch zur Schrift gehört. Und wir verlassen uns auf <strong>fehlbare, menschliche Untersuchung</strong>, um unfehlbare Schlussfolgerungen zu erreichen.',
      },
    },

    // Early Church Section
    earlyChurchSection: {
      heading: {
        en: "What About the Early Church?",
        fr: "Qu'en Est-il de l'Église Primitive ?",
        es: "¿Qué Pasa con la Iglesia Primitiva?",
        de: "Was Ist mit der Frühen Kirche?",
      },
      para1: {
        en: "Some claim that the early Church recognized the canon based purely on these criteria—age, apostolicity, orthodoxy, usage. But this isn't how the early Church actually functioned.",
        fr: "Certains prétendent que l'Église primitive a reconnu le canon uniquement sur la base de ces critères — âge, apostolicité, orthodoxie, usage. Mais ce n'est pas ainsi que l'Église primitive fonctionnait réellement.",
        es: "Algunos afirman que la Iglesia primitiva reconoció el canon basándose puramente en estos criterios—edad, apostolicidad, ortodoxia, uso. Pero esto no es cómo la Iglesia primitiva realmente funcionaba.",
        de: "Einige behaupten, dass die frühe Kirche den Kanon rein aufgrund dieser Kriterien erkannt hat — Alter, Apostolizität, Orthodoxie, Nutzung. Aber so funktionierte die frühe Kirche tatsächlich nicht.",
      },
      para2: {
        en: "The councils of <strong>Hippo (393)</strong>, <strong>Carthage (397)</strong>, and later Florence and Trent didn't canonize books based on historical science. They did so through the <strong>apostolic authority of the Church</strong>, trusting that the Holy Spirit was guiding their decision (cf. John 16:13).",
        fr: "Les conciles d'<strong>Hippone (393)</strong>, de <strong>Carthage (397)</strong> et plus tard de Florence et de Trente n'ont pas canonisé les livres sur la base de la science historique. Ils l'ont fait par <strong>l'autorité apostolique de l'Église</strong>, croyant que le Saint-Esprit guidait leur décision (cf. Jean 16:13).",
        es: "Los concilios de <strong>Hipona (393)</strong>, <strong>Cartago (397)</strong> y más tarde Florencia y Trento no canonizaron libros basándose en la ciencia histórica. Lo hicieron a través de la <strong>autoridad apostólica de la Iglesia</strong>, confiando en que el Espíritu Santo estaba guiando su decisión (cf. Juan 16:13).",
        de: "Die Konzile von <strong>Hippo (393)</strong>, <strong>Karthago (397)</strong> und später Florenz und Trient haben Bücher nicht aufgrund historischer Wissenschaft kanonisiert. Sie taten dies durch die <strong>apostolische Autorität der Kirche</strong>, im Vertrauen darauf, dass der Heilige Geist ihre Entscheidung leitete (vgl. Johannes 16:13).",
      },
      para3: {
        en: "Even if certain books were believed to be apostolic, that belief wasn't based on archaeology—it was based on <strong>faith in the Church's living tradition</strong>.",
        fr: "Même si certains livres étaient considérés comme apostoliques, cette croyance n'était pas basée sur l'archéologie — elle était basée sur <strong>la foi dans la tradition vivante de l'Église</strong>.",
        es: "Incluso si se creía que ciertos libros eran apostólicos, esa creencia no se basaba en la arqueología—se basaba en <strong>la fe en la tradición viva de la Iglesia</strong>.",
        de: "Selbst wenn bestimmte Bücher als apostolisch galten, basierte dieser Glaube nicht auf Archäologie — er basierte auf <strong>dem Glauben an die lebendige Tradition der Kirche</strong>.",
      },
      para4: {
        en: "Historical research can support the faith. It can help us understand what the early Christians believed. But it can't <strong>guarantee</strong> which writings are <strong>theopneustos</strong> (God-breathed). That requires <strong>divine authority</strong>, not just historical consensus.",
        fr: "La recherche historique peut soutenir la foi. Elle peut nous aider à comprendre ce que les premiers chrétiens croyaient. Mais elle ne peut pas <strong>garantir</strong> quels écrits sont <strong>theopneustos</strong> (inspirés de Dieu). Cela nécessite une <strong>autorité divine</strong>, pas seulement un consensus historique.",
        es: "La investigación histórica puede apoyar la fe. Puede ayudarnos a entender lo que los primeros cristianos creían. Pero no puede <strong>garantizar</strong> qué escritos son <strong>theopneustos</strong> (inspirados por Dios). Eso requiere <strong>autoridad divina</strong>, no solo consenso histórico.",
        de: "Historische Forschung kann den Glauben unterstützen. Sie kann uns helfen zu verstehen, was die frühen Christen glaubten. Aber sie kann nicht <strong>garantieren</strong>, welche Schriften <strong>theopneustos</strong> (gottgehaucht) sind. Das erfordert <strong>göttliche Autorität</strong>, nicht nur historischen Konsens.",
      },
    },

    // Section 3: Recognizing Infallible Truth
    section3: {
      heading: {
        en: "3. Does Recognizing Infallible Truth Require Infallibility?",
        fr: "3. Reconnaître la Vérité Infaillible Nécessite-t-il l'Infaillibilité ?",
        es: "3. ¿Reconocer la Verdad Infalible Requiere Infalibilidad?",
        de: "3. Erfordert das Erkennen Unfehlbarer Wahrheit Unfehlbarkeit?",
      },
      para1: {
        en: "A common Protestant response to the Catholic claim of an infallible Church guiding the biblical canon is this:",
        fr: "Une réponse protestante courante à la revendication catholique d'une Église infaillible guidant le canon biblique est celle-ci :",
        es: "Una respuesta protestante común a la afirmación católica de una Iglesia infalible que guía el canon bíblico es esta:",
        de: "Eine häufige protestantische Antwort auf den katholischen Anspruch einer unfehlbaren Kirche, die den biblischen Kanon leitet, ist diese:",
      },
      protestantResponse: {
        en: "I don't need to be infallible to know that God is infallible. Why then do we need an infallible Church to recognize which books belong in the Bible?",
        fr: "Je n'ai pas besoin d'être infaillible pour savoir que Dieu est infaillible. Pourquoi alors avons-nous besoin d'une Église infaillible pour reconnaître quels livres appartiennent à la Bible ?",
        es: "No necesito ser infalible para saber que Dios es infalible. ¿Por qué entonces necesitamos una Iglesia infalible para reconocer qué libros pertenecen a la Biblia?",
        de: "Ich muss nicht unfehlbar sein, um zu wissen, dass Gott unfehlbar ist. Warum brauchen wir dann eine unfehlbare Kirche, um zu erkennen, welche Bücher zur Bibel gehören?",
      },
      para2: {
        en: "At first glance, this sounds reasonable—after all, we often accept truths that transcend our own fallibility. But this response conflates two very different concepts that need to be carefully distinguished:",
        fr: "À première vue, cela semble raisonnable — après tout, nous acceptons souvent des vérités qui transcendent notre propre faillibilité. Mais cette réponse confond deux concepts très différents qui doivent être soigneusement distingués :",
        es: "A primera vista, esto suena razonable—después de todo, a menudo aceptamos verdades que trascienden nuestra propia falibilidad. Pero esta respuesta confunde dos conceptos muy diferentes que deben distinguirse cuidadosamente:",
        de: "Auf den ersten Blick klingt dies vernünftig — schließlich akzeptieren wir oft Wahrheiten, die unsere eigene Fehlbarkeit übersteigen. Aber diese Antwort vermischt zwei sehr unterschiedliche Konzepte, die sorgfältig unterschieden werden müssen:",
      },
      distinction1: {
        en: "The capacity of a fallible individual to recognize or assent to truth, and",
        fr: "La capacité d'un individu faillible à reconnaître ou à consentir à la vérité, et",
        es: "La capacidad de un individuo falible para reconocer o asentir a la verdad, y",
        de: "Die Fähigkeit einer fehlbaren Person, Wahrheit zu erkennen oder ihr zuzustimmen, und",
      },
      distinction2: {
        en: "The requirement of an infallible mechanism or authority to <em>preserve</em> and <em>define</em> a body of infallible truth for the entire Church.",
        fr: "L'exigence d'un mécanisme ou d'une autorité infaillible pour <em>préserver</em> et <em>définir</em> un corps de vérité infaillible pour toute l'Église.",
        es: "El requisito de un mecanismo o autoridad infalible para <em>preservar</em> y <em>definir</em> un cuerpo de verdad infalible para toda la Iglesia.",
        de: "Die Anforderung eines unfehlbaren Mechanismus oder einer Autorität, um einen Körper unfehlbarer Wahrheit für die gesamte Kirche zu <em>bewahren</em> und zu <em>definieren</em>.",
      },
    },

    section3A: {
      h3: {
        en: "Recognizing Truth vs. Defining and Preserving Truth",
        fr: "Reconnaître la Vérité vs. Définir et Préserver la Vérité",
        es: "Reconocer la Verdad vs. Definir y Preservar la Verdad",
        de: "Wahrheit Erkennen vs. Wahrheit Definieren und Bewahren",
      },
      p1: {
        en: "Philosophically, the distinction is critical. It is one thing for a person, despite their own fallibility, to <em>believe</em> or <em>recognize</em> that a truth is true. It is quite another for a community to <em>establish with certainty</em> which propositions constitute that truth, especially when those propositions form the basis of faith and practice for millions across centuries.",
        fr: "Philosophiquement, la distinction est critique. C'est une chose pour une personne, malgré sa propre faillibilité, de <em>croire</em> ou <em>reconnaître</em> qu'une vérité est vraie. C'en est une autre pour une communauté d'<em>établir avec certitude</em> quelles propositions constituent cette vérité, surtout lorsque ces propositions forment la base de la foi et de la pratique pour des millions à travers les siècles.",
        es: "Filosóficamente, la distinción es crítica. Una cosa es que una persona, a pesar de su falibilidad, <em>crea</em> o <em>reconozca</em> que una verdad es cierta. Otra muy distinta es que una comunidad <em>establezca con certeza</em> qué proposiciones constituyen esa verdad, especialmente cuando esas proposiciones forman la base de la fe y la práctica a lo largo de los siglos.",
        de: "Philosophisch ist die Unterscheidung entscheidend. Es ist eine Sache für eine Person, trotz ihrer eigenen Fehlbarkeit, eine Wahrheit zu <em>glauben</em> oder zu <em>erkennen</em>. Es ist eine ganz andere Sache für eine Gemeinschaft, <em>mit Gewissheit festzulegen</em>, welche Aussagen diese Wahrheit ausmachen, insbesondere wenn diese Aussagen die Grundlage des Glaubens und der Praxis für Millionen über Jahrhunderte hinweg bilden.",
      },
      quote: {
        text: {
          en: '"Infallibility is the absence of error, not merely the possession of a true belief. While fallible persons can have true beliefs, reliably identifying a complete, inerrant canon requires a reliable, authoritative process."',
          fr: "« L'infaillibilité est l'absence d'erreur, pas simplement la possession d'une croyance vraie. Alors que des personnes faillibles peuvent avoir des croyances vraies, identifier de manière fiable un canon complet et sans erreur exige un processus fiable et faisant autorité. »",
          es: '"La infalibilidad es la ausencia de error, no meramente la posesión de una creencia verdadera. Mientras que las personas falibles pueden tener creencias verdaderas, identificar de manera fiable un canon completo e inerrante requiere un proceso fiable y autorizado."',
          de: '„Unfehlbarkeit ist die Abwesenheit von Irrtum, nicht bloß der Besitz einer wahren Überzeugung. Während fehlbare Personen wahre Überzeugungen haben können, erfordert die zuverlässige Identifizierung eines vollständigen, irrtumslosen Kanons einen zuverlässigen, autoritativen Prozess."',
        },
        source: {
          en: "Alvin Plantinga, Warranted Christian Belief, 2000",
          fr: "Alvin Plantinga, Warranted Christian Belief, 2000",
          es: "Alvin Plantinga, Warranted Christian Belief, 2000",
          de: "Alvin Plantinga, Warranted Christian Belief, 2000",
        },
      },
    },
    section3B: {
      h3: {
        en: "The Problem of Certainty in a Fallible Process",
        fr: "Le Problème de la Certitude dans un Processus Faillible",
        es: "El Problema de la Certeza en un Proceso Falible",
        de: "Das Problem der Gewissheit in einem Fehlbaren Prozess",
      },
      p1: {
        en: 'If the process by which the biblical canon was recognized was itself fallible—subject to error, disagreement, or human weakness—then the end result is only <em>probable</em> certainty about the canon, not absolute certainty. This introduces what philosophers call <strong class="text-white">epistemic uncertainty</strong>.',
        fr: "Si le processus par lequel le canon biblique a été reconnu était lui-même faillible—sujet à l'erreur, au désaccord ou à la faiblesse humaine—alors le résultat final n'est qu'une <em>probabilité</em> de certitude sur le canon, pas une certitude absolue. Cela introduit ce que les philosophes appellent l' <strong class=\"text-white\">incertitude épistémique</strong>.",
        es: 'Si el proceso por el cual se reconoció el canon bíblico fuera en sí mismo falible—sujeto a error, desacuerdo o debilidad humana—entonces el resultado final es solo <em>probable</em> certeza sobre el canon, no certeza absoluta. Esto introduce lo que los filósofos llaman <strong class="text-white">incertidumbre epistémica</strong>.',
        de: 'Wenn der Prozess, durch den der biblische Kanon erkannt wurde, selbst fehlbar wäre—fehlbar, dem Irrtum, der Uneinigkeit oder menschlicher Schwäche unterworfen—dann ist das Endergebnis nur <em>wahrscheinliche</em> Gewissheit über den Kanon, nicht absolute Gewissheit. Dies führt zu dem, was Philosophen die <strong class="text-white">epistemische Unsicherheit</strong> nennen.',
      },
      quote: {
        text: {
          en: '"Religious truths require a high standard of evidence; anything less than near certainty diminishes their authority and reliability."',
          fr: "«Les vérités religieuses exigent un niveau de preuve élevé ; tout ce qui est moins que la quasi-certitude diminue leur autorité et leur fiabilité.»",
          es: '"Las verdades religiosas requieren un alto estándar de evidencia; cualquier cosa menos que la casi certeza disminuye su autoridad y fiabilidad."',
          de: '„Religiöse Wahrheiten erfordern einen hohen Beweisstandard; alles, was weniger als annähernde Gewissheit ist, mindert ihre Autorität und Zuverlässigkeit."',
        },
        source: {
          en: "Richard Swinburne, The Existence of God, 2004",
          fr: "Richard Swinburne, The Existence of God, 2004",
          es: "Richard Swinburne, The Existence of God, 2004",
          de: "Richard Swinburne, The Existence of God, 2004",
        },
      },
      p2: {
        en: "This uncertainty has real consequences: if the Church's recognition of the canon is fallible, then the foundation of Christian faith—the Word of God—is on shaky ground. Faith, in the Catholic understanding, is not a leap into the unknown but an assent to revealed truth, guaranteed by divine authority.",
        fr: "Cette incertitude a des conséquences réelles : si la reconnaissance du canon par l'Église est faillible, alors le fondement de la foi chrétienne—la Parole de Dieu—est sur un terrain instable. La foi, dans la compréhension catholique, n'est pas un saut dans l'inconnu mais un assentiment à la vérité révélée, garantie par l'autorité divine.",
        es: "Esta incertidumbre tiene consecuencias reales: si el reconocimiento del canon por parte de la Iglesia es falible, entonces el fundamento de la fe cristiana—la Palabra de Dios—está en terreno inestable. La fe, en la comprensión católica, no es un salto a lo desconocido sino un asentimiento a la verdad revelada, garantizada por la autoridad divina.",
        de: "Diese Unsicherheit hat reale Konsequenzen: Wenn die Anerkennung des Kanons durch die Kirche fehlbar ist, dann steht das Fundament des christlichen Glaubens—das Wort Gottes—auf wackligem Boden. Der Glaube ist im katholischen Verständnis kein Sprung ins Ungewisse, sondern eine Zustimmung zur offenbarten Wahrheit, die durch göttliche Autorität gewährleistet wird.",
      },
    },
    section3C: {
      h3: {
        en: "Biblical and Patristic Support for an Infallible Church",
        fr: "Soutien Biblique et Patristique pour une Église Infaillible",
        es: "Soporte Bíblico y Patrístico para una Iglesia Infalible",
        de: "Biblische und Patristische Unterstützung für eine Unfehlbare Kirche",
      },
      p1: {
        en: 'Catholic theology holds that God, who inspired Scripture, did not abandon His people to human fallibility when it came to preserving His Word. Rather, He established a <strong class="text-white">living, Spirit-guided Church</strong> to guard and define the canon of Scripture with infallible authority.',
        fr: "La théologie catholique soutient que Dieu, qui a inspiré l'Écriture, n'a pas abandonné Son peuple à la faillibilité humaine lorsqu'il s'agissait de préserver Sa Parole. Au contraire, Il a établi une <strong class=\"text-white\">Église vivante, guidée par l'Esprit</strong> pour garder et définir le canon de l'Écriture avec une autorité infaillible.",
        es: 'La teología católica sostiene que Dios, que inspiró la Escritura, no abandonó a Su pueblo a la falibilidad humana cuando se trataba de preservar Su Palabra. Más bien, Él estableció una <strong class="text-white">Iglesia viva, guiada por el Espíritu</strong> para guardar y definir el canon de la Escritura con autoridad infalible.',
        de: 'Die katholische Theologie vertritt, dass Gott, der die Schrift inspiriert hat, Sein Volk nicht der menschlichen Fehlbarkeit überlassen hat, wenn es darum ging, Sein Wort zu bewahren. Vielmehr hat Er eine <strong class="text-white">lebendige, vom Geist geführte Kirche</strong> eingesetzt, um den Kanon der Schrift mit unfehlbarer Autorität zu hüten und zu definieren.',
      },
      p2: {
        en: "This is explicitly stated in Scripture itself. Consider Paul's instruction to Timothy:",
        fr: "Ceci est explicitement énoncé dans l'Écriture elle-même. Considérez l'instruction de Paul à Timothée :",
        es: "Esto se afirma explícitamente en la Escritura misma. Considere la instrucción de Pablo a Timoteo:",
        de: "Dies wird in der Schrift selbst explizit dargelegt. Betrachten Sie die Anweisung des Paulus an Timotheus:",
      },
      quote1: {
        text: {
          en: "If you put these things before the brothers, you will be a good servant of Christ Jesus, being trained in the words of the faith and of the good doctrine that you have followed. By the Holy Spirit who dwells within us, guard the good deposit entrusted to you.",
          fr: "Si tu mets ces choses devant les frères, tu seras un bon serviteur de Christ Jésus, étant nourri des paroles de la foi et de la bonne doctrine que tu as fidèlement suivie. Garde le bon dépôt qui t'a été confié, par le Saint-Esprit qui habite en nous.",
          es: "Si pones estas cosas delante de los hermanos, serás un buen ministro de Jesucristo, nutrido con las palabras de la fe y de la buena doctrina que has seguido. Guarda el buen depósito por el Espíritu Santo que mora en nosotros.",
          de: "Wenn du diese Dinge den Brüdern vorlegst, wirst du ein guter Diener Christi Jesu sein, auferzogen in den Worten des Glaubens und der guten Lehre, der du gefolgt bist. Bewahre das dir anvertraute Gut durch den Heiligen Geist, der in uns wohnt.",
        },
        source: {
          en: "2 Timothy 1:13-14",
          fr: "2 Timothée 1:13-14",
          es: "2 Timoteo 1:13-14",
          de: "2. Timotheus 1:13-14",
        },
      },
      p3: {
        en: "Similarly, Jesus promises in Matthew 18:17-18 that the Church has binding authority:",
        fr: "De même, Jésus promet dans Matthieu 18:17-18 que l'Église a une autorité contraignante :",
        es: "Similarmente, Jesús promete en Mateo 18:17-18 que la Iglesia tiene autoridad vinculante:",
        de: "Ebenso verspricht Jesus in Matthäus 18:17-18, dass die Kirche bindende Autorität hat:",
      },
      quote2: {
        text: {
          en: "If he refuses to listen even to the church, let him be to you as a Gentile and a tax collector. Truly, I say to you, whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven.",
          fr: "S'il refuse d'écouter même l'Église, qu'il soit pour toi comme un païen et un publicain. En vérité, je vous dis que tout ce que vous lierez sur la terre sera lié dans le ciel, et tout ce que vous délierez sur la terre sera délié dans le ciel.",
          es: "Si se niega a escuchar incluso a la iglesia, que sea para ti como un gentil y un publicano. De cierto os digo que todo lo que atéis en la tierra será atado en el cielo, y todo lo que desatéis en la tierra será desatado en el cielo.",
          de: "Wenn er sich weigert, auch auf die Gemeinde zu hören, so sei er für dich wie ein Heide und ein Zöllner. Wahrlich, ich sage euch: Was immer ihr auf Erden bindet, wird im Himmel gebunden sein, und was immer ihr auf Erden löst, wird im Himmel gelöst sein.",
        },
        source: {
          en: "Matthew 18:17-18",
          fr: "Matthieu 18:17-18",
          es: "Mateo 18:17-18",
          de: "Matthäus 18:17-18",
        },
      },
      p4: {
        en: "The Fathers of the Church echoed this understanding. St. Augustine wrote:",
        fr: "Les Pères de l'Église se sont fait l'écho de cette compréhension. Saint Augustin a écrit :",
        es: "Los Padres de la Iglesia se hicieron eco de esta comprensión. San Agustín escribió:",
        de: "Die Kirchenväter bekräftigten dieses Verständnis. Der heilige Augustinus schrieb:",
      },
      quote3: {
        text: {
          en: "The Church is not built on the shifting sands of human judgment, but upon the rock of Peter and the promise of Christ, where the Spirit of truth presides to keep her from error.",
          fr: "L'Église n'est pas bâtie sur les sables mouvants du jugement humain, mais sur le roc de Pierre et la promesse du Christ, où l'Esprit de vérité préside pour la préserver de l'erreur.",
          es: "La Iglesia no está construida sobre las arenas movedizas del juicio humano, sino sobre la roca de Pedro y la promesa de Cristo, donde el Espíritu de verdad preside para mantenerla a salvo del error.",
          de: "Die Kirche ist nicht auf dem schwankenden Sand menschlicher Urteile aufgebaut, sondern auf dem Felsen Petri und der Verheißung Christi, wo der Geist der Wahrheit präsidiert, um sie vor Irrtum zu bewahren.",
        },
        source: {
          en: "St. Augustine, On the Unity of the Church, 401 A.D.",
          fr: "Saint Augustin, De l'Unité de l'Église, 401 ap. J.-C.",
          es: "San Agustín, Sobre la Unidad de la Iglesia, 401 d.C.",
          de: "Hl. Augustinus, Über die Einheit der Kirche, 401 n. Chr.",
        },
      },
    },
    section3D: {
      h3: {
        en: "Recognizing the Need for Authority: Protestant Voices",
        fr: "Reconnaître le Besoin d'Autorité : Voix Protestantes",
        es: "Reconocer la Necesidad de Autoridad: Voces Protestantes",
        de: "Anerkennung der Notwendigkeit von Autorität: Protestantische Stimmen",
      },
      p1: {
        en: "Notably, some Protestant scholars have acknowledged difficulties with sola scriptura and the necessity for authoritative structures:",
        fr: "Notamment, certains érudits protestants ont reconnu les difficultés de la Sola Scriptura et la nécessité de structures d'autorité :",
        es: "Notablemente, algunos eruditos protestantes han reconocido dificultades con la sola scriptura y la necesidad de estructuras autoritativas:",
        de: "Anerkanntermaßen haben einige protestantische Gelehrte die Schwierigkeiten der Sola Scriptura und die Notwendigkeit autoritativer Strukturen anerkannt:",
      },
      scholar1: {
        name: {
          en: "R.C. Sproul",
          fr: "R.C. Sproul",
          es: "R.C. Sproul",
          de: "R.C. Sproul",
        },
        p1: {
          en: "a well-known Reformed theologian, admitted",
          fr: "un théologien réformé bien connu, a admis",
          es: "un conocido teólogo reformado, admitió",
          de: "ein bekannter reformierter Theologe, räumte ein",
        },
        quote: {
          text: {
            en: "While the Bible is the ultimate authority, the church plays a crucial role in discerning and interpreting Scripture. We cannot simply ignore the church's historical role in defining the canon.",
            fr: "Bien que la Bible soit l'autorité ultime, l'Église joue un rôle crucial dans le discernement et l'interprétation de l'Écriture. Nous ne pouvons pas simplement ignorer le rôle historique de l'Église dans la définition du canon.",
            es: "Aunque la Biblia es la autoridad suprema, la iglesia desempeña un papel crucial en el discernimiento e interpretación de la Escritura. No podemos simplemente ignorar el papel histórico de la iglesia en la definición del canon.",
            de: "Während die Bibel die ultimative Autorität ist, spielt die Kirche eine entscheidende Rolle bei der Unterscheidung und Interpretation der Schrift. Wir können die historische Rolle der Kirche bei der Definition des Kanons nicht einfach ignorieren.",
          },
          source: {
            en: "R.C. Sproul, Scripture Alone, 1995",
            fr: "R.C. Sproul, Scripture Alone, 1995",
            es: "R.C. Sproul, Scripture Alone, 1995",
            de: "R.C. Sproul, Scripture Alone, 1995",
          },
        },
      },
      scholar2: {
        name: {
          en: "Michael J. Kruger",
          fr: "Michael J. Kruger",
          es: "Michael J. Kruger",
          de: "Michael J. Kruger",
        },
        p1: {
          en: "a Protestant expert on the canon, writes",
          fr: "un expert protestant sur le canon, écrit",
          es: "un experto protestante en el canon, escribe",
          de: "ein protestantischer Experte für den Kanon, schreibt",
        },
        quote: {
          text: {
            en: "The formation of the canon was not a matter of private judgment but a corporate, ecclesial decision—showing that the church's authority was indispensable.",
            fr: "La formation du canon n'était pas une question de jugement privé mais une décision collégiale et ecclésiale—montrant que l'autorité de l'Église était indispensable.",
            es: "La formación del canon no fue una cuestión de juicio privado sino una decisión corporativa y eclesial—mostrando que la autoridad de la iglesia era indispensable.",
            de: "Die Bildung des Kanons war keine Frage des privaten Urteils, sondern eine korporative, kirchliche Entscheidung—was zeigt, dass die Autorität der Kirche unverzichtbar war.",
          },
          source: {
            en: "Michael J. Kruger, The Question of Canon, 2003",
            fr: "Michael J. Kruger, The Question of Canon, 2003",
            es: "Michael J. Kruger, The Question of Canon, 2003",
            de: "Michael J. Kruger, The Question of Canon, 2003",
          },
        },
      },
      scholar3: {
        name: {
          en: "Darrell L. Bock",
          fr: "Darrell L. Bock",
          es: "Darrell L. Bock",
          de: "Darrell L. Bock",
        },
        p1: {
          en: "concedes",
          fr: "concède",
          es: "concede",
          de: "räumt ein",
        },
        quote: {
          text: {
            en: "There was a recognized process, guided by the Spirit, that ensured the church did not err in its recognition of Scripture.",
            fr: "Il y avait un processus reconnu, guidé par l'Esprit, qui assurait que l'Église ne se trompe pas dans sa reconnaissance de l'Écriture.",
            es: "Hubo un proceso reconocido, guiado por el Espíritu, que aseguró que la iglesia no se equivocara en su reconocimiento de la Escritura.",
            de: "Es gab einen anerkannten, vom Geist geführten Prozess, der sicherstellte, dass die Kirche sich bei der Anerkennung der Schrift nicht irrte.",
          },
          source: {
            en: "Darrell L. Bock, The Canon of Scripture, 2007",
            fr: "Darrell L. Bock, The Canon of Scripture, 2007",
            es: "Darrell L. Bock, The Canon of Scripture, 2007",
            de: "Darrell L. Bock, The Canon of Scripture, 2007",
          },
        },
      },
      p2: {
        en: "These acknowledgments highlight that even Protestant scholarship sees the necessity of a reliable, Spirit-led authority in establishing the canon.",
        fr: "Ces reconnaissances soulignent que même l'érudition protestante voit la nécessité d'une autorité fiable et guidée par l'Esprit pour établir le canon.",
        es: "Estos reconocimientos resaltan que incluso la erudición protestante ve la necesidad de una autoridad fiable y guiada por el Espíritu para establecer el canon.",
        de: "Diese Anerkennungen unterstreichen, dass selbst die protestantische Wissenschaft die Notwendigkeit einer zuverlässigen, vom Geist geführten Autorität bei der Festlegung des Kanons sieht.",
      },
    },
    section3E: {
      h3: {
        en: "Philosophical Considerations on Authority and Infallibility",
        fr: "Considérations Philosophiques sur l'Autorité et l'Infaillibilité",
        es: "Consideraciones Filosóficas sobre la Autoridad y la Infalibilidad",
        de: "Philosophische Überlegungen zu Autorität und Unfehlbarkeit",
      },
      p1: {
        en: 'From a philosophical standpoint, consider the epistemological challenge of <strong class="text-white">foundationalism</strong>—the view that knowledge rests on certain basic, self-evident truths or reliable authorities. If the Church\'s authority to define the canon is not infallible, the entire foundation of Scripture becomes suspect.',
        fr: "D'un point de vue philosophique, considérez le défi épistémologique du <strong class=\"text-white\">fondationnalisme</strong>—la vue selon laquelle la connaissance repose sur certaines vérités de base, évidentes en soi ou sur des autorités fiables. Si l'autorité de l'Église pour définir le canon n'est pas infaillible, le fondement même de l'Écriture devient suspect.",
        es: 'Desde un punto de vista filosófico, considere el desafío epistemológico del <strong class="text-white">fundacionalismo</strong>—la visión de que el conocimiento se basa en ciertas verdades básicas, autoevidentes o autoridades fiables. Si la autoridad de la Iglesia para definir el canon no es infalible, la base misma de la Escritura se vuelve sospechosa.',
        de: 'Aus philosophischer Sicht betrachten Sie die erkenntnistheoretische Herausforderung des <strong class="text-white">Fundationalismus</strong>—die Ansicht, dass Wissen auf bestimmten grundlegenden, selbstverständlichen Wahrheiten oder zuverlässigen Autoritäten beruht. Wenn die Autorität der Kirche zur Definition des Kanons nicht unfehlbar ist, wird das gesamte Fundament der Schrift verdächtig.',
      },
      quote: {
        text: {
          en: '"An infallible Scripture requires an infallible interpreter. Without a stable, authoritative custodian, the Bible becomes a source of endless dispute and confusion."',
          fr: "« Une Écriture infaillible nécessite un interprète infaillible. Sans un gardien stable et faisant autorité, la Bible devient une source de disputes et de confusion sans fin. »",
          es: '"Una Escritura infalible requiere un intérprete infalible. Sin un custodio estable y autorizado, la Biblia se convierte en una fuente de disputa y confusión interminables."',
          de: '„Eine unfehlbare Schrift erfordert einen unfehlbaren Interpreten. Ohne einen stabilen, autoritativen Hüter wird die Bibel zu einer Quelle endloser Streitigkeiten und Verwirrung."',
        },
        source: {
          en: "Peter Kreeft, Catholic Christianity, 1987",
          fr: "Peter Kreeft, Catholic Christianity, 1987",
          es: "Peter Kreeft, Catholic Christianity, 1987",
          de: "Peter Kreeft, Catholic Christianity, 1987",
        },
      },
      p2: {
        en: "This leads to a regress problem: if the canon is identified by fallible historical investigation or individual judgment alone, who then determines the correctness of that investigation or judgment? Without an infallible arbiter, the process is unstable.",
        fr: "Cela mène à un problème de régression : si le canon est identifié uniquement par une investigation historique faillible ou un jugement individuel, qui détermine alors l'exactitude de cette investigation ou de ce jugement ? Sans arbitre infaillible, le processus est instable.",
        es: "Esto lleva a un problema de regresión: si el canon es identificado únicamente por una investigación histórica falible o un juicio individual, ¿quién determina entonces la exactitud de esa investigación o juicio? Sin un árbitro infalible, el proceso es inestable.",
        de: "Dies führt zu einem Regressproblem: Wenn der Kanon allein durch fehlbare historische Untersuchung oder individuelles Urteil identifiziert wird, wer bestimmt dann die Richtigkeit dieser Untersuchung oder dieses Urteils? Ohne einen unfehlbaren Schiedsrichter ist der Prozess instabil.",
      },
    },
    section3F: {
      h3: {
        en: "Summary: Why Infallibility Is Necessary to Recognize Infallible Truth",
        fr: "Résumé : Pourquoi l'Infaillibilité est Nécessaire pour Reconnaître la Vérité Infaillible",
        es: "Resumen: Por Qué la Infalibilidad es Necesaria para Reconocer la Verdad Infalible",
        de: "Zusammenfassung: Warum Unfehlbarkeit zur Erkennung Unfehlbarer Wahrheit Notwendig Ist",
      },
      li1: {
        en: "Recognizing infallible truth as an individual is possible despite personal fallibility.",
        fr: "Reconnaître la vérité infaillible en tant qu'individu est possible malgré la faillibilité personnelle.",
        es: "Reconocer la verdad infalible como individuo es posible a pesar de la falibilidad personal.",
        de: "Unfehlbare Wahrheit als Individuum zu erkennen ist trotz persönlicher Fehlbarkeit möglich.",
      },
      li2: {
        en: "Defining and preserving an infallible corpus of truth (the canon) for the entire Church requires a mechanism immune from error.",
        fr: "Définir et préserver un corpus de vérité infaillible (le canon) pour toute l'Église nécessite un mécanisme immunisé contre l'erreur.",
        es: "Definir y preservar un corpus de verdad infalible (el canon) para toda la Iglesia requiere un mecanismo inmune al error.",
        de: "Die Definition und Bewahrung eines unfehlbaren Wahrheitskorpus (des Kanons) für die gesamte Kirche erfordert einen Mechanismus, der gegen Irrtümer gefeit ist.",
      },
      li3: {
        en: "A fallible Church can only produce probable, not certain, recognition of the canon, undermining the authority of Scripture.",
        fr: "Une Église faillible ne peut produire qu'une reconnaissance probable, non certaine, du canon, minant ainsi l'autorité de l'Écriture.",
        es: "Una Iglesia falible solo puede producir un reconocimiento probable, no cierto, del canon, socavando la autoridad de la Escritura.",
        de: "Eine fehlbare Kirche kann nur eine wahrscheinliche, nicht aber eine sichere Anerkennung des Kanons hervorbringen, was die Autorität der Schrift untergräbt.",
      },
      li4: {
        en: "Catholic doctrine affirms that God instituted an infallible Church, guided by the Holy Spirit, to define and protect the biblical canon.",
        fr: "La doctrine catholique affirme que Dieu a institué une Église infaillible, guidée par le Saint-Esprit, pour définir et protéger le canon biblique.",
        es: "La doctrina católica afirma que Dios instituyó una Iglesia infalible, guiada por el Espíritu Santo, para definir y proteger el canon bíblico.",
        de: "Die katholische Lehre bekräftigt, dass Gott eine unfehlbare Kirche eingesetzt hat, die vom Heiligen Geist geleitet wird, um den biblischen Kanon zu definieren und zu schützen.",
      },
      li5: {
        en: "This divine guarantee ensures that the Bible we hold is truly the inspired, inerrant Word of God, providing a secure foundation for faith.",
        fr: "Cette garantie divine assure que la Bible que nous détenons est véritablement la Parole de Dieu inspirée et inerrante, offrant un fondement sûr pour la foi.",
        es: "Esta garantía divina asegura que la Biblia que tenemos es verdaderamente la Palabra de Dios inspirada e inerrante, proporcionando un fundamento seguro para la fe.",
        de: "Diese göttliche Garantie stellt sicher, dass die Bibel, die wir halten, wahrhaftig das inspirierte, irrtumslose Wort Gottes ist und eine sichere Grundlage für den Glauben bietet.",
      },
    },

    // Conclusion
    conclusion: {
      heading: {
        en: "Conclusion",
        fr: "Conclusion",
        es: "Conclusión",
        de: "Schlussfolgerung",
      },
      para1: {
        en: 'The question of the canon cannot be settled by fallacies or by historical guesswork. The "You Lose, So I Win" fallacy—so often used against Catholic claims—does not vindicate Sola Scriptura. <strong>Disproving one model of authority does not prove another.</strong>',
        fr: "La question du canon ne peut être réglée par des sophismes ou par des conjectures historiques. Le sophisme « Vous perdez, donc je gagne » — si souvent utilisé contre les revendications catholiques — ne justifie pas la Sola Scriptura. <strong>Réfuter un modèle d'autorité ne prouve pas un autre.</strong>",
        es: 'La cuestión del canon no puede resolverse mediante falacias o conjeturas históricas. La falacia "Tú pierdes, luego yo gano"—tan a menudo usada contra las afirmaciones católicas—no vindica Sola Scriptura. <strong>Refutar un modelo de autoridad no prueba otro.</strong>',
        de: 'Die Frage des Kanons kann nicht durch Fehlschlüsse oder historische Vermutungen geklärt werden. Der „Du verlierst, also gewinne ich" Fehlschluss — so oft gegen katholische Ansprüche verwendet — rechtfertigt Sola Scriptura nicht. <strong>Ein Autoritätsmodell zu widerlegen beweist kein anderes.</strong>',
      },
      para2: {
        en: 'And appealing to "scientific" or historical methods to define the canon can, at best, give us <strong>probability</strong>, not <strong>certainty</strong>. It leaves us with human opinion, not divine assurance.',
        fr: "Et faire appel à des méthodes « scientifiques » ou historiques pour définir le canon peut, au mieux, nous donner une <strong>probabilité</strong>, pas une <strong>certitude</strong>. Cela nous laisse avec l'opinion humaine, pas l'assurance divine.",
        es: 'Y apelar a métodos "científicos" o históricos para definir el canon puede, en el mejor de los casos, darnos <strong>probabilidad</strong>, no <strong>certeza</strong>. Nos deja con opinión humana, no seguridad divina.',
        de: 'Und sich auf „wissenschaftliche" oder historische Methoden zu berufen, um den Kanon zu definieren, kann uns bestenfalls <strong>Wahrscheinlichkeit</strong>, nicht <strong>Gewissheit</strong> geben. Es hinterlässt uns menschliche Meinung, nicht göttliche Gewissheit.',
      },
      para3: {
        en: "Ultimately, the Protestant position is caught in a dilemma: it claims a collection of infallible books, but admits to a <strong>fallible process</strong> by which those books were identified. That's a contradiction. And no amount of manuscript study or early church citations can resolve it.",
        fr: "En fin de compte, la position protestante est prise dans un dilemme : elle revendique une collection de livres infaillibles, mais admet un <strong>processus faillible</strong> par lequel ces livres ont été identifiés. C'est une contradiction. Et aucune quantité d'étude de manuscrits ou de citations de l'Église primitive ne peut la résoudre.",
        es: "En última instancia, la posición protestante está atrapada en un dilema: afirma una colección de libros infalibles, pero admite un <strong>proceso falible</strong> por el cual esos libros fueron identificados. Eso es una contradicción. Y ninguna cantidad de estudio de manuscritos o citas de la iglesia primitiva puede resolverlo.",
        de: "Letztlich ist die protestantische Position in einem Dilemma gefangen: Sie behauptet eine Sammlung unfehlbarer Bücher, gibt aber einen <strong>fehlbaren Prozess</strong> zu, durch den diese Bücher identifiziert wurden. Das ist ein Widerspruch. Und keine Menge an Manuskriptstudien oder frühkirchlichen Zitaten kann dies lösen.",
      },
      solutionHeading: {
        en: "The Catholic Solution",
        fr: "La Solution Catholique",
        es: "La Solución Católica",
        de: "Die Katholische Lösung",
      },
      solutionIntro: {
        en: "The Catholic solution is coherent and consistent:",
        fr: "La solution catholique est cohérente et constante :",
        es: "La solución católica es coherente y consistente:",
        de: "Die katholische Lösung ist kohärent und konsistent:",
      },
      solution1: {
        en: "God inspired the Scriptures.",
        fr: "Dieu a inspiré les Écritures.",
        es: "Dios inspiró las Escrituras.",
        de: "Gott hat die Schriften inspiriert.",
      },
      solution2: {
        en: "God guided His Church to recognize them.",
        fr: "Dieu a guidé Son Église pour les reconnaître.",
        es: "Dios guió a Su Iglesia para reconocerlas.",
        de: "Gott leitete Seine Kirche, sie zu erkennen.",
      },
      solution3: {
        en: "And God protects that Church from error in matters essential to salvation.",
        fr: "Et Dieu protège cette Église de l'erreur dans les matières essentielles au salut.",
        es: "Y Dios protege a esa Iglesia del error en asuntos esenciales para la salvación.",
        de: "Und Gott schützt diese Kirche vor Irrtümern in wesentlichen Heilsfragen.",
      },
      finalStatement: {
        en: "Only with an <strong>infallible authority</strong> can we be sure we have an <strong>infallible Bible</strong>.",
        fr: "Seulement avec une <strong>autorité infaillible</strong> pouvons-nous être sûrs d'avoir une <strong>Bible infaillible</strong>.",
        es: "Solo con una <strong>autoridad infalible</strong> podemos estar seguros de que tenemos una <strong>Biblia infalible</strong>.",
        de: "Nur mit einer <strong>unfehlbaren Autorität</strong> können wir sicher sein, dass wir eine <strong>unfehlbare Bibel</strong> haben.",
      },
    },

    // Bridge to Next Topic
    bridge: {
      heading: {
        en: "Moving Forward",
        fr: "Aller de l'Avant",
        es: "Avanzando",
        de: "Weitergehen",
      },
      para1: {
        en: "Understanding these logical fallacies helps us think more clearly about authority and truth. Now that we've seen how the \"You Lose, So I Win\" fallacy works, let's examine another common error in discussions of religious authority.",
        fr: "Comprendre ces sophismes logiques nous aide à penser plus clairement sur l'autorité et la vérité. Maintenant que nous avons vu comment fonctionne le sophisme « Vous perdez, donc je gagne », examinons une autre erreur courante dans les discussions sur l'autorité religieuse.",
        es: 'Entender estas falacias lógicas nos ayuda a pensar más claramente sobre la autoridad y la verdad. Ahora que hemos visto cómo funciona la falacia "Tú pierdes, luego yo gano", examinemos otro error común en las discusiones sobre la autoridad religiosa.',
        de: 'Das Verständnis dieser logischen Fehlschlüsse hilft uns, klarer über Autorität und Wahrheit nachzudenken. Jetzt, da wir gesehen haben, wie der „Du verlierst, also gewinne ich" Fehlschluss funktioniert, untersuchen wir einen weiteren häufigen Fehler in Diskussionen über religiöse Autorität.',
      },
      para2: {
        en: "The next fallacy we'll explore has important implications for understanding the relationship between Scripture and Tradition in Catholic teaching.",
        fr: "Le prochain sophisme que nous explorerons a des implications importantes pour comprendre la relation entre l'Écriture et la Tradition dans l'enseignement catholique.",
        es: "La próxima falacia que exploraremos tiene implicaciones importantes para entender la relación entre la Escritura y la Tradición en la enseñanza católica.",
        de: "Der nächste Fehlschluss, den wir untersuchen werden, hat wichtige Implikationen für das Verständnis der Beziehung zwischen Schrift und Tradition in der katholischen Lehre.",
      },
    },
  },

  // Authority Dilemma Topic
  authorityDilemma: {
    // Hero
    title: {
      en: "The Authority Dilemma",
      fr: "Le Dilemme de l'Autorité",
      es: "El Dilema de la Autoridad",
      de: "Das Autoritätsdilemma",
    },
    subtitle: {
      en: "How Can We Know with Certainty What God Has Revealed?",
      fr: "Comment savoir avec certitude ce que Dieu a révélé ?",
      es: "¿Cómo podemos saber con certeza lo que Dios ha revelado?",
      de: "Wie können wir mit Gewissheit wissen, was Gott offenbart hat?",
    },
    quote: {
      en: "So then, brothers and sisters, stand firm and hold fast to the traditions you were taught by us, either by our spoken word or by our letter.",
      fr: "Ainsi donc, frères et soeurs, tenez ferme et gardez les traditions que vous avez apprises de nous, soit par la parole, soit par notre lettre.",
      es: "Así que, hermanos, estad firmes y conservad las tradiciones que os fueron enseñadas, ya de palabra, ya por carta nuestra.",
      de: "Also, Brüder und Schwestern, steht fest und haltet euch an die Überlieferungen, die ihr von uns gelehrt worden seid, sei es durch Wort oder durch Brief.",
    },
    quoteSource: {
      en: "2 Thessalonians 2:15",
      fr: "2 Thessaloniciens 2:15",
      es: "2 Tesalonicenses 2:15",
      de: "2 Thessalonicher 2:15",
    },

    // Intro
    intro: {
      p1: {
        en: "Every Christian seeks to follow the truth of God as revealed through Jesus Christ. But a fundamental and often overlooked question must first be asked:",
        fr: "Tout chrétien cherche à suivre la vérité de Dieu révélée par Jésus-Christ. Mais une question fondamentale et souvent négligée doit d’abord être posée :",
        es: "Todo cristiano busca seguir la verdad de Dios revelada por Jesucristo. Pero primero debe plantearse una cuestión fundamental que a menudo se pasa por alto:",
        de: "Jeder Christ möchte der Wahrheit Gottes folgen, die durch Jesus Christus offenbart wurde. Doch zuvor muss eine grundlegende und oft übersehene Frage gestellt werden:",
      },
      q: {
        en: "How does God communicate His truth infallibly to His people?",
        fr: "Comment Dieu communique-t-il infailliblement sa vérité à son peuple ?",
        es: "¿Cómo comunica Dios su verdad de manera infalible a su pueblo?",
        de: "Wie teilt Gott seinem Volk seine Wahrheit unfehlbar mit?",
      },
      p2: {
        en: 'This leads us to what may be called the "authority dilemma." It is not simply a debate between denominations; it is a question about epistemology: how do we know what we know about the faith? Is there a divinely established method for arriving at truth in matters of doctrine, morals, and salvation?',
        fr: "Cela nous conduit à ce que l’on peut appeler le « dilemme de l’autorité ». Ce n’est pas simplement un débat entre confessions ; c’est une question d’épistémologie : comment savons-nous ce que nous savons de la foi ? Existe-t-il une méthode établie par Dieu pour parvenir à la vérité en matière de doctrine, de morale et de salut ?",
        es: "Esto nos lleva a lo que puede llamarse el “dilema de la autoridad”. No es simplemente un debate entre denominaciones; es una cuestión epistemológica: ¿cómo sabemos lo que sabemos sobre la fe? ¿Existe un método establecido por Dios para alcanzar la verdad en materia de doctrina, moral y salvación?",
        de: "Das führt zu dem sogenannten „Autoritätsdilemma“. Es ist nicht nur eine konfessionelle Debatte, sondern eine erkenntnistheoretische Frage: Wie wissen wir, was wir über den Glauben wissen? Gibt es einen von Gott gesetzten Weg, um in Fragen von Lehre, Moral und Heil zur Wahrheit zu gelangen?",
      },
      p3: {
        en: "The debate ultimately concerns how many infallible rules of faith God instituted for His Church.",
        fr: "Le débat porte finalement sur le nombre de règles infaillibles de foi que Dieu a instituées pour son Église.",
        es: "El debate trata en última instancia de cuántas reglas infalibles de fe instituyó Dios para su Iglesia.",
        de: "Letztlich geht es darum, wie viele unfehlbare Glaubensregeln Gott für seine Kirche eingesetzt hat.",
      },
    },

    // Section I
    section1: {
      heading: {
        en: "I. Competing Models of Authority",
        fr: "I. Modèles d’Autorité en Concurrence",
        es: "I. Modelos de Autoridad en Competencia",
        de: "I. Konkurrenzmodelle von Autorität",
      },
      p1: {
        en: "Historically, four primary models have been offered by different Christian traditions:",
        fr: "Historiquement, quatre modèles principaux ont été proposés par différentes traditions chrétiennes :",
        es: "Históricamente, diferentes tradiciones cristianas han propuesto cuatro modelos principales:",
        de: "Historisch wurden von verschiedenen christlichen Traditionen vier Hauptmodelle vorgeschlagen:",
      },
      callout: {
        en: "Which of these models is internally consistent, historically grounded, and theologically coherent?",
        fr: "Lequel de ces modèles est cohérent intérieurement, fondé historiquement et théologiquement cohérent ?",
        es: "¿Cuál de estos modelos es internamente coherente, con fundamento histórico y teológicamente coherente?",
        de: "Welches dieser Modelle ist innerlich stimmig, historisch fundiert und theologisch kohärent?",
      },
    },

    // Model cards
    models: {
      model3: {
        title: {
          en: "Three Infallible Rules of Faith",
          fr: "Trois Règles Infaillibles de la Foi",
          es: "Tres Reglas Infalibles de la Fe",
          de: "Drei unfehlbare Glaubensregeln",
        },
        tradition: {
          en: "Catholic Position",
          fr: "Position catholique",
          es: "Posición católica",
          de: "Katholische Position",
        },
        items: {
          scripture: {
            en: "Sacred Scripture - the written Word of God, inspired and without error",
            fr: "Écriture Sainte - la Parole de Dieu écrite, inspirée et sans erreur",
            es: "Sagrada Escritura - la Palabra de Dios escrita, inspirada y sin error",
            de: "Heilige Schrift - das geschriebene Wort Gottes, inspiriert und irrtumslos",
          },
          tradition: {
            en: "Sacred Tradition - the oral teaching of the apostles, faithfully handed down",
            fr: "Tradition Sainte - l’enseignement oral des apôtres, transmis fidèlement",
            es: "Sagrada Tradición - la enseñanza oral de los apóstoles, transmitida fielmente",
            de: "Heilige Tradition - die mündliche Lehre der Apostel, treu überliefert",
          },
          magisterium: {
            en: "The Magisterium - the teaching authority of the Church, guided by the Holy Spirit",
            fr: "Le Magistère - l’autorité enseignante de l’Église, guidée par l’Esprit Saint",
            es: "El Magisterio - la autoridad docente de la Iglesia, guiada por el Espíritu Santo",
            de: "Das Lehramt - die Lehrvollmacht der Kirche, vom Heiligen Geist geführt",
          },
        },
      },
      model2: {
        title: {
          en: "Two Infallible Rules of Faith",
          fr: "Deux Règles Infaillibles de la Foi",
          es: "Dos Reglas Infalibles de la Fe",
          de: "Zwei unfehlbare Glaubensregeln",
        },
        tradition: {
          en: "Eastern Orthodox Position",
          fr: "Position orthodoxe orientale",
          es: "Posición ortodoxa oriental",
          de: "Ostkirchliche Position",
        },
        items: {
          eq: {
            en: "Scripture and Tradition are viewed as coequal and inseparable",
            fr: "L’Écriture et la Tradition sont considérées comme coégales et inséparables",
            es: "La Escritura y la Tradición se consideran coiguales e inseparables",
            de: "Schrift und Tradition gelten als gleichrangig und untrennbar",
          },
          noCentralMag: {
            en: "However, no central Magisterium with universal binding authority",
            fr: "Cependant, pas de magistère central avec autorité universelle contraignante",
            es: "Sin embargo, no hay un Magisterio central con autoridad vinculante universal",
            de: "Jedoch kein zentrales Lehramt mit universaler Bindungsgewalt",
          },
        },
      },
      model1: {
        title: {
          en: "One Infallible Rule of Faith",
          fr: "Une Règle Infaillible de la Foi",
          es: "Una Regla Infalible de la Fe",
          de: "Eine unfehlbare Glaubensregel",
        },
        tradition: {
          en: "Protestant Position",
          fr: "Position protestante",
          es: "Posición protestante",
          de: "Protestantische Position",
        },
        items: {
          solaScriptura: {
            en: "Sola Scriptura - Scripture alone is the sole infallible authority",
            fr: "Sola Scriptura - l’Écriture seule est l’unique autorité infaillible",
            es: "Sola Scriptura - la Escritura sola es la única autoridad infalible",
            de: "Sola Scriptura - die Schrift allein ist die einzige unfehlbare Autorität",
          },
        },
      },
      model0: {
        title: {
          en: "Zero Infallible Rules",
          fr: "Zéro Règle Infaillible",
          es: "Cero Reglas Infalibles",
          de: "Null unfehlbare Regeln",
        },
        tradition: {
          en: "Progressive or Liberal Theologies",
          fr: "Théologies progressistes ou libérales",
          es: "Teologías progresistas o liberales",
          de: "Progressive oder liberale Theologien",
        },
        items: {
          evolving: {
            en: "Religious truth seen as evolving",
            fr: "La vérité religieuse est considérée comme évolutive",
            es: "La verdad religiosa se considera evolutiva",
            de: "Religiöse Wahrheit wird als wandelbar gesehen",
          },
          altAuthority: {
            en: "Authority in personal experience, reason, or communal consensus",
            fr: "Autorité dans l’expérience personnelle, la raison ou le consensus communautaire",
            es: "Autoridad en la experiencia personal, la razón o el consenso comunitario",
            de: "Autorität in persönlicher Erfahrung, Vernunft oder Gemeinschaftskonsens",
          },
        },
      },
    },

    // Section II
    section2: {
      heading: {
        en: "II. The Collapse of Sola Scriptura",
        fr: "II. L’Effondrement de la Sola Scriptura",
        es: "II. El Colapso de la Sola Scriptura",
        de: "II. Der Zusammenbruch von Sola Scriptura",
      },
      p1: {
        title: {
          en: "1. Sola Scriptura is Self-Refuting",
          fr: "1. Sola Scriptura est auto-réfutante",
          es: "1. Sola Scriptura es auto-refutante",
          de: "1. Sola Scriptura widerlegt sich selbst",
        },
        lead: {
          en: "A principle that claims to be the sole infallible authority must be taught clearly in Scripture. However:",
          fr: "Un principe qui prétend être la seule autorité infaillible doit être enseigné clairement dans l’Écriture. Pourtant :",
          es: "Un principio que afirma ser la única autoridad infalible debe estar claramente enseñado en la Escritura. Sin embargo:",
          de: "Ein Prinzip, das die einzige unfehlbare Autorität sein will, muss in der Schrift klar gelehrt werden. Jedoch:",
        },
        b1: {
          en: 'Scripture never states "Scripture alone is the rule of faith."',
          fr: 'L’Écriture n’affirme jamais "l’Écriture seule est la règle de foi".',
          es: 'La Escritura nunca dice "la Escritura sola es la regla de fe".',
          de: 'Die Schrift sagt nie "allein die Schrift ist die Glaubensregel".',
        },
        b2: {
          en: "The Bible affirms oral tradition (cf. 2 Thessalonians 2:15).",
          fr: "La Bible affirme la tradition orale (cf. 2 Thessaloniciens 2:15).",
          es: "La Biblia afirma la tradición oral (cf. 2 Tesalonicenses 2:15).",
          de: "Die Bibel bekräftigt die mündliche Überlieferung (vgl. 2 Thessalonicher 2:15).",
        },
        madridQuote: {
          en: "A rule of faith that is not found in the rule of faith cannot be the rule of faith.",
          fr: "Une règle de foi qui ne se trouve pas dans la règle de foi ne peut pas être la règle de foi.",
          es: "Una regla de fe que no se encuentra en la regla de fe no puede ser la regla de fe.",
          de: "Eine Glaubensregel, die nicht in der Glaubensregel zu finden ist, kann nicht die Glaubensregel sein.",
        },
        madridSource: {
          en: "Patrick Madrid",
          fr: "Patrick Madrid",
          es: "Patrick Madrid",
          de: "Patrick Madrid",
        },
      },
      p2: {
        title: {
          en: "2. The Problem of Interpretation",
          fr: "2. Le Problème de l’Interprétation",
          es: "2. El Problema de la Interpretación",
          de: "2. Das Problem der Auslegung",
        },
        lead: {
          en: "Protestantism has produced thousands of denominations with differing interpretations.",
          fr: "Le protestantisme a produit des milliers de dénominations avec des interprétations divergentes.",
          es: "El protestantismo ha producido miles de denominaciones con interpretaciones diferentes.",
          de: "Der Protestantismus hat Tausende von Konfessionen mit unterschiedlichen Auslegungen hervorgebracht.",
        },
        b1: {
          en: "If the Bible is clear and self-sufficient, why so much division?",
          fr: "Si la Bible est claire et suffisante, pourquoi tant de divisions ?",
          es: "Si la Biblia es clara y autosuficiente, ¿por qué tanta división?",
          de: "Wenn die Bibel klar und ausreichend ist, warum so viele Spaltungen?",
        },
        b2: {
          en: "Who determines the correct interpretation?",
          fr: "Qui détermine l’interprétation correcte ?",
          es: "¿Quién determina la interpretación correcta?",
          de: "Wer bestimmt die richtige Auslegung?",
        },
        tail: {
          en: "Without a central authority, personal interpretation becomes the final arbiter.",
          fr: "Sans autorité centrale, l’interprétation personnelle devient l’arbitre final.",
          es: "Sin autoridad central, la interpretación personal se convierte en el árbitro final.",
          de: "Ohne zentrale Autorität wird die persönliche Auslegung zum letzten Schiedsrichter.",
        },
      },
      p3: {
        title: {
          en: "3. Scripture Was Never Alone in Early Christianity",
          fr: "3. L’Écriture n’était jamais seule dans le christianisme primitif",
          es: "3. La Escritura nunca estuvo sola en el cristianismo primitivo",
          de: "3. Die Schrift stand im frühen Christentum nie allein",
        },
        b1: {
          en: "The New Testament was not complete in the apostolic era.",
          fr: "Le Nouveau Testament n’était pas complet à l’époque apostolique.",
          es: "El Nuevo Testamento no estaba completo en la era apostólica.",
          de: "Das Neue Testament war in der apostolischen Zeit nicht vollständig.",
        },
        b2: {
          en: "Oral teaching preceded written texts.",
          fr: "L’enseignement oral a précédé les textes écrits.",
          es: "La enseñanza oral precedió a los textos escritos.",
          de: "Mündliche Lehre ging den schriftlichen Texten voraus.",
        },
        papiasQuote: {
          en: "I did not think that information from books would profit me as much as what came from a living and abiding voice.",
          fr: "Je ne pensais pas que les informations tirées des livres me profiteraient autant que ce qui venait d’une voix vivante et permanente.",
          es: "No pensé que la información de los libros me beneficiaría tanto como lo que proviene de una voz viva y permanente.",
          de: "Ich hielt die Auskunft aus Büchern nicht für so nützlich wie die einer lebendigen und bleibenden Stimme.",
        },
        papiasSource: {
          en: "Papias (early 2nd century)",
          fr: "Papias (début du IIe siècle)",
          es: "Papías (principios del siglo II)",
          de: "Papias (frühes 2. Jh.)",
        },
      },
      link: {
        heading: {
          en: "In-depth view of the Sola Scriptura problem",
          fr: "Vue approfondie du problème de la Sola Scriptura",
          es: "Visión en profundidad del problema de la Sola Scriptura",
          de: "Tiefere Betrachtung des Sola-Scriptura-Problems",
        },
        text: {
          en: "For a more detailed examination of why Scripture alone cannot serve as the sole rule of faith, see the dedicated topics on Sola Scriptura elsewhere in this journey.",
          fr: "Pour un examen plus détaillé des raisons pour lesquelles l’Écriture seule ne peut pas servir de seule règle de foi, voir les sujets dédiés à la Sola Scriptura ailleurs dans ce parcours.",
          es: "Para un examen más detallado de por qué la Escritura sola no puede servir como la única regla de fe, consulte los temas dedicados a Sola Scriptura en este recorrido.",
          de: "Für eine detailliertere Betrachtung, warum die Schrift allein nicht die einzige Glaubensregel sein kann, siehe die speziellen Themen zu Sola Scriptura in diesem Weg.",
        },
      },
    },

    // Section III
    section3: {
      heading: {
        en: "III. The Canon Dilemma",
        fr: "III. Le Dilemme du Canon",
        es: "III. El Dilema del Canon",
        de: "III. Das Kanon-Dilemma",
      },
      lead: {
        en: "Sola Scriptura assumes a fixed canon of inspired Scripture. But:",
        fr: "Sola Scriptura suppose un canon fixe de l’Écriture inspirée. Mais :",
        es: "Sola Scriptura supone un canon fijo de Escritura inspirada. Pero:",
        de: "Sola Scriptura setzt einen festen Kanon der inspirierten Schrift voraus. Aber:",
      },
      p1: {
        title: {
          en: "1. Scripture Does Not List Its Own Books",
          fr: "1. L’Écriture ne liste pas ses propres livres",
          es: "1. La Escritura no enumera sus propios libros",
          de: "1. Die Schrift listet ihre eigenen Bücher nicht auf",
        },
        b1: {
          en: "No biblical book defines the full list of canonical texts.",
          fr: "Aucun livre biblique ne définit la liste complète des textes canoniques.",
          es: "Ningún libro bíblico define la lista completa de textos canónicos.",
          de: "Kein biblisches Buch nennt die vollständige Liste der kanonischen Texte.",
        },
        b2: {
          en: "Why are certain early Christian texts excluded?",
          fr: "Pourquoi certains textes chrétiens anciens sont-ils exclus ?",
          es: "¿Por qué se excluyen ciertos textos cristianos antiguos?",
          de: "Warum sind bestimmte frühe christliche Texte ausgeschlossen?",
        },
      },
      p2: {
        title: {
          en: "2. Who Finalized the Canon?",
          fr: "2. Qui a fixé le canon ?",
          es: "2. ¿Quién finalizó el canon?",
          de: "2. Wer hat den Kanon festgelegt?",
        },
        through: {
          en: "Through:",
          fr: "Par :",
          es: "Por medio de:",
          de: "Durch:",
        },
        l1: {
          en: "Apostolic Tradition",
          fr: "Tradition apostolique",
          es: "Tradición apostólica",
          de: "Apostolische Überlieferung",
        },
        l2: {
          en: "Ecclesial discernment",
          fr: "Discernement ecclésial",
          es: "Discernimiento eclesial",
          de: "Kirchliches Unterscheidungsvermögen",
        },
        l3: {
          en: "Liturgical usage",
          fr: "Usage liturgique",
          es: "Uso litúrgico",
          de: "Liturgischer Gebrauch",
        },
        councilsLabel: {
          en: "Councils that affirmed the canon:",
          fr: "Conciles qui ont confirmé le canon :",
          es: "Concilios que afirmaron el canon:",
          de: "Konzilien, die den Kanon bestätigten:",
        },
        councils1: {
          en: "Rome (382), Hippo (393), Carthage (397, 419)",
          fr: "Rome (382), Hippone (393), Carthage (397, 419)",
          es: "Roma (382), Hipona (393), Cartago (397, 419)",
          de: "Rom (382), Hippo (393), Karthago (397, 419)",
        },
        councils2: {
          en: "Confirmed at Trent (1546)",
          fr: "Confirmé au Concile de Trente (1546)",
          es: "Confirmado en Trento (1546)",
          de: "Bestätigt in Trient (1546)",
        },
      },
      p3: {
        title: {
          en: "3. Protestant Inconsistency",
          fr: "3. Incohérence protestante",
          es: "3. Inconsistencia protestante",
          de: "3. Protestantische Inkonsequenz",
        },
        b1: {
          en: "The canon is accepted, but not the Church that discerned it.",
          fr: "Le canon est accepté, mais pas l'Église qui l'a discerné.",
          es: "Se acepta el canon, pero no la Iglesia que lo discernió.",
          de: "Der Kanon wird akzeptiert, aber nicht die Kirche, die ihn erkannt hat.",
        },
        b2: {
          en: "Either the Church was divinely guided or the canon remains questionable.",
          fr: "Soit l'Église a été divinement guidée, soit le canon reste discutable.",
          es: "O la Iglesia fue divinamente guiada o el canon sigue siendo cuestionable.",
          de: "Entweder war die Kirche göttlich geführt, oder der Kanon bleibt fraglich.",
        },
      },
      link: {
        heading: {
          en: "In-depth view of the Canon Dilemma",
          fr: "Vue approfondie du dilemme du canon",
          es: "Visión en profundidad del dilema del canon",
          de: "Tiefere Betrachtung des Kanon-Dilemmas",
        },
        text: {
          en: "For a comprehensive examination of how the biblical canon was established and why it requires Church authority, see the dedicated Canon topics in this journey.",
          fr: "Pour un examen complet de l’établissement du canon biblique et des raisons pour lesquelles il requiert l’autorité de l’Église, voir les sujets dédiés au canon dans ce parcours.",
          es: "Para un examen completo de cómo se estableció el canon bíblico y por qué requiere la autoridad de la Iglesia, consulte los temas dedicados al canon en este recorrido.",
          de: "Für eine umfassende Betrachtung, wie der biblische Kanon festgelegt wurde und warum er kirchliche Autorität erfordert, siehe die entsprechenden Themen in diesem Weg.",
        },
      },
    },

    // Section IV
    section4: {
      heading: {
        en: "IV. The Catholic Resolution: Threefold Infallible Authority",
        fr: "IV. La solution catholique : triple autorité infaillible",
        es: "IV. La solución católica: triple autoridad infalible",
        de: "IV. Die katholische Lösung: dreifache unfehlbare Autorität",
      },
      lead: {
        en: "Christ established three unified, divinely protected sources:",
        fr: "Le Christ a établi trois sources unifiées et divinement protégées :",
        es: "Cristo estableció tres fuentes unificadas y protegidas divinamente:",
        de: "Christus begründete drei vereinte, göttlich geschützte Quellen:",
      },
      card1: {
        title: {
          en: "Sacred Scripture",
          fr: "Écriture Sainte",
          es: "Sagrada Escritura",
          de: "Heilige Schrift",
        },
        text: {
          en: "The written Word of God, inspired by the Holy Spirit and inerrant in matters of faith and morals.",
          fr: "La Parole de Dieu écrite, inspirée par l'Esprit Saint et inerrante en matière de foi et de morale.",
          es: "La Palabra de Dios escrita, inspirada por el Espíritu Santo e inerrante en materia de fe y moral.",
          de: "Das geschriebene Wort Gottes, vom Heiligen Geist inspiriert und in Glauben und Moral irrtumslos.",
        },
      },
      card2: {
        title: {
          en: "Sacred Tradition",
          fr: "Tradition Sainte",
          es: "Sagrada Tradición",
          de: "Heilige Tradition",
        },
        text: {
          en: "The living transmission of the Gospel, passed down from the apostles through the Church.",
          fr: "La transmission vivante de l'Évangile, transmise des apôtres par l'Église.",
          es: "La transmisión viva del Evangelio, transmitida por los apóstoles a través de la Iglesia.",
          de: "Die lebendige Überlieferung des Evangeliums, von den Aposteln durch die Kirche weitergegeben.",
        },
      },
      card3: {
        title: {
          en: "The Magisterium",
          fr: "Le Magistère",
          es: "El Magisterio",
          de: "Das Lehramt",
        },
        text: {
          en: "The teaching authority of the Church, guided by the Holy Spirit to interpret Scripture and Tradition.",
          fr: "L'autorité enseignante de l'Église, guidée par l'Esprit Saint pour interpréter l'Écriture et la Tradition.",
          es: "La autoridad docente de la Iglesia, guiada por el Espíritu Santo para interpretar la Escritura y la Tradición.",
          de: "Die Lehrvollmacht der Kirche, vom Heiligen Geist geführt, Schrift und Tradition auszulegen.",
        },
      },
      quote: {
        en: "Sacred tradition, Sacred Scripture and the teaching authority of the Church are so linked that one cannot stand without the others.",
        fr: "La sainte tradition, la sainte Écriture et l'autorité enseignante de l'Église sont si liées que l'une ne peut se maintenir sans les autres.",
        es: "La sagrada tradición, la Sagrada Escritura y la autoridad docente de la Iglesia están tan unidas que una no puede sostenerse sin las otras.",
        de: "Die heilige Überlieferung, die Heilige Schrift und die Lehrvollmacht der Kirche sind so verbunden, dass eine ohne die anderen nicht bestehen kann.",
      },
      quoteSource: {
        en: "Vatican II, Dei Verbum, §10",
        fr: "Vatican II, Dei Verbum, §10",
        es: "Vaticano II, Dei Verbum, §10",
        de: "Zweites Vatikanisches Konzil, Dei Verbum, §10",
      },
    },

    // Section V
    section5: {
      heading: {
        en: "V. Testimony from the Early Church Fathers",
        fr: "V. Témoignage des Pères de l’Église",
        es: "V. Testimonio de los Padres de la Iglesia",
        de: "V. Zeugnis der Kirchenväter",
      },
      st: {
        heading: {
          en: "On Scripture and Tradition:",
          fr: "Sur l’Écriture et la Tradition :",
          es: "Sobre la Escritura y la Tradición:",
          de: "Über Schrift und Tradition:",
        },
        irenaeusLabel: {
          en: "Irenaeus, Against Heresies (c. 180 AD):",
          fr: "Irénée, Contre les hérésies (vers 180) :",
          es: "Ireneo, Contra las Herejías (c. 180):",
          de: "Irenäus, Gegen die Häresien (ca. 180):",
        },
        irenaeusQ1: {
          en: "It is possible to contemplate the tradition of the apostles which has been made known throughout the whole world.",
          fr: "Il est possible de contempler la tradition des apôtres qui a été rendue connue dans le monde entier.",
          es: "Es posible contemplar la tradición de los apóstoles que se ha dado a conocer en todo el mundo.",
          de: "Es ist möglich, die Überlieferung der Apostel zu betrachten, die in der ganzen Welt bekannt gemacht wurde.",
        },
        irenaeusQ2: {
          en: "The Church, having received this preaching and this faith from the apostles, carefully preserves it, not changing nor subtracting anything.",
          fr: "Ayant reçu cette prédication et cette foi des apôtres, l’Église la conserve avec soin, sans rien changer ni retrancher.",
          es: "La Iglesia, habiendo recibido esta predicación y esta fe de los apóstoles, la conserva cuidadosamente, sin cambiar ni restar nada.",
          de: "Die Kirche hat diese Verkündigung und diesen Glauben von den Aposteln empfangen und bewahrt ihn sorgfältig, ohne etwas zu ändern oder zu verringern.",
        },
      },
      as: {
        heading: {
          en: "On Apostolic Succession:",
          fr: "Sur la succession apostolique :",
          es: "Sobre la sucesión apostólica:",
          de: "Über die apostolische Sukzession:",
        },
        clementLabel: {
          en: "Clement of Rome (c. 96 AD):",
          fr: "Clément de Rome (vers 96) :",
          es: "Clemente de Roma (c. 96):",
          de: "Klemens von Rom (ca. 96):",
        },
        clementQ: {
          en: "Our Apostles appointed their first converts and directed that when these men should fall asleep, others should succeed them.",
          fr: "Nos Apôtres ont établi leurs premiers convertis et ont ordonné que lorsque ces hommes s’endormiraient, d’autres leur succéderaient.",
          es: "Nuestros Apóstoles nombraron a sus primeros conversos y ordenaron que cuando estos murieran, otros les sucedieran.",
          de: "Unsere Apostel setzten ihre ersten Bekehrten ein und bestimmten, dass, wenn diese entschlafen, andere ihnen nachfolgen sollen.",
        },
        ignatiusLabel: {
          en: "Ignatius of Antioch (c. 110 AD):",
          fr: "Ignace d’Antioche (vers 110) :",
          es: "Ignacio de Antioquía (c. 110):",
          de: "Ignatius von Antiochien (ca. 110):",
        },
        ignatiusQ: {
          en: "Where the bishop is, there is the Catholic Church.",
          fr: "Là où est l’évêque, là est l’Église catholique.",
          es: "Donde está el obispo, allí está la Iglesia católica.",
          de: "Wo der Bischof ist, dort ist die katholische Kirche.",
        },
      },
    },

    // Conclusion and Bridge
    conclusion: {
      heading: {
        en: "Conclusion: Reframing the Question of Religious Truth",
        fr: "Conclusion : Repenser la question de la vérité religieuse",
        es: "Conclusión: replantear la cuestión de la verdad religiosa",
        de: "Schluss: Die Frage der religiösen Wahrheit neu fassen",
      },
      lead1: {
        en: "The true question is not simply:",
        fr: "La vraie question n’est pas simplement :",
        es: "La verdadera pregunta no es simplemente:",
        de: "Die eigentliche Frage lautet nicht einfach:",
      },
      q1: {
        en: '"Is Protestantism true?"',
        fr: '"Le protestantisme est-il vrai ?"',
        es: '"¿Es verdadero el protestantismo?"',
        de: '"Ist der Protestantismus wahr?"',
      },
      q2: {
        en: '"Is Catholicism true?"',
        fr: '"Le catholicisme est-il vrai ?"',
        es: '"¿Es verdadero el catolicismo?"',
        de: '"Ist der Katholizismus wahr?"',
      },
      lead2: {
        en: "But rather: If Jesus established a Church, how does He communicate His truth in a way that is binding, objective, and infallible?",
        fr: "Mais plutôt : si Jésus a fondé une Église, comment communique-t-Il sa vérité de manière contraignante, objective et infaillible ?",
        es: "Sino más bien: si Jesús estableció una Iglesia, ¿cómo comunica su verdad de manera vinculante, objetiva e infalible?",
        de: "Sondern: Wenn Jesus eine Kirche gegründet hat, wie teilt Er seine Wahrheit verbindlich, objektiv und unfehlbar mit?",
      },
      keys: {
        heading: {
          en: "Key Conclusions:",
          fr: "Conclusions clés :",
          es: "Conclusiones clave:",
          de: "Zentrale Schlussfolgerungen:",
        },
        k1Title: {
          en: "Sola Scriptura collapses:",
          fr: "Sola Scriptura s’effondre :",
          es: "Sola Scriptura se derrumba:",
          de: "Sola Scriptura bricht zusammen:",
        },
        k1Text: {
          en: "it is not found in Scripture and leads to fragmentation.",
          fr: "elle ne se trouve pas dans l’Écriture et conduit à la fragmentation.",
          es: "no se encuentra en la Escritura y conduce a la fragmentación.",
          de: "sie findet sich nicht in der Schrift und führt zu Zersplitterung.",
        },
        k2Title: {
          en: "The canon relies on Church authority:",
          fr: "Le canon repose sur l’autorité de l’Église :",
          es: "El canon depende de la autoridad de la Iglesia:",
          de: "Der Kanon beruht auf kirchlicher Autorität:",
        },
        k2Text: {
          en: "Scripture alone cannot validate itself.",
          fr: "L’Écriture seule ne peut pas se valider elle-même.",
          es: "La Escritura sola no puede validarse por sí misma.",
          de: "Die Schrift allein kann sich nicht selbst beglaubigen.",
        },
        k3Title: {
          en: "The Catholic model is coherent:",
          fr: "Le modèle catholique est cohérent :",
          es: "El modelo católico es coherente:",
          de: "Das katholische Modell ist kohärent:",
        },
        k3Text: {
          en: "it explains how faith is preserved and taught.",
          fr: "il explique comment la foi est préservée et enseignée.",
          es: "explica cómo se preserva y se enseña la fe.",
          de: "es erklärt, wie der Glaube bewahrt und gelehrt wird.",
        },
        k4Title: {
          en: "The early Church confirms this model:",
          fr: "L’Église primitive confirme ce modèle :",
          es: "La Iglesia primitiva confirma este modelo:",
          de: "Die frühe Kirche bestätigt dieses Modell:",
        },
        k4Text: {
          en: "Scripture, Tradition, and apostolic authority were inseparably linked.",
          fr: "L’Écriture, la Tradition et l’autorité apostolique étaient inséparablement liées.",
          es: "La Escritura, la Tradición y la autoridad apostólica estaban inseparablemente unidas.",
          de: "Schrift, Tradition und apostolische Autorität waren untrennbar verbunden.",
        },
      },
      tail1: {
        en: "This is why the early Church believed it.",
        fr: "Voilà pourquoi l’Église primitive y a cru.",
        es: "Por eso la Iglesia primitiva lo creyó.",
        de: "Darum glaubte die frühe Kirche daran.",
      },
      tail2: {
        en: "This is why it still holds true today.",
        fr: "Voilà pourquoi cela est encore vrai aujourd’hui.",
        es: "Por eso sigue siendo válido hoy.",
        de: "Darum gilt es bis heute.",
      },
    },

    // Bridge
    bridge: {
      heading: {
        en: "Moving Forward",
        fr: "Aller de l’Avant",
        es: "Avanzando",
        de: "Weitergehen",
      },
      para1: {
        en: "Having established that God communicates His truth through Scripture, Tradition, and the Magisterium working together, we can now explore these three pillars in greater depth.",
        fr: "Ayant établi que Dieu communique sa vérité par l’Écriture, la Tradition et le Magistère opérant ensemble, nous pouvons maintenant explorer plus en profondeur ces trois piliers.",
        es: "Habiendo establecido que Dios comunica su verdad a través de la Escritura, la Tradición y el Magisterio trabajando juntos, ahora podemos explorar estos tres pilares con mayor profundidad.",
        de: "Nachdem klar ist, dass Gott seine Wahrheit durch Schrift, Tradition und Lehramt gemeinsam vermittelt, können wir diese drei Säulen nun vertieft betrachten.",
      },
      para2: {
        en: "The next topics will examine specific questions about the canon of Scripture, the role of Tradition, and the authority of the teaching Church.",
        fr: "Les prochains sujets examineront des questions précises sur le canon de l’Écriture, le rôle de la Tradition et l’autorité de l’Église enseignante.",
        es: "Los próximos temas examinarán cuestiones específicas sobre el canon de la Escritura, el papel de la Tradición y la autoridad de la Iglesia docente.",
        de: "Die nächsten Themen beleuchten konkrete Fragen zum biblischen Kanon, zur Rolle der Tradition und zur Autorität der lehrenden Kirche.",
      },
    },
  },

  noFilioque: {
    title: {
      en: "No Filioque? No Trinity.",
      fr: "Pas de Filioque ? Pas de Trinité.",
      es: "¿Sin Filioque? No hay Trinidad.",
      de: "Kein Filioque? Keine Trinität.",
    },
    subtitle: {
      en: "Why the Filioque clause is essential to Trinitarian theology",
      fr: "Pourquoi la clause Filioque est essentielle à la théologie trinitaire",
      es: "Por qué la cláusula Filioque es esencial para la teología trinitaria",
      de: "Warum die Filioque-Klausel für die trinitarische Theologie wesentlich ist",
    },
    quote: {
      text: {
        en: "When the Advocate comes, whom I will send to you from the Father—the Spirit of truth who goes out from the Father—he will testify about me.",
        fr: "Quand sera venu le Consolateur, que je vous enverrai de la part du Père, l'Esprit de vérité, qui procède du Père, il rendra témoignage de moi.",
        es: "Pero cuando venga el Consolador, a quien yo os enviaré del Padre, el Espíritu de verdad, el cual procede del Padre, él dará testimonio acerca de mí.",
        de: "Wenn aber der Tröster kommen wird, den ich euch senden werde vom Vater, der Geist der Wahrheit, der vom Vater ausgeht, der wird Zeugnis geben von mir.",
      },
      source: {
        en: "John 15:26",
        fr: "Jean 15:26",
        es: "Juan 15:26",
        de: "Johannes 15:26",
      },
    },
    intro: {
      h2: {
        en: "Introduction",
        fr: "Introduction",
        es: "Introducción",
        de: "Einführung",
      },
      p1: {
        en: "Among the most enduring theological controversies between the Catholic Church and the Eastern Orthodox Church is the doctrine of the <strong>Filioque</strong> — the assertion that the Holy Spirit proceeds from the Father <strong>and the Son</strong>. While often dismissed as a minor linguistic or political disagreement, deeper study reveals that this doctrine touches the very heart of the mystery of the Trinity.",
        fr: "Parmi les controverses théologiques les plus durables entre l'Église catholique et l'Église orthodoxe orientale se trouve la doctrine du <strong>Filioque</strong> — l'affirmation que le Saint-Esprit procède du Père <strong>et du Fils</strong>. Bien que souvent rejetée comme un désaccord linguistique ou politique mineur, une étude plus approfondie révèle que cette doctrine touche au cœur même du mystère de la Trinité.",
        es: "Una de las controversias teológicas más duraderas entre la Iglesia Católica y la Iglesia Ortodoxa Oriental es la doctrina del <strong>Filioque</strong> — la afirmación de que el Espíritu Santo procede del Padre <strong>y del Hijo</strong>. Aunque a menudo se descarta como un desacuerdo lingüístico o político menor, un estudio más profundo revela que esta doctrina toca el corazón mismo del misterio de la Trinidad.",
        de: "Eine der beständigsten theologischen Kontroversen zwischen der katholischen Kirche und der östlich-orthodoxen Kirche ist die Lehre vom <strong>Filioque</strong> — die Behauptung, dass der Heilige Geist vom Vater <strong>und dem Sohn</strong> ausgeht. Obwohl oft als geringfügige sprachliche oder politische Meinungsverschiedenheit abgetan, zeigt eine tiefere Untersuchung, dass diese Lehre das Herzstück des Geheimnisses der Trinität berührt.",
      },
      p2: {
        en: "One of the most powerful defenses of the <em>Filioque</em> comes from 19th-century Catholic theologian <strong>Joseph Scheeben</strong>, a representative of the so-called <em>Collegio Romano</em> theologians.",
        fr: "L'une des défenses les plus puissantes du <em>Filioque</em> provient du théologien catholique du XIXe siècle <strong>Joseph Scheeben</strong>, un représentant des théologiens dits du <em>Collegio Romano</em>.",
        es: "Una de las defensas más poderosas del <em>Filioque</em> proviene del teólogo católico del siglo XIX <strong>Joseph Scheeben</strong>, un representante de los llamados teólogos del <em>Collegio Romano</em>.",
        de: "Eine der stärksten Verteidigungen des <em>Filioque</em> stammt von dem katholischen Theologen <strong>Joseph Scheeben</strong> aus dem 19. Jahrhundert, einem Vertreter der sogenannten <em>Collegio Romano</em> Theologen.",
      },
      callout: {
        p1: {
          en: "In contrast to modern assumptions, Scheeben and his contemporaries were not rigid &quot;logic-choppers&quot; but deeply patristic, historical, and dogmatic thinkers. This exploration presents Scheeben&apos;s nine arguments in defense of the <em>Filioque</em>, grouped into three categories that demonstrate how denying the <em>Filioque</em> leads to a theological rupture within the Trinity itself.",
          fr: "Contrairement aux suppositions modernes, Scheeben et ses contemporains n'étaient pas de rigides « coupeurs de logique » mais des penseurs profondément patristiques, historiques et dogmatiques. Cette exploration présente les neuf arguments de Scheeben en défense du <em>Filioque</em>, regroupés en trois catégories qui démontrent comment le fait de nier le <em>Filioque</em> conduit à une rupture théologique au sein même de la Trinité.",
          es: "En contraste con las suposiciones modernas, Scheeben y sus contemporáneos no eran rígidos « picadores de lógica », sino pensadores profundamente patrísticos, históricos y dogmáticos. Esta exploración presenta los nueve argumentos de Scheeben en defensa del <em>Filioque</em>, agrupados en tres categorías que demuestran cómo negar el <em>Filioque</em> conduce a una ruptura teológica dentro de la Trinidad misma.",
          de: "Im Gegensatz zu modernen Annahmen waren Scheeben und seine Zeitgenossen keine starren „Logik-Hacker“, sondern zutiefst patristische, historische und dogmatische Denker. Diese Untersuchung stellt Scheebens neun Argumente zur Verteidigung des <em>Filioque</em> vor, gruppiert in drei Kategorien, die zeigen, wie die Leugnung des <em>Filioque</em> zu einem theologischen Bruch innerhalb der Trinität selbst führt.",
        },
      },
    },
    video: {
      title: {
        en: "The Filioque and the Trinity",
        fr: "Le Filioque et la Trinité",
        es: "El Filioque y la Trinidad",
        de: "Das Filioque und die Trinität",
      },
    },
    scheeben: {
      h2: {
        en: "Joseph Scheeben and 19th-Century Catholic Theology",
        fr: "Joseph Scheeben et la Théologie Catholique du XIXe Siècle",
        es: "Joseph Scheeben y la Teología Católica del Siglo XIX",
        de: "Joseph Scheeben und die Katholische Theologie des 19. Jahrhunderts",
      },
      p1: {
        en: "Joseph Scheeben (1835–1888) stands out as one of the greatest Catholic dogmatic theologians of the 19th century. Contrary to the common narrative that pre-Vatican II theology ignored the Church Fathers and focused solely on abstract reasoning, Scheeben and his colleagues at the Collegio Romano were renowned for integrating both scholastic precision and patristic depth.",
        fr: "Joseph Scheeben (1835–1888) se distingue comme l'un des plus grands théologiens dogmatiques catholiques du XIXe siècle. Contrairement au récit courant selon lequel la théologie pré-Vatican II ignorait les Pères de l'Église et se concentrait uniquement sur le raisonnement abstrait, Scheeben et ses collègues du Collegio Romano étaient réputés pour intégrer à la fois la précision scolastique et la profondeur patristique.",
        es: "Joseph Scheeben (1835–1888) se destaca como uno de los más grandes teólogos dogmáticos católicos del siglo XIX. Contrariamente a la narrativa común de que la teología anterior al Vaticano II ignoraba a los Padres de la Iglesia y se centraba únicamente en el razonamiento abstracto, Scheeben y sus colegas del Collegio Romano eran famosos por integrar tanto la precisión escolástica como la profundidad patrística.",
        de: "Joseph Scheeben (1835–1888) ragt als einer der größten katholischen Dogmatiker des 19. Jahrhunderts heraus. Entgegen der gängigen Darstellung, dass die Theologie vor dem Zweiten Vatikanischen Konzil die Kirchenväter ignorierte und sich ausschließlich auf abstraktes Denken konzentrierte, waren Scheeben und seine Kollegen am Collegio Romano dafür bekannt, sowohl scholastische Präzision als auch patristische Tiefe zu integrieren.",
      },
      callout: {
        p1: {
          en: "His magnum opus, the <em>Handbook of Dogmatic Theology</em>, offers one of the most compelling accounts of the <em>Filioque</em> and its necessity for a coherent Trinitarian theology.",
          fr: "Son magnum opus, le <em>Manuel de Théologie Dogmatique</em>, offre l'un des exposés les plus convaincants du <em>Filioque</em> et de sa nécessité pour une théologie trinitaire cohérente.",
          es: "Su obra magna, el <em>Manual de Teología Dogmática</em>, ofrece una de las exposiciones más convincentes del <em>Filioque</em> y su necesidad para una teología trinitaria coherente.",
          de: "Sein Hauptwerk, das <em>Handbuch der Dogmatik</em>, bietet eine der überzeugendsten Darstellungen des <em>Filioque</em> und seiner Notwendigkeit für eine kohärente Trinitätstheologie.",
        },
        quote: {
          en: "&quot;He [Scheeben] draws very much from the Eastern Fathers... and goes on to give nine different ways in which denying the Filioque actually destroys and tears apart the Trinity&quot;.",
          fr: "« Il [Scheeben] s'inspire beaucoup des Pères orientaux... et continue en donnant neuf façons différentes dont le fait de nier le Filioque détruit et déchire réellement la Trinité ». ",
          es: "« Él [Scheeben] se basa mucho en los Padres Orientales... y continúa dando nueve formas diferentes en las que negar el Filioque realmente destruye y desgarra la Trinidad ».",
          de: "„Er [Scheeben] schöpft sehr stark aus den östlichen Vätern... und fährt fort, neun verschiedene Arten aufzuzeigen, in denen die Leugnung des Filioque die Trinität tatsächlich zerstört und auseinanderreißt“.",
        },
      },
    },
    categories: {
      h2: {
        en: "The Three Categories of Error from Denying the Filioque",
        fr: "Les Trois Catégories d'Erreur issues du Rejet du Filioque",
        es: "Las Tres Categorías de Error por Negar el Filioque",
        de: "Die Drei Kategorien von Fehlern durch die Leugnung des Filioque",
      },
      p1: {
        en: "Scheeben divides the consequences of rejecting the <em>Filioque</em> into three major theological errors:",
        fr: "Scheeben divise les conséquences du rejet du <em>Filioque</em> en trois erreurs théologiques majeures :",
        es: "Scheeben divide las consecuencias de rechazar el <em>Filioque</em> en tres errores teológicos principales:",
        de: "Scheeben teilt die Konsequenzen der Ablehnung des <em>Filioque</em> in drei theologische Hauptfehler ein:",
      },
      c1: {
        title: {
          en: "1. Splits the Trinity",
          fr: "1. Divise la Trinité",
          es: "1. Divide la Trinidad",
          de: "1. Spaltet die Trinität",
        },
        desc: {
          en: "It tears apart and splits the Trinity",
          fr: "Elle déchire et divise la Trinité",
          es: "Desgarra y divide la Trinidad",
          de: "Es zerreißt und spaltet die Trinität",
        },
      },
      c2: {
        title: {
          en: "2. Destroys Unity",
          fr: "2. Détruit l'Unité",
          es: "2. Destruye la Unidad",
          de: "2. Zerstört die Einheit",
        },
        desc: {
          en: "It confuses and destroys the unity of the Trinity",
          fr: "Elle embrouille et détruit l'unité de la Trinité",
          es: "Confunde y destruye la unidad de la Trinidad",
          de: "Es verwirrt und zerstört die Einheit der Trinität",
        },
      },
      c3: {
        title: {
          en: "3. Mutilates Persons",
          fr: "3. Mutile les Personnes",
          es: "3. Mutila a las Personas",
          de: "3. Verstümmelt die Personen",
        },
        desc: {
          en: "It mutilates the persons of the Trinity one by one",
          fr: "Elle mutile les personnes de la Trinité une par une",
          es: "Mutila a las personas de la Trinidad una por una",
          de: "Es verstümmelt die Personen der Trinität einzeln",
        },
      },
      note: {
        en: "Each category will be examined in detail below.",
        fr: "Chaque catégorie sera examinée en détail ci-dessous.",
        es: "Cada categoría se examinará en detalle a continuación.",
        de: "Jede Kategorie wird unten im Detail untersucht.",
      },
    },
    splits: {
      h2: {
        en: "I. Denying the Filioque Splits the Trinity",
        fr: "I. Nier le Filioque Divise la Trinité",
        es: "I. Negar el Filioque Divide la Trinidad",
        de: "I. Die Leugnung des Filioque Spaltet die Trinität",
      },
      p1: {
        en: 'Scheeben calls this the "heresy of the schism," which "tears apart and splits the Trinity."',
        fr: "Scheeben appelle cela « l'hérésie du schisme », qui « déchire et divise la Trinité ».",
        es: 'Scheeben llama a esto la "herejía del cisma", que "desgarra y divide la Trinidad".',
        de: 'Scheeben nennt dies die „Häresie des Schismas", die „die Trinität zerreißt und spaltet".',
      },
      arg1: {
        title: {
          en: "Denies the direct origin-based union between Son and Holy Spirit",
          fr: "Nie l'union directe basée sur l'origine entre le Fils et le Saint-Esprit",
          es: "Niega la unión directa basada en el origen entre el Hijo y el Espíritu Santo",
          de: "Leugnet die direkte, auf dem Ursprung basierende Vereinigung zwischen Sohn und Heiligem Geist",
        },
        quote: {
          en: "It tears apart the unity of the immediate and direct union of the Holy Ghost with the Son... and makes the Holy Ghost no longer Spirit of the Son.",
          fr: "Elle déchire l'unité de l'union immédiate et directe du Saint-Esprit avec le Fils... et fait que le Saint-Esprit n'est plus l'Esprit du Fils.",
          es: "Desgarra la unidad de la unión inmediata y directa del Espíritu Santo con el Hijo... y hace que el Espíritu Santo ya no sea Espíritu del Hijo.",
          de: "Es zerreißt die Einheit der unmittelbaren und direkten Vereinigung des Heiligen Geistes mit dem Sohn... und macht den Heiligen Geist nicht länger zum Geist des Sohnes.",
        },
        explanation: {
          en: "Without the Filioque, the Spirit cannot be said to proceed from the Son, which undercuts the relational unity taught by many Church Fathers, both East and West.",
          fr: "Sans le Filioque, on ne peut pas dire que l'Esprit procède du Fils, ce qui sape l'unité relationnelle enseignée par de nombreux Pères de l'Église, tant en Orient qu'en Occident.",
          es: "Sin el Filioque, no se puede decir que el Espíritu procede del Hijo, lo que socava la unidad relacional enseñada por muchos Padres de la Iglesia, tanto de Oriente como de Occidente.",
          de: "Ohne das Filioque kann nicht gesagt werden, dass der Geist vom Sohn ausgeht, was die relationale Einheit untergräbt, die von vielen Kirchenvätern im Osten wie im Westen gelehrt wurde.",
        },
      },
      arg2: {
        title: {
          en: "Breaks the communion between Father and Son",
          fr: "Rompt la communion entre le Père et le Fils",
          es: "Rompe la comunión entre el Padre y el Hijo",
          de: "Bricht die Gemeinschaft zwischen Vater und Sohn",
        },
        quote: {
          en: "It breaks up the unity of the perfect communion between Father and Son, by which the Son must have everything in common with the Father except fatherhood.",
          fr: "Elle rompt l'unité de la communion parfaite entre le Père et le Fils, par laquelle le Fils doit tout avoir en commun avec le Père, sauf la paternité.",
          es: "Rompe la unidad de la comunión perfecta entre el Padre y el Hijo, por la cual el Hijo debe tener todo en común con el Padre excepto la paternidad.",
          de: "Es zerbricht die Einheit der vollkommenen Gemeinschaft zwischen Vater und Sohn, durch die der Sohn alles mit dem Vater gemeinsam haben muss, außer der Vaterschaft.",
        },
        explanation: {
          en: "The Father gives to the Son all that He has — including the power to spirate the Spirit. Denying this makes the Son a lesser reflection of the Father.",
          fr: "Le Père donne au Fils tout ce qu'Il a — y compris le pouvoir de spirer l'Esprit. Nier cela fait du Fils un reflet moindre du Père.",
          es: "El Padre da al Hijo todo lo que Él tiene — incluido el poder de espirar al Espíritu. Negar esto convierte al Hijo en un reflejo menor del Padre.",
          de: "Der Vater gibt dem Sohn alles, was Er hat — einschließlich der Macht, den Geist zu hauchen. Dies zu leugnen macht den Sohn zu einem geringeren Abbild des Vaters.",
        },
      },
      arg3: {
        title: {
          en: "Divides the person of the Father",
          fr: "Divise la personne du Père",
          es: "Divide la persona del Padre",
          de: "Spaltet die Person des Vaters",
        },
        quote: {
          en: "It splits the indivisible unity of the Father... suddenly standing alongside his fatherhood must constitute a person just like the latter does.",
          fr: "Elle divise l'unité indivisible du Père... se tenant soudainement à côté de sa paternité doit constituer une personne tout comme cette dernière le fait.",
          es: "Divide la unidad indivisible del Padre... de repente, estar junto a su paternidad debe constituir una persona tal como lo hace esta última.",
          de: "Es spaltet die unteilbare Einheit des Vaters... plötzlich neben seiner Vaterschaft stehend, muss eine Person genauso konstituieren wie letztere.",
        },
        explanation: {
          en: "If the Father's role as source of the Spirit is unrelated to His role as Father of the Son, then two distinct identities are posited in the Father — a theological absurdity.",
          fr: "Si le rôle du Père en tant que source de l'Esprit est sans rapport avec Son rôle de Père du Fils, alors deux identités distinctes sont posées dans le Père — une absurdité théologique.",
          es: "Si el papel del Padre como fuente del Espíritu no está relacionado con Su papel como Padre del Hijo, entonces se postulan dos identidades distintas en el Padre — un absurdo teológico.",
          de: "Wenn die Rolle des Vaters als Quelle des Geistes nicht mit Seiner Rolle als Vater des Sohnes zusammenhängt, werden zwei unterschiedliche Identitäten im Vater postuliert — eine theologische Absurdität.",
        },
      },
    },
    destroysUnity: {
      h2: {
        en: "II. Denying the Filioque Destroys the Unity of the Trinity",
        fr: "II. Nier le Filioque Détruit l'Unité de la Trinité",
        es: "II. Negar el Filioque Destruye la Unidad de la Trinidad",
        de: "II. Die Leugnung des Filioque Zerstört die Einheit der Trinität",
      },
      p1: {
        en: 'Scheeben refers to this second category as the way in which the "heresy of the schism confuses and destroys the unity of the Trinity as a whole."',
        fr: "Scheeben se réfère à cette deuxième catégorie comme la manière dont « l'hérésie du schisme embrouille et détruit l'unité de la Trinité dans son ensemble ».",
        es: 'Scheeben se refiere a esta segunda categoría como la forma en que la "herejía del cisma confunde y destruye la unidad de la Trinidad en su conjunto".',
        de: 'Scheeben bezeichnet diese zweite Kategorie als die Art und Weise, wie die „Häresie des Schismas die Einheit der Trinität als Ganzes verwirrt und zerstört".',
      },
      arg4: {
        title: {
          en: "Breaks the divine order",
          fr: "Rompt l'ordre divin",
          es: "Rompe el orden divino",
          de: "Bricht die göttliche Ordnung",
        },
        quote: {
          en: "It annihilates the fixed order and sequence by virtue of which the three persons form a continuous golden chain.",
          fr: "Elle anéantit l'ordre fixe et la séquence en vertu desquels les trois personnes forment une chaîne d'or continue.",
          es: "Aniquila el orden fijo y la secuencia en virtud de la cual las tres personas forman una cadena de oro continua.",
          de: "Es vernichtet die feste Ordnung und Abfolge, kraft derer die drei Personen eine durchgehende goldene Kette bilden.",
        },
        explanation: {
          en: "Catholic theology upholds a flowing order: the Father begets the Son, and the Father and Son together spirate the Spirit. The Orthodox denial introduces a disordered structure: two persons proceeding directly from one, with no relational link between the Spirit and the Son.",
          fr: "La théologie catholique soutient un ordre fluide : le Père engendre le Fils, et le Père et le Fils spirent ensemble l'Esprit. Le déni orthodoxe introduit une structure désordonnée : deux personnes procédant directement d'une seule, sans lien relationnel entre l'Esprit et le Fils.",
          es: "La teología católica sostiene un orden fluido: el Padre engendra al Hijo, y el Padre y el Hijo juntos espiran al Espíritu. La negación ortodoxa introduce una estructura desordenada: dos personas que proceden directamente de una, sin vínculo relacional entre el Espíritu y el Hijo.",
          de: "Die katholische Theologie vertritt eine fließende Ordnung: Der Vater zeugt den Sohn, und der Vater und der Sohn hauchen gemeinsam den Geist. Die orthodoxe Leugnung führt eine ungeordnete Struktur ein: zwei Personen, die direkt von einem ausgehen, ohne relationale Verbindung zwischen dem Geist und dem Sohn.",
        },
      },
      arg5: {
        title: {
          en: "Severs the interdependence of the processions",
          fr: "Coupe l'interdépendance des processions",
          es: "Corta la interdependencia de las procesiones",
          de: "Trennt die Interdependenz der Prozessionen",
        },
        quote: {
          en: "It destroys the organic union of the two trinitarian processions... whereby they are interdependent and mesh, one proceeding from the other.",
          fr: "Elle détruit l'union organique des deux processions trinitaires... par laquelle elles sont interdépendantes et s'emboîtent, l'une procédant de l'autre.",
          es: "Destruye la unión orgánica de las dos procesiones trinitarias... por la cual son interdependientes y engranan, una procediendo de la otra.",
          de: "Es zerstört die organische Vereinigung der beiden trinitarischen Prozessionen... wodurch sie voneinander abhängig sind und ineinandergreifen, wobei die eine aus der anderen hervorgeht.",
        },
        explanation: {
          en: "In the Catholic understanding, the Son receives the power to spirate the Spirit in being begotten by the Father. The Orthodox position lacks this interconnection, rendering the processions as parallel and unrelated.",
          fr: "Dans la compréhension catholique, le Fils reçoit le pouvoir de spirer l'Esprit en étant engendré par le Père. La position orthodoxe manque de cette interconnexion, rendant les processions parallèles et sans rapport.",
          es: "En el entendimiento católico, el Hijo recibe el poder de espirar al Espíritu al ser engendrado por el Padre. La posición ortodoxa carece de esta interconexión, lo que hace que las procesiones sean paralelas e inconexas.",
          de: "Im katholischen Verständnis empfängt der Sohn die Macht, den Geist zu hauchen, indem er vom Vater gezeugt wird. Der orthodoxen Position fehlt diese Verbindung, wodurch die Prozessionen als parallel und unverbunden dargestellt werden.",
        },
      },
      arg6: {
        title: {
          en: "Destroys the comprehensive relational structure",
          fr: "Détruit la structure relationnelle complète",
          es: "Destruye la estructura relacional integral",
          de: "Zerstört die umfassende relationale Struktur",
        },
        quote: {
          en: "It destroys the comprehensive conation of the divine persons... each forming a connecting link for the two others.",
          fr: "Elle détruit la conation complète des personnes divines... chacune formant un lien de connexion pour les deux autres.",
          es: "Destruye la conación integral de las personas divinas... cada una formando un eslabón de conexión para las otras dos.",
          de: "Es zerstört die umfassende Konation der göttlichen Personen... jede bildet ein Bindeglied für die beiden anderen.",
        },
        explanation: {
          en: "Catholic theology emphasizes a web of immediate relations among all three Persons. The Father is source of both Son and Spirit; the Son mediates the Father's spiration of the Spirit; the Spirit unites Father and Son as the bond of love (vinculum caritatis).",
          fr: "La théologie catholique met l'accent sur un réseau de relations immédiates entre les trois Personnes. Le Père est la source du Fils et de l'Esprit ; le Fils sert de médiateur à la spiration de l'Esprit par le Père ; l'Esprit unit le Père et le Fils comme le lien d'amour (vinculum caritatis).",
          es: "La teología católica enfatiza una red de relaciones inmediatas entre las tres Personas. El Padre es fuente tanto del Hijo como del Espíritu; el Hijo media la espiración del Espíritu por parte del Padre; el Espíritu une al Padre y al Hijo como el vínculo de amor (vinculum caritatis).",
          de: "Die katholische Theologie betont ein Netz unmittelbarer Beziehungen zwischen allen drei Personen. Der Vater ist Quelle von Sohn und Geist; der Sohn vermittelt die Hauchung des Geistes durch den Vater; der Geist vereint Vater und Sohn als Band der Liebe (vinculum caritatis).",
        },
        additionalQuote: {
          en: "The Spirit is the unity of the Father and the Son... the Son is the medium through which the Father spirates the Spirit.",
          fr: "L'Esprit est l'unité du Père et du Fils... le Fils est le médium par lequel le Père spire l'Esprit.",
          es: "El Espíritu es la unidad del Padre y del Hijo... el Hijo es el medio a través del cual el Padre espira al Espíritu.",
          de: "Der Geist ist die Einheit des Vaters und des Sohnes... der Sohn ist das Medium, durch das der Vater den Geist haucht.",
        },
      },
    },
    mutilates: {
      h2: {
        en: "III. Denying the Filioque Mutilates the Trinity",
        fr: "III. Nier le Filioque Mutile la Trinité",
        es: "III. Negar el Filioque Mutila la Trinidad",
        de: "III. Die Leugnung des Filioque Verstümmelt die Trinität",
      },
      p1: {
        en: "Scheeben's third category reveals how denial of the <em>Filioque</em> deforms each divine Person.",
        fr: "La troisième catégorie de Scheeben révèle comment le déni du <em>Filioque</em> déforme chaque Personne divine.",
        es: "La tercera categoría de Scheeben revela cómo la negación del <em>Filioque</em> deforma a cada Persona divina.",
        de: "Scheebens dritte Kategorie zeigt, wie die Leugnung des <em>Filioque</em> jede göttliche Person deformiert.",
      },
      arg7: {
        title: {
          en: "Diminishes the perfection of the Father",
          fr: "Diminue la perfection du Père",
          es: "Disminuye la perfección del Padre",
          de: "Mindert die Vollkommenheit des Vaters",
        },
        quote: {
          en: "The Father is a perfect Father only when he can and does give the Son everything that he himself possesses... including the fruitfulness compatible with the Son's person.",
          fr: "Le Père n'est un Père parfait que lorsqu'il peut et donne au Fils tout ce qu'il possède lui-même... y compris la fécondité compatible avec la personne du Fils.",
          es: "El Padre es un Padre perfecto solo cuando puede y da al Hijo todo lo que él mismo posee... incluida la fecundidad compatible con la persona del Hijo.",
          de: "Der Vater ist nur dann ein vollkommener Vater, wenn er dem Sohn alles geben kann und gibt, was er selbst besitzt... einschließlich der mit der Person des Sohnes vereinbarten Fruchtbarkeit.",
        },
        explanation: {
          en: "If the Father withholds the power to spirate the Spirit from the Son, He is not the generous and fully communicative Father that Catholic theology maintains.",
          fr: "Si le Père refuse au Fils le pouvoir de spirer l'Esprit, Il n'est pas le Père généreux et pleinement communicatif que soutient la théologie catholique.",
          es: "Si el Padre retiene del Hijo el poder de espirar al Espíritu, Él no es el Padre generoso y plenamente comunicativo que sostiene la teología católica.",
          de: "Wenn der Vater dem Sohn die Macht vorenthält, den Geist zu hauchen, ist Er nicht der großzügige und sich voll mitteilende Vater, den die katholische Theologie vertritt.",
        },
      },
      arg8: {
        title: {
          en: "Undermines the dignity of the Son",
          fr: "Sape la dignité du Fils",
          es: "Socava la dignidad del Hijo",
          de: "Untergräbt die Würde des Sohnes",
        },
        quote: {
          en: "The Son is a perfect Son only when he is similar and equal to the Father in the aspiration also... not merely by essence.",
          fr: "Le Fils n'est un Fils parfait que lorsqu'il est semblable et égal au Père également dans l'aspiration... pas seulement par essence.",
          es: "El Hijo es un Hijo perfecto solo cuando es similar e igual al Padre también en la aspiración... no meramente por esencia.",
          de: "Der Sohn ist nur dann ein vollkommener Sohn, wenn er dem Vater auch in der Hauchung ähnlich und gleich ist... nicht nur dem Wesen nach.",
        },
        explanation: {
          en: "In denying the Son the role of spirating the Spirit, the Orthodox theology deprives the Son of full participation in divine fecundity. The Son, then, resembles the Father only in essence, not in hypostatic power.",
          fr: "En niant au Fils le rôle de spirer l'Esprit, la théologie orthodoxe prive le Fils de la pleine participation à la fécondité divine. Le Fils, alors, ne ressemble au Père que par essence, non par puissance hypostatique.",
          es: "Al negar al Hijo el papel de espirar al Espíritu, la teología ortodoxa priva al Hijo de la plena participación en la fecundidad divina. El Hijo, entonces, se asemeja al Padre solo en esencia, no en poder hipostático.",
          de: "Indem die orthodoxe Theologie dem Sohn die Rolle der Hauchung des Geistes abspricht, beraubt sie den Sohn der vollen Teilhabe an der göttlichen Fruchtbarkeit. Der Sohn ähnelt dem Vater dann nur im Wesen, nicht in hypostatischer Macht.",
        },
      },
      arg9: {
        title: {
          en: "Makes the Holy Spirit unintelligible as a distinct Person",
          fr: "Rend le Saint-Esprit inintelligible en tant que Personne distincte",
          es: "Hace que el Espíritu Santo sea ininteligible como Persona distinta",
          de: "Macht den Heiligen Geist als eigenständige Person unbegreiflich",
        },
        quote: {
          en: "The Holy Ghost is conceivable not only as perfect Spirit but also as a distinct person only because the Son is related to Him as his principle.",
          fr: "Le Saint-Esprit n'est concevable non seulement comme Esprit parfait mais aussi comme personne distincte que parce que le Fils est en relation avec Lui comme son principe.",
          es: "El Espíritu Santo es concebible no solo como Espíritu perfecto sino también como persona distinta solo porque el Hijo se relaciona con Él como su principio.",
          de: "Der Heilige Geist ist nicht nur als vollkommener Geist, sondern auch als eigenständige Person nur deshalb denkbar, weil der Sohn als sein Prinzip auf Ihn bezogen ist.",
        },
        explanation: {
          en: "The Fathers taught that personal distinctions in the Trinity arise from relationships of origin. Without a procession from the Son, the Spirit's personal distinction is blurred and collapses into mere sameness.",
          fr: "Les Pères ont enseigné que les distinctions personnelles dans la Trinité découlent des relations d'origine. Sans une procession du Fils, la distinction personnelle de l'Esprit est brouillée et s'effondre en une simple identité.",
          es: "Los Padres enseñaron que las distinciones personales en la Trinidad surgen de las relaciones de origen. Sin una procesión del Hijo, la distinción personal del Espíritu se difumina y colapsa en la mera igualdad.",
          de: "Die Väter lehrten, dass persönliche Unterscheidungen in der Trinität aus Ursprungsbeziehungen entstehen. Ohne ein Hervorgehen aus dem Sohn wird die persönliche Unterscheidung des Geistes verschwommen und bricht in bloße Gleichheit zusammen.",
        },
      },
    },
    grounding: {
      h2: {
        en: "Theological and Patristic Grounding",
        fr: "Fondement Théologique et Patristique",
        es: "Fundamentación Teológica y Patrística",
        de: "Theologische und Patristische Untermauerung",
      },
      p1: {
        en: "Scheeben's framework is deeply rooted in the writings of both Eastern and Western Fathers:",
        fr: "Le cadre de Scheeben est profondément enraciné dans les écrits des Pères orientaux et occidentaux :",
        es: "El marco de Scheeben está profundamente arraigado en los escritos de los Padres tanto orientales como occidentales:",
        de: "Scheebens Rahmen ist tief in den Schriften sowohl der östlichen als auch der westlichen Väter verwurzelt:",
      },
      greek: {
        title: {
          en: "Greek Fathers",
          fr: "Pères Grecs",
          es: "Padres Griegos",
          de: "Griechische Väter",
        },
        desc: {
          en: "Speak of the Son as the <em>through whom</em> the Spirit proceeds (cf. St. Gregory of Nyssa, St. Cyril of Alexandria).",
          fr: "Parlent du Fils comme celui <em>par qui</em> l'Esprit procède (cf. St Grégoire de Nysse, St Cyrille d'Alexandrie).",
          es: "Hablan del Hijo como aquel <em>a través de quien</em> procede el Espíritu (cf. San Gregorio de Nisa, San Cirilo de Alejandría).",
          de: "Sprechen vom Sohn als dem, <em>durch den</em> der Geist hervorgeht (vgl. Hl. Gregor von Nyssa, Hl. Kyrill von Alexandria).",
        },
      },
      latin: {
        title: {
          en: "Latin Fathers",
          fr: "Pères Latins",
          es: "Padres Latinos",
          de: "Lateinische Väter",
        },
        desc: {
          en: "Especially St. Augustine, emphasize the Holy Spirit as the mutual love (<em>amor consubstantialis</em>) between Father and Son.",
          fr: "Surtout St Augustin, soulignent que le Saint-Esprit est l'amour mutuel (<em>amor consubstantialis</em>) entre le Père et le Fils.",
          es: "Especialmente San Agustín, enfatizan al Espíritu Santo como el amor mutuo (<em>amor consubstantialis</em>) entre el Padre y el Hijo.",
          de: "Insbesondere der Hl. Augustinus betont den Heiligen Geist als die gegenseitige Liebe (<em>amor consubstantialis</em>) zwischen Vater und Sohn.",
        },
      },
      p2: {
        en: "This dual testimony shows that the <em>Filioque</em> is not a post-scholastic invention, but a legitimate development grounded in the Christian tradition.",
        fr: "Ce double témoignage montre que le <em>Filioque</em> n'est pas une invention post-scolastique, mais un développement légitime fondé sur la tradition chrétienne.",
        es: "Este doble testimonio demuestra que el <em>Filioque</em> no es una invención post-escolástica, sino un desarrollo legítimo fundamentado en la tradición cristiana.",
        de: "Dieses doppelte Zeugnis zeigt, dass das <em>Filioque</em> keine nachscholastische Erfindung ist, sondern eine legitime Entwicklung, die in der christlichen Tradition begründet ist.",
      },
    },
    conclusion: {
      h2: {
        en: "Conclusion: The Necessity of the Filioque",
        fr: "Conclusion : La Nécessité du Filioque",
        es: "Conclusión: La Necesidad del Filioque",
        de: "Schlussfolgerung: Die Notwendigkeit des Filioque",
      },
      p1: {
        en: "Denying the <em>Filioque</em> is not a minor doctrinal variation but a theological rupture with serious consequences. As Scheeben demonstrates:",
        fr: "Nier le <em>Filioque</em> n'est pas une variation doctrinale mineure mais une rupture théologique aux conséquences graves. Comme le démontre Scheeben :",
        es: "Negar el <em>Filioque</em> no es una variación doctrinal menor, sino una ruptura teológica con graves consecuencias. Como demuestra Scheeben:",
        de: "Die Leugnung des <em>Filioque</em> ist keine geringfügige lehrmäßige Abweichung, sondern ein theologischer Bruch mit ernsten Konsequenzen. Wie Scheeben zeigt:",
      },
      quote: {
        en: '"Where one tries to make personal distinction without origin, the distinction completely collapses".',
        fr: "« Là où l'on essaie de faire une distinction personnelle sans origine, la distinction s'effondre complètement ».",
        es: '"Donde uno trata de hacer una distinción personal sin origen, la distinción colapsa por completo".',
        de: '„Wo man versucht, persönliche Unterscheidung ohne Ursprung zu machen, bricht die Unterscheidung vollständig zusammen".',
      },
      callout: {
        p1: {
          en: "The <em>Filioque</em> safeguards the inner logic, relational integrity, and Trinitarian unity of the Godhead. Far from being an obstacle to ecumenism, it is a profound testimony to the richness of Catholic Trinitarian theology — a theology that sees in the eternal procession of the Spirit not division, but the very bond of love that unites Father and Son.",
          fr: "Le <em>Filioque</em> sauvegarde la logique interne, l'intégrité relationnelle et l'unité trinitaire de la Divinité. Loin d'être un obstacle à l'œcuménisme, il est un témoignage profond de la richesse de la théologie trinitaire catholique — une théologie qui voit dans la procession éternelle de l'Esprit non pas la division, mais le lien même d'amour qui unit le Père et le Fils.",
          es: "El <em>Filioque</em> salvaguarda la lógica interna, la integridad relacional y la unidad trinitaria de la Deidad. Lejos de ser un obstáculo para el ecumenismo, es un testimonio profundo de la riqueza de la teología trinitaria católica — una teología que ve en la procesión eterna del Espíritu no la división, sino el vínculo mismo de amor que une al Padre y al Hijo.",
          de: "Das <em>Filioque</em> schützt die innere Logik, die relationale Integrität und die trinitarische Einheit der Gottheit. Weit davon entfernt, ein Hindernis für die Ökumene zu sein, ist es ein tiefes Zeugnis für den Reichtum der katholischen Trinitätstheologie — einer Theologie, die in der ewigen Prozession des Geistes nicht Trennung sieht, sondern das Band der Liebe, das Vater und Sohn vereint.",
        },
      },
    },
    visual: {
      h3: {
        en: "What's the Debate?",
        fr: "Quel est le Débat ?",
        es: "¿Cuál es el Debate?",
        de: "Worum geht es in der Debatte?",
      },
      catholic: {
        title: {
          en: "Catholic Position (Filioque)",
          fr: "Position Catholique (Filioque)",
          es: "Posición Católica (Filioque)",
          de: "Katholische Position (Filioque)",
        },
        quote: {
          en: '...the Holy Spirit, the Lord and Giver of life, who proceeds from the Father <strong class="text-white">and the Son</strong>.',
          fr: '...l\'Esprit Saint, Seigneur et Donateur de vie, qui procède du Père <strong class="text-white">et du Fils</strong>.',
          es: '...el Espíritu Santo, Señor y dador de vida, que procede del Padre <strong class="text-white">y del Hijo</strong>.',
          de: '...den Heiligen Geist, den Herrn und Lebensspender, der vom Vater <strong class="text-white">und dem Sohn</strong> ausgeht.',
        },
        desc: {
          en: "The Holy Spirit proceeds from both the Father and the Son as from one principle.",
          fr: "Le Saint-Esprit procède du Père et du Fils comme d'un seul principe.",
          es: "El Espíritu Santo procede del Padre y del Hijo como de un solo principio.",
          de: "Der Heilige Geist geht aus dem Vater und dem Sohn wie aus einem einzigen Prinzip hervor.",
        },
      },
      orthodox: {
        title: {
          en: "Orthodox Position",
          fr: "Position Orthodoxe",
          es: "Posición Ortodoxa",
          de: "Orthodoxe Position",
        },
        quote: {
          en: "...the Holy Spirit, the Lord and Giver of life, who proceeds from the Father.",
          fr: "...l'Esprit Saint, Seigneur et Donateur de vie, qui procède du Père.",
          es: "...el Espíritu Santo, Señor y dador de vida, que procede del Padre.",
          de: "...den Heiligen Geist, den Herrn und Lebensspender, der vom Vater ausgeht.",
        },
        desc: {
          en: "The Holy Spirit proceeds from the Father alone (though through the Son).",
          fr: "Le Saint-Esprit procède du Père seul (bien que par le Fils).",
          es: "El Espíritu Santo procede solo del Padre (aunque a través del Hijo).",
          de: "Der Heilige Geist geht allein vom Vater aus (jedoch durch den Sohn).",
        },
      },
    },
    bridge: {
      h3: {
        en: "Congratulations on Completing Your Journey!",
        fr: "Félicitations pour avoir Terminé Votre Parcours !",
        es: "¡Felicidades por Completar Tu Viaje!",
        de: "Herzlichen Glückwunsch zum Abschluss Ihrer Reise!",
      },
      p1: {
        en: "You've explored the foundations of Catholic faith—from God's existence to the finest points of Trinitarian theology. You've seen how Scripture, Tradition, and the Magisterium work together to preserve truth across two millennia.",
        fr: "Vous avez exploré les fondements de la foi catholique — de l'existence de Dieu aux points les plus fins de la théologie trinitaire. Vous avez vu comment l'Écriture, la Tradition et le Magistère œuvrent ensemble pour préserver la vérité à travers deux millénaires.",
        es: "Has explorado los fundamentos de la fe católica—desde la existencia de Dios hasta los puntos más finos de la teología trinitaria. Has visto cómo la Escritura, la Tradición y el Magisterio trabajan juntos para preservar la verdad a lo largo de dos milenios.",
        de: "Sie haben die Grundlagen des katholischen Glaubens erkundet—von der Existenz Gottes bis zu den feinsten Punkten der Trinitätstheologie. Sie haben gesehen, wie Schrift, Tradition und Lehramt zusammenwirken, um die Wahrheit über zwei Jahrtausende zu bewahren.",
      },
      p2: {
        en: "This journey is just the beginning. The Catholic faith is deep, rich, and endlessly rewarding to explore. Whether you're considering becoming Catholic, defending the faith, or deepening your own understanding, you now have a solid foundation.",
        fr: "Ce parcours n'est qu'un début. La foi catholique est profonde, riche et infiniment enrichissante à explorer. Que vous envisagiez de devenir catholique, de défendre la foi ou d'approfondir votre propre compréhension, vous avez maintenant une base solide.",
        es: "Este viaje es solo el comienzo. La fe católica es profunda, rica e infinitamente gratificante de explorar. Ya sea que estés considerando convertirte al catolicismo, defender la fe o profundizar tu propia comprensión, ahora tienes una base sólida.",
        de: "Diese Reise ist erst der Anfang. Der katholische Glaube ist tief, reich und unendlich lohnend zu erkunden. Ob Sie erwägen, katholisch zu werden, den Glauben zu verteidigen oder Ihr eigenes Verständnis zu vertiefen, Sie haben jetzt eine solide Grundlage.",
      },
      p3: {
        en: "May the Lord guide you as you continue to seek truth. Ad Majorem Dei Gloriam—for the greater glory of God.",
        fr: "Que le Seigneur vous guide alors que vous continuez à chercher la vérité. Ad Majorem Dei Gloriam — pour la plus grande gloire de Dieu.",
        es: "Que el Señor te guíe mientras continúas buscando la verdad. Ad Majorem Dei Gloriam—para la mayor gloria de Dios.",
        de: "Möge der Herr Sie leiten, während Sie weiterhin nach der Wahrheit suchen. Ad Majorem Dei Gloriam—zur größeren Ehre Gottes.",
      },
    },
  },

  magisterium: {
    title: {
      en: "The Magisterium",
      fr: "Le Magistère",
      es: "El Magisterio",
      de: "Das Lehramt",
    },
    subtitle: {
      en: "Jesus Christ and the Catholic Teaching Authority: A Complete Defense",
      fr: "Jésus-Christ et l'Autorité Doctrinale Catholique : Une Défense Complète",
      es: "Jesucristo y la Autoridad Doctrinal Católica: Una Defensa Completa",
      de: "Jesus Christus und die Katholische Lehrautorität: Eine Vollständige Verteidigung",
    },
    quote: {
      text: {
        en: "Whoever listens to you listens to me. Whoever rejects you rejects me.",
        fr: "Celui qui vous écoute m'écoute. Celui qui vous rejette me rejette.",
        es: "El que a vosotros oye, a mí me oye; y el que a vosotros desecha, a mí me desecha.",
        de: "Wer euch hört, der hört mich; und wer euch verachtet, der verachtet mich.",
      },
      source: {
        en: "Luke 10:16",
        fr: "Luc 10:16",
        es: "Lucas 10:16",
        de: "Lukas 10:16",
      },
    },
    intro: {
      h2: {
        en: "Introduction: The Crisis of Inadequate Apologetics",
        fr: "Introduction : La Crise de l'Apologétique Inadéquate",
        es: "Introducción: La Crisis de la Apologética Inadecuada",
        de: "Einführung: Die Krise der Unzureichenden Apologetik",
      },
      p1: {
        en: "Many Christians often hear the claim that Jesus Christ established the Catholic Church. Yet, how often is this claim truly demonstrated with clarity, coherence, and theological depth? Too often, Catholics present vague assertions of historical continuity or incomplete logical arguments.",
        fr: "De nombreux chrétiens entendent souvent l'affirmation que Jésus-Christ a établi l'Église catholique. Pourtant, combien de fois cette affirmation est-elle réellement démontrée avec clarté, cohérence et profondeur théologique ? Trop souvent, les catholiques présentent de vagues affirmations de continuité historique ou des arguments logiques incomplets.",
        es: "Muchos cristianos oyen a menudo la afirmación de que Jesucristo estableció la Iglesia Católica. Sin embargo, ¿con qué frecuencia se demuestra realmente esta afirmación con claridad, coherencia y profundidad teológica? Con demasiada frecuencia, los católicos presentan vagas afirmaciones de continuidad histórica o argumentos lógicos incompletos.",
        de: "Viele Christen hören oft die Behauptung, dass Jesus Christus die katholische Kirche gegründet hat. Doch wie oft wird diese Behauptung wirklich mit Klarheit, Kohärenz und theologischer Tiefe dargelegt? Allzu oft präsentieren Katholiken vage Behauptungen historischer Kontinuität oder unvollständige logische Argumente.",
      },
      p2: {
        en: "This exploration aims to change that by offering a full scholastic and dogmatic treatment of the Catholic Magisterium, showing that it is not merely an optional structure but a <strong>necessary consequence of divine revelation</strong>.",
        fr: "Cette exploration vise à changer cela en offrant un traitement scolastique et dogmatique complet du Magistère catholique, montrant qu'il n'est pas simplement une structure facultative mais une <strong>conséquence nécessaire de la révélation divine</strong>.",
        es: "Esta exploración tiene como objetivo cambiar eso ofreciendo un tratamiento escolástico y dogmático completo del Magisterio católico, demostrando que no es meramente una estructura opcional sino una <strong>consecuencia necesaria de la revelación divina</strong>.",
        de: "Diese Untersuchung zielt darauf ab, dies zu ändern, indem sie eine vollständige scholastische und dogmatische Behandlung des katholischen Lehramtes bietet, die zeigt, dass es nicht nur eine optionale Struktur ist, sondern eine <strong>notwendige Konsequenz der göttlichen Offenbarung</strong>.",
      },
      callout: {
        h3: {
          en: "The argument unfolds in two parts:",
          fr: "L'argument se déroule en deux parties :",
          es: "El argumento se desarrolla en dos partes:",
          de: "Das Argument entfaltet sich in zwei Teilen:",
        },
        li1: {
          en: "<strong>The Scholastic Section</strong> – defining the Magisterium and its necessity from first principles",
          fr: "<strong>La Section Scolastique</strong> – définissant le Magistère et sa nécessité à partir des premiers principes",
          es: "<strong>La Sección Escolástica</strong> – definiendo el Magisterio y su necesidad a partir de los primeros principios",
          de: "<strong>Der Scholastische Teil</strong> – Definition des Lehramtes und seiner Notwendigkeit aus ersten Prinzipien",
        },
        li2: {
          en: "<strong>The Dogmatic Section</strong> – showing that Scripture explicitly reveals and supports this Magisterium",
          fr: "<strong>La Section Dogmatique</strong> – montrant que l'Écriture révèle et soutient explicitement ce Magistère",
          es: "<strong>La Sección Dogmática</strong> – mostrando que la Escritura revela y apoya explícitamente este Magisterio",
          de: "<strong>Der Dogmatische Teil</strong> – Aufzeigen, dass die Schrift dieses Lehramt explizit offenbart und stützt",
        },
      },
    },
    video: {
      title: {
        en: "The Magisterium",
        fr: "Le Magistère",
        es: "El Magisterio",
        de: "Das Lehramt",
      },
    },
    scholastic: {
      h2: {
        en: "I. Scholastic Theology: The Nature and Necessity of the Magisterium",
        fr: "I. Théologie Scolastique : Nature et Nécessité du Magistère",
        es: "I. Teología Escolástica: Naturaleza y Necesidad del Magisterio",
        de: "I. Scholastische Theologie: Wesen und Notwendigkeit des Lehramtes",
      },
      revelation: {
        h3: {
          en: "1. The Nature of Revelation",
          fr: "1. La Nature de la Révélation",
          es: "1. La Naturaleza de la Revelación",
          de: "1. Das Wesen der Offenbarung",
        },
        p1: {
          en: "Revelation is the communication of divine truths by God to man—truths necessary for salvation. As Ludwig Ott explains:",
          fr: "La Révélation est la communication des vérités divines par Dieu à l'homme — des vérités nécessaires au salut. Comme l'explique Ludwig Ott :",
          es: "La Revelación es la comunicación de verdades divinas por Dios al hombre—verdades necesarias para la salvación. Como explica Ludwig Ott:",
          de: "Offenbarung ist die Mitteilung göttlicher Wahrheiten durch Gott an den Menschen – Wahrheiten, die zum Heil notwendig sind. Wie Ludwig Ott erklärt:",
        },
        ottQuote: {
          en: "&quot;Revelation is a fruitful principle of supernatural knowledge and life... a supreme law of faith, thought and action for all men... through which they are to be united in one kingdom of truth and holiness.&quot;",
          fr: "« La Révélation est un principe fécond de connaissance et de vie surnaturelles... une loi suprême de foi, de pensée et d'action pour tous les hommes... par laquelle ils doivent être unis en un seul royaume de vérité et de sainteté. »",
          es: '"La Revelación es un principio fecundo de conocimiento y vida sobrenaturales... una ley suprema de fe, pensamiento y acción para todos los hombres... a través de la cual deben unirse en un solo reino de verdad y santidad."',
          de: '„Die Offenbarung ist ein fruchtbares Prinzip übernatürlicher Erkenntnis und übernatürlichen Lebens... ein oberstes Gesetz des Glaubens, Denkens und Handelns für alle Menschen... durch das sie zu einem Reich der Wahrheit und Heiligkeit verbunden werden sollen."',
        },
        ottSource: {
          en: "Ludwig Ott, Fundamentals of Catholic Dogma",
          fr: "Ludwig Ott, Précis de Théologie Dogmatique",
          es: "Ludwig Ott, Fundamentos de Dogmática Católica",
          de: "Ludwig Ott, Grundriß der katholischen Dogmatik",
        },
        points: {
          p1: {
            title: {
              en: "Divine Communication",
              fr: "Communication Divine",
              es: "Comunicación Divina",
              de: "Göttliche Mitteilung",
            },
            desc: {
              en: "Revelation is the communication of divine truths by God to man—truths necessary for salvation.",
              fr: "La Révélation est la communication des vérités divines par Dieu à l'homme — des vérités nécessaires au salut.",
              es: "La Revelación es la comunicación de verdades divinas por Dios al hombre—verdades necesarias para la salvación.",
              de: "Offenbarung ist die Mitteilung göttlicher Wahrheiten durch Gott an den Menschen – Wahrheiten, die zum Heil notwendig sind.",
            },
          },
          p2: {
            title: {
              en: "Demands Obedience",
              fr: "Exige l'Obéissance",
              es: "Exige Obediencia",
              de: "Erfordert Gehorsam",
            },
            desc: {
              en: 'Revelation demands the "obedience of faith" (Rom 16:26), presupposing a trustworthy means of communication.',
              fr: "La Révélation exige « l'obéissance de la foi » (Rm 16:26), présupposant un moyen de communication digne de confiance.",
              es: 'La Revelación exige la "obediencia de la fe" (Rom 16:26), presuponiendo un medio de comunicación fidedigno.',
              de: 'Offenbarung fordert den „Glaubensgehorsam" (Röm 16,26), was ein vertrauenswürdiges Kommunikationsmittel voraussetzt.',
            },
          },
          p3: {
            title: {
              en: "Requires Infallibility",
              fr: "Nécessite l'Infaillibilité",
              es: "Requiere Infalibilidad",
              de: "Erfordert Unfehlbarkeit",
            },
            desc: {
              en: "This necessitates an infallible teacher: a Magisterium.",
              fr: "Cela nécessite un enseignant infaillible : un Magistère.",
              es: "Esto necesita un maestro infalible: un Magisterio.",
              de: "Dies erfordert einen unfehlbaren Lehrer: ein Lehramt.",
            },
          },
        },
      },
      means: {
        h3: {
          en: "2. The End Determines the Means",
          fr: "2. La Fin Détermine les Moyens",
          es: "2. El Fin Determina los Medios",
          de: "2. Der Zweck Bestimmt die Mittel",
        },
        p1: {
          en: "If Revelation is meant to reach all people in all times, then the means to transmit it must be proportionate to that universal goal. This leads to a distinction:",
          fr: "Si la Révélation est destinée à atteindre tous les peuples en tous temps, alors les moyens de la transmettre doivent être proportionnés à cet objectif universel. Cela conduit à une distinction :",
          es: "Si la Revelación está destinada a alcanzar a todas las personas en todos los tiempos, entonces los medios para transmitirla deben ser proporcionales a ese objetivo universal. Esto lleva a una distinción:",
          de: "Wenn die Offenbarung dazu bestimmt ist, alle Menschen zu allen Zeiten zu erreichen, müssen die Mittel zu ihrer Übermittlung diesem universalen Ziel angemessen sein. Dies führt zu einer Unterscheidung:",
        },
        cards: {
          c1: {
            title: {
              en: "Physically Necessary Means",
              fr: "Moyens Physiquement Nécessaires",
              es: "Medios Físicamente Necesarios",
              de: "Physisch Notwendige Mittel",
            },
            p1: {
              en: "Without which the end is impossible",
              fr: "Sans lesquels la fin est impossible",
              es: "Sin los cuales el fin es imposible",
              de: "Ohne die das Ziel unmöglich ist",
            },
            p2: {
              en: "(e.g., flying across the Atlantic)",
              fr: "(par ex., traverser l'Atlantique en avion)",
              es: "(p. ej., volar a través del Atlántico)",
              de: "(z. B. über den Atlantik fliegen)",
            },
          },
          c2: {
            title: {
              en: "Morally Necessary Means",
              fr: "Moyens Moralement Nécessaires",
              es: "Medios Moralmente Necesarios",
              de: "Moralisch Notwendige Mittel",
            },
            p1: {
              en: "Without which the end is not ordinarily or reliably achievable",
              fr: "Sans lesquels la fin n'est pas ordinairement ou fiablement atteignable",
              es: "Sin los cuales el fin no se puede alcanzar de manera ordinaria o fiable",
              de: "Ohne die das Ziel normalerweise oder zuverlässig nicht erreichbar ist",
            },
            p2: {
              en: "(The Catholic claim about the Church)",
              fr: "(L'affirmation catholique sur l'Église)",
              es: "(La afirmación católica sobre la Iglesia)",
              de: "(Der katholische Anspruch bezüglich der Kirche)",
            },
          },
        },
        callout: {
          p1: {
            en: "The Catholic claim is not that divine truth <em>cannot</em> be known without the Church, but that God, in His perfection, has willed to provide the <strong>morally necessary</strong> means to ensure its authentic transmission.",
            fr: "L'affirmation catholique n'est pas que la vérité divine <em>ne peut pas</em> être connue sans l'Église, mais que Dieu, dans Sa perfection, a voulu fournir les moyens <strong>moralement nécessaires</strong> pour assurer sa transmission authentique.",
            es: "La afirmación católica no es que la verdad divina <em>no pueda</em> conocerse sin la Iglesia, sino que Dios, en Su perfección, ha querido proveer los medios <strong>moralmente necesarios</strong> para asegurar su transmisión auténtica.",
            de: "Der katholische Anspruch ist nicht, dass die göttliche Wahrheit ohne die Kirche <em>nicht</em> erkannt werden kann, sondern dass Gott in Seiner Vollkommenheit die <strong>moralisch notwendigen</strong> Mittel bereitstellen wollte, um ihre authentische Übermittlung zu gewährleisten.",
          },
          quote: {
            en: "&quot;Christ does not lack... He is not impoverished in His ability to provide the means... He provides all morally necessary means for the Church to carry out the end of Revelation.&quot;",
            fr: "« Le Christ ne manque de rien... Il n'est pas appauvri dans Sa capacité à fournir les moyens... Il fournit tous les moyens moralement nécessaires pour que l'Église accomplisse la fin de la Révélation. »",
            es: '"A Cristo no le falta... No es pobre en Su capacidad de proveer los medios... Él provee todos los medios moralmente necesarios para que la Iglesia lleve a cabo el fin de la Revelación."',
            de: '„Christus mangelt es nicht... Er ist nicht arm an Seiner Fähigkeit, die Mittel bereitzustellen... Er stellt alle moralisch notwendigen Mittel bereit, damit die Kirche das Ziel der Offenbarung ausführen kann."',
          },
        },
      },
      mission: {
        h3: {
          en: "3. The Threefold Mission of the Magisterium",
          fr: "3. La Triple Mission du Magistère",
          es: "3. La Triple Misión del Magisterio",
          de: "3. Die Dreifache Sendung des Lehramtes",
        },
        p1: {
          en: "Just as a government has officials who explain, testify, and enforce the law, so the Church has three forms of teaching:",
          fr: "Tout comme un gouvernement a des fonctionnaires qui expliquent, témoignent et appliquent la loi, l'Église a aussi trois formes d'enseignement :",
          es: "Así como un gobierno tiene funcionarios que explican, testifican y hacen cumplir la ley, así la Iglesia tiene tres formas de enseñanza:",
          de: "So wie eine Regierung Beamte hat, die das Gesetz erklären, bezeugen und durchsetzen, so hat die Kirche drei Formen der Lehre:",
        },
        cards: {
          c1: {
            title: {
              en: "Official Proclamation",
              fr: "Proclamation Officielle",
              es: "Proclamación Oficial",
              de: "Offizielle Verkündigung",
            },
            analogy: {
              en: "e.g., heralds",
              fr: "ex: hérauts",
              es: "p. ej., heraldos",
              de: "z. B. Herolde",
            },
            func: {
              en: "Function:",
              fr: "Fonction :",
              es: "Función:",
              de: "Funktion:",
            },
            funcDesc: {
              en: "Public communication",
              fr: "Communication publique",
              es: "Comunicación pública",
              de: "Öffentliche Kommunikation",
            },
            office: {
              en: "Office:",
              fr: "Office :",
              es: "Oficio:",
              de: "Amt:",
            },
            officeDesc: {
              en: "Priests and deacons",
              fr: "Prêtres et diacres",
              es: "Sacerdotes y diáconos",
              de: "Priester und Diakone",
            },
          },
          c2: {
            title: {
              en: "Authentic Proclamation",
              fr: "Proclamation Authentique",
              es: "Proclamación Auténtica",
              de: "Authentische Verkündigung",
            },
            analogy: {
              en: "e.g., notaries",
              fr: "ex: notaires",
              es: "p. ej., notarios",
              de: "z. B. Notare",
            },
            func: {
              en: "Function:",
              fr: "Fonction :",
              es: "Función:",
              de: "Funktion:",
            },
            funcDesc: {
              en: "Trustworthy witnesses",
              fr: "Témoins dignes de confiance",
              es: "Testigos fidedignos",
              de: "Glaubwürdige Zeugen",
            },
            office: {
              en: "Office:",
              fr: "Office :",
              es: "Oficio:",
              de: "Amt:",
            },
            officeDesc: {
              en: "Bishops",
              fr: "Évêques",
              es: "Obispos",
              de: "Bischöfe",
            },
          },
          c3: {
            title: {
              en: "Authoritative Proclamation",
              fr: "Proclamation Faisant Autorité",
              es: "Proclamación Autorizada",
              de: "Autoritative Verkündigung",
            },
            analogy: {
              en: "e.g., judges",
              fr: "ex: juges",
              es: "p. ej., jueces",
              de: "z. B. Richter",
            },
            func: {
              en: "Function:",
              fr: "Fonction :",
              es: "Función:",
              de: "Funktion:",
            },
            funcDesc: {
              en: "Binding enforcement with sanctions",
              fr: "Application contraignante avec sanctions",
              es: "Aplicación vinculante con sanciones",
              de: "Bindende Durchsetzung mit Sanktionen",
            },
            office: {
              en: "Office:",
              fr: "Office :",
              es: "Oficio:",
              de: "Amt:",
            },
            officeDesc: {
              en: "Diocesan bishops and the Pope",
              fr: "Évêques diocésains et le Pape",
              es: "Obispos diocesanos y el Papa",
              de: "Diözesanbischöfe und der Papst",
            },
          },
        },
      },
      cooperation: {
        h3: {
          en: "4. Divine Cooperation with the Magisterium",
          fr: "4. Coopération Divine avec le Magistère",
          es: "4. Cooperación Divina con el Magisterio",
          de: "4. Göttliches Mitwirken mit dem Lehramt",
        },
        p1: {
          en: "To ensure the message is preserved and received, God provides:",
          fr: "Pour garantir que le message soit préservé et reçu, Dieu fournit :",
          es: "Para asegurar que el mensaje sea preservado y recibido, Dios provee:",
          de: "Um sicherzustellen, dass die Botschaft bewahrt und empfangen wird, sorgt Gott für:",
        },
        cards: {
          c1: {
            title: {
              en: "Infallibility",
              fr: "Infaillibilité",
              es: "Infalibilidad",
              de: "Unfehlbarkeit",
            },
            desc: {
              en: "Internal protection from error in definitive teachings",
              fr: "Protection interne contre l'erreur dans les enseignements définitifs",
              es: "Protección interna contra el error en las enseñanzas definitivas",
              de: "Innerer Schutz vor Irrtum in endgültigen Lehren",
            },
          },
          c2: {
            title: {
              en: "Motives of Credibility",
              fr: "Motifs de Crédibilité",
              es: "Motivos de Credibilidad",
              de: "Glaubwürdigkeitsmotive",
            },
            desc: {
              en: "External signs (miracles, holiness, etc.) that confirm divine authority",
              fr: "Signes externes (miracles, sainteté, etc.) qui confirment l'autorité divine",
              es: "Signos externos (milagros, santidad, etc.) que confirman la autoridad divina",
              de: "Äußere Zeichen (Wunder, Heiligkeit usw.), die göttliche Autorität bestätigen",
            },
          },
          c3: {
            title: {
              en: "Sanctions",
              fr: "Sanctions",
              es: "Sanciones",
              de: "Sanktionen",
            },
            desc: {
              en: "Spiritual rewards and punishments (cf. Luke 10:16)",
              fr: "Récompenses et punitions spirituelles (cf. Luc 10:16)",
              es: "Recompensas y castigos espirituales (cf. Lucas 10:16)",
              de: "Geistliche Belohnungen und Strafen (vgl. Lukas 10,16)",
            },
          },
        },
        quote: {
          en: "&quot;If the authentic and authoritative proclamation could propose error, God would appear to be the direct author of inevitable and universal error... and be the promoter of intellectual idolatry.&quot;",
          fr: "« Si la proclamation authentique et faisant autorité pouvait proposer l'erreur, Dieu apparaîtrait comme l'auteur direct d'une erreur inévitable et universelle... et serait le promoteur de l'idolâtrie intellectuelle. »",
          es: '"Si la proclamación auténtica y autorizada pudiera proponer error, Dios parecería ser el autor directo de un error inevitable y universal... y ser el promotor de la idolatría intelectual."',
          de: '„Wenn die authentische und autoritative Verkündigung Irrtum vorschlagen könnte, würde Gott als der direkte Urheber unvermeidlichen und universellen Irrtums erscheinen... und wäre der Förderer intellektueller Götzenanbetung."',
        },
        source: {
          en: "Fr. Michael Schmaus (paraphrased by Fulton Sheen)",
          fr: "P. Michael Schmaus (paraphrasé par Fulton Sheen)",
          es: "P. Michael Schmaus (parafraseado por Fulton Sheen)",
          de: "P. Michael Schmaus (paraphrasiert von Fulton Sheen)",
        },
      },
      essence: {
        h3: {
          en: "5. The Essence of Infallibility",
          fr: "5. L'Essence de l'Infaillibilité",
          es: "5. La Esencia de la Infalibilidad",
          de: "5. Das Wesen der Unfehlbarkeit",
        },
        callout: {
          p1: {
            en: "Infallibility is not the <em>essence</em> of the Magisterium, but a <em>property</em> that flows from its authoritative mission.",
            fr: "L'infaillibilité n'est pas l'<em>essence</em> du Magistère, mais une <em>propriété</em> qui découle de sa mission d'autorité.",
            es: "La infalibilidad no es la <em>esencia</em> del Magisterio, sino una <em>propiedad</em> que se deriva de su misión autorizada.",
            de: "Unfehlbarkeit ist nicht das <em>Wesen</em> des Lehramtes, sondern eine <em>Eigenschaft</em>, die sich aus seiner autoritativen Sendung ergibt.",
          },
          p2: {
            en: "Therefore, one must begin not with infallibility itself, but with the nature of revelation and the offices entrusted with proclaiming it.",
            fr: "Par conséquent, il ne faut pas commencer par l'infaillibilité elle-même, mais par la nature de la révélation et les offices chargés de la proclamer.",
            es: "Por lo tanto, no se debe comenzar con la infalibilidad misma, sino con la naturaleza de la revelación y los oficios encargados de proclamarla.",
            de: "Daher muss man nicht mit der Unfehlbarkeit selbst beginnen, sondern mit dem Wesen der Offenbarung und den Ämtern, die mit ihrer Verkündigung betraut sind.",
          },
        },
      },
    },
    dogmatic: {
      h2: {
        en: "II. Dogmatic Theology: The Scriptural Foundation for the Magisterium",
        fr: "II. Théologie Dogmatique : Le Fondement Scripturaire du Magistère",
        es: "II. Teología Dogmática: El Fundamento Escritural del Magisterio",
        de: "II. Dogmatische Theologie: Die Biblische Grundlage für das Lehramt",
      },
      p1: {
        en: "Once the nature and necessity of the Magisterium are understood, we turn to Scripture to see if these roles and promises were established by Christ.",
        fr: "Une fois la nature et la nécessité du Magistère comprises, nous nous tournons vers l'Écriture pour voir si ces rôles et promesses ont été établis par le Christ.",
        es: "Una vez que se comprenden la naturaleza y la necesidad del Magisterio, nos volvemos a la Escritura para ver si estos roles y promesas fueron establecidos por Cristo.",
        de: "Sobald Wesen und Notwendigkeit des Lehramtes verstanden sind, wenden wir uns der Schrift zu, um zu sehen, ob diese Rollen und Verheißungen von Christus eingesetzt wurden.",
      },
      cards: {
        c1: {
          title: {
            en: "The Great Commission",
            fr: "La Grande Mission",
            es: "La Gran Comisión",
            de: "Der Missionsbefehl",
          },
          ref: {
            en: "Matthew 28:18–20",
            fr: "Matthieu 28:18–20",
            es: "Mateo 28:18–20",
            de: "Matthäus 28:18–20",
          },
          quote: {
            en: "All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations... teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.",
            fr: "Toute autorité m'a été donnée dans le ciel et sur la terre. Allez donc, de toutes les nations faites des disciples... leur apprenant à observer tout ce que je vous ai commandé. Et voici, je suis avec vous tous les jours, jusqu'à la fin du monde.",
            es: "Toda potestad me es dada en el cielo y en la tierra. Por tanto, id, y haced discípulos a todas las naciones... enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo.",
            de: "Mir ist alle Macht gegeben im Himmel und auf Erden. Darum gehet hin und machet zu Jüngern alle Völker... und lehret sie halten alles, was ich euch befohlen habe. Und siehe, ich bin bei euch alle Tage bis an der Welt Ende.",
          },
          points: {
            title: {
              en: "Here we see:",
              fr: "Ici, nous voyons :",
              es: "Aquí vemos:",
              de: "Hier sehen wir:",
            },
            p1: {
              en: "A divine source of authority",
              fr: "Une source divine d'autorité",
              es: "Una fuente divina de autoridad",
              de: "Eine göttliche Quelle der Autorität",
            },
            p2: {
              en: "A universal mission",
              fr: "Une mission universelle",
              es: "Una misión universal",
              de: "Eine universale Sendung",
            },
            p3: {
              en: "A promise of Christ's ongoing presence (assistance and permanence)",
              fr: "Une promesse de la présence continue du Christ (assistance et permanence)",
              es: "Una promesa de la presencia continua de Cristo (asistencia y permanencia)",
              de: "Eine Verheißung der beständigen Gegenwart Christi (Beistand und Dauer)",
            },
          },
        },
        c2: {
          title: {
            en: "Preaching with Divine Signs",
            fr: "Prêcher avec des Signes Divins",
            es: "Predicando con Señales Divinas",
            de: "Predigen mit Göttlichen Zeichen",
          },
          ref: {
            en: "Mark 16:15–20",
            fr: "Marc 16:15–20",
            es: "Marcos 16:15–20",
            de: "Markus 16:15–20",
          },
          quote: {
            en: "They went forth and preached everywhere, while the Lord worked with them and confirmed the message by signs that attended it.",
            fr: "Ils s'en allèrent et prêchèrent partout, le Seigneur travaillant avec eux et confirmant la parole par les signes qui l'accompagnaient.",
            es: "Y ellos, saliendo, predicaron en todas partes, ayudándoles el Señor y confirmando la palabra con las señales que la seguían.",
            de: "Sie aber zogen aus und predigten an allen Orten, und der Herr wirkte mit ihnen und bekräftigte das Wort durch die mitfolgenden Zeichen.",
          },
          points: {
            title: {
              en: "Here we see:",
              fr: "Ici, nous voyons :",
              es: "Aquí vemos:",
              de: "Hier sehen wir:",
            },
            p1: {
              en: "Not only official preaching",
              fr: "Non seulement la prédication officielle",
              es: "No solo la predicación oficial",
              de: "Nicht nur offizielle Predigt",
            },
            p2: {
              en: "External divine confirmation—motives of credibility",
              fr: "Confirmation divine externe — motifs de crédibilité",
              es: "Confirmación divina externa—motivos de credibilidad",
              de: "Äußere göttliche Bestätigung – Glaubwürdigkeitsmotive",
            },
          },
        },
        c3: {
          title: {
            en: "Apostolic Authority to Forgive Sins",
            fr: "Autorité Apostolique pour Pardonner les Péchés",
            es: "Autoridad Apostólica para Perdonar Pecados",
            de: "Apostolische Autorität zur Sündenvergebung",
          },
          ref: {
            en: "John 20:21–23",
            fr: "Jean 20:21–23",
            es: "Juan 20:21–23",
            de: "Johannes 20:21–23",
          },
          quote: {
            en: "As the Father has sent me, even so I send you... Whose sins you forgive are forgiven them.",
            fr: "Comme le Père m'a envoyé, moi aussi je vous envoie... Ceux à qui vous pardonnerez les péchés, ils leur seront pardonnés.",
            es: "Como el Padre me envió a mí, así yo os envío a vosotros... A quienes perdonéis los pecados, les son perdonados.",
            de: "Wie mich der Vater gesandt hat, so sende ich euch... Welchen ihr die Sünden erlasst, denen sind sie erlassen.",
          },
          points: {
            title: {
              en: "Here we see:",
              fr: "Ici, nous voyons :",
              es: "Aquí vemos:",
              de: "Hier sehen wir:",
            },
            p1: {
              en: "The Apostles receive Christ's mission and authority",
              fr: "Les Apôtres reçoivent la mission et l'autorité du Christ",
              es: "Los Apóstoles reciben la misión y la autoridad de Cristo",
              de: "Die Apostel empfangen die Sendung und Autorität Christi",
            },
            p2: {
              en: "This entails authentic and authoritative teaching",
              fr: "Cela implique un enseignement authentique et faisant autorité",
              es: "Esto implica una enseñanza auténtica y autorizada",
              de: "Dies beinhaltet authentische und autoritative Lehre",
            },
          },
        },
        c4: {
          title: {
            en: "The Petrine Office",
            fr: "L'Office Pétrinien",
            es: "El Oficio Petrino",
            de: "Das Petrinische Amt",
          },
          ref: {
            en: "John 21:15–17",
            fr: "Jean 21:15–17",
            es: "Juan 21:15–17",
            de: "Johannes 21:15–17",
          },
          quote: {
            en: 'Jesus commands Peter to "feed my sheep" three times',
            fr: "Jésus commande à Pierre de « paître mes brebis » trois fois",
            es: 'Jesús ordena a Pedro "apacienta mis ovejas" tres veces',
            de: 'Jesus befiehlt Petrus dreimal "weide meine Schafe"',
          },
          points: {
            title: {
              en: "Here we see:",
              fr: "Ici, nous voyons :",
              es: "Aquí vemos:",
              de: "Hier sehen wir:",
            },
            p1: {
              en: "Written in the 90s A.D. to a Church already governed by bishops",
              fr: "Écrit dans les années 90 ap. J.-C. à une Église déjà gouvernée par des évêques",
              es: "Escrito en los años 90 d.C. a una Iglesia ya gobernada por obispos",
              de: "Geschrieben in den 90er Jahren n. Chr. an eine Kirche, die bereits von Bischöfen geleitet wurde",
            },
            p2: {
              en: "Why mention Peter? Unless the office continues, the text is irrelevant",
              fr: "Pourquoi mentionner Pierre ? Si l'office ne continue pas, le texte n'est pas pertinent",
              es: "¿Por qué mencionar a Pedro? A menos que el oficio continúe, el texto es irrelevante",
              de: "Warum Petrus erwähnen? Wenn das Amt nicht fortbesteht, ist der Text irrelevant",
            },
          },
        },
        c5: {
          title: {
            en: "The Charism of Infallibility",
            fr: "Le Charisme d'Infaillibilité",
            es: "El Carisma de la Infalibilidad",
            de: "Das Charisma der Unfehlbarkeit",
          },
          ref: {
            en: "John 14:26; 16:13",
            fr: "Jean 14:26; 16:13",
            es: "Juan 14:26; 16:13",
            de: "Johannes 14:26; 16:13",
          },
          quote: {
            en: "The Holy Spirit... will teach you all things, and bring to your remembrance all that I have said to you... He will guide you into all truth.",
            fr: "Le Saint-Esprit... vous enseignera toutes choses, et vous rappellera tout ce que je vous ai dit... Il vous conduira dans toute la vérité.",
            es: "El Espíritu Santo... os enseñará todas las cosas, y os recordará todo lo que yo os he dicho... Él os guiará a toda la verdad.",
            de: "Der Heilige Geist... wird euch alles lehren und euch an alles erinnern, was ich euch gesagt habe... Er wird euch in die ganze Wahrheit leiten.",
          },
          points: {
            title: {
              en: "Here we see:",
              fr: "Ici, nous voyons :",
              es: "Aquí vemos:",
              de: "Hier sehen wir:",
            },
            p1: {
              en: "Perpetual promise tied to the Church's mission",
              fr: "Promesse perpétuelle liée à la mission de l'Église",
              es: "Promesa perpetua ligada a la misión de la Iglesia",
              de: "Ewige Verheißung, gebunden an die Sendung der Kirche",
            },
            p2: {
              en: "The Spirit ensures preservation of Christ's word in purity",
              fr: "L'Esprit assure la préservation de la parole du Christ dans sa pureté",
              es: "El Espíritu asegura la preservación de la palabra de Cristo en pureza",
              de: "Der Geist gewährleistet die Bewahrung von Christi Wort in Reinheit",
            },
          },
        },
      },
      supporting: {
        h3: {
          en: "Supporting Texts",
          fr: "Textes à l'Appui",
          es: "Textos de Apoyo",
          de: "Unterstützende Texte",
        },
        t1: {
          ref: {
            en: "Luke 10:16",
            fr: "Luc 10:16",
            es: "Lucas 10:16",
            de: "Lukas 10:16",
          },
          text: {
            en: "He who hears you hears me.",
            fr: "Celui qui vous écoute m'écoute.",
            es: "El que a vosotros oye, a mí me oye.",
            de: "Wer euch hört, der hört mich.",
          },
        },
        t2: {
          ref: {
            en: "1 Timothy 3:15",
            fr: "1 Timothée 3:15",
            es: "1 Timoteo 3:15",
            de: "1 Timotheus 3:15",
          },
          text: {
            en: "The Church of the living God, the pillar and foundation of truth.",
            fr: "L'Église du Dieu vivant, la colonne et le fondement de la vérité.",
            es: "La Iglesia del Dios viviente, columna y fundamento de la verdad.",
            de: "Die Kirche des lebendigen Gottes, Pfeiler und Grundfeste der Wahrheit.",
          },
        },
        t3: {
          ref: {
            en: "2 Thessalonians 2:15",
            fr: "2 Thessaloniciens 2:15",
            es: "2 Tesalonicenses 2:15",
            de: "2 Thessalonicher 2:15",
          },
          text: {
            en: "Hold fast to the traditions you were taught by us, whether by word of mouth or by letter.",
            fr: "Tenez ferme aux traditions que vous avez apprises de nous, soit de vive voix, soit par notre lettre.",
            es: "Estad firmes y retened las tradiciones que habéis aprendido, sea por palabra o por carta nuestra.",
            de: "Haltet fest an den Überlieferungen, die ihr von uns gelehrt worden seid, sei es durch Wort oder durch Brief.",
          },
        },
      },
    },
    continuity: {
      h2: {
        en: "III. Continuity Beyond the Apostles",
        fr: "III. Continuité au-delà des Apôtres",
        es: "III. Continuidad más allá de los Apóstoles",
        de: "III. Kontinuität über die Apostel hinaus",
      },
      p1: {
        en: "Some argue that these charisms were unique to the Apostles. However, this objection fails on three grounds:",
        fr: "Certains soutiennent que ces charismes étaient uniques aux Apôtres. Cependant, cette objection échoue pour trois raisons :",
        es: "Algunos argumentan que estos carismas eran únicos de los Apóstoles. Sin embargo, esta objeción falla por tres razones:",
        de: "Einige argumentieren, dass diese Charismen einzigartig für die Apostel waren. Dieser Einwand scheitert jedoch aus drei Gründen:",
      },
      cards: {
        c1: {
          title: {
            en: "Presumption of Continuity",
            fr: "Présomption de Continuité",
            es: "Presunción de Continuidad",
            de: "Kontinuitätsvermutung",
          },
          desc: {
            en: "Essential features of the Church do not expire unless explicitly revoked.",
            fr: "Les caractéristiques essentielles de l'Église n'expirent pas à moins d'être explicitement révoquées.",
            es: "Las características esenciales de la Iglesia no expiran a menos que sean explícitamente revocadas.",
            de: "Wesentliche Merkmale der Kirche laufen nicht ab, es sei denn, sie werden ausdrücklich widerrufen.",
          },
        },
        c2: {
          title: {
            en: "Perpetual Need",
            fr: "Besoin Perpétuel",
            es: "Necesidad Perpetua",
            de: "Fortwährende Notwendigkeit",
          },
          desc: {
            en: "The Church will always need authoritative teaching and internal preservation.",
            fr: "L'Église aura toujours besoin d'un enseignement faisant autorité et d'une préservation interne.",
            es: "La Iglesia siempre necesitará enseñanza autorizada y preservación interna.",
            de: "Die Kirche wird immer autoritative Lehre und interne Bewahrung benötigen.",
          },
        },
        c3: {
          title: {
            en: "St. Thomas Aquinas' Principle",
            fr: "Principe de Saint Thomas d'Aquin",
            es: "Principio de Santo Tomás de Aquino",
            de: "Prinzip des Hl. Thomas von Aquin",
          },
          desc: {
            en: '"If the reason for a gift is perpetual, the gift itself must be perpetual." (Contra Gentiles IV)',
            fr: "« Si la raison d'un don est perpétuelle, le don lui-même doit être perpétuel. » (Contra Gentiles IV)",
            es: '"Si la razón de un don es perpetua, el don mismo debe ser perpetuo." (Contra Gentiles IV)',
            de: '„Wenn der Grund für eine Gabe ewig ist, muss die Gabe selbst ewig sein." (Contra Gentiles IV)',
          },
        },
      },
      p2: {
        en: "Thus, offices like the Papacy, Episcopal authority, and infallibility are perpetual because the mission of revelation endures.",
        fr: "Ainsi, des offices comme la Papauté, l'autorité épiscopale et l'infaillibilité sont perpétuels parce que la mission de la révélation perdure.",
        es: "Por lo tanto, oficios como el Papado, la autoridad episcopal y la infalibilidad son perpetuos porque la misión de la revelación perdura.",
        de: "Daher sind Ämter wie das Papsttum, die bischöfliche Autorität und die Unfehlbarkeit ewig, weil die Sendung der Offenbarung andauert.",
      },
    },
    conclusion: {
      h2: {
        en: "Conclusion: The Catholic Magisterium is Scriptural, Rational, and Necessary",
        fr: "Conclusion : Le Magistère Catholique est Scripturaire, Rationnel et Nécessaire",
        es: "Conclusión: El Magisterio Católico es Escritural, Racional y Necesario",
        de: "Schlussfolgerung: Das Katholische Lehramt ist Biblisch, Rational und Notwendig",
      },
      p1: {
        en: "Having examined both the theological necessity and scriptural foundation of the Magisterium, we conclude that only the Catholic Church possesses all three levels of proclamation, all three forms of divine cooperation, and the structural unity necessary for universal, authoritative, and infallible teaching.",
        fr: "Ayant examiné à la fois la nécessité théologique et le fondement scripturaire du Magistère, nous concluons que seule l'Église catholique possède les trois niveaux de proclamation, les trois formes de coopération divine et l'unité structurelle nécessaires à un enseignement universel, faisant autorité et infaillible.",
        es: "Habiendo examinado tanto la necesidad teológica como el fundamento escritural del Magisterio, concluimos que solo la Iglesia Católica posee los tres niveles de proclamación, las tres formas de cooperación divina y la unidad estructural necesaria para una enseñanza universal, autorizada e infalible.",
        de: "Nachdem wir sowohl die theologische Notwendigkeit als auch die biblische Grundlage des Lehramtes untersucht haben, schließen wir, dass nur die katholische Kirche alle drei Ebenen der Verkündigung, alle drei Formen der göttlichen Mitwirkung und die strukturelle Einheit besitzt, die für eine universale, autoritative und unfehlbare Lehre notwendig sind.",
      },
      quote: {
        en: "&quot;This concept is true because... it is objectively Catholic as the one perfectly adequate expression of the effective catholicity of Revelation itself.&quot;",
        fr: "« Ce concept est vrai parce que... il est objectivement catholique en tant que seule expression parfaitement adéquate de la catholicité effective de la Révélation elle-même. »",
        es: '"Este concepto es verdadero porque... es objetivamente católico como la única expresión perfectamente adecuada de la catolicidad efectiva de la Revelación misma."',
        de: '„Dieses Konzept ist wahr, weil... es objektiv katholisch ist als der einzig vollkommen angemessene Ausdruck der effektiven Katholizität der Offenbarung selbst."',
      },
      source: {
        en: "Fulton Sheen",
        fr: "Fulton Sheen",
        es: "Fulton Sheen",
        de: "Fulton Sheen",
      },
      callout: {
        p1: {
          en: "The Catholic Church alone corresponds to the vitality and catholicity of the word of God. In her Magisterium, the Word of Christ continues to speak—not as a dead letter or private interpretation—but through living ambassadors of truth.",
          fr: "Seule l'Église catholique correspond à la vitalité et à la catholicité de la parole de Dieu. Dans son Magistère, la Parole du Christ continue de parler — non comme une lettre morte ou une interprétation privée — mais à travers des ambassadeurs vivants de la vérité.",
          es: "Solo la Iglesia Católica corresponde a la vitalidad y catolicidad de la palabra de Dios. En su Magisterio, la Palabra de Cristo continúa hablando—no como una letra muerta o una interpretación privada—sino a través de embajadores vivos de la verdad.",
          de: "Die katholische Kirche allein entspricht der Vitalität und Katholizität des Wortes Gottes. In ihrem Lehramt spricht das Wort Christi weiter – nicht als toter Buchstabe oder private Interpretation – sondern durch lebendige Botschafter der Wahrheit.",
        },
      },
    },
    visual: {
      h3: {
        en: "The Magisterium Summary",
        fr: "Résumé du Magistère",
        es: "Resumen del Magisterio",
        de: "Zusammenfassung des Lehramtes",
      },
      c1: {
        title: {
          en: "Preserves Truth",
          fr: "Préserve la Vérité",
          es: "Preserva la Verdad",
          de: "Bewahrt die Wahrheit",
        },
        desc: {
          en: "Guards the deposit of faith from error and corruption across all ages and cultures.",
          fr: "Garde le dépôt de la foi de l'erreur et de la corruption à travers tous les âges et cultures.",
          es: "Guarda el depósito de la fe del error y la corrupciíon a través de todas las edades y culturas.",
          de: "Bewahrt das Glaubensgut vor Irrtum und Verfälschung über alle Zeiten und Kulturen hinweg.",
        },
      },
      c2: {
        title: {
          en: "Interprets Scripture",
          fr: "Interprète l'Écriture",
          es: "Interpreta la Escritura",
          de: "Interpretiert die Schrift",
        },
        desc: {
          en: "Provides authoritative interpretation of Sacred Scripture and Tradition.",
          fr: "Fournit une interprétation faisant autorité de la Sainte Écriture et de la Tradition.",
          es: "Proporciona una interpretación autorizada de la Sagrada Escritura y la Tradición.",
          de: "Bietet eine autoritative Auslegung der Heiligen Schrift und der Tradition.",
        },
      },
      c3: {
        title: {
          en: "Maintains Unity",
          fr: "Maintient l'Unité",
          es: "Mantiene la Unidad",
          de: "Bewahrt die Einheit",
        },
        desc: {
          en: "Settles disputes and prevents the Church from splintering into factions.",
          fr: "Règle les différends et empêche l'Église de se diviser en factions.",
          es: "Resuelve disputas y evita que la Iglesia se divida en facciones.",
          de: "Beilegt Streitigkeiten und verhindert, dass die Kirche in Fraktionen zersplittert.",
        },
      },
    },
    bridge: {
      h3: {
        en: "Defining the Faith",
        fr: "Définir la Foi",
        es: "Definiendo la Fe",
        de: "Den Glauben Definieren",
      },
      p1: {
        en: "Throughout history, the Magisterium has defined and defended essential Christian doctrines. From the nature of the Trinity to the divinity of Christ, from the canon of Scripture to moral teachings, the Church's teaching authority has kept the faith pure.",
        fr: "Tout au long de l'histoire, le Magistère a défini et défendu les doctrines chrétiennes essentielles. De la nature de la Trinité à la divinité du Christ, du canon de l'Écriture aux enseignements moraux, l'autorité enseignante de l'Église a gardé la foi pure.",
        es: "A lo largo de la historia, el Magisterio ha definido y defendido doctrinas cristianas esenciales. Desde la naturaleza de la Trinidad hasta la divinidad de Cristo, desde el canon de la Escritura hasta las enseñanzas morales, la autoridad de enseñanza de la Iglesia ha mantenido la fe pura.",
        de: "Im Laufe der Geschichte hat das Lehramt wesentliche christliche Lehren definiert und verteidigt. Von der Natur der Trinität bis zur Göttlichkeit Christi, vom Kanon der Schrift bis zu moralischen Lehren hat die Lehrautorität der Kirche den Glauben rein erhalten.",
      },
      p2: {
        en: "One of the most important doctrines the Magisterium has preserved is the full doctrine of the Trinity—including a clause that some Orthodox Christians reject. Let's see why this matters.",
        fr: "L'une des doctrines les plus importantes que le Magistère ait préservées est la doctrine complète de la Trinité, y compris une clause que certains chrétiens orthodoxes rejettent. Voyons pourquoi cela est important.",
        es: "Una de las doctrinas más importantes que el Magisterio ha preservado es la doctrina completa de la Trinidad, incluida una cláusula que algunos cristianos ortodoxos rechazan. Veamos por qué esto importa.",
        de: "Eine der wichtigsten Lehren, die das Lehramt bewahrt hat, ist die vollständige Lehre von der Trinität – einschließlich einer Klausel, die einige orthodoxe Christen ablehnen. Sehen wir uns an, warum das wichtig ist.",
      },
    },
  },

  peterFirstPope: {
    title: {
      en: "Was Peter the First Pope?",
      fr: "Pierre était-il le Premier Pape ?",
      es: "¿Fue Pedro el Primer Papa?",
      de: "War Petrus der Erste Papst?",
    },
    subtitle: {
      en: "Examining the biblical and historical evidence for the papacy",
      fr: "Examen des preuves bibliques et historiques de la papauté",
      es: "Examinando la evidencia bíblica e histórica del papado",
      de: "Untersuchung der biblischen und historischen Beweise für das Papsttum",
    },
    quote: {
      text: {
        en: "You are Peter, and on this rock I will build my church, and the gates of hell shall not prevail against it. I will give you the keys of the kingdom of heaven.",
        fr: "Tu es Pierre, et sur cette pierre je bâtirai mon Église, et les portes de l'enfer ne prévaudront point contre elle. Je te donnerai les clefs du royaume des cieux.",
        es: "Tú eres Pedro, y sobre esta roca edificaré mi iglesia, y las puertas del Hades no prevalecerán contra ella. Y a ti te daré las llaves del reino de los cielos.",
        de: "Du bist Petrus, und auf diesen Felsen will ich meine Kirche bauen, und die Pforten der Hölle sollen sie nicht überwältigen. Ich will dir die Schlüssel des Himmelreichs geben.",
      },
      source: {
        en: "Matthew 16:18-19",
        fr: "Matthieu 16:18-19",
        es: "Mateo 16:18-19",
        de: "Matthäus 16:18-19",
      },
    },
    intro: {
      p1: {
        en: "The Catholic Church teaches that St. Peter was the first Pope — the visible head of the Church on earth, appointed by Christ Himself. This belief is rooted in Scripture, affirmed by early Christian writings, and sustained through an unbroken line of successors in Rome.",
        fr: "L'Église catholique enseigne que Saint Pierre fut le premier Pape — le chef visible de l'Église sur terre, désigné par le Christ Lui-même. Cette croyance est enracinée dans l'Écriture, affirmée par les écrits des premiers chrétiens, et maintenue à travers une lignée ininterrompue de successeurs à Rome.",
        es: "La Iglesia Católica enseña que San Pedro fue el primer Papa — la cabeza visible de la Iglesia en la tierra, designado por Cristo mismo. Esta creencia está arraigada en la Escritura, afirmada por los primeros escritos cristianos, y sostenida a través de una línea ininterrumpida de sucesores en Roma.",
        de: "Die katholische Kirche lehrt, dass der heilige Petrus der erste Papst war — das sichtbare Oberhaupt der Kirche auf Erden, von Christus selbst eingesetzt. Dieser Glaube ist in der Schrift verwurzelt, von frühchristlichen Schriften bestätigt und durch eine ununterbrochene Linie von Nachfolgern in Rom aufrechterhalten.",
      },
      callout: {
        text: {
          en: "The Lord made Simon alone, whom he named Peter, the rock of his Church. He gave him the keys of his Church and instituted him shepherd of the whole flock.",
          fr: "« Le Seigneur a fait du seul Simon, auquel il a donné le nom de Pierre, la pierre de son Église. Il lui a donné les clés de son Église et l'a institué pasteur de tout le troupeau. »",
          es: '"El Señor hizo de Simón, a quien llamó Pedro, la única roca de su Iglesia. Le dio las llaves de su Iglesia y lo instituyó pastor de todo el rebaño."',
          de: "„Den Simon allein hat der Herr, dem er den Namen Petrus gab, zum Felsen seiner Kirche gemacht. Er hat ihm die Schlüssel seiner Kirche übergeben und ihn zum Hirten der ganzen Herde bestellt.“",
        },
        source: {
          en: "Catechism of the Catholic Church 881",
          fr: "Catéchisme de l'Église Catholique 881",
          es: "Catecismo de la Iglesia Católica 881",
          de: "Katechismus der Katholischen Kirche 881",
        },
      },
    },
    videos: {
      v1: {
        title: {
          en: "Was Peter the First Pope?",
          fr: "Pierre était-il le Premier Pape ?",
          es: "¿Fue Pedro el Primer Papa?",
          de: "War Petrus der Erste Papst?",
        },
      },
      v2: {
        title: {
          en: "Peter and the Papacy",
          fr: "Pierre et la Papauté",
          es: "Pedro y el Papado",
          de: "Petrus und das Papsttum",
        },
      },
      v3: {
        title: {
          en: "Biblical Evidence for the Papacy",
          fr: "Preuves Bibliques de la Papauté",
          es: "Evidencia Bíblica del Papado",
          de: "Biblische Beweise für das Papsttum",
        },
      },
    },
    gospels: {
      h2: {
        en: "I. Peter's Role in the Gospels",
        fr: "I. Le Rôle de Pierre dans les Évangiles",
        es: "I. El Papel de Pedro en los Evangelios",
        de: "I. Petrus' Rolle in den Evangelien",
      },
      p1: {
        en: "Peter, originally named Simon, is the most prominent of the apostles in the New Testament:",
        fr: "Pierre, initialement nommé Simon, est le plus éminent des apôtres dans le Nouveau Testament :",
        es: "Pedro, originalmente llamado Simón, es el más prominente de los apóstoles en el Nuevo Testamento:",
        de: "Petrus, ursprünglich Simon genannt, ist der prominenteste der Apostel im Neuen Testament:",
      },
      evidence: {
        e1: {
          en: "Peter's name is mentioned over 150 times — more than all the other apostles combined.",
          fr: "Le nom de Pierre est mentionné plus de 150 fois — plus que tous les autres apôtres réunis.",
          es: "El nombre de Pedro se menciona más de 150 veces — más que todos los demás apóstoles juntos.",
          de: "Petrus' Name wird über 150 Mal erwähnt — öfter als alle anderen Apostel zusammen.",
        },
        e2: {
          en: "He is always listed first in apostolic lists (e.g., Matthew 10:2).",
          fr: "Il est toujours listé en premier dans les listes apostoliques (par ex., Matthieu 10:2).",
          es: "Siempre aparece primero en las listas apostólicas (p. ej., Mateo 10:2).",
          de: "Er wird in apostolischen Listen immer als Erster genannt (z. B. Matthäus 10:2).",
        },
      },
      matthew: {
        h3: {
          en: "Matthew 16:18–19 – The Foundational Text",
          fr: "Matthieu 16:18–19 – Le Texte Fondamental",
          es: "Mateo 16:18–19 – El Texto Fundacional",
          de: "Matthäus 16:18–19 – Der Grundlegende Text",
        },
        quote: {
          en: "You are Peter, and on this rock I will build my Church... I will give you the keys of the kingdom of heaven...",
          fr: "« Tu es Pierre, et sur cette pierre je bâtirai mon Église... Je te donnerai les clefs du royaume des cieux... »",
          es: '"Tú eres Pedro, y sobre esta roca edificaré mi Iglesia... Te daré las llaves del reino de los cielos..."',
          de: '„Du bist Petrus, und auf diesen Felsen will ich meine Kirche bauen... Ich will dir die Schlüssel des Himmelreichs geben..."',
        },
        points: {
          h4: {
            en: "Key elements:",
            fr: "Éléments clés :",
            es: "Elementos clave:",
            de: "Kernelemente:",
          },
          p1: {
            en: "&quot;Peter&quot; (Greek: <em>Petros</em>) means rock.",
            fr: "« Pierre » (Grec : <em>Petros</em>) signifie roc.",
            es: '"Pedro" (Griego: <em>Petros</em>) significa roca.',
            de: '„Petrus" (Griechisch: <em>Petros</em>) bedeutet Fels.',
          },
          p2: {
            en: "Jesus changes Simon's name — a biblical act denoting mission (cf. Abram → Abraham).",
            fr: "Jésus change le nom de Simon — un acte biblique dénotant une mission (cf. Abram → Abraham).",
            es: "Jesús cambia el nombre de Simón — un acto bíblico que denota misión (cf. Abram → Abraham).",
            de: "Jesus ändert Simons Namen — ein biblischer Akt, der eine Mission kennzeichnet (vgl. Abram → Abraham).",
          },
          p3: {
            en: "The &quot;keys&quot; symbolize authority (cf. Isaiah 22:22).",
            fr: "Les « clés » symbolisent l'autorité (cf. Isaïe 22:22).",
            es: 'Las "llaves" simbolizan autoridad (cf. Isaías 22:22).',
            de: 'Die „Schlüssel" symbolisieren Autorität (vgl. Jesaja 22:22).',
          },
        },
        ccc: {
          text: {
            en: "Christ, the living stone, makes of Peter the rock of his Church. He gave him the keys of the Church and instituted him shepherd of the whole flock.",
            fr: "« Le Christ, pierre vivante, fait de Pierre le roc de son Église. Il lui a donné les clés de l'Église et l'a institué pasteur de tout le troupeau. »",
            es: '"Cristo, la piedra viva, hace de Pedro la roca de su Iglesia. Le dio las llaves de la Iglesia y lo instituyó pastor de todo el rebaño."',
            de: "„Christus, der lebendige Stein, macht Petrus zum Felsen seiner Kirche. Er hat ihm die Schlüssel der Kirche übergeben und ihn zum Hirten der ganzen Herde bestellt.“",
          },
          source: {
            en: "Catechism of the Catholic Church 552",
            fr: "Catéchisme de l'Église Catholique 552",
            es: "Catecismo de la Iglesia Católica 552",
            de: "Katechismus der Katholischen Kirche 552",
          },
        },
      },
    },
    acts: {
      h2: {
        en: "II. Peter's Leadership in the Early Church",
        fr: "II. Le Leadership de Pierre dans l'Église Primitive",
        es: "II. El Liderazgo de Pedro en la Iglesia Primitiva",
        de: "II. Petrus' Führung in der Frühen Kirche",
      },
      p1: {
        en: "The Acts of the Apostles highlights Peter's central role:",
        fr: "Les Actes des Apôtres soulignent le rôle central de Pierre :",
        es: "Los Hechos de los Apóstoles destacan el papel central de Pedro:",
        de: "Die Apostelgeschichte hebt Petrus' zentrale Rolle hervor:",
      },
      points: {
        p1: {
          action: {
            en: "Leads the selection of Judas' replacement",
            fr: "Dirige la sélection du remplaçant de Judas",
            es: "Dirige la selección del reemplazo de Judas",
            de: "Leitet die Auswahl des Nachfolgers für Judas",
          },
          ref: {
            en: "Acts 1:15–26",
            fr: "Actes 1:15–26",
            es: "Hechos 1:15–26",
            de: "Apostelgeschichte 1:15–26",
          },
        },
        p2: {
          action: {
            en: "Gives the first public sermon at Pentecost",
            fr: "Donne le premier sermon public à la Pentecôte",
            es: "Da el primer sermón público en Pentecostés",
            de: "Hält die erste öffentliche Predigt an Pfingsten",
          },
          ref: {
            en: "Acts 2:14–41",
            fr: "Actes 2:14–41",
            es: "Hechos 2:14–41",
            de: "Apostelgeschichte 2:14–41",
          },
        },
        p3: {
          action: {
            en: "Performs the first healing",
            fr: "Accomplit la première guérison",
            es: "Realiza la primera sanación",
            de: "Vollbringt die erste Heilung",
          },
          ref: {
            en: "Acts 3:1–10",
            fr: "Actes 3:1–10",
            es: "Hechos 3:1–10",
            de: "Apostelgeschichte 3:1–10",
          },
        },
        p4: {
          action: {
            en: "Is the first to preach to Gentiles",
            fr: "Est le premier à prêcher aux Gentils",
            es: "Es el primero en predicar a los gentiles",
            de: "Ist der Erste, der den Heiden predigt",
          },
          ref: {
            en: "Acts 10",
            fr: "Actes 10",
            es: "Hechos 10",
            de: "Apostelgeschichte 10",
          },
        },
        p5: {
          action: {
            en: "Settles doctrinal dispute at the Council of Jerusalem",
            fr: "Règle le différend doctrinal au Concile de Jérusalem",
            es: "Resuelve la disputa doctrinal en el Concilio de Jerusalén",
            de: "Schlichtet Lehrstreitigkeiten auf dem Konzil von Jerusalem",
          },
          ref: {
            en: "Acts 15",
            fr: "Actes 15",
            es: "Hechos 15",
            de: "Apostelgeschichte 15",
          },
        },
      },
      p2: {
        en: "Though others also played major roles (especially Paul), Peter consistently acts with recognized authority.",
        fr: "Bien que d'autres aient également joué des rôles majeurs (en particulier Paul), Pierre agit constamment avec une autorité reconnue.",
        es: "Aunque otros también desempeñaron roles importantes (especialmente Pablo), Pedro actúa consistentemente con autoridad reconocida.",
        de: "Obwohl auch andere wichtige Rollen spielten (besonders Paulus), handelt Petrus konsequent mit anerkannter Autorität.",
      },
    },
    fathers: {
      h2: {
        en: "III. Early Christian Witness",
        fr: "III. Témoignage des Premiers Chrétiens",
        es: "III. Testimonio Cristiano Primitivo",
        de: "III. Frühchristliches Zeugnis",
      },
      p1: {
        en: "Church Fathers unanimously acknowledged Peter's unique role:",
        fr: "Les Pères de l'Église ont unanimement reconnu le rôle unique de Pierre :",
        es: "Los Padres de la Iglesia reconocieron unánimemente el papel único de Pedro:",
        de: "Die Kirchenväter erkannten einstimmig Petrus' einzigartige Rolle an:",
      },
      f1: {
        name: {
          en: "St. Irenaeus",
          fr: "Saint Irénée",
          es: "San Ireneo",
          de: "Hl. Irenäus",
        },
        year: {
          en: "c. 180 AD",
          fr: "vers 180 ap. J.-C.",
          es: "c. 180 d.C.",
          de: "ca. 180 n. Chr.",
        },
        quote: {
          en: "...the Church founded and organized at Rome by the two most glorious apostles, Peter and Paul...",
          fr: "...l'Église fondée et organisée à Rome par les deux très glorieux apôtres, Pierre et Paul...",
          es: "...la Iglesia fundada y organizada en Roma por los dos gloriosísimos apóstoles, Pedro y Pablo...",
          de: "...die Kirche, die in Rom von den beiden ruhmreichsten Aposteln, Petrus und Paulus, gegründet und organisiert wurde...",
        },
      },
      f2: {
        name: {
          en: "Tertullian",
          fr: "Tertullien",
          es: "Tertuliano",
          de: "Tertullian",
        },
        year: {
          en: "c. 200 AD",
          fr: "vers 200 ap. J.-C.",
          es: "c. 200 d.C.",
          de: "ca. 200 n. Chr.",
        },
        quote: {
          en: "Refers to the bishop of Rome as the successor of Peter.",
          fr: "Fait référence à l'évêque de Rome comme le successeur de Pierre.",
          es: "Se refiere al obispo de Roma como el sucesor de Pedro.",
          de: "Bezieht sich auf den Bischof von Rom als den Nachfolger Petri.",
        },
      },
      f3: {
        name: {
          en: "St. Cyprian",
          fr: "Saint Cyprien",
          es: "San Cipriano",
          de: "Hl. Cyprian",
        },
        year: {
          en: "c. 250 AD",
          fr: "vers 250 ap. J.-C.",
          es: "c. 250 d.C.",
          de: "ca. 250 n. Chr.",
        },
        quote: {
          en: "The primacy is given to Peter...",
          fr: "La primauté est donnée à Pierre...",
          es: "Se le da la primacía a Pedro...",
          de: "Der Primat ist Petrus gegeben...",
        },
      },
      p2: {
        en: "Rome, as the city where Peter was martyred and buried, became the natural seat of his successor.",
        fr: "Rome, en tant que ville où Pierre a été martyrisé et enterré, est devenue le siège naturel de son successeur.",
        es: "Roma, como la ciudad donde Pedro fue martirizado y enterrado, se convirtió en la sede natural de su sucesor.",
        de: "Rom, als die Stadt, in der Petrus den Märtyrertod erlitt und begraben wurde, wurde zum natürlichen Sitz seines Nachfolgers.",
      },
    },
    succession: {
      h2: {
        en: "IV. Apostolic Succession and the Papacy",
        fr: "IV. Succession Apostolique et la Papauté",
        es: "IV. Sucesión Apostólica y el Papado",
        de: "IV. Apostolische Sukzession und das Papsttum",
      },
      p1: {
        en: "The Catholic understanding is not that Peter alone mattered, but that his office continues through apostolic succession:",
        fr: "La compréhension catholique n'est pas que seul Pierre importait, mais que son office se poursuit à travers la succession apostolique :",
        es: "El entendimiento católico no es que solo Pedro importara, sino que su oficio continúa a través de la sucesión apostólica:",
        de: "Das katholische Verständnis ist nicht, dass nur Petrus zählte, sondern dass sein Amt durch die apostolische Sukzession fortbesteht:",
      },
      points: {
        p1: {
          en: "Each Pope is a successor of Peter.",
          fr: "Chaque Pape est un successeur de Pierre.",
          es: "Cada Papa es un sucesor de Pedro.",
          de: "Jeder Papst ist ein Nachfolger Petri.",
        },
        p2: {
          en: "The office of the Pope is to preserve unity, defend truth, and shepherd the universal Church.",
          fr: "L'office du Pape est de préserver l'unité, de défendre la vérité et de paître l'Église universelle.",
          es: "El oficio del Papa es preservar la unidad, defender la verdad y pastorear la Iglesia universal.",
          de: "Das Amt des Papstes besteht darin, die Einheit zu wahren, die Wahrheit zu verteidigen und die universale Kirche zu leiten.",
        },
      },
      ccc: {
        text: {
          en: "&quot;The Pope, Bishop of Rome and Peter&apos;s successor, is the perpetual and visible source and foundation of the unity both of the bishops and of the whole company of the faithful.&quot;",
          fr: "« Le Pape, évêque de Rome et successeur de Pierre, est le principe et le fondement perpétuel et visible de l'unité tant des évêques que de la multitude des fidèles. »",
          es: '"El Papa, obispo de Roma y sucesor de Pedro, es el principio y fundamento perpetuo y visible de unidad, tanto de los obispos como de la muchedumbre de los fieles."',
          de: "„Der Papst, der Bischof von Rom und Nachfolger Petri, ist das immerwährende, sichtbare Prinzip und Fundament für die Einheit der Vielheit sowohl der Bischöfe als auch der Gläubigen.“",
        },
        source: {
          en: "Catechism of the Catholic Church 882",
          fr: "Catéchisme de l'Église Catholique 882",
          es: "Catecismo de la Iglesia Católica 882",
          de: "Katechismus der Katholischen Kirche 882",
        },
      },
    },
    objections: {
      h2: {
        en: "V. Objections Addressed",
        fr: "V. Objections Traitées",
        es: "V. Objeciones Abordadas",
        de: "V. Einwände Behandelt",
      },
      o1: {
        obj: {
          en: "Peter wasn't in Rome.",
          fr: "Pierre n'était pas à Rome.",
          es: "Pedro no estuvo en Roma.",
          de: "Petrus war nicht in Rom.",
        },
        res: {
          en: "Historical evidence (e.g., writings of Clement, Ignatius, Irenaeus) strongly affirm Peter's Roman ministry and martyrdom.",
          fr: "Les preuves historiques (par ex., les écrits de Clément, Ignace, Irénée) affirment fortement le ministère romain et le martyre de Pierre.",
          es: "La evidencia histórica (p. ej., escritos de Clemente, Ignacio, Ireneo) afirma firmemente el ministerio romano y el martirio de Pedro.",
          de: "Historische Beweise (z. B. Schriften von Clemens, Ignatius, Irenäus) bestätigen nachdrücklich Petrus' Wirken und Martyrium in Rom.",
        },
      },
      o2: {
        obj: {
          en: "Peter never called himself Pope.",
          fr: "Pierre ne s'est jamais appelé Pape.",
          es: "Pedro nunca se llamó a sí mismo Papa.",
          de: "Petrus hat sich nie Papst genannt.",
        },
        res: {
          en: 'Titles develop; the early Church emphasized roles and authority. "Pope" (from Latin papa) was used later to designate his unique pastoral authority.',
          fr: "Les titres se développent ; l'Église primitive mettait l'accent sur les rôles et l'autorité. « Pape » (du latin papa) a été utilisé plus tard pour désigner son autorité pastorale unique.",
          es: 'Los títulos se desarrollan; la Iglesia primitiva enfatizaba los roles y la autoridad. "Papa" (del latín papa) se usó más tarde para designar su autoridad pastoral única.',
          de: 'Titel entwickeln sich; die frühe Kirche betonte Rollen und Autorität. „Papst" (von Latein papa) wurde später verwendet, um seine einzigartige pastorale Autorität zu bezeichnen.',
        },
      },
      o3: {
        obj: {
          en: "All apostles were equal.",
          fr: "Tous les apôtres étaient égaux.",
          es: "Todos los apóstoles eran iguales.",
          de: "Alle Apostel waren gleich.",
        },
        res: {
          en: "All shared in apostolic ministry, but Peter was singled out for specific responsibilities (Luke 22:32; John 21:15–17).",
          fr: "Tous partageaient le ministère apostolique, mais Pierre a été distingué pour des responsabilités spécifiques (Luc 22:32 ; Jean 21:15–17).",
          es: "Todos compartían el ministerio apostólico, pero Pedro fue señalado para responsabilidades específicas (Lucas 22:32; Juan 21:15–17).",
          de: "Alle teilten am apostolischen Dienst, aber Petrus wurde für spezifische Verantwortlichkeiten herausgegriffen (Lukas 22:32; Johannes 21:15–17).",
        },
      },
    },
    conclusion: {
      h2: {
        en: "Conclusion",
        fr: "Conclusion",
        es: "Conclusión",
        de: "Schlussfolgerung",
      },
      p1: {
        en: "The Catholic belief that Peter was the first Pope is deeply grounded in Scripture, affirmed by early Church history, and realized in the continuing leadership of the bishops of Rome. The papacy exists not as a personal honor, but as a pastoral office to preserve unity and truth in the Church Christ founded.",
        fr: "La croyance catholique que Pierre fut le premier Pape est profondément ancrée dans l'Écriture, affirmée par l'histoire de l'Église primitive, et réalisée dans la direction continue des évêques de Rome. La papauté n'existe pas comme un honneur personnel, mais comme un office pastoral pour préserver l'unité et la vérité dans l'Église fondée par le Christ.",
        es: "La creencia católica de que Pedro fue el primer Papa está profundamente fundamentada en la Escritura, afirmada por la historia de la Iglesia primitiva, y realizada en el liderazgo continuo de los obispos de Roma. El papado no existe como un honor personal, sino como un oficio pastoral para preservar la unidad y la verdad en la Iglesia que Cristo fundó.",
        de: "Der katholische Glaube, dass Petrus der erste Papst war, ist tief in der Schrift begründet, von der frühen Kirchengeschichte bestätigt und wird in der fortwährenden Führung der Bischöfe von Rom verwirklicht. Das Papsttum existiert nicht als persönliche Ehre, sondern als pastorales Amt, um Einheit und Wahrheit in der von Christus gegründeten Kirche zu bewahren.",
      },
      callout: {
        text: {
          en: "Feed my sheep.",
          fr: "« Nourris mes brebis. »",
          es: '"Apacienta mis ovejas."',
          de: "„Weide meine Schafe.“",
        },
        source: {
          en: "John 21:17",
          fr: "Jean 21:17",
          es: "Juan 21:17",
          de: "Johannes 21:17",
        },
      },
    },
    bridge: {
      h3: {
        en: "The Succession Continues",
        fr: "La Succession Continue",
        es: "La Sucesión Continúa",
        de: "Die Nachfolge Geht Weiter",
      },
      p1: {
        en: "Peter's authority didn't die with him—it was passed on through apostolic succession to his successors in Rome. This unbroken line continues to the present day with Pope Francis as the 266th successor of Peter.",
        fr: "L'autorité de Pierre n'est pas morte avec lui — elle a été transmise par succession apostolique à ses successeurs à Rome. Cette lignée ininterrompue se poursuit jusqu'à nos jours avec le Pape François comme 266e successeur de Pierre.",
        es: "La autoridad de Pedro no murió con él—fue transmitida a través de la sucesión apostólica a sus sucesores en Roma. Esta línea ininterrumpida continúa hasta el día de hoy con el Papa Francisco como el 266º sucesor de Pedro.",
        de: "Petrus' Autorität starb nicht mit ihm—sie wurde durch apostolische Sukzession an seine Nachfolger in Rom weitergegeben. Diese ununterbrochene Linie setzt sich bis heute fort mit Papst Franziskus als dem 266. Nachfolger Petri.",
      },
      p2: {
        en: "The papacy isn't just about one man's authority—it's about the Church's teaching authority as a whole. Let's explore what that means and how the Magisterium functions.",
        fr: "La papauté ne concerne pas seulement l'autorité d'un seul homme — elle concerne l'autorité d'enseignement de l'Église dans son ensemble. Explorons ce que cela signifie et comment fonctionne le Magistère.",
        es: "El papado no se trata solo de la autoridad de un hombre—se trata de la autoridad de enseñanza de la Iglesia en su conjunto. Exploremos lo que eso significa y cómo funciona el Magisterio.",
        de: "Beim Papsttum geht es nicht nur um die Autorität eines Mannes—es geht um die Lehrautorität der Kirche als Ganzes. Lassen Sie uns untersuchen, was das bedeutet und wie das Lehramt funktioniert.",
      },
    },
  },

  seventyThreeBooks: {
    title: {
      en: "73 Books?",
      fr: "73 Livres ?",
      es: "¿73 Libros?",
      de: "73 Bücher?",
    },
    subtitle: {
      en: "Why the Catholic Bible has more books than the Protestant Bible",
      fr: "Pourquoi la Bible catholique a plus de livres que la Bible protestante",
      es: "Por qué la Biblia católica tiene más libros que la Biblia protestante",
      de: "Warum die katholische Bibel mehr Bücher hat als die protestantische Bibel",
    },
    quote: {
      text: {
        en: "Your word is a lamp to my feet and a light to my path.",
        fr: "Ta parole est une lampe à mes pieds, et une lumière sur mon sentier.",
        es: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",
        de: "Dein Wort ist meines Fußes Leuchte und ein Licht auf meinem Wege.",
      },
      source: {
        en: "Psalm 119:105",
        fr: "Psaume 119:105",
        es: "Salmo 119:105",
        de: "Psalm 119:105",
      },
    },
    intro: {
      h2: {
        en: "Why This Matters",
        fr: "Pourquoi C'est Important",
        es: "Por Qué Importa Esto",
        de: "Warum Dies Wichtig Ist",
      },
      p1: {
        en: "The difference between the <strong>Catholic Bible</strong> (73 books) and the <strong> Protestant Bible</strong> (66 books) is one of the most common—and most misunderstood—issues in Christian theology. Protestants often accuse Catholics of &quot;adding books&quot; at the Council of Trent. But history, scholarship, and early Church authority all tell a very different story.",
        fr: "La différence entre la <strong>Bible catholique</strong> (73 livres) et la <strong>Bible protestante</strong> (66 livres) est l'une des questions les plus courantes — et les plus mal comprises — de la théologie chrétienne. Les protestants accusent souvent les catholiques d'avoir « ajouté des livres » au Concile de Trente. Mais l'histoire, l'érudition et l'autorité de l'Église primitive racontent toutes une histoire très différente.",
        es: "La diferencia entre la <strong>Biblia Católica</strong> (73 libros) y la <strong>Biblia Protestante</strong> (66 libros) es uno de los temas más comunes —y más incomprendidos— de la teología cristiana. Los protestantes a menudo acusan a los católicos de &quot;añadir libros&quot; en el Concilio de Trento. Pero la historia, la erudición y la autoridad de la Iglesia primitiva cuentan una historia muy diferente.",
        de: "Der Unterschied zwischen der <strong>katholischen Bibel</strong> (73 Bücher) und der <strong>protestantischen Bibel</strong> (66 Bücher) ist eines der häufigsten — und am meisten missverstandenen — Themen der christlichen Theologie. Protestanten werfen Katholiken oft vor, beim Konzil von Trient „Bücher hinzugefügt“ zu haben. Aber Geschichte, Wissenschaft und die Autorität der frühen Kirche erzählen alle eine ganz andere Geschichte.",
      },
      callout: {
        en: "The Catholic Church never added books—it preserved the full canon received from the early Church.",
        fr: "L'Église catholique n'a jamais ajouté de livres — elle a préservé le canon complet reçu de l'Église primitive.",
        es: "La Iglesia Católica nunca añadió libros, sino que preservó el canon completo recibido de la Iglesia primitiva.",
        de: "Die katholische Kirche hat nie Bücher hinzugefügt – sie hat den vollständigen Kanon bewahrt, den sie von der frühen Kirche empfangen hat.",
      },
    },
    video1: {
      title: {
        en: "How were the books of The Bible decided?",
        fr: "Comment les livres de la Bible ont-ils été décidés ?",
        es: "¿Cómo se decidieron los libros de la Biblia?",
        de: "Wie wurden die Bücher der Bibel entschieden?",
      },
    },
    dispute: {
      h2: {
        en: "The Root of the Dispute: The Seven Disputed Books",
        fr: "La Racine du Différend : Les Sept Livres Disputés",
        es: "La Raíz de la Disputa: Los Siete Libros Disputados",
        de: "Die Wurzel des Streits: Die Sieben Umstrittenen Bücher",
      },
      p1: {
        en: "The <strong>Deuterocanonical Books</strong> (called &quot;Apocrypha&quot; by Protestants) include:",
        fr: "Les <strong>Livres Deutérocanoniques</strong> (appelés « Apocryphes » par les protestants) incluent :",
        es: "Los <strong>Libros Deuterocanónicos</strong> (llamados &quot;Apócrifos&quot; por los protestantes) incluyen:",
        de: "Die <strong>Deuterokanonischen Bücher</strong> (von Protestanten „Apokryphen“ genannt) umfassen:",
      },
      books: {
        b1: {
          en: "Tobit",
          fr: "Tobie",
          es: "Tobías",
          de: "Tobit",
        },
        b2: {
          en: "Judith",
          fr: "Judith",
          es: "Judit",
          de: "Judit",
        },
        b3: {
          en: "Wisdom",
          fr: "Sagesse",
          es: "Sabiduría",
          de: "Weisheit",
        },
        b4: {
          en: "Sirach (Ecclesiasticus)",
          fr: "Siracide (Ecclésiastique)",
          es: "Eclesiástico (Sirácida)",
          de: "Sirach (Jesus Sirach)",
        },
        b5: {
          en: "Baruch (including the Letter of Jeremiah)",
          fr: "Baruch (incluant la Lettre de Jérémie)",
          es: "Baruc (incluyendo la Carta de Jeremías)",
          de: "Baruch (einschließlich des Briefes des Jeremia)",
        },
        b6: {
          en: "1 Maccabees",
          fr: "1 Maccabées",
          es: "1 Macabeos",
          de: "1 Makkabäer",
        },
        b7: {
          en: "2 Maccabees",
          fr: "2 Maccabées",
          es: "2 Macabeos",
          de: "2 Makkabäer",
        },
      },
      p2: {
        en: "Plus longer versions of <strong>Daniel</strong> and <strong>Esther</strong>.",
        fr: "Ainsi que des versions plus longues de <strong>Daniel</strong> et <strong>Esther</strong>.",
        es: "Además de versiones más largas de <strong>Daniel</strong> y <strong>Ester</strong>.",
        de: "Sowie längere Fassungen von <strong>Daniel</strong> und <strong>Esther</strong>.",
      },
      callout: {
        en: "These books were accepted in Christian Bibles for over a millennium until <strong>Martin Luther</strong> removed them in the 16th century—not based on historical consensus, but on theological grounds.",
        fr: "Ces livres ont été acceptés dans les Bibles chrétiennes pendant plus d'un millénaire jusqu'à ce que <strong>Martin Luther</strong> les retire au 16ème siècle — non pas sur la base d'un consensus historique, mais pour des raisons théologiques.",
        es: "Estos libros fueron aceptados en las Biblias cristianas durante más de un milenio hasta que <strong>Martín Lutero</strong> los eliminó en el siglo XVI, no basándose en el consenso histórico, sino en fundamentos teológicos.",
        de: "Diese Bücher wurden über ein Jahrtausend lang in christlichen Bibeln akzeptiert, bis <strong>Martin Luther</strong> sie im 16. Jahrhundert entfernte – nicht aufgrund eines historischen Konsenses, sondern aus theologischen Gründen.",
      },
    },
    arguments: {
      h2: {
        en: "Protestant Arguments—and the Catholic Response",
        fr: "Arguments Protestants — et la Réponse Catholique",
        es: "Argumentos Protestantes—y la Respuesta Católica",
        de: "Protestantische Argumente – und die Katholische Antwort",
      },
      o1: {
        obj: {
          en: "The Jews didn't accept these books",
          fr: "Les Juifs n'acceptaient pas ces livres",
          es: "Los judíos no aceptaron estos libros",
          de: "Die Juden akzeptierten diese Bücher nicht",
        },
        res1: {
          en: "There was no single, universally accepted Jewish canon in the time of Jesus. Scholars identify at least five different Jewish canons in use during the 1st century: the Pharisaic, Sadducean, Samaritan, Qumran, and the Septuagint tradition.",
          fr: "Il n'y avait aucun canon juif unique et universellement accepté à l'époque de Jésus. Les érudits identifient au moins cinq canons juifs différents en usage au 1er siècle : la tradition pharisienne, sadducéenne, samaritaine, de Qumrân et de la Septante.",
          es: "No existía un único canon judío universalmente aceptado en tiempos de Jesús. Los eruditos identifican al menos cinco cánones judíos diferentes en uso durante el siglo I: la tradición farisea, saducea, samaritana, de Qumrán y la Septuaginta.",
          de: "Es gab keinen einzigen, universell anerkannten jüdischen Kanon zur Zeit Jesu. Gelehrte identifizieren mindestens fünf verschiedene jüdische Kanons, die im 1. Jahrhundert in Gebrauch waren: die pharisäische, sadduzäische, samaritanische, Qumran- und die Septuaginta-Tradition.",
        },
        res2: {
          en: "The Septuagint—a Greek translation of the Hebrew Scriptures that included the Deuterocanonical books —was the version most often quoted by the New Testament authors.",
          fr: "La Septante — une traduction grecque des Écritures hébraïques qui incluait les livres deutérocanoniques — était la version la plus souvent citée par les auteurs du Nouveau Testament.",
          es: "La Septuaginta —una traducción griega de las Escrituras hebreas que incluía los libros deuterocanónicos — fue la versión más citada por los autores del Nuevo Testamento.",
          de: "Die Septuaginta – eine griechische Übersetzung der hebräischen Schriften, die die deuterokanonischen Bücher enthielt – war die Version, die von den Autoren des Neuen Testaments am häufigsten zitiert wurde.",
        },
        quote: {
          text: {
            en: "The New Testament authors almost always use the Septuagint to access the Jewish scriptures.",
            fr: "Les auteurs du Nouveau Testament utilisent presque toujours la Septante pour accéder aux écritures juives.",
            es: "Los autores del Nuevo Testamento casi siempre usan la Septuaginta para acceder a las escrituras judías.",
            de: "Die Autoren des Neuen Testaments verwenden fast immer die Septuaginta, um auf die jüdischen Schriften zuzugreifen.",
          },
          source: {
            en: "Timothy Michael Law, Oxford Handbook of the Septuagint",
            fr: "Timothy Michael Law, Manuel d'Oxford de la Septante",
            es: "Timothy Michael Law, Manual de Oxford de la Septuaginta",
            de: "Timothy Michael Law, Oxford Handbuch der Septuaginta",
          },
        },
      },

      o2: {
        obj: {
          en: "The early Christians rejected these books",
          fr: "Les premiers chrétiens rejetaient ces livres",
          es: "Los primeros cristianos rechazaron estos libros",
          de: "Die frühen Christen lehnten diese Bücher ab",
        },
        res1: {
          en: "That's demonstrably false. The Councils of Hippo (393 AD) and Carthage (397 AD) both produced lists of canonical books identical to today's Catholic Bible. These councils included the Deuterocanonicals.",
          fr: "C'est manifestement faux. Les Conciles d'Hippone (393 ap. J.-C.) et de Carthage (397 ap. J.-C.) ont tous deux produit des listes de livres canoniques identiques à la Bible catholique d'aujourd'hui. Ces conciles incluaient les Deutérocanoniques.",
          es: "Eso es demostrablemente falso. Los Concilios de Hipona (393 d.C.) y Cartago (397 d.C.) produjeron listas de libros canónicos idénticas a la Biblia católica actual. Estos concilios incluyeron los Deuterocanónicos.",
          de: "Das ist nachweislich falsch. Die Konzilien von Hippo (393 n. Chr.) und Karthago (397 n. Chr.) erstellten beide Listen kanonischer Bücher, die mit der heutigen katholischen Bibel identisch sind. Diese Konzilien schlossen die Deuterokanonika ein.",
        },
        res2: {
          en: "Church Fathers like Augustine passionately defended the Deuterocanonical books as inspired Scripture.",
          fr: "Des Pères de l'Église comme Augustin ont passionnément défendu les livres deutérocanoniques comme Écriture inspirée.",
          es: "Padres de la Iglesia como Agustín defendieron apasionadamente los libros deuterocanónicos como Escritura inspirada.",
          de: "Kirchenväter wie Augustinus verteidigten die deuterokanonischen Bücher leidenschaftlich als inspirierte Schrift.",
        },
        quote: {
          text: {
            en: "The whole Church throughout the world maintains this canon.",
            fr: "L'Église entière à travers le monde maintient ce canon.",
            es: "La Iglesia entera en todo el mundo mantiene este canon.",
            de: "Die ganze Kirche auf der ganzen Welt hält an diesem Kanon fest.",
          },
          source: {
            en: "St. Augustine, De Doctrina Christiana",
            fr: "Saint Augustin, De Doctrina Christiana",
            es: "San Agustín, De Doctrina Christiana",
            de: "Hl. Augustinus, De Doctrina Christiana",
          },
        },
      }, // ← IMPORTANT COMMA

      o3: {
        obj: {
          en: "They're not quoted in the New Testament",
          fr: "Ils ne sont pas cités dans le Nouveau Testament",
          es: "No se citan en el Nuevo Testamento",
          de: "Sie werden im Neuen Testament nicht zitiert",
        },
        res1: {
          en: "Neither are many undisputed books in Protestant Bibles. Books like Judges, Ezra, Esther, Obadiah, Nahum, and Zephaniah are never explicitly cited in the New Testament either.",
          fr: "De nombreux livres incontestés dans les Bibles protestantes ne le sont pas non plus. Des livres comme Juges, Esdras, Esther, Abdias, Nahum, et Sophonie ne sont jamais explicitement cités dans le Nouveau Testament non plus.",
          es: "Tampoco lo son muchos libros indiscutibles en las Biblias protestantes. Libros como Jueces, Esdras, Ester, Abdías, Nahúm, y Sofonías tampoco se citan explícitamente en el Nuevo Testamento.",
          de: "Das gilt auch für viele unbestrittene Bücher in protestantischen Bibeln. Bücher wie Richter, Esra, Esther, Obadja, Nahum, und Zefanja werden ebenfalls nie explizit im Neuen Testament zitiert.",
        },
        res2: {
          en: "The Deuterocanonicals are often referenced or echoed: Hebrews 11 alludes to 2 Maccabees 6–7; Wisdom 2 prophesies about the righteous man being killed—fulfilled in Christ; Jesus celebrates Hanukkah in John 10:22–23, a feast only described in 1 Maccabees.",
          fr: "Les Deutérocanoniques sont souvent référencés ou évoqués : Hébreux 11 fait allusion à 2 Maccabées 6–7 ; Sagesse 2 prophétise la mort du juste — accomplie dans le Christ ; Jésus célèbre Hanoukka dans Jean 10:22–23, une fête décrite uniquement dans 1 Maccabées.",
          es: "Los Deuterocanónicos a menudo se referencian o se hacen eco de ellos: Hebreos 11 alude a 2 Macabeos 6–7; Sabiduría 2 profetiza sobre la muerte del justo —cumplida en Cristo; Jesús celebra Janucá en Juan 10:22–23, una fiesta descrita solo en 1 Macabeos.",
          de: "Auf die Deuterokanonika wird oft verwiesen oder angespielt: Hebräer 11 spielt auf 2 Makkabäer 6–7 an; Weisheit 2 prophezeit den Tod des Gerechten – erfüllt in Christus; Jesus feiert Chanukka in Johannes 10:22–23, ein Fest, das nur in 1 Makkabäer beschrieben wird.",
        },
        quote: {
          text: {
            en: "Wisdom 2… is really explicitly Christological in a way that would be very hard to predict.",
            fr: "Sagesse 2... est vraiment explicitement christologique d'une manière qui serait très difficile à prédire.",
            es: "Sabiduría 2... es realmente explícitamente cristológico de una manera que sería muy difícil de predecir.",
            de: "Weisheit 2... ist wirklich explizit christologisch auf eine Weise, die sehr schwer vorherzusagen wäre.",
          },
          source: {
            en: "Biblical Scholars",
            fr: "Érudits Bibliques",
            es: "Eruditos Bíblicos",
            de: "Bibelwissenschaftler",
          },
        },
      },

      o4: {
        obj: {
          en: "St. Jerome rejected the Deuterocanonical books",
          fr: "Saint Jérôme rejetait les livres deutérocanoniques",
          es: "San Jerónimo rechazó los libros deuterocanónicos",
          de: "Der heilige Hieronymus lehnte die deuterokanonischen Bücher ab",
        },
        res1: {
          en: "Jerome, influenced by the rabbinic canon, initially expressed doubts about these books. However, Jerome ultimately submitted to the judgment of the Church—and translated all the Deuterocanonical books into Latin for inclusion in the Vulgate.",
          fr: "Jérôme, influencé par le canon rabbinique, a d'abord exprimé des doutes sur ces livres. Cependant, Jérôme s'est finalement soumis au jugement de l'Église — et a traduit tous les livres deutérocanoniques en latin pour les inclure dans la Vulgate.",
          es: "Jerónimo, influenciado por el canon rabínico, inicialmente expresó dudas sobre estos libros. Sin embargo, Jerónimo finalmente se sometió al juicio de la Iglesia — y tradujo todos los libros deuterocanónicos al latín para incluirlos en la Vulgata.",
          de: "Hieronymus, beeinflusst vom rabbinischen Kanon, äußerte anfangs Zweifel an diesen Büchern. Jedoch unterwarf sich Hieronymus letztendlich dem Urteil der Kirche – und übersetzte alle deuterokanonischen Bücher ins Lateinische zur Aufnahme in die Vulgata.",
        },
        res2: {
          en: "Despite his initial reservations, Jerome quoted from the Deuterocanonical books as Scripture in his later works. Most importantly, Jerome's early private opinion was not binding—the consistent canon affirmed by councils and tradition was.",
          fr: "Malgré ses réserves initiales, Jérôme a cité les livres deutérocanoniques comme Écriture dans ses œuvres ultérieures. Plus important encore, l'opinion privée précoce de Jérôme n'était pas contraignante — le canon cohérent affirmé par les conciles et la tradition l'était.",
          es: "A pesar de sus reservas iniciales, Jerónimo citó los libros deuterocanónicos como Escritura en sus obras posteriores. Lo más importante es que la opinión privada temprana de Jerónimo no era vinculante; el canon consistente afirmado por los concilios y la tradición sí lo era.",
          de: "Trotz seiner anfänglichen Vorbehalte zitierte Hieronymus in seinen späteren Werken aus den deuterokanonischen Büchern als Heilige Schrift. Am wichtigsten ist, dass Hieronymus' frühe Privatmeinung nicht bindend war – der von Konzilien und Tradition bestätigte konsistente Kanon war es.",
        },

        quote: {
          text: {
            en: "What I have written, I have written under obedience.",
            fr: "Ce que j'ai écrit, je l'ai écrit par obéissance.",
            es: "Lo que he escrito, lo he escrito bajo obediencia.",
            de: "Was ich geschrieben habe, habe ich im Gehorsam geschrieben.",
          },
          source: {
            en: "St. Jerome, Preface to Tobit and Judith",
            fr: "Saint Jérôme, Préface de Tobie et Judith",
            es: "San Jerónimo, Prefacio a Tobías y Judit",
            de: "Hl. Hieronymus, Vorwort zu Tobit und Judit",
          },
        },
      },
    },
    reformers: {
      h2: {
        en: "What the Reformers Actually Did",
        fr: "Ce que les Réformateurs ont Vraiment Fait",
        es: "Lo que Realmente Hicieron los Reformadores",
        de: "Was die Reformatoren Tatsächlich Taten",
      },
      p1: {
        en: 'While some argue that the books were merely &quot;moved,&quot; <strong className="text-white">early Protestants removed them from the canon</strong>, first putting them in an appendix, then omitting them entirely.',
        fr: 'Alors que certains soutiennent que les livres ont été simplement « déplacés », les <strong class="text-white">premiers protestants les ont retirés du canon</strong>, les plaçant d\'abord en annexe, puis les omettant complètement.',
        es: 'Aunque algunos argumentan que los libros simplemente fueron &quot;movidos&quot;, los <strong class="text-white">primeros protestantes los eliminaron del canon</strong>, primero poniéndolos en un apéndice y luego omitiéndolos por completo.',
        de: 'Während einige argumentieren, dass die Bücher lediglich „verschoben“ wurden, <strong class="text-white">entfernten frühe Protestanten sie aus dem Kanon</strong>, stellten sie zunächst in einen Anhang und ließen sie später ganz weg.',
      },
      q1: {
        en: "&quot;The early Protestant reformers moved these books to appendices with notes denying that they were canonical, and then later Protestants dropped the appendices and removed the books altogether.&quot;",
        fr: "« Les premiers réformateurs protestants ont déplacé ces livres dans des appendices avec des notes niant qu'ils étaient canoniques, puis les protestants ultérieurs ont abandonné les appendices et supprimé les livres complètement. »",
        es: '"Los primeros reformadores protestantes movieron estos libros a apéndices con notas que negaban que fueran canónicos, y luego los protestantes posteriores eliminaron los apéndices y los libros por completo."',
        de: '„Die frühen protestantischen Reformatoren verschoben diese Bücher in Anhänge mit Anmerkungen, die ihren kanonischen Status leugneten, und spätere Protestanten ließen die Anhänge fallen und entfernten die Bücher ganz."',
      },
      p2: {
        en: 'This was <strong className="text-white">not</strong> the position of the early Church.',
        fr: "Ce n'était <strong class=\"text-white\">pas</strong> la position de l'Église primitive.",
        es: 'Esta <strong class="text-white">no</strong> era la posición de la Iglesia primitiva.',
        de: 'Dies war <strong class="text-white">nicht</strong> die Position der frühen Kirche.',
      },
      callout: {
        p1: {
          en: 'Even <strong className="text-white">Protestant historian Aaron Clay Denlinger</strong> (Reformation Bible College) admits:',
          fr: 'Même <strong class="text-white">l\'historien protestant Aaron Clay Denlinger</strong> (Reformation Bible College) admet :',
          es: 'Incluso <strong class="text-white">el historiador protestante Aaron Clay Denlinger</strong> (Reformation Bible College) admite:',
          de: 'Sogar <strong class="text-white">der protestantische Historiker Aaron Clay Denlinger</strong> (Reformation Bible College) gibt zu:',
        },
        q1: {
          en: "&quot;The books in question were denied canonical status by Palestinian Jews, but afforded canonical status by Hellenistic Jews… [and] the New Testament authors almost always quote the Septuagint, which included the Deuterocanonical books.&quot;",
          fr: "« Les livres en question se sont vu refuser le statut canonique par les Juifs palestiniens, mais se sont vu accorder le statut canonique par les Juifs hellénistiques... [et] les auteurs du Nouveau Testament citent presque toujours la Septante, qui incluait les livres deutérocanoniques. »",
          es: '"A los libros en cuestión se les negó el estatus canónico por los judíos palestinos, pero se les otorgó estatus canónico por los judíos helenísticos... [y] los autores del Nuevo Testamento casi siempre citan la Septuaginta, que incluía los libros deuterocanónicos."',
          de: '„Den betreffenden Büchern wurde von palästinensischen Juden der kanonische Status verweigert, von hellenistischen Juden jedoch zuerkannt... [und] die Autoren des Neuen Testaments zitieren fast immer die Septuaginta, die die deuterokanonischen Bücher enthielt."',
        },
      },
    },
    video2: {
      title: {
        en: "Adding or Deleting Books from the Bible?",
        fr: "Ajouter ou Supprimer des Livres de la Bible ?",
        es: "¿Añadir o Eliminar Libros de la Biblia?",
        de: "Bücher zur Bibel Hinzufügen oder Daraus Entfernen?",
      },
    },
    trent: {
      h2: {
        en: 'Was the Catholic Church "Adding" Books at Trent?',
        fr: "L'Église Catholique a-t-elle « Ajouté » des Livres à Trente ?",
        es: '¿Estaba la Iglesia Católica "Añadiendo" Libros en Trento?',
        de: 'Hat die Katholische Kirche in Trient Bücher "Hinzugefügt"?',
      },
      callout: {
        p1: {
          en: "No. The Council of Trent (1546) did not add books—it confirmed infallibly what had always been taught.",
          fr: "Non. Le Concile de Trente (1546) n'a pas ajouté de livres — il a confirmé infailliblement ce qui avait toujours été enseigné.",
          es: "No. El Concilio de Trento (1546) no añadió libros, sino que confirmó infaliblemente lo que siempre se había enseñado.",
          de: "Nein. Das Konzil von Trient (1546) hat keine Bücher hinzugefügt – es hat unfehlbar bestätigt, was immer gelehrt worden war.",
        },
        p2: {
          en: "The same canon was already affirmed at multiple earlier councils.",
          fr: "Le même canon avait déjà été affirmé lors de plusieurs conciles antérieurs.",
          es: "El mismo canon ya había sido afirmado en múltiples concilios anteriores.",
          de: "Derselbe Kanon wurde bereits auf mehreren früheren Konzilien bestätigt.",
        },
      },
      councils: {
        h3: {
          en: "Historical Councils That Affirmed the Canon",
          fr: "Conciles Historiques Ayant Affirmé le Canon",
          es: "Concilios Históricos que Afirmaron el Canon",
          de: "Historische Konzilien, die den Kanon Bestätigten",
        },
        c1: {
          name: {
            en: "Council of Rome",
            fr: "Concile de Rome",
            es: "Concilio de Roma",
            de: "Konzil von Rom",
          },
          year: {
            en: "382 AD",
            fr: "382 ap. J.-C.",
            es: "382 d.C.",
            de: "382 n. Chr.",
          },
          desc: {
            en: "Under Pope Damasus I, this council issued a list of canonical books that included the Deuterocanon.",
            fr: "Sous le pape Damase Ier, ce concile a publié une liste de livres canoniques qui incluait les Deutérocanoniques.",
            es: "Bajo el Papa Dámaso I, este concilio emitió una lista de libros canónicos que incluía los Deuterocanónicos.",
            de: "Unter Papst Damasus I. erließ dieses Konzil eine Liste kanonischer Bücher, die die Deuterokanonika einschloss.",
          },
        },
        c2: {
          name: {
            en: "Council of Hippo",
            fr: "Concile d'Hippone",
            es: "Concilio de Hipona",
            de: "Konzil von Hippo",
          },
          year: {
            en: "393 AD",
            fr: "393 ap. J.-C.",
            es: "393 d.C.",
            de: "393 n. Chr.",
          },
          desc: {
            en: "Local North African council that first listed and confirmed the full Christian biblical canon, including the Old and New Testament books, and sent it to Rome for approval.",
            fr: "Concile local d'Afrique du Nord qui a été le premier à lister et confirmer le canon biblique chrétien complet, y compris les livres de l'Ancien et du Nouveau Testament, et l'a envoyé à Rome pour approbation.",
            es: "Concilio local del norte de África que primero enumeró y confirmó el canon bíblico cristiano completo, incluidos los libros del Antiguo y Nuevo Testamento, y lo envió a Roma para su aprobación.",
            de: "Lokales nordafrikanisches Konzil, das als erstes den vollständigen christlichen Bibelkanon auflistete und bestätigte, einschließlich der Bücher des Alten und Neuen Testaments, und ihn zur Genehmigung nach Rom sandte.",
          },
        },
        c3: {
          name: {
            en: "Council of Carthage",
            fr: "Concile de Carthage",
            es: "Concilio de Cartago",
            de: "Konzil von Karthago",
          },
          year: {
            en: "397 AD",
            fr: "397 ap. J.-C.",
            es: "397 d.C.",
            de: "397 n. Chr.",
          },
          desc: {
            en: "Confirmed Canon 36, listing the 73 books of the Bible used in the Catholic Church today—46 Old Testament (including the Deuterocanonical books) and 27 New Testament books. Acts signed by St. Augustine.",
            fr: "A confirmé le Canon 36, listant les 73 livres de la Bible utilisés aujourd'hui dans l'Église catholique — 46 livres de l'Ancien Testament (y compris les livres deutérocanoniques) et 27 livres du Nouveau Testament. Actes signés par Saint Augustin.",
            es: "Confirmó el Canon 36, enumerando los 73 libros de la Biblia utilizados en la Iglesia Católica hoy en día: 46 del Antiguo Testamento (incluidos los libros deuterocanónicos) y 27 del Nuevo Testamento. Actas firmadas por San Agustín.",
            de: "Bestätigte Kanon 36, der die 73 Bücher der Bibel auflistet, die heute in der katholischen Kirche verwendet werden – 46 Bücher des Alten Testaments (einschließlich der deuterokanonischen Bücher) und 27 Bücher des Neuen Testaments. Akten unterzeichnet vom Hl. Augustinus.",
          },
        },
        c4: {
          name: {
            en: "Council of Florence",
            fr: "Concile de Florence",
            es: "Concilio de Florencia",
            de: "Konzil von Florenz",
          },
          year: {
            en: "1442 AD",
            fr: "1442 ap. J.-C.",
            es: "1442 d.C.",
            de: "1442 n. Chr.",
          },
          desc: {
            en: "Formally reaffirmed the same canon for both East and West.",
            fr: "A réaffirmé formellement le même canon pour l'Orient et l'Occident.",
            es: "Reafirmó formalmente el mismo canon tanto para Oriente como para Occidente.",
            de: "Bestätigte formell denselben Kanon für Ost und West.",
          },
        },
        c5: {
          name: {
            en: "Council of Trent",
            fr: "Concile de Trente",
            es: "Concilio de Trento",
            de: "Konzil von Trient",
          },
          year: {
            en: "1546 AD",
            fr: "1546 ap. J.-C.",
            es: "1546 d.C.",
            de: "1546 n. Chr.",
          },
          desc: {
            en: 'In response to Protestant reformers rejecting the Deuterocanon, Trent definitively reaffirmed the traditional canon. It did not "add" books—it preserved what had already been held for over 1,100 years.',
            fr: "En réponse aux réformateurs protestants rejetant les Deutérocanoniques, Trente a réaffirmé définitivement le canon traditionnel. Il n'a pas « ajouté » de livres — il a préservé ce qui était tenu depuis plus de 1 100 ans.",
            es: 'En respuesta a los reformadores protestantes que rechazaban los Deuterocanónicos, Trento reafirmó definitivamente el canon tradicional. No "añadió" libros, sino que preservó lo que ya se había sostenido durante más de 1.100 años.',
            de: "Als Reaktion auf protestantische Reformatoren, die die Deuterokanonika ablehnten, bestätigte Trient den traditionellen Kanon endgültig. Es wurden keine Bücher „hinzugefügt“ – es bewahrte, was bereits über 1.100 Jahre lang galt.",
          },
        },
      },
      q1: {
        en: "&quot;This wasn&apos;t adding to scripture—it was infallibly reasserting what had already been taught.&quot;",
        fr: "« Ce n'était pas ajouter à l'écriture — c'était réaffirmer infailliblement ce qui avait déjà été enseigné. »",
        es: '"Esto no fue añadir a la escritura, fue reafirmar infaliblemente lo que ya se había enseñado."',
        de: '„Das war kein Hinzufügen zur Schrift – es war eine unfehlbare Bestätigung dessen, was bereits gelehrt worden war."',
      },
    },
    video3: {
      title: {
        en: "Wes Huff gets THIS wrong about the Bible",
        fr: "Wes Huff se trompe à CE sujet à propos de la Bible",
        es: "Wes Huff se equivoca en ESTO sobre la Biblia",
        de: "Wes Huff liegt HIERBEI falsch bezüglich der Bibel",
      },
    },
    carthage: {
      h2: {
        en: "Council of Carthage (397 AD) - Key Details",
        fr: "Concile de Carthage (397 ap. J.-C.) - Détails Clés",
        es: "Concilio de Cartago (397 d.C.) - Detalles Clave",
        de: "Konzil von Karthago (397 n. Chr.) - Wichtige Details",
      },
      p1: {
        en: "The Council of Carthage was a pivotal moment in the history of the biblical canon. Here are the key facts:",
        fr: "Le Concile de Carthage a été un moment charnière dans l'histoire du canon biblique. Voici les faits clés :",
        es: "El Concilio de Cartago fue un momento crucial en la historia del canon bíblico. Aquí están los hechos clave:",
        de: "Das Konzil von Karthago war ein entscheidender Moment in der Geschichte des biblischen Kanons. Hier sind die wichtigsten Fakten:",
      },
      points: {
        p1: {
          title: {
            en: "Main Goal",
            fr: "Objectif Principal",
            es: "Objetivo Principal",
            de: "Hauptziel",
          },
          desc: {
            en: 'To <strong className="text-white">standardize Church discipline</strong> and <strong className="text-white">approve the canon of Scripture</strong> for public reading in church.',
            fr: '<strong className="text-white">Standardiser la discipline de l\'Église</strong> et <strong className="text-white">approuver le canon de l\'Écriture</strong> pour la lecture publique dans l\'église.',
            es: '<strong className="text-white">Estandarizar la disciplina de la Iglesia</strong> y <strong className="text-white">aprobar el canon de la Escritura</strong> para la lectura pública en la iglesia.',
            de: '<strong className="text-white">Die Kirchenzucht zu standardisieren</strong> und <strong className="text-white">den Kanon der Heiligen Schrift</strong> für die öffentliche Lesung in der Kirche zu genehmigen.',
          },
        },
        p2: {
          title: {
            en: "Canon 36",
            fr: "Canon 36",
            es: "Canon 36",
            de: "Kanon 36",
          },
          desc: {
            en: 'Confirmed listing the <strong className="text-white">73 books</strong> of the Bible used in the Catholic Church today—<strong className="text-white">46 Old Testament</strong> (including the Deuterocanonical books) and <strong className="text-white">27 New Testament</strong> books.',
            fr: 'A confirmé la liste des <strong class="text-white">73 livres</strong> de la Bible utilisés aujourd\'hui dans l\'Église catholique — <strong class="text-white">46 livres de l\'Ancien Testament</strong> (y compris les livres deutérocanoniques) et <strong class="text-white">27 livres du Nouveau Testament</strong>.',
            es: 'Confirmó la lista de los <strong class="text-white">73 libros</strong> de la Biblia utilizados en la Iglesia Católica hoy en día: <strong class="text-white">46 del Antiguo Testamento</strong> (incluidos los libros deuterocanónicos) y <strong class="text-white">27 del Nuevo Testamento</strong>.',
            de: 'Bestätigte die Auflistung der <strong class="text-white">73 Bücher</strong> der Bibel, die heute in der katholischen Kirche verwendet werden – <strong class="text-white">46 Bücher des Alten Testaments</strong> (einschließlich der deuterokanonischen Bücher) und <strong class="text-white">27 Bücher des Neuen Testaments</strong>.',
          },
        },
        p3: {
          title: {
            en: "Authority",
            fr: "Autorité",
            es: "Autoridad",
            de: "Autorität",
          },
          desc: {
            en: 'The decisions were <strong className="text-white">administrative</strong>, not claiming divine authority independently, and Rome was to be consulted for final confirmation.',
            fr: 'Les décisions étaient <strong class="text-white">administratives</strong>, ne revendiquant pas une autorité divine indépendante, et Rome devait être consultée pour confirmation finale.',
            es: 'Las decisiones fueron <strong class="text-white">administrativas</strong>, no reclamaban autoridad divina independientemente, y se debía consultar a Roma para la confirmación final.',
            de: 'Die Entscheidungen waren <strong class="text-white">administrativ</strong>, beanspruchten keine unabhängige göttliche Autorität, und Rom sollte zur endgültigen Bestätigung konsultiert werden.',
          },
        },
        p4: {
          title: {
            en: "Signatories",
            fr: "Signataires",
            es: "Signatarios",
            de: "Unterzeichner",
          },
          desc: {
            en: 'The acts were signed by numerous bishops, including <strong className="text-white">St. Augustine</strong>.',
            fr: 'Les actes ont été signés par de nombreux évêques, dont <strong class="text-white">Saint Augustin</strong>.',
            es: 'Las actas fueron firmadas por numerosos obispos, incluido <strong class="text-white">San Agustín</strong>.',
            de: 'Die Akten wurden von zahlreichen Bischöfen unterzeichnet, einschließlich <strong class="text-white">Hl. Augustinus</strong>.',
          },
        },
      },
      others: {
        h4: {
          en: "Additional Canons Addressed:",
          fr: "Canons Supplémentaires Abordés :",
          es: "Cánones Adicionales Abordados:",
          de: "Zusätzlich Behandelte Kanons:",
        },
        li1: {
          en: "Clergy discipline and moral conduct",
          fr: "Discipline du clergé et conduite morale",
          es: "Disciplina del clero y conducta moral",
          de: "Klerikerdisziplin und moralisches Verhalten",
        },
        li2: {
          en: "Rules for ordination, Eucharistic practice, and church governance",
          fr: "Règles pour l'ordination, la pratique eucharistique et la gouvernance de l'Église",
          es: "Reglas para la ordenación, la práctica eucarística y el gobierno de la iglesia",
          de: "Regeln für die Ordination, eucharistische Praxis und Kirchenleitung",
        },
        li3: {
          en: "The handling of heretics (e.g., Donatists)",
          fr: "Le traitement des hérétiques (par ex., Donatistes)",
          es: "El manejo de los herejes (p. ej., Donatistas)",
          de: "Der Umgang mit Häretikern (z. B. Donatisten)",
        },
        li4: {
          en: "Liturgical customs (e.g., fasting before Mass, annual councils, proper celebration of Easter)",
          fr: "Coutumes liturgiques (par ex., jeûne avant la messe, conciles annuels, célébration appropriée de Pâques)",
          es: "Costumbres litúrgicas (p. ej., ayuno antes de la Misa, concilios anuales, celebración adecuada de la Pascua)",
          de: "Liturgische Bräuche (z. B. Fasten vor der Messe, jährliche Konzilien, angemessene Feier von Ostern)",
        },
      },
      p2: {
        en: 'This council laid the <strong className="text-white">foundation for Western canon law</strong> and helped preserve <strong className="text-white">unity and orthodoxy</strong> in the early Church.',
        fr: "Ce concile a posé les <strong class=\"text-white\">fondations du droit canon occidental</strong> et a aidé à préserver l'<strong>unité et l'orthodoxie</strong> dans l'Église primitive.",
        es: 'Este concilio sentó las <strong class="text-white">bases del derecho canónico occidental</strong> y ayudó a preservar la <strong class="text-white">unidad y la ortodoxia</strong> en la Iglesia primitiva.',
        de: 'Dieses Konzil legte den <strong class="text-white">Grundstein für das westliche Kirchenrecht</strong> und half, die <strong class="text-white">Einheit und Orthodoxie</strong> in der frühen Kirche zu bewahren.',
      },
    },
    conclusion: {
      h2: {
        en: "Conclusion: Why 73 Books?",
        fr: "Conclusion : Pourquoi 73 Livres ?",
        es: "Conclusión: ¿Por Qué 73 Libros?",
        de: "Schlussfolgerung: Warum 73 Bücher?",
      },
      p1: {
        en: "Catholics affirm the 73-book canon because:",
        fr: "Les catholiques affirment le canon de 73 livres parce que :",
        es: "Los católicos afirman el canon de 73 libros porque:",
        de: "Katholiken bestätigen den 73-Bücher-Kanon, weil:",
      },
      reasons: {
        r1: {
          en: "It reflects the Bible used by the Apostles and early Church.",
          fr: "Il reflète la Bible utilisée par les Apôtres et l'Église primitive.",
          es: "Refleja la Biblia utilizada por los Apóstoles y la Iglesia primitiva.",
          de: "Er spiegelt die Bibel wider, die von den Aposteln und der frühen Kirche verwendet wurde.",
        },
        r2: {
          en: "It was confirmed by multiple authoritative councils.",
          fr: "Il a été confirmé par de multiples conciles faisant autorité.",
          es: "Fue confirmado por múltiples concilios autorizados.",
          de: "Er wurde von mehreren autoritativen Konzilien bestätigt.",
        },
        r3: {
          en: "It is consistent with the Septuagint, the version most used by early Christians.",
          fr: "Il est cohérent avec la Septante, la version la plus utilisée par les premiers chrétiens.",
          es: "Es coherente con la Septuaginta, la versión más utilizada por los primeros cristianos.",
          de: "Er stimmt mit der Septuaginta überein, der von den frühen Christen am häufigsten verwendeten Version.",
        },
        r4: {
          en: "It was the Christian Bible for over 1,000 years.",
          fr: "C'était la Bible chrétienne pendant plus de 1 000 ans.",
          es: "Fue la Biblia cristiana durante más de 1.000 años.",
          de: "Er war über 1.000 Jahre lang die christliche Bibel.",
        },
      },
      callout: {
        p1: {
          en: "If the Holy Spirit guided the Church to affirm the New Testament canon, why would we not also trust Him to guide the Old Testament canon?",
          fr: "Si le Saint-Esprit a guidé l'Église pour affirmer le canon du Nouveau Testament, pourquoi ne Lui ferions-nous pas confiance également pour guider le canon de l'Ancien Testament ?",
          es: "Si el Espíritu Santo guio a la Iglesia para afirmar el canon del Nuevo Testamento, ¿por qué no confiaríamos también en Él para guiar el canon del Antiguo Testamento?",
          de: "Wenn der Heilige Geist die Kirche geleitet hat, den Kanon des Neuen Testaments zu bestätigen, warum sollten wir Ihm nicht auch zutrauen, den Kanon des Alten Testaments zu leiten?",
        },
        q1: {
          en: "&quot;We either trust that the Holy Spirit guided that process—or we don&apos;t.&quot;",
          fr: "« Soit nous croyons que le Saint-Esprit a guidé ce processus, soit nous n'y croyons pas. »",
          es: '"O confiamos en que el Espíritu Santo guio ese proceso, o no lo hacemos."',
          de: '„Entweder vertrauen wir darauf, dass der Heilige Geist diesen Prozess geleitet hat – oder wir tun es nicht."',
        },
      },
      p2: {
        en: "The Catholic Bible stands not on late innovation, but on <strong>ancient fidelity</strong>.",
        fr: "La Bible catholique ne repose pas sur une innovation tardive, mais sur une <strong>fidélité ancienne</strong>.",
        es: "La Biblia católica no se basa en una innovación tardía, sino en una <strong>antigua fidelidad</strong>.",
        de: "Die katholische Bibel steht nicht auf später Neuerung, sondern auf <strong>antiker Treue</strong>.",
      },
    },
    visual: {
      h3: {
        en: "Visual Comparison",
        fr: "Comparaison Visuelle",
        es: "Comparación Visual",
        de: "Visueller Vergleich",
      },
      catholic: {
        title: {
          en: "Catholic Bible (73 Books)",
          fr: "Bible Catholique (73 Livres)",
          es: "Biblia Católica (73 Libros)",
          de: "Katholische Bibel (73 Bücher)",
        },
        l1: {
          en: "46 Old Testament books",
          fr: "46 livres de l'Ancien Testament",
          es: "46 libros del Antiguo Testamento",
          de: "46 Bücher des Alten Testaments",
        },
        l2: {
          en: "27 New Testament books",
          fr: "27 livres du Nouveau Testament",
          es: "27 libros del Nuevo Testamento",
          de: "27 Bücher des Neuen Testaments",
        },
        l3: {
          en: "Includes deuterocanonical books",
          fr: "Inclut les livres deutérocanoniques",
          es: "Incluye libros deuterocanónicos",
          de: "Enthält deuterokanonische Bücher",
        },
        l4: {
          en: "Used by the early Church",
          fr: "Utilisée par l'Église primitive",
          es: "Usada por la Iglesia primitiva",
          de: "Von der frühen Kirche verwendet",
        },
        l5: {
          en: "Maintained for 2,000 years",
          fr: "Maintenue pendant 2 000 ans",
          es: "Mantenida por 2.000 años",
          de: "Seit 2.000 Jahren beibehalten",
        },
      },
      protestant: {
        title: {
          en: "Protestant Bible (66 Books)",
          fr: "Bible Protestante (66 Livres)",
          es: "Biblia Protestante (66 Libros)",
          de: "Protestantische Bibel (66 Bücher)",
        },
        l1: {
          en: "39 Old Testament books",
          fr: "39 livres de l'Ancien Testament",
          es: "39 libros del Antiguo Testamento",
          de: "39 Bücher des Alten Testaments",
        },
        l2: {
          en: "27 New Testament books",
          fr: "27 livres du Nouveau Testament",
          es: "27 libros del Nuevo Testamento",
          de: "27 Bücher des Neuen Testaments",
        },
        l3: {
          en: "Removed deuterocanonical books",
          fr: "Livres deutérocanoniques supprimés",
          es: "Libros deuterocanónicos eliminados",
          de: "Deuterokanonische Bücher entfernt",
        },
        l4: {
          en: "Changed in 16th century",
          fr: "Changée au 16ème siècle",
          es: "Cambiada en el siglo XVI",
          de: "Im 16. Jahrhundert geändert",
        },
        l5: {
          en: "Based on later Jewish canon",
          fr: "Basée sur un canon juif ultérieur",
          es: "Basada en un canon judío posterior",
          de: "Basiert auf späterem jüdischen Kanon",
        },
      },
    },
    bridge: {
      h3: {
        en: "The Authority Question Returns",
        fr: "Le Retour de la Question de l'Autorité",
        es: "La Cuestión de la Autoridad Regresa",
        de: "Die Autoritätsfrage Kehrt Zurück",
      },
      p1: {
        en: "This brings us back to the fundamental question: <em>Who has the authority to determine what is Scripture?</em>",
        fr: "Cela nous ramène à la question fondamentale : <em>Qui a l'autorité de déterminer ce qu'est l'Écriture ?</em>",
        es: "Esto nos devuelve a la pregunta fundamental: <em>¿Quién tiene la autoridad para determinar qué es la Escritura?</em>",
        de: "Dies bringt uns zurück zur Grundfrage: <em>Wer hat die Autorität zu bestimmen, was die Heilige Schrift ist?</em>",
      },
      p2: {
        en: "If you accept the Catholic Church&apos;s authority in determining the New Testament canon, why reject its authority regarding the Old Testament? And if you reject the Church&apos;s authority entirely, on what basis do you know which books are inspired? This question of authority is central to everything—and it leads us to explore the role of the Magisterium.",
        fr: "Si vous acceptez l'autorité de l'Église catholique pour déterminer le canon du Nouveau Testament, pourquoi rejeter son autorité concernant l'Ancien Testament ? Et si vous rejetez entièrement l'autorité de l'Église, sur quelle base savez-vous quels livres sont inspirés ? Cette question d'autorité est centrale à tout — et elle nous amène à explorer le rôle du Magistère.",
        es: "Si aceptas la autoridad de la Iglesia Católica para determinar el canon del Nuevo Testamento, ¿por qué rechazar su autoridad con respecto al Antiguo Testamento? Y si rechazas la autoridad de la Iglesia por completo, ¿sobre qué base sabes qué libros son inspirados? Esta cuestión de autoridad es central en todo, y nos lleva a explorar el papel del Magisterio.",
        de: "Wenn Sie die Autorität der katholischen Kirche bei der Bestimmung des neutestamentlichen Kanons akzeptieren, warum lehnen Sie dann ihre Autorität in Bezug auf das Alte Testament ab? Und wenn Sie die Autorität der Kirche gänzlich ablehnen, auf welcher Grundlage wissen Sie dann, welche Bücher inspiriert sind? Diese Autoritätsfrage ist von zentraler Bedeutung für alles – und sie führt uns dazu, die Rolle des Lehramtes zu erkunden.",
      },
    },
  },

  canonDilemma: {
    title: {
      en: "The Canon Dilemma",
      fr: "Le Dilemme du Canon",
      es: "El Dilema del Canon",
      de: "Das Kanondilemma",
    },
    subtitle: {
      en: "A Foundational Challenge to Sola Scriptura",
      fr: "Un Défi Fondamental pour Sola Scriptura",
      es: "Un Desafío Fundamental para Sola Scriptura",
      de: "Eine Grundlegende Herausforderung für Sola Scriptura",
    },
    quote: {
      text: {
        en: "How do we know which books belong in the Bible?",
        fr: "Comment savons-nous quels livres appartiennent à la Bible ?",
        es: "¿Cómo sabemos qué libros pertenecen a la Biblia?",
        de: "Woher wissen wir, welche Bücher zur Bibel gehören?",
      },
      source: {
        en: "The fundamental question",
        fr: "La question fondamentale",
        es: "La pregunta fundamental",
        de: "Die grundlegende Frage",
      },
    },
    intro: {
      h2: {
        en: "Introduction",
        fr: "Introduction",
        es: "Introducción",
        de: "Einführung",
      },
      p1: {
        en: "The Protestant principle of <em>sola scriptura</em>—that Scripture alone is the final authority in Christian faith—faces a critical and often overlooked problem: <strong>How do we know which books belong in the Bible?</strong>",
        fr: "Le principe protestant de <em>sola scriptura</em> — que l'Écriture seule est l'autorité finale en matière de foi chrétienne — est confronté à un problème critique et souvent négligé : <strong>Comment savons-nous quels livres appartiennent à la Bible ?</strong>",
        es: "El principio protestante de <em>sola scriptura</em> —que la Escritura por sí sola es la autoridad final en la fe cristiana— se enfrenta a un problema crítico ya menudo pasado por alto: <strong>¿Cómo sabemos qué libros pertenecen a la Biblia?</strong>",
        de: "Das protestantische Prinzip <em>sola scriptura</em> – dass die Schrift allein die letzte Autorität im christlichen Glauben ist – steht vor einem kritischen und oft übersehenen Problem: <strong>Woher wissen wir, welche Bücher zur Bibel gehören?</strong>",
      },
      p2: {
        en: "This is not a trivial question. It goes to the very core of what it means to trust the Bible as the word of God. If the Bible does not define its own boundaries, then <em>sola scriptura</em> rests on an external process that cannot itself be justified by Scripture alone.",
        fr: "Ce n'est pas une question triviale. Elle touche au cœur même de ce que signifie faire confiance à la Bible en tant que parole de Dieu. Si la Bible ne définit pas ses propres limites, alors <em>sola scriptura</em> repose sur un processus externe qui ne peut lui-même être justifié par l'Écriture seule.",
        es: "Esta no es una cuestión trivial. Va al núcleo mismo de lo que significa confiar en la Biblia como la palabra de Dios. Si la Biblia no define sus propios límites, entonces <em>sola scriptura</em> descansa sobre un proceso externo que no puede justificarse por la Escritura sola.",
        de: "Dies ist keine triviale Frage. Sie berührt den Kern dessen, was es bedeutet, der Bibel als dem Wort Gottes zu vertrauen. Wenn die Bibel ihre eigenen Grenzen nicht definiert, dann beruht <em>sola scriptura</em> auf einem externen Prozess, der nicht durch die Schrift allein gerechtfertigt werden kann.",
      },
      callout: {
        text: {
          en: "The Bible did not fall from heaven, bound and indexed. It was compiled by the Church, guided by the Holy Spirit.",
          fr: "La Bible n'est pas tombée du ciel, reliée et indexée. Elle a été compilée par l'Église, guidée par le Saint-Esprit.",
          es: "La Biblia no cayó del cielo, encuadernada e indexada. Fue compilada por la Iglesia, guiada por el Espíritu Santo.",
          de: "Die Bibel ist nicht vom Himmel gefallen, gebunden und indiziert. Sie wurde von der Kirche zusammengestellt, geleitet vom Heiligen Geist.",
        },
      },
    },

    videos: {
      v1: {
        title: {
          en: "How the Bible Canon was Formed",
          fr: "Comment le canon de la Bible a été formé",
          es: "Cómo se formó el canon de la Biblia",
          de: "Wie der Bibelkanon gebildet wurde",
        },
      },
      v2: {
        title: {
          en: "The Case for the Deuterocanon",
          fr: "Plaidoyer pour les Deutérocanoniques",
          es: "El caso de los Deuterocanónicos",
          de: "Das Plädoyer für die Deuterokanonen",
        },
      },
    },
    problem: {
      h2: {
        en: "I. The Historical Problem: Disputed and Excluded Books",
        fr: "I. Le Problème Historique : Livres Disputés et Exclus",
        es: "I. El Problema Histórico: Libros Disputados y Excluidos",
        de: "I. Das Historische Problem: Umstrittene und Ausgeschlossene Bücher",
      },
      p1: {
        en: "Contrary to popular belief, the early Church did not inherit a neatly bound New Testament of 27 universally accepted books.",
        fr: "Contrairement à la croyance populaire, l'Église primitive n'a pas hérité d'un Nouveau Testament soigneusement relié de 27 livres universellement acceptés.",
        es: "Contrariamente a la creencia popular, la Iglesia primitiva no heredó un Nuevo Testamento pulcramente encuadernado de 27 libros universalmente aceptados.",
        de: "Entgegen der landläufigen Meinung erbte die frühe Kirche kein sauber gebundenes Neues Testament mit 27 universell anerkannten Büchern.",
      },
      disputed: {
        h3: {
          en: "Disputed Books That Were Included",
          fr: "Livres Disputés Qui Ont Été Inclus",
          es: "Libros Disputados Que Fueron Incluidos",
          de: "Umstrittene Bücher, die Aufgenommen Wurden",
        },
        books: {
          b1: {
            en: "Second Peter",
            fr: "Deuxième épître de saint Pierre apôtre",
            es: "Segunda carta del apóstol san Pedro",
            de: "Zweiter Brief des heiligen Apostels Petrus",
          },
          b2: {
            en: "Hebrews",
            fr: "Hébreux",
            es: "Hebreos",
            de: "Hebräerbrief",
          },
          b3: {
            en: "James",
            fr: "Jacques",
            es: "Santiago",
            de: "Jakobusbrief",
          },
          b4: {
            en: "Jude",
            fr: "Jude",
            es: "Judas",
            de: "Judasbrief",
          },
          b5: {
            en: "Revelation",
            fr: "Apocalypse",
            es: "Apocalipsis",
            de: "Offenbarung",
          },
        },
      },
      excluded: {
        h3: {
          en: "Accepted Books That Were Excluded",
          fr: "Livres Acceptés Qui Ont Été Exclus",
          es: "Libros Aceptados Que Fueron Excluidos",
          de: "Akzeptierte Bücher, die Ausgeschlossen Wurden",
        },
        books: {
          b1: {
            en: "Shepherd of Hermas",
            fr: "Pasteur d'Hermas",
            es: "Pastor de Hermas",
            de: "Hirte des Hermas",
          },
          b2: {
            en: "Epistle of Barnabas",
            fr: "Épître de Barnabé",
            es: "Epístola de Bernabé",
            de: "Barnabasbrief",
          },
          b3: {
            en: "1 Clement",
            fr: "1 Clément",
            es: "1 Clemente",
            de: "1. Klemensbrief",
          },
        },
      },
      p2: {
        en: "The canon was debated for centuries. The list of 27 New Testament books was finalized by the Church, not by the Bible itself. This list was affirmed by the Councils of Hippo (393 AD) and Carthage (397 AD).",
        fr: "Le canon a été débattu pendant des siècles. La liste des 27 livres du Nouveau Testament a été finalisée par l'Église, non par la Bible elle-même. Cette liste a été affirmée par les Conciles d'Hippone (393 ap. J.-C.) et de Carthage (397 ap. J.-C.).",
        es: "El canon se debatió durante siglos. La lista de los 27 libros del Nuevo Testamento fue finalizada por la Iglesia, no por la Biblia misma. Esta lista fue afirmada por los Concilios de Hipona (393 d.C.) y Cartago (397 d.C.).",
        de: "Der Kanon wurde jahrhundertelang diskutiert. Die Liste der 27 Bücher des Neuen Testaments wurde von der Kirche festgelegt, nicht von der Bibel selbst. Diese Liste wurde von den Konzilien von Hippo (393 n. Chr.) und Karthago (397 n. Chr.) bestätigt.",
      },
    },
    dilemma: {
      h2: {
        en: "II. The Sola Scriptura Dilemma",
        fr: "II. Le Dilemme de Sola Scriptura",
        es: "II. El Dilema de Sola Scriptura",
        de: "II. Das Sola-Scriptura-Dilemma",
      },
      p1: {
        en: "This historical reality presents an unsolvable problem for <em>sola scriptura</em>.",
        fr: "Cette réalité historique présente un problème insoluble pour <em>sola scriptura</em>.",
        es: "Esta realidad histórica presenta un problema irresoluble para <em>sola scriptura</em>.",
        de: "Diese historische Realität stellt ein unlösbares Problem für <em>sola scriptura</em> dar.",
      },
      callout: {
        h4: {
          en: "The Central Question:",
          fr: "La Question Centrale :",
          es: "La Pregunta Central:",
          de: "Die Zentrale Frage:",
        },
        q: {
          en: "If the Bible is the only infallible authority, how can you infallibly know which books belong in it?",
          fr: "Si la Bible est la seule autorité infaillible, comment pouvez-vous savoir infailliblement quels livres y appartiennent ?",
          es: "Si la Biblia es la única autoridad infalible, ¿cómo puedes saber infaliblemente qué libros pertenecen a ella?",
          de: "Wenn die Bibel die einzige unfehlbare Autorität ist, wie können Sie dann unfehlbar wissen, welche Bücher dazugehören?",
        },
      },
      p2: {
        en: "The canon is not an <strong>infallible list of fallible books</strong> (which is useless) or a <strong>fallible list of infallible books</strong> (which is uncertain). No, it's an <strong>infallible list of infallible books</strong>. The Protestant position requires an infallible collection, but it provides no infallible means of identifying it.",
        fr: "Le canon n'est pas une <strong>liste infaillible de livres faillibles</strong> (ce qui est inutile) ou une <strong>liste faillible de livres infaillibles</strong> (ce qui est incertain). Non, c'est une <strong>liste infaillible de livres infaillibles</strong>. La position protestante exige une collection infaillible, mais elle ne fournit aucun moyen infaillible de l'identifier.",
        es: "El canon no es una <strong>lista infalible de libros falibles</strong> (lo cual es inútil) o una <strong>lista falible de libros infalibles</strong> (lo cual es incierto). No, es una <strong>lista infalible de libros infalibles</strong>. La posición protestante requiere una colección infalible, pero no proporciona medios infalibles para identificarla.",
        de: "Der Kanon ist keine <strong>unfehlbare Liste fehlbarer Bücher</strong> (was nutzlos ist) oder eine <strong>fehlbare Liste unfehlbarer Bücher</strong> (was unsicher ist). Nein, er ist eine <strong>unfehlbare Liste unfehlbarer Bücher</strong>. Die protestantische Position erfordert eine unfehlbare Sammlung, bietet aber keine unfehlbaren Mittel, sie zu identifizieren.",
      },
    },
    attempts: {
      h2: {
        en: "III. Protestant Attempts to Solve the Dilemma",
        fr: "III. Tentatives Protestantes pour Résoudre le Dilemme",
        es: "III. Intentos Protestantes de Resolver el Dilema",
        de: "III. Protestantische Lösungsversuche für das Dilemma",
      },
      p1: {
        en: "Protestant apologists have offered several solutions, all of which fail.",
        fr: "Les apologistes protestants ont offert plusieurs solutions, qui toutes échouent.",
        es: "Los apologistas protestantes han ofrecido varias soluciones, todas las cuales fracasan.",
        de: "Protestantische Apologeten haben mehrere Lösungen angeboten, die alle scheitern.",
      },
      a1: {
        title: {
          en: "1. 'A fallible collection of infallible books'",
          fr: "1. « Une collection faillible de livres infaillibles »",
          es: "1. 'Una colección falible de libros infalibles'",
          de: "1. „Eine fehlbare Sammlung unfehlbarer Bücher“",
        },
        p1: {
          en: "This is the most common attempt, famously articulated by R.C. Sproul. It claims the Church created a 'fallible list' of 'infallible books.'",
          fr: "C'est la tentative la plus courante, célèbrement articulée par R.C. Sproul. Elle prétend que l'Église a créé une « liste faillible » de « livres infaillibles ».",
          es: "Este es el intento más común, famosamente articulado por R.C. Sproul. Afirma que la Iglesia creó una 'lista falible' de 'libros infalibles'.",
          de: "Dies ist der häufigste Versuch, berühmt artikuliert von R.C. Sproul. Er behauptet, die Kirche habe eine 'fehlbare Liste' von 'unfehlbaren Büchern' erstellt.",
        },
        p2: {
          en: "<strong>Problem:</strong> This reduces faith to mere probability. You can only be 'mostly sure' you have the right books. This destroys certainty. A 'morally certain' canon is not an 'infallible' one.",
          fr: "<strong>Problème :</strong> Cela réduit la foi à une simple probabilité. Vous ne pouvez être que « presque sûr » d'avoir les bons livres. Cela détruit la certitude. Un canon « moralement certain » n'est pas un canon « infaillible ».",
          es: "<strong>Problema:</strong> Esto reduce la fe a mera probabilidad. Solo puedes estar 'mayormente seguro' de que tienes los libros correctos. Esto destruye la certeza. Un canon 'moralmente cierto' no es uno 'infalible'.",
          de: "<strong>Problem:</strong> Dies reduziert den Glauben auf bloße Wahrscheinlichkeit. Man kann nur 'ziemlich sicher' sein, die richtigen Bücher zu haben. Das zerstört die Gewissheit. Ein 'moralisch gewisser' Kanon ist kein 'unfehlbarer'.",
        },
        quote: {
          text: {
            en: "If the canon is fallible, the Church’s rule of faith is fallible... You have no divine guarantee that what you hold in your hand is the pure Word of God.",
            fr: "« Si le canon est faillible, la règle de foi de l'Église est faillible... Vous n'avez aucune garantie divine que ce que vous tenez dans votre main est la pure Parole de Dieu. »",
            es: '"Si el canon es falible, la regla de fe de la Iglesia es falible... No tienes garantía divina de que lo que tienes en tu mano es la pura Palabra de Dios."',
            de: '„Wenn der Kanon fehlbar ist, ist die Glaubensregel der Kirche fehlbar... Sie haben keine göttliche Garantie, dass das, was Sie in Ihrer Hand halten, das reine Wort Gottes ist."',
          },
          source: {
            en: "Catholic Answers",
            fr: "Catholic Answers",
            es: "Catholic Answers",
            de: "Catholic Answers",
          },
        },
      },
      a2: {
        title: {
          en: "2. 'The internal witness of the Holy Spirit'",
          fr: "2. « Le témoignage intérieur du Saint-Esprit »",
          es: "2. 'El testimonio interno del Espíritu Santo'",
          de: "2. „Das innere Zeugnis des Heiligen Geistes“",
        },
        p1: {
          en: "This view claims that the Holy Spirit personally guides each believer to recognize the true books.",
          fr: "Cette vue prétend que le Saint-Esprit guide personnellement chaque croyant pour reconnaître les vrais livres.",
          es: "Esta opinión afirma que el Espíritu Santo guía personalmente a cada creyente para reconocer los libros verdaderos.",
          de: "Diese Ansicht behauptet, dass der Heilige Geist jeden Gläubigen persönlich anleitet, die wahren Bücher zu erkennen.",
        },
        p2: {
          en: "<strong>Problem:</strong> This is subjective and unworkable. Christians disagree constantly about doctrine; they also disagreed about the canon for centuries. It leads to anarchy, not a unified canon.",
          fr: "<strong>Problème :</strong> C'est subjectif et irréalisable. Les chrétiens sont constamment en désaccord sur la doctrine ; ils ont également été en désaccord sur le canon pendant des siècles. Cela conduit à l'anarchie, pas à un canon unifié.",
          es: "<strong>Problema:</strong> Esto es subjetivo e inviable. Los cristianos están en desacuerdo constantemente sobre la doctrina; también estuvieron en desacuerdo sobre el canon durante siglos. Conduce a la anarquía, no a un canon unificado.",
          de: "<strong>Problem:</strong> Das ist subjektiv und undurchführbar. Christen sind sich ständig uneinig über die Lehre; sie waren sich auch jahrhundertelang über den Kanon uneinig. Es führt zur Anarchie, nicht zu einem einheitlichen Kanon.",
        },
      },
      a3: {
        title: {
          en: "3. 'The books are self-authenticating'",
          fr: "3. « Les livres s'authentifient d'eux-mêmes »",
          es: "3. 'Los libros se autentican a sí mismos'",
          de: "3. „Die Bücher sind selbstauthentisierend“",
        },
        p1: {
          en: "This claims the books' divine quality is self-evident, like a 'light that shines in the darkness.'",
          fr: "Cela prétend que la qualité divine des livres est évidente, comme une « lumière qui brille dans les ténèbres ».",
          es: "Esto afirma que la cualidad divina de los libros es evidente por sí misma, como una 'luz que brilla en la oscuridad'.",
          de: "Dies behauptet, die göttliche Qualität der Bücher sei selbstverständlich, wie ein 'Licht, das in der Finsternis scheint'.",
        },
        p2: {
          en: "<strong>Problem:</strong> This is historically false. The early Church fathers—holy men, closer to the source—disputed these books for centuries. If it wasn't 'self-evident' to them, it certainly isn't to us.",
          fr: "<strong>Problème :</strong> C'est historiquement faux. Les pères de l'Église primitive — des hommes saints, plus proches de la source — ont disputé ces livres pendant des siècles. Si ce n'était pas « évident » pour eux, ça ne l'est certainement pas pour nous.",
          es: "<strong>Problema:</strong> Esto es históricamente falso. Los padres de la Iglesia primitiva —hombres santos, más cercanos a la fuente— disputaron estos libros durante siglos. Si no era 'evidente' para ellos, ciertamente no lo es para nosotros.",
          de: "<strong>Problem:</strong> Das ist historisch falsch. Die frühen Kirchenväter – heilige Männer, näher an der Quelle – haben jahrhundertelang über diese Bücher gestritten. Wenn es für sie nicht 'selbstverständlich' war, ist es das für uns sicherlich nicht.",
        },
      },
    },
    conclusion: {
      h2: {
        en: "Conclusion: The Inescapable Authority",
        fr: "Conclusion : L'Autorité Incontournable",
        es: "Conclusión: La Autoridad Ineludible",
        de: "Schlussfolgerung: Die Unausweichliche Autorität",
      },
      p1: {
        en: "The only logical and historical solution is that the same Holy Spirit who inspired the books of the Bible also guided the Church to infallibly recognize them.",
        fr: "La seule solution logique et historique est que le même Saint-Esprit qui a inspiré les livres de la Bible a également guidé l'Église pour les reconnaître infailliblement.",
        es: "La única solución lógica e histórica es que el mismo Espíritu Santo que inspiró los libros de la Biblia también guio a la Iglesia para reconocerlos infaliblemente.",
        de: "Die einzige logische und historische Lösung ist, dass derselbe Heilige Geist, der die Bücher der Bibel inspiriert hat, auch die Kirche geleitet hat, sie unfehlbar zu erkennen.",
      },
      callout: {
        text: {
          en: "You cannot have an infallible list of infallible books without an infallible authority to define it.",
          fr: "Vous ne pouvez pas avoir une liste infaillible de livres infaillibles sans une autorité infaillible pour la définir.",
          es: "No se puede tener una lista infalible de libros infalibles sin una autoridad infalible que la defina.",
          de: "Man kann keine unfehlbare Liste unfehlbarer Bücher ohne eine unfehlbare Autorität haben, die sie definiert.",
        },
      },
      p2: {
        en: "The biblical canon is a product of the Church's living Tradition. You must either accept the authority of the Catholic Church, which gave you the Bible, or be left with a fallible list of books that you only <em>hope</em> is the Word of God.",
        fr: "Le canon biblique est un produit de la Tradition vivante de l'Église. Vous devez soit accepter l'autorité de l'Église catholique, qui vous a donné la Bible, soit vous retrouver avec une liste faillible de livres dont vous ne pouvez qu'<em>espérer</em> qu'ils sont la Parole de Dieu.",
        es: "El canon bíblico es un producto de la Tradición viva de la Iglesia. Debes aceptar la autoridad de la Iglesia Católica, que te dio la Biblia, o quedarte con una lista falible de libros que solo <em>esperas</em> que sea la Palabra de Dios.",
        de: "Der biblische Kanon ist ein Produkt der lebendigen Tradition der Kirche. Sie müssen entweder die Autorität der katholischen Kirche akzeptieren, die Ihnen die Bibel gegeben hat, oder Sie bleiben mit einer fehlbaren Liste von Büchern zurück, von denen Sie nur <em>hoffen</em> können, dass sie das Wort Gottes sind.",
      },
    },
    bridge: {
      h3: {
        en: "Where Do We Go From Here?",
        fr: "Où Allons-Nous Maintenant ?",
        es: "¿Hacia Dónde Vamos Ahora?",
        de: "Wo Gehen Wir Von Hier Aus?",
      },
      p1: {
        en: "This dilemma over the canon highlights the crucial difference between the Catholic 73-book Old Testament and the Protestant 66-book Old Testament. Why is there a difference, and who is right?",
        fr: "Ce dilemme sur le canon met en évidence la différence cruciale entre l'Ancien Testament catholique à 73 livres et l'Ancien Testament protestant à 66 livres. Pourquoi y a-t-il une différence, et qui a raison ?",
        es: "Este dilema sobre el canon resalta la diferencia crucial entre el Antiguo Testamento católico de 73 libros y el Antiguo Testamento protestante de 66 libros. ¿Por qué hay una diferencia y quién tiene razón?",
        de: "Dieses Dilemma um den Kanon verdeutlicht den entscheidenden Unterschied zwischen dem katholischen 73-Bücher-Alten Testament und dem protestantischen 66-Bücher-Alten Testament. Warum gibt es einen Unterschied, und wer hat Recht?",
      },
    },
  },

  solaScripturaImpossible: {
    title: {
      en: "Sola Scriptura is Impossible",
      fr: "Sola Scriptura est Impossible",
      es: "Sola Scriptura es Imposible",
      de: "Sola Scriptura ist Unmöglich",
    },
    subtitle: {
      en: "A Comprehensive Scholastic Critique",
      fr: "Une Critique Scolastique Complète",
      es: "Una Crítica Escolástica Exhaustiva",
      de: "Eine Umfassende Scholastische Kritik",
    },
    quote: {
      text: {
        en: "Do you understand what you are reading? How can I, unless someone guides me?",
        fr: "Comprends-tu ce que tu lis ? Comment le pourrais-je, si personne ne me guide ?",
        es: "¿Entiendes lo que lees? ¿Cómo podré, si alguno no me enseñare?",
        de: "Verstehst du auch, was du liest? Wie kann ich, wenn mich nicht jemand anleitet?",
      },
      source: {
        en: "Acts 8:30-31",
        fr: "Actes 8:30-31",
        es: "Hechos 8:30-31",
        de: "Apostelgeschichte 8:30-31",
      },
    },
    intro: {
      h2: {
        en: "Introduction: The Difficult Task of Protestant-Catholic Apologetics",
        fr: "Introduction : La Tâche Difficile de l'Apologétique Protestante-Catholique",
        es: "Introducción: La Difícil Tarea de la Apologética Protestante-Católica",
        de: "Einführung: Die Schwierige Aufgabe der Protestantisch-Katholischen Apologetik",
      },
      quote: {
        en: "Anytime you make an apologetic argument against Protestantism, you are surrounded by a number of pitfalls that make it an almost impossible task.",
        fr: "Chaque fois que vous avancez un argument apologétique contre le protestantisme, vous êtes entouré de nombreux pièges qui en font une tâche presque impossible.",
        es: "Cada vez que se presenta un argumento apologético contra el protestantismo, se está rodeado de una serie de escollos que lo convierten en una tarea casi imposible.",
        de: "Jedes Mal, wenn man ein apologetisches Argument gegen den Protestantismus vorbringt, ist man von einer Reihe von Fallstricken umgeben, die es zu einer fast unmöglichen Aufgabe machen.",
      },
      p1: {
        en: "Whenever an apologetic argument is made against Protestantism, a number of pitfalls arise. Oversimplify the argument, and it loses depth. Make it overly complex, and it becomes inaccessible. If the argument is too broad, some Protestants will feel misrepresented. If too narrow, it fails to address Protestantism as a whole.",
        fr: "Chaque fois qu'un argument apologétique est avancé contre le protestantisme, un certain nombre d'écueils surgissent. Simplifiez à l'excès l'argument, et il perd de sa profondeur. Rendez-le trop complexe, et il devient inaccessible. Si l'argument est trop large, certains protestants se sentiront mal représentés. S'il est trop étroit, il ne parvient pas à aborder le protestantisme dans son ensemble.",
        es: "Cada vez que se presenta un argumento apologético contra el protestantismo, surgen una serie de escollos. Si se simplifica demasiado el argumento, pierde profundidad. Si se hace demasiado complejo, se vuelve inaccesible. Si el argumento es demasiado amplio, algunos protestantes se sentirán tergiversados. Si es demasiado estrecho, no logra abordar el protestantismo en su conjunto.",
        de: "Immer wenn ein apologetisches Argument gegen den Protestantismus vorgebracht wird, tauchen eine Reihe von Fallstricken auf. Vereinfacht man das Argument zu sehr, verliert es an Tiefe. Macht man es zu komplex, wird es unzugänglich. Ist das Argument zu weit gefasst, fühlen sich manche Protestanten falsch dargestellt. Ist es zu eng, verfehlt es, den Protestantismus als Ganzes anzusprechen.",
      },
      p2: {
        en: "Every decision in this work is made for the good of Protestant listeners and for the salvation of their souls. There is no intent to strawman or misrepresent, and no ignorance of Protestant sources. Charity is requested, and a sincere, open-minded examination.",
        fr: "Chaque décision dans ce travail est prise pour le bien des auditeurs protestants et pour le salut de leurs âmes. Il n'y a aucune intention de caricaturer ou de déformer, ni d'ignorer les sources protestantes. La charité est demandée, ainsi qu'un examen sincère et ouvert d'esprit.",
        es: "Cada decisión en este trabajo se toma por el bien de los oyentes protestantes y por la salvación de sus almas. No hay intención de crear hombres de paja ni de tergiversar, ni ignorancia de las fuentes protestantes. Se solicita caridad y un examen sincero y de mente abierta.",
        de: "Jede Entscheidung in dieser Arbeit wird zum Wohl der protestantischen Zuhörer und zum Heil ihrer Seelen getroffen. Es besteht keine Absicht, Strohmänner aufzubauen oder falsch darzustellen, und keine Unkenntnis protestantischer Quellen. Es wird um Nächstenliebe und eine aufrichtige, aufgeschlossene Prüfung gebeten.",
      },
    },
    video: {
      title: {
        en: "Sola Scriptura is Impossible",
        fr: "Sola Scriptura est Impossible",
        es: "Sola Scriptura es Imposible",
        de: "Sola Scriptura ist Unmöglich",
      },
    },
    summary: {
      h2: {
        en: "Summary of the Argument",
        fr: "Résumé de l'Argument",
        es: "Resumen del Argumento",
        de: "Zusammenfassung des Arguments",
      },
      p1: {
        en: "The argument is simple:",
        fr: "L'argument est simple :",
        es: "El argumento es simple:",
        de: "Das Argument ist einfach:",
      },
      callout: {
        p1: {
          en: "In the Protestant view, there is no consistent way to make an act of faith in the fact that the books of the New Testament are divinely inspired.",
          fr: "Du point de vue protestant, il n'y a aucun moyen cohérent de faire un acte de foi dans le fait que les livres du Nouveau Testament sont divinement inspirés.",
          es: "Desde el punto de vista protestante, no existe una forma coherente de hacer un acto de fe en el hecho de que los libros del Nuevo Testamento están divinamente inspirados.",
          de: "Nach protestantischer Auffassung gibt es keine konsistente Möglichkeit, einen Glaubensakt hinsichtlich der Tatsache zu vollziehen, dass die Bücher des Neuen Testaments göttlich inspiriert sind.",
        },
        p2: {
          en: "This is because that knowledge must come to us by divine revelation through sacred tradition, proposed authoritatively by the Magisterium—elements rejected by the Protestant rule of faith (<em>Sola Scriptura</em>).",
          fr: "C'est parce que cette connaissance doit nous parvenir par la révélation divine à travers la sainte tradition, proposée avec autorité par le Magistère — éléments rejetés par la règle de foi protestante (<em>Sola Scriptura</em>).",
          es: "Esto se debe a que ese conocimiento debe llegarnos por revelación divina a través de la sagrada tradición, propuesta autoritativamente por el Magisterio, elementos rechazados por la regla de fe protestante (<em>Sola Scriptura</em>).",
          de: "Dies liegt daran, dass uns dieses Wissen durch göttliche Offenbarung durch die heilige Tradition übermittelt werden muss, die vom Lehramt autoritativ vorgelegt wird – Elemente, die von der protestantischen Glaubensregel (<em>Sola Scriptura</em>) abgelehnt werden.",
        },
      },
      p2: {
        en: "Common Protestant objections are anticipated: appeals to tradition, ecclesial authority, motives of credibility, or accusations of circularity. These will be answered clearly and fairly.",
        fr: "Les objections protestantes courantes sont anticipées : appels à la tradition, à l'autorité ecclésiale, aux motifs de crédibilité ou accusations de circularité. Celles-ci recevront une réponse claire et juste.",
        es: "Se anticipan las objeciones protestantes comunes: apelaciones a la tradición, la autoridad eclesial, los motivos de credibilidad o acusaciones de circularidad. Estas serán respondidas con claridad y justicia.",
        de: "Gängige protestantische Einwände werden erwartet: Berufungen auf Tradition, kirchliche Autorität, Glaubwürdigkeitsmotive oder Vorwürfe der Zirkularität. Diese werden klar und fair beantwortet.",
      },
    },
    presumption: {
      h2: {
        en: "Presumption of the Case and State of the Question",
        fr: "Présomption de la Cause et État de la Question",
        es: "Presunción del Caso y Estado de la Cuestión",
        de: "Annahme des Falles und Stand der Frage",
      },
      p1: {
        en: "Two classical rhetorical principles frame the debate:",
        fr: "Deux principes rhétoriques classiques encadrent le débat :",
        es: "Dos principios retóricos clásicos enmarcan el debate:",
        de: "Zwei klassische rhetorische Prinzipien bilden den Rahmen der Debatte:",
      },
      presumptionCase: {
        h3: {
          en: "Presumption of the Case",
          fr: "Présomption de la Cause",
          es: "Presunción del Caso",
          de: "Annahme des Falles",
        },
        p1: {
          en: "Arguments are built on shared assumptions. Papal encyclicals are not cited against Protestants. Instead, Scripture, reason, and Protestant sources are used. Shared axioms on faith and revelation are the foundation.",
          fr: "Les arguments sont construits sur des hypothèses partagées. Les encycliques papales ne sont pas citées contre les protestants. Au lieu de cela, l'Écriture, la raison et les sources protestantes sont utilisées. Des axiomes partagés sur la foi et la révélation en sont le fondement.",
          es: "Los argumentos se construyen sobre supuestos compartidos. No se citan encíclicas papales contra los protestantes. En su lugar, se utilizan la Escritura, la razón y las fuentes protestantes. Los axiomas compartidos sobre la fe y la revelación son la base.",
          de: "Argumente werden auf gemeinsamen Annahmen aufgebaut. Päpstliche Enzykliken werden nicht gegen Protestanten zitiert. Stattdessen werden Schrift, Vernunft und protestantische Quellen verwendet. Gemeinsame Axiome über Glauben und Offenbarung bilden die Grundlage.",
        },
      },
      stateQuestion: {
        h3: {
          en: "State of the Question",
          fr: "État de la Question",
          es: "Estado de la Cuestión",
          de: "Stand der Frage",
        },
        p1: {
          en: "The issue is not proving Catholicism. It is evaluating whether the Protestant doctrine of <em>Sola Scriptura</em> can account for the canon of Scripture. Protestants must:",
          fr: "Le problème n'est pas de prouver le catholicisme. Il s'agit d'évaluer si la doctrine protestante de <em>Sola Scriptura</em> peut expliquer le canon de l'Écriture. Les protestants doivent :",
          es: "La cuestión no es probar el catolicismo. Es evaluar si la doctrina protestante de <em>Sola Scriptura</em> puede dar cuenta del canon de la Escritura. Los protestantes deben:",
          de: "Es geht nicht darum, den Katholizismus zu beweisen. Es geht darum zu bewerten, ob die protestantische Lehre von <em>Sola Scriptura</em> den Kanon der Schrift erklären kann. Protestanten müssen:",
        },
        li1: {
          en: "Prove their doctrine does not fall into contradiction.",
          fr: "Prouver que leur doctrine ne tombe pas en contradiction.",
          es: "Probar que su doctrina no cae en contradicción.",
          de: "Beweisen, dass ihre Lehre nicht in Widerspruch gerät.",
        },
        li2: {
          en: "Or show that the contradiction does not follow.",
          fr: "Ou montrer que la contradiction ne s'ensuit pas.",
          es: "O demostrar que la contradicción no se sigue.",
          de: "Oder zeigen, dass der Widerspruch nicht folgt.",
        },
        p2: {
          en: "Too often, Protestant replies do anything but address the actual state of the question.",
          fr: "Trop souvent, les réponses protestantes font tout sauf aborder l'état réel de la question.",
          es: "Con demasiada frecuencia, las respuestas protestantes hacen cualquier cosa menos abordar el estado real de la cuestión.",
          de: "Allzu oft tun protestantische Antworten alles andere, als sich mit dem tatsächlichen Stand der Frage zu befassen.",
        },
      },
    },
    whatIsSS: {
      h2: {
        en: "What Is Sola Scriptura?",
        fr: "Qu'est-ce que Sola Scriptura ?",
        es: "¿Qué es Sola Scriptura?",
        de: "Was ist Sola Scriptura?",
      },
      p1: {
        en: "The doctrine under critique is not merely that Scripture is the only <strong>infallible</strong> rule of faith, but that:",
        fr: "La doctrine critiquée n'est pas simplement que l'Écriture est la seule règle de foi <strong>infaillible</strong>, mais que :",
        es: "La doctrina bajo crítica no es simplemente que la Escritura es la única regla de fe <strong>infalible</strong>, sino que:",
        de: "Die kritisierte Lehre ist nicht nur, dass die Schrift die einzige <strong>unfehlbare</strong> Glaubensregel ist, sondern dass:",
      },
      callout: {
        en: "Scripture alone is the rule of faith.",
        fr: "L'Écriture seule est la règle de foi.",
        es: "La Escritura sola es la regla de fe.",
        de: "Die Schrift allein ist die Glaubensregel.",
      },
      p2: {
        en: "This is the classical formulation. Confessions affirm this clearly:",
        fr: "C'est la formulation classique. Les confessions l'affirment clairement :",
        es: "Esta es la formulación clásica. Las confesiones lo afirman claramente:",
        de: "Das ist die klassische Formulierung. Bekenntnisse bestätigen dies deutlich:",
      },
      confessions: {
        c1: {
          en: "<strong>Westminster Confession:</strong> Synods or councils are not to be made the rule of faith.",
          fr: "<strong>Confession de Westminster :</strong> Les synodes ou conciles ne doivent pas être érigés en règle de foi.",
          es: "<strong>Confesión de Westminster:</strong> Los sínodos o concilios no deben convertirse en la regla de fe.",
          de: "<strong>Westminster-Bekenntnis:</strong> Synoden oder Konzilien dürfen nicht zur Glaubensregel gemacht werden.",
        },
        c2: {
          en: "<strong>Westminster Larger Catechism:</strong> Scripture is the only rule of faith and obedience.",
          fr: "<strong>Grand Catéchisme de Westminster :</strong> L'Écriture est la seule règle de foi et d'obéissance.",
          es: "<strong>Catecismo Mayor de Westminster:</strong> La Escritura es la única regla de fe y obediencia.",
          de: "<strong>Größerer Westminster-Katechismus:</strong> Die Schrift ist die einzige Regel des Glaubens und des Gehorsams.",
        },
        c3: {
          en: "<strong>Helvetic Consensus:</strong> Scripture is the sole and complete rule.",
          fr: "<strong>Consensus Helvétique :</strong> L'Écriture est la seule et complète règle.",
          es: "<strong>Consenso Helvético:</strong> La Escritura es la única y completa regla.",
          de: "<strong>Helvetischer Konsens:</strong> Die Schrift ist die alleinige und vollständige Regel.",
        },
        c4: {
          en: "<strong>Formula of Concord:</strong> God's word alone is the guiding principle.",
          fr: "<strong>Formule de Concorde :</strong> La parole de Dieu seule est le principe directeur.",
          es: "<strong>Fórmula de la Concordia:</strong> Solo la palabra de Dios es el principio rector.",
          de: "<strong>Konkordienformel:</strong> Gottes Wort allein ist der Leitfaden.",
        },
      },
      p3: {
        en: "Modern Protestant attempts to add the word <em>infallible</em> shift the meaning. This addition is inconsistent with classical theology. For example:",
        fr: "Les tentatives protestantes modernes d'ajouter le mot <em>infaillible</em> déplacent le sens. Cet ajout est incompatible avec la théologie classique. Par exemple :",
        es: "Los intentos protestantes modernos de añadir la palabra <em>infalible</em> cambian el significado. Esta adición es inconsistente con la teología clásica. Por ejemplo:",
        de: "Moderne protestantische Versuche, das Wort <em>unfehlbar</em> hinzuzufügen, verschieben die Bedeutung. Diese Hinzufügung ist unvereinbar mit der klassischen Theologie. Zum Beispiel:",
      },
      li1: {
        en: "Moses Amyraut and Richard Baxter believed infallibility could apply to councils.",
        fr: "Moïse Amyraut et Richard Baxter croyaient que l'infaillibilité pouvait s'appliquer aux conciles.",
        es: "Moses Amyraut y Richard Baxter creían que la infalibilidad podía aplicarse a los concilios.",
        de: "Moses Amyraut und Richard Baxter glaubten, dass Unfehlbarkeit auch für Konzilien gelten könnte.",
      },
      li2: {
        en: "Catholics distinguish between fallible and infallible rules of faith.",
        fr: "Les catholiques distinguent entre les règles de foi faillibles et infaillibles.",
        es: "Los católicos distinguen entre reglas de fe falibles e infalibles.",
        de: "Katholiken unterscheiden zwischen fehlbaren und unfehlbaren Glaubensregeln.",
      },
      p4: {
        en: "Being a rule of faith means having <strong>authenticity</strong>—the authority to bind conscience. Tradition and ecclesial authority may assist in interpretation, but in <em>Sola Scriptura</em> they do not bind.",
        fr: "Être une règle de foi signifie avoir l'<strong>authenticité</strong> — l'autorité de lier la conscience. La tradition et l'autorité ecclésiale peuvent aider à l'interprétation, mais dans <em>Sola Scriptura</em>, elles ne lient pas.",
        es: "Ser una regla de fe significa tener <strong>autenticidad</strong>, la autoridad para obligar la conciencia. La tradición y la autoridad eclesial pueden ayudar en la interpretación, pero en <em>Sola Scriptura</em> no obligan.",
        de: "Eine Glaubensregel zu sein bedeutet, <strong>Authentizität</strong> zu haben – die Autorität, das Gewissen zu binden. Tradition und kirchliche Autorität können bei der Interpretation helfen, aber bei <em>Sola Scriptura</em> binden sie nicht.",
      },
    },
    natureOfFaith: {
      h2: {
        en: "The Nature of Faith",
        fr: "La Nature de la Foi",
        es: "La Naturaleza de la Fe",
        de: "Das Wesen des Glaubens",
      },
      p1: {
        en: "Understanding <em>faith</em> is key. Dogmatic faith (not fiduciary faith) is distinct from sense perception, self-evident principles, or demonstration. Lude Le Blanc writes:",
        fr: "Comprendre la <em>foi</em> est essentiel. La foi dogmatique (et non la foi fiduciaire) se distingue de la perception sensorielle, des principes évidents par eux-mêmes ou de la démonstration. Lude Le Blanc écrit :",
        es: "Entender la <em>fe</em> es clave. La fe dogmática (no la fe fiduciaria) es distinta de la percepción sensorial, los principios autoevidentes o la demostración. Lude Le Blanc escribe:",
        de: "Das Verständnis des <em>Glaubens</em> ist entscheidend. Der dogmatische Glaube (nicht der fiduziarische Glaube) unterscheidet sich von der Sinneswahrnehmung, selbstverständlichen Prinzipien oder der Demonstration. Lude Le Blanc schreibt:",
      },
      quote: {
        en: "We do not properly hold by faith those things which we perceive by sense, nor also those things which have been necessarily and evidently demonstrated to us.",
        fr: "Nous ne tenons pas proprement par la foi les choses que nous percevons par les sens, ni non plus les choses qui nous ont été nécessairement et évidemment démontrées.",
        es: "No sostenemos propiamente por fe aquellas cosas que percibimos por los sentidos, ni tampoco aquellas cosas que nos han sido demostrada necesaria y evidentemente.",
        de: "Wir halten nicht eigentlich durch Glauben jene Dinge, die wir durch die Sinne wahrnehmen, noch auch jene Dinge, die uns notwendig und offensichtlich bewiesen wurden.",
      },
      source: {
        en: "Lude Le Blanc",
        fr: "Lude Le Blanc",
        es: "Lude Le Blanc",
        de: "Lude Le Blanc",
      },
      p2: {
        en: "Faith includes:",
        fr: "La foi inclut :",
        es: "La fe incluye:",
        de: "Glaube beinhaltet:",
      },
      elements: {
        e1: {
          label: {
            en: "Principle",
            fr: "Principe",
            es: "Principio",
            de: "Prinzip",
          },
          desc: {
            en: "Grace stirred by the Holy Spirit",
            fr: "La grâce mue par le Saint-Esprit",
            es: "La gracia movida por el Espíritu Santo",
            de: "Gnade, angeregt durch den Heiligen Geist",
          },
        },
        e2: {
          label: {
            en: "Material Object",
            fr: "Objet Matériel",
            es: "Objeto Material",
            de: "Materielles Objekt",
          },
          desc: {
            en: "Supernatural truth",
            fr: "Vérité surnaturelle",
            es: "Verdad sobrenatural",
            de: "Übernatürliche Wahrheit",
          },
        },
        e3: {
          label: {
            en: "Formal Object",
            fr: "Objet Formel",
            es: "Objeto Formal",
            de: "Formelles Objekt",
          },
          desc: {
            en: "Believed as revealed by God",
            fr: "Cru comme révélé par Dieu",
            es: "Creído como revelado por Dios",
            de: "Geglaubt als von Gott offenbart",
          },
        },
      },
      faithVsVision: {
        h3: {
          en: "Faith vs Vision",
          fr: "Foi vs Vision",
          es: "Fe vs Visión",
          de: "Glaube vs. Schau",
        },
        p1: {
          en: "What is believed by faith now will be known by sight in the beatific vision. When divine truths are seen directly, faith is abolished, not perfected.",
          fr: "Ce qui est cru par la foi maintenant sera connu par la vue dans la vision béatifique. Lorsque les vérités divines sont vues directement, la foi est abolie, et non perfectionnée.",
          es: "Lo que se cree por fe ahora, se conocerá por visión en la visión beatífica. Cuando las verdades divinas se ven directamente, la fe se anula, no se perfecciona.",
          de: "Was jetzt im Glauben geglaubt wird, wird in der beseligenden Schau durch Sehen erkannt. Wenn göttliche Wahrheiten direkt gesehen werden, wird der Glaube abgeschafft, nicht vervollkommnet.",
        },
      },
    },
    definitions: {
      h2: {
        en: "Revelation, Infallibility, and Inspiration",
        fr: "Révélation, Infaillibilité et Inspiration",
        es: "Revelación, Infalibilidad e Inspiración",
        de: "Offenbarung, Unfehlbarkeit und Inspiration",
      },
      p1: {
        en: "These three terms must be distinguished:",
        fr: "Ces trois termes doivent être distingués :",
        es: "Estos tres términos deben distinguirse:",
        de: "Diese drei Begriffe müssen unterschieden werden:",
      },
      terms: {
        t1: {
          term: {
            en: "Divine Revelation",
            fr: "Révélation Divine",
            es: "Revelación Divina",
            de: "Göttliche Offenbarung",
          },
          def: {
            en: "God speaking to man, typically through prophets or apostles.",
            fr: "Dieu parlant à l'homme, généralement par des prophètes ou des apôtres.",
            es: "Dios hablando al hombre, típicamente a través de profetas o apóstoles.",
            de: "Gott spricht zum Menschen, typischerweise durch Propheten oder Apostel.",
          },
        },
        t2: {
          term: {
            en: "Infallibility",
            fr: "Infaillibilité",
            es: "Infalibilidad",
            de: "Unfehlbarkeit",
          },
          def: {
            en: "Freedom from error, either absolute or in a restricted domain.",
            fr: "Absence d'erreur, soit absolue, soit dans un domaine restreint.",
            es: "Libertad de error, ya sea absoluta o en un dominio restringido.",
            de: "Freiheit von Irrtum, entweder absolut oder in einem begrenzten Bereich.",
          },
        },
        t3: {
          term: {
            en: "Inspiration",
            fr: "Inspiration",
            es: "Inspiración",
            de: "Inspiration",
          },
          def: {
            en: "The very words are authored by God.",
            fr: "Les mots mêmes sont écrits par Dieu.",
            es: "Las mismas palabras tienen a Dios por autor.",
            de: "Die Worte selbst sind von Gott verfasst.",
          },
        },
      },
      callout: {
        p1: {
          en: "A prophet may communicate revelation, even infallibly, without inspiration. For example, Paul may preach with divine authority without every word being divinely authored.",
          fr: "Un prophète peut communiquer la révélation, même infailliblement, sans inspiration. Par exemple, Paul peut prêcher avec une autorité divine sans que chaque mot soit divinement écrit.",
          es: "Un profeta puede comunicar la revelación, incluso infaliblemente, sin inspiración. Por ejemplo, Pablo puede predicar con autoridad divina sin que cada palabra sea de autoría divina.",
          de: "Ein Prophet kann Offenbarung mitteilen, sogar unfehlbar, ohne Inspiration. Zum Beispiel kann Paulus mit göttlicher Autorität predigen, ohne dass jedes Wort göttlich verfasst ist.",
        },
        p2: {
          en: "<strong>Inspiration is mysterious and interior.</strong> It is not publicly verifiable. Therefore, the knowledge that a book is inspired must come through divine revelation. This presents a problem for Protestants.",
          fr: "<strong>L'inspiration est mystérieuse et intérieure.</strong> Elle n'est pas vérifiable publiquement. Par conséquent, la connaissance qu'un livre est inspiré doit provenir de la révélation divine. Cela pose un problème aux protestants.",
          es: "<strong>La inspiración es misteriosa e interior.</strong> No es verificable públicamente. Por lo tanto, el conocimiento de que un libro es inspirado debe venir a través de la revelación divina. Esto presenta un problema para los protestantes.",
          de: "<strong>Inspiration ist geheimnisvoll und innerlich.</strong> Sie ist nicht öffentlich nachprüfbar. Daher muss das Wissen, dass ein Buch inspiriert ist, durch göttliche Offenbarung kommen. Dies stellt ein Problem für Protestanten dar.",
        },
      },
    },
    argument: {
      h2: {
        en: "Restating the Argument Fully",
        fr: "Reformulation Complète de l'Argument",
        es: "Reexposición Completa del Argumento",
        de: "Das Argument vollständig neu formuliert",
      },
      li1: {
        en: "<em>Sola Scriptura</em> claims Scripture is the sole rule of faith.",
        fr: "<em>Sola Scriptura</em> prétend que l'Écriture est la seule règle de foi.",
        es: "<em>Sola Scriptura</em> afirma que la Escritura es la única regla de fe.",
        de: "<em>Sola Scriptura</em> behauptet, die Schrift sei die alleinige Glaubensregel.",
      },
      li2: {
        en: "The fact that a book is divinely inspired must be believed by faith.",
        fr: "Le fait qu'un livre soit divinement inspiré doit être cru par la foi.",
        es: "El hecho de que un libro esté divinamente inspirado debe creerse por fe.",
        de: "Die Tatsache, dass ein Buch göttlich inspiriert ist, muss im Glauben angenommen werden.",
      },
      li3: {
        en: "Faith requires divine revelation.",
        fr: "La foi exige la révélation divine.",
        es: "La fe requiere revelación divina.",
        de: "Glaube erfordert göttliche Offenbarung.",
      },
      li4: {
        en: "The inspiration of the New Testament books is not found in Scripture.",
        fr: "L'inspiration des livres du Nouveau Testament ne se trouve pas dans l'Écriture.",
        es: "La inspiración de los libros del Nuevo Testamento no se encuentra en la Escritura.",
        de: "Die Inspiration der Bücher des Neuen Testaments findet sich nicht in der Schrift.",
      },
      li5: {
        en: "<strong>Therefore</strong>, Protestants must appeal to an extrabiblical source of divine revelation.",
        fr: "<strong>Par conséquent</strong>, les protestants doivent faire appel à une source extrabiblique de révélation divine.",
        es: "<strong>Por lo tanto</strong>, los protestantes deben apelar a una fuente extrabíblica de revelación divina.",
        de: "<strong>Daher</strong> müssen sich Protestanten auf eine außerbiblische Quelle göttlicher Offenbarung berufen.",
      },
      li6: {
        en: "<strong>Therefore</strong>, <em>Sola Scriptura</em> cannot consistently account for the canon.",
        fr: "<strong>Par conséquent</strong>, <em>Sola Scriptura</em> ne peut pas expliquer de manière cohérente le canon.",
        es: "<strong>Por lo tanto</strong>, <em>Sola Scriptura</em> no puede dar cuenta consistentemente del canon.",
        de: "<strong>Daher</strong> kann <em>Sola Scriptura</em> den Kanon nicht konsistent erklären.",
      },
      li7: {
        en: "But <em>Sola Scriptura</em> rejects such sources.",
        fr: "Mais <em>Sola Scriptura</em> rejette de telles sources.",
        es: "Pero <em>Sola Scriptura</em> rechaza tales fuentes.",
        de: "Aber <em>Sola Scriptura</em> lehnt solche Quellen ab.",
      },
      p1: {
        en: "The Catholic account avoids this problem by appealing to divine revelation transmitted through sacred tradition and authoritatively taught by the Church.",
        fr: "Le récit catholique évite ce problème en faisant appel à la révélation divine transmise par la sainte tradition et enseignée avec autorité par l'Église.",
        es: "El relato católico evita este problema apelando a la revelación divina transmitida a través de la sagrada tradición y enseñada autoritativamente por la Iglesia.",
        de: "Die katholische Darstellung vermeidet dieses Problem, indem sie sich auf die göttliche Offenbarung beruft, die durch die heilige Tradition überliefert und von der Kirche autoritativ gelehrt wird.",
      },
    },
    tuQuoque: {
      h2: {
        en: "The Tu Quoque Objection: Does Catholicism Have the Same Problem?",
        fr: "L'Objection Tu Quoque : le Catholicisme a-t-il le Même Problème ?",
        es: "La Objeción Tu Quoque: ¿Tiene el Catolicismo el Mismo Problema?",
        de: "Der Tu-Quoque-Einwand: Hat der Katholizismus das Gleiche Problem?",
      },
      p1: {
        en: "Some Protestants will respond that Catholics have the same problem: if inspiration must be known through divine revelation, doesn't that create an infinite regress? Doesn't Catholicism also fall into circularity?",
        fr: "Certains protestants répondront que les catholiques ont le même problème : si l'inspiration doit être connue par la révélation divine, cela ne crée-t-il pas une régression à l'infini ? Le catholicisme ne tombe-t-il pas aussi dans la circularité ?",
        es: "Algunos protestantes responderán que los católicos tienen el mismo problema: si la inspiración debe conocerse a través de la revelación divina, ¿no crea eso una regresión infinita? ¿No cae también el catolicismo en la circularidad?",
        de: "Einige Protestanten werden antworten, dass Katholiken dasselbe Problem haben: Wenn Inspiration durch göttliche Offenbarung erkannt werden muss, schafft das nicht einen unendlichen Regress? Fällt der Katholizismus nicht auch in Zirkularität?",
      },
      callout: {
        h4: {
          en: "No. The Catholic model avoids these problems:",
          fr: "Non. Le modèle catholique évite ces problèmes :",
          es: "No. El modelo católico evita estos problemas:",
          de: "Nein. Das katholische Modell vermeidet diese Probleme:",
        },
        li1: {
          en: "<strong>We do not say</strong> that divine revelation needs a divine revelation to confirm it.",
          fr: "<strong>Nous ne disons pas</strong> que la révélation divine a besoin d'une révélation divine pour la confirmer.",
          es: "<strong>No decimos</strong> que la revelación divina necesite otra revelación divina que la confirme.",
          de: "<strong>Wir sagen nicht</strong>, dass göttliche Offenbarung einer göttlichen Offenbarung bedarf, um sie zu bestätigen.",
        },
        li2: {
          en: "Rather, we say that <em>inspiration</em> is a revealed fact which must be proposed for belief.",
          fr: "Nous disons plutôt que l'<em>inspiration</em> est un fait révélé qui doit être proposé à la foi.",
          es: "Más bien, decimos que la <em>inspiración</em> es un hecho revelado que debe ser propuesto para la fe.",
          de: "Vielmehr sagen wir, dass <em>Inspiration</em> eine geoffenbarte Tatsache ist, die zum Glauben vorgelegt werden muss.",
        },
        li3: {
          en: "The Church is a divine legate, authenticated by Christ, and thus can propose the canon.",
          fr: "L'Église est un légat divin, authentifié par le Christ, et peut donc proposer le canon.",
          es: "La Iglesia es un legado divino, autenticado por Cristo, y por lo tanto puede proponer el canon.",
          de: "Die Kirche ist ein göttlicher Gesandter, von Christus beglaubigt, und kann daher den Kanon vorlegen.",
        },
      },
      p2: {
        en: "This is not circular because we begin with the historical reliability of the Gospels, establish Christ's authority through motives of credibility, and then proceed to the Church's authority as His appointed legate.",
        fr: "Ce n'est pas circulaire car nous commençons par la fiabilité historique des Évangiles, établissons l'autorité du Christ par des motifs de crédibilité, puis procédons à l'autorité de l'Église en tant que Son légat désigné.",
        es: "Esto no es circular porque comenzamos con la fiabilidad histórica de los Evangelios, establecemos la autoridad de Cristo a través de motivos de credibilidad, y luego procedemos a la autoridad de la Iglesia como Su legado designado.",
        de: "Das ist nicht zirkulär, weil wir mit der historischen Zuverlässigkeit der Evangelien beginnen, Christi Autorität durch Glaubwürdigkeitsmotive etablieren und dann zur Autorität der Kirche als Seiner ernannten Gesandtin übergehen.",
      },
    },
    counterarguments: {
      h2: {
        en: "Addressing Protestant Counterarguments",
        fr: "Répondre aux Contre-Arguments Protestants",
        es: "Abordando los Contraargumentos Protestantes",
        de: "Behandlung Protestantischer Gegenargumente",
      },
      c1: {
        h3: {
          en: "1. Illumination of the Spirit",
          fr: "1. Illumination de l'Esprit",
          es: "1. Iluminación del Espíritu",
          de: "1. Erleuchtung durch den Geist",
        },
        p1: {
          en: "Some Protestants say the Spirit testifies internally to the canon. But this cannot supply the <strong>formal object</strong> of faith—that it is revealed by God. If the Spirit provides this directly, then each Christian receives a private revelation of the canon, which Protestants reject. If it does not, then the formal object is missing.",
          fr: "Certains protestants disent que l'Esprit témoigne intérieurement du canon. Mais cela ne peut pas fournir l'<strong>objet formel</strong> de la foi — qu'il est révélé par Dieu. Si l'Esprit fournit cela directement, alors chaque chrétien reçoit une révélation privée du canon, ce que les protestants rejettent. Si ce n'est pas le cas, alors l'objet formel est manquant.",
          es: "Algunos protestantes dicen que el Espíritu testifica internamente sobre el canon. Pero esto no puede suministrar el <strong>objeto formal</strong> de la fe: que es revelado por Dios. Si el Espíritu proporciona esto directamente, entonces cada cristiano recibe una revelación privada del canon, lo cual los protestantes rechazan. Si no lo hace, entonces falta el objeto formal.",
          de: "Einige Protestanten sagen, der Geist bezeuge innerlich den Kanon. Dies kann jedoch nicht das <strong>formale Objekt</strong> des Glaubens liefern – dass es von Gott offenbart ist. Wenn der Geist dies direkt bereitstellt, empfängt jeder Christ eine private Offenbarung des Kanons, was Protestanten ablehnen. Wenn nicht, fehlt das formale Objekt.",
        },
      },
      c2: {
        h3: {
          en: "2. Canon Contained in Scripture",
          fr: "2. Canon Contenu dans l'Écriture",
          es: "2. Canon Contenido en la Escritura",
          de: "2. Kanon in der Schrift enthalten",
        },
        p1: {
          en: "Others say the canon is revealed within Scripture. But not every book identifies itself. Third John, for example, never claims inspiration. Appeals to apostolic authorship also fail because not all books are apostolic, and not all apostolic writings are inspired.",
          fr: "D'autres disent que le canon est révélé dans l'Écriture. Mais tous les livres ne s'identifient pas. La Troisième Épître de Jean, par exemple, ne revendique jamais l'inspiration. Les appels à la paternité apostolique échouent également car tous les livres ne sont pas apostoliques, et tous les écrits apostoliques ne sont pas inspirés.",
          es: "Otros dicen que el canon se revela dentro de la Escritura. Pero no todos los libros se identifican a sí mismos. Tercera de Juan, por ejemplo, nunca reclama inspiración. Las apelaciones a la autoría apostólica también fracasan porque no todos los libros son apostólicos, y no todos los escritos apostólicos son inspirados.",
          de: "Andere sagen, der Kanon sei in der Schrift offenbart. Aber nicht jedes Buch identifiziert sich selbst. Der Dritte Johannesbrief zum Beispiel beansprucht nie Inspiration. Berufungen auf apostolische Autorschaft scheitern ebenfalls, weil nicht alle Bücher apostolisch sind und nicht alle apostolischen Schriften inspiriert sind.",
        },
      },
      c3: {
        h3: {
          en: "3. Internal Marks of Sublimity",
          fr: "3. Marques Internes de Sublimité",
          es: "3. Marcas Internas de Sublimidad",
          de: "3. Interne Merkmale der Erhabenheit",
        },
        p1: {
          en: "Some claim the canon can be known by the internal beauty or sublimity of Scripture. But this is a <strong>scientific</strong> judgment, not a judgment of faith. Supernatural truths are not known by natural reasoning. Further, many sublime texts are not canonical, and some canonical books lack apparent sublimity.",
          fr: "Certains prétendent que le canon peut être connu par la beauté interne ou la sublimité de l'Écriture. Mais c'est un jugement <strong>scientifique</strong>, pas un jugement de foi. Les vérités surnaturelles ne sont pas connues par le raisonnement naturel. De plus, de nombreux textes sublimes ne sont pas canoniques, et certains livres canoniques manquent de sublimité apparente.",
          es: "Algunos afirman que el canon puede conocerse por la belleza interna o la sublimidad de la Escritura. Pero este es un juicio <strong>científico</strong>, no un juicio de fe. Las verdades sobrenaturales no se conocen por el razonamiento natural. Además, muchos textos sublimes no son canónicos, y algunos libros canónicos carecen de sublimidad aparente.",
          de: "Einige behaupten, der Kanon könne durch die innere Schönheit oder Erhabenheit der Schrift erkannt werden. Dies ist jedoch ein <strong>wissenschaftliches</strong> Urteil, kein Glaubensurteil. Übernatürliche Wahrheiten werden nicht durch natürliche Vernunft erkannt. Ferner sind viele erhabene Texte nicht kanonisch, und einigen kanonischen Büchern fehlt es an offensichtlicher Erhabenheit.",
        },
      },
      c4: {
        h3: {
          en: "4. Historical Witness of the Church",
          fr: "4. Témoignage Historique de l'Église",
          es: "4. Testimonio Histórico de la Iglesia",
          de: "4. Historisches Zeugnis der Kirche",
        },
        p1: {
          en: "Some concede that the Church historically testified to the canon. But this raises the question: is belief in the canon an act of human faith or divine faith? If it is human, it cannot ground divine inspiration. If it is divine, then where is the revelation? If it is outside Scripture, <em>Sola Scriptura</em> collapses.",
          fr: "Certains concèdent que l'Église a historiquement témoigné du canon. Mais cela soulève la question : la croyance dans le canon est-elle un acte de foi humaine ou de foi divine ? Si elle est humaine, elle ne peut fonder l'inspiration divine. Si elle est divine, alors où est la révélation ? Si elle est en dehors de l'Écriture, <em>Sola Scriptura</em> s'effondre.",
          es: "Algunos conceden que la Iglesia testificó históricamente sobre el canon. Pero esto plantea la pregunta: ¿es la creencia en el canon un acto de fe humana o de fe divina? Si es humana, no puede fundamentar la inspiración divina. Si es divina, ¿dónde está la revelación? Si está fuera de la Escritura, <em>Sola Scriptura</em> se colapsa.",
          de: "Einige geben zu, dass die Kirche historisch den Kanon bezeugt hat. Dies wirft jedoch die Frage auf: Ist der Glaube an den Kanon ein Akt menschlichen Glaubens oder göttlichen Glaubens? Wenn er menschlich ist, kann er die göttliche Inspiration nicht begründen. Wenn er göttlich ist, wo ist dann die Offenbarung? Wenn sie außerhalb der Schrift liegt, bricht <em>Sola Scriptura</em> zusammen.",
        },
      },
      c5: {
        h3: {
          en: "5. The Appeal to Motives of Credibility Alone",
          fr: "5. L'Appel aux Seuls Motifs de Crédibilité",
          es: "5. La Apelación a los Motivos de Credibilidad Solamente",
          de: "5. Die Berufung allein auf Glaubwürdigkeitsmotive",
        },
        p1: {
          en: "Some Protestants attempt to bridge the gap by appealing to motives of credibility—miracles, fulfilled prophecies, or the moral excellence of Scripture—to justify belief in the canon. Yet this approach also fails for the same fundamental reason: it confuses the concepts of divine revelation and inspiration. Motives of credibility can confirm the truthfulness of a messenger or message, but they cannot establish inspiration, which is a supernatural act of God that cannot be inferred solely from external signs.",
          fr: "Certains protestants tentent de combler le fossé en faisant appel à des motifs de crédibilité — miracles, prophéties accomplies ou excellence morale de l'Écriture — pour justifier la croyance dans le canon. Pourtant, cette approche échoue également pour la même raison fondamentale : elle confond les concepts de révélation divine et d'inspiration. Les motifs de crédibilité peuvent confirmer la véracité d'un messager ou d'un message, mais ils ne peuvent établir l'inspiration, qui est un acte surnaturel de Dieu qui ne peut être déduit uniquement de signes extérieurs.",
          es: "Algunos protestantes intentan salvar la brecha apelando a motivos de credibilidad —milagros, profecías cumplidas o la excelencia moral de la Escritura— para justificar la creencia en el canon. Sin embargo, este enfoque también fracasa por la misma razón fundamental: confunde los conceptos de revelación divina e inspiración. Los motivos de credibilidad pueden confirmar la veracidad de un mensajero o mensaje, pero no pueden establecer la inspiración, que es un acto sobrenatural de Dios que no puede inferirse únicamente de signos externos.",
          de: "Einige Protestanten versuchen, die Lücke zu schließen, indem sie sich auf Glaubwürdigkeitsmotive berufen – Wunder, erfüllte Prophezeiungen oder die moralische Exzellenz der Schrift –, um den Glauben an den Kanon zu rechtfertigen. Doch dieser Ansatz scheitert aus demselben Grund: Er verwechselt die Konzepte der göttlichen Offenbarung und der Inspiration. Glaubwürdigkeitsmotive können die Wahrhaftigkeit eines Boten oder einer Botschaft bestätigen, aber sie können keine Inspiration begründen, die ein übernatürlicher Akt Gottes ist, der nicht allein aus äußeren Zeichen abgeleitet werden kann.",
        },
      },
      c6: {
        h3: {
          en: "6. The Canon as a Historical Judgment",
          fr: "6. Le Canon comme Jugement Historique",
          es: "6. El Canon como Juicio Histórico",
          de: "6. Der Kanon als Historisches Urteil",
        },
        p1: {
          en: "Another fallback is to treat the canon as a historically reliable tradition—something that emerged organically from the Church's common recognition over time. This too collapses under scrutiny. If belief in the canon is based solely on historical investigation, then the assent to its inspiration is based on human reasoning, not divine faith. But divine inspiration is not a merely historical claim—it is a supernatural truth, and thus it demands a supernatural source of revelation.",
          fr: "Une autre solution de repli consiste à traiter le canon comme une tradition historiquement fiable — quelque chose qui a émergé organiquement de la reconnaissance commune de l'Église au fil du temps. Cela s'effondre également sous l'examen. Si la croyance dans le canon est basée uniquement sur une enquête historique, alors l'assentiment à son inspiration est basé sur le raisonnement humain, et non sur la foi divine. Mais l'inspiration divine n'est pas une simple affirmation historique — c'est une vérité surnaturelle, et elle exige donc une source surnaturelle de révélation.",
          es: "Otro recurso es tratar el canon como una tradición históricamente confiable, algo que surgió orgánicamente del reconocimiento común de la Iglesia a lo largo del tiempo. Esto también se derrumba bajo escrutinio. Si la creencia en el canon se basa únicamente en la investigación histórica, entonces el asentimiento a su inspiración se basa en el razonamiento humano, no en la fe divina. Pero la inspiración divina no es una mera afirmación histórica, es una verdad sobrenatural y, por lo tanto, exige una fuente sobrenatural de revelación.",
          de: "Eine weitere Ausweichmöglichkeit besteht darin, den Kanon als historisch zuverlässige Tradition zu behandeln – etwas, das organisch aus der gemeinsamen Anerkennung der Kirche im Laufe der Zeit entstanden ist. Auch dies bricht bei genauerer Betrachtung zusammen. Wenn der Glaube an den Kanon ausschließlich auf historischer Untersuchung beruht, basiert die Zustimmung zu seiner Inspiration auf menschlicher Vernunft, nicht auf göttlichem Glauben. Aber göttliche Inspiration ist keine bloß historische Behauptung – sie ist eine übernatürliche Wahrheit und erfordert daher eine übernatürliche Offenbarungsquelle.",
        },
      },
    },
    solution: {
      h2: {
        en: "The Catholic Solution: Coherent and Consistent",
        fr: "La Solution Catholique : Cohérente et Logique",
        es: "La Solución Católica: Coherente y Consistente",
        de: "Die Katholische Lösung: Kohärent und Konsistent",
      },
      p1: {
        en: "The Catholic position resolves all these difficulties.",
        fr: "La position catholique résout toutes ces difficultés.",
        es: "La posición católica resuelve todas estas dificultades.",
        de: "Die katholische Position löst all diese Schwierigkeiten.",
      },
      h3: {
        en: "Step-by-Step Coherence",
        fr: "Cohérence Étape par Étape",
        es: "Coherencia Paso a Paso",
        de: "Schritt-für-Schritt-Kohärenz",
      },
      steps: {
        s1: {
          en: "Begin with the <strong>historical reliability</strong> of the Gospels, using the same critical methods applied to any ancient text.",
          fr: "Commencez par la <strong>fiabilité historique</strong> des Évangiles, en utilisant les mêmes méthodes critiques appliquées à n'importe quel texte ancien.",
          es: "Comience con la <strong>fiabilidad histórica</strong> de los Evangelios, utilizando los mismos métodos críticos aplicados a cualquier texto antiguo.",
          de: "Beginnen Sie mit der <strong>historischen Zuverlässigkeit</strong> der Evangelien und wenden Sie dieselben kritischen Methoden an wie bei jedem antiken Text.",
        },
        s2: {
          en: "From there, recognize the <strong>motives of credibility</strong> that confirm Christ&apos;s identity as the divine legate: His miracles, His resurrection, His fulfillment of prophecy.",
          fr: "De là, reconnaissez les <strong>motifs de crédibilité</strong> qui confirment l'identité du Christ en tant que légat divin : Ses miracles, Sa résurrection, Son accomplissement des prophéties.",
          es: "A partir de ahí, reconozca los <strong>motivos de credibilidad</strong> que confirman la identidad de Cristo como el legado divino: Sus milagros, Su resurrección, Su cumplimiento de la profecía.",
          de: "Erkennen Sie von dort aus die <strong>Glaubwürdigkeitsmotive</strong>, die die Identität Christi als göttlichen Gesandten bestätigen: Seine Wunder, Seine Auferstehung, Seine Erfüllung der Prophezeiungen.",
        },
        s3: {
          en: "Understand that Christ <strong>established a Church</strong> with divine authority, promising it the guidance of the Holy Spirit.",
          fr: "Comprenez que le Christ <strong>a établi une Église</strong> avec une autorité divine, lui promettant la direction du Saint-Esprit.",
          es: "Entienda que Cristo <strong>estableció una Iglesia</strong> con autoridad divina, prometiéndole la guía del Espíritu Santo.",
          de: "Verstehen Sie, dass Christus <strong>eine Kirche gegründet</strong> hat mit göttlicher Autorität und ihr die Führung des Heiligen Geistes versprochen hat.",
        },
        s4: {
          en: "Acknowledge that this Church, through its <strong>apostolic succession</strong> and fidelity to Christ&apos;s command, is a divine legate.",
          fr: "Reconnaissez que cette Église, par sa <strong>succession apostolique</strong> et sa fidélité au commandement du Christ, est un légat divin.",
          es: "Reconozca que esta Iglesia, a través de su <strong>sucesión apostólica</strong> y fidelidad al mandato de Cristo, es un legado divino.",
          de: "Erkennen Sie an, dass diese Kirche durch ihre <strong>apostolische Sukzession</strong> und Treue zu Christi Gebot eine göttliche Gesandtin ist.",
        },
        s5: {
          en: "Receive the canon of Scripture as proposed by that Church, as a <strong>divinely revealed truth</strong>.",
          fr: "Recevez le canon de l'Écriture tel que proposé par cette Église, comme une <strong>vérité divinement révélée</strong>.",
          es: "Reciba el canon de la Escritura propuesto por esa Iglesia, como una <strong>verdad divinamente revelada</strong>.",
          de: "Empfangen Sie den Kanon der Schrift, wie er von dieser Kirche vorgelegt wird, als eine <strong>göttlich offenbarte Wahrheit</strong>.",
        },
      },
      quote1: {
        en: "We do not begin by supposing their inspiration to prove the Church from the Bible and the Bible from the Church. This is a gross mischaracterization.",
        fr: "Nous ne commençons pas par supposer leur inspiration pour prouver l'Église par la Bible et la Bible par l'Église. C'est une grossière déformation.",
        es: "No comenzamos suponiendo su inspiración para probar la Iglesia a partir de la Biblia y la Biblia a partir de la Iglesia. Esto es una grave tergiversación.",
        de: "Wir beginnen nicht damit, ihre Inspiration vorauszusetzen, um die Kirche aus der Bibel und die Bibel aus der Kirche zu beweisen. Das ist eine grobe Falschdarstellung.",
      },
      p2: {
        en: "This is not circular. We do not start with an infallible Church and derive an inspired Bible, nor do we start with an inspired Bible to prove the Church. Rather, both are affirmed through a chain of rational credibility leading to supernatural revelation.",
        fr: "Ce n'est pas circulaire. Nous ne commençons pas avec une Église infaillible pour en déduire une Bible inspirée, ni ne commençons avec une Bible inspirée pour prouver l'Église. Au contraire, les deux sont affirmés par une chaîne de crédibilité rationnelle menant à la révélation surnaturelle.",
        es: "Esto no es circular. No partimos de una Iglesia infalible para derivar una Biblia inspirada, ni partimos de una Biblia inspirada para probar la Iglesia. Más bien, ambos se afirman a través de una cadena de credibilidad racional que conduce a la revelación sobrenatural.",
        de: "Das ist nicht zirkulär. Wir beginnen nicht mit einer unfehlbaren Kirche und leiten daraus eine inspirierte Bibel ab, noch beginnen wir mit einer inspirierten Bibel, um die Kirche zu beweisen. Vielmehr werden beide durch eine Kette rationaler Glaubwürdigkeit bestätigt, die zur übernatürlichen Offenbarung führt.",
      },
      h3tradition: {
        en: "The Role of Sacred Tradition",
        fr: "Le Rôle de la Sainte Tradition",
        es: "El Papel de la Sagrada Tradición",
        de: "Die Rolle der Heiligen Tradition",
      },
      p3: {
        en: "Sacred Tradition is not an inspired text in the same sense as Scripture. It is the <strong>living transmission</strong> of divine revelation entrusted by Christ to the apostles and their successors. It is authoritative and divine in origin but not reducible to written words.",
        fr: "La Sainte Tradition n'est pas un texte inspiré au même titre que l'Écriture. C'est la <strong>transmission vivante</strong> de la révélation divine confiée par le Christ aux apôtres et à leurs successeurs. Elle est autorisée et d'origine divine, mais non réductible à des mots écrits.",
        es: "La Sagrada Tradición no es un texto inspirado en el mismo sentido que la Escritura. Es la <strong>transmisión viva</strong> de la revelación divina confiada por Cristo a los apóstoles y sus sucesores. Es autoritativa y de origen divino, pero no reducible a palabras escritas.",
        de: "Die Heilige Tradition ist kein inspirierter Text im selben Sinne wie die Schrift. Sie ist die <strong>lebendige Überlieferung</strong> der göttlichen Offenbarung, die von Christus den Aposteln und ihren Nachfolgern anvertraut wurde. Sie ist autoritativ und göttlichen Ursprungs, aber nicht auf geschriebene Worte reduzierbar.",
      },
      quote2: {
        text: {
          en: "Sacred Tradition and Sacred Scripture form one sacred deposit of the word of God, committed to the Church.",
          fr: "La Sainte Tradition et la Sainte Écriture constituent un unique dépôt sacré de la parole de Dieu, confié à l'Église.",
          es: "La Sagrada Tradición y la Sagrada Escritura forman un solo depósito sagrado de la palabra de Dios, confiado a la Iglesia.",
          de: "Die Heilige Tradition und die Heilige Schrift bilden einen einzigen heiligen Schatz des Wortes Gottes, der der Kirche anvertraut ist.",
        },
        source: {
          en: "Dei Verbum §9",
          fr: "Dei Verbum §9",
          es: "Dei Verbum §9",
          de: "Dei Verbum §9",
        },
      },
      p4: {
        en: "Tradition makes known what has been revealed, including the fact of inspiration for the canon. It does not replace revelation; it transmits it faithfully.",
        fr: "La Tradition fait connaître ce qui a été révélé, y compris le fait de l'inspiration pour le canon. Elle ne remplace pas la révélation ; elle la transmet fidèlement.",
        es: "La Tradición da a conocer lo que ha sido revelado, incluido el hecho de la inspiración para el canon. No reemplaza la revelación; la transmite fielmente.",
        de: "Die Tradition macht bekannt, was offenbart wurde, einschließlich der Tatsache der Inspiration für den Kanon. Sie ersetzt nicht die Offenbarung; sie übermittelt sie treu.",
      },
      h3magisterium: {
        en: "Magisterial Authority",
        fr: "Autorité Magistérielle",
        es: "Autoridad Magisterial",
        de: "Lehramtliche Autorität",
      },
      p5: {
        en: "The Magisterium—the Church's teaching office—authentically interprets and proposes what has been revealed. This includes dogmas, moral teachings, and the canon of Scripture. The Church does not create inspiration; it discerns and declares what God has revealed.",
        fr: "Le Magistère — la charge d'enseignement de l'Église — interprète authentiquement et propose ce qui a été révélé. Cela inclut les dogmes, les enseignements moraux et le canon de l'Écriture. L'Église ne crée pas l'inspiration ; elle discerne et déclare ce que Dieu a révélé.",
        es: "El Magisterio —el oficio de enseñanza de la Iglesia— interpreta auténticamente y propone lo que ha sido revelado. Esto incluye dogmas, enseñanzas morales y el canon de la Escritura. La Iglesia no crea la inspiración; discierne y declara lo que Dios ha revelado.",
        de: "Das Lehramt – das Lehramt der Kirche – legt authentisch aus und legt vor, was offenbart wurde. Dazu gehören Dogmen, Morallehren und der Kanon der Schrift. Die Kirche schafft keine Inspiration; sie unterscheidet und erklärt, was Gott offenbart hat.",
      },
    },
    conclusion: {
      h2: {
        en: "Conclusion: A Call to Intellectual Honesty and Faith",
        fr: "Conclusion : Un Appel à l'Honnêteté Intellectuelle et à la Foi",
        es: "Conclusión: Un Llamado a la Honestidad Intelectual y a la Fe",
        de: "Schlussfolgerung: Ein Aufruf zu Intellektueller Ehrlichkeit und Glauben",
      },
      p1: {
        en: "Every Protestant must confront this dilemma:",
        fr: "Chaque protestant doit affronter ce dilemme :",
        es: "Todo protestante debe enfrentar este dilema:",
        de: "Jeder Protestant muss sich diesem Dilemma stellen:",
      },
      li1: {
        en: "Either abandon <em>Sola Scriptura</em>, or",
        fr: "Soit abandonner <em>Sola Scriptura</em>, soit",
        es: "O abandonar <em>Sola Scriptura</em>, o",
        de: "Entweder <em>Sola Scriptura</em> aufgeben, oder",
      },
      li2: {
        en: "Admit there is no consistent basis to believe the Bible is inspired.",
        fr: "Admettre qu'il n'y a aucune base cohérente pour croire que la Bible est inspirée.",
        es: "Admitir que no hay una base consistente para creer que la Biblia es inspirada.",
        de: "Zugeben, dass es keine konsistente Grundlage gibt, um zu glauben, dass die Bibel inspiriert ist.",
      },
      p2: {
        en: "The only coherent path forward is the Catholic one. The canon of Scripture, like all dogmas of faith, must be received through divine revelation—preserved in sacred tradition and taught by the Church.",
        fr: "La seule voie cohérente est la voie catholique. Le canon de l'Écriture, comme tous les dogmes de la foi, doit être reçu par la révélation divine — préservée dans la sainte tradition et enseignée par l'Église.",
        es: "El único camino coherente a seguir es el católico. El canon de la Escritura, como todos los dogmas de fe, debe recibirse a través de la revelación divina, preservada en la sagrada tradición y enseñada por la Iglesia.",
        de: "Der einzig kohärente Weg vorwärts ist der katholische. Der Kanon der Schrift, wie alle Glaubensdogmen, muss durch göttliche Offenbarung empfangen werden – bewahrt in der heiligen Tradition und gelehrt von der Kirche.",
      },
    },
    bridge: {
      h3: {
        en: "The Path Forward",
        fr: "La Voie à Suivre",
        es: "El Camino a Seguir",
        de: "Der Weg nach Vorn",
      },
      p1: {
        en: "Having established that <em>Sola Scriptura</em> is impossible in principle, we can now explore the positive case for the Catholic model of Scripture, Tradition, and Magisterium working together.",
        fr: "Ayant établi que <em>Sola Scriptura</em> est impossible en principe, nous pouvons maintenant explorer le cas positif du modèle catholique de l'Écriture, de la Tradition et du Magistère fonctionnant ensemble.",
        es: "Habiendo establecido que <em>Sola Scriptura</em> es imposible en principio, ahora podemos explorar el caso positivo del modelo católico de la Escritura, la Tradición y el Magisterio trabajando juntos.",
        de: "Nachdem wir festgestellt haben, dass <em>Sola Scriptura</em> prinzipiell unmöglich ist, können wir nun den positiven Fall für das katholische Modell von Schrift, Tradition und Lehramt in ihrem Zusammenwirken untersuchen.",
      },
      p2: {
        en: "The next topics will examine how the Church discerned the canon, why we have 73 books instead of 66, and the role of the Magisterium in preserving and interpreting divine revelation.",
        fr: "Les prochains sujets examineront comment l'Église a discerné le canon, pourquoi nous avons 73 livres au lieu de 66, et le rôle du Magistère dans la préservation et l'interprétation de la révélation divine.",
        es: "Los próximos temas examinarán cómo la Iglesia discernió el canon, por qué tenemos 73 libros en lugar de 66, y el papel del Magisterio en la preservación e interpretación de la revelación divina.",
        de: "Die nächsten Themen werden untersuchen, wie die Kirche den Kanon unterschieden hat, warum wir 73 Bücher statt 66 haben, und die Rolle des Lehramtes bei der Bewahrung und Auslegung der göttlichen Offenbarung.",
      },
    },
  },

  scholasticApproaches: {
    title: {
      en: "Scholastic Approaches to Sola Scriptura",
      fr: "Approches Scolastiques de Sola Scriptura",
      es: "Enfoques Escolásticos de Sola Scriptura",
      de: "Scholastische Ansätze zu Sola Scriptura",
    },
    subtitle: {
      en: "The Ultimate Refutation of 'Scripture Alone'",
      fr: "La Réfutation Ultime de 'l'Écriture Seule'",
      es: "La Refutación Definitiva de 'Solo la Escritura'",
      de: "Die Ultimative Widerlegung von 'Allein die Schrift'",
    },
    quote: {
      text: {
        en: "Faith and reason are like two wings on which the human spirit rises to the contemplation of truth.",
        fr: "La foi et la raison sont comme deux ailes sur lesquelles l'esprit humain s'élève vers la contemplation de la vérité.",
        es: "La fe y la razón son como dos alas con las que el espíritu humano se eleva a la contemplación de la verdad.",
        de: "Glaube und Vernunft sind wie zwei Flügel, auf denen sich der menschliche Geist zur Betrachtung der Wahrheit erhebt.",
      },
      source: {
        en: "Pope John Paul II, Fides et Ratio",
        fr: "Pape Jean-Paul II, Fides et Ratio",
        es: "Papa Juan Pablo II, Fides et Ratio",
        de: "Papst Johannes Paul II., Fides et Ratio",
      },
    },
    intro: {
      h2: {
        en: "Introduction",
        fr: "Introduction",
        es: "Introducción",
        de: "Einführung",
      },
      p1: {
        en: "For over five centuries, adherents of Protestantism have advanced the thesis of <em>Sola Scriptura</em> — the assertion that Sacred Scripture alone constitutes the sole infallible norm of Christian faith and practice. While this claim purports to safeguard the primacy and sufficiency of the biblical witness and to guard against ecclesiastical error, it suffers from critical philosophical, theological, historical, and epistemological deficiencies.",
        fr: "Depuis plus de cinq siècles, les adeptes du protestantisme avancent la thèse de <em>Sola Scriptura</em> — l'affirmation selon laquelle la Sainte Écriture constitue à elle seule la seule norme infaillible de la foi et de la pratique chrétiennes. Bien que cette affirmation prétende sauvegarder la primauté et la suffisance du témoignage biblique et se prémunir contre l'erreur ecclésiastique, elle souffre de critiques philosophiques, théologiques, historiques et épistémologiques critiques.",
        es: "Durante más de cinco siglos, los adherentes al protestantismo han avanzado la tesis de <em>Sola Scriptura</em> — la afirmación de que la Sagrada Escritura por sí sola constituye la única norma infalible de la fe y la práctica cristianas. Si bien esta afirmación pretende salvaguardar la primacía y suficiencia del testimonio bíblico y proteger contra el error eclesiástico, adolece de deficiencias filosóficas, teológicas, históricas y epistemológicas críticas.",
        de: "Seit über fünf Jahrhunderten vertreten Anhänger des Protestantismus die These von <em>Sola Scriptura</em> – die Behauptung, dass die Heilige Schrift allein die einzige unfehlbare Norm des christlichen Glaubens und der Praxis darstellt. Während dieser Anspruch vorgibt, den Primat und die Hinlänglichkeit des biblischen Zeugnisses zu wahren und vor kirchlichem Irrtum zu schützen, leidet er unter schwerwiegenden philosophischen, theologischen, historischen und erkenntnistheoretischen Mängeln.",
      },
      p2: {
        en: "As this essay shall argue, <strong>Sola Scriptura is not merely a problematic theological construct, but one that is, upon closer analysis, self-defeating and internally incoherent</strong>.",
        fr: "Comme cet essai le démontrera, <strong>Sola Scriptura n'est pas simplement une construction théologique problématique, mais une construction qui, après une analyse plus approfondie, s'auto-réfute et est intrinsèquement incohérente</strong>.",
        es: "Como argumentará este ensayo, <strong>Sola Scriptura no es simplemente una construcción teológica problemática, sino una que, tras un análisis más detenido, es contraproducente e internamente incoherente</strong>.",
        de: "Wie dieser Aufsatz argumentieren wird, ist <strong>Sola Scriptura nicht nur ein problematisches theologisches Konstrukt, sondern eines, das sich bei näherer Betrachtung als selbstzerstörerisch und intern inkohärent erweist</strong>.",
      },
      p3: {
        en: "This extended critique will demonstrate that the Protestant reliance on Scripture as the exclusive and self-authenticating source of divine revelation fails to account for the epistemic foundations necessary to justify belief in the very canon it seeks to uphold. Drawing from classical Catholic apologetics, patristic sources, the scholastic tradition, and contemporary philosophical analysis, we will explore how the Catholic understanding of the relationship between Scripture, Tradition, and the Magisterium offers a more coherent, stable, and historically rooted epistemology for the recognition and interpretation of divine revelation.",
        fr: "Cette critique approfondie démontrera que la dépendance protestante à l'égard de l'Écriture en tant que source exclusive et auto-authentifiante de la révélation divine ne parvient pas à expliquer les fondements épistémiques nécessaires pour justifier la croyance dans le canon même qu'elle cherche à défendre. En nous appuyant sur l'apologétique catholique classique, les sources patristiques, la tradition scolastique et l'analyse philosophique contemporaine, nous explorerons comment la compréhension catholique de la relation entre l'Écriture, la Tradition et le Magistère offre une épistémologie plus cohérente, stable et historiquement enracinée pour la reconnaissance et l'interprétation de la révélation divine.",
        es: "Esta crítica extendida demostrará que la confianza protestante en la Escritura como la fuente exclusiva y autoautenticada de la revelación divina no da cuenta de los fundamentos epistémicos necesarios para justificar la creencia en el canon mismo que busca defender. Basándonos en la apologética católica clásica, las fuentes patrísticas, la tradición escolástica y el análisis filosófico contemporáneo, exploraremos cómo la comprensión católica de la relación entre la Escritura, la Tradición y el Magisterio ofrece una epistemología más coherente, estable e históricamente arraigada para el reconocimiento e interpretación de la revelación divina.",
        de: "Diese erweiterte Kritik wird zeigen, dass die protestantische Abhängigkeit von der Schrift als ausschließliche und sich selbst beglaubigende Quelle der göttlichen Offenbarung die erkenntnistheoretischen Grundlagen, die notwendig sind, um den Glauben an eben jenen Kanon zu rechtfertigen, den sie zu wahren sucht, nicht berücksichtigt. Ausgehend von der klassischen katholischen Apologetik, patristischen Quellen, der scholastischen Tradition und der zeitgenössischen philosophischen Analyse werden wir untersuchen, wie das katholische Verständnis der Beziehung zwischen Schrift, Tradition und Lehramt eine kohärentere, stabilere und historisch verwurzelte Epistemologie für die Anerkennung und Interpretation der göttlichen Offenbarung bietet.",
      },
    },
    section1: {
      h2: {
        en: "I. The Conceptual Confusion of a 'Fallible List of Infallible Books'",
        fr: "I. La Confusion Conceptuelle d'une « Liste Faillible de Livres Infaillibles »",
        es: "I. La Confusión Conceptual de una 'Lista Falible de Libros Infalibles'",
        de: "I. Die Konzeptionelle Verwirrung einer 'Fehlbaren Liste Unfehlbarer Bücher'",
      },
      p1: {
        en: "Among the more prominent critiques of Protestantism is its reliance on <strong>fallible ecclesial or individual discernment to identify an allegedly infallible canon of Scripture</strong>. At first glance, this appears to be a manageable paradox, but upon closer examination, it reveals a foundational epistemic contradiction.",
        fr: "Parmi les critiques les plus importantes du protestantisme figure sa dépendance à l'égard d'un <strong>discernement ecclésial ou individuel faillible pour identifier un canon prétendument infaillible de l'Écriture</strong>. À première vue, cela semble être un paradoxe gérable, mais un examen plus approfondi révèle une contradiction épistémique fondamentale.",
        es: "Entre las críticas más prominentes al protestantismo se encuentra su dependencia del <strong>discernimiento eclesial o individual falible para identificar un canon supuestamente infalible de la Escritura</strong>. A primera vista, esto parece ser una paradoja manejable, pero tras un examen más detenido, revela una contradicción epistémica fundamental.",
        de: "Eine der prominentesten Kritiken am Protestantismus ist seine Abhängigkeit von <strong>fehlbarer kirchlicher oder individueller Urteilskraft, um einen angeblich unfehlbaren Kanon der Schrift zu identifizieren</strong>. Auf den ersten Blick scheint dies ein handhabbares Paradoxon zu sein, aber bei näherer Betrachtung offenbart es einen grundlegenden erkenntnistheoretischen Widerspruch.",
      },
      p2: {
        en: "The Protestant claim essentially affirms that fallible human beings, lacking any infallible interpretive authority, can nonetheless arrive at a definitive and binding recognition of the scriptural canon. This move not only conflates subjective apprehension with objective certainty, but also elides the metaphysical distinction between the <em>actus credentis</em> (act of believing) and the <em>motiva credibilitatis</em> (motives of credibility).",
        fr: "L'affirmation protestante affirme essentiellement que des êtres humains faillibles, dépourvus de toute autorité interprétative infaillible, peuvent néanmoins parvenir à une reconnaissance définitive et contraignante du canon scripturaire. Cette démarche non seulement confond l'appréhension subjective avec la certitude objective, mais élude également la distinction métaphysique entre l'<em>actus credentis</em> (acte de croire) et les <em>motiva credibilitatis</em> (motifs de crédibilité).",
        es: "La afirmación protestante esencialmente afirma que los seres humanos falibles, carentes de cualquier autoridad interpretativa infalible, pueden sin embargo llegar a un reconocimiento definitivo y vinculante del canon bíblico. Este movimiento no solo confunde la aprehensión subjetiva con la certeza objetiva, sino que también elide la distinción metafísica entre el <em>actus credentis</em> (acto de creer) y los <em>motiva credibilitatis</em> (motivos de credibilidad).",
        de: "Die protestantische Behauptung besagt im Wesentlichen, dass fehlbare Menschen, denen es an einer unfehlbaren interpretativen Autorität mangelt, dennoch zu einer endgültigen und verbindlichen Anerkennung des Schriftkanons gelangen können. Dieser Schritt vermischt nicht nur subjektive Wahrnehmung mit objektiver Gewissheit, sondern verwischt auch die metaphysische Unterscheidung zwischen dem <em>actus credentis</em> (Akt des Glaubens) und den <em>motiva credibilitatis</em> (Gründen der Glaubwürdigkeit).",
      },
      p3: {
        en: "While some Catholic apologists have articulated this argument in simplistic or rhetorical terms, its more robust formulation—found in the writings of <strong>Stapleton</strong>, <strong>Franzelin</strong>, <strong>Schaben</strong>, and modern apologists such as <strong>Gary Michuta</strong>—exposes the problem with far greater precision.",
        fr: "Bien que certains apologistes catholiques aient articulé cet argument en termes simplistes ou rhétoriques, sa formulation plus robuste — que l'on trouve dans les écrits de <strong>Stapleton</strong>, <strong>Franzelin</strong>, <strong>Schaben</strong>, et des apologistes modernes tels que <strong>Gary Michuta</strong> — expose le problème avec beaucoup plus de précision.",
        es: "Si bien algunos apologistas católicos han articulado este argumento en términos simplistas o retóricos, su formulación más robusta —encontrada en los escritos de <strong>Stapleton</strong>, <strong>Franzelin</strong>, <strong>Schaben</strong>, y apologistas modernos como <strong>Gary Michuta</strong>— expone el problema con mucha mayor precisión.",
        de: "Während einige katholische Apologeten dieses Argument in vereinfachten oder rhetorischen Begriffen formuliert haben, legt seine robustere Formulierung – wie sie in den Schriften von <strong>Stapleton</strong>, <strong>Franzelin</strong>, <strong>Schaben</strong> und modernen Apologeten wie <strong>Gary Michuta</strong> zu finden ist – das Problem mit weitaus größerer Präzision dar.",
      },
      p4: {
        en: "The equivocation arises from conflating the fallibility of the knower (the subject) with the fallibility of the known (the object). A fallible agent may indeed assent to an infallible proposition, but only if that proposition is made known via an infallible source.",
        fr: "L'équivoque provient de la confusion entre la faillibilité de celui qui connaît (le sujet) et la faillibilité de ce qui est connu (l'objet). Un agent faillible peut en effet adhérer à une proposition infaillible, mais seulement si cette proposition est rendue connue par une source infaillible.",
        es: "La equivocación surge de confundir la falibilidad del conocedor (el sujeto) con la falibilidad de lo conocido (el objeto). Un agente falible puede ciertamente asentir a una proposición infalible, pero solo si esa proposición se da a conocer a través de una fuente infalible.",
        de: "Die Zweideutigkeit ergibt sich aus der Vermengung der Fehlbarkeit des Erkennenden (des Subjekts) mit der Fehlbarkeit des Erkannten (des Objekts). Ein fehlbarer Akteur kann zwar einer unfehlbaren Aussage zustimmen, aber nur, wenn diese Aussage durch eine unfehlbare Quelle bekannt gemacht wird.",
      },
      callout: {
        h3: {
          en: "The Central Issue",
          fr: "Le Problème Central",
          es: "El Asunto Central",
          de: "Das Zentrale Problem",
        },
        p1: {
          en: "The central issue is not whether individuals are fallible, but whether the identification of the canon can, in principle, be known without an act of divine revelation. Since inspiration is by nature a supernatural datum—a gratuitous intervention of God within the human psyche—it cannot be apprehended through empirical investigation or philosophical reasoning alone. Its recognition necessarily demands supernatural testimony.",
          fr: "Le problème central n'est pas de savoir si les individus sont faillibles, mais si l'identification du canon peut, en principe, être connue sans un acte de révélation divine. Puisque l'inspiration est par nature une donnée surnaturelle — une intervention gratuite de Dieu dans la psyché humaine — elle ne peut être appréhendée par la seule investigation empirique ou le seul raisonnement philosophique. Sa reconnaissance exige nécessairement un témoignage surnaturel.",
          es: "El asunto central no es si los individuos son falibles, sino si la identificación del canon puede, en principio, conocerse sin un acto de revelación divina. Dado que la inspiración es por naturaleza un dato sobrenatural —una intervención gratuita de Dios dentro de la psique humana— no puede ser aprehendida únicamente a través de la investigación empírica o el razonamiento filosófico. Su reconocimiento exige necesariamente un testimonio sobrenatural.",
          de: "Das zentrale Problem ist nicht, ob Individuen fehlbar sind, sondern ob die Identifizierung des Kanons prinzipiell ohne einen Akt göttlicher Offenbarung erkannt werden kann. Da Inspiration von Natur aus ein übernatürliches Datum ist – ein ungeschuldeter Eingriff Gottes in die menschliche Psyche – kann sie nicht allein durch empirische Untersuchung oder philosophisches Denken erfasst werden. Ihre Anerkennung erfordert notwendigerweise ein übernatürliches Zeugnis.",
        },
      },
    },
    section2: {
      h2: {
        en: "II. The Inaccessibility of Inspiration to Natural Reason",
        fr: "II. L'Inaccessibilité de l'Inspiration à la Raison Naturelle",
        es: "II. La Inaccesibilidad de la Inspiración a la Razón Natural",
        de: "II. Die Unzugänglichkeit der Inspiration für die Natürliche Vernunft",
      },
      p1: {
        en: "The Catholic theological tradition has consistently held that divine inspiration is an <strong>intrinsically supernatural act</strong>, one that occurs within the psychological interiority of the sacred author and is known immediately only to God and to the inspired writer.",
        fr: "La tradition théologique catholique a constamment soutenu que l'inspiration divine est un <strong>acte intrinsèquement surnaturel</strong>, qui se produit à l'intérieur de la psyché de l'auteur sacré et n'est connu immédiatement que de Dieu et de l'écrivain inspiré.",
        es: "La tradición teológica católica ha sostenido consistentemente que la inspiración divina es un <strong>acto intrínsecamente sobrenatural</strong>, que ocurre dentro de la interioridad psicológica del autor sagrado y es conocido inmediatamente solo por Dios y por el escritor inspirado.",
        de: "Die katholische theologische Tradition hat konsequent daran festgehalten, dass die göttliche Inspiration ein <strong>intrinsisch übernatürlicher Akt</strong> ist, der sich im psychologischen Inneren des heiligen Autors vollzieht und unmittelbar nur Gott und dem inspirierten Schreiber bekannt ist.",
      },
      franzelin: {
        quote: {
          en: '"Inspiration is a supernatural psychological fact in the mind of a man which, like other internal facts immediately known to God, is known only to the inspired person. Therefore, inspiration cannot be made known to other men except through its external effects or by testimony worthy of faith."',
          fr: "« L'inspiration est un fait psychologique surnaturel dans l'esprit d'un homme qui, comme d'autres faits internes immédiatement connus de Dieu, n'est connu que de la personne inspirée. Par conséquent, l'inspiration ne peut être portée à la connaissance d'autres hommes que par ses effets externes ou par un témoignage digne de foi. »",
          es: '"La inspiración es un hecho psicológico sobrenatural en la mente de un hombre que, al igual que otros hechos internos conocidos inmediatamente por Dios, solo es conocido por la persona inspirada. Por lo tanto, la inspiración no puede darse a conocer a otros hombres excepto a través de sus efectos externos o por un testimonio digno de fe."',
          de: '„Inspiration ist eine übernatürliche psychologische Tatsache im Geist eines Menschen, die, wie andere interne, Gott unmittelbar bekannte Tatsachen, nur der inspirierten Person bekannt ist. Daher kann Inspiration anderen Menschen nur durch ihre äußeren Wirkungen oder durch ein glaubwürdiges Zeugnis bekannt gemacht werden."',
        },
        source: {
          en: "Cardinal Franzelin",
          fr: "Cardinal Franzelin",
          es: "Cardenal Franzelin",
          de: "Kardinal Franzelin",
        },
      },
      p2: {
        en: "While certain external indicators—such as doctrinal orthodoxy, literary loftiness, or profound spiritual efficacy—may be characteristic of inspired texts, <strong>they are not exclusive to them</strong>. Countless theological and patristic writings display these qualities without thereby qualifying as divinely inspired Scripture.",
        fr: "Bien que certains indicateurs externes — tels que l'orthodoxie doctrinale, l'élévation littéraire ou une profonde efficacité spirituelle — puissent être caractéristiques des textes inspirés, <strong>ils ne leur sont pas exclusifs</strong>. D'innombrables écrits théologiques et patristiques présentent ces qualités sans pour autant être qualifiés d'Écriture divinement inspirée.",
        es: "Si bien ciertos indicadores externos —como la ortodoxia doctrinal, la elevación literaria o la profunda eficacia espiritual— pueden ser característicos de los textos inspirados, <strong>no son exclusivos de ellos</strong>. Innumerables escritos teológicos y patrísticos muestran estas cualidades sin por ello ser calificados como Escritura divinamente inspirada.",
        de: "Während bestimmte äußere Anzeichen – wie lehrmäßige Orthodoxie, literarische Erhabenheit oder tiefgreifende spirituelle Wirksamkeit – charakteristisch für inspirierte Texte sein können, sind sie <strong>nicht ausschließlich</strong> auf sie beschränkt. Zahllose theologische und patristische Schriften weisen diese Eigenschaften auf, ohne sich dadurch als göttlich inspirierte Schrift zu qualifizieren.",
      },
      p3: {
        en: "Thus, inspiration cannot be inferred merely from observable attributes; its recognition must be grounded in a divinely sanctioned epistemological framework.",
        fr: "Ainsi, l'inspiration ne peut être déduite simplement d'attributs observables ; sa reconnaissance doit être fondée sur un cadre épistémologique divinement sanctionné.",
        es: "Por lo tanto, la inspiración no puede inferirse simplemente de atributos observables; su reconocimiento debe basarse en un marco epistemológico divinamente sancionado.",
        de: "Daher kann Inspiration nicht allein aus beobachtbaren Attributen abgeleitet werden; ihre Anerkennung muss in einem göttlich sanktionierten erkenntnistheoretischen Rahmen begründet sein.",
      },
      p4: {
        en: "In essence, inspiration constitutes what the scholastic tradition terms a <strong>supernaturale quoad substantiam</strong>: a truth that, due to its origin and nature, lies beyond the competence of natural reason to ascertain. Consequently, the identification of inspired texts requires the mediation of Revelation, either through an inspired biblical assertion or through the authoritative witness of Apostolic Tradition.",
        fr: "Essentiellement, l'inspiration constitue ce que la tradition scolastique appelle un <strong>supernaturale quoad substantiam</strong> : une vérité qui, en raison de son origine et de sa nature, dépasse la compétence de la raison naturelle à établir. Par conséquent, l'identification des textes inspirés nécessite la médiation de la Révélation, soit par une affirmation biblique inspirée, soit par le témoignage faisant autorité de la Tradition Apostolique.",
        es: "En esencia, la inspiración constituye lo que la tradición escolástica denomina un <strong>supernaturale quoad substantiam</strong>: una verdad que, debido a su origen y naturaleza, se encuentra más allá de la competencia de la razón natural para determinarla. En consecuencia, la identificación de los textos inspirados requiere la mediación de la Revelación, ya sea a través de una afirmación bíblica inspirada o a través del testimonio autorizado de la Tradición Apostólica.",
        de: "Im Wesentlichen stellt die Inspiration das dar, was die scholastische Tradition als <strong>supernaturale quoad substantiam</strong> bezeichnet: eine Wahrheit, die aufgrund ihres Ursprungs und ihrer Natur jenseits der Kompetenz der natürlichen Vernunft liegt, sie festzustellen. Folglich erfordert die Identifizierung inspirierter Texte die Vermittlung der Offenbarung, entweder durch eine inspirierte biblische Behauptung oder durch das autoritative Zeugnis der Apostolischen Tradition.",
      },
    },
    section3: {
      h2: {
        en: "III. The Protestant Dilemma: Where Is the Revelation of the Canon?",
        fr: "III. Le Dilemme Protestant : Où se Trouve la Révélation du Canon ?",
        es: "III. El Dilema Protestante: ¿Dónde está la Revelación del Canon?",
        de: "III. Das Protestantische Dilemma: Wo ist die Offenbarung des Kanons?",
      },
      p1: {
        en: "According to the principle of <em>Sola Scriptura</em>, all doctrines requisite for salvation must be found in Scripture either explicitly or implicitly by logical consequence. This is clearly articulated in the Westminster Confession of Faith:",
        fr: "Selon le principe de <em>Sola Scriptura</em>, toutes les doctrines nécessaires au salut doivent se trouver dans l'Écriture, soit explicitement, soit implicitement par conséquence logique. Ceci est clairement articulé dans la Confession de Foi de Westminster :",
        es: "Según el principio de <em>Sola Scriptura</em>, todas las doctrinas necesarias para la salvación deben encontrarse en la Escritura, ya sea explícitamente o implícitamente por consecuencia lógica. Esto se articula claramente en la Confesión de Fe de Westminster:",
        de: "Nach dem Prinzip von <em>Sola Scriptura</em> müssen alle zum Heil notwendigen Lehren entweder ausdrücklich oder durch gute und notwendige Konsequenz in der Schrift zu finden sein. Dies wird im Westminster-Bekenntnis deutlich formuliert:",
      },
      westminster: {
        quote: {
          en: '"The whole counsel of God concerning all things necessary for His own glory, man\'s salvation, faith and life, is either expressly set down in Scripture, or by good and necessary consequence may be deduced from Scripture."',
          fr: "« Tout le conseil de Dieu concernant toutes les choses nécessaires à Sa propre gloire, au salut de l'homme, à la foi et à la vie, est soit expressément énoncé dans l'Écriture, soit peut être déduit de l'Écriture par une conséquence bonne et nécessaire. »",
          es: '"El consejo completo de Dios tocante a todas las cosas necesarias para Su propia gloria, la salvación del hombre, la fe y la vida, está expresamente expuesto en la Escritura, o por buena y necesaria consecuencia puede deducirse de la Escritura."',
          de: '„Der ganze Ratschluss Gottes, alles, was zu seiner Ehre und zum Heil, Glauben und Leben des Menschen notwendig ist, ist entweder ausdrücklich in der Schrift dargelegt oder kann durch gute und notwendige Folgerung aus der Schrift abgeleitet werden."',
        },
        source: {
          en: "Westminster Confession of Faith",
          fr: "Confession de Foi de Westminster",
          es: "Confesión de Fe de Westminster",
          de: "Westminster-Bekenntnis",
        },
      },
      p2: {
        en: "However, <strong>Scripture itself provides no divinely inspired table of contents</strong>. The identification of the Canon is not established by Scripture; rather, it is tacitly presupposed.",
        fr: "Cependant, <strong>l'Écriture elle-même ne fournit aucune table des matières divinement inspirée</strong>. L'identification du Canon n'est pas établie par l'Écriture ; elle est plutôt présupposée tacitement.",
        es: "Sin embargo, <strong>la Escritura misma no proporciona un índice divinamente inspirado</strong>. La identificación del Canon no la establece la Escritura; más bien, se presupone tácitamente.",
        de: "Jedoch <strong>liefert die Schrift selbst kein göttlich inspiriertes Inhaltsverzeichnis</strong>. Die Identifizierung des Kanons wird nicht durch die Schrift etabliert; sie wird vielmehr stillschweigend vorausgesetzt.",
      },
      p3: {
        en: "Protestant attempts to reconstruct the Canon through internal criteria—such as apostolic authorship, conformity with orthodoxy, or spiritual efficacy—inevitably fail because these criteria are neither necessary nor sufficient for inspiration. Moreover, they rest on subjective interpretive judgments, which are susceptible to error and disagreement.",
        fr: "Les tentatives protestantes de reconstruire le Canon à l'aide de critères internes — tels que la paternité apostolique, la conformité à l'orthodoxie ou l'efficacité spirituelle — échouent inévitablement parce que ces critères ne sont ni nécessaires ni suffisants pour l'inspiration. De plus, ils reposent sur des jugements interprétatifs subjectifs, susceptibles d'erreur et de désaccord.",
        es: "Los intentos protestantes de reconstruir el Canon a través de criterios internos —como la autoría apostólica, la conformidad con la ortodoxia o la eficacia espiritual— fracasan inevitablemente porque estos criterios no son ni necesarios ni suficientes para la inspiración. Además, se basan en juicios interpretativos subjetivos, que son susceptibles de error y desacuerdo.",
        de: "Protestantische Versuche, den Kanon durch interne Kriterien – wie apostolische Autorschaft, Übereinstimmung mit der Orthodoxie oder spirituelle Wirksamkeit – zu rekonstruieren, scheitern unweigerlich, da diese Kriterien weder notwendig noch hinreichend für die Inspiration sind. Darüber hinaus beruhen sie auf subjektiven interpretativen Urteilen, die fehleranfällig und umstritten sind.",
      },
      p4: {
        en: "Even if a text demonstrates profound theological coherence and ecclesial utility, such features cannot constitute conclusive proof of its inspired status. Countless non-canonical works—from the <em>Shepherd of Hermas</em> to the epistles of St. Ignatius of Antioch—possess such qualities and were venerated in early Christianity, yet were ultimately excluded from the Canon.",
        fr: "Même si un texte démontre une cohérence théologique profonde et une utilité ecclésiale, de telles caractéristiques ne peuvent constituer une preuve concluante de son statut inspiré. D'innombrables œuvres non canoniques — du <em>Pasteur d'Hermas</em> aux épîtres de Saint Ignace d'Antioche — possèdent de telles qualités et étaient vénérées dans le christianisme primitif, mais ont finalement été exclues du Canon.",
        es: "Incluso si un texto demuestra una profunda coherencia teológica y utilidad eclesial, tales características no pueden constituir una prueba concluyente de su estado inspirado. Innumerables obras no canónicas —desde el <em>Pastor de Hermas</em> hasta las epístolas de San Ignacio de Antioquía— poseen tales cualidades y fueron veneradas en el cristianismo primitivo, pero finalmente fueron excluidas del Canon.",
        de: "Selbst wenn ein Text tiefgreifende theologische Kohärenz und kirchlichen Nutzen aufweist, können solche Merkmale keinen schlüssigen Beweis für seinen inspirierten Status darstellen. Zahllose nichtkanonische Werke – vom <em>Hirten des Hermas</em> bis zu den Briefen des Heiligen Ignatius von Antiochien – besitzen solche Qualitäten und wurden im frühen Christentum verehrt, wurden aber letztendlich vom Kanon ausgeschlossen.",
      },
    },
    section4: {
      h2: {
        en: "IV. Protestant Canonical Methodologies Critically Evaluated",
        fr: "IV. Évaluation Critique des Méthodologies Canoniques Protestantes",
        es: "IV. Metodologías Canónicas Protestantes Evaluadas Críticamente",
        de: "IV. Protestantische Kanonische Methodologien Kritisch Bewertet",
      },
      p1: {
        en: 'Reformed theologians such as David Preuss have argued that Scripture testifies to its own inspiration, citing passages like 2 Timothy 3:16 ("All Scripture is God-breathed"). Yet such appeals are deeply problematic.',
        fr: "Des théologiens réformés tels que David Preuss ont soutenu que l'Écriture témoigne de sa propre inspiration, citant des passages comme 2 Timothée 3:16 (« Toute Écriture est inspirée de Dieu »). Pourtant, de tels appels sont profondément problématiques.",
        es: 'Teólogos reformados como David Preuss han argumentado que la Escritura testifica de su propia inspiración, citando pasajes como 2 Timoteo 3:16 ("Toda la Escritura es inspirada por Dios"). Sin embargo, tales apelaciones son profundamente problemáticas.',
        de: 'Reformierte Theologen wie David Preuss haben argumentiert, dass die Schrift ihre eigene Inspiration bezeugt, und zitieren dabei Stellen wie 2. Timotheus 3,16 ("Alle Schrift ist von Gott eingegeben"). Solche Berufungen sind jedoch zutiefst problematisch.',
      },
      callout: {
        h3: {
          en: "Problems with Self-Testimony:",
          fr: "Problèmes avec l'Auto-Témoignage :",
          es: "Problemas con el Auto-Testimonio:",
          de: "Probleme mit der Selbstbezeugung:",
        },
        li1: {
          en: 'The verse offers no specific list of which texts are included under the rubric of "Scripture."',
          fr: "Le verset n'offre aucune liste spécifique des textes inclus sous la rubrique « Écriture ».",
          es: 'El versículo no ofrece una lista específica de qué textos están incluidos bajo la rúbrica de "Escritura".',
          de: 'Der Vers bietet keine spezifische Liste, welche Texte unter die Rubrik „Schrift" fallen.',
        },
        li2: {
          en: "More importantly, the claim is <strong>circular</strong>: it uses Scripture to prove Scripture.",
          fr: "Plus important encore, l'affirmation est <strong>circulaire</strong> : elle utilise l'Écriture pour prouver l'Écriture.",
          es: "Más importante aún, la afirmación es <strong>circular</strong>: utiliza la Escritura para probar la Escritura.",
          de: "Noch wichtiger ist, dass die Behauptung <strong>zirkulär</strong> ist: Sie benutzt die Schrift, um die Schrift zu beweisen.",
        },
      },
      p2: {
        en: 'Moreover, Protestant reliance on canonical titles (e.g., "The Gospel According to Matthew") or apostolic authorship as proofs of inspiration is historically and logically flawed. These titles are not part of the inspired text but later ecclesiastical attributions.',
        fr: "De plus, la confiance protestante dans les titres canoniques (par ex., « L'Évangile selon Matthieu ») ou la paternité apostolique comme preuves d'inspiration est historiquement et logiquement erronée. Ces titres ne font pas partie du texte inspiré mais sont des attributions ecclésiastiques ultérieures.",
        es: 'Además, la confianza protestante en los títulos canónicos (p. ej., "El Evangelio según Mateo") o la autoría apostólica como pruebas de inspiración es histórica y lógicamente defectuosa. Estos títulos no son parte del texto inspirado, sino atribuciones eclesiásticas posteriores.',
        de: 'Darüber hinaus ist die protestantische Berufung auf kanonische Titel (z. B. „Das Evangelium nach Matthäus") oder apostolische Autorschaft als Inspirationsbeweis historisch und logisch fehlerhaft. Diese Titel sind nicht Teil des inspirierten Textes, sondern spätere kirchliche Zuschreibungen.',
      },
      p3: {
        en: "Furthermore, the assumption that apostolic authorship entails inspiration fails to appreciate the distinction between the <em>charisma veritatis</em> (habitual infallibility) and <em>inspiratio divina</em> (transitory divine motion). Not every apostolic utterance is inspired Scripture, just as not every papal allocution is an <em>ex cathedra</em> definition.",
        fr: "De plus, l'hypothèse selon laquelle la paternité apostolique entraîne l'inspiration ne tient pas compte de la distinction entre le <em>charisma veritatis</em> (infaillibilité habituelle) et l'<em>inspiratio divina</em> (mouvement divin transitoire). Toute déclaration apostolique n'est pas l'Écriture inspirée, tout comme toute allocution papale n'est pas une définition <em>ex cathedra</em>.",
        es: "Además, la suposición de que la autoría apostólica implica inspiración no aprecia la distinción entre el <em>charisma veritatis</em> (infalibilidad habitual) y la <em>inspiratio divina</em> (moción divina transitoria). No toda declaración apostólica es Escritura inspirada, así como no toda alocución papal es una definición <em>ex cathedra</em>.",
        de: "Darüber hinaus verkennt die Annahme, dass apostolische Autorschaft Inspiration mit sich bringt, die Unterscheidung zwischen dem <em>charisma veritatis</em> (habitueller Unfehlbarkeit) und der <em>inspiratio divina</em> (vorübergehender göttlicher Bewegung). Nicht jede apostolische Äußerung ist inspirierte Schrift, so wie nicht jede päpstliche Allokution eine <em>ex cathedra</em>-Definition ist.",
      },
    },
    section5: {
      h2: {
        en: "V. The Catholic Solution: Revelation Mediated through Sacred Tradition",
        fr: "V. La Solution Catholique : Révélation Médiatisée par la Sainte Tradition",
        es: "V. La Solución Católica: Revelación Mediada a través de la Sagrada Tradición",
        de: "V. Die Katholische Lösung: Offenbarung Vermittelt durch die Heilige Tradition",
      },
      p1: {
        en: "The Catholic Church offers a coherent alternative: <strong>the Canon is known and affirmed through divine Revelation mediated by Sacred Tradition and preserved infallibly by the Church's Magisterium</strong>.",
        fr: "L'Église catholique offre une alternative cohérente : <strong>le Canon est connu et affirmé par la Révélation divine médiatisée par la Sainte Tradition et préservée infailliblement par le Magistère de l'Église</strong>.",
        es: "La Iglesia Católica ofrece una alternativa coherente: <strong>el Canon es conocido y afirmado a través de la Revelación divina mediada por la Sagrada Tradición y preservada infaliblemente por el Magisterio de la Iglesia</strong>.",
        de: "Die katholische Kirche bietet eine kohärente Alternative: <strong>Der Kanon wird durch die göttliche Offenbarung erkannt und bestätigt, die durch die Heilige Tradition vermittelt und vom Lehramt der Kirche unfehlbar bewahrt wird</strong>.",
      },
      p2: {
        en: "The recognition of the Canon is not an act of human deduction, but an act of <em>fides divina</em> — faith in the authority of God who reveals, and in the ecclesial organ that transmits that revelation.",
        fr: "La reconnaissance du Canon n'est pas un acte de déduction humaine, mais un acte de <em>fides divina</em> — foi en l'autorité de Dieu qui révèle, et en l'organe ecclésial qui transmet cette révélation.",
        es: "El reconocimiento del Canon no es un acto de deducción humana, sino un acto de <em>fides divina</em> — fe en la autoridad de Dios que revela, y en el órgano eclesial que transmite esa revelación.",
        de: "Die Anerkennung des Kanons ist kein Akt menschlicher Schlussfolgerung, sondern ein Akt der <em>fides divina</em> – des Glaubens an die Autorität Gottes, der offenbart, und an das kirchliche Organ, das diese Offenbarung übermittelt.",
      },
      augustine: {
        quote: {
          en: '"I would not believe in the Gospel myself if the authority of the Catholic Church did not influence me to do so."',
          fr: "« Je ne croirais pas à l'Évangile si l'autorité de l'Église catholique ne m'y portait. »",
          es: '"Yo no creería en el Evangelio si no me moviera a ello la autoridad de la Iglesia Católica."',
          de: '„Ich würde dem Evangelium nicht glauben, wenn mich nicht die Autorität der katholischen Kirche dazu bewegen würde."',
        },
        source: {
          en: "St. Augustine, <em>Contra Epistolam Manichaei</em>, 5,6",
          fr: "Saint Augustin, <em>Contra Epistolam Manichaei</em>, 5,6",
          es: "San Agustín, <em>Contra Epistolam Manichaei</em>, 5,6",
          de: "Hl. Augustinus, <em>Contra Epistolam Manichaei</em>, 5,6",
        },
      },
      p3: {
        en: "This principle reflects the Catholic understanding that Revelation is historically transmitted through the Apostolic deposit of faith. The Church, guided by the Holy Spirit, functions as the divinely instituted interpreter and guardian of this Revelation.",
        fr: "Ce principe reflète la compréhension catholique selon laquelle la Révélation est historiquement transmise à travers le dépôt apostolique de la foi. L'Église, guidée par le Saint-Esprit, fonctionne comme l'interprète et la gardienne divinement instituée de cette Révélation.",
        es: "Este principio refleja la comprensión católica de que la Revelación se transmite históricamente a través del depósito apostólico de la fe. La Iglesia, guiada por el Espíritu Santo, funciona como la intérprete y guardiana divinamente instituida de esta Revelación.",
        de: "Dieses Prinzip spiegelt das katholische Verständnis wider, dass die Offenbarung historisch durch das apostolische Glaubensgut übermittelt wird. Die Kirche, geleitet vom Heiligen Geist, fungiert als die göttlich eingesetzte Interpretin und Hüterin dieser Offenbarung.",
      },
      callout: {
        h3: {
          en: "The Catholic Epistemology",
          fr: "L'Épistémologie Catholique",
          es: "La Epistemología Católica",
          de: "Die Katholische Epistemologie",
        },
        p1: {
          en: "The Magisterium, through ecumenical councils and the ordinary and universal magisterial teaching, articulates and safeguards the Canon. Without such an authoritative interpreter, one is left with no principled means of determining which books belong to Scripture.",
          fr: "Le Magistère, à travers les conciles œcuméniques et l'enseignement magistériel ordinaire et universel, articule et sauvegarde le Canon. Sans un tel interprète faisant autorité, on se retrouve sans moyen fondé sur des principes pour déterminer quels livres appartiennent à l'Écriture.",
          es: "El Magisterio, a través de los concilios ecuménicos y la enseñanza magisterial ordinaria y universal, articula y salvaguarda el Canon. Sin tal intérprete autorizado, uno se queda sin medios basados en principios para determinar qué libros pertenecen a la Escritura.",
          de: "Das Lehramt, durch ökumenische Konzilien und das ordentliche und universale Lehramt, formuliert und bewahrt den Kanon. Ohne einen solchen autoritativen Interpreten bleibt einem kein prinzipiengeleitetes Mittel, um zu bestimmen, welche Bücher zur Schrift gehören.",
        },
      },
    },
    section6: {
      h2: {
        en: "VI. Modes of Cognition: Demonstration, Probability, and Faith",
        fr: "VI. Modes de Cognition : Démonstration, Probabilité et Foi",
        es: "VI. Modos de Cognición: Demostración, Probabilidad y Fe",
        de: "VI. Erkenntnisweisen: Demonstration, Wahrscheinlichkeit und Glaube",
      },
      p1: {
        en: "Philosophically, there are three principal modes of cognition through which a proposition may be known:",
        fr: "Philosophiquement, il existe trois modes principaux de cognition par lesquels une proposition peut être connue :",
        es: "Filosóficamente, hay tres modos principales de cognición a través de los cuales se puede conocer una proposición:",
        de: "Philosophisch gibt es drei Hauptweisen der Erkenntnis, durch die eine Aussage gewusst werden kann:",
      },
      modes: {
        m1: {
          title: {
            en: "Scientific Demonstration (episteme)",
            fr: "Démonstration Scientifique (episteme)",
            es: "Demostración Científica (episteme)",
            de: "Wissenschaftliche Demonstration (episteme)",
          },
          desc: {
            en: "Conclusions deduced from self-evident principles and entail necessary truth.",
            fr: "Conclusions déduites de principes évidents et impliquant une vérité nécessaire.",
            es: "Conclusiones deducidas de principios evidentes por sí mismos y que entrañan una verdad necesaria.",
            de: "Schlussfolgerungen, die aus selbstverständlichen Prinzipien abgeleitet werden und notwendige Wahrheit beinhalten.",
          },
        },
        m2: {
          title: {
            en: "Probable Opinion (doxa)",
            fr: "Opinion Probable (doxa)",
            es: "Opinión Probable (doxa)",
            de: "Wahrscheinliche Meinung (doxa)",
          },
          desc: {
            en: "Judgments formed on the basis of fallible but persuasive reasoning.",
            fr: "Jugements formés sur la base d'un raisonnement faillible mais persuasif.",
            es: "Juicios formados sobre la base de un razonamiento falible pero persuasivo.",
            de: "Urteile, die auf der Grundlage fehlbarer, aber überzeugender Argumentation gebildet werden.",
          },
        },
        m3: {
          title: {
            en: "Faith (pistis)",
            fr: "Foi (pistis)",
            es: "Fe (pistis)",
            de: "Glaube (pistis)",
          },
          desc: {
            en: "Assent given to a proposition based on the testimony of a credible authority.",
            fr: "Assentiment donné à une proposition basée sur le témoignage d'une autorité crédible.",
            es: "Asentimiento dado a una proposición basado en el testimonio de una autoridad creíble.",
            de: "Zustimmung zu einer Aussage aufgrund des Zeugnisses einer glaubwürdigen Autorität.",
          },
        },
      },
      p2: {
        en: "Applicable to Canon Recognition",
        fr: "Applicable à la Reconnaissance du Canon",
        es: "Aplicable al Reconocimiento del Canon",
        de: "Anwendbar auf die Kanonerkennung",
      },
      p3: {
        en: "Not Applicable",
        fr: "Non Applicable",
        es: "No Aplicable",
        de: "Nicht Anwendbar",
      },
      callout1: {
        h3: {
          en: "Why Faith Is the Only Sufficient Mode",
          fr: "Pourquoi la Foi Est le Seul Mode Suffisant",
          es: "Por Qué la Fe Es el Único Modo Suficiente",
          de: "Warum der Glaube die Einzige Ausreichende Weise Ist",
        },
        li1: {
          en: "The fact of inspiration <strong>cannot be known through scientific demonstration</strong> because inspiration, as a supernatural reality, is not derivable from first principles.",
          fr: "Le fait de l'inspiration <strong>ne peut être connu par démonstration scientifique</strong> car l'inspiration, en tant que réalité surnaturelle, n'est pas dérivable des premiers principes.",
          es: "El hecho de la inspiración <strong>no puede conocerse a través de la demostración científica</strong> porque la inspiración, como realidad sobrenatural, no es derivable de los primeros principios.",
          de: "Die Tatsache der Inspiration <strong>kann nicht durch wissenschaftliche Demonstration erkannt werden</strong>, da Inspiration als übernatürliche Realität nicht aus ersten Prinzipien ableitbar ist.",
        },
        li2: {
          en: "Nor can it be known by <strong>probable opinion</strong>, since the criteria used (e.g., literary beauty, moral instruction, apostolic proximity) are not exclusive to inspired texts.",
          fr: "Il ne peut pas non plus être connu par <strong>opinion probable</strong>, car les critères utilisés (par ex., beauté littéraire, instruction morale, proximité apostolique) ne sont pas exclusifs aux textes inspirés.",
          es: "Tampoco puede conocerse por <strong>opinión probable</strong>, ya que los criterios utilizados (p. ej., belleza literaria, instrucción moral, proximidad apostólica) no son exclusivos de los textos inspirados.",
          de: "Noch kann sie durch <strong>wahrscheinliche Meinung</strong> erkannt werden, da die verwendeten Kriterien (z. B. literarische Schönheit, moralische Unterweisung, apostolische Nähe) nicht ausschließlich für inspirierte Texte gelten.",
        },
        li3: {
          en: "Therefore, the only sufficient epistemological category by which the inspiration of Scripture can be known is <strong>faith</strong>—specifically, <em>divine faith</em> grounded in God's own testimony as mediated through Revelation.",
          fr: "Par conséquent, la seule catégorie épistémologique suffisante par laquelle l'inspiration de l'Écriture peut être connue est la <strong>foi</strong> — spécifiquement, la <em>foi divine</em> fondée sur le témoignage de Dieu lui-même tel que médiatisé par la Révélation.",
          es: "Por lo tanto, la única categoría epistemológica suficiente por la cual se puede conocer la inspiración de la Escritura es la <strong>fe</strong>, específicamente, la <em>fe divina</em> basada en el propio testimonio de Dios mediado a través de la Revelación.",
          de: "Daher ist die einzige ausreichende erkenntnistheoretische Kategorie, durch die die Inspiration der Schrift erkannt werden kann, der <strong>Glaube</strong> – insbesondere der <em>göttliche Glaube</em>, der auf Gottes eigenem Zeugnis basiert, das durch die Offenbarung vermittelt wird.",
        },
      },
      callout2: {
        h3: {
          en: "The Protestant Trap",
          fr: "Le Piège Protestant",
          es: "La Trampa Protestante",
          de: "Die Protestantische Falle",
        },
        p1: {
          en: "However, <em>Sola Scriptura</em> eliminates the very means by which this faith could be justified. By denying the binding authority of Tradition and the Church, Protestantism undermines its own access to the very Revelation it claims to uphold. Thus, it is epistemologically trapped: it cannot justify the Canon without resorting to either circularity or a fallible, probabilistic mode of assent.",
          fr: "Cependant, <em>Sola Scriptura</em> élimine le moyen même par lequel cette foi pourrait être justifiée. En niant l'autorité contraignante de la Tradition et de l'Église, le protestantisme sape son propre accès à la Révélation même qu'il prétend défendre. Ainsi, il est piégé épistémologiquement : il ne peut justifier le Canon sans recourir soit à la circularité, soit à un mode d'assentiment faillible et probabiliste.",
          es: "Sin embargo, <em>Sola Scriptura</em> elimina el medio mismo por el cual esta fe podría justificarse. Al negar la autoridad vinculante de la Tradición y la Iglesia, el protestantismo socava su propio acceso a la Revelación misma que afirma defender. Por lo tanto, está atrapado epistemológicamente: no puede justificar el Canon sin recurrir a la circularidad o a un modo de asentimiento falible y probabilístico.",
          de: "Jedoch eliminiert <em>Sola Scriptura</em> genau das Mittel, durch das dieser Glaube gerechtfertigt werden könnte. Indem der Protestantismus die bindende Autorität der Tradition und der Kirche leugnet, untergräbt er seinen eigenen Zugang zu genau der Offenbarung, die er zu wahren behauptet. Somit ist er erkenntnistheoretisch gefangen: Er kann den Kanon nicht rechtfertigen, ohne entweder auf Zirkularität oder auf eine fehlbare, probabilistische Art der Zustimmung zurückzugreifen.",
        },
      },
    },
    section7: {
      h2: {
        en: "VII. Formal Logical Refutation",
        fr: "VII. Réfutation Logique Formelle",
        es: "VII. Refutación Lógica Formal",
        de: "VII. Formale Logische Widerlegung",
      },
      p1: {
        en: "The internal incoherence of Sola Scriptura may be formalized as follows:",
        fr: "L'incohérence interne de Sola Scriptura peut être formalisée comme suit :",
        es: "La incoherencia interna de Sola Scriptura puede formalizarse de la siguiente manera:",
        de: "Die interne Inkohärenz von Sola Scriptura lässt sich wie folgt formalisieren:",
      },
      logic: {
        l1: {
          en: "Whatever is to be believed with divine faith must be revealed by God.",
          fr: "Tout ce qui doit être cru de foi divine doit être révélé par Dieu.",
          es: "Todo lo que ha de creerse con fe divina debe ser revelado por Dios.",
          de: "Was mit göttlichem Glauben geglaubt werden soll, muss von Gott offenbart sein.",
        },
        l2: {
          en: "The inspiration of each canonical book must be believed with divine faith.",
          fr: "L'inspiration de chaque livre canonique doit être crue de foi divine.",
          es: "La inspiración de cada libro canónico debe creerse con fe divina.",
          de: "Die Inspiration jedes kanonischen Buches muss mit göttlichem Glauben geglaubt werden.",
        },
        l3: {
          en: "<strong>Therefore</strong>, the inspiration of each canonical book must be revealed by God.",
          fr: "<strong>Par conséquent</strong>, l'inspiration de chaque livre canonique doit être révélée par Dieu.",
          es: "<strong>Por lo tanto</strong>, la inspiración de cada libro canónico debe ser revelada por Dios.",
          de: "<strong>Deshalb</strong> muss die Inspiration jedes kanonischen Buches von Gott offenbart sein.",
        },
        l4: {
          en: "The revelation of the canon is not contained in Scripture alone.",
          fr: "La révélation du canon n'est pas contenue dans l'Écriture seule.",
          es: "La revelación del canon no está contenida solo en la Escritura.",
          de: "Die Offenbarung des Kanons ist nicht allein in der Schrift enthalten.",
        },
        l5: {
          en: "<strong>Therefore</strong>, it must be contained in Sacred Tradition.",
          fr: "<strong>Par conséquent</strong>, elle doit être contenue dans la Sainte Tradition.",
          es: "<strong>Por lo tanto</strong>, debe estar contenida en la Sagrada Tradición.",
          de: "<strong>Deshalb</strong> muss sie in der Heiligen Tradition enthalten sein.",
        },
        l6: {
          en: "Protestantism rejects the authority of Sacred Tradition.",
          fr: "Le protestantisme rejette l'autorité de la Sainte Tradition.",
          es: "El protestantismo rechaza la autoridad de la Sagrada Tradición.",
          de: "Der Protestantismus lehnt die Autorität der Heiligen Tradition ab.",
        },
        l7: {
          en: "<strong>Therefore</strong>, Protestantism cannot affirm the inspiration of each canonical book as an article of divine faith.",
          fr: "<strong>Par conséquent</strong>, le protestantisme ne peut affirmer l'inspiration de chaque livre canonique comme un article de foi divine.",
          es: "<strong>Por lo tanto</strong>, el protestantismo no puede afirmar la inspiración de cada libro canónico como un artículo de fe divina.",
          de: "<strong>Deshalb</strong> kann der Protestantismus die Inspiration jedes kanonischen Buches nicht als einen Artikel des göttlichen Glaubens bejahen.",
        },
        l8: {
          en: "Hence, Protestantism is internally incoherent.",
          fr: "Par conséquent, le protestantisme est intrinsèquement incohérent.",
          es: "Por lo tanto, el protestantismo es internamente incoherente.",
          de: "Daher ist der Protestantismus intern inkohärent.",
        },
      },
      callout: {
        p1: {
          en: "This logical demonstration exposes the fundamental contradiction at the heart of <em>Sola Scriptura</em>: it requires a source of divine revelation that it simultaneously denies.",
          fr: "Cette démonstration logique expose la contradiction fondamentale au cœur de <em>Sola Scriptura</em> : elle nécessite une source de révélation divine qu'elle nie simultanément.",
          es: "Esta demostración lógica expone la contradicción fundamental en el corazón de <em>Sola Scriptura</em>: requiere una fuente de revelación divina que simultáneamente niega.",
          de: "Diese logische Demonstration legt den fundamentalen Widerspruch im Herzen von <em>Sola Scriptura</em> offen: Es erfordert eine Quelle göttlicher Offenbarung, die es gleichzeitig leugnet.",
        },
      },
    },
    conclusion: {
      h2: {
        en: "Conclusion",
        fr: "Conclusion",
        es: "Conclusión",
        de: "Schlussfolgerung",
      },
      p1: {
        en: "<em>Sola Scriptura</em> is not merely a novel post-Reformation construct; it is, upon rigorous analysis, an <strong>epistemologically untenable doctrine</strong> that ultimately undermines the very authority it seeks to defend. It offers no coherent account of how the Canon was determined or can be known with certainty.",
        fr: "<em>Sola Scriptura</em> n'est pas simplement une construction post-Réforme nouvelle ; c'est, après une analyse rigoureuse, une <strong>doctrine épistémologiquement intenable</strong> qui sape finalement l'autorité même qu'elle cherche à défendre. Elle n'offre aucun compte rendu cohérent de la manière dont le Canon a été déterminé ou peut être connu avec certitude.",
        es: "<em>Sola Scriptura</em> no es simplemente un constructo novedoso posterior a la Reforma; es, tras un análisis riguroso, una <strong>doctrina epistemológicamente insostenible</strong> que en última instancia socava la autoridad misma que busca defender. No ofrece una explicación coherente de cómo se determinó el Canon o cómo se puede conocer con certeza.",
        de: "<em>Sola Scriptura</em> ist nicht bloß ein neuartiges Konstrukt nach der Reformation; es ist bei rigoroser Analyse eine <strong>erkenntnistheoretisch unhaltbare Lehre</strong>, die letztlich genau die Autorität untergräbt, die sie zu verteidigen sucht. Sie bietet keine kohärente Darstellung, wie der Kanon bestimmt wurde oder mit Gewissheit erkannt werden kann.",
      },
      p2: {
        en: "In denying the constitutive role of Tradition and the Magisterium, it saws off the branch upon which it sits.",
        fr: "En niant le rôle constitutif de la Tradition et du Magistère, elle scie la branche sur laquelle elle est assise.",
        es: "Al negar el papel constitutivo de la Tradición y el Magisterio, corta la rama sobre la que se sienta.",
        de: "Indem sie die konstitutive Rolle von Tradition und Lehramt leugnet, sägt sie den Ast ab, auf dem sie sitzt.",
      },
      callout: {
        h3: {
          en: "The Catholic Alternative",
          fr: "L'Alternative Catholique",
          es: "La Alternativa Católica",
          de: "Die Katholische Alternative",
        },
        p1: {
          en: "In contrast, Catholicism offers a coherent and theologically integrated vision: the Word of God is transmitted through both Scripture and Tradition, interpreted authentically by the Church established by Christ. This triadic structure—<strong>Scripture, Tradition, and Magisterium</strong>— provides the epistemic foundation for certitude in divine Revelation.",
          fr: "En revanche, le catholicisme offre une vision cohérente et théologiquement intégrée : la Parole de Dieu est transmise à la fois par l'Écriture et la Tradition, interprétée authentiquement par l'Église établie par le Christ. Cette structure triadique — <strong>Écriture, Tradition et Magistère</strong> — fournit le fondement épistémique pour la certitude dans la Révélation divine.",
          es: "En contraste, el catolicismo ofrece una visión coherente y teológicamente integrada: la Palabra de Dios se transmite a través de la Escritura y la Tradición, interpretada auténticamente por la Iglesia establecida por Cristo. Esta estructura triádica —<strong>Escritura, Tradición y Magisterio</strong>— proporciona el fundamento epistémico para la certeza en la Revelación divina.",
          de: "Im Gegensatz dazu bietet der Katholizismus eine kohärente und theologisch integrierte Vision: Das Wort Gottes wird durch Schrift und Tradition übermittelt und von der von Christus eingesetzten Kirche authentisch interpretiert. Diese triadische Struktur – <strong>Schrift, Tradition und Lehramt</strong> – bildet die erkenntnistheoretische Grundlage für die Gewissheit in der göttlichen Offenbarung.",
        },
        scripture: {
          en: "Scripture",
          fr: "Écriture",
          es: "Escritura",
          de: "Schrift",
        },
        tradition: {
          en: "Tradition",
          fr: "Tradition",
          es: "Tradición",
          de: "Tradition",
        },
        magisterium: {
          en: "Magisterium",
          fr: "Magistère",
          es: "Magisterio",
          de: "Lehramt",
        },
      },
      p3: {
        en: "The Protestant commitment to <em>Sola Scriptura</em> results either in a fideistic individualism or an endless fragmentation of competing interpretations. Only within the visible, historical, and Spirit-guided communion of the Catholic Church can the faithful say with certainty and conviction: <strong>This is the Word of the Lord.</strong>",
        fr: "L'engagement protestant envers <em>Sola Scriptura</em> aboutit soit à un individualisme fidéiste, soit à une fragmentation sans fin d'interprétations concurrentes. Ce n'est qu'au sein de la communion visible, historique et guidée par l'Esprit de l'Église catholique que les fidèles peuvent dire avec certitude et conviction : <strong>Ceci est la Parole du Seigneur.</strong>",
        es: "El compromiso protestante con <em>Sola Scriptura</em> resulta en un individualismo fideísta o en una fragmentación interminable de interpretaciones contrapuestas. Solo dentro de la comunión visible, histórica y guiada por el Espíritu de la Iglesia Católica pueden los fieles decir con certeza y convicción: <strong>Esta es la Palabra del Señor.</strong>",
        de: "Die protestantische Bindung an <em>Sola Scriptura</em> führt entweder zu einem fideistischen Individualismus oder zu einer endlosen Fragmentierung konkurrierender Interpretationen. Nur innerhalb der sichtbaren, historischen und vom Geist geführten Gemeinschaft der katholischen Kirche können die Gläubigen mit Gewissheit und Überzeugung sagen: <strong>Dies ist das Wort des Herrn.</strong>",
      },
      lukeQuote: {
        text: {
          en: "He who hears you hears Me; he who rejects you rejects Me.",
          fr: "Celui qui vous écoute m'écoute ; celui qui vous rejette me rejette.",
          es: "El que a vosotros oye, a Mí me oye; el que a vosotros desecha, a Mí me desecha.",
          de: "Wer euch hört, der hört Mich; wer euch verachtet, der verachtet Mich.",
        },
        source: {
          en: "Luke 10:16",
          fr: "Luc 10:16",
          es: "Lucas 10:16",
          de: "Lukas 10:16",
        },
      },
      timothyQuote: {
        text: {
          en: "The Church... is the pillar and foundation of truth.",
          fr: "L'Église... est la colonne et le fondement de la vérité.",
          es: "La Iglesia... es columna y fundamento de la verdad.",
          de: "Die Kirche... ist die Säule und Grundfeste der Wahrheit.",
        },
        source: {
          en: "1 Timothy 3:15",
          fr: "1 Timothée 3:15",
          es: "1 Timoteo 3:15",
          de: "1 Timotheus 3:15",
        },
      },
    },
    bridge: {
      h3: {
        en: "The Scholastic Tradition",
        fr: "La Tradition Scolastique",
        es: "La Tradición Escolástica",
        de: "Die Scholastische Tradition",
      },
      p1: {
        en: "The scholastic theologians—including Thomas Aquinas, Bonaventure, and Duns Scotus—developed sophisticated philosophical frameworks for understanding divine revelation. Their approaches consistently affirmed that Scripture must be interpreted within the context of the Church's living Tradition and teaching authority.",
        fr: "Les théologiens scolastiques — dont Thomas d'Aquin, Bonaventure et Duns Scot — ont développé des cadres philosophiques sophistiqués pour comprendre la révélation divine. Leurs approches affirmaient constamment que l'Écriture doit être interprétée dans le contexte de la Tradition vivante et de l'autorité d'enseignement de l'Église.",
        es: "Los teólogos escolásticos, incluidos Tomás de Aquino, Buenaventura y Duns Escoto, desarrollaron marcos filosóficos sofisticados para comprender la revelación divina. Sus enfoques afirmaron consistentemente que la Escritura debe interpretarse dentro del contexto de la Tradición viva y la autoridad de enseñanza de la Iglesia.",
        de: "Die scholastischen Theologen – einschließlich Thomas von Aquin, Bonaventura und Duns Scotus – entwickelten anspruchsvolle philosophische Rahmenwerke zum Verständnis der göttlichen Offenbarung. Ihre Ansätze bestätigten durchweg, dass die Schrift im Kontext der lebendigen Tradition und der Lehrautorität der Kirche interpretiert werden muss.",
      },
      p2: {
        en: "Having examined the rigorous philosophical and theological case against <em>Sola Scriptura</em>, we can now explore the positive case for Catholic authority and the role of the Magisterium.",
        fr: "Ayant examiné le cas philosophique et théologique rigoureux contre <em>Sola Scriptura</em>, nous pouvons maintenant explorer le cas positif de l'autorité catholique et le rôle du Magistère.",
        es: "Habiendo examinado el riguroso caso filosófico y teológico contra <em>Sola Scriptura</em>, ahora podemos explorar el caso positivo de la autoridad católica y el papel del Magisterio.",
        de: "Nachdem wir den rigorosen philosophischen und theologischen Fall gegen <em>Sola Scriptura</em> untersucht haben, können wir nun den positiven Fall für die katholische Autorität und die Rolle des Lehramtes untersuchen.",
      },
    },
  },

  whyNotSolaScriptura: {
    title: {
      en: "Against Sola Scriptura",
      fr: "Contre Sola Scriptura",
      es: "Contra Sola Scriptura",
      de: "Gegen Sola Scriptura",
    },
    subtitle: {
      en: "Nine Fatal Flaws in the 'Scripture Alone' Doctrine",
      fr: "Neuf Failles Fatales dans la Doctrine de 'l'Écriture Seule'",
      es: "Nueve Fallas Fatales en la Doctrina de 'Solo la Escritura'",
      de: "Neun fatale Fehler in der 'Allein die Schrift'-Doktrin",
    },
    quote: {
      text: {
        en: "How can I understand, unless someone guides me?",
        fr: "Comment puis-je comprendre, si personne ne me guide ?",
        es: "¿Cómo podré entender, si alguno no me enseñare?",
        de: "Wie kann ich verstehen, wenn mich nicht jemand anleitet?",
      },
      source: {
        en: "Acts 8:31",
        fr: "Actes 8:31",
        es: "Hechos 8:31",
        de: "Apostelgeschichte 8:31",
      },
    },
    videoTitle: {
      en: "Against Sola Scriptura",
      fr: "Contre Sola Scriptura",
      es: "Contra Sola Scriptura",
      de: "Gegen Sola Scriptura",
    },
    intro: {
      heading: {
        en: "Introduction",
        fr: "Introduction",
        es: "Introducción",
        de: "Einführung",
      },
      p1: {
        en: "<strong>Sola Scriptura</strong> is the Protestant doctrine asserting that Scripture alone is the only infallible rule of faith and practice. It claims that while other sources like Church councils, creeds, and traditions might be useful, they are ultimately fallible and must be judged by Scripture alone.",
        fr: "<strong>Sola Scriptura</strong> est la doctrine protestante affirmant que l'Écriture seule est l'unique règle infaillible de foi et de pratique. Elle prétend que, bien que d'autres sources comme les conciles de l'Église, les crédos et les traditions puissent être utiles, elles sont finalement faillibles et doivent être jugées par l'Écriture seule.",
        es: "<strong>Sola Scriptura</strong> es la doctrina protestante que afirma que solo la Escritura es la única regla infalible de fe y práctica. Sostiene que, si bien otras fuentes como los concilios de la Iglesia, los credos y las tradiciones pueden ser útiles, son en última instancia falibles y deben ser juzgadas únicamente por la Escritura.",
        de: "<strong>Sola Scriptura</strong> ist die protestantische Lehre, die besagt, dass die Schrift allein die einzige unfehlbare Regel für Glauben und Praxis ist. Sie behauptet, dass andere Quellen wie Kirchenkonzilien, Glaubensbekenntnisse und Traditionen zwar nützlich sein können, aber letztlich fehlbar sind und allein von der Schrift beurteilt werden müssen.",
      },
      p2: {
        en: "As Protestant scholar Gavin Ortland summarized:",
        fr: "Comme l'a résumé l'érudit protestant Gavin Ortland :",
        es: "Como resumió el erudito protestante Gavin Ortland:",
        de: "Wie der protestantische Gelehrte Gavin Ortland zusammenfasste:",
      },
      ortlandQuote: {
        en: "\"Sola Scriptura means that Scripture is the church's only infallible rule. It doesn't mean that Scripture is the only authority. Creeds, catechisms, confessions, and councils function authoritatively, but according to Sola Scriptura, they are fallible, meaning capable of error and thus reformable in light of Scripture.\"",
        fr: "« Sola Scriptura signifie que l'Écriture est la seule règle infaillible de l'Église. Cela ne signifie pas que l'Écriture est la seule autorité. Les crédos, catéchismes, confessions et conciles fonctionnent avec autorité, mais selon Sola Scriptura, ils sont faillibles, c'est-à-dire susceptibles d'erreur et donc réformables à la lumière de l'Écriture. »",
        es: '"Sola Scriptura significa que la Escritura es la única regla infalible de la iglesia. No significa que la Escritura sea la única autoridad. Credos, catecismos, confesiones y concilios funcionan con autoridad, pero según Sola Scriptura, son falibles, lo que significa que son capaces de error y, por lo tanto, reformables a la luz de la Escritura."',
        de: '„Sola Scriptura bedeutet, dass die Schrift die einzige unfehlbare Regel der Kirche ist. Es bedeutet nicht, dass die Schrift die einzige Autorität ist. Glaubensbekenntnisse, Katechismen, Bekenntnisse und Konzilien fungieren autoritativ, aber gemäß Sola Scriptura sind sie fehlbar, das heißt, sie können irren und sind daher im Lichte der Schrift reformierbar."',
      },
      p3: {
        en: "This doctrine has become the cornerstone of many Protestant denominations, yet it lacks both historical and biblical foundation. It proposes a model of divine guidance restricted to a closed set of texts without a clearly instituted interpretive authority. As this article will argue, such a model is deeply flawed on theological, historical, and philosophical grounds.",
        fr: "Cette doctrine est devenue la pierre angulaire de nombreuses dénominations protestantes, mais elle manque de fondement historique et biblique. Elle propose un modèle de direction divine restreint à un ensemble clos de textes sans autorité interprétative clairement instituée. Comme cet article le démontrera, un tel modèle est profondément défectueux sur les plans théologique, historique et philosophique.",
        es: "Esta doctrina se ha convertido en la piedra angular de muchas denominaciones protestantes, sin embargo, carece de fundamento histórico y bíblico. Propone un modelo de guía divina restringido a un conjunto cerrado de textos sin una autoridad interpretativa claramente instituida. Como argumentará este artículo, dicho modelo es profundamente defectuoso por motivos teológicos, históricos y filosóficos.",
        de: "Diese Lehre ist zum Eckpfeiler vieler protestantischer Konfessionen geworden, entbehrt jedoch sowohl einer historischen als auch einer biblischen Grundlage. Sie schlägt ein Modell göttlicher Führung vor, das auf einen geschlossenen Textkanon beschränkt ist, ohne eine klar eingesetzte interpretative Autorität. Wie dieser Artikel argumentieren wird, ist ein solches Modell aus theologischen, historischen und philosophischen Gründen zutiefst fehlerhaft.",
      },
      p4: {
        en: "We will examine <strong>nine core arguments against Sola Scriptura</strong>. These are not simply reiterations of common apologetic points but are built on close examination of Scripture, Church history, doctrinal development, and internal contradictions within the Protestant model.",
        fr: "Nous examinerons <strong>neuf arguments fondamentaux contre Sola Scriptura</strong>. Il ne s'agit pas de simples réitérations de points apologétiques courants, mais ils sont construits sur un examen attentif de l'Écriture, de l'histoire de l'Église, du développement doctrinal et des contradictions internes au sein du modèle protestant.",
        es: "Examinaremos <strong>nueve argumentos centrales contra Sola Scriptura</strong>. No son simples reiteraciones de puntos apologéticos comunes, sino que se basan en un examen detallado de la Escritura, la historia de la Iglesia, el desarrollo doctrinal y las contradicciones internas dentro del modelo protestante.",
        de: "Wir werden <strong>neun Kernargumente gegen Sola Scriptura</strong> untersuchen. Diese sind nicht einfach Wiederholungen gängiger apologetischer Punkte, sondern basieren auf einer genauen Untersuchung der Schrift, der Kirchengeschichte, der Lehrentwicklung und interner Widersprüche innerhalb des protestantischen Modells.",
      },
      keyQuestions: {
        heading: {
          en: "Key Questions That Will Be Addressed:",
          fr: "Questions Clés Qui Seront Abordées :",
          es: "Preguntas Clave Que Se Abordarán:",
          de: "Schlüsselfragen, die behandelt werden:",
        },
        q1: {
          en: "Was Sola Scriptura taught by the early Church?",
          fr: "Sola Scriptura a-t-elle été enseignée par l'Église primitive ?",
          es: "¿Fue Sola Scriptura enseñada por la Iglesia primitiva?",
          de: "Wurde Sola Scriptura von der frühen Kirche gelehrt?",
        },
        q2: {
          en: "Does Scripture itself teach Sola Scriptura?",
          fr: "L'Écriture elle-même enseigne-t-elle Sola Scriptura ?",
          es: "¿Enseña la Escritura misma Sola Scriptura?",
          de: "Lehrt die Schrift selbst Sola Scriptura?",
        },
        q3: {
          en: "How can the Bible be the only infallible authority if the Bible doesn't define itself?",
          fr: "Comment la Bible peut-elle être la seule autorité infaillible si la Bible ne se définit pas elle-même ?",
          es: "¿Cómo puede la Biblia ser la única autoridad infalible si la Biblia no se define a sí misma?",
          de: "Wie kann die Bibel die einzige unfehlbare Autorität sein, wenn die Bibel sich nicht selbst definiert?",
        },
        q4: {
          en: "Why did the Protestant Reformers reject the authority that gave them the canon of Scripture?",
          fr: "Pourquoi les réformateurs protestants ont-ils rejeté l'autorité qui leur a donné le canon de l'Écriture ?",
          es: "¿Por qué los reformadores protestantes rechazaron la autoridad que les dio el canon de la Escritura?",
          de: "Warum lehnten die protestantischen Reformatoren die Autorität ab, die ihnen den Kanon der Schrift gab?",
        },
        q5: {
          en: "What are the consequences of every Christian being their own doctrinal judge?",
          fr: "Quelles sont les conséquences si chaque chrétien est son propre juge doctrinal ?",
          es: "¿Cuáles son las consecuencias de que cada cristiano sea su propio juez doctrinal?",
          de: "Was sind die Konsequenzen, wenn jeder Christ sein eigener Richter in Lehrfragen ist?",
        },
      },
    },
    nineArguments: {
      heading: {
        en: "The Nine Arguments",
        fr: "Les Neuf Arguments",
        es: "Los Nueve Argumentos",
        de: "Die Neun Argumente",
      },
    },
    args: {
      arg9Title: {
        en: "Not Taught or Practiced in the Early Church",
        fr: "Non enseignée ou pratiquée dans l'Église primitive",
        es: "No enseñada ni practicada en la Iglesia primitiva",
        de: "In der frühen Kirche nicht gelehrt oder praktiziert",
      },
      arg8Title: {
        en: "Results in Doctrinal Fragmentation",
        fr: "Entraîne une fragmentation doctrinale",
        es: "Resulta en fragmentación doctrinal",
        de: "Führt zu doktrinärer Zersplitterung",
      },
      arg7Title: {
        en: "Makes Every Believer the Final Authority",
        fr: "Fait de chaque croyant l'autorité finale",
        es: "Convierte a cada creyente en la autoridad final",
        de: "Macht jeden Gläubigen zur letzten Autorität",
      },
      arg6Title: {
        en: "The Bible Does Not Teach Sola Scriptura",
        fr: "La Bible n'enseigne pas Sola Scriptura",
        es: "La Biblia no enseña Sola Scriptura",
        de: "Die Bibel lehrt Sola Scriptura nicht",
      },
      arg5Title: {
        en: "The Canon Problem",
        fr: "Le Problème du Canon",
        es: "El Problema del Canon",
        de: "Das Kanonproblem",
      },
      arg4Title: {
        en: "No Historical Moment for Its Inception",
        fr: "Aucun moment historique pour sa création",
        es: "Ningún momento histórico para su inicio",
        de: "Kein historischer Moment für seine Entstehung",
      },
      arg3Title: {
        en: "An Incomplete and Imperfect System",
        fr: "Un système incomplet et imparfait",
        es: "Un sistema incompleto e imperfecto",
        de: "Ein unvollständiges und unvollkommenes System",
      },
      arg2Title: {
        en: "Scripture Contradicts Sola Scriptura",
        fr: "L'Écriture contredit Sola Scriptura",
        es: "La Escritura contradice Sola Scriptura",
        de: "Die Schrift widerspricht Sola Scriptura",
      },
      arg1Title: {
        en: "Arbitrary and Theologically Groundless",
        fr: "Arbitraire et théologiquement infondé",
        es: "Arbitraria y teológicamente infundada",
        de: "Willkürlich und theologisch unbegründet",
      },
    },

    arg9: {
      heading: {
        en: "9. Sola Scriptura Was Not Taught or Practiced in the Early Church",
        fr: "9. Sola Scriptura n'a pas été enseignée ou pratiquée dans l'Église primitive",
        es: "9. Sola Scriptura no fue enseñada ni practicada en la Iglesia primitiva",
        de: "9. Sola Scriptura wurde in der frühen Kirche nicht gelehrt oder praktiziert",
      },
      p1: {
        en: "If Scripture alone were the infallible guide for the Church, we would expect the earliest Christians— including the Apostles and their successors—to have taught and practiced this model. However, the historical record shows no such development. Instead, the early Church clearly operated with a model that combined Scripture, oral tradition, and authoritative Church teaching.",
        fr: "Si l'Écriture seule était le guide infaillible de l'Église, nous nous attendrions à ce que les premiers chrétiens — y compris les Apôtres et leurs successeurs — aient enseigné et pratiqué ce modèle. Cependant, les archives historiques ne montrent aucun développement de ce type. Au lieu de cela, l'Église primitive fonctionnait clairement avec un modèle qui combinait l'Écriture, la tradition orale et l'enseignement faisant autorité de l'Église.",
        es: "Si solo la Escritura fuera la guía infalible de la Iglesia, esperaríamos que los primeros cristianos—incluidos los Apóstoles y sus sucesores—hubieran enseñado y practicado este modelo. Sin embargo, el registro histórico no muestra tal desarrollo. En cambio, la Iglesia primitiva operaba claramente con un modelo que combinaba la Escritura, la tradición oral y la enseñanza autorizada de la Iglesia.",
        de: "Wenn die Schrift allein der unfehlbare Leitfaden für die Kirche wäre, würden wir erwarten, dass die frühesten Christen – einschließlich der Apostel und ihrer Nachfolger – dieses Modell gelehrt und praktiziert hätten. Die historischen Aufzeichnungen zeigen jedoch keine solche Entwicklung. Stattdessen funktionierte die frühe Kirche eindeutig nach einem Modell, das Schrift, mündliche Überlieferung und maßgebliche kirchliche Lehre kombinierte.",
      },
      quote1: {
        en: '"When we look at history, that\'s simply not what we find. Instead, the early Church consistently appealed to oral tradition, apostolic succession, and authoritative Church councils alongside Scripture."',
        fr: "« Quand on regarde l'histoire, ce n'est tout simplement pas ce que l'on trouve. Au lieu de cela, l'Église primitive a constamment fait appel à la tradition orale, à la succession apostolique et aux conciles faisant autorité de l'Église, aux côtés de l'Écriture. »",
        es: '"Quando miramos la historia, eso simplemente no es lo que encontramos. En cambio, la Iglesia primitiva apeló consistentemente a la tradición oral, la sucesión apostólica y los concilios autorizados de la Iglesia junto con la Escritura."',
        de: '„Wenn wir die Geschichte betrachten, finden wir das einfach nicht. Stattdessen berief sich die frühe Kirche konsequent auf mündliche Überlieferung, apostolische Sukzession und maßgebliche Kirchenkonzilien neben der Schrift."',
      },
      evidenceHeading: {
        en: "Evidence from Early Church Practice:",
        fr: "Preuves de la pratique de l'Église primitive :",
        es: "Evidencia de la práctica de la Iglesia primitiva:",
        de: "Beweise aus der Praxis der frühen Kirche:",
      },
      evidence: {
        e1: {
          en: '<strong>Clement of Rome</strong> speaks of the "canon of our tradition," which some Protestants misinterpret as referring to Scripture. In reality, the Greek word "canon" simply means "rule," and Clement\'s usage points to a broader rule of faith, not a closed biblical canon.',
          fr: "<strong>Clément de Rome</strong> parle du « canon de notre tradition », que certains protestants interprètent à tort comme faisant référence à l'Écriture. En réalité, le mot grec « canon » signifie simplement « règle », et l'usage de Clément renvoie à une règle de foi plus large, et non à un canon biblique clos.",
          es: '<strong>Clemente de Roma</strong> habla del "canon de nuestra tradición", que algunos protestantes malinterpretan como una referencia a la Escritura. En realidad, la palabra griega "canon" simplemente significa "regla", y el uso de Clemente apunta a una regla de fe más amplia, no a un canon bíblico cerrado.',
          de: "<strong>Clemens von Rom</strong> spricht vom „Kanon unserer Tradition“, was einige Protestanten fälschlicherweise als Verweis auf die Schrift interpretieren. In Wirklichkeit bedeutet das griechische Wort „Kanon“ einfach „Regel“, und Clemens' Gebrauch weist auf eine breitere Glaubensregel hin, nicht auf einen geschlossenen biblischen Kanon.",
        },
        e2: {
          en: "The New Testament itself had not yet been compiled or universally recognized in Clement's time. Therefore, appealing to a fixed canon was impossible for him.",
          fr: "Le Nouveau Testament lui-même n'avait pas encore été compilé ou universellement reconnu à l'époque de Clément. Par conséquent, il lui était impossible de faire appel à un canon fixe.",
          es: "El Nuevo Testamento mismo aún no había sido compilado ni reconocido universalmente en la época de Clemente. Por lo tanto, le era imposible apelar a un canon fijo.",
          de: "Das Neue Testament selbst war zu Clemens' Zeiten noch nicht zusammengestellt oder universell anerkannt. Daher war es ihm unmöglich, sich auf einen festen Kanon zu berufen.",
        },
        e3: {
          en: "The early Church fathers did not reduce authority to Scripture alone. <strong>Ignatius of Antioch</strong>, <strong>Irenaeus</strong>, and others emphasized apostolic authority and tradition.",
          fr: "Les premiers Pères de l'Église n'ont pas réduit l'autorité à l'Écriture seule. <strong>Ignace d'Antioche</strong>, <strong>Irénée</strong> et d'autres ont souligné l'autorité apostolique et la tradition.",
          es: "Los primeros padres de la Iglesia no redujeron la autoridad solo a la Escritura. <strong>Ignacio de Antioquía</strong>, <strong>Ireneo</strong> y otros enfatizaron la autoridad apostólica y la tradición.",
          de: "Die frühen Kirchenväter reduzierten die Autorität nicht allein auf die Schrift. <strong>Ignatius von Antiochien</strong>, <strong>Irenäus</strong> und andere betonten die apostolische Autorität und Tradition.",
        },
      },
      summary: {
        heading: {
          en: "Summary Points:",
          fr: "Points de résumé :",
          es: "Puntos de resumen:",
          de: "Zusammenfassung:",
        },
        s1: {
          en: "There is no evidence that the early Church operated under a Sola Scriptura model.",
          fr: "Il n'y a aucune preuve que l'Église primitive fonctionnait selon un modèle Sola Scriptura.",
          es: "No hay evidencia de que la Iglesia primitiva operara bajo un modelo de Sola Scriptura.",
          de: "Es gibt keine Beweise dafür, dass die frühe Kirche nach einem Sola-Scriptura-Modell funktionierte.",
        },
        s2: {
          en: "No statement from early Christian sources claims that Scripture alone is the sole infallible authority.",
          fr: "Aucune déclaration de sources chrétiennes primitives ne prétend que l'Écriture seule est la seule autorité infaillible.",
          es: "Ninguna declaración de fuentes cristianas primitivas afirma que solo la Escritura es la única autoridad infalible.",
          de: "Keine Aussage aus frühchristlichen Quellen behauptet, dass die Schrift allein die einzige unfehlbare Autorität ist.",
        },
        s3: {
          en: "Church councils and the episcopacy were already functioning as interpretive and doctrinal authorities.",
          fr: "Les conciles de l'Église et l'épiscopat fonctionnaient déjà comme des autorités interprétatives et doctrinales.",
          es: "Los concilios de la Iglesia y el episcopado ya funcionaban como autoridades interpretativas y doctrinales.",
          de: "Kirchenkonzilien und das Bischofsamt fungierten bereits als interpretative und lehrmäßige Autoritäten.",
        },
        s4: {
          en: "Even the definition of which books belonged in Scripture (the canon) was decided by Church authority centuries later.",
          fr: "Même la définition des livres appartenant à l'Écriture (le canon) a été décidée par l'autorité de l'Église des siècles plus tard.",
          es: "Incluso la definición de qué libros pertenecían a la Escritura (el canon) fue decidida por la autoridad de la Iglesia siglos después.",
          de: "Sogar die Definition, welche Bücher zur Schrift gehörten (der Kanon), wurde Jahrhunderte später von der Kirchenautorität entschieden.",
        },
      },
      quote2: {
        en: '"The absence of explicit and widespread early support for Sola Scriptura is actually pretty telling. In other words, Sola Scriptura is missing precisely where we\'d most expect to find it—at the very foundations of Christianity itself."',
        fr: "« L'absence de soutien précoce explicite et répandu pour Sola Scriptura est en fait assez révélatrice. En d'autres termes, Sola Scriptura est absente précisément là où nous nous attendrions le plus à la trouver : aux fondements mêmes du christianisme. »",
        es: '"La ausencia de un apoyo temprano explícito y generalizado a Sola Scriptura es en realidad bastante reveladora. En otras palabras, Sola Scriptura falta precisamente donde más esperaríamos encontrarla: en los cimientos mismos del cristianismo."',
        de: '„Das Fehlen einer expliziten und weit verbreiteten frühen Unterstützung für Sola Scriptura ist eigentlich ziemlich aufschlussreich. Mit anderen Worten, Sola Scriptura fehlt genau dort, wo wir es am meisten erwarten würden – an den Grundfesten des Christentums selbst."',
      },
      p2: {
        en: "The implication is critical: a doctrine that claims to be essential cannot be retroactively inserted into history. The early Church's reliance on apostolic tradition and ecclesial teaching authorities strongly undermines any claim that Scripture was ever meant to stand alone.",
        fr: "L'implication est critique : une doctrine qui se prétend essentielle ne peut être insérée rétroactivement dans l'histoire. La dépendance de l'Église primitive à l'égard de la tradition apostolique et des autorités d'enseignement ecclésiales sape fortement toute prétention selon laquelle l'Écriture aurait jamais été destinée à être seule.",
        es: "La implicación es crítica: una doctrina que afirma ser esencial no puede insertarse retroactivamente en la historia. La dependencia de la Iglesia primitiva de la tradición apostólica y las autoridades de enseñanza eclesiales socava fuertemente cualquier afirmación de que la Escritura alguna vez estuvo destinada a estar sola.",
        de: "Die Implikation ist entscheidend: Eine Lehre, die behauptet, wesentlich zu sein, kann nicht rückwirkend in die Geschichte eingefügt werden. Die Abhängigkeit der frühen Kirche von der apostolischen Tradition und den kirchlichen Lehrautoritäten untergräbt stark jede Behauptung, dass die Schrift jemals dazu bestimmt war, allein zu stehen.",
      },
    },
    arg8: {
      heading: {
        en: "8. Sola Scriptura Results in Doctrinal Fragmentation",
        fr: "8. Sola Scriptura Entraîne une Fragmentation Doctrinale",
        es: "8. Sola Scriptura Resulta en Fragmentación Doctrinal",
        de: "8. Sola Scriptura Führt zu Doktrinärer Zersplitterung",
      },
      p1: {
        en: "If Sola Scriptura were truly God's plan for His Church, we would expect it to result in clarity, unity, and a consistent transmission of essential doctrine. However, the actual fruits of Sola Scriptura are radically different. The doctrine has led to widespread and persistent fragmentation across the Christian world, particularly within Protestantism.",
        fr: "Si Sola Scriptura était vraiment le plan de Dieu pour Son Église, nous nous attendrions à ce qu'elle aboutisse à la clarté, l'unité et une transmission cohérente de la doctrine essentielle. Cependant, les fruits réels de Sola Scriptura sont radicalement différents. La doctrine a conduit à une fragmentation généralisée et persistante dans le monde chrétien, en particulier au sein du protestantisme.",
        es: "Si Sola Scriptura fuera realmente el plan de Dios para Su Iglesia, esperaríamos que resultara en claridad, unidad y una transmisión consistente de la doctrina esencial. Sin embargo, los frutos reales de Sola Scriptura son radicalmente diferentes. La doctrina ha llevado a una fragmentación generalizada y persistente en todo el mundo cristiano, particularmente dentro del protestantismo.",
        de: "Wenn Sola Scriptura wirklich Gottes Plan für Seine Kirche wäre, würden wir erwarten, dass sie zu Klarheit, Einheit und einer konsistenten Übermittlung wesentlicher Lehren führt. Die tatsächlichen Früchte von Sola Scriptura sind jedoch radikal anders. Die Lehre hat zu einer weit verbreiteten und anhaltenden Zersplitterung in der christlichen Welt geführt, insbesondere innerhalb des Protestantismus.",
      },
      quote1: {
        en: '"If Scripture alone was meant by God as the sole infallible rule of faith for the Church, we\'d expect it to unify believers around clear doctrines. But instead, it has reliably produced a staggering degree of doctrinal fragmentation."',
        fr: "« Si l'Écriture seule était voulue par Dieu comme l'unique règle infaillible de foi pour l'Église, nous nous attendrions à ce qu'elle unifie les croyants autour de doctrines claires. Mais au lieu de cela, elle a produit de manière fiable un degré stupéfiant de fragmentation doctrinale. »",
        es: '"Si solo la Escritura fuera la única regla infalible de fe para la Iglesia según Dios, esperaríamos que unificara a los creyentes en torno a doctrinas claras. Pero en cambio, ha producido de manera fiable un asombroso grado de fragmentación doctrinal."',
        de: '„Wenn die Schrift allein von Gott als die einzige unfehlbare Glaubensregel für die Kirche gedacht wäre, würden wir erwarten, dass sie die Gläubigen um klare Lehren vereint. Stattdessen hat sie zuverlässig ein erstaunliches Maß an doktrinärer Zersplitterung hervorgebracht."',
      },
      stats: {
        heading: {
          en: "Statistical Overview of Denominational Chaos:",
          fr: "Aperçu Statistique du Chaos Dénominationnel :",
          es: "Panorama Estadístico del Caos Denominacional:",
          de: "Statistischer Überblick über das Konfessionelle Chaos:",
        },
        s1: {
          en: "In <strong>2023</strong>, there were <strong>47,300</strong> Christian denominations or rites.",
          fr: "En <strong>2023</strong>, il y avait <strong>47 300</strong> dénominations ou rites chrétiens.",
          es: "En <strong>2023</strong>, había <strong>47.300</strong> denominaciones o ritos cristianos.",
          de: "Im Jahr <strong>2023</strong> gab es <strong>47.300</strong> christliche Konfessionen oder Riten.",
        },
        s2: {
          en: "By <strong>2025</strong>, it is projected to rise to <strong>49,000</strong>.",
          fr: "D'ici <strong>2025</strong>, on prévoit qu'il atteindra <strong>49 000</strong>.",
          es: "Para <strong>2025</strong>, se proyecta que aumente a <strong>49.000</strong>.",
          de: "Bis <strong>2025</strong> wird ein Anstieg auf <strong>49.000</strong> prognostiziert.",
        },
        s3: {
          en: "By <strong>2050</strong>, it may reach <strong>64,000</strong>.",
          fr: "D'ici <strong>2050</strong>, il pourrait atteindre <strong>64 000</strong>.",
          es: "Para <strong>2050</strong>, podría alcanzar los <strong>64.000</strong>.",
          de: "Bis <strong>2050</strong> könnte sie <strong>64.000</strong> erreichen.",
        },
        s4: {
          en: '"And of course, the vast majority of these denominations are Protestant or evangelical."',
          fr: "« Et bien sûr, la grande majorité de ces dénominations sont protestantes ou évangéliques. »",
          es: '"Y, por supuesto, la gran mayoría de estas denominaciones son protestantes o evangélicas."',
          de: '„Und natürlich ist die überwiegende Mehrheit dieser Konfessionen protestantisch oder evangelikal."',
        },
      },
      p2: {
        en: "This fragmentation isn't over minor disagreements. Rather, it touches the heart of the Christian message:",
        fr: "Cette fragmentation ne porte pas sur des désaccords mineurs. Elle touche plutôt au cœur du message chrétien :",
        es: "Esta fragmentación no es sobre desacuerdos menores. Más bien, toca el corazón del mensaje cristiano:",
        de: "Diese Zersplitterung betrifft nicht geringfügige Meinungsverschiedenheiten. Vielmehr berührt sie das Herz der christlichen Botschaft:",
      },
      conflicts: {
        heading: {
          en: "Examples of Doctrinal Conflicts:",
          fr: "Exemples de Conflits Doctrinaux :",
          es: "Ejemplos de Conflictos Doctrinales:",
          de: "Beispiele für Lehrkonflikte:",
        },
        c1: {
          en: "<strong>Infant baptism</strong> vs. <strong>believer's baptism</strong>",
          fr: "<strong>Baptême des enfants</strong> vs <strong>baptême des croyants</strong>",
          es: "<strong>Bautismo infantil</strong> vs <strong>bautismo de creyentes</strong>",
          de: "<strong>Kindertaufe</strong> vs. <strong>Glaubenstaufe</strong>",
        },
        c2: {
          en: "<strong>Symbolic view</strong> vs. <strong>Real Presence</strong> in the Eucharist",
          fr: "<strong>Vue symbolique</strong> vs <strong>Présence réelle</strong> dans l'Eucharistie",
          es: "<strong>Visión simbólica</strong> vs <strong>Presencia Real</strong> en la Eucaristía",
          de: "<strong>Symbolische Sicht</strong> vs. <strong>Realpräsenz</strong> in der Eucharistie",
        },
        c3: {
          en: "<strong>Once saved, always saved</strong> vs. <strong>possibility of falling from grace</strong>",
          fr: "<strong>Une fois sauvé, toujours sauvé</strong> vs <strong>possibilité de perdre la grâce</strong>",
          es: "<strong>Una vez salvo, siempre salvo</strong> vs <strong>posibilidad de caer de la gracia</strong>",
          de: "<strong>Einmal gerettet, immer gerettet</strong> vs. <strong>Möglichkeit des Abfalls von der Gnade</strong>",
        },
        c4: {
          en: "<strong>Justification by faith alone</strong> vs. <strong>faith working through love</strong>",
          fr: "<strong>Justification par la foi seule</strong> vs <strong>foi agissant par la charité</strong>",
          es: "<strong>Justificación solo por la fe</strong> vs <strong>fe que obra por el amor</strong>",
          de: "<strong>Rechtfertigung allein durch den Glauben</strong> vs. <strong>Glaube, der durch Liebe tätig ist</strong>",
        },
        p: {
          en: "These are not peripheral topics. They involve salvation, the sacraments, and the very structure of Christian life and worship.",
          fr: "Ce ne sont pas des sujets périphériques. Ils concernent le salut, les sacrements et la structure même de la vie et du culte chrétiens.",
          es: "Estos no son temas periféricos. Involucran la salvación, los sacramentos y la estructura misma de la vida y el culto cristianos.",
          de: "Dies sind keine Randthemen. Sie betreffen das Heil, die Sakramente und die eigentliche Struktur des christlichen Lebens und Gottesdienstes.",
        },
      },
      rootCause: {
        heading: {
          en: "Root Cause: The Structural Problem of Sola Scriptura",
          fr: "Cause Profonde : Le Problème Structurel de Sola Scriptura",
          es: "Causa Raíz: El Problema Estructural de Sola Scriptura",
          de: "Grundursache: Das strukturelle Problem von Sola Scriptura",
        },
        p1: {
          en: "The fragmentation is not merely a result of sin or misunderstanding; it flows directly from the principle of Sola Scriptura itself:",
          fr: "La fragmentation n'est pas simplement le résultat du péché ou d'une incompréhension ; elle découle directement du principe même de Sola Scriptura :",
          es: "La fragmentación no es simplemente el resultado del pecado o de un malentendido; fluye directamente del principio de Sola Scriptura mismo:",
          de: "Die Zersplitterung ist nicht nur ein Ergebnis von Sünde oder Missverständnis; sie ergibt sich direkt aus dem Prinzip von Sola Scriptura selbst:",
        },
        quote1: {
          en: '"By placing the final interpretive authority in the hands of every believer or pastor, the doctrine essentially guarantees a steady multiplication of competing interpretations."',
          fr: "« En plaçant l'autorité interprétative finale entre les mains de chaque croyant ou pasteur, la doctrine garantit essentiellement une multiplication constante d'interprétations concurrentes. »",
          es: '"Al poner la autoridad interpretativa final en manos de cada creyente o pastor, la doctrina esencialmente garantiza una multiplicación constante de interpretaciones contrapuestas."',
          de: '„Indem die letzte interpretative Autorität in die Hände jedes Gläubigen oder Pastors gelegt wird, garantiert die Lehre im Wesentlichen eine stetige Vermehrung konkurrierender Interpretationen."',
        },
        p2: {
          en: "Without a central authority to resolve disputes:",
          fr: "Sans une autorité centrale pour résoudre les différends :",
          es: "Sin una autoridad central para resolver disputas:",
          de: "Ohne eine zentrale Autorität zur Beilegung von Streitigkeiten:",
        },
        b1: {
          en: "Every disagreement becomes a potential schism.",
          fr: "Chaque désaccord devient un schisme potentiel.",
          es: "Cada desacuerdo se convierte en un cisma potencial.",
          de: "Jede Meinungsverschiedenheit wird zu einem potenziellen Schisma.",
        },
        b2: {
          en: 'New movements constantly arise, claiming to be more faithful to "the Bible alone."',
          fr: "De nouveaux mouvements surgissent constamment, prétendant être plus fidèles à « la Bible seule ».",
          es: 'Nuevos movimientos surgen constantemente, afirmando ser más fieles a "la Biblia sola".',
          de: 'Ständig entstehen neue Bewegungen, die behaupten, „der Bibel allein" treuer zu sein.',
        },
        b3: {
          en: "There is no final word on doctrine, only endless interpretation.",
          fr: "Il n'y a pas de mot final sur la doctrine, seulement une interprétation sans fin.",
          es: "No hay una palabra final sobre la doctrina, solo una interpretación interminable.",
          de: "Es gibt kein letztes Wort zur Lehre, nur endlose Interpretationen.",
        },
        quote2: {
          en: "\"Each doctrinal dispute inevitably results in new denominational splits. This pattern of fragmentation isn't simply due to human imperfection—it's precisely what we would predict given Sola Scriptura's fundamental premise.\"",
          fr: "« Chaque différend doctrinal aboutit inévitablement à de nouvelles scissions confessionnelles. Ce schéma de fragmentation n'est pas simplement dû à l'imperfection humaine — c'est précisément ce que nous prédirions compte tenu de la prémisse fondamentale de Sola Scriptura. »",
          es: '"Cada disputa doctrinal resulta inevitablemente en nuevas divisiones denominacionales. Este patrón de fragmentación no se debe simplemente a la imperfección humana—es precisamente lo que predeciríamos dada la premisa fundamental de Sola Scriptura."',
          de: '„Jeder Lehrstreit führt unweigerlich zu neuen konfessionellen Spaltungen. Dieses Muster der Zersplitterung ist nicht einfach auf menschliche Unvollkommenheit zurückzuführen – es ist genau das, was wir angesichts der Grundprämisse von Sola Scriptura erwarten würden."',
        },
      },
      consequences: {
        heading: {
          en: "Theological and Missional Consequences:",
          fr: "Conséquences Théologiques et Missionnaires :",
          es: "Consecuencias Teológicas y Misionales:",
          de: "Theologische und Missionarische Konsequenzen:",
        },
        c1: {
          en: "<strong>Doctrinal confusion:</strong> The average believer is left uncertain about what is true.",
          fr: "<strong>Confusion doctrinale :</strong> Le croyant moyen est laissé dans l'incertitude quant à ce qui est vrai.",
          es: "<strong>Confusión doctrinal:</strong> El creyente promedio queda en la incertidumbre sobre lo que es verdad.",
          de: "<strong>Doktrinäre Verwirrung:</strong> Der durchschnittliche Gläubige wird im Ungewissen gelassen, was wahr ist.",
        },
        c2: {
          en: "<strong>Pastoral instability:</strong> Pastors may feel free to revise doctrine according to personal interpretation.",
          fr: "<strong>Instabilité pastorale :</strong> Les pasteurs peuvent se sentir libres de réviser la doctrine selon leur interprétation personnelle.",
          es: "<strong>Inestabilidad pastoral:</strong> Los pastores pueden sentirse libres de revisar la doctrina según su interpretación personal.",
          de: "<strong>Pastorale Instabilität:</strong> Pastoren fühlen sich möglicherweise frei, die Lehre nach persönlicher Interpretation zu revidieren.",
        },
        c3: {
          en: '<strong>Evangelistic scandal:</strong> The divided witness of Christianity undermines the Gospel message. Jesus prayed, "that they may be one... so that the world may believe" (John 17:21).',
          fr: "<strong>Scandale évangélique :</strong> Le témoignage divisé du christianisme sape le message de l'Évangile. Jésus a prié, « afin qu'ils soient un... afin que le monde croie » (Jean 17:21).",
          es: '<strong>Escándalo evangelístico:</strong> El testimonio dividido del cristianismo socava el mensaje del Evangelio. Jesús oró, "para que sean uno... para que el mundo crea" (Juan 17:21).',
          de: '<strong>Evangelistischer Skandal:</strong> Das geteilte Zeugnis des Christentums untergräbt die Botschaft des Evangeliums. Jesus betete, „damit sie eins seien... damit die Welt glaube" (Johannes 17:21).',
        },
        quote: {
          en: '"If God\'s intention were really Sola Scriptura, why would the fruit of that intention be a landscape of perpetual doctrinal chaos and uncertainty—the very opposite of the unity Christ prayed for?"',
          fr: "« Si l'intention de Dieu était réellement Sola Scriptura, pourquoi le fruit de cette intention serait-il un paysage de chaos doctrinal perpétuel et d'incertitude — l'opposé même de l'unité pour laquelle Christ a prié ? »",
          es: '"Si la intención de Dios fuera realmente Sola Scriptura, ¿por qué el fruto de esa intención sería un paisaje de perpetuo caos doctrinal e incertidumbre—exactamente lo contrario de la unidad por la que Cristo oró?"',
          de: '„Wenn Gottes Absicht wirklich Sola Scriptura wäre, warum wäre die Frucht dieser Absicht eine Landschaft perpetuellen doktrinären Chaos und Unsicherheit – genau das Gegenteil der Einheit, für die Christus gebetet hat?"',
        },
      },
    },
    arg7: {
      heading: {
        en: "7. It Makes Every Believer the Final Authority",
        fr: "7. Elle Fait de Chaque Croyant l'Autorité Finale",
        es: "7. Convierte a Cada Creyente en la Autoridad Final",
        de: "7. Es Macht Jeden Gläubigen zur Letzten Autorität",
      },
      p1: {
        en: "One of the most problematic implications of Sola Scriptura is that it renders every believer the final arbiter of divine truth. If the Bible is the only infallible authority, and there is no infallible interpreter, then each person is left to judge Scripture for themselves.",
        fr: "L'une des implications les plus problématiques de Sola Scriptura est qu'elle fait de chaque croyant l'arbitre final de la vérité divine. Si la Bible est la seule autorité infaillible, et qu'il n'y a pas d'interprète infaillible, alors chaque personne est laissée à juger l'Écriture par elle-même.",
        es: "Una de las implicaciones más problemáticas de Sola Scriptura es que convierte a cada creyente en el árbitro final de la verdad divina. Si la Biblia es la única autoridad infalible, y no hay un intérprete infalible, entonces cada persona queda a juzgar la Escritura por sí misma.",
        de: "Eine der problematischsten Implikationen von Sola Scriptura ist, dass sie jeden Gläubigen zum letzten Schiedsrichter über göttliche Wahrheit macht. Wenn die Bibel die einzige unfehlbare Autorität ist und es keinen unfehlbaren Interpreten gibt, dann ist jede Person sich selbst überlassen, die Schrift für sich selbst zu beurteilen.",
      },
      quote1: {
        en: '"If the Bible alone is your only infallible guide, the responsibility falls squarely on you, a limited fallible human, to get doctrine right. You can\'t appeal to an infallible church or an authoritative tradition."',
        fr: "« Si la Bible seule est votre unique guide infaillible, la responsabilité vous incombe entièrement, à vous, être humain limité et faillible, de bien comprendre la doctrine. Vous ne pouvez pas faire appel à une église infaillible ou à une tradition faisant autorité. »",
        es: '"Si solo la Biblia es tu única guía infalible, la responsabilidad recae directamente sobre ti, un ser humano limitado y falible, para entender correctamente la doctrina. No puedes apelar a una iglesia infalible o a una tradición autorizada."',
        de: '„Wenn die Bibel allein dein einziger unfehlbarer Führer ist, fällt die Verantwortung direkt auf dich, einen begrenzten, fehlbaren Menschen, die Lehre richtig zu verstehen. Du kannst dich nicht auf eine unfehlbare Kirche oder eine autoritative Tradition berufen."',
      },
      court: {
        heading: {
          en: "The Individual Becomes the Doctrinal Court of Last Resort",
          fr: "L'Individu Devient la Cour Doctrinale de Dernier Recours",
          es: "El Individuo se Convierte en el Tribunal Doctrinal de Última Instancia",
          de: "Das Individuum wird zum Doktrinären Gericht Letzter Instanz",
        },
        p1: {
          en: "Under Sola Scriptura:",
          fr: "Sous Sola Scriptura :",
          es: "Bajo Sola Scriptura:",
          de: "Unter Sola Scriptura:",
        },
        b1: {
          en: "Each believer must determine essential doctrines like baptism, Eucharist, salvation, predestination, etc.",
          fr: "Chaque croyant doit déterminer les doctrines essentielles comme le baptême, l'Eucharistie, le salut, la prédestination, etc.",
          es: "Cada creyente debe determinar doctrinas esenciales como el bautismo, la Eucaristía, la salvación, la predestinación, etc.",
          de: "Jeder Gläubige muss wesentliche Lehren wie Taufe, Eucharistie, Erlösung, Prädestination usw. bestimmen.",
        },
        b2: {
          en: "One must <strong>privately judge</strong> between conflicting theologians or pastors—none of whom are infallible.",
          fr: "On doit <strong>juger en privé</strong> entre des théologiens ou des pasteurs en conflit — dont aucun n'est infaillible.",
          es: "Uno debe <strong>juzgar privadamente</strong> entre teólogos o pastores en conflicto—ninguno de los cuales es infalible.",
          de: "Man muss <strong>privat urteilen</strong> zwischen widersprüchlichen Theologen oder Pastoren – von denen keiner unfehlbar ist.",
        },
        b3: {
          en: "There is no living, visible Church authority to settle disagreements with finality.",
          fr: "Il n'y a pas d'autorité ecclésiale vivante et visible pour régler les désaccords avec finalité.",
          es: "No hay una autoridad eclesial viva y visible para resolver desacuerdos con finalidad.",
          de: "Es gibt keine lebendige, sichtbare Kirchenautorität, um Meinungsverschiedenheiten endgültig beizulegen.",
        },
        quote: {
          en: '"Ultimately, everything from baptism to salvation to the Eucharist depends entirely on your personal judgment. And that is daunting."',
          fr: "« En fin de compte, tout, du baptême au salut en passant par l'Eucharistie, dépend entièrement de votre jugement personnel. Et c'est intimidant. »",
          es: '"En última instancia, todo, desde el bautismo hasta la salvación y la Eucaristía, depende enteramente de tu juicio personal. Y eso es abrumador."',
          de: '„Letztlich hängt alles von der Taufe über die Erlösung bis zur Eucharistie vollständig von deinem persönlichen Urteil ab. Und das ist entmutigend."',
        },
      },
      scholars: {
        heading: {
          en: "The Role of Protestant Scholars",
          fr: "Le Rôle des Érudits Protestants",
          es: "El Papel de los Eruditos Protestantes",
          de: "Die Rolle Protestantischer Gelehrter",
        },
        p1: {
          en: "Some Protestants attempt to mitigate this problem by deferring to expert theologians or biblical scholars. However, this response fails for two reasons:",
          fr: "Certains protestants tentent d'atténuer ce problème en s'en remettant à des théologiens experts ou à des biblistes. Cependant, cette réponse échoue pour deux raisons :",
          es: "Algunos protestantes intentan mitigar este problema remitiéndose a teólogos expertos o eruditos bíblicos. Sin embargo, esta respuesta falla por dos razones:",
          de: "Einige Protestanten versuchen, dieses Problem abzuschwächen, indem sie sich auf Fachtheologen oder Bibelexperten berufen. Diese Antwort scheitert jedoch aus zwei Gründen:",
        },
        b1: {
          en: '<strong>Scholars are fallible:</strong> <span class="text-gray-400"> They are "susceptible to errors and biases," just like lay believers.</span>',
          fr: '<strong>Les érudits sont faillibles :</strong> <span class="text-gray-400"> Ils sont « susceptibles d\'erreurs et de préjugés », tout comme les croyants laïcs.</span>',
          es: '<strong>Los eruditos son falibles:</strong> <span class="text-gray-400"> Son "susceptibles a errores y sesgos", al igual que los creyentes laicos.</span>',
          de: '<strong>Gelehrte sind fehlbar:</strong> <span class="text-gray-400"> Sie sind „anfällig für Fehler und Vorurteile“, genau wie Laiengläubige.</span>',
        },
        b2: {
          en: '<strong>They profoundly disagree:</strong> <span class="text-gray-400"> Even renowned figures like Luther and Calvin disagreed over fundamental doctrines such as the nature of the Eucharist.</span>',
          fr: '<strong>Ils sont en profond désaccord :</strong> <span class="text-gray-400"> Même des figures renommées comme Luther et Calvin étaient en désaccord sur des doctrines fondamentales telles que la nature de l\'Eucharistie.</span>',
          es: '<strong>Están en profundo desacuerdo:</strong> <span class="text-gray-400"> Incluso figuras renombradas como Lutero y Calvino discreparon sobre doctrinas fundamentales como la naturaleza de la Eucaristía.</span>',
          de: '<strong>Sie sind zutiefst uneinig:</strong> <span class="text-gray-400"> Selbst renommierte Persönlichkeiten wie Luther und Calvin waren sich über grundlegende Lehren wie die Natur der Eucharistie uneinig.</span>',
        },
        quote: {
          en: "\"You're forced back into deciding who's correct… based on your own fallible judgment.\"",
          fr: "« Vous êtes obligé de décider qui a raison... sur la base de votre propre jugement faillible. »",
          es: '"Te ves forzado a decidir quién tiene razón... basándote en tu propio juicio falible."',
          de: '„Du bist gezwungen, zu entscheiden, wer Recht hat... basierend auf deinem eigenen fehlbaren Urteil."',
        },
      },
      contrast: {
        heading: {
          en: "Catholic Contrast: One Foundational Judgment",
          fr: "Contraste Catholique : Un Jugement Fondamental Unique",
          es: "Contraste Católico: Un Juicio Fundacional Único",
          de: "Katholischer Kontrast: Ein Grundlegendes Urteil",
        },
        p1: {
          en: "Catholics also exercise private judgment—but once. A Catholic makes a single foundational decision: to trust the Church established by Christ. After that, doctrinal and moral questions are answered with consistency.",
          fr: "Les catholiques exercent également leur jugement privé, mais une seule fois. Un catholique prend une seule décision fondamentale : faire confiance à l'Église établie par le Christ. Après cela, les questions doctrinales et morales reçoivent une réponse cohérente.",
          es: "Los católicos también ejercen el juicio privado, pero una vez. Un católico toma una única decisión fundamental: confiar en la Iglesia establecida por Cristo. Después de eso, las preguntas doctrinales y morales se responden con coherencia.",
          de: "Katholiken üben auch ein privates Urteil aus – aber nur einmal. Ein Katholik trifft eine einzige grundlegende Entscheidung: der von Christus gegründeten Kirche zu vertrauen. Danach werden lehrmäßige und moralische Fragen konsistent beantwortet.",
        },
        quote1: {
          en: "\"Catholics make one foundational judgment. Okay, they identify Christ's true Church. It's like carefully choosing a reliable GPS only once. After that, difficult doctrinal questions are authoritatively clarified.\"",
          fr: "« Les catholiques posent un jugement fondamental unique. D'accord, ils identifient la véritable Église du Christ. C'est comme choisir avec soin un GPS fiable une seule fois. Après cela, les questions doctrinales difficiles sont clarifiées avec autorité. »",
          es: '"Los católicos hacen un juicio fundamental único. Bien, identifican la verdadera Iglesia de Cristo. Es como elegir cuidadosamente un GPS fiable una sola vez. Después de eso, las preguntas doctrinales difíciles se aclaran con autoridad."',
          de: '„Katholiken fällen ein grundlegendes Urteil. Okay, sie identifizieren die wahre Kirche Christi. Es ist, als würde man einmal sorgfältig ein zuverlässiges GPS auswählen. Danach werden schwierige Lehrfragen autoritativ geklärt."',
        },
        quote2: {
          en: '"Protestants… face ongoing judgment. Every doctrinal dispute remains open, requiring perpetual reevaluation."',
          fr: "« Les protestants... font face à un jugement continu. Chaque différend doctrinal reste ouvert, nécessitant une réévaluation perpétuelle. »",
          es: '"Los protestantes... enfrentan un juicio continuo. Cada disputa doctrinal permanece abierta, requiriendo una reevaluación perpetua."',
          de: '„Protestanten... stehen vor einem fortwährenden Urteil. Jeder Lehrstreit bleibt offen und erfordert eine ständige Neubewertung."',
        },
      },
    },
    arg6: {
      heading: {
        en: "6. The Bible Does Not Teach Sola Scriptura",
        fr: "6. La Bible n'enseigne pas Sola Scriptura",
        es: "6. La Biblia no enseña Sola Scriptura",
        de: "6. Die Bibel lehrt Sola Scriptura nicht",
      },
      p1: {
        en: "Perhaps the most foundational challenge to Sola Scriptura is this: the doctrine is not taught anywhere in the Bible. If Scripture alone is to be our sole infallible authority, the Bible should say so—clearly and unambiguously. Yet no such passage exists.",
        fr: "Le défi le plus fondamental à Sola Scriptura est peut-être celui-ci : la doctrine n'est enseignée nulle part dans la Bible. Si l'Écriture seule doit être notre unique autorité infaillible, la Bible devrait le dire — clairement et sans ambiguïté. Pourtant, aucun passage de ce type n'existe.",
        es: "Quizás el desafío más fundamental para Sola Scriptura es este: la doctrina no se enseña en ninguna parte de la Biblia. Si solo la Escritura ha de ser nuestra única autoridad infalible, la Biblia debería decirlo—clara e inequívocamente. Sin embargo, no existe tal pasaje.",
        de: "Die vielleicht grundlegendste Herausforderung für Sola Scriptura ist diese: Die Lehre wird nirgendwo in der Bibel gelehrt. Wenn die Schrift allein unsere einzige unfehlbare Autorität sein soll, sollte die Bibel dies sagen – klar und unzweideutig. Doch kein solcher Abschnitt existiert.",
      },
      prooftext: {
        heading: {
          en: "A Misused Prooftext: 2 Timothy 3:16–17",
          fr: "Un Texte de Preuve Mal Utilisé : 2 Timothée 3:16–17",
          es: "Un Texto de Prueba Mal Utilizado: 2 Timoteo 3:16–17",
          de: "Ein Missbrauchter Belegtext: 2. Timotheus 3:16–17",
        },
        p1: {
          en: "This is the most commonly cited passage to defend Sola Scriptura:",
          fr: "C'est le passage le plus souvent cité pour défendre Sola Scriptura :",
          es: "Este es el pasaje más comúnmente citado para defender Sola Scriptura:",
          de: "Dies ist der am häufigsten zitierte Abschnitt zur Verteidigung von Sola Scriptura:",
        },
        quote: {
          en: '"All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work."',
          fr: "« Toute Écriture est inspirée de Dieu et utile pour enseigner, pour convaincre, pour corriger et for instruire dans la justice, afin que l'homme de Dieu soit accompli et propre à toute bonne œuvre. »",
          es: '"Toda la Escritura es inspirada por Dios y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra."',
          de: '„Alle Schrift ist von Gott eingegeben und nützlich zur Lehre, zur Überführung, zur Zurechtweisung, zur Unterweisung in der Gerechtigkeit, damit der Mensch Gottes vollkommen sei, zu jedem guten Werk ausgerüstet."',
        },
        source: {
          en: "2 Timothy 3:16–17",
          fr: "2 Timothée 3:16–17",
          es: "2 Timoteo 3:16–17",
          de: "2. Timotheus 3:16–17",
        },
        p2: {
          en: "At first glance, this might seem to affirm the sufficiency of Scripture. But a closer reading reveals otherwise.",
          fr: "À première vue, cela pourrait sembler affirmer la suffisance de l'Écriture. Mais une lecture plus attentive révèle le contraire.",
          es: "A primera vista, esto podría parecer afirmar la suficiencia de la Escritura. Pero una lectura más atenta revela lo contrario.",
          de: "Auf den ersten Blick mag dies die Hinlänglichkeit der Schrift zu bestätigen scheinen. Aber ein genaueres Lesen offenbart etwas anderes.",
        },
        observations: {
          heading: {
            en: "Key Observations:",
            fr: "Observations Clés :",
            es: "Observaciones Clave:",
            de: "Wichtige Beobachtungen:",
          },
          o1: {
            en: "Paul does not say Scripture <strong>alone</strong> is sufficient.",
            fr: "Paul ne dit pas que l'Écriture <strong>seule</strong> est suffisante.",
            es: "Pablo no dice que la Escritura <strong>sola</strong> sea suficiente.",
            de: "Paulus sagt nicht, dass die Schrift <strong>allein</strong> ausreicht.",
          },
          o2: {
            en: 'He instructs Timothy, two chapters earlier, to "follow the pattern of sound words you have heard from me" and to "guard the good deposit entrusted to you" (2 Tim 1:13–14), referring to oral tradition.',
            fr: "Il enjoint à Timothée, deux chapitres plus tôt, de « retenir le modèle des saines paroles que tu as entendues de moi » et de « garder le bon dépôt qui t'a été confié » (2 Tim 1:13-14), faisant référence à la tradition orale.",
            es: 'Instruye a Timoteo, dos capítulos antes, a "retén la forma de las sanas palabras que de mí oíste" y "guarda el buen depósito que te fue encomendado" (2 Tim 1:13-14), refiriéndose a la tradición oral.',
            de: 'Er weist Timotheus zwei Kapitel zuvor an, „das Vorbild der gesunden Worte festzuhalten, die du von mir gehört hast" und „das gute anvertraute Gut zu bewahren" (2. Tim 1,13-14), was sich auf die mündliche Überlieferung bezieht.',
          },
          o3: {
            en: "The Scriptures Timothy knew were the <strong>Old Testament</strong>, including the <strong>Deuterocanonical books</strong>, which Protestants later rejected.",
            fr: "Les Écritures que Timothée connaissait étaient l'<strong>Ancien Testament</strong>, y compris les <strong>livres deutérocanoniques</strong>, que les protestants ont rejetés plus tard.",
            es: "Las Escrituras que Timoteo conocía eran el <strong>Antiguo Testamento</strong>, incluidos los <strong>libros deuterocanónicos</strong>, que los protestantes rechazaron más tarde.",
            de: "Die Schriften, die Timotheus kannte, waren das <strong>Alte Testament</strong>, einschließlich der <strong>deuterokanonischen Bücher</strong>, die Protestanten später ablehnten.",
          },
        },
        quote2: {
          en: '"If Paul genuinely meant that Scripture alone is our only infallible authority, he would not have emphasized oral teaching or entrusted Timothy with an apostolic deposit to guard."',
          fr: "« Si Paul avait vraiment voulu dire que l'Écriture seule est notre unique autorité infaillible, il n'aurait pas insisté sur l'enseignement oral ou confié à Timothée un dépôt apostolique à garder. »",
          es: '"Si Pablo realmente quisiera decir que solo la Escritura es nuestra única autoridad infalible, no habría enfatizado la enseñanza oral ni habría confiado a Timoteo un depósito apostólico para guardar."',
          de: '„Wenn Paulus wirklich gemeint hätte, dass die Schrift allein unsere einzige unfehlbare Autorität ist, hätte er nicht die mündliche Lehre betont oder Timotheus ein apostolisches Gut zur Bewahrung anvertraut."',
        },
      },
      oralTradition: {
        heading: {
          en: "Scripture Affirms Oral Tradition and Living Authority",
          fr: "L'Écriture Affirme la Tradition Orale et l'Autorité Vivante",
          es: "La Escritura Afirma la Tradición Oral y la Autoridad Viva",
          de: "Die Schrift Bestätigt Mündliche Überlieferung und Lebendige Autorität",
        },
        p1: {
          en: "Numerous biblical passages uphold the value and authority of oral tradition:",
          fr: "De nombreux passages bibliques soutiennent la valeur et l'autorité de la tradition orale :",
          es: "Numerosos pasajes bíblicos defienden el valor y la autoridad de la tradición oral:",
          de: "Zahlreiche Bibelstellen bestätigen den Wert und die Autorität der mündlichen Überlieferung:",
        },
        b1: {
          en: '<strong>2 Thessalonians 2:15</strong> – "Stand firm and hold to the traditions that you were taught by us, either by our spoken word or by our letter."',
          fr: "<strong>2 Thessaloniciens 2:15</strong> – « Tenez ferme et retenez les traditions que vous avez apprises de nous, soit de vive voix, soit par notre lettre. »",
          es: '<strong>2 Tesalonicenses 2:15</strong> – "Estad firmes y retened las tradiciones que habéis aprendido, sea por palabra o por carta nuestra."',
          de: '<strong>2. Thessalonicher 2:15</strong> – „Steht fest und haltet an den Überlieferungen fest, in denen ihr unterwiesen worden seid, sei es durch Wort oder durch unseren Brief."',
        },
        b2: {
          en: '<strong>2 Timothy 2:2</strong> – "What you have heard from me… entrust to faithful men who will be able to teach others also."',
          fr: "<strong>2 Timothée 2:2</strong> – « Ce que tu as entendu de moi... confie-le à des hommes fidèles qui soient capables de l'enseigner aussi à d'autres. »",
          es: '<strong>2 Timoteo 2:2</strong> – "Lo que has oído de mí... esto encarga a hombres fieles que sean idóneos para enseñar también a otros."',
          de: '<strong>2. Timotheus 2:2</strong> – „Was du von mir gehört hast... das vertraue treuen Menschen an, die tüchtig sein werden, auch andere zu lehren."',
        },
        b3: {
          en: '<strong>1 Corinthians 11:2</strong> – "Maintain the traditions… delivered to you."',
          fr: "<strong>1 Corinthiens 11:2</strong> – « Maintenez les traditions... que je vous ai transmises. »",
          es: '<strong>1 Corintios 11:2</strong> – "Mantenéis las tradiciones... tal como os las entregué."',
          de: '<strong>1. Korinther 11:2</strong> – „Haltet an den Überlieferungen fest... wie ich sie euch übergeben habe."',
        },
        b4: {
          en: "<strong>Acts 15</strong> – The Jerusalem Council settles the circumcision debate with authority—not by appealing to Scripture alone, but through apostolic decision-making.",
          fr: "<strong>Actes 15</strong> – Le Concile de Jérusalem règle le débat sur la circoncision avec autorité — non pas en faisant appel à l'Écriture seule, mais par une prise de décision apostolique.",
          es: "<strong>Hechos 15</strong> – El Concilio de Jerusalén resuelve el debate sobre la circuncisión con autoridad—no apelando solo a la Escritura, sino a través de la toma de decisiones apostólica.",
          de: "<strong>Apostelgeschichte 15</strong> – Das Jerusalemer Konzil entscheidet den Beschneidungsstreit mit Autorität – nicht durch Berufung auf die Schrift allein, sondern durch apostolische Entscheidungsfindung.",
        },
        quote: {
          en: '"When you let Scripture speak for itself, it consistently leads beyond the idea of Scripture alone."',
          fr: "« Quand vous laissez l'Écriture parler d'elle-même, elle conduit constamment au-delà de l'idée de l'Écriture seule. »",
          es: '"Cuando dejas que la Escritura hable por sí misma, consistentemente lleva más allá de la idea de la Escritura sola."',
          de: '„Wenn man die Schrift für sich selbst sprechen lässt, führt sie konsequent über die Idee der Schrift allein hinaus."',
        },
      },
    },
    arg5: {
      heading: {
        en: "5. The Canon Problem",
        fr: "5. Le Problème du Canon",
        es: "5. El Problema del Canon",
        de: "5. Das Kanonproblem",
      },
      p1: {
        en: "Sola Scriptura claims that Scripture is the only infallible authority for Christians. But that leads to a foundational dilemma: <strong>how do you know what belongs in Scripture in the first place?</strong>",
        fr: "Sola Scriptura prétend que l'Écriture est la seule autorité infaillible pour les chrétiens. Mais cela conduit à un dilemme fondamental : <strong>comment savez-vous ce qui appartient à l'Écriture en premier lieu ?</strong>",
        es: "Sola Scriptura afirma que la Escritura es la única autoridad infalible para los cristianos. Pero eso lleva a un dilema fundamental: <strong>¿cómo sabes qué pertenece a la Escritura en primer lugar?</strong>",
        de: "Sola Scriptura behauptet, dass die Schrift die einzige unfehlbare Autorität für Christen ist. Aber das führt zu einem grundlegenden Dilemma: <strong>Woher weißt du überhaupt, was zur Schrift gehört?</strong>",
      },
      quote1: {
        en: '"If Sola Scriptura is true, then Protestants should have a reliable and principled method for identifying which books are Scripture—without appealing to any outside infallible authority."',
        fr: "« Si Sola Scriptura est vraie, alors les protestants devraient avoir une méthode fiable et fondée sur des principes pour identifier quels livres sont l'Écriture — sans faire appel à une autorité infaillible extérieure. »",
        es: '"Si Sola Scriptura es verdad, entonces los protestantes deberían tener un método fiable y de principios para identificar qué libros son Escritura—sin apelar a ninguna autoridad infalible externa."',
        de: '„Wenn Sola Scriptura wahr ist, dann sollten Protestanten eine zuverlässige und prinzipientreue Methode haben, um zu identifizieren, welche Bücher die Schrift sind – ohne sich auf eine äußere unfehlbare Autorität zu berufen."',
      },
      p2: {
        en: "Yet every attempt to define the canon <strong>without an infallible Church</strong> results in contradiction and circular reasoning.",
        fr: "Pourtant, chaque tentative de définir le canon <strong>sans une Église infaillible</strong> aboutit à une contradiction et à un raisonnement circulaire.",
        es: "Sin embargo, todo intento de definir el canon <strong>sin una Iglesia infalible</strong> resulta en contradicción y razonamiento circular.",
        de: "Doch jeder Versuch, den Kanon <strong>ohne eine unfehlbare Kirche</strong> zu definieren, führt zu Widerspruch und Zirkelschluss.",
      },
      attempts: {
        heading: {
          en: "Protestant Attempts (All Fail):",
          fr: "Tentatives Protestantes (Toutes Échouent) :",
          es: "Intentos Protestantes (Todos Fallan):",
          de: "Protestantische Versuche (Alle Scheitern):",
        },
        a1: {
          en: '<strong>Apostolic Authorship</strong><p class="text-gray-400">Problem: Inconsistently applied. First Clement was apostolic but excluded; Hebrews is included but anonymous.</p>',
          fr: '<strong>Paternité Apostolique</strong><p class="text-gray-400">Problème : Appliquée de manière incohérente. La Première Épître de Clément était apostolique mais exclue ; l\'Épître aux Hébreux est incluse mais anonyme.</p>',
          es: '<strong>Autoría Apostólica</strong><p class="text-gray-400">Problema: Aplicada inconsistentemente. Primera de Clemente fue apostólica pero excluida; Hebreos está incluida pero es anónima.</p>',
          de: '<strong>Apostolische Autorschaft</strong><p class="text-gray-400">Problem: Inkonsistent angewendet. Der Erste Klemensbrief war apostolisch, wurde aber ausgeschlossen; der Hebräerbrief ist enthalten, aber anonym.</p>',
        },
        a2: {
          en: '<strong>Internal Marks of Inspiration</strong><p class="text-gray-400">Problem: Early Christians debated for centuries over which books were inspired (2 Peter, Revelation, etc.).</p>',
          fr: '<strong>Marques Internes d\'Inspiration</strong><p class="text-gray-400">Problème : Les premiers chrétiens ont débattu pendant des siècles pour savoir quels livres étaient inspirés (2 Pierre, Apocalypse, etc.).</p>',
          es: '<strong>Marcas Internas de Inspiración</strong><p class="text-gray-400">Problema: Los primeros cristianos debatieron durante siglos sobre qué libros eran inspirados (2 Pedro, Apocalipsis, etc.).</p>',
          de: '<strong>Interne Merkmale der Inspiration</strong><p class="text-gray-400">Problem: Frühe Christen debattierten jahrhundertelang darüber, welche Bücher inspiriert waren (2. Petrus, Offenbarung usw.).</p>',
        },
        a3: {
          en: '<strong>Witness of the Holy Spirit</strong><p class="text-gray-400">Problem: Different Protestant groups have different canons. History flatly denies unanimous Spirit confirmation.</p>',
          fr: "<strong>Témoignage du Saint-Esprit</strong><p class=\"text-gray-400\">Problème : Différents groupes protestants ont différents canons. L'histoire dément catégoriquement une confirmation unanime de l'Esprit.</p>",
          es: '<strong>Testimonio del Espíritu Santo</strong><p class="text-gray-400">Problema: Diferentes grupos protestantes tienen diferentes cánones. La historia niega rotundamente la confirmación unánime del Espíritu.</p>',
          de: '<strong>Zeugnis des Heiligen Geistes</strong><p class="text-gray-400">Problem: Verschiedene protestantische Gruppen haben unterschiedliche Kanons. Die Geschichte leugnet rundweg eine einstimmige Bestätigung durch den Geist.</p>',
        },
        a4: {
          en: '<strong>Church Councils?</strong><p class="text-gray-400">Problem: If you trust the Church to define the NT canon, why reject its definition of the OT canon (with Deuterocanonicals)?</p>',
          fr: "<strong>Conciles de l'Église ?</strong><p class=\"text-gray-400\">Problème : Si vous faites confiance à l'Église pour définir le canon du NT, pourquoi rejeter sa définition du canon de l'AT (avec les Deutérocanoniques) ?</p>",
          es: '<strong>¿Concilios de la Iglesia?</strong><p class="text-gray-400">Problema: Si confías en la Iglesia para definir el canon del NT, ¿por qué rechazar su definición del canon del AT (con los Deuterocanónicos)?</p>',
          de: '<strong>Kirchenkonzilien?</strong><p class="text-gray-400">Problem: Wenn Sie der Kirche vertrauen, den NT-Kanon zu definieren, warum lehnen Sie ihre Definition des AT-Kanons (mit Deuterokanonika) ab?</p>',
        },
      },
      solution: {
        heading: {
          en: "The Catholic Solution:",
          fr: "La Solution Catholique :",
          es: "La Solución Católica:",
          de: "Die Katholische Lösung:",
        },
        p1: {
          en: "Christ established a Church with divine authority. That Church, guided by the Holy Spirit, discerned the canon over time through councils (Rome AD 382, Hippo 393, Carthage 397, Trent 1546).",
          fr: "Le Christ a établi une Église avec une autorité divine. Cette Église, guidée par le Saint-Esprit, a discerné le canon au fil du temps à travers les conciles (Rome 382, Hippone 393, Carthage 397, Trente 1546).",
          es: "Cristo estableció una Iglesia con autoridad divina. Esa Iglesia, guiada por el Espíritu Santo, discernió el canon a lo largo del tiempo a través de concilios (Roma 382 d.C., Hipona 393, Cartago 397, Trento 1546).",
          de: "Christus hat eine Kirche mit göttlicher Autorität gegründet. Diese Kirche, geleitet vom Heiligen Geist, hat den Kanon im Laufe der Zeit durch Konzilien erkannt (Rom 382 n. Chr., Hippo 393, Karthago 397, Trient 1546).",
        },
        quote: {
          en: '"Once you identify that Church, the canon question is easy. It comes with the package."',
          fr: "« Une fois que vous identifiez cette Église, la question du canon est facile. Elle vient avec le paquet. »",
          es: '"Una vez que identificas esa Iglesia, la cuestión del canon es fácil. Viene con el paquete."',
          de: '„Sobald Sie diese Kirche identifizieren, ist die Kanonfrage einfach. Sie ist Teil des Pakets."',
        },
      },
    },

    arg4: {
      heading: {
        en: "4. No Historical Moment for Its Inception",
        fr: "4. Aucun Moment Historique pour sa Création",
        es: "4. Ningún Momento Histórico para su Inicio",
        de: "4. Kein Historischer Moment für seine Entstehung",
      },
      p1: {
        en: "This argument builds on the previous historical critiques by posing a devastating question:",
        fr: "Cet argument s'appuie sur les critiques historiques précédentes en posant une question dévastatrice :",
        es: "Este argumento se basa en las críticas históricas anteriores al plantear una pregunta devastadora:",
        de: "Dieses Argument baut auf den früheren historischen Kritiken auf, indem es eine verheerende Frage stellt:",
      },
      q1: {
        en: "When did Sola Scriptura become true?",
        fr: "Quand Sola Scriptura est-elle devenue vraie ?",
        es: "¿Cuándo se volvió verdad Sola Scriptura?",
        de: "Wann wurde Sola Scriptura wahr?",
      },
      p2: {
        en: "If the early Church didn't teach it, if the canon wasn't established yet, and if Christ did not command it— <strong>then at what point did this doctrine become binding on Christians?</strong>",
        fr: "Si l'Église primitive ne l'a pas enseignée, si le canon n'était pas encore établi, et si le Christ ne l'a pas commandée — <strong>alors à quel moment cette doctrine est-elle devenue contraignante pour les chrétiens ?</strong>",
        es: "Si la Iglesia primitiva no la enseñó, si el canon aún no estaba establecido, y si Cristo no lo ordenó— <strong>¿entonces en qué momento se volvió esta doctrina vinculante para los cristianos?</strong>",
        de: "Wenn die frühe Kirche es nicht lehrte, wenn der Kanon noch nicht etabliert war und wenn Christus es nicht befohlen hat – <strong>zu welchem Zeitpunkt wurde diese Lehre dann für Christen verbindlich?</strong>",
      },
      quote1: {
        en: "\"Sola Scriptura wasn't practiced in the early Church… There was a point during the life of the Church that the New Testament hadn't even been written yet.\"",
        fr: "« Sola Scriptura n'était pas pratiquée dans l'Église primitive... Il y a eu un moment dans la vie de l'Église où le Nouveau Testament n'avait même pas encore été écrit. »",
        es: '"Sola Scriptura no se practicaba en la Iglesia primitiva... Hubo un punto durante la vida de la Iglesia en que el Nuevo Testamento ni siquiera se había escrito todavía."',
        de: '„Sola Scriptura wurde in der frühen Kirche nicht praktiziert... Es gab einen Punkt im Leben der Kirche, an dem das Neue Testament noch nicht einmal geschrieben war."',
      },
      historicalProblem: {
        heading: {
          en: "This Raises a Major Historical Problem",
          fr: "Cela Soulève un Problème Historique Majeur",
          es: "Esto Plantea un Problema Histórico Importante",
          de: "Dies Wirft ein Großes Historisches Problem Auf",
        },
        p1: {
          en: 'Doctrinal truths—especially core ones—don\'t just "fade in." They are <strong>taught</strong>, <strong>instituted</strong>, or <strong>revealed</strong>. Yet Sola Scriptura lacks:',
          fr: "Les vérités doctrinales — en particulier les fondamentales — n'apparaissent pas simplement en « fondu ». Elles sont <strong>enseignées</strong>, <strong>instituées</strong> ou <strong>révélées</strong>. Pourtant, Sola Scriptura manque de :",
          es: 'Las verdades doctrinales—especialmente las centrales—no simplemente "aparecen gradualmente". Son <strong>enseñadas</strong>, <strong>instituidas</strong> o <strong>reveladas</strong>. Sin embargo, a Sola Scriptura le falta:',
          de: 'Lehrwahrheiten – besonders Kernwahrheiten – „blenden" nicht einfach ein. Sie werden <strong>gelehrt</strong>, <strong>eingesetzt</strong> oder <strong>offenbart</strong>. Doch Sola Scriptura fehlt:',
        },
        b1: {
          en: "A divine institution",
          fr: "Une institution divine",
          es: "Una institución divina",
          de: "Eine göttliche Einsetzung",
        },
        b2: {
          en: "A historical origin",
          fr: "Une origine historique",
          es: "Un origen histórico",
          de: "Ein historischer Ursprung",
        },
        b3: {
          en: "A transitional moment of doctrinal change",
          fr: "Un moment de transition de changement doctrinal",
          es: "Un momento de transición de cambio doctrinal",
          de: "Ein Übergangsmoment des Lehrwandels",
        },
        quote1: {
          en: "\"A fundamental shift in authority like this can't just gradually occur. It's not the kind of thing that just fades in like a sunrise.\"",
          fr: "« Un changement fondamental d'autorité comme celui-ci ne peut pas se produire progressivement. Ce n'est pas le genre de chose qui apparaît en fondu comme un lever de soleil. »",
          es: '"Un cambio fundamental en la autoridad como este no puede simplemente ocurrir gradualmente. No es el tipo de cosa que simplemente aparece como un amanecer."',
          de: '„Eine grundlegende Autoritätsverschiebung wie diese kann nicht einfach allmählich geschehen. Es ist nicht die Art von Ding, das einfach wie ein Sonnenaufgang einblendet."',
        },
        p2: {
          en: "If the Church once had authoritative teachers and apostolic tradition, when did that stop? At what point did the Church supposedly lose its magisterial authority and become subject to private interpretation?",
          fr: "Si l'Église avait autrefois des enseignants faisant autorité et une tradition apostolique, quand cela s'est-il arrêté ? À quel moment l'Église est-elle censée avoir perdu son autorité magistérielle et être devenue sujette à l'interprétation privée ?",
          es: "Si la Iglesia alguna vez tuvo maestros autorizados y tradición apostólica, ¿cuándo se detuvo eso? ¿En qué momento la Iglesia supuestamente perdió su autoridad magisterial y se volvió sujeta a la interpretación privada?",
          de: "Wenn die Kirche einst autoritative Lehrer und apostolische Tradition hatte, wann hörte das auf? Zu welchem Zeitpunkt verlor die Kirche angeblich ihre lehramtliche Autorität und wurde der privaten Interpretation unterworfen?",
        },
        quote2: {
          en: "\"Either the Church had a living authoritative teaching office or it didn't. Either Christians were bound to follow that authority or they weren't.\"",
          fr: "« Soit l'Église avait un office d'enseignement vivant et faisant autorité, soit elle n'en avait pas. Soit les chrétiens étaient tenus de suivre cette autorité, soit ils ne l'étaient pas. »",
          es: '"O la Iglesia tenía un oficio de enseñanza vivo y autorizado o no lo tenía. O los cristianos estaban obligados a seguir esa autoridad o no lo estaban."',
          de: '„Entweder hatte die Kirche ein lebendiges, autoritatives Lehramt oder nicht. Entweder waren Christen verpflichtet, dieser Autorität zu folgen, oder sie waren es nicht."',
        },
      },
      options: {
        heading: {
          en: "Suggested Protestant Options—And Why They Fail",
          fr: "Options Protestantes Suggérées — Et Pourquoi Elles Échouent",
          es: "Opciones Protestantes Sugeridas—Y Por Qué Fallan",
          de: "Vorgeschlagene Protestantische Optionen – Und Warum Sie Scheitern",
        },
        p1: {
          en: "Let's consider when Protestants might say Sola Scriptura started:",
          fr: "Considérons quand les protestants pourraient dire que Sola Scriptura a commencé :",
          es: "Consideremos cuándo podrían decir los protestantes que comenzó Sola Scriptura:",
          de: "Betrachten wir, wann Protestanten sagen könnten, dass Sola Scriptura begann:",
        },
        a: {
          heading: {
            en: "A. After the Last Apostolic Writing (Revelation)",
            fr: "A. Après le Dernier Écrit Apostolique (Apocalypse)",
            es: "A. Después del Último Escrito Apostólico (Apocalipsis)",
            de: "A. Nach der Letzten Apostolischen Schrift (Offenbarung)",
          },
          p1: {
            en: "But this fails because:",
            fr: "Mais cela échoue car :",
            es: "Pero esto falla porque:",
            de: "Aber das scheitert, weil:",
          },
          b1: {
            en: "There's <strong>no evidence</strong> the Apostles taught Scripture would be the only authority.",
            fr: "Il n'y a <strong>aucune preuve</strong> que les Apôtres aient enseigné que l'Écriture sería la seule autorité.",
            es: "No hay <strong>evidencia</strong> de que los Apóstoles enseñaran que la Escritura sería la única autoridad.",
            de: "Es gibt <strong>keine Beweise</strong> dafür, dass die Apostel lehrten, die Schrift wäre die einzige Autorität.",
          },
          b2: {
            en: "The Apostles continued teaching orally after writing Scripture.",
            fr: "Les Apôtres ont continué à enseigner oralement après avoir écrit l'Écriture.",
            es: "Los Apóstoles continuaron enseñando oralmente después de escribir la Escritura.",
            de: "Die Apostel lehrten weiterhin mündlich, nachdem sie die Schrift geschrieben hatten.",
          },
          b3: {
            en: "Oral tradition <strong>continued alongside Scripture</strong> for generations.",
            fr: "La tradition orale <strong>a continué aux côtés de l'Écriture</strong> pendant des générations.",
            es: "La tradición oral <strong>continuó junto a la Escritura</strong> por generaciones.",
            de: "Die mündliche Überlieferung <strong>bestand neben der Schrift</strong> über Generationen weiter.",
          },
          quote: {
            en: "\"Did the Apostles wake up the next morning and say, 'Well, I guess oral tradition and Church authority no longer matter'? Of course not.\"",
            fr: "« Les Apôtres se sont-ils réveillés le lendemain matin en se disant : 'Bon, je suppose que la tradition orale et l'autorité de l'Église n'ont plus d'importance' ? Bien sûr que non. »",
            es: `¿Se despertaron los Apóstoles a la mañana siguiente y dijeron: 'Bueno, supongo que la tradición oral y la autoridad de la Iglesia ya no importan'? Por supuesto que no.`,
            de: "„Sind die Apostel am nächsten Morgen aufgewacht und haben gesagt: ,Nun, ich denke, mündliche Überlieferung und Kirchenautorität spielen keine Rolle mehr'? Natürlich nicht.\"",
          },
        },
        b: {
          heading: {
            en: "B. When the Canon Was Finalized",
            fr: "B. Lorsque le Canon a été Finalisé",
            es: "B. Cuando se Finalizó el Canon",
            de: "B. Als der Kanon Abgeschlossen Wurde",
          },
          p1: {
            en: "Again, this makes no sense. The canon wasn't formally settled for centuries, and:",
            fr: "Encore une fois, cela n'a aucun sens. Le canon n'a pas été formellement établi avant des siècles, et :",
            es: "Nuevamente, esto no tiene sentido. El canon no se estableció formalmente durante siglos, y:",
            de: "Wiederum ergibt das keinen Sinn. Der Kanon wurde jahrhundertelang nicht formell festgelegt, und:",
          },
          b1: {
            en: "The Church still claimed authority.",
            fr: "L'Église revendiquait toujours l'autorité.",
            es: "La Iglesia todavía reclamaba autoridad.",
            de: "Die Kirche beanspruchte immer noch Autorität.",
          },
          b2: {
            en: "Tradition and councils remained central.",
            fr: "La tradition et les conciles restaient centraux.",
            es: "La tradición y los concilios seguían siendo centrales.",
            de: "Tradition und Konzilien blieben zentral.",
          },
          b3: {
            en: 'There\'s <strong>no doctrinal decree</strong> saying, "From now on, only Scripture is infallible."',
            fr: "Il n'y a <strong>aucun décret doctrinal</strong> disant : « Désormais, seule l'Écriture est infaillible. »",
            es: 'No hay <strong>ningún decreto doctrinal</strong> que diga: "De ahora en adelante, solo la Escritura es infalible".',
            de: 'Es gibt <strong>kein Lehrentscheid</strong>, der besagt: „Von nun an ist nur die Schrift unfehlbar."',
          },
        },
        c: {
          heading: {
            en: "C. At the Reformation?",
            fr: "C. À la Réforme ?",
            es: "C. ¿En la Reforma?",
            de: "C. Zur Zeit der Reformation?",
          },
          p1: {
            en: "Even worse. If Sola Scriptura began with Luther:",
            fr: "Encore pire. Si Sola Scriptura a commencé avec Luther :",
            es: "Peor aún. Si Sola Scriptura comenzó con Lutero:",
            de: "Noch schlimmer. Wenn Sola Scriptura mit Luther begann:",
          },
          b1: {
            en: "Then it would be a <strong>novel doctrine</strong> invented 1,500 years after Christ.",
            fr: "Alors ce serait une <strong>doctrine nouvelle</strong> inventée 1 500 ans après le Christ.",
            es: "Entonces sería una <strong>doctrina novedosa</strong> inventada 1.500 años después de Cristo.",
            de: "Dann wäre es eine <strong>neue Lehre</strong>, die 1.500 Jahre nach Christus erfunden wurde.",
          },
          b2: {
            en: "It would contradict its own premise of being rooted in the Bible.",
            fr: "Elle contredirait sa propre prémisse d'être enracinée dans la Bible.",
            es: "Contradiría su propia premisa de estar arraigada en la Biblia.",
            de: "Es würde seiner eigenen Prämisse widersprechen, in der Bibel verwurzelt zu sein.",
          },
          b3: {
            en: "Protestants themselves claim Sola Scriptura existed long before Luther.",
            fr: "Les protestants eux-mêmes affirment que Sola Scriptura existait bien avant Luther.",
            es: "Los propios protestantes afirman que Sola Scriptura existía mucho antes de Lutero.",
            de: "Protestanten selbst behaupten, Sola Scriptura habe lange vor Luther existiert.",
          },
          quote: {
            en: '"If Sola Scriptura was true, it must have been true far longer. The fact is, there is no historical moment where Sola Scriptura is clearly taking effect—and that should make us very suspicious."',
            fr: "« Si Sola Scriptura était vraie, elle devait l'être depuis bien plus longtemps. Le fait est qu'il n'y a aucun moment historique où Sola Scriptura prend clairement effet — et cela devrait nous rendre très méfiants. »",
            es: '"Si Sola Scriptura fuera verdad, debe haber sido verdad mucho antes. El hecho es que no hay ningún momento histórico en el que Sola Scriptura esté claramente vigente—y eso debería hacernos muy sospechosos."',
            de: '„Wenn Sola Scriptura wahr wäre, müsste sie schon viel länger wahr gewesen sein. Tatsache ist, es gibt keinen historischen Moment, in dem Sola Scriptura eindeutig wirksam wird – und das sollte uns sehr misstrauisch machen."',
          },
        },
      },
      analogy: {
        heading: {
          en: "The False Analogy: Beards and Doctrine",
          fr: "La Fausse Analogie : Barbes et Doctrine",
          es: "La Falsa Analogía: Barbas y Doctrina",
          de: "Die Falsche Analogie: Bärte und Lehre",
        },
        p1: {
          en: "Some Protestants claim, \"Just because we don't know when it started doesn't mean it's not true. Like a beard—you don't know the moment stubble becomes a beard.\"",
          fr: "Certains protestants affirment : « Ce n'est pas parce que nous ne savons pas quand cela a commencé que ce n'est pas vrai. Comme une barbe — vous ne savez pas à quel moment le chaume devient une barbe. »",
          es: 'Algunos protestantes afirman: "Solo porque no sepamos cuándo comenzó no significa que no sea verdad. Como una barba—no sabes el momento en que la barba incipiente se convierte en barba".',
          de: 'Einige Protestanten behaupten: „Nur weil wir nicht wissen, wann es anfing, heißt das nicht, dass es nicht wahr ist. Wie ein Bart – man weiß nicht, wann Stoppeln zu einem Bart werden."',
        },
        quote1: {
          en: '"This sounds reasonable until you realize that doctrinal principles don\'t work like beards."',
          fr: "« Cela semble raisonnable jusqu'à ce que vous réalisiez que les principes doctrinaux ne fonctionnent pas comme des barbes. »",
          es: '"Esto suena razonable hasta que te das cuenta de que los principios doctrinales no funcionan como las barbas."',
          de: '„Das klingt vernünftig, bis man merkt, dass Lehrprinzipien nicht wie Bärte funktionieren."',
        },
        b1: {
          en: "A beard is <strong>gradual</strong>, <strong>vague</strong>, and <strong>subjective</strong>.",
          fr: "Une barbe est <strong>progressive</strong>, <strong>vague</strong> et <strong>subjective</strong>.",
          es: "Una barba es <strong>gradual</strong>, <strong>vaga</strong> y <strong>subjetiva</strong>.",
          de: "Ein Bart ist <strong>allmählich</strong>, <strong>vage</strong> und <strong>subjektiv</strong>.",
        },
        b2: {
          en: "Authority is <strong>binary</strong>: either it exists or it doesn't.",
          fr: "L'autorité est <strong>binaire</strong> : soit elle existe, soit elle n'existe pas.",
          es: "La autoridad es <strong>binaria</strong>: o existe o no existe.",
          de: "Autorität ist <strong>binär</strong>: entweder sie existiert oder nicht.",
        },
        quote2: {
          en: `"You can't just fade out of being an authority. You either are in authority or you're not."`,
          fr: "« On ne peut pas simplement cesser d'être une autorité en fondu. Soit vous avez l'autorité, soit vous ne l'avez pas. »",
          es: "No puedes simplemente dejar de ser una autoridad gradualmente. O tienes autoridad o no la tienes.",
          de: `„Man kann nicht einfach aus einer Autoritätsposition 'ausblenden'. Entweder man ist eine Autorität oder man ist es nicht."`,
        },
      },
      conclusion: {
        heading: {
          en: "Conclusion: Sola Scriptura Has No Origin",
          fr: "Conclusion : Sola Scriptura n'a pas d'Origine",
          es: "Conclusión: Sola Scriptura no Tiene Origen",
          de: "Schlussfolgerung: Sola Scriptura Hat Keinen Ursprung",
        },
        p1: {
          en: "If there is:",
          fr: "S'il n'y a :",
          es: "Si hay:",
          de: "Wenn es gibt:",
        },
        b1: {
          en: "No origin in Scripture,",
          fr: "Aucune origine dans l'Écriture,",
          es: "Ningún origen en la Escritura,",
          de: "Keinen Ursprung in der Schrift,",
        },
        b2: {
          en: "No moment in history,",
          fr: "Aucun moment dans l'histoire,",
          es: "Ningún momento en la historia,",
          de: "Keinen Moment in der Geschichte,",
        },
        b3: {
          en: "No theological reason for its rise,",
          fr: "Aucune raison théologique à son apparition,",
          es: "Ninguna razón teológica para su surgimiento,",
          de: "Keinen theologischen Grund für ihre Entstehung,",
        },
        p2: {
          en: "Then we must conclude that it never was part of the Christian deposit of faith.",
          fr: "Alors nous devons conclure qu'elle n'a jamais fait partie du dépôt de la foi chrétienne.",
          es: "Entonces debemos concluir que nunca fue parte del depósito de la fe cristiana.",
          de: "Dann müssen wir schlussfolgern, dass es niemals Teil des christlichen Glaubensguts war.",
        },
        quote: {
          en: '"The fact that no one can say when Sola Scriptura became true suggests it was never true to begin with."',
          fr: "« Le fait que personne ne puisse dire quand Sola Scriptura est devenue vraie suggère qu'elle ne l'a jamais été. »",
          es: '"El hecho de que nadie pueda decir cuándo Sola Scriptura se volvió verdad sugiere que nunca fue verdad para empezar."',
          de: '„Die Tatsache, dass niemand sagen kann, wann Sola Scriptura wahr wurde, legt nahe, dass es von Anfang an nie wahr war."',
        },
      },
    },
    arg3: {
      heading: {
        en: "3. It Is an Incomplete and Imperfect System",
        fr: "3. C'est un Système Incomplet et Imparfait",
        es: "3. Es un Sistema Incompleto e Imperfecto",
        de: "3. Es ist ein Unvollständiges und Unvollkommenes System",
      },
      p1: {
        en: "Even if we were to assume that Scripture is perfect and divinely inspired, <strong>Sola Scriptura is still an imperfect system</strong>—because it is incomplete. Scripture alone, though sufficient in content, cannot operate in a vacuum. It requires interpretation, and interpretation requires authority.",
        fr: "Même si nous devions supposer que l'Écriture est parfaite et divinement inspirée, <strong>Sola Scriptura est toujours un système imparfait</strong> — car il est incomplet. L'Écriture seule, bien que suffisante en contenu, ne peut fonctionner dans le vide. Elle nécessite une interprétation, et l'interprétation nécessite une autorité.",
        es: "Incluso si asumiéramos que la Escritura es perfecta y divinamente inspirada, <strong>Sola Scriptura sigue siendo un sistema imperfecto</strong>—porque está incompleto. Solo la Escritura, aunque suficiente en contenido, no puede operar en el vacío. Requiere interpretación, y la interpretación requiere autoridad.",
        de: "Selbst wenn wir annehmen würden, dass die Schrift vollkommen und göttlich inspiriert ist, <strong>ist Sola Scriptura immer noch ein unvollkommenes System</strong> – weil es unvollständig ist. Die Schrift allein, obwohl inhaltlich ausreichend, kann nicht im luftleeren Raum agieren. Sie erfordert Interpretation, und Interpretation erfordert Autorität.",
      },
      quote1: {
        en: '"Think of Scripture like the engine of a perfect car. It might be flawless—powerful, precisely engineered. But what happens if you have that perfect engine sitting in your driveway without wheels or a steering wheel? It\'s not going anywhere."',
        fr: "« Pensez à l'Écriture comme au moteur d'une voiture parfaite. Il est peut-être sans défaut — puissant, conçu avec précision. Mais que se passe-t-il si vous avez ce moteur parfait dans votre allée sans roues ni volant ? Il ne va nulle part. »",
        es: '"Piensa en la Escritura como el motor de un coche perfecto. Puede que sea impecable—potente, diseñado con precisión. Pero, ¿qué pasa si tienes ese motor perfecto en tu entrada sin ruedas ni volante? No va a ninguna parte."',
        de: '„Stellen Sie sich die Schrift wie den Motor eines perfekten Autos vor. Er mag makellos sein – leistungsstark, präzise konstruiert. Aber was passiert, wenn Sie diesen perfekten Motor ohne Räder oder Lenkrad in Ihrer Einfahrt stehen haben? Er kommt nicht vom Fleck."',
      },
      p2: {
        en: "Scripture is an engine without wheels. Without a living interpretive authority and a stable tradition, Scripture cannot function as God intended it to.",
        fr: "L'Écriture est un moteur sans roues. Sans une autorité interprétative vivante et une tradition stable, l'Écriture ne peut pas fonctionner comme Dieu l'a voulu.",
        es: "La Escritura es un motor sin ruedas. Sin una autoridad interpretativa viva y una tradición estable, la Escritura no puede funcionar como Dios pretendía.",
        de: "Die Schrift ist ein Motor ohne Räder. Ohne eine lebendige interpretative Autorität und eine stabile Tradition kann die Schrift nicht so funktionieren, wie Gott es beabsichtigt hat.",
      },
      perfectText: {
        heading: {
          en: "Why a Perfect Text Isn't Enough",
          fr: "Pourquoi un Texte Parfait ne Suffit Pas",
          es: "Por Qué un Texto Perfecto no es Suficiente",
          de: "Warum ein Perfekter Text Nicht Ausreicht",
        },
        p1: {
          en: "A divinely inspired text:",
          fr: "Un texte divinement inspiré :",
          es: "Un texto divinamente inspirado:",
          de: "Ein göttlich inspirierter Text:",
        },
        b1: {
          en: "Still needs a human interpreter.",
          fr: "A toujours besoin d'un interprète humain.",
          es: "Sigue necesitando un intérprete humano.",
          de: "Braucht immer noch einen menschlichen Interpreten.",
        },
        b2: {
          en: "Can be misunderstood, twisted, or taken out of context.",
          fr: "Peut être mal compris, tordu ou sorti de son contexte.",
          es: "Puede ser malinterpretado, tergiversado o sacado de contexto.",
          de: "Kann missverstanden, verdreht oder aus dem Kontext gerissen werden.",
        },
        b3: {
          en: "Cannot enforce its own meaning or resolve disagreements.",
          fr: "Ne peut pas imposer sa propre signification ou résoudre les désaccords.",
          es: "No puede imponer su propio significado o resolver desacuerdos.",
          de: "Kann seine eigene Bedeutung nicht durchsetzen oder Meinungsverschiedenheiten lösen.",
        },
        quote: {
          en: '"A text, no matter how perfect, doesn\'t interpret itself. It requires readers, and readers inevitably bring misunderstandings, biases, and disagreements."',
          fr: "« Un texte, aussi parfait soit-il, ne s'interprète pas lui-même. Il nécessite des lecteurs, et les lecteurs apportent inévitablement des incompréhensions, des préjugés et des désaccords. »",
          es: '"Un texto, por perfecto que sea, no se interpreta a sí mismo. Requiere lectores, y los lectores inevitablemente traen malentendidos, sesgos y desacuerdos."',
          de: '„Ein Text, egal wie vollkommen, interpretiert sich nicht selbst. Er erfordert Leser, und Leser bringen unweigerlich Missverständnisse, Vorurteile und Meinungsverschiedenheiten mit."',
        },
      },
      fear: {
        heading: {
          en: "The Protestant Fear of Human Error",
          fr: "La Peur Protestante de l'Erreur Humaine",
          es: "El Miedo Protestante al Error Humano",
          de: "Die Protestantische Angst vor Menschlichem Versagen",
        },
        p1: {
          en: "Many Protestants reject the Church's Magisterium or Tradition out of fear that these human institutions introduce error. But that fear leads to a worse result: <strong>chaos and theological relativism</strong>. In trying to avoid human authority, Sola Scriptura leaves each believer with no authority but themselves.",
          fr: "De nombreux protestants rejettent le Magistère de l'Église ou la Tradition par crainte que ces institutions humaines n'introduisent l'erreur. Mais cette peur conduit à un résultat pire : <strong>le chaos et le relativisme théologique</strong>. En essayant d'éviter l'autorité humaine, Sola Scriptura laisse chaque croyant sans autre autorité que lui-même.",
          es: "Muchos protestantes rechazan el Magisterio de la Iglesia o la Tradición por temor a que estas instituciones humanas introduzcan el error. Pero ese miedo lleva a un resultado peor: <strong>caos y relativismo teológico</strong>. Al tratar de evitar la autoridad humana, Sola Scriptura deja a cada creyente sin más autoridad que él mismo.",
          de: "Viele Protestanten lehnen das Lehramt der Kirche oder die Tradition aus Angst ab, dass diese menschlichen Institutionen Fehler einführen. Aber diese Angst führt zu einem schlimmeren Ergebnis: <strong>Chaos und theologischer Relativismus</strong>. Beim Versuch, menschliche Autorität zu vermeiden, lässt Sola Scriptura jeden Gläubigen ohne andere Autorität als sich selbst zurück.",
        },
        b1: {
          en: "Instead of one trusted interpreter, Protestants now face tens of thousands.",
          fr: "Au lieu d'un interprète de confiance, les protestants font maintenant face à des dizaines de milliers.",
          es: "En lugar de un intérprete de confianza, los protestantes ahora se enfrentan a decenas de miles.",
          de: "Statt eines vertrauenswürdigen Interpreten stehen Protestanten nun Zehntausenden gegenüber.",
        },
        b2: {
          en: "Instead of resolving disputes, disagreements multiply.",
          fr: "Au lieu de résoudre les différends, les désaccords se multiplient.",
          es: "En lugar de resolver disputas, los desacuerdos se multiplican.",
          de: "Statt Streitigkeiten beizulegen, vervielfachen sich die Meinungsverschiedenheiten.",
        },
        quote: {
          en: "\"That's precisely why Protestantism splintered into thousands of denominations, as we've already shown.\"",
          fr: "« C'est précisément pourquoi le protestantisme s'est fragmenté en milliers de dénominations, comme nous l'avons déjà montré. »",
          es: '"Es precisamente por eso que el protestantismo se fragmentó en miles de denominaciones, como ya hemos mostrado."',
          de: '„Genau deshalb zersplitterte der Protestantismus in Tausende von Konfessionen, wie wir bereits gezeigt haben."',
        },
      },
      stm: {
        heading: {
          en: "STM: A Principled System of Authority",
          fr: "STM : Un Système d'Autorité Fondé sur des Principes",
          es: "STM: Un Sistema de Autoridad Basado en Principios",
          de: "STM: Ein Prinzipienbasiertes Autoritätssystem",
        },
        p1: {
          en: "The Catholic model— <strong>Scripture, Tradition, and the Magisterium (STM)</strong>— is not only historically and theologically grounded but is <strong>structurally superior</strong>.",
          fr: "Le modèle catholique — <strong>Écriture, Tradition et Magistère (STM)</strong> — n'est pas seulement fondé historiquement et théologiquement, il est <strong>structurellement supérieur</strong>.",
          es: "El modelo católico— <strong>Escritura, Tradición y Magisterio (STM)</strong>— no solo está fundamentado histórica y teológicamente, sino que es <strong>estructuralmente superior</strong>.",
          de: "Das katholische Modell – <strong>Schrift, Tradition und Lehramt (STM)</strong> – ist nicht nur historisch und theologisch fundiert, sondern auch <strong>strukturell überlegen</strong>.",
        },
        p2: {
          en: "Let's break it down:",
          fr: "Détaillons-le :",
          es: "Desglosémoslo:",
          de: "Lassen Sie es uns aufschlüsseln:",
        },
        table: {
          header1: {
            en: "Element",
            fr: "Élément",
            es: "Elemento",
            de: "Element",
          },
          header2: {
            en: "Role",
            fr: "Rôle",
            es: "Rol",
            de: "Rolle",
          },
          row1_1: {
            en: "Scripture",
            fr: "Écriture",
            es: "Escritura",
            de: "Schrift",
          },
          row1_2: {
            en: "The inspired, inerrant Word of God",
            fr: "La Parole de Dieu inspirée et inerrante",
            es: "La Palabra de Dios inspirada e inerrante",
            de: "Das inspirierte, irrtumslose Wort Gottes",
          },
          row2_1: {
            en: "Tradition",
            fr: "Tradition",
            es: "Tradición",
            de: "Tradition",
          },
          row2_2: {
            en: "The lived and preserved teaching of the Apostles",
            fr: "L'enseignement vécu et préservé des Apôtres",
            es: "La enseñanza vivida y preservada de los Apóstoles",
            de: "Die gelebte und bewahrte Lehre der Apostel",
          },
          row3_1: {
            en: "Magisterium",
            fr: "Magistère",
            es: "Magisterio",
            de: "Lehramt",
          },
          row3_2: {
            en: "The Church's teaching authority, guided by the Holy Spirit",
            fr: "L'autorité d'enseignement de l'Église, guidée par le Saint-Esprit",
            es: "La autoridad de enseñanza de la Iglesia, guiada por el Espíritu Santo",
            de: "Die Lehrautorität der Kirche, geleitet vom Heiligen Geist",
          },
        },
        p3: {
          en: "This system is <strong>self-consistent, coherent, and incapable of improvement</strong>.",
          fr: "Ce système est <strong>cohérent, logique et incapable d'amélioration</strong>.",
          es: "Este sistema es <strong>autoconsistente, coherente e incapaz de mejora</strong>.",
          de: "Dieses System ist <strong>selbstkonsistent, kohärent und nicht verbesserungsfähig</strong>.",
        },
        quote: {
          en: '"Together, these three form a system that\'s self-sufficient, coherent, and incapable of improvement— precisely what we expect a perfect God to institute for his Church."',
          fr: "« Ensemble, ces trois éléments forment un système autosuffisant, cohérent et incapable d'amélioration — précisément ce que nous attendons d'un Dieu parfait qu'Il institue pour son Église. »",
          es: '"Juntos, estos tres forman un sistema autosuficiente, coherente e incapaz de mejora— precisamente lo que esperamos que un Dios perfecto instituya para su Iglesia."',
          de: '„Zusammen bilden diese drei ein System, das autark, kohärent und nicht verbesserungsfähig ist – genau das, was wir von einem vollkommenen Gott erwarten, dass er es für seine Kirche einsetzt."',
        },
      },
      trinity: {
        heading: {
          en: "The Theological Analogy: The Trinity",
          fr: "L'Analogie Théologique : La Trinité",
          es: "La Analogía Teológica: La Trinidad",
          de: "Die Theologische Analogie: Die Trinität",
        },
        p1: {
          en: "Some scholars, like Richard Swinburne, argue that the Trinity is the <strong>minimal perfect structure</strong> necessary to express divine love. One person cannot love; two can only love each other. Three persons make communal love possible.",
          fr: "Certains érudits, comme Richard Swinburne, soutiennent que la Trinité est la <strong>structure parfaite minimale</strong> nécessaire pour exprimer l'amour divin. Une personne ne peut pas aimer ; deux ne peuvent que s'aimer mutuellement. Trois personnes rendent possible l'amour communautaire.",
          es: "Algunos eruditos, como Richard Swinburne, argumentan que la Trinidad es la <strong>estructura perfecta mínima</strong> necesaria para expresar el amor divino. Una persona no puede amar; dos solo pueden amarse mutuamente. Tres personas hacen posible el amor comunitario.",
          de: "Einige Gelehrte, wie Richard Swinburne, argumentieren, dass die Trinität die <strong>minimale perfekte Struktur</strong> ist, die notwendig ist, um göttliche Liebe auszudrücken. Eine Person kann nicht lieben; zwei können sich nur gegenseitig lieben. Drei Personen ermöglichen gemeinschaftliche Liebe.",
        },
        p2: {
          en: "Likewise:",
          fr: "De même :",
          es: "Igualmente:",
          de: "Ebenso:",
        },
        b1: {
          en: "STM is the minimal perfect structure for doctrinal authority.",
          fr: "STM est la structure parfaite minimale pour l'autorité doctrinale.",
          es: "STM es la estructura perfecta mínima para la autoridad doctrinal.",
          de: "STM ist die minimale perfekte Struktur für lehrmäßige Autorität.",
        },
        b2: {
          en: "Remove one part (e.g., Tradition or the Magisterium), and the system collapses.",
          fr: "Supprimez une partie (par ex., la Tradition ou le Magistère), et le système s'effondre.",
          es: "Elimina una parte (p. ej., la Tradición o el Magisterio), y el sistema se colapsa.",
          de: "Entfernt man einen Teil (z. B. Tradition oder Lehramt), bricht das System zusammen.",
        },
        b3: {
          en: "Add something else, and it becomes redundant.",
          fr: "Ajoutez quelque chose d'autre, et cela devient redondant.",
          es: "Añade algo más, y se vuelve redundante.",
          de: "Fügt man etwas anderes hinzu, wird es redundant.",
        },
        quote: {
          en: '"STM works exactly the same way. Take away Scripture, Tradition, or the Magisterium and you lose something vital. Add something else and you\'re just piling on redundancies."',
          fr: "« STM fonctionne exactement de la même manière. Retirez l'Écriture, la Tradition ou le Magistère et vous perdez quelque chose de vital. Ajoutez quelque chose d'autre et vous ne faites qu'accumuler des redondances. »",
          es: '"STM funciona exactamente de la misma manera. Quita la Escritura, la Tradición o el Magisterio y pierdes algo vital. Añade algo más y solo estás acumulando redundancias."',
          de: '„STM funktioniert genau auf die gleiche Weise. Nimm Schrift, Tradition oder Lehramt weg und du verlierst etwas Wesentliches. Füge etwas anderes hinzu und du häufst nur Redundanzen an."',
        },
      },
      scriptureSupports: {
        heading: {
          en: "Scripture Itself Supports STM, Not Sola Scriptura",
          fr: "L'Écriture Elle-même Soutient STM, Pas Sola Scriptura",
          es: "La Escritura Misma Apoya STM, No Sola Scriptura",
          de: "Die Schrift Selbst Unterstützt STM, Nicht Sola Scriptura",
        },
        b1: {
          en: '<strong>1 Timothy 3:15</strong>: "The Church of the living God, the pillar and foundation of truth"—not Scripture alone.',
          fr: "<strong>1 Timothée 3:15</strong> : « l'Église du Dieu vivant, la colonne et l'appui de la vérité » — et non l'Écriture seule.",
          es: '<strong>1 Timoteo 3:15</strong>: "la iglesia del Dios viviente, columna y baluarte de la verdad"—no solo la Escritura.',
          de: "<strong>1. Timotheus 3:15</strong>: „die Gemeinde des lebendigen Gottes, Pfeiler und Grundfeste der Wahrheit“ – nicht die Schrift allein.",
        },
        b2: {
          en: "In <strong>John 16:13</strong>, Jesus promises the Spirit will guide the Apostles into all truth.",
          fr: "Dans <strong>Jean 16:13</strong>, Jésus promet que l'Esprit guidera les Apôtres dans toute la vérité.",
          es: "En <strong>Juan 16:13</strong>, Jesús promete que el Espíritu guiará a los Apóstoles a toda la verdad.",
          de: "In <strong>Johannes 16:13</strong> verspricht Jesus, dass der Geist die Apostel in die ganze Wahrheit leiten wird.",
        },
        b3: {
          en: "In both <strong>Old and New Testaments</strong>, God uses living human authority—prophets, priests, apostles—to shepherd His people.",
          fr: "Dans l'<strong>Ancien et le Nouveau Testament</strong>, Dieu utilise une autorité humaine vivante — prophètes, prêtres, apôtres — pour paître Son peuple.",
          es: "Tanto en el <strong>Antiguo como en el Nuevo Testamento</strong>, Dios usa autoridad humana viva—profetas, sacerdotes, apóstoles—para pastorear a Su pueblo.",
          de: "Sowohl im <strong>Alten als auch im Neuen Testament</strong> benutzt Gott lebendige menschliche Autorität – Propheten, Priester, Apostel – um Sein Volk zu weiden.",
        },
        quote: {
          en: '"Even in the Old Testament, God never left his people with Scripture alone. He always guided them through living authorities."',
          fr: "« Même dans l'Ancien Testament, Dieu n'a jamais laissé son peuple avec l'Écriture seule. Il les a toujours guidés à travers des autorités vivantes. »",
          es: '"Incluso en el Antiguo Testamento, Dios nunca dejó a su pueblo solo con la Escritura. Siempre los guió a través de autoridades vivas."',
          de: '„Selbst im Alten Testament hat Gott sein Volk nie mit der Schrift allein gelassen. Er hat sie immer durch lebendige Autoritäten geführt."',
        },
      },
      objection: {
        heading: {
          en: 'Objection: "God Permitted Imperfection in the Old Covenant—Why Not Now?"',
          fr: "Objection : « Dieu a Permis l'Imperfection dans l'Ancienne Alliance — Pourquoi Pas Maintenant ? »",
          es: 'Objeción: "Dios Permitió la Imperfección en el Antiguo Pacto—¿Por Qué No Ahora?"',
          de: 'Einwand: „Gott Ließ Unvollkommenheit im Alten Bund zu – Warum Nicht Jetzt?"',
        },
        p1: {
          en: "Some might argue: if God allowed imperfect authority in the Old Testament, He could do the same in the New.",
          fr: "Certains pourraient soutenir : si Dieu a permis une autorité imparfaite dans l'Ancien Testament, Il pourrait faire de même dans le Nouveau.",
          es: "Algunos podrían argumentar: si Dios permitió una autoridad imperfecta en el Antiguo Testamento, Él podría hacer lo mismo en el Nuevo.",
          de: "Manche mögen argumentieren: Wenn Gott unvollkommene Autorität im Alten Testament zuließ, könnte Er dasselbe im Neuen tun.",
        },
        p2: {
          en: "But this misunderstands the nature of the Incarnation and the New Covenant:",
          fr: "Mais cela méconnaît la nature de l'Incarnation et de la Nouvelle Alliance :",
          es: "Pero esto malinterpreta la naturaleza de la Encarnación y el Nuevo Pacto:",
          de: "Aber das missversteht die Natur der Inkarnation und des Neuen Bundes:",
        },
        b1: {
          en: "God also permitted <strong>polygamy</strong>, <strong>slavery</strong>, and <strong>idolatry</strong> in the Old Testament. But Christ came not to preserve imperfection but to <strong>fulfill and perfect</strong>.",
          fr: "Dieu a également permis la <strong>polygamie</strong>, l'<strong>esclavage</strong> et l'<strong>idolâtrie</strong> dans l'Ancien Testament. Mais Christ n'est pas venu pour préserver l'imperfection mais pour <strong>accomplir et perfectionner</strong>.",
          es: "Dios también permitió la <strong>poligamia</strong>, la <strong>esclavitud</strong> y la <strong>idolatría</strong> en el Antiguo Testamento. Pero Cristo no vino a preservar la imperfección sino a <strong>cumplir y perfeccionar</strong>.",
          de: "Gott erlaubte auch <strong>Polygamie</strong>, <strong>Sklaverei</strong> und <strong>Götzendienst</strong> im Alten Testament. Aber Christus kam nicht, um Unvollkommenheit zu bewahren, sondern um zu <strong>erfüllen und zu vervollkommnen</strong>.",
        },
        quote: {
          en: '"Jesus didn\'t just hand out Bibles. He built a Church. He appointed living authorities and promised the Holy Spirit would guide them into all truth."',
          fr: "« Jésus n'a pas seulement distribué des Bibles. Il a bâti une Église. Il a nommé des autorités vivantes et a promis que le Saint-Esprit les guiderait dans toute la vérité. »",
          es: '"Jesús no solo repartió Biblias. Él construyó una Iglesia. Nombró autoridades vivas y prometió que el Espíritu Santo los guiaría a toda la verdad."',
          de: '„Jesus hat nicht einfach Bibeln verteilt. Er hat eine Kirche gebaut. Er hat lebendige Autoritäten ernannt und versprochen, dass der Heilige Geist sie in alle Wahrheit leiten würde."',
        },
      },
      finalAnalysis: {
        heading: {
          en: "Final Analysis",
          fr: "Analyse Finale",
          es: "Análisis Final",
          de: "Abschließende Analyse",
        },
        p1: {
          en: "Sola Scriptura is not only:",
          fr: "Sola Scriptura n'est pas seulement :",
          es: "Sola Scriptura no es solo:",
          de: "Sola Scriptura ist nicht nur:",
        },
        b1: {
          en: "Theologically weak",
          fr: "Théologiquement faible",
          es: "Teológicamente débil",
          de: "Theologisch schwach",
        },
        b2: {
          en: "Historically unfounded",
          fr: "Historiquement infondée",
          es: "Históricamente infundada",
          de: "Historisch unbegründet",
        },
        p2: {
          en: "It is also structurally <strong>imperfect</strong> and <strong>incapable</strong> of fulfilling what it claims.",
          fr: "Elle est aussi structurellement <strong>imparfaite</strong> et <strong>incapable</strong> d'accomplir ce qu'elle prétend.",
          es: "También es estructuralmente <strong>imperfecta</strong> e <strong>incapaz</strong> de cumplir lo que afirma.",
          de: "Es ist auch strukturell <strong>unvollkommen</strong> und <strong>unfähig</strong>, das zu erfüllen, was es beansprucht.",
        },
        quote: {
          en: "\"Sola Scriptura isn't just imperfect. It's incomplete by design—which is exactly the kind of system a perfect God wouldn't give us.\"",
          fr: "« Sola Scriptura n'est pas seulement imparfaite. Elle est incomplète de par sa conception — ce qui est exactement le genre de système qu'un Dieu parfait ne nous donnerait pas. »",
          es: '"Sola Scriptura no es solo imperfecta. Está incompleta por diseño—que es exactamente el tipo de sistema que un Dios perfecto no nos daría."',
          de: '„Sola Scriptura ist nicht nur unvollkommen. Es ist von Natur aus unvollständig – was genau die Art von System ist, die uns ein vollkommener Gott nicht geben würde."',
        },
      },
    },
    arg2: {
      heading: {
        en: "2. Scripture Contradicts Sola Scriptura",
        fr: "2. L'Écriture Contredit Sola Scriptura",
        es: "2. La Escritura Contradice Sola Scriptura",
        de: "2. Die Schrift Widerspricht Sola Scriptura",
      },
      p1: {
        en: "If Sola Scriptura were truly biblical, we would expect the Bible to say so. But not only is that not the case—the Bible actually <strong>teaches the opposite</strong>. It affirms oral tradition, apostolic authority, and a visible Church with teaching power.",
        fr: "Si Sola Scriptura était vraiment biblique, nous nous attendrions à ce que la Bible le dise. Mais non seulement ce n'est pas le cas, mais la Bible enseigne en fait <strong>le contraire</strong>. Elle affirme la tradition orale, l'autorité apostolique et une Église visible dotée d'un pouvoir d'enseignement.",
        es: "Si Sola Scriptura fuera verdaderamente bíblica, esperaríamos que la Biblia lo dijera. Pero no solo no es el caso, sino que la Biblia en realidad <strong>enseña lo contrario</strong>. Afirma la tradición oral, la autoridad apostólica y una Iglesia visible con poder de enseñanza.",
        de: "Wenn Sola Scriptura wirklich biblisch wäre, würden wir erwarten, dass die Bibel dies sagt. Aber das ist nicht nur nicht der Fall – die Bibel lehrt tatsächlich <strong>das Gegenteil</strong>. Sie bestätigt mündliche Überlieferung, apostolische Autorität und eine sichtbare Kirche mit Lehrbefugnis.",
      },
      p2: {
        en: "Let's walk through the evidence.",
        fr: "Examinons les preuves.",
        es: "Repasemos la evidencia.",
        de: "Lassen Sie uns die Beweise durchgehen.",
      },
      a: {
        heading: {
          en: "A. Scripture Commands Believers to Hold Fast to Tradition",
          fr: "A. L'Écriture Commande aux Croyants de Tenir Ferme aux Traditions",
          es: "A. La Escritura Ordena a los Creyentes Aferrarse a la Tradición",
          de: "A. Die Schrift Befiehlt den Gläubigen, an den Überlieferungen Festzuhalten",
        },
        quote: {
          en: '"So then, brothers, stand firm and hold to the traditions that you were taught by us, either by our spoken word or by our letter."',
          fr: "« Ainsi donc, frères, demeurez fermes et retenez les traditions que vous avez apprises de nous, soit de vive voix, soit par notre lettre. »",
          es: '"Así que, hermanos, estad firmes y retened las tradiciones que habéis aprendido, sea por palabra o por carta nuestra."',
          de: '„Also nun, Brüder, steht fest und haltet an den Überlieferungen, die ihr gelehrt worden seid, sei es durch Wort oder durch unseren Brief."',
        },
        source: {
          en: "2 Thessalonians 2:15",
          fr: "2 Thessaloniciens 2:15",
          es: "2 Tesalonicenses 2:15",
          de: "2. Thessalonicher 2:15",
        },
        b1: {
          en: "The verse explicitly affirms <strong>both</strong> oral and written teaching.",
          fr: "Le verset affirme explicitement <strong>à la fois</strong> l'enseignement oral et écrit.",
          es: "El versículo afirma explícitamente <strong>tanto</strong> la enseñanza oral como la escrita.",
          de: "Der Vers bestätigt ausdrücklich <strong>sowohl</strong> mündliche als auch schriftliche Lehre.",
        },
        b2: {
          en: "There is no hierarchy implied—Paul commands adherence to both equally.",
          fr: "Aucune hiérarchie n'est implicite — Paul commande l'adhésion aux deux également.",
          es: "No hay jerarquía implícita—Pablo ordena la adhesión a ambos por igual.",
          de: "Es wird keine Hierarchie impliziert – Paulus befiehlt gleichermaßen die Einhaltung beider.",
        },
        b3: {
          en: "The early Church received the Gospel as a <strong>living tradition</strong>, not just a written text.",
          fr: "L'Église primitive a reçu l'Évangile comme une <strong>tradition vivante</strong>, pas seulement comme un texte écrit.",
          es: "La Iglesia primitiva recibió el Evangelio como una <strong>tradición viva</strong>, no solo como un texto escrito.",
          de: "Die frühe Kirche empfing das Evangelium als <strong>lebendige Tradition</strong>, nicht nur als geschriebenen Text.",
        },
      },
      b: {
        heading: {
          en: "B. Apostolic Teaching Was Transmitted Orally",
          fr: "B. L'Enseignement Apostolique a été Transmis Oralement",
          es: "B. La Enseñanza Apostólica se Transmitió Oralmente",
          de: "B. Die Apostolische Lehre Wurde Mündlich Überliefert",
        },
        quote: {
          en: '"What you have heard from me in the presence of many witnesses entrust to faithful men who will be able to teach others also."',
          fr: "« Ce que tu as entendu de moi en présence de nombreux témoins, confie-le à des hommes fidèles qui soient capables de l'enseigner aussi à d'autres. »",
          es: '"Lo que has oído de mí ante muchos testigos, esto encarga a hombres fieles que sean idóneos para enseñar también a otros."',
          de: '„Was du von mir gehört hast vor vielen Zeugen, das vertraue treuen Menschen an, die tüchtig sein werden, auch andere zu lehren."',
        },
        source: {
          en: "2 Timothy 2:2",
          fr: "2 Timothée 2:2",
          es: "2 Timoteo 2:2",
          de: "2. Timotheus 2:2",
        },
        p1: {
          en: "This passage reveals a clear pattern of oral transmission:",
          fr: "Ce passage révèle un schéma clair de transmission orale :",
          es: "Este pasaje revela un patrón claro de transmisión oral:",
          de: "Dieser Abschnitt offenbart ein klares Muster mündlicher Überlieferung:",
        },
        b1: {
          en: "Paul teaches Timothy orally.",
          fr: "Paul enseigne Timothée oralement.",
          es: "Pablo enseña a Timoteo oralmente.",
          de: "Paulus lehrt Timotheus mündlich.",
        },
        b2: {
          en: "Timothy is to teach others the same orally.",
          fr: "Timothée doit enseigner aux autres la même chose oralement.",
          es: "Timoteo debe enseñar a otros lo mismo oralmente.",
          de: "Timotheus soll andere dasselbe mündlich lehren.",
        },
        b3: {
          en: "They will teach others in turn.",
          fr: "Ils enseigneront à d'autres à leur tour.",
          es: "Ellos enseñarán a otros a su vez.",
          de: "Sie werden wiederum andere lehren.",
        },
        p2: {
          en: "This multi-generational teaching model is entirely <strong>non-scriptural</strong> in form, yet completely <strong>apostolic</strong> in content.",
          fr: "Ce modèle d'enseignement multi-générationnel est entièrement <strong>non scripturaire</strong> dans sa forme, mais complètement <strong>apostolique</strong> dans son contenu.",
          es: "Este modelo de enseñanza multigeneracional es enteramente <strong>no escritural</strong> en su forma, pero completamente <strong>apostólico</strong> en su contenido.",
          de: "Dieses generationenübergreifende Lehrmodell ist in seiner Form gänzlich <strong>außerschriftlich</strong>, jedoch inhaltlich vollkommen <strong>apostolisch</strong>.",
        },
      },
      c: {
        heading: {
          en: "C. Apostolic Authority Is Binding",
          fr: "C. L'Autorité Apostolique est Contraignante",
          es: "C. La Autoridad Apostólica es Vinculante",
          de: "C. Apostolische Autorität ist Bindend",
        },
        quote: {
          en: '"He who hears you hears me."',
          fr: "« Celui qui vous écoute m'écoute. »",
          es: '"El que a vosotros oye, a mí me oye."',
          de: '„Wer euch hört, der hört mich."',
        },
        source: {
          en: "Luke 10:16",
          fr: "Luc 10:16",
          es: "Lucas 10:16",
          de: "Lukas 10:16",
        },
        p1: {
          en: 'Jesus does not say, "He who reads Scripture hears me." He ties His own voice to that of the Apostles, whose authority is personal and oral.',
          fr: "Jésus ne dit pas : « Celui qui lit l'Écriture m'écoute. » Il lie Sa propre voix à celle des Apôtres, dont l'autorité est personnelle et orale.",
          es: 'Jesús no dice: "El que lee la Escritura me oye a mí". Él vincula Su propia voz a la de los Apóstoles, cuya autoridad es personal y oral.',
          de: 'Jesus sagt nicht: „Wer die Schrift liest, hört mich." Er bindet Seine eigene Stimme an die der Apostel, deren Autorität persönlich und mündlich ist.',
        },
        p2: {
          en: "Similarly:",
          fr: "De même :",
          es: "Similarmente:",
          de: "Ähnlich:",
        },
        quote2: {
          en: '"When you received the word of God, which you heard from us, you accepted it not as the word of men, but as what it really is—the word of God."',
          fr: "« Quand vous avez reçu la parole de Dieu, que vous avez entendue de nous, vous l'avez reçue non comme la parole des hommes, mais comme ce qu'elle est réellement : la parole de Dieu. »",
          es: '"Quando recibisteis la palabra de Dios que oísteis de nosotros, la recibisteis no como palabra de hombres, sino según es en verdad, la palabra de Dios."',
          de: '„Als ihr das Wort Gottes empfingt, das ihr von uns hörtet, nahmt ihr es nicht als Menschenwort auf, sondern als das, was es in Wahrheit ist: als Gottes Wort."',
        },
        source2: {
          en: "1 Thessalonians 2:13",
          fr: "1 Thessaloniciens 2:13",
          es: "1 Tesalonicenses 2:13",
          de: "1. Thessalonicher 2:13",
        },
        b1: {
          en: "The Thessalonians received the <strong>word of God orally</strong>, and it was considered equally authoritative.",
          fr: "Les Thessaloniciens ont reçu la <strong>parole de Dieu oralement</strong>, et elle était considérée comme également faisant autorité.",
          es: "Los tesalonicenses recibieron la <strong>palabra de Dios oralmente</strong>, y se consideró igualmente autorizada.",
          de: "Die Thessalonicher empfingen das <strong>Wort Gottes mündlich</strong>, und es wurde als gleichermaßen autoritativ angesehen.",
        },
      },
      d: {
        heading: {
          en: "D. The Church Is the Pillar of Truth—Not the Bible",
          fr: "D. L'Église est le Pilier de la Vérité — Pas la Bible",
          es: "D. La Iglesia es el Pilar de la Verdad—No la Biblia",
          de: "D. Die Kirche ist die Säule der Wahrheit – Nicht die Bibel",
        },
        quote: {
          en: '"The Church of the living God, the pillar and foundation of truth."',
          fr: "« l'Église du Dieu vivant, la colonne et l'appui de la vérité. »",
          es: '"la iglesia del Dios viviente, columna y baluarte de la verdad."',
          de: '„die Gemeinde des lebendigen Gottes, Pfeiler und Grundfeste der Wahrheit."',
        },
        source: {
          en: "1 Timothy 3:15",
          fr: "1 Timothée 3:15",
          es: "1 Timoteo 3:15",
          de: "1. Timotheus 3:15",
        },
        p1: {
          en: 'Nowhere in the Bible is Scripture referred to as "the foundation of truth." That role is given to the <strong>Church</strong>, which interprets and transmits the Word with authority.',
          fr: "Nulle part dans la Bible l'Écriture n'est désignée comme « le fondement de la vérité ». Ce rôle est donné à l'<strong>Église</strong>, qui interprète et transmet la Parole avec autorité.",
          es: 'En ninguna parte de la Biblia se hace referencia a la Escritura como "el fundamento de la verdad". Ese papel se le da a la <strong>Iglesia</strong>, que interpreta y transmite la Palabra con autoridad.',
          de: 'Nirgendwo in der Bibel wird die Schrift als „die Grundlage der Wahrheit" bezeichnet. Diese Rolle wird der <strong>Kirche</strong> gegeben, die das Wort mit Autorität interpretiert und übermittelt.',
        },
      },
      e: {
        heading: {
          en: "E. The Jerusalem Council: An Authoritative, Extra-Scriptural Decision",
          fr: "E. Le Concile de Jérusalem : Une Décision Faisant Autorité et Extra-Scripturaire",
          es: "E. El Concilio de Jerusalén: Una Decisión Autorizada y Extra-Escritural",
          de: "E. Das Jerusalemer Konzil: Eine Autoritative, Außerschriftliche Entscheidung",
        },
        p1: {
          en: '<strong>Acts 15:</strong> The apostles and elders come together to settle the circumcision debate. They do not say "let\'s go search the Scriptures"—they deliberate, pray, and proclaim a decision.',
          fr: "<strong>Actes 15 :</strong> Les apôtres et les anciens se réunissent pour régler le débat sur la circoncision. Ils ne disent pas « allons chercher dans les Écritures » — ils délibèrent, prient et proclament une décision.",
          es: '<strong>Hechos 15:</strong> Los apóstoles y los ancianos se reúnen para resolver el debate sobre la circuncisión. No dicen "vamos a buscar en las Escrituras"—deliberan, oran y proclaman una decisión.',
          de: "<strong>Apostelgeschichte 15:</strong> Die Apostel und Ältesten kommen zusammen, um den Beschneidungsstreit beizulegen. Sie sagen nicht „lasst uns in den Schriften suchen“ – sie beraten, beten und verkünden eine Entscheidung.",
        },
        quote: {
          en: '"They delivered to them for observance the decisions that had been reached by the apostles and elders who were in Jerusalem."',
          fr: "« Ils leur remirent pour qu'ils les observent les décisions qui avaient été prises par les apôtres et les anciens qui étaient à Jérusalem. »",
          es: '"Les entregaban para que las guardasen las decisiones que habían sido acordadas por los apóstoles y los ancianos que estaban en Jerusalén."',
          de: '„Sie überbrachten ihnen die Entscheidungen, die von den Aposteln und Ältesten in Jerusalem getroffen worden waren, zur Einhaltung."',
        },
        source: {
          en: "Acts 16:4",
          fr: "Actes 16:4",
          es: "Hechos 16:4",
          de: "Apostelgeschichte 16:4",
        },
        p2: {
          en: "This is the clearest picture in the Bible of a <strong>magisterial council</strong> issuing binding doctrinal rulings—centuries before any complete New Testament existed.",
          fr: "C'est l'image la plus claire dans la Bible d'un <strong>concile magistériel</strong> émettant des décisions doctrinales contraignantes — des siècles avant qu'un Nouveau Testament complet n'existe.",
          es: "Esta es la imagen más clara en la Biblia de un <strong>concilio magisterial</strong> emitiendo fallos doctrinales vinculantes—siglos antes de que existiera un Nuevo Testamento completo.",
          de: "Dies ist das deutlichste Bild in der Bibel von einem <strong>lehramtlichen Konzil</strong>, das verbindliche Lehraussagen trifft – Jahrhunderte bevor ein vollständiges Neues Testament existierte.",
        },
      },
      f: {
        heading: {
          en: "F. Interpretation Requires a Guide",
          fr: "F. L'Interprétation Nécessite un Guide",
          es: "F. La Interpretación Requiere un Guía",
          de: "F. Interpretation Erfordert einen Führer",
        },
        quote1: {
          en: '"How can I [understand] unless someone guides me?"',
          fr: "« Comment le puis-je [comprendre], si quelqu'un ne me guide ? »",
          es: '"¿Y cómo podré [entender], si alguno no me enseñare?"',
          de: '„Wie kann ich [verstehen], wenn mich nicht jemand anleitet?"',
        },
        source1: {
          en: "Acts 8:31 (Ethiopian eunuch)",
          fr: "Actes 8:31 (eunuque éthiopien)",
          es: "Hechos 8:31 (eunuco etíope)",
          de: "Apostelgeschichte 8:31 (äthiopischer Kämmerer)",
        },
        b1: {
          en: "Scripture cannot interpret itself.",
          fr: "L'Écriture ne peut pas s'interpréter elle-même.",
          es: "La Escritura no puede interpretarse a sí misma.",
          de: "Die Schrift kann sich nicht selbst interpretieren.",
        },
        b2: {
          en: "Even inspired texts need inspired interpreters.",
          fr: "Même les textes inspirés ont besoin d'interprètes inspirés.",
          es: "Incluso los textos inspirados necesitan intérpretes inspirados.",
          de: "Selbst inspirierte Texte brauchen inspirierte Interpreten.",
        },
        p1: {
          en: "As Peter himself writes:",
          fr: "Comme Pierre lui-même l'écrit :",
          es: "Como Pedro mismo escribe:",
          de: "Wie Petrus selbst schreibt:",
        },
        quote2: {
          en: '"[Paul\'s letters] contain some things that are hard to understand, which the ignorant and unstable twist to their own destruction."',
          fr: "« [Les lettres de Paul] contiennent des choses difficiles à comprendre, que les ignorants et les instables tordent pour leur propre ruine. »",
          es: '"[Las cartas de Pablo] contienen algunas cosas difíciles de entender, las cuales los indoctos e inconstantes tuercen para su propia perdición."',
          de: '„[Die Briefe des Paulus] enthalten einiges, was schwer zu verstehen ist, was die Unwissenden und Ungefestigten zu ihrem eigenen Verderben verdrehen."',
        },
        source2: {
          en: "2 Peter 3:16",
          fr: "2 Pierre 3:16",
          es: "2 Pedro 3:16",
          de: "2. Petrus 3:16",
        },
        p2: {
          en: "This directly contradicts the idea that every believer, guided by the Spirit, will come to the same interpretation.",
          fr: "Cela contredit directement l'idée que chaque croyant, guidé par l'Esprit, parviendra à la même interprétation.",
          es: "Esto contradice directamente la idea de que cada creyente, guiado por el Espíritu, llegará a la misma interpretación.",
          de: "Dies widerspricht direkt der Vorstellung, dass jeder Gläubige, vom Geist geleitet, zur selben Interpretation gelangen wird.",
        },
      },
      g: {
        heading: {
          en: "G. Scripture Acknowledges Its Own Incompleteness",
          fr: "G. L'Écriture Reconnaît sa Propre Incomplétude",
          es: "G. La Escritura Reconoce su Propia Incompletitud",
          de: "G. Die Schrift Erkennt ihre Eigene Unvollständigkeit An",
        },
        quote1: {
          en: '"There are many other things that Jesus did; if every one of them were written down… the world itself could not contain the books."',
          fr: "« Il y a encore beaucoup d'autres choses que Jésus a faites ; si elles étaient écrites en détail... le monde entier ne pourrait contenir les livres. »",
          es: '"Hay también otras muchas cosas que hizo Jesús, las cuales si se escribieran una por una... ni aun el mundo mismo contendría los libros."',
          de: '„Es gibt aber noch vieles andere, was Jesus getan hat; wenn das alles einzeln beschrieben würde... die Welt selbst könnte die Bücher nicht fassen."',
        },
        source1: {
          en: "John 21:25",
          fr: "Jean 21:25",
          es: "Juan 21:25",
          de: "Johannes 21:25",
        },
        quote2: {
          en: '"Though I have much to write to you, I would rather not use paper and ink. Instead, I hope to come to you and talk face to face."',
          fr: "« Quoique j'aie beaucoup de choses à vous écrire, je n'ai pas voulu le faire avec le papier et l'encre ; mais j'espère aller chez vous et vous parler de vive voix. »",
          es: '"Aunque tengo muchas cosas que escribiros, no he querido hacerlo por medio de papel y tinta, pues espero ir a vosotros y hablar cara a cara."',
          de: '„Obwohl ich euch viel zu schreiben hätte, wollte ich es nicht mit Papier und Tinte tun; sondern ich hoffe, zu euch zu kommen und mündlich mit euch zu reden."',
        },
        source2: {
          en: "2 John 12",
          fr: "2 Jean 12",
          es: "2 Juan 12",
          de: "2. Johannes 12",
        },
        p1: {
          en: "The Apostles did not view writing as the only means of transmission. They preferred direct communication when possible—and saw oral teaching as both reliable and essential.",
          fr: "Les Apôtres ne considéraient pas l'écriture comme le seul moyen de transmission. Ils préféraient la communication directe lorsque c'était possible — et voyaient l'enseignement oral como à la fois fiable et essentiel.",
          es: "Los Apóstoles no veían la escritura como el único medio de transmisión. Preferían la comunicación directa cuando era posible—y veían la enseñanza oral como fiable y esencial.",
          de: "Die Apostel sahen das Schreiben nicht als einziges Übermittlungsmittel an. Sie zogen direkte Kommunikation vor, wenn möglich – und sahen mündliche Lehre als zuverlässig und wesentlich an.",
        },
      },
      finalReflection: {
        heading: {
          en: "Final Reflection",
          fr: "Réflexion Finale",
          es: "Reflexión Final",
          de: "Abschließende Überlegung",
        },
        quote: {
          en: '"When you let Scripture speak for itself, it consistently leads beyond the idea of Scripture alone. It pushes us toward an authoritative tradition, safeguarded by a living magisterium, guided by the Holy Spirit, and entrusted to the Church."',
          fr: "« Quand vous laissez l'Écriture parler d'elle-même, elle conduit constamment au-delà de l'idée de l'Écriture seule. Elle nous pousse vers une tradition faisant autorité, sauvegardée par un magistère vivant, guidé par le Saint-Esprit et confié à l'Église. »",
          es: '"Cuando dejas que la Escritura hable por sí misma, consistentemente lleva más allá de la idea de la Escritura sola. Nos empuja hacia una tradición autorizada, salvaguardada por un magisterio vivo, guiado por el Espíritu Santo y confiado a la Iglesia."',
          de: '„Wenn man die Schrift für sich selbst sprechen lässt, führt sie konsequent über die Idee der Schrift allein hinaus. Sie drängt uns zu einer autoritativen Tradition, die von einem lebendigen Lehramt bewahrt, vom Heiligen Geist geleitet und der Kirche anvertraut ist."',
        },
        p1: {
          en: "Sola Scriptura is not just unsupported by Scripture—it is flatly contradicted by it.",
          fr: "Sola Scriptura n'est pas seulement non soutenue par l'Écriture — elle est catégoriquement contredite par elle.",
          es: "Sola Scriptura no solo no está respaldada por la Escritura, sino que es rotundamente contradicha por ella.",
          de: "Sola Scriptura wird nicht nur von der Schrift nicht unterstützt – sie wird von ihr rundweg widersprochen.",
        },
      },
    },
    arg1: {
      heading: {
        en: "1. Sola Scriptura Is Arbitrary and Theologically Groundless",
        fr: "1. Sola Scriptura est Arbitraire et Théologiquement Infondé",
        es: "1. Sola Scriptura es Arbitraria y Teológicamente Infundada",
        de: "1. Sola Scriptura ist Willkürlich und Theologisch Unbegründet",
      },
      p1: {
        en: "All of the previous arguments point to doctrinal instability, historical rupture, biblical inconsistency, and theological inadequacy. But behind all of this lies a more fundamental issue: <strong>Sola Scriptura is arbitrary.</strong>",
        fr: "Tous les arguments précédents pointent vers l'instabilité doctrinale, la rupture historique, l'incohérence biblique et l'inadéquation théologique. Mais derrière tout cela se cache un problème plus fondamental : <strong>Sola Scriptura est arbitraire.</strong>",
        es: "Todos los argumentos anteriores apuntan a la inestabilidad doctrinal, la ruptura histórica, la inconsistencia bíblica y la insuficiencia teológica. Pero detrás de todo esto yace un problema más fundamental: <strong>Sola Scriptura es arbitraria.</strong>",
        de: "Alle vorherigen Argumente deuten auf doktrinäre Instabilität, historischen Bruch, biblische Inkonsistenz und theologische Unzulänglichkeit hin. Aber hinter all dem steckt ein grundlegenderes Problem: <strong>Sola Scriptura ist willkürlich.</strong>",
      },
      quote1: {
        en: '"It imposes an unexplained and unjustified limit on how God guides his people."',
        fr: "« Elle impose une limite inexpliquée et injustifiée à la manière dont Dieu guide son peuple. »",
        es: '"Impone un límite inexplicado e injustificado sobre cómo Dios guía a su pueblo."',
        de: '„Es setzt eine unerklärte und ungerechtfertigte Grenze dafür, wie Gott sein Volk führt."',
      },
      arbitrary: {
        heading: {
          en: 'What Do We Mean by "Arbitrary"?',
          fr: "Qu'entendons-nous par « Arbitraire » ?",
          es: '¿Qué Queremos Decir con "Arbitraria"?',
          de: 'Was Meinen Wir mit „Willkürlich"?',
        },
        p1: {
          en: 'To call something "arbitrary" is to say:',
          fr: "Qualifier quelque chose d'« arbitraire », c'est dire :",
          es: 'Llamar a algo "arbitrario" es decir:',
          de: 'Etwas als „willkürlich" zu bezeichnen bedeutet:',
        },
        b1: {
          en: "It lacks a sufficient reason or justification.",
          fr: "Il lui manque une raison ou une justification suffisante.",
          es: "Carece de una razón o justificación suficiente.",
          de: "Es fehlt an einem ausreichenden Grund oder einer Rechtfertigung.",
        },
        b2: {
          en: "It imposes a boundary or rule without any internal logic.",
          fr: "Elle impose une limite ou une règle sans aucune logique interne.",
          es: "Impone un límite o regla sin ninguna lógica interna.",
          de: "Es setzt eine Grenze oder Regel ohne jegliche interne Logik.",
        },
        b3: {
          en: "It cannot be grounded in God's nature or divine revelation.",
          fr: "Elle ne peut être fondée ni sur la nature de Dieu ni sur la révélation divine.",
          es: "No puede fundamentarse en la naturaleza de Dios o en la revelación divina.",
          de: "Es kann nicht in Gottes Natur oder göttlicher Offenbarung begründet werden.",
        },
        p2: {
          en: "Sola Scriptura claims that:",
          fr: "Sola Scriptura prétend que :",
          es: "Sola Scriptura afirma que:",
          de: "Sola Scriptura behauptet, dass:",
        },
        b4: {
          en: "God's <strong>only</strong> infallible communication to mankind is contained in <strong>66 books</strong>.",
          fr: "La <strong>seule</strong> communication infaillible de Dieu à l'humanité est contenue dans <strong>66 livres</strong>.",
          es: "La <strong>única</strong> comunicación infalible de Dios a la humanidad está contenida en <strong>66 libros</strong>.",
          de: "Gottes <strong>einzige</strong> unfehlbare Mitteilung an die Menschheit in <strong>66 Büchern</strong> enthalten ist.",
        },
        b5: {
          en: "Anything outside of these books—Sacred Tradition, Church Councils, Magisterial Teaching—is not divinely protected from error.",
          fr: "Tout ce qui est en dehors de ces livres — Tradition Sacrée, Conciles de l'Église, Enseignement Magistériel — n'est pas divinement protégé de l'erreur.",
          es: "Cualquier cosa fuera de estos libros—Sagrada Tradición, Concilios de la Iglesia, Enseñanza Magisterial—no está divinamente protegida del error.",
          de: "Alles außerhalb dieser Bücher – Heilige Tradition, Kirchenkonzilien, Lehramtliche Lehre – nicht göttlich vor Irrtum geschützt ist.",
        },
        q1: {
          en: "But the natural question is: Why?",
          fr: "Mais la question naturelle est : Pourquoi ?",
          es: "Pero la pregunta natural es: ¿Por qué?",
          de: "Aber die natürliche Frage ist: Warum?",
        },
      },
      analogy: {
        heading: {
          en: "Analogy from Science and Theology",
          fr: "Analogie de la Science et de la Théologie",
          es: "Analogía de la Ciencia y la Teología",
          de: "Analogie aus Wissenschaft und Theologie",
        },
        quote1: {
          en: '"If a scientist claimed that gravity only applies in 10% of the universe, the immediate question would be why only 10%? Why not 11%? Why not 100%?"',
          fr: "« Si un scientifique affirmait que la gravité ne s'applique que dans 10% de l'univers, la question immédiate serait : pourquoi seulement 10% ? Pourquoi pas 11% ? Pourquoi pas 100% ? »",
          es: '"Si un científico afirmara que la gravedad solo se aplica en el 10% del universo, la pregunta inmediata sería ¿por qué solo el 10%? ¿Por qué no el 11%? ¿Por qué no el 100%?"',
          de: '„Wenn ein Wissenschaftler behaupten würde, dass die Schwerkraft nur in 10 % des Universums gilt, wäre die sofortige Frage: Warum nur 10 %? Warum nicht 11 %? Warum nicht 100 %?"',
        },
        p1: {
          en: "Similarly, if Protestants say:",
          fr: "De même, si les protestants disent :",
          es: "Del mismo modo, si los protestantes dicen:",
          de: "Ähnlich, wenn Protestanten sagen:",
        },
        b1: {
          en: '"God speaks infallibly in Scripture—but not in Tradition,"',
          fr: "« Dieu parle infailliblement dans l'Écriture — mais pas dans la Tradition, »",
          es: '"Dios habla infailliblemente en la Escritura—pero no en la Tradición,"',
          de: '„Gott spricht unfehlbar in der Schrift – aber nicht in der Tradition,"',
        },
        b2: {
          en: 'or, "The Bible is divinely protected from error—but not the Church,"',
          fr: "ou, « La Bible est divinement protégée de l'erreur — mais pas l'Église, »",
          es: 'o, "La Biblia está divinamente protegida del error—pero no la Iglesia,"',
          de: 'oder, „Die Bibel ist göttlich vor Irrtum geschützt – aber nicht die Kirche,"',
        },
        p2: {
          en: "…we must ask: what principle or reason justifies that restriction?",
          fr: "…nous devons demander : quel principe ou raison justifie cette restriction ?",
          es: "…debemos preguntar: ¿qué principio o razón justifica esa restricción?",
          de: "…müssen wir fragen: Welches Prinzip oder welcher Grund rechtfertigt diese Einschränkung?",
        },
        quote2: {
          en: '"If no good reason can be given, the claim starts to look arbitrary—a limit imposed without justification."',
          fr: "« Si aucune bonne raison ne peut être donnée, l'affirmation commence à paraître arbitraire — une limite imposée sans justification. »",
          es: '"Si no se puede dar una buena razón, la afirmación comienza a parecer arbitraria—un límite impuesto sin justificación."',
          de: '„Wenn kein guter Grund angegeben werden kann, erscheint die Behauptung willkürlich – eine Grenze, die ohne Rechtfertigung auferlegt wird."',
        },
      },
      nature: {
        heading: {
          en: "Does God's Nature Require This Limitation?",
          fr: "La Nature de Dieu Exige-t-elle Cette Limitation ?",
          es: "¿Requiere la Naturaleza de Dios Esta Limitación?",
          de: "Erfordert Gottes Natur Diese Einschränkung?",
        },
        p1: {
          en: "<strong>No.</strong>",
          fr: "<strong>Non.</strong>",
          es: "<strong>No.</strong>",
          de: "<strong>Nein.</strong>",
        },
        b1: {
          en: "Nothing in God's nature necessitates that He communicate <em>only</em> in writing.",
          fr: "Rien dans la nature de Dieu ne nécessite qu'Il communique <em>seulement</em> par écrit.",
          es: "Nada en la naturaleza de Dios necesita que Él se comunique <em>solo</em> por escrito.",
          de: "Nichts in Gottes Natur erfordert, dass Er <em>nur</em> schriftlich kommuniziert.",
        },
        b2: {
          en: "God is <strong>relational</strong>, <strong>incarnational</strong>, and has often spoken <strong>orally</strong>, <strong>through prophets</strong>, <strong>through the Church</strong>, and <strong>through the Spirit</strong>.",
          fr: "Dieu est <strong>relationnel</strong>, <strong>incarnationnel</strong>, et a souvent parlé <strong>oralement</strong>, <strong>par les prophètes</strong>, <strong>par l'Église</strong>, et <strong>par l'Esprit</strong>.",
          es: "Dios es <strong>relacional</strong>, <strong>encarnacional</strong>, y a menudo ha hablado <strong>oralmente</strong>, <strong>a través de profetas</strong>, <strong>a través de la Iglesia</strong>, y <strong>a través del Espíritu</strong>.",
          de: "Gott ist <strong>relational</strong>, <strong>inkarnatorisch</strong>, und hat oft <strong>mündlich</strong>, <strong>durch Propheten</strong>, <strong>durch die Kirche</strong>, und <strong>durch den Geist</strong> gesprochen.",
        },
        quote: {
          en: '"Nothing about God\'s love… explains why he would only speak in 66 books but not 67."',
          fr: "« Rien dans l'amour de Dieu... n'explique pourquoi il ne parlerait que dans 66 livres mais pas 67. »",
          es: '"Nada sobre el amor de Dios... explica por qué solo hablaría en 66 libros pero no en 67."',
          de: '„Nichts über Gottes Liebe... erklärt, warum er nur in 66 Büchern sprechen würde, aber nicht in 67."',
        },
        p2: {
          en: "If God can communicate clearly and infallibly in Scripture, He can do the same through other means. Limiting infallibility to a fixed written text appears <strong>philosophically groundless</strong>.",
          fr: "Si Dieu peut communiquer clairement et infailliblement dans l'Écriture, Il peut faire de même par d'autres moyens. Limiter l'infaillibilité à un texte écrit fixe semble <strong>philosophiquement infondé</strong>.",
          es: "Si Dios puede comunicarse clara e infaliblemente en la Escritura, Él puede hacer lo mismo a través de otros medios. Limitar la infalibilidad a un texto escrito fijo parece <strong>filosóficamente infundado</strong>.",
          de: "Wenn Gott klar und unfehlbar in der Schrift kommunizieren kann, kann Er dasselbe auch durch andere Mittel tun. Die Unfehlbarkeit auf einen festen geschriebenen Text zu beschränken, erscheint <strong>philosophisch unbegründet</strong>.",
        },
      },
      purpose: {
        heading: {
          en: "Is There a Theological Purpose for Limiting Revelation to Scripture Alone?",
          fr: "Y a-t-il un But Théologique à Limiter la Révélation à l'Écriture Seule ?",
          es: "¿Hay un Propósito Teológico para Limitar la Revelación solo a la Escritura?",
          de: "Gibt es einen Theologischen Zweck für die Beschränkung der Offenbarung auf die Schrift allein?",
        },
        p1: {
          en: "Still no.",
          fr: "Toujours non.",
          es: "Sigue sin haberlo.",
          de: "Immer noch nein.",
        },
        p2: {
          en: "Let's explore possible Protestant justifications and why they fail:",
          fr: "Explorons les justifications protestantes possibles et pourquoi elles échouent :",
          es: "Exploremos las posibles justificaciones protestantes y por qué fallan:",
          de: "Lassen Sie uns mögliche protestantische Rechtfertigungen untersuchen und warum sie scheitern:",
        },
        a: {
          heading: {
            en: 'A. "To Ensure Clarity"',
            fr: "A. « Pour Assurer la Clarté »",
            es: 'A. "Para Asegurar la Claridad"',
            de: 'A. „Um Klarheit zu Gewährleisten"',
          },
          p1: {
            en: "But:",
            fr: "Mais :",
            es: "Pero:",
            de: "Aber:",
          },
          b1: {
            en: "As previously shown, Sola Scriptura has led to <strong>massive fragmentation</strong>.",
            fr: "Comme montré précédemment, Sola Scriptura a conduit à une <strong>fragmentation massive</strong>.",
            es: "Como se mostró anteriormente, Sola Scriptura ha llevado a una <strong>fragmentación masiva</strong>.",
            de: "Wie bereits gezeigt, hat Sola Scriptura zu <strong>massiver Zersplitterung</strong> geführt.",
          },
          b2: {
            en: "Doctrinal clarity is undermined, not enhanced, when every person is their own authority.",
            fr: "La clarté doctrinale est sapée, et non améliorée, lorsque chaque personne est sa propre autorité.",
            es: "La claridad doctrinal se socava, no se mejora, cuando cada persona es su propia autoridad.",
            de: "Die Lehrklarheit wird untergraben, nicht verbessert, wenn jede Person ihre eigene Autorität ist.",
          },
        },
        b: {
          heading: {
            en: 'B. "To Promote Personal Responsibility and Engagement"',
            fr: "B. « Pour Promouvoir la Responsabilité Personnelle et l'Engagement »",
            es: 'B. "Para Promover la Responsabilidad Personal y el Compromiso"',
            de: 'B. „Um Persönliche Verantwortung und Engagement zu Fördern"',
          },
          p1: {
            en: "But:",
            fr: "Mais :",
            es: "Pero:",
            de: "Aber:",
          },
          b1: {
            en: "Engagement does not require fragmentation.",
            fr: "L'engagement ne nécessite pas la fragmentation.",
            es: "El compromiso no requiere fragmentación.",
            de: "Engagement erfordert keine Zersplitterung.",
          },
          b2: {
            en: "Catholics engage deeply with Scripture, but within a guided and safeguarded framework.",
            fr: "Les catholiques s'engagent profondément avec l'Écriture, mais dans un cadre guidé et protégé.",
            es: "Los católicos se involucran profundamente con la Escritura, pero dentro de un marco guiado y salvaguardado.",
            de: "Katholiken setzen sich tiefgehend mit der Schrift auseinander, jedoch innerhalb eines geführten und geschützten Rahmens.",
          },
        },
        c: {
          heading: {
            en: 'C. "To Avoid Abuse by Human Authorities"',
            fr: "C. « Pour Éviter l'Abus par les Autorités Humaines »",
            es: 'C. "Para Evitar el Abuso de las Autoridades Humanas"',
            de: 'C. „Um Missbrauch durch Menschliche Autoritäten zu Vermeiden"',
          },
          p1: {
            en: "But:",
            fr: "Mais :",
            es: "Pero:",
            de: "Aber:",
          },
          b1: {
            en: "Scripture must still be interpreted, and <strong>interpretation without accountability</strong> leads to even more abuse.",
            fr: "L'Écriture doit toujours être interprétée, et <strong>l'interprétation sans responsabilité</strong> conduit à encore plus d'abus.",
            es: "La Escritura todavía debe ser interpretada, y la <strong>interpretación sin rendición de cuentas</strong> lleva a aún más abuso.",
            de: "Die Schrift muss immer noch interpretiert werden, und <strong>Interpretation ohne Rechenschaftspflicht</strong> führt zu noch mehr Missbrauch.",
          },
        },
      },
      limit: {
        heading: {
          en: 'Contrast With Other Doctrinal "Limits"',
          fr: "Contraste Avec d'Autres « Limites » Doctrinales",
          es: 'Contraste Con Otros "Límites" Doctrinales',
          de: 'Kontrast zu Anderen Doktrinären „Grenzen"',
        },
        p1: {
          en: "Some theological limits do have strong internal logic.",
          fr: "Certaines limites théologiques ont une logique interne forte.",
          es: "Algunos límites teológicos sí tienen una lógica interna fuerte.",
          de: "Einige theologische Grenzen haben eine starke interne Logik.",
        },
        quote: {
          en: '"Richard Swinburne has argued that the doctrine of the Trinity… is explained by the nature of love. A single person can\'t love another. Two persons only love each other. But three allows for communal love to exist eternally."',
          fr: "« Richard Swinburne a soutenu que la doctrine de la Trinité... s'explique par la nature de l'amour. Une seule personne ne peut pas en aimer une autre. Deux personnes ne font que s'aimer mutuellement. Mais trois permet à l'amour communautaire d'exister éternellement. »",
          es: '"Richard Swinburne ha argumentado que la doctrina de la Trinidad... se explica por la naturaleza del amor. Una sola persona no puede amar a otra. Dos personas solo se aman mutuamente. Pero tres permite que el amor comunitario exista eternamente."',
          de: '„Richard Swinburne hat argumentiert, dass die Lehre von der Dreifaltigkeit... durch die Natur der Liebe erklärt wird. Eine einzelne Person kann keine andere lieben. Zwei Personen lieben sich nur gegenseitig. Aber drei ermöglicht es, dass gemeinschaftliche Liebe ewig existiert."',
        },
        p2: {
          en: "This is a doctrinal limit with <strong>rational and theological justification</strong>. But there is <strong>no equivalent explanation</strong> for the sharp boundary Sola Scriptura creates.",
          fr: "C'est une limite doctrinale avec une <strong>justification rationnelle et théologique</strong>. Mais il n'y a <strong>aucune explication équivalente</strong> pour la frontière nette que crée Sola Scriptura.",
          es: "Este es un límite doctrinal con <strong>justificación racional y teológica</strong>. Pero no hay <strong>ninguna explicación equivalente</strong> para el límite tajante que crea Sola Scriptura.",
          de: "Dies ist eine Lehrgrenze mit <strong>rationaler und theologischer Rechtfertigung</strong>. Aber es gibt <strong>keine äquivalente Erklärung</strong> für die scharfe Grenze, die Sola Scriptura zieht.",
        },
      },
      pattern: {
        heading: {
          en: "Scripture, History, and Tradition Suggest the Opposite",
          fr: "L'Écriture, l'Histoire et la Tradition Suggèrent le Contraire",
          es: "La Escritura, la Historia y la Tradición Sugieren lo Contrario",
          de: "Schrift, Geschichte und Tradition Deuten auf das Gegenteil Hin",
        },
        p1: {
          en: "If you examine God's historical pattern:",
          fr: "Si vous examinez le schéma historique de Dieu :",
          es: "Si examinas el patrón histórico de Dios:",
          de: "Wenn man Gottes historisches Muster untersucht:",
        },
        b1: {
          en: "He has always revealed Himself <strong>through people</strong>, <strong>prophets</strong>, and <strong>living authorities</strong>.",
          fr: "Il s'est toujours révélé <strong>à travers des gens</strong>, <strong>des prophètes</strong>, et <strong>des autorités vivantes</strong>.",
          es: "Él siempre se ha revelado <strong>a través de personas</strong>, <strong>profetas</strong>, y <strong>autoridades vivas</strong>.",
          de: "Er hat Sich immer <strong>durch Menschen</strong>, <strong>Propheten</strong>, und <strong>lebendige Autoritäten</strong> offenbart.",
        },
        b2: {
          en: "The early Church lived and taught <strong>before the New Testament existed</strong>.",
          fr: "L'Église primitive a vécu et enseigné <strong>avant que le Nouveau Testament n'existe</strong>.",
          es: "La Iglesia primitiva vivió y enseñó <strong>antes de que existiera el Nuevo Testamento</strong>.",
          de: "Die frühe Kirche lebte und lehrte <strong>bevor das Neue Testament existierte</strong>.",
        },
        b3: {
          en: "Jesus founded a <strong>Church</strong>, not just a book.",
          fr: "Jésus a fondé une <strong>Église</strong>, pas seulement un livre.",
          es: "Jesús fundó una <strong>Iglesia</strong>, no solo un libro.",
          de: "Jesus hat eine <strong>Kirche</strong> gegründet, nicht nur ein Buch.",
        },
        quote: {
          en: '"If 66 books are compatible with God\'s loving nature, why not 73? Why not a combination of written and oral guidance—as we see in Scripture itself?"',
          fr: "« Si 66 livres sont compatibles avec la nature aimante de Dieu, pourquoi pas 73 ? Pourquoi pas une combinaison de directives écrites et orales — comme nous le voyons dans l'Écriture elle-même ? »",
          es: '"Si 66 libros son compatibles con la naturaleza amorosa de Dios, ¿por qué no 73? ¿Por qué no una combinación de guía escrita y oral—como vemos en la Escritura misma?"',
          de: '„Wenn 66 Bücher mit Gottes liebender Natur vereinbar sind, warum nicht 73? Warum nicht eine Kombination aus schriftlicher und mündlicher Führung – wie wir es in der Schrift selbst sehen?"',
        },
      },
      summary: {
        heading: {
          en: "Summary of the Argument",
          fr: "Résumé de l'Argument",
          es: "Resumen del Argumento",
          de: "Zusammenfassung des Arguments",
        },
        p1: {
          en: "Sola Scriptura imposes a restriction on divine communication that cannot be explained by:",
          fr: "Sola Scriptura impose une restriction à la communication divine qui ne peut être expliquée par :",
          es: "Sola Scriptura impone una restricción a la comunicación divina que no puede ser explicada por:",
          de: "Sola Scriptura legt eine Beschränkung der göttlichen Kommunikation auf, die nicht erklärt werden kann durch:",
        },
        b1: {
          en: "God's nature",
          fr: "La nature de Dieu",
          es: "La naturaleza de Dios",
          de: "Gottes Natur",
        },
        b2: {
          en: "Christ's teaching",
          fr: "L'enseignement du Christ",
          es: "La enseñanza de Cristo",
          de: "Christi Lehre",
        },
        b3: {
          en: "The Bible itself",
          fr: "La Bible elle-même",
          es: "La Biblia misma",
          de: "Die Bibel selbst",
        },
        b4: {
          en: "Church history",
          fr: "L'histoire de l'Église",
          es: "La historia de la Iglesia",
          de: "Kirchengeschichte",
        },
        b5: {
          en: "The pattern of salvation history",
          fr: "Le schéma de l'histoire du salut",
          es: "El patrón de la historia de la salvación",
          de: "Das Muster der Heilsgeschichte",
        },
        p2: {
          en: "It is a <strong>man-made doctrine</strong>, designed to limit divine authority to the written word, without any divine warrant.",
          fr: "C'est une <strong>doctrine créée par l'homme</strong>, conçue pour limiter l'autorité divine à la parole écrite, sans aucune garantie divine.",
          es: "Es una <strong>doctrina hecha por el hombre</strong>, diseñada para limitar la autoridad divina a la palabra escrita, sin ninguna garantía divina.",
          de: "Es ist eine <strong>von Menschen gemachte Lehre</strong>, die darauf abzielt, die göttliche Autorität auf das geschriebene Wort zu beschränken, ohne jede göttliche Ermächtigung.",
        },
        quote: {
          en: "\"If the limit isn't found in God's nature… or in God's purposes… then it is merely arbitrary—a human construct.\"",
          fr: "« Si la limite ne se trouve pas dans la nature de Dieu... ni dans les desseins de Dieu... alors elle est simplement arbitraire — une construction humaine. »",
          es: '"Si el límite no se encuentra en la naturaleza de Dios... o en los propósitos de Dios... entonces es meramente arbitrario—una construcción humana."',
          de: '„Wenn die Grenze nicht in Gottes Natur... oder in Gottes Absichten... gefunden wird, dann ist sie lediglich willkürlich – ein menschliches Konstrukt."',
        },
      },
    },
    conclusion: {
      heading: {
        en: "Conclusion",
        fr: "Conclusion",
        es: "Conclusión",
        de: "Schlussfolgerung",
      },
      p1: {
        en: "Having examined the nine key arguments, the conclusion is inescapable: <strong>Sola Scriptura is not the divinely instituted model for Christian authority</strong>. It fails every major test—biblical, historical, theological, and practical.",
        fr: "Après avoir examiné les neuf arguments clés, la conclusion est inéluctable : <strong>Sola Scriptura n'est pas le modèle divinement institué pour l'autorité chrétienne</strong>. Elle échoue à tous les tests majeurs — bibliques, historiques, théologiques et pratiques.",
        es: "Habiendo examinado los nueve argumentos clave, la conclusión es ineludible: <strong>Sola Scriptura no es el modelo divinamente instituido para la autoridad cristiana</strong>. Falla en todas las pruebas importantes—bíblicas, históricas, teológicas y prácticas.",
        de: "Nach Prüfung der neun Hauptargumente ist die Schlussfolgerung unausweichlich: <strong>Sola Scriptura ist nicht das von Gott eingesetzte Modell für christliche Autorität</strong>. Es versagt bei jedem größeren Test – biblisch, historisch, theologisch und praktisch.",
      },
      verdict: {
        heading: {
          en: "The Verdict:",
          fr: "Le Verdict :",
          es: "El Veredicto:",
          de: "Das Urteil:",
        },
        v1: {
          en: "Not taught by Christ",
          fr: "Non enseignée par le Christ",
          es: "No enseñada por Cristo",
          de: "Nicht von Christus gelehrt",
        },
        v2: {
          en: "Not practiced by the Apostles",
          fr: "Non pratiquée par les Apôtres",
          es: "No practicada por los Apóstoles",
          de: "Nicht von den Aposteln praktiziert",
        },
        v3: {
          en: "Not lived by the early Church",
          fr: "Non vécue par l'Église primitive",
          es: "No vivida por la Iglesia primitiva",
          de: "Nicht von der frühen Kirche gelebt",
        },
        v4: {
          en: "Not sufficient to maintain unity, clarity, or doctrinal integrity",
          fr: "Pas suffisante pour maintenir l'unité, la clarté ou l'intégrité doctrinale",
          es: "No es suficiente para mantener la unidad, la claridad o la integridad doctrinal",
          de: "Nicht ausreichend, um Einheit, Klarheit oder lehrmäßige Integrität zu wahren",
        },
      },
      quote1: {
        en: '"The Bible never teaches that the Bible alone is sufficient. But it does point us to a Church guided by the Spirit, safeguarded by tradition, and governed by authority."',
        fr: "« La Bible n'enseigne jamais que la Bible seule est suffisante. Mais elle nous oriente vers une Église guidée par l'Esprit, sauvegardée par la tradition et gouvernée par l'autorité. »",
        es: '"La Biblia nunca enseña que la Biblia sola es suficiente. Pero sí nos dirige a una Iglesia guiada por el Espíritu, salvaguardada por la tradición y gobernada por la autoridad."',
        de: '„Die Bibel lehrt nie, dass die Bibel allein ausreicht. Aber sie weist uns auf eine Kirche hin, die vom Geist geleitet, von der Tradition bewahrt und von Autorität regiert wird."',
      },
      p2: {
        en: "Sola Scriptura collapses under its own weight. The Catholic model, rooted in Scripture, Tradition, and the Magisterium, stands as the only coherent, complete, and Christ-founded framework for knowing the truth.",
        fr: "Sola Scriptura s'effondre sous son propre poids. Le modèle catholique, enraciné dans l'Écriture, la Tradition et le Magistère, demeure le seul cadre cohérent, complet et fondé par le Christ pour connaître la vérité.",
        es: "Sola Scriptura se derrumba bajo su propio peso. El modelo católico, arraigado en la Escritura, la Tradición y el Magisterio, se erige como el único marco coherente, completo y fundado por Cristo para conocer la verdad.",
        de: "Sola Scriptura bricht unter ihrem eigenen Gewicht zusammen. Das katholische Modell, verwurzelt in Schrift, Tradition und Lehramt, steht als das einzig kohärente, vollständige und von Christus gegründete Gerüst zur Erkenntnis der Wahrheit.",
      },
      quote2: {
        en: `“Christ did not give us a book to replace His voice. He gave us His Church - 'the pillar and foundation of truth.'”`,
        fr: `« Christ ne nous a pas donné un livre pour remplacer Sa voix. Il nous a donné Son Église - 'colonne et appui de la vérité'. »`,
        es: `“Cristo no nos dio un libro para reemplazar Su voz. Nos dio Su Iglesia - 'columna y baluarte de la verdad.'”`,
        de: `„Christus hat uns kein Buch gegeben, das Seine Stimme ersetzt. Er hat uns Seine Kirche gegeben - 'Pfeiler und Grundfeste der Wahrheit'.“`,
      },
    },
    bridge: {
      heading: {
        en: "What We Find Instead",
        fr: "Ce que Nous Trouvons à la Place",
        es: "Lo que Encontramos en su Lugar",
        de: "Was Wir Stattdessen Finden",
      },
      p1: {
        en: "Across Scripture, Tradition, and the life of the Church, we find a threefold structure that is biblically grounded, historically continuous, philosophically sound, and pastorally fruitful.",
        fr: "À travers l'Écriture, la Tradition et la vie de l'Église, nous trouvons une structure triple qui est bibliquement fondée, historiquement continue, philosophiquement saine et pastoralement fructueuse.",
        es: "A través de la Escritura, la Tradición y la vida de la Iglesia, encontramos una estructura triple que está bíblicamente fundamentada, históricamente continua, filosóficamente sólida y pastoralmente fructífera.",
        de: "In Schrift, Tradition und dem Leben der Kirche finden wir eine dreifache Struktur, die biblisch begründet, historisch kontinuierlich, philosophisch fundiert und pastoral fruchtbar ist.",
      },
      p2: {
        en: "Having dismantled Sola Scriptura, we can now explore what the Catholic Church teaches about authority, tradition, and the Magisterium—and how this model better reflects God's plan for preserving truth.",
        fr: "Ayant démantelé Sola Scriptura, nous pouvons maintenant explorer ce que l'Église catholique enseigne sur l'autorité, la tradition et le Magistère — et comment ce modèle reflète mieux le plan de Dieu pour préserver la vérité.",
        es: "Habiendo desmantelado Sola Scriptura, ahora podemos explorar lo que la Iglesia Católica enseña sobre la autoridad, la tradición y el Magisterio—y cómo este modelo refleja mejor el plan de Dios para preservar la verdad.",
        de: "Nachdem wir Sola Scriptura demontiert haben, können wir nun untersuchen, was die katholische Kirche über Autorität, Tradition und Lehramt lehrt – und wie dieses Modell Gottes Plan zur Bewahrung der Wahrheit besser widerspiegelt.",
      },
    },
  },
};

export function t(
  obj:
    | { en?: string; fr?: string; es?: string; de?: string }
    | string
    | undefined,
  lang: Language,
): string {
  // If nothing is passed → avoid crash
  if (!obj) return "";

  // If a plain string is passed → just return it (useful for titles)
  if (typeof obj === "string") return obj;

  // Return the language version, otherwise fall back to English
  return obj[lang] ?? obj.en ?? "";
}