export interface LocalizedString {
  en: string;
  fr: string;
  es: string;
  de: string;
}

export interface TimelineEvent {
  id: string;
  startYear: number;
  endYear?: number;
  name: LocalizedString;
  description: LocalizedString;
  details?: LocalizedString;
  // ADDED 'writing' to the type definition
  type: 'council' | 'saint' | 'pope' | 'writing';
}

// --- UI TRANSLATIONS ---
export const TIMELINE_UI = {
  title: {
    en: "Church Timeline",
    fr: "Chronologie de l'Église",
    es: "Cronología de la Iglesia",
    de: "Zeitleiste der Kirche",
  },
  subtitle: {
    en: "Explore 2000 years of Catholic History",
    fr: "Explorez 2000 ans d'histoire catholique",
    es: "Explora 2000 años de historia católica",
    de: "Entdecken Sie 2000 Jahre katholischer Geschichte",
  },
  searchPlaceholder: {
    en: "Search events...",
    fr: "Rechercher...",
    es: "Buscar eventos...",
    de: "Ereignisse suchen...",
  },
  filters: {
    all: { en: "All", fr: "Tous", es: "Todos", de: "Alle" },
    council: { en: "Councils", fr: "Conciles", es: "Concilios", de: "Konzile" },
    saint: { en: "Saints", fr: "Saints", es: "Santos", de: "Heilige" },
    pope: { en: "Popes", fr: "Papes", es: "Papas", de: "Päpste" },
    // ADDED WRITINGS TRANSLATION
    writing: { en: "Writings", fr: "Écrits", es: "Escritos", de: "Schriften" },
  }
};

