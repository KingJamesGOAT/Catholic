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
    en: "Catholic History Timeline",
    fr: "Frise Chronologique Catholique",
    es: "Cronología de la Historia Católica",
    de: "Zeitleiste der katholischen Geschichte"
  },
  subtitle: {
    en: "Explore the Councils, Saints, Popes, and Writings through the ages.",
    fr: "Explorez les Conciles, Saints, Papes et Écrits à travers les âges.",
    es: "Explora los Concilios, Santos, Papas y Escritos a través de los siglos.",
    de: "Erkunden Sie Konzile, Heilige, Päpste und Schriften durch die Zeitalter."
  },
  filters: {
    all: { en: "All", fr: "Tous", es: "Todos", de: "Alle" },
    council: { en: "Councils", fr: "Conciles", es: "Concilios", de: "Konzile" },
    saint: { en: "Saints", fr: "Saints", es: "Santos", de: "Heilige" },
    pope: { en: "Popes", fr: "Papes", es: "Papas", de: "Päpste" },
    writing: { en: "Writings", fr: "Écrits", es: "Escritos", de: "Schriften" },
    king: { en: "Kings", fr: "Rois", es: "Reyes", de: "Könige" }
  },
  searchPlaceholder: {
    en: "Search events, years...",
    fr: "Rechercher événements, années...",
    es: "Buscar eventos, años...",
    de: "Ereignisse, Jahre suchen..."
  },
  // --- HELP MENU ---
  searchHelpTitle: {
    en: "Search Cheatsheet",
    fr: "Aide Recherche",
    es: "Guía de Búsqueda",
    de: "Suchhilfe"
  },
  helpCategory: {
    en: "Filter type",
    fr: "Filtrer par type",
    es: "Filtrar por tipo",
    de: "Nach Typ filtern"
  },
  helpText: {
    en: "Contains text",
    fr: "Contient le texte",
    es: "Contiene texto",
    de: "Enthält Text"
  },
  helpAfter: {
    en: "After year",
    fr: "Après l'année",
    es: "Después del año",
    de: "Nach Jahr"
  },
  helpBefore: {
    en: "Before year",
    fr: "Avant l'année",
    es: "Antes del año",
    de: "Vor Jahr"
  },
  helpRange: {
    en: "Year range",
    fr: "Entre années",
    es: "Rango de años",
    de: "Jahresbereich"
  },
  helpCentury: {
    en: "Century",
    fr: "Siècle",
    es: "Siglo",
    de: "Jahrhundert"
  },
  helpExact: {
    en: "Exact year",
    fr: "Année exacte",
    es: "Año exacto",
    de: "Genaues Jahr"
  },
  // --- LOGIC TOGGLE ---
  logicAny: {
    en: "Match Any (OR)",
    fr: "Au choix (OU)",
    es: "Cualquiera (O)",
    de: "Beliebig (ODER)"
  },
  logicAll: {
    en: "Match All (AND)",
    fr: "Tout (ET)",
    es: "Todos (Y)",
    de: "Alle (UND)"
  }
};

// --- 1. COUNCILS ---
export const COUNCILS: TimelineEvent[] = [
  { 
    id: 'c1', 
    startYear: 325, 
    endYear: 325, 
    type: 'council', 
    name: { en: "First Council of Nicaea", fr: "Nicée I", es: "Nicea I", de: "Nicäa I" }, 
    description: { 
      en: "Condemned Arianism, which denied the divinity of Christ. Defined the Son as 'consubstantial' (homoousios) with the Father. Formulated the initial Nicene Creed and fixed the method for calculating the date of Easter.", 
      fr: "Condamna l'arianisme qui niait la divinité du Christ. Définit le Fils comme 'consubstantiel' (homoousios) au Père. Formula le Credo de Nicée initial et fixa la méthode de calcul de la date de Pâques.", 
      es: "Condenó el arrianismo, que negaba la divinidad de Cristo. Definió al Hijo como 'consubstantial' (homoousios) al Padre. Formuló el Credo de Nicea inicial y fijó el método para calcular la fecha de Pascua.", 
      de: "Verurteilte den Arianismus, der die Gottheit Christi leugnete. Definierte den Sohn als 'wesensgleich' (homoousios) mit dem Vater. Formulierte das erste Glaubensbekenntnis von Nicäa und legte das Osterdatum fest." 
    } 
  },
  { 
    id: 'c2', 
    startYear: 381, 
    endYear: 381, 
    type: 'council', 
    name: { en: "First Council of Constantinople", fr: "Constantinople I", es: "Constantinopla I", de: "Konstantinopel I" }, 
    description: { 
      en: "Condemned the Macedonians who denied the divinity of the Holy Spirit. Expanded the Nicene Creed to the form used today, affirming the Spirit proceeds from the Father and is worshipped with the Father and Son.", 
      fr: "Condamna les Macédoniens qui niaient la divinité du Saint-Esprit. Élargit le Credo de Nicée à la forme actuelle, affirmant que l'Esprit procède du Père et est adoré avec le Père et le Fils.", 
      es: "Condenó a los macedonios que negaban la divinidad del Espíritu Santo. Amplió el Credo de Nicea a la forma actual, afirmando que el Espíritu procede del Padre y es adorado con el Padre y el Hijo.", 
      de: "Verurteilte die Macedonianer, die die Gottheit des Heiligen Geistes leugneten. Erwies das Glaubensbekenntnis zur heutigen Form und bekräftigte, dass der Geist vom Vater ausgeht und mit ihm und dem Sohn angebetet wird." 
    } 
  },
  { 
    id: 'c_loc_rome', 
    startYear: 382, 
    endYear: 382, 
    type: 'council', 
    name: { en: "Council of Rome", fr: "Concile de Rome", es: "Concilio de Roma", de: "Synode von Rom" }, 
    description: { 
      en: "Convened by Pope Damasus I. Issued the 'Decree of Damasus', providing the first complete list of the Canon of Scripture (Old and New Testament) identical to the Catholic Bible today, and affirmed Papal primacy.", 
      fr: "Convoqué par le pape Damase Ier. Publia le 'Décret de Damase', fournissant la première liste complète du Canon des Écritures (Ancien et Nouveau Testament) identique à la Bible catholique actuelle.", 
      es: "Convocado por el Papa Dámaso I. Emitió el 'Decreto de Dámaso', proporcionando la primera lista completa del Canon de las Escrituras idéntica a la Biblia católica actual, y afirmó la primacía papal.", 
      de: "Einberufen von Papst Damasus I. Erließ das 'Decretum Damasi', das die erste vollständige Liste des Bibelkanons (Altes und Neues Testament) enthielt, identisch mit der heutigen katholischen Bibel." 
    } 
  },
  { 
    id: 'c_loc_hippo', 
    startYear: 393, 
    endYear: 393, 
    type: 'council', 
    name: { en: "Council of Hippo", fr: "Concile d'Hippone", es: "Concilio de Hipona", de: "Konzil von Hippo" }, 
    description: { 
      en: "A North African synod attended by St. Augustine. It was the first council to formally ratify the list of New Testament books as we know them today, alongside the Old Testament Deuterocanon.", 
      fr: "Synode nord-africain auquel participa Saint Augustin. Ce fut le premier concile à ratifier formellement la liste des livres du Nouveau Testament telle que nous la connaissons, ainsi que le Deutérocanon.", 
      es: "Sínodo norteafricano con la presencia de San Agustín. Fue el primer concilio en ratificar formalmente la lista de libros del Nuevo Testamento tal como los conocemos hoy, junto con el Deuterocanon.", 
      de: "Eine nordafrikanische Synode unter Teilnahme des Hl. Augustinus. Es war das erste Konzil, das die Liste der neutestamentlichen Bücher in ihrer heutigen Form sowie den Deuterokanon formell bestätigte." 
    } 
  },
  { 
    id: 'c_loc_carthage', 
    startYear: 397, 
    endYear: 397, 
    type: 'council', 
    name: { en: "Council of Carthage", fr: "Concile de Carthage", es: "Concilio de Cartago", de: "Konzil von Karthago" }, 
    description: { 
      en: "Confirmed the Biblical Canon defined at Hippo. Strictly forbade the reading of non-canonical books in the liturgy under the name of divine Scripture. Sent its acts to Rome for confirmation.", 
      fr: "Confirma le Canon biblique défini à Hippone. Interdit strictement la lecture de livres non canoniques dans la liturgie sous le nom d'Écriture divine. Envoya ses actes à Rome pour confirmation.", 
      es: "Confirmó el Canon bíblico definido en Hipona. Prohibió estrictamente la lectura de libros no canónicos en la liturgia bajo el nombre de Escritura divina. Envió sus actas a Roma para confirmación.", 
      de: "Bestätigte den in Hippo definierten Bibelkanon. Verbot streng das Lesen nicht-kanonischer Bücher in der Liturgie unter dem Namen der göttlichen Schrift. Sandte seine Akten zur Bestätigung nach Rom." 
    } 
  },
  { 
    id: 'c3', 
    startYear: 431, 
    endYear: 431, 
    type: 'council', 
    name: { en: "Council of Ephesus", fr: "Éphèse", es: "Éfeso", de: "Ephesos" }, 
    description: { 
      en: "Condemned Nestorianism, which separated Christ into two persons. Defined Mary as 'Theotokos' (Mother of God) to affirm that she bore the one Divine Person of Christ, not just his human nature.", 
      fr: "Condamna le nestorianisme, qui séparait le Christ en deux personnes. Définit Marie comme 'Theotokos' (Mère de Dieu) pour affirmer qu'elle a porté la Personne Divine du Christ, pas seulement sa nature humaine.", 
      es: "Condenó el nestorianismo, que separaba a Cristo en dos personas. Definió a María como 'Theotokos' (Madre de Dios) para afirmar que ella dio a luz a la Persona Divina de Cristo.", 
      de: "Verurteilte den Nestorianismus, der Christus in zwei Personen trennte. Definierte Maria als 'Theotokos' (Gottesgebärerin), um zu bekräftigen, dass sie die eine göttliche Person Christi gebar." 
    } 
  },
  { 
    id: 'c4', 
    startYear: 451, 
    endYear: 451, 
    type: 'council', 
    name: { en: "Council of Chalcedon", fr: "Chalcédoine", es: "Calcedonia", de: "Chalcedon" }, 
    description: { 
      en: "Condemned Monophysitism (one nature). Defined the Hypostatic Union: Christ is one Divine Person in two distinct natures, divine and human, unconfused, unchangeable, indivisible, and inseparable.", 
      fr: "Condamna le monophysitisme. Définit l'Union Hypostatique : le Christ est une Personne Divine en deux natures distinctes, divine et humaine, sans confusion, sans changement, sans division et sans séparation.", 
      es: "Condenó el monofisismo. Definió la Unión Hipostática: Cristo es una Persona Divina en dos naturalezas distintas, divina y humana, sin confusión, sin cambio, sin división y sin separación.", 
      de: "Verurteilte den Monophysitismus. Definierte die hypostatische Union: Christus ist eine göttliche Person in zwei naturen, göttlich und menschlich, unvermischt, unwandelbar, ungeteilt und untrennbar." 
    } 
  },
  { 
    id: 'c5', 
    startYear: 553, 
    endYear: 553, 
    type: 'council', 
    name: { en: "Second Council of Constantinople", fr: "Constantinople II", es: "Constantinopla II", de: "Konstantinopel II" }, 
    description: { 
      en: "Condemned the 'Three Chapters' (writings of Theodore, Theodoret, and Ibas) to reconcile with Monophysites, reaffirming the Cyrillian interpretation of Chalcedon against Nestorian tendencies.", 
      fr: "Condamna les 'Trois Chapitres' pour se réconcilier avec les monophysites, réaffirmant l'interprétation cyrillienne de Chalcédoine contre les tendances nestoriennes.", 
      es: "Condenó los 'Tres Capítulos' para reconciliarse con los monofisitas, reafirmando la interpretación ciriliana de Calcedonia contra las tendencias nestorianas.", 
      de: "Verurteilte die 'Drei Kapitel', um sich mit den Monophysiten zu versöhnen, und bekräftigte die kyrillische Interpretation von Chalcedon gegen nestorianische Tendenzen." 
    } 
  },
  { 
    id: 'c6', 
    startYear: 680, 
    endYear: 681, 
    type: 'council', 
    name: { en: "Third Council of Constantinople", fr: "Constantinople III", es: "Constantinopla III", de: "Konstantinopel III" }, 
    description: { 
      en: "Condemned Monothelitism (one will). Affirmed that Christ has two natural wills and two natural operations, divine and human, in perfect harmony, with the human will subject to the divine.", 
      fr: "Condamna le monothélisme. Affirma que le Christ a deux volontés naturelles et deux opérations, divine et humaine, en parfaite harmonie, la volonté humaine étant soumise à la divine.", 
      es: "Condenó el monotelismo. Afirmó que Cristo tiene dos voluntades naturales y dos operaciones, divina y humana, en perfecta armonía, con la voluntad humana sujeta a la divina.", 
      de: "Verurteilte den Monothelitismus. Bekräftigte, dass Christus zwei natürliche Willen und zwei natürliche Wirkungsweisen hat, göttlich und menschlich, wobei der menschliche Wille dem göttlichen untergeordnet ist." 
    } 
  },
  { 
    id: 'c7', 
    startYear: 787, 
    endYear: 787, 
    type: 'council', 
    name: { en: "Second Council of Nicaea", fr: "Nicée II", es: "Nicea II", de: "Nicäa II" }, 
    description: { 
      en: "Condemned Iconoclasm. Restored the veneration of sacred images (icons) of Christ, Mary, and the Saints, distinguishing between respectful veneration (dulia) and adoration (latria) due to God alone.", 
      fr: "Condamna l'iconoclasme. Restaura la vénération des images sacrées, distinguant entre la vénération respectueuse (dulia) et l'adoration (latria) due à Dieu seul.", 
      es: "Condenó la iconoclasia. Restauró la veneración de imágenes sagradas, distinguiendo entre veneración respetuosa (dulía) y adoración (latría) debida solo a Dios.", 
      de: "Verurteilte den Ikonoklasmus. Stellte die Verehrung heiliger Bilder wieder her und unterschied zwischen ehrerbietiger Verehrung (Dulia) und Anbetung (Latria), die allein Gott gebührt." 
    } 
  },
  { 
    id: 'c8', 
    startYear: 869, 
    endYear: 870, 
    type: 'council', 
    name: { en: "Fourth Council of Constantinople", fr: "Constantinople IV", es: "Constantinopla IV", de: "Konstantinopel IV" }, 
    description: { 
      en: "Condemned Photius, who had usurped the Patriarchate of Constantinople. Reaffirmed the primacy of the Pope and the use of images. This council is not accepted by the Eastern Orthodox.", 
      fr: "Condamna Photius, qui avait usurpé le Patriarcat. Réaffirma la primauté du Pape et l'usage des images. Ce concile n'est pas reconnu par les Orthodoxes.", 
      es: "Condenó a Focio, quien había usurpado el Patriarcado. Reafirmó la primacía del Papa y el uso de imágenes. Este concilio no es aceptado por los ortodoxos.", 
      de: "Verurteilte Photius, der das Patriarchat usurpiert hatte. Bekräftigte den Primat des Papstes und den Gebrauch von Bildern. Dieses Konzil wird von den Orthodoxen nicht anerkannt." 
    } 
  },
  { 
    id: 'c9', 
    startYear: 1123, 
    endYear: 1123, 
    type: 'council', 
    name: { en: "First Council of the Lateran", fr: "Latran I", es: "Letrán I", de: "Lateran I" }, 
    description: { 
      en: "First council in the West. Ended the Investiture Controversy between Pope and Emperor. Consolidated clerical celibacy and condemned simony (buying/selling church offices).", 
      fr: "Premier concile en Occident. Mit fin à la querelle des Investitures. Consolida le célibat clérical et condamna la simonie (achat/vente de charges ecclésiastiques).", 
      es: "Primer concilio en Occidente. Puso fin a la Querella de las Investiduras. Consolidó el celibato clerical y condenó la simonía (compra/venta de cargos eclesiásticos).", 
      de: "Erstes Konzil im Westen. Beendete den Investiturstreit. Festigte den Zölibat der Kleriker und verurteilte die Simonie (Kauf/Verkauf von Kirchenämtern)." 
    } 
  },
  { 
    id: 'c10', 
    startYear: 1139, 
    endYear: 1139, 
    type: 'council', 
    name: { en: "Second Council of the Lateran", fr: "Latran II", es: "Letrán II", de: "Lateran II" }, 
    description: { 
      en: "Addressed the schism of Antipope Anacletus II. Enacted strict canons against clerical marriage, declaring such marriages invalid, and regulated dress and conduct for the clergy.", 
      fr: "Traita du schisme de l'antipape Anaclet II. Promulgua des canons stricts contre le mariage des prêtres, déclarant ces mariages invalides, et régula la conduite du clergé.", 
      es: "Abordó el cisma del antipapa Anacleto II. Promulgó cánones estrictos contra el matrimonio clerical, declarando inválidos tales matrimonios, y reguló la conducta del clero.", 
      de: "Behandelte das Schisma von Gegenpapst Anaklet II. Erließ strenge Kanones gegen die Priesterehe, erklärte solche Ehen für ungültig und regelte das Verhalten des Klerus." 
    } 
  },
  { 
    id: 'c11', 
    startYear: 1179, 
    endYear: 1179, 
    type: 'council', 
    name: { en: "Third Council of the Lateran", fr: "Latran III", es: "Letrán III", de: "Lateran III" }, 
    description: { 
      en: "Established the two-thirds majority rule for papal elections by the College of Cardinals. Condemned the Albigensian and Waldensian heresies and regulated the appointment of bishops.", 
      fr: "Établit la règle de la majorité des deux tiers pour l'élection papale. Condamna les hérésies cathare et vaudoise et régula la nomination des évêques.", 
      es: "Estableció la regla de la mayoría de dos tercios para la elección papal. Condenó las herejías albigense y valdense y reguló el nombramiento de obispos.", 
      de: "Führte die Zweidrittelmehrheit für die Papstwahl ein. Verurteilte die albigensischen und waldensischen Häresien und regelte die Ernennung von Bischöfen." 
    } 
  },
  { 
    id: 'c12', 
    startYear: 1215, 
    endYear: 1215, 
    type: 'council', 
    name: { en: "Fourth Council of the Lateran", fr: "Latran IV", es: "Letrán IV", de: "Lateran IV" }, 
    description: { 
      en: "Defined Transubstantiation (bread and wine become Christ's body and blood). Mandated annual confession and communion (Easter Duty). Condemned the Cathars and Trinitarian errors.", 
      fr: "Définit la Transsubstantiation. Imposa la confession et la communion annuelles (devoir pascal). Condamna les Cathares et certaines erreurs trinitaires.", 
      es: "Definió la Transubstanciación. Ordenó la confesión y comunión anuales (deber pascual). Condenó a los cátaros y errores trinitarios.", 
      de: "Definierte die Transsubstantiation. Ordnete die jährliche Beichte und Kommunion an (Osterpflicht). Verurteilte die Katharer und trinitarische Irrtümer." 
    } 
  },
  { 
    id: 'c13', 
    startYear: 1245, 
    endYear: 1245, 
    type: 'council', 
    name: { en: "First Council of Lyon", fr: "Lyon I", es: "Lyon I", de: "Lyon I" }, 
    description: { 
      en: "Deposed Emperor Frederick II for sacrilege and heresy. Directed a new crusade under King Louis IX of France. Addressed the Latin Empire of Constantinople and the Holy Land.", 
      fr: "Déposa l'empereur Frédéric II pour sacrilège et hérésie. Ordonna une nouvelle croisade sous Saint Louis. Traita de l'Empire latin de Constantinople et de la Terre Sainte.", 
      es: "Depuso al emperador Federico II por sacrilegio y herejía. Dirigió una nueva cruzada bajo el rey Luis IX. Abordó el Imperio Latino de Constantinopla y Tierra Santa.", 
      de: "Setzte Kaiser Friedrich II. wegen Sakrilegs und Häresie ab. Ordnete einen neuen Kreuzzug unter König Ludwig IX. an. Behandelte das Lateinische Kaiserreich von Konstantinopel." 
    } 
  },
  { 
    id: 'c14', 
    startYear: 1274, 
    endYear: 1274, 
    type: 'council', 
    name: { en: "Second Council of Lyon", fr: "Lyon II", es: "Lyon II", de: "Lyon II" }, 
    description: { 
      en: "Effected a temporary reunion with the Greek Church. Defined that the Holy Spirit proceeds from the Father and the Son (Filioque). Regulated papal conclaves to speed up elections.", 
      fr: "Réalisa une union temporaire avec l'Église grecque. Définit que le Saint-Esprit procède du Père et du Fils (Filioque). Régula les conclaves pour accélérer les élections.", 
      es: "Logró una unión temporal con la Iglesia griega. Definió que el Espíritu Santo procede del Padre y del Hijo (Filioque). Reguló los cónclaves papales.", 
      de: "Erreichte eine vorübergehende Wiedervereinigung mit der griechischen Kirche. Definierte das Filioque. Regelte das päpstliche Konklave, um Wahlen zu beschleunigen." 
    } 
  },
  { 
    id: 'c15', 
    startYear: 1311, 
    endYear: 1312, 
    type: 'council', 
    name: { en: "Council of Vienne", fr: "Vienne", es: "Vienne", de: "Vienne" }, 
    description: { 
      en: "Suppressed the Order of Knights Templar at the instigation of King Philip IV of France. Discussed the reform of the clergy and the collection of tithes for a new crusade.", 
      fr: "Supprima l'Ordre des Templiers à l'instigation de Philippe le Bel. Discuta de la réforme du clergé et de la collecte des dîmes pour une nouvelle croisade.", 
      es: "Suprimió la Orden de los Templarios a instancias del rey Felipe IV. Discutió la reforma del clero y la recaudación de diezmos para una nueva cruzada.", 
      de: "Löste den Templerorden auf Drängen von König Philipp IV. auf. Diskutierte die Reform des Klerus und die Erhebung des Zehnten für einen neuen Kreuzzug." 
    } 
  },
  { 
    id: 'c16', 
    startYear: 1414, 
    endYear: 1418, 
    type: 'council', 
    name: { en: "Council of Constance", fr: "Constance", es: "Constanza", de: "Konstanz" }, 
    description: { 
      en: "Resolved the Great Western Schism by electing Pope Martin V. Condemned Jan Hus and John Wycliffe. Issued 'Haec Sancta' on conciliarism (later rejected by the Church).", 
      fr: "Résolut le Grand Schisme d'Occident en élisant Martin V. Condamna Jan Hus et Wycliffe. Publia 'Haec Sancta' sur le conciliarisme (rejeté plus tard).", 
      es: "Resolvió el Gran Cisma de Occidente eligiendo al Papa Martín V. Condenó a Jan Hus y Wycliffe. Emitió 'Haec Sancta' sobre el conciliarismo (rechazado posteriormente).", 
      de: "Beendete das Abendländische Schisma durch die Wahl von Papst Martin V. Verurteilte Jan Hus und Wycliffe. Erließ 'Haec Sancta' zum Konziliarismus (später abgelehnt)." 
    } 
  },
  { 
    id: 'c17', 
    startYear: 1431, 
    endYear: 1445, 
    type: 'council', 
    name: { en: "Council of Florence", fr: "Florence", es: "Florencia", de: "Florenz" }, 
    description: { 
      en: "Achieved a short-lived union with the Greek, Armenian, and Coptic churches. Defined the nature of the Pope's primacy and the existence of Purgatory. The union failed after Constantinople fell.", 
      fr: "Réussit une union éphémère avec les Grecs, Arméniens et Coptes. Définit la primauté du Pape et l'existence du Purgatoire. L'union échoua après la chute de Constantinople.", 
      es: "Logró una unión efímera con griegos, armenios y coptos. Definió la primacía del Papa y la existencia del Purgatorio. La unión fracasó tras la caída de Constantinopla.", 
      de: "Erreichte eine kurzlebige Union mit den Griechen, Armeniern und Kopten. Definierte den Primat des Papstes und das Fegefeuer. Die Union scheiterte nach dem Fall Konstantinopels." 
    } 
  },
  { 
    id: 'c18', 
    startYear: 1512, 
    endYear: 1517, 
    type: 'council', 
    name: { en: "Fifth Council of the Lateran", fr: "Latran V", es: "Letrán V", de: "Lateran V" }, 
    description: { 
      en: "Attempted internal reform of the Church before the Reformation. Condemned the view that the human soul is mortal. Addressed the pragmatics of church-state relations.", 
      fr: "Tenta une réforme interne avant la Réforme protestante. Condamna l'idée que l'âme humaine est mortelle. Traita des relations pragmatiques Église-État.", 
      es: "Intentó una reforma interna antes de la Reforma. Condenó la visión de que el alma humana es mortal. Abordó las relaciones pragmáticas Iglesia-Estado.", 
      de: "Versuchte eine interne Reform vor der Reformation. Verurteilte die Ansicht, die menschliche Seele sei sterblich. Behandelte das Verhältnis von Kirche und Staat." 
    } 
  },
  { 
    id: 'c19', 
    startYear: 1545, 
    endYear: 1563, 
    type: 'council', 
    name: { en: "Council of Trent", fr: "Trente", es: "Trento", de: "Trient" }, 
    description: { 
      en: "The definitive response to the Reformation. Defined the Canon of Scripture (with Deuterocanon), Justification, the Seven Sacraments, and the Mass. Initiated the Counter-Reformation.", 
      fr: "Réponse définitive à la Réforme. Définit le Canon des Écritures, la Justification, les Sept Sacrements et la Messe. Lança la Contre-Réforme.", 
      es: "Respuesta definitiva a la Reforma. Definió el Canon de las Escrituras, la Justificación, los Siete Sacramentos y la Misa. Inició la Contrarreforma.", 
      de: "Die definitive Antwort auf die Reformation. Definierte den Bibelkanon, die Rechtfertigung, die sieben Sakramente und die Messe. Leitete die Gegenreformation ein." 
    } 
  },
  { 
    id: 'c20', 
    startYear: 1869, 
    endYear: 1870, 
    type: 'council', 
    name: { en: "First Vatican Council", fr: "Vatican I", es: "Vaticano I", de: "Vaticanum I" }, 
    description: { 
      en: "Defined the dogma of Papal Infallibility: the Pope is preserved from error when defining doctrine concerning faith or morals ex cathedra. Defined the relationship between faith and reason.", 
      fr: "Définit le dogme de l'Infaillibilité Pontificale. Le Pape est préservé d'erreur lorsqu'il définit ex cathedra la doctrine. Définit la relation foi et raison.", 
      es: "Definió el dogma de la Infalibilidad Papal. El Papa está preservado del error al definir doctrina ex cathedra. Definió la relación entre fe y razón.", 
      de: "Definierte das Dogma der päpstlichen Unfehlbarkeit. Der Papst ist bei Ex-Cathedra-Entscheidungen vor Irrtum bewahrt. Definierte das Verhältnis von Glaube und Vernunft." 
    } 
  },
  { 
    id: 'c21', 
    startYear: 1962, 
    endYear: 1965, 
    type: 'council', 
    name: { en: "Second Vatican Council", fr: "Vatican II", es: "Vaticano II", de: "Vaticanum II" }, 
    description: { 
      en: "Addressed the Church's relation to the modern world. Reformed the Liturgy (Sacrosanctum Concilium), emphasized ecumenism, religious freedom, and the universal call to holiness.", 
      fr: "Traita de la relation de l'Église au monde moderne. Réforma la Liturgie, souligna l'œcuménisme, la liberté religieuse et l'appel universel à la sainteté.", 
      es: "Abordó la relación de la Iglesia con el mundo moderno. Reformó la Liturgia, enfatizó el ecumenismo, la libertad religiosa y la llamada universal a la santidad.", 
      de: "Behandelte das Verhältnis der Kirche zur modernen Welt. Reformierte die Liturgie, betonte die Ökumene, die Religionsfreiheit und den allgemeinen Ruf zur Heiligkeit." 
    } 
  }
];

// --- 2. SAINTS ---
export const SAINTS: TimelineEvent[] = [
{ 
    id: 's_irenaeus', 
    startYear: 130, 
    endYear: 202, 
    type: 'saint', 
    name: { en: "Dr St. Irenaeus of Lyons", fr: "Dr St Irénée de Lyon", es: "Dr San Ireneo", de: "Dr Hl. Irenäus" }, 
    description: { 
      en: "Doctor of Unity. A disciple of St. Polycarp (who knew St. John). His work 'Against Heresies' is a foundational defense of Catholic orthodoxy against Gnosticism.", 
      fr: "Docteur de l'Unité. Disciple de saint Polycarpe. Son œuvre 'Contre les Hérésies' est une défense fondamentale de l'orthodoxie contre le gnosticisme.", 
      es: "Doctor de la Unidad. Discípulo de San Policarpo. Su obra 'Contra las Herejías' es una defensa fundamental de la ortodoxia contra el gnosticismo.", 
      de: "Lehrer der Einheit. Schüler von Polykarp. Sein Werk 'Gegen die Häresien' ist eine grundlegende Verteidigung der Orthodoxie gegen die Gnosis." 
    } 
  },
  { 
    id: 's_athanasius', 
    startYear: 296, 
    endYear: 373, 
    type: 'saint', 
    name: { en: "Dr St. Athanasius", fr: "Dr St Athanase", es: "Dr San Atanasio", de: "Dr Hl. Athanasius" }, 
    description: { 
      en: "Doctor of the Church. The 'Father of Orthodoxy'. Heroically defended the divinity of Christ against the Arian heresy, suffering exile five times.", 
      fr: "Docteur de l'Église. 'Père de l'Orthodoxie'. Défendit héroïquement la divinité du Christ contre l'arianisme, subissant l'exil cinq fois.", 
      es: "Doctor de la Iglesia. 'Padre de la Ortodoxia'. Defendió heroicamente la divinidad de Cristo contra el arrianismo, sufriendo exilio cinco veces.", 
      de: "Kirchenlehrer. 'Vater der Orthodoxie'. Verteidigte heldenhaft die Gottheit Christi gegen den Arianismus und wurde fünfmal verbannt." 
    } 
  },
  { 
    id: 's_ephrem', 
    startYear: 306, 
    endYear: 373, 
    type: 'saint', 
    name: { en: "Dr St. Ephrem", fr: "Dr St Éphrem", es: "Dr San Efrén", de: "Dr Hl. Ephräm" }, 
    description: { 
      en: "Doctor of the Church. Known as the 'Harp of the Spirit'. He wrote beautiful theological hymns and poems that defended the faith and honored Mary.", 
      fr: "Docteur de l'Église. 'Harpe de l'Esprit'. Il écrivit de magnifiques hymnes et poèmes théologiques défendant la foi et honorant Marie.", 
      es: "Doctor de la Iglesia. 'Arpa del Espíritu'. Escribió hermosos himnos y poemas teológicos que defendían la fe y honraban a María.", 
      de: "Kirchenlehrer. 'Harfe des Geistes'. Schrieb theologische Hymnen und Gedichte zur Verteidigung des Glaubens und zur Ehre Mariens." 
    } 
  },
  { 
    id: 's_hilary', 
    startYear: 310, 
    endYear: 367, 
    type: 'saint', 
    name: { en: "Dr St. Hilary of Poitiers", fr: "Dr St Hilaire", es: "Dr San Hilario", de: "Dr Hl. Hilarius" }, 
    description: { 
      en: "Doctor of the Church. The 'Hammer of the Arians' (Malleus Arianorum). Defended the Trinity in the West and was exiled to Phrygia.", 
      fr: "Docteur de l'Église. 'Marteau des Ariens'. Défendit la Trinité en Occident et fut exilé en Phrygie.", 
      es: "Doctor de la Iglesia. 'Martillo de los Arrianos'. Defendió la Trinidad en Occidente y fue exiliado a Frigia.", 
      de: "Kirchenlehrer. 'Hammer der Arianer'. Verteidigte die Trinität im Westen und wurde nach Phrygien verbannt." 
    } 
  },
  { 
    id: 's_cyril_jerusalem', 
    startYear: 313, 
    endYear: 386, 
    type: 'saint', 
    name: { en: "Dr St. Cyril of Jerusalem", fr: "Dr St Cyrille", es: "Dr San Cirilo", de: "Dr Hl. Kyrill" }, 
    description: { 
      en: "Doctor of the Church. His 'Catechetical Lectures' are a precious record of Christian instruction, liturgy, and sacraments in the early Church.", 
      fr: "Docteur de l'Église. Ses 'Catéchèses' sont un témoignage précieux de l'instruction et de la liturgie dans l'Église primitive.", 
      es: "Doctor de la Iglesia. Sus 'Catequesis' son un registro precioso de la instrucción y liturgia en la Iglesia primitiva.", 
      de: "Kirchenlehrer. Seine 'Katechesen' sind ein wertvolles Zeugnis der christlichen Unterweisung und Liturgie." 
    } 
  },
  { 
    id: 's_gregory_nazianzus', 
    startYear: 329, 
    endYear: 390, 
    type: 'saint', 
    name: { en: "Dr St. Gregory Nazianzen", fr: "Dr St Grégoire", es: "Dr San Gregorio", de: "Dr Hl. Gregor" }, 
    description: { 
      en: "Doctor of the Church. 'The Theologian'. One of the Cappadocian Fathers. His 'Five Theological Orations' defined Trinitarian doctrine.", 
      fr: "Docteur de l'Église. 'Le Théologien'. Père Cappadocien. Ses homélies ont défini la doctrine trinitaire.", 
      es: "Doctor de la Iglesia. 'El Teólogo'. Padre Capadocio. Sus oraciones definieron la doctrina trinitaria.", 
      de: "Kirchenlehrer. 'Der Theologe'. Kappadokischer Vater. Seine Reden definierten die Trinitätslehre." 
    } 
  },
  { 
    id: 's_basil', 
    startYear: 330, 
    endYear: 379, 
    type: 'saint', 
    name: { en: "Dr St. Basil the Great", fr: "Dr St Basile", es: "Dr San Basilio", de: "Dr Hl. Basilius" }, 
    description: { 
      en: "Doctor of the Church. Father of Eastern Monasticism. Defended the Holy Spirit's divinity and built the first hospital complex.", 
      fr: "Docteur de l'Église. Père du monachisme oriental. Défendit le Saint-Esprit et bâtit le premier hôpital.", 
      es: "Doctor de la Iglesia. Padre del monacato oriental. Defendió al Espíritu Santo y construyó el primer hospital.", 
      de: "Kirchenlehrer. Vater des ostkirchlichen Mönchtums. Verteidigte den Heiligen Geist und baute das erste Krankenhaus." 
    } 
  },
  { 
    id: 's_ambrose', 
    startYear: 340, 
    endYear: 397, 
    type: 'saint', 
    name: { en: "Dr St. Ambrose", fr: "Dr St Ambroise", es: "Dr San Ambrosio", de: "Dr Hl. Ambrosius" }, 
    description: { 
      en: "Doctor of the Church. Baptized St. Augustine. Defended the Church's independence from the State, rebuking Emperor Theodosius.", 
      fr: "Docteur de l'Église. Baptisa Saint Augustin. Défendit l'indépendance de l'Église face à l'empereur Théodose.", 
      es: "Doctor de la Iglesia. Bautizó a San Agustín. Defendió la independencia de la Iglesia frente al emperador Teodosio.", 
      de: "Kirchenlehrer. Taufte Augustinus. Verteidigte die Unabhängigkeit der Kirche gegenüber Kaiser Theodosius." 
    } 
  },
  { 
    id: 's_jerome', 
    startYear: 347, 
    endYear: 420, 
    type: 'saint', 
    name: { en: "Dr St. Jerome", fr: "Dr St Jérôme", es: "Dr San Jerónimo", de: "Dr Hl. Hieronymus" }, 
    description: { 
      en: "Doctor of the Church. Translated the Bible into Latin (The Vulgate). Famous for his ascetism, scholarship, and fiery temper.", 
      fr: "Docteur de l'Église. Traduisit la Bible en latin (la Vulgate). Célèbre pour son ascétisme et son savoir.", 
      es: "Doctor de la Iglesia. Tradujo la Biblia al latín (la Vulgata). Famoso por su ascetismo y sabiduría.", 
      de: "Kirchenlehrer. Übersetzte die Bibel ins Lateinische (Vulgata). Bekannt für Askese und Gelehrsamkeit." 
    } 
  },
  { 
    id: 's_john_chrysostom', 
    startYear: 347, 
    endYear: 407, 
    type: 'saint', 
    name: { en: "Dr St. John Chrysostom", fr: "Dr St Jean Chrysostome", es: "Dr San Juan Crisóstomo", de: "Dr Hl. Johannes" }, 
    description: { 
      en: "Doctor of the Church. 'Golden-Mouthed'. Renowned for eloquent preaching and the Divine Liturgy. Exiled for criticizing imperial corruption.", 
      fr: "Docteur de l'Église. 'Bouche d'Or'. Célèbre pour son éloquence et sa Divine Liturgie. Exilé par la cour.", 
      es: "Doctor de la Iglesia. 'Boca de Oro'. Famoso por su elocuencia y Divina Liturgia. Exiliado por la corte.", 
      de: "Kirchenlehrer. 'Goldmund'. Berühmt für Predigten und Liturgie. Wegen Kritik am Hof verbannt." 
    } 
  },
  { 
    id: 's_augustine', 
    startYear: 354, 
    endYear: 430, 
    type: 'saint', 
    name: { en: "Dr St. Augustine", fr: "Dr St Augustin", es: "Dr San Agustín", de: "Dr Hl. Augustinus" }, 
    description: { 
      en: "Doctor of Grace. His 'Confessions' and 'City of God' shaped Western thought. Combated Pelagianism and Donatism.", 
      fr: "Docteur de la Grâce. Ses 'Confessions' et 'La Cité de Dieu' ont façonné l'Occident. Combattit le pélagianisme.", 
      es: "Doctor de la Gracia. Sus 'Confesiones' y 'La Ciudad de Dios' moldearon occidente. Combatió el pelagianismo.", 
      de: "Lehrer der Gnade. Seine 'Bekenntnisse' und 'Gottesstaat' prägten das Abendland. Bekämpfte Pelagianismus." 
    } 
  },
  { 
    id: 's_cyril_alexandria', 
    startYear: 376, 
    endYear: 444, 
    type: 'saint', 
    name: { en: "Dr St. Cyril of Alexandria", fr: "Dr St Cyrille d'Alexandrie", es: "Dr San Cirilo", de: "Dr Hl. Kyrill" }, 
    description: { 
      en: "Doctor of the Incarnation. Key figure of the Council of Ephesus. Defended Mary as 'Theotokos' (Mother of God) against Nestorius.", 
      fr: "Docteur de l'Incarnation. Figure clé du Concile d'Éphèse. Défendit Marie comme 'Theotokos' contre Nestorius.", 
      es: "Doctor de la Encarnación. Figura clave del Concilio de Éfeso. Defendió a María como 'Theotokos'.", 
      de: "Lehrer der Menschwerdung. Schlüsselfigur von Ephesos. Verteidigte den Titel 'Theotokos' gegen Nestorius." 
    } 
  },
  { 
    id: 's_peter_chrysologus', 
    startYear: 406, 
    endYear: 450, 
    type: 'saint', 
    name: { en: "Dr St. Peter Chrysologus", fr: "Dr St Pierre Chrysologue", es: "Dr San Pedro Crisólogo", de: "Dr Hl. Petrus" }, 
    description: { 
      en: "Doctor of the Church. 'Golden-Worded'. Bishop of Ravenna known for brief but profound homilies condemning heresy.", 
      fr: "Docteur de l'Église. 'Aux paroles d'or'. Évêque de Ravenne connu pour ses homélies profondes.", 
      es: "Doctor de la Iglesia. 'Palabra de Oro'. Obispo de Rávena conocido por homilías profundas.", 
      de: "Kirchenlehrer. 'Goldwort'. Bischof von Ravenna, bekannt für tiefgründige Homilien." 
    } 
  },
  { 
    id: 's_isidore', 
    startYear: 560, 
    endYear: 636, 
    type: 'saint', 
    name: { en: "Dr St. Isidore of Seville", fr: "Dr St Isidore", es: "Dr San Isidoro", de: "Dr Hl. Isidor" }, 
    description: { 
      en: "Doctor of the Church. 'Last Scholar of the Ancient World'. Compiled the 'Etymologies', an encyclopedia of all knowledge.", 
      fr: "Docteur de l'Église. Compila les 'Étymologies', une encyclopédie du savoir antique.", 
      es: "Doctor de la Iglesia. Compiló las 'Etimologías', enciclopedia del saber antiguo.", 
      de: "Kirchenlehrer. Verfasste die 'Etymologiae', eine Enzyklopädie des antiken Wissens." 
    } 
  },
  { 
    id: 's_bede', 
    startYear: 672, 
    endYear: 735, 
    type: 'saint', 
    name: { en: "Dr St. Bede the Venerable", fr: "Dr St Bède", es: "Dr San Beda", de: "Dr Hl. Beda" }, 
    description: { 
      en: "Doctor of the Church. English monk and historian. Author of 'Ecclesiastical History of the English People'.", 
      fr: "Docteur de l'Église. Moine et historien anglais. Auteur de l'Histoire ecclésiastique du peuple anglais.", 
      es: "Doctor de la Iglesia. Monje e historiador inglés. Autor de la Historia eclesiástica del pueblo inglés.", 
      de: "Kirchenlehrer. Englischer Mönch und Historiker. Autor der Kirchengeschichte des englischen Volkes." 
    } 
  },
  { 
    id: 's_john_damascus', 
    startYear: 675, 
    endYear: 749, 
    type: 'saint', 
    name: { en: "Dr St. John of Damascus", fr: "Dr St Jean Damascène", es: "Dr San Juan Damasceno", de: "Dr Hl. Johannes" }, 
    description: { 
      en: "Doctor of the Assumption. Defended holy images against Iconoclasm. Synthesized Greek Patristic theology.", 
      fr: "Docteur de l'Assomption. Défendit les images contre l'iconoclasme. Synthétisa la théologie grecque.", 
      es: "Doctor de la Asunción. Defendió las imágenes contra la iconoclasia. Sintetizó la teología griega.", 
      de: "Lehrer der Himmelfahrt. Verteidigte Bilder gegen Ikonoklasmus. Synthese der griechischen Theologie." 
    } 
  },
  { 
    id: 's_gregory_narek', 
    startYear: 951, 
    endYear: 1003, 
    type: 'saint', 
    name: { en: "Dr St. Gregory of Narek", fr: "Dr St Grégoire de Narek", es: "Dr San Gregorio", de: "Dr Hl. Gregor" }, 
    description: { 
      en: "Doctor of the Church (Armenian). Monk and mystic. His 'Book of Lamentations' is a masterpiece of prayer.", 
      fr: "Docteur de l'Église (Arménien). Moine et mystique. Son 'Livre des Lamentations' est un chef-d'œuvre.", 
      es: "Doctor de la Iglesia (Armenio). Monje y místico. Su 'Libro de las Lamentaciones' es obra maestra.", 
      de: "Kirchenlehrer (Armenier). Mönch und Mystiker. Sein 'Buch der Klagelieder' ist ein Meisterwerk." 
    } 
  },
  { 
    id: 's_peter_damian', 
    startYear: 1007, 
    endYear: 1072, 
    type: 'saint', 
    name: { en: "Dr St. Peter Damian", fr: "Dr St Pierre Damien", es: "Dr San Pedro Damián", de: "Dr Hl. Petrus" }, 
    description: { 
      en: "Doctor of the Church. Reformer monk and cardinal who fought against simony and immorality in the clergy.", 
      fr: "Docteur de l'Église. Moine réformateur et cardinal. Lutta contre la simonie et l'immoralité.", 
      es: "Doctor de la Iglesia. Monje reformador y cardenal. Luchó contra la simonía y la inmoralidad.", 
      de: "Kirchenlehrer. Reformmönch und Kardinal. Kämpfte gegen Simonie und Unmoral." 
    } 
  },
  { 
    id: 's_anselm', 
    startYear: 1033, 
    endYear: 1109, 
    type: 'saint', 
    name: { en: "Dr St. Anselm", fr: "Dr St Anselme", es: "Dr San Anselmo", de: "Dr Hl. Anselm" }, 
    description: { 
      en: "Doctor 'Magnificus'. Father of Scholasticism. 'Faith seeking understanding'. Formulated the ontological argument.", 
      fr: "Docteur Magnifique. Père de la scolastique. 'La foi cherchant l'intelligence'. Argument ontologique.", 
      es: "Doctor Magnífico. Padre de la escolástica. 'La fe busca entender'. Argumento ontológico.", 
      de: "Doctor Magnificus. Vater der Scholastik. 'Glaube, der nach Einsicht sucht'. Ontologischer Beweis." 
    } 
  },
  { 
    id: 's_bernard', 
    startYear: 1090, 
    endYear: 1153, 
    type: 'saint', 
    name: { en: "Dr St. Bernard of Clairvaux", fr: "Dr St Bernard", es: "Dr San Bernardo", de: "Dr Hl. Bernhard" }, 
    description: { 
      en: "Doctor 'Mellifluus'. Cistercian abbot. Preached the Second Crusade. Wrote on the love of God and Mary.", 
      fr: "Docteur Melliflu. Abbé cistercien. Prêcha la 2ème Croisade. Écrits sur l'amour de Dieu et Marie.", 
      es: "Doctor Melifluo. Abad cisterciense. Predicó la II Cruzada. Escritos sobre el amor de Dios.", 
      de: "Doctor Mellifluus. Zisterzienserabt. Predigte den 2. Kreuzzug. Schriften über die Gottesliebe." 
    } 
  },
  { 
    id: 's_hildegard', 
    startYear: 1098, 
    endYear: 1179, 
    type: 'saint', 
    name: { en: "Dr St. Hildegard of Bingen", fr: "Dr Ste Hildegarde", es: "Dr Sta Hildegarda", de: "Dr Hl. Hildegard" }, 
    description: { 
      en: "Doctor of the Church. Abbess, mystic, composer. Her visions ('Scivias') explore the cosmos and redemption.", 
      fr: "Docteur de l'Église. Abbesse, mystique, compositrice. Ses visions explorent le cosmos et la rédemption.", 
      es: "Doctora de la Iglesia. Abadesa, mística, compositora. Sus visiones exploran el cosmos.", 
      de: "Kirchenlehrerin. Äbtissin, Mystikerin. Ihre Visionen deuten Kosmos und Erlösung." 
    } 
  },
  { 
    id: 's_anthony', 
    startYear: 1195, 
    endYear: 1231, 
    type: 'saint', 
    name: { en: "Dr St. Anthony of Padua", fr: "Dr St Antoine", es: "Dr San Antonio", de: "Dr Hl. Antonius" }, 
    description: { 
      en: "Evangelical Doctor. Franciscan preacher known for miracles and deep knowledge of Scripture. Patron of lost items.", 
      fr: "Docteur Évangélique. Prédicateur franciscain connu pour ses miracles et sa connaissance de l'Écriture.", 
      es: "Doctor Evangélico. Predicador franciscano famoso por milagros y conocimiento bíblico.", 
      de: "Doctor Evangelicus. Franziskanerprediger, bekannt für Wunder und Bibelwissen." 
    } 
  },
  { 
    id: 's_albert', 
    startYear: 1200, 
    endYear: 1280, 
    type: 'saint', 
    name: { en: "Dr St. Albert the Great", fr: "Dr St Albert le Grand", es: "Dr San Alberto Magno", de: "Dr Hl. Albertus" }, 
    description: { 
      en: "Doctor Universalis. Dominican scientist and theologian. Teacher of Thomas Aquinas. Patron of scientists.", 
      fr: "Docteur Universel. Scientifique et théologien dominicain. Maître de Thomas d'Aquin.", 
      es: "Doctor Universal. Científico y teólogo dominico. Maestro de Tomás de Aquino.", 
      de: "Doctor Universalis. Dominikaner, Naturforscher. Lehrer von Thomas von Aquin." 
    } 
  },
  { 
    id: 's_bonaventure', 
    startYear: 1221, 
    endYear: 1274, 
    type: 'saint', 
    name: { en: "Dr St. Bonaventure", fr: "Dr St Bonaventure", es: "Dr San Buenaventura", de: "Dr Hl. Bonaventura" }, 
    description: { 
      en: "Seraphic Doctor. Franciscan Minister General. Integrated faith and reason with a focus on love.", 
      fr: "Docteur Séraphique. Ministre général franciscain. Intégra foi et raison avec accent sur l'amour.", 
      es: "Doctor Seráfico. Ministro General franciscano. Integró fe y razón centrada en el amor.", 
      de: "Doctor Seraphicus. Generalminister der Franziskaner. Theologie der Liebe." 
    } 
  },
  { 
    id: 's_aquinas', 
    startYear: 1225, 
    endYear: 1274, 
    type: 'saint', 
    name: { en: "Dr St. Thomas Aquinas", fr: "Dr St Thomas d'Aquin", es: "Dr Sto Tomás", de: "Dr Hl. Thomas" }, 
    description: { 
      en: "Angelic Doctor. Dominican. Author of 'Summa Theologica'. Synthesized Aristotle with Christianity.", 
      fr: "Docteur Angélique. Dominicain. Auteur de la 'Somme Théologique'. Synthèse d'Aristote et de la foi.", 
      es: "Doctor Angélico. Dominico. Autor de la 'Suma Teológica'. Sintetizó a Aristóteles con la fe.", 
      de: "Doctor Angelicus. Dominikaner. Autor der 'Summa Theologica'. Höhepunkt der Scholastik." 
    } 
  },
  { 
    id: 's_catherine_siena', 
    startYear: 1347, 
    endYear: 1380, 
    type: 'saint', 
    name: { en: "Dr St. Catherine of Siena", fr: "Dr Ste Catherine", es: "Dr Sta Catalina", de: "Dr Hl. Katharina" }, 
    description: { 
      en: "Doctor of the Church. Dominican mystic. Persuaded the Pope to return to Rome. Author of 'The Dialogue'.", 
      fr: "Docteur de l'Église. Mystique dominicaine. Persuada le Pape de revenir à Rome. Auteur du 'Dialogue'.", 
      es: "Doctora de la Iglesia. Mística dominica. Persuadió al Papa de volver a Roma. Autora del 'Diálogo'.", 
      de: "Kirchenlehrerin. Dominikanerin. Brachte den Papst zur Rückkehr nach Rom. Autorin des 'Dialogs'." 
    } 
  },
  { 
    id: 's_john_avila', 
    startYear: 1499, 
    endYear: 1569, 
    type: 'saint', 
    name: { en: "Dr St. John of Avila", fr: "Dr St Jean d'Avila", es: "Dr San Juan de Ávila", de: "Dr Hl. Johannes" }, 
    description: { 
      en: "Doctor of the Church. Apostle of Andalusia. Preacher who influenced St. Teresa of Avila and St. John of God.", 
      fr: "Docteur de l'Église. Apôtre de l'Andalousie. Prédicateur qui influença Sainte Thérèse d'Avila.", 
      es: "Doctor de la Iglesia. Apóstol de Andalucía. Predicador que influyó en Santa Teresa.", 
      de: "Kirchenlehrer. Apostel Andalusiens. Prediger und Einfluss auf Teresa von Avila." 
    } 
  },
  { 
    id: 's_teresa_avila', 
    startYear: 1515, 
    endYear: 1582, 
    type: 'saint', 
    name: { en: "Dr St. Teresa of Avila", fr: "Dr Ste Thérèse d'Avila", es: "Dr Sta Teresa", de: "Dr Hl. Teresa" }, 
    description: { 
      en: "Doctor of Prayer. Reformer of the Carmelite Order. Mystic author of 'The Interior Castle'.", 
      fr: "Docteur de la Prière. Réformatrice du Carmel. Auteur du 'Château Intérieur'.", 
      es: "Doctora de la Iglesia. Reformadora del Carmelo. Autora de 'Las Moradas'.", 
      de: "Lehrerin des Gebets. Reformerin des Karmel. Autorin der 'Inneren Burg'." 
    } 
  },
  { 
    id: 's_peter_canisius', 
    startYear: 1521, 
    endYear: 1597, 
    type: 'saint', 
    name: { en: "Dr St. Peter Canisius", fr: "Dr St Pierre Canisius", es: "Dr San Pedro Canisio", de: "Dr Hl. Petrus Canisius" }, 
    description: { 
      en: "Doctor of the Church. Jesuit. 'Second Apostle of Germany'. Key to the Counter-Reformation via catechisms.", 
      fr: "Docteur de l'Église. Jésuite. 'Second Apôtre de l'Allemagne'. Clé de la Contre-Réforme.", 
      es: "Doctor de la Iglesia. Jesuita. 'Segundo Apóstol de Alemania'. Clave en la Contrarreforma.", 
      de: "Kirchenlehrer. Jesuit. 'Zweiter Apostel Deutschlands'. Verfasste wichtige Katechismen." 
    } 
  },
  { 
    id: 's_john_cross', 
    startYear: 1542, 
    endYear: 1591, 
    type: 'saint', 
    name: { en: "Dr St. John of the Cross", fr: "Dr St Jean de la Croix", es: "Dr San Juan de la Cruz", de: "Dr Hl. Johannes" }, 
    description: { 
      en: "Mystical Doctor. Carmelite reformer. His poetry ('Dark Night of the Soul') explores spiritual purification.", 
      fr: "Docteur Mystique. Réformateur du Carmel. Sa poésie explore la purification spirituelle.", 
      es: "Doctor Místico. Reformador del Carmelo. Su 'Noche Oscura' explora la purificación.", 
      de: "Doctor Mysticus. Karmeliterreformer. Seine 'Dunkle Nacht' beschreibt die Seelenläuterung." 
    } 
  },
  { 
    id: 's_bellarmine', 
    startYear: 1542, 
    endYear: 1621, 
    type: 'saint', 
    name: { en: "Dr St. Robert Bellarmine", fr: "Dr St Robert Bellarmin", es: "Dr San Roberto", de: "Dr Hl. Robert" }, 
    description: { 
      en: "Doctor of the Church. Jesuit Cardinal. Brilliant apologist against Protestantism. Involved in the Galileo affair.", 
      fr: "Docteur de l'Église. Jésuite. Brillant apologiste contre le protestantisme.", 
      es: "Doctor de la Iglesia. Jesuita. Brillante apologista contra el protestantismo.", 
      de: "Kirchenlehrer. Jesuit. Brillanter Apologet gegen den Protestantismus." 
    } 
  },
  { 
    id: 's_lawrence_brindisi', 
    startYear: 1559, 
    endYear: 1619, 
    type: 'saint', 
    name: { en: "Dr St. Lawrence of Brindisi", fr: "Dr St Laurent", es: "Dr San Lorenzo", de: "Dr Hl. Laurentius" }, 
    description: { 
      en: "Apostolic Doctor. Capuchin friar. Master of languages. Led an army spiritually against the Turks.", 
      fr: "Docteur Apostolique. Capucin. Maître des langues. Mena une armée contre les Turcs.", 
      es: "Doctor Apostólico. Capuchino. Maestro de lenguas. Lideró espiritualmente un ejército.", 
      de: "Apostolischer Lehrer. Kapuziner. Sprachgenie. Führte eine Armee gegen die Türken." 
    } 
  },
  { 
    id: 's_francis_sales', 
    startYear: 1567, 
    endYear: 1622, 
    type: 'saint', 
    name: { en: "Dr St. Francis de Sales", fr: "Dr St François de Sales", es: "Dr San Francisco", de: "Dr Hl. Franz" }, 
    description: { 
      en: "Doctor of Charity. Bishop of Geneva. 'Introduction to the Devout Life'. Converted many Calvinists.", 
      fr: "Docteur de l'Amour. Évêque de Genève. 'Introduction à la vie dévote'. Convertit les calvinistes.", 
      es: "Doctor de la Caridad. Obispo de Ginebra. 'Introducción a la vida devota'.", 
      de: "Lehrer der Liebe. Bischof von Genf. 'Anleitung zum frommen Leben'." 
    } 
  },
  { 
    id: 's_alphonsus', 
    startYear: 1696, 
    endYear: 1787, 
    type: 'saint', 
    name: { en: "Dr St. Alphonsus Liguori", fr: "Dr St Alphonse", es: "Dr San Alfonso", de: "Dr Hl. Alfons" }, 
    description: { 
      en: "Doctor Zelantissimus. Founder of Redemptorists. Master of Moral Theology. Devoted to Mary.", 
      fr: "Docteur très zélé. Fondateur des Rédemptoristes. Maître de théologie morale.", 
      es: "Doctor Zelantissimus. Fundador de Redentoristas. Maestro de Teología Moral.", 
      de: "Doctor Zelantissimus. Gründer der Redemptoristen. Meister der Moraltheologie." 
    } 
  },
  { 
    id: 's_newman', 
    startYear: 1801, 
    endYear: 1890, 
    type: 'saint', 
    name: { en: "Dr St. John Henry Newman", fr: "Dr St John Henry Newman", es: "Dr San John Henry Newman", de: "Dr Hl. John Henry Newman" }, 
    description: { 
      en: "Doctor of the Church. Cardinal and convert. His 'Development of Christian Doctrine' bridged Anglicanism and Catholicism.", 
      fr: "Docteur de l'Église. Cardinal et converti. Son œuvre sur le développement de la doctrine a marqué la théologie.", 
      es: "Doctor de la Iglesia. Cardenal y converso. Su obra sobre la doctrina unió anglicanismo y catolicismo.", 
      de: "Kirchenlehrer. Kardinal und Konvertit. Sein Werk zur Doktrinenentwicklung prägte die Theologie." 
    } 
  },
  { 
    id: 's_therese', 
    startYear: 1873, 
    endYear: 1897, 
    type: 'saint', 
    name: { en: "Dr St. Thérèse of Lisieux", fr: "Dr Ste Thérèse", es: "Dr Sta Teresita", de: "Dr Hl. Therese" }, 
    description: { 
      en: "Doctor of the Church. Carmelite nun. Taught the 'Little Way' of spiritual childhood. Patroness of Missions.", 
      fr: "Docteur de l'Église. Carmélite. Enseigna la 'Petite Voie'. Patronne des missions.", 
      es: "Doctora de la Iglesia. Carmelita. Enseñó el 'Caminito' de la infancia espiritual.", 
      de: "Kirchenlehrerin. Karmelitin. Lehrte den 'Kleinen Weg'. Patronin der Missionen." 
    } 
  },
  { 
    id: 's_joseph', 
    startYear: 1, 
    endYear: 30, 
    type: 'saint', 
    name: { en: "St. Joseph", fr: "Saint Joseph", es: "San José", de: "Hl. Josef" }, 
    description: { 
      en: "Foster-father of Jesus and Spouse of the Blessed Virgin Mary. Patron of the Universal Church, workers, and a happy death.", 
      fr: "Père nourricier de Jésus et Époux de la Vierge Marie. Patron de l'Église universelle, des travailleurs et de la bonne mort.", 
      es: "Padre putativo de Jesús y Esposo de la Virgen María. Patrono de la Iglesia Universal, los trabajadores y la buena muerte.", 
      de: "Nährvater Jesu und Bräutigam der Jungfrau Maria. Schutzpatron der Kirche, der Arbeiter und eines seligen Sterbens." 
    } 
  },
  { 
    id: 's_john_baptist', 
    startYear: 1, 
    endYear: 30, 
    type: 'saint', 
    name: { en: "St. John the Baptist", fr: "Saint Jean Baptiste", es: "San Juan Bautista", de: "Hl. Johannes der Täufer" }, 
    description: { 
      en: "The Precursor. Baptized Jesus in the Jordan. Lived in the desert and preached repentance. Martyred by Herod Antipas.", 
      fr: "Le Précurseur. Baptisa Jésus dans le Jourdain. Vécut au désert et prêcha la repentance. Martyrisé par Hérode.", 
      es: "El Precursor. Bautizó a Jesús en el Jordán. Vivió en el desierto y predicó el arrepentimiento. Martirizado por Herodes.", 
      de: "Der Vorläufer. Taufte Jesus im Jordan. Lebte in der Wüste und predigte Buße. Von Herodes enthauptet." 
    } 
  },
  { 
    id: 's_paul', 
    startYear: 5, 
    endYear: 67, 
    type: 'saint', 
    name: { en: "St. Paul the Apostle", fr: "Saint Paul Apôtre", es: "San Pablo Apóstol", de: "Hl. Paulus" }, 
    description: { 
      en: "Apostle to the Gentiles. Converted on the road to Damascus. Author of many New Testament Epistles. Martyred in Rome.", 
      fr: "Apôtre des Gentils. Converti sur le chemin de Damas. Auteur de nombreuses Épîtres. Martyrisé à Rome.", 
      es: "Apóstol de los Gentiles. Converso camino a Damasco. Autor de muchas Epístolas. Martirizado en Roma.", 
      de: "Völkerapostel. Bekehrung vor Damaskus. Verfasser vieler neutestamentlicher Briefe. Märtyrer in Rom." 
    } 
  },
  { 
    id: 's_mary_magdalene', 
    startYear: 10, 
    endYear: 70, 
    type: 'saint', 
    name: { en: "St. Mary Magdalene", fr: "Sainte Marie-Madeleine", es: "Santa María Magdalena", de: "Hl. Maria Magdalena" }, 
    description: { 
      en: "Apostle to the Apostles. First witness of the Resurrection. Followed Jesus from Galilee to the foot of the Cross.", 
      fr: "Apôtre des Apôtres. Premier témoin de la Résurrection. Suivit Jésus de la Galilée jusqu'à la Croix.", 
      es: "Apóstol de los Apóstoles. Primera testigo de la Resurrección. Siguió a Jesús hasta la Cruz.", 
      de: "Apostelin der Apostel. Erste Zeugin der Auferstehung. Folgte Jesus von Galiläa bis zum Kreuz." 
    } 
  },
  { 
    id: 's_stephen', 
    startYear: 5, 
    endYear: 34, 
    type: 'saint', 
    name: { en: "St. Stephen", fr: "Saint Étienne", es: "San Esteban", de: "Hl. Stephanus" }, 
    description: { 
      en: "The Protomartyr (First Martyr). One of the first seven deacons. Stoned to death while praying for his executioners.", 
      fr: "Le Protomartyr (Premier Martyr). L'un des sept premiers diacres. Lapidé en priant pour ses bourreaux.", 
      es: "El Protomártir. Uno de los siete primeros diáconos. Lapidado mientras oraba por sus verdugos.", 
      de: "Der Erzmärtyrer. Einer der ersten sieben Diakone. Gesteinigt, während er für seine Henker betete." 
    } 
  },
  { 
    id: 's_ignatius_antioch', 
    startYear: 35, 
    endYear: 108, 
    type: 'saint', 
    name: { en: "St. Ignatius of Antioch", fr: "Saint Ignace d'Antioche", es: "San Ignacio de Antioquía", de: "Hl. Ignatius von Antiochien" }, 
    description: { 
      en: "Bishop and Martyr. Disciple of St. John. Wrote 7 letters on his way to Rome to be fed to lions. First to use the term 'Catholic Church'.", 
      fr: "Évêque et Martyr. Disciple de St Jean. Écrivit 7 lettres avant d'être livré aux lions. Premier à dire 'Église Catholique'.", 
      es: "Obispo y Mártir. Discípulo de San Juan. Escribió 7 cartas antes de morir por leones. Primero en usar 'Iglesia Católica'.", 
      de: "Bischof und Märtyrer. Schüler von Johannes. Schrieb 7 Briefe vor dem Tod durch Löwen. Prägte 'Katholische Kirche'." 
    } 
  },
  { 
    id: 's_polycarp', 
    startYear: 69, 
    endYear: 155, 
    type: 'saint', 
    name: { en: "St. Polycarp", fr: "Saint Polycarpe", es: "San Policarpo", de: "Hl. Polykarp" }, 
    description: { 
      en: "Bishop of Smyrna and Martyr. Disciple of St. John. Burned at the stake at age 86 for refusing to burn incense to the Emperor.", 
      fr: "Évêque de Smyrne et Martyr. Disciple de St Jean. Brûlé vif à 86 ans pour avoir refusé d'adorer l'Empereur.", 
      es: "Obispo de Esmirna y Mártir. Discípulo de San Juan. Quemado en la hoguera por rechazar al Emperador.", 
      de: "Bischof von Smyrna und Märtyrer. Schüler von Johannes. Mit 86 verbrannt, weil er den Kaiser nicht anbetete." 
    } 
  },
  { 
    id: 's_justin', 
    startYear: 100, 
    endYear: 165, 
    type: 'saint', 
    name: { en: "St. Justin Martyr", fr: "Saint Justin Martyr", es: "San Justino Mártir", de: "Hl. Justin der Märtyrer" }, 
    description: { 
      en: "Philosopher and Apologist. Wrote the 'First Apology' giving the earliest detailed description of the Mass. Beheaded in Rome.", 
      fr: "Philosophe et Apologiste. Décrivit la Messe primitive en détail. Décapité à Rome.", 
      es: "Filósofo y Apologista. Dio la primera descripción detallada de la Misa. Decapitado en Roma.", 
      de: "Philosoph und Apologet. Gab die erste detaillierte Beschreibung der Messe. Enthauptet in Rom." 
    } 
  },
  { 
    id: 's_perpetua', 
    startYear: 181, 
    endYear: 203, 
    type: 'saint', 
    name: { en: "Sts. Perpetua & Felicity", fr: "Stes Perpétue et Félicité", es: "Stas. Perpetua y Felicidad", de: "Hl. Perpetua und Felicitas" }, 
    description: { 
      en: "Noblewoman and her slave, martyred together in Carthage. Their prison diary is one of the oldest Christian texts.", 
      fr: "Noble et son esclave, martyrisées à Carthage. Leur journal de prison est un texte chrétien très ancien.", 
      es: "Noble y su esclava, martirizadas en Cartago. Su diario de prisión es un texto antiguo clave.", 
      de: "Adlige und ihre Sklavin, in Karthago martyriert. Ihr Gefängnistagebuch ist ein wichtiges frühchristliches Zeugnis." 
    } 
  },
  { 
    id: 's_lawrence', 
    startYear: 225, 
    endYear: 258, 
    type: 'saint', 
    name: { en: "St. Lawrence", fr: "Saint Laurent", es: "San Lorenzo", de: "Hl. Laurentius" }, 
    description: { 
      en: "Deacon of Rome. Presented the poor as the 'Treasures of the Church'. Martyred by being roasted on a gridiron.", 
      fr: "Diacre de Rome. Présenta les pauvres comme 'Trésors de l'Église'. Martyrisé sur un gril.", 
      es: "Diácono de Roma. Presentó a los pobres como 'Tesoro de la Iglesia'. Martirizado en una parrilla.", 
      de: "Diakon von Rom. Zeigte die Armen als 'Schätze der Kirche'. Auf einem Rost zu Tode gemartert." 
    } 
  },
  { 
    id: 's_sebastian', 
    startYear: 256, 
    endYear: 288, 
    type: 'saint', 
    name: { en: "St. Sebastian", fr: "Saint Sébastien", es: "San Sebastián", de: "Hl. Sebastian" }, 
    description: { 
      en: "Roman soldier and martyr. Shot with arrows but survived, only to be clubbed to death later for rebuking Diocletian.", 
      fr: "Soldat romain et martyr. Percé de flèches, il survécut puis fut battu à mort pour avoir repris Dioclétien.", 
      es: "Soldado romano y mártir. Asaeteado, sobrevivió, y luego apaleado por reprender a Diocleciano.", 
      de: "Römischer Soldat und Märtyrer. Von Pfeilen durchbohrt, überlebte, später zu Tode geknüppelt." 
    } 
  },
  { 
    id: 's_agnes', 
    startYear: 291, 
    endYear: 304, 
    type: 'saint', 
    name: { en: "St. Agnes", fr: "Sainte Agnès", es: "Santa Inés", de: "Hl. Agnes" }, 
    description: { 
      en: "Virgin Martyr. Killed at age 12/13 during Diocletian's persecution for refusing marriage. Symbol of purity.", 
      fr: "Vierge et Martyre. Tuée à 12 ans sous Dioclétien pour avoir refusé le mariage. Symbole de pureté.", 
      es: "Virgen y Mártir. Muerta a los 12 años bajo Diocleciano por rechazar matrimonio. Símbolo de pureza.", 
      de: "Jungfrau und Märtyrerin. Mit 12 Jahren getötet, weil sie die Ehe verweigerte. Symbol der Reinheit." 
    } 
  },
  { 
    id: 's_george', 
    startYear: 280, 
    endYear: 303, 
    type: 'saint', 
    name: { en: "St. George", fr: "Saint Georges", es: "San Jorge", de: "Hl. Georg" }, 
    description: { 
      en: "Great Martyr. Soldier saint famous for the legend of slaying the dragon. Patron of England and soldiers.", 
      fr: "Grand Martyr. Saint soldat célèbre pour la légende du dragon. Patron de l'Angleterre et des soldats.", 
      es: "Gran Mártir. Santo soldado famoso por la leyenda del dragón. Patrono de Inglaterra.", 
      de: "Großmärtyrer. Soldatenheiliger, bekannt durch die Drachenlegende. Patron Englands." 
    } 
  },
  { 
    id: 's_lucy', 
    startYear: 283, 
    endYear: 304, 
    type: 'saint', 
    name: { en: "St. Lucy", fr: "Sainte Lucie", es: "Santa Lucía", de: "Hl. Lucia" }, 
    description: { 
      en: "Virgin Martyr of Syracuse. Patron saint of the blind. Martyred during the Great Persecution.", 
      fr: "Vierge et Martyre de Syracuse. Patronne des aveugles. Martyrisée durant la Grande Persécution.", 
      es: "Virgen y Mártir de Siracusa. Patrona de los ciegos. Martirizada durante la Gran Persecución.", 
      de: "Jungfrau und Märtyrerin von Syrakus. Schutzpatronin der Blinden." 
    } 
  },
  { 
    id: 's_helena', 
    startYear: 250, 
    endYear: 330, 
    type: 'saint', 
    name: { en: "St. Helena", fr: "Sainte Hélène", es: "Santa Elena", de: "Hl. Helena" }, 
    description: { 
      en: "Mother of Emperor Constantine. Discovered the True Cross in Jerusalem. Built basilicas in the Holy Land.", 
      fr: "Mère de l'empereur Constantin. Découvrit la Vraie Croix à Jérusalem. Bâtit des basiliques en Terre Sainte.", 
      es: "Madre del emperador Constantino. Descubrió la Vera Cruz en Jerusalén. Construyó basílicas en Tierra Santa.", 
      de: "Mutter Konstantins. Fand das Wahre Kreuz in Jerusalem. Erbaute Basiliken im Heiligen Land." 
    } 
  },
  { 
    id: 's_nicholas', 
    startYear: 270, 
    endYear: 343, 
    type: 'saint', 
    name: { en: "St. Nicholas", fr: "Saint Nicolas", es: "San Nicolás", de: "Hl. Nikolaus" }, 
    description: { 
      en: "Bishop of Myra. Known for his generosity (origin of Santa Claus) and defense of Orthodoxy at Nicaea.", 
      fr: "Évêque de Myre. Connu pour sa générosité (Père Noël) et sa défense de l'orthodoxie à Nicée.", 
      es: "Obispo de Mira. Conocido por su generosidad (Santa Claus) y defensa de la ortodoxia en Nicea.", 
      de: "Bischof von Myra. Bekannt für Großzügigkeit und Verteidigung des Glaubens in Nicäa." 
    } 
  },
  { 
    id: 's_anthony_desert', 
    startYear: 251, 
    endYear: 356, 
    type: 'saint', 
    name: { en: "St. Anthony of the Desert", fr: "Saint Antoine le Grand", es: "San Antonio Abad", de: "Hl. Antonius der Große" }, 
    description: { 
      en: "Father of Monks. Withdrew to the Egyptian desert to fight temptation and pray. Inspiration for Christian monasticism.", 
      fr: "Père des Moines. Se retira dans le désert égyptien pour prier. Inspirateur du monachisme.", 
      es: "Padre de los Monjes. Se retiró al desierto egipcio para orar. Inspiración del monacato.", 
      de: "Vater der Mönche. Zog sich in die ägyptische Wüste zurück. Inspiration für das Mönchtum." 
    } 
  },
  { 
    id: 's_monica', 
    startYear: 332, 
    endYear: 387, 
    type: 'saint', 
    name: { en: "St. Monica", fr: "Sainte Monique", es: "Santa Mónica", de: "Hl. Monika" }, 
    description: { 
      en: "Mother of St. Augustine. Prayed and wept for her son's conversion for 17 years. Model of patience and maternal prayer.", 
      fr: "Mère de Saint Augustin. Pria et pleura pour la conversion de son fils pendant 17 ans.", 
      es: "Madre de San Agustín. Oró y lloró por la conversión de su hijo durante 17 años.", 
      de: "Mutter des Hl. Augustinus. Betete 17 Jahre lang für die Bekehrung ihres Sohnes." 
    } 
  },
  { 
    id: 's_martin', 
    startYear: 316, 
    endYear: 397, 
    type: 'saint', 
    name: { en: "St. Martin of Tours", fr: "Saint Martin de Tours", es: "San Martín de Tours", de: "Hl. Martin von Tours" }, 
    description: { 
      en: "Bishop. Former Roman soldier who cut his cloak to share with a beggar. One of the most popular saints of Europe.", 
      fr: "Évêque. Ancien soldat qui partagea son manteau avec un mendiant. Un des saints les plus populaires.", 
      es: "Obispo. Ex soldado que cortó su capa para un mendigo. Uno de los santos más populares.", 
      de: "Bischof. Ehemaliger Soldat, der seinen Mantel teilte. Einer der beliebtesten Heiligen Europas." 
    } 
  },
  { 
    id: 's_patrick', 
    startYear: 385, 
    endYear: 461, 
    type: 'saint', 
    name: { en: "St. Patrick", fr: "Saint Patrick", es: "San Patricio", de: "Hl. Patrick" }, 
    description: { 
      en: "Apostle of Ireland. Captured as a slave, escaped, then returned to convert the Irish pagan tribes.", 
      fr: "Apôtre de l'Irlande. Esclave évadé, il retourna convertir les tribus païennes irlandaises.", 
      es: "Apóstol de Irlanda. Esclavo fugado, regresó para convertir a las tribus paganas.", 
      de: "Apostel Irlands. Entflohener Sklave, kehrte zurück, um die Iren zu bekehren." 
    } 
  },
  { 
    id: 's_genevieve', 
    startYear: 422, 
    endYear: 502, 
    type: 'saint', 
    name: { en: "St. Genevieve", fr: "Sainte Geneviève", es: "Santa Genoveva", de: "Hl. Genoveva" }, 
    description: { 
      en: "Patroness of Paris. Her prayers and fasting were credited with diverting Attila the Hun away from Paris.", 
      fr: "Patronne de Paris. Ses prières auraient détourné Attila le Hun de Paris.", 
      es: "Patrona de París. Sus oraciones desviaron a Atila el Huno de París.", 
      de: "Schutzpatronin von Paris. Ihre Gebete sollen Attila von Paris abgelenkt haben." 
    } 
  },
  { 
    id: 's_benedict', 
    startYear: 480, 
    endYear: 547, 
    type: 'saint', 
    name: { en: "St. Benedict", fr: "Saint Benoît", es: "San Benito", de: "Hl. Benedikt" }, 
    description: { 
      en: "Father of Western Monasticism. Wrote the 'Rule of St. Benedict' (Ora et Labora). Founder of Monte Cassino.", 
      fr: "Père du monachisme occidental. Auteur de la Règle (Ora et Labora). Fondateur du Mont-Cassin.", 
      es: "Padre del monacato occidental. Autor de la Regla (Ora et Labora). Fundador de Montecassino.", 
      de: "Vater des abendländischen Mönchtums. Verfasste die Benediktusregel. Gründer von Montecassino." 
    } 
  },
  { 
    id: 's_scholastica', 
    startYear: 480, 
    endYear: 543, 
    type: 'saint', 
    name: { en: "St. Scholastica", fr: "Sainte Scholastique", es: "Santa Escolástica", de: "Hl. Scholastika" }, 
    description: { 
      en: "Twin sister of St. Benedict. Foundress of the women's branch of Benedictine monasticism.", 
      fr: "Sœur jumelle de Saint Benoît. Fondatrice de la branche féminine des bénédictines.", 
      es: "Hermana gemela de San Benito. Fundadora de la rama femenina benedictina.", 
      de: "Zwillingsschwester von Benedikt. Gründerin des weiblichen Zweigs der Benediktiner." 
    } 
  },
  { 
    id: 's_columba', 
    startYear: 521, 
    endYear: 597, 
    type: 'saint', 
    name: { en: "St. Columba", fr: "Saint Colomba", es: "San Columba", de: "Hl. Kolumban" }, 
    description: { 
      en: "Irish abbot and missionary. Evangelized Scotland. Founded the famous abbey on Iona.", 
      fr: "Abbé et missionnaire irlandais. Évangélisa l'Écosse. Fonda l'abbaye d'Iona.", 
      es: "Abad y misionero irlandés. Evangelizó Escocia. Fundó la abadía de Iona.", 
      de: "Irischer Abt und Missionar. Evangelisierte Schottland. Gründete das Kloster Iona." 
    } 
  },
  { 
    id: 's_boniface', 
    startYear: 675, 
    endYear: 754, 
    type: 'saint', 
    name: { en: "St. Boniface", fr: "Saint Boniface", es: "San Bonifacio", de: "Hl. Bonifatius" }, 
    description: { 
      en: "Apostle of the Germans. Felled the sacred Oak of Thor. Martyred in Frisia.", 
      fr: "Apôtre des Germains. Abattit le chêne sacré de Thor. Martyrisé en Frise.", 
      es: "Apóstol de los Germanos. Taló el roble sagrado de Thor. Martirizado en Frisia.", 
      de: "Apostel der Deutschen. Fällte die Donareiche. Märtyrer in Friesland." 
    } 
  },
  { 
    id: 's_cyril_methodius', 
    startYear: 826, 
    endYear: 885, 
    type: 'saint', 
    name: { en: "Sts. Cyril & Methodius", fr: "Sts Cyrille et Méthode", es: "Stos. Cirilo y Metodio", de: "Hl. Kyrill und Method" }, 
    description: { 
      en: "Apostles to the Slavs. Translated the Bible and liturgy into Slavonic. Patrons of Europe.", 
      fr: "Apôtres des Slaves. Traduisirent la Bible et la liturgie en slavon. Patrons de l'Europe.", 
      es: "Apóstoles de los Eslavos. Tradujeron la Biblia al eslavo. Patronos de Europa.", 
      de: "Slawenapostel. Übersetzten Bibel und Liturgie ins Slawische. Patrone Europas." 
    } 
  },
  { 
    id: 's_wenceslaus', 
    startYear: 907, 
    endYear: 935, 
    type: 'saint', 
    name: { en: "St. Wenceslaus", fr: "Saint Venceslas", es: "San Wenceslao", de: "Hl. Wenzel" }, 
    description: { 
      en: "Duke of Bohemia. Martyr known for his piety and care for the poor. Murdered by his brother.", 
      fr: "Duc de Bohême. Martyr connu pour sa piété. Assassiné par son frère.", 
      es: "Duque de Bohemia. Mártir conocido por su piedad. Asesinado por su hermano.", 
      de: "Herzog von Böhmen. Märtyrer, bekannt für Frömmigkeit. Vom Bruder ermordet." 
    } 
  },
  { 
    id: 's_stephen_hungary', 
    startYear: 975, 
    endYear: 1038, 
    type: 'saint', 
    name: { en: "St. Stephen of Hungary", fr: "Saint Étienne de Hongrie", es: "San Esteban de Hungría", de: "Hl. Stephan von Ungarn" }, 
    description: { 
      en: "First King of Hungary. Christianized the Magyar people and organized the Church in Hungary.", 
      fr: "Premier roi de Hongrie. Christianisa les Magyars et organisa l'Église hongroise.", 
      es: "Primer Rey de Hungría. Cristianizó a los magiares y organizó la Iglesia.", 
      de: "Erster König von Ungarn. Christianisierte die Magyaren und organisierte die Kirche." 
    } 
  },
  { 
    id: 's_bruno', 
    startYear: 1030, 
    endYear: 1101, 
    type: 'saint', 
    name: { en: "St. Bruno", fr: "Saint Bruno", es: "San Bruno", de: "Hl. Bruno" }, 
    description: { 
      en: "Founder of the Carthusian Order (Chartreuse). Sought absolute silence and solitude with God.", 
      fr: "Fondateur de l'Ordre des Chartreux. Chercha le silence absolu et la solitude avec Dieu.", 
      es: "Fundador de los Cartujos. Buscó silencio absoluto y soledad con Dios.", 
      de: "Gründer des Kartäuserordens. Suchte absolute Stille und Einsamkeit mit Gott." 
    } 
  },
  { 
    id: 's_stanislaus', 
    startYear: 1030, 
    endYear: 1079, 
    type: 'saint', 
    name: { en: "St. Stanislaus", fr: "Saint Stanislas", es: "San Estanislao", de: "Hl. Stanislaus" }, 
    description: { 
      en: "Bishop of Kraków and Martyr. Killed by King Bolesław II while celebrating Mass for rebuking the king's immorality.", 
      fr: "Évêque de Cracovie. Tué par le roi Boleslas II en célébrant la messe pour avoir dénoncé ses crimes.", 
      es: "Obispo de Cracovia. Matado por el rey Boleslao II mientras celebraba Misa.", 
      de: "Bischof von Krakau. Von König Boleslaw II. während der Messe getötet." 
    } 
  },
  { 
    id: 's_edward', 
    startYear: 1003, 
    endYear: 1066, 
    type: 'saint', 
    name: { en: "St. Edward the Confessor", fr: "Saint Édouard le Confesseur", es: "San Eduardo el Confesor", de: "Hl. Eduard der Bekenner" }, 
    description: { 
      en: "King of England. Known for his piety and rebuilding Westminster Abbey. Kept peace in his kingdom.", 
      fr: "Roi d'Angleterre. Connu pour sa piété et la reconstruction de l'abbaye de Westminster.", 
      es: "Rey de Inglaterra. Conocido por su piedad y reconstruir la Abadía de Westminster.", 
      de: "König von England. Bekannt für Frömmigkeit und Wiederaufbau von Westminster Abbey." 
    } 
  },
  { 
    id: 's_thomas_becket', 
    startYear: 1118, 
    endYear: 1170, 
    type: 'saint', 
    name: { en: "St. Thomas Becket", fr: "Saint Thomas Becket", es: "Santo Tomás Becket", de: "Hl. Thomas Becket" }, 
    description: { 
      en: "Archbishop of Canterbury. Martyred in his cathedral by knights of Henry II for defending Church rights.", 
      fr: "Archevêque de Cantorbéry. Martyrisé dans sa cathédrale pour avoir défendu l'Église.", 
      es: "Arzobispo de Canterbury. Martirizado en su catedral por defender a la Iglesia.", 
      de: "Erzbischof von Canterbury. Im Dom von Rittern Heinrichs II. ermordet." 
    } 
  },
  { 
    id: 's_dominic', 
    startYear: 1170, 
    endYear: 1221, 
    type: 'saint', 
    name: { en: "St. Dominic", fr: "Saint Dominique", es: "Santo Domingo", de: "Hl. Dominikus" }, 
    description: { 
      en: "Founder of the Order of Preachers (Dominicans). Preached against the Albigensian heresy. Popularized the Rosary.", 
      fr: "Fondateur des Dominicains. Prêcha contre l'hérésie albigeoise. Popularisa le Rosaire.", 
      es: "Fundador de los Dominicos. Predicó contra la herejía albigense. Popularizó el Rosario.", 
      de: "Gründer der Dominikaner. Predigte gegen die Albigenser. Verbreitete den Rosenkranz." 
    } 
  },
  { 
    id: 's_francis_assisi', 
    startYear: 1181, 
    endYear: 1226, 
    type: 'saint', 
    name: { en: "St. Francis of Assisi", fr: "Saint François d'Assise", es: "San Francisco de Asís", de: "Hl. Franz von Assisi" }, 
    description: { 
      en: "Founder of the Franciscans. Known for his poverty, love of nature, and receiving the Stigmata.", 
      fr: "Fondateur des Franciscains. Connu pour sa pauvreté, son amour de la nature et les stigmates.", 
      es: "Fundador de los Franciscanos. Conocido por su pobreza, amor a la naturaleza y los estigmas.", 
      de: "Gründer der Franziskaner. Bekannt für Armut, Naturliebe und die Stigmata." 
    } 
  },
  { 
    id: 's_clare', 
    startYear: 1194, 
    endYear: 1253, 
    type: 'saint', 
    name: { en: "St. Clare of Assisi", fr: "Sainte Claire d'Assise", es: "Santa Clara de Asís", de: "Hl. Klara von Assisi" }, 
    description: { 
      en: "Founder of the Poor Clares. Follower of Francis. Repelled Saracen invaders by holding up the Monstrance.", 
      fr: "Fondatrice des Clarisses. Disciple de François. Repoussa les Sarrasins avec l'Ostensoir.", 
      es: "Fundadora de las Clarisas. Discípula de Francisco. Repelió a los sarracenos con la Custodia.", 
      de: "Gründerin der Klarissen. Vertreibung der Sarazenen durch die Monstranz." 
    } 
  },
  { 
    id: 's_simon_stock', 
    startYear: 1165, 
    endYear: 1265, 
    type: 'saint', 
    name: { en: "St. Simon Stock", fr: "Saint Simon Stock", es: "San Simón Stock", de: "Hl. Simon Stock" }, 
    description: { 
      en: "Carmelite Prior General. Received the Brown Scapular from the Virgin Mary in a vision.", 
      fr: "Prieur général des Carmes. Reçut le Scapulaire brun de la Vierge Marie.", 
      es: "Prior General Carmelita. Recibió el Escapulario Marrón de la Virgen María.", 
      de: "Karmeliter-Generalprior. Empfing das braune Skapulier von der Jungfrau Maria." 
    } 
  },
  { 
    id: 's_gertrude', 
    startYear: 1256, 
    endYear: 1302, 
    type: 'saint', 
    name: { en: "St. Gertrude the Great", fr: "Sainte Gertrude la Grande", es: "Santa Gertrudis", de: "Hl. Gertrud" }, 
    description: { 
      en: "Benedictine mystic. One of the first to record visions of the Sacred Heart of Jesus.", 
      fr: "Mystique bénédictine. Une des premières à décrire le Sacré-Cœur de Jésus.", 
      es: "Mística benedictina. Una de las primeras en describir el Sagrado Corazón.", 
      de: "Benediktinerin und Mystikerin. Frühe Visionen des Heiligsten Herzens Jesu." 
    } 
  },
  { 
    id: 's_louis_ix', 
    startYear: 1214, 
    endYear: 1270, 
    type: 'saint', 
    name: { en: "St. Louis IX", fr: "Saint Louis", es: "San Luis", de: "Hl. Ludwig IX." }, 
    description: { 
      en: "King of France. Model Christian monarch. Built the Sainte-Chapelle to house the Crown of Thorns. Died on Crusade.", 
      fr: "Roi de France. Modèle de monarque chrétien. Bâtit la Sainte-Chapelle. Mourut en Croisade.", 
      es: "Rey de Francia. Modelo de monarca cristiano. Construyó la Sainte-Chapelle. Murió en Cruzada.", 
      de: "König von Frankreich. Vorbildlicher christlicher Monarch. Erbaute die Sainte-Chapelle." 
    } 
  },
  { 
    id: 's_elizabeth_hungary', 
    startYear: 1207, 
    endYear: 1231, 
    type: 'saint', 
    name: { en: "St. Elizabeth of Hungary", fr: "Ste Élisabeth de Hongrie", es: "Sta. Isabel de Hungría", de: "Hl. Elisabeth" }, 
    description: { 
      en: "Princess who became a Franciscan tertiary. Famous for her charity and the miracle of the roses.", 
      fr: "Princesse devenue tertiaire franciscaine. Célèbre pour sa charité et le miracle des roses.", 
      es: "Princesa y terciaria franciscana. Famosa por su caridad y el milagro de las rosas.", 
      de: "Prinzessin, Franziskanerin. Berühmt für Nächstenliebe und das Rosenwunder." 
    } 
  },
  { 
    id: 's_robert_molesme', 
    startYear: 1028, 
    endYear: 1111, 
    type: 'saint', 
    name: { en: "St. Robert of Molesme", fr: "Saint Robert de Molesme", es: "San Roberto de Molesmes", de: "Hl. Robert" }, 
    description: { 
      en: "Founder of the Cistercian Order at Cîteaux, seeking a stricter adherence to the Rule of St. Benedict.", 
      fr: "Fondateur de l'Ordre Cistercien à Cîteaux, cherchant une observance plus stricte.", 
      es: "Fundador de la Orden del Císter, buscando una observancia más estricta.", 
      de: "Gründer des Zisterzienserordens in Cîteaux, für strengere Regelobservanz." 
    } 
  },
  { 
    id: 's_matthew', 
    startYear: 10, 
    endYear: 74, 
    type: 'saint', 
    name: { en: "St. Matthew", fr: "Saint Matthieu", es: "San Mateo", de: "Hl. Matthäus" }, 
    description: { 
      en: "Apostle and Evangelist. Formerly a tax collector (Levi). Author of the First Gospel, written for a Jewish audience to show Jesus as the Messiah.", 
      fr: "Apôtre et Évangéliste. Ancien collecteur d'impôts. Auteur du premier Évangile, destiné aux Juifs pour prouver que Jésus est le Messie.", 
      es: "Apóstol y Evangelista. Ex recaudador de impuestos. Autor del primer Evangelio, escrito para demostrar que Jesús es el Mesías.", 
      de: "Apostel und Evangelist. Ehemaliger Zöllner. Verfasser des ersten Evangeliums, das Jesus als den Messias bezeugt." 
    } 
  },
  { 
    id: 's_mark', 
    startYear: 12, 
    endYear: 68, 
    type: 'saint', 
    name: { en: "St. Mark", fr: "Saint Marc", es: "San Marcos", de: "Hl. Markus" }, 
    description: { 
      en: "Evangelist. Disciple of St. Peter. His Gospel is the shortest and likely the earliest, emphasizing the miracles and action of Jesus.", 
      fr: "Évangéliste. Disciple de Saint Pierre. Son Évangile est le plus court et probablement le plus ancien, soulignant les miracles de Jésus.", 
      es: "Evangelista. Discípulo de San Pedro. Su Evangelio es el más corto y antiguo, enfatizando los milagros de Jesús.", 
      de: "Evangelist. Schüler von Petrus. Sein Evangelium ist das kürzeste und wohl älteste, betont die Wunder Jesu." 
    } 
  },
  { 
    id: 's_luke', 
    startYear: 10, 
    endYear: 84, 
    type: 'saint', 
    name: { en: "St. Luke", fr: "Saint Luc", es: "San Lucas", de: "Hl. Lukas" }, 
    description: { 
      en: "Evangelist and Physician. Companion of St. Paul. Author of the Third Gospel and Acts of the Apostles. Patron of doctors and artists.", 
      fr: "Évangéliste et Médecin. Compagnon de Saint Paul. Auteur du troisième Évangile et des Actes des Apôtres. Patron des médecins.", 
      es: "Evangelista y Médico. Compañero de San Pablo. Autor del tercer Evangelio y los Hechos. Patrono de médicos y artistas.", 
      de: "Evangelist und Arzt. Begleiter von Paulus. Verfasser des dritten Evangeliums und der Apostelgeschichte. Patron der Ärzte." 
    } 
  },
  { 
    id: 's_thomas_apostle', 
    startYear: 1, 
    endYear: 72, 
    type: 'saint', 
    name: { en: "St. Thomas the Apostle", fr: "Saint Thomas Apôtre", es: "Santo Tomás Apóstol", de: "Hl. Thomas" }, 
    description: { 
      en: "'Doubting Thomas' who confessed 'My Lord and my God!'. Traveled as a missionary to India, where he was martyred.", 
      fr: "'Thomas l'incrédule' qui confessa 'Mon Seigneur et mon Dieu !'. Missionnaire en Inde où il fut martyrisé.", 
      es: "'Tomás el incrédulo' que confesó '¡Señor mío y Dios mío!'. Misionero en la India, donde fue martirizado.", 
      de: "'Der ungläubige Thomas', der 'Mein Herr und mein Gott!' bekannte. Missionar in Indien, dort gemartert." 
    } 
  },
  { 
    id: 's_cecilia', 
    startYear: 200, 
    endYear: 230, 
    type: 'saint', 
    name: { en: "St. Cecilia", fr: "Sainte Cécile", es: "Santa Cecilia", de: "Hl. Cäcilia" }, 
    description: { 
      en: "Virgin Martyr. Patroness of music. Legend says she sang to God in her heart during her wedding feast. Martyred by beheading.", 
      fr: "Vierge et Martyre. Patronne de la musique. Elle chantait Dieu dans son cœur. Martyrisée par décapitation.", 
      es: "Virgen y Mártir. Patrona de la música. Cantaba a Dios en su corazón. Martirizada por decapitación.", 
      de: "Jungfrau und Märtyrerin. Patronin der Kirchenmusik. Sang Gott in ihrem Herzen. Enthauptet." 
    } 
  },
  { 
    id: 's_tarcisius', 
    startYear: 263, 
    endYear: 275, 
    type: 'saint', 
    name: { en: "St. Tarcisius", fr: "Saint Tarcisius", es: "San Tarcisio", de: "Hl. Tarcisius" }, 
    description: { 
      en: "Boy martyr of the Eucharist. Killed by a mob while carrying the Blessed Sacrament to prisoners, refusing to give it up to dogs.", 
      fr: "Enfant martyr de l'Eucharistie. Tué en portant le Saint-Sacrement aux prisonniers, refusant de le livrer.", 
      es: "Niño mártir de la Eucaristía. Matado por defender el Santísimo Sacramento que llevaba a los presos.", 
      de: "Jugendlicher Märtyrer der Eucharistie. Getötet, als er das Allerheiligste zu Gefangenen brachte und es schützte." 
    } 
  },
  { 
    id: 's_rita', 
    startYear: 1381, 
    endYear: 1457, 
    type: 'saint', 
    name: { en: "St. Rita of Cascia", fr: "Sainte Rita de Cascia", es: "Santa Rita de Casia", de: "Hl. Rita von Cascia" }, 
    description: { 
      en: "Patroness of Impossible Causes. Wife, mother, then Augustinian nun. Bore a stigmata of a thorn from Christ's crown on her forehead.", 
      fr: "Patronne des causes désespérées. Épouse, mère, puis religieuse. Porta un stigmate d'épine au front.", 
      es: "Patrona de los imposibles. Esposa, madre y monja. Llevó un estigma de una espina en la frente.", 
      de: "Patronin der aussichtslosen Fälle. Ehefrau, Mutter, dann Nonne. Trug eine Dornenwunde auf der Stirn." 
    } 
  },
  { 
    id: 's_joan_arc', 
    startYear: 1412, 
    endYear: 1431, 
    type: 'saint', 
    name: { en: "St. Joan of Arc", fr: "Sainte Jeanne d'Arc", es: "Santa Juana de Arco", de: "Hl. Johanna von Orléans" }, 
    description: { 
      en: "The Maid of Orléans. Peasant girl who led the French army at age 17. Burned at the stake by the English. Patron of France.", 
      fr: "La Pucelle d'Orléans. Paysanne qui mena l'armée française à 17 ans. Brûlée vive à Rouen. Patronne de la France.", 
      es: "La Doncella de Orleans. Campesina que guio al ejército francés. Quemada en la hoguera. Patrona de Francia.", 
      de: "Die Jungfrau von Orléans. Bauernmädchen, das das französische Heer führte. Auf dem Scheiterhaufen verbrannt." 
    } 
  },
  { 
    id: 's_juan_diego', 
    startYear: 1474, 
    endYear: 1548, 
    type: 'saint', 
    name: { en: "St. Juan Diego", fr: "Saint Juan Diego", es: "San Juan Diego", de: "Hl. Juan Diego" }, 
    description: { 
      en: "Aztec convert to whom Our Lady of Guadalupe appeared in 1531. Her image was miraculously imprinted on his tilma (cloak).", 
      fr: "Aztèque converti à qui Notre-Dame de Guadalupe apparut en 1531. L'image s'imprima sur sa tilma.", 
      es: "Azteca converso vidente de la Virgen de Guadalupe (1531). Su imagen quedó en su tilma.", 
      de: "Aztekischer Konvertit, dem 1531 Unsere Liebe Frau von Guadalupe erschien. Ihr Bild blieb auf seinem Umhang." 
    } 
  },
  { 
    id: 's_thomas_more', 
    startYear: 1478, 
    endYear: 1535, 
    type: 'saint', 
    name: { en: "St. Thomas More", fr: "Saint Thomas More", es: "Santo Tomás Moro", de: "Hl. Thomas Morus" }, 
    description: { 
      en: "Chancellor of England and Martyr. 'The King's good servant, but God's first'. Beheaded for refusing to accept Henry VIII's supremacy over the Church.", 
      fr: "Chancelier d'Angleterre et Martyr. Décapité pour avoir refusé la suprématie d'Henri VIII sur l'Église.", 
      es: "Canciller de Inglaterra y Mártir. Decapitado por rechazar la supremacía de Enrique VIII sobre la Iglesia.", 
      de: "Lordkanzler und Märtyrer. 'Des Königs guter Diener, aber Gottes zuerst'. Enthauptet wegen Treue zum Papst." 
    } 
  },
  { 
    id: 's_john_fisher', 
    startYear: 1469, 
    endYear: 1535, 
    type: 'saint', 
    name: { en: "St. John Fisher", fr: "Saint John Fisher", es: "San Juan Fisher", de: "Hl. John Fisher" }, 
    description: { 
      en: "Cardinal and Bishop of Rochester. The only English bishop to refuse the Oath of Supremacy to Henry VIII. Martyred.", 
      fr: "Cardinal et Évêque. Le seul évêque anglais à refuser le serment de suprématie à Henri VIII. Martyr.", 
      es: "Cardenal y Obispo. Único obispo inglés que rechazó el Juramento de Supremacía. Mártir.", 
      de: "Kardinal und Bischof. Der einzige englische Bischof, der Heinrich VIII. den Eid verweigerte. Märtyrer." 
    } 
  },
  { 
    id: 's_ignatius', 
    startYear: 1491, 
    endYear: 1556, 
    type: 'saint', 
    name: { en: "St. Ignatius of Loyola", fr: "Saint Ignace de Loyola", es: "San Ignacio de Loyola", de: "Hl. Ignatius von Loyola" }, 
    description: { 
      en: "Founder of the Society of Jesus (Jesuits). Wrote the 'Spiritual Exercises'. Key figure of the Catholic Counter-Reformation.", 
      fr: "Fondateur de la Compagnie de Jésus (Jésuites). Auteur des 'Exercices Spirituels'. Figure de la Contre-Réforme.", 
      es: "Fundador de la Compañía de Jesús (Jesuitas). Autor de los 'Ejercicios Espirituales'. Clave en la Contrarreforma.", 
      de: "Gründer des Jesuitenordens. Verfasser der 'Geistlichen Übungen'. Schlüsselfigur der Gegenreformation." 
    } 
  },
  { 
    id: 's_francis_xavier', 
    startYear: 1506, 
    endYear: 1552, 
    type: 'saint', 
    name: { en: "St. Francis Xavier", fr: "Saint François Xavier", es: "San Francisco Javier", de: "Hl. Franz Xaver" }, 
    description: { 
      en: "Co-founder of Jesuits. Greatest missionary since St. Paul. Evangelized India and Japan. Died looking towards China.", 
      fr: "Cofondateur des Jésuites. Plus grand missionnaire depuis St Paul. Évangélisa l'Inde et le Japon.", 
      es: "Cofundador de los Jesuitas. Gran misionero. Evangelizó India y Japón. Murió mirando a China.", 
      de: "Mitbegründer der Jesuiten. Größter Missionar seit Paulus. Evangelisierte Indien und Japan." 
    } 
  },
  { 
    id: 's_philip_neri', 
    startYear: 1515, 
    endYear: 1595, 
    type: 'saint', 
    name: { en: "St. Philip Neri", fr: "Saint Philippe Néri", es: "San Felipe Neri", de: "Hl. Philipp Neri" }, 
    description: { 
      en: "The 'Apostle of Rome'. Known for his joy, humor, and humility. Founded the Oratory to revitalize spirituality in Rome.", 
      fr: "L'Apôtre de Rome. Connu pour sa joie et son humour. Fonda l'Oratoire pour revitaliser Rome.", 
      es: "El 'Apóstol de Roma'. Conocido por su alegría y humor. Fundó el Oratorio para revitalizar la fe.", 
      de: "Der 'Apostel Roms'. Bekannt für seinen Humor und seine Freude. Gründer des Oratoriums." 
    } 
  },
  { 
    id: 's_charles_borromeo', 
    startYear: 1538, 
    endYear: 1584, 
    type: 'saint', 
    name: { en: "St. Charles Borromeo", fr: "Saint Charles Borromée", es: "San Carlos Borromeo", de: "Hl. Karl Borromäus" }, 
    description: { 
      en: "Cardinal Archbishop of Milan. Implementer of the Council of Trent. Established the seminary system for educating priests.", 
      fr: "Cardinal Archevêque de Milan. Mit en œuvre le Concile de Trente. Établit le système des séminaires.", 
      es: "Cardenal Arzobispo de Milán. Implementó el Concilio de Trento. Estableció los seminarios.", 
      de: "Kardinalerzbischof von Mailand. Setzte das Konzil von Trient um. Begründete das Priesterseminar-System." 
    } 
  },
  { 
    id: 's_aloysius', 
    startYear: 1568, 
    endYear: 1591, 
    type: 'saint', 
    name: { en: "St. Aloysius Gonzaga", fr: "Saint Louis de Gonzague", es: "San Luis Gonzaga", de: "Hl. Aloisius von Gonzaga" }, 
    description: { 
      en: "Jesuit seminarian. Patron of youth. Died at age 23 caring for plague victims in Rome, carrying them to the hospital.", 
      fr: "Séminariste jésuite. Patron de la jeunesse. Mort à 23 ans en soignant les pestiférés à Rome.", 
      es: "Seminarista jesuita. Patrono de la juventud. Murió a los 23 años cuidando enfermos de peste.", 
      de: "Jesuitennovize. Patron der Jugend. Starb mit 23 bei der Pflege von Pestkranken." 
    } 
  },
  { 
    id: 's_camillus', 
    startYear: 1550, 
    endYear: 1614, 
    type: 'saint', 
    name: { en: "St. Camillus de Lellis", fr: "Saint Camille de Lellis", es: "San Camilo de Lelis", de: "Hl. Kamillus von Lellis" }, 
    description: { 
      en: "Ex-soldier and gambler turned priest. Founded the Camillians to care for the sick. Patron of hospitals and nurses.", 
      fr: "Ancien soldat converti. Fonda les Camilliens pour soigner les malades. Patron des hôpitaux.", 
      es: "Ex soldado converso. Fundó los Camilos para cuidar enfermos. Patrono de hospitales.", 
      de: "Ehemaliger Soldat. Gründete den Kamillianerorden zur Krankenpflege. Patron der Krankenschwestern." 
    } 
  },
  { 
    id: 's_martin_porres', 
    startYear: 1579, 
    endYear: 1639, 
    type: 'saint', 
    name: { en: "St. Martin de Porres", fr: "Saint Martin de Porrès", es: "San Martín de Porres", de: "Hl. Martin von Porres" }, 
    description: { 
      en: "Dominican lay brother in Peru. Son of a Spanish nobleman and a freed slave. Known for his humility, miracles, and care for the poor.", 
      fr: "Frère dominicain au Pérou. Connu pour son humilité, ses miracles et son soin des pauvres et des animaux.", 
      es: "Fraile dominico en Perú. Conocido como 'Fray Escoba'. Santo de la humildad y la justicia social.", 
      de: "Dominikanerlaie in Peru. Bekannt für seine Demut, Wunder und Fürsorge für die Armen." 
    } 
  },
  { 
    id: 's_vincent_paul', 
    startYear: 1581, 
    endYear: 1660, 
    type: 'saint', 
    name: { en: "St. Vincent de Paul", fr: "Saint Vincent de Paul", es: "San Vicente de Paúl", de: "Hl. Vinzenz von Paul" }, 
    description: { 
      en: "Apostle of Charity. Dedicated his life to serving the poor. Founded the Congregation of the Mission (Vincentians) and Daughters of Charity.", 
      fr: "Apôtre de la Charité. Dédia sa vie aux pauvres. Fonda les Lazaristes et les Filles de la Charité.", 
      es: "Apóstol de la Caridad. Dedicó su vida a los pobres. Fundó la Congregación de la Misión.", 
      de: "Apostel der Nächstenliebe. Widmete sein Leben den Armen. Gründer der Vinzentiner." 
    } 
  },
  { 
    id: 's_rose_lima', 
    startYear: 1586, 
    endYear: 1617, 
    type: 'saint', 
    name: { en: "St. Rose of Lima", fr: "Sainte Rose de Lima", es: "Santa Rosa de Lima", de: "Hl. Rosa von Lima" }, 
    description: { 
      en: "First canonized saint of the Americas. Dominican tertiary known for extreme penance and care for the indigent in Peru.", 
      fr: "Première sainte des Amériques. Tertiaire dominicaine connue pour sa pénitence et son aide aux indigents.", 
      es: "Primera santa de América. Terciaria dominica famosa por su penitencia y caridad en Perú.", 
      de: "Erste Heilige Amerikas. Dominikanerin, bekannt für strenge Buße und Fürsorge für Arme." 
    } 
  },
  { 
    id: 's_louise_marillac', 
    startYear: 1591, 
    endYear: 1660, 
    type: 'saint', 
    name: { en: "St. Louise de Marillac", fr: "Sainte Louise de Marillac", es: "Santa Luisa de Marillac", de: "Hl. Luise von Marillac" }, 
    description: { 
      en: "Co-founder of the Daughters of Charity with St. Vincent de Paul. Patron saint of social workers.", 
      fr: "Cofondatrice des Filles de la Charité avec Saint Vincent de Paul. Patronne des travailleurs sociaux.", 
      es: "Cofundadora de las Hijas de la Caridad con San Vicente. Patrona de los trabajadores sociales.", 
      de: "Mitbegründerin der Barmherzigen Schwestern. Schutzpatronin der Sozialarbeiter." 
    } 
  },
  { 
    id: 's_peter_claver', 
    startYear: 1580, 
    endYear: 1654, 
    type: 'saint', 
    name: { en: "St. Peter Claver", fr: "Saint Pierre Claver", es: "San Pedro Claver", de: "Hl. Petrus Claver" }, 
    description: { 
      en: "Jesuit missionary in Colombia. 'Slave of the slaves forever'. Ministered to African slaves arriving in Cartagena.", 
      fr: "Missionnaire jésuite en Colombie. 'Esclave des esclaves'. Servit les esclaves africains à Carthagène.", 
      es: "Misionero jesuita. 'Esclavo de los esclavos'. Sirvió a los esclavos africanos en Cartagena.", 
      de: "Jesuitenmissionar. 'Sklave der Sklaven'. Diente den afrikanischen Sklaven in Kolumbien." 
    } 
  },
  { 
    id: 's_margaret_mary', 
    startYear: 1647, 
    endYear: 1690, 
    type: 'saint', 
    name: { en: "St. Margaret Mary Alacoque", fr: "Ste Marguerite-Marie", es: "Sta. Margarita María", de: "Hl. Margareta Maria" }, 
    description: { 
      en: "Visitation Nun. Received the visions of the Sacred Heart of Jesus, promoting the First Friday devotion.", 
      fr: "Visitandine. Reçut les visions du Sacré-Cœur de Jésus à Paray-le-Monial. Dévotion du premier vendredi.", 
      es: "Monja Visitandina. Vidente del Sagrado Corazón de Jesús. Promovió la devoción de los primeros viernes.", 
      de: "Visitantin. Empfing die Visionen des Heiligsten Herzens Jesu. Herz-Jesu-Verehrung." 
    } 
  },
  { 
    id: 's_kateri', 
    startYear: 1656, 
    endYear: 1680, 
    type: 'saint', 
    name: { en: "St. Kateri Tekakwitha", fr: "Sainte Kateri Tekakwitha", es: "Santa Kateri Tekakwitha", de: "Hl. Kateri Tekakwitha" }, 
    description: { 
      en: "The 'Lily of the Mohawks'. First Native American saint. Algonquin-Mohawk convert known for chastity and piety.", 
      fr: "Le 'Lys des Mohawks'. Première sainte amérindienne. Connue pour sa chasteté et sa piété.", 
      es: "El 'Lirio de los Mohawks'. Primera santa nativa americana. Conversa conocida por su castidad.", 
      de: "Die 'Lilie der Mohawks'. Erste indianische Heilige. Bekannt für Keuschheit und Frömmigkeit." 
    } 
  },
  { 
    id: 's_montfort', 
    startYear: 1673, 
    endYear: 1716, 
    type: 'saint', 
    name: { en: "St. Louis de Montfort", fr: "Saint Louis-Marie de Montfort", es: "San Luis de Montfort", de: "Hl. Ludwig von Montfort" }, 
    description: { 
      en: "Missionary. Promoted Total Consecration to Jesus through Mary. Author of 'True Devotion to Mary'.", 
      fr: "Missionnaire. Promut la Consécration totale à Jésus par Marie. Auteur du 'Traité de la Vraie Dévotion'.", 
      es: "Misionero. Promovió la Consagración total a Jesús por María. Autor del 'Tratado de la Verdadera Devoción'.", 
      de: "Missionar. Förderte die vollkommene Hingabe an Jesus durch Maria. 'Goldenes Buch'." 
    } 
  },
  { 
    id: 's_junipero', 
    startYear: 1713, 
    endYear: 1784, 
    type: 'saint', 
    name: { en: "St. Junípero Serra", fr: "Saint Junipero Serra", es: "San Junípero Serra", de: "Hl. Junípero Serra" }, 
    description: { 
      en: "Franciscan friar. Founder of the California Missions. Evangelized the western United States.", 
      fr: "Frère franciscain. Fondateur des missions de Californie. Évangélisa l'ouest des États-Unis.", 
      es: "Fraile franciscano. Fundador de las Misiones de California. Evangelizó el oeste de EE. UU.", 
      de: "Franziskaner. Gründer der kalifornischen Missionen. Evangelisierte den Westen der USA." 
    } 
  },
  { 
    id: 's_benedict_labre', 
    startYear: 1748, 
    endYear: 1783, 
    type: 'saint', 
    name: { en: "St. Benedict Joseph Labre", fr: "St Benoît-Joseph Labre", es: "San Benito José Labre", de: "Hl. Benedikt Josef Labre" }, 
    description: { 
      en: "The Beggar Saint. Spent his life as a homeless pilgrim visiting shrines across Europe. Patron of the homeless.", 
      fr: "Le Saint Mendiant. Vécut comme pèlerin sans-abri visitant les sanctuaires d'Europe.", 
      es: "El Santo Mendigo. Vivió como peregrino sin hogar. Patrono de los indigentes.", 
      de: "Der Bettlerheilige. Lebte als obdachloser Pilger. Schutzpatron der Obdachlosen." 
    } 
  },
  { 
    id: 's_elizabeth_seton', 
    startYear: 1774, 
    endYear: 1821, 
    type: 'saint', 
    name: { en: "St. Elizabeth Ann Seton", fr: "Ste Elizabeth Ann Seton", es: "Sta. Isabel Ana Seton", de: "Hl. Elizabeth Ann Seton" }, 
    description: { 
      en: "First native-born US citizen canonized. Convert and founder of the Sisters of Charity. Established the Catholic school system in the US.", 
      fr: "Première sainte née aux USA. Convertie, fonda les Sœurs de la Charité et le système scolaire catholique.", 
      es: "Primera santa nacida en EE. UU. Conversa, fundó las Hermanas de la Caridad y las escuelas católicas.", 
      de: "Erste in den USA geborene Heilige. Konvertitin, gründete die Sisters of Charity und das katholische Schulsystem." 
    } 
  },
  { 
    id: 's_vianney', 
    startYear: 1786, 
    endYear: 1859, 
    type: 'saint', 
    name: { en: "St. John Vianney", fr: "Saint Curé d'Ars", es: "San Juan María Vianney", de: "Hl. Pfarrer von Ars" }, 
    description: { 
      en: "The Curé of Ars. Spent up to 16 hours a day hearing confessions. Patron saint of parish priests.", 
      fr: "Le Curé d'Ars. Passait jusqu'à 16 heures par jour au confessionnal. Patron des curés.", 
      es: "El Cura de Ars. Pasaba hasta 16 horas diarias confesando. Patrono de los párrocos.", 
      de: "Der Pfarrer von Ars. Verbrachte bis zu 16 Stunden täglich im Beichtstuhl. Patron der Pfarrer." 
    } 
  },
  { 
    id: 's_catherine_laboure', 
    startYear: 1806, 
    endYear: 1876, 
    type: 'saint', 
    name: { en: "St. Catherine Labouré", fr: "Ste Catherine Labouré", es: "Sta. Catalina Labouré", de: "Hl. Katharina Labouré" }, 
    description: { 
      en: "Daughter of Charity. Received the vision of the Miraculous Medal from the Virgin Mary in Paris.", 
      fr: "Fille de la Charité. Reçut la vision de la Médaille Miraculeuse de la Vierge à la Rue du Bac.", 
      es: "Hija de la Caridad. Recibió la visión de la Medalla Milagrosa de la Virgen en París.", 
      de: "Barmherzige Schwester. Empfing die Vision der Wundertätigen Medaille in Paris." 
    } 
  },
  { 
    id: 's_john_bosco', 
    startYear: 1815, 
    endYear: 1888, 
    type: 'saint', 
    name: { en: "St. John Bosco", fr: "Saint Jean Bosco", es: "San Juan Bosco", de: "Hl. Johannes Bosco" }, 
    description: { 
      en: "Don Bosco. Founder of the Salesians. Dedicated his life to the education of street children and youth using reason, religion, and kindness.", 
      fr: "Don Bosco. Fondateur des Salésiens. Dédia sa vie à l'éducation des jeunes par la douceur.", 
      es: "Don Bosco. Fundador de los Salesianos. Dedicó su vida a educar jóvenes con razón, religión y amor.", 
      de: "Don Bosco. Gründer der Salesianer. Widmete sein Leben der Jugend, lehrte mit Herzensgüte." 
    } 
  },
  { 
    id: 's_charbel', 
    startYear: 1828, 
    endYear: 1898, 
    type: 'saint', 
    name: { en: "St. Charbel Makhlouf", fr: "Saint Charbel", es: "San Chárbel", de: "Hl. Charbel" }, 
    description: { 
      en: "Maronite monk and hermit from Lebanon. Known for immense miracles of healing after his death.", 
      fr: "Moine et ermite maronite du Liban. Connu pour d'innombrables miracles de guérison.", 
      es: "Monje y ermitaño maronita del Líbano. Famoso por inmensos milagros de curación.", 
      de: "Maronitischer Mönch und Eremit aus dem Libanon. Bekannt für unzählige Heilungswunder." 
    } 
  },
  { 
    id: 's_damien', 
    startYear: 1840, 
    endYear: 1889, 
    type: 'saint', 
    name: { en: "St. Damien of Molokai", fr: "Saint Damien de Molokaï", es: "San Damián de Molokai", de: "Hl. Damian de Veuster" }, 
    description: { 
      en: "Missionary priest who volunteered to serve the leper colony in Hawaii. Contracted leprosy himself and died serving them.", 
      fr: "Prêtre missionnaire volontaire pour la léproserie de Molokaï. Contracta la lèpre et mourut parmi eux.", 
      es: "Sacerdote misionero en la leprosería de Molokai. Contrajo lepra y murió sirviéndoles.", 
      de: "Missionar in der Leprakolonie auf Molokai. Bekam selbst Lepra und starb bei den Kranken." 
    } 
  },
  { 
    id: 's_dominic_savio', 
    startYear: 1842, 
    endYear: 1857, 
    type: 'saint', 
    name: { en: "St. Dominic Savio", fr: "Saint Dominique Savio", es: "San Domingo Savio", de: "Hl. Dominikus Savio" }, 
    description: { 
      en: "Student of Don Bosco. Died at age 14. Patron of choirboys. Famous for his motto 'Death rather than sin'.", 
      fr: "Élève de Don Bosco. Mort à 14 ans. Patron des enfants de chœur. 'La mort plutôt que le péché'.", 
      es: "Alumno de Don Bosco. Murió a los 14. Patrono de los monaguillos. 'Antes morir que pecar'.", 
      de: "Schüler Don Boscos. Starb mit 14. Patron der Ministranten. 'Lieber sterben als sündigen'." 
    } 
  },
  { 
    id: 's_bernadette', 
    startYear: 1844, 
    endYear: 1879, 
    type: 'saint', 
    name: { en: "St. Bernadette", fr: "Sainte Bernadette", es: "Santa Bernadette", de: "Hl. Bernadette" }, 
    description: { 
      en: "Visionary of Lourdes. The Virgin Mary appeared to her confirming 'I am the Immaculate Conception'.", 
      fr: "Voyante de Lourdes. La Vierge lui apparut confirmant 'Je suis l'Immaculée Conception'.", 
      es: "Vidente de Lourdes. La Virgen le confirmó: 'Yo soy la Inmaculada Concepción'.", 
      de: "Seherin von Lourdes. Maria erschien ihr als die 'Unbefleckte Empfängnis'." 
    } 
  },
  { 
    id: 's_cabrini', 
    startYear: 1850, 
    endYear: 1917, 
    type: 'saint', 
    name: { en: "St. Frances Xavier Cabrini", fr: "Ste Françoise-Xavière Cabrini", es: "Sta. Francisca Javier Cabrini", de: "Hl. Franziska Xaviera Cabrini" }, 
    description: { 
      en: "Mother Cabrini. First US citizen canonized (naturalized). Founded schools and orphanages for Italian immigrants.", 
      fr: "Mère Cabrini. Fonda des écoles et orphelinats pour les immigrants italiens aux USA.", 
      es: "Madre Cabrini. Primera ciudadana estadounidense canonizada. Ayudó a inmigrantes italianos.", 
      de: "Mutter Cabrini. Gründete Schulen und Waisenhäuser für italienische Einwanderer in den USA." 
    } 
  },
  { 
    id: 's_charles_lwanga', 
    startYear: 1860, 
    endYear: 1886, 
    type: 'saint', 
    name: { en: "St. Charles Lwanga", fr: "Saint Charles Lwanga", es: "San Carlos Lwanga", de: "Hl. Karl Lwanga" }, 
    description: { 
      en: "Leader of the Martyrs of Uganda. Burned to death for protecting the pages from the king's advances and refusing to renounce faith.", 
      fr: "Chef des Martyrs de l'Ouganda. Brûlé vif pour avoir protégé les pages du roi et gardé sa foi.", 
      es: "Líder de los Mártires de Uganda. Quemado vivo por proteger a los pajes y defender su fe.", 
      de: "Anführer der Märtyrer von Uganda. Verbrannt, weil er die Pagen schützte und den Glauben verteidigte." 
    } 
  },
  { 
    id: 's_gemma', 
    startYear: 1878, 
    endYear: 1903, 
    type: 'saint', 
    name: { en: "St. Gemma Galgani", fr: "Sainte Gemma Galgani", es: "Santa Gema Galgani", de: "Hl. Gemma Galgani" }, 
    description: { 
      en: "Italian mystic and stigmatic. Known as the 'Daughter of Passion' for her intense participation in Christ's suffering.", 
      fr: "Mystique et stigmatisée italienne. 'Fille de la Passion' pour son union aux souffrances du Christ.", 
      es: "Mística y estigmatizada italiana. 'Hija de la Pasión' por su unión con el sufrimiento de Cristo.", 
      de: "Italienische Mystikerin und Stigmatisierte. 'Tochter der Passion'." 
    } 
  },
  { 
    id: 's_maria_goretti', 
    startYear: 1890, 
    endYear: 1902, 
    type: 'saint', 
    name: { en: "St. Maria Goretti", fr: "Sainte Maria Goretti", es: "Santa María Goretti", de: "Hl. Maria Goretti" }, 
    description: { 
      en: "Young martyr of purity. Forgave her attacker, Alessandro Serenelli, on her deathbed, leading to his conversion.", 
      fr: "Jeune martyre de la pureté. Pardonna à son agresseur sur son lit de mort, menant à sa conversion.", 
      es: "Joven mártir de la pureza. Perdonó a su asesino en su lecho de muerte, logrando su conversión.", 
      de: "Junge Märtyrerin der Reinheit. Vergab ihrem Mörder auf dem Sterbebett, was ihn bekehrte." 
    } 
  },
  { 
    id: 's_maximilian_kolbe', 
    startYear: 1894, 
    endYear: 1941, 
    type: 'saint', 
    name: { en: "St. Maximilian Kolbe", fr: "St Maximilien Kolbe", es: "San Maximiliano Kolbe", de: "Hl. Maximilian Kolbe" }, 
    description: { 
      en: "Martyr of Charity. Franciscan priest who volunteered to die in place of a stranger at Auschwitz.", 
      fr: "Martyr de la Charité. Prêtre franciscain qui prit la place d'un père de famille à Auschwitz.", 
      es: "Mártir de la Caridad. Sacerdote que se ofreció a morir por un padre de familia en Auschwitz.", 
      de: "Märtyrer der Nächstenliebe. Ging in Auschwitz freiwillig für einen Familienvater in den Tod." 
    } 
  },
  { 
    id: 's_isaac_jogues', 
    startYear: 1607, 
    endYear: 1646, 
    type: 'saint', 
    name: { en: "St. Isaac Jogues", fr: "Saint Isaac Jogues", es: "San Isaac Jogues", de: "Hl. Isaak Jogues" }, 
    description: { 
      en: "Jesuit martyr in North America. Tortured by the Mohawks (losing fingers), he returned to France but went back to mission and was martyred.", 
      fr: "Martyr jésuite en Amérique du Nord. Torturé par les Mohawks (doigts coupés), il retourna en mission et fut martyrisé.", 
      es: "Mártir jesuita en Norteamérica. Torturado por los Mohawks, regresó a Francia pero volvió a la misión y fue martirizado.", 
      de: "Jesuitenmärtyrer in Nordamerika. Von den Mohawks gefoltert, kehrte er zur Mission zurück und erlitt das Martyrium." 
    } 
  },
  { 
    id: 's_jean_brebeuf', 
    startYear: 1593, 
    endYear: 1649, 
    type: 'saint', 
    name: { en: "St. Jean de Brébeuf", fr: "Saint Jean de Brébeuf", es: "San Juan de Brébeuf", de: "Hl. Jean de Brébeuf" }, 
    description: { 
      en: "Apostle of the Hurons. Jesuit martyr known for his immense physical strength and gentle heart. Tortured to death by the Iroquois.", 
      fr: "Apôtre des Hurons. Martyr jésuite connu pour sa force physique et sa douceur. Torturé à mort par les Iroquois.", 
      es: "Apóstol de los Hurones. Mártir jesuita de inmensa fuerza física. Torturado hasta la muerte por los iroqueses.", 
      de: "Apostel der Huronen. Jesuitenmärtyrer, bekannt für seine Stärke. Von den Irokesen zu Tode gefoltert." 
    } 
  },
  { 
    id: 's_paul_miki', 
    startYear: 1562, 
    endYear: 1597, 
    type: 'saint', 
    name: { en: "St. Paul Miki", fr: "Saint Paul Miki", es: "San Pablo Miki", de: "Hl. Paul Miki" }, 
    description: { 
      en: "Japanese Jesuit martyr. Preached forgiveness from the cross while being crucified with 25 companions in Nagasaki.", 
      fr: "Martyr jésuite japonais. Prêcha le pardon depuis sa croix alors qu'il était crucifié avec 25 compagnons à Nagasaki.", 
      es: "Mártir jesuita japonés. Predicó el perdón desde la cruz mientras era crucificado con 25 compañeros en Nagasaki.", 
      de: "Japanischer Jesuitenmärtyrer. Predigte Vergebung vom Kreuz herab, als er in Nagasaki gekreuzigt wurde." 
    } 
  },
  { 
    id: 's_andrew_kim', 
    startYear: 1821, 
    endYear: 1846, 
    type: 'saint', 
    name: { en: "St. Andrew Kim Taegon", fr: "Saint André Kim Taegon", es: "San Andrés Kim Taegon", de: "Hl. Andreas Kim Taegon" }, 
    description: { 
      en: "First Korean-born Catholic priest. Martyred for the faith at age 25. Leader of the 103 Korean Martyrs.", 
      fr: "Premier prêtre catholique coréen. Martyrisé pour la foi à 25 ans. Chef des 103 martyrs de Corée.", 
      es: "Primer sacerdote católico coreano. Martirizado a los 25 años. Líder de los 103 mártires coreanos.", 
      de: "Erster koreanischer Priester. Mit 25 Jahren für den Glauben gemartert. Anführer der 103 koreanischen Märtyrer." 
    } 
  },
  { 
    id: 's_lorenzo_ruiz', 
    startYear: 1600, 
    endYear: 1637, 
    type: 'saint', 
    name: { en: "St. Lorenzo Ruiz", fr: "Saint Lorenzo Ruiz", es: "San Lorenzo Ruiz", de: "Hl. Lorenzo Ruiz" }, 
    description: { 
      en: "First Filipino saint. Layman and father. Martyred in Japan refusing to renounce his faith: 'I shall die for God a thousand times'.", 
      fr: "Premier saint philippin. Laïc et père. Martyrisé au Japon : 'Je mourrai pour Dieu mille fois'.", 
      es: "Primer santo filipino. Laico y padre. Martirizado en Japón: 'Moriría por Dios mil veces'.", 
      de: "Erster philippinischer Heiliger. Familienvater. Märtyrer in Japan: 'Ich würde tausendmal für Gott sterben'." 
    } 
  },
  { 
    id: 's_mary_mackillop', 
    startYear: 1842, 
    endYear: 1909, 
    type: 'saint', 
    name: { en: "St. Mary MacKillop", fr: "Sainte Mary MacKillop", es: "Santa María MacKillop", de: "Hl. Mary MacKillop" }, 
    description: { 
      en: "First Australian saint. Foundress of the Sisters of St. Joseph of the Sacred Heart. Dedicated to educating the poor in the outback.", 
      fr: "Première sainte australienne. Fondatrice des Sœurs de Saint Joseph. Dediée à l'éducation des pauvres dans le bush.", 
      es: "Primera santa australiana. Fundadora de las Hermanas de San José. Dedicada a educar a los pobres en el interior.", 
      de: "Erste australische Heilige. Gründerin der Josephsschwestern. Widmete sich der Bildung armer Kinder im Outback." 
    } 
  },
  { 
    id: 's_peter_chanel', 
    startYear: 1803, 
    endYear: 1841, 
    type: 'saint', 
    name: { en: "St. Peter Chanel", fr: "Saint Pierre Chanel", es: "San Pedro Chanel", de: "Hl. Peter Chanel" }, 
    description: { 
      en: "Protomartyr of Oceania. Marist missionary in Futuna. His death led to the conversion of the entire island.", 
      fr: "Protomartyr de l'Océanie. Missionnaire mariste à Futuna. Sa mort entraîna la conversion de toute l'île.", 
      es: "Protomártir de Oceanía. Misionero marista en Futuna. Su muerte llevó a la conversión de toda la isla.", 
      de: "Erzmärtyrer Ozeaniens. Maristenmissionar auf Futuna. Sein Tod führte zur Bekehrung der ganzen Insel." 
    } 
  },
  { 
    id: 's_charles_foucauld', 
    startYear: 1858, 
    endYear: 1916, 
    type: 'saint', 
    name: { en: "St. Charles de Foucauld", fr: "Saint Charles de Foucauld", es: "San Carlos de Foucauld", de: "Hl. Charles de Foucauld" }, 
    description: { 
      en: "Hermit in the Sahara Desert. Lived among the Tuareg people. Martyred. His spirituality inspired the Little Brothers of Jesus.", 
      fr: "Ermite au Sahara. Vécut parmi les Touaregs. Martyrisé. Inspira les Petits Frères de Jésus.", 
      es: "Ermitaño en el Sahara. Vivió entre los Tuareg. Mártir. Inspiró a los Hermanitos de Jesús.", 
      de: "Eremit in der Sahara. Lebte unter den Tuareg. Märtyrer. Inspirierte die Kleinen Brüder Jesu." 
    } 
  },
  { 
    id: 's_jacinta_marto', 
    startYear: 1910, 
    endYear: 1920, 
    type: 'saint', 
    name: { en: "St. Jacinta Marto", fr: "Sainte Jacinthe Marto", es: "Santa Jacinta Marto", de: "Hl. Jacinta Marto" }, 
    description: { 
      en: "Youngest non-martyr saint. Visionary of Our Lady of Fatima. Offered her suffering for the conversion of sinners.", 
      fr: "Plus jeune sainte non-martyre. Voyante de Fatima. Offrit ses souffrances pour les pécheurs.", 
      es: "La santa no mártir más joven. Vidente de Fátima. Ofreció sufrimientos por los pecadores.", 
      de: "Jüngste nicht-Märtyrer Heilige. Seherin von Fatima. Opferte ihr Leiden für die Sünder auf." 
    } 
  },
  { 
    id: 's_francisco_marto', 
    startYear: 1908, 
    endYear: 1919, 
    type: 'saint', 
    name: { en: "St. Francisco Marto", fr: "Saint François Marto", es: "San Francisco Marto", de: "Hl. Francisco Marto" }, 
    description: { 
      en: "Visionary of Fatima. Known for his contemplative nature and desire to 'console Jesus' in the Hidden Jesus (Eucharist).", 
      fr: "Voyant de Fatima. Connu pour sa nature contemplative et son désir de 'consoler Jésus' caché.", 
      es: "Vidente de Fátima. Conocido por querer 'consolar a Jesús' en la Eucaristía.", 
      de: "Seher von Fatima. Wollte den 'verborgenen Jesus' (Eucharistie) trösten." 
    } 
  },
  { 
    id: 's_joseph_moscati', 
    startYear: 1880, 
    endYear: 1927, 
    type: 'saint', 
    name: { en: "St. Giuseppe Moscati", fr: "Saint Giuseppe Moscati", es: "San José Moscati", de: "Hl. Giuseppe Moscati" }, 
    description: { 
      en: "The 'Holy Physician of Naples'. Dedicated his medical career to the poor. First modern doctor canonized.", 
      fr: "Le 'Médecin Saint de Naples'. Dédia sa carrière aux pauvres. Premier médecin moderne canonisé.", 
      es: "El 'Médico Santo de Nápoles'. Dedicó su carrera a los pobres. Primer médico moderno canonizado.", 
      de: "Der 'Heilige Arzt von Neapel'. Widmete sich den Armen. Erster moderner Arzt, der heiliggesprochen wurde." 
    } 
  },
  { 
    id: 's_faustina', 
    startYear: 1905, 
    endYear: 1938, 
    type: 'saint', 
    name: { en: "St. Faustina Kowalska", fr: "Sainte Faustine", es: "Santa Faustina", de: "Hl. Faustina" }, 
    description: { 
      en: "Apostle of Divine Mercy. Polish nun who received revelations from Jesus about His infinite mercy. Wrote the 'Diary'.", 
      fr: "Apôtre de la Miséricorde Divine. Religieuse polonaise qui reçut les révélations de Jésus. Auteur du 'Petit Journal'.", 
      es: "Apóstol de la Divina Misericordia. Monja polaca que recibió revelaciones de Jesús. Autora del 'Diario'.", 
      de: "Apostelin der Göttlichen Barmherzigkeit. Polnische Nonne, empfing Offenbarungen Jesu. Schrieb das 'Tagebuch'." 
    } 
  },
  { 
    id: 's_edith_stein', 
    startYear: 1891, 
    endYear: 1942, 
    type: 'saint', 
    name: { en: "St. Teresa Benedicta", fr: "Ste Thérèse-Bénédicte", es: "Sta. Teresa Benedicta", de: "Hl. Edith Stein" }, 
    description: { 
      en: "Edith Stein. Jewish philosopher turned Carmelite nun. Martyred in Auschwitz. Co-patroness of Europe.", 
      fr: "Edith Stein. Philosophe juive devenue carmélite. Martyrisée à Auschwitz. Copatronne de l'Europe.", 
      es: "Edith Stein. Filósofa judía conversa al Carmelo. Mártir en Auschwitz. Copatrona de Europa.", 
      de: "Edith Stein. Jüdische Philosophin, dann Karmelitin. Märtyrerin in Auschwitz. Mitpatronin Europas." 
    } 
  },
  { 
    id: 's_titus_brandsma', 
    startYear: 1881, 
    endYear: 1942, 
    type: 'saint', 
    name: { en: "St. Titus Brandsma", fr: "Saint Titus Brandsma", es: "San Tito Brandsma", de: "Hl. Titus Brandsma" }, 
    description: { 
      en: "Dutch Carmelite priest and journalist. Martyred in Dachau for opposing Nazi propaganda in Catholic newspapers.", 
      fr: "Prêtre carme et journaliste néerlandais. Martyrisé à Dachau pour s'être opposé à la propagande nazie.", 
      es: "Sacerdote carmelita y periodista. Mártir en Dachau por oponerse a la propaganda nazi.", 
      de: "Niederländischer Karmeliter und Journalist. Märtyrer in Dachau wegen Widerstands gegen Nazipropaganda." 
    } 
  },
  { 
    id: 's_leopold_mandic', 
    startYear: 1866, 
    endYear: 1942, 
    type: 'saint', 
    name: { en: "St. Leopold Mandić", fr: "Saint Léopold Mandic", es: "San Leopoldo Mandic", de: "Hl. Leopold Mandic" }, 
    description: { 
      en: "Capuchin friar. Spent most of his life in the confessional in Padua. Apostle of Unity.", 
      fr: "Frère capucin. Passa sa vie au confessionnal à Padoue. Apôtre de l'Unité.", 
      es: "Fraile capuchino. Pasó su vida en el confesionario en Padua. Apóstol de la Unidad.", 
      de: "Kapuziner. Verbrachte sein Leben im Beichtstuhl in Padua. Apostel der Einheit." 
    } 
  },
  { 
    id: 's_josephine_bakhita', 
    startYear: 1869, 
    endYear: 1947, 
    type: 'saint', 
    name: { en: "St. Josephine Bakhita", fr: "Sainte Joséphine Bakhita", es: "Santa Josefina Bakhita", de: "Hl. Josefa Bakhita" }, 
    description: { 
      en: "Sudanese slave who became a Canossian sister in Italy. Symbol of hope and forgiveness for victims of trafficking.", 
      fr: "Esclave soudanaise devenue religieuse en Italie. Symbole d'espoir pour les victimes de la traite.", 
      es: "Esclava sudanesa convertida en religiosa. Símbolo de esperanza para víctimas de trata.", 
      de: "Sudanesische Sklavin, wurde Nonne in Italien. Symbol der Hoffnung für Opfer von Menschenhandel." 
    } 
  },
  { 
    id: 's_katharine_drexel', 
    startYear: 1858, 
    endYear: 1955, 
    type: 'saint', 
    name: { en: "St. Katharine Drexel", fr: "Ste Katharine Drexel", es: "Sta. Catalina Drexel", de: "Hl. Katharine Drexel" }, 
    description: { 
      en: "American heiress who gave up her fortune to found the Sisters of the Blessed Sacrament for Native and African Americans.", 
      fr: "Héritière américaine qui donna sa fortune pour fonder un ordre pour les Amérindiens et Afro-américains.", 
      es: "Heredera americana que dio su fortuna para fundar una orden para nativos y afroamericanos.", 
      de: "Amerikanische Erbin, die ihr Vermögen opferte, um Indianern und Afroamerikanern zu dienen." 
    } 
  },
  { 
    id: 's_gianna_molla', 
    startYear: 1922, 
    endYear: 1962, 
    type: 'saint', 
    name: { en: "St. Gianna Beretta Molla", fr: "Ste Gianna Beretta Molla", es: "Sta. Gianna Beretta Molla", de: "Hl. Gianna Beretta Molla" }, 
    description: { 
      en: "Pediatrician and mother. Refused a life-saving abortion/operation to save her unborn child. Patron of mothers and physicians.", 
      fr: "Pédiatre et mère. Refusa l'avortement pour sauver son enfant à naître. Patronne des mères.", 
      es: "Pediatra y madre. Rechazó el aborto para salvar a su hijo no nacido. Patrona de madres.", 
      de: "Kinderärztin und Mutter. Verweigerte Abtreibung, um ihr ungeborenes Kind zu retten." 
    } 
  },
  { 
    id: 's_padre_pio', 
    startYear: 1887, 
    endYear: 1968, 
    type: 'saint', 
    name: { en: "St. Padre Pio", fr: "Saint Padre Pio", es: "San Padre Pío", de: "Hl. Pater Pio" }, 
    description: { 
      en: "Capuchin priest and mystic. Bore the stigmata for 50 years. Renowned confessor and miracle worker.", 
      fr: "Prêtre capucin et mystique. Porta les stigmates pendant 50 ans. Confesseur renommé.", 
      es: "Sacerdote capuchino y místico. Llevó los estigmas 50 años. Confesor renombrado.", 
      de: "Kapuzinerpater und Mystiker. Trug 50 Jahre lang die Stigmata. Berühmter Beichtvater." 
    } 
  },
  { 
    id: 's_josemaria', 
    startYear: 1902, 
    endYear: 1975, 
    type: 'saint', 
    name: { en: "St. Josemaría Escrivá", fr: "Saint Josémaria Escriva", es: "San Josemaría Escrivá", de: "Hl. Josemaría Escrivá" }, 
    description: { 
      en: "Founder of Opus Dei. Preached the universal call to holiness in everyday life and work.", 
      fr: "Fondateur de l'Opus Dei. Prêcha l'appel universel à la sainteté dans la vie ordinaire.", 
      es: "Fundador del Opus Dei. Predicó la llamada universal a la santidad en la vida ordinaria.", 
      de: "Gründer des Opus Dei. Predigte den allgemeinen Ruf zur Heiligkeit im Alltag." 
    } 
  },
  { 
    id: 's_oscar_romero', 
    startYear: 1917, 
    endYear: 1980, 
    type: 'saint', 
    name: { en: "St. Oscar Romero", fr: "Saint Oscar Romero", es: "San Óscar Romero", de: "Hl. Oscar Romero" }, 
    description: { 
      en: "Archbishop of San Salvador. Martyr. Voice for the poor and oppressed against government violence. Assassinated while saying Mass.", 
      fr: "Archevêque de San Salvador. Martyr. Voix des pauvres contre la violence. Assassiné en disant la messe.", 
      es: "Arzobispo de San Salvador. Mártir. Voz de los pobres. Asesinado mientras celebraba Misa.", 
      de: "Erzbischof von San Salvador. Märtyrer. Stimme der Armen. Während der Messe ermordet." 
    } 
  },
  { 
    id: 's_teresa_calcutta', 
    startYear: 1910, 
    endYear: 1997, 
    type: 'saint', 
    name: { en: "St. Teresa of Calcutta", fr: "Mère Teresa", es: "Santa Teresa de Calcuta", de: "Hl. Mutter Teresa" }, 
    description: { 
      en: "Mother Teresa. Founder of the Missionaries of Charity. Served the 'poorest of the poor' in India and worldwide.", 
      fr: "Mère Teresa. Fondatrice des Missionnaires de la Charité. Servit les 'plus pauvres des pauvres'.", 
      es: "Madre Teresa. Fundadora de las Misioneras de la Caridad. Sirvió a los más pobres.", 
      de: "Mutter Teresa. Gründerin der Missionarinnen der Nächstenliebe. Diente den 'Ärmsten der Armen'." 
    } 
  },
  { 
    id: 's_andre_bessette', 
    startYear: 1845, 
    endYear: 1937, 
    type: 'saint', 
    name: { en: "St. André Bessette", fr: "Saint Frère André", es: "San Andrés Bessette", de: "Hl. Andreas Bessette" }, 
    description: { 
      en: "Humble doorkeeper of the Holy Cross Congregation in Montreal. Healed thousands through the intercession of St. Joseph.", 
      fr: "Humble portier à Montréal. Guérit des milliers de personnes par l'intercession de Saint Joseph.", 
      es: "Humilde portero en Montreal. Sanó a miles por intercesión de San José.", 
      de: "Bescheidener Pförtner in Montreal. Heilte Tausende durch die Fürsprache des Hl. Josef." 
    } 
  },
  { 
    id: 's_louis_martin', 
    startYear: 1823, 
    endYear: 1894, 
    type: 'saint', 
    name: { en: "St. Louis Martin", fr: "Saint Louis Martin", es: "San Luis Martin", de: "Hl. Louis Martin" }, 
    description: { 
      en: "Father of St. Thérèse of Lisieux. Watchmaker. Canonized alongside his wife Zélie, highlighting the sanctity of marriage.", 
      fr: "Père de Ste Thérèse. Horloger. Canonisé avec son épouse Zélie (sainteté du mariage).", 
      es: "Padre de Sta. Teresita. Relojero. Canonizado con su esposa Zélie.", 
      de: "Vater von Thérèse. Uhrmacher. Zusammen mit seiner Frau Zélie heiliggesprochen." 
    } 
  },
  { 
    id: 's_zelie_martin', 
    startYear: 1831, 
    endYear: 1877, 
    type: 'saint', 
    name: { en: "St. Zélie Martin", fr: "Sainte Zélie Martin", es: "Santa Celia Martin", de: "Hl. Zélie Martin" }, 
    description: { 
      en: "Mother of St. Thérèse. Lace maker. Model of a Christian working mother. Died of breast cancer.", 
      fr: "Mère de Ste Thérèse. Dentellière. Modèle de mère chrétienne. Morte d'un cancer.", 
      es: "Madre de Sta. Teresita. Encajera. Modelo de madre trabajadora cristiana.", 
      de: "Mutter von Thérèse. Spitzenklöpplerin. Vorbild einer christlichen Mutter." 
    } 
  },
  { 
    id: 's_roque_gonzalez', 
    startYear: 1576, 
    endYear: 1628, 
    type: 'saint', 
    name: { en: "St. Roque González", fr: "Saint Roque González", es: "San Roque González", de: "Hl. Rochus González" }, 
    description: { 
      en: "Jesuit priest and martyr in Paraguay. Founder of the 'Reductions' (missions) protecting indigenous people.", 
      fr: "Prêtre jésuite et martyr au Paraguay. Fonda les 'Réductions' pour protéger les indigènes.", 
      es: "Sacerdote jesuita y mártir en Paraguay. Fundó las 'Reducciones' protegiendo a indígenas.", 
      de: "Jesuitenpriester und Märtyrer in Paraguay. Gründer der 'Reduktionen'." 
    } 
  },
  { 
    id: 's_maravillas', 
    startYear: 1891, 
    endYear: 1974, 
    type: 'saint', 
    name: { en: "St. Maravillas of Jesus", fr: "Sainte Maravillas", es: "Santa Maravillas de Jesús", de: "Hl. Maravillas" }, 
    description: { 
      en: "Carmelite nun in Spain. Founded many convents. Known for her mysticism and charity during the Spanish Civil War.", 
      fr: "Carmélite espagnole. Fonda de nombreux couvents. Mystique et charitable durant la guerre civile.", 
      es: "Carmelita española. Fundó muchos conventos. Mística y caritativa durante la Guerra Civil.", 
      de: "Spanische Karmelitin. Gründete viele Klöster. Mystikerin." 
    } 
  },
  { 
    id: 's_laura_montoya', 
    startYear: 1874, 
    endYear: 1949, 
    type: 'saint', 
    name: { en: "St. Laura Montoya", fr: "Sainte Laura Montoya", es: "Santa Laura Montoya", de: "Hl. Laura Montoya" }, 
    description: { 
      en: "First Colombian saint. Teacher and missionary who worked with the indigenous peoples of the Amazon.", 
      fr: "Première sainte colombienne. Enseignante et missionnaire auprès des indigènes de l'Amazonie.", 
      es: "Primera santa colombiana. Maestra y misionera con los indígenas del Amazonas.", 
      de: "Erste kolumbianische Heilige. Lehrerin und Missionarin bei den Ureinwohnern." 
    } 
  },
  { 
    id: 's_alberto_hurtado', 
    startYear: 1901, 
    endYear: 1952, 
    type: 'saint', 
    name: { en: "St. Alberto Hurtado", fr: "Saint Alberto Hurtado", es: "San Alberto Hurtado", de: "Hl. Alberto Hurtado" }, 
    description: { 
      en: "Chilean Jesuit. Lawyer and priest. Champion of workers' rights and founder of 'Hogar de Cristo' for the homeless.", 
      fr: "Jésuite chilien. Avocat et prêtre. Défenseur des ouvriers et fondateur du 'Hogar de Cristo'.", 
      es: "Jesuita chileno. Abogado y sacerdote. Defensor de obreros y fundador del 'Hogar de Cristo'.", 
      de: "Chilenischer Jesuit. Anwalt und Priester. Gründer des 'Hogar de Cristo' für Obdachlose." 
    } 
  },
  { 
    id: 's_narcisa', 
    startYear: 1832, 
    endYear: 1869, 
    type: 'saint', 
    name: { en: "St. Narcisa de Jesús", fr: "Ste Narcisse de Jésus", es: "Santa Narcisa de Jesús", de: "Hl. Narcisa de Jesús" }, 
    description: { 
      en: "Ecuadorian laywoman. Known for her asceticism, prayer, and care for the sick.", 
      fr: "Laïque équatorienne. Connue pour son ascétisme, sa prière et son soin des malades.", 
      es: "Laica ecuatoriana. Conocida por su ascetismo, oración y cuidado de los enfermos.", 
      de: "Ecuadorianische Laiin. Bekannt für Askese, Gebet und Krankenpflege." 
    } 
  },
  { 
    id: 's_br_solanus', 
    startYear: 1870, 
    endYear: 1957, 
    type: 'saint', 
    name: { en: "Bl. Solanus Casey", fr: "Bx Solanus Casey", es: "Bto. Solanus Casey", de: "Sel. Solanus Casey" }, 
    description: { 
      en: "Capuchin porter in Detroit. Known for his miracles and counseling. (Technically Blessed, highly venerated).", 
      fr: "Portier capucin à Détroit. Connu pour ses miracles et conseils. (Bienheureux).", 
      es: "Portero capuchino en Detroit. Famoso por milagros y consejos. (Beato).", 
      de: "Kapuzinerpförtner in Detroit. Bekannt für Wunder und Rat. (Seliger)." 
    } 
  },
  { 
    id: 's_miguel_pro', 
    startYear: 1891, 
    endYear: 1927, 
    type: 'saint', 
    name: { en: "Bl. Miguel Pro", fr: "Bx Miguel Pro", es: "Bto. Miguel Pro", de: "Sel. Miguel Pro" }, 
    description: { 
      en: "Mexican Jesuit martyr. Executed by firing squad during the Cristero War shouting '¡Viva Cristo Rey!'.", 
      fr: "Martyr jésuite mexicain. Exécuté en criant '¡Viva Cristo Rey !' durant la guerre des Cristeros.", 
      es: "Mártir jesuita mexicano. Ejecutado gritando '¡Viva Cristo Rey!' en la Guerra Cristera.", 
      de: "Mexikanischer Jesuitenmärtyrer. Rief bei der Hinrichtung '¡Viva Cristo Rey!'." 
    } 
  },
  { 
    id: 's_pier_giorgio', 
    startYear: 1901, 
    endYear: 1925, 
    type: 'saint', 
    name: { en: "Bl. Pier Giorgio Frassati", fr: "Bx Pier Giorgio Frassati", es: "Bto. Pier Giorgio Frassati", de: "Sel. Pier Giorgio Frassati" }, 
    description: { 
      en: "Italian activist. 'Man of the Beatitudes'. Avid mountaineer who served the poor. Patron of young adults.", 
      fr: "Activiste italien. 'L'homme des Béatitudes'. Alpiniste au service des pauvres.", 
      es: "Activista italiano. 'El hombre de las Bienaventuranzas'. Montañista que sirvió a los pobres.", 
      de: "Italienischer Aktivist. 'Mann der Seligpreisungen'. Alpinist und Helfer der Armen." 
    } 
  },
  { 
    id: 's_chiara_luce', 
    startYear: 1971, 
    endYear: 1990, 
    type: 'saint', 
    name: { en: "Bl. Chiara Luce Badano", fr: "Saint Chiara Luce Badano", es: "Bta. Chiara Luce Badano", de: "Sel. Chiara Luce Badano" }, 
    description: { 
      en: "Italian teenager of the Focolare movement. Died of bone cancer offering her pain to Jesus. 'For you, Jesus'.", 
      fr: "Adolescente italienne (Focolari). Morte d'un cancer en offrant sa douleur à Jésus.", 
      es: "Joven italiana (Focolares). Murió de cáncer ofreciendo su dolor a Jesús.", 
      de: "Italienische Jugendliche (Fokolar). Starb an Knochenkrebs, opferte ihr Leid Jesus auf." 
    } 
  },
  { 
    id: 's_carlo_acutis', 
    startYear: 1991, 
    endYear: 2006, 
    type: 'saint', 
    name: { en: "St. Carlo Acutis", fr: "Bx Carlo Acutis", es: "San. Carlo Acutis", de: "Hl. Carlo Acutis" }, 
    description: { 
      en: "Millennial computer geek. Documented Eucharistic miracles online. Died of leukemia. Patron of the internet.", 
      fr: "Génie de l'informatique. Documenta les miracles eucharistiques. Mort de leucémie.", 
      es: "Genio informático millennial. Documentó milagros eucarísticos. Murió de leucemia.", 
      de: "Computerfreak. Dokumentierte eucharistische Wunder im Internet. Starb an Leukämie." 
    } 
  }
];

// --- 3. POPES (Part 1: 1-50) ---
export const POPES: TimelineEvent[] = [
  { 
    id: 'p1', 
    startYear: 30, 
    endYear: 67, 
    type: 'pope', 
    name: { en: "St. Peter", fr: "Saint Pierre", es: "San Pedro", de: "Hl. Petrus" }, 
    description: { 
      en: "Prince of the Apostles and the first Pope. Received the Keys of the Kingdom from Christ. Martyred in Rome under Emperor Nero, crucified upside down.", 
      fr: "Prince des Apôtres et premier Pape. A reçu les Clés du Royaume du Christ. Martyrisé à Rome sous Néron, crucifié la tête en bas.", 
      es: "Príncipe de los Apóstoles y primer Papa. Recibió las Llaves del Reino de Cristo. Martirizado en Roma bajo Nerón, crucificado boca abajo.", 
      de: "Fürst der Apostel und erster Papst. Erhielt die Schlüssel des Himmelreichs von Christus. Unter Nero in Rom kopfüber gekreuzigt." 
    } 
  },
  { 
    id: 'p2', 
    startYear: 67, 
    endYear: 76, 
    type: 'pope', 
    name: { en: "St. Linus", fr: "Saint Lin", es: "San Lino", de: "Hl. Linus" }, 
    description: { 
      en: "Immediate successor to Peter. Mentioned by St. Paul in his second letter to Timothy (4:21).", 
      fr: "Successeur immédiat de Pierre. Mentionné par saint Paul dans sa deuxième lettre à Timothée.", 
      es: "Sucesor inmediato de Pedro. Mencionado por San Pablo en su segunda carta a Timoteo.", 
      de: "Unmittelbarer Nachfolger von Petrus. Erwähnt von Paulus im zweiten Timotheusbrief." 
    } 
  },
  { 
    id: 'p3', 
    startYear: 76, 
    endYear: 88, 
    type: 'pope', 
    name: { en: "St. Anacletus (Cletus)", fr: "Saint Anaclet", es: "San Anacleto", de: "Hl. Anaklet" }, 
    description: { 
      en: "Ordered Rome into 25 parishes. Preserved the memory of St. Peter's burial place.", 
      fr: "Divisa Rome en 25 paroisses. Préserva la mémoire du lieu de sépulture de Saint Pierre.", 
      es: "Dividió Roma en 25 parroquias. Preservó la memoria del lugar de sepultura de San Pedro.", 
      de: "Teilte Rom in 25 Pfarreien ein. Bewahrte das Andenken an die Grabstätte von Petrus." 
    } 
  },
  { 
    id: 'p4', 
    startYear: 88, 
    endYear: 97, 
    type: 'pope', 
    name: { en: "St. Clement I", fr: "Saint Clément I", es: "San Clemente I", de: "Hl. Klemens I." }, 
    description: { 
      en: "Author of the famous Epistle to the Corinthians, emphasizing apostolic succession and Roman primacy. Exiled to Crimea and martyred by being tied to an anchor and thrown into the sea.", 
      fr: "Auteur de l'Épître aux Corinthiens sur la succession apostolique. Exilé en Crimée et martyrisé, jeté à la mer avec une ancre.", 
      es: "Autor de la Epístola a los Corintios sobre la sucesión apostólica. Exiliado y martirizado al ser arrojado al mar atado a un ancla.", 
      de: "Autor des Korintherbriefs über die apostolische Sukzession. Verbannt und mit einem Anker im Meer versenkt." 
    } 
  },
  { 
    id: 'p5', 
    startYear: 97, 
    endYear: 105, 
    type: 'pope', 
    name: { en: "St. Evaristus", fr: "Saint Évariste", es: "San Evaristo", de: "Hl. Evaristus" }, 
    description: { 
      en: "Traditionally credited with dividing Rome into titles (tituli) for priests.", 
      fr: "Crédité de la division de Rome en titres (tituli) pour les prêtres.", 
      es: "Acreditado con la división de Roma en títulos (tituli) para los sacerdotes.", 
      de: "Ihm wird die Einteilung Roms in Titelkirchen (tituli) zugeschrieben." 
    } 
  },
  { 
    id: 'p6', 
    startYear: 105, 
    endYear: 115, 
    type: 'pope', 
    name: { en: "St. Alexander I", fr: "Saint Alexandre I", es: "San Alejandro I", de: "Hl. Alexander I." }, 
    description: { 
      en: "Instituted the use of holy water mixed with salt for purification of Christian homes.", 
      fr: "Institua l'usage de l'eau bénite mêlée de sel pour la purification des maisons chrétiennes.", 
      es: "Instituyó el uso de agua bendita con sal para purificar los hogares cristianos.", 
      de: "Führte das Weihwasser mit Salz zur Reinigung christlicher Häuser ein." 
    } 
  },
  { 
    id: 'p7', 
    startYear: 115, 
    endYear: 125, 
    type: 'pope', 
    name: { en: "St. Sixtus I", fr: "Saint Sixte I", es: "San Sixto I", de: "Hl. Sixtus I." }, 
    description: { 
      en: "Decreed that sacred vessels should only be touched by the clergy.", 
      fr: "Décréta que les vases sacrés ne devaient être touchés que par le clergé.", 
      es: "Decretó que los vasos sagrados solo debían ser tocados por el clero.", 
      de: "Verordnete, dass heilige Gefäße nur von Klerikern berührt werden dürfen." 
    } 
  },
  { 
    id: 'p8', 
    startYear: 125, 
    endYear: 136, 
    type: 'pope', 
    name: { en: "St. Telesphorus", fr: "Saint Télesphore", es: "San Telesforo", de: "Hl. Telesphorus" }, 
    description: { 
      en: "Instituted the midnight Mass at Christmas and the seven-week fast of Lent.", 
      fr: "Institua la messe de minuit à Noël et le jeûne de sept semaines du Carême.", 
      es: "Instituyó la Misa de gallo en Navidad y el ayuno de siete semanas de Cuaresma.", 
      de: "Führte die Mitternachtsmesse an Weihnachten und das siebenwöchige Fasten ein." 
    } 
  },
  { 
    id: 'p9', 
    startYear: 136, 
    endYear: 140, 
    type: 'pope', 
    name: { en: "St. Hyginus", fr: "Saint Hygin", es: "San Higinio", de: "Hl. Hyginus" }, 
    description: { 
      en: "Structured the hierarchy of the clergy and defined the role of godparents at baptism.", 
      fr: "Structura la hiérarchie du clergé et définit le rôle des parrains au baptême.", 
      es: "Estructuró la jerarquía del clero y definió el papel de los padrinos en el bautismo.", 
      de: "Strukturierte die Klerushierarchie und definierte die Rolle der Taufpaten." 
    } 
  },
  { 
    id: 'p10', 
    startYear: 140, 
    endYear: 155, 
    type: 'pope', 
    name: { en: "St. Pius I", fr: "Saint Pie I", es: "San Pío I", de: "Hl. Pius I." }, 
    description: { 
      en: "Combated the Gnostic heresy of Marcion. Decreed that Easter should only be celebrated on a Sunday.", 
      fr: "Combattit l'hérésie gnostique de Marcion. Décréta que Pâques ne devait être célébrée qu'un dimanche.", 
      es: "Combatió la herejía gnóstica de Marción. Decretó que la Pascua solo se celebrara en domingo.", 
      de: "Bekämpfte die Gnosis von Marcion. Ordnete an, Ostern nur am Sonntag zu feiern." 
    } 
  },
  { 
    id: 'p11', 
    startYear: 155, 
    endYear: 166, 
    type: 'pope', 
    name: { en: "St. Anicetus", fr: "Saint Anicet", es: "San Aniceto", de: "Hl. Anicetus" }, 
    description: { 
      en: "Discussed the date of Easter with St. Polycarp of Smyrna, a disciple of St. John.", 
      fr: "Discuta de la date de Pâques avec saint Polycarpe de Smyrne, disciple de saint Jean.", 
      es: "Discutió la fecha de Pascua con San Policarpo, discípulo de San Juan.", 
      de: "Diskutierte das Osterdatum mit dem Hl. Polykarp, einem Schüler von Johannes." 
    } 
  },
  { 
    id: 'p12', 
    startYear: 166, 
    endYear: 175, 
    type: 'pope', 
    name: { en: "St. Soter", fr: "Saint Soter", es: "San Sotero", de: "Hl. Soter" }, 
    description: { 
      en: "Known as the 'Pope of Charity' for his aid to distant churches. Validated marriage as a sacrament blessed by a priest.", 
      fr: "Pape de la Charité. Valida le mariage comme sacrement béni par un prêtre.", 
      es: "Papa de la Caridad. Validó el matrimonio como sacramento bendecido por un sacerdote.", 
      de: "Papst der Nächstenliebe. Bestätigte die Ehe als von einem Priester gesegnetes Sakrament." 
    } 
  },
  { 
    id: 'p13', 
    startYear: 175, 
    endYear: 189, 
    type: 'pope', 
    name: { en: "St. Eleutherius", fr: "Saint Éleuthère", es: "San Eleuterio", de: "Hl. Eleutherus" }, 
    description: { 
      en: "Received a request from British King Lucius for missionaries. Condemned the Montanist heresy.", 
      fr: "Reçut une demande de missionnaires du roi Lucius de Bretagne. Condamna le montanisme.", 
      es: "Recibió petición de misioneros del rey Lucio de Britania. Condenó el montanismo.", 
      de: "Erhielt Missionarsanfrage von Britenkönig Lucius. Verurteilte den Montanismus." 
    } 
  },
  { 
    id: 'p14', 
    startYear: 189, 
    endYear: 199, 
    type: 'pope', 
    name: { en: "St. Victor I", fr: "Saint Victor I", es: "San Víctor I", de: "Hl. Viktor I." }, 
    description: { 
      en: "First African Pope. Asserted Roman authority in the Quartodeciman controversy regarding the date of Easter. Changed the liturgical language from Greek to Latin.", 
      fr: "Premier pape africain. Affirma l'autorité romaine sur la date de Pâques. Passa du grec au latin pour la liturgie.", 
      es: "Primer Papa africano. Afirmó la autoridad romana sobre la fecha de Pascua. Cambió la liturgia del griego al latín.", 
      de: "Erster afrikanischer Papst. Setzte römische Autorität im Osterstreit durch. Wechselte von Griechisch zu Latein." 
    } 
  },
  { 
    id: 'p15', 
    startYear: 199, 
    endYear: 217, 
    type: 'pope', 
    name: { en: "St. Zephyrinus", fr: "Saint Zéphyrin", es: "San Ceferino", de: "Hl. Zephyrinus" }, 
    description: { 
      en: "Defended the divinity of Christ against Modalism. Relied heavily on his deacon Callixtus.", 
      fr: "Défendit la divinité du Christ contre le modalisme. S'appuya sur son diacre Callixte.", 
      es: "Defendió la divinidad de Cristo contra el modalismo. Confió en su diácono Calixto.", 
      de: "Verteidigte die Gottheit Christi gegen den Modalismus. Stützte sich auf seinen Diakon Calixtus." 
    } 
  },
  { 
    id: 'p16', 
    startYear: 217, 
    endYear: 222, 
    type: 'pope', 
    name: { en: "St. Callixtus I", fr: "Saint Callixte I", es: "San Calixto I", de: "Hl. Calixtus I." }, 
    description: { 
      en: "Decreed that repentant sinners, even murderers and adulterers, could be absolved, leading to the first schism (Hippolytus).", 
      fr: "Décréta l'absolution des pécheurs repentants, causant le premier schisme (Hippolyte).", 
      es: "Decretó la absolución de pecadores arrepentidos, provocando el primer cisma (Hipólito).", 
      de: "Erlaubte die Absolution für reuige Sünder, was zum ersten Schisma führte (Hippolyt)." 
    } 
  },
  { 
    id: 'p17', 
    startYear: 222, 
    endYear: 230, 
    type: 'pope', 
    name: { en: "St. Urban I", fr: "Saint Urbain I", es: "San Urbano I", de: "Hl. Urban I." }, 
    description: { 
      en: "Pontificate marked by peace during the reign of Emperor Alexander Severus. Converted many, including St. Cecilia's husband.", 
      fr: "Règne paisible sous l'empereur Sévère. Convertit l'époux de sainte Cécile.", 
      es: "Pontificado pacífico bajo Alejandro Severo. Convirtió al esposo de Santa Cecilia.", 
      de: "Friedliche Zeit unter Kaiser Severus. Bekehrte den Ehemann der Hl. Cäcilia." 
    } 
  },
  { 
    id: 'p18', 
    startYear: 230, 
    endYear: 235, 
    type: 'pope', 
    name: { en: "St. Pontian", fr: "Saint Pontien", es: "San Ponciano", de: "Hl. Pontianus" }, 
    description: { 
      en: "First Pope to resign. Exiled to the salt mines of Sardinia where he died of harsh treatment.", 
      fr: "Premier pape à démissionner. Exilé dans les mines de Sardaigne où il mourut.", 
      es: "Primer Papa en renunciar. Exiliado a las minas de Cerdeña donde murió.", 
      de: "Erster Papst, der zurücktrat. Starb im Exil in den sardischen Minen." 
    } 
  },
  { 
    id: 'p19', 
    startYear: 235, 
    endYear: 236, 
    type: 'pope', 
    name: { en: "St. Anterus", fr: "Saint Antère", es: "San Antero", de: "Hl. Anterus" }, 
    description: { 
      en: "Reigned for only 43 days. Ordered the collection of the Acts of the Martyrs to preserve history.", 
      fr: "Règne de 43 jours. Ordonna la collecte des Actes des Martyrs.", 
      es: "Reinó 43 días. Ordenó recopilar las Actas de los Mártires.", 
      de: "Regierte nur 43 Tage. Ordnete die Sammlung der Märtyrerakten an." 
    } 
  },
  { 
    id: 'p20', 
    startYear: 236, 
    endYear: 250, 
    type: 'pope', 
    name: { en: "St. Fabian", fr: "Saint Fabien", es: "San Fabián", de: "Hl. Fabianus" }, 
    description: { 
      en: "Chosen by a dove landing on his head. Divided Rome into seven districts led by deacons. Martyred under Decius.", 
      fr: "Choisi par une colombe. Divisa Rome en sept districts. Martyrisé sous Dèce.", 
      es: "Elegido por una paloma. Dividió Roma en siete distritos. Mártir bajo Decio.", 
      de: "Durch eine Taube erwählt. Teilte Rom in sieben Bezirke. Märtyrer unter Decius." 
    } 
  },
  { 
    id: 'p21', 
    startYear: 251, 
    endYear: 253, 
    type: 'pope', 
    name: { en: "St. Cornelius", fr: "Saint Corneille", es: "San Cornelio", de: "Hl. Cornelius" }, 
    description: { 
      en: "Defended the ability of the Church to absolve those who had lapsed during persecution (the Lapsi).", 
      fr: "Défendit l'absolution de ceux ayant failli durant les persécutions (les Lapsi).", 
      es: "Defendió la absolución de los que fallaron durante la persecución (los Lapsi).", 
      de: "Verteidigte die Absolution für die während der Verfolgung Abgefallenen (Lapsi)." 
    } 
  },
  { 
    id: 'p22', 
    startYear: 253, 
    endYear: 254, 
    type: 'pope', 
    name: { en: "St. Lucius I", fr: "Saint Lucius I", es: "San Lucio I", de: "Hl. Lucius I." }, 
    description: { 
      en: "Banished shortly after election but returned. Continued Cornelius' policy of forgiveness.", 
      fr: "Banni après élection puis retourna. Continua la politique de pardon de Corneille.", 
      es: "Desterrado tras elección, regresó. Continuó la política de perdón de Cornelio.", 
      de: "Kurz nach der Wahl verbannt, kehrte zurück. Setzte Cornelius' Vergebungspolitik fort." 
    } 
  },
  { 
    id: 'p23', 
    startYear: 254, 
    endYear: 257, 
    type: 'pope', 
    name: { en: "St. Stephen I", fr: "Saint Étienne I", es: "San Esteban I", de: "Hl. Stephan I." }, 
    description: { 
      en: "Defended the validity of baptism by heretics against Cyprian of Carthage. Famous for saying: 'Let there be no innovation'.", 
      fr: "Défendit la validité du baptême des hérétiques. Célèbre pour : 'Pas d'innovation'.", 
      es: "Defendió la validez del bautismo hereje. Famoso por: 'Que no haya innovación'.", 
      de: "Verteidigte die Gültigkeit der Ketzertaufe. Bekannt für: 'Keine Neuerungen'." 
    } 
  },
  { 
    id: 'p24', 
    startYear: 257, 
    endYear: 258, 
    type: 'pope', 
    name: { en: "St. Sixtus II", fr: "Saint Sixte II", es: "San Sixto II", de: "Hl. Sixtus II." }, 
    description: { 
      en: "Martyred while celebrating Mass in the Catacombs of Callixtus, along with four deacons. Highly venerated martyr.", 
      fr: "Martyrisé en célébrant la messe dans les catacombes, avec quatre diacres.", 
      es: "Martirizado mientras celebraba Misa en las catacumbas, junto con cuatro diáconos.", 
      de: "Märtyrer während der Messe in den Katakomben, zusammen mit vier Diakonen." 
    } 
  },
  { 
    id: 'p25', 
    startYear: 259, 
    endYear: 268, 
    type: 'pope', 
    name: { en: "St. Dionysius", fr: "Saint Denys", es: "San Dionisio", de: "Hl. Dionysius" }, 
    description: { 
      en: "Reorganized the Church after severe persecutions. Clarified Trinitarian doctrine against Sabellianism.", 
      fr: "Réorganisa l'Église après les persécutions. Clarifia la doctrine trinitaire.", 
      es: "Reorganizó la Iglesia tras las persecuciones. Clarificó la doctrina trinitaria.", 
      de: "Reorganisierte die Kirche nach Verfolgungen. Klärt die Trinitätslehre." 
    } 
  },
  { 
    id: 'p26', 
    startYear: 269, 
    endYear: 274, 
    type: 'pope', 
    name: { en: "St. Felix I", fr: "Saint Félix I", es: "San Félix I", de: "Hl. Felix I." }, 
    description: { 
      en: "Affirmed the divinity and humanity of Christ. Initiated the custom of burying martyrs under church altars.", 
      fr: "Affirma la divinité et l'humanité du Christ. Initia l'inhumation des martyrs sous les autels.", 
      es: "Afirmó la divinidad y humanidad de Cristo. Inició entierro de mártires bajo altares.", 
      de: "Bekräftigte Christi Gottheit und Menschheit. Begann Märtyrer unter Altären zu bestatten." 
    } 
  },
  { 
    id: 'p27', 
    startYear: 275, 
    endYear: 283, 
    type: 'pope', 
    name: { en: "St. Eutychian", fr: "Saint Eutychien", es: "San Eutiquiano", de: "Hl. Eutychianus" }, 
    description: { 
      en: "Tradition says he buried 342 martyrs with his own hands. Allowed the blessing of grapes and beans on the altar.", 
      fr: "Aurait enterré 342 martyrs de ses mains. Permit la bénédiction des raisins et fèves sur l'autel.", 
      es: "Se dice que enterró 342 mártires. Permitió bendecir uvas y frijoles en el altar.", 
      de: "Soll 342 Märtyrer bestattet haben. Erlaubte Segnung von Trauben und Bohnen am Altar." 
    } 
  },
  { 
    id: 'p28', 
    startYear: 283, 
    endYear: 296, 
    type: 'pope', 
    name: { en: "St. Caius (Gaius)", fr: "Saint Caïus", es: "San Cayo", de: "Hl. Cajus" }, 
    description: { 
      en: "Decreed that a man must pass through all lower orders (porter to deacon) before becoming a bishop.", 
      fr: "Décréta le passage par tous les ordres mineurs avant de devenir évêque.", 
      es: "Decretó pasar por todas las órdenes menores antes de ser obispo.", 
      de: "Verordnete den Durchlauf aller niederen Weihen vor dem Bischofsamt." 
    } 
  },
  { 
    id: 'p29', 
    startYear: 296, 
    endYear: 304, 
    type: 'pope', 
    name: { en: "St. Marcellinus", fr: "Saint Marcellin", es: "San Marcelino", de: "Hl. Marcellinus" }, 
    description: { 
      en: "Pontificate during the Great Persecution of Diocletian. Controversy exists over whether he temporarily lapsed.", 
      fr: "Pontificat durant la Grande Persécution. Controverse sur une apostasie temporaire.", 
      es: "Pontificado durante la Gran Persecución. Controversia sobre si apostató temporalmente.", 
      de: "Pontifikat während der Großen Verfolgung. Kontroverse um angeblichen Abfall." 
    } 
  },
  { 
    id: 'p30', 
    startYear: 308, 
    endYear: 309, 
    type: 'pope', 
    name: { en: "St. Marcellus I", fr: "Saint Marcel I", es: "San Marcelo I", de: "Hl. Marcellus I." }, 
    description: { 
      en: "Reorganized the Church after persecution. Exiled by Emperor Maxentius for his strict penance on the 'Lapsi'.", 
      fr: "Réorganisa l'Église. Exilé par Maxence pour sa pénitence stricte envers les 'Lapsi'.", 
      es: "Reorganizó la Iglesia. Exiliado por Majencio por su estricta penitencia a los 'Lapsi'.", 
      de: "Reorganisierte die Kirche. Von Maxentius wegen strenger Buße für 'Lapsi' verbannt." 
    } 
  },
  { 
    id: 'p31', 
    startYear: 309, 
    endYear: 310, 
    type: 'pope', 
    name: { en: "St. Eusebius", fr: "Saint Eusèbe", es: "San Eusebio", de: "Hl. Eusebius" }, 
    description: { 
      en: "Reigned only 4 months. Exiled to Sicily due to internal Church disputes over penance.", 
      fr: "Règne de 4 mois. Exilé en Sicile en raison de disputes sur la pénitence.", 
      es: "Reinó 4 meses. Exiliado a Sicilia por disputas sobre la penitencia.", 
      de: "Regierte 4 Monate. Wegen Bußstreitigkeiten nach Sizilien verbannt." 
    } 
  },
  { 
    id: 'p32', 
    startYear: 311, 
    endYear: 314, 
    type: 'pope', 
    name: { en: "St. Miltiades", fr: "Saint Miltiade", es: "San Melquíades", de: "Hl. Miltiades" }, 
    description: { 
      en: "First Pope after the Edict of Milan (peace for Christians). Emperor Constantine gave him the Lateran Palace.", 
      fr: "Premier pape après l'Édit de Milan. Constantin lui donna le palais du Latran.", 
      es: "Primer Papa tras el Edicto de Milán. Constantino le dio el Palacio de Letrán.", 
      de: "Erster Papst nach dem Mailänder Edikt. Erhielt den Lateranpalast von Konstantin." 
    } 
  },
  { 
    id: 'p33', 
    startYear: 314, 
    endYear: 335, 
    type: 'pope', 
    name: { en: "St. Sylvester I", fr: "Saint Sylvestre I", es: "San Silvestre I", de: "Hl. Silvester I." }, 
    description: { 
      en: "Oversaw the Council of Nicaea (sent legates). Saw the construction of the first great basilicas in Rome (St. Peter's, Lateran).", 
      fr: "Supervisa le Concile de Nicée. Vit la construction des grandes basiliques (Saint-Pierre, Latran).", 
      es: "Supervisó el Concilio de Nicea. Vio la construcción de las grandes basílicas (San Pedro, Letrán).", 
      de: "Übersah das Konzil von Nicäa. Erlebte den Bau der ersten großen Basiliken (St. Peter, Lateran)." 
    } 
  },
  { 
    id: 'p34', 
    startYear: 336, 
    endYear: 336, 
    type: 'pope', 
    name: { en: "St. Mark", fr: "Saint Marc", es: "San Marcos", de: "Hl. Markus" }, 
    description: { 
      en: "Reigned only 8 months. Instituted the pallium for bishops. Built the Basilica of San Marco in Rome.", 
      fr: "Règne de 8 mois. Institua le pallium pour les évêques. Bâtit la basilique San Marco.", 
      es: "Reinó 8 meses. Instituyó el palio para obispos. Construyó la basílica de San Marcos.", 
      de: "Regierte 8 Monate. Führte das Pallium ein. Baute die Markusbasilika in Rom." 
    } 
  },
  { 
    id: 'p35', 
    startYear: 337, 
    endYear: 352, 
    type: 'pope', 
    name: { en: "St. Julius I", fr: "Saint Jules I", es: "San Julio I", de: "Hl. Julius I." }, 
    description: { 
      en: "Strong defender of St. Athanasius against Arianism. Affirmed the Pope's right to judge legal cases of bishops.", 
      fr: "Grand défenseur d'Athanase contre l'arianisme. Affirma le droit du Pape de juger les évêques.", 
      es: "Gran defensor de Atanasio contra el arrianismo. Afirmó el derecho papal de juzgar obispos.", 
      de: "Verteidiger von Athanasius gegen Arianismus. Bekräftigte päpstliches Richterrecht." 
    } 
  },
  { 
    id: 'p36', 
    startYear: 352, 
    endYear: 366, 
    type: 'pope', 
    name: { en: "Liberius", fr: "Libère", es: "Liberio", de: "Liberius" }, 
    description: { 
      en: "Exiled by Emperor Constantius II for refusing to condemn Athanasius. First Pope not venerated as a saint.", 
      fr: "Exilé par l'empereur pour avoir refusé de condamner Athanase. Premier pape non saint.", 
      es: "Exiliado por rehusar condenar a Atanasio. Primer Papa no venerado como santo.", 
      de: "Verbannt, weil er Athanasius nicht verurteilte. Erster nicht heiliggesprochener Papst." 
    } 
  },
  { 
    id: 'p37', 
    startYear: 366, 
    endYear: 384, 
    type: 'pope', 
    name: { en: "St. Damasus I", fr: "Saint Damase I", es: "San Dámaso I", de: "Hl. Damasus I." }, 
    description: { 
      en: "Commissioned St. Jerome to translate the Bible into Latin (Vulgate). Presided over the Council of Rome (382) defining the Biblical canon.", 
      fr: "Commandita la Vulgate à Saint Jérôme. Présida le Concile de Rome (382) définissant le canon biblique.", 
      es: "Encargó a San Jerónimo la Vulgata. Presidió el Concilio de Roma (382) definiendo el canon bíblico.", 
      de: "Beauftragte Hieronymus mit der Vulgata. Leitete das Konzil von Rom (382) zum Bibelkanon." 
    } 
  },
  { 
    id: 'p38', 
    startYear: 384, 
    endYear: 399, 
    type: 'pope', 
    name: { en: "St. Siricius", fr: "Saint Sirice", es: "San Siricio", de: "Hl. Siricius" }, 
    description: { 
      en: "First to officially use the title 'Pope' (Papa). Issued the first surviving papal decretals.", 
      fr: "Premier à utiliser le titre 'Pape'. Émit les premières décrétales papales survivantes.", 
      es: "Primero en usar el título 'Papa'. Emitió las primeras decretales papales que sobreviven.", 
      de: "Benutzte als Erster den Titel 'Papst'. Erließ die ersten erhaltenen päpstlichen Dekretalen." 
    } 
  },
  { 
    id: 'p39', 
    startYear: 399, 
    endYear: 401, 
    type: 'pope', 
    name: { en: "St. Anastasius I", fr: "Saint Anastase I", es: "San Anastasio I", de: "Hl. Anastasius I." }, 
    description: { 
      en: "Friend of St. Jerome. Condemned the errors of Origenism. Known for his holiness and poverty.", 
      fr: "Ami de Saint Jérôme. Condamna les erreurs d'Origène. Connu pour sa sainteté et pauvreté.", 
      es: "Amigo de San Jerónimo. Condenó los errores de Orígenes. Conocido por su santidad.", 
      de: "Freund von Hieronymus. Verurteilte den Origenismus. Bekannt für seine Heiligkeit." 
    } 
  },
  { 
    id: 'p40', 
    startYear: 401, 
    endYear: 417, 
    type: 'pope', 
    name: { en: "St. Innocent I", fr: "Saint Innocent I", es: "San Inocencio I", de: "Hl. Innozenz I." }, 
    description: { 
      en: "Asserted that all major causes must be referred to Rome. Was Pope during the Sack of Rome by Alaric (410).", 
      fr: "Affirma que toutes les causes majeures doivent être référées à Rome. Pape durant le sac de Rome (410).", 
      es: "Afirmó que las causas mayores deben referirse a Roma. Papa durante el saqueo de Roma (410).", 
      de: "Forderte, dass alle wichtigen Fälle Rom vorgelegt werden. Papst während der Plünderung Roms (410)." 
    } 
  },
  { 
    id: 'p41', 
    startYear: 417, 
    endYear: 418, 
    type: 'pope', 
    name: { en: "St. Zosimus", fr: "Saint Zosime", es: "San Zósimo", de: "Hl. Zosimus" }, 
    description: { 
      en: "Combated Pelagianism (heresy denying original sin). His pontificate was marked by administrative disputes.", 
      fr: "Combattit le pélagianisme. Son pontificat fut marqué par des disputes administratives.", 
      es: "Combatió el pelagianismo. Su pontificado estuvo marcado por disputas administrativas.", 
      de: "Bekämpfte den Pelagianismus. Sein Pontifikat war von administrativen Streitigkeiten geprägt." 
    } 
  },
  { 
    id: 'p42', 
    startYear: 418, 
    endYear: 422, 
    type: 'pope', 
    name: { en: "St. Boniface I", fr: "Saint Boniface I", es: "San Bonifacio I", de: "Hl. Bonifatius I." }, 
    description: { 
      en: "Supported by St. Augustine. Maintained Rome's authority over the bishops of Illyricum.", 
      fr: "Soutenu par Saint Augustin. Maintint l'autorité de Rome sur les évêques d'Illyrie.", 
      es: "Apoyado por San Agustín. Mantuvo la autoridad de Roma sobre los obispos de Iliria.", 
      de: "Unterstützt von Hl. Augustinus. Wahre die Autorität Roms über Illyrien." 
    } 
  },
  { 
    id: 'p43', 
    startYear: 422, 
    endYear: 432, 
    type: 'pope', 
    name: { en: "St. Celestine I", fr: "Saint Célestin I", es: "San Celestino I", de: "Hl. Coelestin I." }, 
    description: { 
      en: "Sent St. Patrick to Ireland. Condemned Nestorius and presided (via legates) over the Council of Ephesus.", 
      fr: "Envoya Saint Patrick en Irlande. Condamna Nestorius et présida le Concile d'Éphèse.", 
      es: "Envió a San Patricio a Irlanda. Condenó a Nestorio y presidió el Concilio de Éfeso.", 
      de: "Sandte St. Patrick nach Irland. Verurteilte Nestorius und leitete das Konzil von Ephesos." 
    } 
  },
  { 
    id: 'p44', 
    startYear: 432, 
    endYear: 440, 
    type: 'pope', 
    name: { en: "St. Sixtus III", fr: "Saint Sixte III", es: "San Sixto III", de: "Hl. Sixtus III." }, 
    description: { 
      en: "Built the Basilica of Santa Maria Maggiore to honor Mary as Theotokos after the Council of Ephesus.", 
      fr: "Bâtit la basilique Sainte-Marie-Majeure pour honorer Marie Théotokos après Éphèse.", 
      es: "Construyó Santa María la Mayor para honrar a María como Theotokos tras Éfeso.", 
      de: "Erbaut Santa Maria Maggiore zu Ehren Marias als Theotokos nach Ephesos." 
    } 
  },
  { 
    id: 'p45', 
    startYear: 440, 
    endYear: 461, 
    type: 'pope', 
    name: { en: "St. Leo I (The Great)", fr: "Saint Léon le Grand", es: "San León Magno", de: "Hl. Leo der Große" }, 
    description: { 
      en: "Persuaded Attila the Hun to turn back from Rome. His 'Tome' was the basis for the Council of Chalcedon's definition of Christ.", 
      fr: "Convainquit Attila d'épargner Rome. Son 'Tome' servit de base à la définition de Chalcédoine.", 
      es: "Persuadió a Atila de no atacar Roma. Su 'Tomo' fue base para el Concilio de Calcedonia.", 
      de: "Überredete Attila, Rom zu verschonen. Sein 'Tomus' war Basis für das Konzil von Chalcedon." 
    } 
  },
  { 
    id: 'p46', 
    startYear: 461, 
    endYear: 468, 
    type: 'pope', 
    name: { en: "St. Hilarius", fr: "Saint Hilaire", es: "San Hilario", de: "Hl. Hilarius" }, 
    description: { 
      en: "Strengthened papal authority in Gaul and Spain. Built chapels in the Lateran Baptistery.", 
      fr: "Renforça l'autorité papale en Gaule et Espagne. Bâtit des chapelles au Latran.", 
      es: "Reforzó la autoridad papal en Galia y España. Construyó capillas en el Letrán.", 
      de: "Stärkte die päpstliche Autorität in Gallien und Spanien. Baute Kapellen im Lateran." 
    } 
  },
  { 
    id: 'p47', 
    startYear: 468, 
    endYear: 483, 
    type: 'pope', 
    name: { en: "St. Simplicius", fr: "Saint Simplice", es: "San Simplicio", de: "Hl. Simplicius" }, 
    description: { 
      en: "Witnessed the fall of the Western Roman Empire (476). Defended Chalcedonian orthodoxy against Monophysites.", 
      fr: "Témoin de la chute de l'Empire romain (476). Défendit l'orthodoxie de Chalcédoine.", 
      es: "Testigo de la caída del Imperio Romano (476). Defendió la ortodoxia de Calcedonia.", 
      de: "Zeuge des Untergangs des Römischen Reiches (476). Verteidigte Chalcedon." 
    } 
  },
  { 
    id: 'p48', 
    startYear: 483, 
    endYear: 492, 
    type: 'pope', 
    name: { en: "St. Felix III (II)", fr: "Saint Félix III", es: "San Félix III", de: "Hl. Felix III." }, 
    description: { 
      en: "Excommunicated Patriarch Acacius of Constantinople, beginning the Acacian Schism (first break between East and West).", 
      fr: "Excommunia le patriarche Acace, débutant le schisme acacien (première rupture Est-Ouest).", 
      es: "Excomulgó al patriarca Acacio, iniciando el cisma acaciano (primera ruptura Este-Oeste).", 
      de: "Exkommunizierte Patriarch Akakios, Beginn des Akakianischen Schismas." 
    } 
  },
  { 
    id: 'p49', 
    startYear: 492, 
    endYear: 496, 
    type: 'pope', 
    name: { en: "St. Gelasius I", fr: "Saint Gélase I", es: "San Gelasio I", de: "Hl. Gelasius I." }, 
    description: { 
      en: "Defined the doctrine of the 'Two Swords' (distinct authority of Church and State). Compiled liturgical texts.", 
      fr: "Définit la doctrine des 'Deux Glaives' (Église et État). Compila des textes liturgiques.", 
      es: "Definió la doctrina de las 'Dos Espadas' (Iglesia y Estado). Compiló textos litúrgicos.", 
      de: "Definierte die Zweischwerterlehre (Kirche und Staat). Stellte liturgische Texte zusammen." 
    } 
  },
  { 
    id: 'p50', 
    startYear: 496, 
    endYear: 498, 
    type: 'pope', 
    name: { en: "Anastasius II", fr: "Anastase II", es: "Anastasio II", de: "Anastasius II." }, 
    description: { 
      en: "Tried to heal the Acacian Schism but was criticized for being too lenient. Dante placed him in Hell in the Divine Comedy.", 
      fr: "Tenta de guérir le schisme acacien mais fut critiqué pour sa clémence. Dante le plaça en Enfer.", 
      es: "Intentó sanar el cisma acaciano pero fue criticado por indulgente. Dante lo puso en el Infierno.", 
      de: "Versuchte das Schisma zu heilen, wurde aber kritisiert. Dante platzierte ihn in die Hölle." 
    } 
  },

{ 
    id: 'p51', 
    startYear: 498, 
    endYear: 514, 
    type: 'pope', 
    name: { en: "St. Symmachus", fr: "Saint Symmaque", es: "San Símaco", de: "Hl. Symmachus" }, 
    description: { 
      en: "Survived the Laurentian Schism. First Pope to send palliums to bishops outside Italy. Built shelters for the poor near St. Peter's, St. Paul's, and St. Lawrence's.", 
      fr: "Survécut au schisme laurentien. Premier pape à envoyer des palliums hors d'Italie. Construisit des abris pour les pauvres près des grandes basiliques.", 
      es: "Sobrevivió al cisma laurenciano. Primer Papa en enviar palios fuera de Italia. Construyó refugios para pobres cerca de las grandes basílicas.", 
      de: "Überlebte das Laurentianische Schisma. Erster Papst, der Pallien ins Ausland sandte. Baute Armenhäuser nahe der Basiliken." 
    } 
  },
  { 
    id: 'p52', 
    startYear: 514, 
    endYear: 523, 
    type: 'pope', 
    name: { en: "St. Hormisdas", fr: "Saint Hormisdas", es: "San Hormisdas", de: "Hl. Hormisdas" }, 
    description: { 
      en: "Ended the Acacian Schism between East and West (519) with the 'Formula of Hormisdas', affirming the primacy of the Roman See. Father of Pope Silverius.", 
      fr: "Mit fin au schisme acacien (519) avec la 'Formule d'Hormisdas', affirmant la primauté de Rome. Père du pape Silvère.", 
      es: "Puso fin al Cisma Acaciano (519) con la 'Fórmula de Hormisdas', afirmando la primacía romana. Padre del Papa Silverio.", 
      de: "Beendete das Akakianische Schisma (519) mit der 'Formel von Hormisdas', die den römischen Primat bestätigte. Vater von Papst Silverius." 
    } 
  },
  { 
    id: 'p53', 
    startYear: 523, 
    endYear: 526, 
    type: 'pope', 
    name: { en: "St. John I", fr: "Saint Jean I", es: "San Juan I", de: "Hl. Johannes I." }, 
    description: { 
      en: "First Pope to travel to Constantinople. Imprisoned by the Arian King Theodoric upon his return to Ravenna, where he died of neglect and starvation.", 
      fr: "Premier pape à voyager à Constantinople. Emprisonné par le roi arien Théodoric à son retour, il mourut de négligence et de faim.", 
      es: "Primer Papa en viajar a Constantinopla. Encarcelado por el rey arriano Teodorico al regresar, murió de hambre y abandono.", 
      de: "Erster Papst, der nach Konstantinopel reiste. Vom arianischen König Theoderich eingekerkert, starb er an Vernachlässigung." 
    } 
  },
  { 
    id: 'p54', 
    startYear: 526, 
    endYear: 530, 
    type: 'pope', 
    name: { en: "St. Felix IV", fr: "Saint Félix IV", es: "San Félix IV", de: "Hl. Felix IV." }, 
    description: { 
      en: "Built the Basilica of Saints Cosmas and Damian in the Roman Forum. Strongly supported grace against Semi-Pelagianism, sending canons to the Council of Orange.", 
      fr: "Bâtit la basilique Saints-Côme-et-Damien. Soutint la grâce contre le semi-pélagianisme, envoyant des canons au Concile d'Orange.", 
      es: "Construyó la Basílica de San Cosme y San Damián. Defendió la gracia contra el semipelagianismo en el Concilio de Orange.", 
      de: "Erbaut die Basilika SS. Cosmas und Damian. Verteidigte die Gnadenlehre gegen den Semipelagianismus (Konzil von Orange)." 
    } 
  },
  { 
    id: 'p55', 
    startYear: 530, 
    endYear: 532, 
    type: 'pope', 
    name: { en: "Boniface II", fr: "Boniface II", es: "Bonifacio II", de: "Bonifatius II." }, 
    description: { 
      en: "First Pope of Germanic descent (Ostrogoth). Confirmed the decrees of the Council of Orange, ending the Semi-Pelagian controversy regarding grace.", 
      fr: "Premier pape d'origine germanique. Confirma les décrets du Concile d'Orange, mettant fin à la controverse semi-pélagienne.", 
      es: "Primer Papa de origen germánico. Confirmó los decretos del Concilio de Orange, cerrando la controversia semipelagiana.", 
      de: "Erster Papst germanischer Abstammung. Bestätigte die Beschlüsse von Orange und beendete den Semipelagianismus-Streit." 
    } 
  },
  { 
    id: 'p56', 
    startYear: 533, 
    endYear: 535, 
    type: 'pope', 
    name: { en: "John II", fr: "Jean II", es: "Juan II", de: "Johannes II." }, 
    description: { 
      en: "First Pope to change his name upon election (born Mercurius, a pagan god's name). Obtained a profession of orthodox faith from Emperor Justinian.", 
      fr: "Premier pape à changer de nom (né Mercurius). Obtint une profession de foi orthodoxe de l'empereur Justinien.", 
      es: "Primer Papa en cambiar su nombre (nacido Mercurius). Obtuvo una profesión de fe ortodoxa del emperador Justiniano.", 
      de: "Erster Papst, der seinen Namen änderte (geb. Mercurius). Erhielt ein rechtgläubiges Glaubensbekenntnis von Kaiser Justinian." 
    } 
  },
  { 
    id: 'p57', 
    startYear: 535, 
    endYear: 536, 
    type: 'pope', 
    name: { en: "St. Agapetus I", fr: "Saint Agapit I", es: "San Agapito I", de: "Hl. Agapitus I." }, 
    description: { 
      en: "Traveled to Constantinople to persuade Justinian against war in Italy. Deposed the heretical Patriarch Anthimus. Died in Constantinople.", 
      fr: "Voyagea à Constantinople pour dissuader Justinien de la guerre. Déposa le patriarche hérétique Anthime. Mourut là-bas.", 
      es: "Viajó a Constantinopla para disuadir a Justiniano de la guerra. Depuso al patriarca hereje Antimo. Murió allí.", 
      de: "Reiste nach Konstantinopel, um Justinian vom Krieg abzubringen. Setzte den häretischen Patriarchen Anthimus ab." 
    } 
  },
  { 
    id: 'p58', 
    startYear: 536, 
    endYear: 537, 
    type: 'pope', 
    name: { en: "St. Silverius", fr: "Saint Silvère", es: "San Silverio", de: "Hl. Silverius" }, 
    description: { 
      en: "Son of Pope Hormisdas. Deposed and exiled by the Byzantine general Belisarius through the intrigues of Empress Theodora. Died of starvation.", 
      fr: "Fils du pape Hormisdas. Déposé et exilé par Bélisaire sur ordre de l'impératrice Théodora. Mourut de faim.", 
      es: "Hijo del Papa Hormisdas. Depuesto y exiliado por Belisario debido a intrigas de la emperatriz Teodora. Murió de hambre.", 
      de: "Sohn von Papst Hormisdas. Durch Intrigen der Kaiserin Theodora von Belisar abgesetzt und verbannt. Verhungert." 
    } 
  },
  { 
    id: 'p59', 
    startYear: 537, 
    endYear: 555, 
    type: 'pope', 
    name: { en: "Vigilius", fr: "Vigile", es: "Vigilio", de: "Vigilius" }, 
    description: { 
      en: "Initially an antipope installed by Theodora. Later resisted imperial pressure to condemn the Three Chapters, but wavered under imprisonment.", 
      fr: "D'abord antipape installé par Théodora. Résista ensuite à la pression impériale sur les Trois Chapitres, mais vacilla en prison.", 
      es: "Inicialmente antipapa puesto por Teodora. Luego resistió la presión imperial sobre los Tres Capítulos, pero vaciló en prisión.", 
      de: "Zunächst Gegenpapst durch Theodora. Widerstand später kaiserlichem Druck bezüglich der Drei Kapitel, schwankte aber in Haft." 
    } 
  },
  { 
    id: 'p60', 
    startYear: 556, 
    endYear: 561, 
    type: 'pope', 
    name: { en: "Pelagius I", fr: "Pélage I", es: "Pelagio I", de: "Pelagius I." }, 
    description: { 
      en: "Managed Rome during the difficult aftermath of the Gothic Wars. Worked to reorganize the papal estates and feed the starving population.", 
      fr: "Géra Rome après les guerres gothiques. Réorganisa les domaines pontificaux et nourrit la population affamée.", 
      es: "Administró Roma tras las guerras góticas. Reorganizó los estados papales y alimentó a la población hambrienta.", 
      de: "Verwaltete Rom nach den Gotenkriegen. Reorganisierte die päpstlichen Güter und ernährte die hungernde Bevölkerung." 
    } 
  },
  { 
    id: 'p61', 
    startYear: 561, 
    endYear: 574, 
    type: 'pope', 
    name: { en: "John III", fr: "Jean III", es: "Juan III", de: "Johannes III." }, 
    description: { 
      en: "Pontificate marked by the Lombard invasion of Italy. Restored the catacombs and protected Rome from total destruction.", 
      fr: "Pontificat marqué par l'invasion lombarde. Restaura les catacombes et protégea Rome de la destruction totale.", 
      es: "Pontificado marcado por la invasión lombarda. Restauró las catacumbas y protegió Roma de la destrucción.", 
      de: "Pontifikat geprägt vom Langobardeneinfall. Restaurierte die Katakomben und schützte Rom vor der Zerstörung." 
    } 
  },
  { 
    id: 'p62', 
    startYear: 575, 
    endYear: 579, 
    type: 'pope', 
    name: { en: "Benedict I", fr: "Benoît I", es: "Benedicto I", de: "Benedikt I." }, 
    description: { 
      en: "Reigned during the famine caused by the Lombard siege of Rome. Died while trying to manage the crisis.", 
      fr: "Règne durant la famine causée par le siège lombard. Mourut en tentant de gérer la crise.", 
      es: "Reinó durante la hambruna por el asedio lombardo. Murió intentando gestionar la crisis.", 
      de: "Regierte während der Hungersnot durch die Langobardenbelagerung. Starb bei der Krisenbewältigung." 
    } 
  },
  { 
    id: 'p63', 
    startYear: 579, 
    endYear: 590, 
    type: 'pope', 
    name: { en: "Pelagius II", fr: "Pélage II", es: "Pelagio II", de: "Pelagius II." }, 
    description: { 
      en: "Built the Basilica of San Lorenzo. Paid heavy tribute to the Lombards to save Rome. Died of the plague.", 
      fr: "Bâtit la basilique Saint-Laurent. Paya un lourd tribut aux Lombards pour sauver Rome. Mourut de la peste.", 
      es: "Construyó la Basílica de San Lorenzo. Pagó tributo a los lombardos para salvar Roma. Murió de peste.", 
      de: "Erbaut San Lorenzo. Zahlte hohen Tribut an die Langobarden zur Rettung Roms. Starb an der Pest." 
    } 
  },
  { 
    id: 'p64', 
    startYear: 590, 
    endYear: 604, 
    type: 'pope', 
    name: { en: "St. Gregory I (The Great)", fr: "Saint Grégoire le Grand", es: "San Gregorio Magno", de: "Hl. Gregor der Große" }, 
    description: { 
      en: "First monk Pope. Sent Augustine to evangelize England. Codified Gregorian Chant. Took the title 'Servant of the Servants of God'. Doctor of the Church.", 
      fr: "Premier moine pape. Envoya Augustin évangéliser l'Angleterre. Codifia le chant grégorien. Prit le titre 'Serviteur des serviteurs de Dieu'.", 
      es: "Primer monje Papa. Envió a Agustín a Inglaterra. Codificó el canto gregoriano. Tomó el título 'Siervo de los siervos de Dios'.", 
      de: "Erster Mönch als Papst. Sandte Augustinus nach England. Kodifizierte den Gregorianischen Choral. 'Diener der Diener Gottes'." 
    } 
  },
  { 
    id: 'p65', 
    startYear: 604, 
    endYear: 606, 
    type: 'pope', 
    name: { en: "Sabinian", fr: "Sabinien", es: "Sabiniano", de: "Sabinianus" }, 
    description: { 
      en: "Unpopular successor to Gregory the Great. Criticized for selling grain during a famine rather than giving it away.", 
      fr: "Successeur impopulaire de Grégoire. Critiqué pour avoir vendu du grain durant une famine au lieu de le donner.", 
      es: "Sucesor impopular de Gregorio. Criticado por vender grano durante una hambruna en lugar de regalarlo.", 
      de: "Unbeliebter Nachfolger Gregors. Kritisiert, weil er Getreide während einer Hungersnot verkaufte statt verschenkte." 
    } 
  },
  { 
    id: 'p66', 
    startYear: 607, 
    endYear: 607, 
    type: 'pope', 
    name: { en: "Boniface III", fr: "Boniface III", es: "Bonifacio III", de: "Bonifatius III." }, 
    description: { 
      en: "Reigned only 9 months. Obtained a decree from Emperor Phocas acknowledging the See of Rome as the 'Head of all Churches'.", 
      fr: "Obtint un décret de l'empereur Phocas reconnaissant le Siège de Rome comme 'Chef de toutes les Églises'.", 
      es: "Obtuvo un decreto del emperador Focas reconociendo a la Sede de Roma como 'Cabeza de todas las Iglesias'.", 
      de: "Erhielt ein Dekret von Kaiser Phokas, das den Römischen Stuhl als 'Haupt aller Kirchen' anerkannte." 
    } 
  },
  { 
    id: 'p67', 
    startYear: 608, 
    endYear: 615, 
    type: 'pope', 
    name: { en: "St. Boniface IV", fr: "Saint Boniface IV", es: "San Bonifacio IV", de: "Hl. Bonifatius IV." }, 
    description: { 
      en: "Converted the Roman Pantheon from a pagan temple into a Christian church dedicated to Mary and the Martyrs.", 
      fr: "Convertit le Panthéon romain de temple païen en église chrétienne dédiée à Marie et aux Martyrs.", 
      es: "Convirtió el Panteón romano de templo pagano en iglesia cristiana dedicada a María y los Mártires.", 
      de: "Wandelte das römische Pantheon von einem heidnischen Tempel in eine Kirche für Maria und die Märtyrer um." 
    } 
  },
  { 
    id: 'p68', 
    startYear: 615, 
    endYear: 618, 
    type: 'pope', 
    name: { en: "St. Adeodatus I (Deusdedit)", fr: "Saint Adéodat I", es: "San Adeodato I", de: "Hl. Adeodatus I." }, 
    description: { 
      en: "First Pope to use lead seals (bullae) on documents, giving rise to the term 'Papal Bull'. Showed great charity during a leprosy outbreak.", 
      fr: "Premier à utiliser des sceaux de plomb (bullae), d'où le terme 'Bulle papale'. Charité durant la lèpre.", 
      es: "Primero en usar sellos de plomo (bullae), origen de 'Bula papal'. Gran caridad durante un brote de lepra.", 
      de: "Verwendete als Erster Bleisiegel (bullae), daher 'Päpstliche Bulle'. Zeigte Nächstenliebe während einer Lepra-Epidemie." 
    } 
  },
  { 
    id: 'p69', 
    startYear: 619, 
    endYear: 625, 
    type: 'pope', 
    name: { en: "Boniface V", fr: "Boniface V", es: "Bonifacio V", de: "Bonifatius V." }, 
    description: { 
      en: "Enacted the decree of sanctuary, making churches places of refuge for those pursued by law. Supported the church in England.", 
      fr: "Instaura le droit d'asile dans les églises. Soutint l'Église en Angleterre.", 
      es: "Promulgó el decreto de asilo, haciendo de las iglesias refugio. Apoyó a la iglesia en Inglaterra.", 
      de: "Erließ das Asylrecht für Kirchen. Unterstützte die Kirche in England." 
    } 
  },
  { 
    id: 'p70', 
    startYear: 625, 
    endYear: 638, 
    type: 'pope', 
    name: { en: "Honorius I", fr: "Honorius I", es: "Honorio I", de: "Honorius I." }, 
    description: { 
      en: "Controversial for his letter to Patriarch Sergius that seemed to support Monothelitism. Later anathematized by the Third Council of Constantinople.", 
      fr: "Controversé pour une lettre semblant soutenir le monothélisme. Anathématisé plus tard par Constantinople III.", 
      es: "Controvertido por una carta que parecía apoyar el monotelismo. Anatematizado luego por Constantinopla III.", 
      de: "Umstritten wegen eines Briefes, der den Monothelitismus zu stützen schien. Später von Konstantinopel III verurteilt." 
    } 
  },
  { 
    id: 'p71', 
    startYear: 640, 
    endYear: 640, 
    type: 'pope', 
    name: { en: "Severinus", fr: "Séverin", es: "Severino", de: "Severinus" }, 
    description: { 
      en: "Reigned only 2 months after a long vacancy. Condemned the Ecthesis of Heraclius (a Monothelite decree).", 
      fr: "Règne de 2 mois. Condamna l'Ecthèse d'Héraclius (décret monothélite).", 
      es: "Reinó 2 meses. Condenó la Ecthesis de Heraclio (decreto monotelita).", 
      de: "Regierte nur 2 Monate. Verurteilte die Ekthesis des Herakleios (monothelitisches Dekret)." 
    } 
  },
  { 
    id: 'p72', 
    startYear: 640, 
    endYear: 642, 
    type: 'pope', 
    name: { en: "John IV", fr: "Jean IV", es: "Juan IV", de: "Johannes IV." }, 
    description: { 
      en: "Condemned Monothelitism. Sent aid to his native Dalmatia which was suffering from barbarian invasions.", 
      fr: "Condamna le monothélisme. Envoya de l'aide à sa Dalmatie natale envahie par les barbares.", 
      es: "Condenó el monotelismo. Envió ayuda a su Dalmacia natal sufriendo invasiones bárbaras.", 
      de: "Verurteilte den Monothelitismus. Sandte Hilfe in seine Heimat Dalmatien." 
    } 
  },
  { 
    id: 'p73', 
    startYear: 642, 
    endYear: 649, 
    type: 'pope', 
    name: { en: "Theodore I", fr: "Théodore I", es: "Teodoro I", de: "Theodor I." }, 
    description: { 
      en: "Greek Pope. Firmly opposed Monothelitism and the Typos of Emperor Constans II. Added the title 'Sovereign' to the Pontiff.", 
      fr: "Pape grec. S'opposa fermement au monothélisme et au Typos de Constant II.", 
      es: "Papa griego. Se opuso firmemente al monotelismo y al Typos de Constante II.", 
      de: "Griechischer Papst. Lehnte den Monothelitismus und den Typos von Konstans II ab." 
    } 
  },
  { 
    id: 'p74', 
    startYear: 649, 
    endYear: 655, 
    type: 'pope', 
    name: { en: "St. Martin I", fr: "Saint Martin I", es: "San Martín I", de: "Hl. Martin I." }, 
    description: { 
      en: "Last martyr Pope. Arrested by the Emperor for condemning Monothelitism at the Lateran Council (649). Died in exile in Crimea due to harsh treatment.", 
      fr: "Dernier pape martyr. Arrêté par l'Empereur pour avoir condamné le monothélisme. Mourut en exil en Crimée.", 
      es: "Último Papa mártir. Arrestado por el Emperador por condenar el monotelismo. Murió en el exilio en Crimea.", 
      de: "Letzter Märtyrerpapst. Vom Kaiser verhaftet, weil er den Monothelitismus verurteilte. Starb im Exil." 
    } 
  },
  { 
    id: 'p75', 
    startYear: 654, 
    endYear: 657, 
    type: 'pope', 
    name: { en: "St. Eugene I", fr: "Saint Eugène I", es: "San Eugenio I", de: "Hl. Eugen I." }, 
    description: { 
      en: "Elected while Martin I was still exiled. Refused to accept a Monothelite creed from the Emperor, risking martyrdom.", 
      fr: "Élu durant l'exil de Martin I. Refusa le credo monothélite de l'Empereur, risquant le martyre.", 
      es: "Elegido durante el exilio de Martín I. Rechazó el credo monotelita, arriesgando el martirio.", 
      de: "Gewählt während Martins Exil. Lehnte das monothelitische Glaubensbekenntnis ab." 
    } 
  },
  { 
    id: 'p76', 
    startYear: 657, 
    endYear: 672, 
    type: 'pope', 
    name: { en: "St. Vitalian", fr: "Saint Vitalien", es: "San Vitaliano", de: "Hl. Vitalian" }, 
    description: { 
      en: "Tried to restore relations with Constantinople. Appointed Theodore of Tarsus as Archbishop of Canterbury, reshaping the English Church.", 
      fr: "Tenta de restaurer les relations avec Constantinople. Nomma Théodore de Tarse à Cantorbéry.", 
      es: "Intentó restaurar relaciones con Constantinopla. Nombró a Teodoro de Tarso arzobispo de Canterbury.", 
      de: "Versuchte Beziehungen zu Konstantinopel zu heilen. Ernannte Theodor von Tarsus für Canterbury." 
    } 
  },
  { 
    id: 'p77', 
    startYear: 672, 
    endYear: 676, 
    type: 'pope', 
    name: { en: "Adeodatus II", fr: "Adéodat II", es: "Adeodato II", de: "Adeodatus II." }, 
    description: { 
      en: "Benedictine monk. Known for his generosity to the poor and pilgrims. Continued resistance to Monothelitism.", 
      fr: "Moine bénédictin. Connu pour sa générosité envers les pauvres. Continua la résistance au monothélisme.", 
      es: "Monje benedictino. Conocido por su generosidad. Continuó la resistencia al monotelismo.", 
      de: "Benediktinermönch. Bekannt für Großzügigkeit. Setzte Widerstand gegen Monothelitismus fort." 
    } 
  },
  { 
    id: 'p78', 
    startYear: 676, 
    endYear: 678, 
    type: 'pope', 
    name: { en: "Donus", fr: "Donus", es: "Dono", de: "Donus" }, 
    description: { 
      en: "Paved the atrium of St. Peter's with marble. Ended a schism with the Archbishop of Ravenna.", 
      fr: "Pava l'atrium de Saint-Pierre de marbre. Mit fin à un schisme avec l'archevêque de Ravenne.", 
      es: "Pavimentó el atrio de San Pedro. Terminó un cisma con el arzobispo de Rávena.", 
      de: "Pflasterte das Atrium von St. Peter. Beendete ein Schisma mit Ravenna." 
    } 
  },
  { 
    id: 'p79', 
    startYear: 678, 
    endYear: 681, 
    type: 'pope', 
    name: { en: "St. Agatho", fr: "Saint Agathon", es: "San Agatón", de: "Hl. Agatho" }, 
    description: { 
      en: "His letter defining the two wills of Christ was central to the Third Council of Constantinople, which ended the Monothelite heresy. Died before the council ended.", 
      fr: "Sa lettre sur les deux volontés du Christ fut centrale au Concile de Constantinople III.", 
      es: "Su carta sobre las dos voluntades de Cristo fue central en el Concilio de Constantinopla III.", 
      de: "Sein Brief über die zwei Willen Christi war zentral für das Dritte Konzil von Konstantinopel." 
    } 
  },
  { 
    id: 'p80', 
    startYear: 682, 
    endYear: 683, 
    type: 'pope', 
    name: { en: "St. Leo II", fr: "Saint Léon II", es: "San León II", de: "Hl. Leo II." }, 
    description: { 
      en: "Confirmed the acts of the Third Council of Constantinople. Translated the relics of martyrs from catacombs to churches inside Rome.", 
      fr: "Confirma les actes de Constantinople III. Transféra les reliques des martyrs dans Rome.", 
      es: "Confirmó las actas de Constantinopla III. Trasladó reliquias de mártires al interior de Roma.", 
      de: "Bestätigte die Akten von Konstantinopel III. Übertrug Märtyrerreliquien in die Stadt Rom." 
    } 
  },
  { 
    id: 'p81', 
    startYear: 684, 
    endYear: 685, 
    type: 'pope', 
    name: { en: "St. Benedict II", fr: "Saint Benoît II", es: "San Benedicto II", de: "Hl. Benedikt II." }, 
    description: { 
      en: "Obtained a decree from Emperor Constantine IV abolishing the requirement for imperial confirmation of papal elections.", 
      fr: "Obtint l'abolition de la confirmation impériale pour les élections papales.", 
      es: "Obtuvo la abolición de la confirmación imperial para las elecciones papales.", 
      de: "Erwirkte die Abschaffung der kaiserlichen Bestätigung für Papstwahlen." 
    } 
  },
  { 
    id: 'p82', 
    startYear: 685, 
    endYear: 686, 
    type: 'pope', 
    name: { en: "John V", fr: "Jean V", es: "Juan V", de: "Johannes V." }, 
    description: { 
      en: "First of a line of ten consecutive Popes of Eastern origin (Greek/Syrian). Known for his generosity.", 
      fr: "Premier d'une série de dix papes d'origine orientale. Connu pour sa générosité.", 
      es: "Primero de diez Papas consecutivos de origen oriental. Conocido por su generosidad.", 
      de: "Erster von zehn Päpsten östlicher Herkunft in Folge. Bekannt für Großzügigkeit." 
    } 
  },
  { 
    id: 'p83', 
    startYear: 686, 
    endYear: 687, 
    type: 'pope', 
    name: { en: "Conon", fr: "Conon", es: "Conón", de: "Konon" }, 
    description: { 
      en: "Elderly and frail upon election. Consecrated St. Kilian as missionary to Franconia.", 
      fr: "Âgé et fragile à son élection. Consacra Saint Kilian missionnaire en Franconie.", 
      es: "Anciano y frágil al ser elegido. Consagró a San Kilian como misionero en Franconia.", 
      de: "Bei der Wahl alt und gebrechlich. Weihte St. Kilian zum Missionar für Franken." 
    } 
  },
  { 
    id: 'p84', 
    startYear: 687, 
    endYear: 701, 
    type: 'pope', 
    name: { en: "St. Sergius I", fr: "Saint Serge I", es: "San Sergio I", de: "Hl. Sergius I." }, 
    description: { 
      en: "Introduced the 'Agnus Dei' into the Mass. Refused the canons of the Quinisext Council which were contrary to Roman custom.", 
      fr: "Introduisit l'Agnus Dei dans la messe. Refusa les canons du Concile Quinisexte.", 
      es: "Introdujo el Agnus Dei en la Misa. Rechazó los cánones del Concilio Quinisexto.", 
      de: "Führte das Agnus Dei in die Messe ein. Lehnte die Kanones des Quinisext-Konzils ab." 
    } 
  },
  { 
    id: 'p85', 
    startYear: 701, 
    endYear: 705, 
    type: 'pope', 
    name: { en: "John VI", fr: "Jean VI", es: "Juan VI", de: "Johannes VI." }, 
    description: { 
      en: "Defended Rome against the Lombards. Discouraged violence and ransomed captives.", 
      fr: "Défendit Rome contre les Lombards. Découragea la violence et rançonna les captifs.", 
      es: "Defendió Roma contra los lombardos. Desalentó la violencia y rescató cautivos.", 
      de: "Verteidigte Rom gegen die Langobarden. Kaufte Gefangene frei." 
    } 
  },
  { 
    id: 'p86', 
    startYear: 705, 
    endYear: 707, 
    type: 'pope', 
    name: { en: "John VII", fr: "Jean VII", es: "Juan VII", de: "Johannes VII." }, 
    description: { 
      en: "Notable for his devotion to Mary. Built a chapel in St. Peter's with early mosaics. Maintained good relations with Lombards.", 
      fr: "Dévotion mariale notable. Construisit une chapelle à Saint-Pierre avec des mosaïques.", 
      es: "Devoción mariana notable. Construyó una capilla en San Pedro con mosaicos.", 
      de: "Bemerkenswerte Marienverehrung. Baute eine Kapelle in St. Peter mit Mosaiken." 
    } 
  },
  { 
    id: 'p87', 
    startYear: 708, 
    endYear: 708, 
    type: 'pope', 
    name: { en: "Sisinnius", fr: "Sisinnius", es: "Sisinio", de: "Sisinnius" }, 
    description: { 
      en: "Reigned only 20 days. Suffered from gout but began reinforcing Rome's walls.", 
      fr: "Règne de 20 jours. Souffrant de la goutte, il commença à renforcer les murs de Rome.", 
      es: "Reinó 20 días. Sufría de gota pero comenzó a reforzar los muros de Roma.", 
      de: "Regierte nur 20 Tage. Litt an Gicht, begann aber die Mauern Roms zu verstärken." 
    } 
  },
  { 
    id: 'p88', 
    startYear: 708, 
    endYear: 715, 
    type: 'pope', 
    name: { en: "Constantine", fr: "Constantin", es: "Constantino", de: "Konstantin" }, 
    description: { 
      en: "Last Pope to visit Constantinople until 1967. Negotiated with the Emperor regarding the Quinisext Council canons.", 
      fr: "Dernier pape à visiter Constantinople jusqu'en 1967. Négocia sur le Concile Quinisexte.", 
      es: "Último Papa en visitar Constantinopla hasta 1967. Negoció sobre el Concilio Quinisexto.", 
      de: "Letzter Papstbesuch in Konstantinopel bis 1967. Verhandelte über das Quinisextum." 
    } 
  },
  { 
    id: 'p89', 
    startYear: 715, 
    endYear: 731, 
    type: 'pope', 
    name: { en: "St. Gregory II", fr: "Saint Grégoire II", es: "San Gregorio II", de: "Hl. Gregor II." }, 
    description: { 
      en: "Commissioned St. Boniface to evangelize Germany. Condemned the Iconoclasm of Emperor Leo III, defending sacred images.", 
      fr: "Envoya Saint Boniface en Allemagne. Condamna l'iconoclasme de Léon III.", 
      es: "Envió a San Bonifacio a Alemania. Condenó la iconoclasia de León III.", 
      de: "Beauftragte Bonifatius mit der Germanenmission. Verurteilte den Ikonoklasmus." 
    } 
  },
  { 
    id: 'p90', 
    startYear: 731, 
    endYear: 741, 
    type: 'pope', 
    name: { en: "St. Gregory III", fr: "Saint Grégoire III", es: "San Gregorio III", de: "Hl. Gregor III." }, 
    description: { 
      en: "Last Syrian Pope. Held a synod in Rome condemning Iconoclasm. Sought help from Charles Martel against the Lombards.", 
      fr: "Dernier pape syrien. Condamna l'iconoclasme. Demanda l'aide de Charles Martel.", 
      es: "Último Papa sirio. Condenó la iconoclasia. Pidió ayuda a Carlos Martel.", 
      de: "Letzter syrischer Papst. Verurteilte Ikonoklasmus. Bat Karl Martell um Hilfe." 
    } 
  },
  { 
    id: 'p91', 
    startYear: 741, 
    endYear: 752, 
    type: 'pope', 
    name: { en: "St. Zachary", fr: "Saint Zacharie", es: "San Zacarías", de: "Hl. Zacharias" }, 
    description: { 
      en: "Sanctioned the crowning of Pepin the Short as King of the Franks, strengthening ties between the Papacy and the Franks. Translated Gregory the Great's Dialogues into Greek.", 
      fr: "Approuva le couronnement de Pépin le Bref. Traduisit les Dialogues de Grégoire en grec.", 
      es: "Sancionó la coronación de Pipino el Breve. Tradujo los Diálogos de Gregorio al griego.", 
      de: "Billigte die Krönung Pippins des Jüngeren. Übersetzte Gregors Dialoge ins Griechische." 
    } 
  },
  { 
    id: 'p92', 
    startYear: 752, 
    endYear: 757, 
    type: 'pope', 
    name: { en: "Stephen II (III)", fr: "Étienne II (III)", es: "Esteban II (III)", de: "Stephan II. (III.)" }, 
    description: { 
      en: "Crossed the Alps to crown Pepin the Short. Received the 'Donation of Pepin', establishing the Papal States and temporal power of the Popes.", 
      fr: "Couronna Pépin le Bref. Reçut la 'Donation de Pépin', créant les États pontificaux.", 
      es: "Coronó a Pipino. Recibió la 'Donación de Pipino', creando los Estados Pontificios.", 
      de: "Krönte Pippin. Erhielt die 'Pippinsche Schenkung', Gründung des Kirchenstaates." 
    } 
  },
  { 
    id: 'p93', 
    startYear: 757, 
    endYear: 767, 
    type: 'pope', 
    name: { en: "St. Paul I", fr: "Saint Paul I", es: "San Pablo I", de: "Hl. Paul I." }, 
    description: { 
      en: "Brother of Stephen II. Consolidated the Papal States. Gave refuge to Greek monks fleeing Iconoclasm.", 
      fr: "Frère d'Étienne II. Consolida les États pontificaux. Accueillit les moines fuyant l'iconoclasme.", 
      es: "Hermano de Esteban II. Consolidó los Estados Pontificios. Refugió a monjes griegos.", 
      de: "Bruder von Stephan II. Festigte den Kirchenstaat. Gab griechischen Mönchen Asyl." 
    } 
  },
  { 
    id: 'p94', 
    startYear: 768, 
    endYear: 772, 
    type: 'pope', 
    name: { en: "Stephen III (IV)", fr: "Étienne III (IV)", es: "Esteban III (IV)", de: "Stephan III. (IV.)" }, 
    description: { 
      en: "Condemned the anti-pope Constantine II at the Lateran Council (769), which also ruled that only cardinals could be elected Pope.", 
      fr: "Condamna l'antipape Constantin II. Décréta que seuls les cardinaux pouvaient être élus papes.", 
      es: "Condenó al antipapa Constantino II. Decretó que solo cardenales podían ser elegidos.", 
      de: "Verurteilte Gegenpapst Konstantin II. Beschloss, dass nur Kardinäle Papst werden können." 
    } 
  },
  { 
    id: 'p95', 
    startYear: 772, 
    endYear: 795, 
    type: 'pope', 
    name: { en: "Adrian I", fr: "Adrien I", es: "Adriano I", de: "Hadrian I." }, 
    description: { 
      en: "Long reign. Presided via legates over the Second Council of Nicaea (787), restoring icon veneration. Enlarged the Papal States with Charlemagne's help.", 
      fr: "Long règne. Présida Nicée II (787) restaurant les icônes. Élargit les États pontificaux.", 
      es: "Largo reinado. Presidió Nicea II (787). Amplió los Estados Pontificios con Carlomagno.", 
      de: "Langes Pontifikat. Leitete Nicäa II (787). Vergrößerte den Kirchenstaat mit Karls Hilfe." 
    } 
  },
  { 
    id: 'p96', 
    startYear: 795, 
    endYear: 816, 
    type: 'pope', 
    name: { en: "St. Leo III", fr: "Saint Léon III", es: "San León III", de: "Hl. Leo III." }, 
    description: { 
      en: "Crowned Charlemagne as Holy Roman Emperor on Christmas Day 800, reviving the Empire in the West. Physically attacked by Roman mob but survived.", 
      fr: "Couronna Charlemagne Empereur à Noël 800. Attaqué par la foule romaine mais survécut.", 
      es: "Coronó a Carlomagno Emperador en Navidad del 800. Atacado por una turba, sobrevivió.", 
      de: "Krönte Karl den Großen Weihnachten 800 zum Kaiser. Überlebte Attentat in Rom." 
    } 
  },
  { 
    id: 'p97', 
    startYear: 816, 
    endYear: 817, 
    type: 'pope', 
    name: { en: "Stephen IV (V)", fr: "Étienne IV (V)", es: "Esteban IV (V)", de: "Stephan IV. (V.)" }, 
    description: { 
      en: "Crowned Louis the Pious as Emperor in Rheims. Secured guarantees for the freedom of papal elections.", 
      fr: "Couronna Louis le Pieux à Reims. Garantit la liberté des élections papales.", 
      es: "Coronó a Luis el Piadoso en Reims. Aseguró la libertad de elecciones papales.", 
      de: "Krönte Ludwig den Frommen in Reims. Sicherte freie Papstwahlen." 
    } 
  },
  { 
    id: 'p98', 
    startYear: 817, 
    endYear: 824, 
    type: 'pope', 
    name: { en: "St. Paschal I", fr: "Saint Pascal I", es: "San Pascual I", de: "Hl. Paschalis I." }, 
    description: { 
      en: "Preserved many relics in Roman churches (e.g., Santa Prassede) to protect them from neglect. Strong relations with the Franks.", 
      fr: "Préserva de nombreuses reliques (Santa Prassede). Fortes relations avec les Francs.", 
      es: "Preservó muchas reliquias (Santa Práxedes). Fuertes relaciones con los francos.", 
      de: "Bewahrte viele Reliquien (Santa Prassede). Starke Beziehungen zu den Franken." 
    } 
  },
  { 
    id: 'p99', 
    startYear: 824, 
    endYear: 827, 
    type: 'pope', 
    name: { en: "Eugene II", fr: "Eugène II", es: "Eugenio II", de: "Eugen II." }, 
    description: { 
      en: "Accepted the 'Constitutio Romana', which required imperial confirmation for the Pope. Held a council to improve clerical discipline.", 
      fr: "Accepta la 'Constitutio Romana' (confirmation impériale). Concile pour la discipline cléricale.", 
      es: "Aceptó la 'Constitutio Romana'. Celebró concilio para mejorar disciplina clerical.", 
      de: "Akzeptierte die 'Constitutio Romana'. Konzil zur Verbesserung der Klerusdisziplin." 
    } 
  },
  { 
    id: 'p100', 
    startYear: 827, 
    endYear: 827, 
    type: 'pope', 
    name: { en: "Valentine", fr: "Valentin", es: "Valentín", de: "Valentin" }, 
    description: { 
      en: "Reigned for roughly 40 days. Known for his personal holiness and favor with the Roman people.", 
      fr: "Règne d'environ 40 jours. Connu pour sa sainteté et aimé du peuple.", 
      es: "Reinó unos 40 días. Conocido por su santidad y favor del pueblo.", 
      de: "Regierte etwa 40 Tage. Bekannt für seine Frömmigkeit und Beliebtheit." 
    } 
  },
  { 
    id: 'p101', 
    startYear: 827, 
    endYear: 844, 
    type: 'pope', 
    name: { en: "Gregory IV", fr: "Grégoire IV", es: "Gregorio IV", de: "Gregor IV." }, 
    description: { 
      en: "Fortified the port of Ostia (Gregoriopolis) against Saracen pirates. Extended the Feast of All Saints to the universal Church.", 
      fr: "Fortifia le port d'Ostie (Gregoriopolis) contre les pirates sarrasins. Étendit la fête de la Toussaint à toute l'Église.", 
      es: "Fortificó el puerto de Ostia (Gregoriopolis) contra piratas sarracenos. Extendió la fiesta de Todos los Santos a toda la Iglesia.", 
      de: "Befestigte Ostia (Gregoriopolis) gegen Sarazenen. Dehnte das Allerheiligenfest auf die gesamte Kirche aus." 
    } 
  },
  { 
    id: 'p102', 
    startYear: 844, 
    endYear: 847, 
    type: 'pope', 
    name: { en: "Sergius II", fr: "Serge II", es: "Sergio II", de: "Sergius II." }, 
    description: { 
      en: "During his reign, Saracens sacked Rome (846), looting St. Peter's and St. Paul's outside the walls. Criticized for nepotism.", 
      fr: "Durant son règne, les Sarrasins pillèrent Rome (846), dont Saint-Pierre. Critiqué pour népotisme.", 
      es: "Durante su reinado, los sarracenos saquearon Roma (846), incluyendo San Pedro. Criticado por nepotismo.", 
      de: "Während seiner Zeit plünderten Sarazenen Rom (846) und St. Peter. Wegen Nepotismus kritisiert." 
    } 
  },
  { 
    id: 'p103', 
    startYear: 847, 
    endYear: 855, 
    type: 'pope', 
    name: { en: "St. Leo IV", fr: "Saint Léon IV", es: "San León IV", de: "Hl. Leo IV." }, 
    description: { 
      en: "Built the 'Leonine Wall' to protect the Vatican from Saracens. Organized the naval victory at the Battle of Ostia.", 
      fr: "Construisit le 'Mur Léonine' pour protéger le Vatican des Sarrasins. Organisa la victoire navale d'Ostie.", 
      es: "Construyó la 'Muralla Leonina' para proteger el Vaticano. Organizó la victoria naval en la Batalla de Ostia.", 
      de: "Baute die 'Leoninische Mauer' zum Schutz des Vatikans. Organisierte den Seesieg bei Ostia." 
    } 
  },
  { 
    id: 'p104', 
    startYear: 855, 
    endYear: 858, 
    type: 'pope', 
    name: { en: "Benedict III", fr: "Benoît III", es: "Benedicto III", de: "Benedikt III." }, 
    description: { 
      en: "Known for his holiness during a time of political turmoil. Restored churches damaged by the Saracen invasion.", 
      fr: "Connu pour sa sainteté en des temps troublés. Restaura les églises endommagées par l'invasion sarrasine.", 
      es: "Conocido por su santidad en tiempos turbulentos. Restauró iglesias dañadas por la invasión sarracena.", 
      de: "Bekannt für seine Heiligkeit in unruhigen Zeiten. Restaurierte von Sarazenen beschädigte Kirchen." 
    } 
  },
  { 
    id: 'p105', 
    startYear: 858, 
    endYear: 867, 
    type: 'pope', 
    name: { en: "St. Nicholas I (The Great)", fr: "Saint Nicolas I", es: "San Nicolás I", de: "Hl. Nikolaus I." }, 
    description: { 
      en: "Asserted papal authority over kings (Lothair II's divorce) and bishops. Dealt with the beginning of the Photian Schism in Constantinople.", 
      fr: "Affirma l'autorité papale sur les rois (divorce de Lothaire II). Traita du début du schisme de Photius.", 
      es: "Afirmó la autoridad papal sobre reyes (divorcio de Lotario II). Trató el inicio del Cisma de Focio.", 
      de: "Betonte päpstliche Autorität über Könige (Lothar II.). Befasste sich mit dem Beginn des Photios-Schismas." 
    } 
  },
  { 
    id: 'p106', 
    startYear: 867, 
    endYear: 872, 
    type: 'pope', 
    name: { en: "Adrian II", fr: "Adrien II", es: "Adriano II", de: "Hadrian II." }, 
    description: { 
      en: "Approved the use of the Slavic language in liturgy by Sts. Cyril and Methodius. Presided via legates over the Fourth Council of Constantinople.", 
      fr: "Approuva la liturgie slave de Cyrille et Méthode. Présida Constantinople IV par ses légats.", 
      es: "Aprobó la liturgia eslava de Cirilo y Metodio. Presidió Constantinopla IV a través de legados.", 
      de: "Billigte die slawische Liturgie von Kyrill und Method. Leitete Konstantinopel IV durch Legaten." 
    } 
  },
  { 
    id: 'p107', 
    startYear: 872, 
    endYear: 882, 
    type: 'pope', 
    name: { en: "John VIII", fr: "Jean VIII", es: "Juan VIII", de: "Johannes VIII." }, 
    description: { 
      en: "First Pope to be assassinated (poisoned and clubbed). Personally commanded the papal fleet against Saracens. Recognized Photius to heal schism.", 
      fr: "Premier pape assassiné. Commanda personnellement la flotte contre les Sarrasins. Reconnut Photius.", 
      es: "Primer Papa asesinado. Comandó personalmente la flota contra los sarracenos. Reconoció a Focio.", 
      de: "Erster ermordeter Papst. Kommandierte persönlich die Flotte gegen Sarazenen. Erkannte Photios an." 
    } 
  },
  { 
    id: 'p108', 
    startYear: 882, 
    endYear: 884, 
    type: 'pope', 
    name: { en: "Marinus I", fr: "Marin I", es: "Marino I", de: "Marinus I." }, 
    description: { 
      en: "Previously a legate to Constantinople. His election was controversial as he was already a bishop of another see.", 
      fr: "Ancien légat à Constantinople. Élection controversée car il était déjà évêque ailleurs.", 
      es: "Ex legado en Constantinopla. Elección controvertida por ser ya obispo de otra sede.", 
      de: "Ehemals Legat in Konstantinopel. Wahl umstritten, da bereits Bischof eines anderen Sitzes." 
    } 
  },
  { 
    id: 'p109', 
    startYear: 884, 
    endYear: 885, 
    type: 'pope', 
    name: { en: "St. Adrian III", fr: "Saint Adrien III", es: "San Adriano III", de: "Hl. Hadrian III." }, 
    description: { 
      en: "Died near Modena while traveling to the Diet of Worms. Cult confirmed in 1891.", 
      fr: "Mourut près de Modène en voyageant vers la Diète de Worms. Culte confirmé en 1891.", 
      es: "Murió cerca de Módena viajando a la Dieta de Worms. Culto confirmado en 1891.", 
      de: "Starb bei Modena auf dem Weg zum Reichstag in Worms. Kult 1891 bestätigt." 
    } 
  },
  { 
    id: 'p110', 
    startYear: 885, 
    endYear: 891, 
    type: 'pope', 
    name: { en: "Stephen V (VI)", fr: "Étienne V (VI)", es: "Esteban V (VI)", de: "Stephan V. (VI.)" }, 
    description: { 
      en: "Forbade the Slavic liturgy (reversing Adrian II). Faced the disintegration of the Carolingian Empire.", 
      fr: "Interdit la liturgie slave (inversant Adrien II). Fit face à la désintégration de l'Empire carolingien.", 
      es: "Prohibió la liturgia eslava (revirtiendo a Adriano II). Enfrentó la desintegración del Imperio Carolingio.", 
      de: "Verbot die slawische Liturgie. Konfrontiert mit dem Zerfall des Karolingerreiches." 
    } 
  },
  { 
    id: 'p111', 
    startYear: 891, 
    endYear: 896, 
    type: 'pope', 
    name: { en: "Formosus", fr: "Formose", es: "Formoso", de: "Formosus" }, 
    description: { 
      en: "Posthumously put on trial in the 'Cadaver Synod'. His body was exhumed, dressed in vestments, and condemned by Stephen VI.", 
      fr: "Jugé post-mortem lors du 'Concile cadavérique'. Corps exhumé et condamné par Étienne VI.", 
      es: "Juzgado póstumamente en el 'Sínodo del Cadáver'. Su cuerpo fue exhumado y condenado.", 
      de: "Posthum in der 'Leichensynode' angeklagt. Sein Körper wurde exhumiert und verurteilt." 
    } 
  },
  { 
    id: 'p112', 
    startYear: 896, 
    endYear: 896, 
    type: 'pope', 
    name: { en: "Boniface VI", fr: "Boniface VI", es: "Bonifacio VI", de: "Bonifatius VI." }, 
    description: { 
      en: "Reigned only 15 days. Elected during a riot. Died of gout or was poisoned.", 
      fr: "Règne de 15 jours. Élu lors d'une émeute. Mourut de la goutte ou empoisonné.", 
      es: "Reinó 15 días. Elegido durante un motín. Murió de gota o envenenado.", 
      de: "Regierte nur 15 Tage. Während eines Aufruhrs gewählt. Starb an Gicht oder Gift." 
    } 
  },
  { 
    id: 'p113', 
    startYear: 896, 
    endYear: 897, 
    type: 'pope', 
    name: { en: "Stephen VI (VII)", fr: "Étienne VI (VII)", es: "Esteban VI (VII)", de: "Stephan VI. (VII.)" }, 
    description: { 
      en: "Conducted the infamous 'Cadaver Synod' against Formosus. Was imprisoned and strangled by rebels shortly after.", 
      fr: "Dirigea le 'Concile cadavérique' contre Formose. Emprisonné et étranglé peu après.", 
      es: "Dirigió el 'Sínodo del Cadáver' contra Formoso. Encarcelado y estrangulado poco después.", 
      de: "Führte die 'Leichensynode' gegen Formosus. Kurz darauf eingekerkert und erdrosselt." 
    } 
  },
  { 
    id: 'p114', 
    startYear: 897, 
    endYear: 897, 
    type: 'pope', 
    name: { en: "Romanus", fr: "Romain", es: "Romano", de: "Romanus" }, 
    description: { 
      en: "Reigned 4 months. Annulled the acts of Stephen VI. Deposed or died of unknown causes.", 
      fr: "Règne de 4 mois. Annula les actes d'Étienne VI. Déposé ou mort de causes inconnues.", 
      es: "Reinó 4 meses. Anuló los actos de Esteban VI. Depuesto o murió de causas desconocidas.", 
      de: "Regierte 4 Monate. Annullierte die Akten Stephans VI. Abgesetzt oder unbekannt verstorben." 
    } 
  },
  { 
    id: 'p115', 
    startYear: 897, 
    endYear: 897, 
    type: 'pope', 
    name: { en: "Theodore II", fr: "Théodore II", es: "Teodoro II", de: "Theodor II." }, 
    description: { 
      en: "Reigned 20 days. Recovered Formosus' body from the Tiber River and reburied it in St. Peter's.", 
      fr: "Règne de 20 jours. Récupéra le corps de Formose dans le Tibre et le réinhuma.", 
      es: "Reinó 20 días. Recuperó el cuerpo de Formoso del Tíber y lo reenterró.", 
      de: "Regierte 20 Tage. Barg Formosus' Leichnam aus dem Tiber und bestattete ihn neu." 
    } 
  },
  { 
    id: 'p116', 
    startYear: 898, 
    endYear: 900, 
    type: 'pope', 
    name: { en: "John IX", fr: "Jean IX", es: "Juan IX", de: "Johannes IX." }, 
    description: { 
      en: "Formally condemned the Cadaver Synod and rehabilitated Pope Formosus. Confirmed the imperial rights of Lambert of Spoleto.", 
      fr: "Condamna formellement le Concile cadavérique et réhabilita Formose.", 
      es: "Condenó formalmente el Sínodo del Cadáver y rehabilitó a Formoso.", 
      de: "Verurteilte formell die Leichensynode und rehabilitierte Formosus." 
    } 
  },
  { 
    id: 'p117', 
    startYear: 900, 
    endYear: 903, 
    type: 'pope', 
    name: { en: "Benedict IV", fr: "Benoît IV", es: "Benedicto IV", de: "Benedikt IV." }, 
    description: { 
      en: "Crowned Louis the Blind as Emperor. Praised by historians for his generosity and zeal in a dark era.", 
      fr: "Couronna Louis l'Aveugle empereur. Loué pour sa générosité en une époque sombre.", 
      es: "Coronó a Luis el Ciego emperador. Alabado por su generosidad en una era oscura.", 
      de: "Krönte Ludwig den Blinden zum Kaiser. Gelobt für seine Großzügigkeit." 
    } 
  },
  { 
    id: 'p118', 
    startYear: 903, 
    endYear: 903, 
    type: 'pope', 
    name: { en: "Leo V", fr: "Léon V", es: "León V", de: "Leo V." }, 
    description: { 
      en: "Reigned 1 month. Deposed and imprisoned by Antipope Christopher. Likely murdered in prison.", 
      fr: "Règne d'un mois. Déposé par l'antipape Christophe. Probablement assassiné.", 
      es: "Reinó 1 mes. Depuesto por el antipapa Cristóbal. Probablemente asesinado.", 
      de: "Regierte 1 Monat. Vom Gegenpapst Christophorus abgesetzt. Wahrscheinlich ermordet." 
    } 
  },
  { 
    id: 'p119', 
    startYear: 904, 
    endYear: 911, 
    type: 'pope', 
    name: { en: "Sergius III", fr: "Serge III", es: "Sergio III", de: "Sergius III." }, 
    description: { 
      en: "Start of the 'Pornocracy' (Rule of Harlots). Dominated by Theophylact and Marozia. Rebuilt the Lateran Basilica.", 
      fr: "Début de la 'Pornocratie'. Dominé par Théophylacte et Marozie. Reconstruisit le Latran.", 
      es: "Inicio de la 'Pornocracia'. Dominado por Teofilacto y Marozia. Reconstruyó el Letrán.", 
      de: "Beginn der 'Pornokratie'. Beherrscht von Theophylakt und Marozia. Baute den Lateran wieder auf." 
    } 
  },
  { 
    id: 'p120', 
    startYear: 911, 
    endYear: 913, 
    type: 'pope', 
    name: { en: "Anastasius III", fr: "Anastase III", es: "Anastasio III", de: "Anastasius III." }, 
    description: { 
      en: "A quiet pontificate under the control of the Roman aristocracy (Theophylact).", 
      fr: "Pontificat calme sous le contrôle de l'aristocratie romaine.", 
      es: "Pontificado tranquilo bajo control de la aristocracia romana.", 
      de: "Ruhiges Pontifikat unter Kontrolle des römischen Adels." 
    } 
  },
  { 
    id: 'p121', 
    startYear: 913, 
    endYear: 914, 
    type: 'pope', 
    name: { en: "Lando", fr: "Landon", es: "Landón", de: "Lando" }, 
    description: { 
      en: "Reigned 6 months. The last Pope to use a unique name until Francis in 2013.", 
      fr: "Règne de 6 mois. Dernier pape au nom inédit jusqu'à François en 2013.", 
      es: "Reinó 6 meses. Último Papa con nombre inédito hasta Francisco en 2013.", 
      de: "Regierte 6 Monate. Letzter Papst mit neuem Namen bis Franziskus 2013." 
    } 
  },
  { 
    id: 'p122', 
    startYear: 914, 
    endYear: 928, 
    type: 'pope', 
    name: { en: "John X", fr: "Jean X", es: "Juan X", de: "Johannes X." }, 
    description: { 
      en: "A warrior Pope. Personally defeated the Saracens at the Battle of Garigliano. Eventually imprisoned and suffocated by Marozia.", 
      fr: "Pape guerrier. Vainquit les Sarrasins à Garigliano. Emprisonné et étouffé par Marozie.", 
      es: "Papa guerrero. Venció a los sarracenos en Garigliano. Encarcelado y sofocado por Marozia.", 
      de: "Kriegerpapst. Besiegte Sarazenen am Garigliano. Von Marozia eingekerkert und erstickt." 
    } 
  },
  { 
    id: 'p123', 
    startYear: 928, 
    endYear: 928, 
    type: 'pope', 
    name: { en: "Leo VI", fr: "Léon VI", es: "León VI", de: "Leo VI." }, 
    description: { 
      en: "Reigned 7 months. A creature of Marozia, the Senatrix of Rome.", 
      fr: "Règne de 7 mois. Une créature de Marozie, Sénatrice de Rome.", 
      es: "Reinó 7 meses. Criatura de Marozia, Senadora de Roma.", 
      de: "Regierte 7 Monate. Ein Geschöpf von Marozia." 
    } 
  },
  { 
    id: 'p124', 
    startYear: 928, 
    endYear: 931, 
    type: 'pope', 
    name: { en: "Stephen VII (VIII)", fr: "Étienne VII (VIII)", es: "Esteban VII (VIII)", de: "Stephan VII. (VIII.)" }, 
    description: { 
      en: "Another Pope dominated by Marozia. Granted privileges to monasteries.", 
      fr: "Autre pape dominé par Marozie. Accordades privilèges aux monastères.", 
      es: "Otro Papa dominado por Marozia. Otorgó privilegios a monasterios.", 
      de: "Ein weiterer von Marozia dominierter Papst. Privilegierte Klöster." 
    } 
  },
  { 
    id: 'p125', 
    startYear: 931, 
    endYear: 935, 
    type: 'pope', 
    name: { en: "John XI", fr: "Jean XI", es: "Juan XI", de: "Johannes XI." }, 
    description: { 
      en: "Son of Marozia (and allegedly Pope Sergius III). Kept under house arrest by his brother Alberic II, who ruled Rome.", 
      fr: "Fils de Marozie. Gardé en résidence surveillée par son frère Albéric II.", 
      es: "Hijo de Marozia. Mantenido bajo arresto domiciliario por su hermano Alberico II.", 
      de: "Sohn von Marozia. Von seinem Bruder Alberich II. unter Hausarrest gehalten." 
    } 
  },
  { 
    id: 'p126', 
    startYear: 936, 
    endYear: 939, 
    type: 'pope', 
    name: { en: "Leo VII", fr: "Léon VII", es: "León VII", de: "Leo VII." }, 
    description: { 
      en: "Supported the Cluniac Reform of monasteries. Appointed Odo of Cluny to mediate peace in Italy.", 
      fr: "Soutint la réforme clunisienne. Nomma Odon de Cluny pour médiatiser la paix.", 
      es: "Apoyó la reforma cluniacense. Nombró a Odón de Cluny para mediar la paz.", 
      de: "Unterstützte die Cluniazensische Reform. Ernannte Odo von Cluny zum Friedensvermittler." 
    } 
  },
  { 
    id: 'p127', 
    startYear: 939, 
    endYear: 942, 
    type: 'pope', 
    name: { en: "Stephen VIII (IX)", fr: "Étienne VIII (IX)", es: "Esteban VIII (IX)", de: "Stephan VIII. (IX.)" }, 
    description: { 
      en: "German descent. Subject to Alberic II. Legend says he was mutilated by enemies of Alberic.", 
      fr: "D'origine allemande. Sujet d'Albéric II. Aurait été mutilé par ses ennemis.", 
      es: "De origen alemán. Súbdito de Alberico II. Se dice que fue mutilado.", 
      de: "Deutscher Abstammung. Untertan Alberichs II. Soll verstümmelt worden sein." 
    } 
  },
  { 
    id: 'p128', 
    startYear: 942, 
    endYear: 946, 
    type: 'pope', 
    name: { en: "Marinus II", fr: "Marin II", es: "Marino II", de: "Marinus II." }, 
    description: { 
      en: "Focused on administrative discipline and protecting the poor. Still under the control of Alberic II.", 
      fr: "Concentré sur la discipline administrative. Toujours sous le contrôle d'Albéric.", 
      es: "Centrado en la disciplina administrativa. Aún bajo control de Alberico.", 
      de: "Fokussiert auf administrative Disziplin. Immer noch unter Alberichs Kontrolle." 
    } 
  },
  { 
    id: 'p129', 
    startYear: 946, 
    endYear: 955, 
    type: 'pope', 
    name: { en: "Agapetus II", fr: "Agapit II", es: "Agapito II", de: "Agapitus II." }, 
    description: { 
      en: "Called on Otto I of Germany for help against Italian factions, paving the way for the Holy Roman Empire.", 
      fr: "Appela Othon Ier à l'aide, ouvrant la voie au Saint-Empire romain germanique.", 
      es: "Pidió ayuda a Otón I, allanando el camino para el Sacro Imperio Romano.", 
      de: "Rief Otto I. zu Hilfe, bereitete den Weg für das Heilige Römische Reich." 
    } 
  },
  { 
    id: 'p130', 
    startYear: 955, 
    endYear: 964, 
    type: 'pope', 
    name: { en: "John XII", fr: "Jean XII", es: "Juan XII", de: "Johannes XII." }, 
    description: { 
      en: "Became Pope at 18. Crowned Otto I as Holy Roman Emperor (962). Deposed by Otto for immense immorality and treachery. Known as the 'Boy Pope'.", 
      fr: "Pape à 18 ans. Couronna Othon Ier Empereur (962). Déposé pour immoralité et trahison.", 
      es: "Papa a los 18. Coronó a Otón I Emperador (962). Depuesto por inmoralidad y traición.", 
      de: "Papst mit 18. Krönte Otto I. zum Kaiser (962). Wegen Immoralität und Verrat abgesetzt." 
    } 
  },
  { 
    id: 'p131', 
    startYear: 963, 
    endYear: 965, 
    type: 'pope', 
    name: { en: "Leo VIII", fr: "Léon VIII", es: "León VIII", de: "Leo VIII." }, 
    description: { 
      en: "Installed by Emperor Otto I while John XII was still alive. His legitimacy was contested during his lifetime.", 
      fr: "Installé par l'Empereur Othon Ier du vivant de Jean XII. Légitimité contestée.", 
      es: "Instalado por Otón I mientras Juan XII vivía. Legitimidad disputada.", 
      de: "Von Otto I. eingesetzt, während Johannes XII. noch lebte. Umstrittene Legitimität." 
    } 
  },
  { 
    id: 'p132', 
    startYear: 964, 
    endYear: 964, 
    type: 'pope', 
    name: { en: "Benedict V", fr: "Benoît V", es: "Benedicto V", de: "Benedikt V." }, 
    description: { 
      en: "Elected by Romans after John XII's death. Deposed by Emperor Otto I and exiled to Hamburg.", 
      fr: "Élu par les Romains. Déposé par Othon Ier et exilé à Hambourg.", 
      es: "Elegido por los romanos. Depuesto por Otón I y exiliado a Hamburgo.", 
      de: "Von Römern gewählt. Von Otto I. abgesetzt und nach Hamburg verbannt." 
    } 
  },
  { 
    id: 'p133', 
    startYear: 965, 
    endYear: 972, 
    type: 'pope', 
    name: { en: "John XIII", fr: "Jean XIII", es: "Juan XIII", de: "Johannes XIII." }, 
    description: { 
      en: "Established the hierarchy of the Church in Poland and Hungary. First Pope to baptize a church bell.", 
      fr: "Établit la hiérarchie en Pologne et Hongrie. Premier pape à baptiser une cloche.", 
      es: "Estableció la jerarquía en Polonia y Hungría. Primer Papa en bautizar una campana.", 
      de: "Gründete Kirchenhierarchie in Polen und Ungarn. Taufte erstmals eine Glocke." 
    } 
  },
  { 
    id: 'p134', 
    startYear: 973, 
    endYear: 974, 
    type: 'pope', 
    name: { en: "Benedict VI", fr: "Benoît VI", es: "Benedicto VI", de: "Benedikt VI." }, 
    description: { 
      en: "Imprisoned and strangled by the faction of Crescentius (Roman noble) after the death of Emperor Otto I.", 
      fr: "Emprisonné et étranglé par la faction de Crescentius après la mort d'Othon Ier.", 
      es: "Encarcelado y estrangulado por la facción de Crescencio tras morir Otón I.", 
      de: "Von der Crescentius-Fraktion nach Ottos Tod eingekerkert und erdrosselt." 
    } 
  },
  { 
    id: 'p135', 
    startYear: 974, 
    endYear: 983, 
    type: 'pope', 
    name: { en: "Benedict VII", fr: "Benoît VII", es: "Benedicto VII", de: "Benedikt VII." }, 
    description: { 
      en: "Promoted monastic reform and condemned simony. Maintained peace in Rome with imperial support.", 
      fr: "Promut la réforme monastique et condamna la simonie. Maintint la paix à Rome.", 
      es: "Promovió reforma monástica y condenó simonía. Mantuvo la paz en Roma.", 
      de: "Förderte Klosterreform und verurteilte Simonie. Wahrte Frieden in Rom." 
    } 
  },
  { 
    id: 'p136', 
    startYear: 983, 
    endYear: 984, 
    type: 'pope', 
    name: { en: "John XIV", fr: "Jean XIV", es: "Juan XIV", de: "Johannes XIV." }, 
    description: { 
      en: "Reigned 8 months. Imprisoned in Castel Sant'Angelo by Antipope Boniface VII and died of starvation/poison.", 
      fr: "Règne de 8 mois. Emprisonné au Château Saint-Ange par l'antipape Boniface VII. Mourut de faim.", 
      es: "Reinó 8 meses. Encarcelado en Sant'Angelo por el antipapa Bonifacio VII. Murió de hambre.", 
      de: "Regierte 8 Monate. Vom Gegenpapst Bonifatius VII. eingekerkert. Verhungert." 
    } 
  },
  { 
    id: 'p137', 
    startYear: 985, 
    endYear: 996, 
    type: 'pope', 
    name: { en: "John XV", fr: "Jean XV", es: "Juan XV", de: "Johannes XV." }, 
    description: { 
      en: "Performed the first solemn papal canonization (St. Ulrich of Augsburg). Divided between Roman factions.", 
      fr: "Première canonisation papale solennelle (Saint Ulrich). Divisé entre factions romaines.", 
      es: "Primera canonización papal solemne (San Ulrico). Dividido entre facciones romanas.", 
      de: "Erste feierliche päpstliche Heiligsprechung (St. Ulrich). Zerrieben zwischen römischen Fraktionen." 
    } 
  },
  { 
    id: 'p138', 
    startYear: 996, 
    endYear: 999, 
    type: 'pope', 
    name: { en: "Gregory V", fr: "Grégoire V", es: "Gregorio V", de: "Gregor V." }, 
    description: { 
      en: "First German Pope. Cousin of Emperor Otto III. Crowned Otto III emperor. Died young, possibly poisoned.", 
      fr: "Premier pape allemand. Cousin d'Othon III. Couronna Othon III. Mort jeune (poison ?).", 
      es: "Primer Papa alemán. Primo de Otón III. Coronó a Otón III. Murió joven (¿veneno?).", 
      de: "Erster deutscher Papst. Vetter Ottos III. Krönte Otto zum Kaiser. Jung gestorben." 
    } 
  },
  { 
    id: 'p139', 
    startYear: 999, 
    endYear: 1003, 
    type: 'pope', 
    name: { en: "Sylvester II", fr: "Sylvestre II", es: "Silvestre II", de: "Silvester II." }, 
    description: { 
      en: "Gerbert of Aurillac. First French Pope. Renowned scholar/mathematician. Introduced Arabic numerals to Europe. Pope of the Year 1000.", 
      fr: "Gerbert d'Aurillac. Premier pape français. Savant mathématicien. Introduisit les chiffres arabes. Pape de l'An 1000.", 
      es: "Gerberto de Aurillac. Primer Papa francés. Erudito matemático. Introdujo números arábigos. Papa del Año 1000.", 
      de: "Gerbert von Aurillac. Erster französischer Papst. Gelehrter. Führte arabische Ziffern ein. Papst des Jahres 1000." 
    } 
  },
  { 
    id: 'p140', 
    startYear: 1003, 
    endYear: 1003, 
    type: 'pope', 
    name: { en: "John XVII", fr: "Jean XVII", es: "Juan XVII", de: "Johannes XVII." }, 
    description: { 
      en: "Reigned for 5 months. Little is known of his pontificate.", 
      fr: "Règne de 5 mois. Peu de choses connues sur son pontificat.", 
      es: "Reinó 5 meses. Se sabe poco de su pontificado.", 
      de: "Regierte 5 Monate. Wenig über sein Pontifikat bekannt." 
    } 
  },
  { 
    id: 'p141', 
    startYear: 1003, 
    endYear: 1009, 
    type: 'pope', 
    name: { en: "John XVIII", fr: "Jean XVIII", es: "Juan XVIII", de: "Johannes XVIII." }, 
    description: { 
      en: "Abdicated and retired to a monastery shortly before his death. Approved the mission of St. Bruno of Querfurt.", 
      fr: "Abdiqua pour le monastère avant sa mort. Approuva la mission de Saint Bruno de Querfurt.", 
      es: "Abdicó y se retiró a un monasterio. Aprobó la misión de San Bruno de Querfurt.", 
      de: "Dankte ab und ging ins Kloster. Billigte die Mission des Hl. Bruno von Querfurt." 
    } 
  },
  { 
    id: 'p142', 
    startYear: 1009, 
    endYear: 1012, 
    type: 'pope', 
    name: { en: "Sergius IV", fr: "Serge IV", es: "Sergio IV", de: "Sergius IV." }, 
    description: { 
      en: "Known for his nickname 'Bucca Porci' (Pig's Snout). Called for a crusade after the destruction of the Holy Sepulchre by Caliph Al-Hakim.", 
      fr: "Surnommé 'Groin de Porc'. Appela à la croisade après la destruction du Saint-Sépulcre.", 
      es: "Apodado 'Hocico de Cerdo'. Llamó a cruzada tras destrucción del Santo Sepulcro.", 
      de: "Spitzname 'Schweinerüssel'. Rief zum Kreuzzug nach Zerstörung der Grabeskirche." 
    } 
  },
  { 
    id: 'p143', 
    startYear: 1012, 
    endYear: 1024, 
    type: 'pope', 
    name: { en: "Benedict VIII", fr: "Benoît VIII", es: "Benedicto VIII", de: "Benedikt VIII." }, 
    description: { 
      en: "Warrior Pope from the Tusculum family. Defeated Saracens in Northern Italy. Crowned Henry II Holy Roman Emperor.", 
      fr: "Pape guerrier (Tusculum). Vainquit les Sarrasins en Italie. Couronna Henri II Empereur.", 
      es: "Papa guerrero (Túsculo). Venció a sarracenos en Italia. Coronó a Enrique II Emperador.", 
      de: "Kriegerpapst (Tusculum). Besiegte Sarazenen. Krönte Heinrich II. zum Kaiser." 
    } 
  },
  { 
    id: 'p144', 
    startYear: 1024, 
    endYear: 1032, 
    type: 'pope', 
    name: { en: "John XIX", fr: "Jean XIX", es: "Juan XIX", de: "Johannes XIX." }, 
    description: { 
      en: "Brother of Benedict VIII. Elected as a layman and received all orders in one day. Patron of Guido of Arezzo (musical notation).", 
      fr: "Frère de Benoît VIII. Élu laïc, ordonné en un jour. Mécène de Guido d'Arezzo.", 
      es: "Hermano de Benedicto VIII. Elegido laico, ordenado en un día. Mecenas de Guido de Arezzo.", 
      de: "Bruder Benedikts VIII. Als Laie gewählt, an einem Tag geweiht. Förderer Guidos von Arezzo." 
    } 
  },
  { 
    id: 'p145', 
    startYear: 1032, 
    endYear: 1044, 
    type: 'pope', 
    name: { en: "Benedict IX (1st Term)", fr: "Benoît IX (1er mandat)", es: "Benedicto IX (1er mandato)", de: "Benedikt IX. (1. Amtszeit)" }, 
    description: { 
      en: "Elected very young (around 20). Nephew of John XIX. His reign was scandalous and dissolute. Driven out of Rome by a mob.", 
      fr: "Élu très jeune (env. 20 ans). Neveu de Jean XIX. Règne scandaleux. Chassé par une émeute.", 
      es: "Elegido muy joven (c. 20). Sobrino de Juan XIX. Reinado escandaloso. Expulsado por turba.", 
      de: "Sehr jung gewählt (ca. 20). Neffe Johannes XIX. Skandalöses Pontifikat. Vom Mob vertrieben." 
    } 
  },
  { 
    id: 'p146', 
    startYear: 1045, 
    endYear: 1045, 
    type: 'pope', 
    name: { en: "Sylvester III", fr: "Sylvestre III", es: "Silvestre III", de: "Silvester III." }, 
    description: { 
      en: "Elected after Benedict IX was driven out. Reigned about 2 months before Benedict IX returned and expelled him.", 
      fr: "Élu après l'expulsion de Benoît IX. Règne de 2 mois avant le retour de Benoît.", 
      es: "Elegido tras la expulsión de Benedicto IX. Reinó 2 meses antes del regreso de Benedicto.", 
      de: "Nach Benedikts Vertreibung gewählt. Regierte 2 Monate vor Benedikts Rückkehr." 
    } 
  },
  { 
    id: 'p147', 
    startYear: 1045, 
    endYear: 1045, 
    type: 'pope', 
    name: { en: "Benedict IX (2nd Term)", fr: "Benoît IX (2e mandat)", es: "Benedicto IX (2do mandato)", de: "Benedikt IX. (2. Amtszeit)" }, 
    description: { 
      en: "Returned to power but decided to resign/sell the papacy to his godfather (Gregory VI) to marry.", 
      fr: "Revint au pouvoir mais démissionna/vendit la papauté à son parrain pour se marier.", 
      es: "Volvió al poder pero renunció/vendió el papado a su padrino para casarse.", 
      de: "Kehrte zurück, trat aber zurück/verkaufte das Papsttum, um zu heiraten." 
    } 
  },
  { 
    id: 'p148', 
    startYear: 1045, 
    endYear: 1046, 
    type: 'pope', 
    name: { en: "Gregory VI", fr: "Grégoire VI", es: "Gregorio VI", de: "Gregor VI." }, 
    description: { 
      en: "Bought the papacy from Benedict IX to save it from scandal. Deposed by Emperor Henry III at the Council of Sutri for simony.", 
      fr: "Acheta la papauté à Benoît IX pour la sauver. Déposé par Henri III à Sutri pour simonie.", 
      es: "Compró el papado a Benedicto IX para salvarlo. Depuesto por Enrique III en Sutri por simonía.", 
      de: "Kaufte das Papsttum von Benedikt IX., um es zu retten. Von Heinrich III. in Sutri abgesetzt." 
    } 
  },
  { 
    id: 'p149', 
    startYear: 1046, 
    endYear: 1047, 
    type: 'pope', 
    name: { en: "Clement II", fr: "Clément II", es: "Clemente II", de: "Clemens II." }, 
    description: { 
      en: "Appointed by Emperor Henry III. Crowned Henry III Emperor. Died suddenly, possibly poisoned by Benedict IX's faction.", 
      fr: "Nommé par Henri III. Couronna Henri III. Mort soudaine (poison ?).", 
      es: "Nombrado por Enrique III. Coronó a Enrique. Muerte súbita (¿veneno?).", 
      de: "Von Heinrich III. ernannt. Krönte Heinrich. Starb plötzlich (Gift?)." 
    } 
  },
  { 
    id: 'p150', 
    startYear: 1047, 
    endYear: 1048, 
    type: 'pope', 
    name: { en: "Benedict IX (3rd Term)", fr: "Benoît IX (3e mandat)", es: "Benedicto IX (3er mandato)", de: "Benedikt IX. (3. Amtszeit)" }, 
    description: { 
      en: "Seized the papacy again after Clement II's death. Finally driven out for good by imperial troops.", 
      fr: "Reprit la papauté après la mort de Clément II. Finalement chassé par les troupes impériales.", 
      es: "Retomó el papado tras morir Clemente II. Expulsado definitivamente por tropas imperiales.", 
      de: "Ergriff nach Clemens' Tod erneut die Macht. Endgültig von kaiserlichen Truppen vertrieben." 
    } 
  },
  { 
    id: 'p151', 
    startYear: 1048, 
    endYear: 1048, 
    type: 'pope', 
    name: { en: "Damasus II", fr: "Damase II", es: "Dámaso II", de: "Damasus II." }, 
    description: { 
      en: "Reigned only 23 days. Nominated by Emperor Henry III. Died of malaria shortly after his installation.", 
      fr: "Règne de 23 jours. Nommé par Henri III. Mourut de la malaria peu après son installation.", 
      es: "Reinó 23 días. Nominado por Enrique III. Murió de malaria poco después de su instalación.", 
      de: "Regierte nur 23 Tage. Von Heinrich III. nominiert. Starb kurz nach Amtsantritt an Malaria." 
    } 
  },
  { 
    id: 'p152', 
    startYear: 1049, 
    endYear: 1054, 
    type: 'pope', 
    name: { en: "St. Leo IX", fr: "Saint Léon IX", es: "San León IX", de: "Hl. Leo IX." }, 
    description: { 
      en: "A great reformer who traveled Europe fighting simony and clerical marriage. During his reign, the Great Schism with the East (1054) occurred.", 
      fr: "Grand réformateur, il parcourut l'Europe contre la simonie. Durant son règne survint le Grand Schisme avec l'Orient (1054).", 
      es: "Gran reformador que viajó por Europa contra la simonía. Durante su reinado ocurrió el Gran Cisma con Oriente (1054).", 
      de: "Großer Reformer, bekämpfte Simonie in Europa. Während seiner Zeit geschah das Morgenländische Schisma (1054)." 
    } 
  },
  { 
    id: 'p153', 
    startYear: 1055, 
    endYear: 1057, 
    type: 'pope', 
    name: { en: "Victor II", fr: "Victor II", es: "Víctor II", de: "Viktor II." }, 
    description: { 
      en: "Last of the German reform popes named by Henry III. Oversaw the transition of power to the young Emperor Henry IV.", 
      fr: "Dernier pape réformateur allemand nommé par Henri III. Supervisa la transition vers le jeune Henri IV.", 
      es: "Último Papa reformista alemán nombrado por Enrique III. Supervisó la transición al joven Enrique IV.", 
      de: "Letzter deutscher Reformpapst, ernannt von Heinrich III. Überwachte den Übergang zu Heinrich IV." 
    } 
  },
  { 
    id: 'p154', 
    startYear: 1057, 
    endYear: 1058, 
    type: 'pope', 
    name: { en: "Stephen IX (X)", fr: "Étienne IX (X)", es: "Esteban IX (X)", de: "Stephan IX. (X.)" }, 
    description: { 
      en: "Former Abbot of Monte Cassino. Elected without imperial confirmation, asserting the Church's independence. Brother of Duke Godfrey of Lorraine.", 
      fr: "Ancien abbé du Mont-Cassin. Élu sans confirmation impériale, affirmant l'indépendance de l'Église.", 
      es: "Ex abad de Montecassino. Elegido sin confirmación imperial, afirmando la independencia de la Iglesia.", 
      de: "Ehemaliger Abt von Montecassino. Ohne kaiserliche Bestätigung gewählt, betonte kirchliche Unabhängigkeit." 
    } 
  },
  { 
    id: 'p155', 
    startYear: 1059, 
    endYear: 1061, 
    type: 'pope', 
    name: { en: "Nicholas II", fr: "Nicolas II", es: "Nicolás II", de: "Nikolaus II." }, 
    description: { 
      en: "Issued the decree 'In Nomine Domini', restricting papal elections exclusively to the College of Cardinals.", 
      fr: "Publia le décret 'In Nomine Domini', réservant l'élection papale exclusivement au Collège des cardinaux.", 
      es: "Emitió el decreto 'In Nomine Domini', restringiendo la elección papal al Colegio Cardenalicio.", 
      de: "Erließ das Dekret 'In Nomine Domini', das die Papstwahl ausschließlich den Kardinälen vorbehielt." 
    } 
  },
  { 
    id: 'p156', 
    startYear: 1061, 
    endYear: 1073, 
    type: 'pope', 
    name: { en: "Alexander II", fr: "Alexandre II", es: "Alejandro II", de: "Alexander II." }, 
    description: { 
      en: "First Pope elected by cardinals under the new rules. Blessed William the Conqueror's invasion of England.", 
      fr: "Premier pape élu par les cardinaux selon les nouvelles règles. Bénit l'invasion de l'Angleterre par Guillaume le Conquérant.", 
      es: "Primer Papa elegido por cardenales bajo las nuevas reglas. Bendijo la invasión de Inglaterra por Guillermo el Conquistador.", 
      de: "Erster nach neuen Regeln gewählter Papst. Segnete die Invasion Englands durch Wilhelm den Eroberer." 
    } 
  },
  { 
    id: 'p157', 
    startYear: 1073, 
    endYear: 1085, 
    type: 'pope', 
    name: { en: "St. Gregory VII", fr: "Saint Grégoire VII", es: "San Gregorio VII", de: "Hl. Gregor VII." }, 
    description: { 
      en: "The great reformer (Hildebrand). Fought the Investiture Controversy against Emperor Henry IV (Road to Canossa). Asserted papal supremacy in 'Dictatus Papae'.", 
      fr: "Le grand réformateur (Hildebrand). Lutte des Investitures contre Henri IV (Canossa). Affirma la suprématie papale ('Dictatus Papae').", 
      es: "El gran reformador (Hildebrando). Lucha de las Investiduras contra Enrique IV (Canosa). Afirmó la supremacía papal.", 
      de: "Der große Reformer (Hildebrand). Investiturstreit mit Heinrich IV. (Gang nach Canossa). Verfasste den 'Dictatus Papae'." 
    } 
  },
  { 
    id: 'p158', 
    startYear: 1086, 
    endYear: 1087, 
    type: 'pope', 
    name: { en: "Bl. Victor III", fr: "Bx Victor III", es: "Bto. Víctor III", de: "Sel. Viktor III." }, 
    description: { 
      en: "Abbot of Monte Cassino. Reluctant Pope who accepted the office only after strong pressure. Died shortly after.", 
      fr: "Abbé du Mont-Cassin. Pape réticent qui n'accepta que sous la pression. Mourut peu après.", 
      es: "Abad de Montecassino. Papa reacio que aceptó solo bajo presión. Murió poco después.", 
      de: "Abt von Montecassino. Zögerlicher Papst, akzeptierte nur unter Druck. Starb kurz darauf." 
    } 
  },
  { 
    id: 'p159', 
    startYear: 1088, 
    endYear: 1099, 
    type: 'pope', 
    name: { en: "Bl. Urban II", fr: "Bx Urbain II", es: "Bto. Urbano II", de: "Sel. Urban II." }, 
    description: { 
      en: "Preached the First Crusade at the Council of Clermont (1095) with the cry 'Deus Vult'. Reformed the Roman Curia.", 
      fr: "Prêcha la Première Croisade au Concile de Clermont (1095) ('Deus Vult'). Réforma la Curie romaine.", 
      es: "Predicó la Primera Cruzada en el Concilio de Clermont (1095) ('Deus Vult'). Reformó la Curia romana.", 
      de: "Rief auf dem Konzil von Clermont (1095) zum Ersten Kreuzzug auf ('Deus Vult'). Reformierte die Kurie." 
    } 
  },
  { 
    id: 'p160', 
    startYear: 1099, 
    endYear: 1118, 
    type: 'pope', 
    name: { en: "Paschal II", fr: "Pascal II", es: "Pascual II", de: "Paschalis II." }, 
    description: { 
      en: "Continued the Investiture Controversy. Imprisoned by Emperor Henry V and forced to concede privileges, which he later revoked.", 
      fr: "Poursuivit la Querelle des Investitures. Emprisonné par Henri V, il céda des privilèges qu'il révoqua plus tard.", 
      es: "Continuó la Querella de las Investiduras. Encarcelado por Enrique V, cedió privilegios que luego revocó.", 
      de: "Setzte den Investiturstreit fort. Von Heinrich V. gefangen genommen, widerrief später erzwungene Zugeständnisse." 
    } 
  },
  { 
    id: 'p161', 
    startYear: 1118, 
    endYear: 1119, 
    type: 'pope', 
    name: { en: "Gelasius II", fr: "Gélase II", es: "Gelasio II", de: "Gelasius II." }, 
    description: { 
      en: "Reign marked by violence from the Frangipani family and Emperor Henry V. Died in exile at Cluny.", 
      fr: "Règne marqué par la violence des Frangipani et d'Henri V. Mourut en exil à Cluny.", 
      es: "Reinado marcado por la violencia de los Frangipani y Enrique V. Murió en el exilio en Cluny.", 
      de: "Regierungszeit geprägt von Gewalt durch die Frangipani und Heinrich V. Starb im Exil in Cluny." 
    } 
  },
  { 
    id: 'p162', 
    startYear: 1119, 
    endYear: 1124, 
    type: 'pope', 
    name: { en: "Callixtus II", fr: "Calixte II", es: "Calixto II", de: "Calixtus II." }, 
    description: { 
      en: "Signed the Concordat of Worms (1122) with Emperor Henry V, finally ending the Investiture Controversy. Presided over the First Lateran Council.", 
      fr: "Signa le Concordat de Worms (1122), finissant la Querelle des Investitures. Présida Latran I.", 
      es: "Firmó el Concordato de Worms (1122), terminando la Querella de las Investiduras. Presidió Letrán I.", 
      de: "Unterzeichnete das Wormser Konkordat (1122), Ende des Investiturstreits. Leitete das Erste Laterankonzil." 
    } 
  },
  { 
    id: 'p163', 
    startYear: 1124, 
    endYear: 1130, 
    type: 'pope', 
    name: { en: "Honorius II", fr: "Honorius II", es: "Honorio II", de: "Honorius II." }, 
    description: { 
      en: "Approved the Order of Templars (Council of Troyes, 1129). Fought against the Normans in Southern Italy.", 
      fr: "Approuva l'Ordre du Temple (Troyes, 1129). Combattit les Normands en Italie du Sud.", 
      es: "Aprobó la Orden del Temple (Troyes, 1129). Luchó contra los normandos en el sur de Italia.", 
      de: "Bestätigte den Templerorden (Konzil von Troyes, 1129). Kämpfte gegen Normannen in Süditalien." 
    } 
  },
  { 
    id: 'p164', 
    startYear: 1130, 
    endYear: 1143, 
    type: 'pope', 
    name: { en: "Innocent II", fr: "Innocent II", es: "Inocencio II", de: "Innozenz II." }, 
    description: { 
      en: "Struggled against Antipope Anacletus II for 8 years. Convened the Second Lateran Council to heal the schism.", 
      fr: "Lutta contre l'antipape Anaclet II durant 8 ans. Convoqua Latran II pour guérir le schisme.", 
      es: "Luchó contra el antipapa Anacleto II por 8 años. Convocó el Segundo Concilio de Letrán.", 
      de: "Kämpfte 8 Jahre gegen Gegenpapst Anaklet II. Einberief das Zweite Laterankonzil." 
    } 
  },
  { 
    id: 'p165', 
    startYear: 1143, 
    endYear: 1144, 
    type: 'pope', 
    name: { en: "Celestine II", fr: "Célestin II", es: "Celestino II", de: "Coelestin II." }, 
    description: { 
      en: "Reigned only 5 months. First Pope listed in the Prophecy of the Popes (attributed to St. Malachy).", 
      fr: "Règne de 5 mois. Premier pape de la Prophétie de Saint Malachie.", 
      es: "Reinó 5 meses. Primer Papa en la Profecía de San Malaquías.", 
      de: "Regierte 5 Monate. Erster Papst in der Weissagung des Malachias." 
    } 
  },
  { 
    id: 'p166', 
    startYear: 1144, 
    endYear: 1145, 
    type: 'pope', 
    name: { en: "Lucius II", fr: "Lucius II", es: "Lucio II", de: "Lucius II." }, 
    description: { 
      en: "Died from injuries sustained while leading an assault against the Roman Senate (Commune of Rome) which had rebelled.", 
      fr: "Mourut de blessures reçues en menant l'assaut contre le Sénat romain rebelle.", 
      es: "Murió por heridas al liderar un asalto contra el Senado romano rebelde.", 
      de: "Starb an Verletzungen, die er beim Sturm auf den römischen Senat erlitt." 
    } 
  },
  { 
    id: 'p167', 
    startYear: 1145, 
    endYear: 1153, 
    type: 'pope', 
    name: { en: "Bl. Eugene III", fr: "Bx Eugène III", es: "Bto. Eugenio III", de: "Sel. Eugen III." }, 
    description: { 
      en: "First Cistercian Pope, disciple of St. Bernard of Clairvaux. Commissioned Bernard to preach the Second Crusade.", 
      fr: "Premier pape cistercien, disciple de Saint Bernard. Chargea Bernard de prêcher la 2ème Croisade.", 
      es: "Primer Papa cisterciense, discípulo de San Bernardo. Encargó a Bernardo predicar la II Cruzada.", 
      de: "Erster Zisterzienserpapst, Schüler von Bernhard von Clairvaux. Rief zum Zweiten Kreuzzug auf." 
    } 
  },
  { 
    id: 'p168', 
    startYear: 1153, 
    endYear: 1154, 
    type: 'pope', 
    name: { en: "Anastasius IV", fr: "Anastase IV", es: "Anastasio IV", de: "Anastasius IV." }, 
    description: { 
      en: "Short, elderly reign. Restored the Pantheon. Known for his charitable works during a famine.", 
      fr: "Règne court. Restaura le Panthéon. Connu pour sa charité durant une famine.", 
      es: "Reinado corto. Restauró el Panteón. Conocido por caridad durante una hambruna.", 
      de: "Kurze Regierungszeit. Restaurierte das Pantheon. Wohltätig während einer Hungersnot." 
    } 
  },
  { 
    id: 'p169', 
    startYear: 1154, 
    endYear: 1159, 
    type: 'pope', 
    name: { en: "Adrian IV", fr: "Adrien IV", es: "Adriano IV", de: "Hadrian IV." }, 
    description: { 
      en: "Nicholas Breakspear, the only English Pope in history. Crowned Frederick Barbarossa. Placed Rome under interdict to expel Arnold of Brescia.", 
      fr: "Seul pape anglais de l'histoire. Couronna Barberousse. Mit Rome sous interdit.", 
      es: "Único Papa inglés de la historia. Coronó a Barbarroja. Puso a Roma en entredicho.", 
      de: "Einziger englischer Papst. Krönte Friedrich Barbarossa. Verhängte das Interdikt über Rom." 
    } 
  },
  { 
    id: 'p170', 
    startYear: 1159, 
    endYear: 1181, 
    type: 'pope', 
    name: { en: "Alexander III", fr: "Alexandre III", es: "Alejandro III", de: "Alexander III." }, 
    description: { 
      en: "Long reign marked by conflict with Barbarossa and four antipopes. Convened the Third Lateran Council. Supported Thomas Becket.", 
      fr: "Conflit avec Barberousse et 4 antipapes. Convoqua Latran III. Soutint Thomas Becket.", 
      es: "Conflicto con Barbarroja y 4 antipapas. Convocó Letrán III. Apoyó a Tomás Becket.", 
      de: "Konflikt mit Barbarossa und 4 Gegenpäpsten. Einberief das Dritte Laterankonzil. Unterstützte Becket." 
    } 
  },
  { 
    id: 'p171', 
    startYear: 1181, 
    endYear: 1185, 
    type: 'pope', 
    name: { en: "Lucius III", fr: "Lucius III", es: "Lucio III", de: "Lucius III." }, 
    description: { 
      en: "Established the Episcopal Inquisition against the Cathars and Waldensians (Ad Abolendam). Lived mostly in exile from Rome.", 
      fr: "Établit l'Inquisition épiscopale contre les Cathares (Ad Abolendam). Vécut en exil de Rome.", 
      es: "Estableció la Inquisición episcopal contra cátaros (Ad Abolendam). Vivió exiliado de Roma.", 
      de: "Gründete die bischöfliche Inquisition gegen Katharer. Lebte meist im Exil." 
    } 
  },
  { 
    id: 'p172', 
    startYear: 1185, 
    endYear: 1187, 
    type: 'pope', 
    name: { en: "Urban III", fr: "Urbain III", es: "Urbano III", de: "Urban III." }, 
    description: { 
      en: "Died of shock/grief reportedly upon hearing the news of the fall of Jerusalem to Saladin at the Battle of Hattin.", 
      fr: "Mourut de chagrin en apprenant la chute de Jérusalem aux mains de Saladin (Hattin).", 
      es: "Murió de pena al enterarse de la caída de Jerusalén ante Saladino (Hattin).", 
      de: "Starb angeblich vor Gram über den Fall Jerusalems an Saladin (Hattin)." 
    } 
  },
  { 
    id: 'p173', 
    startYear: 1187, 
    endYear: 1187, 
    type: 'pope', 
    name: { en: "Gregory VIII", fr: "Grégoire VIII", es: "Gregorio VIII", de: "Gregor VIII." }, 
    description: { 
      en: "Reigned only 57 days. Issued the call for the Third Crusade (Audita Tremendi) immediately after his election.", 
      fr: "Règne de 57 jours. Lança l'appel à la Troisième Croisade (Audita Tremendi).", 
      es: "Reinó 57 días. Llamó a la Tercera Cruzada (Audita Tremendi) tras su elección.", 
      de: "Regierte 57 Tage. Rief sofort zum Dritten Kreuzzug auf (Audita Tremendi)." 
    } 
  },
  { 
    id: 'p174', 
    startYear: 1187, 
    endYear: 1191, 
    type: 'pope', 
    name: { en: "Clement III", fr: "Clément III", es: "Clemente III", de: "Clemens III." }, 
    description: { 
      en: "Organized the Third Crusade (Richard the Lionheart, Philip II, Barbarossa). Negotiated peace allowing him to return to Rome.", 
      fr: "Organisa la 3ème Croisade. Négocia la paix lui permettant de retourner à Rome.", 
      es: "Organizó la III Cruzada. Negoció la paz para volver a Roma.", 
      de: "Organisierte den Dritten Kreuzzug. Handelte Frieden aus, um nach Rom zurückzukehren." 
    } 
  },
  { 
    id: 'p175', 
    startYear: 1191, 
    endYear: 1198, 
    type: 'pope', 
    name: { en: "Celestine III", fr: "Célestin III", es: "Celestino III", de: "Coelestin III." }, 
    description: { 
      en: "Crowned Henry VI Emperor. Elected at age 85. Presided over the difficult period of Henry VI's expansion into Sicily.", 
      fr: "Couronna Henri VI. Élu à 85 ans. Période difficile de l'expansion d'Henri VI en Sicile.", 
      es: "Coronó a Enrique VI. Elegido a los 85 años. Periodo difícil por la expansión en Sicilia.", 
      de: "Krönte Heinrich VI. Mit 85 gewählt. Schwere Zeit der Expansion Heinrichs in Sizilien." 
    } 
  },
  { 
    id: 'p176', 
    startYear: 1198, 
    endYear: 1216, 
    type: 'pope', 
    name: { en: "Innocent III", fr: "Innocent III", es: "Inocencio III", de: "Innozenz III." }, 
    description: { 
      en: "Apex of Papal temporal power. Approved Franciscans and Dominicans. Convened the Fourth Lateran Council. Organized the 4th Crusade (which went rogue).", 
      fr: "Apogée du pouvoir papal. Approuva Franciscains et Dominicains. Latran IV. 4ème Croisade.", 
      es: "Apogeo del poder papal. Aprobó a Franciscanos y Dominicos. Letrán IV. IV Cruzada.", 
      de: "Höhepunkt päpstlicher Macht. Bestätigte Franziskaner und Dominikaner. Lateran IV. 4. Kreuzzug." 
    } 
  },
  { 
    id: 'p177', 
    startYear: 1216, 
    endYear: 1227, 
    type: 'pope', 
    name: { en: "Honorius III", fr: "Honorius III", es: "Honorio III", de: "Honorius III." }, 
    description: { 
      en: "Formally confirmed the Dominican and Franciscan Rules. Crowned Frederick II. Initiated the Fifth Crusade.", 
      fr: "Confirma les règles dominicaine et franciscaine. Couronna Frédéric II. 5ème Croisade.", 
      es: "Confirmó las reglas dominica y franciscana. Coronó a Federico II. V Cruzada.", 
      de: "Bestätigte Dominikaner- und Franziskanerregeln. Krönte Friedrich II. 5. Kreuzzug." 
    } 
  },
  { 
    id: 'p178', 
    startYear: 1227, 
    endYear: 1241, 
    type: 'pope', 
    name: { en: "Gregory IX", fr: "Grégoire IX", es: "Gregorio IX", de: "Gregor IX." }, 
    description: { 
      en: "Codified Canon Law (Liber Extra). Established the Papal Inquisition. Excommunicated Frederick II multiple times.", 
      fr: "Codifia le Droit Canon. Établit l'Inquisition papale. Excommunia Frédéric II plusieurs fois.", 
      es: "Codificó el Derecho Canónico. Estableció la Inquisición Papal. Excomulgó a Federico II.", 
      de: "Kodifizierte das Kirchenrecht. Gründete die päpstliche Inquisition. Exkommunizierte Friedrich II." 
    } 
  },
  { 
    id: 'p179', 
    startYear: 1241, 
    endYear: 1241, 
    type: 'pope', 
    name: { en: "Celestine IV", fr: "Célestin IV", es: "Celestino IV", de: "Coelestin IV." }, 
    description: { 
      en: "Reigned only 17 days. Died before consecration, likely due to the harsh conditions of the first conclave.", 
      fr: "Règne de 17 jours. Mourut avant consécration à cause des conditions du conclave.", 
      es: "Reinó 17 días. Murió antes de ser consagrado por las condiciones del cónclave.", 
      de: "Regierte 17 Tage. Starb vor der Weihe wegen harter Konklave-Bedingungen." 
    } 
  },
  { 
    id: 'p180', 
    startYear: 1243, 
    endYear: 1254, 
    type: 'pope', 
    name: { en: "Innocent IV", fr: "Innocent IV", es: "Inocencio IV", de: "Innozenz IV." }, 
    description: { 
      en: "Deposed Emperor Frederick II at the First Council of Lyon. Authorized the use of torture in the Inquisition (Ad extirpanda).", 
      fr: "Déposa Frédéric II au concile de Lyon I. Autorisa la torture dans l'Inquisition.", 
      es: "Depuso a Federico II en Lyon I. Autorizó la tortura en la Inquisición.", 
      de: "Setzte Friedrich II. in Lyon I ab. Genehmigte Folter in der Inquisition." 
    } 
  },
  { 
    id: 'p181', 
    startYear: 1254, 
    endYear: 1261, 
    type: 'pope', 
    name: { en: "Alexander IV", fr: "Alexandre IV", es: "Alejandro IV", de: "Alexander IV." }, 
    description: { 
      en: "Established the Inquisition in France. Attempted to unite the Greek and Latin churches. Patron of the Franciscans.", 
      fr: "Établit l'Inquisition en France. Tenta d'unir les églises grecque et latine.", 
      es: "Estableció la Inquisición en Francia. Intentó unir las iglesias griega y latina.", 
      de: "Führte die Inquisition in Frankreich ein. Versuchte Kirchenunion. Förderer der Franziskaner." 
    } 
  },
  { 
    id: 'p182', 
    startYear: 1261, 
    endYear: 1264, 
    type: 'pope', 
    name: { en: "Urban IV", fr: "Urbain IV", es: "Urbano IV", de: "Urban IV." }, 
    description: { 
      en: "Instituted the Feast of Corpus Christi after the Eucharistic Miracle of Bolsena. Never entered Rome during his papacy.", 
      fr: "Institua la Fête-Dieu après le miracle de Bolsena. N'entra jamais à Rome.", 
      es: "Instituyó el Corpus Christi tras el milagro de Bolsena. Nunca entró en Roma.", 
      de: "Führte das Fronleichnamsfest ein (Wunder von Bolsena). Betrat Rom nie als Papst." 
    } 
  },
  { 
    id: 'p183', 
    startYear: 1265, 
    endYear: 1268, 
    type: 'pope', 
    name: { en: "Clement IV", fr: "Clément IV", es: "Clemente IV", de: "Clemens IV." }, 
    description: { 
      en: "Patron of Thomas Aquinas and Roger Bacon. Oversaw the execution of Conradin, the last Hohenstaufen.", 
      fr: "Mécène de Thomas d'Aquin et Roger Bacon. Vit l'exécution de Conradin.", 
      es: "Mecenas de Tomás de Aquino y Roger Bacon. Supervisó la ejecución de Conradino.", 
      de: "Förderer von Thomas von Aquin und Roger Bacon. Überwachte die Hinrichtung Konradins." 
    } 
  },
  { 
    id: 'p184', 
    startYear: 1271, 
    endYear: 1276, 
    type: 'pope', 
    name: { en: "Bl. Gregory X", fr: "Bx Grégoire X", es: "Bto. Gregorio X", de: "Sel. Gregor X." }, 
    description: { 
      en: "Elected after a 3-year interregnum. Convened the Second Council of Lyon to unite with the Greeks and reform conclave rules.", 
      fr: "Convoqua Lyon II pour l'union avec les Grecs et réforma les règles du conclave.", 
      es: "Convocó Lyon II para la unión con los griegos y reformó las reglas del cónclave.", 
      de: "Rief Lyon II zur Union mit den Griechen ein und reformierte die Konklave-Regeln." 
    } 
  },
  { 
    id: 'p185', 
    startYear: 1276, 
    endYear: 1276, 
    type: 'pope', 
    name: { en: "Bl. Innocent V", fr: "Bx Innocent V", es: "Bto. Inocencio V", de: "Sel. Innozenz V." }, 
    description: { 
      en: "First Dominican Pope. Reigned only 5 months. Worked for peace between Guelphs and Ghibellines.", 
      fr: "Premier pape dominicain. Règne de 5 mois. Œuvra pour la paix Guelfes/Gibelins.", 
      es: "Primer Papa dominico. Reinó 5 meses. Trabajó por la paz entre güelfos y gibelinos.", 
      de: "Erster Dominikanerpapst. Regierte 5 Monate. Wirkte für Frieden zwischen Welfen und Ghibellinen." 
    } 
  },
  { 
    id: 'p186', 
    startYear: 1276, 
    endYear: 1276, 
    type: 'pope', 
    name: { en: "Adrian V", fr: "Adrien V", es: "Adriano V", de: "Hadrian V." }, 
    description: { 
      en: "Reigned only 38 days. Died before being ordained a priest or consecrated bishop. Dante places him in Purgatory.", 
      fr: "Règne de 38 jours. Mourut avant d'être prêtre. Dante le place au Purgatoire.", 
      es: "Reinó 38 días. Murió antes de ser sacerdote. Dante lo sitúa en el Purgatorio.", 
      de: "Regierte 38 Tage. Starb vor der Priesterweihe. Dante platziert ihn im Fegefeuer." 
    } 
  },
  { 
    id: 'p187', 
    startYear: 1276, 
    endYear: 1277, 
    type: 'pope', 
    name: { en: "John XXI", fr: "Jean XXI", es: "Juan XXI", de: "Johannes XXI." }, 
    description: { 
      en: "Only Portuguese Pope. Renowned physician and philosopher. Died when the roof of his study collapsed on him.", 
      fr: "Seul pape portugais. Médecin et philosophe. Mourut écrasé par le toit de son bureau.", 
      es: "Único Papa portugués. Médico y filósofo. Murió al colapsar el techo de su estudio.", 
      de: "Einziger portugiesischer Papst. Arzt und Philosoph. Starb durch eingestürztes Dach." 
    } 
  },
  { 
    id: 'p188', 
    startYear: 1277, 
    endYear: 1280, 
    type: 'pope', 
    name: { en: "Nicholas III", fr: "Nicolas III", es: "Nicolás III", de: "Nikolaus III." }, 
    description: { 
      en: "Orsini family. Planned a re-organization of Italy. Dante condemned him to Hell for simony.", 
      fr: "Famille Orsini. Dante le condamna en Enfer pour simonie.", 
      es: "Familia Orsini. Dante lo condenó al Infierno por simonía.", 
      de: "Familie Orsini. Dante verdammte ihn wegen Simonie in die Hölle." 
    } 
  },
  { 
    id: 'p189', 
    startYear: 1281, 
    endYear: 1285, 
    type: 'pope', 
    name: { en: "Martin IV", fr: "Martin IV", es: "Martín IV", de: "Martin IV." }, 
    description: { 
      en: "French. Strongly supported Charles of Anjou. Witnessed the Sicilian Vespers rebellion against French rule.", 
      fr: "Français. Soutint Charles d'Anjou. Témoin des Vêpres siciliennes.", 
      es: "Francés. Apoyó a Carlos de Anjou. Testigo de las Vísperas Sicilianas.", 
      de: "Franzose. Unterstützte Karl von Anjou. Zeuge der Sizilianischen Vesper." 
    } 
  },
  { 
    id: 'p190', 
    startYear: 1285, 
    endYear: 1287, 
    type: 'pope', 
    name: { en: "Honorius IV", fr: "Honorius IV", es: "Honorio IV", de: "Honorius IV." }, 
    description: { 
      en: "Savelli family. Promoted the study of oriental languages at the University of Paris for missions.", 
      fr: "Famille Savelli. Promut l'étude des langues orientales à Paris pour les missions.", 
      es: "Familia Savelli. Promovió el estudio de lenguas orientales en París para misiones.", 
      de: "Familie Savelli. Förderte das Studium orientalischer Sprachen in Paris." 
    } 
  },
  { 
    id: 'p191', 
    startYear: 1288, 
    endYear: 1292, 
    type: 'pope', 
    name: { en: "Nicholas IV", fr: "Nicolas IV", es: "Nicolás IV", de: "Nikolaus IV." }, 
    description: { 
      en: "First Franciscan Pope. Sent missionaries to China (Giovanni da Montecorvino). Commissioned mosaics in Santa Maria Maggiore.", 
      fr: "Premier pape franciscain. Envoya des missionnaires en Chine. Mosaïques de Ste-Marie-Majeure.", 
      es: "Primer Papa franciscano. Envió misioneros a China. Mosaicos de Santa María la Mayor.", 
      de: "Erster Franziskanerpapst. Sandte Missionare nach China. Mosaiken in Santa Maria Maggiore." 
    } 
  },
  { 
    id: 'p192', 
    startYear: 1294, 
    endYear: 1294, 
    type: 'pope', 
    name: { en: "St. Celestine V", fr: "Saint Célestin V", es: "San Celestino V", de: "Hl. Coelestin V." }, 
    description: { 
      en: "The Hermit Pope. Elected to end a 2-year deadlock. Resigned after 5 months to return to his hermitage (The Great Refusal).", 
      fr: "Le pape ermite. Démissionna après 5 mois pour retourner à son ermitage (Le Grand Refus).", 
      es: "El Papa ermitaño. Renunció tras 5 meses para volver a su ermita (El Gran Rechazo).", 
      de: "Der Eremitenpapst. Trat nach 5 Monaten zurück (Der große Verzicht)." 
    } 
  },
  { 
    id: 'p193', 
    startYear: 1294, 
    endYear: 1303, 
    type: 'pope', 
    name: { en: "Boniface VIII", fr: "Boniface VIII", es: "Bonifacio VIII", de: "Bonifatius VIII." }, 
    description: { 
      en: "Issued 'Unam Sanctam' asserting papal supremacy. Clashed violently with Philip IV of France. Humiliated at Anagni ('Slap of Anagni').", 
      fr: "Publia 'Unam Sanctam'. Conflit violent avec Philippe le Bel. Humilié à l'attentat d'Anagni.", 
      es: "Emitió 'Unam Sanctam'. Chocó con Felipe IV de Francia. Humillado en el atentado de Anagni.", 
      de: "Erließ 'Unam Sanctam'. Konflikt mit Philipp IV. Attentat von Anagni." 
    } 
  },
  { 
    id: 'p194', 
    startYear: 1303, 
    endYear: 1304, 
    type: 'pope', 
    name: { en: "Bl. Benedict XI", fr: "Bx Benoît XI", es: "Bto. Benedicto XI", de: "Sel. Benedikt XI." }, 
    description: { 
      en: "Dominican. Tried to heal the rift with France but refused to pardon the perpetrators of the Anagni outrage. Died suddenly.", 
      fr: "Dominicain. Tenta d'apaiser la France mais refusa de pardonner Anagni. Mort subite.", 
      es: "Dominico. Intentó sanar la ruptura con Francia pero no perdonó Anagni. Muerte súbita.", 
      de: "Dominikaner. Versuchte Versöhnung mit Frankreich, verurteilte aber Anagni. Starb plötzlich." 
    } 
  },
  { 
    id: 'p195', 
    startYear: 1305, 
    endYear: 1314, 
    type: 'pope', 
    name: { en: "Clement V", fr: "Clément V", es: "Clemente V", de: "Clemens V." }, 
    description: { 
      en: "Moved the Papacy to Avignon (Babylonian Captivity). Suppressed the Knights Templar at the Council of Vienne under pressure from France.", 
      fr: "Déplaça la papauté à Avignon. Supprima les Templiers au Concile de Vienne sous pression française.", 
      es: "Trasladó el papado a Aviñón. Suprimió a los Templarios en el Concilio de Vienne.", 
      de: "Verlegte das Papsttum nach Avignon. Löste auf Druck Frankreichs die Templer auf." 
    } 
  },
  { 
    id: 'p196', 
    startYear: 1316, 
    endYear: 1334, 
    type: 'pope', 
    name: { en: "John XXII", fr: "Jean XXII", es: "Juan XXII", de: "Johannes XXII." }, 
    description: { 
      en: "Centralized Avignon administration. Condemned the 'Spiritual Franciscans' (poverty controversy). Proposed controversial view on Beatific Vision.", 
      fr: "Centralisa l'administration d'Avignon. Condamna les Spirituels franciscains. Vue controversée sur la Vision Béatifique.", 
      es: "Centralizó Aviñón. Condenó a los Franciscanos Espirituales. Visión controvertida sobre la Visión Beatífica.", 
      de: "Zentralisierte Avignon. Verurteilte die Franziskaner-Spiritualen. Umstrittene Lehre zur Schau Gottes." 
    } 
  },
  { 
    id: 'p197', 
    startYear: 1334, 
    endYear: 1342, 
    type: 'pope', 
    name: { en: "Benedict XII", fr: "Benoît XII", es: "Benedicto XII", de: "Benedikt XII." }, 
    description: { 
      en: "Cistercian monk. Built the first Papal Palace in Avignon. Defined the doctrine that souls see God immediately after death (Benedictus Deus).", 
      fr: "Cistercien. Construisit le Palais des Papes. Définit que les âmes voient Dieu immédiatement après la mort.", 
      es: "Cisterciense. Construyó el Palacio Papal. Definió que las almas ven a Dios inmediatamente tras morir.", 
      de: "Zisterzienser. Baute den Papstpalast. Definierte die unmittelbare Gottesschau nach dem Tod." 
    } 
  },
  { 
    id: 'p198', 
    startYear: 1342, 
    endYear: 1352, 
    type: 'pope', 
    name: { en: "Clement VI", fr: "Clément VI", es: "Clemente VI", de: "Clemens VI." }, 
    description: { 
      en: "Reigned during the Black Death. Purchased the sovereignty of Avignon. Lived in great splendor ('My predecessors did not know how to be Pope').", 
      fr: "Règne durant la Peste Noire. Acheta Avignon. Vécut dans une grande splendeur.", 
      es: "Reinó durante la Peste Negra. Compró Aviñón. Vivió con gran esplendor.", 
      de: "Regierte während der Pest. Kaufte Avignon. Lebte in großem Prunk." 
    } 
  },
  { 
    id: 'p199', 
    startYear: 1352, 
    endYear: 1362, 
    type: 'pope', 
    name: { en: "Innocent VI", fr: "Innocent VI", es: "Inocencio VI", de: "Innozenz VI." }, 
    description: { 
      en: "Reformer who reduced the luxury of the Avignon court. Sent Albornoz to restore order in the Papal States.", 
      fr: "Réformateur, réduisit le luxe d'Avignon. Envoya Albornoz restaurer l'ordre en Italie.", 
      es: "Reformador, redujo el lujo de Aviñón. Envió a Albornoz a restaurar el orden en Italia.", 
      de: "Reformer, reduzierte den Luxus in Avignon. Sandte Albornoz zur Ordnungswiederherstellung." 
    } 
  },
  { 
    id: 'p200', 
    startYear: 1362, 
    endYear: 1370, 
    type: 'pope', 
    name: { en: "Bl. Urban V", fr: "Bx Urbain V", es: "Bto. Urbano V", de: "Sel. Urban V." }, 
    description: { 
      en: "Benedictine. Briefly returned the papacy to Rome (1367-1370) but was forced back to Avignon by instability.", 
      fr: "Bénédictin. Ramena brièvement la papauté à Rome (1367-1370) mais dut retourner à Avignon.", 
      es: "Benedictino. Devolvió brevemente el papado a Roma pero regresó a Aviñón por inestabilidad.", 
      de: "Benediktiner. Kehrte kurz nach Rom zurück (1367), musste aber wegen Unruhen zurück nach Avignon." 
    } 
  },
  { 
    id: 'p201', 
    startYear: 1370, 
    endYear: 1378, 
    type: 'pope', 
    name: { en: "Gregory XI", fr: "Grégoire XI", es: "Gregorio XI", de: "Gregor XI." }, 
    description: { 
      en: "Influenced by St. Catherine of Siena, he returned the Papacy from Avignon to Rome (1377), ending the Babylonian Captivity.", 
      fr: "Influencé par Ste Catherine de Sienne, il ramena la papauté d'Avignon à Rome (1377), finissant la Captivité.", 
      es: "Influido por Santa Catalina de Siena, devolvió el papado a Roma (1377), terminando el Cautiverio.", 
      de: "Beeinflusst von Katharina von Siena, brachte er das Papsttum nach Rom zurück (1377)." 
    } 
  },
  { 
    id: 'p202', 
    startYear: 1378, 
    endYear: 1389, 
    type: 'pope', 
    name: { en: "Urban VI", fr: "Urbain VI", es: "Urbano VI", de: "Urban VI." }, 
    description: { 
      en: "His election sparked the Great Western Schism. A reformer whose harsh temper drove cardinals to elect an antipope (Clement VII).", 
      fr: "Son élection déclencha le Grand Schisme. Réformateur sévère, il poussa les cardinaux à élire un antipape.", 
      es: "Su elección inició el Gran Cisma. Reformador severo, empujó a los cardenales a elegir un antipapa.", 
      de: "Seine Wahl löste das Abendländische Schisma aus. Strenger Reformer, trieb Kardinäle zum Gegenpapst." 
    } 
  },
  { 
    id: 'p203', 
    startYear: 1389, 
    endYear: 1404, 
    type: 'pope', 
    name: { en: "Boniface IX", fr: "Boniface IX", es: "Bonifacio IX", de: "Bonifatius IX." }, 
    description: { 
      en: "Reigned during the Schism (Rome line). Restored papal authority in Rome but accused of selling offices to fund wars.", 
      fr: "Pape de Rome durant le Schisme. Restaura l'autorité à Rome mais accusé de vendre des charges.", 
      es: "Papa de Roma durante el Cisma. Restauró la autoridad en Roma pero acusado de vender cargos.", 
      de: "Papst der römischen Linie. Stellte Autorität wieder her, aber wegen Ämterkauf angeklagt." 
    } 
  },
  { 
    id: 'p204', 
    startYear: 1404, 
    endYear: 1406, 
    type: 'pope', 
    name: { en: "Innocent VII", fr: "Innocent VII", es: "Inocencio VII", de: "Innozenz VII." }, 
    description: { 
      en: "Brief reign marked by riots in Rome. Planned a university in Rome which later became 'La Sapienza'.", 
      fr: "Règne bref marqué par des émeutes. Planifia l'université 'La Sapienza' à Rome.", 
      es: "Reinado breve con disturbios. Planeó la universidad 'La Sapienza' en Roma.", 
      de: "Kurze Amtszeit mit Unruhen. Plante die Universität 'La Sapienza' in Rom." 
    } 
  },
  { 
    id: 'p205', 
    startYear: 1406, 
    endYear: 1415, 
    type: 'pope', 
    name: { en: "Gregory XII", fr: "Grégoire XII", es: "Gregorio XII", de: "Gregor XII." }, 
    description: { 
      en: "Noble resignation. He accepted the Council of Constance and abdicated to allow the Church to elect a single Pope, ending the Great Schism.", 
      fr: "Démission noble. Abdiqua au Concile de Constance pour permettre d'élire un pape unique et finir le Schisme.", 
      es: "Renuncia noble. Abdicó en el Concilio de Constanza para permitir elegir un Papa único y terminar el Cisma.", 
      de: "Edler Rücktritt. Dankte auf dem Konzil von Konstanz ab, um das Schisma zu beenden." 
    } 
  },
  { 
    id: 'p206', 
    startYear: 1417, 
    endYear: 1431, 
    type: 'pope', 
    name: { en: "Martin V", fr: "Martin V", es: "Martín V", de: "Martin V." }, 
    description: { 
      en: "Elected at Constance, ending the Western Schism. Returned to a ruined Rome and began its reconstruction.", 
      fr: "Élu à Constance, fin du Schisme. Retourna dans une Rome en ruines et commença la reconstruction.", 
      es: "Elegido en Constanza, fin del Cisma. Regresó a una Roma en ruinas e inició la reconstrucción.", 
      de: "In Konstanz gewählt, Ende des Schismas. Kehrte in das ruinierte Rom zurück und begann den Wiederaufbau." 
    } 
  },
  { 
    id: 'p207', 
    startYear: 1431, 
    endYear: 1447, 
    type: 'pope', 
    name: { en: "Eugene IV", fr: "Eugène IV", es: "Eugenio IV", de: "Eugen IV." }, 
    description: { 
      en: "Presided over the Council of Florence, attempting union with the East. Fought against the Council of Basel's conciliarism.", 
      fr: "Présida le Concile de Florence (union avec l'Orient). Lutta contre le conciliarisme de Bâle.", 
      es: "Presidió el Concilio de Florencia (unión con Oriente). Luchó contra el conciliarismo de Basilea.", 
      de: "Leitete das Konzil von Florenz (Union mit dem Osten). Kämpfte gegen den Konziliarismus von Basel." 
    } 
  },
  { 
    id: 'p208', 
    startYear: 1447, 
    endYear: 1455, 
    type: 'pope', 
    name: { en: "Nicholas V", fr: "Nicolas V", es: "Nicolás V", de: "Nikolaus V." }, 
    description: { 
      en: "First Renaissance Pope. Founded the Vatican Library. Rebuilt Rome. Fall of Constantinople (1453) darkened his final years.", 
      fr: "Premier pape de la Renaissance. Fonda la Bibliothèque vaticane. Chute de Constantinople (1453).", 
      es: "Primer Papa renacentista. Fundó la Biblioteca Vaticana. Caída de Constantinopla (1453).", 
      de: "Erster Renaissancepapst. Gründete die Vatikanbibliothek. Fall Konstantinopels (1453)." 
    } 
  },
  { 
    id: 'p209', 
    startYear: 1455, 
    endYear: 1458, 
    type: 'pope', 
    name: { en: "Callixtus III", fr: "Calixte III", es: "Calixto III", de: "Calixtus III." }, 
    description: { 
      en: "Borgia family. Ordered the revision of Joan of Arc's trial, declaring her innocent. Promoted crusade against Turks.", 
      fr: "Famille Borgia. Réhabilita Jeanne d'Arc. Promut la croisade contre les Turcs.", 
      es: "Familia Borgia. Rehabilitó a Juana de Arco. Promovió la cruzada contra los turcos.", 
      de: "Borgia-Familie. Rehabilitierte Jeanne d'Arc. Förderte Kreuzzug gegen Türken." 
    } 
  },
  { 
    id: 'p210', 
    startYear: 1458, 
    endYear: 1464, 
    type: 'pope', 
    name: { en: "Pius II", fr: "Pie II", es: "Pío II", de: "Pius II." }, 
    description: { 
      en: "Aeneas Silvius Piccolomini. A great humanist and writer. Died at Ancona waiting for a crusade fleet that never came.", 
      fr: "Aeneas Silvius. Grand humaniste. Mourut à Ancône en attendant la flotte des croisés.", 
      es: "Eneas Silvio. Gran humanista. Murió en Ancona esperando una flota cruzada.", 
      de: "Aeneas Silvius. Großer Humanist. Starb in Ancona beim Warten auf die Kreuzfahrerflotte." 
    } 
  },
  { 
    id: 'p211', 
    startYear: 1464, 
    endYear: 1471, 
    type: 'pope', 
    name: { en: "Paul II", fr: "Paul II", es: "Pablo II", de: "Paul II." }, 
    description: { 
      en: "Built the Palazzo Venezia. Introduced the carnival to Rome. Suspicious of humanist academies.", 
      fr: "Bâtit le Palazzo Venezia. Introduisit le carnaval. Méfiant envers les humanistes.", 
      es: "Construyó el Palazzo Venezia. Introdujo el carnaval. Desconfiado de los humanistas.", 
      de: "Erbaut Palazzo Venezia. Führte den Karneval ein. Misstrauisch gegenüber Humanisten." 
    } 
  },
  { 
    id: 'p212', 
    startYear: 1471, 
    endYear: 1484, 
    type: 'pope', 
    name: { en: "Sixtus IV", fr: "Sixte IV", es: "Sixto IV", de: "Sixtus IV." }, 
    description: { 
      en: "Built the Sistine Chapel. promoted the Immaculate Conception. tarnished by the Pazzi Conspiracy and nepotism.", 
      fr: "Construisit la Chapelle Sixtine. Pazzi Conspiracy. Favorisa l'Immaculée Conception.", 
      es: "Construyó la Capilla Sixtina. Conspiración Pazzi. Promovió la Inmaculada Concepción.", 
      de: "Erbaut die Sixtinische Kapelle. Pazzi-Verschwörung. Förderte Unbefleckte Empfängnis." 
    } 
  },
  { 
    id: 'p213', 
    startYear: 1484, 
    endYear: 1492, 
    type: 'pope', 
    name: { en: "Innocent VIII", fr: "Innocent VIII", es: "Inocencio VIII", de: "Innozenz VIII." }, 
    description: { 
      en: "Issued the bull against witchcraft 'Summis desiderantes'. Recognized the unification of Spain under Ferdinand and Isabella.", 
      fr: "Bulle contre la sorcellerie. Reconnut l'unification de l'Espagne (Rois Catholiques).", 
      es: "Bula contra brujería. Reconoció la unificación de España (Reyes Católicos).", 
      de: "Bulle gegen Hexerei. Erkannte spanische Einigung unter Katholischen Königen an." 
    } 
  },
  { 
    id: 'p214', 
    startYear: 1492, 
    endYear: 1503, 
    type: 'pope', 
    name: { en: "Alexander VI", fr: "Alexandre VI", es: "Alejandro VI", de: "Alexander VI." }, 
    description: { 
      en: "Rodrigo Borgia. Symbol of papal corruption but an able administrator. Divided the New World between Spain and Portugal (Treaty of Tordesillas).", 
      fr: "Rodrigo Borgia. Symbole de corruption mais administrateur habile. Divisa le Nouveau Monde (Tordesillas).", 
      es: "Rodrigo Borgia. Símbolo de corrupción pero hábil. Dividió el Nuevo Mundo (Tordesillas).", 
      de: "Rodrigo Borgia. Symbol der Korruption, aber fähig. Teilte die Neue Welt (Tordesillas)." 
    } 
  },
  { 
    id: 'p215', 
    startYear: 1503, 
    endYear: 1503, 
    type: 'pope', 
    name: { en: "Pius III", fr: "Pie III", es: "Pío III", de: "Pius III." }, 
    description: { 
      en: "Reigned only 26 days. Nephew of Pius II. Patron of the arts.", 
      fr: "Règne de 26 jours. Neveu de Pie II. Mécène.", 
      es: "Reinó 26 días. Sobrino de Pío II. Mecenas.", 
      de: "Regierte 26 Tage. Neffe von Pius II. Kunstmäzen." 
    } 
  },
  { 
    id: 'p216', 
    startYear: 1503, 
    endYear: 1513, 
    type: 'pope', 
    name: { en: "Julius II", fr: "Jules II", es: "Julio II", de: "Julius II." }, 
    description: { 
      en: "The Warrior Pope. Commissioned Michelangelo for the Sistine Chapel ceiling and Raphael for the Stanze. Began the new St. Peter's Basilica.", 
      fr: "Le Pape Guerrier. Commandita Michel-Ange (Sixtine) et Raphaël. Commença la nouvelle Saint-Pierre.", 
      es: "El Papa Guerrero. Encargó a Miguel Ángel (Sixtina) y Rafael. Inició la nueva San Pedro.", 
      de: "Der Kriegerpapst. Beauftragte Michelangelo (Sixtina) und Raffael. Begann neuen Petersdom." 
    } 
  },
  { 
    id: 'p217', 
    startYear: 1513, 
    endYear: 1521, 
    type: 'pope', 
    name: { en: "Leo X", fr: "Léon X", es: "León X", de: "Leo X." }, 
    description: { 
      en: "Medici Pope. 'God has given us the papacy, let us enjoy it'. Luther posted his 95 Theses (1517) during his reign. Excommunicated Luther.", 
      fr: "Pape Médicis. Luther afficha ses 95 Thèses (1517) sous son règne. Excommunia Luther.", 
      es: "Papa Médici. Lutero publicó sus 95 Tesis (1517) bajo su reinado. Excomulgó a Lutero.", 
      de: "Medici-Papst. Luther veröffentlichte 95 Thesen (1517). Exkommunizierte Luther." 
    } 
  },
  { 
    id: 'p218', 
    startYear: 1522, 
    endYear: 1523, 
    type: 'pope', 
    name: { en: "Adrian VI", fr: "Adrien VI", es: "Adriano VI", de: "Hadrian VI." }, 
    description: { 
      en: "Last non-Italian Pope until John Paul II (1978). Dutch. Attempted reform but was resented by the Romans.", 
      fr: "Dernier pape non-italien jusqu'à Jean-Paul II. Hollandais. Tenta des réformes impopulaires.", 
      es: "Último Papa no italiano hasta Juan Pablo II. Holandés. Intentó reformas impopulares.", 
      de: "Letzter nicht-italienischer Papst bis Johannes Paul II. Niederländer. Versuchte Reformen." 
    } 
  },
  { 
    id: 'p219', 
    startYear: 1523, 
    endYear: 1534, 
    type: 'pope', 
    name: { en: "Clement VII", fr: "Clément VII", es: "Clemente VII", de: "Clemens VII." }, 
    description: { 
      en: "Medici. Refused Henry VIII's divorce, leading to the English Schism. Witnessed the Sack of Rome (1527) by imperial troops.", 
      fr: "Médicis. Refusa le divorce d'Henri VIII (Schisme anglican). Témoin du Sac de Rome (1527).", 
      es: "Médici. Rechazó divorcio de Enrique VIII (Cisma inglés). Testigo del Saqueo de Roma (1527).", 
      de: "Medici. Verweigerte Heinrich VIII. die Scheidung (Anglikanisches Schisma). Sacco di Roma (1527)." 
    } 
  },
  { 
    id: 'p220', 
    startYear: 1534, 
    endYear: 1549, 
    type: 'pope', 
    name: { en: "Paul III", fr: "Paul III", es: "Pablo III", de: "Paul III." }, 
    description: { 
      en: "Convened the Council of Trent (1545). Approved the Jesuit Order. Patron of Michelangelo (Last Judgment).", 
      fr: "Convoqua le Concile de Trente (1545). Approuva les Jésuites. Mécène de Michel-Ange.", 
      es: "Convocó el Concilio de Trento (1545). Aprobó a los Jesuitas. Mecenas de Miguel Ángel.", 
      de: "Rief Konzil von Trient ein (1545). Bestätigte Jesuitenorden. Förderer Michelangelos." 
    } 
  },
  { 
    id: 'p221', 
    startYear: 1550, 
    endYear: 1555, 
    type: 'pope', 
    name: { en: "Julius III", fr: "Jules III", es: "Julio III", de: "Julius III." }, 
    description: { 
      en: "Reconvened the Council of Trent. Patron of Palestrina (composer).", 
      fr: "Rouvrit le Concile de Trente. Mécène du compositeur Palestrina.", 
      es: "Reabrió el Concilio de Trento. Mecenas del compositor Palestrina.", 
      de: "Führte das Konzil von Trient fort. Förderer von Palestrina." 
    } 
  },
  { 
    id: 'p222', 
    startYear: 1555, 
    endYear: 1555, 
    type: 'pope', 
    name: { en: "Marcellus II", fr: "Marcel II", es: "Marcelo II", de: "Marcellus II." }, 
    description: { 
      en: "Reigned 22 days. Palestrina's 'Missa Papae Marcelli' is named after him.", 
      fr: "Règne de 22 jours. La 'Missa Papae Marcelli' de Palestrina porte son nom.", 
      es: "Reinó 22 días. La 'Missa Papae Marcelli' de Palestrina lleva su nombre.", 
      de: "Regierte 22 Tage. Palestrinas 'Missa Papae Marcelli' ist nach ihm benannt." 
    } 
  },
  { 
    id: 'p223', 
    startYear: 1555, 
    endYear: 1559, 
    type: 'pope', 
    name: { en: "Paul IV", fr: "Paul IV", es: "Pablo IV", de: "Paul IV." }, 
    description: { 
      en: "Rigid reformer. Established the Index of Prohibited Books. Forced Jews in Rome into a ghetto.", 
      fr: "Réformateur rigide. Établit l'Index des livres interdits. Créa le ghetto de Rome.", 
      es: "Reformador rígido. Estableció el Índice de Libros Prohibidos. Creó el gueto de Roma.", 
      de: "Strenger Reformer. Führte den Index verbotener Bücher ein. Errichtete das römische Ghetto." 
    } 
  },
  { 
    id: 'p224', 
    startYear: 1559, 
    endYear: 1565, 
    type: 'pope', 
    name: { en: "Pius IV", fr: "Pie IV", es: "Pío IV", de: "Pius IV." }, 
    description: { 
      en: "Concluded the Council of Trent. Uncle of St. Charles Borromeo.", 
      fr: "Conclut le Concile de Trente. Oncle de Saint Charles Borromée.", 
      es: "Concluyó el Concilio de Trento. Tío de San Carlos Borromeo.", 
      de: "Schloss das Konzil von Trient ab. Onkel des Hl. Karl Borromäus." 
    } 
  },
  { 
    id: 'p225', 
    startYear: 1566, 
    endYear: 1572, 
    type: 'pope', 
    name: { en: "St. Pius V", fr: "Saint Pie V", es: "San Pío V", de: "Hl. Pius V." }, 
    description: { 
      en: "Implemented Trent. Standardized the Mass (Tridentine Mass). Organized the Holy League which won the Battle of Lepanto (1571).", 
      fr: "Appliqua Trente. Standardisa la Messe (Tridentine). Organisa la Sainte Ligue (Lépante).", 
      es: "Aplicó Trento. Estandarizó la Misa (Tridentina). Organizó la Liga Santa (Lepanto).", 
      de: "Setzte Trient um. Standardisierte die Messe (Tridentinisch). Organisierte die Heilige Liga (Lepanto)." 
    } 
  },
  { 
    id: 'p226', 
    startYear: 1572, 
    endYear: 1585, 
    type: 'pope', 
    name: { en: "Gregory XIII", fr: "Grégoire XIII", es: "Gregorio XIII", de: "Gregor XIII." }, 
    description: { 
      en: "Reformed the calendar (Gregorian Calendar). Founded many seminaries and the Gregorian University.", 
      fr: "Réforma le calendrier (Grégorien). Fonda de nombreux séminaires et l'Université Grégorienne.", 
      es: "Reformó el calendario (Gregoriano). Fundó muchos seminarios y la Universidad Gregoriana.", 
      de: "Reformierte den Kalender (Gregorianisch). Gründete viele Seminare und die Gregoriana." 
    } 
  },
  { 
    id: 'p227', 
    startYear: 1585, 
    endYear: 1590, 
    type: 'pope', 
    name: { en: "Sixtus V", fr: "Sixte V", es: "Sixto V", de: "Sixtus V." }, 
    description: { 
      en: "Reorganized the Roman Curia and the city of Rome (obelisks, streets). Harsh against bandits.", 
      fr: "Réorganisa la Curie et la ville de Rome (obélisques). Sévère contre les bandits.", 
      es: "Reorganizó la Curia y la ciudad de Roma (obeliscos). Severo contra bandidos.", 
      de: "Reorganisierte die Kurie und Rom (Obelisken). Streng gegen Banditen." 
    } 
  },
  { 
    id: 'p228', 
    startYear: 1590, 
    endYear: 1590, 
    type: 'pope', 
    name: { en: "Urban VII", fr: "Urbain VII", es: "Urbano VII", de: "Urban VII." }, 
    description: { 
      en: "Shortest reigning Pope (12 days). Died of malaria before coronation.", 
      fr: "Règne le plus court (12 jours). Mort de malaria avant couronnement.", 
      es: "Reinado más corto (12 días). Murió de malaria antes de coronación.", 
      de: "Kürzestes Pontifikat (12 Tage). Starb vor Krönung an Malaria." 
    } 
  },
  { 
    id: 'p229', 
    startYear: 1590, 
    endYear: 1591, 
    type: 'pope', 
    name: { en: "Gregory XIV", fr: "Grégoire XIV", es: "Gregorio XIV", de: "Gregor XIV." }, 
    description: { 
      en: "Excommunicated Henry IV of France. Reigned only 10 months.", 
      fr: "Excommunia Henri IV de France. Règne de 10 mois.", 
      es: "Excomulgó a Enrique IV de Francia. Reinó 10 meses.", 
      de: "Exkommunizierte Heinrich IV. von Frankreich. Regierte 10 Monate." 
    } 
  },
  { 
    id: 'p230', 
    startYear: 1591, 
    endYear: 1591, 
    type: 'pope', 
    name: { en: "Innocent IX", fr: "Innocent IX", es: "Inocencio IX", de: "Innozenz IX." }, 
    description: { 
      en: "Reigned 2 months. Administrator skilled in canon law.", 
      fr: "Règne de 2 mois. Administrateur expert en droit canon.", 
      es: "Reinó 2 meses. Administrador experto en derecho canónico.", 
      de: "Regierte 2 Monate. Fachmann für Kirchenrecht." 
    } 
  },
  { 
    id: 'p231', 
    startYear: 1592, 
    endYear: 1605, 
    type: 'pope', 
    name: { en: "Clement VIII", fr: "Clément VIII", es: "Clemente VIII", de: "Clemens VIII." }, 
    description: { 
      en: "Absolved Henry IV of France. Presided over the Jubilee of 1600. Allegedly blessed coffee to make it a Christian drink.", 
      fr: "Absolut Henri IV. Jubilé de 1600. Aurait béni le café pour en faire une boisson chrétienne.", 
      es: "Absolvió a Enrique IV. Jubileo de 1600. Se dice que bautizó el café.", 
      de: "Absolvierte Heinrich IV. Jubeljahr 1600. Soll Kaffee gesegnet haben." 
    } 
  },
  { 
    id: 'p232', 
    startYear: 1605, 
    endYear: 1605, 
    type: 'pope', 
    name: { en: "Leo XI", fr: "Léon XI", es: "León XI", de: "Leo XI." }, 
    description: { 
      en: "Reigned 26 days. Medici family.", 
      fr: "Règne de 26 jours. Famille Médicis.", 
      es: "Reinó 26 días. Familia Médici.", 
      de: "Regierte 26 Tage. Familie Medici." 
    } 
  },
  { 
    id: 'p233', 
    startYear: 1605, 
    endYear: 1621, 
    type: 'pope', 
    name: { en: "Paul V", fr: "Paul V", es: "Pablo V", de: "Paul V." }, 
    description: { 
      en: "Completed the facade of St. Peter's Basilica. Censured Galileo Galilei (first trial) for heliocentrism.", 
      fr: "Acheva la façade de Saint-Pierre. Censura Galilée (premier procès).", 
      es: "Completó la fachada de San Pedro. Censuró a Galileo (primer juicio).", 
      de: "Vollendete die Fassade von St. Peter. Zensierte Galileo (erster Prozess)." 
    } 
  },
  { 
    id: 'p234', 
    startYear: 1621, 
    endYear: 1623, 
    type: 'pope', 
    name: { en: "Gregory XV", fr: "Grégoire XV", es: "Gregorio XV", de: "Gregor XV." }, 
    description: { 
      en: "Founded the Congregation for the Propagation of the Faith (Propaganda Fide) to supervise missions.", 
      fr: "Fonda la Congrégation pour la Propagation de la Foi (Missions).", 
      es: "Fundó la Congregación para la Propagación de la Fe (Misiones).", 
      de: "Gründete die Propaganda Fide (Missionskongregation)." 
    } 
  },
  { 
    id: 'p235', 
    startYear: 1623, 
    endYear: 1644, 
    type: 'pope', 
    name: { en: "Urban VIII", fr: "Urbain VIII", es: "Urbano VIII", de: "Urban VIII." }, 
    description: { 
      en: "Barberini Pope. Great patron of Bernini (St. Peter's Baldachin). Presided over the final trial of Galileo.", 
      fr: "Pape Barberini. Mécène du Bernin (Baldaquin). Procès final de Galilée.", 
      es: "Papa Barberini. Mecenas de Bernini. Juicio final de Galileo.", 
      de: "Barberini-Papst. Förderer Berninis. Endgültiger Prozess gegen Galileo." 
    } 
  },
  { 
    id: 'p236', 
    startYear: 1644, 
    endYear: 1655, 
    type: 'pope', 
    name: { en: "Innocent X", fr: "Innocent X", es: "Inocencio X", de: "Innozenz X." }, 
    description: { 
      en: "Condemned the Peace of Westphalia for reducing Church power. Famous portrait by Velázquez.", 
      fr: "Condamna les Traités de Westphalie. Célèbre portrait par Velázquez.", 
      es: "Condenó la Paz de Westfalia. Famoso retrato de Velázquez.", 
      de: "Verurteilte den Westfälischen Frieden. Berühmtes Porträt von Velázquez." 
    } 
  },
  { 
    id: 'p237', 
    startYear: 1655, 
    endYear: 1667, 
    type: 'pope', 
    name: { en: "Alexander VII", fr: "Alexandre VII", es: "Alejandro VII", de: "Alexander VII." }, 
    description: { 
      en: "Commissioned Bernini to build the colonnade of St. Peter's Square. Welcomed Queen Christina of Sweden to Catholicism.", 
      fr: "Commandita la colonnade de Saint-Pierre au Bernin. Accueillit la reine Christine de Suède.", 
      es: "Encargó la columnata de San Pedro a Bernini. Acogió a la reina Cristina de Suecia.", 
      de: "Beauftragte Bernini mit den Kolonnaden. Empfing Königin Christina von Schweden." 
    } 
  },
  { 
    id: 'p238', 
    startYear: 1667, 
    endYear: 1669, 
    type: 'pope', 
    name: { en: "Clement IX", fr: "Clément IX", es: "Clemente IX", de: "Clemens IX." }, 
    description: { 
      en: "Mediated the Peace of Clement IX (Jansenism). Reigned briefly.", 
      fr: "Médiation 'Paix de Clément IX' (jansénisme). Règne court.", 
      es: "Medió la Paz de Clemente IX (Jansenismo). Reinado corto.", 
      de: "Vermittelte den Frieden von Clemens IX (Jansenismus). Kurze Amtszeit." 
    } 
  },
  { 
    id: 'p239', 
    startYear: 1670, 
    endYear: 1676, 
    type: 'pope', 
    name: { en: "Clement X", fr: "Clément X", es: "Clemente X", de: "Clemens X." }, 
    description: { 
      en: "Canonized first saint of the Americas, Rose of Lima. Reigned into his 80s.", 
      fr: "Canonisa la première sainte des Amériques, Rose de Lima.", 
      es: "Canonizó a la primera santa de América, Rosa de Lima.", 
      de: "Kanonisierte die erste Heilige Amerikas, Rosa von Lima." 
    } 
  },
  { 
    id: 'p240', 
    startYear: 1676, 
    endYear: 1689, 
    type: 'pope', 
    name: { en: "Bl. Innocent XI", fr: "Bx Innocent XI", es: "Bto. Inocencio XI", de: "Sel. Innozenz XI." }, 
    description: { 
      en: "The 'Savior of Hungary'. Funded the Holy League that defeated the Turks at Vienna (1683). Austere reformer.", 
      fr: "Le 'Sauveur de la Hongrie'. Finança la victoire de Vienne (1683). Réformateur austère.", 
      es: "El 'Salvador de Hungría'. Financió la victoria de Viena (1683). Reformador austero.", 
      de: "Der 'Retter Ungarns'. Finanzierte den Sieg bei Wien (1683). Strenger Reformer." 
    } 
  },
  { 
    id: 'p241', 
    startYear: 1689, 
    endYear: 1691, 
    type: 'pope', 
    name: { en: "Alexander VIII", fr: "Alexandre VIII", es: "Alejandro VIII", de: "Alexander VIII." }, 
    description: { 
      en: "Condemned Gallicanism (French church independence). Purchased books for the Vatican Library.", 
      fr: "Condamna le gallicanisme. Acheta des livres pour la Bibliothèque vaticane.", 
      es: "Condenó el galicanismo. Compró libros para la Biblioteca Vaticana.", 
      de: "Verurteilte den Gallikanismus. Kaufte Bücher für die Vatikanbibliothek." 
    } 
  },
  { 
    id: 'p242', 
    startYear: 1691, 
    endYear: 1700, 
    type: 'pope', 
    name: { en: "Innocent XII", fr: "Innocent XII", es: "Inocencio XII", de: "Innozenz XII." }, 
    description: { 
      en: "Fought nepotism with the bull 'Romanum decet Pontificem'. Built the Curia Innocenziana (parliament today).", 
      fr: "Lutta contre le népotisme. Construisit la Curie Innocenziana.", 
      es: "Luchó contra el nepotismo. Construyó la Curia Innocenziana.", 
      de: "Bekämpfte den Nepotismus. Erbaute die Curia Innocenziana." 
    } 
  },
  { 
    id: 'p243', 
    startYear: 1700, 
    endYear: 1721, 
    type: 'pope', 
    name: { en: "Clement XI", fr: "Clément XI", es: "Clemente XI", de: "Clemens XI." }, 
    description: { 
      en: "Condemned Jansenism (Unigenitus). Disastrous involvement in the War of Spanish Succession. Chinese Rites controversy.", 
      fr: "Condamna le jansénisme (Unigenitus). Guerre de Succession d'Espagne. Querelle des Rites chinois.", 
      es: "Condenó el jansenismo. Guerra de Sucesión Española. Controversia de los Ritos Chinos.", 
      de: "Verurteilte den Jansenismus. Spanischer Erbfolgekrieg. Ritenstreit." 
    } 
  },
  { 
    id: 'p244', 
    startYear: 1721, 
    endYear: 1724, 
    type: 'pope', 
    name: { en: "Innocent XIII", fr: "Innocent XIII", es: "Inocencio XIII", de: "Innozenz XIII." }, 
    description: { 
      en: "Conti family. Took a stricter stance against the Jesuits regarding Chinese Rites.", 
      fr: "Famille Conti. Plus strict envers les Jésuites sur les Rites chinois.", 
      es: "Familia Conti. Más estricto con los jesuitas sobre los Ritos Chinos.", 
      de: "Familie Conti. Strenger gegen Jesuiten im Ritenstreit." 
    } 
  },
  { 
    id: 'p245', 
    startYear: 1724, 
    endYear: 1730, 
    type: 'pope', 
    name: { en: "Benedict XIII", fr: "Benoît XIII", es: "Benedicto XIII", de: "Benedikt XIII." }, 
    description: { 
      en: "Dominican. Focused on spiritual duties, leaving administration to corrupt subordinates (Coscia).", 
      fr: "Dominicain. Spirituel mais laissa l'administration à des corrompus (Coscia).", 
      es: "Dominico. Espiritual pero dejó la administración a corruptos (Coscia).", 
      de: "Dominikaner. Spirituell, überließ Verwaltung aber Korrupten (Coscia)." 
    } 
  },
  { 
    id: 'p246', 
    startYear: 1730, 
    endYear: 1740, 
    type: 'pope', 
    name: { en: "Clement XII", fr: "Clément XII", es: "Clemente XII", de: "Clemens XII." }, 
    description: { 
      en: "Commissioned the Trevi Fountain. First Pope to explicitly condemn Freemasonry (1738).", 
      fr: "Fontaine de Trevi. Premier à condamner la Franc-maçonnerie (1738).", 
      es: "Fontana di Trevi. Primero en condenar la Masonería (1738).", 
      de: "Trevi-Brunnen. Verurteilte als Erster die Freimaurerei (1738)." 
    } 
  },
  { 
    id: 'p247', 
    startYear: 1740, 
    endYear: 1758, 
    type: 'pope', 
    name: { en: "Benedict XIV", fr: "Benoît XIV", es: "Benedicto XIV", de: "Benedikt XIV." }, 
    description: { 
      en: "Intellectual giant. Reformed the canonization process. Friendly correspondence with Voltaire.", 
      fr: "Géant intellectuel. Réforma les canonisations. Correspondance avec Voltaire.", 
      es: "Gigante intelectual. Reformó las canonizaciones. Correspondencia con Voltaire.", 
      de: "Intellektueller Riese. Reformierte Heiligsprechungen. Korrespondenz mit Voltaire." 
    } 
  },
  { 
    id: 'p248', 
    startYear: 1758, 
    endYear: 1769, 
    type: 'pope', 
    name: { en: "Clement XIII", fr: "Clément XIII", es: "Clemente XIII", de: "Clemens XIII." }, 
    description: { 
      en: "Defended the Jesuits against expulsion from Portugal, France, and Spain. Known for his piety.", 
      fr: "Défendit les Jésuites contre l'expulsion. Connu pour sa piété.", 
      es: "Defendió a los jesuitas de la expulsión. Conocido por su piedad.", 
      de: "Verteidigte die Jesuiten gegen Ausweisung. Bekannt für seine Frömmigkeit." 
    } 
  },
  { 
    id: 'p249', 
    startYear: 1769, 
    endYear: 1774, 
    type: 'pope', 
    name: { en: "Clement XIV", fr: "Clément XIV", es: "Clemente XIV", de: "Clemens XIV." }, 
    description: { 
      en: "Suppressed the Society of Jesus (Jesuits) in 1773 under intense pressure from Bourbon monarchs.", 
      fr: "Supprima les Jésuites en 1773 sous pression des monarques Bourbons.", 
      es: "Suprimió a los Jesuitas en 1773 bajo presión de los Borbones.", 
      de: "Hob 1773 den Jesuitenorden auf Druck der Bourbonen auf." 
    } 
  },
  { 
    id: 'p250', 
    startYear: 1775, 
    endYear: 1799, 
    type: 'pope', 
    name: { en: "Pius VI", fr: "Pie VI", es: "Pío VI", de: "Pius VI." }, 
    description: { 
      en: "Condemned the French Revolution. Taken prisoner by Napoleon's troops and died in exile in Valence.", 
      fr: "Condamna la Révolution française. Prisonnier de Napoléon, mort à Valence.", 
      es: "Condenó la Revolución Francesa. Prisionero de Napoleón, murió en Valence.", 
      de: "Verurteilte die Französische Revolution. Gefangener Napoleons, starb in Valence." 
    } 
  },
  { 
    id: 'p251', 
    startYear: 1800, 
    endYear: 1823, 
    type: 'pope', 
    name: { en: "Pius VII", fr: "Pie VII", es: "Pío VII", de: "Pius VII." }, 
    description: { 
      en: "Crowned Napoleon but later imprisoned by him. Restored the Jesuits (1814). Patron of the arts.", 
      fr: "Couronna Napoléon puis fut emprisonné. Restaura les Jésuites (1814).", 
      es: "Coronó a Napoleón y fue encarcelado. Restauró a los Jesuitas (1814).", 
      de: "Krönte Napoleon, später eingekerkert. Stellte den Jesuitenorden wieder her." 
    } 
  },
  { 
    id: 'p252', 
    startYear: 1823, 
    endYear: 1829, 
    type: 'pope', 
    name: { en: "Leo XII", fr: "Léon XII", es: "León XII", de: "Leo XII." }, 
    description: { 
      en: "Conservative reaction against liberalism. Rebuilt St. Paul Outside the Walls after a fire.", 
      fr: "Réaction conservatrice. Reconstruisit Saint-Paul-hors-les-Murs après l'incendie.", 
      es: "Reacción conservadora. Reconstruyó San Pablo Extramuros tras el incendio.", 
      de: "Konservative Reaktion. Baute St. Paul vor den Mauern nach Brand wieder auf." 
    } 
  },
  { 
    id: 'p253', 
    startYear: 1829, 
    endYear: 1830, 
    type: 'pope', 
    name: { en: "Pius VIII", fr: "Pie VIII", es: "Pío VIII", de: "Pius VIII." }, 
    description: { 
      en: "Short reign. Accepted the July Revolution in France to preserve spiritual care.", 
      fr: "Règne court. Accepta la Révolution de Juillet pour préserver le soin spirituel.", 
      es: "Reinado corto. Aceptó la Revolución de Julio para preservar el cuidado espiritual.", 
      de: "Kurze Amtszeit. Akzeptierte die Julirevolution zur Wahrung der Seelsorge." 
    } 
  },
  { 
    id: 'p254', 
    startYear: 1831, 
    endYear: 1846, 
    type: 'pope', 
    name: { en: "Gregory XVI", fr: "Grégoire XVI", es: "Gregorio XVI", de: "Gregor XVI." }, 
    description: { 
      en: "Condemned the slave trade (In Supremo). Strongly opposed political liberalism and Italian unification.", 
      fr: "Condamna l'esclavage. Opposé au libéralisme et à l'unification italienne.", 
      es: "Condenó el comercio de esclavos. Opuesto al liberalismo y la unificación italiana.", 
      de: "Verurteilte den Sklavenhandel. Gegner des Liberalismus und der italienischen Einigung." 
    } 
  },
  { 
    id: 'p255', 
    startYear: 1846, 
    endYear: 1878, 
    type: 'pope', 
    name: { en: "Bl. Pius IX", fr: "Bx Pie IX", es: "Bto. Pío IX", de: "Sel. Pius IX." }, 
    description: { 
      en: "Longest reigning elected Pope. Defined Immaculate Conception. Convened Vatican I (Papal Infallibility). Lost Papal States (1870).", 
      fr: "Plus long règne. Immaculée Conception. Vatican I (Infaillibilité). Perte des États pontificaux.", 
      es: "Reinado más largo. Inmaculada Concepción. Vaticano I. Pérdida de Estados Pontificios.", 
      de: "Längstes Pontifikat. Unbefleckte Empfängnis. Vatikanum I. Verlust des Kirchenstaates." 
    } 
  },
  { 
    id: 'p256', 
    startYear: 1878, 
    endYear: 1903, 
    type: 'pope', 
    name: { en: "Leo XIII", fr: "Léon XIII", es: "León XIII", de: "Leo XIII." }, 
    description: { 
      en: "Father of Catholic Social Teaching (Rerum Novarum). Promoted the Rosary and St. Thomas Aquinas.", 
      fr: "Père de la Doctrine sociale (Rerum Novarum). Promut le Rosaire et Saint Thomas.", 
      es: "Padre de la Doctrina Social (Rerum Novarum). Promovió el Rosario y Santo Tomás.", 
      de: "Vater der Katholischen Soziallehre (Rerum Novarum). Förderte Rosenkranz und Thomas von Aquin." 
    } 
  },
  { 
    id: 'p257', 
    startYear: 1903, 
    endYear: 1914, 
    type: 'pope', 
    name: { en: "St. Pius X", fr: "Saint Pie X", es: "San Pío X", de: "Hl. Pius X." }, 
    description: { 
      en: "Lowered age of First Communion. Condemned Modernism. Reform of Canon Law and Breviary.", 
      fr: "Abaissa l'âge de la Communion. Condamna le modernisme. Réforme du Droit Canon.", 
      es: "Bajó edad de Primera Comunión. Condenó el Modernismo. Reforma del Derecho Canónico.", 
      de: "Senkte das Kommunionalter. Verurteilte den Modernismus. Reform des Kirchenrechts." 
    } 
  },
  { 
    id: 'p258', 
    startYear: 1914, 
    endYear: 1922, 
    type: 'pope', 
    name: { en: "Benedict XV", fr: "Benoît XV", es: "Benedicto XV", de: "Benedikt XV." }, 
    description: { 
      en: "Pope of Peace during WWI. Issued the 1917 Code of Canon Law. Supported missions (Maximum Illud).", 
      fr: "Pape de la Paix (1GM). Code de Droit Canon 1917. Soutint les missions.", 
      es: "Papa de la Paz (PGM). Código de 1917. Apoyó las misiones.", 
      de: "Friedenspapst (1. WK). Kodex 1917. Förderte Missionen." 
    } 
  },
  { 
    id: 'p259', 
    startYear: 1922, 
    endYear: 1939, 
    type: 'pope', 
    name: { en: "Pius XI", fr: "Pie XI", es: "Pío XI", de: "Pius XI." }, 
    description: { 
      en: "Signed Lateran Treaty establishing Vatican City. Condemned Nazism (Mit Brennender Sorge) and Communism.", 
      fr: "Accords du Latran (Cité du Vatican). Condamna le nazisme et le communisme.", 
      es: "Pactos de Letrán (Vaticano). Condenó nazismo y comunismo.", 
      de: "Lateranverträge (Vatikanstadt). Verurteilte Nazismus (Mit brennender Sorge) und Kommunismus." 
    } 
  },
  { 
    id: 'p260', 
    startYear: 1939, 
    endYear: 1958, 
    type: 'pope', 
    name: { en: "Ven. Pius XII", fr: "Vén. Pie XII", es: "Ven. Pío XII", de: "Ehrw. Pius XII." }, 
    description: { 
      en: "Pope during WWII. Defined the Dogma of the Assumption (1950). Encyclical on Scripture (Divino Afflante Spiritu).", 
      fr: "Pape durant la 2GM. Dogme de l'Assomption (1950). Encyclique biblique.", 
      es: "Papa de la SGM. Dogma de la Asunción (1950). Encíclica bíblica.", 
      de: "Papst im 2. WK. Dogma der Aufnahme Mariens (1950). Bibelenzyklika." 
    } 
  },
  { 
    id: 'p261', 
    startYear: 1958, 
    endYear: 1963, 
    type: 'pope', 
    name: { en: "St. John XXIII", fr: "Saint Jean XXIII", es: "San Juan XXIII", de: "Hl. Johannes XXIII." }, 
    description: { 
      en: "Convened the Second Vatican Council to 'open the windows' of the Church. Wrote 'Pacem in Terris'.", 
      fr: "Convoqua Vatican II. Écrivit 'Pacem in Terris'.", 
      es: "Convocó el Vaticano II. Escribió 'Pacem in Terris'.", 
      de: "Rief das Zweite Vatikanum ein. Schrieb 'Pacem in Terris'." 
    } 
  },
  { 
    id: 'p262', 
    startYear: 1963, 
    endYear: 1978, 
    type: 'pope', 
    name: { en: "St. Paul VI", fr: "Saint Paul VI", es: "San Pablo VI", de: "Hl. Paul VI." }, 
    description: { 
      en: "Concluded Vatican II. First modern Pope to travel internationally. Issued 'Humanae Vitae' reaffirming teaching on contraception.", 
      fr: "Conclut Vatican II. Voyages internationaux. 'Humanae Vitae'.", 
      es: "Concluyó Vaticano II. Viajes internacionales. 'Humanae Vitae'.", 
      de: "Schloss das Vatikanum II. Auslandsreisen. 'Humanae Vitae'." 
    } 
  },
  { 
    id: 'p263', 
    startYear: 1978, 
    endYear: 1978, 
    type: 'pope', 
    name: { en: "Bl. John Paul I", fr: "Bx Jean-Paul I", es: "Bto. Juan Pablo I", de: "Sel. Johannes Paul I." }, 
    description: { 
      en: "The 'Smiling Pope'. Reigned only 33 days. First to take a double name.", 
      fr: "Le 'Pape du Sourire'. Règne de 33 jours. Premier double nom.", 
      es: "El 'Papa de la Sonrisa'. Reinó 33 días. Primer nombre doble.", 
      de: "Der 'Lächeln-Papst'. Regierte 33 Tage. Erster Doppelname." 
    } 
  },
  { 
    id: 'p264', 
    startYear: 1978, 
    endYear: 2005, 
    type: 'pope', 
    name: { en: "St. John Paul II", fr: "Saint Jean-Paul II", es: "San Juan Pablo II", de: "Hl. Johannes Paul II." }, 
    description: { 
      en: "First Polish Pope. Key figure in the fall of Communism. Extensive travels. Theology of the Body. 'Totus Tuus'.", 
      fr: "Premier pape polonais. Chute du communisme. Voyages. Théologie du Corps. 'Totus Tuus'.", 
      es: "Primer Papa polaco. Caída del comunismo. Viajes. Teología del Cuerpo. 'Totus Tuus'.", 
      de: "Erster polnischer Papst. Fall des Kommunismus. Reisen. Theologie des Leibes. 'Totus Tuus'." 
    } 
  },
  { 
    id: 'p265', 
    startYear: 2005, 
    endYear: 2013, 
    type: 'pope', 
    name: { en: "Benedict XVI", fr: "Benoît XVI", es: "Benedicto XVI", de: "Benedikt XVI." }, 
    description: { 
      en: "Theologian Pope. First to resign in 600 years. Focused on faith and reason, and combating relativism.", 
      fr: "Pape théologien. Premier à démissionner en 600 ans. Foi et raison.", 
      es: "Papa teólogo. Primero en renunciar en 600 años. Fe y razón.", 
      de: "Theologenpapst. Erster Rücktritt seit 600 Jahren. Glaube und Vernunft." 
    } 
  },
  { 
    id: 'p266', 
    startYear: 2013, 
    endYear: 2025, 
    type: 'pope', 
    name: { en: "Francis", fr: "François", es: "Francisco", de: "Franziskus" }, 
    description: { 
      en: "First Jesuit and Latin American Pope. Focus on mercy, the poor, and creation ('Laudato Si').", 
      fr: "Premier pape jésuite et latino-américain. Miséricorde, pauvres, écologie ('Laudato Si').", 
      es: "Primer Papa jesuita y latinoamericano. Misericordia, pobres, ecología ('Laudato Si').", 
      de: "Erster Jesuit und Lateinamerikaner. Barmherzigkeit, Arme, Schöpfung ('Laudato Si')." 
    } 
  },

 {
  id: 'p267',
  startYear: 2026,
  endYear: 2026,
  type: 'pope',
  name: {
    en: "Leo XIV",
    fr: "Léon XIV",
    es: "León XIV",
    de: "Leo XIV"
  },
  description: {
    en: "Successor of Pope Francis. Emphasizes spiritual renewal, dialogue, and continuity of moral teaching in the modern world.",
    fr: "Successeur du pape François. Met l’accent sur le renouveau spirituel, le dialogue et la continuité de l’enseignement moral dans le monde moderne.",
    es: "Sucesor del papa Francisco. Enfatiza la renovación espiritual, el diálogo y la continuidad de la enseñanza moral en el mundo moderno.",
    de: "Nachfolger von Papst Franziskus. Betont geistliche Erneuerung, Dialog und die Kontinuität der moralischen Lehre in der modernen Welt."
  }
}

];


// --- 4. WRITINGS (NEW) ---
export const WRITINGS: TimelineEvent[] = [
  { 
    id: 'w_james', 
    startYear: 45, 
    endYear: 49, 
    type: 'writing', 
    name: { en: "NT: Epistle of James", fr: "NT : Épître de Jacques", es: "NT: Epístola de Santiago", de: "NT: Jakobusbrief" }, 
    description: { 
      en: "Likely the first NT writing. Emphasizes that faith without works is dead, the anointing of the sick, and social justice.", 
      fr: "Probablement le premier écrit du NT. Souligne que la foi sans les œuvres est morte, l'onction des malades et la justice sociale.", 
      es: "Probablemente el primer escrito del NT. Enfatiza que la fe sin obras está muerta, la unción de los enfermos y la justicia social.", 
      de: "Wahrscheinlich die erste NT-Schrift. Betont, dass der Glaube ohne Werke tot ist, die Krankensalbung und soziale Gerechtigkeit." 
    } 
  },
  { 
    id: 'w_galatians', 
    startYear: 49, 
    endYear: 50, 
    type: 'writing', 
    name: { en: "NT: Galatians", fr: "NT : Galates", es: "NT: Gálatas", de: "NT: Galater" }, 
    description: { 
      en: "St. Paul's defense of the Gospel of Grace. Asserts that Christians are not bound by the Mosaic Law (circumcision).", 
      fr: "Défense de l'Évangile de la Grâce par St Paul. Affirme que les chrétiens ne sont pas liés par la Loi mosaïque (circoncision).", 
      es: "Defensa del Evangelio de la Gracia por San Pablo. Afirma que los cristianos no están obligados por la Ley Mosaica.", 
      de: "Paulus' Verteidigung des Evangeliums der Gnade. Betont, dass Christen nicht an das mosaische Gesetz gebunden sind." 
    } 
  },
  { 
    id: 'w_1_thess', 
    startYear: 50, 
    endYear: 51, 
    type: 'writing', 
    name: { en: "NT: 1 Thessalonians", fr: "NT : 1 Thessaloniciens", es: "NT: 1 Tesalonicenses", de: "NT: 1. Thessalonicher" }, 
    description: { 
      en: "Earliest letter of Paul. Focuses on the second coming of Christ (Parousia) and encouragement in persecution.", 
      fr: "Première lettre de Paul. Se concentre sur la seconde venue du Christ (Parousie) et l'encouragement dans la persécution.", 
      es: "Primera carta de Pablo. Se centra en la segunda venida de Cristo (Parusía) y el aliento en la persecución.", 
      de: "Frühester Brief von Paulus. Fokus auf die Wiederkunft Christi (Parusie) und Ermutigung in der Verfolgung." 
    } 
  },
  { 
    id: 'w_2_thess', 
    startYear: 51, 
    endYear: 52, 
    type: 'writing', 
    name: { en: "NT: 2 Thessalonians", fr: "NT : 2 Thessaloniciens", es: "NT: 2 Tesalonicenses", de: "NT: 2. Thessalonicher" }, 
    description: { 
      en: "Corrects misunderstandings about the end times, warning against idleness and speaking of the 'Man of Lawlessness'.", 
      fr: "Corrige les malentendus sur la fin des temps, mettant en garde contre l'oisiveté et parlant de 'l'Homme de l'Impiété'.", 
      es: "Corrige malentendidos sobre el fin de los tiempos, advirtiendo contra la ociosidad y hablando del 'Hombre de Pecado'.", 
      de: "Korrigiert Missverständnisse über die Endzeit, warnt vor Müßiggang und spricht vom 'Menschen der Gesetzlosigkeit'." 
    } 
  },
  { 
    id: 'w_1_cor', 
    startYear: 53, 
    endYear: 54, 
    type: 'writing', 
    name: { en: "NT: 1 Corinthians", fr: "NT : 1 Corinthiens", es: "NT: 1 Corintios", de: "NT: 1. Korinther" }, 
    description: { 
      en: "Addresses divisions, immorality, and liturgy. Contains the Institution Narrative of the Eucharist and the Hymn to Love (Ch 13).", 
      fr: "Traite des divisions, de l'immoralité et de la liturgie. Contient le récit de l'institution de l'Eucharistie et l'Hymne à l'Amour.", 
      es: "Aborda divisiones, inmoralidad y liturgia. Contiene el relato de la Institución de la Eucaristía y el Himno al Amor.", 
      de: "Behandelt Spaltungen, Unmoral und Liturgie. Enthält den Einsetzungsbericht der Eucharistie und das Hohelied der Liebe." 
    } 
  },
  { 
    id: 'w_2_cor', 
    startYear: 55, 
    endYear: 56, 
    type: 'writing', 
    name: { en: "NT: 2 Corinthians", fr: "NT : 2 Corinthiens", es: "NT: 2 Corintios", de: "NT: 2. Korinther" }, 
    description: { 
      en: "Paul's most personal letter. Defends his apostolic authority and speaks of the 'ministry of reconciliation'.", 
      fr: "Lettre la plus personnelle de Paul. Défend son autorité apostolique et parle du 'ministère de la réconciliation'.", 
      es: "La carta más personal de Pablo. Defiende su autoridad apostólica y habla del 'ministerio de la reconciliación'.", 
      de: "Paulus' persönlichster Brief. Verteidigt seine apostolische Autorität und spricht vom 'Dienst der Versöhnung'." 
    } 
  },
  { 
    id: 'w_romans', 
    startYear: 56, 
    endYear: 57, 
    type: 'writing', 
    name: { en: "NT: Romans", fr: "NT : Romains", es: "NT: Romanos", de: "NT: Römer" }, 
    description: { 
      en: "Paul's theological masterpiece. Explains original sin, justification by faith, and the role of Israel in salvation history.", 
      fr: "Chef-d'œuvre théologique de Paul. Explique le péché originel, la justification par la foi et le rôle d'Israël.", 
      es: "Obra maestra teológica de Pablo. Explica el pecado original, la justificación por la fe y el papel de Israel.", 
      de: "Paulus' theologisches Meisterwerk. Erklärt die Erbsünde, die Rechtfertigung durch den Glauben und die Rolle Israels." 
    } 
  },
  { 
    id: 'w_mark', 
    startYear: 55, 
    endYear: 65, 
    type: 'writing', 
    name: { en: "NT: Gospel of Mark", fr: "NT : Évangile de Marc", es: "NT: Evangelio de Marcos", de: "NT: Markusevangelium" }, 
    description: { 
      en: "The earliest and shortest Gospel. Written by Peter's disciple. Focuses on the suffering servant and the immediacy of Jesus' mission.", 
      fr: "Le premier et le plus court Évangile. Écrit par le disciple de Pierre. Se concentre sur le serviteur souffrant.", 
      es: "El Evangelio más antiguo y corto. Escrito por el discípulo de Pedro. Se centra en el siervo sufriente.", 
      de: "Das älteste und kürzeste Evangelium. Geschrieben von Petrus' Schüler. Fokus auf den leidenden Gottesknecht." 
    } 
  },
  { 
    id: 'w_philemon', 
    startYear: 60, 
    endYear: 62, 
    type: 'writing', 
    name: { en: "NT: Philemon", fr: "NT : Philémon", es: "NT: Filemón", de: "NT: Philemon" }, 
    description: { 
      en: "Written from prison. Paul asks Philemon to receive his runaway slave Onesimus back as a 'brother in Christ'.", 
      fr: "Écrit de prison. Paul demande à Philémon d'accueillir son esclave en fuite Onésime comme un 'frère en Christ'.", 
      es: "Escrito desde la prisión. Pablo pide a Filemón recibir a su esclavo fugitivo Onésimo como un 'hermano en Cristo'.", 
      de: "Aus dem Gefängnis geschrieben. Paulus bittet Philemon, den entlaufenen Sklaven Onesimus als 'Bruder in Christus' aufzunehmen." 
    } 
  },
  { 
    id: 'w_colossians', 
    startYear: 60, 
    endYear: 62, 
    type: 'writing', 
    name: { en: "NT: Colossians", fr: "NT : Colossiens", es: "NT: Colosenses", de: "NT: Kolosser" }, 
    description: { 
      en: "Emphasizes the supremacy of Christ over all powers and principalities. Christ is the 'image of the invisible God'.", 
      fr: "Souligne la suprématie du Christ sur toutes les puissances. Le Christ est 'l'image du Dieu invisible'.", 
      es: "Enfatiza la supremacía de Cristo sobre todos los poderes. Cristo es la 'imagen del Dios invisible'.", 
      de: "Betont die Vorherrschaft Christi über alle Mächte. Christus ist das 'Ebenbild des unsichtbaren Gottes'." 
    } 
  },
  { 
    id: 'w_ephesians', 
    startYear: 60, 
    endYear: 62, 
    type: 'writing', 
    name: { en: "NT: Ephesians", fr: "NT : Éphésiens", es: "NT: Efesios", de: "NT: Epheser" }, 
    description: { 
      en: "Explores the mystery of the Church as the Body of Christ and the Bride of Christ. Famous for the 'Armor of God' passage.", 
      fr: "Explore le mystère de l'Église comme Corps et Épouse du Christ. Célèbre pour le passage sur 'l'Armure de Dieu'.", 
      es: "Explora el misterio de la Iglesia como Cuerpo y Esposa de Cristo. Famoso por el pasaje de la 'Armadura de Dios'.", 
      de: "Erforscht das Geheimnis der Kirche als Leib und Braut Christi. Bekannt für die 'Waffenrüstung Gottes'." 
    } 
  },
  { 
    id: 'w_philippians', 
    startYear: 60, 
    endYear: 62, 
    type: 'writing', 
    name: { en: "NT: Philippians", fr: "NT : Philippiens", es: "NT: Filipenses", de: "NT: Philipper" }, 
    description: { 
      en: "Epistle of Joy. Contains the 'Kenosis' hymn (Christ emptying himself) and encouragement to be humble.", 
      fr: "Épître de la Joie. Contient l'hymne de la 'Kénose' (Christ s'anéantissant) et l'appel à l'humilité.", 
      es: "Epístola de la Alegría. Contiene el himno de la 'Kénosis' (Cristo despojándose) y aliento a la humildad.", 
      de: "Brief der Freude. Enthält den 'Kenosis'-Hymnus (Selbstentäußerung Christi) und Ermutigung zur Demut." 
    } 
  },
  { 
    id: 'w_1_tim', 
    startYear: 62, 
    endYear: 64, 
    type: 'writing', 
    name: { en: "NT: 1 Timothy", fr: "NT : 1 Timothée", es: "NT: 1 Timoteo", de: "NT: 1. Timotheus" }, 
    description: { 
      en: "Pastoral epistle. Instructions on Church order, qualifications for bishops and deacons, and guarding the deposit of faith.", 
      fr: "Épître pastorale. Instructions sur l'ordre de l'Église, les évêques, les diacres et le dépôt de la foi.", 
      es: "Epístola pastoral. Instrucciones sobre el orden de la Iglesia, obispos, diáconos y el depósito de la fe.", 
      de: "Pastoralbrief. Anweisungen zur Kirchenordnung, Bischöfe, Diakone und Bewahrung des Glaubensguts." 
    } 
  },
  { 
    id: 'w_titus', 
    startYear: 62, 
    endYear: 64, 
    type: 'writing', 
    name: { en: "NT: Titus", fr: "NT : Tite", es: "NT: Tito", de: "NT: Titus" }, 
    description: { 
      en: "Paul instructs Titus on organizing the Church in Crete, refuting errors, and teaching sound doctrine.", 
      fr: "Paul instruit Tite sur l'organisation de l'Église en Crète, la réfutation des erreurs et la saine doctrine.", 
      es: "Pablo instruye a Tito sobre la organización de la Iglesia en Creta y la sana doctrina.", 
      de: "Paulus weist Titus an, die Kirche auf Kreta zu organisieren und gesunde Lehre zu verkünden." 
    } 
  },
  { 
    id: 'w_1_peter', 
    startYear: 60, 
    endYear: 64, 
    type: 'writing', 
    name: { en: "NT: 1 Peter", fr: "NT : 1 Pierre", es: "NT: 1 Pedro", de: "NT: 1. Petrus" }, 
    description: { 
      en: "Encouragement to Christians suffering persecution. Themes of baptismal regeneration and the priesthood of all believers.", 
      fr: "Encouragement aux chrétiens persécutés. Thèmes de la régénération baptismale et du sacerdoce des fidèles.", 
      es: "Aliento a cristianos perseguidos. Temas de regeneración bautismal y sacerdocio de los fieles.", 
      de: "Ermutigung für verfolgte Christen. Themen der Wiedergeburt durch die Taufe und des Priestertums aller Gläubigen." 
    } 
  },
  { 
    id: 'w_2_tim', 
    startYear: 64, 
    endYear: 67, 
    type: 'writing', 
    name: { en: "NT: 2 Timothy", fr: "NT : 2 Timothée", es: "NT: 2 Timoteo", de: "NT: 2. Timotheus" }, 
    description: { 
      en: "Paul's final letter before martyrdom. 'I have fought the good fight'. Urgent plea to preach the Word.", 
      fr: "Dernière lettre de Paul avant son martyre. 'J'ai combattu le bon combat'. Appel urgent à prêcher la Parole.", 
      es: "Última carta de Pablo. 'He peleado la buena batalla'. Llamado urgente a predicar la Palabra.", 
      de: "Paulus' letzter Brief vor dem Martyrium. 'Ich habe den guten Kampf gekämpft'. Aufruf, das Wort zu predigen." 
    } 
  },
  { 
    id: 'w_2_peter', 
    startYear: 65, 
    endYear: 68, 
    type: 'writing', 
    name: { en: "NT: 2 Peter", fr: "NT : 2 Pierre", es: "NT: 2 Pedro", de: "NT: 2. Petrus" }, 
    description: { 
      en: "Warns against false teachers and mocks scoffers who deny the Second Coming. Asserts Scriptural inspiration.", 
      fr: "Met en garde contre les faux docteurs et ceux qui nient la Seconde Venue. Affirme l'inspiration des Écritures.", 
      es: "Advierte contra falsos maestros y quienes niegan la Segunda Venida. Afirma la inspiración de las Escrituras.", 
      de: "Warnt vor falschen Lehrern und Leugnern der Wiederkunft. Bekräftigt die Inspiration der Schrift." 
    } 
  },
  { 
    id: 'w_hebrews', 
    startYear: 60, 
    endYear: 70, 
    type: 'writing', 
    name: { en: "NT: Hebrews", fr: "NT : Hébreux", es: "NT: Hebreos", de: "NT: Hebräer" }, 
    description: { 
      en: "Presents Jesus as the supreme High Priest who offers the perfect sacrifice, superseding the Old Covenant sacrifices.", 
      fr: "Présente Jésus comme le Grand Prêtre suprême offrant le sacrifice parfait, remplaçant l'Ancienne Alliance.", 
      es: "Presenta a Jesús como el Sumo Sacerdote supremo que ofrece el sacrificio perfecto, superando la Antigua Alianza.", 
      de: "Stellt Jesus als den höchsten Hohepriester dar, der das perfekte Opfer darbringt und den Alten Bund erfüllt." 
    } 
  },
  { 
    id: 'w_jude', 
    startYear: 65, 
    endYear: 80, 
    type: 'writing', 
    name: { en: "NT: Jude", fr: "NT : Jude", es: "NT: Judas", de: "NT: Judas" }, 
    description: { 
      en: "Short letter warning against intruders who pervert the grace of God into licentiousness.", 
      fr: "Courte lettre mettant en garde contre les intrus qui changent la grâce de Dieu en débauche.", 
      es: "Breve carta advirtiendo contra intrusos que convierten la gracia de Dios en libertinaje.", 
      de: "Kurzer Brief, der vor Eindringlingen warnt, die die Gnade Gottes in Zügellosigkeit verkehren." 
    } 
  },
  { 
    id: 'w_luke', 
    startYear: 70, 
    endYear: 80, 
    type: 'writing', 
    name: { en: "NT: Gospel of Luke", fr: "NT : Évangile de Luc", es: "NT: Evangelio de Lucas", de: "NT: Lukasevangelium" }, 
    description: { 
      en: "Written by a physician for Gentiles. Emphasizes mercy, prayer, the poor, and the role of women (especially Mary).", 
      fr: "Écrit par un médecin pour les Gentils. Souligne la miséricorde, la prière, les pauvres et le rôle de Marie.", 
      es: "Escrito por un médico para gentiles. Enfatiza la misericordia, la oración, los pobres y a María.", 
      de: "Von einem Arzt für Heiden geschrieben. Betont Barmherzigkeit, Gebet, die Armen und die Rolle Marias." 
    } 
  },
  { 
    id: 'w_acts', 
    startYear: 70, 
    endYear: 80, 
    type: 'writing', 
    name: { en: "NT: Acts of the Apostles", fr: "NT : Actes des Apôtres", es: "NT: Hechos de los Apóstoles", de: "NT: Apostelgeschichte" }, 
    description: { 
      en: "Sequel to Luke. History of the early Church, Pentecost, the ministry of Peter, and the missionary journeys of Paul.", 
      fr: "Suite de Luc. Histoire de l'Église primitive, la Pentecôte, le ministère de Pierre et les voyages de Paul.", 
      es: "Secuela de Lucas. Historia de la Iglesia primitiva, Pentecostés, Pedro y los viajes de Pablo.", 
      de: "Fortsetzung von Lukas. Geschichte der frühen Kirche, Pfingsten, Petrus und die Reisen des Paulus." 
    } 
  },
  { 
    id: 'w_matthew', 
    startYear: 70, 
    endYear: 85, 
    type: 'writing', 
    name: { en: "NT: Gospel of Matthew", fr: "NT : Évangile de Matthieu", es: "NT: Evangelio de Mateo", de: "NT: Matthäusevangelium" }, 
    description: { 
      en: "Written for a Jewish audience. Portrays Jesus as the New Moses and the fulfillment of Old Testament prophecy. Contains the Sermon on the Mount.", 
      fr: "Pour un public juif. Jésus est le Nouveau Moïse accomplissant les prophéties. Contient le Sermon sur la Montagne.", 
      es: "Para audiencia judía. Jesús es el Nuevo Moisés que cumple las profecías. Contiene el Sermón de la Montaña.", 
      de: "Für ein jüdisches Publikum. Jesus als der Neue Mose und Erfüllung der Prophezeiungen. Bergpredigt." 
    } 
  },
  { 
    id: 'w_didache', 
    startYear: 70, 
    endYear: 100, 
    type: 'writing', 
    name: { en: "The Didache", fr: "La Didachè", es: "La Didaché", de: "Die Didache" }, 
    description: { 
      en: "The Teaching of the Twelve Apostles. Oldest Church order. Instructions on Baptism (trinitarian), fasting, and the Eucharist.", 
      fr: "Enseignement des Douze Apôtres. Instructions sur le Baptême, le jeûne et l'Eucharistie.", 
      es: "Enseñanza de los Doce Apóstoles. Instrucciones sobre el Bautismo, el ayuno y la Eucaristía.", 
      de: "Lehre der Zwölf Apostel. Älteste Kirchenordnung. Anweisungen zu Taufe, Fasten und Eucharistie." 
    } 
  },
  { 
    id: 'w_john', 
    startYear: 90, 
    endYear: 100, 
    type: 'writing', 
    name: { en: "NT: Gospel of John", fr: "NT : Évangile de Jean", es: "NT: Evangelio de Juan", de: "NT: Johannesevangelium" }, 
    description: { 
      en: "High Christology. Jesus is the eternal Word (Logos) made flesh. Focuses on sacraments (Bread of Life discourse) and the Holy Spirit.", 
      fr: "Haute christologie. Jésus est le Verbe éternel fait chair. Discours du Pain de Vie et l'Esprit Saint.", 
      es: "Alta cristología. Jesús es el Verbo eterno hecho carne. Discurso del Pan de Vida y el Espíritu Santo.", 
      de: "Hohe Christologie. Jesus ist das fleischgewordene Wort. Fokus auf Sakramente und den Heiligen Geist." 
    } 
  },
  { 
    id: 'w_1_john', 
    startYear: 90, 
    endYear: 100, 
    type: 'writing', 
    name: { en: "NT: 1 John", fr: "NT : 1 Jean", es: "NT: 1 Juan", de: "NT: 1. Johannes" }, 
    description: { 
      en: "Encourages love and fellowship with God. Warns against antichrists who deny the incarnation.", 
      fr: "Encourage l'amour et la communion avec Dieu. Met en garde contre les antéchrists qui nient l'incarnation.", 
      es: "Fomenta el amor y la comunión con Dios. Advierte contra los anticristos que niegan la encarnación.", 
      de: "Ermutigt zur Liebe und Gemeinschaft mit Gott. Warnt vor Antichristen, die die Menschwerdung leugnen." 
    } 
  },
  { 
    id: 'w_2_3_john', 
    startYear: 90, 
    endYear: 100, 
    type: 'writing', 
    name: { en: "NT: 2 & 3 John", fr: "NT : 2 & 3 Jean", es: "NT: 2 y 3 Juan", de: "NT: 2. & 3. Johannes" }, 
    description: { 
      en: "Brief letters addressing hospitality, truth, and church authority (Diotrephes).", 
      fr: "Lettres brèves sur l'hospitalité, la vérité et l'autorité dans l'Église.", 
      es: "Cartas breves sobre hospitalidad, verdad y autoridad eclesial.", 
      de: "Kurze Briefe über Gastfreundschaft, Wahrheit und kirchliche Autorität." 
    } 
  },
  { 
    id: 'w_revelation', 
    startYear: 95, 
    endYear: 96, 
    type: 'writing', 
    name: { en: "NT: Revelation", fr: "NT : Apocalypse", es: "NT: Apocalipsis", de: "NT: Offenbarung" }, 
    description: { 
      en: "Apocalyptic vision of St. John on Patmos. The liturgy of heaven, the final battle, and the New Jerusalem. Hope for persecuted Christians.", 
      fr: "Vision apocalyptique de Jean. La liturgie céleste, la bataille finale et la Nouvelle Jérusalem.", 
      es: "Visión apocalíptica de Juan. La liturgia del cielo, la batalla final y la Nueva Jerusalén.", 
      de: "Apokalyptische Vision des Johannes. Die himmlische Liturgie, der letzte Kampf und das Neue Jerusalem." 
    } 
  },
  { 
    id: 'w_1_clement', 
    startYear: 96, 
    endYear: 96, 
    type: 'writing', 
    name: { en: "1 Clement", fr: "1 Clément", es: "1 Clemente", de: "1. Clemensbrief" }, 
    description: { 
      en: "Letter from the Pope (Clement of Rome) to Corinth regarding schism. Early evidence of Roman Primacy and Apostolic Succession.", 
      fr: "Lettre du Pape Clément à Corinthe sur le schisme. Preuve précoce de la primauté romaine et succession apostolique.", 
      es: "Carta del Papa Clemente a Corinto sobre el cisma. Evidencia temprana de la primacía romana.", 
      de: "Brief von Papst Clemens an Korinth. Frühes Zeugnis für den römischen Primat und apostolische Sukzession." 
    } 
  },
  { 
    id: 'w_barnabas', 
    startYear: 70, 
    endYear: 130, 
    type: 'writing', 
    name: { en: "Epistle of Barnabas", fr: "Épître de Barnabé", es: "Epístola de Bernabé", de: "Barnabasbrief" }, 
    description: { 
      en: "Apostolic Father writing. Allegorical interpretation of the Old Testament. Describes the 'Way of Light' vs 'Way of Darkness'.", 
      fr: "Père Apostolique. Interprétation allégorique de l'AT. Décrit la 'Voie de la Lumière' et la 'Voie des Ténèbres'.", 
      es: "Padre Apostólico. Interpretación alegórica del AT. Describe el 'Camino de la Luz' vs 'Oscuridad'.", 
      de: "Apostolischer Vater. Allegorische Auslegung des AT. Beschreibt den 'Weg des Lichts' und der Finsternis." 
    } 
  },
  { 
    id: 'w_ignatius_letters', 
    startYear: 107, 
    endYear: 110, 
    type: 'writing', 
    name: { en: "Letters of St. Ignatius", fr: "Lettres d'Ignace", es: "Cartas de S. Ignacio", de: "Ignatiusbriefe" }, 
    description: { 
      en: "7 letters written on way to martyrdom. Emphasizes the Real Presence in the Eucharist, the authority of the Bishop, and the 'Catholic Church'.", 
      fr: "7 lettres écrites avant le martyre. Insiste sur la Présence Réelle, l'autorité de l'Évêque et l'Église 'Catholique'.", 
      es: "7 cartas camino al martirio. Enfatiza la Presencia Real, la autoridad del Obispo y la Iglesia Católica.", 
      de: "7 Briefe vor dem Martyrium. Betont die Realpräsenz, die Autorität des Bischofs und die 'Katholische Kirche'." 
    } 
  },
  { 
    id: 'w_polycarp_phil', 
    startYear: 110, 
    endYear: 140, 
    type: 'writing', 
    name: { en: "Epistle of Polycarp", fr: "Épître de Polycarpe", es: "Epístola de Policarpo", de: "Polykarpbrief" }, 
    description: { 
      en: "Letter to the Philippians by a disciple of John. Quotes extensively from the New Testament, showing early canon formation.", 
      fr: "Lettre aux Philippiens par un disciple de Jean. Cite abondamment le NT, montrant la formation du canon.", 
      es: "Carta a los Filipenses de un discípulo de Juan. Cita extensamente el NT.", 
      de: "Brief an die Philipper von einem Johannes-Schüler. Zitiert ausführlich das NT." 
    } 
  },
  { 
    id: 'w_shepherd_hermas', 
    startYear: 140, 
    endYear: 150, 
    type: 'writing', 
    name: { en: "The Shepherd of Hermas", fr: "Le Pasteur d'Hermas", es: "El Pastor de Hermas", de: "Der Hirte des Hermas" }, 
    description: { 
      en: "Highly popular early Christian visionary text. Focuses on repentance, penance, and moral precepts. Considered scripture by some early fathers.", 
      fr: "Texte visionnaire très populaire. Se concentre sur la repentance et la pénitence. Considéré comme écriture par certains.", 
      es: "Texto visionario muy popular. Se centra en el arrepentimiento y la penitencia.", 
      de: "Sehr populärer visionärer Text. Fokus auf Buße und Moral. Von manchen Vätern als Schrift angesehen." 
    } 
  },
  { 
    id: 'w_justin_apologies', 
    startYear: 150, 
    endYear: 160, 
    type: 'writing', 
    name: { en: "Justin's Apologies", fr: "Apologies de Justin", es: "Apologías de Justino", de: "Apologien (Justin)" }, 
    description: { 
      en: "First and Second Apologies. Defends Christians against pagan charges. Provides the earliest detailed description of the Sunday Mass.", 
      fr: "Défend les chrétiens contre les païens. Fournit la première description détaillée de la messe dominicale.", 
      es: "Defiende a los cristianos. Provee la primera descripción detallada de la Misa dominical.", 
      de: "Verteidigt Christen. Liefert die früheste detaillierte Beschreibung der Sonntagsmesse." 
    } 
  },
  { 
    id: 'w_justin_trypho', 
    startYear: 155, 
    endYear: 160, 
    type: 'writing', 
    name: { en: "Dialogue with Trypho", fr: "Dialogue avec Tryphon", es: "Diálogo con Trifón", de: "Dialog mit Tryphon" }, 
    description: { 
      en: "Justin Martyr's debate with a Jew. Argues that Christianity is the true fulfillment of the Old Testament prophecies.", 
      fr: "Débat de Justin avec un Juif. Argue que le christianisme est l'accomplissement de l'Ancien Testament.", 
      es: "Debate de Justino con un judío. Argumenta que el cristianismo cumple el Antiguo Testamento.", 
      de: "Justins Debatte mit einem Juden. Argumentiert, dass das Christentum die Erfüllung des AT ist." 
    } 
  },
  { 
    id: 'w_muratorian', 
    startYear: 170, 
    endYear: 180, 
    type: 'writing', 
    name: { en: "Muratorian Fragment", fr: "Canon de Muratori", es: "Fragmento Muratoriano", de: "Muratorischer Kanon" }, 
    description: { 
      en: "The oldest known list of New Testament books. Confirms the early Church's acceptance of most current NT books.", 
      fr: "La plus ancienne liste connue des livres du NT. Confirme l'acceptation précoce de la plupart des livres actuels.", 
      es: "La lista más antigua de libros del NT. Confirma la aceptación temprana del canon actual.", 
      de: "Die älteste bekannte Liste der NT-Bücher. Bestätigt die frühe Akzeptanz des Kanons." 
    } 
  },
  { 
    id: 'w_irenaeus_heresies', 
    startYear: 180, 
    endYear: 185, 
    type: 'writing', 
    name: { en: "Against Heresies", fr: "Contre les Hérésies", es: "Contra las Herejías", de: "Gegen die Häresien" }, 
    description: { 
      en: "Irenaeus of Lyons. Attacks Gnosticism. Vital for defining Apostolic Succession, the Rule of Faith, and the four Gospels.", 
      fr: "Irénée de Lyon. Attaque le gnosticisme. Vital pour la succession apostolique et la Règle de Foi.", 
      es: "Ireneo de Lyon. Ataca el gnosticismo. Vital para la Sucesión Apostólica y la Regla de Fe.", 
      de: "Irenäus von Lyon. Gegen die Gnosis. Zentral für apostolische Sukzession und Glaubensregel." 
    } 
  },
  { 
    id: 'w_tertullian_apology', 
    startYear: 197, 
    endYear: 197, 
    type: 'writing', 
    name: { en: "Apologeticus", fr: "Apologétique", es: "Apologético", de: "Apologeticum" }, 
    description: { 
      en: "Tertullian. Brilliant defense of religious liberty and the morality of Christians. 'The blood of martyrs is the seed of the church'.", 
      fr: "Tertullien. Défense de la liberté religieuse. 'Le sang des martyrs est semence de chrétiens'.", 
      es: "Tertuliano. Defensa de la libertad religiosa. 'La sangre de los mártires es semilla de cristianos'.", 
      de: "Tertullian. Verteidigung der Religionsfreiheit. 'Das Blut der Märtyrer ist der Samen der Kirche'." 
    } 
  },
  { 
    id: 'w_hippolytus', 
    startYear: 215, 
    endYear: 215, 
    type: 'writing', 
    name: { en: "Apostolic Tradition", fr: "Tradition Apostolique", es: "Tradición Apostólica", de: "Traditio Apostolica" }, 
    description: { 
      en: "Attributed to Hippolytus. Contains early liturgical prayers, including an early form of the Eucharistic Prayer used today (EP II).", 
      fr: "Contient des prières liturgiques anciennes, dont une forme primitive de la Prière Eucharistique II.", 
      es: "Contiene oraciones litúrgicas antiguas, incluida una forma temprana de la Plegaria Eucarística II.", 
      de: "Enthält frühe liturgische Gebete, darunter eine Frühform des heutigen Zweiten Hochgebets." 
    } 
  },
  { 
    id: 'w_origen_principles', 
    startYear: 220, 
    endYear: 230, 
    type: 'writing', 
    name: { en: "On First Principles", fr: "Des Principes", es: "Sobre los Principios", de: "De Principiis" }, 
    description: { 
      en: "Origen. The first systematic theology of Christianity. Speculative but massively influential on later theology.", 
      fr: "Origène. La première théologie systématique du christianisme. Spéculative mais très influente.", 
      es: "Orígenes. La primera teología sistemática. Especulativa pero muy influyente.", 
      de: "Origenes. Die erste systematische Theologie des Christentums. Spekulativ aber einflussreich." 
    } 
  },
  { 
    id: 'w_cyprian_unity', 
    startYear: 251, 
    endYear: 251, 
    type: 'writing', 
    name: { en: "On the Unity of the Church", fr: "De l'unité de l'Église", es: "Sobre la unidad de la Iglesia", de: "Über die Einheit der Kirche" }, 
    description: { 
      en: "St. Cyprian of Carthage. Emphasizes that you cannot have God as Father without the Church as Mother. Necessity of unity with bishops.", 
      fr: "St Cyprien. On ne peut avoir Dieu pour Père sans l'Église pour Mère. Nécessité de l'unité avec les évêques.", 
      es: "San Cipriano. No puedes tener a Dios por Padre sin la Iglesia por Madre. Necesidad de unidad.", 
      de: "Hl. Cyprian. Man kann Gott nicht zum Vater haben, ohne die Kirche zur Mutter zu haben." 
    } 
  },
  { 
    id: 'w_eusebius_history', 
    startYear: 311, 
    endYear: 325, 
    type: 'writing', 
    name: { en: "Ecclesiastical History", fr: "Histoire ecclésiastique", es: "Historia eclesiástica", de: "Kirchengeschichte" }, 
    description: { 
      en: "Written by Eusebius of Caesarea. The foundational text for understanding the history of the early Church from the Apostles to Constantine.", 
      fr: "Écrit par Eusèbe de Césarée. Texte fondateur pour comprendre l'histoire de l'Église primitive, des Apôtres à Constantin.", 
      es: "Escrita por Eusebio de Cesarea. Texto fundamental para entender la historia de la Iglesia primitiva desde los Apóstoles hasta Constantino.", 
      de: "Verfasst von Eusebius von Cäsarea. Grundlegender Text zum Verständnis der Geschichte der frühen Kirche von den Aposteln bis Konstantin." 
    } 
  },
  { 
    id: 'w_athanasius_incarnation', 
    startYear: 318, 
    endYear: 320, 
    type: 'writing', 
    name: { en: "On the Incarnation", fr: "Sur l'Incarnation", es: "Sobre la Encarnación", de: "Über die Menschwerdung" }, 
    description: { 
      en: "St. Athanasius' classic work explaining why God became man: to restore the image of God in fallen humanity and defeat death.", 
      fr: "Œuvre classique de St Athanase expliquant pourquoi Dieu s'est fait homme : pour restaurer l'image de Dieu et vaincre la mort.", 
      es: "Obra clásica de San Atanasio que explica por qué Dios se hizo hombre: para restaurar la imagen de Dios y vencer a la muerte.", 
      de: "Klassisches Werk von Hl. Athanasius. Erklärt, warum Gott Mensch wurde: um das Ebenbild Gottes wiederherzustellen und den Tod zu besiegen." 
    } 
  },
  { 
    id: 'w_athanasius_anthony', 
    startYear: 356, 
    endYear: 362, 
    type: 'writing', 
    name: { en: "Life of St. Anthony", fr: "Vie de Saint Antoine", es: "Vida de San Antonio", de: "Leben des Hl. Antonius" }, 
    description: { 
      en: "Biography of Anthony the Great by Athanasius. It popularized monasticism in the West and established the model for hagiography.", 
      fr: "Biographie d'Antoine le Grand par Athanase. Elle popularisa le monachisme en Occident et établit le modèle de l'hagiographie.", 
      es: "Biografía de Antonio el Grande por Atanasio. Popularizó el monacato en Occidente y estableció el modelo de la hagiografía.", 
      de: "Biographie des Antonius von Athanasius. Sie machte das Mönchtum im Westen populär und begründete die Hagiographie." 
    } 
  },
  { 
    id: 'w_cyril_catecheses', 
    startYear: 347, 
    endYear: 350, 
    type: 'writing', 
    name: { en: "Catechetical Lectures", fr: "Catéchèses mystagogiques", es: "Catequesis", de: "Mystagogische Katechesen" }, 
    description: { 
      en: "St. Cyril of Jerusalem's instructions to catechumens. Provides vivid details on early baptismal rites and the Real Presence in the Eucharist.", 
      fr: "Instructions de St Cyrille aux catéchumènes. Détails vivants sur les rites baptismaux primitifs et la Présence Réelle.", 
      es: "Instrucciones de San Cirilo. Detalles vívidos sobre los ritos bautismales primitivos y la Presencia Real en la Eucaristía.", 
      de: "Anweisungen des Hl. Kyrill. Lebendige Details zu frühen Taufriten und der Realpräsenz in der Eucharistie." 
    } 
  },
  { 
    id: 'w_basil_spirit', 
    startYear: 375, 
    endYear: 375, 
    type: 'writing', 
    name: { en: "On the Holy Spirit", fr: "Sur le Saint-Esprit", es: "Sobre el Espíritu Santo", de: "Über den Heiligen Geist" }, 
    description: { 
      en: "St. Basil the Great's defense of the divinity of the Holy Spirit against the Pneumatomachians. Defines the Spirit's equality with the Father and Son.", 
      fr: "Défense de la divinité du Saint-Esprit par St Basile. Définit l'égalité de l'Esprit avec le Père et le Fils.", 
      es: "Defensa de la divinidad del Espíritu Santo por San Basilio. Define la igualdad del Espíritu con el Padre y el Hijo.", 
      de: "Verteidigung der Gottheit des Heiligen Geistes durch Basilius. Definiert die Gleichheit des Geistes mit Vater und Sohn." 
    } 
  },
  { 
    id: 'w_gregory_orations', 
    startYear: 380, 
    endYear: 380, 
    type: 'writing', 
    name: { en: "Five Theological Orations", fr: "Cinq discours théologiques", es: "Cinco discursos teológicos", de: "Fünf theologische Reden" }, 
    description: { 
      en: "St. Gregory of Nazianzus. A masterful defense of the Trinity delivered in Constantinople. Vital for the formulation of Trinitarian dogma.", 
      fr: "St Grégoire de Nazianze. Une défense magistrale de la Trinité. Vital pour la formulation du dogme trinitaire.", 
      es: "San Gregorio Nacianceno. Una defensa magistral de la Trinidad. Vital para la formulación del dogma trinitario.", 
      de: "Hl. Gregor von Nazianz. Eine meisterhafte Verteidigung der Trinität. Vital für die Formulierung des trinitarischen Dogmas." 
    } 
  },
  { 
    id: 'w_gregory_nyssa_catechism', 
    startYear: 385, 
    endYear: 385, 
    type: 'writing', 
    name: { en: "The Great Catechism", fr: "La Grande Catéchèse", es: "La Gran Catequesis", de: "Die Große Katechese" }, 
    description: { 
      en: "St. Gregory of Nyssa. A systematic explanation of Christian doctrines (Trinity, Incarnation, Redemption, Sacraments) for teachers.", 
      fr: "St Grégoire de Nysse. Explication systématique des doctrines chrétiennes (Trinité, Incarnation, Rédemption) pour les enseignants.", 
      es: "San Gregorio de Nisa. Explicación sistemática de las doctrinas cristianas para maestros.", 
      de: "Hl. Gregor von Nyssa. Systematische Erklärung christlicher Lehren für Lehrer." 
    } 
  },
  { 
    id: 'w_ambrose_mysteries', 
    startYear: 390, 
    endYear: 391, 
    type: 'writing', 
    name: { en: "On the Mysteries", fr: "Des Mystères", es: "Sobre los Misterios", de: "Über die Mysterien" }, 
    description: { 
      en: "St. Ambrose of Milan. Mystagogical sermons explaining the sacraments of Baptism, Confirmation, and Eucharist to the newly baptized.", 
      fr: "St Ambroise. Sermons expliquant les sacrements du Baptême, de la Confirmation et de l'Eucharistie aux néophytes.", 
      es: "San Ambrosio. Sermones que explican los sacramentos del Bautismo, Confirmación y Eucaristía.", 
      de: "Hl. Ambrosius. Predigten, die den Neugetauften die Sakramente erklären." 
    } 
  },
  { 
    id: 'w_chrysostom_priesthood', 
    startYear: 386, 
    endYear: 390, 
    type: 'writing', 
    name: { en: "On the Priesthood", fr: "Sur le Sacerdoce", es: "Sobre el Sacerdocio", de: "Über das Priestertum" }, 
    description: { 
      en: "St. John Chrysostom. A classic treatise on the immense dignity and terrifying responsibility of the priestly office.", 
      fr: "St Jean Chrysostome. Traité classique sur l'immense dignité et la responsabilité terrifiante de la charge sacerdotale.", 
      es: "San Juan Crisóstomo. Tratado clásico sobre la inmensa dignidad y responsabilidad del sacerdocio.", 
      de: "Hl. Johannes Chrysostomus. Klassische Abhandlung über die Würde und Verantwortung des Priesteramtes." 
    } 
  },
  { 
    id: 'w_jerome_vulgate', 
    startYear: 382, 
    endYear: 405, 
    type: 'writing', 
    name: { en: "The Vulgate", fr: "La Vulgate", es: "La Vulgata", de: "Die Vulgata" }, 
    description: { 
      en: "St. Jerome's Latin translation of the Bible. It became the standard Bible of the Western Church for over a millennium.", 
      fr: "Traduction latine de la Bible par St Jérôme. La Bible standard de l'Église d'Occident pendant un millénaire.", 
      es: "Traducción latina de la Biblia por San Jerónimo. La Biblia estándar de Occidente por un milenio.", 
      de: "Lateinische Bibelübersetzung des Hl. Hieronymus. Die Standardbibel der Westkirche für ein Jahrtausend." 
    } 
  },
  { 
    id: 'w_augustine_confessions', 
    startYear: 397, 
    endYear: 400, 
    type: 'writing', 
    name: { en: "The Confessions", fr: "Les Confessions", es: "Las Confesiones", de: "Confessiones" }, 
    description: { 
      en: "St. Augustine. The first Western autobiography. A profound spiritual journey from sin to conversion. 'Our hearts are restless until they rest in Thee'.", 
      fr: "St Augustin. Première autobiographie occidentale. Voyage spirituel du péché à la conversion.", 
      es: "San Agustín. Primera autobiografía occidental. Viaje espiritual del pecado a la conversión.", 
      de: "Hl. Augustinus. Erste westliche Autobiographie. Spirituelle Reise von der Sünde zur Bekehrung." 
    } 
  },
  { 
    id: 'w_augustine_city', 
    startYear: 413, 
    endYear: 426, 
    type: 'writing', 
    name: { en: "The City of God", fr: "La Cité de Dieu", es: "La Ciudad de Dios", de: "De civitate Dei" }, 
    description: { 
      en: "St. Augustine. Written after the sack of Rome. Contrasts the City of God (love of God) with the City of Man (love of self).", 
      fr: "St Augustin. Écrit après le sac de Rome. Contraste la Cité de Dieu (amour de Dieu) et la Cité des Hommes.", 
      es: "San Agustín. Contrasta la Ciudad de Dios (amor a Dios) con la Ciudad del Hombre (amor propio).", 
      de: "Hl. Augustinus. Kontrastiert den Gottesstaat (Liebe zu Gott) mit dem Weltstaat (Selbstliebe)." 
    } 
  },
  { 
    id: 'w_augustine_trinity', 
    startYear: 400, 
    endYear: 416, 
    type: 'writing', 
    name: { en: "On the Trinity", fr: "De la Trinité", es: "Sobre la Trinidad", de: "De Trinitate" }, 
    description: { 
      en: "St. Augustine's theological masterpiece searching for the image of the Trinity in the human mind (memory, intellect, will).", 
      fr: "Chef-d'œuvre théologique cherchant l'image de la Trinité dans l'esprit humain (mémoire, intelligence, volonté).", 
      es: "Obra maestra teológica que busca la imagen de la Trinidad en la mente humana (memoria, entendimiento, voluntad).", 
      de: "Theologisches Meisterwerk auf der Suche nach dem Abbild der Trinität im menschlichen Geist." 
    } 
  },
  { 
    id: 'w_augustine_doctrine', 
    startYear: 397, 
    endYear: 426, 
    type: 'writing', 
    name: { en: "On Christian Doctrine", fr: "De la doctrine chrétienne", es: "Sobre la doctrina cristiana", de: "De doctrina christiana" }, 
    description: { 
      en: "St. Augustine. A fundamental text on how to interpret and teach the Scriptures (hermeneutics and rhetoric).", 
      fr: "St Augustin. Texte fondamental sur l'interprétation et l'enseignement des Écritures.", 
      es: "San Agustín. Texto fundamental sobre cómo interpretar y enseñar las Escrituras.", 
      de: "Hl. Augustinus. Grundlegender Text über die Auslegung und Lehre der Schrift." 
    } 
  },
  { 
    id: 'w_cassian_institutes', 
    startYear: 420, 
    endYear: 425, 
    type: 'writing', 
    name: { en: "The Institutes", fr: "Les Institutions", es: "Las Instituciones", de: "De institutis coenobiorum" }, 
    description: { 
      en: "St. John Cassian. Introduces Eastern desert monasticism to the West. Deals with the clothing of monks and the eight principal vices.", 
      fr: "St Jean Cassien. Introduit le monachisme oriental en Occident. Traite des vêtements et des huit vices principaux.", 
      es: "San Juan Casiano. Introduce el monacato oriental en Occidente. Trata sobre los vicios principales.", 
      de: "Hl. Johannes Cassianus. Führt das östliche Mönchtum im Westen ein. Behandelt die acht Hauptlaster." 
    } 
  },
  { 
    id: 'w_vincent_commonitorium', 
    startYear: 434, 
    endYear: 434, 
    type: 'writing', 
    name: { en: "Commonitorium", fr: "Commonitorium", es: "Conmonitorio", de: "Commonitorium" }, 
    description: { 
      en: "St. Vincent of Lérins. Famous rule for Catholic doctrine: 'What has been believed everywhere, always, and by all'.", 
      fr: "St Vincent de Lérins. Règle célèbre : 'Ce qui a été cru partout, toujours et par tous'.", 
      es: "San Vicente de Lerins. Regla: 'Lo que ha sido creído en todas partes, siempre y por todos'.", 
      de: "Hl. Vinzenz von Lérins. 'Was überall, immer und von allen geglaubt wurde'." 
    } 
  },
  { 
    id: 'w_cyril_unity', 
    startYear: 430, 
    endYear: 440, 
    type: 'writing', 
    name: { en: "On the Unity of Christ", fr: "De l'unité du Christ", es: "Sobre la unidad de Cristo", de: "Über die Einheit Christi" }, 
    description: { 
      en: "St. Cyril of Alexandria. Defends the hypostatic union (one person, two natures) against Nestorian separation.", 
      fr: "St Cyrille d'Alexandrie. Défend l'union hypostatique contre la séparation nestorienne.", 
      es: "San Cirilo de Alejandría. Defiende la unión hipostática contra el nestorianismo.", 
      de: "Hl. Kyrill von Alexandria. Verteidig die hypostatische Union gegen den Nestorianismus." 
    } 
  },
  { 
    id: 'w_leo_tome', 
    startYear: 449, 
    endYear: 449, 
    type: 'writing', 
    name: { en: "The Tome of Leo", fr: "Le Tome de Léon", es: "El Tomo de León", de: "Tomus Leonis" }, 
    description: { 
      en: "St. Leo the Great. Letter to Flavian of Constantinople defining the two natures of Christ. Accepted at Chalcedon as the voice of Peter.", 
      fr: "St Léon le Grand. Lettre définissant les deux natures du Christ. Acceptée à Chalcédoine comme la voix de Pierre.", 
      es: "San León Magno. Carta que define las dos naturalezas de Cristo. Aceptada en Calcedonia.", 
      de: "Hl. Leo der Große. Lehrschreiben über die zwei Naturen Christi. In Chalcedon angenommen." 
    } 
  },
  { 
    id: 'w_patrick_confessio', 
    startYear: 450, 
    endYear: 460, 
    type: 'writing', 
    name: { en: "Confessio", fr: "Confession", es: "Confesión", de: "Confessio" }, 
    description: { 
      en: "St. Patrick. A moving autobiography defending his mission to Ireland and giving glory to God for his grace.", 
      fr: "St Patrick. Autobiographie émouvante défendant sa mission en Irlande et rendant gloire à Dieu.", 
      es: "San Patricio. Autobiografía conmovedora que defiende su misión en Irlanda.", 
      de: "Hl. Patrick. Bewegende Autobiographie über seine Mission in Irland." 
    } 
  },
  { 
    id: 'w_pseudo_dionysius', 
    startYear: 500, 
    endYear: 520, 
    type: 'writing', 
    name: { en: "The Mystical Theology", fr: "Théologie mystique", es: "Teología mística", de: "Mystische Theologie" }, 
    description: { 
      en: "Pseudo-Dionysius the Areopagite. Foundational text of apophatic (negative) theology. God is beyond all names and concepts.", 
      fr: "Pseudo-Denys. Texte fondateur de la théologie apophatique (négative). Dieu est au-delà de tout concept.", 
      es: "Pseudo-Dionisio. Texto fundamental de la teología apofática. Dios está más allá de todo nombre.", 
      de: "Pseudo-Dionysius. Grundtext der negativen Theologie. Gott ist jenseits aller Begriffe." 
    } 
  },
  { 
    id: 'w_boethius_consolation', 
    startYear: 524, 
    endYear: 524, 
    type: 'writing', 
    name: { en: "Consolation of Philosophy", fr: "Consolation de Philosophie", es: "La consolación de la filosofía", de: "Trost der Philosophie" }, 
    description: { 
      en: "Boethius. Written in prison awaiting execution. A dialogue on fate, free will, and the nature of good and evil.", 
      fr: "Boèce. Écrit en prison. Dialogue sur le destin, le libre arbitre et la nature du bien.", 
      es: "Boecio. Escrito en prisión. Diálogo sobre el destino, el libre albedrío y el bien.", 
      de: "Boethius. Im Gefängnis geschrieben. Dialog über Schicksal, freien Willen und das Gute." 
    } 
  },
  { 
    id: 'w_benedict_rule', 
    startYear: 516, 
    endYear: 530, 
    type: 'writing', 
    name: { en: "The Rule of St. Benedict", fr: "Règle de Saint Benoît", es: "Regla de San Benito", de: "Benediktsregel" }, 
    description: { 
      en: "St. Benedict. The constitution of Western Monasticism. Balanced life of prayer and work ('Ora et Labora').", 
      fr: "St Benoît. Constitution du monachisme occidental. Équilibre entre prière et travail ('Ora et Labora').", 
      es: "San Benito. Constitución del monacato occidental. Vida equilibrada de oración y trabajo.", 
      de: "Hl. Benedikt. Verfassung des abendländischen Mönchtums. 'Ora et Labora'." 
    } 
  },
  { 
    id: 'w_gregory_pastoral', 
    startYear: 590, 
    endYear: 591, 
    type: 'writing', 
    name: { en: "Pastoral Rule", fr: "Règle pastorale", es: "Regla pastoral", de: "Regula Pastoralis" }, 
    description: { 
      en: "St. Gregory the Great. A handbook for bishops and priests on how to care for souls with prudence and holiness.", 
      fr: "St Grégoire le Grand. Manuel pour les évêques sur le soin des âmes avec prudence et sainteté.", 
      es: "San Gregorio Magno. Manual para obispos sobre el cuidado de las almas.", 
      de: "Hl. Gregor der Große. Handbuch für Bischöfe über die Seelsorge." 
    } 
  },
  { 
    id: 'w_climacus_ladder', 
    startYear: 600, 
    endYear: 640, 
    type: 'writing', 
    name: { en: "Ladder of Divine Ascent", fr: "L'Échelle sainte", es: "La Escalera del Divino Ascenso", de: "Die Himmelsleiter" }, 
    description: { 
      en: "St. John Climacus. A classic of Eastern monastic spirituality describing 30 steps to virtue and union with God.", 
      fr: "St Jean Climaque. Classique de la spiritualité orientale décrivant 30 degrés vers l'union à Dieu.", 
      es: "San Juan Clímaco. Clásico de la espiritualidad oriental sobre los 30 pasos hacia Dios.", 
      de: "Hl. Johannes Klimakos. Klassiker der ostkirchlichen Spiritualität über 30 Stufen der Tugend." 
    } 
  },
  { 
    id: 'w_isidore_etymologies', 
    startYear: 600, 
    endYear: 625, 
    type: 'writing', 
    name: { en: "The Etymologies", fr: "Étymologies", es: "Etimologías", de: "Etymologiae" }, 
    description: { 
      en: "St. Isidore of Seville. An encyclopedia of all secular and sacred knowledge of the time. Preserved classical learning.", 
      fr: "St Isidore de Séville. Encyclopédie de tout le savoir profane et sacré de l'époque.", 
      es: "San Isidoro de Sevilla. Enciclopedia de todo el conocimiento secular y sagrado de la época.", 
      de: "Hl. Isidor von Sevilla. Enzyklopädie des gesamten weltlichen und geistlichen Wissens." 
    } 
  },
  { 
    id: 'w_maximus_ambigua', 
    startYear: 630, 
    endYear: 660, 
    type: 'writing', 
    name: { en: "The Ambigua", fr: "Ambigua", es: "Ambigua", de: "Ambigua" }, 
    description: { 
      en: "St. Maximus the Confessor. Deep theological reflections dealing with difficulties in the works of Gregory Nazianzen and Dionysius.", 
      fr: "St Maxime le Confesseur. Réflexions théologiques profondes sur des passages difficiles de la tradition.", 
      es: "San Máximo el Confesor. Reflexiones teológicas profundas sobre pasajes difíciles.", 
      de: "Hl. Maximus Confessor. Tiefe theologische Reflexionen über schwierige Textstellen." 
    } 
  },
  { 
    id: 'w_bede_history', 
    startYear: 731, 
    endYear: 731, 
    type: 'writing', 
    name: { en: "Ecclesiastical History", fr: "Histoire ecclésiastique", es: "Historia eclesiástica", de: "Kirchengeschichte" }, 
    description: { 
      en: "St. Bede the Venerable. The key source for the history of the conversion of the Anglo-Saxon tribes.", 
      fr: "St Bède le Vénérable. Source clé pour l'histoire de la conversion des Anglo-Saxons.", 
      es: "San Beda el Venerable. Fuente clave para la historia de la conversión de los anglosajones.", 
      de: "Hl. Beda Venerabilis. Hauptquelle für die Bekehrungsgeschichte der Angelsachsen." 
    } 
  },
  { 
    id: 'w_damascene_orthodox', 
    startYear: 743, 
    endYear: 749, 
    type: 'writing', 
    name: { en: "Exposition of Orthodox Faith", fr: "Exposé de la foi orthodoxe", es: "Fuente del Conocimiento", de: "Genaue Darlegung des orthodoxen Glaubens" }, 
    description: { 
      en: "St. John of Damascus. A systematic summary of Greek Patristic theology. Influenced Scholasticism.", 
      fr: "St Jean Damascène. Résumé systématique de la théologie patristique grecque.", 
      es: "San Juan Damasceno. Resumen sistemático de la teología patrística griega.", 
      de: "Hl. Johannes von Damaskus. Systematische Zusammenfassung der griechischen Vätertheologie." 
    } 
  },
  { 
    id: 'w_paschasius_body', 
    startYear: 831, 
    endYear: 833, 
    type: 'writing', 
    name: { en: "On the Body and Blood", fr: "Du Corps et du Sang", es: "Sobre el Cuerpo y la Sangre", de: "Über den Leib und das Blut" }, 
    description: { 
      en: "St. Paschasius Radbertus. First extensive doctrinal treatise on the Eucharist, asserting the Real Presence.", 
      fr: "St Paschase Radbert. Premier traité doctrinal étendu sur l'Eucharistie, affirmant la Présence Réelle.", 
      es: "San Pascasio Radberto. Primer tratado doctrinal extenso sobre la Eucaristía.", 
      de: "Hl. Paschasius Radbertus. Erste umfassende Abhandlung über die Eucharistie." 
    } 
  },
  { 
    id: 'w_narek_lamentations', 
    startYear: 1001, 
    endYear: 1003, 
    type: 'writing', 
    name: { en: "Book of Lamentations", fr: "Livre des Lamentations", es: "Libro de las Lamentaciones", de: "Buch der Klagelieder" }, 
    description: { 
      en: "St. Gregory of Narek. A mystical masterpiece of prayer from the Armenian tradition, speaking to the depths of the human soul.", 
      fr: "St Grégoire de Narek. Chef-d'œuvre mystique de la tradition arménienne.", 
      es: "San Gregorio de Narek. Obra maestra mística de la tradición armenia.", 
      de: "Hl. Gregor von Narek. Mystisches Meisterwerk aus der armenischen Tradition." 
    } 
  },
  { 
    id: 'w_anselm_proslogion', 
    startYear: 1077, 
    endYear: 1078, 
    type: 'writing', 
    name: { en: "Proslogion", fr: "Proslogion", es: "Proslogion", de: "Proslogion" }, 
    description: { 
      en: "St. Anselm. Contains the famous 'Ontological Argument' for God's existence. Faith seeking understanding.", 
      fr: "St Anselme. Contient le célèbre argument ontologique. La foi cherchant l'intelligence.", 
      es: "San Anselmo. Contiene el famoso argumento ontológico. La fe que busca entender.", 
      de: "Hl. Anselm. Enthält den ontologischen Gottesbeweis. Glaube, der nach Einsicht sucht." 
    } 
  },
  { 
    id: 'w_anselm_curdeus', 
    startYear: 1094, 
    endYear: 1098, 
    type: 'writing', 
    name: { en: "Cur Deus Homo", fr: "Pourquoi Dieu s'est fait homme", es: "Por qué Dios se hizo hombre", de: "Warum Gott Mensch wurde" }, 
    description: { 
      en: "St. Anselm. Explains the necessity of the Incarnation and Atonement to satisfy divine justice.", 
      fr: "St Anselme. Explique la nécessité de l'Incarnation pour satisfaire la justice divine.", 
      es: "San Anselmo. Explica la necesidad de la Encarnación para satisfacer la justicia divina.", 
      de: "Hl. Anselm. Erklärt die Notwendigkeit der Menschwerdung zur Genugtuung." 
    } 
  },
  { 
    id: 'w_bernard_loving', 
    startYear: 1120, 
    endYear: 1140, 
    type: 'writing', 
    name: { en: "On Loving God", fr: "De l'Amour de Dieu", es: "Sobre el amor a Dios", de: "Über die Liebe zu Gott" }, 
    description: { 
      en: "St. Bernard of Clairvaux. Describes the four degrees of love, leading to union with the divine will.", 
      fr: "St Bernard. Décrit les quatre degrés de l'amour menant à l'union avec la volonté divine.", 
      es: "San Bernardo. Describe los cuatro grados del amor hasta la unión con la voluntad divina.", 
      de: "Hl. Bernhard. Beschreibt die vier Stufen der Liebe bis zur Einheit mit dem göttlichen Willen." 
    } 
  },
  { 
    id: 'w_gratian_decretum', 
    startYear: 1140, 
    endYear: 1150, 
    type: 'writing', 
    name: { en: "Decretum Gratiani", fr: "Décret de Gratien", es: "Decreto de Graciano", de: "Decretum Gratiani" }, 
    description: { 
      en: "Gratian. The concordance of discordant canons. Foundational text for the systematic study of Canon Law.", 
      fr: "Gratien. Texte fondateur pour l'étude systématique du Droit Canon.", 
      es: "Graciano. Texto fundamental para el estudio sistemático del Derecho Canónico.", 
      de: "Gratian. Grundtext für das systematische Studium des Kirchenrechts." 
    } 
  },
  { 
    id: 'w_lombard_sentences', 
    startYear: 1150, 
    endYear: 1152, 
    type: 'writing', 
    name: { en: "The Four Books of Sentences", fr: "Livre des Sentences", es: "Libro de las Sentencias", de: "Sentenzen" }, 
    description: { 
      en: "Peter Lombard. The standard textbook of theology in the Middle Ages, commented on by Aquinas, Bonaventure, and Luther.", 
      fr: "Pierre Lombard. Le manuel standard de théologie au Moyen Âge.", 
      es: "Pedro Lombardo. El libro de texto estándar de teología en la Edad Media.", 
      de: "Petrus Lombardus. Das theologische Standardlehrbuch des Mittelalters." 
    } 
  },
  { 
    id: 'w_hildegard_scivias', 
    startYear: 1141, 
    endYear: 1151, 
    type: 'writing', 
    name: { en: "Scivias", fr: "Scivias", es: "Scivias", de: "Scivias" }, 
    description: { 
      en: "St. Hildegard of Bingen. 'Know the Ways'. A record of 26 visionary experiences dealing with creation and redemption.", 
      fr: "Ste Hildegarde. 'Connais les Voies'. Recueil de 26 visions sur la création et la rédemption.", 
      es: "Sta. Hildegarda. 'Conoce los Caminos'. Registro de 26 visiones.", 
      de: "Hl. Hildegard. 'Wisse die Wege'. Bericht über 26 Visionen." 
    } 
  },
  { 
    id: 'w_francis_rule', 
    startYear: 1223, 
    endYear: 1223, 
    type: 'writing', 
    name: { en: "Rule of St. Francis", fr: "Règle de St François", es: "Regla de San Francisco", de: "Regel des Hl. Franziskus" }, 
    description: { 
      en: "St. Francis of Assisi. The definitive rule approved by the Pope, emphasizing poverty and the Gospel life.", 
      fr: "St François. Règle définitive approuvée par le Pape, insistant sur la pauvreté.", 
      es: "San Francisco. Regla definitiva aprobada por el Papa, enfatizando la pobreza.", 
      de: "Hl. Franziskus. Vom Papst bestätigte Regel, betont Armut und Evangelium." 
    } 
  },
  { 
    id: 'w_bonaventure_journey', 
    startYear: 1259, 
    endYear: 1259, 
    type: 'writing', 
    name: { en: "Journey of the Mind to God", fr: "Itinéraire de l'esprit vers Dieu", es: "Itinerario de la mente a Dios", de: "Pilgerbuch der Seele zu Gott" }, 
    description: { 
      en: "St. Bonaventure. A mystical and philosophical treatise on how the soul ascends to God through contemplation of creation.", 
      fr: "St Bonaventure. Traité mystique sur l'ascension de l'âme vers Dieu par la contemplation.", 
      es: "San Buenaventura. Tratado místico sobre el ascenso del alma a Dios.", 
      de: "Hl. Bonaventura. Mystischer Traktat über den Aufstieg der Seele zu Gott." 
    } 
  },
  { 
    id: 'w_aquinas_summa', 
    startYear: 1265, 
    endYear: 1274, 
    type: 'writing', 
    name: { en: "Summa Theologica", fr: "Somme Théologique", es: "Suma Teológica", de: "Summa Theologica" }, 
    description: { 
      en: "St. Thomas Aquinas. The pinnacle of Scholastic theology. A systematic compendium of all Catholic doctrine.", 
      fr: "St Thomas d'Aquin. Le sommet de la scolastique. Compendium systématique de la doctrine catholique.", 
      es: "Santo Tomás de Aquino. La cumbre de la escolástica. Compendio sistemático de la doctrina.", 
      de: "Hl. Thomas von Aquin. Der Höhepunkt der Scholastik. Systematisches Kompendium der Lehre." 
    } 
  },
  { 
    id: 'w_aquinas_gentiles', 
    startYear: 1259, 
    endYear: 1265, 
    type: 'writing', 
    name: { en: "Summa Contra Gentiles", fr: "Somme contre les Gentils", es: "Suma contra los Gentiles", de: "Summa contra Gentiles" }, 
    description: { 
      en: "St. Thomas Aquinas. Apologetic work defending the faith against non-believers using reason.", 
      fr: "St Thomas d'Aquin. Œuvre apologétique défendant la foi par la raison.", 
      es: "Santo Tomás de Aquino. Obra apologética que defiende la fe mediante la razón.", 
      de: "Hl. Thomas von Aquin. Apologetisches Werk zur Verteidigung des Glaubens durch Vernunft." 
    } 
  },
  { 
    id: 'w_dante_comedy', 
    startYear: 1308, 
    endYear: 1320, 
    type: 'writing', 
    name: { en: "The Divine Comedy", fr: "La Divine Comédie", es: "La Divina Comedia", de: "Die Göttliche Komödie" }, 
    description: { 
      en: "Dante Alighieri. Epic poem journeying through Hell, Purgatory, and Heaven. An allegorical masterpiece of the medieval worldview.", 
      fr: "Dante. Poème épique traversant l'Enfer, le Purgatoire et le Paradis. Chef-d'œuvre allégorique médiéval.", 
      es: "Dante. Poema épico que recorre el Infierno, el Purgatorio y el Paraíso. Obra maestra alegórica.", 
      de: "Dante. Epos über die Reise durch Hölle, Fegefeuer und Paradies. Ein Meisterwerk der mittelalterlichen Weltanschauung." 
    } 
  },
  { 
    id: 'w_catherine_dialogue', 
    startYear: 1377, 
    endYear: 1378, 
    type: 'writing', 
    name: { en: "The Dialogue", fr: "Le Dialogue", es: "El Diálogo", de: "Der Dialog" }, 
    description: { 
      en: "St. Catherine of Siena. A mystical conversation between the Eternal Father and the human soul regarding providence and salvation.", 
      fr: "Ste Catherine de Sienne. Conversation mystique entre le Père Éternel et l'âme sur la providence.", 
      es: "Sta. Catalina de Siena. Conversación mística entre el Padre Eterno y el alma sobre la providencia.", 
      de: "Hl. Katharina von Siena. Mystisches Gespräch zwischen Gottvater und der Seele über die Vorsehung." 
    } 
  },
  { 
    id: 'w_cloud_unknowing', 
    startYear: 1370, 
    endYear: 1380, 
    type: 'writing', 
    name: { en: "The Cloud of Unknowing", fr: "Le Nuage de l'Inconnaissance", es: "La Nube del No-Saber", de: "Die Wolke des Nichtwissens" }, 
    description: { 
      en: "Anonymous English monk. A spiritual guide on contemplative prayer, urging the soul to pierce the 'cloud' separating it from God via love.", 
      fr: "Moine anglais anonyme. Guide spirituel sur la prière contemplative et l'union à Dieu par l'amour.", 
      es: "Monje inglés anónimo. Guía espiritual sobre la oración contemplativa y la unión con Dios por amor.", 
      de: "Anonymer englischer Mönch. Geistlicher Führer zur kontemplativen Gebet und Liebe zu Gott." 
    } 
  },
  { 
    id: 'w_julian_revelations', 
    startYear: 1395, 
    endYear: 1395, 
    type: 'writing', 
    name: { en: "Revelations of Divine Love", fr: "Révélations de l'Amour Divin", es: "Revelaciones del Amor Divino", de: "Offenbarungen der göttlichen Liebe" }, 
    description: { 
      en: "Julian of Norwich. The first book written by a woman in English. Mystical visions emphasizing God's endless love. 'All shall be well'.", 
      fr: "Julienne de Norwich. Premier livre écrit par une femme en anglais. Visions mystiques de l'amour infini de Dieu.", 
      es: "Juliana de Norwich. Primer libro escrito por una mujer en inglés. Visiones místicas del amor de Dios.", 
      de: "Juliana von Norwich. Erstes Buch einer Frau auf Englisch. Mystische Visionen der Liebe Gottes." 
    } 
  },
  { 
    id: 'w_kempis_imitation', 
    startYear: 1418, 
    endYear: 1427, 
    type: 'writing', 
    name: { en: "The Imitation of Christ", fr: "L'Imitation de Jésus-Christ", es: "La Imitación de Cristo", de: "Die Nachfolge Christi" }, 
    description: { 
      en: "Thomas à Kempis. The most widely read Christian devotional book after the Bible. Focuses on interior life and the Eucharist.", 
      fr: "Thomas a Kempis. Livre de dévotion le plus lu après la Bible. Vie intérieure et Eucharistie.", 
      es: "Tomás de Kempis. El libro devocional más leído después de la Biblia. Vida interior y Eucaristía.", 
      de: "Thomas von Kempen. Das meistgelesene Andachtsbuch nach der Bibel. Fokus auf Innenleben und Eucharistie." 
    } 
  },
  { 
    id: 'w_florence_laetentur', 
    startYear: 1439, 
    endYear: 1439, 
    type: 'writing', 
    name: { en: "Laetentur Caeli", fr: "Laetentur Caeli", es: "Laetentur Caeli", de: "Laetentur Caeli" }, 
    description: { 
      en: "Bull of the Council of Florence. Achieved a short-lived union between the Catholic and Orthodox Churches. Defined papal primacy.", 
      fr: "Bulle du Concile de Florence. Union éphémère entre Catholiques et Orthodoxes. Définit la primauté papale.", 
      es: "Bula del Concilio de Florencia. Unión breve entre católicos y ortodoxos. Definió la primacía papal.", 
      de: "Bulle des Konzils von Florenz. Kurzzeitige Union zwischen katholischer und orthodoxer Kirche." 
    } 
  },
  { 
    id: 'w_ignatius_exercises', 
    startYear: 1522, 
    endYear: 1548, 
    type: 'writing', 
    name: { en: "Spiritual Exercises", fr: "Exercices Spirituels", es: "Ejercicios Espirituales", de: "Geistliche Übungen" }, 
    description: { 
      en: "St. Ignatius of Loyola. A handbook for a 30-day retreat to discern God's will and overcome sinful attachments.", 
      fr: "St Ignace de Loyola. Manuel pour une retraite de 30 jours pour discerner la volonté de Dieu.", 
      es: "San Ignacio de Loyola. Manual para un retiro de 30 días para discernir la voluntad de Dios.", 
      de: "Hl. Ignatius von Loyola. Handbuch für 30-tägige Exerzitien zur Entscheidungsfindung." 
    } 
  },
  { 
    id: 'w_trent_decrees', 
    startYear: 1545, 
    endYear: 1563, 
    type: 'writing', 
    name: { en: "Decrees of Council of Trent", fr: "Décrets du Concile de Trente", es: "Decretos del Concilio de Trento", de: "Dekrete des Konzils von Trient" }, 
    description: { 
      en: "Defining Catholic doctrine on Scripture, Original Sin, Justification, and Sacraments against the Protestant Reformation.", 
      fr: "Définition de la doctrine catholique sur l'Écriture, le Péché originel, la Justification et les Sacrements.", 
      es: "Definición de la doctrina católica sobre Escritura, Pecado Original, Justificación y Sacramentos.", 
      de: "Definition der katholischen Lehre über Schrift, Erbsünde, Rechtfertigung und Sakramente." 
    } 
  },
  { 
    id: 'w_teresa_castle', 
    startYear: 1577, 
    endYear: 1577, 
    type: 'writing', 
    name: { en: "The Interior Castle", fr: "Le Château intérieur", es: "Las Moradas", de: "Die Innere Burg" }, 
    description: { 
      en: "St. Teresa of Avila. Describes the soul as a castle with seven mansions, representing stages of prayer leading to union with God.", 
      fr: "Ste Thérèse d'Avila. Décrit l'âme comme un château à sept demeures menant à l'union à Dieu.", 
      es: "Sta. Teresa de Jesús. Describe el alma como un castillo con siete moradas hasta la unión con Dios.", 
      de: "Hl. Teresa von Avila. Beschreibt die Seele als Burg mit sieben Wohnungen bis zur Einigung mit Gott." 
    } 
  },
  { 
    id: 'w_john_darknight', 
    startYear: 1578, 
    endYear: 1579, 
    type: 'writing', 
    name: { en: "Dark Night of the Soul", fr: "La Nuit obscure", es: "Noche oscura del alma", de: "Die Dunkle Nacht" }, 
    description: { 
      en: "St. John of the Cross. Poetry and commentary on the purgation of the senses and spirit necessary for divine union.", 
      fr: "St Jean de la Croix. Poésie sur la purification des sens et de l'esprit nécessaire à l'union divine.", 
      es: "San Juan de la Cruz. Poesía sobre la purificación necesaria para la unión divina.", 
      de: "Hl. Johannes vom Kreuz. Dichtung über die Läuterung der Sinne und des Geistes." 
    } 
  },
  { 
    id: 'w_sales_devout', 
    startYear: 1609, 
    endYear: 1609, 
    type: 'writing', 
    name: { en: "Introduction to the Devout Life", fr: "Introduction à la vie dévote", es: "Introducción a la vida devota", de: "Anleitung zum frommen Leben" }, 
    description: { 
      en: "St. Francis of Sales. A guide proving that holiness is possible in every state of life, not just for monks.", 
      fr: "St François de Sales. Guide prouvant que la sainteté est possible dans tous les états de vie.", 
      es: "San Francisco de Sales. Guía que prueba que la santidad es posible en cualquier estado de vida.", 
      de: "Hl. Franz von Sales. Zeigt, dass Heiligkeit in jedem Lebensstand möglich ist." 
    } 
  },
  { 
    id: 'w_montfort_devotion', 
    startYear: 1712, 
    endYear: 1712, 
    type: 'writing', 
    name: { en: "True Devotion to Mary", fr: "Traité de la Vraie Dévotion", es: "Tratado de la Verdadera Devoción", de: "Abhandlung über die wahre Marienverehrung" }, 
    description: { 
      en: "St. Louis de Montfort. Explains the path of total consecration to Jesus through the hands of the Virgin Mary.", 
      fr: "St Louis-Marie de Montfort. Explique la consécration totale à Jésus par les mains de Marie.", 
      es: "San Luis de Montfort. Explica la consagración total a Jesús por manos de María.", 
      de: "Hl. Ludwig von Montfort. Erklärt die vollkommene Hingabe an Jesus durch Maria." 
    } 
  },
  { 
    id: 'w_liguori_glories', 
    startYear: 1750, 
    endYear: 1750, 
    type: 'writing', 
    name: { en: "The Glories of Mary", fr: "Les Gloires de Marie", es: "Las Glorias de María", de: "Die Herrlichkeiten Mariens" }, 
    description: { 
      en: "St. Alphonsus Liguori. A classic defense of Marian devotion and a commentary on the Salve Regina.", 
      fr: "St Alphonse de Liguori. Défense classique de la dévotion mariale et commentaire du Salve Regina.", 
      es: "San Alfonso María de Ligorio. Defensa clásica de la devoción mariana y comentario a la Salve.", 
      de: "Hl. Alfons von Liguori. Klassische Verteidigung der Marienverehrung und Kommentar zum Salve Regina." 
    } 
  },
  { 
    id: 'w_newman_development', 
    startYear: 1845, 
    endYear: 1845, 
    type: 'writing', 
    name: { en: "Essay on the Development of Doctrine", fr: "Essai sur le développement de la doctrine", es: "Ensayo sobre el desarrollo de la doctrina", de: "Entwicklung der Glaubenslehre" }, 
    description: { 
      en: "St. John Henry Newman. Argues that Catholic dogma grows organically from the original deposit of faith like a plant from a seed.", 
      fr: "St John Henry Newman. Le dogme catholique grandit organiquement du dépôt de la foi comme une plante d'une graine.", 
      es: "San John Henry Newman. El dogma crece orgánicamente del depósito de la fe como una planta de una semilla.", 
      de: "Hl. John Henry Newman. Das Dogma wächst organisch aus dem Glaubensgut wie eine Pflanze aus dem Samen." 
    } 
  },
  { 
    id: 'w_newman_apologia', 
    startYear: 1864, 
    endYear: 1864, 
    type: 'writing', 
    name: { en: "Apologia Pro Vita Sua", fr: "Apologia Pro Vita Sua", es: "Apologia Pro Vita Sua", de: "Apologia Pro Vita Sua" }, 
    description: { 
      en: "St. John Henry Newman. A spiritual autobiography defending his conversion to Catholicism against Anglican critics.", 
      fr: "St John Henry Newman. Autobiographie spirituelle défendant sa conversion au catholicisme.", 
      es: "San John Henry Newman. Autobiografía espiritual defendiendo su conversión al catolicismo.", 
      de: "Hl. John Henry Newman. Geistliche Autobiographie zur Verteidigung seiner Konversion." 
    } 
  },
  { 
    id: 'w_vatican1_pastor', 
    startYear: 1870, 
    endYear: 1870, 
    type: 'writing', 
    name: { en: "Pastor Aeternus", fr: "Pastor Aeternus", es: "Pastor Aeternus", de: "Pastor Aeternus" }, 
    description: { 
      en: "First Vatican Council. Dogmatic Constitution defining Papal Primacy and Papal Infallibility.", 
      fr: "Concile Vatican I. Constitution dogmatique définissant la primauté et l'infaillibilité papales.", 
      es: "Concilio Vaticano I. Constitución dogmática que define la primacía y la infalibilidad papal.", 
      de: "Erstes Vatikanum. Dogmatische Konstitution über den päpstlichen Primat und die Unfehlbarkeit." 
    } 
  },
  { 
    id: 'w_leo_rerum', 
    startYear: 1891, 
    endYear: 1891, 
    type: 'writing', 
    name: { en: "Rerum Novarum", fr: "Rerum Novarum", es: "Rerum Novarum", de: "Rerum Novarum" }, 
    description: { 
      en: "Pope Leo XIII. The foundational encyclical of Catholic Social Teaching. Addresses labor, capital, and the rights of workers.", 
      fr: "Léon XIII. Encyclique fondatrice de la Doctrine sociale. Travail, capital et droits des ouvriers.", 
      es: "León XIII. Encíclica fundacional de la Doctrina Social. Trabajo, capital y derechos obreros.", 
      de: "Leo XIII. Gründungsdokument der Katholischen Soziallehre. Arbeit, Kapital und Arbeiterrechte." 
    } 
  },
  { 
    id: 'w_therese_story', 
    startYear: 1898, 
    endYear: 1898, 
    type: 'writing', 
    name: { en: "Story of a Soul", fr: "Histoire d'une âme", es: "Historia de un Alma", de: "Geschichte einer Seele" }, 
    description: { 
      en: "St. Thérèse of Lisieux. Her autobiography outlining the 'Little Way' of spiritual childhood and trust in God.", 
      fr: "Ste Thérèse de Lisieux. Autobiographie décrivant la 'Petite Voie' de l'enfance spirituelle.", 
      es: "Sta. Teresita. Autobiografía que describe el 'Caminito' de la infancia espiritual.", 
      de: "Hl. Therese von Lisieux. Autobiographie über den 'Kleinen Weg' der geistlichen Kindheit." 
    } 
  },
  { 
    id: 'w_piusx_pascendi', 
    startYear: 1907, 
    endYear: 1907, 
    type: 'writing', 
    name: { en: "Pascendi Dominici Gregis", fr: "Pascendi Dominici Gregis", es: "Pascendi Dominici Gregis", de: "Pascendi Dominici Gregis" }, 
    description: { 
      en: "Pope St. Pius X. Encyclical condemning Modernism as the 'synthesis of all heresies'.", 
      fr: "Pape St Pie X. Encyclique condamnant le modernisme comme 'synthèse de toutes les hérésies'.", 
      es: "Papa S. Pío X. Encíclica que condena el modernismo como 'síntesis de todas las herejías'.", 
      de: "Papst Hl. Pius X. Enzyklika, die den Modernismus als 'Sammelbecken aller Häresien' verurteilt." 
    } 
  },
  { 
    id: 'w_chesterton_orthodoxy', 
    startYear: 1908, 
    endYear: 1908, 
    type: 'writing', 
    name: { en: "Orthodoxy", fr: "Orthodoxie", es: "Ortodoxia", de: "Orthodoxie" }, 
    description: { 
      en: "G.K. Chesterton. A brilliant, witty defense of the Christian faith as the only way to satisfy the human adventure.", 
      fr: "G.K. Chesterton. Une défense brillante et pleine d'esprit de la foi chrétienne.", 
      es: "G.K. Chesterton. Una defensa brillante e ingeniosa de la fe cristiana.", 
      de: "G.K. Chesterton. Eine brillante Verteidigung des christlichen Glaubens." 
    } 
  },
  { 
    id: 'w_piusxi_casti', 
    startYear: 1930, 
    endYear: 1930, 
    type: 'writing', 
    name: { en: "Casti Connubii", fr: "Casti Connubii", es: "Casti Connubii", de: "Casti Connubii" }, 
    description: { 
      en: "Pope Pius XI. Encyclical on Christian Marriage. Reaffirms the prohibition of artificial contraception.", 
      fr: "Pie XI. Encyclique sur le mariage chrétien. Réaffirme l'interdiction de la contraception.", 
      es: "Pío XI. Encíclica sobre el matrimonio cristiano. Reafirma la prohibición de la anticoncepción.", 
      de: "Pius XI. Enzyklika über die christliche Ehe. Bekräftigt das Verbot der künstlichen Verhütung." 
    } 
  },
  { 
    id: 'w_faustina_diary', 
    startYear: 1934, 
    endYear: 1938, 
    type: 'writing', 
    name: { en: "Diary: Divine Mercy in My Soul", fr: "Petit Journal", es: "Diario: La Divina Misericordia", de: "Tagebuch der Sr. Faustina" }, 
    description: { 
      en: "St. Faustina Kowalska. Record of her mystical conversations with Jesus regarding His Divine Mercy.", 
      fr: "Ste Faustine. Recueil de ses conversations mystiques avec Jésus sur sa Miséricorde.", 
      es: "Sta. Faustina. Registro de sus conversaciones místicas con Jesús sobre su Misericordia.", 
      de: "Hl. Faustina. Aufzeichnungen ihrer mystischen Gespräche mit Jesus über seine Barmherzigkeit." 
    } 
  },
  { 
    id: 'w_piusxii_divino', 
    startYear: 1943, 
    endYear: 1943, 
    type: 'writing', 
    name: { en: "Divino Afflante Spiritu", fr: "Divino Afflante Spiritu", es: "Divino Afflante Spiritu", de: "Divino Afflante Spiritu" }, 
    description: { 
      en: "Pope Pius XII. Opened the door to modern biblical studies and historical-critical methods within Catholic guidelines.", 
      fr: "Pie XII. Ouvrit la voie aux études bibliques modernes et aux méthodes historiques.", 
      es: "Pío XII. Abrió la puerta a los estudios bíblicos modernos y métodos históricos.", 
      de: "Pius XII. Öffnete den Weg für moderne Bibelwissenschaft und historisch-kritische Methoden." 
    } 
  },
  { 
    id: 'w_merton_mountain', 
    startYear: 1948, 
    endYear: 1948, 
    type: 'writing', 
    name: { en: "The Seven Storey Mountain", fr: "La Nuit privée d'étoiles", es: "La montaña de los siete círculos", de: "Der Berg der sieben Stufen" }, 
    description: { 
      en: "Thomas Merton. Autobiography of a young intellectual converting to Catholicism and becoming a Trappist monk.", 
      fr: "Thomas Merton. Autobiographie d'un jeune intellectuel devenant moine trappiste.", 
      es: "Thomas Merton. Autobiografía de un joven intelectual que se hace monje trapense.", 
      de: "Thomas Merton. Autobiographie eines Intellektuellen, der Trappist wird." 
    } 
  },
  { 
    id: 'w_piusxii_assumption', 
    startYear: 1950, 
    endYear: 1950, 
    type: 'writing', 
    name: { en: "Munificentissimus Deus", fr: "Munificentissimus Deus", es: "Munificentissimus Deus", de: "Munificentissimus Deus" }, 
    description: { 
      en: "Pope Pius XII. Apostolic Constitution defining the Dogma of the Assumption of Mary into heaven.", 
      fr: "Pie XII. Constitution définissant le dogme de l'Assomption de Marie.", 
      es: "Pío XII. Constitución que define el Dogma de la Asunción de María.", 
      de: "Pius XII. Apostolische Konstitution zur Definition des Dogmas der Himmelfahrt Mariens." 
    } 
  },
  { 
    id: 'w_vatican2_lumen', 
    startYear: 1964, 
    endYear: 1964, 
    type: 'writing', 
    name: { en: "Lumen Gentium", fr: "Lumen Gentium", es: "Lumen Gentium", de: "Lumen Gentium" }, 
    description: { 
      en: "Vatican II. Dogmatic Constitution on the Church. Defines the Church as the 'People of God' and the universal call to holiness.", 
      fr: "Vatican II. Constitution sur l'Église. 'Peuple de Dieu' et appel universel à la sainteté.", 
      es: "Vaticano II. Constitución sobre la Iglesia. 'Pueblo de Dios' y llamada universal a la santidad.", 
      de: "Zweites Vatikanum. Kirchenkonstitution. 'Volk Gottes' und allgemeine Berufung zur Heiligkeit." 
    } 
  },
  { 
    id: 'w_vatican2_dei_verbum', 
    startYear: 1965, 
    endYear: 1965, 
    type: 'writing', 
    name: { en: "Dei Verbum", fr: "Dei Verbum", es: "Dei Verbum", de: "Dei Verbum" }, 
    description: { 
      en: "Vatican II. Dogmatic Constitution on Divine Revelation. Interrelation of Scripture, Tradition, and Magisterium.", 
      fr: "Vatican II. Révélation Divine. Lien entre Écriture, Tradition et Magistère.", 
      es: "Vaticano II. Revelación Divina. Relación entre Escritura, Tradición y Magisterio.", 
      de: "Zweites Vatikanum. Über die göttliche Offenbarung. Schrift, Tradition und Lehramt." 
    } 
  },
  { 
    id: 'w_vatican2_gaudium', 
    startYear: 1965, 
    endYear: 1965, 
    type: 'writing', 
    name: { en: "Gaudium et Spes", fr: "Gaudium et Spes", es: "Gaudium et Spes", de: "Gaudium et Spes" }, 
    description: { 
      en: "Vatican II. The Church in the Modern World. Addresses dignity, marriage, culture, and peace.", 
      fr: "Vatican II. L'Église dans le monde moderne. Dignité, mariage, culture et paix.", 
      es: "Vaticano II. La Iglesia en el mundo moderno. Dignidad, matrimonio, cultura y paz.", 
      de: "Zweites Vatikanum. Die Kirche in der Welt von heute. Würde, Ehe, Kultur und Frieden." 
    } 
  },
  { 
    id: 'w_paulvi_humanae', 
    startYear: 1968, 
    endYear: 1968, 
    type: 'writing', 
    name: { en: "Humanae Vitae", fr: "Humanae Vitae", es: "Humanae Vitae", de: "Humanae Vitae" }, 
    description: { 
      en: "Pope Paul VI. Reaffirmed the Church's teaching against artificial contraception and the unitive/procreative nature of marriage.", 
      fr: "Paul VI. Réaffirme l'enseignement contre la contraception artificielle.", 
      es: "Pablo VI. Reafirma la enseñanza contra la anticoncepción artificial.", 
      de: "Paul VI. Bekräftigt die Lehre gegen künstliche Empfängnisverhütung." 
    } 
  },
  { 
    id: 'w_jp2_redemptor', 
    startYear: 1979, 
    endYear: 1979, 
    type: 'writing', 
    name: { en: "Redemptor Hominis", fr: "Redemptor Hominis", es: "Redemptor Hominis", de: "Redemptor Hominis" }, 
    description: { 
      en: "Pope John Paul II. His first encyclical. 'Christ the Redeemer reveals man to himself'. Human dignity and human rights.", 
      fr: "Jean-Paul II. 'Le Christ Rédempteur révèle l'homme à lui-même'. Dignité humaine.", 
      es: "Juan Pablo II. 'Cristo Redentor revela el hombre a sí mismo'. Dignidad humana.", 
      de: "Johannes Paul II. 'Christus der Erlöser offenbart den Menschen dem Menschen'." 
    } 
  },
  { 
    id: 'w_jp2_tob', 
    startYear: 1979, 
    endYear: 1984, 
    type: 'writing', 
    name: { en: "The Theology of the Body", fr: "Théologie du Corps", es: "Teología del Cuerpo", de: "Theologie des Leibes" }, 
    description: { 
      en: "Pope John Paul II. Series of 129 audiences on the meaning of the human body, sexuality, and marriage.", 
      fr: "Jean-Paul II. Série d'audiences sur le sens du corps humain, la sexualité et le mariage.", 
      es: "Juan Pablo II. Audiencias sobre el significado del cuerpo humano, sexualidad y matrimonio.", 
      de: "Johannes Paul II. Katechesen über die Bedeutung des menschlichen Körpers und der Ehe." 
    } 
  },
  { 
    id: 'w_canon_law_1983', 
    startYear: 1983, 
    endYear: 1983, 
    type: 'writing', 
    name: { en: "Code of Canon Law", fr: "Code de Droit Canonique", es: "Código de Derecho Canónico", de: "Kodex des Kanonischen Rechts" }, 
    description: { 
      en: "Promulgated by John Paul II. The current governing law of the Latin Rite Catholic Church.", 
      fr: "Promulgué par Jean-Paul II. La loi actuelle de l'Église catholique de rite latin.", 
      es: "Promulgado por Juan Pablo II. La ley vigente de la Iglesia Católica de rito latino.", 
      de: "Promulgiert von Johannes Paul II. Das geltende Recht der lateinischen Kirche." 
    } 
  },
  { 
    id: 'w_ccc_1992', 
    startYear: 1992, 
    endYear: 1992, 
    type: 'writing', 
    name: { en: "Catechism of the Catholic Church", fr: "Catéchisme de l'Église Catholique", es: "Catecismo de la Iglesia Católica", de: "Katechismus der Katholischen Kirche" }, 
    description: { 
      en: "The first universal catechism in 400 years. A complete summary of Catholic belief, worship, morality, and prayer.", 
      fr: "Premier catéchisme universel en 400 ans. Résumé complet de la foi catholique.", 
      es: "Primer catecismo universal en 400 años. Resumen completo de la fe católica.", 
      de: "Erster Weltkatechismus seit 400 Jahren. Zusammenfassung des katholischen Glaubens." 
    } 
  },
  { 
    id: 'w_jp2_veritatis', 
    startYear: 1993, 
    endYear: 1993, 
    type: 'writing', 
    name: { en: "Veritatis Splendor", fr: "Veritatis Splendor", es: "Veritatis Splendor", de: "Veritatis Splendor" }, 
    description: { 
      en: "Pope John Paul II. On the Church's Moral Teaching. Reaffirms absolute moral truths and intrinsically evil acts.", 
      fr: "Jean-Paul II. Sur la morale. Réaffirme les vérités morales absolues et les actes intrinsèquement mauvais.", 
      es: "Juan Pablo II. Sobre la moral. Reafirma verdades morales absolutas y actos intrínsecamente malos.", 
      de: "Johannes Paul II. Über die Moral. Bekräftigt absolute moralische Wahrheiten." 
    } 
  },
  { 
    id: 'w_jp2_evangelium', 
    startYear: 1995, 
    endYear: 1995, 
    type: 'writing', 
    name: { en: "Evangelium Vitae", fr: "Evangelium Vitae", es: "Evangelium Vitae", de: "Evangelium Vitae" }, 
    description: { 
      en: "Pope John Paul II. The 'Gospel of Life'. Condemns the 'culture of death' (abortion, euthanasia) and promotes the sanctity of life.", 
      fr: "Jean-Paul II. 'L'Évangile de la Vie'. Condamne la 'culture de mort' (avortement, euthanasie).", 
      es: "Juan Pablo II. 'El Evangelio de la Vida'. Condena la 'cultura de la muerte' y promueve la santidad de la vida.", 
      de: "Johannes Paul II. 'Evangelium des Lebens'. Verurteilt die 'Kultur des Todes'." 
    } 
  },
  { 
    id: 'w_jp2_fides', 
    startYear: 1998, 
    endYear: 1998, 
    type: 'writing', 
    name: { en: "Fides et Ratio", fr: "Fides et Ratio", es: "Fides et Ratio", de: "Fides et Ratio" }, 
    description: { 
      en: "Pope John Paul II. Faith and Reason are like 'two wings on which the human spirit rises to the contemplation of truth'.", 
      fr: "Jean-Paul II. Foi et Raison sont 'les deux ailes qui permettent à l'esprit humain de s'élever'.", 
      es: "Juan Pablo II. Fe y Razón son 'las dos alas con las cuales el espíritu humano se eleva'.", 
      de: "Johannes Paul II. Glaube und Vernunft sind wie 'zwei Flügel, mit denen sich der Geist zur Wahrheit erhebt'." 
    } 
  },
  { 
    id: 'w_ratzinger_liturgy', 
    startYear: 2000, 
    endYear: 2000, 
    type: 'writing', 
    name: { en: "The Spirit of the Liturgy", fr: "L'Esprit de la Liturgie", es: "El Espíritu de la Liturgia", de: "Der Geist der Liturgie" }, 
    description: { 
      en: "Joseph Ratzinger (Benedict XVI). A masterpiece on the essence of worship, cosmic liturgy, and orientation in prayer.", 
      fr: "Joseph Ratzinger. Chef-d'œuvre sur l'essence du culte et l'orientation de la prière.", 
      es: "Joseph Ratzinger. Obra maestra sobre la esencia del culto y la orientación en la oración.", 
      de: "Joseph Ratzinger. Meisterwerk über das Wesen des Gottesdienstes und die Gebetsrichtung." 
    } 
  },
  { 
    id: 'w_benedict_jesus', 
    startYear: 2007, 
    endYear: 2012, 
    type: 'writing', 
    name: { en: "Jesus of Nazareth (Trilogy)", fr: "Jésus de Nazareth", es: "Jesús de Nazaret", de: "Jesus von Nazareth" }, 
    description: { 
      en: "Pope Benedict XVI. A scholarly yet spiritual examination of the life and person of Christ.", 
      fr: "Benoît XVI. Examen savant et spirituel de la vie et de la personne du Christ.", 
      es: "Benedicto XVI. Examen erudito y espiritual de la vida y persona de Cristo.", 
      de: "Benedikt XVI. Wissenschaftliche und geistliche Untersuchung der Person Jesu." 
    } 
  },
  { 
    id: 'w_benedict_summorum', 
    startYear: 2007, 
    endYear: 2007, 
    type: 'writing', 
    name: { en: "Summorum Pontificum", fr: "Summorum Pontificum", es: "Summorum Pontificum", de: "Summorum Pontificum" }, 
    description: { 
      en: "Pope Benedict XVI. Liberalized the use of the Traditional Latin Mass (Tridentine), calling it the 'Extraordinary Form'.", 
      fr: "Benoît XVI. Libéralisa l'usage de la Messe Tridentine (Forme Extraordinaire).", 
      es: "Benedicto XVI. Liberalizó el uso de la Misa Tridentina (Forma Extraordinaria).", 
      de: "Benedikt XVI. Erleichterte den Gebrauch der Tridentinischen Messe (Außerordentliche Form)." 
    } 
  },
  { 
    id: 'w_francis_laudato', 
    startYear: 2015, 
    endYear: 2015, 
    type: 'writing', 
    name: { en: "Laudato Si'", fr: "Laudato Si'", es: "Laudato Si'", de: "Laudato Si'" }, 
    description: { 
      en: "Pope Francis. On Care for Our Common Home. Integrates ecology, social justice, and spirituality.", 
      fr: "François. Sur la sauvegarde de la maison commune. Écologie, justice sociale et spiritualité.", 
      es: "Francisco. Sobre el cuidado de la casa común. Ecología, justicia social y espiritualidad.", 
      de: "Franziskus. Über die Sorge für das gemeinsame Haus. Ökologie und soziale Gerechtigkeit." 
    } 
  },
  { 
    id: 'w_diognetus', 
    startYear: 150, 
    endYear: 200, 
    type: 'writing', 
    name: { en: "Epistle to Diognetus", fr: "À Diognète", es: "Carta a Diogneto", de: "Diognetbrief" }, 
    description: { 
      en: "Anonymous apologetic masterpiece. Describes Christians as the 'soul of the world', living in the world but not of it.", 
      fr: "Chef-d'œuvre apologétique. Décrit les chrétiens comme 'l'âme du monde', vivant dans le monde sans en être.", 
      es: "Obra maestra de la apologética. Describe a los cristianos como el 'alma del mundo'.", 
      de: "Apologetisches Meisterwerk. Beschreibt Christen als die 'Seele der Welt'." 
    } 
  },
  { 
    id: 'w_polycarp_martyrdom', 
    startYear: 155, 
    endYear: 157, 
    type: 'writing', 
    name: { en: "Martyrdom of Polycarp", fr: "Martyre de Polycarpe", es: "Martirio de Policarpo", de: "Martyrium des Polykarp" }, 
    description: { 
      en: "The earliest authentic account of a Christian martyrdom outside the New Testament. Describes the fire arching around him.", 
      fr: "Le plus ancien récit authentique de martyre hors du NT. Décrit le feu formant une voûte autour de lui.", 
      es: "El relato auténtico más antiguo de un martirio fuera del NT. Describe el fuego arqueándose a su alrededor.", 
      de: "Ältester authentischer Märtyrerbericht außerhalb des NT. Beschreibt das Feuerwunder." 
    } 
  },
  { 
    id: 'w_gregory_nyssa_moses', 
    startYear: 390, 
    endYear: 392, 
    type: 'writing', 
    name: { en: "The Life of Moses", fr: "La Vie de Moïse", es: "Vida de Moisés", de: "Das Leben des Mose" }, 
    description: { 
      en: "St. Gregory of Nyssa. A mystical treatise interpreting the life of Moses as the soul's infinite progress (epektasis) toward God.", 
      fr: "St Grégoire de Nysse. Traité mystique interprétant la vie de Moïse comme le progrès infini de l'âme vers Dieu.", 
      es: "San Gregorio de Nisa. Tratado místico que interpreta la vida de Moisés como el progreso infinito del alma.", 
      de: "Hl. Gregor von Nyssa. Mystische Auslegung des Lebens von Mose als unendlicher Aufstieg zu Gott." 
    } 
  },
  { 
    id: 'w_gregory_great_job', 
    startYear: 578, 
    endYear: 595, 
    type: 'writing', 
    name: { en: "Moralia in Job", fr: "Morales sur Job", es: "Morales sobre Job", de: "Moralia in Job" }, 
    description: { 
      en: "St. Gregory the Great. Massive commentary on the Book of Job. A foundational text for medieval moral theology.", 
      fr: "St Grégoire le Grand. Commentaire massif sur Job. Texte fondateur de la théologie morale médiévale.", 
      es: "San Gregorio Magno. Comentario masivo sobre Job. Texto fundamental para la teología moral.", 
      de: "Hl. Gregor der Große. Umfangreicher Kommentar zu Hiob. Grundtext der mittelalterlichen Moraltheologie." 
    } 
  },
  { 
    id: 'w_golden_legend', 
    startYear: 1260, 
    endYear: 1266, 
    type: 'writing', 
    name: { en: "The Golden Legend", fr: "La Légende dorée", es: "La Leyenda Dorada", de: "Legenda Aurea" }, 
    description: { 
      en: "Jacobus de Voragine. A collection of hagiographies that shaped the artistic and devotional imagination of the Middle Ages.", 
      fr: "Jacques de Voragine. Collection d'hagiographies qui a façonné l'imaginaire médiéval.", 
      es: "Santiago de la Vorágine. Colección de hagiografías que moldeó la imaginación medieval.", 
      de: "Jacobus de Voragine. Sammlung von Heiligenlegenden, die das Mittelalter prägte." 
    } 
  },
  { 
    id: 'w_francis_flowers', 
    startYear: 1350, 
    endYear: 1350, 
    type: 'writing', 
    name: { en: "Little Flowers of St. Francis", fr: "Les Fioretti", es: "Florecillas de San Francisco", de: "Die Fioretti" }, 
    description: { 
      en: "Anonymous. A classic collection of miracles and stories about St. Francis of Assisi and his early followers.", 
      fr: "Anonyme. Collection classique de miracles et d'histoires sur Saint François et ses compagnons.", 
      es: "Anónimo. Colección clásica de milagros e historias sobre San Francisco.", 
      de: "Anonym. Klassische Sammlung von Wundern und Geschichten über den Hl. Franziskus." 
    } 
  },
  { 
    id: 'w_teresa_perfection', 
    startYear: 1566, 
    endYear: 1566, 
    type: 'writing', 
    name: { en: "The Way of Perfection", fr: "Le Chemin de la Perfection", es: "Camino de Perfección", de: "Weg der Vollkommenheit" }, 
    description: { 
      en: "St. Teresa of Avila. Practical advice on prayer and the contemplative life written for her nuns.", 
      fr: "Ste Thérèse d'Avila. Conseils pratiques sur la prière et la vie contemplative pour ses sœurs.", 
      es: "Sta. Teresa de Jesús. Consejos prácticos sobre la oración y la vida contemplativa.", 
      de: "Hl. Teresa von Avila. Praktische Ratschläge zum Gebet und kontemplativen Leben." 
    } 
  },
  { 
    id: 'w_brother_lawrence', 
    startYear: 1692, 
    endYear: 1692, 
    type: 'writing', 
    name: { en: "Practice of the Presence of God", fr: "Pratique de la présence de Dieu", es: "La Práctica de la Presencia de Dios", de: "Bruder Lorenz" }, 
    description: { 
      en: "Brother Lawrence. Collected letters of a Carmelite lay brother on finding God in simple tasks like washing dishes.", 
      fr: "Frère Laurent. Lettres sur comment trouver Dieu dans les tâches simples comme la vaisselle.", 
      es: "Hermano Lorenzo. Cartas sobre cómo hallar a Dios en tareas sencillas.", 
      de: "Bruder Lorenz. Briefe über das Finden Gottes in einfachen Tätigkeiten." 
    } 
  },
  { 
    id: 'w_alphonsus_will', 
    startYear: 1755, 
    endYear: 1755, 
    type: 'writing', 
    name: { en: "Uniformity with God's Will", fr: "Conformité à la volonté de Dieu", es: "Conformidad con la Voluntad de Dios", de: "Ergebung in den Willen Gottes" }, 
    description: { 
      en: "St. Alphonsus Liguori. A short but powerful treatise on finding peace by accepting all things as God's will.", 
      fr: "St Alphonse. Traité puissant sur la paix trouvée en acceptant tout comme volonté de Dieu.", 
      es: "San Alfonso. Tratado sobre encontrar la paz aceptando todo como voluntad de Dios.", 
      de: "Hl. Alfons. Traktat über den Frieden durch Annahme des göttlichen Willens." 
    } 
  },
  { 
    id: 'w_ineffabilis_deus', 
    startYear: 1854, 
    endYear: 1854, 
    type: 'writing', 
    name: { en: "Ineffabilis Deus", fr: "Ineffabilis Deus", es: "Ineffabilis Deus", de: "Ineffabilis Deus" }, 
    description: { 
      en: "Pope Pius IX. Apostolic Constitution defining the Dogma of the Immaculate Conception of the Blessed Virgin Mary.", 
      fr: "Pie IX. Définition du dogme de l'Immaculée Conception de la Vierge Marie.", 
      es: "Pío IX. Definición del Dogma de la Inmaculada Concepción de la Virgen María.", 
      de: "Pius IX. Definition des Dogmas der Unbefleckten Empfängnis Mariens." 
    } 
  },
  { 
    id: 'w_syllabus_errors', 
    startYear: 1864, 
    endYear: 1864, 
    type: 'writing', 
    name: { en: "Syllabus of Errors", fr: "Syllabus", es: "Syllabus", de: "Syllabus errorum" }, 
    description: { 
      en: "Pope Pius IX. A list of 80 condemned propositions regarding rationalism, liberalism, and modern society.", 
      fr: "Pie IX. Liste de 80 propositions condamnées concernant le rationalisme et le libéralisme.", 
      es: "Pío IX. Lista de 80 proposiciones condenadas sobre racionalismo y liberalismo.", 
      de: "Pius IX. Liste von 80 verurteilten Irrtümern des Rationalismus und Liberalismus." 
    } 
  },
  { 
    id: 'w_aeterni_patris', 
    startYear: 1879, 
    endYear: 1879, 
    type: 'writing', 
    name: { en: "Aeterni Patris", fr: "Aeterni Patris", es: "Aeterni Patris", de: "Aeterni Patris" }, 
    description: { 
      en: "Pope Leo XIII. Encyclical initiating the revival of Scholasticism and the philosophy of St. Thomas Aquinas.", 
      fr: "Léon XIII. Encyclique lançant le renouveau de la scolastique et de St Thomas d'Aquin.", 
      es: "León XIII. Encíclica que inicia el renacimiento de la escolástica y Santo Tomás.", 
      de: "Leo XIII. Enzyklika zur Wiederbelebung der Scholastik und des Thomas von Aquin." 
    } 
  },
  { 
    id: 'w_quam_singulari', 
    startYear: 1910, 
    endYear: 1910, 
    type: 'writing', 
    name: { en: "Quam Singulari", fr: "Quam Singulari", es: "Quam Singulari", de: "Quam Singulari" }, 
    description: { 
      en: "Pope St. Pius X. Decree lowering the age of First Communion to the age of reason (around 7).", 
      fr: "Pape St Pie X. Décret abaissant l'âge de la Première Communion à l'âge de raison (7 ans).", 
      es: "Papa S. Pío X. Decreto que baja la edad de la Primera Comunión a la edad de la razón.", 
      de: "Papst Hl. Pius X. Dekret zur Herabsetzung des Erstkommunionalters." 
    } 
  },
  { 
    id: 'w_chesterton_everlasting', 
    startYear: 1925, 
    endYear: 1925, 
    type: 'writing', 
    name: { en: "The Everlasting Man", fr: "L'Homme éternel", es: "El Hombre Eterno", de: "Der unvergängliche Mensch" }, 
    description: { 
      en: "G.K. Chesterton. History of humanity and Christ. C.S. Lewis credited this book with his conversion.", 
      fr: "G.K. Chesterton. Histoire de l'humanité et du Christ. C.S. Lewis lui doit sa conversion.", 
      es: "G.K. Chesterton. Historia de la humanidad y Cristo. Influyó en la conversión de C.S. Lewis.", 
      de: "G.K. Chesterton. C.S. Lewis schrieb diesem Buch seine Bekehrung zu." 
    } 
  },
  { 
    id: 'w_undset_kristin', 
    startYear: 1920, 
    endYear: 1922, 
    type: 'writing', 
    name: { en: "Kristin Lavransdatter", fr: "Kristin Lavransdatter", es: "Cristina, hija de Lavrans", de: "Kristin Lavransdatter" }, 
    description: { 
      en: "Sigrid Undset. Nobel Prize-winning trilogy depicting medieval Catholic life in Norway. A literary masterpiece of faith and sin.", 
      fr: "Sigrid Undset. Trilogie (Prix Nobel) sur la vie catholique médiévale en Norvège.", 
      es: "Sigrid Undset. Trilogía ganadora del Nobel sobre la vida católica medieval en Noruega.", 
      de: "Sigrid Undset. Nobelpreisgekrönte Trilogie über das mittelalterliche katholische Leben." 
    } 
  },
  { 
    id: 'w_piusxi_nazis', 
    startYear: 1937, 
    endYear: 1937, 
    type: 'writing', 
    name: { en: "Mit Brennender Sorge", fr: "Mit Brennender Sorge", es: "Mit Brennender Sorge", de: "Mit brennender Sorge" }, 
    description: { 
      en: "Pope Pius XI. Encyclical written in German condemning the Nazi regime and its racial ideology.", 
      fr: "Pie XI. Encyclique écrite en allemand condamnant le régime nazi et son racisme.", 
      es: "Pío XI. Encíclica en alemán condenando al régimen nazi y su racismo.", 
      de: "Pius XI. Enzyklika gegen den Nationalsozialismus und Rassenwahn." 
    } 
  },
  { 
    id: 'w_piusxii_mediator', 
    startYear: 1947, 
    endYear: 1947, 
    type: 'writing', 
    name: { en: "Mediator Dei", fr: "Mediator Dei", es: "Mediator Dei", de: "Mediator Dei" }, 
    description: { 
      en: "Pope Pius XII. Encyclical on the Sacred Liturgy. Condemned liturgical abuses while paving the way for organic reform.", 
      fr: "Pie XII. Encyclique sur la Sainte Liturgie. Condamna les abus tout en ouvrant la voie à la réforme.", 
      es: "Pío XII. Encíclica sobre la Sagrada Liturgia. Condenó abusos y preparó la reforma.", 
      de: "Pius XII. Enzyklika über die heilige Liturgie. Verurteilte Missbräuche, bereitete Reformen vor." 
    } 
  },
  { 
    id: 'w_day_loneliness', 
    startYear: 1952, 
    endYear: 1952, 
    type: 'writing', 
    name: { en: "The Long Loneliness", fr: "La Longue Solitude", es: "La Larga Soledad", de: "Einsam und geborgen" }, 
    description: { 
      en: "Dorothy Day. Autobiography of the co-founder of the Catholic Worker Movement. Radical social justice rooted in the Eucharist.", 
      fr: "Dorothy Day. Autobiographie de la cofondatrice du Catholic Worker. Justice sociale et Eucharistie.", 
      es: "Dorothy Day. Autobiografía de la cofundadora del Movimiento del Trabajador Católico.", 
      de: "Dorothy Day. Autobiographie der Mitbegründerin der Catholic Worker Bewegung." 
    } 
  },
  { 
    id: 'w_tolkien_lotr', 
    startYear: 1954, 
    endYear: 1955, 
    type: 'writing', 
    name: { en: "The Lord of the Rings", fr: "Le Seigneur des Anneaux", es: "El Señor de los Anillos", de: "Der Herr der Ringe" }, 
    description: { 
      en: "J.R.R. Tolkien. Described by the author as 'a fundamentally religious and Catholic work' dealing with grace, sacrifice, and providence.", 
      fr: "Tolkien. Décrit par l'auteur comme une 'œuvre fondamentalement religieuse et catholique'.", 
      es: "Tolkien. Descrita por el autor como una 'obra fundamentalmente religiosa y católica'.", 
      de: "Tolkien. Vom Autor als 'fundamental religiöses und katholisches Werk' bezeichnet." 
    } 
  },
  { 
    id: 'w_vatican2_sacrosanctum', 
    startYear: 1963, 
    endYear: 1963, 
    type: 'writing', 
    name: { en: "Sacrosanctum Concilium", fr: "Sacrosanctum Concilium", es: "Sacrosanctum Concilium", de: "Sacrosanctum Concilium" }, 
    description: { 
      en: "Vatican II. Constitution on the Sacred Liturgy. Called for active participation and revision of liturgical books.", 
      fr: "Vatican II. Constitution sur la Liturgie. Appel à la participation active et révision des rites.", 
      es: "Vaticano II. Constitución sobre la Liturgia. Llamado a la participación activa.", 
      de: "Zweites Vatikanum. Liturgiekonstitution. Tätige Teilnahme und Reform der Riten." 
    } 
  },
  { 
    id: 'w_vatican2_nostra', 
    startYear: 1965, 
    endYear: 1965, 
    type: 'writing', 
    name: { en: "Nostra Aetate", fr: "Nostra Aetate", es: "Nostra Aetate", de: "Nostra Aetate" }, 
    description: { 
      en: "Vatican II. Declaration on the Relation of the Church to Non-Christian Religions. Condemns antisemitism.", 
      fr: "Vatican II. Relations avec les religions non-chrétiennes. Condamne l'antisémitisme.", 
      es: "Vaticano II. Relación con religiones no cristianas. Condena el antisemitismo.", 
      de: "Zweites Vatikanum. Über das Verhältnis zu nichtchristlichen Religionen. Verurteilt Antisemitismus." 
    } 
  },
  { 
    id: 'w_vatican2_dignitatis', 
    startYear: 1965, 
    endYear: 1965, 
    type: 'writing', 
    name: { en: "Dignitatis Humanae", fr: "Dignitatis Humanae", es: "Dignitatis Humanae", de: "Dignitatis Humanae" }, 
    description: { 
      en: "Vatican II. Declaration on Religious Freedom. Asserts that the human person has a right to religious freedom based on dignity.", 
      fr: "Vatican II. Liberté religieuse. Affirme le droit de la personne à la liberté religieuse.", 
      es: "Vaticano II. Libertad religiosa. Afirma el derecho de la persona basado en su dignidad.", 
      de: "Zweites Vatikanum. Erklärung über die Religionsfreiheit." 
    } 
  },
  { 
    id: 'w_ratzinger_intro', 
    startYear: 1968, 
    endYear: 1968, 
    type: 'writing', 
    name: { en: "Introduction to Christianity", fr: "La Foi chrétienne", es: "Introducción al Cristianismo", de: "Einführung in das Christentum" }, 
    description: { 
      en: "Joseph Ratzinger (Benedict XVI). A profound explanation of the Apostles' Creed for the modern world.", 
      fr: "Joseph Ratzinger. Explication profonde du Credo pour le monde moderne.", 
      es: "Joseph Ratzinger. Explicación profunda del Credo para el mundo moderno.", 
      de: "Joseph Ratzinger. Tiefe Auslegung des Apostolischen Glaubensbekenntnisses." 
    } 
  },
  { 
    id: 'w_jp2_laborem', 
    startYear: 1981, 
    endYear: 1981, 
    type: 'writing', 
    name: { en: "Laborem Exercens", fr: "Laborem Exercens", es: "Laborem Exercens", de: "Laborem Exercens" }, 
    description: { 
      en: "Pope John Paul II. Encyclical on human work. Work is for man, not man for work. Priority of labor over capital.", 
      fr: "Jean-Paul II. Sur le travail humain. Priorité du travail sur le capital.", 
      es: "Juan Pablo II. Sobre el trabajo humano. Prioridad del trabajo sobre el capital.", 
      de: "Johannes Paul II. Über die menschliche Arbeit. Vorrang der Arbeit vor dem Kapital." 
    } 
  },
  { 
    id: 'w_jp2_sollicitudo', 
    startYear: 1987, 
    endYear: 1987, 
    type: 'writing', 
    name: { en: "Sollicitudo Rei Socialis", fr: "Sollicitudo Rei Socialis", es: "Sollicitudo Rei Socialis", de: "Sollicitudo Rei Socialis" }, 
    description: { 
      en: "Pope John Paul II. Social concern. Critiques both liberal capitalism and Marxist collectivism.", 
      fr: "Jean-Paul II. Critique à la fois le capitalisme libéral et le collectivisme marxiste.", 
      es: "Juan Pablo II. Crítica tanto el capitalismo liberal como el colectivismo marxista.", 
      de: "Johannes Paul II. Kritik an liberalem Kapitalismus und marxistischem Kollektivismus." 
    } 
  },
  { 
    id: 'w_jp2_crossing', 
    startYear: 1994, 
    endYear: 1994, 
    type: 'writing', 
    name: { en: "Crossing the Threshold of Hope", fr: "Entrez dans l'Espérance", es: "Cruzando el Umbral de la Esperanza", de: "Die Schwelle der Hoffnung" }, 
    description: { 
      en: "Pope John Paul II. Personal reflections answering questions on God, evil, other religions, and the future.", 
      fr: "Jean-Paul II. Réflexions personnelles sur Dieu, le mal et l'avenir.", 
      es: "Juan Pablo II. Reflexiones personales sobre Dios, el mal y el futuro.", 
      de: "Johannes Paul II. Persönliche Antworten auf Fragen zu Gott, dem Bösen und der Zukunft." 
    } 
  },
  { 
    id: 'w_jp2_unum', 
    startYear: 1995, 
    endYear: 1995, 
    type: 'writing', 
    name: { en: "Ut Unum Sint", fr: "Ut Unum Sint", es: "Ut Unum Sint", de: "Ut Unum Sint" }, 
    description: { 
      en: "Pope John Paul II. Encyclical on commitment to Ecumenism. 'That they may all be one'.", 
      fr: "Jean-Paul II. Encyclique sur l'engagement œcuménique.", 
      es: "Juan Pablo II. Encíclica sobre el compromiso ecuménico.", 
      de: "Johannes Paul II. Enzyklika über den Einsatz für die Ökumene." 
    } 
  },
  { 
    id: 'w_cdf_dominus', 
    startYear: 2000, 
    endYear: 2000, 
    type: 'writing', 
    name: { en: "Dominus Iesus", fr: "Dominus Iesus", es: "Dominus Iesus", de: "Dominus Iesus" }, 
    description: { 
      en: "Congregation for the Doctrine of the Faith (Ratzinger). Reaffirms Christ as the one Savior and the Catholic Church as the true Church.", 
      fr: "Ratzinger. Réaffirme le Christ comme unique Sauveur et l'Église catholique comme vraie Église.", 
      es: "Ratzinger. Reafirma a Cristo como único Salvador y a la Iglesia Católica como la verdadera.", 
      de: "Ratzinger. Bekräftigt Christus als einzigen Retter und die katholische Kirche als wahre Kirche." 
    } 
  },
  { 
    id: 'w_benedict_deus', 
    startYear: 2005, 
    endYear: 2005, 
    type: 'writing', 
    name: { en: "Deus Caritas Est", fr: "Deus Caritas Est", es: "Deus Caritas Est", de: "Deus Caritas Est" }, 
    description: { 
      en: "Pope Benedict XVI. 'God is Love'. Explores the relationship between eros (human love) and agape (divine love).", 
      fr: "Benoît XVI. 'Dieu est Amour'. Relation entre eros et agapè.", 
      es: "Benedicto XVI. 'Dios es Amor'. Explora la relación entre eros y ágape.", 
      de: "Benedikt XVI. 'Gott ist die Liebe'. Über das Verhältnis von Eros und Agape." 
    } 
  },
  { 
    id: 'w_benedict_spe', 
    startYear: 2007, 
    endYear: 2007, 
    type: 'writing', 
    name: { en: "Spe Salvi", fr: "Spe Salvi", es: "Spe Salvi", de: "Spe Salvi" }, 
    description: { 
      en: "Pope Benedict XVI. 'Saved by Hope'. A meditation on Christian hope against modern materialism and despair.", 
      fr: "Benoît XVI. 'Sauvés par l'Espérance'. Méditation contre le désespoir moderne.", 
      es: "Benedicto XVI. 'Salvados en la Esperanza'. Meditación contra la desesperanza moderna.", 
      de: "Benedikt XVI. 'Auf Hoffnung hin gerettet'. Über die christliche Hoffnung." 
    } 
  },
  { 
    id: 'w_benedict_caritas', 
    startYear: 2009, 
    endYear: 2009, 
    type: 'writing', 
    name: { en: "Caritas in Veritate", fr: "Caritas in Veritate", es: "Caritas in Veritate", de: "Caritas in Veritate" }, 
    description: { 
      en: "Pope Benedict XVI. Charity in Truth. Social encyclical addressing integral human development and global economics.", 
      fr: "Benoît XVI. L'Amour dans la Vérité. Développement humain intégral et économie.", 
      es: "Benedicto XVI. La Caridad en la Verdad. Desarrollo humano y economía global.", 
      de: "Benedikt XVI. Die Liebe in der Wahrheit. Integrale menschliche Entwicklung." 
    } 
  },
  { 
    id: 'w_francis_lumen', 
    startYear: 2013, 
    endYear: 2013, 
    type: 'writing', 
    name: { en: "Lumen Fidei", fr: "Lumen Fidei", es: "Lumen Fidei", de: "Lumen Fidei" }, 
    description: { 
      en: "Pope Francis (drafted by Benedict XVI). 'The Light of Faith'. Completes the trilogy on the theological virtues.", 
      fr: "François (et Benoît XVI). 'La Lumière de la Foi'. Complète la trilogie des vertus.", 
      es: "Francisco. 'La Luz de la Fe'. Completa la trilogía de las virtudes teologales.", 
      de: "Franziskus. 'Licht des Glaubens'. Vollendet die Trilogie über die Tugenden." 
    } 
  },
  { 
    id: 'w_francis_amoris', 
    startYear: 2016, 
    endYear: 2016, 
    type: 'writing', 
    name: { en: "Amoris Laetitia", fr: "Amoris Laetitia", es: "Amoris Laetitia", de: "Amoris Laetitia" }, 
    description: { 
      en: "Pope Francis. 'The Joy of Love'. Apostolic Exhortation on love in the family, pastoral care, and accompaniment.", 
      fr: "François. 'La Joie de l'Amour'. Sur l'amour dans la famille et l'accompagnement pastoral.", 
      es: "Francisco. 'La Alegría del Amor'. Sobre el amor en la familia y la pastoral.", 
      de: "Franziskus. 'Freude der Liebe'. Über die Liebe in der Familie." 
    } 
  },
  { 
    id: 'w_francis_gaudete', 
    startYear: 2018, 
    endYear: 2018, 
    type: 'writing', 
    name: { en: "Gaudete et Exsultate", fr: "Gaudete et Exsultate", es: "Gaudete et Exsultate", de: "Gaudete et Exsultate" }, 
    description: { 
      en: "Pope Francis. On the call to holiness in today's world. Holiness is not just for bishops/priests but for everyone.", 
      fr: "François. Appel à la sainteté dans le monde actuel pour tous.", 
      es: "Francisco. Sobre el llamado a la santidad en el mundo actual.", 
      de: "Franziskus. Über den Ruf zur Heiligkeit in der Welt von heute." 
    } 
  },
  { 
    id: 'w_francis_fratelli', 
    startYear: 2020, 
    endYear: 2020, 
    type: 'writing', 
    name: { en: "Fratelli Tutti", fr: "Fratelli Tutti", es: "Fratelli Tutti", de: "Fratelli Tutti" }, 
    description: { 
      en: "Pope Francis. On Fraternity and Social Friendship. A plea for global solidarity and peace in a divided world.", 
      fr: "François. Sur la fraternité et l'amitié sociale. Plaidoyer pour la solidarité mondiale.", 
      es: "Francisco. Sobre la fraternidad y la amistad social.", 
      de: "Franziskus. Über die Geschwisterlichkeit und die soziale Freundschaft." 
    } 
  },
  { 
    id: 'w_francis_desiderio', 
    startYear: 2022, 
    endYear: 2022, 
    type: 'writing', 
    name: { en: "Desiderio Desideravi", fr: "Desiderio Desideravi", es: "Desiderio Desideravi", de: "Desiderio Desideravi" }, 
    description: { 
      en: "Pope Francis. On the liturgical formation of the People of God. Reflections on the beauty of the Liturgy.", 
      fr: "François. Sur la formation liturgique du Peuple de Dieu.", 
      es: "Francisco. Sobre la formación litúrgica del Pueblo de Dios.", 
      de: "Franziskus. Über die liturgische Bildung des Volkes Gottes." 
    } 
  },
  { 
    id: 'w_francis_dilexit', 
    startYear: 2024, 
    endYear: 2024, 
    type: 'writing', 
    name: { en: "Dilexit Nos", fr: "Dilexit Nos", es: "Dilexit Nos", de: "Dilexit Nos" }, 
    description: { 
      en: "Pope Francis. Encyclical on the Human and Divine Love of the Heart of Jesus Christ. Reclaiming the Sacred Heart devotion.", 
      fr: "François. Encyclique sur l'Amour humain et divin du Cœur de Jésus.", 
      es: "Francisco. Encíclica sobre el Amor humano y divino del Corazón de Jesús.", 
      de: "Franziskus. Enzyklika über die menschliche und göttliche Liebe des Herzens Jesu." 
    } 
  },

  {
    id: 'w_luther_95theses',
    startYear: 1517,
    endYear: 1517,
    type: 'writing',
    name: { en: "The 95 Theses", fr: "Les 95 Thèses", es: "Las 95 Tesis", de: "Die 95 Thesen" },
    description: {
      en: "Martin Luther's list of propositions that sparked the Protestant revolt. While ostensibly about the abuse of indulgences, they contained the seeds of rebellion against papal authority. This document marks the tragic beginning of the fracture of Western Christendom and the rise of heresy.",
      fr: "La liste de propositions de Martin Luther qui a déclenché la révolte protestante. Bien qu'apparemment sur l'abus des indulgences, elles contenaient les germes de la rébellion contre l'autorité papale. Ce document marque le début tragique de la fracture de la chrétienté occidentale et la montée de l'hérésie.",
      es: "La lista de proposiciones de Martín Lutero que provocó la revuelta protestante. Aunque aparentemente sobre el abuso de las indulgencias, contenían las semillas de la rebelión contra la autoridad papal. Este documento marca el trágico comienzo de la fractura de la cristiandad occidental y el auge de la herejía.",
      de: "Martin Luthers Liste von Thesen, die den protestantischen Aufstand auslöste. Obwohl scheinbar über den Missbrauch von Ablässen, enthielten sie die Saat der Rebellion gegen die päpstliche Autorität. Dieses Dokument markiert den tragischen Beginn des Bruchs der westlichen Christenheit und den Aufstieg der Häresie."
    }
  },
  {
    id: 'w_luther_babylon',
    startYear: 1520,
    endYear: 1520,
    type: 'writing',
    name: { en: "On the Babylonian Captivity of the Church", fr: "Prélude sur la captivité babylonienne de l'Église", es: "La cautividad babilónica de la Iglesia", de: "Von der babylonischen Gefangenschaft der Kirche" },
    description: {
      en: "A radical text by Luther attacking the sacramental system. He reduced the seven sacraments to only two or three and denied the sacrificial nature of the Mass. This work demonstrated his complete break with Catholic tradition and his intent to dismantle the Church's means of grace.",
      fr: "Un texte radical de Luther attaquant le système sacramentel. Il a réduit les sept sacrements à seulement deux ou trois et a nié la nature sacrificielle de la Messe. Cette œuvre a démontré sa rupture complète avec la tradition catholique et son intention de démanteler les moyens de grâce de l'Église.",
      es: "Un texto radical de Lutero atacando el sistema sacramental. Redujo los siete sacramentos a solo dos o tres y negó la naturaleza sacrificial de la Misa. Esta obra demostró su ruptura completa con la tradición católica y su intención de desmantelar los medios de gracia de la Iglesia.",
      de: "Ein radikaler Text von Luther, der das sakramentale System angreift. Er reduzierte die sieben Sakramente auf nur zwei oder drei und leugnete den Opfercharakter der Messe. Dieses Werk zeigte seinen vollständigen Bruch mit der katholischen Tradition und seine Absicht, die Gnadenmittel der Kirche zu demontieren."
    }
  },
  {
    id: 'w_leo_exsurge',
    startYear: 1520,
    endYear: 1520,
    type: 'writing',
    name: { en: "Exsurge Domine", fr: "Exsurge Domine", es: "Exsurge Domine", de: "Exsurge Domine" },
    description: {
      en: "The Papal Bull issued by Pope Leo X condemning the errors of Martin Luther. It calls upon the Lord to rise up against the 'foxes that seek to destroy the vineyard'. It offered Luther a chance to recant his heresies, which he arrogantly refused by burning the document publicly.",
      fr: "La bulle papale émise par le pape Léon X condamnant les erreurs de Martin Luther. Elle appelle le Seigneur à se lever contre les 'renards qui cherchent à détruire la vigne'. Elle offrait à Luther une chance de rétracter ses hérésies, ce qu'il refusa avec arrogance en brûlant le document publiquement.",
      es: "La Bula Papal emitida por el Papa León X condenando los errores de Martín Lutero. Llama al Señor a levantarse contra los 'zorros que buscan destruir la viña'. Ofreció a Lutero la oportunidad de retractarse de sus herejías, lo cual rechazó arrogantemente quemando el documento públicamente.",
      de: "Die päpstliche Bulle von Papst Leo X., die die Irrtümer Martin Luthers verurteilt. Sie ruft den Herrn an, sich gegen die 'Füchse, die den Weinberg zerstören wollen', zu erheben. Sie bot Luther die Chance, seine Häresien zu widerrufen, was er arrogant ablehnte, indem er das Dokument öffentlich verbrannte."
    }
  },
  {
    id: 'w_fisher_defense',
    startYear: 1521,
    endYear: 1521,
    type: 'writing',
    name: { en: "Defense of the Seven Sacraments", fr: "Défense des sept sacrements", es: "Defensa de los siete sacramentos", de: "Verteidigung der sieben Sakramente" },
    description: {
      en: "A theological treatise officially attributed to Henry VIII but largely drafted by St. John Fisher and St. Thomas More. It systematically refuted Luther's attacks on the sacraments and the Mass, earning the King the title 'Defender of the Faith' before his own tragic apostasy.",
      fr: "Un traité théologique officiellement attribué à Henri VIII mais largement rédigé par St John Fisher et St Thomas More. Il réfutait systématiquement les attaques de Luther contre les sacrements et la Messe, valant au roi le titre de 'Défenseur de la Foi' avant sa propre apostasie tragique.",
      es: "Un tratado teológico atribuido oficialmente a Enrique VIII pero redactado en gran parte por San Juan Fisher y Santo Tomás Moro. Refutaba sistemáticamente los ataques de Lutero a los sacramentos y la Misa, ganando para el Rey el título de 'Defensor de la Fe' antes de su propia apostasía trágica.",
      de: "Eine theologische Abhandlung, die offiziell Heinrich VIII. zugeschrieben wird, aber größtenteils von Hl. John Fisher und Hl. Thomas Morus verfasst wurde. Sie widerlegte systematisch Luthers Angriffe auf die Sakramente und die Messe und brachte dem König den Titel 'Verteidiger des Glaubens' ein."
    }
  },
  {
    id: 'w_erasmus_freewill',
    startYear: 1524,
    endYear: 1524,
    type: 'writing',
    name: { en: "On the Freedom of the Will", fr: "Du libre arbitre", es: "Sobre el libre albedrío", de: "Vom freien Willen" },
    description: {
      en: "Erasmus of Rotterdam's brilliant critique of Luther's doctrine of predestination. He argued from Scripture and Tradition that grace does not destroy human freedom but cooperates with it. Luther responded with vitriol, denying that humans have any role in their own salvation.",
      fr: "Critique brillante d'Érasme de Rotterdam sur la doctrine de la prédestination de Luther. Il a soutenu à partir de l'Écriture et de la Tradition que la grâce ne détruit pas la liberté humaine mais coopère avec elle. Luther a répondu avec virulence, niant que les humains aient un rôle dans leur propre salut.",
      es: "La brillante crítica de Erasmo de Rotterdam a la doctrina de la predestinación de Lutero. Argumentó desde la Escritura y la Tradición que la gracia no destruye la libertad humana sino que coopera con ella. Lutero respondió con virulencia, negando que los humanos tengan algún papel en su propia salvación.",
      de: "Erasmus von Rotterdams brillante Kritik an Luthers Prädestinationslehre. Er argumentierte aus Schrift und Tradition, dass die Gnade die menschliche Freiheit nicht zerstört, sondern mit ihr zusammenarbeitet. Luther antwortete mit Vitriol und leugnete, dass Menschen eine Rolle in ihrem eigenen Heil haben."
    }
  },
  {
    id: 'w_luther_bondage',
    startYear: 1525,
    endYear: 1525,
    type: 'writing',
    name: { en: "The Bondage of the Will", fr: "Du serf arbitre", es: "La esclavitud de la voluntad", de: "De servo arbitrio" },
    description: {
      en: "Luther's response to Erasmus, revealing the darkest aspects of his theology. He denied free will entirely, asserting that humans are beasts ridden either by God or Satan with no choice. This grim fatalism undermines moral responsibility and contradicts the love of God.",
      fr: "Réponse de Luther à Érasme, révélant les aspects les plus sombres de sa théologie. Il a nié entièrement le libre arbitre, affirmant que les humains sont des bêtes montées soit par Dieu soit par Satan sans choix. Ce fatalisme sombre sape la responsabilité morale et contredit l'amour de Dieu.",
      es: "La respuesta de Lutero a Erasmo, revelando los aspectos más oscuros de su teología. Negó el libre albedrío por completo, afirmando que los humanos son bestias montadas por Dios o por Satanás sin elección. Este fatalismo sombrío socava la responsabilidad moral y contradice el amor de Dios.",
      de: "Luthers Antwort auf Erasmus, die die dunkelsten Aspekte seiner Theologie offenbart. Er leugnete den freien Willen vollständig und behauptete, Menschen seien Tiere, die entweder von Gott oder Satan geritten werden, ohne Wahl. Dieser düstere Fatalismus untergräbt die moralische Verantwortung."
    }
  },
  {
    id: 'w_zwingli_religion',
    startYear: 1525,
    endYear: 1525,
    type: 'writing',
    name: { en: "Commentary on True and False Religion", fr: "Commentaire sur la vraie et la fausse religion", es: "Comentario sobre la verdadera y la falsa religión", de: "Kommentar über die wahre und falsche Religion" },
    description: {
      en: "Huldrych Zwingli's manifesto which reduced the Eucharist to a mere symbol, stripping the liturgy of all mystery. He promoted iconoclasm, leading to the destruction of countless sacred statues and paintings, erasing centuries of Christian artistic heritage in Switzerland.",
      fr: "Manifeste de Huldrych Zwingli qui réduisait l'Eucharistie à un simple symbole, dépouillant la liturgie de tout mystère. Il a promu l'iconoclasme, conduisant à la destruction d'innombrables statues et peintures sacrées, effaçant des siècles de patrimoine artistique chrétien en Suisse.",
      es: "Manifiesto de Huldrych Zwingli que redujo la Eucaristía a un mero símbolo, despojando a la liturgia de todo misterio. Promovió la iconoclasia, lo que llevó a la destrucción de innumerables estatuas y pinturas sagradas, borrando siglos de patrimonio artístico cristiano en Suiza.",
      de: "Huldrych Zwinglis Manifest, das die Eucharistie auf ein bloßes Symbol reduzierte und die Liturgie jedes Geheimnisses beraubte. Er förderte den Bildersturm, was zur Zerstörung unzähliger heiliger Statuen und Gemälde führte und Jahrhunderte christlichen Erbes in der Schweiz auslöschte."
    }
  },
  {
    id: 'w_tyndale_bible',
    startYear: 1526,
    endYear: 1526,
    type: 'writing',
    name: { en: "Tyndale Bible", fr: "Bible de Tyndale", es: "Biblia de Tyndale", de: "Tyndale-Bibel" },
    description: {
      en: "An unauthorized English translation of the New Testament. Tyndale deliberately mistranslated key words to undermine Catholic doctrine, changing 'priest' to 'elder' and 'church' to 'congregation'. It was used as a tool to confuse the faithful and spread Protestant errors in England.",
      fr: "Une traduction anglaise non autorisée du Nouveau Testament. Tyndale a délibérément mal traduit des mots clés pour saper la doctrine catholique, changeant 'prêtre' en 'ancien' et 'église' en 'congrégation'. Elle a été utilisée comme un outil pour confondre les fidèles et répandre les erreurs protestantes.",
      es: "Una traducción inglesa no autorizada del Nuevo Testamento. Tyndale tradujo mal deliberadamente palabras clave para socavar la doctrina católica, cambiando 'sacerdote' por 'anciano' e 'iglesia' por 'congregación'. Fue utilizada como herramienta para confundir a los fieles y difundir errores protestantes.",
      de: "Eine nicht autorisierte englische Übersetzung des Neuen Testaments. Tyndale übersetzte Schlüsselwörter absichtlich falsch, um die katholische Lehre zu untergraben, und änderte 'Priester' in 'Ältester' und 'Kirche' in 'Versammlung'. Sie wurde genutzt, um die Gläubigen zu verwirren und protestantische Irrtümer zu verbreiten."
    }
  },
  {
    id: 'w_more_dialogue',
    startYear: 1529,
    endYear: 1529,
    type: 'writing',
    name: { en: "A Dialogue Concerning Heresies", fr: "Un dialogue concernant les hérésies", es: "Un diálogo sobre las herejías", de: "Ein Dialog über Häresien" },
    description: {
      en: "St. Thomas More's vigorous defense of the Church against Tyndale and Luther. He defends the veneration of images, pilgrimages, and the authority of the Church to interpret Scripture. More exposes the logical inconsistencies and social dangers of the new heresies.",
      fr: "La défense vigoureuse de l'Église par St Thomas More contre Tyndale et Luther. Il défend la vénération des images, les pèlerinages et l'autorité de l'Église pour interpréter l'Écriture. More expose les incohérences logiques et les dangers sociaux des nouvelles hérésies.",
      es: "La vigorosa defensa de la Iglesia por Santo Tomás Moro contra Tyndale y Lutero. Defiende la veneración de imágenes, las peregrinaciones y la autoridad de la Iglesia para interpretar las Escrituras. Moro expone las inconsistencias lógicas y los peligros sociales de las nuevas herejías.",
      de: "Die energische Verteidigung der Kirche durch Hl. Thomas Morus gegen Tyndale und Luther. Er verteidigt die Verehrung von Bildern, Wallfahrten und die Autorität der Kirche zur Auslegung der Schrift. Morus deckt die logischen Inkonsistenzen und sozialen Gefahren der neuen Häresien auf."
    }
  },
  {
    id: 'w_calvin_institutes',
    startYear: 1536,
    endYear: 1559,
    type: 'writing',
    name: { en: "Institutes of the Christian Religion", fr: "Institution de la religion chrétienne", es: "Institución de la religión cristiana", de: "Institutio Christianae Religionis" },
    description: {
      en: "John Calvin's systematic presentation of Protestant theology. It presents a grim view of God as an arbitrary tyrant who predestines souls to hell regardless of their actions. It attacks the Mass, the priesthood, and the papacy, laying the foundation for a rigid and joyless theocracy.",
      fr: "Présentation systématique de la théologie protestante par Jean Calvin. Elle présente une vision sombre de Dieu comme un tyran arbitraire qui prédestine les âmes à l'enfer quelles que soient leurs actions. Elle attaque la Messe, la prêtrise et la papauté, posant les bases d'une théocratie rigide.",
      es: "La presentación sistemática de la teología protestante de Juan Calvino. Presenta una visión sombría de Dios como un tirano arbitrario que predestina almas al infierno sin importar sus acciones. Ataca la Misa, el sacerdocio y el papado, sentando las bases de una teocracia rígida.",
      de: "Johannes Calvins systematische Darstellung der protestantischen Theologie. Sie präsentiert ein düsteres Bild von Gott als willkürlichem Tyrannen, der Seelen unabhängig von ihren Taten zur Hölle vorbestimmt. Sie greift die Messe, das Priestertum und das Papsttum an und legt das Fundament für eine starre Theokratie."
    }
  },
  {
    id: 'w_ignatius_exercises',
    startYear: 1548,
    endYear: 1548,
    type: 'writing',
    name: { en: "The Spiritual Exercises", fr: "Les Exercices Spirituels", es: "Ejercicios Espirituales", de: "Die Exerzitien" },
    description: {
      en: "The masterpiece of St. Ignatius of Loyola, founder of the Jesuits. These meditations teach total submission to God and the Church ('Thinking with the Church'). They became the spiritual engine of the Counter-Reformation, producing countless saints and missionaries who reclaimed Europe for the Faith.",
      fr: "Le chef-d'œuvre de St Ignace de Loyola, fondateur des Jésuites. Ces méditations enseignent la soumission totale à Dieu et à l'Église ('Sentir avec l'Église'). Elles sont devenues le moteur spirituel de la Contre-Réforme, produisant d'innombrables saints et missionnaires.",
      es: "La obra maestra de San Ignacio de Loyola, fundador de los Jesuitas. Estas meditaciones enseñan la sumisión total a Dios y a la Iglesia ('Sentir con la Iglesia'). Se convirtieron en el motor espiritual de la Contrarreforma, produciendo innumerables santos y misioneros.",
      de: "Das Meisterwerk des Hl. Ignatius von Loyola, Gründer der Jesuiten. Diese Meditationen lehren die völlige Unterwerfung unter Gott und die Kirche ('Denken mit der Kirche'). Sie wurden zum geistlichen Motor der Gegenreformation und brachten zahllose Heilige und Missionare hervor."
    }
  },
  {
    id: 'w_cranmer_prayerbook',
    startYear: 1549,
    endYear: 1552,
    type: 'writing',
    name: { en: "The Book of Common Prayer", fr: "Le Livre de la prière commune", es: "El Libro de Oración Común", de: "Das Buch des gemeinsamen Gebets" },
    description: {
      en: "Imposed by Thomas Cranmer on England, this book dismantled the ancient Catholic liturgy. It systematically removed all references to the Mass as a sacrifice and denied the Real Presence, replacing the holy altar with a mere table and confusing the faithful into heresy through lex orandi, lex credendi.",
      fr: "Imposé par Thomas Cranmer en Angleterre, ce livre a démantelé l'ancienne liturgie catholique. Il a systématiquement supprimé toutes les références à la Messe comme sacrifice et nié la Présence Réelle, remplaçant le saint autel par une simple table et confondant les fidèles dans l'hérésie.",
      es: "Impuesto por Thomas Cranmer en Inglaterra, este libro desmanteló la antigua liturgia católica. Eliminó sistemáticamente todas las referencias a la Misa como sacrificio y negó la Presencia Real, reemplazando el santo altar por una simple mesa y confundiendo a los fieles en la herejía.",
      de: "Von Thomas Cranmer England aufgezwungen, demontierte dieses Buch die alte katholische Liturgie. Es entfernte systematisch alle Verweise auf die Messe als Opfer und leugnete die Realpräsenz, ersetzte den heiligen Altar durch einen bloßen Tisch und führte die Gläubigen in die Häresie."
    }
  },
  {
    id: 'w_foxe_martyrs',
    startYear: 1563,
    endYear: 1563,
    type: 'writing',
    name: { en: "Foxe's Book of Martyrs", fr: "Le Livre des Martyrs de Foxe", es: "El libro de los mártires de Foxe", de: "Foxes Buch der Märtyrer" },
    description: {
      en: "A highly propagandistic work by John Foxe used to incite anti-Catholic hatred in England. It exaggerated Protestant suffering while ignoring the brutal torture and execution of Catholic priests and laypeople by the English state. It cemented a false narrative of Catholic cruelty.",
      fr: "Une œuvre hautement propagandiste de John Foxe utilisée pour inciter à la haine anti-catholique en Angleterre. Elle a exagéré la souffrance protestante tout en ignorant la torture brutale et l'exécution de prêtres et laïcs catholiques par l'État anglais. Elle a cimenté un faux récit de cruauté catholique.",
      es: "Una obra altamente propagandística de John Foxe utilizada para incitar al odio anticatólico en Inglaterra. Exageró el sufrimiento protestante mientras ignoraba la brutal tortura y ejecución de sacerdotes y laicos católicos por el estado inglés. Cimentó una falsa narrativa de crueldad católica.",
      de: "Ein hochgradig propagandistisches Werk von John Foxe, das genutzt wurde, um antikatholischen Hass in England zu schüren. Es übertrieb das protestantische Leiden und ignorierte die brutale Folter und Hinrichtung katholischer Priester durch den englischen Staat."
    }
  },
  {
    id: 'w_trent_catechism',
    startYear: 1566,
    endYear: 1566,
    type: 'writing',
    name: { en: "The Roman Catechism", fr: "Le Catéchisme Romain", es: "El Catecismo Romano", de: "Der Römische Katechismus" },
    description: {
      en: "Commissioned by the Council of Trent to combat the spread of Protestant errors. It provided a clear, systematic, and authoritative explanation of Catholic doctrine for pastors. It served as the gold standard for religious instruction for four hundred years, ensuring doctrinal purity.",
      fr: "Commandé par le Concile de Trente pour combattre la propagation des erreurs protestantes. Il fournissait une explication claire, systématique et autorisée de la doctrine catholique pour les pasteurs. Il a servi d'étalon-or pour l'instruction religieuse pendant quatre cents ans.",
      es: "Encargado por el Concilio de Trento para combatir la propagación de errores protestantes. Proporcionó una explicación clara, sistemática y autorizada de la doctrina católica para los pastores. Sirvió como el estándar de oro para la instrucción religiosa durante cuatrocientos años.",
      de: "Beauftragt vom Konzil von Trient, um die Verbreitung protestantischer Irrtümer zu bekämpfen. Er bot eine klare, systematische und autoritative Erklärung der katholischen Lehre für Pastoren. Er diente vierhundert Jahre lang als Goldstandard für den Religionsunterricht."
    }
  },
  {
    id: 'w_teresa_castle',
    startYear: 1577,
    endYear: 1577,
    type: 'writing',
    name: { en: "The Interior Castle", fr: "Le Château intérieur", es: "Las Moradas", de: "Die innere Burg" },
    description: {
      en: "St. Teresa of Avila's mystical masterpiece describing the soul's journey through seven mansions to union with God. In an age of rebellion and noise, Teresa called the Church back to the silence of prayer and the pursuit of holiness, showing that the true reform is internal.",
      fr: "Le chef-d'œuvre mystique de St Thérèse d'Avila décrivant le voyage de l'âme à travers sept demeures vers l'union avec Dieu. À une époque de rébellion, Thérèse a rappelé l'Église au silence de la prière et à la poursuite de la sainteté, montrant que la vraie réforme est intérieure.",
      es: "La obra maestra mística de Santa Teresa de Ávila que describe el viaje del alma a través de siete moradas hasta la unión con Dios. En una época de rebelión, Teresa llamó a la Iglesia al silencio de la oración y la búsqueda de la santidad, mostrando que la verdadera reforma es interior.",
      de: "Das mystische Meisterwerk der Hl. Teresa von Ávila, das die Reise der Seele durch sieben Wohnungen zur Vereinigung mit Gott beschreibt. In einer Zeit der Rebellion rief Teresa die Kirche zurück zur Stille des Gebets und zeigte, dass die wahre Reform innerlich ist."
    }
  },
  {
    id: 'w_john_cross_night',
    startYear: 1579,
    endYear: 1579,
    type: 'writing',
    name: { en: "Dark Night of the Soul", fr: "La Nuit obscure", es: "Noche oscura del alma", de: "Die dunkle Nacht der Seele" },
    description: {
      en: "A profound spiritual classic by St. John of the Cross explaining how God purifies the soul through trials and dryness. It provided a roadmap for authentic sanctity, contrasting the 'cheap grace' of the reformers with the demanding but rewarding path of the Cross.",
      fr: "Un classique spirituel profond de St Jean de la Croix expliquant comment Dieu purifie l'âme par des épreuves. Il a fourni une feuille de route pour une sainteté authentique, contrastant la 'grâce bon marché' des réformateurs avec le chemin exigeant mais gratifiant de la Croix.",
      es: "Un clásico espiritual profundo de San Juan de la Cruz que explica cómo Dios purifica el alma a través de pruebas. Proporcionó una hoja de ruta para la santidad auténtica, contrastando la 'gracia barata' de los reformadores con el camino exigente pero gratificante de la Cruz.",
      de: "Ein tiefgründiger geistlicher Klassiker des Hl. Johannes vom Kreuz, der erklärt, wie Gott die Seele durch Prüfungen reinigt. Er bot einen Fahrplan für authentische Heiligkeit und kontrastierte die 'billige Gnade' der Reformatoren mit dem anspruchsvollen Weg des Kreuzes."
    }
  },
  {
    id: 'w_campion_decem',
    startYear: 1581,
    endYear: 1581,
    type: 'writing',
    name: { en: "Decem Rationes (Ten Reasons)", fr: "Dix raisons", es: "Diez Razones", de: "Zehn Gründe" },
    description: {
      en: "A pamphlet written by the martyr St. Edmund Campion challenging the Anglican clergy to a debate. He listed ten reasons why Protestantism is philosophically and theologically bankrupt. It was secretly printed and distributed at Oxford, causing a sensation before his brutal execution.",
      fr: "Un pamphlet écrit par le martyr St Edmond Campion défiant le clergé anglican à un débat. Il a énuméré dix raisons pour lesquelles le protestantisme est philosophiquement et théologiquement en faillite. Il a été secrètement imprimé et distribué à Oxford avant son exécution brutale.",
      es: "Un panfleto escrito por el mártir San Edmundo Campion desafiando al clero anglicano a un debate. Enumeró diez razones por las que el protestantismo está filosófica y teológicamente en bancarrota. Fue impreso y distribuido secretamente en Oxford antes de su brutal ejecución.",
      de: "Eine Streitschrift des Märtyrers Hl. Edmund Campion, die den anglikanischen Klerus zu einer Debatte herausforderte. Er führte zehn Gründe auf, warum der Protestantismus bankrott ist. Sie wurde heimlich in Oxford verteilt und sorgte vor seiner brutalen Hinrichtung für Aufsehen."
    }
  },
  {
    id: 'w_allen_defense',
    startYear: 1584,
    endYear: 1584,
    type: 'writing',
    name: { en: "Defense of English Catholics", fr: "Défense des catholiques anglais", es: "Defensa de los católicos ingleses", de: "Verteidigung der englischen Katholiken" },
    description: {
      en: "Written by Cardinal William Allen, founder of the seminary at Douai. It refuted the English government's claim that Catholics were punished for treason rather than religion. He documented the systematic persecution of the Faith and justified the missionary efforts to save souls in England.",
      fr: "Écrit par le cardinal William Allen. Il réfutait l'affirmation du gouvernement anglais selon laquelle les catholiques étaient punis pour trahison plutôt que pour religion. Il a documenté la persécution systématique de la Foi et justifié les efforts missionnaires pour sauver les âmes en Angleterre.",
      es: "Escrito por el Cardenal William Allen. Refutaba la afirmación del gobierno inglés de que los católicos eran castigados por traición y no por religión. Documentó la persecución sistemática de la Fe y justificó los esfuerzos misioneros para salvar almas en Inglaterra.",
      de: "Geschrieben von Kardinal William Allen. Sie widerlegte die Behauptung der englischen Regierung, Katholiken würden wegen Verrats und nicht wegen ihrer Religion bestraft. Er dokumentierte die systematische Verfolgung des Glaubens und rechtfertigte die missionarischen Bemühungen."
    }
  },
  {
    id: 'w_sanders_schism',
    startYear: 1585,
    endYear: 1585,
    type: 'writing',
    name: { en: "Rise and Growth of the Anglican Schism", fr: "Origine et progrès du schisme anglican", es: "Origen y progreso del cisma anglicano", de: "Ursprung und Fortschritt des anglikanischen Schismas" },
    description: {
      en: "A historical account by Nicholas Sanders exposing the lust, greed, and political maneuvering behind Henry VIII's break with Rome. It shattered the myth of a theological reformation, revealing the sordid origins of the Church of England as a product of royal adultery and theft.",
      fr: "Un compte rendu historique de Nicholas Sanders exposant la luxure et l'avidité derrière la rupture d'Henri VIII avec Rome. Il a brisé le mythe d'une réforme théologique, révélant les origines sordides de l'Église d'Angleterre comme un produit de l'adultère royal et du vol.",
      es: "Un relato histórico de Nicholas Sanders que expone la lujuria y la codicia detrás de la ruptura de Enrique VIII con Roma. Destrozó el mito de una reforma teológica, revelando los orígenes sórdidos de la Iglesia de Inglaterra como producto del adulterio real y el robo.",
      de: "Ein historischer Bericht von Nicholas Sanders, der die Lust und Gier hinter Heinrichs VIII. Bruch mit Rom aufdeckt. Er zerstörte den Mythos einer theologischen Reformation und enthüllte die schmutzigen Ursprünge der Kirche von England als Produkt von königlichem Ehebruch und Diebstahl."
    }
  },
  {
    id: 'w_bellarmine_controversies',
    startYear: 1586,
    endYear: 1593,
    type: 'writing',
    name: { en: "Disputations on the Controversies", fr: "Disputes sur les controverses", es: "Disputas sobre las controversias", de: "Disputationen über die Kontroversen" },
    description: {
      en: "The definitive intellectual response to Protestantism by St. Robert Bellarmine. This massive work systematically dismantled every Protestant argument against the Papacy, the Church, and the Sacraments. It was so effective that Protestant universities created special chairs solely to attempt to refute it.",
      fr: "La réponse intellectuelle définitive au protestantisme par St Robert Bellarmin. Cette œuvre massive a systématiquement démantelé chaque argument protestant contre la Papauté et les Sacrements. Elle était si efficace que les universités protestantes ont créé des chaires spéciales pour tenter de la réfuter.",
      es: "La respuesta intelectual definitiva al protestantismo por San Roberto Belarmino. Esta obra masiva desmanteló sistemáticamente cada argumento protestante contra el Papado y los Sacramentos. Fue tan efectiva que las universidades protestantes crearon cátedras especiales solo para intentar refutarla.",
      de: "Die definitive intellektuelle Antwort auf den Protestantismus von Hl. Robert Bellarmin. Dieses massive Werk demontierte systematisch jedes protestantische Argument gegen das Papsttum. Es war so effektiv, dass protestantische Universitäten spezielle Lehrstühle schufen, nur um zu versuchen, es zu widerlegen."
    }
  },
  {
    id: 'w_baronius_annales',
    startYear: 1588,
    endYear: 1607,
    type: 'writing',
    name: { en: "Annales Ecclesiastici", fr: "Annales Ecclesiastici", es: "Annales Ecclesiastici", de: "Annales Ecclesiastici" },
    description: {
      en: "A monumental history of the Church written by Cardinal Caesar Baronius to refute the 'Magdeburg Centuries', a Protestant history that claimed the Church had become corrupt. Baronius used vast archives to prove the continuity of Catholic teaching and practice from the Apostolic age.",
      fr: "Une histoire monumentale de l'Église écrite par le cardinal Caesar Baronius pour réfuter les 'Centuries de Magdebourg', une histoire protestante prétendant que l'Église était devenue corrompue. Baronius a utilisé de vastes archives pour prouver la continuité de l'enseignement catholique.",
      es: "Una historia monumental de la Iglesia escrita por el Cardenal César Baronio para refutar las 'Centurias de Magdeburgo'. Baronio utilizó vastos archivos para probar la continuidad de la enseñanza y práctica católica desde la era Apostólica.",
      de: "Eine monumentale Kirchengeschichte von Kardinal Caesar Baronius, um die 'Magdeburger Zenturien' zu widerlegen. Baronius nutzte riesige Archive, um die Kontinuität der katholischen Lehre und Praxis seit dem apostolischen Zeitalter zu beweisen."
    }
  },
  {
    id: 'w_sales_controversy',
    startYear: 1595,
    endYear: 1596,
    type: 'writing',
    name: { en: "The Catholic Controversy", fr: "Les Controverses", es: "La Controversia Católica", de: "Die katholische Kontroverse" },
    description: {
      en: "A collection of tracts by St. Francis de Sales used to convert the Calvinist region of Chablais. With gentleness and logic, he showed the lack of authority in Protestant ministers and the necessity of the Catholic Church. His efforts famously brought 72,000 Protestants back to the Faith.",
      fr: "Une collection de tracts de St François de Sales utilisée pour convertir la région calviniste du Chablais. Avec douceur et logique, il a montré le manque d'autorité des ministres protestants et la nécessité de l'Église catholique. Ses efforts ont ramené 72 000 protestants à la Foi.",
      es: "Una colección de tratados de San Francisco de Sales utilizada para convertir la región calvinista de Chablais. Con dulzura y lógica, mostró la falta de autoridad de los ministros protestantes. Sus esfuerzos devolvieron a 72.000 protestantes a la Fe.",
      de: "Eine Sammlung von Traktaten des Hl. Franz von Sales zur Bekehrung der calvinistischen Region Chablais. Mit Sanftmut und Logik zeigte er den Mangel an Autorität protestantischer Pastoren auf. Seine Bemühungen brachten 72.000 Protestanten zurück zum Glauben."
    }
  },
  {
    id: 'w_sales_devout',
    startYear: 1609,
    endYear: 1609,
    type: 'writing',
    name: { en: "Introduction to the Devout Life", fr: "Introduction à la vie dévote", es: "Introducción a la vida devota", de: "Anleitung zum frommen Leben" },
    description: {
      en: "A classic by St. Francis de Sales showing that holiness is possible for laypeople in the world, not just monks. It countered the Protestant claim that Catholicism created a spiritual elite while neglecting the common man. It teaches how to turn daily work and trials into prayer.",
      fr: "Un classique de St François de Sales montrant que la sainteté est possible pour les laïcs dans le monde. Il contrait l'affirmation protestante selon laquelle le catholicisme créait une élite spirituelle. Il enseigne comment transformer le travail quotidien et les épreuves en prière.",
      es: "Un clásico de San Francisco de Sales que muestra que la santidad es posible para los laicos en el mundo. Contrarrestó la afirmación protestante de que el catolicismo creaba una élite espiritual. Enseña cómo convertir el trabajo diario y las pruebas en oración.",
      de: "Ein Klassiker des Hl. Franz von Sales, der zeigt, dass Heiligkeit für Laien in der Welt möglich ist. Er widersprach der protestantischen Behauptung, der Katholizismus schaffe eine geistliche Elite. Er lehrt, wie man tägliche Arbeit und Prüfungen in Gebet verwandelt."
    }
  },
  {
    id: 'w_montfort_mary',
    startYear: 1712,
    endYear: 1712,
    type: 'writing',
    name: { en: "True Devotion to Mary", fr: "Traité de la vraie dévotion à la Sainte Vierge", es: "Tratado de la verdadera devoción", de: "Abhandlung über die wahre Marienverehrung" },
    description: {
      en: "St. Louis de Montfort's treatise defending Marian devotion against Jansenists and Protestants who minimized her role. He argues that the surest and easiest way to Jesus is through Mary, advocating for a total consecration to her as the 'Slave of Jesus in Mary'.",
      fr: "Traité de St Louis-Marie Grignion de Montfort défendant la dévotion mariale contre les jansénistes et les protestants. Il soutient que le chemin le plus sûr vers Jésus passe par Marie, prônant une consécration totale à elle en tant qu''Esclave de Jésus en Marie'.",
      es: "Tratado de San Luis de Montfort defendiendo la devoción mariana contra jansenistas y protestantes. Argumenta que el camino más seguro hacia Jesús es a través de María, abogando por una consagración total a ella como 'Esclavo de Jesús en María'.",
      de: "Die Abhandlung des Hl. Louis de Montfort verteidigt die Marienverehrung gegen Jansenisten und Protestanten. Er argumentiert, dass der sicherste Weg zu Jesus über Maria führt, und plädiert für eine völlige Weihe an sie als 'Sklave Jesu in Maria'."
    }
  },
  {
    id: 'w_liguori_glories',
    startYear: 1750,
    endYear: 1750,
    type: 'writing',
    name: { en: "The Glories of Mary", fr: "Les Gloires de Marie", es: "Las Glorias de María", de: "Die Herrlichkeiten Mariens" },
    description: {
      en: "St. Alphonsus Liguori's passionate defense of the Virgin Mary as the Mediatrix of all Graces. Written to counter cold rationalism and Protestant skepticism, it compiles centuries of Church Fathers and saints' teachings to prove Mary's powerful intercession for sinners.",
      fr: "La défense passionnée de St Alphonse de Liguori de la Vierge Marie comme Médiatrice de toutes grâces. Écrit pour contrer le rationalisme froid et le scepticisme protestant, il compile des siècles d'enseignements pour prouver la puissante intercession de Marie.",
      es: "La apasionada defensa de San Alfonso María de Ligorio de la Virgen María como Mediadora de todas las Gracias. Escrito para contrarrestar el racionalismo frío y el escepticismo protestante, compila siglos de enseñanzas para probar la poderosa intercesión de María.",
      de: "Die leidenschaftliche Verteidigung der Jungfrau Maria als Mittlerin aller Gnaden durch den Hl. Alfons von Liguori. Geschrieben gegen kalten Rationalismus und protestantische Skepsis, beweist es Marias mächtige Fürsprache für Sünder."
    }
  },
  {
    id: 'w_newman_development',
    startYear: 1845,
    endYear: 1845,
    type: 'writing',
    name: { en: "Essay on the Development of Christian Doctrine", fr: "Essai sur le développement de la doctrine chrétienne", es: "Ensayo sobre el desarrollo de la doctrina cristiana", de: "Über die Entwicklung der Glaubenslehre" },
    description: {
      en: "Written by John Henry Newman as he converted from Anglicanism to Catholicism. He demonstrates that Protestantism is a static corruption, whereas Catholicism is the vibrant, organic growth of the original seed planted by Christ. He famously concluded: 'To be deep in history is to cease to be a Protestant'.",
      fr: "Écrit par John Henry Newman lors de sa conversion de l'anglicanisme au catholicisme. Il démontre que le protestantisme est une corruption statique, tandis que le catholicisme est la croissance organique de la semence originale. Il a conclu : 'Approfondir l'histoire, c'est cesser d'être protestant'.",
      es: "Escrito por John Henry Newman durante su conversión del anglicanismo. Demuestra que el protestantismo es una corrupción estática, mientras que el catolicismo es el crecimiento orgánico de la semilla original. Concluyó famosamente: 'Profundizar en la historia es dejar de ser protestante'.",
      de: "Geschrieben von John Henry Newman während seiner Konversion. Er zeigt, dass der Protestantismus eine statische Korruption ist, während der Katholizismus das organische Wachstum der ursprünglichen Saat ist. Er schloss berühmt: 'Tief in der Geschichte zu sein bedeutet, aufzuhören, Protestant zu sein'."
    }
  },
  {
    id: 'w_piusix_syllabus',
    startYear: 1864,
    endYear: 1864,
    type: 'writing',
    name: { en: "Syllabus of Errors", fr: "Syllabus", es: "Syllabus", de: "Syllabus errorum" },
    description: {
      en: "A list of 80 condemned propositions by Pope Pius IX. It targeted the errors of modernism, liberalism, and socialism which grew out of the Protestant rebellion. It firmly asserted the Church's right to govern herself and rejected the idea that the Pope must reconcile himself with 'progress' and modern civilization.",
      fr: "Une liste de 80 propositions condamnées par le pape Pie IX. Elle visait les erreurs du modernisme, du libéralisme et du socialisme issues de la rébellion protestante. Elle affirmait fermement le droit de l'Église à se gouverner elle-même et rejetait l'idée que le Pape doive se réconcilier avec le 'progrès'.",
      es: "Una lista de 80 proposiciones condenadas por el Papa Pío IX. Apuntaba a los errores del modernismo y liberalismo surgidos de la rebelión protestante. Afirmó firmemente el derecho de la Iglesia a gobernarse a sí misma y rechazó la idea de que el Papa deba reconciliarse con el 'progreso'.",
      de: "Eine Liste von 80 verurteilten Thesen von Papst Pius IX. Sie richtete sich gegen die Irrtümer des Modernismus und Liberalismus, die aus der protestantischen Rebellion erwuchsen. Sie bekräftigte das Recht der Kirche auf Selbstverwaltung und lehnte die Anpassung an den 'Fortschritt' ab."
    }
  },
  {
    id: 'w_leo_aeterni',
    startYear: 1879,
    endYear: 1879,
    type: 'writing',
    name: { en: "Aeterni Patris", fr: "Aeterni Patris", es: "Aeterni Patris", de: "Aeterni Patris" },
    description: {
      en: "Encyclical by Pope Leo XIII restoring the philosophy of St. Thomas Aquinas. Against the confusion of modern philosophies birthed by the Reformation's subjectivism, the Pope pointed to Thomism as the surest guide for faith and reason, launching a massive intellectual revival in the Church.",
      fr: "Encyclique du pape Léon XIII restaurant la philosophie de St Thomas d'Aquin. Contre la confusion des philosophies modernes nées du subjectivisme de la Réforme, le Pape a désigné le thomisme comme le guide le plus sûr, lançant un renouveau intellectuel massif.",
      es: "Encíclica del Papa León XIII restaurando la filosofía de Santo Tomás de Aquino. Contra la confusión de las filosofías modernas nacidas del subjetivismo de la Reforma, el Papa señaló al tomismo como la guía más segura, lanzando un renacimiento intelectual masivo.",
      de: "Enzyklika von Papst Leo XIII. zur Wiederherstellung der Philosophie des Hl. Thomas von Aquin. Gegen die Verwirrung moderner Philosophien, die aus dem Subjektivismus der Reformation entstanden, wies der Papst auf den Thomismus als sichersten Führer hin."
    }
  },
  {
    id: 'w_piusx_pascendi',
    startYear: 1907,
    endYear: 1907,
    type: 'writing',
    name: { en: "Pascendi Dominici Gregis", fr: "Pascendi Dominici Gregis", es: "Pascendi Dominici Gregis", de: "Pascendi Dominici Gregis" },
    description: {
      en: "St. Pius X's encyclical condemning Modernism as the 'synthesis of all heresies'. It exposed how Protestant critical methods were infiltrating the Church to destroy dogma from within. The Pope imposed the Oath Against Modernism to protect the clergy from these insidious errors.",
      fr: "Encyclique de St Pie X condamnant le modernisme comme la 'synthèse de toutes les hérésies'. Elle exposait comment les méthodes critiques protestantes infiltraient l'Église pour détruire le dogme de l'intérieur. Le Pape a imposé le Serment antimoderniste pour protéger le clergé.",
      es: "Encíclica de San Pío X condenando el Modernismo como la 'síntesis de todas las herejías'. Expuso cómo los métodos críticos protestantes se infiltraban en la Iglesia para destruir el dogma desde dentro. El Papa impuso el Juramento Antimodernista para proteger al clero.",
      de: "Enzyklika des Hl. Pius X., die den Modernismus als 'Synthese aller Häresien' verurteilt. Sie deckte auf, wie protestantische kritische Methoden die Kirche infiltrierten, um das Dogma von innen zu zerstören. Der Papst führte den Antimodernisteneid ein, um den Klerus zu schützen."
    }
  }

];
// 2. Add this new array at the very bottom of the file:
export const KINGS: TimelineEvent[] = [
  {
    id: 'k_constantine',
    startYear: 306,
    endYear: 337,
    type: 'king',
    name: { en: "Constantine the Great", fr: "Constantin le Grand", es: "Constantino el Grande", de: "Konstantin der Große" },
    description: {
      en: "The first Christian Roman Emperor. He issued the Edict of Milan in 313, granting freedom to the Church and ending centuries of persecution. He convened the Council of Nicaea to resolve the Arian heresy and built the original St. Peter's Basilica.",
      fr: "Le premier empereur romain chrétien. Il a promulgué l'Édit de Milan en 313, accordant la liberté à l'Église et mettant fin à des siècles de persécution. Il a convoqué le Concile de Nicée pour résoudre l'hérésie arienne et a construit la première basilique Saint-Pierre.",
      es: "El primer emperador romano cristiano. Promulgó el Edicto de Milán en 313, otorgando libertad a la Iglesia y poniendo fin a siglos de persecución. Convocó el Concilio de Nicea para resolver la herejía arriana y construyó la antigua Basílica de San Pedro.",
      de: "Der erste christliche römische Kaiser. Er erließ 313 das Edikt von Mailand, das der Kirche Freiheit gewährte und Jahrhunderte der Verfolgung beendete. Er berief das Konzil von Nicäa ein, um die arianische Häresie zu lösen, und baute den alten Petersdom."
    }
  },
  {
    id: 'k_theodosius',
    startYear: 379,
    endYear: 395,
    type: 'king',
    name: { en: "Theodosius I", fr: "Théodose Ier", es: "Teodosio I", de: "Theodosius I." },
    description: {
      en: "He established Nicene Christianity as the official state religion of the Roman Empire with the Edict of Thessalonica. He famously submitted to the penance imposed by St. Ambrose of Milan after the Massacre of Thessalonica, demonstrating that even emperors are subject to God's law.",
      fr: "Il a établi le christianisme de Nicée comme religion d'État officielle de l'Empire romain avec l'Édit de Thessalonique. Il s'est soumis à la pénitence imposée par St Ambroise de Milan, démontrant que même les empereurs sont soumis à la loi de Dieu.",
      es: "Estableció el cristianismo niceno como la religión oficial del estado del Imperio Romano. Se sometió famosamente a la penitencia impuesta por San Ambrosio de Milán, demostrando que incluso los emperadores están sujetos a la ley de Dios.",
      de: "Er etablierte das nicaeanische Christentum als offizielle Staatsreligion des Römischen Reiches. Er unterwarf sich berühmt der Buße, die ihm vom Hl. Ambrosius von Mailand auferlegt wurde, und zeigte damit, dass auch Kaiser dem Gesetz Gottes unterworfen sind."
    }
  },
  {
    id: 'k_clovis',
    startYear: 481,
    endYear: 511,
    type: 'king',
    name: { en: "Clovis I", fr: "Clovis Ier", es: "Clodoveo I", de: "Chlodwig I." },
    description: {
      en: "King of the Franks and the first Germanic king to accept Catholic baptism rather than Arianism. His conversion at Reims led to the title 'Eldest Daughter of the Church' for France and paved the way for the Christianization of Western Europe.",
      fr: "Roi des Francs et premier roi germanique à accepter le baptême catholique plutôt que l'arianisme. Sa conversion à Reims a valu à la France le titre de 'Fille aînée de l'Église' et a ouvert la voie à la christianisation de l'Europe occidentale.",
      es: "Rey de los francos y primer rey germánico en aceptar el bautismo católico en lugar del arrianismo. Su conversión en Reims llevó al título de 'Hija mayor de la Iglesia' para Francia y allanó el camino para la cristianización de Europa Occidental.",
      de: "König der Franken und der erste germanische König, der die katholische Taufe anstelle des Arianismus annahm. Seine Bekehrung in Reims führte zum Titel 'Älteste Tochter der Kirche' für Frankreich und ebnete den Weg für die Christianisierung Westeuropas."
    }
  },
  {
    id: 'k_justinian',
    startYear: 527,
    endYear: 565,
    type: 'king',
    name: { en: "Justinian I", fr: "Justinien Ier", es: "Justiniano I", de: "Justinian I." },
    description: {
      en: "Byzantine Emperor who sought to restore the Empire's greatness. He constructed the Hagia Sophia and codified Roman Law (Corpus Juris Civilis), which became the foundation of civil law in Christian Europe. He worked to suppress paganism and heresy.",
      fr: "Empereur byzantin qui a cherché à restaurer la grandeur de l'Empire. Il a construit Sainte-Sophie et codifié le droit romain, qui est devenu le fondement du droit civil dans l'Europe chrétienne. Il a œuvré pour supprimer le paganisme et l'hérésie.",
      es: "Emperador bizantino que buscó restaurar la grandeza del Imperio. Construyó Santa Sofía y codificó el Derecho Romano, que se convirtió en la base del derecho civil en la Europa cristiana. Trabajó para suprimir el paganismo y la herejía.",
      de: "Byzantinischer Kaiser, der die Größe des Reiches wiederherstellen wollte. Er baute die Hagia Sophia und kodifizierte das römische Recht, das zur Grundlage des Zivilrechts im christlichen Europa wurde. Er arbeitete daran, das Heidentum und die Häresie zu unterdrücken."
    }
  },
  {
    id: 'k_recared',
    startYear: 586,
    endYear: 601,
    type: 'king',
    name: { en: "Reccared I", fr: "Récarède Ier", es: "Recaredo I", de: "Rekkar I." },
    description: {
      en: "Visigothic King of Spain who renounced the Arian heresy and converted to Catholicism at the Third Council of Toledo in 589. This pivotal moment united the Visigothic nobility with the Hispano-Roman population under the Catholic faith.",
      fr: "Roi wisigoth d'Espagne qui a renoncé à l'hérésie arienne et s'est converti au catholicisme au troisième concile de Tolède en 589. Ce moment charnière a uni la noblesse wisigothe à la population hispano-romaine sous la foi catholique.",
      es: "Rey visigodo de España que renunció a la herejía arriana y se convirtió al catolicismo en el Tercer Concilio de Toledo en 589. Este momento crucial unió a la nobleza visigoda con la población hispano-romana bajo la fe católica.",
      de: "Westgotenkönig von Spanien, der der arianischen Häresie abschwor und 589 auf dem Dritten Konzil von Toledo zum Katholizismus konvertierte. Dieser entscheidende Moment vereinte den westgotischen Adel mit der hispano-römischen Bevölkerung unter dem katholischen Glauben."
    }
  },
  {
    id: 'k_heraclius',
    startYear: 610,
    endYear: 641,
    type: 'king',
    name: { en: "Heraclius", fr: "Héraclius", es: "Heraclio", de: "Herakleios" },
    description: {
      en: "Byzantine Emperor who defeated the Persian Empire and recovered the True Cross, returning it to Jerusalem in triumph. This event is commemorated in the Feast of the Exaltation of the Holy Cross.",
      fr: "Empereur byzantin qui a vaincu l'Empire perse et récupéré la Vraie Croix, la ramenant à Jérusalem en triomphe. Cet événement est commémoré lors de la fête de l'Exaltation de la Sainte Croix.",
      es: "Emperador bizantino que derrotó al Imperio Persa y recuperó la Vera Cruz, devolviéndola a Jerusalén en triunfo. Este evento se conmemora en la Fiesta de la Exaltación de la Santa Cruz.",
      de: "Byzantinischer Kaiser, der das Perserreich besiegte und das Wahre Kreuz zurückgewann und es im Triumph nach Jerusalem zurückbrachte. Dieses Ereignis wird am Fest der Kreuzerhöhung gefeiert."
    }
  },
  {
    id: 'k_charles_martel',
    startYear: 718,
    endYear: 741,
    type: 'king',
    name: { en: "Charles Martel", fr: "Charles Martel", es: "Carlos Martel", de: "Karl Martell" },
    description: {
      en: "Though technically Mayor of the Palace, he ruled the Franks and saved Christendom by defeating the Islamic Umayyad invasion at the Battle of Tours in 732. His victory halted the Muslim advance into Western Europe.",
      fr: "Bien que techniquement Maire du Palais, il a dirigé les Francs et sauvé la chrétienté en battant l'invasion islamique omeyyade à la bataille de Poitiers en 732. Sa victoire a stoppé l'avance musulmane en Europe occidentale.",
      es: "Aunque técnicamente Mayordomo de Palacio, gobernó a los francos y salvó a la cristiandad al derrotar la invasión islámica omeya en la Batalla de Tours en 732. Su victoria detuvo el avance musulmán en Europa Occidental.",
      de: "Obwohl technisch Hausmeier, regierte er die Franken und rettete das Christentum, indem er die islamische Invasion in der Schlacht von Tours 732 besiegte. Sein Sieg stoppte den muslimischen Vormarsch nach Westeuropa."
    }
  },
  {
    id: 'k_pepin',
    startYear: 751,
    endYear: 768,
    type: 'king',
    name: { en: "Pepin the Short", fr: "Pépin le Bref", es: "Pipino el Breve", de: "Pippin der Jüngere" },
    description: {
      en: "Father of Charlemagne and the first Carolingian King. He defeated the Lombards and issued the 'Donation of Pepin', granting the Pope temporal rule over central Italy, creating the Papal States which protected the independence of the Papacy for a millennium.",
      fr: "Père de Charlemagne et premier roi carolingien. Il a vaincu les Lombards et a fait la 'Donation de Pépin', accordant au Pape le règne temporel sur l'Italie centrale, créant les États pontificaux qui ont protégé l'indépendance de la Papauté pendant un millénaire.",
      es: "Padre de Carlomagno y primer rey carolingio. Derrotó a los lombardos y emitió la 'Donación de Pipino', otorgando al Papa el gobierno temporal sobre el centro de Italia, creando los Estados Pontificios que protegieron la independencia del Papado.",
      de: "Vater von Karl dem Großen und erster karolingischer König. Er besiegte die Langobarden und erließ die 'Pippinische Schenkung', die dem Papst die weltliche Herrschaft über Mittelitalien gewährte und den Kirchenstaat schuf."
    }
  },
  {
    id: 'k_charlemagne',
    startYear: 768,
    endYear: 814,
    type: 'king',
    name: { en: "Charlemagne", fr: "Charlemagne", es: "Carlomagno", de: "Karl der Große" },
    description: {
      en: "King of the Franks and Holy Roman Emperor. He united much of Western Europe and initiated the Carolingian Renaissance, promoting education, liturgy, and ecclesiastical reform. He is considered the 'Father of Europe' and protector of the Church.",
      fr: "Roi des Francs et Empereur romain germanique. Il a unifié une grande partie de l'Europe occidentale et lancé la Renaissance carolingienne, promouvant l'éducation et la réforme ecclésiastique. Il est considéré comme le 'Père de l'Europe'.",
      es: "Rey de los francos y Emperador del Sacro Imperio Romano Germánico. Unificó gran parte de Europa occidental e inició el Renacimiento carolingio. Es considerado el 'Padre de Europa' y protector de la Iglesia.",
      de: "König der Franken und Römisch-deutscher Kaiser. Er einigte weite Teile Westeuropas und initiierte die karolingische Renaissance, förderte Bildung und Kirchenreform. Er gilt als 'Vater Europas' und Beschützer der Kirche."
    }
  },
  {
    id: 'k_alfred',
    startYear: 871,
    endYear: 899,
    type: 'king',
    name: { en: "Alfred the Great", fr: "Alfred le Grand", es: "Alfredo el Grande", de: "Alfred der Große" },
    description: {
      en: "King of Wessex who defended England against the Viking Danes. A devout Catholic, he translated pastoral and theological works into English and established a legal code based on the Ten Commandments and Christian ethics.",
      fr: "Roi du Wessex qui a défendu l'Angleterre contre les Vikings. Catholique dévot, il a traduit des œuvres théologiques en anglais et établi un code juridique basé sur les Dix Commandements et l'éthique chrétienne.",
      es: "Rey de Wessex que defendió Inglaterra contra los vikingos. Católico devoto, tradujo obras teológicas al inglés y estableció un código legal basado en los Diez Mandamientos y la ética cristiana.",
      de: "König von Wessex, der England gegen die Wikinger verteidigte. Als frommer Katholik übersetzte er theologische Werke ins Englische und etablierte ein Gesetzbuch, das auf den Zehn Geboten basierte."
    }
  },
  {
    id: 'k_otto_i',
    startYear: 936,
    endYear: 973,
    type: 'king',
    name: { en: "Otto I the Great", fr: "Otton Ier le Grand", es: "Otón I el Grande", de: "Otto I. der Große" },
    description: {
      en: "He restored the Holy Roman Empire, viewing himself as the protector of Christendom. He defeated the pagan Magyars at the Battle of Lechfeld (955), ending their invasions and opening Central Europe to missionary work.",
      fr: "Il a restauré le Saint-Empire romain germanique, se considérant comme le protecteur de la chrétienté. Il a vaincu les Magyars païens à la bataille de Lechfeld (955), mettant fin à leurs invasions et ouvrant l'Europe centrale aux missionnaires.",
      es: "Restauró el Sacro Imperio Romano Germánico, viéndose a sí mismo como el protector de la cristiandad. Derrotó a los magiares paganos en la Batalla de Lechfeld (955), poniendo fin a sus invasiones.",
      de: "Er restaurierte das Heilige Römische Reich und sah sich als Beschützer der Christenheit. Er besiegte die heidnischen Magyaren in der Schlacht auf dem Lechfeld (955) und beendete deren Invasionen."
    }
  },
  {
    id: 'k_vladimir',
    startYear: 980,
    endYear: 1015,
    type: 'king',
    name: { en: "St. Vladimir the Great", fr: "Saint Vladimir le Grand", es: "San Vladimiro el Grande", de: "Hl. Wladimir der Große" },
    description: {
      en: "Grand Prince of Kiev who converted from paganism to Christianity in 988. He baptized the Rus' people in the Dnieper River, destroying pagan idols and laying the foundation for Christianity in Russia and Ukraine.",
      fr: "Grand-Prince de Kiev qui s'est converti du paganisme au christianisme en 988. Il a baptisé le peuple Rus' dans le Dniepr, détruisant les idoles païennes et posant les bases du christianisme en Russie et en Ukraine.",
      es: "Gran Príncipe de Kiev que se convirtió del paganismo al cristianismo en 988. Bautizó al pueblo Rus en el río Dniéper, destruyendo ídolos paganos y sentando las bases del cristianismo en Rusia y Ucrania.",
      de: "Großfürst von Kiew, der 988 vom Heidentum zum Christentum konvertierte. Er taufte das Volk der Rus im Dnjepr, zerstörte heidnische Götzen und legte den Grundstein für das Christentum in Russland."
    }
  },
  {
    id: 'k_stephen_hungary',
    startYear: 997,
    endYear: 1038,
    type: 'king',
    name: { en: "St. Stephen I", fr: "Saint Étienne Ier", es: "San Esteban I", de: "Hl. Stephan I." },
    description: {
      en: "The first King of Hungary, crowned by the Pope. He dedicated his kingdom to the Virgin Mary and Christianized the Magyar people, establishing bishoprics and monasteries. He is the patron saint of Hungary.",
      fr: "Le premier roi de Hongrie, couronné par le pape. Il a consacré son royaume à la Vierge Marie et christianisé le peuple magyar, établissant des évêchés et des monastères. Il est le saint patron de la Hongrie.",
      es: "El primer rey de Hungría, coronado por el Papa. Dedicó su reino a la Virgen María y cristianizó al pueblo magiar, estableciendo obispados y monasterios. Es el santo patrón de Hungría.",
      de: "Der erste König von Ungarn, vom Papst gekrönt. Er weihte sein Königreich der Jungfrau Maria und christianisierte das ungarische Volk, indem er Bistümer und Klöster gründete."
    }
  },
  {
    id: 'k_olaf_ii',
    startYear: 1015,
    endYear: 1028,
    type: 'king',
    name: { en: "St. Olaf II", fr: "Saint Olaf II", es: "San Olaf II", de: "Hl. Olaf II." },
    description: {
      en: "King of Norway and martyr. He completed the conversion of Norway to Christianity, replacing pagan laws with Christian ones. His shrine at Nidaros became one of the major pilgrimage sites of Northern Europe.",
      fr: "Roi de Norvège et martyr. Il a achevé la conversion de la Norvège au christianisme, remplaçant les lois païennes par des lois chrétiennes. Son sanctuaire à Nidaros est devenu un lieu de pèlerinage majeur.",
      es: "Rey de Noruega y mártir. Completó la conversión de Noruega al cristianismo, reemplazando las leyes paganas por cristianas. Su santuario en Nidaros se convirtió en un importante lugar de peregrinación.",
      de: "König von Norwegen und Märtyrer. Er vollendete die Bekehrung Norwegens zum Christentum und ersetzte heidnische Gesetze durch christliche. Sein Schrein in Nidaros wurde zu einem wichtigen Wallfahrtsort."
    }
  },
  {
    id: 'k_henry_ii',
    startYear: 1014,
    endYear: 1024,
    type: 'king',
    name: { en: "St. Henry II", fr: "Saint Henri II", es: "San Enrique II", de: "Hl. Heinrich II." },
    description: {
      en: "Holy Roman Emperor and the only one to be canonized. Known for his ascetic life and support of church reform, he founded the Diocese of Bamberg and lived in a chaste marriage with Empress St. Cunigunde.",
      fr: "Empereur romain germanique et le seul à être canonisé. Connu pour sa vie ascétique et son soutien à la réforme de l'Église, il a fondé le diocèse de Bamberg et a vécu un mariage chaste avec l'impératrice sainte Cunégonde.",
      es: "Emperador del Sacro Imperio y el único canonizado. Conocido por su vida ascética y apoyo a la reforma eclesiástica, fundó la Diócesis de Bamberg y vivió en un matrimonio casto con la Emperatriz Santa Cunegunda.",
      de: "Römisch-deutscher Kaiser und der einzige, der heiliggesprochen wurde. Bekannt für sein asketisches Leben und die Unterstützung der Kirchenreform, gründete er das Bistum Bamberg."
    }
  },
  {
    id: 'k_edward_confessor',
    startYear: 1042,
    endYear: 1066,
    type: 'king',
    name: { en: "St. Edward the Confessor", fr: "Saint Édouard le Confesseur", es: "San Eduardo el Confesor", de: "Hl. Eduard der Bekenner" },
    description: {
      en: "One of the last Anglo-Saxon kings of England. Renowned for his piety and gift of healing, he rebuilt Westminster Abbey. His reign was remembered as an era of peace and justice before the Norman Conquest.",
      fr: "L'un des derniers rois anglo-saxons d'Angleterre. Renommé pour sa piété et son don de guérison, il a reconstruit l'abbaye de Westminster. Son règne est resté dans les mémoires comme une ère de paix.",
      es: "Uno de los últimos reyes anglosajones de Inglaterra. Reconocido por su piedad y don de curación, reconstruyó la Abadía de Westminster. Su reinado fue recordado como una era de paz y justicia.",
      de: "Einer der letzten angelsächsischen Könige von England. Bekannt für seine Frömmigkeit und Gabe der Heilung, baute er die Westminster Abbey wieder auf. Seine Herrschaft galt als Ära des Friedens."
    }
  },
  {
    id: 'k_ladislaus',
    startYear: 1077,
    endYear: 1095,
    type: 'king',
    name: { en: "St. Ladislaus I", fr: "Saint Ladislas Ier", es: "San Ladislao I", de: "Hl. Ladislaus I." },
    description: {
      en: "King of Hungary, known as the embodiment of the knightly ideal. He defended his kingdom against pagan Cumans and strengthened the Church's position, enforcing clerical celibacy and moral discipline.",
      fr: "Roi de Hongrie, connu comme l'incarnation de l'idéal chevaleresque. Il a défendu son royaume contre les Coumans païens et renforcé la position de l'Église, imposant le célibat clérical.",
      es: "Rey de Hungría, conocido como la encarnación del ideal caballeresco. Defendió su reino contra los cumanos paganos y fortaleció la posición de la Iglesia, imponiendo el celibato clerical.",
      de: "König von Ungarn, bekannt als Verkörperung des ritterlichen Ideals. Er verteidigte sein Königreich gegen heidnische Kumanen und stärkte die Position der Kirche, indem er den klerikalen Zölibat durchsetzte."
    }
  },
  {
    id: 'k_godfrey',
    startYear: 1099,
    endYear: 1100,
    type: 'king',
    name: { en: "Godfrey of Bouillon", fr: "Godefroy de Bouillon", es: "Godofredo de Bouillón", de: "Gottfried von Bouillon" },
    description: {
      en: "Leader of the First Crusade and first ruler of the Kingdom of Jerusalem. He refused the title of King, saying he could not wear a crown of gold where his Savior wore a crown of thorns, taking the title 'Advocate of the Holy Sepulchre'.",
      fr: "Chef de la première croisade et premier souverain du royaume de Jérusalem. Il a refusé le titre de roi, disant qu'il ne pouvait pas porter une couronne d'or là où son Sauveur portait une couronne d'épines.",
      es: "Líder de la Primera Cruzada y primer gobernante del Reino de Jerusalén. Rechazó el título de Rey, diciendo que no podía llevar una corona de oro donde su Salvador llevó una corona de espinas.",
      de: "Anführer des Ersten Kreuzzugs und erster Herrscher des Königreichs Jerusalem. Er lehnte den Königstitel ab, da er keine Goldkrone tragen wollte, wo sein Erlöser eine Dornenkrone trug."
    }
  },
  {
    id: 'k_baldwin_iv',
    startYear: 1174,
    endYear: 1185,
    type: 'king',
    name: { en: "Baldwin IV (The Leper King)", fr: "Baudouin IV le Lépreux", es: "Balduino IV el Leproso", de: "Balduin IV. der Aussätzige" },
    description: {
      en: "King of Jerusalem who suffered from debilitating leprosy. Despite his suffering, he was a brilliant military commander who famously defeated Saladin at the Battle of Montgisard in 1177 with a vastly inferior force, defending the Holy Land until his death.",
      fr: "Roi de Jérusalem souffrant de la lèpre. Malgré sa souffrance, il était un commandant militaire brillant qui a vaincu Saladin à la bataille de Montgisard en 1177 avec une force très inférieure, défendant la Terre Sainte jusqu'à sa mort.",
      es: "Rey de Jerusalén que sufría de lepra debilitante. A pesar de su sufrimiento, fue un comandante militar brillante que derrotó a Saladino en la Batalla de Montgisard en 1177 con una fuerza muy inferior.",
      de: "König von Jerusalem, der an Lepra litt. Trotz seines Leidens war er ein brillanter militärischer Befehlshaber, der Saladin 1177 in der Schlacht von Montgisard mit einer weit unterlegenen Streitmacht besiegte."
    }
  },
  {
    id: 'k_louis_ix',
    startYear: 1226,
    endYear: 1270,
    type: 'king',
    name: { en: "St. Louis IX", fr: "Saint Louis", es: "San Luis IX", de: "Hl. Ludwig IX." },
    description: {
      en: "King of France and a model of the Christian monarch. Renowned for his charity, sense of justice, and piety. He built the Sainte-Chapelle to house the Crown of Thorns and died while on Crusade in Tunis.",
      fr: "Roi de France et modèle du monarque chrétien. Renommé pour sa charité, son sens de la justice et sa piété. Il a construit la Sainte-Chapelle pour abriter la Couronne d'épines et est mort en croisade.",
      es: "Rey de Francia y modelo de monarca cristiano. Reconocido por su caridad, sentido de la justicia y piedad. Construyó la Sainte-Chapelle para albergar la Corona de Espinas.",
      de: "König von Frankreich und Modell des christlichen Monarchen. Bekannt für seine Nächstenliebe, seinen Gerechtigkeitssinn und seine Frömmigkeit. Er baute die Sainte-Chapelle."
    }
  },
  {
    id: 'k_ferdinand_iii',
    startYear: 1217,
    endYear: 1252,
    type: 'king',
    name: { en: "St. Ferdinand III", fr: "Saint Ferdinand III", es: "San Fernando III", de: "Hl. Ferdinand III." },
    description: {
      en: "King of Castile and Leon who united the two kingdoms. A great warrior of the Reconquista, he recaptured Cordoba and Seville from the Moors while founding the University of Salamanca and building the Cathedral of Burgos.",
      fr: "Roi de Castille et de Léon qui a uni les deux royaumes. Grand guerrier de la Reconquista, il a repris Cordoue et Séville aux Maures tout en fondant l'Université de Salamanque et en construisant la cathédrale de Burgos.",
      es: "Rey de Castilla y León que unió los dos reinos. Gran guerrero de la Reconquista, recuperó Córdoba y Sevilla de los moros, fundó la Universidad de Salamanca y construyó la Catedral de Burgos.",
      de: "König von Kastilien und León. Ein großer Krieger der Reconquista, der Córdoba und Sevilla von den Mauren zurückeroberte, während er die Universität von Salamanca gründete."
    }
  },
  {
    id: 'k_rudolf_i',
    startYear: 1273,
    endYear: 1291,
    type: 'king',
    name: { en: "Rudolf I of Habsburg", fr: "Rodolphe Ier de Habsbourg", es: "Rodolfo I de Habsburgo", de: "Rudolf I. von Habsburg" },
    description: {
      en: "The first Habsburg King of the Romans. He famously demonstrated his devotion to the Eucharist by offering his horse to a priest carrying the Blessed Sacrament to a dying man, walking beside him in mud. This act of humility defined the Habsburg dynasty's Catholic identity.",
      fr: "Le premier roi des Romains de la maison de Habsbourg. Il a démontré sa dévotion à l'Eucharistie en offrant son cheval à un prêtre portant le Saint-Sacrement à un mourant.",
      es: "El primer rey de los romanos de la casa de Habsburgo. Demostró su devoción a la Eucaristía ofreciendo su caballo a un sacerdote que llevaba el Santísimo Sacramento a un moribundo.",
      de: "Der erste Habsburger römisch-deutsche König. Er zeigte seine Hingabe an die Eucharistie, indem er einem Priester, der das Allerheiligste zu einem Sterbenden trug, sein Pferd anbot."
    }
  },
  {
    id: 'k_wenceslaus',
    startYear: 921,
    endYear: 935,
    type: 'king',
    name: { en: "St. Wenceslaus I", fr: "Saint Venceslas Ier", es: "San Wenceslao I", de: "Hl. Wenzel I." },
    description: {
      en: "Duke of Bohemia known as 'Good King Wenceslas'. He was a man of deep faith who personally grew the wheat and grapes for the Holy Mass. He was martyred by his brother for his faith and is the patron saint of the Czech Republic.",
      fr: "Duc de Bohême, homme d'une foi profonde qui cultivait personnellement le blé et le raisin pour la Sainte Messe. Il a été martyrisé par son frère pour sa foi.",
      es: "Duque de Bohemia, conocido como el 'Buen Rey Wenceslao'. Fue un hombre de profunda fe que cultivaba personalmente el trigo y las uvas para la Santa Misa. Fue martirizado por su hermano.",
      de: "Herzog von Böhmen, bekannt als 'Guter König Wenzel'. Er war ein Mann von tiefem Glauben, der persönlich den Weizen und die Trauben für die Heilige Messe anbaute."
    }
  },
  {
    id: 'k_canute_iv',
    startYear: 1080,
    endYear: 1086,
    type: 'king',
    name: { en: "St. Canute IV", fr: "Saint Knut IV", es: "San Canuto IV", de: "Hl. Knut IV." },
    description: {
      en: "King of Denmark and martyr. He strongly supported the Church, enforced tithes, and was killed by rebels inside a church while kneeling before the altar. He is the patron saint of Denmark.",
      fr: "Roi de Danemark et martyr. Il a soutenu l'Église, imposé la dîme et a été tué par des rebelles à l'intérieur d'une église alors qu'il était agenouillé devant l'autel.",
      es: "Rey de Dinamarca y mártir. Apoyó fuertemente a la Iglesia, impuso diezmos y fue asesinado por rebeldes dentro de una iglesia mientras se arrodillaba ante el altar.",
      de: "König von Dänemark und Märtyrer. Er unterstützte die Kirche stark, setzte den Zehnten durch und wurde von Rebellen in einer Kirche getötet, als er vor dem Altar kniete."
    }
  },
  {
    id: 'k_jadwiga',
    startYear: 1384,
    endYear: 1399,
    type: 'king',
    name: { en: "St. Jadwiga", fr: "Sainte Edwige", es: "Santa Eduviges", de: "Hl. Hedwig" },
    description: {
      en: "Crowned 'King' of Poland (to signify she was a monarch in her own right). She married Grand Duke Jogaila of Lithuania on the condition of his baptism, leading to the Christianization of Lithuania, the last pagan country in Europe.",
      fr: "Couronnée 'Roi' de Pologne. Elle a épousé le grand-duc Jogaila de Lituanie à la condition de son baptême, conduisant à la christianisation de la Lituanie, le dernier pays païen d'Europe.",
      es: "Coronada 'Rey' de Polonia. Se casó con el Gran Duque Jogaila de Lituania con la condición de su bautismo, lo que llevó a la cristianización de Lituania, el último país pagano de Europa.",
      de: "Gekrönt zum 'König' von Polen. Sie heiratete Großfürst Jogaila von Litauen unter der Bedingung seiner Taufe, was zur Christianisierung Litauens führte."
    }
  },
  {
    id: 'k_isabella_ferdinand',
    startYear: 1474,
    endYear: 1504,
    type: 'king',
    name: { en: "The Catholic Monarchs", fr: "Les Rois Catholiques", es: "Los Reyes Católicos", de: "Die Katholischen Könige" },
    description: {
      en: "Isabella I of Castile and Ferdinand II of Aragon. They completed the Reconquista in 1492, taking Granada. They sponsored Columbus's voyage which opened the Americas to evangelization and reformed the Spanish Church, shielding it from later Protestant heresies.",
      fr: "Isabelle I de Castille et Ferdinand II d'Aragon. Ils ont achevé la Reconquista en 1492. Ils ont parrainé le voyage de Colomb qui a ouvert les Amériques à l'évangélisation et réformé l'Église espagnole.",
      es: "Isabel I de Castilla y Fernando II de Aragón. Completaron la Reconquista en 1492. Patrocinaron el viaje de Colón que abrió las Américas a la evangelización y reformaron la Iglesia española.",
      de: "Isabella I. von Kastilien und Ferdinand II. von Aragon. Sie vollendeten die Reconquista 1492. Sie sponserten Kolumbus' Reise, die Amerika für die Evangelisierung öffnete."
    }
  },
  {
    id: 'k_charles_v',
    startYear: 1519,
    endYear: 1556,
    type: 'king',
    name: { en: "Emperor Charles V", fr: "Charles Quint", es: "Carlos V", de: "Karl V." },
    description: {
      en: "Holy Roman Emperor at the outbreak of the Protestant Reformation. He presided over the Diet of Worms, defending the Catholic faith against Luther. He oversaw the evangelization of the Americas and eventually abdicated to prepare his soul for death.",
      fr: "Empereur romain germanique au début de la Réforme protestante. Il a présidé la Diète de Worms, défendant la foi catholique contre Luther. Il a supervisé l'évangélisation des Amériques et a finalement abdiqué.",
      es: "Emperador del Sacro Imperio al estallar la Reforma protestante. Presidió la Dieta de Worms, defendiendo la fe católica contra Lutero. Supervisó la evangelización de las Américas.",
      de: "Römisch-deutscher Kaiser zu Beginn der Reformation. Er leitete den Reichstag zu Worms und verteidigte den katholischen Glauben gegen Luther. Er beaufsichtigte die Evangelisierung Amerikas."
    }
  },
  {
    id: 'k_philip_ii',
    startYear: 1556,
    endYear: 1598,
    type: 'king',
    name: { en: "Philip II of Spain", fr: "Philippe II", es: "Felipe II", de: "Philipp II." },
    description: {
      en: "The champion of the Counter-Reformation. He built the Escorial as a monastery-palace, sent the Spanish Armada to restore Catholicism in England, and organized the Holy League which defeated the Ottoman Turks at the Battle of Lepanto.",
      fr: "Le champion de la Contre-Réforme. Il a construit l'Escorial, envoyé l'Invincible Armada pour restaurer le catholicisme en Angleterre et organisé la Sainte Ligue qui a vaincu les Turcs ottomans à la bataille de Lépante.",
      es: "El campeón de la Contrarreforma. Construyó el Escorial, envió la Armada Invencible para restaurar el catolicismo en Inglaterra y organizó la Liga Santa que derrotó a los turcos otomanos en Lepanto.",
      de: "Der Vorkämpfer der Gegenreformation. Er baute den Escorial, sandte die Spanische Armada aus, um den Katholizismus in England wiederherzustellen, und organisierte die Heilige Liga (Sieg bei Lepanto)."
    }
  },
  {
    id: 'k_john_sobieski',
    startYear: 1674,
    endYear: 1696,
    type: 'king',
    name: { en: "John III Sobieski", fr: "Jean III Sobieski", es: "Juan III Sobieski", de: "Johann III. Sobieski" },
    description: {
      en: "King of Poland who saved Christian Europe from the Ottoman Turks at the Battle of Vienna on September 11, 1683. He led the largest cavalry charge in history, declaring 'Veni, vidi, Deus vicit' (I came, I saw, God conquered).",
      fr: "Roi de Pologne qui a sauvé l'Europe chrétienne des Turcs ottomans à la bataille de Vienne le 11 septembre 1683. Il a mené la plus grande charge de cavalerie de l'histoire, déclarant 'Veni, vidi, Deus vicit'.",
      es: "Rey de Polonia que salvó a la Europa cristiana de los turcos otomanos en la Batalla de Viena el 11 de septiembre de 1683. Lideró la mayor carga de caballería de la historia.",
      de: "König von Polen, der das christliche Europa in der Schlacht am Kahlenberg (Wien) 1683 vor den Osmanen rettete. Er führte den größten Kavallerieangriff der Geschichte an."
    }
  },
  {
    id: 'k_blessed_karl',
    startYear: 1916,
    endYear: 1918,
    type: 'king',
    name: { en: "Blessed Karl of Austria", fr: "Bienheureux Charles d'Autriche", es: "Beato Carlos de Austria", de: "Seliger Karl von Österreich" },
    description: {
      en: "The last Emperor of Austria and King of Hungary. A man of peace who tried to end World War I. He ruled according to the social teaching of the Church and died in poverty and exile, offering his suffering for his people.",
      fr: "Le dernier empereur d'Autriche. Homme de paix qui a tenté de mettre fin à la Première Guerre mondiale. Il a gouverné selon la doctrine sociale de l'Église et est mort en exil, offrant ses souffrances pour son peuple.",
      es: "El último emperador de Austria. Un hombre de paz que intentó poner fin a la Primera Guerra Mundial. Gobernó según la doctrina social de la Iglesia y murió en el exilio.",
      de: "Der letzte Kaiser von Österreich. Ein Mann des Friedens, der versuchte, den Ersten Weltkrieg zu beenden. Er regierte nach der Soziallehre der Kirche und starb im Exil."
    }
  },
  {
    id: 'k_boudouin',
    startYear: 1951,
    endYear: 1993,
    type: 'king',
    name: { en: "Baudouin of Belgium", fr: "Baudouin de Belgique", es: "Balduino de Bélgica", de: "Baudouin von Belgien" },
    description: {
      en: "Known for his deep Catholic faith. He famously abdicated for 36 hours in 1990 to avoid signing a law legalizing abortion, declaring that his conscience would not allow him to approve the killing of the unborn.",
      fr: "Connu pour sa profonde foi catholique. Il a abdiqué pendant 36 heures en 1990 pour éviter de signer une loi légalisant l'avortement, déclarant que sa conscience ne lui permettait pas d'approuver cela.",
      es: "Conocido por su profunda fe católica. Abdicó durante 36 horas en 1990 para evitar firmar una ley que legalizaba el aborto, declarando que su conciencia no se lo permitía.",
      de: "Bekannt für seinen tiefen katholischen Glauben. Er dankte 1990 für 36 Stunden ab, um ein Gesetz zur Legalisierung der Abtreibung nicht unterzeichnen zu müssen."
    }
  },
  {
    id: 'k_stephen_great',
    startYear: 1457,
    endYear: 1504,
    type: 'king',
    name: { en: "Stephen the Great", fr: "Étienne le Grand", es: "Esteban el Grande", de: "Stefan der Große" },
    description: {
      en: "Prince of Moldavia and a defender of Christianity against the Ottoman Empire. He fought 36 battles against the Ottomans, winning 34, and built a church or monastery for every victory. Pope Sixtus IV named him 'Verus Christianae Fidei Athleta' (True Champion of the Christian Faith).",
      fr: "Prince de Moldavie et défenseur du christianisme contre l'Empire ottoman. Il a remporté 34 batailles sur 36 et construit une église pour chaque victoire. Le pape Sixte IV l'a nommé 'Véritable Champion de la Foi Chrétienne'.",
      es: "Príncipe de Moldavia y defensor del cristianismo contra el Imperio Otomano. Ganó 34 de 36 batallas y construyó una iglesia por cada victoria. El Papa Sixto IV lo llamó 'Verdadero Campeón de la Fe Cristiana'.",
      de: "Fürst von Moldau und Verteidiger des Christentums gegen das Osmanische Reich. Er gewann 34 von 36 Schlachten und baute für jeden Sieg eine Kirche."
    }
  },
  {
    id: 'k_scanderbeg',
    startYear: 1443,
    endYear: 1468,
    type: 'king',
    name: { en: "George Castriot Skanderbeg", fr: "Georges Castriot Skanderbeg", es: "Jorge Castriota Skanderbeg", de: "Georg Kastriota Skanderbeg" },
    description: {
      en: "Albanian nobleman who defected from the Ottomans to lead a 25-year rebellion against the Turks. He stopped Ottoman expansion into Italy and Western Europe, earning the title 'Athlete of Christ' from the Pope.",
      fr: "Noble albanais qui a mené une rébellion de 25 ans contre les Turcs. Il a stoppé l'expansion ottomane vers l'Italie et l'Europe occidentale, gagnant le titre d''Athlète du Christ'.",
      es: "Noble albanés que lideró una rebelión de 25 años contra los turcos. Detuvo la expansión otomana hacia Italia y Europa Occidental, ganando el título de 'Atleta de Cristo'.",
      de: "Albanischer Adliger, der einen 25-jährigen Aufstand gegen die Türken anführte. Er stoppte die osmanische Expansion nach Italien und Westeuropa."
    }
  },
  {
    id: 'k_richard_lionheart',
    startYear: 1189,
    endYear: 1199,
    type: 'king',
    name: { en: "Richard I the Lionheart", fr: "Richard Cœur de Lion", es: "Ricardo Corazón de León", de: "Richard Löwenherz" },
    description: {
      en: "King of England and central figure of the Third Crusade. Though he failed to retake Jerusalem, his victories secured the coastal crusader states and allowed Christian pilgrims access to the Holy City.",
      fr: "Roi d'Angleterre et figure centrale de la troisième croisade. Bien qu'il n'ait pas réussi à reprendre Jérusalem, ses victoires ont permis aux pèlerins chrétiens d'accéder à la Ville Sainte.",
      es: "Rey de Inglaterra y figura central de la Tercera Cruzada. Aunque no logró retomar Jerusalén, sus victorias aseguraron el acceso de los peregrinos cristianos a la Ciudad Santa.",
      de: "König von England und zentrale Figur des Dritten Kreuzzugs. Obwohl er Jerusalem nicht zurückerobern konnte, sicherten seine Siege den christlichen Pilgern den Zugang zur Heiligen Stadt."
    }
  },
  {
    id: 'k_louis_xiv',
    startYear: 1643,
    endYear: 1715,
    type: 'king',
    name: { en: "Louis XIV", fr: "Louis XIV", es: "Luis XIV", de: "Ludwig XIV." },
    description: {
      en: "The 'Sun King' of France. While he had conflicts with the Pope over Gallicanism, he vehemently opposed Protestantism, revoking the Edict of Nantes to restore Catholic unity in France.",
      fr: "Le 'Roi Soleil'. Bien qu'il ait eu des conflits avec le Pape sur le gallicanisme, il s'est opposé avec véhémence au protestantisme, révoquant l'Édit de Nantes pour restaurer l'unité catholique.",
      es: "El 'Rey Sol'. Aunque tuvo conflictos con el Papa sobre el galicanismo, se opuso vehementemente al protestantismo, revocando el Edicto de Nantes para restaurar la unidad católica.",
      de: "Der 'Sonnenkönig'. Obwohl er Konflikte mit dem Papst hatte, lehnte er den Protestantismus vehement ab und widerrief das Edikt von Nantes, um die katholische Einheit wiederherzustellen."
    }
  },
  {
    id: 'k_alfonso_vi',
    startYear: 1065,
    endYear: 1109,
    type: 'king',
    name: { en: "Alfonso VI", fr: "Alphonse VI", es: "Alfonso VI", de: "Alfons VI." },
    description: {
      en: "King of Leon and Castile who conquered the city of Toledo in 1085, a major milestone in the Reconquista. He promoted the Cluniac reforms and replaced the Mozarabic rite with the Roman rite to align Spain closer with the Papacy.",
      fr: "Roi de Léon et de Castille qui a conquis Tolède en 1085. Il a promu les réformes clunisiennes et remplacé le rite mozarabe par le rite romain pour aligner l'Espagne sur la Papauté.",
      es: "Rey de León y Castilla que conquistó Toledo en 1085. Promovió las reformas cluniacenses y reemplazó el rito mozárabe por el rito romano.",
      de: "König von León und Kastilien, der 1085 Toledo eroberte. Er förderte die cluniazensischen Reformen und ersetzte den mozarabischen Ritus durch den römischen."
    }
  },
  {
    id: 'k_sigismund_iii',
    startYear: 1587,
    endYear: 1632,
    type: 'king',
    name: { en: "Sigismund III Vasa", fr: "Sigismond III Vasa", es: "Segismundo III Vasa", de: "Sigismund III. Wasa" },
    description: {
      en: "King of Poland and Sweden. A zealous Catholic who strove to re-Catholicize Sweden and expand the faith in the East. He moved the capital to Warsaw and strongly supported the Jesuits.",
      fr: "Roi de Pologne et de Suède. Catholique zélé qui s'est efforcé de recatholiciser la Suède et d'étendre la foi à l'Est. Il a déplacé la capitale à Varsovie et soutenu les Jésuites.",
      es: "Rey de Polonia y Suecia. Un católico celoso que se esforzó por recatolizar Suecia. Trasladó la capital a Varsovia y apoyó firmemente a los jesuitas.",
      de: "König von Polen und Schweden. Ein eifriger Katholik, der versuchte, Schweden zu rekatholisieren. Er verlegte die Hauptstadt nach Warschau und unterstützte die Jesuiten."
    }
  },
  {
    id: 'k_eric_ix',
    startYear: 1156,
    endYear: 1160,
    type: 'king',
    name: { en: "St. Eric IX", fr: "Saint Éric IX", es: "San Erik IX", de: "Hl. Erik IX." },
    description: {
      en: "King of Sweden who led a crusade to Finland to spread Christianity. He codified Swedish laws based on Gospel principles and was martyred after attending Mass on Ascension Day.",
      fr: "Roi de Suède qui a mené une croisade en Finlande. Il a codifié les lois suédoises basées sur l'Évangile et a été martyrisé après avoir assisté à la messe.",
      es: "Rey de Suecia que lideró una cruzada a Finlandia. Codificó las leyes suecas basadas en el Evangelio y fue martirizado después de asistir a Misa.",
      de: "König von Schweden, der einen Kreuzzug nach Finnland führte. Er kodifizierte schwedische Gesetze auf der Grundlage des Evangeliums und wurde nach der Messe gemartert."
    }
  },
  {
    id: 'k_simeon_i',
    startYear: 893,
    endYear: 927,
    type: 'king',
    name: { en: "Simeon I the Great", fr: "Siméon Ier le Grand", es: "Simeón I el Grande", de: "Simeon I. der Große" },
    description: {
      en: "Tsar of Bulgaria who presided over the Golden Age of Bulgarian culture. He promoted the translation of Christian texts into Glagolitic and Cyrillic, establishing the Old Church Slavonic literary tradition.",
      fr: "Tsar de Bulgarie qui a présidé à l'âge d'or de la culture bulgare. Il a promu la traduction de textes chrétiens, établissant la tradition littéraire du vieux slave.",
      es: "Zar de Bulgaria que presidió la Edad de Oro de la cultura búlgara. Promovió la traducción de textos cristianos, estableciendo la tradición literaria del antiguo eslavo eclesiástico.",
      de: "Zar von Bulgarien, der das Goldene Zeitalter der bulgarischen Kultur leitete. Er förderte die Übersetzung christlicher Texte und begründete die kirchenslawische Tradition."
    }
  },
  {
    id: 'k_louis_great',
    startYear: 1342,
    endYear: 1382,
    type: 'king',
    name: { en: "Louis I the Great", fr: "Louis Ier le Grand", es: "Luis I el Grande", de: "Ludwig I. der Große" },
    description: {
      en: "King of Hungary and Poland. A champion of the Church who fought against the Ottomans and Venetian influence. He founded the University of Pécs and was a major patron of Gothic art.",
      fr: "Roi de Hongrie et de Pologne. Champion de l'Église qui a combattu les Ottomans. Il a fondé l'Université de Pécs et a été un mécène majeur de l'art gothique.",
      es: "Rey de Hungría y Polonia. Campeón de la Iglesia que luchó contra los otomanos. Fundó la Universidad de Pécs y fue un gran mecenas del arte gótico.",
      de: "König von Ungarn und Polen. Ein Vorkämpfer der Kirche, der gegen die Osmanen kämpfte. Er gründete die Universität Pécs und war ein Förderer der Gotik."
    }
  },
  {
    id: 'k_bela_iv',
    startYear: 1235,
    endYear: 1270,
    type: 'king',
    name: { en: "Béla IV", fr: "Béla IV", es: "Bela IV", de: "Béla IV." },
    description: {
      en: "King of Hungary known as the 'Second Founder of the State'. After the Mongol devastation, he rebuilt the country and its churches. He was a tertiary Franciscan and the father of St. Kinga and St. Margaret of Hungary.",
      fr: "Roi de Hongrie, 'Second fondateur de l'État'. Après la dévastation mongole, il a reconstruit le pays et ses églises. Père de sainte Kinga et sainte Marguerite.",
      es: "Rey de Hungría, 'Segundo Fundador del Estado'. Tras la devastación mongola, reconstruyó el país y sus iglesias. Padre de Santa Kinga y Santa Margarita.",
      de: "König von Ungarn, 'Zweiter Staatsgründer'. Nach der mongolischen Verwüstung baute er das Land und seine Kirchen wieder auf. Vater der Hl. Kinga und Hl. Margareta."
    }
  },
  {
    id: 'k_henry_iii_hre',
    startYear: 1046,
    endYear: 1056,
    type: 'king',
    name: { en: "Henry III (HRE)", fr: "Henri III", es: "Enrique III", de: "Heinrich III." },
    description: {
      en: "Holy Roman Emperor who deeply believed in the divine right of kings to reform the Church. He deposed three rival popes at the Synod of Sutri to end a schism, paving the way for the Gregorian Reforms.",
      fr: "Empereur romain germanique qui croyait profondément au droit divin pour réformer l'Église. Il a déposé trois papes rivaux au synode de Sutri pour mettre fin à un schisme.",
      es: "Emperador del Sacro Imperio. Depuso a tres papas rivales en el Sínodo de Sutri para poner fin a un cisma, allanando el camino para las Reformas Gregorianas.",
      de: "Römisch-deutscher Kaiser. Er setzte auf der Synode von Sutri drei rivalisierende Päpste ab, um ein Schisma zu beenden, und ebnete den Weg für die Gregorianischen Reformen."
    }
  },
  {
    id: 'k_james_ii',
    startYear: 1685,
    endYear: 1688,
    type: 'king',
    name: { en: "James II", fr: "Jacques II", es: "Jacobo II", de: "Jakob II." },
    description: {
      en: "The last Catholic monarch of England, Scotland, and Ireland. He attempted to grant religious liberty to Catholics but was overthrown in the 'Glorious Revolution' by Protestant forces, leading to the penal laws against Catholics.",
      fr: "Le dernier monarque catholique d'Angleterre. Il a tenté d'accorder la liberté religieuse aux catholiques mais a été renversé lors de la 'Glorieuse Révolution' par les forces protestantes.",
      es: "El último monarca católico de Inglaterra. Intentó otorgar libertad religiosa a los católicos pero fue derrocado en la 'Revolución Gloriosa' por fuerzas protestantes.",
      de: "Der letzte katholische Monarch von England. Er versuchte, den Katholiken Religionsfreiheit zu gewähren, wurde aber in der 'Glorreichen Revolution' gestürzt."
    }
  },
  {
    id: 'k_carloman',
    startYear: 768,
    endYear: 771,
    type: 'king',
    name: { en: "Carloman I", fr: "Carloman Ier", es: "Carlomán I", de: "Karlmann I." },
    description: {
      en: "Brother of Charlemagne. Though their relationship was strained, his death allowed for the unification of the Frankish kingdom. He was a patron of monasteries and supported the mission of St. Boniface.",
      fr: "Frère de Charlemagne. Sa mort a permis l'unification du royaume franc. Il était un mécène des monastères et soutenait la mission de saint Boniface.",
      es: "Hermano de Carlomagno. Su muerte permitió la unificación del reino franco. Fue mecenas de monasterios y apoyó la misión de San Bonifacio.",
      de: "Bruder von Karl dem Großen. Sein Tod ermöglichte die Vereinigung des Frankenreichs. Er war ein Förderer von Klöstern und unterstützte die Mission des Hl. Bonifatius."
    }
  },
  {
    id: 'k_boris_i',
    startYear: 852,
    endYear: 889,
    type: 'king',
    name: { en: "St. Boris I", fr: "Saint Boris Ier", es: "San Boris I", de: "Hl. Boris I." },
    description: {
      en: "Ruler of Bulgaria who Christianized his nation. He abdicated to become a monk but returned briefly to depose his pagan son before retiring to the monastery again. He welcomed the disciples of Cyril and Methodius.",
      fr: "Souverain de Bulgarie qui a christianisé sa nation. Il a abdiqué pour devenir moine. Il a accueilli les disciples de Cyrille et Méthode.",
      es: "Gobernante de Bulgaria que cristianizó su nación. Abdicó para convertirse en monje. Acogió a los discípulos de Cirilo y Metodio.",
      de: "Herrscher von Bulgarien, der seine Nation christianisierte. Er dankte ab, um Mönch zu werden. Er nahm die Schüler von Kyrill und Method auf."
    }
  },
  {
    id: 'k_afonso_i',
    startYear: 1139,
    endYear: 1185,
    type: 'king',
    name: { en: "Afonso I of Portugal", fr: "Alphonse Ier de Portugal", es: "Alfonso I de Portugal", de: "Alfons I. von Portugal" },
    description: {
      en: "The first King of Portugal. He conquered Lisbon from the Moors with the help of Crusaders and dedicated his kingdom to St. Michael and later to the Virgin Mary, establishing the independent Catholic nation of Portugal.",
      fr: "Le premier roi du Portugal. Il a conquis Lisbonne sur les Maures et a consacré son royaume à saint Michel puis à la Vierge Marie, établissant la nation catholique du Portugal.",
      es: "El primer rey de Portugal. Conquistó Lisboa de los moros y dedicó su reino a San Miguel y más tarde a la Virgen María, estableciendo la nación católica de Portugal.",
      de: "Der erste König von Portugal. Er eroberte Lissabon von den Mauren und weihte sein Königreich dem Hl. Michael und später der Jungfrau Maria."
    }
  },
  {
    id: 'k_mathilda',
    startYear: 1046,
    endYear: 1115,
    type: 'king',
    name: { en: "Matilda of Tuscany", fr: "Mathilde de Toscane", es: "Matilde de Toscana", de: "Mathilde von Tuszien" },
    description: {
      en: "Though a Margravine, she ruled vast territories and was the military protector of the Papacy during the Investiture Controversy. She personally led troops in battle to defend Pope Gregory VII against the Emperor.",
      fr: "Bien que Margravine, elle gouvernait de vastes territoires et était la protectrice militaire de la Papauté. Elle a personnellement mené des troupes pour défendre le pape Grégoire VII.",
      es: "Aunque Margravina, gobernó vastos territorios y fue la protectora militar del Papado. Lideró personalmente tropas para defender al Papa Gregorio VII.",
      de: "Obwohl Markgräfin, regierte sie riesige Gebiete und war die militärische Beschützerin des Papsttums. Sie führte persönlich Truppen, um Papst Gregor VII. zu verteidigen."
    }
  },
  {
    id: 'k_zita',
    startYear: 1916,
    endYear: 1918,
    type: 'king',
    name: { en: "Servant of God Zita", fr: "Zita de Bourbon-Parme", es: "Sierva de Dios Zita", de: "Dienerin Gottes Zita" },
    description: {
      en: "Empress of Austria and Queen of Hungary alongside Blessed Karl. She supported his peace efforts and raised their eight children in the faith during exile. Her cause for canonization is underway.",
      fr: "Impératrice d'Autriche aux côtés du bienheureux Charles. Elle a soutenu ses efforts de paix et élevé leurs huit enfants dans la foi pendant l'exil. Sa cause de canonisation est en cours.",
      es: "Emperatriz de Austria junto al Beato Carlos. Apoyó sus esfuerzos de paz y crió a sus ocho hijos en la fe durante el exilio. Su causa de canonización está en marcha.",
      de: "Kaiserin von Österreich an der Seite des Seligen Karl. Sie unterstützte seine Friedensbemühungen und erzog ihre acht Kinder im Glauben. Ihr Seligsprechungsprozess läuft."
    }
  },
  {
    id: 'k_louis_xiii',
    startYear: 1610,
    endYear: 1643,
    type: 'king',
    name: { en: "Louis XIII", fr: "Louis XIII", es: "Luis XIII", de: "Ludwig XIII." },
    description: {
      en: "King of France who consecrated his entire kingdom to the Virgin Mary in 1638 in thanksgiving for the pregnancy of his wife after years of childlessness. This led to the tradition of the Feast of the Assumption in France.",
      fr: "Roi de France qui a consacré son royaume à la Vierge Marie en 1638 en action de grâce pour la grossesse de sa femme. Cela a conduit à la tradition de la fête de l'Assomption en France.",
      es: "Rey de Francia que consagró todo su reino a la Virgen María en 1638 en acción de gracias por el embarazo de su esposa. Esto llevó a la tradición de la Fiesta de la Asunción.",
      de: "König von Frankreich, der 1638 sein ganzes Königreich der Jungfrau Maria weihte, als Dank für die Schwangerschaft seiner Frau."
    }
  },
  {
    id: 'k_edward_martyr',
    startYear: 975,
    endYear: 978,
    type: 'king',
    name: { en: "St. Edward the Martyr", fr: "Saint Édouard le Martyr", es: "San Eduardo el Mártir", de: "Hl. Eduard der Märtyrer" },
    description: {
      en: "King of England murdered at a young age. His support for the monastic reforms of St. Dunstan led to resentment among nobles. Miracles reported at his tomb led to his rapid canonization.",
      fr: "Roi d'Angleterre assassiné jeune. Son soutien aux réformes monastiques a suscité du ressentiment. Des miracles rapportés sur sa tombe ont conduit à sa canonisation rapide.",
      es: "Rey de Inglaterra asesinado a una edad temprana. Su apoyo a las reformas monásticas provocó resentimiento. Los milagros en su tumba llevaron a su rápida canonización.",
      de: "König von England, der in jungen Jahren ermordet wurde. Seine Unterstützung für die Klosterreformen führte zu Ressentiments. Wunder an seinem Grab führten zur Heiligsprechung."
    }
  },
  {
    id: 'k_ferdinand_arag',
    startYear: 1412,
    endYear: 1416,
    type: 'king',
    name: { en: "Ferdinand I of Aragon", fr: "Ferdinand Ier d'Aragon", es: "Fernando I de Aragón", de: "Ferdinand I. von Aragon" },
    description: {
      en: "Known as Ferdinand the Honest. He helped resolve the Western Schism by withdrawing support from the Antipope Benedict XIII, forcing the path to unity under a single Pope at the Council of Constance.",
      fr: "Connu sous le nom de Ferdinand le Juste. Il a aidé à résoudre le Grand Schisme d'Occident en retirant son soutien à l'antipape Benoît XIII.",
      es: "Conocido como Fernando de Antequera. Ayudó a resolver el Cisma de Occidente retirando el apoyo al antipapa Benedicto XIII.",
      de: "Bekannt als Ferdinand der Ehrliche. Er half, das Abendländische Schisma zu beenden, indem er dem Gegenpapst Benedikt XIII. die Unterstützung entzog."
    }
  },
  {
    id: 'k_manuel_i',
    startYear: 1495,
    endYear: 1521,
    type: 'king',
    name: { en: "Manuel I", fr: "Manuel Ier", es: "Manuel I", de: "Manuel I." },
    description: {
      en: "King of Portugal during the age of discovery. He sponsored Vasco da Gama and sent missionaries to Brazil, Africa, and India, initiating the global spread of Catholicism.",
      fr: "Roi du Portugal à l'ère des découvertes. Il a parrainé Vasco de Gama et envoyé des missionnaires au Brésil, en Afrique et en Inde, initiant la diffusion mondiale du catholicisme.",
      es: "Rey de Portugal durante la era de los descubrimientos. Patrocinó a Vasco da Gama y envió misioneros a Brasil, África e India, iniciando la expansión global del catolicismo.",
      de: "König von Portugal im Zeitalter der Entdeckungen. Er sponserte Vasco da Gama und sandte Missionare nach Brasilien, Afrika und Indien."
    }
  },
  {
    id: 'k_brian_boru',
    startYear: 1002,
    endYear: 1014,
    type: 'king',
    name: { en: "Brian Boru", fr: "Brian Boru", es: "Brian Boru", de: "Brian Boru" },
    description: {
      en: "High King of Ireland who ended the domination of the High Kingship by the Uí Néill and defeated the Vikings at Clontarf. He was a patron of the Church, restoring monasteries destroyed by Norse raiders.",
      fr: "Haut-Roi d'Irlande qui a vaincu les Vikings à Clontarf. Il était un mécène de l'Église, restaurant les monastères détruits par les raids nordiques.",
      es: "Gran Rey de Irlanda que derrotó a los vikingos en Clontarf. Fue un mecenas de la Iglesia, restaurando monasterios destruidos por los asaltantes nórdicos.",
      de: "Hochkönig von Irland, der die Wikinger bei Clontarf besiegte. Er war ein Förderer der Kirche und restaurierte von den Nordmännern zerstörte Klöster."
    }
  },
  {
    id: 'k_john_i_port',
    startYear: 1385,
    endYear: 1433,
    type: 'king',
    name: { en: "John I of Portugal", fr: "Jean Ier de Portugal", es: "Juan I de Portugal", de: "Johann I. von Portugal" },
    description: {
      en: "Founder of the Aviz dynasty. He led Portugal to victory against Castile at Aljubarrota, attributing the win to the Virgin Mary and building the magnificent Batalha Monastery in thanksgiving.",
      fr: "Fondateur de la dynastie d'Aviz. Il a mené le Portugal à la victoire à Aljubarrota, attribuant la victoire à la Vierge Marie et construisant le monastère de Batalha en action de grâce.",
      es: "Fundador de la dinastía Avís. Lideró a Portugal a la victoria en Aljubarrota, atribuyendo el triunfo a la Virgen María y construyendo el Monasterio de Batalha.",
      de: "Gründer der Aviz-Dynastie. Er führte Portugal zum Sieg bei Aljubarrota, schrieb den Sieg der Jungfrau Maria zu und baute das Kloster Batalha."
    }
  },
  {
    id: 'k_sobieski_daughter',
    startYear: 1700,
    endYear: 1735,
    type: 'king',
    name: { en: "Maria Clementina Sobieska", fr: "Marie-Clémentine Sobieska", es: "María Clementina Sobieska", de: "Maria Clementina Sobieska" },
    description: {
      en: "Titular Queen of England (Jacobite). Granddaughter of John III Sobieski. She was known for her intense piety and charity in Rome. Pope Clement XII ordered a state funeral for her, and she is one of the few laypeople buried in St. Peter's Basilica.",
      fr: "Reine titulaire d'Angleterre. Petite-fille de Jean III Sobieski. Elle était connue pour sa piété intense à Rome. Elle est l'une des rares laïques enterrées dans la basilique Saint-Pierre.",
      es: "Reina titular de Inglaterra. Nieta de Juan III Sobieski. Conocida por su intensa piedad en Roma. Es una de las pocas laicas enterradas en la Basílica de San Pedro.",
      de: "Titular-Königin von England. Enkelin von Johann III. Sobieski. Bekannt für ihre Frömmigkeit. Sie ist eine der wenigen Laien, die im Petersdom begraben sind."
    }
  },
  {
    id: 'k_louis_xvi',
    startYear: 1774,
    endYear: 1793,
    type: 'king',
    name: { en: "Louis XVI", fr: "Louis XVI", es: "Luis XVI", de: "Ludwig XVI." },
    description: {
      en: "King of France martyred by the French Revolution. He refused to enforce the Civil Constitution of the Clergy which aimed to destroy the Church. He died forgiving his executioners, a model of Christian resignation.",
      fr: "Roi de France martyrisé par la Révolution. Il a refusé d'appliquer la Constitution civile du clergé. Il est mort en pardonnant à ses bourreaux, modèle de résignation chrétienne.",
      es: "Rey de Francia martirizado por la Revolución. Se negó a imponer la Constitución Civil del Clero. Murió perdonando a sus verdugos, modelo de resignación cristiana.",
      de: "König von Frankreich, von der Revolution gemartert. Er weigerte sich, die Zivilverfassung des Klerus durchzusetzen. Er starb und vergab seinen Henkern."
    }
  },
  {
    id: 'k_henry_ven',
    startYear: 1870,
    endYear: 1883,
    type: 'king',
    name: { en: "Henri, Count of Chambord", fr: "Henri d'Artois", es: "Enrique de Artois", de: "Henri d'Artois" },
    description: {
      en: "The Legitimist pretender to the French throne. He famously refused to become King if it meant accepting the tricolor flag of the Revolution, insisting on the white flag of the Catholic monarchy and the sovereignty of God over the state.",
      fr: "Le prétendant légitimiste au trône de France. Il a refusé de devenir roi s'il devait accepter le drapeau tricolore, insistant sur le drapeau blanc de la monarchie catholique.",
      es: "El pretendiente legitimista al trono francés. Se negó a ser rey si eso significaba aceptar la bandera tricolor, insistiendo en la bandera blanca de la monarquía católica.",
      de: "Der legitimistische Thronprätendent Frankreichs. Er weigerte sich, König zu werden, wenn er die Trikolore akzeptieren müsste, und bestand auf der weißen Flagge."
    }
  },
  {
    id: 'k_garcia_moreno',
    startYear: 1861,
    endYear: 1875,
    type: 'king',
    name: { en: "Gabriel Garcia Moreno", fr: "Gabriel Garcia Moreno", es: "Gabriel García Moreno", de: "Gabriel Garcia Moreno" },
    description: {
      en: "President of Ecuador who ruled as a Catholic statesman. He consecrated Ecuador to the Sacred Heart of Jesus and was assassinated by Freemasons leaving the Cathedral, crying out 'God does not die!'.",
      fr: "Président de l'Équateur qui a gouverné en homme d'État catholique. Il a consacré l'Équateur au Sacré-Cœur et a été assassiné en criant 'Dieu ne meurt pas !'.",
      es: "Presidente de Ecuador que gobernó como estadista católico. Consagró Ecuador al Sagrado Corazón y fue asesinado gritando '¡Dios no muere!'.",
      de: "Präsident von Ecuador, der als katholischer Staatsmann regierte. Er weihte Ecuador dem Heiligsten Herzen Jesu und wurde ermordet, wobei er rief: 'Gott stirbt nicht!'."
    }
  },
  {
    id: 'k_tamar',
    startYear: 1184,
    endYear: 1213,
    type: 'king',
    name: { en: "St. Tamar the Great", fr: "Sainte Tamar", es: "Santa Tamar", de: "Hl. Tamar" },
    description: {
      en: "Queen Regnant of Georgia who presided over its Golden Age. She defended her kingdom against Muslim invasions and was a great patron of churches and monasteries. She is canonized in the Orthodox Church but respected by Catholics.",
      fr: "Reine régnante de Géorgie. Elle a défendu son royaume contre les invasions musulmanes et a été une grande mécène des églises. Elle est respectée par les catholiques.",
      es: "Reina reinante de Georgia. Defendió su reino contra las invasiones musulmanas y fue una gran mecenas de iglesias. Es respetada por los católicos.",
      de: "Regierende Königin von Georgien. Sie verteidigte ihr Königreich gegen muslimische Invasionen und war eine große Förderin von Kirchen."
    }
  },
  {
    id: 'k_mieszko',
    startYear: 960,
    endYear: 992,
    type: 'king',
    name: { en: "Mieszko I", fr: "Mieszko Ier", es: "Mieszko I", de: "Mieszko I." },
    description: {
      en: "Duke of Poland who accepted Baptism in 966, an event known as the 'Baptism of Poland'. This act brought Poland into the orbit of Western Latin culture and Catholicism, defining its history for a millennium.",
      fr: "Duc de Pologne qui a accepté le baptême en 966. Cet acte a fait entrer la Pologne dans l'orbite de la culture latine occidentale et du catholicisme.",
      es: "Duque de Polonia que aceptó el bautismo en 966. Este acto llevó a Polonia a la órbita de la cultura latina occidental y el catolicismo.",
      de: "Herzog von Polen, der 966 die Taufe annahm. Dieser Akt brachte Polen in den Orbit der westlichen lateinischen Kultur und des Katholizismus."
    }
  },
  {
    id: 'k_james_v',
    startYear: 1513,
    endYear: 1542,
    type: 'king',
    name: { en: "James V of Scotland", fr: "Jacques V d'Écosse", es: "Jacobo V de Escocia", de: "Jakob V. von Schottland" },
    description: {
      en: "King of Scotland who resisted the pressure from his uncle Henry VIII to break with Rome. He defended the Catholic faith in Scotland until his death, leaving the throne to Mary, Queen of Scots.",
      fr: "Roi d'Écosse qui a résisté à la pression de son oncle Henri VIII pour rompre avec Rome. Il a défendu la foi catholique en Écosse jusqu'à sa mort.",
      es: "Rey de Escocia que resistió la presión de su tío Enrique VIII para romper con Roma. Defendió la fe católica en Escocia hasta su muerte.",
      de: "König von Schottland, der dem Druck seines Onkels Heinrich VIII. widerstand, mit Rom zu brechen. Er verteidigte den katholischen Glauben bis zu seinem Tod."
    }
  }
];