// --- 1. COUNCILS ---
export const COUNCILS: TimelineEvent[] = [
  { id: 'c1', startYear: 325, endYear: 325, type: 'council', name: { en: "First Council of Nicaea", fr: "Nicée I", es: "Nicea I", de: "Nicäa I" }, description: { en: "Defined the divinity of Christ (Homoousios).", fr: "Divinité du Christ.", es: "Divinidad de Cristo.", de: "Gottheit Christi." } },
  { id: 'c2', startYear: 381, endYear: 381, type: 'council', name: { en: "First Council of Constantinople", fr: "Constantinople I", es: "Constantinopla I", de: "Konstantinopel I" }, description: { en: "Defined divinity of Holy Spirit.", fr: "Divinité du Saint-Esprit.", es: "Divinidad del Espíritu Santo.", de: "Gottheit des Heiligen Geistes." } },
  { id: 'c3', startYear: 431, endYear: 431, type: 'council', name: { en: "Council of Ephesus", fr: "Éphèse", es: "Éfeso", de: "Ephesos" }, description: { en: "Mary is Theotokos (Mother of God).", fr: "Marie est Theotokos.", es: "María es Theotokos.", de: "Maria ist Theotokos." } },
  { id: 'c4', startYear: 451, endYear: 451, type: 'council', name: { en: "Council of Chalcedon", fr: "Chalcédoine", es: "Calcedonia", de: "Chalcedon" }, description: { en: "Two natures of Christ (Divine & Human).", fr: "Deux natures du Christ.", es: "Dos naturalezas de Cristo.", de: "Zwei Naturen Christi." } },
  { id: 'c5', startYear: 553, endYear: 553, type: 'council', name: { en: "Second Council of Constantinople", fr: "Constantinople II", es: "Constantinopla II", de: "Konstantinopel II" }, description: { en: "Condemned Nestorian writings.", fr: "Condamnation des écrits nestoriens.", es: "Condena escritos nestorianos.", de: "Verurteilung nestorianischer Schriften." } },
  { id: 'c6', startYear: 680, endYear: 681, type: 'council', name: { en: "Third Council of Constantinople", fr: "Constantinople III", es: "Constantinopla III", de: "Konstantinopel III" }, description: { en: "Two wills in Christ (Divine & Human).", fr: "Deux volontés en Christ.", es: "Dos voluntades en Cristo.", de: "Zwei Willen Christi." } },
  { id: 'c7', startYear: 787, endYear: 787, type: 'council', name: { en: "Second Council of Nicaea", fr: "Nicée II", es: "Nicea II", de: "Nicäa II" }, description: { en: "Restoration of the veneration of icons.", fr: "Vénération des icônes.", es: "Veneración de imágenes.", de: "Ikonenverehrung." } },
  { id: 'c8', startYear: 869, endYear: 870, type: 'council', name: { en: "Fourth Council of Constantinople", fr: "Constantinople IV", es: "Constantinopla IV", de: "Konstantinopel IV" }, description: { en: "Condemnation of Photius.", fr: "Condamnation de Photius.", es: "Condena de Focio.", de: "Verurteilung von Photius." } },
  { id: 'c9', startYear: 1123, endYear: 1123, type: 'council', name: { en: "First Council of the Lateran", fr: "Latran I", es: "Letrán I", de: "Lateran I" }, description: { en: "Investiture Controversy.", fr: "Querelle des Investitures.", es: "Querella de las Investiduras.", de: "Investiturstreit." } },
  { id: 'c10', startYear: 1139, endYear: 1139, type: 'council', name: { en: "Second Council of the Lateran", fr: "Latran II", es: "Letrán II", de: "Lateran II" }, description: { en: "Celibacy of clergy mandatory.", fr: "Célibat des prêtres.", es: "Celibato sacerdotal.", de: "Priesterzölibat." } },
  { id: 'c11', startYear: 1179, endYear: 1179, type: 'council', name: { en: "Third Council of the Lateran", fr: "Latran III", es: "Letrán III", de: "Lateran III" }, description: { en: "Papal election rules.", fr: "Règles d'élection papale.", es: "Elección papal.", de: "Papstwahl." } },
  { id: 'c12', startYear: 1215, endYear: 1215, type: 'council', name: { en: "Fourth Council of the Lateran", fr: "Latran IV", es: "Letrán IV", de: "Lateran IV" }, description: { en: "Defined Transubstantiation.", fr: "Transsubstantiation.", es: "Transubstanciación.", de: "Transsubstantiation." } },
  { id: 'c13', startYear: 1245, endYear: 1245, type: 'council', name: { en: "First Council of Lyon", fr: "Lyon I", es: "Lyon I", de: "Lyon I" }, description: { en: "Deposition of Emperor Frederick II.", fr: "Déposition de Frédéric II.", es: "Deposición de Federico II.", de: "Absetzung Friedrichs II." } },
  { id: 'c14', startYear: 1274, endYear: 1274, type: 'council', name: { en: "Second Council of Lyon", fr: "Lyon II", es: "Lyon II", de: "Lyon II" }, description: { en: "Attempted reunion with East.", fr: "Tentative d'union avec l'Est.", es: "Intento de unión con Oriente.", de: "Unionsversuch mit Ostkirche." } },
  { id: 'c15', startYear: 1311, endYear: 1312, type: 'council', name: { en: "Council of Vienne", fr: "Vienne", es: "Vienne", de: "Vienne" }, description: { en: "Suppression of Knights Templar.", fr: "Suppression des Templiers.", es: "Supresión de los Templarios.", de: "Auflösung der Templer." } },
  { id: 'c16', startYear: 1414, endYear: 1418, type: 'council', name: { en: "Council of Constance", fr: "Constance", es: "Constanza", de: "Konstanz" }, description: { en: "Ended the Western Schism.", fr: "Fin du Grand Schisme.", es: "Fin del Cisma de Occidente.", de: "Ende des Abendländischen Schismas." } },
  { id: 'c17', startYear: 1431, endYear: 1445, type: 'council', name: { en: "Council of Florence", fr: "Florence", es: "Florencia", de: "Florenz" }, description: { en: "Reunion with Greeks (short lived).", fr: "Union avec les Grecs.", es: "Unión con los griegos.", de: "Union mit den Griechen." } },
  { id: 'c18', startYear: 1512, endYear: 1517, type: 'council', name: { en: "Fifth Council of the Lateran", fr: "Latran V", es: "Letrán V", de: "Lateran V" }, description: { en: "Church reform attempted.", fr: "Tentative de réforme.", es: "Intento de reforma.", de: "Reformversuch." } },
  { id: 'c19', startYear: 1545, endYear: 1563, type: 'council', name: { en: "Council of Trent", fr: "Trente", es: "Trento", de: "Trient" }, description: { en: "Response to Reformation. Biblical Canon defined.", fr: "Réponse à la Réforme.", es: "Respuesta a la Reforma.", de: "Antwort auf Reformation." } },
  { id: 'c20', startYear: 1869, endYear: 1870, type: 'council', name: { en: "First Vatican Council", fr: "Vatican I", es: "Vaticano I", de: "Vaticanum I" }, description: { en: "Papal Infallibility defined.", fr: "Infaillibilité pontificale.", es: "Infalibilidad papal.", de: "Päpstliche Unfehlbarkeit." } },
  { id: 'c21', startYear: 1962, endYear: 1965, type: 'council', name: { en: "Second Vatican Council", fr: "Vatican II", es: "Vaticano II", de: "Vaticanum II" }, description: { en: "Modern world, Liturgy.", fr: "Monde moderne, Liturgie.", es: "Mundo moderno, Liturgia.", de: "Moderne Welt, Liturgie." } }
];

// --- 2. SAINTS ---
export const SAINTS: TimelineEvent[] = [
  { id: 's1', startYear: 5, endYear: 67, type: 'saint', name: { en: "St. Paul", fr: "Saint Paul", es: "San Pablo", de: "Hl. Paulus" }, description: { en: "Apostle to the Gentiles.", fr: "Apôtre des Gentils.", es: "Apóstol de los gentiles.", de: "Apostel der Heiden." } },
  { id: 's2', startYear: 354, endYear: 430, type: 'saint', name: { en: "St. Augustine", fr: "Saint Augustin", es: "San Agustín", de: "Hl. Augustinus" }, description: { en: "Doctor of Grace.", fr: "Docteur de la Grâce.", es: "Doctor de la Gracia.", de: "Lehrer der Gnade." } },
  { id: 's3', startYear: 1181, endYear: 1226, type: 'saint', name: { en: "St. Francis of Assisi", fr: "Saint François", es: "San Francisco", de: "Hl. Franz" }, description: { en: "Franciscan Founder.", fr: "Fondateur.", es: "Fundador.", de: "Gründer." } },
  { id: 's4', startYear: 1225, endYear: 1274, type: 'saint', name: { en: "St. Thomas Aquinas", fr: "Saint Thomas d'Aquin", es: "Sto. Tomás", de: "Hl. Thomas" }, description: { en: "Angelic Doctor.", fr: "Docteur Angélique.", es: "Doctor Angélico.", de: "Doctor Angelicus." } },
  { id: 's5', startYear: 1873, endYear: 1897, type: 'saint', name: { en: "St. Thérèse of Lisieux", fr: "Ste Thérèse", es: "Sta. Teresita", de: "Hl. Therese" }, description: { en: "Little Flower.", fr: "Petite Fleur.", es: "Pequeña Flor.", de: "Kleine Blume." } },
  { id: 's6', startYear: 1887, endYear: 1968, type: 'saint', name: { en: "St. Padre Pio", fr: "Padre Pio", es: "Padre Pío", de: "Pater Pio" }, description: { en: "Stigmatist.", fr: "Stigmatisé.", es: "Estigmatizado.", de: "Stigmatisierter." } }
];

// --- 3. POPES ---
export const POPES: TimelineEvent[] = [
  { id: 'p1', startYear: 30, endYear: 64, type: 'pope', name: { en: "St. Peter", fr: "Saint Pierre", es: "San Pedro", de: "Hl. Petrus" }, description: { en: "First Pope.", fr: "Premier Pape.", es: "Primer Papa.", de: "Erster Papst." } },
  { id: 'p2', startYear: 440, endYear: 461, type: 'pope', name: { en: "Leo the Great", fr: "Léon le Grand", es: "León Magno", de: "Leo der Große" }, description: { en: "Defied Attila.", fr: "Défia Attila.", es: "Desafió a Atila.", de: "Trotzte Attila." } },
  { id: 'p3', startYear: 590, endYear: 604, type: 'pope', name: { en: "Gregory the Great", fr: "Grégoire le Grand", es: "Gregorio Magno", de: "Gregor der Große" }, description: { en: "Gregorian Chant.", fr: "Chant grégorien.", es: "Canto gregoriano.", de: "Gregorianischer Choral." } },
  { id: 'p4', startYear: 1978, endYear: 2005, type: 'pope', name: { en: "John Paul II", fr: "Jean-Paul II", es: "Juan Pablo II", de: "Johannes Paul II." }, description: { en: "Totus Tuus.", fr: "Totus Tuus.", es: "Totus Tuus.", de: "Totus Tuus." } },
  { id: 'p5', startYear: 2005, endYear: 2013, type: 'pope', name: { en: "Benedict XVI", fr: "Benoît XVI", es: "Benedicto XVI", de: "Benedikt XVI." }, description: { en: "Resigned.", fr: "A démissionné.", es: "Renunció.", de: "Zurückgetreten." } }
];

// --- 4. WRITINGS (NEW) ---
export const WRITINGS: TimelineEvent[] = [
  { id: 'w1', startYear: 70, endYear: 100, type: 'writing', name: { en: "The Didache", fr: "La Didachè", es: "La Didaché", de: "Die Didache" }, description: { en: "Teaching of the Twelve Apostles.", fr: "Enseignement des Douze Apôtres.", es: "Enseñanza de los Doce Apóstoles.", de: "Lehre der Zwölf Apostel." } },
  { id: 'w2', startYear: 413, endYear: 426, type: 'writing', name: { en: "City of God", fr: "La Cité de Dieu", es: "La Ciudad de Dios", de: "Der Gottesstaat" }, description: { en: "St. Augustine's masterpiece.", fr: "Chef-d'œuvre de Saint Augustin.", es: "Obra maestra de San Agustín.", de: "Hauptwerk von Hl. Augustinus." } },
  { id: 'w3', startYear: 1265, endYear: 1274, type: 'writing', name: { en: "Summa Theologica", fr: "Somme Théologique", es: "Suma Teológica", de: "Summa Theologica" }, description: { en: "Aquinas' compendium of theology.", fr: "Compendium de théologie de Thomas d'Aquin.", es: "Compendio de teología de Aquino.", de: "Theologisches Kompendium von Thomas von Aquin." } },
  { id: 'w4', startYear: 1609, endYear: 1609, type: 'writing', name: { en: "Introduction to the Devout Life", fr: "Introduction à la vie dévote", es: "Introducción a la vida devota", de: "Anleitung zum frommen Leben" }, description: { en: "St. Francis de Sales.", fr: "Saint François de Sales.", es: "San Francisco de Sales.", de: "Hl. Franz von Sales." } },
  { id: 'w5', startYear: 1992, endYear: 1992, type: 'writing', name: { en: "Catechism of the Catholic Church", fr: "Catéchisme de l'Église catholique", es: "Catecismo de la Iglesia Católica", de: "Katechismus der Katholischen Kirche" }, description: { en: "Promulgated by Pope John Paul II.", fr: "Promulgué par le pape Jean-Paul II.", es: "Promulgado por el Papa Juan Pablo II.", de: "Promulgiert von Papst Johannes Paul II." } }
];