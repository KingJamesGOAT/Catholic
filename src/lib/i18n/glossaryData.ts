export interface GlossaryTerm {
  id: string;
  term: {
    en: string;
    fr: string;
    es: string;
    de: string;
  };
  definition: {
    en: string;
    fr: string;
    es: string;
    de: string;
  };
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "absolution",
    term: {
      en: "Absolution",
      fr: "Absolution",
      es: "Absolución",
      de: "Absolution",
    },
    definition: {
      en: "The act by which a priest, acting as the agent of Christ, grants forgiveness of sins in the Sacrament of Reconciliation.",
      fr: "L'acte par lequel un prêtre, agissant comme agent du Christ, accorde le pardon des péchés dans le sacrement de Réconciliation.",
      es: "El acto por el cual un sacerdote, actuando como agente de Cristo, otorga el perdón de los pecados en el Sacramento de la Reconciliación.",
      de: "Die Handlung, durch die ein Priester als Stellvertreter Christi im Sakrament der Versöhnung die Vergebung der Sünden gewährt.",
    },
  },
  {
    id: "acolyte",
    term: {
      en: "Acolyte",
      fr: "Acolyte",
      es: "Acólito",
      de: "Akolyth",
    },
    definition: {
      en: "A lay minister who assists the priest or deacon in liturgical celebrations, especially the Mass.",
      fr: "Un ministre laïc qui assiste le prêtre ou le diacre dans les célébrations liturgiques, en particulier la messe.",
      es: "Un ministro laico que asiste al sacerdote o diácono en las celebraciones litúrgicas, especialmente en la Misa.",
      de: "Ein Laie, der dem Priester oder Diakon bei liturgischen Feiern, insbesondere der Messe, assistiert.",
    },
  },

  {
    id: "sedevacantism",
    term: {
      en: "Sedevacantism",
      fr: "Sédévacantisme",
      es: "Sedevacantismoa",
      de: "Sedisvakantismus",
    },
    definition: {
      en: "The belief (Sedevacantism) or a person who holds the belief (Sedevacantist) that the See of Rome (the Papacy) is currently vacant. Adherents believe that recent Popes, typically since the Second Vatican Council (1962-1965), are heretics and have therefore lost or never validly obtained the papal office.",
      fr: "La croyance (Sédévacantisme) ou une personne qui tient la croyance (Sédévacantiste) que le Siège de Rome (la Papauté) est actuellement vacant. Les adhérents estiment que les Papes récents, généralement depuis le Concile Vatican II (1962-1965), sont des hérétiques et ont par conséquent perdu ou n'ont jamais validement obtenu la charge papale.",
      es: "La creencia (Sedevacantismo) o una persona que sostiene la creencia (Sedevacantista) de que la Sede de Roma (el Papado) está actualmente vacante. Los adherentes creen que los Papas recientes, generalmente desde el Concilio Vaticano II (1962-1965), son herejes y, por lo tanto, han perdido o nunca obtuvieron válidamente el oficio papal.",
      de: "Der Glaube (Sedisvakantismus) oder eine Person, die den Glauben vertritt (Sedisvakantist), dass der Stuhl von Rom (das Papsttum) derzeit vakant ist. Anhänger glauben, dass die jüngsten Päpste, typischerweise seit dem Zweiten Vatikanischen Konzil (1962-1965), Häretiker sind und daher das päpstliche Amt verloren oder nie gültig erlangt haben.",
    },
  },

  {
    id: "agape",
    term: {
      en: "Agape",
      fr: "Agapè",
      es: "Ágape",
      de: "Agape",
    },
    definition: {
      en: "A Greek word for selfless, sacrificial, and unconditional love, representing the divine love of God for humanity and the love Christians are called to have for one another.",
      fr: "Un mot grec désignant l'amour désintéressé, sacrificiel et inconditionnel, représentant l'amour divin de Dieu pour l'humanité et l'amour que les chrétiens sont appelés à avoir les uns pour les autres.",
      es: "Una palabra griega para el amor desinteresado, sacrificial e incondicional, que representa el amor divino de Dios por la humanidad y el amor que los cristianos están llamados a tenerse unos a otros.",
      de: "Ein griechisches Wort für selbstlose, opferbereite und bedingungslose Liebe, das die göttliche Liebe Gottes zur Menschheit und die Liebe darstellt, zu der Christen untereinander berufen sind.",
    },
  },

  {
    id: "novus-ordo",
    term: {
      en: "Novus Ordo",
      fr: "Novus Ordo",
      es: "Novus Ordo",
      de: "Novus Ordo",
    },
    definition: {
      en: "A common name for the Mass of Paul VI (Missa Pauli VI), the revision of the Roman Rite Mass promulgated by Pope Paul VI in 1969, after the Second Vatican Council. It is now the Ordinary Form of the Roman Rite.",
      fr: "Nom courant pour la Messe de Paul VI (Missa Pauli VI), la révision du rite romain de la messe promulguée par le pape Paul VI en 1969, après le Concile Vatican II. C'est maintenant la Forme Ordinaire du rite romain.",
      es: "Nombre común para la Misa de Pablo VI (Missa Pauli VI), la revisión del rito romano de la Misa promulgada por el Papa Pablo VI en 1969, después del Concilio Vaticano II. Actualmente es la Forma Ordinaria del rito romano.",
      de: "Ein gebräuchlicher Name für die Messe Pauls VI. (Missa Pauli VI), die 1969 von Papst Paul VI. nach dem Zweiten Vatikanischen Konzil promulgierte Neufassung der Messe im Römischen Ritus. Sie ist heute die Ordentliche Form des Römischen Ritus.",
    },
  },

  {
    id: "adoration",
    term: {
      en: "Adoration",
      fr: "Adoration",
      es: "Adoración",
      de: "Anbetung",
    },
    definition: {
      en: "The highest form of worship, praise, and honor, due to God alone. This is distinct from veneration (dulia) given to saints.",
      fr: "La forme la plus élevée d'adoration, de louange et d'honneur, due à Dieu seul. Ceci est distinct de la vénération (dulie) accordée aux saints.",
      es: "La forma más alta de culto, alabanza y honor, debida solo a Dios. Esto es distinto de la veneración (dulía) dada a los santos.",
      de: "Die höchste Form der Anbetung, des Lobes und der Ehre, die Gott allein gebührt. Dies unterscheidet sich von der Verehrung (Dulia), die den Heiligen zuteilwird.",
    },
  },

  {
    id: "latin-mass",
    term: {
      en: "Latin Mass",
      fr: "Messe Latine",
      es: "Misa Latina",
      de: "Lateinische Messe",
    },
    definition: {
      en: "The traditional form of the Roman Rite Mass, celebrated in Latin, as codified in the Roman Missal of 1962. Also known as the Tridentine Mass or the Extraordinary Form.",
      fr: "La forme traditionnelle du rite romain de la messe, célébrée en latin, telle que codifiée dans le Missel romain de 1962. Également connue sous le nom de Messe tridentine ou Forme extraordinaire.",
      es: "La forma tradicional del rito romano de la Misa, celebrada en latín, codificada en el Misal Romano de 1962. También conocida como la Misa Tridentina o la Forma Extraordinaria.",
      de: "Die traditionelle Form der Messe im Römischen Ritus, die auf Latein gefeiert wird, wie sie im Römischen Messbuch von 1962 kodifiziert ist. Auch bekannt als Tridentinische Messe oder außerordentliche Form.",
    },
  },

  {
    id: "advent",
    term: {
      en: "Advent",
      fr: "Avent",
      es: "Adviento",
      de: "Advent",
    },
    definition: {
      en: "The liturgical season of preparation for the celebration of the birth of Christ (Christmas). It begins four Sundays before Christmas.",
      fr: "La saison liturgique de préparation à la célébration de la naissance du Christ (Noël). Elle commence quatre dimanches avant Noël.",
      es: "El tiempo litúrgico de preparación para la celebración del nacimiento de Cristo (Navidad). Comienza cuatro domingos antes de Navidad.",
      de: "Die liturgische Zeit der Vorbereitung auf die Feier der Geburt Christi (Weihnachten). Sie beginnt vier Sonntage vor Weihnachten.",
    },
  },
  {
    id: "agnosticism",
    term: {
      en: "Agnosticism",
      fr: "Agnosticisme",
      es: "Agnosticismo",
      de: "Agnostizismus",
    },
    definition: {
      en: "The belief that the existence of God is unknown and unknowable.",
      fr: "La croyance que l'existence de Dieu est inconnue et inconnaissable.",
      es: "La creencia de que la existencia de Dios es desconocida e incognoscible.",
      de: "Der Glaube, dass die Existenz Gottes unbekannt und unerkennbar ist.",
    },
  },
  {
    id: "agnus-dei",
    term: {
      en: "Agnus Dei",
      fr: "Agnus Dei",
      es: "Agnus Dei",
      de: "Agnus Dei",
    },
    definition: {
      en: "Latin for 'Lamb of God.' A title for Jesus Christ, and a prayer said during Mass.",
      fr: "Latin pour 'Agneau de Dieu'. Un titre pour Jésus-Christ, et une prière dite pendant la messe.",
      es: "Latín para 'Cordero de Dios'. Un título para Jesucristo, y una oración dicha durante la Misa.",
      de: "Lateinisch für 'Lamm Gottes'. Ein Titel für Jesus Christus und ein Gebet, das während der Messe gesprochen wird.",
    },
  },

  {
    id: "deus_vult",
    term: {
      en: "Deus Vult",
      fr: "Deus Vult",
      es: "Deus Vult",
      de: "Deus Vult",
    },
    definition: {
      en: '"God wills it" — a medieval Latin expression affirming that an action accords with God\'s will.',
      fr: '"Dieu le veut" — une expression latine médiévale affirmant qu\'une action est conforme à la volonté de Dieu.',
      es: '"Dios lo quiere" — una expresión latina medieval que afirma que una acción está conforme a la voluntad de Dios.',
      de: '"Gott will es" — ein mittelalterlicher lateinischer Ausdruck, der bestätigt, dass etwas dem Willen Gottes entspricht.',
    },
  },

  {
    id: "alleluia",
    term: {
      en: "Alleluia",
      fr: "Alléluia",
      es: "Aleluya",
      de: "Halleluja",
    },
    definition: {
      en: "From Hebrew, meaning 'Praise the Lord.' An exclamation of joy, especially used during the Easter season.",
      fr: "De l'hébreu, signifiant 'Louez le Seigneur'. Une exclamation de joie, particulièrement utilisée pendant le temps pascal.",
      es: "Del hebreo, que significa 'Alabado sea el Señor'. Una exclamación de alegría, especialmente utilizada durante el tiempo de Pascua.",
      de: "Aus dem Hebräischen, bedeutet 'Preist den Herrn'. Ein Ausruf der Freude, der besonders in der Osterzeit verwendet wird.",
    },
  },

  {
    id: "salve_regina",
    term: {
      en: "Salve Regina",
      fr: "Salve Regina",
      es: "Salve Regina",
      de: "Salve Regina",
    },
    definition: {
      en: 'A traditional Catholic Marian prayer beginning with "Hail, Holy Queen," recited especially at Compline.',
      fr: "Une prière mariale catholique traditionnelle commençant par « Salut, Sainte Reine », récitée notamment aux complies.",
      es: "Una oración mariana católica tradicional que comienza con « Dios te salve, Reina », rezada especialmente en completas.",
      de: 'Ein traditionelles katholisches Mariengebet, das mit „Sei gegrüßt, o Königin" beginnt und besonders zur Komplet gebetet wird.',
    },
  },

  {
    id: "pater_noster",
    term: {
      en: "Pater Noster",
      fr: "Pater Noster",
      es: "Padre Nuestro",
      de: "Vaterunser",
    },
    definition: {
      en: 'The "Our Father," the prayer taught by Christ to His disciples as the model of Christian prayer.',
      fr: "Le « Notre Père », la prière enseignée par le Christ à ses disciples comme modèle de prière chrétienne.",
      es: "El « Padre Nuestro », la oración enseñada por Cristo como modelo de oración cristiana.",
      de: "Das „Vaterunser“, das Gebet, das Christus seinen Jüngern als Vorbild des christlichen Gebets lehrte.",
    },
  },

  {
  id: "peter",
  term: {
    en: "Peter",
    fr: "Pierre",
    es: "Pedro",
    de: "Petrus",
  },
  definition: {
    en: "One of the Twelve Apostles and the first Pope.",
    fr: "Un des Douze Apôtres et le premier pape.",
    es: "Uno de los Doce Apóstoles y el primer papa.",
    de: "Einer der zwölf Apostel und der erste Papst.",
  },
},
{
  id: "andrew",
  term: {
    en: "Andrew",
    fr: "André",
    es: "Andrés",
    de: "Andreas",
  },
  definition: {
    en: "Brother of Peter and one of the Twelve Apostles.",
    fr: "Frère de Pierre et l’un des Douze Apôtres.",
    es: "Hermano de Pedro y uno de los Doce Apóstoles.",
    de: "Bruder des Petrus und einer der zwölf Apostel.",
  },
},
{
  id: "james_greater",
  term: {
    en: "James the Greater",
    fr: "Jacques le Majeur",
    es: "Santiago el Mayor",
    de: "Jakobus der Ältere",
  },
  definition: {
    en: "One of the Twelve Apostles, son of Zebedee.",
    fr: "Un des Douze Apôtres, fils de Zébédée.",
    es: "Uno de los Doce Apóstoles, hijo de Zebedeo.",
    de: "Einer der zwölf Apostel, Sohn des Zebedäus.",
  },
},
{
  id: "john",
  term: {
    en: "John",
    fr: "Jean",
    es: "Juan",
    de: "Johannes",
  },
  definition: {
    en: "One of the Apostles and author of the Fourth Gospel.",
    fr: "Un des Apôtres et auteur du quatrième Évangile.",
    es: "Uno de los Apóstoles y autor del cuarto Evangelio.",
    de: "Einer der Apostel und Autor des vierten Evangeliums.",
  },
},
{
  id: "philip",
  term: {
    en: "Philip",
    fr: "Philippe",
    es: "Felipe",
    de: "Philippus",
  },
  definition: {
    en: "One of the Twelve Apostles.",
    fr: "Un des Douze Apôtres.",
    es: "Uno de los Doce Apóstoles.",
    de: "Einer der zwölf Apostel.",
  },
},
{
  id: "bartholomew",
  term: {
    en: "Bartholomew",
    fr: "Barthélemy",
    es: "Bartolomé",
    de: "Bartholomäus",
  },
  definition: {
    en: "One of the Twelve Apostles, traditionally identified with Nathanael.",
    fr: "Un des Douze Apôtres, traditionnellement identifié à Nathanaël.",
    es: "Uno de los Doce Apóstoles, tradicionalmente identificado con Natanael.",
    de: "Einer der zwölf Apostel, traditionell mit Nathanael identifiziert.",
  },
},
{
  id: "matthew",
  term: {
    en: "Matthew",
    fr: "Matthieu",
    es: "Mateo",
    de: "Matthäus",
  },
  definition: {
    en: "Apostle and author of the Gospel of Matthew.",
    fr: "Apôtre et auteur de l’Évangile selon Matthieu.",
    es: "Apóstol y autor del Evangelio de Mateo.",
    de: "Apostel und Autor des Matthäusevangeliums.",
  },
},
{
  id: "thomas",
  term: {
    en: "Thomas",
    fr: "Thomas",
    es: "Tomás",
    de: "Thomas",
  },
  definition: {
    en: "One of the Twelve Apostles, known for initially doubting the Resurrection.",
    fr: "Un des Douze Apôtres, connu pour avoir d’abord douté de la Résurrection.",
    es: "Uno de los Doce Apóstoles, conocido por dudar inicialmente de la Resurrección.",
    de: "Einer der zwölf Apostel, bekannt für seinen anfänglichen Zweifel an der Auferstehung.",
  },
},
{
  id: "james_lesser",
  term: {
    en: "James the Lesser",
    fr: "Jacques le Mineur",
    es: "Santiago el Menor",
    de: "Jakobus der Jüngere",
  },
  definition: {
    en: "One of the Twelve Apostles, son of Alphaeus.",
    fr: "Un des Douze Apôtres, fils d’Alphée.",
    es: "Uno de los Doce Apóstoles, hijo de Alfeo.",
    de: "Einer der zwölf Apostel, Sohn des Alphäus.",
  },
},
{
  id: "jude",
  term: {
    en: "Jude Thaddeus",
    fr: "Jude Thaddée",
    es: "Judas Tadeo",
    de: "Judas Thaddäus",
  },
  definition: {
    en: "One of the Twelve Apostles, often invoked as patron of difficult causes.",
    fr: "Un des Douze Apôtres, souvent invoqué comme patron des causes difficiles.",
    es: "Uno de los Doce Apóstoles, patrono de las causas difíciles.",
    de: "Einer der zwölf Apostel, Patron schwieriger Anliegen.",
  },
},
{
  id: "simon_zealot",
  term: {
    en: "Simon the Zealot",
    fr: "Simon le Zélote",
    es: "Simón el Zelote",
    de: "Simon der Zelot",
  },
  definition: {
    en: "One of the Twelve Apostles.",
    fr: "Un des Douze Apôtres.",
    es: "Uno de los Doce Apóstoles.",
    de: "Einer der zwölf Apostel.",
  },
},
{
  id: "judas_iscariot",
  term: {
    en: "Judas Iscariot",
    fr: "Judas Iscariote",
    es: "Judas Iscariote",
    de: "Judas Iskariot",
  },
  definition: {
    en: "One of the Twelve Apostles who betrayed Jesus.",
    fr: "Un des Douze Apôtres qui a trahi Jésus.",
    es: "Uno de los Doce Apóstoles que traicionó a Jesús.",
    de: "Einer der zwölf Apostel, der Jesus verriet.",
  },
},
{
  id: "matthias",
  term: {
    en: "Matthias",
    fr: "Matthias",
    es: "Matías",
    de: "Matthias",
  },
  definition: {
    en: "Chosen to replace Judas Iscariot among the Twelve.",
    fr: "Choisi pour remplacer Judas Iscariote parmi les Douze.",
    es: "Elegido para reemplazar a Judas Iscariote entre los Doce.",
    de: "Zum Ersatz für Judas Iskariot unter den Zwölf gewählt.",
  },
},

  {
    id: "jesus",
    term: {
      en: "Jesus",
      fr: "Jésus",
      es: "Jesús",
      de: "Jesus",
    },
    definition: {
      en: "Jesus Christ, the incarnate Son of God, true God and true man, the Savior of humanity.",
      fr: "Jésus-Christ, le Fils de Dieu incarné, vrai Dieu et vrai homme, le Sauveur de l’humanité.",
      es: "Jesucristo, el Hijo de Dios encarnado, verdadero Dios y verdadero hombre, el Salvador de la humanidad.",
      de: "Jesus Christus, der menschgewordene Sohn Gottes, wahrer Gott und wahrer Mensch, der Erlöser der Menschheit.",
    },
  },

  {
    id: "altar",
    term: {
      en: "Altar",
      fr: "Autel",
      es: "Altar",
      de: "Altar",
    },
    definition: {
      en: "The sacred table in a church where the sacrifice of the Mass (Eucharist) is celebrated.",
      fr: "La table sacrée dans une église où le sacrifice de la messe (Eucharistie) est célébré.",
      es: "La mesa sagrada en una iglesia donde se celebra el sacrificio de la Misa (Eucaristía).",
      de: "Der heilige Tisch in einer Kirche, auf dem das Messopfer (Eucharistie) gefeiert wird.",
    },
  },
  {
    id: "amen",
    term: { en: "Amen", fr: "Amen", es: "Amén", de: "Amen" },
    definition: {
      en: "A Hebrew word meaning 'so be it' or 'it is true.' Used to express agreement with a prayer or creed.",
      fr: "Un mot hébreu signifiant 'qu'il en soit ainsi' ou 'c'est vrai'. Utilisé pour exprimer son accord avec une prière ou un credo.",
      es: "Una palabra hebrea que significa 'así sea' o 'es verdad'. Se usa para expresar acuerdo con una oración o credo.",
      de: "Ein hebräisches Wort, das 'so sei es' oder 'es ist wahr' bedeutet. Wird verwendet, um die Zustimmung zu einem Gebet oder Glaubensbekenntnis auszudrücken.",
    },
  },
  {
    id: "angel",
    term: { en: "Angel", fr: "Ange", es: "Ángel", de: "Engel" },
    definition: {
      en: "A purely spiritual being created by God, possessing intelligence and free will, who serves as a messenger and protector.",
      fr: "Un être purement spirituel créé par Dieu, doté d'intelligence et de volonté libre, qui sert de messager et de protecteur.",
      es: "Un ser puramente espiritual creado por Dios, que posee inteligencia y libre albedrío, que sirve como mensajero y protector.",
      de: "Ein rein geistiges Wesen, das von Gott geschaffen wurde, Intelligenz und freien Willen besitzt und als Bote und Beschützer dient.",
    },
  },
  {
    id: "anglicanism",
    term: {
      en: "Anglicanism",
      fr: "Anglicanisme",
      es: "Anglicanismo",
      de: "Anglikanismus",
    },
    definition: {
      en: "A tradition within Christianity comprising the Church of England and churches historically connected to it.",
      fr: "Une tradition au sein du christianisme comprenant l'Église d'Angleterre et les Églises qui lui sont historiquement liées.",
      es: "Una tradición dentro del cristianismo que comprende la Iglesia de Inglaterra e iglesias históricamente conectadas a ella.",
      de: "Eine Tradition innerhalb des Christentums, die die Church of England und historisch mit ihr verbundene Kirchen umfasst.",
    },
  },
  {
    id: "annulment",
    term: {
      en: "Annulment",
      fr: "Annulation",
      es: "Anulación",
      de: "Annullierung",
    },
    definition: {
      en: "A declaration by a Church tribunal that a marriage, though seemingly valid, was missing an essential element from the beginning.",
      fr: "Une déclaration par un tribunal de l'Église qu'un mariage, bien qu'apparemment valide, manquait d'un élément essentiel dès le début.",
      es: "Una declaración por un tribunal de la Iglesia de que a un matrimonio, aunque aparentemente válido, le faltaba un elemento esencial desde el principio.",
      de: "Eine Erklärung eines kirchlichen Gerichts, dass einer Ehe, obwohl scheinbar gültig, von Anfang an ein wesentliches Element fehlte.",
    },
  },
  {
    id: "annunciation",
    term: {
      en: "Annunciation",
      fr: "Annonciation",
      es: "Anunciación",
      de: "Verkündigung",
    },
    definition: {
      en: "The visit of the angel Gabriel to the Virgin Mary to inform her that she was to be the Mother of God.",
      fr: "La visite de l'ange Gabriel à la Vierge Marie pour l'informer qu'elle serait la Mère de Dieu.",
      es: "La visita del ángel Gabriel a la Virgen María para informarle que iba a ser la Madre de Dios.",
      de: "Der Besuch des Engels Gabriel bei der Jungfrau Maria, um ihr mitzuteilen, dass sie die Mutter Gottes werden sollte.",
    },
  },
  {
    id: "anointing-of-the-sick",
    term: {
      en: "Anointing of the Sick",
      fr: "Onction des malades",
      es: "Unción de los Enfermos",
      de: "Krankensalbung",
    },
    definition: {
      en: "A sacrament administered to those who are seriously ill, to bring spiritual and sometimes physical healing.",
      fr: "Un sacrement administré à ceux qui sont gravement malades, pour apporter la guérison spirituelle et parfois physique.",
      es: "Un sacramento administrado a aquellos que están gravemente enfermos, para brindar sanación espiritual y, a veces, física.",
      de: "Ein Sakrament, das Schwerkranken gespendet wird, um geistliche und manchmal körperliche Heilung zu bringen.",
    },
  },
  {
    id: "apocrypha",
    term: {
      en: "Apocrypha",
      fr: "Apocryphes",
      es: "Apócrifos",
      de: "Apokryphen",
    },
    definition: {
      en: "A Protestant term for the Deuterocanonical books. Books of Jewish origin that are not included in the Hebrew Bible.",
      fr: "Terme protestant pour les livres Deutérocanoniques. Livres d'origine juive qui ne sont pas inclus dans la Bible hébraïque.",
      es: "Término protestante para los libros Deuterocanónicos. Libros de origen judío que no están incluidos en la Biblia hebrea.",
      de: "Ein protestantischer Begriff für die deuterokanonischen Bücher. Bücher jüdischen Ursprungs, die nicht in der hebräischen Bibel enthalten sind.",
    },
  },
  {
    id: "apologetics",
    term: {
      en: "Apologetics",
      fr: "Apologétique",
      es: "Apologética",
      de: "Apologetik",
    },
    definition: {
      en: "The discipline of defending the Christian faith through systematic argumentation and discourse.",
      fr: "La discipline de la défense de la foi chrétienne par l'argumentation et le discours systématiques.",
      es: "La disciplina de defender la fe cristiana mediante la argumentación y el discurso sistemáticos.",
      de: "Die Disziplin der Verteidigung des christlichen Glaubens durch systematische Argumentation und Diskurs.",
    },
  },
  {
    id: "apostasy",
    term: {
      en: "Apostasy",
      fr: "Apostasie",
      es: "Apostasía",
      de: "Apostasie",
    },
    definition: {
      en: "The total rejection of the Christian faith by a baptized person.",
      fr: "Le rejet total de la foi chrétienne par une personne baptisée.",
      es: "El rechazo total de la fe cristiana por parte de una persona bautizada.",
      de: "Die vollständige Ablehnung des christlichen Glaubens durch eine getaufte Person.",
    },
  },
  {
    id: "apostle",
    term: {
      en: "Apostle",
      fr: "Apôtre",
      es: "Apóstol",
      de: "Apostel",
    },
    definition: {
      en: "Greek for 'one who is sent.' Refers to the twelve men chosen by Jesus to be his closest followers and messengers.",
      fr: "Grec pour 'celui qui est envoyé'. Fait référence aux douze hommes choisis par Jésus pour être ses plus proches disciples et messagers.",
      es: "Griego para 'el que es enviado'. Se refiere a los doce hombres elegidos por Jesús para ser sus seguidores y mensajeros más cercanos.",
      de: "Griechisch für 'der Gesandte'. Bezieht sich auf die zwölf Männer, die Jesus zu seinen engsten Nachfolgern und Boten erwählt hat.",
    },
  },
  {
    id: "apostolic-fathers",
    term: {
      en: "Apostolic Fathers",
      fr: "Pères apostoliques",
      es: "Padres Apostólicos",
      de: "Apostolische Väter",
    },
    definition: {
      en: "The earliest Christian writers (c. 70-150 AD) who were not apostles themselves but were taught by them.",
      fr: "Les premiers écrivains chrétiens (vers 70-150 ap. J.-C.) qui n'étaient pas apôtres eux-mêmes mais qui ont été enseignés par eux.",
      es: "Los primeros escritores cristianos (c. 70-150 d.C.) que no fueron apóstoles, pero fueron enseñados por ellos.",
      de: "Die frühesten christlichen Schriftsteller (ca. 70-150 n. Chr.), die nicht selbst Apostel waren, aber von ihnen gelehrt wurden.",
    },
  },
  {
    id: "apostolic-succession",
    term: {
      en: "Apostolic Succession",
      fr: "Succession Apostolique",
      es: "Sucesión Apostólica",
      de: "Apostolische Sukzession",
    },
    definition: {
      en: "The uninterrupted transmission of spiritual authority from the Apostles through successive popes and bishops.",
      fr: "La transmission ininterrompue de l'autorité spirituelle des Apôtres à travers les papes et évêques successifs.",
      es: "La transmisión ininterrumpida de la autoridad espiritual de los Apóstoles a través de los papas y obispos sucesivos.",
      de: "Die ununterbrochene Weitergabe geistlicher Autorität von den Aposteln durch aufeinanderfolgende Päpste und Bischöfe.",
    },
  },
  {
    id: "archbishop",
    term: {
      en: "Archbishop",
      fr: "Archevêque",
      es: "Arzobispo",
      de: "Erzbischof",
    },
    definition: {
      en: "The chief bishop responsible for a major archdiocese, who has authority over other bishops in his province.",
      fr: "L'évêque principal responsable d'une archidiocèse majeure, qui a autorité sur les autres évêques de sa province.",
      es: "El obispo principal responsable de una arquidiócesis importante, que tiene autoridad sobre otros obispos en su provincia.",
      de: "Der leitende Bischof, der für eine bedeutende Erzdiözese verantwortlich ist und Autorität über andere Bischöfe in seiner Provinz hat.",
    },
  },
  {
    id: "archdiocese",
    term: {
      en: "Archdiocese",
      fr: "Archidiocèse",
      es: "Arquidiócesis",
      de: "Erzdiözese",
    },
    definition: {
      en: "The principal or metropolitan diocese of an ecclesiastical province, led by an archbishop.",
      fr: "Le diocèse principal ou métropolitain d'une province ecclésiastique, dirigé par un archevêque.",
      es: "La diócesis principal o metropolitana de una provincia eclesiástica, dirigida por un arzobispo.",
      de: "Die Haupt- oder Metropolitandiözese einer Kirchenprovinz, die von einem Erzbischof geleitet wird.",
    },
  },
  {
    id: "arianism",
    term: {
      en: "Arianism",
      fr: "Arianisme",
      es: "Arrianismo",
      de: "Arianismus",
    },
    definition: {
      en: "An early Church heresy that denied the full divinity of Jesus Christ, teaching he was a created being.",
      fr: "Une hérésie de l'Église primitive qui niait la pleine divinité de Jésus-Christ, enseignant qu'il était un être créé.",
      es: "Una herejía de la Iglesia primitiva que negaba la plena divinidad de Jesucristo, enseñando que era un ser creado.",
      de: "Eine Häresie der frühen Kirche, die die volle Göttlichkeit Jesu Christi leugnete und lehrte, er sei ein geschaffenes Wesen.",
    },
  },
  {
    id: "asceticism",
    term: {
      en: "Asceticism",
      fr: "Ascétisme",
      es: "Ascetismo",
      de: "Askese",
    },
    definition: {
      en: "The practice of severe self-discipline and avoidance of all forms of indulgence, typically for religious reasons.",
      fr: "La pratique d'une autodiscipline sévère et l'évitement de toute forme d'indulgence, généralement pour des raisons religieuses.",
      es: "La práctica de la autodisciplina severa y la evitación de toda forma de indulgencia, típicamente por razones religiosas.",
      de: "Die Praxis strenger Selbstdisziplin und die Vermeidung aller Formen des Genusses, typischerweise aus religiösen Gründen.",
    },
  },
  {
    id: "ash-wednesday",
    term: {
      en: "Ash Wednesday",
      fr: "Mercredi des Cendres",
      es: "Miércoles de Ceniza",
      de: "Aschermittwoch",
    },
    definition: {
      en: "The first day of Lent in the Western Church, a day of fasting and abstinence.",
      fr: "Le premier jour du Carême dans l'Église occidentale, un jour de jeûne et d'abstinence.",
      es: "El primer día de Cuaresma en la Iglesia Occidental, un día de ayuno y abstinencia.",
      de: "Der erste Tag der Fastenzeit in der Westkirche, ein Tag des Fastens und der Abstinenz.",
    },
  },
  {
    id: "assumption",
    term: {
      en: "Assumption",
      fr: "Assomption",
      es: "Asunción",
      de: "Mariä Himmelfahrt",
    },
    definition: {
      en: "The Catholic dogma that the Virgin Mary, at the end of her earthly life, was taken body and soul into heaven.",
      fr: "Le dogme catholique selon lequel la Vierge Marie, à la fin de sa vie terrestre, a été enlevée corps et âme au ciel.",
      es: "El dogma católico de que la Virgen María, al final de su vida terrenal, fue llevada en cuerpo y alma al cielo.",
      de: "Das katholische Dogma, dass die Jungfrau Maria am Ende ihres irdischen Lebens mit Leib und Seele in den Himmel aufgenommen wurde.",
    },
  },
  {
    id: "atheism",
    term: {
      en: "Atheism",
      fr: "Athéisme",
      es: "Ateísmo",
      de: "Atheismus",
    },
    definition: {
      en: "The disbelief in the existence of God or gods.",
      fr: "L'incrédulité en l'existence de Dieu ou des dieux.",
      es: "La incredulidad en la existencia de Dios o dioses.",
      de: "Der Unglaube an die Existenz von Gott oder Göttern.",
    },
  },
  {
    id: "atonement",
    term: {
      en: "Atonement",
      fr: "Expiation",
      es: "Expiación",
      de: "Sühne",
    },
    definition: {
      en: "The reconciliation of God and humanity through the sacrificial death of Jesus Christ.",
      fr: "La réconciliation de Dieu et de l'humanité par la mort sacrificielle de Jésus-Christ.",
      es: "La reconciliación de Dios y la humanidad a través de la muerte sacrificial de Jesucristo.",
      de: "Die Versöhnung Gottes und der Menschheit durch den Opfertod Jesu Christi.",
    },
  },
  {
    id: "attribute-divine",
    term: {
      en: "Attribute (Divine)",
      fr: "Attribut (Divin)",
      es: "Atributo (Divino)",
      de: "Attribut (Göttliches)",
    },
    definition: {
      en: "A quality or perfection of God's nature, such as omnipotence (all-powerful), omniscience (all-knowing), and omnibenevolence (all-good).",
      fr: "Une qualité ou perfection de la nature de Dieu, telle que l'omnipotence (tout-puissant), l'omniscience (tout-sachant) et l'omnibienveillance (infiniment bon).",
      es: "Una cualidad o perfección de la naturaleza de Dios, como la omnipotencia (todopoderoso), la omnisciencia (que todo lo sabe) y la omnibenevolencia (todo bondad).",
      de: "Eine Eigenschaft oder Vollkommenheit der Natur Gottes, wie Allmacht (allmächtig), Allwissenheit (allwissend) und Allgüte (allgütig).",
    },
  },
  {
    id: "baptism",
    term: {
      en: "Baptism",
      fr: "Baptême",
      es: "Bautismo",
      de: "Taufe",
    },
    definition: {
      en: "The first sacrament of Christian initiation, which removes original sin and incorporates one into the Church.",
      fr: "Le premier sacrement de l'initiation chrétienne, qui enlève le péché originel et incorpore à l'Église.",
      es: "El primer sacramento de la iniciación cristiana, que quita el pecado original e incorpora a la Iglesia.",
      de: "Das erste Sakrament der christlichen Initiation, das die Erbsünde tilgt und in die Kirche eingliedert.",
    },
  },
  {
    id: "basilica",
    term: {
      en: "Basilica",
      fr: "Basilique",
      es: "Basílica",
      de: "Basilika",
    },
    definition: {
      en: "A church building that has been accorded special privileges by the Pope, recognized for its historical or spiritual significance.",
      fr: "Un bâtiment d'église auquel le Pape a accordé des privilèges spéciaux, reconnu pour sa signification historique ou spirituelle.",
      es: "Un edificio de iglesia al que el Papa ha concedido privilegios especiales, reconocido por su importancia histórica o espiritual.",
      de: "Ein Kirchengebäude, dem der Papst besondere Privilegien verliehen hat und das für seine historische oder spirituelle Bedeutung anerkannt ist.",
    },
  },
  {
    id: "beatific-vision",
    term: {
      en: "Beatific Vision",
      fr: "Vision Béatifique",
      es: "Visión Beatífica",
      de: "Beseligende Schau",
    },
    definition: {
      en: "The immediate knowledge of God which the angelic spirits and the souls of the just enjoy in Heaven.",
      fr: "La connaissance immédiate de Dieu dont jouissent les esprits angéliques et les âmes des justes au Ciel.",
      es: "El conocimiento inmediato de Dios que disfrutan los espíritus angélicos y las almas de los justos en el Cielo.",
      de: "Die unmittelbare Erkenntnis Gottes, die die engelhaften Geister und die Seelen der Gerechten im Himmel genießen.",
    },
  },
  {
    id: "beatification",
    term: {
      en: "Beatification",
      fr: "Béatification",
      es: "Beatificación",
      de: "Seligsprechung",
    },
    definition: {
      en: "The second stage in the process of canonization, by which a deceased person is declared 'Blessed' and worthy of limited public veneration.",
      fr: "La deuxième étape du processus de canonisation, par laquelle une personne décédée est déclarée 'Bienheureuse' et digne d'une vénération publique limitée.",
      es: "La segunda etapa en el proceso de canonización, por la cual una persona fallecida es declarada 'Beata' y digna de veneración pública limitada.",
      de: "Die zweite Stufe im Kanonisationsprozess, durch die eine verstorbene Person als 'Selig' erklärt und einer begrenzten öffentlichen Verehrung würdig befunden wird.",
    },
  },
  {
    id: "benediction",
    term: {
      en: "Benediction",
      fr: "Bénédiction",
      es: "Bendición",
      de: "Segen",
    },
    definition: {
      en: "A blessing, especially the liturgical service in which the faithful are blessed with the Eucharist in a monstrance.",
      fr: "Une bénédiction, en particulier le service liturgique au cours duquel les fidèles sont bénis avec l'Eucharistie dans un ostensoir.",
      es: "Una bendición, especialmente el servicio litúrgico en el que los fieles son bendecidos con la Eucaristía en una custodia.",
      de: "Ein Segen, insbesondere der liturgische Dienst, bei dem die Gläubigen mit der Eucharistie in einer Monstranz gesegnet werden.",
    },
  },
  {
    id: "bible",
    term: {
      en: "Bible",
      fr: "Bible",
      es: "Biblia",
      de: "Bibel",
    },
    definition: {
      en: "The collection of sacred writings accepted by Christians as inspired by God and normative for faith and practice.",
      fr: "La collection d'écrits sacrés acceptés par les chrétiens comme inspirés de Dieu et normatifs pour la foi et la pratique.",
      es: "La colección de escritos sagrados aceptados por los cristianos como inspirados por Dios y normativos para la fe y la práctica.",
      de: "Die Sammlung heiliger Schriften, die von Christen als von Gott inspiriert und als normativ für Glauben und Praxis anerkannt wird.",
    },
  },
  {
    id: "bishop",
    term: {
      en: "Bishop",
      fr: "Évêque",
      es: "Obispo",
      de: "Bischof",
    },
    definition: {
      en: "A successor of the Apostles, ordained to the fullness of the priesthood, who governs a diocese.",
      fr: "Un successeur des Apôtres, ordonné à la plénitude du sacerdoce, qui gouverne un diocèse.",
      es: "Un sucesor de los Apóstoles, ordenado a la plenitud del sacerdocio, que gobierna una diócesis.",
      de: "Ein Nachfolger der Apostel, der zur Fülle des Priestertums geweiht ist und eine Diözese leitet.",
    },
  },
  {
    id: "blasphemy",
    term: {
      en: "Blasphemy",
      fr: "Blasphème",
      es: "Blasfemia",
      de: "Blasphemie",
    },
    definition: {
      en: "An act, word, or writing that shows contempt or lack of reverence for God or sacred things.",
      fr: "Un acte, une parole ou un écrit qui montre du mépris ou un manque de révérence envers Dieu ou les choses sacrées.",
      es: "Un acto, palabra o escrito que muestra desprecio o falta de reverencia hacia Dios o las cosas sagradas.",
      de: "Eine Handlung, ein Wort oder eine Schrift, die Verachtung oder mangelnde Ehrfurcht vor Gott oder heiligen Dingen zeigt.",
    },
  },
  {
    id: "blessed-sacrament",
    term: {
      en: "Blessed Sacrament",
      fr: "Saint-Sacrement",
      es: "Santísimo Sacramento",
      de: "Allerheiligstes Sakrament",
    },
    definition: {
      en: "The Eucharist, the Body and Blood of Christ, reserved in the tabernacle.",
      fr: "L'Eucharistie, le Corps et le Sang du Christ, réservés dans le tabernacle.",
      es: "La Eucaristía, el Cuerpo y la Sangre de Cristo, reservados en el tabernáculo.",
      de: "Die Eucharistie, der Leib und das Blut Christi, die im Tabernakel aufbewahrt werden.",
    },
  },
  {
    id: "breviary",
    term: {
      en: "Breviary",
      fr: "Bréviaire",
      es: "Breviario",
      de: "Brevier",
    },
    definition: {
      en: "The book containing the Liturgy of the Hours, the official daily prayer of the Church.",
      fr: "Le livre contenant la Liturgie des Heures, la prière quotidienne officielle de l'Église.",
      es: "El libro que contiene la Liturgia de las Horas, la oración diaria oficial de la Iglesia.",
      de: "Das Buch, das das Stundengebet enthält, das offizielle tägliche Gebet der Kirche.",
    },
  },
  {
    id: "calvinism",
    term: {
      en: "Calvinism",
      fr: "Calvinisme",
      es: "Calvinismo",
      de: "Calvinismus",
    },
    definition: {
      en: "A major branch of Protestantism that follows the theological traditions of John Calvin, emphasizing predestination and the sovereignty of God.",
      fr: "Une branche majeure du protestantisme qui suit les traditions théologiques de Jean Calvin, mettant l'accent sur la prédestination et la souveraineté de Dieu.",
      es: "Una rama principal del protestantismo que sigue las tradiciones teológicas de Juan Calvino, enfatizando la predestinación y la soberanía de Dios.",
      de: "Eine Hauptrichtung des Protestantismus, die den theologischen Traditionen von Johannes Calvin folgt und die Prädestination und die Souveränität Gottes betont.",
    },
  },
  {
    id: "canon-law",
    term: {
      en: "Canon Law",
      fr: "Droit canon",
      es: "Derecho Canónico",
      de: "Kanonisches Recht",
    },
    definition: {
      en: "The body of laws and regulations made by ecclesiastical authority (Church leadership) for the government of the Catholic Church.",
      fr: "L'ensemble des lois et règlements établis par l'autorité ecclésiastique (direction de l'Église) pour le gouvernement de l'Église catholique.",
      es: "El cuerpo de leyes y reglamentos elaborados por la autoridad eclesiástica (liderazgo de la Iglesia) para el gobierno de la Iglesia Católica.",
      de: "Das Korpus von Gesetzen und Vorschriften, das von der kirchlichen Autorität (Kirchenleitung) für die Leitung der katholischen Kirche erlassen wurde.",
    },
  },

  {
  id: "legate",
  term: {
    en: "Legate",
    fr: "Légat",
    es: "Legado",
    de: "Legat",
  },
  definition: {
    en: "An official representative or emissary, often sent on a mission to act on behalf of a higher authority.",
    fr: "Un représentant ou émissaire officiel, souvent envoyé en mission pour agir au nom d'une autorité supérieure.",
    es: "Un representante o emisario oficial, a menudo enviado en misión para actuar en nombre de una autoridad superior.",
    de: "Ein offizieller Vertreter oder Gesandter, der oft auf eine Mission geschickt wird, um im Namen einer höheren Autorität zu handeln.",
  },
},

  
  {
    id: "canonization",
    term: {
      en: "Canonization",
      fr: "Canonisation",
      es: "Canonización",
      de: "Heiligsprechung",
    },
    definition: {
      en: "The official act by the Pope by which a deceased person is declared a saint and worthy of universal veneration.",
      fr: "L'acte officiel du Pape par lequel une personne décédée est déclarée sainte et digne d'une vénération universelle.",
      es: "El acto oficial del Papa por el cual una persona fallecida es declarada santa y digna de veneración universal.",
      de: "Der offizielle Akt des Papstes, durch den eine verstorbene Person als heilig erklärt und der weltweiten Verehrung würdig befunden wird.",
    },
  },
  {
    id: "capital-sins",
    term: {
      en: "Capital Sins",
      fr: "Péchés capitaux",
      es: "Pecados capitales",
      de: "Hauptsünden",
    },
    definition: {
      en: "The seven 'deadly' sins: pride, greed (avarice), lust, envy, gluttony, wrath (anger), and sloth (acedia).",
      fr: "Les sept péchés 'mortels' : l'orgueil, l'avarice, la luxure, l'envie, la gourmandise, la colère et la paresse (acédie).",
      es: "Los siete pecados 'capitales': soberbia, avaricia, lujuria, envidia, gula, ira y pereza (acedia).",
      de: "Die sieben 'Todsünden': Stolz (Hochmut), Habgier (Geiz), Wollust, Neid, Völlerei (Maßlosigkeit), Zorn und Trägheit (Acedia).",
    },
  },
  {
    id: "cardinal",
    term: {
      en: "Cardinal",
      fr: "Cardinal",
      es: "Cardenal",
      de: "Kardinal",
    },
    definition: {
      en: "A high-ranking bishop appointed by the Pope. Cardinals form the College of Cardinals, which elects the new Pope.",
      fr: "Un évêque de haut rang nommé par le Pape. Les cardinaux forment le Collège des Cardinaux, qui élit le nouveau Pape.",
      es: "Un obispo de alto rango nombrado por el Papa. Los cardenales forman el Colegio Cardenalicio, que elige al nuevo Papa.",
      de: "Ein hochrangiger Bischof, der vom Papst ernannt wird. Die Kardinäle bilden das Kardinalskollegium, das den neuen Papst wählt.",
    },
  },
  {
    id: "catachesis",
    term: {
      en: "Catechesis",
      fr: "Catéchèse",
      es: "Catequesis",
      de: "Katechese",
    },
    definition: {
      en: "The act of instructing and educating people in the Christian faith, especially in preparation for sacraments.",
      fr: "L'acte d'instruire et d'éduquer les gens dans la foi chrétienne, en particulier en préparation aux sacrements.",
      es: "El acto de instruir y educar a las personas en la fe cristiana, especialmente en preparación para los sacramentos.",
      de: "Der Akt der Unterweisung und Erziehung von Menschen im christlichen Glauben, insbesondere zur Vorbereitung auf die Sakramente.",
    },
  },
  {
    id: "catechism",
    term: {
      en: "Catechism",
      fr: "Catéchisme",
      es: "Catecismo",
      de: "Katechismus",
    },
    definition: {
      en: "A summary or exposition of doctrine, often in the form of questions and answers, used for teaching the faith.",
      fr: "Un résumé ou une exposition de la doctrine, souvent sous forme de questions et réponses, utilisé pour enseigner la foi.",
      es: "Un resumen o exposición de doctrina, a menudo en forma de preguntas y respuestas, utilizado para enseñar la fe.",
      de: "Eine Zusammenfassung oder Darlegung der Lehre, oft in Form von Fragen und Antworten, die zur Unterweisung im Glauben dient.",
    },
  },
  {
    id: "catechumen",
    term: {
      en: "Catechumen",
      fr: "Catéchumène",
      es: "Catecúmeno",
      de: "Katechumene",
    },
    definition: {
      en: "An unbaptized person who is preparing for full initiation into the Catholic Church through the RCIA process.",
      fr: "Une personne non baptisée qui se prépare à l'initiation complète dans l'Église catholique par le processus du RICA.",
      es: "Una persona no bautizada que se está preparando para la iniciación completa en la Iglesia Católica a través del proceso RICA.",
      de: "Eine ungetaufte Person, die sich auf die volle Aufnahme in die katholische Kirche durch den Katechumenat (RCIA) vorbereitet.",
    },
  },
  {
    id: "cathedral",
    term: {
      en: "Cathedral",
      fr: "Cathédrale",
      es: "Catedral",
      de: "Kathedrale",
    },
    definition: {
      en: "The principal church of a diocese, which contains the bishop's official chair (cathedra).",
      fr: "L'église principale d'un diocèse, qui contient le siège officiel de l'évêque (cathèdre).",
      es: "La iglesia principal de una diócesis, que contiene la silla oficial del obispo (cátedra).",
      de: "Die Hauptkirche einer Diözese, die den offiziellen Stuhl des Bischofs (Cathedra) enthält.",
    },
  },
  {
    id: "catholic",
    term: {
      en: "Catholic",
      fr: "Catholique",
      es: "Católico",
      de: "Katholisch",
    },
    definition: {
      en: "From the Greek word for 'universal.' One of the four marks of the Church (One, Holy, Catholic, Apostolic).",
      fr: "Du mot grec signifiant 'universel'. L'une des quatre marques de l'Église (Une, Sainte, Catholique, Apostolique).",
      es: "De la palabra griega que significa 'universal'. Una de las cuatro notas de la Iglesia (Una, Santa, Católica, Apostólica).",
      de: "Aus dem griechischen Wort für 'universell'. Eines der vier Kennzeichen der Kirche (Eine, Heilige, Katholische, Apostolische).",
    },
  },

  {
    id: "chalice",
    term: {
      en: "Chalice",
      fr: "Calice",
      es: "Cáliz",
      de: "Kelch",
    },
    definition: {
      en: "The sacred cup used by the priest at Mass to hold the wine that becomes the Blood of Christ.",
      fr: "La coupe sacrée utilisée par le prêtre lors de la messe pour contenir le vin qui devient le Sang du Christ.",
      es: "La copa sagrada utilizada por el sacerdote en la Misa para contener el vino que se convierte en la Sangre de Cristo.",
      de: "Der heilige Kelch, den der Priester bei der Messe verwendet, um den Wein zu halten, der zum Blut Christi wird.",
    },
  },
  {
    id: "chant-gregorian",
    term: {
      en: "Chant (Gregorian)",
      fr: "Chant (Grégorien)",
      es: "Canto (Gregoriano)",
      de: "Choral (Gregorianischer)",
    },
    definition: {
      en: "The traditional monophonic, unaccompanied sacred song of the Western Roman Catholic Church.",
      fr: "Le chant sacré monodique et non accompagné traditionnel de l'Église catholique romaine occidentale.",
      es: "El canto sagrado monofónico y sin acompañamiento tradicional de la Iglesia Católica Romana Occidental.",
      de: "Der traditionelle einstimmige, unbegleitete geistliche Gesang der weströmisch-katholischen Kirche.",
    },
  },
  {
    id: "chapel",
    term: {
      en: "Chapel",
      fr: "Chapelle",
      es: "Capilla",
      de: "Kapelle",
    },
    definition: {
      en: "A small building or room set aside for prayer and worship, often within a larger institution like a hospital or school.",
      fr: "Un petit bâtiment ou une salle réservée à la prière et au culte, souvent au sein d'une institution plus grande comme un hôpital ou une école.",
      es: "Un pequeño edificio o sala reservada para la oración y el culto, a menudo dentro de una institución más grande como un hospital o una escuela.",
      de: "Ein kleines Gebäude oder ein Raum, der für Gebet und Gottesdienst vorgesehen ist, oft innerhalb einer größeren Einrichtung wie einem Krankenhaus oder einer Schule.",
    },
  },
  {
    id: "chaplain",
    term: {
      en: "Chaplain",
      fr: "Aumônier",
      es: "Capellán",
      de: "Kaplan",
    },
    definition: {
      en: "A priest or minister who has the pastoral care of a particular group, such as in a hospital, military unit, or school.",
      fr: "Un prêtre ou un ministre qui a la charge pastorale d'un groupe particulier, comme dans un hôpital, une unité militaire ou une école.",
      es: "Un sacerdote o ministro que tiene el cuidado pastoral de un grupo particular, como en un hospital, unidad militar o escuela.",
      de: "Ein Priester oder Geistlicher, der die seelsorgerische Betreuung einer bestimmten Gruppe hat, z. B. in einem Krankenhaus, einer Militäreinheit oder einer Schule.",
    },
  },
  {
    id: "charism",
    term: {
      en: "Charism",
      fr: "Charisme",
      es: "Carisma",
      de: "Charisma",
    },
    definition: {
      en: "A specific gift or grace of the Holy Spirit which benefits the Church, given to help a person live out the Christian life.",
      fr: "Un don ou une grâce spécifique du Saint-Esprit qui profite à l'Église, donné pour aider une personne à vivre la vie chrétienne.",
      es: "Un don o gracia específico del Espíritu Santo que beneficia a la Iglesia, dado para ayudar a una persona a vivir la vida cristiana.",
      de: "Eine besondere Gabe oder Gnade des Heiligen Geistes, die der Kirche zugutekommt und einer Person hilft, das christliche Leben zu führen.",
    },
  },
  {
    id: "charity",
    term: {
      en: "Charity (Virtue)",
      fr: "Charité (Vertu)",
      es: "Caridad (Virtud)",
      de: "Nächstenliebe (Tugend)",
    },
    definition: {
      en: "The theological virtue by which we love God above all things for His own sake, and our neighbor as ourselves for the love of God.",
      fr: "La vertu théologale par laquelle nous aimons Dieu par-dessus toutes choses pour Lui-même, et notre prochain comme nous-mêmes pour l'amour de Dieu.",
      es: "La virtud teologal por la cual amamos a Dios sobre todas las cosas por Él mismo, y a nuestro próximo como a nosotros mismos por amor a Dios.",
      de: "Die theologische Tugend, durch die wir Gott über alles um Seinetwillen lieben und unseren Nächsten wie uns selbst aus Liebe zu Gott.",
    },
  },
  {
    id: "chastity",
    term: {
      en: "Chastity",
      fr: "Chasteté",
      es: "Castidad",
      de: "Keuschheit",
    },
    definition: {
      en: "The virtue that successfully integrates sexuality within the person, according to one's state in life (married, single, or consecrated).",
      fr: "La vertu qui intègre avec succès la sexualité au sein de la personne, selon son état de vie (marié, célibataire ou consacré).",
      es: "La virtud que integra con éxito la sexualidad dentro de la persona, según el propio estado de vida (casado, soltero o consagrado).",
      de: "Die Tugend, welche die Sexualität erfolgreich in die Person integriert, entsprechend dem eigenen Lebensstand (verheiratet, ledig oder geweiht).",
    },
  },
  {
    id: "chasuble",
    term: {
      en: "Chasuble",
      fr: "Chasuble",
      es: "Casulla",
      de: "Messgewand",
    },
    definition: {
      en: "The outermost liturgical vestment worn by the priest during the celebration of the Mass.",
      fr: "Le vêtement liturgique extérieur porté par le prêtre lors de la célébration de la messe.",
      es: "La vestidura litúrgica más externa que usa el sacerdote durante la celebración de la Misa.",
      de: "Das äußerste liturgische Gewand, das der Priester bei der Feier der Messe trägt.",
    },
  },
  {
    id: "chrism",
    term: {
      en: "Chrism",
      fr: "Saint Chrême",
      es: "Crisma",
      de: "Chrisam",
    },
    definition: {
      en: "A consecrated oil, a mixture of olive oil and balsam, used in the sacraments of Baptism, Confirmation, and Holy Orders.",
      fr: "Une huile consacrée, un mélange d'huile d'olive et de baume, utilisée dans les sacrements du Baptême, de la Confirmation et de l'Ordre.",
      es: "Un aceite consagrado, una mezcla de aceite de oliva y bálsamo, utilizado en los sacramentos del Bautismo, la Confirmación y el Orden Sagrado.",
      de: "Ein geweihtes Öl, eine Mischung aus Olivenöl und Balsam, das in den Sakramenten der Taufe, der Firmung und der Priesterweihe verwendet wird.",
    },
  },
  {
    id: "christ",
    term: {
      en: "Christ",
      fr: "Christ",
      es: "Cristo",
      de: "Christus",
    },
    definition: {
      en: "The Greek title for Jesus, meaning 'Anointed One.' It is the equivalent of the Hebrew word 'Messiah.'",
      fr: "Le titre grec pour Jésus, signifiant 'Oint'. C'est l'équivalent du mot hébreu 'Messie'.",
      es: "El título griego para Jesús, que significa 'Ungido'. Es el equivalente de la palabra hebrea 'Mesías'.",
      de: "Der griechische Titel für Jesus, der 'Gesalbter' bedeutet. Es ist das Äquivalent des hebräischen Wortes 'Messias'.",
    },
  },
  {
    id: "christmas",
    term: {
      en: "Christmas",
      fr: "Noël",
      es: "Navidad",
      de: "Weihnachten",
    },
    definition: {
      en: "The annual Christian feast celebrating the birth of Jesus Christ, observed on December 25th.",
      fr: "La fête chrétienne annuelle célébrant la naissance de Jésus-Christ, observée le 25 décembre.",
      es: "La fiesta cristiana anual que celebra el nacimiento de Jesucristo, observada el 25 de diciembre.",
      de: "Das jährliche christliche Fest zur Feier der Geburt Jesu Christi, das am 25. Dezember begangen wird.",
    },
  },
  {
    id: "christology",
    term: {
      en: "Christology",
      fr: "Christologie",
      es: "Cristología",
      de: "Christologie",
    },
    definition: {
      en: "The branch of theology concerned with the person, nature, and role of Jesus Christ.",
      fr: "La branche de la théologie qui s'occupe de la personne, de la nature et du rôle de Jésus-Christ.",
      es: "La rama de la teología que se ocupa de la persona, la naturaleza y el papel de Jesucristo.",
      de: "Der Zweig der Theologie, der sich mit der Person, Natur und Rolle Jesu Christi befasst.",
    },
  },
  {
    id: "church",
    term: {
      en: "Church",
      fr: "Église",
      es: "Iglesia",
      de: "Kirche",
    },
    definition: {
      en: "The assembly of the faithful, founded by Christ, which is both a human and divine institution; the Mystical Body of Christ.",
      fr: "L'assemblée des fidèles, fondée par le Christ, qui est à la fois une institution humaine et divine ; le Corps mystique du Christ.",
      es: "La asamblea de los fieles, fundada por Cristo, que es una institución tanto humana como divina; el Cuerpo Místico de Cristo.",
      de: "Die Versammlung der Gläubigen, von Christus gegründet, die sowohl eine menschliche als auch eine göttliche Institution ist; der mystische Leib Christi.",
    },
  },
  {
    id: "church-fathers",
    term: {
      en: "Church Fathers",
      fr: "Pères de l'Église",
      es: "Padres de la Iglesia",
      de: "Kirchenväter",
    },
    definition: {
      en: "Ancient and influential Christian theologians and writers of the first eight centuries, such as St. Augustine and St. Athanasius.",
      fr: "Théologiens et écrivains chrétiens anciens et influents des huit premiers siècles, tels que Saint Augustin et Saint Athanase.",
      es: "Antiguos e influyentes teólogos y escritores cristianos de los primeros ocho siglos, como San Agustín y San Atanasio.",
      de: "Alte und einflussreiche christliche Theologen und Schriftsteller der ersten acht Jahrhunderte, wie z. B. der heilige Augustinus und der heilige Athanasius.",
    },
  },
  {
    id: "ciborium",
    term: {
      en: "Ciborium",
      fr: "Ciboire",
      es: "Ciborio",
      de: "Ziborium",
    },
    definition: {
      en: "A sacred vessel with a lid used to hold the consecrated hosts (Eucharist) in the tabernacle.",
      fr: "Un vase sacré avec un couvercle utilisé pour conserver les hosties consacrées (Eucharistie) dans le tabernacle.",
      es: "Un vaso sagrado con tapa utilizado para guardar las hostias consagradas (Eucaristía) en el sagrario.",
      de: "Ein heiliges Gefäß mit Deckel, das zur Aufbewahrung der konsekrierten Hostien (Eucharistie) im Tabernakel dient.",
    },
  },
  {
    id: "clergy",
    term: {
      en: "Clergy",
      fr: "Clergé",
      es: "Clero",
      de: "Klerus",
    },
    definition: {
      en: "Men ordained for sacred ministry in the Church: bishops, priests, and deacons.",
      fr: "Hommes ordonnés pour le ministère sacré dans l'Église : évêques, prêtres et diacres.",
      es: "Hombres ordenados para el ministerio sagrado en la Iglesia: obispos, sacerdotes y diáconos.",
      de: "Männer, die für den heiligen Dienst in der Kirche geweiht sind: Bischöfe, Priester und Diakone.",
    },
  },
  {
    id: "cloister",
    term: {
      en: "Cloister",
      fr: "Cloître",
      es: "Claustro",
      de: "Kloster",
    },
    definition: {
      en: "An enclosed area of a monastery or convent, reserved for the monks or nuns.",
      fr: "Une zone fermée d'un monastère ou d'un couvent, réservée aux moines ou aux moniales.",
      es: "Un área cerrada de un monasterio o convento, reservada para los monjes o monjas.",
      de: "Ein geschlossener Bereich eines Klosters oder Konvents, der den Mönchen oder Nonnen vorbehalten ist.",
    },
  },
  {
    id: "college-of-cardinals",
    term: {
      en: "College of Cardinals",
      fr: "Collège des Cardinaux",
      es: "Colegio Cardenalicio",
      de: "Kardinalskollegium",
    },
    definition: {
      en: "The body of all cardinals in the Catholic Church. Its primary duty is to elect a new Pope in a conclave.",
      fr: "Le corps de tous les cardinaux de l'Église catholique. Son devoir principal est d'élire un nouveau Pape lors d'un conclave.",
      es: "El cuerpo de todos los cardenales de la Iglesia Católica. Su deber principal es elegir a un nuevo Papa en un cónclave.",
      de: "Das Gremium aller Kardinäle in der katholischen Kirche. Seine Hauptaufgabe ist es, in einem Konklave einen neuen Papst zu wählen.",
    },
  },
  {
    id: "commandment-ten",
    term: {
      en: "Commandments (Ten)",
      fr: "Commandements (Dix)",
      es: "Mandamientos (Diez)",
      de: "Gebote (Zehn)",
    },
    definition: {
      en: "The ten laws given by God to Moses on Mount Sinai as the fundamental moral code.",
      fr: "Les dix lois données par Dieu à Moïse sur le mont Sinaï comme code moral fondamental.",
      es: "Las diez leyes dadas por Dios a Moisés en el Monte Sinaí como el código moral fundamental.",
      de: "Die zehn Gesetze, die Gott Moses auf dem Berg Sinai als grundlegendes Moralkodex gab.",
    },
  },
  {
    id: "communion",
    term: {
      en: "Communion",
      fr: "Communion",
      es: "Comunión",
      de: "Kommunion",
    },
    definition: {
      en: "Receiving the Eucharist (the Body and Blood of Christ). Also refers to the state of being united with God and the Church.",
      fr: "Recevoir l'Eucharistie (le Corps et le Sang du Christ). Fait également référence à l'état d'union avec Dieu et l'Église.",
      es: "Recibir la Eucaristía (el Cuerpo y la Sangre de Cristo). También se refiere al estado de unión con Dios y la Iglesia.",
      de: "Der Empfang der Eucharistie (Leib und Blut Christi). Bezieht sich auch auf den Zustand der Vereinigung mit Gott und der Kirche.",
    },
  },
  {
    id: "communion-of-saints",
    term: {
      en: "Communion of Saints",
      fr: "Communion des Saints",
      es: "Comunión de los Santos",
      de: "Gemeinschaft der Heiligen",
    },
    definition: {
      en: "The spiritual union of all Christians, living and dead: the faithful on earth (Church Militant), the souls in Purgatory (Church Suffering), and the saints in heaven (Church Triumphant).",
      fr: "L'union spirituelle de tous les chrétiens, vivants et morts : les fidèles sur terre (Église militante), les âmes au Purgatoire (Église souffrante) et les saints au ciel (Église triomphante).",
      es: "La unión espiritual de todos los cristianos, vivos y muertos: los fieles en la tierra (Iglesia Militante), las almas en el Purgatorio (Iglesia Purgante) y los santos en el cielo (Iglesia Triunfante).",
      de: "Die geistliche Vereinigung aller Christen, der Lebenden und der Toten: die Gläubigen auf Erden (streitende Kirche), die Seelen im Fegefeuer (leidende Kirche) und die Heiligen im Himmel (triumphierende Kirche).",
    },
  },
  {
    id: "conclave",
    term: {
      en: "Conclave",
      fr: "Conclave",
      es: "Cónclave",
      de: "Konklave",
    },
    definition: {
      en: "The private meeting of the College of Cardinals to elect a new Pope, held in the Sistine Chapel.",
      fr: "La réunion privée du Collège des Cardinaux pour élire un nouveau Pape, tenue dans la Chapelle Sixtine.",
      es: "La reunión privada del Colegio Cardenalicio para elegir a un nuevo Papa, celebrada en la Capilla Sixtina.",
      de: "Das private Treffen des Kardinalskollegiums zur Wahl eines neuen Papstes, das in der Sixtinischen Kapelle stattfindet.",
    },
  },
  {
    id: "confession-sacrament",
    term: {
      en: "Confession (Sacrament)",
      fr: "Confession (Sacrement)",
      es: "Confesión (Sacramento)",
      de: "Beichte (Sakrament)",
    },
    definition: {
      en: "Also known as Reconciliation or Penance. The sacrament in which a baptized person confesses their sins to a priest and receives God's forgiveness.",
      fr: "Aussi connu sous le nom de Réconciliation ou Pénitence. Le sacrement dans lequel une personne baptisée confesse ses péchés à un prêtre et reçoit le pardon de Dieu.",
      es: "También conocido como Reconciliación o Penitencia. El sacramento en el que una persona bautizada confiesa sus pecados a un sacerdote y recibe el perdón de Dios.",
      de: "Auch bekannt als Versöhnung oder Buße. Das Sakrament, in dem eine getaufte Person ihre Sünden einem Priester bekennt und Gottes Vergebung empfängt.",
    },
  },
  {
    id: "confirmation",
    term: {
      en: "Confirmation",
      fr: "Confirmation",
      es: "Confirmación",
      de: "Firmung",
    },
    definition: {
      en: "One of the three sacraments of initiation, in which the gift of the Holy Spirit is strengthened, completing the grace of Baptism.",
      fr: "L'un des trois sacrements de l'initiation, dans lequel le don du Saint-Esprit est renforcé, complétant la grâce du Baptême.",
      es: "Uno de los tres sacramentos de iniciación, en el que se fortalece el don del Espíritu Santo, completando la gracia del Bautismo.",
      de: "Eines der drei Initiationssakramente, in dem die Gabe des Heiligen Geistes gestärkt wird und die Taufgnade vollendet.",
    },
  },
  {
    id: "conscience",
    term: {
      en: "Conscience",
      fr: "Conscience",
      es: "Conciencia",
      de: "Gewissen",
    },
    definition: {
      en: "A judgment of reason whereby the human person recognizes the moral quality of a concrete act.",
      fr: "Un jugement de la raison par lequel la personne humaine reconnaît la qualité morale d'un acte concret.",
      es: "Un juicio de la razón por el cual la persona humana reconoce la cualidad moral de un acto concreto.",
      de: "Ein Urteil der Vernunft, durch das der Mensch die sittliche Qualität einer konkreten Handlung erkennt.",
    },
  },
  {
    id: "consecration",
    term: {
      en: "Consecration",
      fr: "Consécration",
      es: "Consagración",
      de: "Konsekration",
    },
    definition: {
      en: "The act of setting something apart as sacred. In the Mass, it is the moment the bread and wine become the Body and Blood of Christ.",
      fr: "L'acte de mettre quelque chose à part comme sacré. Lors de la messe, c'est le moment où le pain et le vin deviennent le Corps et le Sang du Christ.",
      es: "El acto de apartar algo como sagrado. En la Misa, es el momento en que el pan y el vino se convierten en el Cuerpo y la Sangre de Cristo.",
      de: "Der Akt, etwas als heilig auszusondern. In der Messe ist es der Moment, in dem Brot und Wein zum Leib und Blut Christi werden.",
    },
  },
  {
    id: "contemplation",
    term: {
      en: "Contemplation",
      fr: "Contemplation",
      es: "Contemplación",
      de: "Kontemplation",
    },
    definition: {
      en: "A form of silent, wordless prayer in which one simply rests in God's presence.",
      fr: "Une forme de prière silencieuse et sans parole dans laquelle on se repose simplement en la présence de Dieu.",
      es: "Una forma de oración silenciosa y sin palabras en la que uno simplemente descansa en la presencia de Dios.",
      de: "Eine Form des stillen, wortlosen Gebets, in der man einfach in Gottes Gegenwart ruht.",
    },
  },
  {
    id: "contrition",
    term: {
      en: "Contrition",
      fr: "Contrition",
      es: "Contrición",
      de: "Reue",
    },
    definition: {
      en: "Sorrow of the soul and detestation for the sin committed, together with the resolution not to sin again.",
      fr: "Douleur de l'âme et détestation du péché commis, avec la résolution de ne plus pécher.",
      es: "Dolor del alma y detestación por el pecado cometido, con el propósito de no volver a pecar.",
      de: "Schmerz der Seele und Abscheu vor der begangenen Sünde, verbunden mit dem Vorsatz, nicht mehr zu sündigen.",
    },
  },
  {
    id: "convent",
    term: {
      en: "Convent",
      fr: "Couvent",
      es: "Convento",
      de: "Konvent",
    },
    definition: {
      en: "A community of priests, religious brothers, or sisters (nuns); or the building in which they live.",
      fr: "Une communauté de prêtres, de frères religieux ou de sœurs (religieuses) ; ou le bâtiment dans lequel ils vivent.",
      es: "Una comunidad de sacerdotes, hermanos religiosos o hermanas (monjas); o el edificio en el que viven.",
      de: "Eine Gemeinschaft von Priestern, Ordensbrüdern oder Schwestern (Nonnen); oder das Gebäude, in dem sie leben.",
    },
  },
  {
    id: "conversion",
    term: {
      en: "Conversion",
      fr: "Conversion",
      es: "Conversión",
      de: "Bekehrung",
    },
    definition: {
      en: "A turning away from sin and toward God, a change of heart.",
      fr: "Un détournement du péché et un retour vers Dieu, un changement de cœur.",
      es: "Un apartarse del pecado y volverse hacia Dios, un cambio de corazón.",
      de: "Eine Abkehr von der Sünde und eine Hinwendung zu Gott, eine Herzensänderung.",
    },
  },
  {
    id: "corpus-christi",
    term: {
      en: "Corpus Christi",
      fr: "Corpus Christi",
      es: "Corpus Christi",
      de: "Fronleichnam",
    },
    definition: {
      en: "Latin for 'Body of Christ.' A solemn feast celebrating the Real Presence of Christ in the Eucharist.",
      fr: "Latin pour 'Corps du Christ'. Une fête solennelle célébrant la Présence Réelle du Christ dans l'Eucharistie.",
      es: "Latín para 'Cuerpo de Cristo'. Una fiesta solemne que celebra la Presencia Real de Cristo en la Eucaristía.",
      de: "Lateinisch für 'Leib Christi'. Ein Hochfest, das die wirkliche Gegenwart Christi in der Eucharistie feiert.",
    },
  },
  {
    id: "council-ecumenical",
    term: {
      en: "Council (Ecumenical)",
      fr: "Concile (Œcuménique)",
      es: "Concilio (Ecuménico)",
      de: "Konzil (Ökumenisches)",
    },
    definition: {
      en: "A gathering of all the bishops of the Church, in union with the Pope, to deliberate on and regulate matters of faith and morals (e.g., Vatican II).",
      fr: "Un rassemblement de tous les évêques de l'Église, en union avec le Pape, pour délibérer et réglementer les questions de foi et de morale (par ex. Vatican II).",
      es: "Una reunión de todos los obispos de la Iglesia, en unión con el Papa, para deliberar y regular asuntos de fe y moral (ej. Vaticano II).",
      de: "Eine Versammlung aller Bischöfe der Kirche in Gemeinschaft mit dem Papst, um über Angelegenheiten des Glaubens und der Moral zu beraten und zu regeln (z. B. Zweites Vatikanisches Konzil).",
    },
  },
  {
    id: "covenant",
    term: {
      en: "Covenant",
      fr: "Alliance",
      es: "Alianza",
      de: "Bund",
    },
    definition: {
      en: "A sacred, solemn agreement between God and humanity (or a person), involving mutual commitments.",
      fr: "Un accord sacré et solennel entre Dieu et l'humanité (ou une personne), impliquant des engagements mutuels.",
      es: "Un acuerdo sagrado y solemne entre Dios y la humanidad (o una persona), que implica compromisos mutuos.",
      de: "Ein heiliger, feierlicher Vertrag zwischen Gott und der Menschheit (oder einer Person), der gegenseitige Verpflichtungen beinhaltet.",
    },
  },
  {
    id: "creation",
    term: {
      en: "Creation",
      fr: "Création",
      es: "Creación",
      de: "Schöpfung",
    },
    definition: {
      en: "The act by which God brought the universe and all things into existence out of nothing.",
      fr: "L'acte par lequel Dieu a amené l'univers et toutes choses à l'existence à partir de rien.",
      es: "El acto por el cual Dios trajo el universo y todas las cosas a la existencia de la nada.",
      de: "Der Akt, durch den Gott das Universum und alle Dinge aus dem Nichts ins Dasein rief.",
    },
  },
  {
    id: "creed",
    term: {
      en: "Creed",
      fr: "Credo",
      es: "Credo",
      de: "Glaubensbekenntnis",
    },
    definition: {
      en: "A formal statement of Christian beliefs, especially the Apostles' Creed or the Nicene Creed.",
      fr: "Une déclaration formelle des croyances chrétiennes, en particulier le Symbole des Apôtres ou le Credo de Nicée.",
      es: "Una declaración formal de las creencias cristianas, especialmente el Credo de los Apóstoles o el Credo Niceno.",
      de: "Eine formelle Erklärung der christlichen Überzeugungen, insbesondere das Apostolische Glaubensbekenntnis oder das Nizänische Glaubensbekenntnis.",
    },
  },
  {
    id: "cross",
    term: { en: "Cross", fr: "Croix", es: "Cruz", de: "Kreuz" },
    definition: {
      en: "The primary symbol of the Christian faith, representing the instrument of Christ's crucifixion and his subsequent triumph over death.",
      fr: "Le symbole principal de la foi chrétienne, représentant l'instrument de la crucifixion du Christ et son triomphe subséquent sur la mort.",
      es: "El símbolo principal de la fe cristiana, que representa el instrumento de la crucifixión de Cristo y su posterior triunfo sobre la muerte.",
      de: "Das Hauptsymbol des christlichen Glaubens, das das Instrument der Kreuzigung Christi und seinen anschließenden Triumph über den Tod darstellt.",
    },
  },
  {
    id: "crucifix",
    term: {
      en: "Crucifix",
      fr: "Crucifix",
      es: "Crucifijo",
      de: "Kruzifix",
    },
    definition: {
      en: "A cross that includes the figure of the crucified body of Christ (the corpus).",
      fr: "Une croix qui inclut la figure du corps crucifié du Christ (le corpus).",
      es: "Una cruz que incluye la figura del cuerpo crucificado de Cristo (el corpus).",
      de: "Ein Kreuz, das die Figur des gekreuzigten Leibes Christi (den Korpus) einschließt.",
    },
  },
  {
    id: "curia-roman",
    term: {
      en: "Curia (Roman)",
      fr: "Curie (Romaine)",
      es: "Curia (Romana)",
      de: "Kurie (Römische)",
    },
    definition: {
      en: "The administrative body of the Holy See, which assists the Pope in governing the Catholic Church.",
      fr: "L'organe administratif du Saint-Siège, qui assiste le Pape dans le gouvernement de l'Église catholique.",
      es: "El órgano administrativo de la Santa Sede, que asiste al Papa en el gobierno de la Iglesia Católica.",
      de: "Das Verwaltungsorgan des Heiligen Stuhls, das den Papst bei der Leitung der katholischen Kirche unterstützt.",
    },
  },
  {
    id: "deacon",
    term: {
      en: "Deacon",
      fr: "Diacre",
      es: "Diácono",
      de: "Diakon",
    },
    definition: {
      en: "An ordained minister ranking below a priest. A 'transitional' deacon is preparing for priesthood; a 'permanent' deacon is not.",
      fr: "Un ministre ordonné d'un rang inférieur à celui de prêtre. Un diacre 'transitoire' se prépare à la prêtrise ; un diacre 'permanent' ne le fait pas.",
      es: "Un ministro ordenado de rango inferior al de un sacerdote. Un diácono 'transitorio' se está preparando para el sacerdocio; un diácono 'permanente' no.",
      de: "Ein geweihter Amtsträger im Rang unter einem Priester. Ein 'Übergangsdiakon' bereitet sich auf das Priestertum vor; ein 'ständiger' Diakon nicht.",
    },
  },
  {
    id: "dean",
    term: {
      en: "Dean",
      fr: "Doyen",
      es: "Decano",
      de: "Dekan",
    },
    definition: {
      en: "A priest appointed by the bishop to be in charge of a 'deanery' or 'vicariate forane,' a district of several parishes.",
      fr: "Un prêtre nommé par l'évêque pour être en charge d'un 'doyenné' ou 'vicariat forain', un district de plusieurs paroisses.",
      es: "Un sacerdote nombrado por el obispo para estar a cargo de un 'decanato' o 'vicariato foráneo', un distrito de varias parroquias.",
      de: "Ein Priester, der vom Bischof ernannt wird, um ein 'Dekanat' oder 'Vikariat Forane' zu leiten, einen Bezirk mit mehreren Pfarreien.",
    },
  },
  {
    id: "decalogue",
    term: {
      en: "Decalogue",
      fr: "Décalogue",
      es: "Decálogo",
      de: "Dekalog",
    },
    definition: {
      en: "Another name for the Ten Commandments, from the Greek meaning 'ten words.'",
      fr: "Un autre nom pour les Dix Commandements, du grec signifiant 'dix paroles'.",
      es: "Otro nombre para los Diez Mandamientos, del griego que significa 'diez palabras'.",
      de: "Ein anderer Name für die Zehn Gebote, aus dem Griechischen stammend und 'zehn Worte' bedeutend.",
    },
  },
  {
    id: "deism",
    term: {
      en: "Deism",
      fr: "Déisme",
      es: "Deísmo",
      de: "Deismus",
    },
    definition: {
      en: "The belief in a God who created the universe but does not intervene in its affairs.",
      fr: "La croyance en un Dieu qui a créé l'univers mais n'intervient pas dans ses affaires.",
      es: "La creencia en un Dios que creó el universo pero no interviene en sus asuntos.",
      de: "Der Glaube an einen Gott, der das Universum geschaffen hat, aber nicht in dessen Angelegenheiten eingreift.",
    },
  },
  {
    id: "demon",
    term: {
      en: "Demon",
      fr: "Démon",
      es: "Demonio",
      de: "Dämon",
    },
    definition: {
      en: "A fallen angel; an evil spirit who rejected God and seeks to lead humanity into sin.",
      fr: "Un ange déchu ; un esprit malin qui a rejeté Dieu et cherche à entraîner l'humanité dans le péché.",
      es: "Un ángel caído; un espíritu maligno que rechazó a Dios y busca llevar a la humanidad al pecado.",
      de: "Ein gefallener Engel; ein böser Geist, der Gott verworfen hat und versucht, die Menschheit zur Sünde zu verführen.",
    },
  },
  {
    id: "despair",
    term: {
      en: "Despair",
      fr: "Désespoir",
      es: "Desesperación",
      de: "Verzweiflung",
    },
    definition: {
      en: "The sin against hope; the loss of all hope in God's mercy and salvation.",
      fr: "Le péché contre l'espérance ; la perte de tout espoir en la miséricorde et le salut de Dieu.",
      es: "El pecado contra la esperanza; la pérdida de toda esperanza en la misericordia y la salvación de Dios.",
      de: "Die Sünde gegen die Hoffnung; der Verlust jeglicher Hoffnung auf Gottes Barmherzigkeit und Heil.",
    },
  },
  {
    id: "detraction",
    term: {
      en: "Detraction",
      fr: "Détraction",
      es: "Detracción",
      de: "Afterrede",
    },
    definition: {
      en: "The sin of revealing another person's hidden faults to someone who did not know them, without a valid reason.",
      fr: "Le péché de révéler les fautes cachées d'une autre personne à quelqu'un qui ne les connaissait pas, sans raison valable.",
      es: "El pecado de revelar las faltas ocultas de otra persona a alguien que no las conocía, sin una razón válida.",
      de: "Die Sünde, die verborgenen Fehler einer anderen Person jemandem ohne triftigen Grund zu offenbaren, der sie nicht kannte.",
    },
  },
  {
    id: "devil",
    term: {
      en: "Devil",
      fr: "Diable",
      es: "Diablo",
      de: "Teufel",
    },
    definition: {
      en: "The chief of the fallen angels; Satan, the tempter and enemy of God and humanity.",
      fr: "Le chef des anges déchus ; Satan, le tentateur et l'ennemi de Dieu et de l'humanité.",
      es: "El jefe de los ángeles caídos; Satanás, el tentador y enemigo de Dios y la humanidad.",
      de: "Der Anführer der gefallenen Engel; Satan, der Versucher und Feind Gottes und der Menschheit.",
    },
  },
  {
    id: "diocese",
    term: {
      en: "Diocese",
      fr: "Diocèse",
      es: "Diócesis",
      de: "Diözese",
    },
    definition: {
      en: "A 'particular church' or district under the pastoral care of a bishop.",
      fr: "Une 'église particulière' ou un district sous la sollicitude pastorale d'un évêque.",
      es: "Una 'iglesia particular' o distrito bajo el cuidado pastoral de un obispo.",
      de: "Eine 'Teilkirche' oder ein Bezirk unter der pastoralen Obhut eines Bischofs.",
    },
  },
  {
    id: "disciple",
    term: {
      en: "Disciple",
      fr: "Disciple",
      es: "Discípulo",
      de: "Jünger",
    },
    definition: {
      en: "A follower or student of a teacher. In the Gospels, it refers to the many followers of Jesus, not just the twelve Apostles.",
      fr: "Un adepte ou un élève d'un enseignant. Dans les Évangiles, il fait référence aux nombreux disciples de Jésus, pas seulement aux douze Apôtres.",
      es: "Un seguidor o estudiante de un maestro. En los Evangelios, se refiere a los muchos seguidores de Jesús, no solo a los doce Apóstoles.",
      de: "Ein Nachfolger oder Schüler eines Lehrers. In den Evangelien bezieht es sich auf die vielen Nachfolger Jesu, nicht nur auf die zwölf Apostel.",
    },
  },
  {
    id: "dispensation",
    term: {
      en: "Dispensation",
      fr: "Dispense",
      es: "Dispensa",
      de: "Dispens",
    },
    definition: {
      en: "The relaxation of a purely ecclesiastical law in a particular case by a competent authority.",
      fr: "La relaxation d'une loi purement ecclésiastique dans un cas particulier par une autorité compétente.",
      es: "La relajación de una ley puramente eclesiástica en un caso particular por una autoridad competente.",
      de: "Die Lockerung eines rein kirchlichen Gesetzes in einem besonderen Fall durch eine zuständige Autorität.",
    },
  },
  {
    id: "divine-mercy",
    term: {
      en: "Divine Mercy",
      fr: "Miséricorde Divine",
      es: "Divina Misericordia",
      de: "Göttliche Barmherzigkeit",
    },
    definition: {
      en: "The boundless love and forgiveness God has for all humanity, particularly emphasized through the revelations to St. Faustina Kowalska.",
      fr: "L'amour et le pardon infinis que Dieu a pour toute l'humanité, particulièrement soulignés à travers les révélations à Sainte Faustine Kowalska.",
      es: "El amor y el perdón infinitos que Dios tiene por toda la humanidad, especialmente enfatizados a través de las revelaciones a Santa Faustina Kowalska.",
      de: "Die grenzenlose Liebe und Vergebung, die Gott für die ganze Menschheit hat, besonders hervorgehoben durch die Offenbarungen an die heilige Faustina Kowalska.",
    },
  },

  {
    id: "doctor-church",
    term: {
      en: "Doctor of the Church",
      fr: "Docteur de l'Église",
      es: "Doctor de la Iglesia",
      de: "Kirchenlehrer",
    },
    definition: {
      en: "A title given to a saint who has contributed significantly to the understanding of Christian doctrine through their writings and study.",
      fr: "Un titre donné à un saint qui a contribué de manière significative à la compréhension de la doctrine chrétienne par ses écrits et ses études.",
      es: "Un título otorgado a un santo que ha contribuido significativamente a la comprensión de la doctrina cristiana a través de sus escritos y estudios.",
      de: "Ein Titel für einen Heiligen, der durch seine Schriften und Studien wesentlich zum Verständnis der christlichen Lehre beigetragen hat.",
    },
  },
  {
    id: "doctrine",
    term: {
      en: "Doctrine",
      fr: "Doctrine",
      es: "Doctrina",
      de: "Doktrin",
    },
    definition: {
      en: "A teaching or body of teachings of the Catholic Church concerning faith or morals.",
      fr: "Un enseignement ou un corps d'enseignements de l'Église catholique concernant la foi ou les mœurs.",
      es: "Una enseñanza o cuerpo de enseñanzas de la Iglesia Católica sobre fe o moral.",
      de: "Eine Lehre oder Gesamtheit von Lehren der katholischen Kirche in Bezug auf Glauben oder Sitten.",
    },
  },
  {
    id: "dogma",
    term: {
      en: "Dogma",
      fr: "Dogme",
      es: "Dogma",
      de: "Dogma",
    },
    definition: {
      en: "A truth appertaining to faith or morals, revealed by God, transmitted from the Apostles, and proposed by the Church for acceptance.",
      fr: "Une vérité appartenant à la foi ou aux mœurs, révélée par Dieu, transmise par les Apôtres et proposée par l'Église pour acceptation.",
      es: "Una verdad perteneciente a la fe o a la moral, revelada por Dios, transmitida por los Apóstoles y propuesta por la Iglesia para su aceptación.",
      de: "Eine Wahrheit, die Glaube oder Sitten betrifft, von Gott offenbart, von den Aposteln überliefert und von der Kirche zur Annahme vorgelegt.",
    },
  },
  {
    id: "domestic-church",
    term: {
      en: "Domestic Church",
      fr: "Église domestique",
      es: "Iglesia doméstica",
      de: "Hauskirche",
    },
    definition: {
      en: "The Christian family, which is the smallest body of gathered believers in Christ.",
      fr: "La famille chrétienne, qui est le plus petit corps de croyants réunis dans le Christ.",
      es: "La familia cristiana, que es el cuerpo más pequeño de creyentes reunidos en Cristo.",
      de: "Die christliche Familie, die die kleinste Gemeinschaft der im Christus versammelten Gläubigen ist.",
    },
  },
  {
    id: "dominicans",
    term: {
      en: "Dominicans",
      fr: "Dominicains",
      es: "Dominicos",
      de: "Dominikaner",
    },
    definition: {
      en: "The Order of Preachers (O.P.), a religious order founded by St. Dominic in the 13th century, known for intellectual tradition and preaching.",
      fr: "L'Ordre des Prêcheurs (O.P.), un ordre religieux fondé par Saint Dominique au 13ème siècle, connu pour sa tradition intellectuelle et sa prédication.",
      es: "La Orden de Predicadores (O.P.), una orden religiosa fundada por Santo Domingo en el siglo XIII, conocida por su tradición intelectual y predicación.",
      de: "Der Predigerorden (O.P.), ein im 13. Jahrhundert vom heiligen Dominikus gegründeter religiöser Orden, bekannt für intellektuelle Tradition und Predigt.",
    },
  },
  {
    id: "dove",
    term: {
      en: "Dove",
      fr: "Colombe",
      es: "Paloma",
      de: "Taube",
    },
    definition: {
      en: "A symbol of the Holy Spirit, based on the account of Jesus' baptism in the Gospels.",
      fr: "Un symbole du Saint-Esprit, basé sur le récit du baptême de Jésus dans les Évangiles.",
      es: "Un símbolo del Espíritu Santo, basado en el relato del bautismo de Jesús en los Evangelios.",
      de: "Ein Symbol des Heiligen Geistes, basierend auf dem Bericht über die Taufe Jesu in den Evangelien.",
    },
  },
  {
    id: "doxology",
    term: {
      en: "Doxology",
      fr: "Doxologie",
      es: "Doxología",
      de: "Doxologie",
    },
    definition: {
      en: "A prayer of praise to the Blessed Trinity (e.g., 'Glory be to the Father...').",
      fr: "Une prière de louange à la Sainte Trinité (par ex. 'Gloire au Père...').",
      es: "Una oración de alabanza a la Santísima Trinidad (por ejemplo, 'Gloria al Padre...').",
      de: "Ein Lobpreisgebet an die Heilige Dreifaltigkeit (z.B. 'Ehre sei dem Vater...').",
    },
  },
  {
    id: "dulia",
    term: {
      en: "Dulia",
      fr: "Dulie",
      es: "Dulía",
      de: "Dulia",
    },
    definition: {
      en: "The honor and veneration given to saints and angels, distinct from the adoration (latria) due to God alone.",
      fr: "L'honneur et la vénération rendus aux saints et aux anges, distincts de l'adoration (latrie) due à Dieu seul.",
      es: "El honor y la veneración dados a los santos y ángeles, distintos de la adoración (latría) debida solo a Dios.",
      de: "Die Ehre und Verehrung, die Heiligen und Engeln erwiesen wird, im Unterschied zur Anbetung (Latria), die allein Gott gebührt.",
    },
  },
  {
    id: "easter",
    term: {
      en: "Easter",
      fr: "Pâques",
      es: "Pascua",
      de: "Ostern",
    },
    definition: {
      en: "The greatest feast of the Christian liturgical year, celebrating the Resurrection of Jesus Christ from the dead.",
      fr: "La plus grande fête de l'année liturgique chrétienne, célébrant la Résurrection de Jésus-Christ d'entre les morts.",
      es: "La fiesta más grande del año litúrgico cristiano, que celebra la Resurrección de Jesucristo de entre los muertos.",
      de: "Das höchste Fest des christlichen Kirchenjahres, an dem die Auferstehung Jesu Christi von den Toten gefeiert wird.",
    },
  },
  {
    id: "easter-vigil",
    term: {
      en: "Easter Vigil",
      fr: "Vigile Pascale",
      es: "Vigilia Pascual",
      de: "Osternacht",
    },
    definition: {
      en: "The service held on Holy Saturday night, leading into Easter Sunday, celebrating the Resurrection with fire, word, and water.",
      fr: "Le service tenu la nuit du Samedi Saint, menant au Dimanche de Pâques, célébrant la Résurrection avec le feu, la parole et l'eau.",
      es: "El servicio celebrado en la noche del Sábado Santo, que conduce al Domingo de Pascua, celebrando la Resurrección con fuego, palabra y agua.",
      de: "Der Gottesdienst, der in der Nacht zum Ostersonntag gefeiert wird und die Auferstehung mit Feuer, Wort und Wasser feiert.",
    },
  },
  {
    id: "eastern-catholic-churches",
    term: {
      en: "Eastern Catholic Churches",
      fr: "Églises catholiques orientales",
      es: "Iglesias Católicas Orientales",
      de: "Ostkatholische Kirchen",
    },
    definition: {
      en: "Autonomous, self-governing Catholic churches that trace their history to Eastern Christian traditions but are in full communion with the Pope.",
      fr: "Des églises catholiques autonomes et autogouvernées qui tracent leur histoire aux traditions chrétiennes orientales mais sont en pleine communion avec le Pape.",
      es: "Iglesias católicas autónomas y autogobernadas que trazan su historia a las tradiciones cristianas orientales pero están en plena comunión con el Papa.",
      de: "Autonome, selbstverwaltete katholische Kirchen, die ihre Geschichte auf ostchristliche Traditionen zurückführen, aber in voller Gemeinschaft mit dem Papst stehen.",
    },
  },
  {
    id: "ecce-homo",
    term: {
      en: "Ecce Homo",
      fr: "Ecce Homo",
      es: "Ecce Homo",
      de: "Ecce Homo",
    },
    definition: {
      en: "Latin for 'Behold the Man.' The words spoken by Pontius Pilate when presenting the scourged Jesus to the crowd.",
      fr: "Latin pour 'Voici l'Homme'. Les paroles prononcées par Ponce Pilate en présentant Jésus flagellé à la foule.",
      es: "Latín para 'He aquí el Hombre'. Las palabras dichas por Poncio Pilato al presentar a Jesús flagelado a la multitud.",
      de: "Lateinisch für 'Seht, der Mensch'. Die Worte, die Pontius Pilatus sprach, als er den gegeißelten Jesus der Menge präsentierte.",
    },
  },
  {
    id: "ecclesiology",
    term: {
      en: "Ecclesiology",
      fr: "Ecclésiologie",
      es: "Eclesiología",
      de: "Ekklesiologie",
    },
    definition: {
      en: "The branch of theology concerned with the nature, constitution, and functions of the Church.",
      fr: "La branche de la théologie concernée par la nature, la constitution et les fonctions de l'Église.",
      es: "La rama de la teología que se ocupa de la naturaleza, constitución y funciones de la Iglesia.",
      de: "Der Zweig der Theologie, der sich mit der Natur, der Verfassung und den Funktionen der Kirche befasst.",
    },
  },
  {
    id: "ecumenism",
    term: {
      en: "Ecumenism",
      fr: "Œcuménisme",
      es: "Ecumenismo",
      de: "Ökumene",
    },
    definition: {
      en: "The movement and efforts to promote unity among all Christian churches and communities.",
      fr: "Le mouvement et les efforts pour promouvoir l'unité entre toutes les églises et communautés chrétiennes.",
      es: "El movimiento y los esfuerzos para promover la unidad entre todas las iglesias y comunidades cristianas.",
      de: "Die Bewegung und die Bemühungen zur Förderung der Einheit unter allen christlichen Kirchen und Gemeinschaften.",
    },
  },
  {
    id: "eden",
    term: { en: "Eden", fr: "Éden", es: "Edén", de: "Eden" },
    definition: {
      en: "The garden where Adam and Eve were placed by God; a symbol of the state of original innocence and friendship with God.",
      fr: "Le jardin où Adam et Ève furent placés par Dieu ; un symbole de l'état d'innocence originelle et d'amitié avec Dieu.",
      es: "El jardín donde Adán y Eva fueron colocados por Dios; un símbolo del estado de inocencia original y amistad con Dios.",
      de: "Der Garten, in den Adam und Eva von Gott gesetzt wurden; ein Symbol für den Zustand der ursprünglichen Unschuld und Freundschaft mit Gott.",
    },
  },
  {
    id: "elevation",
    term: {
      en: "Elevation",
      fr: "Élévation",
      es: "Elevación",
      de: "Elevation",
    },
    definition: {
      en: "The moment in the Mass when the priest raises the consecrated Host and Chalice for the adoration of the faithful.",
      fr: "Le moment de la messe où le prêtre élève l'Hostie et le Calice consacrés pour l'adoration des fidèles.",
      es: "El momento en la Misa cuando el sacerdote eleva la Hostia y el Cáliz consagrados para la adoración de los fieles.",
      de: "Der Moment in der Messe, in dem der Priester die konsekrierte Hostie und den Kelch zur Anbetung durch die Gläubigen erhebt.",
    },
  },
  {
    id: "emmanuel",
    term: {
      en: "Emmanuel",
      fr: "Emmanuel",
      es: "Emmanuel",
      de: "Immanuel",
    },
    definition: {
      en: "A Hebrew name meaning 'God with us,' applied to Jesus as the Messiah.",
      fr: "Un nom hébreu signifiant 'Dieu avec nous', appliqué à Jésus en tant que Messie.",
      es: "Un nombre hebreo que significa 'Dios con nosotros', aplicado a Jesús como el Mesías.",
      de: "Ein hebräischer Name, der 'Gott mit uns' bedeutet und auf Jesus als den Messias angewendet wird.",
    },
  },
  {
    id: "encyclical",
    term: {
      en: "Encyclical",
      fr: "Encyclique",
      es: "Encíclica",
      de: "Enzyklika",
    },
    definition: {
      en: "A pastoral letter written by the Pope and sent to the whole Church to teach on matters of faith or morals.",
      fr: "Une lettre pastorale écrite par le Pape et envoyée à toute l'Église pour enseigner sur des questions de foi ou de mœurs.",
      es: "Una carta pastoral escrita por el Papa y enviada a toda la Iglesia para enseñar sobre asuntos de fe o moral.",
      de: "Ein Hirtenbrief, der vom Papst verfasst und an die ganze Kirche gesandt wird, um über Glaubens- oder Sittenfragen zu lehren.",
    },
  },
  {
    id: "epiclesis",
    term: {
      en: "Epiclesis",
      fr: "Épiclèse",
      es: "Epíclesis",
      de: "Epiklese",
    },
    definition: {
      en: "The part of the Eucharistic Prayer where the priest invokes the Holy Spirit to come down upon the gifts of bread and wine.",
      fr: "La partie de la Prière Eucharistique où le prêtre invoque le Saint-Esprit pour qu'il descende sur les dons de pain et de vin.",
      es: "La parte de la Plegaria Eucarística donde el sacerdote invoca al Espíritu Santo para que descienda sobre los dones de pan y vino.",
      de: "Der Teil des Eucharistischen Hochgebets, in dem der Priester den Heiligen Geist herabruft, damit er auf die Gaben von Brot und Wein kommt.",
    },
  },
  {
    id: "epiphany",
    term: {
      en: "Epiphany",
      fr: "Épiphanie",
      es: "Epifanía",
      de: "Erscheinung des Herrn",
    },
    definition: {
      en: "The feast celebrating the manifestation of Christ to the world, represented by the visit of the Magi.",
      fr: "La fête célébrant la manifestation du Christ au monde, représentée par la visite des Mages.",
      es: "La fiesta que celebra la manifestación de Cristo al mundo, representada por la visita de los Reyes Magos.",
      de: "Das Fest, das die Offenbarung Christi für die Welt feiert, dargestellt durch den Besuch der Heiligen Drei Könige.",
    },
  },
  {
    id: "episcopacy",
    term: {
      en: "Episcopacy",
      fr: "Épiscopat",
      es: "Episcopado",
      de: "Episkopat",
    },
    definition: {
      en: "The collective body of bishops, or the office of being a bishop.",
      fr: "Le corps collectif des évêques, ou la fonction d'être évêque.",
      es: "El cuerpo colectivo de obispos, o el cargo de ser obispo.",
      de: "Die Gesamtheit der Bischöfe oder das Amt des Bischofs.",
    },
  },
  {
    id: "epistle",
    term: {
      en: "Epistle",
      fr: "Épître",
      es: "Epístola",
      de: "Epistel",
    },
    definition: {
      en: "A letter in the New Testament, usually written by an Apostle (like Paul) to a Christian community.",
      fr: "Une lettre dans le Nouveau Testament, généralement écrite par un Apôtre (comme Paul) à une communauté chrétienne.",
      es: "Una carta en el Nuevo Testamento, generalmente escrita por un Apóstol (como Pablo) a una comunidad cristiana.",
      de: "Ein Brief im Neuen Testament, meist von einem Apostel (wie Paulus) an eine christliche Gemeinde geschrieben.",
    },
  },
  {
    id: "eschatology",
    term: {
      en: "Eschatology",
      fr: "Eschatologie",
      es: "Escatología",
      de: "Eschatologie",
    },
    definition: {
      en: "The theological study of the 'last things': death, judgment, heaven, hell, and the end of the world.",
      fr: "L'étude théologique des 'fins dernières' : la mort, le jugement, le ciel, l'enfer et la fin du monde.",
      es: "El estudio teológico de las 'cosas últimas': muerte, juicio, cielo, infierno y el fin del mundo.",
      de: "Die theologische Lehre von den 'letzten Dingen': Tod, Gericht, Himmel, Hölle und das Ende der Welt.",
    },
  },
  {
    id: "eternal-life",
    term: {
      en: "Eternal Life",
      fr: "Vie Éternelle",
      es: "Vida Eterna",
      de: "Ewiges Leben",
    },
    definition: {
      en: "Living forever with God in the happiness of heaven, entered into after death by those who die in God's grace.",
      fr: "Vivre pour toujours avec Dieu dans le bonheur du ciel, où entrent après la mort ceux qui meurent dans la grâce de Dieu.",
      es: "Vivir para siempre con Dios en la felicidad del cielo, a la que entran después de la muerte aquellos que mueren en la gracia de Dios.",
      de: "Das ewige Leben mit Gott im Glück des Himmels, in das jene nach dem Tod eintreten, die in der Gnade Gottes sterben.",
    },
  },
  {
    id: "eucharist",
    term: {
      en: "Eucharist",
      fr: "Eucharistie",
      es: "Eucaristía",
      de: "Eucharistie",
    },
    definition: {
      en: "The source and summit of Christian life; the sacrament in which bread and wine become the true Body and Blood of Christ.",
      fr: "La source et le sommet de la vie chrétienne ; le sacrement dans lequel le pain et le vin deviennent le vrai Corps et le Sang du Christ.",
      es: "La fuente y cumbre de la vida cristiana; el sacramento en el que el pan y el vino se convierten en el verdadero Cuerpo y Sangre de Cristo.",
      de: "Die Quelle und der Höhepunkt des christlichen Lebens; das Sakrament, in dem Brot und Wein zum wahren Leib und Blut Christi werden.",
    },
  },
  {
    id: "eucharistic-adoration",
    term: {
      en: "Eucharistic Adoration",
      fr: "Adoration Eucharistique",
      es: "Adoración Eucarística",
      de: "Eucharistische Anbetung",
    },
    definition: {
      en: "Prayer before the Blessed Sacrament exposed in a monstrance, honoring the Real Presence of Jesus.",
      fr: "Prière devant le Saint-Sacrement exposé dans un ostensoir, honorant la Présence Réelle de Jésus.",
      es: "Oración ante el Santísimo Sacramento expuesto en una custodia, honrando la Presencia Real de Jesús.",
      de: "Gebet vor dem im Ostensorium ausgesetzten Allerheiligsten, zur Ehrung der wirklichen Gegenwart Jesu.",
    },
  },
  {
    id: "evangelization",
    term: {
      en: "Evangelization",
      fr: "Évangélisation",
      es: "Evangelización",
      de: "Evangelisierung",
    },
    definition: {
      en: "The mission of the Church to preach the Gospel of Jesus Christ to all nations.",
      fr: "La mission de l'Église de prêcher l'Évangile de Jésus-Christ à toutes les nations.",
      es: "La misión de la Iglesia de predicar el Evangelio de Jesucristo a todas las naciones.",
      de: "Die Mission der Kirche, das Evangelium Jesu Christi allen Völkern zu verkünden.",
    },
  },
  {
    id: "eve",
    term: { en: "Eve", fr: "Ève", es: "Eva", de: "Eva" },
    definition: {
      en: "The first woman, created by God from Adam's side; mother of all the living.",
      fr: "La première femme, créée par Dieu du côté d'Adam ; mère de tous les vivants.",
      es: "La primera mujer, creada por Dios del costado de Adán; madre de todos los vivientes.",
      de: "Die erste Frau, von Gott aus Adams Seite geschaffen; Mutter aller Lebenden.",
    },
  },
  {
    id: "ex-cathedra",
    term: {
      en: "Ex Cathedra",
      fr: "Ex Cathedra",
      es: "Ex Cathedra",
      de: "Ex Cathedra",
    },
    definition: {
      en: "Latin for 'from the chair.' A teaching by the Pope that is considered infallible and binding on the whole Church.",
      fr: "Latin pour 'de la chaire'. Un enseignement du Pape considéré comme infaillible et contraignant pour toute l'Église.",
      es: "Latín para 'desde la cátedra'. Una enseñanza del Papa que se considera infalible y vinculante para toda la Iglesia.",
      de: "Lateinisch für 'vom Stuhl'. Eine Lehre des Papstes, die als unfehlbar und für die ganze Kirche verbindlich gilt.",
    },
  },
  {
    id: "ex-opere-operato",
    term: {
      en: "Ex Opere Operato",
      fr: "Ex Opere Operato",
      es: "Ex Opere Operato",
      de: "Ex Opere Operato",
    },
    definition: {
      en: "Latin for 'by the work worked.' The doctrine that sacraments confer grace by the act itself, regardless of the holiness of the minister.",
      fr: "Latin pour 'par l'œuvre opérée'. La doctrine selon laquelle les sacrements confèrent la grâce par l'acte lui-même, indépendamment de la sainteté du ministre.",
      es: "Latín para 'por la obra realizada'. La doctrina de que los sacramentos confieren gracia por el acto mismo, independientemente de la santidad del ministro.",
      de: "Lateinisch für 'durch das vollzogene Werk'. Die Lehre, dass Sakramente Gnade durch die Handlung selbst verleihen, unabhängig von der Heiligkeit des Spenders.",
    },
  },
  {
    id: "excommunication",
    term: {
      en: "Excommunication",
      fr: "Excommunication",
      es: "Excomunión",
      de: "Exkommunikation",
    },
    definition: {
      en: "A severe church penalty resulting from grave crimes, excluding a person from the sacraments and church community.",
      fr: "Une peine ecclésiastique sévère résultant de crimes graves, excluant une personne des sacrements et de la communauté ecclésiale.",
      es: "Una pena eclesiástica severa resultante de crímenes graves, que excluye a una persona de los sacramentos y la comunidad de la iglesia.",
      de: "Eine schwere Kirchenstrafe infolge schwerer Vergehen, die eine Person von den Sakramenten und der Kirchengemeinschaft ausschließt.",
    },
  },
  {
    id: "exegesis",
    term: {
      en: "Exegesis",
      fr: "Exégèse",
      es: "Exégesis",
      de: "Exegese",
    },
    definition: {
      en: "The critical explanation or interpretation of a text, especially Scripture.",
      fr: "L'explication ou l'interprétation critique d'un texte, en particulier l'Écriture.",
      es: "La explicación o interpretación crítica de un texto, especialmente la Escritura.",
      de: "Die kritische Erklärung oder Auslegung eines Textes, insbesondere der Heiligen Schrift.",
    },
  },
  {
    id: "exorcism",
    term: {
      en: "Exorcism",
      fr: "Exorcisme",
      es: "Exorcismo",
      de: "Exorzismus",
    },
    definition: {
      en: "A rite of the Church to protect a person or object from the power of the Devil and to withdraw them from his dominion.",
      fr: "Un rite de l'Église pour protéger une personne ou un objet du pouvoir du Diable et pour les soustraire à sa domination.",
      es: "Un rito de la Iglesia para proteger a una persona u objeto del poder del Diablo y sustraerlos de su dominio.",
      de: "Ein Ritus der Kirche, um eine Person oder einen Gegenstand vor der Macht des Teufels zu schützen und sie seiner Herrschaft zu entziehen.",
    },
  },
  {
    id: "exposition",
    term: {
      en: "Exposition",
      fr: "Exposition",
      es: "Exposición",
      de: "Aussetzung",
    },
    definition: {
      en: "The practice of displaying the consecrated Host in a monstrance for public adoration.",
      fr: "La pratique d'exposer l'Hostie consacrée dans un ostensoir pour l'adoration publique.",
      es: "La práctica de exhibir la Hostia consagrada en una custodia para la adoración pública.",
      de: "Die Praxis, die konsekrierte Hostie in einer Monstranz zur öffentlichen Anbetung auszustellen.",
    },
  },
  {
    id: "anointing-sick",
    term: {
      en: "Extreme Unction",
      fr: "Extrême-Onction",
      es: "Extremaunción",
      de: "Letzte Ölung",
    },
    definition: {
      en: "The older term for the Sacrament of the Anointing of the Sick.",
      fr: "L'ancien terme pour le Sacrement de l'Onction des malades.",
      es: "El término antiguo para el Sacramento de la Unción de los Enfermos.",
      de: "Der ältere Begriff für das Sakrament der Krankensalbung.",
    },
  },
  {
    id: "faith",
    term: { en: "Faith", fr: "Foi", es: "Fe", de: "Glaube" },
    definition: {
      en: "The theological virtue by which we believe in God and all that He has said and revealed to us.",
      fr: "La vertu théologale par laquelle nous croyons en Dieu et en tout ce qu'Il nous a dit et révélé.",
      es: "La virtud teologal por la cual creemos en Dios y en todo lo que Él nos ha dicho y revelado.",
      de: "Die theologische Tugend, durch die wir an Gott glauben und an alles, was Er uns gesagt und offenbart hat.",
    },
  },
  {
    id: "fall",
    term: {
      en: "Fall, The",
      fr: "La Chute",
      es: "La Caída",
      de: "Der Sündenfall",
    },
    definition: {
      en: "The disobedience of Adam and Eve in the Garden of Eden, which brought sin and death into the world.",
      fr: "La désobéissance d'Adam et Ève dans le jardin d'Éden, qui a introduit le péché et la mort dans le monde.",
      es: "La desobediencia de Adán y Eva en el Jardín del Edén, que trajo el pecado y la muerte al mundo.",
      de: "Der Ungehorsam von Adam und Eva im Garten Eden, der Sünde und Tod in die Welt brachte.",
    },
  },
  {
    id: "fasting",
    term: {
      en: "Fasting",
      fr: "Jeûne",
      es: "Ayuno",
      de: "Fasten",
    },
    definition: {
      en: "The spiritual discipline of limiting food intake to express penance and dependence on God.",
      fr: "La discipline spirituelle consistant à limiter la consommation de nourriture pour exprimer la pénitence et la dépendance à Dieu.",
      es: "La disciplina espiritual de limitar la ingesta de alimentos para expresar penitencia y dependencia de Dios.",
      de: "Die geistliche Disziplin, die Nahrungsaufnahme einzuschränken, um Buße und Abhängigkeit von Gott auszudrücken.",
    },
  },
  {
    id: "fatima",
    term: {
      en: "Fatima",
      fr: "Fatima",
      es: "Fátima",
      de: "Fátima",
    },
    definition: {
      en: "The location in Portugal where the Virgin Mary appeared to three shepherd children in 1917.",
      fr: "Le lieu au Portugal où la Vierge Marie est apparue à trois petits bergers en 1917.",
      es: "El lugar en Portugal donde la Virgen María se apareció a tres pastorcitos en 1917.",
      de: "Der Ort in Portugal, an dem die Jungfrau Maria 1917 drei Hirtenkindern erschien.",
    },
  },
  {
    id: "fear-of-lord",
    term: {
      en: "Fear of the Lord",
      fr: "Crainte de Dieu",
      es: "Temor de Dios",
      de: "Gottesfurcht",
    },
    definition: {
      en: "A gift of the Holy Spirit; a profound respect and awe for God's majesty and a dread of offending Him.",
      fr: "Un don du Saint-Esprit ; un profond respect et une crainte révérencielle pour la majesté de Dieu et une crainte de L'offenser.",
      es: "Un don del Espíritu Santo; un profundo respeto y asombro por la majestad de Dios y un temor de ofenderlo.",
      de: "Eine Gabe des Heiligen Geistes; ein tiefer Respekt und Ehrfurcht vor Gottes Majestät und die Furcht, Ihn zu beleidigen.",
    },
  },

  {
    id: "sacrament",
    term: {
      en: "Sacrament",
      fr: "Sacrement",
      es: "Sacramento",
      de: "Sakrament",
    },
    definition: {
      en: "An efficacious sign of grace, instituted by Christ and entrusted to the Church, by which divine life is dispensed to us. They are seven in number: Baptism, Confirmation, Eucharist, Penance, Anointing of the Sick, Holy Orders, and Matrimony.",
      fr: "Un signe efficace de la grâce, institué par le Christ et confié à l'Église, par lequel la vie divine nous est distribuée. Ils sont au nombre de sept : Baptême, Confirmation, Eucharistie, Pénitence, Onction des malades, Ordre et Mariage.",
      es: "Un signo eficaz de la gracia, instituido por Cristo y confiado a la Iglesia, por el cual se nos dispensa la vida divina. Son siete en total: Bautismo, Confirmación, Eucaristía, Penitencia, Unción de los enfermos, Orden Sacerdotal y Matrimonio.",
      de: "Ein wirksames Zeichen der Gnade, von Christus eingesetzt und der Kirche anvertraut, durch das uns das göttliche Leben gespendet wird. Sie sind sieben an der Zahl: Taufe, Firmung, Eucharistie, Buße, Krankensalbung, Weihe und Ehe.",
    },
  },
  {
    id: "second-council-constantinople",
    term: {
      en: "Second Council of Constantinople",
      fr: "Deuxième Concile de Constantinople",
      es: "Segundo Concilio de Constantinopla",
      de: "Zweites Konzil von Konstantinopel",
    },
    definition: {
      en: "The fifth Ecumenical Council, held in 553 AD, which condemned the Three Chapters to clarify and defend the teaching of the Council of Chalcedon. Its main purpose was to insist further upon the unity of the Person of Christ in his two natures, divine and human, against Nestorianism.",
      fr: "Le cinquième Concile œcuménique, tenu en 553 après J.C., qui a condamné les Trois Chapitres pour clarifier et défendre l'enseignement du Concile de Chalcédoine. Son but principal était d'insister davantage sur l'unité de la Personne du Christ dans ses deux natures, divine et humaine, contre le nestorianisme.",
      es: "El quinto Concilio Ecuménico, celebrado en 553 d.C., que condenó los Tres Capítulos para clarificar y defender la enseñanza del Concilio de Calcedonia. Su propósito principal fue insistir aún más en la unidad de la Persona de Cristo en sus dos naturalezas, divina y humana, contra el nestorianismo.",
      de: "Das fünfte Ökumenische Konzil, abgehalten 553 n. Chr., das die Drei Kapitel verurteilte, um die Lehre des Konzils von Chalkedon zu klären und zu verteidigen. Sein Hauptzweck war es, weiter auf der Einheit der Person Christi in seinen zwei Naturen, göttlich und menschlich, gegen den Nestorianismus zu bestehen.",
    },
  },

  {
    id: "filioque",
    term: {
      en: "Filioque",
      fr: "Filioque",
      es: "Filioque",
      de: "Filioque",
    },
    definition: {
      en: "Latin for 'and the Son.' A clause in the Creed stating the Holy Spirit proceeds from both the Father and the Son.",
      fr: "Latin pour 'et du Fils'. Une clause dans le Credo déclarant que le Saint-Esprit procède à la fois du Père et du Fils.",
      es: "Latín para 'y del Hijo'. Una cláusula en el Credo que declara que el Espíritu Santo procede tanto del Padre como del Hijo.",
      de: "Lateinisch für 'und dem Sohn'. Ein Zusatz im Glaubensbekenntnis, der besagt, dass der Heilige Geist sowohl vom Vater als auch vom Sohn ausgeht.",
    },
  },
  {
    id: "first-communion",
    term: {
      en: "First Communion",
      fr: "Première Communion",
      es: "Primera Comunión",
      de: "Erstkommunion",
    },
    definition: {
      en: "The ceremony in which a person (usually a child) receives the Eucharist for the first time.",
      fr: "La cérémonie au cours de laquelle une personne (généralement un enfant) reçoit l'Eucharistie pour la première fois.",
      es: "La ceremonia en la que una persona (generalmente un niño) recibe la Eucaristía por primera vez.",
      de: "Die Zeremonie, bei der eine Person (meist ein Kind) zum ersten Mal die Eucharistie empfängt.",
    },
  },

  {
    id: "five-ways",
    term: {
      en: "Five Ways",
      fr: "Cinq Voies",
      es: "Cinco Vías",
      de: "Fünf Wege",
    },
    definition: {
      en: "The five logical arguments for the existence of God proposed by St. Thomas Aquinas.",
      fr: "Les cinq arguments logiques pour l'existence de Dieu proposés par Saint Thomas d'Aquin.",
      es: "Los cinco argumentos lógicos para la existencia de Dios propuestos por Santo Tomás de Aquino.",
      de: "Die fünf logischen Argumente für die Existenz Gottes, vorgeschlagen vom heiligen Thomas von Aquin.",
    },
  },
  {
    id: "font",
    term: {
      en: "Font (Baptismal)",
      fr: "Fonts baptismaux",
      es: "Pila Bautismal",
      de: "Taufbecken",
    },
    definition: {
      en: "A receptacle in a church for the water used in Baptism.",
      fr: "Un réceptacle dans une église pour l'eau utilisée lors du baptême.",
      es: "Un receptáculo en una iglesia para el agua utilizada en el Bautismo.",
      de: "Ein Behälter in einer Kirche für das Wasser, das bei der Taufe verwendet wird.",
    },
  },
  {
    id: "fortitude",
    term: {
      en: "Fortitude",
      fr: "Force",
      es: "Fortaleza",
      de: "Tapferkeit",
    },
    definition: {
      en: "One of the four cardinal virtues; ensures firmness in difficulties and constancy in the pursuit of the good.",
      fr: "L'une des quatre vertus cardinales ; assure la fermeté dans les difficultés et la constance dans la poursuite du bien.",
      es: "Una de las cuatro virtudes cardinales; asegura la firmeza en las dificultades y la constancia en la búsqueda del bien.",
      de: "Eine der vier Kardinaltugenden; sichert die Festigkeit in Schwierigkeiten und die Beständigkeit im Streben nach dem Guten.",
    },
  },
  {
    id: "free-will",
    term: {
      en: "Free Will",
      fr: "Libre arbitre",
      es: "Libre Albedrío",
      de: "Freier Wille",
    },
    definition: {
      en: "The power, rooted in reason and will, to act or not to act, and so to perform deliberate actions on one's own responsibility.",
      fr: "Le pouvoir, enraciné dans la raison et la volonté, d'agir ou de ne pas agir, et ainsi d'accomplir des actions délibérées sous sa propre responsabilité.",
      es: "El poder, radicado en la razón y la voluntad, de actuar o no actuar, y así realizar acciones deliberadas bajo la propia responsabilidad.",
      de: "Die in Vernunft und Willen verwurzelte Macht, zu handeln oder nicht zu handeln und so bewusste Handlungen in eigener Verantwortung zu vollziehen.",
    },
  },
  {
    id: "fruits-holy-spirit",
    term: {
      en: "Fruits of the Holy Spirit",
      fr: "Fruits du Saint-Esprit",
      es: "Frutos del Espíritu Santo",
      de: "Früchte des Heiligen Geistes",
    },
    definition: {
      en: "Perfections that the Holy Spirit forms in us as the first fruits of eternal glory, commonly listed as: Charity, Joy, Peace, Patience, Kindness, Goodness, Faithfulness, Gentleness, and Self-control.",
      fr: "Perfections que le Saint-Esprit forme en nous comme prémices de la gloire éternelle, couramment énumérées comme : Charité, Joie, Paix, Patience, Bonté, Bienveillance, Fidélité, Douceur et Maîtrise de soi.",
      es: "Perfecciones que el Espíritu Santo forma en nosotros como primicias de la gloria eterna, comúnmente enumeradas como: Caridad, Gozo, Paz, Paciencia, Benignidad, Bondad, Fe, Mansedumbre y Dominio propio.",
      de: "Vollkommenheiten, die der Heilige Geist in uns als erste Früchte der ewigen Herrlichkeit bildet, allgemein aufgeführt als: Liebe, Freude, Friede, Geduld, Freundlichkeit, Güte, Treue, Sanftmut und Selbstbeherrschung.",
    },
  },
  ,
  {
    id: "gabriel",
    term: {
      en: "Gabriel",
      fr: "Gabriel",
      es: "Gabriel",
      de: "Gabriel",
    },
    definition: {
      en: "One of the archangels, known as the messenger of God, who announced the birth of John the Baptist and Jesus.",
      fr: "L'un des archanges, connu comme le messager de Dieu, qui a annoncé la naissance de Jean-Baptiste et de Jésus.",
      es: "Uno de los arcángeles, conocido como el mensajero de Dios, que anunció el nacimiento de Juan el Bautista y de Jesús.",
      de: "Einer der Erzengel, bekannt als Bote Gottes, der die Geburt von Johannes dem Täufer und Jesus verkündete.",
    },
  },
  {
    id: "general-intercessions",
    term: {
      en: "General Intercessions",
      fr: "Prière Universelle",
      es: "Oración de los Fieles",
      de: "Fürbitten",
    },
    definition: {
      en: "Prayers said at Mass for the needs of the Church, the world, and the local community.",
      fr: "Prières dites à la messe pour les besoins de l'Église, du monde et de la communauté locale.",
      es: "Oraciones dichas en la Misa por las necesidades de la Iglesia, del mundo y de la comunidad local.",
      de: "Gebete, die in der Messe für die Anliegen der Kirche, der Welt und der Ortsgemeinde gesprochen werden.",
    },
  },
  {
    id: "genuflection",
    term: {
      en: "Genuflection",
      fr: "Génuflexion",
      es: "Genuflexión",
      de: "Kniebeuge",
    },
    definition: {
      en: "The act of bending the knee as a sign of reverence, typically to the Blessed Sacrament in the tabernacle.",
      fr: "L'acte de plier le genou en signe de révérence, généralement devant le Saint-Sacrement dans le tabernacle.",
      es: "El acto de doblar la rodilla como signo de reverencia, típicamente ante el Santísimo Sacramento en el sagrario.",
      de: "Der Akt des Kniebeugens als Zeichen der Ehrfurcht, typischerweise vor dem Allerheiligsten im Tabernakel.",
    },
  },
  {
    id: "gifts-holy-spirit",
    term: {
      en: "Gifts of the Holy Spirit",
      fr: "Dons du Saint-Esprit",
      es: "Dones del Espíritu Santo",
      de: "Gaben des Heiligen Geistes",
    },
    definition: {
      en: "Seven permanent dispositions that make man docile in following the promptings of the Holy Spirit (Wisdom, Understanding, Counsel, Fortitude, Knowledge, Piety, Fear of the Lord).",
      fr: "Sept dispositions permanentes qui rendent l'homme docile à suivre les impulsions du Saint-Esprit (Sagesse, Intelligence, Conseil, Force, Science, Piété, Crainte de Dieu).",
      es: "Siete disposiciones permanentes que hacen al hombre dócil para seguir los impulsos del Espíritu Santo (Sabiduría, Entendimiento, Consejo, Fortaleza, Ciencia, Piedad, Temor de Dios).",
      de: "Sieben bleibende Neigungen, die den Menschen gefügig machen, den Eingebungen des Heiligen Geistes zu folgen (Weisheit, Einsicht, Rat, Stärke, Erkenntnis, Frömmigkeit, Gottesfurcht).",
    },
  },
  {
    id: "gloria",
    term: {
      en: "Gloria",
      fr: "Gloire à Dieu",
      es: "Gloria",
      de: "Gloria",
    },
    definition: {
      en: "An ancient hymn of praise sung or recited during the Mass (except in Advent and Lent). 'Glory to God in the highest...'",
      fr: "Une ancienne hymne de louange chantée ou récitée pendant la messe (sauf pendant l'Avent et le Carême). 'Gloire à Dieu au plus haut des cieux...'",
      es: "Un antiguo himno de alabanza cantado o recitado durante la Misa (excepto en Adviento y Cuaresma). 'Gloria a Dios en el cielo...'",
      de: "Ein alter Lobgesang, der während der Messe gesungen oder gesprochen wird (außer im Advent und in der Fastenzeit). 'Ehre sei Gott in der Höhe...'",
    },
  },
  {
    id: "gnosticism",
    term: {
      en: "Gnosticism",
      fr: "Gnosticisme",
      es: "Gnosticismo",
      de: "Gnostizismus",
    },
    definition: {
      en: "A group of ancient heresies stating that salvation comes from secret knowledge (gnosis) and that the physical world is evil.",
      fr: "Un groupe d'anciennes hérésies affirmant que le salut vient d'une connaissance secrète (gnose) et que le monde physique est mauvais.",
      es: "Un grupo de antiguas herejías que afirmaban que la salvación proviene de un conocimiento secreto (gnosis) y que el mundo físico es malo.",
      de: "Eine Gruppe antiker Häresien, die besagten, dass das Heil aus geheimem Wissen (Gnosis) kommt und dass die physische Welt böse ist.",
    },
  },
  {
    id: "god",
    term: { en: "God", fr: "Dieu", es: "Dios", de: "Gott" },
    definition: {
      en: "The infinite, eternal, uncreated, and personal spiritual Being, who created and sustains all that exists.",
      fr: "L'Être spirituel infini, éternel, incréé et personnel, qui a créé et soutient tout ce qui existe.",
      es: "El Ser espiritual infinito, eterno, increado y personal, que creó y sostiene todo lo que existe.",
      de: "Das unendliche, ewige, unerschaffene und persönliche geistige Wesen, das alles erschaffen hat und erhält, was existiert.",
    },
  },
  {
    id: "godparent",
    term: {
      en: "Godparent",
      fr: "Parrain/Marraine",
      es: "Padrino/Madrina",
      de: "Pate/Patin",
    },
    definition: {
      en: "A Catholic who witnesses a baptism and assumes the responsibility of assisting the newly baptized in their Christian life.",
      fr: "Un catholique qui est témoin d'un baptême et assume la responsabilité d'aider le nouveau baptisé dans sa vie chrétienne.",
      es: "Un católico que es testigo de un bautismo y asume la responsabilidad de ayudar al recién bautizado en su vida cristiana.",
      de: "Ein Katholik, der Zeuge einer Taufe ist und die Verantwortung übernimmt, dem Neugetauften in seinem christlichen Leben zu helfen.",
    },
  },
  {
    id: "good-friday",
    term: {
      en: "Good Friday",
      fr: "Vendredi Saint",
      es: "Viernes Santo",
      de: "Karfreitag",
    },
    definition: {
      en: "The Friday before Easter, commemorating the Crucifixion and death of Jesus Christ.",
      fr: "Le vendredi avant Pâques, commémorant la Crucifixion et la mort de Jésus-Christ.",
      es: "El viernes antes de Pascua, que conmemora la Crucifixión y muerte de Jesucristo.",
      de: "Der Freitag vor Ostern, an dem der Kreuzigung und des Todes Jesu Christi gedacht wird.",
    },
  },
  {
    id: "gospel",
    term: {
      en: "Gospel",
      fr: "Évangile",
      es: "Evangelio",
      de: "Evangelium",
    },
    definition: {
      en: "Meaning 'Good News.' Refers to the four canonical books (Matthew, Mark, Luke, John) describing the life and teaching of Jesus.",
      fr: "Signifiant 'Bonne Nouvelle'. Fait référence aux quatre livres canoniques (Matthieu, Marc, Luc, Jean) décrivant la vie et l'enseignement de Jésus.",
      es: "Significa 'Buena Nueva'. Se refiere a los cuatro libros canónicos (Mateo, Marcos, Lucas, Juan) que describen la vida y enseñanza de Jesús.",
      de: "Bedeutet 'Frohe Botschaft'. Bezieht sich auf die vier kanonischen Bücher (Matthäus, Markus, Lukas, Johannes), die das Leben und die Lehre Jesu beschreiben.",
    },
  },
  {
    id: "grace-actual",
    term: {
      en: "Grace, Actual",
      fr: "Grâce actuelle",
      es: "Gracia Actual",
      de: "Aktuelle Gnade",
    },
    definition: {
      en: "Temporary supernatural help given by God to enlighten the mind and strengthen the will to do good and avoid evil.",
      fr: "Aide surnaturelle temporaire donnée par Dieu pour éclairer l'esprit et fortifier la volonté de faire le bien et d'éviter le mal.",
      es: "Ayuda sobrenatural temporal dada por Dios para iluminar la mente y fortalecer la voluntad para hacer el bien y evitar el mal.",
      de: "Vorübergehende übernatürliche Hilfe, die von Gott gegeben wird, um den Verstand zu erleuchten und den Willen zu stärken, das Gute zu tun und das Böse zu meiden.",
    },
  },
  {
    id: "grace-sanctifying",
    term: {
      en: "Grace, Sanctifying",
      fr: "Grâce sanctifiante",
      es: "Gracia Santificante",
      de: "Heilig machende Gnade",
    },
    definition: {
      en: "The stable and supernatural disposition that perfects the soul itself to enable it to live with God, to act by his love.",
      fr: "La disposition stable et surnaturelle qui perfectionne l'âme elle-même pour lui permettre de vivre avec Dieu, d'agir par son amour.",
      es: "La disposición estable y sobrenatural que perfecciona el alma misma para permitirle vivir con Dios, actuar por su amor.",
      de: "Die beständige und übernatürliche Verfassung, die die Seele selbst vervollkommnet, um sie zu befähigen, mit Gott zu leben und aus seiner Liebe zu handeln.",
    },
  },
  {
    id: "guardian-angel",
    term: {
      en: "Guardian Angel",
      fr: "Ange Gardien",
      es: "Ángel de la Guarda",
      de: "Schutzengel",
    },
    definition: {
      en: "An angel assigned by God to a specific person to protect and guide them to salvation.",
      fr: "Un ange assigné par Dieu à une personne spécifique pour la protéger et la guider vers le salut.",
      es: "Un ángel asignado por Dios a una persona específica para protegerla y guiarla a la salvación.",
      de: "Ein Engel, der von Gott einer bestimmten Person zugewiesen wurde, um sie zu beschützen und zum Heil zu führen.",
    },
  },
  {
    id: "hail-mary",
    term: {
      en: "Hail Mary",
      fr: "Je vous salue Marie",
      es: "Ave María",
      de: "Gegrüßet seist du, Maria",
    },
    definition: {
      en: "A prayer addressing the Virgin Mary, based on the greeting of the angel Gabriel and the visitation to Elizabeth.",
      fr: "Une prière s'adressant à la Vierge Marie, basée sur la salutation de l'ange Gabriel et la visite à Élisabeth.",
      es: "Una oración dirigida a la Virgen María, basada en el saludo del ángel Gabriel y la visita a Isabel.",
      de: "Ein Gebet, das an die Jungfrau Maria gerichtet ist, basierend auf dem Gruß des Engels Gabriel und dem Besuch bei Elisabeth.",
    },
  },
  {
    id: "heaven",
    term: {
      en: "Heaven",
      fr: "Ciel (Paradis)",
      es: "Cielo",
      de: "Himmel",
    },
    definition: {
      en: "The state of supreme and definitive happiness for those who die in God's grace and have no need of further purification.",
      fr: "L'état de bonheur suprême et définitif pour ceux qui meurent dans la grâce de Dieu et n'ont pas besoin de purification supplémentaire.",
      es: "El estado de felicidad suprema y definitiva para aquellos que mueren en la gracia de Dios y no necesitan más purificación.",
      de: "Der Zustand des höchsten und endgültigen Glücks für jene, die in der Gnade Gottes sterben und keiner weiteren Läuterung bedürfen.",
    },
  },
  {
    id: "hell",
    term: {
      en: "Hell",
      fr: "Enfer",
      es: "Infierno",
      de: "Hölle",
    },
    definition: {
      en: "The state of definitive self-exclusion from communion with God and the blessed, reserved for those who refuse by their own free choice to believe and be converted.",
      fr: "L'état d'auto-exclusion définitive de la communion avec Dieu et les bienheureux, réservé à ceux qui refusent par leur propre libre choix de croire et de se convertir.",
      es: "El estado de autoexclusión definitiva de la comunión con Dios y los bienaventurados, reservado para aquellos que rechazan por su propia libre elección creer y convertirse.",
      de: "Der Zustand der endgültigen Selbstausgrenzung aus der Gemeinschaft mit Gott und den Seligen, reserviert für jene, die es aus freier Wahl ablehnen, zu glauben und sich zu bekehren.",
    },
  },
  {
    id: "hierarchy",
    term: {
      en: "Hierarchy",
      fr: "Hiérarchie",
      es: "Jerarquía",
      de: "Hierarchie",
    },
    definition: {
      en: "The order of authority in the Church, established by Christ, consisting of bishops, priests, and deacons.",
      fr: "L'ordre d'autorité dans l'Église, établi par le Christ, composé d'évêques, de prêtres et de diacres.",
      es: "El orden de autoridad en la Iglesia, establecido por Cristo, que consiste en obispos, sacerdotes y diáconos.",
      de: "Die Autoritätsordnung in der Kirche, von Christus eingesetzt, bestehend aus Bischöfen, Priestern und Diakonen.",
    },
  },
  {
    id: "high-priest",
    term: {
      en: "High Priest",
      fr: "Grand Prêtre",
      es: "Sumo Sacerdote",
      de: "Hohepriester",
    },
    definition: {
      en: "A title for Jesus Christ, who offered the perfect sacrifice (Himself) to the Father.",
      fr: "Un titre pour Jésus-Christ, qui a offert le sacrifice parfait (Lui-même) au Père.",
      es: "Un título para Jesucristo, quien ofreció el sacrificio perfecto (a Sí mismo) al Padre.",
      de: "Ein Titel für Jesus Christus, der dem Vater das vollkommene Opfer (sich selbst) darbrachte.",
    },
  },
  {
    id: "holy-communion",
    term: {
      en: "Holy Communion",
      fr: "Sainte Communion",
      es: "Sagrada Comunión",
      de: "Heilige Kommunion",
    },
    definition: {
      en: "The reception of the Body and Blood of Christ in the Eucharist.",
      fr: "La réception du Corps et du Sang du Christ dans l'Eucharistie.",
      es: "La recepción del Cuerpo y la Sangre de Cristo en la Eucaristía.",
      de: "Der Empfang von Leib und Blut Christi in der Eucharistie.",
    },
  },
  {
    id: "holy-days-obligation",
    term: {
      en: "Holy Days of Obligation",
      fr: "Jours d'obligation",
      es: "Días de Precepto",
      de: "Gebotene Feiertage",
    },
    definition: {
      en: "Feast days on which Catholics are required to attend Mass and avoid unnecessary work.",
      fr: "Jours de fête où les catholiques sont tenus d'assister à la messe et d'éviter le travail inutile.",
      es: "Días festivos en los que los católicos están obligados a asistir a Misa y evitar el trabajo innecesario.",
      de: "Feiertage, an denen Katholiken verpflichtet sind, die Messe zu besuchen und unnötige Arbeit zu vermeiden.",
    },
  },
  {
    id: "holy-family",
    term: {
      en: "Holy Family",
      fr: "Sainte Famille",
      es: "Sagrada Familia",
      de: "Heilige Familie",
    },
    definition: {
      en: "The family unit of Jesus, Mary, and Joseph.",
      fr: "L'unité familiale de Jésus, Marie et Joseph.",
      es: "La unidad familiar de Jesús, María y José.",
      de: "Die Familieneinheit von Jesus, Maria und Josef.",
    },
  },
  {
    id: "holy-orders",
    term: {
      en: "Holy Orders",
      fr: "Ordre (Sacrement)",
      es: "Orden Sacerdotal",
      de: "Priesterweihe",
    },
    definition: {
      en: "The sacrament through which the mission entrusted by Christ to his apostles continues to be exercised in the Church.",
      fr: "Le sacrement par lequel la mission confiée par le Christ à ses apôtres continue d'être exercée dans l'Église.",
      es: "El sacramento a través del cual la misión encomendada por Cristo a sus apóstoles continúa ejerciéndose en la Iglesia.",
      de: "Das Sakrament, durch das die von Christus seinen Aposteln anvertraute Sendung weiterhin in der Kirche ausgeübt wird.",
    },
  },
  {
    id: "holy-saturday",
    term: {
      en: "Holy Saturday",
      fr: "Samedi Saint",
      es: "Sábado Santo",
      de: "Karsamstag",
    },
    definition: {
      en: "The day before Easter Sunday, commemorating the day Jesus' body lay in the tomb.",
      fr: "Le jour précédant le dimanche de Pâques, commémorant le jour où le corps de Jésus reposait dans le tombeau.",
      es: "El día antes del Domingo de Pascua, que conmemora el día en que el cuerpo de Jesús yació en la tumba.",
      de: "Der Tag vor dem Ostersonntag, an dem gedacht wird, dass Jesu Leichnam im Grab lag.",
    },
  },
  {
    id: "holy-see",
    term: {
      en: "Holy See",
      fr: "Saint-Siège",
      es: "Santa Sede",
      de: "Heiliger Stuhl",
    },
    definition: {
      en: "The jurisdiction of the Pope as the supreme pastor of the Catholic Church; the central government of the Church.",
      fr: "La juridiction du Pape en tant que pasteur suprême de l'Église catholique ; le gouvernement central de l'Église.",
      es: "La jurisdicción del Papa como pastor supremo de la Iglesia Católica; el gobierno central de la Iglesia.",
      de: "Die Jurisdiktion des Papstes als oberster Hirte der katholischen Kirche; die zentrale Regierung der Kirche.",
    },
  },
  {
    id: "holy-spirit",
    term: {
      en: "Holy Spirit",
      fr: "Saint-Esprit",
      es: "Espíritu Santo",
      de: "Heiliger Geist",
    },
    definition: {
      en: "The third Person of the Holy Trinity, who proceeds from the Father and the Son, and is worshipped and glorified with them.",
      fr: "La troisième Personne de la Sainte Trinité, qui procède du Père et du Fils, et qui est adorée et glorifiée avec eux.",
      es: "La tercera Persona de la Santísima Trinidad, que procede del Padre y del Hijo, y que recibe una misma adoración y gloria.",
      de: "Die dritte Person der Heiligen Dreifaltigkeit, die aus dem Vater und dem Sohn hervorgeht und mit ihnen angebetet und verherrlicht wird.",
    },
  },
  {
    id: "holy-thursday",
    term: {
      en: "Holy Thursday",
      fr: "Jeudi Saint",
      es: "Jueves Santo",
      de: "Gründonnerstag",
    },
    definition: {
      en: "The Thursday before Easter, commemorating the Last Supper and the institution of the Eucharist and Priesthood.",
      fr: "Le jeudi avant Pâques, commémorant la Cène et l'institution de l'Eucharistie et du Sacerdoce.",
      es: "El jueves antes de Pascua, que conmemora la Última Cena y la institución de la Eucaristía y el Sacerdocio.",
      de: "Der Donnerstag vor Ostern, an dem das letzte Abendmahl und die Einsetzung der Eucharistie und des Priestertums gefeiert werden.",
    },
  },
  {
    id: "holy-water",
    term: {
      en: "Holy Water",
      fr: "Eau bénite",
      es: "Agua Bendita",
      de: "Weihwasser",
    },
    definition: {
      en: "Water blessed by a priest, used for baptism and as a sacramental to remind the faithful of their baptism.",
      fr: "Eau bénie par un prêtre, utilisée pour le baptême et comme sacramental pour rappeler aux fidèles leur baptême.",
      es: "Agua bendecida por un sacerdote, utilizada para el bautismo y como sacramental para recordar a los fieles su bautismo.",
      de: "Von einem Priester gesegnetes Wasser, das für die Taufe und als Sakramentalie verwendet wird, um die Gläubigen an ihre Taufe zu erinnern.",
    },
  },
  {
    id: "holy-week",
    term: {
      en: "Holy Week",
      fr: "Semaine Sainte",
      es: "Semana Santa",
      de: "Karwoche",
    },
    definition: {
      en: "The week leading up to Easter, beginning with Palm Sunday and including the Triduum.",
      fr: "La semaine précédant Pâques, commençant par le Dimanche des Rameaux et incluant le Triduum.",
      es: "La semana que precede a la Pascua, comenzando con el Domingo de Ramos e incluyendo el Triduo.",
      de: "Die Woche vor Ostern, beginnend mit dem Palmsonntag und einschließlich des Triduums.",
    },
  },
  {
    id: "homily",
    term: {
      en: "Homily",
      fr: "Homélie",
      es: "Homilía",
      de: "Predigt",
    },
    definition: {
      en: "A preaching by a priest or deacon at Mass, explaining the Scripture readings and their application to life.",
      fr: "Une prédication par un prêtre ou un diacre à la messe, expliquant les lectures de l'Écriture et leur application à la vie.",
      es: "Una predicación de un sacerdote o diácono en la Misa, explicando las lecturas de la Escritura y su aplicación a la vida.",
      de: "Eine Predigt eines Priesters oder Diakons bei der Messe, die die Schriftlesungen und ihre Anwendung auf das Leben erklärt.",
    },
  },
  {
    id: "hope",
    term: {
      en: "Hope",
      fr: "Espérance",
      es: "Esperanza",
      de: "Hoffnung",
    },
    definition: {
      en: "The theological virtue by which we desire the kingdom of heaven and eternal life as our happiness, placing our trust in Christ's promises.",
      fr: "La vertu théologale par laquelle nous désirons le royaume des cieux et la vie éternelle comme notre bonheur, mettant notre confiance dans les promesses du Christ.",
      es: "La virtud teologal por la cual deseamos el reino de los cielos y la vida eterna como nuestra felicidad, poniendo nuestra confianza en las promesas de Cristo.",
      de: "Die theologische Tugend, durch die wir das Himmelreich und das ewige Leben als unser Glück ersehnen und unser Vertrauen auf die Verheißungen Christi setzen.",
    },
  },
  {
    id: "hosanna",
    term: {
      en: "Hosanna",
      fr: "Hosanna",
      es: "Hosanna",
      de: "Hosanna",
    },
    definition: {
      en: "A Hebrew exclamation meaning 'Save us, we pray,' used as a shout of praise.",
      fr: "Une exclamation hébraïque signifiant 'Sauve-nous, nous t'en prions', utilisée comme un cri de louange.",
      es: "Una exclamación hebrea que significa 'Sálvanos, te rogamos', utilizada como un grito de alabanza.",
      de: "Ein hebräischer Ausruf, der 'Hilf doch' oder 'Rette uns' bedeutet, verwendet als Lobruf.",
    },
  },
  {
    id: "host",
    term: {
      en: "Host",
      fr: "Hostie",
      es: "Hostia",
      de: "Hostie",
    },
    definition: {
      en: "The round wafer of unleavened bread used at Mass that becomes the Body of Christ.",
      fr: "L'hostie ronde de pain sans levain utilisée à la messe qui devient le Corps du Christ.",
      es: "La oblea redonda de pan ácimo utilizada en la Misa que se convierte en el Cuerpo de Cristo.",
      de: "Die runde Oblate aus ungesäuertem Brot, die bei der Messe verwendet wird und zum Leib Christi wird.",
    },
  },
  {
    id: "humility",
    term: {
      en: "Humility",
      fr: "Humilité",
      es: "Humildad",
      de: "Demut",
    },
    definition: {
      en: "The virtue by which a Christian acknowledges that God is the author of all good and avoids pride.",
      fr: "La vertu par laquelle un chrétien reconnaît que Dieu est l'auteur de tout bien et évite l'orgueil.",
      es: "La virtud por la cual un cristiano reconoce que Dios es el autor de todo bien y evita la soberbia.",
      de: "Die Tugend, durch die ein Christ anerkennt, dass Gott der Urheber alles Guten ist, und Stolz vermeidet.",
    },
  },
  {
    id: "icon",
    term: { en: "Icon", fr: "Icône", es: "Icono", de: "Ikone" },
    definition: {
      en: "A religious painting of Christ, Mary, or the saints, honored especially in Eastern Churches as a 'window to heaven.'",
      fr: "Une peinture religieuse du Christ, de Marie ou des saints, honorée particulièrement dans les Églises orientales comme une 'fenêtre sur le ciel'.",
      es: "Una pintura religiosa de Cristo, María o los santos, honrada especialmente en las Iglesias Orientales como una 'ventana al cielo'.",
      de: "Ein religiöses Gemälde von Christus, Maria oder den Heiligen, das besonders in den Ostkirchen als 'Fenster zum Himmel' verehrt wird.",
    },
  },
  {
    id: "iconoclasm",
    term: {
      en: "Iconoclasm",
      fr: "Iconoclasme",
      es: "Iconoclasia",
      de: "Ikonoklasmus",
    },
    definition: {
      en: "The rejection or destruction of religious images as heretical; condemned by the Church.",
      fr: "Le rejet ou la destruction d'images religieuses comme hérétiques ; condamné par l'Église.",
      es: "El rechazo o destrucción de imágenes religiosas como heréticas; condenado por la Iglesia.",
      de: "Die Ablehnung oder Zerstörung religiöser Bilder als ketzerisch; von der Kirche verurteilt.",
    },
  },
  {
    id: "idolatry",
    term: {
      en: "Idolatry",
      fr: "Idolâtrie",
      es: "Idolatría",
      de: "Götzendienst",
    },
    definition: {
      en: "The worship of a false god or the treating of a created thing as if it were God.",
      fr: "Le culte d'un faux dieu ou le traitement d'une chose créée comme si elle était Dieu.",
      es: "La adoración de un dios falso o el tratar una cosa creada como si fuera Dios.",
      de: "Die Anbetung eines falschen Gottes oder die Behandlung eines geschaffenen Dinges, als wäre es Gott.",
    },
  },
  {
    id: "immanence",
    term: {
      en: "Immanence",
      fr: "Immanence",
      es: "Inmanencia",
      de: "Immanenz",
    },
    definition: {
      en: "The idea that God is present in and operative within the created world, distinct from transcendence.",
      fr: "L'idée que Dieu est présent et opérant au sein du monde créé, distinct de la transcendance.",
      es: "La idea de que Dios está presente y operativo dentro del mundo creado, distinto de la trascendencia.",
      de: "Die Vorstellung, dass Gott in der geschaffenen Welt anwesend und wirksam ist, im Unterschied zur Transzendenz.",
    },
  },
  {
    id: "imprimatur",
    term: {
      en: "Imprimatur",
      fr: "Imprimatur",
      es: "Imprimatur",
      de: "Imprimatur",
    },
    definition: {
      en: "Latin for 'let it be printed.' Official Church approval for the publication of a book on faith or morals.",
      fr: "Latin pour 'qu'il soit imprimé'. Approbation officielle de l'Église pour la publication d'un livre sur la foi ou les mœurs.",
      es: "Latín para 'que se imprima'. Aprobación oficial de la Iglesia para la publicación de un libro sobre fe o moral.",
      de: "Lateinisch für 'es werde gedruckt'. Offizielle kirchliche Genehmigung für die Veröffentlichung eines Buches über Glauben oder Sitten.",
    },
  },
  {
    id: "incense",
    term: {
      en: "Incense",
      fr: "Encens",
      es: "Incienso",
      de: "Weihrauch",
    },
    definition: {
      en: "A substance that produces a fragrant smoke when burned, used in worship to symbolize prayer rising to God.",
      fr: "Une substance qui produit une fumée parfumée lorsqu'elle est brûlée, utilisée dans le culte pour symboliser la prière montant vers Dieu.",
      es: "Una sustancia que produce un humo fragante al quemarse, utilizada en el culto para simbolizar la oración que sube a Dios.",
      de: "Eine Substanz, die beim Verbrennen einen duftenden Rauch erzeugt und im Gottesdienst verwendet wird, um das zu Gott aufsteigende Gebet zu symbolisieren.",
    },
  },
  {
    id: "indulgence",
    term: {
      en: "Indulgence",
      fr: "Indulgence",
      es: "Indulgencia",
      de: "Ablass",
    },
    definition: {
      en: "The remission before God of the temporal punishment due to sins whose guilt has already been forgiven.",
      fr: "La rémission devant Dieu de la peine temporelle due pour les péchés dont la culpabilité a déjà été pardonnée.",
      es: "La remisión ante Dios de la pena temporal debida por los pecados cuya culpa ya ha sido perdonada.",
      de: "Der Nachlass zeitlicher Strafen vor Gott für Sünden, deren Schuld bereits vergeben ist.",
    },
  },
  {
    id: "inerrancy",
    term: {
      en: "Inerrancy",
      fr: "Inerrance",
      es: "Inerrancia",
      de: "Irrtumslosigkeit",
    },
    definition: {
      en: "The doctrine that the Bible is without error or fault in all its teaching.",
      fr: "La doctrine selon laquelle la Bible est sans erreur ni faute dans tout son enseignement.",
      es: "La doctrina de que la Biblia no tiene error ni falta en toda su enseñanza.",
      de: "Die Lehre, dass die Bibel in ihrer gesamten Lehre ohne Irrtum oder Fehler ist.",
    },
  },
  {
    id: "infused-virtues",
    term: {
      en: "Infused Virtues",
      fr: "Vertus infuses",
      es: "Virtudes Infusas",
      de: "Eingegossene Tugenden",
    },
    definition: {
      en: "Virtues (Faith, Hope, Charity) placed directly into the soul by God, rather than acquired by human effort.",
      fr: "Vertus (Foi, Espérance, Charité) placées directement dans l'âme par Dieu, plutôt qu'acquises par l'effort humain.",
      es: "Virtudes (Fe, Esperanza, Caridad) colocadas directamente en el alma por Dios, en lugar de ser adquiridas por el esfuerzo humano.",
      de: "Tugenden (Glaube, Hoffnung, Liebe), die von Gott direkt in die Seele eingegossen werden, anstatt durch menschliche Anstrengung erworben zu werden.",
    },
  },
  {
    id: "initiation-sacraments",
    term: {
      en: "Initiation (Sacraments of)",
      fr: "Initiation (Sacrements d')",
      es: "Iniciación (Sacramentos de)",
      de: "Initiation (Sakramente der)",
    },
    definition: {
      en: "The three sacraments that bring a person into full membership in the Church: Baptism, Confirmation, and Eucharist.",
      fr: "Les trois sacrements qui font entrer une personne en pleine appartenance à l'Église : Baptême, Confirmation et Eucharistie.",
      es: "Los tres sacramentos que incorporan a una persona como miembro pleno de la Iglesia: Bautismo, Confirmación y Eucaristía.",
      de: "Die drei Sakramente, die eine Person in die volle Mitgliedschaft der Kirche einführen: Taufe, Firmung und Eucharistie.",
    },
  },
  {
    id: "inri",
    term: { en: "INRI", fr: "INRI", es: "INRI", de: "INRI" },
    definition: {
      en: "The acronym for the Latin inscription on the Cross: Iesus Nazarenus, Rex Iudaeorum (Jesus of Nazareth, King of the Jews).",
      fr: "L'acronyme de l'inscription latine sur la Croix : Iesus Nazarenus, Rex Iudaeorum (Jésus de Nazareth, Roi des Juifs).",
      es: "El acrónimo de la inscripción latina en la Cruz: Iesus Nazarenus, Rex Iudaeorum (Jesús de Nazaret, Rey de los Judíos).",
      de: "Das Akronym für die lateinische Inschrift am Kreuz: Iesus Nazarenus, Rex Iudaeorum (Jesus von Nazareth, König der Juden).",
    },
  },
  {
    id: "inspiration-biblical",
    term: {
      en: "Inspiration (Biblical)",
      fr: "Inspiration (Biblique)",
      es: "Inspiración (Bíblica)",
      de: "Inspiration (Biblische)",
    },
    definition: {
      en: "The guidance of the Holy Spirit that enabled the human authors to record without error what God wanted written.",
      fr: "La guidance du Saint-Esprit qui a permis aux auteurs humains d'enregistrer sans erreur ce que Dieu voulait voir écrit.",
      es: "La guía del Espíritu Santo que permitió a los autores humanos registrar sin error lo que Dios quería que se escribiera.",
      de: "Die Führung des Heiligen Geistes, die es den menschlichen Autoren ermöglichte, ohne Irrtum aufzuzeichnen, was Gott geschrieben haben wollte.",
    },
  },
  {
    id: "intercession",
    term: {
      en: "Intercession",
      fr: "Intercession",
      es: "Intercesión",
      de: "Fürbitte",
    },
    definition: {
      en: "A form of prayer on behalf of others. We ask saints to intercede for us, as we pray for each other.",
      fr: "Une forme de prière en faveur des autres. Nous demandons aux saints d'intercéder pour nous, tout comme nous prions les uns pour les autres.",
      es: "Una forma de oración en favor de otros. Pedimos a los santos que intercedan por nosotros, así como oramos unos por otros.",
      de: "Eine Form des Gebets für andere. Wir bitten die Heiligen, für uns Fürsprache einzulegen, so wie wir füreinander beten.",
    },
  },
  {
    id: "jesus-prayer",
    term: {
      en: "Jesus Prayer",
      fr: "Prière de Jésus",
      es: "Oración de Jesús",
      de: "Jesusgebet",
    },
    definition: {
      en: "A short Eastern Christian prayer: 'Lord Jesus Christ, Son of God, have mercy on me, a sinner.'",
      fr: "Une courte prière chrétienne orientale : 'Seigneur Jésus-Christ, Fils de Dieu, aie pitié de moi, pécheur.'",
      es: "Una breve oración cristiana oriental: 'Señor Jesucristo, Hijo de Dios, ten piedad de mí, pecador.'",
      de: "Ein kurzes ostkirchliches Gebet: 'Herr Jesus Christus, Sohn Gottes, erbarme dich meiner, eines Sünders.'",
    },
  },
  {
    id: "joseph",
    term: {
      en: "Joseph (Saint)",
      fr: "Joseph (Saint)",
      es: "José (San)",
      de: "Josef (Heiliger)",
    },
    definition: {
      en: "The husband of the Virgin Mary and the foster father of Jesus. Patron of the Universal Church.",
      fr: "L'époux de la Vierge Marie et le père nourricier de Jésus. Patron de l'Église universelle.",
      es: "El esposo de la Virgen María y padre adoptivo de Jesús. Patrono de la Iglesia Universal.",
      de: "Der Ehemann der Jungfrau Maria und der Pflegevater Jesu. Schutzpatron der Weltkirche.",
    },
  },
  {
    id: "judgment",
    term: {
      en: "Judgment",
      fr: "Jugement",
      es: "Juicio",
      de: "Gericht",
    },
    definition: {
      en: "The eternal retribution received by each soul at the moment of death (Particular Judgment) and at the end of time (General Judgment).",
      fr: "La rétribution éternelle reçue par chaque âme au moment de la mort (Jugement Particulier) et à la fin des temps (Jugement Général).",
      es: "La retribución eterna recibida por cada alma en el momento de la muerte (Juicio Particular) y al final de los tiempos (Juicio General).",
      de: "Die ewige Vergeltung, die jede Seele im Moment des Todes (Besonderes Gericht) und am Ende der Zeiten (Allgemeines Gericht) empfängt.",
    },
  },

  {
    id: "kingdom-of-god",
    term: {
      en: "Kingdom of God",
      fr: "Royaume de Dieu",
      es: "Reino de Dios",
      de: "Reich Gottes",
    },
    definition: {
      en: "The reign or rule of God over the hearts of people and, consequently, the development of a new social order based on unconditional love.",
      fr: "Le règne ou la règle de Dieu sur les cœurs des gens et, par conséquent, le développement d'un nouvel ordre social basé sur l'amour inconditionnel.",
      es: "El reinado o gobierno de Dios sobre los corazones de las personas y, en consecuencia, el desarrollo de un nuevo orden social basado en el amor incondicional.",
      de: "Die Herrschaft Gottes über die Herzen der Menschen und folglich die Entwicklung einer neuen sozialen Ordnung, die auf bedingungsloser Liebe basiert.",
    },
  },
  {
    id: "kyrie",
    term: {
      en: "Kyrie Eleison",
      fr: "Kyrie Eleison",
      es: "Kyrie Eleison",
      de: "Kyrie Eleison",
    },
    definition: {
      en: "Greek for 'Lord, have mercy.' A short prayer of petition used in the Mass and other liturgies.",
      fr: "Grec pour 'Seigneur, prends pitié'. Une courte prière de demande utilisée à la messe et dans d'autres liturgies.",
      es: "Griego para 'Señor, ten piedad'. Una breve oración de petición utilizada en la Misa y otras liturgias.",
      de: "Griechisch für 'Herr, erbarme dich'. Ein kurzes Bittgebet, das in der Messe und anderen Liturgien verwendet wird.",
    },
  },
  {
    id: "laity",
    term: {
      en: "Laity",
      fr: "Laïcs",
      es: "Laicos",
      de: "Laien",
    },
    definition: {
      en: "All the faithful except those in Holy Orders and those in the state of religious life approved by the Church.",
      fr: "Tous les fidèles, à l'exception de ceux qui ont reçu les Ordres sacrés et de ceux qui sont dans l'état de vie religieuse approuvé par l'Église.",
      es: "Todos los fieles excepto los que han recibido el Orden Sagrado y los que están en estado de vida religiosa aprobado por la Iglesia.",
      de: "Alle Gläubigen außer denen, die die Weihen empfangen haben, und denen, die im von der Kirche anerkannten Ordensstand leben.",
    },
  },
  {
    id: "last-judgment",
    term: {
      en: "Last Judgment",
      fr: "Jugement Dernier",
      es: "Juicio Final",
      de: "Jüngstes Gericht",
    },
    definition: {
      en: "The moment at the end of time when Christ will return to judge the living and the dead.",
      fr: "Le moment à la fin des temps où le Christ reviendra pour juger les vivants et les morts.",
      es: "El momento al final de los tiempos cuando Cristo volverá para juzgar a vivos y muertos.",
      de: "Der Augenblick am Ende der Zeiten, in dem Christus wiederkommen wird, um die Lebenden und die Toten zu richten.",
    },
  },
  {
    id: "last-rites",
    term: {
      en: "Last Rites",
      fr: "Derniers Sacrements",
      es: "Últimos Ritos",
      de: "Sterbesakramente",
    },
    definition: {
      en: "The rites administered to a dying person, typically including Confession, Anointing of the Sick, and Viaticum (Communion).",
      fr: "Les rites administrés à une personne mourante, comprenant généralement la Confession, l'Onction des malades et le Viatique (Communion).",
      es: "Los ritos administrados a una persona moribunda, que típicamente incluyen Confesión, Unción de los Enfermos y Viático (Comunión).",
      de: "Die Riten, die einem Sterbenden gespendet werden, typischerweise bestehend aus Beichte, Krankensalbung und Wegzehrung (Kommunion).",
    },
  },
  {
    id: "last-supper",
    term: {
      en: "Last Supper",
      fr: "La Cène",
      es: "Última Cena",
      de: "Letztes Abendmahl",
    },
    definition: {
      en: "The final meal Jesus shared with his Apostles before his crucifixion, during which he instituted the Eucharist.",
      fr: "Le dernier repas que Jésus a partagé avec ses Apôtres avant sa crucifixion, au cours duquel il a institué l'Eucharistie.",
      es: "La última comida que Jesús compartió con sus Apóstoles antes de su crucifixión, durante la cual instituyó la Eucaristía.",
      de: "Das letzte Mahl, das Jesus vor seiner Kreuzigung mit seinen Aposteln teilte und bei dem er die Eucharistie einsetzte.",
    },
  },
  {
    id: "lectio-divina",
    term: {
      en: "Lectio Divina",
      fr: "Lectio Divina",
      es: "Lectio Divina",
      de: "Lectio Divina",
    },
    definition: {
      en: "Latin for 'Divine Reading.' A traditional Benedictine practice of scriptural reading, meditation and prayer intended to promote communion with God.",
      fr: "Latin pour 'Lecture Divine'. Une pratique bénédictine traditionnelle de lecture biblique, méditation et prière destinée à promouvoir la communion avec Dieu.",
      es: "Latín para 'Lectura Divina'. Una práctica benedictina tradicional de lectura bíblica, meditación y oración destinada a promover la comunión con Dios.",
      de: "Lateinisch für 'Göttliche Lesung'. Eine traditionelle benediktinische Praxis der Schriftlesung, Meditation und des Gebets zur Förderung der Gemeinschaft mit Gott.",
    },
  },
  {
    id: "lectionary",
    term: {
      en: "Lectionary",
      fr: "Lectionnaire",
      es: "Leccionario",
      de: "Lektionar",
    },
    definition: {
      en: "The book containing the biblical readings arranged for the celebration of Mass and other sacraments.",
      fr: "Le livre contenant les lectures bibliques organisées pour la célébration de la messe et d'autres sacrements.",
      es: "El libro que contiene las lecturas bíblicas dispuestas para la celebración de la Misa y otros sacramentos.",
      de: "Das Buch, das die für die Feier der Messe und anderer Sakramente angeordneten biblischen Lesungen enthält.",
    },
  },
  {
    id: "lent",
    term: {
      en: "Lent",
      fr: "Carême",
      es: "Cuaresma",
      de: "Fastenzeit",
    },
    definition: {
      en: "The forty-day liturgical season of fasting, prayer, and almsgiving in preparation for Easter.",
      fr: "La saison liturgique de quarante jours de jeûne, de prière et d'aumône en préparation à Pâques.",
      es: "El tiempo litúrgico de cuarenta días de ayuno, oración y limosna en preparación para la Pascua.",
      de: "Die vierzigtägige liturgische Zeit des Fastens, Betens und Almosengebens zur Vorbereitung auf Ostern.",
    },
  },
  {
    id: "litany",
    term: {
      en: "Litany",
      fr: "Litanie",
      es: "Letanía",
      de: "Litanei",
    },
    definition: {
      en: "A form of prayer consisting of a series of petitions or invocations with a fixed response (e.g., 'Pray for us').",
      fr: "Une forme de prière consistant en une série de pétitions ou d'invocations avec une réponse fixe (par ex. 'Priez pour nous').",
      es: "Una forma de oración que consiste en una serie de peticiones o invocaciones con una respuesta fija (por ejemplo, 'Ruega por nosotros').",
      de: "Eine Gebetsform, die aus einer Reihe von Bitten oder Anrufungen mit einer festen Antwort besteht (z.B. 'Bitte für uns').",
    },
  },
  {
    id: "liturgy-hours",
    term: {
      en: "Liturgy of the Hours",
      fr: "Liturgie des Heures",
      es: "Liturgia de las Horas",
      de: "Stundengebet",
    },
    definition: {
      en: "The public daily prayer of the Church, comprised mainly of the Psalms. Also called the Divine Office.",
      fr: "La prière publique quotidienne de l'Église, composée principalement des Psaumes. Aussi appelée l'Office Divin.",
      es: "La oración pública diaria de la Iglesia, compuesta principalmente por los Salmos. También llamada Oficio Divino.",
      de: "Das öffentliche tägliche Gebet der Kirche, das hauptsächlich aus den Psalmen besteht. Auch Stundengebet oder Offizium genannt.",
    },
  },
  {
    id: "liturgy-word",
    term: {
      en: "Liturgy of the Word",
      fr: "Liturgie de la Parole",
      es: "Liturgia de la Palabra",
      de: "Wortgottesdienst",
    },
    definition: {
      en: "The first major part of the Mass, centering on the proclamation of Scripture and the homily.",
      fr: "La première partie majeure de la messe, centrée sur la proclamation de l'Écriture et l'homélie.",
      es: "La primera parte principal de la Misa, centrada en la proclamación de la Escritura y la homilía.",
      de: "Der erste Hauptteil der Messe, in dessen Mittelpunkt die Verkündigung der Schrift und die Predigt stehen.",
    },
  },
  {
    id: "logos",
    term: {
      en: "Logos",
      fr: "Logos",
      es: "Logos",
      de: "Logos",
    },
    definition: {
      en: "Greek for 'Word.' Title used by St. John to describe Jesus Christ as the eternal Word of the Father.",
      fr: "Grec pour 'Verbe' ou 'Parole'. Titre utilisé par Saint Jean pour décrire Jésus-Christ comme le Verbe éternel du Père.",
      es: "Griego para 'Verbo' o 'Palabra'. Título utilizado por San Juan para describir a Jesucristo como el Verbo eterno del Padre.",
      de: "Griechisch für 'Wort'. Titel, den der heilige Johannes verwendet, um Jesus Christus als das ewige Wort des Vaters zu beschreiben.",
    },
  },
  {
    id: "lords-prayer",
    term: {
      en: "Lord's Prayer",
      fr: "Notre Père",
      es: "Padrenuestro",
      de: "Vaterunser",
    },
    definition: {
      en: "The prayer Jesus taught his disciples (Our Father), summarizing the Gospel.",
      fr: "La prière que Jésus a enseignée à ses disciples (Notre Père), résumant l'Évangile.",
      es: "La oración que Jesús enseñó a sus discípulos (Padrenuestro), resumiendo el Evangelio.",
      de: "Das Gebet, das Jesus seine Jünger lehrte (Vaterunser), das Evangelium zusammenfassend.",
    },
  },
  {
    id: "lourdes",
    term: {
      en: "Lourdes",
      fr: "Lourdes",
      es: "Lourdes",
      de: "Lourdes",
    },
    definition: {
      en: "A town in France where the Virgin Mary appeared to St. Bernadette Soubirous in 1858; a major pilgrimage site for healing.",
      fr: "Une ville en France où la Vierge Marie est apparue à Sainte Bernadette Soubirous en 1858 ; un lieu de pèlerinage majeur pour la guérison.",
      es: "Una ciudad en Francia donde la Virgen María se apareció a Santa Bernadette Soubirous en 1858; un importante lugar de peregrinación para la sanación.",
      de: "Eine Stadt in Frankreich, in der die Jungfrau Maria 1858 der heiligen Bernadette Soubirous erschien; ein bedeutender Wallfahrtsort für Heilungen.",
    },
  },
  {
    id: "lucifer",
    term: {
      en: "Lucifer",
      fr: "Lucifer",
      es: "Lucifer",
      de: "Luzifer",
    },
    definition: {
      en: "A name traditionally given to Satan before his fall, meaning 'Light Bearer.'",
      fr: "Un nom traditionnellement donné à Satan avant sa chute, signifiant 'Porteur de Lumière'.",
      es: "Un nombre dado tradicionalmente a Satanás antes de su caída, que significa 'Portador de Luz'.",
      de: "Ein Name, der Satan traditionell vor seinem Fall gegeben wurde und 'Lichtträger' bedeutet.",
    },
  },
  {
    id: "madonna",
    term: {
      en: "Madonna",
      fr: "Madone",
      es: "Madonna",
      de: "Madonna",
    },
    definition: {
      en: "Italian for 'My Lady.' A title for the Virgin Mary, usually referring to works of art depicting her.",
      fr: "Italien pour 'Ma Dame'. Un titre pour la Vierge Marie, faisant généralement référence aux œuvres d'art la représentant.",
      es: "Italiano para 'Mi Señora'. Un título para la Virgen María, generalmente referido a obras de arte que la representan.",
      de: "Italienisch für 'Meine Herrin'. Ein Titel für die Jungfrau Maria, der sich meist auf Kunstwerke bezieht, die sie darstellen.",
    },
  },
  {
    id: "magi",
    term: {
      en: "Magi",
      fr: "Mages",
      es: "Reyes Magos",
      de: "Heilige Drei Könige",
    },
    definition: {
      en: "The 'wise men' from the East who brought gifts to the infant Jesus (Epiphany).",
      fr: "Les 'sages' venus d'Orient qui ont apporté des cadeaux à l'enfant Jésus (Épiphanie).",
      es: "Los 'sabios' de Oriente que trajeron regalos al niño Jesús (Epifanía).",
      de: "Die 'Weisen' aus dem Morgenland, die dem Jesuskind Geschenke brachten (Erscheinung des Herrn).",
    },
  },
  {
    id: "magnificat",
    term: {
      en: "Magnificat",
      fr: "Magnificat",
      es: "Magníficat",
      de: "Magnificat",
    },
    definition: {
      en: "The hymn of praise by the Virgin Mary in Luke 1:46-55: 'My soul magnifies the Lord.'",
      fr: "L'hymne de louange de la Vierge Marie dans Luc 1:46-55 : 'Mon âme exalte le Seigneur'.",
      es: "El himno de alabanza de la Virgen María en Lucas 1:46-55: 'Proclama mi alma la grandeza del Señor'.",
      de: "Der Lobgesang der Jungfrau Maria in Lukas 1,46-55: 'Meine Seele preist die Größe des Herrn'.",
    },
  },
  {
    id: "marks-church",
    term: {
      en: "Marks of the Church",
      fr: "Notes de l'Église",
      es: "Notas de la Iglesia",
      de: "Kennzeichen der Kirche",
    },
    definition: {
      en: "The four essential characteristics of the Church: One, Holy, Catholic, and Apostolic.",
      fr: "Les quatre caractéristiques essentielles de l'Église : Une, Sainte, Catholique et Apostolique.",
      es: "Las cuatro características esenciales de la Iglesia: Una, Santa, Católica y Apostólica.",
      de: "Die vier wesentlichen Merkmale der Kirche: Eine, Heilige, Katholische und Apostolische.",
    },
  },
  {
    id: "marriage",
    term: {
      en: "Marriage",
      fr: "Mariage",
      es: "Matrimonio",
      de: "Ehe",
    },
    definition: {
      en: "The covenant by which a man and a woman establish between themselves a partnership of the whole of life.",
      fr: "L'alliance par laquelle un homme et une femme constituent entre eux une communauté de toute la vie.",
      es: "La alianza por la cual un hombre y una mujer establecen entre sí un consorcio de toda la vida.",
      de: "Der Bund, durch den ein Mann und eine Frau eine Gemeinschaft für das ganze Leben begründen.",
    },
  },
  {
    id: "martyr",
    term: {
      en: "Martyr",
      fr: "Martyr",
      es: "Mártir",
      de: "Märtyrer",
    },
    definition: {
      en: "Greek for 'witness.' Someone who voluntarily suffers death as the penalty of witnessing to and refusing to renounce their faith.",
      fr: "Grec pour 'témoin'. Quelqu'un qui subit volontairement la mort comme peine pour avoir témoigné de sa foi et refusé de la renier.",
      es: "Griego para 'testigo'. Alguien que sufre voluntariamente la muerte como pena por dar testimonio de su fe y negarse a renunciar a ella.",
      de: "Griechisch für 'Zeuge'. Jemand, der freiwillig den Tod erleidet als Strafe dafür, dass er seinen Glauben bezeugt und nicht verleugnet.",
    },
  },
  {
    id: "mary",
    term: { en: "Mary", fr: "Marie", es: "María", de: "Maria" },
    definition: {
      en: "The Mother of Jesus, the Mother of God (Theotokos), conceived without sin.",
      fr: "La Mère de Jésus, la Mère de Dieu (Théotokos), conçue sans péché.",
      es: "La Madre de Jesús, la Madre de Dios (Theotokos), concebida sin pecado.",
      de: "Die Mutter Jesu, die Mutter Gottes (Theotokos), ohne Sünde empfangen.",
    },
  },
  {
    id: "mass",
    term: { en: "Mass", fr: "Messe", es: "Misa", de: "Messe" },
    definition: {
      en: "The central act of worship in the Catholic Church, consisting of the Liturgy of the Word and the Liturgy of the Eucharist.",
      fr: "L'acte central du culte dans l'Église catholique, composé de la Liturgie de la Parole et de la Liturgie de l'Eucharistie.",
      es: "El acto central de culto en la Iglesia Católica, que consiste en la Liturgia de la Palabra y la Liturgia de la Eucaristía.",
      de: "Der zentrale Akt des Gottesdienstes in der katholischen Kirche, bestehend aus dem Wortgottesdienst und der Eucharistiefeier.",
    },
  },
  {
    id: "materialism",
    term: {
      en: "Materialism",
      fr: "Matérialisme",
      es: "Materialismo",
      de: "Materialismus",
    },
    definition: {
      en: "A philosophy that considers matter the only reality, denying the existence of God and the soul.",
      fr: "Une philosophie qui considère la matière comme la seule réalité, niant l'existence de Dieu et de l'âme.",
      es: "Una filosofía que considera la materia como la única realidad, negando la existencia de Dios y del alma.",
      de: "Eine Philosophie, die Materie als die einzige Realität betrachtet und die Existenz Gottes und der Seele leugnet.",
    },
  },
  {
    id: "mediator",
    term: {
      en: "Mediator",
      fr: "Médiateur",
      es: "Mediador",
      de: "Mittler",
    },
    definition: {
      en: "One who links or reconciles separate parties. Christ is the one perfect Mediator between God and humanity.",
      fr: "Celui qui lie ou réconcilie des parties séparées. Le Christ est l'unique Médiateur parfait entre Dieu et l'humanité.",
      es: "Aquel que une o reconcilia partes separadas. Cristo es el único Mediador perfecto entre Dios y la humanidad.",
      de: "Einer, der getrennte Parteien verbindet oder versöhnt. Christus ist der einzige vollkommene Mittler zwischen Gott und der Menschheit.",
    },
  },
  {
    id: "meditation",
    term: {
      en: "Meditation",
      fr: "Méditation",
      es: "Meditación",
      de: "Meditation",
    },
    definition: {
      en: "A form of mental prayer involving reflection on a religious theme or text to deepen one's faith and love.",
      fr: "Une forme de prière mentale impliquant la réflexion sur un thème ou un texte religieux pour approfondir sa foi et son amour.",
      es: "Una forma de oración mental que implica la reflexión sobre un tema o texto religioso para profundizar la fe y el amor.",
      de: "Eine Form des inneren Gebets, die das Nachdenken über ein religiöses Thema oder einen Text beinhaltet, um Glauben und Liebe zu vertiefen.",
    },
  },
  {
    id: "melchizedek",
    term: {
      en: "Melchizedek",
      fr: "Melchisédech",
      es: "Melquisedec",
      de: "Melchisedek",
    },
    definition: {
      en: "A priest-king in the Old Testament who offered bread and wine; a prefigurement (type) of Christ.",
      fr: "Un prêtre-roi dans l'Ancien Testament qui a offert du pain et du vin ; une préfiguration (type) du Christ.",
      es: "Un sacerdote-rey en el Antiguo Testamento que ofreció pan y vino; una prefiguración (tipo) de Cristo.",
      de: "Ein Priesterkönig im Alten Testament, der Brot und Wein opferte; ein Vorbild (Typus) für Christus.",
    },
  },
  {
    id: "mercy",
    term: {
      en: "Mercy",
      fr: "Miséricorde",
      es: "Misericordia",
      de: "Barmherzigkeit",
    },
    definition: {
      en: "The compassionate treatment of those in distress, especially when it is within one's power to punish or harm them.",
      fr: "Le traitement compatissant de ceux qui sont en détresse, surtout lorsqu'il est en son pouvoir de les punir ou de leur nuire.",
      es: "El trato compasivo hacia los afligidos, especialmente cuando está en el poder de uno castigarlos o dañarlos.",
      de: "Die mitfühlende Behandlung von Notleidenden, besonders wenn man die Macht hätte, sie zu bestrafen oder ihnen zu schaden.",
    },
  },
  {
    id: "messiah",
    term: {
      en: "Messiah",
      fr: "Messie",
      es: "Mesías",
      de: "Messias",
    },
    definition: {
      en: "Hebrew for 'Anointed One.' The promised deliverer of the Jewish nation prophesied in the Hebrew Bible.",
      fr: "Hébreu pour 'Oint'. Le libérateur promis de la nation juive prophétisé dans la Bible hébraïque.",
      es: "Hebreo para 'Ungido'. El libertador prometido de la nación judía profetizado en la Biblia hebrea.",
      de: "Hebräisch für 'Gesalbter'. Der im Alten Testament prophezeite Befreier des jüdischen Volkes.",
    },
  },
  {
    id: "metanoia",
    term: {
      en: "Metanoia",
      fr: "Métanoïa",
      es: "Metanoia",
      de: "Metanoia",
    },
    definition: {
      en: "Greek word meaning 'change of mind' or 'repentance.' A deep transformation of heart and mind toward God.",
      fr: "Mot grec signifiant 'changement d'esprit' ou 'repentir'. Une transformation profonde du cœur et de l'esprit vers Dieu.",
      es: "Palabra griega que significa 'cambio de mente' o 'arrepentimiento'. Una profunda transformación del corazón y la mente hacia Dios.",
      de: "Griechisches Wort für 'Sinnesänderung' oder 'Buße'. Eine tiefe Wandlung des Herzens und des Geistes hin zu Gott.",
    },
  },
  {
    id: "metropolitan",
    term: {
      en: "Metropolitan",
      fr: "Métropolitain",
      es: "Metropolitano",
      de: "Metropolit",
    },
    definition: {
      en: "An archbishop who presides over an ecclesiastical province, usually having authority over suffragan dioceses.",
      fr: "Un archevêque qui préside une province ecclésiastique, ayant généralement autorité sur les diocèses suffragants.",
      es: "Un arzobispo que preside una provincia eclesiástica, generalmente con autoridad sobre las diócesis sufragáneas.",
      de: "Ein Erzbischof, der einer Kirchenprovinz vorsteht und gewöhnlich Autorität über Suffragandiözesen hat.",
    },
  },
  {
    id: "miracle",
    term: {
      en: "Miracle",
      fr: "Miracle",
      es: "Milagro",
      de: "Wunder",
    },
    definition: {
      en: "A sign or wonder, such as a healing or the control of nature, which can only be attributed to divine power.",
      fr: "Un signe ou un prodige, tel qu'une guérison ou le contrôle de la nature, qui ne peut être attribué qu'à la puissance divine.",
      es: "Una señal o maravilla, como una curación o el control de la naturaleza, que solo puede atribuirse al poder divino.",
      de: "Ein Zeichen oder Wunder, wie eine Heilung oder die Beherrschung der Natur, das nur göttlicher Macht zugeschrieben werden kann.",
    },
  },
  {
    id: "missal",
    term: {
      en: "Missal",
      fr: "Missel",
      es: "Misal",
      de: "Messbuch",
    },
    definition: {
      en: "The liturgical book containing all the texts and rubrics needed for the celebration of the Mass.",
      fr: "Le livre liturgique contenant tous les textes et rubriques nécessaires à la célébration de la messe.",
      es: "El libro litúrgico que contiene todos los textos y rúbricas necesarios para la celebración de la Misa.",
      de: "Das liturgische Buch, das alle Texte und Rubriken enthält, die für die Feier der Messe benötigt werden.",
    },
  },
  {
    id: "mission",
    term: {
      en: "Mission",
      fr: "Mission",
      es: "Misión",
      de: "Mission",
    },
    definition: {
      en: "The sending forth of the Church to preach the Gospel and make disciples of all nations.",
      fr: "L'envoi de l'Église pour prêcher l'Évangile et faire des disciples de toutes les nations.",
      es: "El envío de la Iglesia a predicar el Evangelio y hacer discípulos de todas las naciones.",
      de: "Die Aussendung der Kirche, das Evangelium zu predigen und alle Völker zu Jüngern zu machen.",
    },
  },
  {
    id: "mitre",
    term: {
      en: "Mitre",
      fr: "Mitre",
      es: "Mitra",
      de: "Mitra",
    },
    definition: {
      en: "The tall, pointed ceremonial hat worn by bishops and abbots as a symbol of their office.",
      fr: "Le grand chapeau cérémoniel pointu porté par les évêques et les abbés comme symbole de leur fonction.",
      es: "El sombrero ceremonial alto y puntiagudo que usan los obispos y abades como símbolo de su cargo.",
      de: "Die hohe, spitze zeremonielle Kopfbedeckung, die von Bischöfen und Äbten als Symbol ihres Amtes getragen wird.",
    },
  },
  {
    id: "monastery",
    term: {
      en: "Monastery",
      fr: "Monastère",
      es: "Monasterio",
      de: "Kloster",
    },
    definition: {
      en: "A building or complex of buildings comprising the domestic quarters and workplace of monastics, monks or nuns.",
      fr: "Un bâtiment ou un complexe de bâtiments comprenant les quartiers domestiques et le lieu de travail des moines ou des moniales.",
      es: "Un edificio o complejo de edificios que comprende los cuartos domésticos y el lugar de trabajo de monjes o monjas.",
      de: "Ein Gebäude oder Gebäudekomplex, der die Wohnräume und den Arbeitsplatz von Mönchen oder Nonnen umfasst.",
    },
  },
  {
    id: "monk",
    term: { en: "Monk", fr: "Moine", es: "Monje", de: "Mönch" },
    definition: {
      en: "A male member of a religious community who lives under vows of poverty, chastity, and obedience, typically in a monastery.",
      fr: "Un membre masculin d'une communauté religieuse qui vit sous des vœux de pauvreté, de chasteté et d'obéissance, généralement dans un monastère.",
      es: "Un miembro masculino de una comunidad religiosa que vive bajo votos de pobreza, castidad y obediencia, típicamente en un monasterio.",
      de: "Ein männliches Mitglied einer religiösen Gemeinschaft, das unter den Gelübden der Armut, Keuschheit und des Gehorsams lebt, typischerweise in einem Kloster.",
    },
  },
  {
    id: "monotheism",
    term: {
      en: "Monotheism",
      fr: "Monothéisme",
      es: "Monoteísmo",
      de: "Monotheismus",
    },
    definition: {
      en: "The belief in only one God.",
      fr: "La croyance en un seul Dieu.",
      es: "La creencia en un solo Dios.",
      de: "Der Glaube an nur einen Gott.",
    },
  },
  {
    id: "monstrance",
    term: {
      en: "Monstrance",
      fr: "Ostensoir",
      es: "Custodia",
      de: "Monstranz",
    },
    definition: {
      en: "A sacred vessel used to display the consecrated Host during Eucharistic Adoration or processions.",
      fr: "Un vase sacré utilisé pour exposer l'Hostie consacrée pendant l'Adoration eucharistique ou les processions.",
      es: "Un vaso sagrado utilizado para exhibir la Hostia consagrada durante la Adoración Eucarística o las procesiones.",
      de: "Ein heiliges Gefäß, das verwendet wird, um die konsekrierte Hostie während der eucharistischen Anbetung oder bei Prozessionen zu zeigen.",
    },
  },
  {
    id: "moral-law",
    term: {
      en: "Moral Law",
      fr: "Loi morale",
      es: "Ley moral",
      de: "Sittengesetz",
    },
    definition: {
      en: "The law of God, which directs all of creation according to divine wisdom; the rule of conduct prescribed by reason.",
      fr: "La loi de Dieu, qui dirige toute la création selon la sagesse divine ; la règle de conduite prescrite par la raison.",
      es: "La ley de Dios, que dirige toda la creación según la sabiduría divina; la regla de conducta prescrita por la razón.",
      de: "Das Gesetz Gottes, das die gesamte Schöpfung gemäß der göttlichen Weisheit lenkt; die von der Vernunft vorgeschriebene Verhaltensregel.",
    },
  },
  {
    id: "mortal-sin",
    term: {
      en: "Mortal Sin",
      fr: "Péché mortel",
      es: "Pecado mortal",
      de: "Todsünde",
    },
    definition: {
      en: "A grave infraction of the law of God that destroys the divine life in the soul (sanctifying grace), requiring full knowledge and deliberate consent.",
      fr: "Une infraction grave à la loi de Dieu qui détruit la vie divine dans l'âme (grâce sanctifiante), nécessitant une pleine connaissance et un consentement délibéré.",
      es: "Una infracción grave de la ley de Dios que destruye la vida divina en el alma (gracia santificante), requiriendo pleno conocimiento y consentimiento deliberado.",
      de: "Ein schwerer Verstoß gegen das Gesetz Gottes, der das göttliche Leben in der Seele zerstört (heilig machende Gnade), was volles Wissen und bewusste Zustimmung erfordert.",
    },
  },
  {
    id: "mortification",
    term: {
      en: "Mortification",
      fr: "Mortification",
      es: "Mortificación",
      de: "Kasteiung",
    },
    definition: {
      en: "The practice of denying oneself legitimate pleasures to discipline the body and appetites, fostering spiritual growth.",
      fr: "La pratique consistant à se refuser des plaisirs légitimes pour discipliner le corps et les appétits, favorisant la croissance spirituelle.",
      es: "La práctica de negarse a uno mismo placeres legítimos para disciplinar el cuerpo y los apetitos, fomentando el crecimiento espiritual.",
      de: "Die Praxis, sich legitime Vergnügungen zu versagen, um den Körper und die Begierden zu disziplinieren und geistliches Wachstum zu fördern.",
    },
  },
  {
    id: "mystery",
    term: {
      en: "Mystery",
      fr: "Mystère",
      es: "Misterio",
      de: "Geheimnis",
    },
    definition: {
      en: "A divinely revealed truth whose very possibility cannot be rationally conceived before it is revealed and, after revelation, cannot be fully understood.",
      fr: "Une vérité divinement révélée dont la possibilité même ne peut être conçue rationnellement avant d'être révélée et, après révélation, ne peut être pleinement comprise.",
      es: "Una verdad divinamente revelada cuya posibilidad misma no puede ser concebida racionalmente antes de ser revelada y, después de la revelación, no puede ser plenamente comprendida.",
      de: "Eine göttlich offenbarte Wahrheit, deren Möglichkeit rational nicht erfasst werden kann, bevor sie offenbart ist, und die nach der Offenbarung nicht vollständig verstanden werden kann.",
    },
  },
  {
    id: "mystical-body",
    term: {
      en: "Mystical Body of Christ",
      fr: "Corps mystique du Christ",
      es: "Cuerpo Místico de Cristo",
      de: "Mystischer Leib Christi",
    },
    definition: {
      en: "The Church, united with Christ as its Head. All believers are members of this body.",
      fr: "L'Église, unie au Christ comme sa Tête. Tous les croyants sont membres de ce corps.",
      es: "La Iglesia, unida a Cristo como su Cabeza. Todos los creyentes son miembros de este cuerpo.",
      de: "Die Kirche, vereint mit Christus als ihrem Haupt. Alle Gläubigen sind Glieder dieses Leibes.",
    },
  },

  {
    id: "name-of-jesus",
    term: {
      en: "Name of Jesus",
      fr: "Nom de Jésus",
      es: "Nombre de Jesús",
      de: "Namen Jesu",
    },
    definition: {
      en: "The holy name which signifies 'God saves.' It is the name that possesses the power to save and is the object of Christian prayer.",
      fr: "Le saint nom qui signifie 'Dieu sauve'. C'est le nom qui possède le pouvoir de sauver et qui est l'objet de la prière chrétienne.",
      es: "El santo nombre que significa 'Dios salva'. Es el nombre que posee el poder de salvar y es el objeto de la oración cristiana.",
      de: "Der heilige Name, der 'Gott rettet' bedeutet. Es ist der Name, der die Kraft hat zu retten und Gegenstand des christlichen Gebets ist.",
    },
  },
  {
    id: "natural-law",
    term: {
      en: "Natural Law",
      fr: "Loi naturelle",
      es: "Ley Natural",
      de: "Naturrecht",
    },
    definition: {
      en: "The universal moral law inscribed by God on the human heart, knowable by human reason alone.",
      fr: "La loi morale universelle inscrite par Dieu dans le cœur humain, connaissable par la seule raison humaine.",
      es: "La ley moral universal inscrita por Dios en el corazón humano, conocible solo por la razón humana.",
      de: "Das universelle Sittengesetz, das Gott dem menschlichen Herzen eingeschrieben hat und das allein durch die menschliche Vernunft erkennbar ist.",
    },
  },
  {
    id: "nature",
    term: {
      en: "Nature",
      fr: "Nature",
      es: "Naturaleza",
      de: "Natur",
    },
    definition: {
      en: "The essence of a being, considering it as the principle of activity. Christ has two natures (divine and human) in one person.",
      fr: "L'essence d'un être, considérée comme le principe d'activité. Le Christ a deux natures (divine et humaine) en une seule personne.",
      es: "La esencia de un ser, considerándola como el principio de actividad. Cristo tiene dos naturalezas (divina y humana) en una persona.",
      de: "Das Wesen eines Seins, betrachtet als Prinzip der Tätigkeit. Christus hat zwei Naturen (göttlich und menschlich) in einer Person.",
    },
  },
  {
    id: "nave",
    term: {
      en: "Nave",
      fr: "Nef",
      es: "Nave",
      de: "Kirchenschiff",
    },
    definition: {
      en: "The main body of a church building where the congregation sits, distinct from the sanctuary (where the altar is).",
      fr: "Le corps principal d'un bâtiment d'église où s'assoit la congrégation, distinct du sanctuaire (où se trouve l'autel).",
      es: "El cuerpo principal de un edificio de iglesia donde se sienta la congregación, distinto del presbiterio (donde está el altar).",
      de: "Der Hauptteil eines Kirchengebäudes, in dem die Gemeinde sitzt, getrennt vom Altarraum.",
    },
  },
  {
    id: "new-covenant",
    term: {
      en: "New Covenant",
      fr: "Nouvelle Alliance",
      es: "Nueva Alianza",
      de: "Neuer Bund",
    },
    definition: {
      en: "The new and everlasting dispensation established by God in Jesus Christ to succeed and perfect the Old Covenant.",
      fr: "La nouvelle et éternelle dispensation établie par Dieu en Jésus-Christ pour succéder et perfectionner l'Ancienne Alliance.",
      es: "La nueva y eterna dispensación establecida por Dios en Jesucristo para suceder y perfeccionar la Antigua Alianza.",
      de: "Die neue und ewige Ordnung, die Gott in Jesus Christus errichtet hat, um den Alten Bund abzulösen und zu vollenden.",
    },
  },
  {
    id: "new-eve",
    term: {
      en: "New Eve",
      fr: "Nouvelle Ève",
      es: "Nueva Eva",
      de: "Neue Eva",
    },
    definition: {
      en: "A title for the Virgin Mary, whose obedience to God corrected the disobedience of the first Eve.",
      fr: "Un titre pour la Vierge Marie, dont l'obéissance à Dieu a corrigé la désobéissance de la première Ève.",
      es: "Un título para la Virgen María, cuya obediencia a Dios corrigió la desobediencia de la primera Eva.",
      de: "Ein Titel für die Jungfrau Maria, deren Gehorsam gegenüber Gott den Ungehorsam der ersten Eva korrigierte.",
    },
  },
  {
    id: "nicene-creed",
    term: {
      en: "Nicene Creed",
      fr: "Credo de Nicée",
      es: "Credo Niceno",
      de: "Nizäisches Glaubensbekenntnis",
    },
    definition: {
      en: "The profession of faith widely used in Christian liturgy, originally adopted at the Council of Nicaea (325 AD).",
      fr: "La profession de foi largement utilisée dans la liturgie chrétienne, adoptée à l'origine au Concile de Nicée (325 ap. J.-C.).",
      es: "La profesión de fe ampliamente utilizada en la liturgia cristiana, adoptada originalmente en el Concilio de Nicea (325 d.C.).",
      de: "Das Glaubensbekenntnis, das in der christlichen Liturgie weit verbreitet ist und ursprünglich auf dem Konzil von Nicäa (325 n. Chr.) angenommen wurde.",
    },
  },
  {
    id: "novena",
    term: {
      en: "Novena",
      fr: "Neuvaine",
      es: "Novena",
      de: "Novene",
    },
    definition: {
      en: "A period of prayer lasting nine consecutive days, usually for a specific petition or in preparation for a feast.",
      fr: "Une période de prière durant neuf jours consécutifs, généralement pour une demande spécifique ou en préparation d'une fête.",
      es: "Un período de oración que dura nueve días consecutivos, generalmente para una petición específica o en preparación para una fiesta.",
      de: "Eine Gebetszeit von neun aufeinanderfolgenden Tagen, meist für ein bestimmtes Anliegen oder zur Vorbereitung auf ein Fest.",
    },
  },
  {
    id: "nuncio",
    term: {
      en: "Nuncio",
      fr: "Nonce",
      es: "Nuncio",
      de: "Nuntius",
    },
    definition: {
      en: "A papal ambassador; an archbishop who represents the Pope to a specific country and its church.",
      fr: "Un ambassadeur papal ; un archevêque qui représente le Pape auprès d'un pays spécifique et de son église.",
      es: "Un embajador papal; un arzobispo que representa al Papa ante un país específico y su iglesia.",
      de: "Ein päpstlicher Botschafter; ein Erzbischof, der den Papst in einem bestimmten Land und dessen Kirche vertritt.",
    },
  },
  {
    id: "obedience",
    term: {
      en: "Obedience",
      fr: "Obéissance",
      es: "Obediencia",
      de: "Gehorsam",
    },
    definition: {
      en: "The submission to the authority of God and those who represent Him (like legitimate superiors).",
      fr: "La soumission à l'autorité de Dieu et de ceux qui Le représentent (comme les supérieurs légitimes).",
      es: "La sumisión a la autoridad de Dios y de aquellos que lo representan (como los superiores legítimos).",
      de: "Die Unterwerfung unter die Autorität Gottes und derer, die Ihn vertreten (wie rechtmäßige Vorgesetzte).",
    },
  },
  {
    id: "offertory",
    term: {
      en: "Offertory",
      fr: "Offertoire",
      es: "Ofertorio",
      de: "Offertorium",
    },
    definition: {
      en: "The part of the Mass where bread and wine are brought to the altar and offered to God before consecration.",
      fr: "La partie de la messe où le pain et le vin sont apportés à l'autel et offerts à Dieu avant la consécration.",
      es: "La parte de la Misa donde el pan y el vino son llevados al altar y ofrecidos a Dios antes de la consagración.",
      de: "Der Teil der Messe, in dem Brot und Wein zum Altar gebracht und Gott vor der Wandlung dargebracht werden.",
    },
  },
  {
    id: "old-testament",
    term: {
      en: "Old Testament",
      fr: "Ancien Testament",
      es: "Antiguo Testamento",
      de: "Altes Testament",
    },
    definition: {
      en: "The forty-six books of the Bible recording the history of salvation from Creation until the time of Christ.",
      fr: "Les quarante-six livres de la Bible relatant l'histoire du salut depuis la Création jusqu'au temps du Christ.",
      es: "Los cuarenta y seis libros de la Biblia que registran la historia de la salvación desde la Creación hasta el tiempo de Cristo.",
      de: "Die sechsundvierzig Bücher der Bibel, die die Heilsgeschichte von der Schöpfung bis zur Zeit Christi aufzeichnen.",
    },
  },
  {
    id: "omnipotence",
    term: {
      en: "Omnipotence",
      fr: "Omnipotence",
      es: "Omnipotencia",
      de: "Allmacht",
    },
    definition: {
      en: "The attribute of God that signifies He is all-powerful and can do anything that is not logically contradictory.",
      fr: "L'attribut de Dieu qui signifie qu'Il est tout-puissant et peut faire tout ce qui n'est pas logiquement contradictoire.",
      es: "El atributo de Dios que significa que Él es todopoderoso y puede hacer cualquier cosa que no sea lógicamente contradictoria.",
      de: "Das Attribut Gottes, das bedeutet, dass Er allmächtig ist und alles tun kann, was nicht logisch widersprüchlich ist.",
    },
  },
  {
    id: "omnipresence",
    term: {
      en: "Omnipresence",
      fr: "Omniprésence",
      es: "Omnipresencia",
      de: "Allgegenwart",
    },
    definition: {
      en: "The attribute of God meaning He is present everywhere at all times.",
      fr: "L'attribut de Dieu signifiant qu'Il est présent partout et en tout temps.",
      es: "El atributo de Dios que significa que Él está presente en todas partes en todo momento.",
      de: "Das Attribut Gottes, das bedeutet, dass Er zu jeder Zeit überall gegenwärtig ist.",
    },
  },
  {
    id: "omniscience",
    term: {
      en: "Omniscience",
      fr: "Omniscience",
      es: "Omnisciencia",
      de: "Allwissenheit",
    },
    definition: {
      en: "The attribute of God meaning He knows all things: past, present, and future.",
      fr: "L'attribut de Dieu signifiant qu'Il connaît toutes choses : passé, présent et futur.",
      es: "El atributo de Dios que significa que Él conoce todas las cosas: pasado, presente y futuro.",
      de: "Das Attribut Gottes, das bedeutet, dass Er alle Dinge weiß: Vergangenheit, Gegenwart und Zukunft.",
    },
  },
  {
    id: "original-sin",
    term: {
      en: "Original Sin",
      fr: "Péché originel",
      es: "Pecado Original",
      de: "Erbsünde",
    },
    definition: {
      en: "The sin by which the first human beings disobeyed God, resulting in the loss of original holiness for all their descendants.",
      fr: "Le péché par lequel les premiers êtres humains ont désobéi à Dieu, entraînant la perte de la sainteté originelle pour tous leurs descendants.",
      es: "El pecado por el cual los primeros seres humanos desobedecieron a Dios, resultando en la pérdida de la santidad original para todos sus descendientes.",
      de: "Die Sünde, durch die die ersten Menschen Gott ungehorsam waren, was zum Verlust der ursprünglichen Heiligkeit für alle ihre Nachkommen führte.",
    },
  },
  {
    id: "orthodoxy",
    term: {
      en: "Orthodoxy",
      fr: "Orthodoxie",
      es: "Ortodoxia",
      de: "Orthodoxie",
    },
    definition: {
      en: "Right belief; adherence to the accepted and traditional doctrines of the faith.",
      fr: "Croyance correcte ; adhésion aux doctrines acceptées et traditionnelles de la foi.",
      es: "Creencia correcta; adhesión a las doctrinas aceptadas y tradicionales de la fe.",
      de: "Rechter Glaube; Festhalten an den anerkannten und traditionellen Lehren des Glaubens.",
    },
  },
  {
    id: "paganism",
    term: {
      en: "Paganism",
      fr: "Paganisme",
      es: "Paganismo",
      de: "Heidentum",
    },
    definition: {
      en: "Religious beliefs other than those of the main world religions, often characterized by polytheism.",
      fr: "Croyances religieuses autres que celles des principales religions mondiales, souvent caractérisées par le polythéisme.",
      es: "Creencias religiosas distintas de las de las principales religiones mundiales, a menudo caracterizadas por el politeísmo.",
      de: "Religiöse Überzeugungen außerhalb der großen Weltreligionen, oft gekennzeichnet durch Polytheismus.",
    },
  },
  {
    id: "palm-sunday",
    term: {
      en: "Palm Sunday",
      fr: "Dimanche des Rameaux",
      es: "Domingo de Ramos",
      de: "Palmsonntag",
    },
    definition: {
      en: "The Sunday before Easter, commemorating Jesus' triumphal entry into Jerusalem.",
      fr: "Le dimanche avant Pâques, commémorant l'entrée triomphale de Jésus à Jérusalem.",
      es: "El domingo antes de Pascua, que conmemora la entrada triunfal de Jesús en Jerusalén.",
      de: "Der Sonntag vor Ostern, an dem an den triumphalen Einzug Jesu in Jerusalem erinnert wird.",
    },
  },
  {
    id: "pantheism",
    term: {
      en: "Pantheism",
      fr: "Panthéisme",
      es: "Panteísmo",
      de: "Pantheismus",
    },
    definition: {
      en: "The belief that God and the universe are identical; that everything is God.",
      fr: "La croyance que Dieu et l'univers sont identiques ; que tout est Dieu.",
      es: "La creencia de que Dios y el universo son idénticos; que todo es Dios.",
      de: "Der Glaube, dass Gott und das Universum identisch sind; dass alles Gott ist.",
    },
  },
  {
    id: "papacy",
    term: {
      en: "Papacy",
      fr: "Papauté",
      es: "Papado",
      de: "Papsttum",
    },
    definition: {
      en: "The office and authority of the Pope.",
      fr: "La fonction et l'autorité du Pape.",
      es: "El cargo y la autoridad del Papa.",
      de: "Das Amt und die Autorität des Papstes.",
    },
  },
  {
    id: "parable",
    term: {
      en: "Parable",
      fr: "Parabole",
      es: "Parábola",
      de: "Gleichnis",
    },
    definition: {
      en: "A simple story used to illustrate a moral or spiritual lesson, frequently used by Jesus.",
      fr: "Une histoire simple utilisée pour illustrer une leçon morale ou spirituelle, fréquemment utilisée par Jésus.",
      es: "Una historia sencilla utilizada para ilustrar una lección moral o espiritual, frecuentemente utilizada por Jesús.",
      de: "Eine einfache Geschichte, die verwendet wird, um eine moralische oder geistliche Lektion zu veranschaulichen, häufig von Jesus verwendet.",
    },
  },
  {
    id: "paraclete",
    term: {
      en: "Paraclete",
      fr: "Paraclet",
      es: "Paráclito",
      de: "Paraklet",
    },
    definition: {
      en: "A title for the Holy Spirit, meaning 'Advocate' or 'Comforter.'",
      fr: "Un titre pour le Saint-Esprit, signifiant 'Avocat' ou 'Consolateur'.",
      es: "Un título para el Espíritu Santo, que significa 'Abogado' o 'Consolador'.",
      de: "Ein Titel für den Heiligen Geist, der 'Fürsprecher' oder 'Tröster' bedeutet.",
    },
  },
  {
    id: "paradise",
    term: {
      en: "Paradise",
      fr: "Paradis",
      es: "Paraíso",
      de: "Paradies",
    },
    definition: {
      en: "A synonym for heaven or the Garden of Eden; a state of perfect happiness.",
      fr: "Un synonyme pour le ciel ou le jardin d'Éden ; un état de bonheur parfait.",
      es: "Un sinónimo de cielo o el Jardín del Edén; un estado de felicidad perfecta.",
      de: "Ein Synonym für den Himmel oder den Garten Eden; ein Zustand vollkommenen Glücks.",
    },
  },
  {
    id: "parish",
    term: {
      en: "Parish",
      fr: "Paroisse",
      es: "Parroquia",
      de: "Pfarrei",
    },
    definition: {
      en: "A definite community of the Christian faithful established on a stable basis within a particular church (diocese).",
      fr: "Une communauté précise de fidèles chrétiens établie sur une base stable au sein d'une église particulière (diocèse).",
      es: "Una comunidad determinada de fieles cristianos constituida de modo estable en una iglesia particular (diócesis).",
      de: "Eine bestimmte Gemeinschaft von christlichen Gläubigen, die auf stabiler Basis innerhalb einer Teilkirche (Diözese) errichtet ist.",
    },
  },
  {
    id: "parousia",
    term: {
      en: "Parousia",
      fr: "Parousie",
      es: "Parusía",
      de: "Parusie",
    },
    definition: {
      en: "The Second Coming of Christ at the end of time.",
      fr: "Le Second Avènement du Christ à la fin des temps.",
      es: "La Segunda Venida de Cristo al final de los tiempos.",
      de: "Das zweite Kommen Christi am Ende der Zeiten.",
    },
  },
  {
    id: "paschal-candle",
    term: {
      en: "Paschal Candle",
      fr: "Cierge pascal",
      es: "Cirio Pascual",
      de: "Osterkerze",
    },
    definition: {
      en: "A large candle blessed and lit at the Easter Vigil, symbolizing Christ, the Light of the World.",
      fr: "Un grand cierge béni et allumé lors de la Vigile Pascale, symbolisant le Christ, Lumière du Monde.",
      es: "Una gran vela bendecida y encendida en la Vigilia Pascual, que simboliza a Cristo, la Luz del Mundo.",
      de: "Eine große Kerze, die in der Osternacht gesegnet und entzündet wird und Christus, das Licht der Welt, symbolisiert.",
    },
  },
  {
    id: "passion",
    term: {
      en: "Passion",
      fr: "Passion",
      es: "Pasión",
      de: "Passion",
    },
    definition: {
      en: "The suffering and death of Jesus Christ out of love for humanity.",
      fr: "La souffrance et la mort de Jésus-Christ par amour pour l'humanité.",
      es: "El sufrimiento y muerte de Jesucristo por amor a la humanidad.",
      de: "Das Leiden und der Tod Jesu Christi aus Liebe zur Menschheit.",
    },
  },
  {
    id: "pastor",
    term: {
      en: "Pastor",
      fr: "Pasteur (Curé)",
      es: "Pastor (Párroco)",
      de: "Pastor (Pfarrer)",
    },
    definition: {
      en: "A priest appointed by the bishop to lead a parish community.",
      fr: "Un prêtre nommé par l'évêque pour diriger une communauté paroissiale.",
      es: "Un sacerdote nombrado por el obispo para dirigir una comunidad parroquial.",
      de: "Ein Priester, der vom Bischof ernannt wird, um eine Pfarrgemeinde zu leiten.",
    },
  },
  {
    id: "patriarch",
    term: {
      en: "Patriarch",
      fr: "Patriarche",
      es: "Patriarca",
      de: "Patriarch",
    },
    definition: {
      en: "A title given to the head bishops of certain ancient Eastern Catholic Churches, or the biblical fathers of the Israelite people (Abraham, Isaac, Jacob).",
      fr: "Un titre donné aux évêques chefs de certaines anciennes Églises catholiques orientales, ou aux pères bibliques du peuple israélite (Abraham, Isaac, Jacob).",
      es: "Un título dado a los obispos principales de ciertas antiguas Iglesias Católicas Orientales, o a los padres bíblicos del pueblo israelita (Abraham, Isaac, Jacob).",
      de: "Ein Titel für die leitenden Bischöfe bestimmter alter ostkatholischer Kirchen oder die biblischen Väter des Volkes Israel (Abraham, Isaak, Jakob).",
    },
  },
  {
    id: "patron-saint",
    term: {
      en: "Patron Saint",
      fr: "Saint Patron",
      es: "Santo Patrono",
      de: "Schutzheiliger",
    },
    definition: {
      en: "A saint chosen as a special intercessor or protector for a specific person, place, or cause.",
      fr: "Un saint choisi comme intercesseur ou protecteur spécial pour une personne, un lieu ou une cause spécifique.",
      es: "Un santo elegido como intercesor o protector especial para una persona, lugar o causa específica.",
      de: "Ein Heiliger, der als besonderer Fürsprecher oder Beschützer für eine bestimmte Person, einen Ort oder ein Anliegen gewählt wurde.",
    },
  },
  {
    id: "peace-sign",
    term: {
      en: "Peace (Sign of)",
      fr: "Signe de paix",
      es: "Signo de la Paz",
      de: "Friedensgruß",
    },
    definition: {
      en: "A liturgical gesture during Mass in which the faithful wish one another the peace of Christ.",
      fr: "Un geste liturgique pendant la messe par lequel les fidèles se souhaitent la paix du Christ.",
      es: "Un gesto litúrgico durante la Misa en el cual los fieles se desean mutuamente la paz de Cristo.",
      de: "Eine liturgische Geste während der Messe, bei der sich die Gläubigen gegenseitig den Frieden Christi wünschen.",
    },
  },
  {
    id: "pelagianism",
    term: {
      en: "Pelagianism",
      fr: "Pélagianisme",
      es: "Pelagianismo",
      de: "Pelagianismus",
    },
    definition: {
      en: "A heresy that denied original sin and claimed humans could achieve salvation through their own will without divine grace.",
      fr: "Une hérésie qui niait le péché originel et affirmait que les humains pouvaient atteindre le salut par leur propre volonté sans la grâce divine.",
      es: "Una herejía que negaba el pecado original y afirmaba que los humanos podían alcanzar la salvación por su propia voluntad sin la gracia divina.",
      de: "Eine Häresie, die die Erbsünde leugnete und behauptete, Menschen könnten das Heil durch ihren eigenen Willen ohne göttliche Gnade erlangen.",
    },
  },
  {
    id: "penance-virtue",
    term: {
      en: "Penance (Virtue)",
      fr: "Pénitence (Vertu)",
      es: "Penitencia (Virtud)",
      de: "Buße (Tugend)",
    },
    definition: {
      en: "Interior conversion of heart, a turning away from sin and a turning toward God.",
      fr: "Conversion intérieure du cœur, un détournement du péché et un retour vers Dieu.",
      es: "Conversión interior del corazón, un apartarse del pecado y volverse hacia Dios.",
      de: "Innere Bekehrung des Herzens, eine Abkehr von der Sünde und eine Hinwendung zu Gott.",
    },
  },
  {
    id: "pentecost",
    term: {
      en: "Pentecost",
      fr: "Pentecôte",
      es: "Pentecostés",
      de: "Pfingsten",
    },
    definition: {
      en: "The 'birthday of the Church,' celebrated 50 days after Easter, when the Holy Spirit descended upon the Apostles.",
      fr: "La 'naissance de l'Église', célébrée 50 jours après Pâques, lorsque le Saint-Esprit est descendu sur les Apôtres.",
      es: "El 'cumpleaños de la Iglesia', celebrado 50 días después de Pascua, cuando el Espíritu Santo descendió sobre los Apóstoles.",
      de: "Der 'Geburtstag der Kirche', der 50 Tage nach Ostern gefeiert wird, als der Heilige Geist auf die Apostel herabkam.",
    },
  },
  {
    id: "people-of-god",
    term: {
      en: "People of God",
      fr: "Peuple de Dieu",
      es: "Pueblo de Dios",
      de: "Volk Gottes",
    },
    definition: {
      en: "A biblical title for the Church, indicating that believers are a distinct community chosen by God.",
      fr: "Un titre biblique pour l'Église, indiquant que les croyants sont une communauté distincte choisie par Dieu.",
      es: "Un título bíblico para la Iglesia, que indica que los creyentes son una comunidad distinta elegida por Dios.",
      de: "Ein biblischer Titel für die Kirche, der anzeigt, dass die Gläubigen eine von Gott erwählte Gemeinschaft sind.",
    },
  },
  {
    id: "perjury",
    term: {
      en: "Perjury",
      fr: "Parjure",
      es: "Perjurio",
      de: "Meineid",
    },
    definition: {
      en: "The sin of taking a false oath; lying under oath.",
      fr: "Le péché de faire un faux serment ; mentir sous serment.",
      es: "El pecado de hacer un falso juramento; mentir bajo juramento.",
      de: "Die Sünde, einen falschen Eid zu schwören; unter Eid lügen.",
    },
  },
  {
    id: "person",
    term: {
      en: "Person (Divine)",
      fr: "Personne (Divine)",
      es: "Persona (Divina)",
      de: "Person (Göttliche)",
    },
    definition: {
      en: "An individual substance of a rational nature. The Trinity consists of three Divine Persons in one Nature.",
      fr: "Une substance individuelle d'une nature rationnelle. La Trinité se compose de trois Personnes Divines en une seule Nature.",
      es: "Una sustancia individual de naturaleza racional. La Trinidad consta de tres Personas Divinas en una Naturaleza.",
      de: "Eine individuelle Substanz vernünftiger Natur. Die Dreifaltigkeit besteht aus drei göttlichen Personen in einer Natur.",
    },
  },
  {
    id: "peter",
    term: {
      en: "Peter",
      fr: "Pierre",
      es: "Pedro",
      de: "Petrus",
    },
    definition: {
      en: "The chief Apostle and the first Pope, to whom Jesus gave the 'keys of the kingdom.'",
      fr: "Le chef des Apôtres et le premier Pape, à qui Jésus a donné les 'clés du royaume'.",
      es: "El Apóstol principal y el primer Papa, a quien Jesús dio las 'llaves del reino'.",
      de: "Der Hauptapostel und der erste Papst, dem Jesus die 'Schlüssel des Himmelreichs' gab.",
    },
  },
  {
    id: "pharisee",
    term: {
      en: "Pharisee",
      fr: "Pharisien",
      es: "Fariseo",
      de: "Pharisäer",
    },
    definition: {
      en: "A member of a Jewish sect in Jesus' time known for strict observance of the written and oral law.",
      fr: "Un membre d'une secte juive du temps de Jésus connue pour son observance stricte de la loi écrite et orale.",
      es: "Un miembro de una secta judía en tiempos de Jesús conocida por la estricta observancia de la ley escrita y oral.",
      de: "Ein Mitglied einer jüdischen Sekte zur Zeit Jesu, bekannt für die strenge Befolgung des schriftlichen und mündlichen Gesetzes.",
    },
  },
  {
    id: "piety",
    term: {
      en: "Piety",
      fr: "Piété",
      es: "Piedad",
      de: "Frömmigkeit",
    },
    definition: {
      en: "A gift of the Holy Spirit; reverence for God with filial affection, paying worship and duty to God.",
      fr: "Un don du Saint-Esprit ; révérence pour Dieu avec une affection filiale, rendant culte et devoir à Dieu.",
      es: "Un don del Espíritu Santo; reverencia a Dios con afecto filial, rindiendo culto y deber a Dios.",
      de: "Eine Gabe des Heiligen Geistes; Ehrfurcht vor Gott mit kindlicher Zuneigung, Gott Anbetung und Pflicht erweisend.",
    },
  },
  {
    id: "pilgrimage",
    term: {
      en: "Pilgrimage",
      fr: "Pèlerinage",
      es: "Peregrinación",
      de: "Wallfahrt",
    },
    definition: {
      en: "A journey to a sacred place undertaken for religious motives, such as penance or thanksgiving.",
      fr: "Un voyage vers un lieu sacré entrepris pour des motifs religieux, tels que la pénitence ou l'action de grâce.",
      es: "Un viaje a un lugar sagrado emprendido por motivos religiosos, como penitencia o acción de gracias.",
      de: "Eine Reise zu einem heiligen Ort, die aus religiösen Motiven unternommen wird, wie Buße oder Danksagung.",
    },
  },
  {
    id: "polytheism",
    term: {
      en: "Polytheism",
      fr: "Polythéisme",
      es: "Politeísmo",
      de: "Polytheismus",
    },
    definition: {
      en: "The belief in or worship of more than one god.",
      fr: "La croyance en ou le culte de plus d'un dieu.",
      es: "La creencia o adoración de más de un dios.",
      de: "Der Glaube an oder die Anbetung von mehr als einem Gott.",
    },
  },
  {
    id: "pontiff",
    term: {
      en: "Pontiff",
      fr: "Pontife",
      es: "Pontífice",
      de: "Pontifex",
    },
    definition: {
      en: "A bridge-builder; a title for a bishop, especially the Pope (Roman Pontiff).",
      fr: "Un bâtisseur de ponts ; un titre pour un évêque, en particulier le Pape (Pontife Romain).",
      es: "Un constructor de puentes; un título para un obispo, especialmente el Papa (Romano Pontífice).",
      de: "Ein Brückenbauer; ein Titel für einen Bischof, insbesondere den Papst (Römischer Pontifex).",
    },
  },
  {
    id: "pope",
    term: { en: "Pope", fr: "Pape", es: "Papa", de: "Papst" },
    definition: {
      en: "The Bishop of Rome, successor of St. Peter, and visible head of the Catholic Church.",
      fr: "L'Évêque de Rome, successeur de Saint Pierre, et chef visible de l'Église catholique.",
      es: "El Obispo de Roma, sucesor de San Pedro y cabeza visible de la Iglesia Católica.",
      de: "Der Bischof von Rom, Nachfolger des heiligen Petrus und sichtbares Oberhaupt der katholischen Kirche.",
    },
  },
  {
    id: "poverty",
    term: {
      en: "Poverty (Evangelical)",
      fr: "Pauvreté (Évangélique)",
      es: "Pobreza (Evangélica)",
      de: "Armut (Evangelische)",
    },
    definition: {
      en: "The voluntary renunciation of worldly possessions to follow Christ more closely.",
      fr: "Le renoncement volontaire aux biens matériels pour suivre le Christ de plus près.",
      es: "La renuncia voluntaria a las posesiones mundanas para seguir a Cristo más de cerca.",
      de: "Der freiwillige Verzicht auf weltlichen Besitz, um Christus enger nachzufolgen.",
    },
  },
  {
    id: "prayer",
    term: {
      en: "Prayer",
      fr: "Prière",
      es: "Oración",
      de: "Gebet",
    },
    definition: {
      en: "The raising of the mind and heart to God, or the requesting of good things from God.",
      fr: "L'élévation de l'esprit et du cœur vers Dieu, ou la demande de bonnes choses à Dieu.",
      es: "La elevación de la mente y el corazón a Dios, o la petición de cosas buenas a Dios.",
      de: "Die Erhebung des Geistes und des Herzens zu Gott oder das Bitten um gute Dinge von Gott.",
    },
  },
  {
    id: "precepts-church",
    term: {
      en: "Precepts of the Church",
      fr: "Préceptes de l'Église",
      es: "Preceptos de la Iglesia",
      de: "Kirchengebote",
    },
    definition: {
      en: "Positive laws made by Church authorities to guarantee for the faithful the indispensable minimum in prayer and moral effort.",
      fr: "Lois positives établies par les autorités de l'Église pour garantir aux fidèles le minimum indispensable dans la prière et l'effort moral.",
      es: "Leyes positivas hechas por las autoridades de la Iglesia para garantizar a los fieles el mínimo indispensable en la oración y el esfuerzo moral.",
      de: "Positive Gesetze, die von den kirchlichen Autoritäten erlassen wurden, um den Gläubigen das unverzichtbare Minimum an Gebet und moralischem Streben zu garantieren.",
    },
  },
  {
    id: "predestination",
    term: {
      en: "Predestination",
      fr: "Prédestination",
      es: "Predestinación",
      de: "Vorherbestimmung",
    },
    definition: {
      en: "The plan of God by which He guides rational creatures to their supernatural end.",
      fr: "Le plan de Dieu par lequel Il guide les créatures rationnelles vers leur fin surnaturelle.",
      es: "El plan de Dios mediante el cual guía a las criaturas racionales a su fin sobrenatural.",
      de: "Der Plan Gottes, durch den Er vernunftbegabte Geschöpfe zu ihrem übernatürlichen Ziel führt.",
    },
  },
  {
    id: "presbyter",
    term: {
      en: "Presbyter",
      fr: "Prêtre (Ancien)",
      es: "Presbítero",
      de: "Presbyter",
    },
    definition: {
      en: "Greek for 'elder.' In the early Church, a leader of a local congregation; the origin of the word 'priest.'",
      fr: "Grec pour 'ancien'. Dans l'Église primitive, un chef d'une congrégation locale ; l'origine du mot 'prêtre'.",
      es: "Griego para 'anciano'. En la Iglesia primitiva, un líder de una congregación local; el origen de la palabra 'sacerdote' (en inglés 'priest' viene de aquí, en español 'presbítero' se usa formalmente).",
      de: "Griechisch für 'Ältester'. In der frühen Kirche ein Leiter einer Ortsgemeinde; der Ursprung des Wortes 'Priester'.",
    },
  },

  {
    id: "presentation",
    term: {
      en: "Presentation",
      fr: "Présentation",
      es: "Presentación",
      de: "Darstellung des Herrn",
    },
    definition: {
      en: "The feast celebrating the presentation of the infant Jesus in the Temple forty days after his birth.",
      fr: "La fête célébrant la présentation de l'enfant Jésus au Temple quarante jours après sa naissance.",
      es: "La fiesta que celebra la presentación del niño Jesús en el Templo cuarenta días después de su nacimiento.",
      de: "Das Fest, das die Darstellung des Jesuskindes im Tempel vierzig Tage nach seiner Geburt feiert.",
    },
  },
  {
    id: "pride",
    term: {
      en: "Pride",
      fr: "Orgueil",
      es: "Soberbia",
      de: "Stolz",
    },
    definition: {
      en: "The root of all sin; an inordinate love of self that causes one to seek excellence apart from God.",
      fr: "La racine de tout péché ; un amour désordonné de soi qui pousse à rechercher l'excellence en dehors de Dieu.",
      es: "La raíz de todo pecado; un amor desordenado a uno mismo que hace buscar la excelencia al margen de Dios.",
      de: "Die Wurzel aller Sünde; eine ungeordnete Selbstliebe, die dazu führt, Vortrefflichkeit ohne Gott zu suchen.",
    },
  },
  {
    id: "priest",
    term: {
      en: "Priest",
      fr: "Prêtre",
      es: "Sacerdote",
      de: "Priester",
    },
    definition: {
      en: "A man ordained to act in the person of Christ (in persona Christi), authorized to offer sacrifice and forgive sins.",
      fr: "Un homme ordonné pour agir en la personne du Christ (in persona Christi), autorisé à offrir le sacrifice et à pardonner les péchés.",
      es: "Un hombre ordenado para actuar en la persona de Cristo (in persona Christi), autorizado para ofrecer sacrificio y perdonar pecados.",
      de: "Ein Mann, der geweiht ist, um in der Person Christi (in persona Christi) zu handeln, befugt, Opfer darzubringen und Sünden zu vergeben.",
    },
  },
  {
    id: "priesthood",
    term: {
      en: "Priesthood",
      fr: "Sacerdoce",
      es: "Sacerdocio",
      de: "Priestertum",
    },
    definition: {
      en: "The office or ministry of priests. The Catholic Church distinguishes between the common priesthood of all believers and the ministerial priesthood.",
      fr: "La fonction ou le ministère des prêtres. L'Église catholique distingue le sacerdoce commun de tous les croyants et le sacerdoce ministériel.",
      es: "El oficio o ministerio de los sacerdotes. La Iglesia Católica distingue entre el sacerdocio común de todos los fieles y el sacerdocio ministerial.",
      de: "Das Amt oder der Dienst der Priester. Die katholische Kirche unterscheidet zwischen dem allgemeinen Priestertum aller Gläubigen und dem Weihepriestertum.",
    },
  },
  {
    id: "primacy-papal",
    term: {
      en: "Primacy (Papal)",
      fr: "Primauté (Papale)",
      es: "Primado (Papal)",
      de: "Primat (Päpstlicher)",
    },
    definition: {
      en: "The supreme jurisdiction and authority of the Bishop of Rome (the Pope) over the whole Church.",
      fr: "La juridiction suprême et l'autorité de l'Évêque de Rome (le Pape) sur toute l'Église.",
      es: "La suprema jurisdicción y autoridad del Obispo de Roma (el Papa) sobre toda la Iglesia.",
      de: "Die höchste Gerichtsbarkeit und Autorität des Bischofs von Rom (des Papstes) über die gesamte Kirche.",
    },
  },
  {
    id: "private-revelation",
    term: {
      en: "Private Revelation",
      fr: "Révélation privée",
      es: "Revelación Privada",
      de: "Privatoffenbarung",
    },
    definition: {
      en: "Revelations made to individuals after the death of the last Apostle. They do not add to the Deposit of Faith and are not binding on the faithful.",
      fr: "Révélations faites à des individus après la mort du dernier Apôtre. Elles n'ajoutent rien au Dépôt de la Foi et ne sont pas contraignantes pour les fidèles.",
      es: "Revelaciones hechas a individuos después de la muerte del último Apóstol. No añaden nada al Depósito de la Fe y no son obligatorias para los fieles.",
      de: "Offenbarungen an Einzelpersonen nach dem Tod des letzten Apostels. Sie fügen dem Glaubensgut nichts hinzu und sind für die Gläubigen nicht bindend.",
    },
  },
  {
    id: "procession",
    term: {
      en: "Procession",
      fr: "Procession",
      es: "Procesión",
      de: "Prozession",
    },
    definition: {
      en: "A liturgical movement of clergy and faithful, usually accompanied by prayers and hymns, symbolizing the earthly pilgrimage.",
      fr: "Un mouvement liturgique du clergé et des fidèles, généralement accompagné de prières et d'hymnes, symbolisant le pèlerinage terrestre.",
      es: "Un movimiento litúrgico del clero y los fieles, generalmente acompañado de oraciones e himnos, que simboliza la peregrinación terrenal.",
      de: "Eine liturgische Bewegung von Klerus und Gläubigen, meist begleitet von Gebeten und Liedern, die die irdische Pilgerschaft symbolisiert.",
    },
  },
  {
    id: "prodigal-son",
    term: {
      en: "Prodigal Son",
      fr: "Fils Prodigue",
      es: "Hijo Pródigo",
      de: "Verlorener Sohn",
    },
    definition: {
      en: "A parable of Jesus illustrating the mercy of God toward a repentant sinner.",
      fr: "Une parabole de Jésus illustrant la miséricorde de Dieu envers un pécheur repenti.",
      es: "Una parábola de Jesús que ilustra la misericordia de Dios hacia un pecador arrepentido.",
      de: "Ein Gleichnis Jesu, das die Barmherzigkeit Gottes gegenüber einem reuigen Sünder veranschaulicht.",
    },
  },
  {
    id: "profession-faith",
    term: {
      en: "Profession of Faith",
      fr: "Profession de Foi",
      es: "Profesión de Fe",
      de: "Glaubensbekenntnis",
    },
    definition: {
      en: "The public statement of one's belief in the truths of the Christian faith (e.g., reciting the Creed).",
      fr: "La déclaration publique de sa croyance dans les vérités de la foi chrétienne (par ex. réciter le Credo).",
      es: "La declaración pública de la propia creencia en las verdades de la fe cristiana (ej. recitar el Credo).",
      de: "Das öffentliche Bekenntnis des eigenen Glaubens an die Wahrheiten des christlichen Glaubens (z.B. das Sprechen des Credo).",
    },
  },
  {
    id: "prophet",
    term: {
      en: "Prophet",
      fr: "Prophète",
      es: "Profeta",
      de: "Prophet",
    },
    definition: {
      en: "One sent by God to form the people of the Old Covenant in the hope of salvation and to proclaim God's will.",
      fr: "Celui envoyé par Dieu pour former le peuple de l'Ancienne Alliance dans l'espérance du salut et pour proclamer la volonté de Dieu.",
      es: "Uno enviado por Dios para formar al pueblo de la Antigua Alianza en la esperanza de la salvación y para proclamar la voluntad de Dios.",
      de: "Einer, der von Gott gesandt wurde, um das Volk des Alten Bundes in der Hoffnung auf das Heil zu formen und Gottes Willen zu verkünden.",
    },
  },
  {
    id: "protestantism",
    term: {
      en: "Protestantism",
      fr: "Protestantisme",
      es: "Protestantismo",
      de: "Protestantismus",
    },
    definition: {
      en: "The movement of Western Christianity that separated from the Catholic Church during the Reformation in the 16th century.",
      fr: "Le mouvement du christianisme occidental qui s'est séparé de l'Église catholique lors de la Réforme au 16ème siècle.",
      es: "El movimiento del cristianismo occidental que se separó de la Iglesia Católica durante la Reforma en el siglo XVI.",
      de: "Die Bewegung des westlichen Christentums, die sich während der Reformation im 16. Jahrhundert von der katholischen Kirche trennte.",
    },
  },
  {
    id: "protoevangelium",
    term: {
      en: "Protoevangelium",
      fr: "Protoévangile",
      es: "Protoevangelio",
      de: "Protoevangelium",
    },
    definition: {
      en: "The 'first gospel' (Genesis 3:15), the first promise of a Redeemer by God to Adam and Eve after the Fall.",
      fr: "Le 'premier évangile' (Genèse 3:15), la première promesse d'un Rédempteur faite par Dieu à Adam et Ève après la Chute.",
      es: "El 'primer evangelio' (Génesis 3:15), la primera promesa de un Redentor hecha por Dios a Adán y Eva después de la Caída.",
      de: "Das 'erste Evangelium' (Genesis 3,15), die erste Verheißung eines Erlösers durch Gott an Adam und Eva nach dem Sündenfall.",
    },
  },
  {
    id: "providence",
    term: {
      en: "Providence",
      fr: "Providence",
      es: "Providencia",
      de: "Vorsehung",
    },
    definition: {
      en: "The dispositions by which God guides his creation toward its perfection.",
      fr: "Les dispositions par lesquelles Dieu guide sa création vers sa perfection.",
      es: "Las disposiciones por las cuales Dios guía su creación hacia su perfección.",
      de: "Die Fügungen, durch die Gott seine Schöpfung zu ihrer Vollendung führt.",
    },
  },
  {
    id: "prudence",
    term: {
      en: "Prudence",
      fr: "Prudence",
      es: "Prudencia",
      de: "Klugheit",
    },
    definition: {
      en: "The cardinal virtue that disposes practical reason to discern our true good in every circumstance and to choose the right means of achieving it.",
      fr: "La vertu cardinale qui dispose la raison pratique à discerner notre vrai bien en toute circonstance et à choisir les justes moyens de l'atteindre.",
      es: "La virtud cardinal que dispone la razón práctica a discernir nuestro verdadero bien en toda circunstancia y a elegir los medios rectos para realizarlo.",
      de: "Die Kardinaltugend, die die praktische Vernunft befähigt, in jeder Situation unser wahres Gut zu erkennen und die richtigen Mittel zu seiner Erreichung zu wählen.",
    },
  },
  {
    id: "psalm",
    term: {
      en: "Psalm",
      fr: "Psaume",
      es: "Salmo",
      de: "Psalm",
    },
    definition: {
      en: "A sacred song or hymn used in worship; the Book of Psalms in the Old Testament contains 150 of them.",
      fr: "Un chant sacré ou hymne utilisé dans le culte ; le Livre des Psaumes dans l'Ancien Testament en contient 150.",
      es: "Un canto sagrado o himno utilizado en el culto; el Libro de los Salmos en el Antiguo Testamento contiene 150.",
      de: "Ein heiliges Lied oder Hymnus, der im Gottesdienst verwendet wird; das Buch der Psalmen im Alten Testament enthält 150 davon.",
    },
  },
  {
    id: "purgatory",
    term: {
      en: "Purgatory",
      fr: "Purgatoire",
      es: "Purgatorio",
      de: "Fegefeuer",
    },
    definition: {
      en: "A state of final purification after death for those who die in God's grace and friendship, but need to be purified to achieve the holiness necessary to enter heaven.",
      fr: "Un état de purification finale après la mort pour ceux qui meurent dans la grâce et l'amitié de Dieu, mais qui ont besoin d'être purifiés pour atteindre la sainteté nécessaire pour entrer au ciel.",
      es: "Un estado de purificación final después de la muerte para aquellos que mueren en la gracia y amistad de Dios, pero necesitan ser purificados para alcanzar la santidad necesaria para entrar al cielo.",
      de: "Ein Zustand der letzten Läuterung nach dem Tod für diejenigen, die in der Gnade und Freundschaft Gottes sterben, aber gereinigt werden müssen, um die für den Himmel notwendige Heiligkeit zu erlangen.",
    },
  },
  {
    id: "pyx",
    term: {
      en: "Pyx",
      fr: "Pyxide",
      es: "Portaviático",
      de: "Pyxis",
    },
    definition: {
      en: "A small container used to carry the consecrated Host to the sick or homebound.",
      fr: "Un petit récipient utilisé pour porter l'Hostie consacrée aux malades ou aux personnes confinées chez elles.",
      es: "Un pequeño recipiente utilizado para llevar la Hostia consagrada a los enfermos o a quienes no pueden salir de casa.",
      de: "Ein kleiner Behälter, der verwendet wird, um die konsekrierte Hostie zu Kranken oder ans Haus Gebundenen zu bringen.",
    },
  },
  {
    id: "real-presence",
    term: {
      en: "Real Presence",
      fr: "Présence Réelle",
      es: "Presencia Real",
      de: "Realpräsenz",
    },
    definition: {
      en: "The doctrine that Jesus Christ is truly present—Body, Blood, Soul, and Divinity—in the Eucharist under the appearances of bread and wine.",
      fr: "La doctrine selon laquelle Jésus-Christ est vraiment présent — Corps, Sang, Âme et Divinité — dans l'Eucharistie sous les apparences du pain et du vin.",
      es: "La doctrina de que Jesucristo está verdaderamente presente —Cuerpo, Sangre, Alma y Divinidad— en la Eucaristía bajo las apariencias de pan y vino.",
      de: "Die Lehre, dass Jesus Christus wahrhaftig gegenwärtig ist – Leib, Blut, Seele und Gottheit – in der Eucharistie unter den Gestalten von Brot und Wein.",
    },
  },
  {
    id: "reason",
    term: {
      en: "Reason",
      fr: "Raison",
      es: "Razón",
      de: "Vernunft",
    },
    definition: {
      en: "The intellectual power or faculty that is ordinarily employed by man in adapting thought or action to some end.",
      fr: "Le pouvoir intellectuel ou la faculté ordinairement employée par l'homme pour adapter la pensée ou l'action à une fin.",
      es: "El poder intelectual o facultad que ordinariamente emplea el hombre para adaptar el pensamiento o la acción a algún fin.",
      de: "Die intellektuelle Kraft oder Fähigkeit, die der Mensch gewöhnlich einsetzt, um Denken oder Handeln einem Zweck anzupassen.",
    },
  },
  {
    id: "reconciliation",
    term: {
      en: "Reconciliation",
      fr: "Réconciliation",
      es: "Reconciliación",
      de: "Versöhnung",
    },
    definition: {
      en: "The sacrament also known as Penance or Confession, through which a sinner is reconciled with God and the Church.",
      fr: "Le sacrement aussi appelé Pénitence ou Confession, par lequel un pécheur est réconcilié avec Dieu et l'Église.",
      es: "El sacramento también conocido como Penitencia o Confesión, a través del cual un pecador se reconcilia con Dios y la Iglesia.",
      de: "Das Sakrament, auch Buße oder Beichte genannt, durch das ein Sünder mit Gott und der Kirche versöhnt wird.",
    },
  },
  {
    id: "redemption",
    term: {
      en: "Redemption",
      fr: "Rédemption",
      es: "Redención",
      de: "Erlösung",
    },
    definition: {
      en: "The act by which Jesus Christ, through his sacrificial death on the Cross, set us free from the slavery of sin.",
      fr: "L'acte par lequel Jésus-Christ, par sa mort sacrificielle sur la Croix, nous a libérés de l'esclavage du péché.",
      es: "El acto por el cual Jesucristo, a través de su muerte sacrificial en la Cruz, nos liberó de la esclavitud del pecado.",
      de: "Die Tat, durch die Jesus Christus uns durch seinen Opfertod am Kreuz von der Sklaverei der Sünde befreit hat.",
    },
  },
  {
    id: "reformation",
    term: {
      en: "Reformation",
      fr: "Réforme",
      es: "Reforma",
      de: "Reformation",
    },
    definition: {
      en: "The religious movement in the 16th century that led to the schism of Protestantism from the Catholic Church.",
      fr: "Le mouvement religieux du 16ème siècle qui a conduit au schisme du protestantisme d'avec l'Église catholique.",
      es: "El movimiento religioso del siglo XVI que condujo al cisma del protestantismo de la Iglesia Católica.",
      de: "Die religiöse Bewegung im 16. Jahrhundert, die zur Abspaltung des Protestantismus von der katholischen Kirche führte.",
    },
  },
  {
    id: "relic",
    term: {
      en: "Relic",
      fr: "Relique",
      es: "Reliquia",
      de: "Reliquie",
    },
    definition: {
      en: "A physical object associated with a saint (e.g., body part, clothing) venerated by the faithful.",
      fr: "Un objet physique associé à un saint (par ex. partie du corps, vêtement) vénéré par les fidèles.",
      es: "Un objeto físico asociado a un santo (ej. parte del cuerpo, ropa) venerado por los fieles.",
      de: "Ein physisches Objekt, das mit einem Heiligen verbunden ist (z.B. Körperteil, Kleidung) und von den Gläubigen verehrt wird.",
    },
  },
  {
    id: "religion",
    term: {
      en: "Religion",
      fr: "Religion",
      es: "Religión",
      de: "Religion",
    },
    definition: {
      en: "A set of beliefs and practices followed by those committed to the service and worship of God.",
      fr: "Un ensemble de croyances et de pratiques suivies par ceux qui sont engagés dans le service et le culte de Dieu.",
      es: "Un conjunto de creencias y prácticas seguidas por aquellos comprometidos con el servicio y la adoración de Dios.",
      de: "Eine Reihe von Überzeugungen und Praktiken, die von denen befolgt werden, die sich dem Dienst und der Anbetung Gottes verschrieben haben.",
    },
  },
  {
    id: "religious-life",
    term: {
      en: "Religious Life",
      fr: "Vie religieuse",
      es: "Vida Religiosa",
      de: "Ordensleben",
    },
    definition: {
      en: "A state of life recognized by the Church in which a person professes vows of poverty, chastity, and obedience.",
      fr: "Un état de vie reconnu par l'Église dans lequel une personne professe des vœux de pauvreté, de chasteté et d'obéissance.",
      es: "Un estado de vida reconocido por la Iglesia en el cual una persona profesa votos de pobreza, castidad y obediencia.",
      de: "Ein von der Kirche anerkannter Lebensstand, in dem eine Person Gelübde der Armut, Keuschheit und des Gehorsams ablegt.",
    },
  },
  {
    id: "remission",
    term: {
      en: "Remission",
      fr: "Rémission",
      es: "Remisión",
      de: "Vergebung",
    },
    definition: {
      en: "The complete forgiveness of sin or the cancellation of the punishment due to sin.",
      fr: "Le pardon complet du péché ou l'annulation de la peine due au péché.",
      es: "El perdón completo del pecado o la cancelación de la pena debida al pecado.",
      de: "Die vollständige Vergebung der Sünde oder die Aufhebung der Strafe, die für die Sünde fällig ist.",
    },
  },
  {
    id: "reparation",
    term: {
      en: "Reparation",
      fr: "Réparation",
      es: "Reparación",
      de: "Wiedergutmachung",
    },
    definition: {
      en: "Making amends for a wrong done or for an offense committed against God or neighbor.",
      fr: "Réparer un tort causé ou une offense commise contre Dieu ou le prochain.",
      es: "Hacer enmienda por un mal hecho o por una ofensa cometida contra Dios o el prójimo.",
      de: "Wiedergutmachung für ein begangenes Unrecht oder eine Beleidigung gegen Gott oder den Nächsten.",
    },
  },
  {
    id: "repentance",
    term: {
      en: "Repentance",
      fr: "Repentir",
      es: "Arrepentimiento",
      de: "Reue",
    },
    definition: {
      en: "Sincere regret or remorse for sin, accompanied by the resolution to do better.",
      fr: "Regret sincère ou remords pour le péché, accompagné de la résolution de mieux faire.",
      es: "Arrepentimiento sincero o remordimiento por el pecado, acompañado de la resolución de mejorar.",
      de: "Aufrichtiges Bedauern oder Reue über die Sünde, begleitet von dem Vorsatz, sich zu bessern.",
    },
  },
  {
    id: "requiem",
    term: {
      en: "Requiem",
      fr: "Requiem",
      es: "Réquiem",
      de: "Requiem",
    },
    definition: {
      en: "A Mass offered for the dead. From the Latin 'rest' (requies).",
      fr: "Une messe offerte pour les morts. Du latin 'repos' (requies).",
      es: "Una Misa ofrecida por los difuntos. Del latín 'descanso' (requies).",
      de: "Eine Messe für die Toten. Vom lateinischen 'Ruhe' (requies).",
    },
  },
  {
    id: "resurrection",
    term: {
      en: "Resurrection",
      fr: "Résurrection",
      es: "Resurrección",
      de: "Auferstehung",
    },
    definition: {
      en: "The bodily rising of Jesus from the dead on the third day after his death on the cross.",
      fr: "La résurrection corporelle de Jésus d'entre les morts le troisième jour après sa mort sur la croix.",
      es: "El levantamiento corporal de Jesús de entre los muertos al tercer día después de su muerte en la cruz.",
      de: "Die leibliche Auferstehung Jesu von den Toten am dritten Tag nach seinem Tod am Kreuz.",
    },
  },
  {
    id: "revelation",
    term: {
      en: "Revelation",
      fr: "Révélation",
      es: "Revelación",
      de: "Offenbarung",
    },
    definition: {
      en: "God's communication of Himself and His will to humanity, culminating in the person of Jesus Christ.",
      fr: "La communication de Dieu de Lui-même et de Sa volonté à l'humanité, culminant dans la personne de Jésus-Christ.",
      es: "La comunicación de Dios de Sí mismo y de Su voluntad a la humanidad, culminando en la persona de Jesucristo.",
      de: "Gottes Mitteilung seiner selbst und seines Willens an die Menschheit, gipfelnd in der Person Jesu Christi.",
    },
  },
  {
    id: "rite",
    term: { en: "Rite", fr: "Rite", es: "Rito", de: "Ritus" },
    definition: {
      en: "The diverse liturgical traditions in which the one catholic and apostolic faith has come to be expressed (e.g., Latin Rite, Byzantine Rite).",
      fr: "Les diverses traditions liturgiques dans lesquelles la foi unique, catholique et apostolique, s'est exprimée (par ex. rite latin, rite byzantin).",
      es: "Las diversas tradiciones litúrgicas en las que se ha expresado la única fe católica y apostólica (ej. Rito Latino, Rito Bizantino).",
      de: "Die verschiedenen liturgischen Traditionen, in denen der eine katholische und apostolische Glaube zum Ausdruck gekommen ist (z.B. lateinischer Ritus, byzantinischer Ritus).",
    },
  },
  {
    id: "ritual",
    term: {
      en: "Ritual",
      fr: "Rituel",
      es: "Ritual",
      de: "Ritual",
    },
    definition: {
      en: "The established form of words and actions for a church ceremony.",
      fr: "La forme établie de paroles et d'actions pour une cérémonie religieuse.",
      es: "La forma establecida de palabras y acciones para una ceremonia de la iglesia.",
      de: "Die festgelegte Form von Worten und Handlungen für eine kirchliche Zeremonie.",
    },
  },
  {
    id: "rock",
    term: {
      en: "Rock",
      fr: "Roc (Pierre)",
      es: "Roca (Pedro)",
      de: "Fels",
    },
    definition: {
      en: "The name Jesus gave to Simon Peter, signifying that he would be the foundation of the Church.",
      fr: "Le nom que Jésus a donné à Simon Pierre, signifiant qu'il serait le fondement de l'Église.",
      es: "El nombre que Jesús dio a Simón Pedro, significando que él sería el fundamento de la Iglesia.",
      de: "Der Name, den Jesus Simon Petrus gab, was bedeutet, dass er das Fundament der Kirche sein würde.",
    },
  },
  {
    id: "rome",
    term: { en: "Rome", fr: "Rome", es: "Roma", de: "Rom" },
    definition: {
      en: "The diocese of the Pope; the spiritual center of the Catholic Church.",
      fr: "Le diocèse du Pape ; le centre spirituel de l'Église catholique.",
      es: "La diócesis del Papa; el centro espiritual de la Iglesia Católica.",
      de: "Die Diözese des Papstes; das geistliche Zentrum der katholischen Kirche.",
    },
  },
  {
    id: "rosary",
    term: {
      en: "Rosary",
      fr: "Chapelet",
      es: "Rosario",
      de: "Rosenkranz",
    },
    definition: {
      en: "A prayer in honor of the Blessed Virgin Mary, which repeats the 'Hail Mary' in decades while meditating on the mysteries of Christ's life.",
      fr: "Une prière en l'honneur de la Bienheureuse Vierge Marie, qui répète le 'Je vous salue Marie' par dizaines tout en méditant sur les mystères de la vie du Christ.",
      es: "Una oración en honor a la Santísima Virgen María, que repite el 'Ave María' en decenas mientras se medita en los misterios de la vida de Cristo.",
      de: "Ein Gebet zu Ehren der seligen Jungfrau Maria, das das 'Gegrüßet seist du, Maria' in Gesätzen wiederholt, während über die Geheimnisse des Lebens Christi meditiert wird.",
    },
  },
  {
    id: "rubrics",
    term: {
      en: "Rubrics",
      fr: "Rubriques",
      es: "Rúbricas",
      de: "Rubriken",
    },
    definition: {
      en: "Directives printed in red in liturgical books to guide the priest and ministers in the proper celebration of the Mass.",
      fr: "Directives imprimées en rouge dans les livres liturgiques pour guider le prêtre et les ministres dans la célébration correcte de la messe.",
      es: "Directivas impresas en rojo en los libros litúrgicos para guiar al sacerdote y a los ministros en la celebración adecuada de la Misa.",
      de: "In rot gedruckte Anweisungen in liturgischen Büchern, um den Priester und die Diener bei der ordnungsgemäßen Feier der Messe zu leiten.",
    },
  },
  {
    id: "sabbath",
    term: {
      en: "Sabbath",
      fr: "Sabbat",
      es: "Sábado",
      de: "Sabbat",
    },
    definition: {
      en: "The day of rest and worship. For Jews, Saturday; for Christians, Sunday (the Lord's Day) in honor of the Resurrection.",
      fr: "Le jour de repos et de culte. Pour les Juifs, le samedi ; pour les Chrétiens, le dimanche (le Jour du Seigneur) en l'honneur de la Résurrection.",
      es: "El día de descanso y adoración. Para los judíos, el sábado; para los cristianos, el domingo (el Día del Señor) en honor a la Resurrección.",
      de: "Der Tag der Ruhe und des Gottesdienstes. Für Juden der Samstag; für Christen der Sonntag (der Tag des Herrn) zu Ehren der Auferstehung.",
    },
  },
  {
    id: "sacrament",
    term: {
      en: "Sacrament",
      fr: "Sacrement",
      es: "Sacramento",
      de: "Sakrament",
    },
    definition: {
      en: "An efficacious sign of grace, instituted by Christ and entrusted to the Church, by which divine life is dispensed to us.",
      fr: "Un signe efficace de la grâce, institué par le Christ et confié à l'Église, par lequel la vie divine nous est dispensée.",
      es: "Un signo eficaz de la gracia, instituido por Cristo y confiado a la Iglesia, mediante el cual se nos dispensa la vida divina.",
      de: "Ein wirksames Zeichen der Gnade, von Christus eingesetzt und der Kirche anvertraut, durch das uns das göttliche Leben gespendet wird.",
    },
  },
  {
    id: "sacramental",
    term: {
      en: "Sacramental",
      fr: "Sacramental",
      es: "Sacramental",
      de: "Sakramentalien",
    },
    definition: {
      en: "Sacred signs (objects or actions) instituted by the Church to prepare us to receive the fruit of the sacraments and sanctify different circumstances of life.",
      fr: "Signes sacrés (objets ou actions) institués par l'Église pour nous préparer à recevoir le fruit des sacrements et sanctifier différentes circonstances de la vie.",
      es: "Signos sagrados (objetos o acciones) instituidos por la Iglesia para prepararnos a recibir el fruto de los sacramentos y santificar diferentes circunstancias de la vida.",
      de: "Heilige Zeichen (Gegenstände oder Handlungen), die von der Kirche eingesetzt wurden, um uns auf den Empfang der Frucht der Sakramente vorzubereiten und verschiedene Lebensumstände zu heiligen.",
    },
  },
  {
    id: "sacred-heart",
    term: {
      en: "Sacred Heart",
      fr: "Sacré-Cœur",
      es: "Sagrado Corazón",
      de: "Heiligstes Herz Jesu",
    },
    definition: {
      en: "A devotion to the physical heart of Jesus as the symbol of his divine love for humanity.",
      fr: "Une dévotion au cœur physique de Jésus comme symbole de son amour divin pour l'humanité.",
      es: "Una devoción al corazón físico de Jesús como símbolo de su amor divino por la humanidad.",
      de: "Eine Andacht zum physischen Herzen Jesu als Symbol seiner göttlichen Liebe zur Menschheit.",
    },
  },
  {
    id: "sacred-scripture",
    term: {
      en: "Sacred Scripture",
      fr: "Sainte Écriture",
      es: "Sagrada Escritura",
      de: "Heilige Schrift",
    },
    definition: {
      en: "The books which contain the truth of God's Revelation and were composed by human authors inspired by the Holy Spirit (The Bible).",
      fr: "Les livres qui contiennent la vérité de la Révélation de Dieu et ont été composés par des auteurs humains inspirés par le Saint-Esprit (La Bible).",
      es: "Los libros que contienen la verdad de la Revelación de Dios y fueron compuestos por autores humanos inspirados por el Espíritu Santo (La Biblia).",
      de: "Die Bücher, die die Wahrheit der Offenbarung Gottes enthalten und von menschlichen Autoren verfasst wurden, die vom Heiligen Geist inspiriert waren (Die Bibel).",
    },
  },
  {
    id: "sacred-tradition",
    term: {
      en: "Sacred Tradition",
      fr: "Sainte Tradition",
      es: "Sagrada Tradición",
      de: "Heilige Überlieferung",
    },
    definition: {
      en: "The living transmission of the Church's Gospel message found in the Church's teaching, life, and worship.",
      fr: "La transmission vivante du message évangélique de l'Église trouvée dans l'enseignement, la vie et le culte de l'Église.",
      es: "La transmisión viva del mensaje evangélico de la Iglesia que se encuentra en la enseñanza, vida y culto de la Iglesia.",
      de: "Die lebendige Weitergabe der evangelischen Botschaft der Kirche, die in Lehre, Leben und Gottesdienst der Kirche zu finden ist.",
    },
  },
  {
    id: "sacrifice",
    term: {
      en: "Sacrifice",
      fr: "Sacrifice",
      es: "Sacrificio",
      de: "Opfer",
    },
    definition: {
      en: "A ritual offering made to God by a priest on behalf of the people as a sign of adoration, thanksgiving, supplication, and communion.",
      fr: "Une offrande rituelle faite à Dieu par un prêtre au nom du peuple en signe d'adoration, d'action de grâce, de supplication et de communion.",
      es: "Una ofrenda ritual hecha a Dios por un sacerdote en nombre del pueblo como signo de adoración, acción de gracias, súplica y comunión.",
      de: "Eine rituelle Opfergabe, die von einem Priester im Namen des Volkes Gott dargebracht wird als Zeichen der Anbetung, Danksagung, Bitte und Gemeinschaft.",
    },
  },

  {
    id: "saint",
    term: {
      en: "Saint",
      fr: "Saint",
      es: "Santo",
      de: "Heiliger",
    },
    definition: {
      en: "A holy person who is in heaven, enjoying the Beatific Vision; specifically, one officially canonized by the Church.",
      fr: "Une personne sainte qui est au ciel, jouissant de la Vision Béatifique ; spécifiquement, une personne officiellement canonisée par l'Église.",
      es: "Una persona santa que está en el cielo, disfrutando de la Visión Beatífica; específicamente, alguien oficialmente canonizado por la Iglesia.",
      de: "Eine heilige Person, die im Himmel ist und die beseligende Schau genießt; insbesondere jemand, der von der Kirche offiziell heiliggesprochen wurde.",
    },
  },
  {
    id: "salvation",
    term: {
      en: "Salvation",
      fr: "Salut",
      es: "Salvación",
      de: "Erlösung",
    },
    definition: {
      en: "Deliverance from sin and its consequences, believed by Christians to be brought about by faith in Christ.",
      fr: "La délivrance du péché et de ses conséquences, que les chrétiens croient être apportée par la foi en Christ.",
      es: "La liberación del pecado y sus consecuencias, que los cristianos creen que se logra mediante la fe en Cristo.",
      de: "Befreiung von Sünde und ihren Folgen, von der Christen glauben, dass sie durch den Glauben an Christus bewirkt wird.",
    },
  },
  {
    id: "sanctification",
    term: {
      en: "Sanctification",
      fr: "Sanctification",
      es: "Santificación",
      de: "Heiligung",
    },
    definition: {
      en: "The process of being made holy. It begins at Baptism, continues through life, and is completed in heaven.",
      fr: "Le processus de devenir saint. Il commence au baptême, se poursuit tout au long de la vie et s'achève au ciel.",
      es: "El proceso de ser santificado. Comienza en el Bautismo, continúa a lo largo de la vida y se completa en el cielo.",
      de: "Der Prozess der Heiligung. Er beginnt bei der Taufe, setzt sich im Leben fort und wird im Himmel vollendet.",
    },
  },
  {
    id: "sanctuary",
    term: {
      en: "Sanctuary",
      fr: "Sanctuaire",
      es: "Santuario",
      de: "Altarraum",
    },
    definition: {
      en: "The area of the church where the altar, ambo, and chair are located; considered the holiest part of the church building.",
      fr: "La zone de l'église où se trouvent l'autel, l'ambon et le siège ; considérée comme la partie la plus sainte du bâtiment de l'église.",
      es: "El área de la iglesia donde se encuentran el altar, el ambón y la sede; considerada la parte más sagrada del edificio de la iglesia.",
      de: "Der Bereich der Kirche, in dem sich Altar, Ambo und Sitz befinden; gilt als der heiligste Teil des Kirchengebäudes.",
    },
  },
  {
    id: "satan",
    term: {
      en: "Satan",
      fr: "Satan",
      es: "Satanás",
      de: "Satan",
    },
    definition: {
      en: "A Hebrew word meaning 'adversary.' The devil, the leader of the fallen angels.",
      fr: "Un mot hébreu signifiant 'adversaire'. Le diable, le chef des anges déchus.",
      es: "Una palabra hebrea que significa 'adversario'. El diablo, el líder de los ángeles caídos.",
      de: "Ein hebräisches Wort, das 'Widersacher' bedeutet. Der Teufel, der Anführer der gefallenen Engel.",
    },
  },
  {
    id: "satisfaction",
    term: {
      en: "Satisfaction",
      fr: "Satisfaction",
      es: "Satisfacción",
      de: "Genugtuung",
    },
    definition: {
      en: "An act whereby the sinner makes amends for sin, especially in reparation to God for offenses against Him.",
      fr: "Un acte par lequel le pécheur répare le péché, en particulier en réparation à Dieu pour les offenses contre Lui.",
      es: "Un acto mediante el cual el pecador repara el pecado, especialmente en reparación a Dios por las ofensas contra Él.",
      de: "Ein Akt, durch den der Sünder das begangene Unrecht wiedergutmacht, besonders als Wiedergutmachung gegenüber Gott.",
    },
  },
  {
    id: "savior",
    term: {
      en: "Savior",
      fr: "Sauveur",
      es: "Salvador",
      de: "Retter",
    },
    definition: {
      en: "A title for Jesus Christ, who saves the world from sin and death.",
      fr: "Un titre pour Jésus-Christ, qui sauve le monde du péché et de la mort.",
      es: "Un título para Jesucristo, quien salva al mundo del pecado y la muerte.",
      de: "Ein Titel für Jesus Christus, der die Welt von Sünde und Tod rettet.",
    },
  },
  {
    id: "scandal",
    term: {
      en: "Scandal",
      fr: "Scandale",
      es: "Escándalo",
      de: "Ärgernis",
    },
    definition: {
      en: "An attitude or behavior which leads another to do evil. It is an offense against charity.",
      fr: "Une attitude ou un comportement qui pousse autrui à faire le mal. C'est une offense contre la charité.",
      es: "Una actitud o comportamiento que induce a otro a hacer el mal. Es una ofensa contra la caridad.",
      de: "Eine Haltung oder ein Verhalten, das einen anderen dazu verleitet, Böses zu tun. Es ist ein Verstoß gegen die Nächstenliebe.",
    },
  },
  {
    id: "scapular",
    term: {
      en: "Scapular",
      fr: "Scapulaire",
      es: "Escapulario",
      de: "Skapulier",
    },
    definition: {
      en: "A sacramental consisting of two pieces of cloth joined by strings, worn over the shoulders as a sign of devotion.",
      fr: "Un sacramental composé de deux morceaux de tissu reliés par des cordons, porté sur les épaules en signe de dévotion.",
      es: "Un sacramental que consta de dos piezas de tela unidas por cuerdas, que se lleva sobre los hombros como signo de devoción.",
      de: "Ein Sakramentale, das aus zwei durch Schnüre verbundenen Stoffstücken besteht und als Zeichen der Frömmigkeit über den Schultern getragen wird.",
    },
  },
  {
    id: "scholasticism",
    term: {
      en: "Scholasticism",
      fr: "Scolastique",
      es: "Escolástica",
      de: "Scholastik",
    },
    definition: {
      en: "The system of theology and philosophy taught in medieval European universities, emphasizing logic and the synthesis of faith and reason (e.g., Aquinas).",
      fr: "Le système de théologie et de philosophie enseigné dans les universités européennes médiévales, mettant l'accent sur la logique et la synthèse de la foi et de la raison (par ex. Saint Thomas d'Aquin).",
      es: "El sistema de teología y filosofía enseñado en las universidades europeas medievales, enfatizando la lógica y la síntesis de fe y razón (ej. Santo Tomás de Aquino).",
      de: "Das System der Theologie und Philosophie, das an mittelalterlichen europäischen Universitäten gelehrt wurde, mit Schwerpunkt auf Logik und der Synthese von Glauben und Vernunft (z.B. Thomas von Aquin).",
    },
  },
  {
    id: "seal-confession",
    term: {
      en: "Seal of Confession",
      fr: "Sceau de la confession",
      es: "Sigilo Sacramental",
      de: "Beichtgeheimnis",
    },
    definition: {
      en: "The absolute obligation of a priest not to disclose anything that he learns from a penitent during the Sacrament of Penance.",
      fr: "L'obligation absolue d'un prêtre de ne rien divulguer de ce qu'il apprend d'un pénitent lors du sacrement de Pénitence.",
      es: "La obligación absoluta de un sacerdote de no revelar nada de lo que aprende de un penitente durante el Sacramento de la Penitencia.",
      de: "Die absolute Verpflichtung eines Priesters, nichts von dem zu offenbaren, was er von einem Büßer während des Bußsakraments erfährt.",
    },
  },
  {
    id: "second-coming",
    term: {
      en: "Second Coming",
      fr: "Second Avènement",
      es: "Segunda Venida",
      de: "Wiederkunft",
    },
    definition: {
      en: "The return of Jesus Christ in glory at the end of the world to judge the living and the dead.",
      fr: "Le retour de Jésus-Christ dans la gloire à la fin du monde pour juger les vivants et les morts.",
      es: "El regreso de Jesucristo en gloria al final del mundo para juzgar a los vivos y a los muertos.",
      de: "Die Rückkehr Jesu Christi in Herrlichkeit am Ende der Welt, um die Lebenden und die Toten zu richten.",
    },
  },
  {
    id: "secularism",
    term: {
      en: "Secularism",
      fr: "Laïcisme",
      es: "Secularismo",
      de: "Säkularismus",
    },
    definition: {
      en: "A philosophy or system that rejects religious belief and practice, asserting that religion should not play a role in public life.",
      fr: "Une philosophie ou un système qui rejette la croyance et la pratique religieuses, affirmant que la religion ne devrait pas jouer de rôle dans la vie publique.",
      es: "Una filosofía o sistema que rechaza la creencia y práctica religiosa, afirmando que la religión no debe jugar un papel en la vida pública.",
      de: "Eine Philosophie oder ein System, das religiösen Glauben und Praxis ablehnt und behauptet, dass Religion im öffentlichen Leben keine Rolle spielen sollte.",
    },
  },
  {
    id: "seminary",
    term: {
      en: "Seminary",
      fr: "Séminaire",
      es: "Seminario",
      de: "Priesterseminar",
    },
    definition: {
      en: "An educational institution for the formation of men preparing for the priesthood.",
      fr: "Une institution éducative pour la formation des hommes se préparant à la prêtrise.",
      es: "Una institución educativa para la formación de hombres que se preparan para el sacerdocio.",
      de: "Eine Bildungseinrichtung zur Ausbildung von Männern, die sich auf das Priestertum vorbereiten.",
    },
  },
  {
    id: "sermon-mount",
    term: {
      en: "Sermon on the Mount",
      fr: "Sermon sur la montagne",
      es: "Sermón de la Montaña",
      de: "Bergpredigt",
    },
    definition: {
      en: "The discourse of Jesus in Matthew 5-7, containing the Beatitudes and the Lord's Prayer.",
      fr: "Le discours de Jésus dans Matthieu 5-7, contenant les Béatitudes et le Notre Père.",
      es: "El discurso de Jesús en Mateo 5-7, que contiene las Bienaventuranzas y el Padrenuestro.",
      de: "Die Rede Jesu in Matthäus 5-7, die die Seligpreisungen und das Vaterunser enthält.",
    },
  },
  {
    id: "seven-last-words",
    term: {
      en: "Seven Last Words",
      fr: "Les Sept Dernières Paroles",
      es: "Las Siete Palabras",
      de: "Die sieben letzten Worte",
    },
    definition: {
      en: "The seven sentences spoken by Jesus on the Cross, as recorded in the Gospels.",
      fr: "Les sept phrases prononcées par Jésus sur la Croix, telles qu'enregistrées dans les Évangiles.",
      es: "Las siete frases pronunciadas por Jesús en la Cruz, según se registran en los Evangelios.",
      de: "Die sieben Sätze, die Jesus am Kreuz sprach, wie sie in den Evangelien aufgezeichnet sind.",
    },
  },
  {
    id: "sign-cross",
    term: {
      en: "Sign of the Cross",
      fr: "Signe de la Croix",
      es: "Señal de la Cruz",
      de: "Kreuzzeichen",
    },
    definition: {
      en: "A ritual gesture tracing a cross over oneself while invoking the Trinity: 'In the name of the Father, and of the Son, and of the Holy Spirit.'",
      fr: "Un geste rituel traçant une croix sur soi tout en invoquant la Trinité : 'Au nom du Père, et du Fils, et du Saint-Esprit.'",
      es: "Un gesto ritual trazando una cruz sobre uno mismo mientras se invoca a la Trinidad: 'En el nombre del Padre, y del Hijo, y del Espíritu Santo'.",
      de: "Eine rituelle Geste, bei der man ein Kreuz über sich zeichnet, während man die Dreifaltigkeit anruft: 'Im Namen des Vaters und des Sohnes und des Heiligen Geistes.'",
    },
  },
  {
    id: "simony",
    term: {
      en: "Simony",
      fr: "Simonie",
      es: "Simonía",
      de: "Simonie",
    },
    definition: {
      en: "The buying or selling of spiritual things, such as sacraments or church offices. Named after Simon Magus.",
      fr: "L'achat ou la vente de choses spirituelles, telles que des sacrements ou des charges ecclésiastiques. Nommé d'après Simon le Magicien.",
      es: "La compra o venta de cosas espirituales, como sacramentos o cargos eclesiásticos. Llamado así por Simón el Mago.",
      de: "Der Kauf oder Verkauf von geistlichen Dingen wie Sakramenten oder Kirchenämtern. Benannt nach Simon Magus.",
    },
  },
  {
    id: "sin",
    term: { en: "Sin", fr: "Péché", es: "Pecado", de: "Sünde" },
    definition: {
      en: "An offense against reason, truth, and right conscience; it is a failure in genuine love for God and neighbor.",
      fr: "Une offense contre la raison, la vérité et la conscience droite ; c'est un manquement à l'amour véritable envers Dieu et le prochain.",
      es: "Una ofensa contra la razón, la verdad y la conciencia recta; es una falta al amor verdadero a Dios y al prójimo.",
      de: "Ein Verstoß gegen die Vernunft, die Wahrheit und das rechte Gewissen; es ist ein Versagen in der wahren Liebe zu Gott und dem Nächsten.",
    },
  },
  {
    id: "sloth",
    term: {
      en: "Sloth",
      fr: "Paresse (Acédie)",
      es: "Pereza",
      de: "Trägheit",
    },
    definition: {
      en: "One of the seven capital sins; spiritual laziness or indifference to divine things (acedia).",
      fr: "L'un des sept péchés capitaux ; paresse spirituelle ou indifférence aux choses divines (acédie).",
      es: "Uno de los siete pecados capitales; pereza espiritual o indiferencia hacia las cosas divinas (acedia).",
      de: "Eine der sieben Todsünden; geistliche Faulheit oder Gleichgültigkeit gegenüber göttlichen Dingen (Acedia).",
    },
  },
  {
    id: "social-justice",
    term: {
      en: "Social Justice",
      fr: "Justice sociale",
      es: "Justicia Social",
      de: "Soziale Gerechtigkeit",
    },
    definition: {
      en: "The respect for the human person and the rights which flow from human dignity and guarantee it.",
      fr: "Le respect de la personne humaine et des droits qui découlent de la dignité humaine et la garantissent.",
      es: "El respeto a la persona humana y los derechos que se derivan de la dignidad humana y la garantizan.",
      de: "Die Achtung vor der menschlichen Person und den Rechten, die aus der Menschenwürde fließen und diese garantieren.",
    },
  },


  
  {
    id: "sola-fide",
  term: {
    en: "Sola Fide",
    fr: "Sola Fide",
    es: "Sola Fide",
    de: "Sola Fide",
  },
  definition: {
    en: "The Reformation doctrine that faith alone justifies, meaning that faith by itself, even without charity, fully secures justification. Works play no role in causing justification and charity is understood to come only after.",
    
    fr: "Doctrine de la Réforme selon laquelle la foi seule justifie, c’est-à-dire que la foi prise isolément, même sans la charité, obtient la justification. Les œuvres ne causent pas la justification et la charité vient seulement après.",
    
    es: "Doctrina de la Reforma que enseña que la fe sola justifica, lo que significa que la fe por sí misma, incluso sin caridad, asegura la justificación. Las obras no causan la justificación y la caridad se considera posterior.",
    
    de: "Reformationslehre, dass der Glaube allein rechtfertigt, was bedeutet, dass der Glaube für sich, selbst ohne Liebe, die Rechtfertigung bewirkt. Werke tragen nichts zur Ursache bei und die Liebe folgt erst danach.",
    },
  },
  {
    id: "sola-gratia",
    term: {
      en: "Sola Gratia",
      fr: "Sola Gratia",
      es: "Sola Gratia",
      de: "Sola Gratia",
    },
    definition: {
      en: "The doctrine that salvation is by 'grace alone,' without any human cooperation that is not itself given by grace.",
      fr: "La doctrine selon laquelle le salut est par la 'grâce seule', sans aucune coopération humaine qui ne soit elle-même donnée par la grâce.",
      es: "La doctrina de que la salvación es por 'gracia sola', sin ninguna cooperación humana que no sea dada por la gracia misma.",
      de: "Die Lehre, dass das Heil 'allein aus Gnade' erfolgt, ohne menschliches Zutun, das nicht selbst aus Gnade gegeben ist.",
    },
  },
  {
    id: "solemnity",
    term: {
      en: "Solemnity",
      fr: "Solennité",
      es: "Solemnidad",
      de: "Hochfest",
    },
    definition: {
      en: "The highest rank of feast in the Catholic liturgical calendar (e.g., Christmas, Easter, Pentecost).",
      fr: "Le rang le plus élevé de fête dans le calendrier liturgique catholique (par ex. Noël, Pâques, Pentecôte).",
      es: "El rango más alto de fiesta en el calendario litúrgico católico (ej. Navidad, Pascua, Pentecostés).",
      de: "Der höchste Rang eines Festes im katholischen liturgischen Kalender (z.B. Weihnachten, Ostern, Pfingsten).",
    },
  },
  {
    id: "son-of-god",
    term: {
      en: "Son of God",
      fr: "Fils de Dieu",
      es: "Hijo de Dios",
      de: "Sohn Gottes",
    },
    definition: {
      en: "A title applied to Jesus Christ, signifying his unique relationship with the Father and his divinity.",
      fr: "Un titre appliqué à Jésus-Christ, signifiant sa relation unique avec le Père et sa divinité.",
      es: "Un título aplicado a Jesucristo, que significa su relación única con el Padre y su divinidad.",
      de: "Ein Titel für Jesus Christus, der seine einzigartige Beziehung zum Vater und seine Gottheit bezeichnet.",
    },
  },
  {
    id: "son-of-man",
    term: {
      en: "Son of Man",
      fr: "Fils de l'homme",
      es: "Hijo del Hombre",
      de: "Menschensohn",
    },
    definition: {
      en: "A messianic title Jesus used for himself, emphasizing his humanity and his role as the judge of the world.",
      fr: "Un titre messianique que Jésus utilisait pour lui-même, soulignant son humanité et son rôle de juge du monde.",
      es: "Un título mesiánico que Jesús usó para sí mismo, enfatizando su humanidad y su papel como juez del mundo.",
      de: "Ein messianischer Titel, den Jesus für sich selbst verwendete, um seine Menschlichkeit und seine Rolle als Weltenrichter zu betonen.",
    },
  },
  {
    id: "soul",
    term: { en: "Soul", fr: "Âme", es: "Alma", de: "Seele" },
    definition: {
      en: "The spiritual principle of human beings. The soul is the subject of human consciousness and freedom; body and soul together form one unique human nature.",
      fr: "Le principe spirituel des êtres humains. L'âme est le sujet de la conscience et de la liberté humaines ; le corps et l'âme forment ensemble une nature humaine unique.",
      es: "El principio espiritual de los seres humanos. El alma es el sujeto de la conciencia y la libertad humanas; cuerpo y alma forman juntos una naturaleza humana única.",
      de: "Das geistige Prinzip des Menschen. Die Seele ist das Subjekt des menschlichen Bewusstseins und der Freiheit; Leib und Seele bilden zusammen eine einzige menschliche Natur.",
    },
  },
  {
    id: "spiritual-communion",
    term: {
      en: "Spiritual Communion",
      fr: "Communion spirituelle",
      es: "Comunión Espiritual",
      de: "Geistige Kommunion",
    },
    definition: {
      en: "A prayer expressing the desire to receive the Eucharist when one is unable to receive it sacramentally.",
      fr: "Une prière exprimant le désir de recevoir l'Eucharistie lorsqu'on est dans l'impossibilité de la recevoir sacramentellement.",
      es: "Una oración que expresa el deseo de recibir la Eucaristía cuando uno no puede recibirla sacramentalmente.",
      de: "Ein Gebet, das den Wunsch ausdrückt, die Eucharistie zu empfangen, wenn man sie nicht sakramental empfangen kann.",
    },
  },
  {
    id: "sponsor",
    term: {
      en: "Sponsor",
      fr: "Parrain/Marraine (Confirmation)",
      es: "Padrino/Madrina",
      de: "Firmpate",
    },
    definition: {
      en: "A practicing Catholic who presents a candidate for Baptism or Confirmation and assists them in Christian living.",
      fr: "Un catholique pratiquant qui présente un candidat au Baptême ou à la Confirmation et l'aide dans la vie chrétienne.",
      es: "Un católico practicante que presenta a un candidato para el Bautismo o la Confirmación y lo ayuda en la vida cristiana.",
      de: "Ein praktizierender Katholik, der einen Kandidaten für die Taufe oder Firmung vorstellt und ihn im christlichen Leben unterstützt.",
    },
  },
  {
    id: "state-of-grace",
    term: {
      en: "State of Grace",
      fr: "État de grâce",
      es: "Estado de Gracia",
      de: "Stand der Gnade",
    },
    definition: {
      en: "The condition of being free from mortal sin and possessing sanctifying grace.",
      fr: "La condition d'être libre de péché mortel et de posséder la grâce sanctifiante.",
      es: "La condición de estar libre de pecado mortal y poseer la gracia santificante.",
      de: "Der Zustand, frei von Todsünde zu sein und die heilig machende Gnade zu besitzen.",
    },
  },
  {
    id: "stations-cross",
    term: {
      en: "Stations of the Cross",
      fr: "Chemin de Croix",
      es: "Vía Crucis",
      de: "Kreuzweg",
    },
    definition: {
      en: "A devotion consisting of fourteen stages of meditation on Christ's Passion, from his condemnation to his burial.",
      fr: "Une dévotion consistant en quatorze étapes de méditation sur la Passion du Christ, de sa condamnation à sa mise au tombeau.",
      es: "Una devoción que consta de catorce estaciones de meditación sobre la Pasión de Cristo, desde su condena hasta su sepultura.",
      de: "Eine Andacht bestehend aus vierzehn Stationen der Meditation über das Leiden Christi, von seiner Verurteilung bis zu seinem Begräbnis.",
    },
  },
  {
    id: "stewardship",
    term: {
      en: "Stewardship",
      fr: "Intendance",
      es: "Mayordomía",
      de: "Verantwortung (Schöpfung)",
    },
    definition: {
      en: "The grateful response of a Christian disciple who recognizes and receives God's gifts and shares these gifts in love of God and neighbor.",
      fr: "La réponse reconnaissante d'un disciple chrétien qui reconnaît et reçoit les dons de Dieu et partage ces dons par amour de Dieu et du prochain.",
      es: "La respuesta agradecida de un discípulo cristiano que reconoce y recibe los dones de Dios y comparte estos dones por amor a Dios y al prójimo.",
      de: "Die dankbare Antwort eines christlichen Jüngers, der Gottes Gaben erkennt und empfängt und diese Gaben aus Liebe zu Gott und dem Nächsten teilt.",
    },
  },
  {
    id: "stigmata",
    term: {
      en: "Stigmata",
      fr: "Stigmates",
      es: "Estigmas",
      de: "Stigmata",
    },
    definition: {
      en: "The miraculous appearance of the wounds of Christ (hands, feet, side) on the body of a saint (e.g., St. Francis of Assisi, St. Padre Pio).",
      fr: "L'apparition miraculeuse des plaies du Christ (mains, pieds, côté) sur le corps d'un saint (par ex. Saint François d'Assise, Saint Padre Pio).",
      es: "La aparición milagrosa de las llagas de Cristo (manos, pies, costado) en el cuerpo de un santo (ej. San Francisco de Asís, San Padre Pío).",
      de: "Das wunderbare Erscheinen der Wunden Christi (Hände, Füße, Seite) am Körper eines Heiligen (z.B. Hl. Franziskus von Assisi, Hl. Pater Pio).",
    },
  },
  {
    id: "subsidiarity",
    term: {
      en: "Subsidiarity",
      fr: "Subsidiarité",
      es: "Subsidiariedad",
      de: "Subsidiarität",
    },
    definition: {
      en: "The principle that matters ought to be handled by the smallest, lowest or least centralized competent authority.",
      fr: "Le principe selon lequel les questions doivent être traitées par l'autorité compétente la plus petite, la plus basse ou la moins centralisée.",
      es: "El principio de que los asuntos deben ser manejados por la autoridad competente más pequeña, más baja o menos centralizada.",
      de: "Das Prinzip, dass Angelegenheiten von der kleinsten, untersten oder am wenigsten zentralisierten zuständigen Behörde geregelt werden sollten.",
    },
  },
  {
    id: "substance",
    term: {
      en: "Substance",
      fr: "Substance",
      es: "Sustancia",
      de: "Substanz",
    },
    definition: {
      en: "The essential nature or reality of a thing, as opposed to its accidents (appearances). Used to explain Transubstantiation.",
      fr: "La nature essentielle ou réalité d'une chose, par opposition à ses accidents (apparences). Utilisé pour expliquer la Transsubstantiation.",
      es: "La naturaleza esencial o realidad de una cosa, en oposición a sus accidentes (apariencias). Utilizado para explicar la Transustanciación.",
      de: "Die wesentliche Natur oder Realität eines Dinges im Gegensatz zu seinen Akzidenzien (Erscheinungen). Wird verwendet, um die Transsubstantiation zu erklären.",
    },
  },
  {
    id: "suffering",
    term: {
      en: "Suffering",
      fr: "Souffrance",
      es: "Sufrimiento",
      de: "Leiden",
    },
    definition: {
      en: "Physical or mental pain. In Christianity, it can be united with the suffering of Christ for redemption.",
      fr: "Douleur physique ou mentale. Dans le christianisme, elle peut être unie à la souffrance du Christ pour la rédemption.",
      es: "Dolor físico o mental. En el cristianismo, puede unirse al sufrimiento de Cristo para la redención.",
      de: "Körperlicher oder geistiger Schmerz. Im Christentum kann es mit dem Leiden Christi zur Erlösung vereint werden.",
    },
  },
  {
    id: "suicide",
    term: {
      en: "Suicide",
      fr: "Suicide",
      es: "Suicidio",
      de: "Selbstmord",
    },
    definition: {
      en: "The willful taking of one's own life. It is gravely contrary to the just love of self, neighbor, and God.",
      fr: "Le fait de s'ôter volontairement la vie. C'est gravement contraire au juste amour de soi, du prochain et de Dieu.",
      es: "El acto voluntario de quitarse la propia vida. Es gravemente contrario al justo amor a uno mismo, al prójimo y a Dios.",
      de: "Die vorsätzliche Beendigung des eigenen Lebens. Es steht in schwerem Widerspruch zur gerechten Liebe zu sich selbst, zum Nächsten und zu Gott.",
    },
  },
  {
    id: "sunday",
    term: {
      en: "Sunday",
      fr: "Dimanche",
      es: "Domingo",
      de: "Sonntag",
    },
    definition: {
      en: "The Lord's Day, the first day of the week, commemorating the Resurrection of Christ.",
      fr: "Le Jour du Seigneur, le premier jour de la semaine, commémorant la Résurrection du Christ.",
      es: "El Día del Señor, el primer día de la semana, que conmemora la Resurrección de Cristo.",
      de: "Der Tag des Herrn, der erste Tag der Woche, an dem der Auferstehung Christi gedacht wird.",
    },
  },
  {
    id: "supernatural",
    term: {
      en: "Supernatural",
      fr: "Surnaturel",
      es: "Sobrenatural",
      de: "Übernatürlich",
    },
    definition: {
      en: "That which is above the natural order; specifically, the order of grace and the divine life.",
      fr: "Ce qui est au-dessus de l'ordre naturel ; spécifiquement, l'ordre de la grâce et de la vie divine.",
      es: "Lo que está por encima del orden natural; específicamente, el orden de la gracia y la vida divina.",
      de: "Das, was über der natürlichen Ordnung steht; insbesondere die Ordnung der Gnade und des göttlichen Lebens.",
    },
  },
  {
    id: "superstition",
    term: {
      en: "Superstition",
      fr: "Superstition",
      es: "Superstición",
      de: "Aberglaube",
    },
    definition: {
      en: "The deviation of religious feeling and of the practices this feeling imposes. Attributing magical power to objects or rituals.",
      fr: "La déviation du sentiment religieux et des pratiques que ce sentiment impose. Attribuer un pouvoir magique à des objets ou rituels.",
      es: "La desviación del sentimiento religioso y de las prácticas que este sentimiento impone. Atribuir poder mágico a objetos o rituales.",
      de: "Die Abweichung des religiösen Empfindens und der Praktiken, die dieses Empfinden auferlegt. Das Zuschreiben magischer Kräfte an Objekte oder Rituale.",
    },
  },
  {
    id: "synod",
    term: {
      en: "Synod",
      fr: "Synode",
      es: "Sínodo",
      de: "Synode",
    },
    definition: {
      en: "An assembly of ecclesiastics gathered together under church authority to discuss and decide on matters pertaining to doctrine, liturgy, or discipline.",
      fr: "Une assemblée d'ecclésiastiques réunis sous l'autorité de l'Église pour discuter et décider de questions relatives à la doctrine, à la liturgie ou à la discipline.",
      es: "Una asamblea de eclesiásticos reunidos bajo la autoridad de la iglesia para discutir y decidir sobre asuntos relacionados con la doctrina, la liturgia o la disciplina.",
      de: "Eine Versammlung von Geistlichen, die unter kirchlicher Autorität zusammenkommen, um über Fragen der Lehre, Liturgie oder Disziplin zu diskutieren und zu entscheiden.",
    },
  },
  {
    id: "tabernacle",
    term: {
      en: "Tabernacle",
      fr: "Tabernacle",
      es: "Sagrario",
      de: "Tabernakel",
    },
    definition: {
      en: "The receptacle in the church in which the consecrated Eucharist is reserved for Communion for the sick and dying.",
      fr: "Le réceptacle dans l'église où l'Eucharistie consacrée est réservée pour la Communion des malades et des mourants.",
      es: "El receptáculo en la iglesia en el cual se reserva la Eucaristía consagrada para la Comunión de los enfermos y moribundos.",
      de: "Der Behälter in der Kirche, in dem die konsekrierte Eucharistie für die Kommunion der Kranken und Sterbenden aufbewahrt wird.",
    },
  },
  {
    id: "temperance",
    term: {
      en: "Temperance",
      fr: "Tempérance",
      es: "Templanza",
      de: "Mäßigung",
    },
    definition: {
      en: "The cardinal virtue that moderates the attraction of pleasures and provides balance in the use of created goods.",
      fr: "La vertu cardinale qui modère l'attrait des plaisirs et procure l'équilibre dans l'usage des biens créés.",
      es: "La virtud cardinal que modera la atracción de los placeres y procura el equilibrio en el uso de los bienes creados.",
      de: "Die Kardinaltugend, die die Anziehungskraft von Vergnügungen mäßigt und für Ausgewogenheit im Gebrauch geschaffener Güter sorgt.",
    },
  },
  {
    id: "temple",
    term: {
      en: "Temple",
      fr: "Temple",
      es: "Templo",
      de: "Tempel",
    },
    definition: {
      en: "The House of God in Jerusalem, which contained the Ark of the Covenant. In the New Testament, the body of the believer is the temple of the Holy Spirit.",
      fr: "La Maison de Dieu à Jérusalem, qui contenait l'Arche de l'Alliance. Dans le Nouveau Testament, le corps du croyant est le temple du Saint-Esprit.",
      es: "La Casa de Dios en Jerusalén, que contenía el Arca de la Alianza. En el Nuevo Testamento, el cuerpo del creyente es el templo del Espíritu Santo.",
      de: "Das Haus Gottes in Jerusalem, das die Bundeslade enthielt. Im Neuen Testament ist der Körper des Gläubigen der Tempel des Heiligen Geistes.",
    },
  },
  {
    id: "temptation",
    term: {
      en: "Temptation",
      fr: "Tentation",
      es: "Tentación",
      de: "Versuchung",
    },
    definition: {
      en: "An attraction, either from outside oneself or from within, to act contrary to right reason and the commandments of God.",
      fr: "Une attraction, soit de l'extérieur de soi, soit de l'intérieur, à agir contrairement à la droite raison et aux commandements de Dieu.",
      es: "Una atracción, ya sea desde fuera de uno mismo o desde dentro, para actuar en contra de la recta razón y los mandamientos de Dios.",
      de: "Eine Anziehung, entweder von außen oder von innen, entgegen der rechten Vernunft und den Geboten Gottes zu handeln.",
    },
  },
  {
    id: "theology",
    term: {
      en: "Theology",
      fr: "Théologie",
      es: "Teología",
      de: "Theologie",
    },
    definition: {
      en: "The study of God and of created things insofar as they relate to God; 'faith seeking understanding.'",
      fr: "L'étude de Dieu et des choses créées pour autant qu'elles se rapportent à Dieu ; 'la foi cherchant l'intelligence'.",
      es: "El estudio de Dios y de las cosas creadas en cuanto se relacionan con Dios; 'la fe que busca entendimiento'.",
      de: "Das Studium von Gott und den geschaffenen Dingen, insofern sie sich auf Gott beziehen; 'Glaube, der nach Verständnis sucht'.",
    },
  },
  {
    id: "theology-body",
    term: {
      en: "Theology of the Body",
      fr: "Théologie du Corps",
      es: "Teología del Cuerpo",
      de: "Theologie des Leibes",
    },
    definition: {
      en: "The teachings of Pope John Paul II on the human body and sexuality as a reflection of the divine plan.",
      fr: "Les enseignements du Pape Jean-Paul II sur le corps humain et la sexualité comme reflet du plan divin.",
      es: "Las enseñanzas del Papa Juan Pablo II sobre el cuerpo humano y la sexualidad como reflejo del plan divino.",
      de: "Die Lehren von Papst Johannes Paul II. über den menschlichen Körper und die Sexualität als Spiegel des göttlichen Plans.",
    },
  },
  {
    id: "tithe",
    term: {
      en: "Tithe",
      fr: "Dîme",
      es: "Diezmo",
      de: "Zehnt",
    },
    definition: {
      en: "Giving one-tenth of one's earnings to the church or charity; a biblical practice of stewardship.",
      fr: "Donner un dixième de ses revenus à l'église ou à la charité ; une pratique biblique d'intendance.",
      es: "Dar una décima parte de las ganancias a la iglesia o a la caridad; una práctica bíblica de mayordomía.",
      de: "Das Geben eines Zehntels des Einkommens an die Kirche oder für wohltätige Zwecke; eine biblische Praxis der Verantwortung.",
    },
  },
  {
    id: "transcendence",
    term: {
      en: "Transcendence",
      fr: "Transcendance",
      es: "Trascendencia",
      de: "Transzendenz",
    },
    definition: {
      en: "The teaching that God, by nature, is beyond this world and beyond the comprehension of human beings.",
      fr: "L'enseignement selon lequel Dieu, par nature, est au-delà de ce monde et au-delà de la compréhension des êtres humains.",
      es: "La enseñanza de que Dios, por naturaleza, está más allá de este mundo y más allá de la comprensión de los seres humanos.",
      de: "Die Lehre, dass Gott von Natur aus jenseits dieser Welt und jenseits des Verständnisses der Menschen ist.",
    },
  },

  {
    id: "transfiguration",
    term: {
      en: "Transfiguration",
      fr: "Transfiguration",
      es: "Transfiguración",
      de: "Verklärung des Herrn",
    },
    definition: {
      en: "The event where Jesus revealed his divine glory to Peter, James, and John on a high mountain.",
      fr: "L'événement où Jésus a révélé sa gloire divine à Pierre, Jacques et Jean sur une haute montagne.",
      es: "El evento donde Jesús reveló su gloria divina a Pedro, Santiago y Juan en una montaña alta.",
      de: "Das Ereignis, bei dem Jesus Petrus, Jakobus und Johannes auf einem hohen Berg seine göttliche Herrlichkeit offenbarte.",
    },
  },
  {
    id: "transubstantiation",
    term: {
      en: "Transubstantiation",
      fr: "Transsubstantiation",
      es: "Transustanciación",
      de: "Transsubstantiation",
    },
    definition: {
      en: "The change of the whole substance of bread into the Body of Christ and of the whole substance of wine into the Blood of Christ.",
      fr: "Le changement de toute la substance du pain en Corps du Christ et de toute la substance du vin en Sang du Christ.",
      es: "El cambio de toda la sustancia del pan en el Cuerpo de Cristo y de toda la sustancia del vino en la Sangre de Cristo.",
      de: "Die Wandlung der ganzen Substanz des Brotes in den Leib Christi und der ganzen Substanz des Weines in das Blut Christi.",
    },
  },
  {
    id: "treasury-of-merit",
    term: {
      en: "Treasury of Merit",
      fr: "Trésor de l'Église",
      es: "Tesoro de la Iglesia",
      de: "Kirchenschatz",
    },
    definition: {
      en: "The spiritual goods of the communion of saints, including the infinite value of Christ's merits and the prayers and good works of the saints.",
      fr: "Les biens spirituels de la communion des saints, incluant la valeur infinie des mérites du Christ et les prières et bonnes œuvres des saints.",
      es: "Los bienes espirituales de la comunión de los santos, incluyendo el valor infinito de los méritos de Cristo y las oraciones y buenas obras de los santos.",
      de: "Die geistlichen Güter der Gemeinschaft der Heiligen, einschließlich des unendlichen Wertes der Verdienste Christi sowie der Gebete und guten Werke der Heiligen.",
    },
  },
  {
    id: "tribunal",
    term: {
      en: "Tribunal",
      fr: "Tribunal",
      es: "Tribunal",
      de: "Kirchliches Gericht",
    },
    definition: {
      en: "A church court established to decide cases of canon law, such as annulments.",
      fr: "Un tribunal ecclésiastique établi pour trancher les cas de droit canonique, tels que les annulations.",
      es: "Un tribunal eclesiástico establecido para decidir casos de derecho canónico, como las anulaciones.",
      de: "Ein kirchliches Gericht, das eingerichtet wurde, um über Fälle des kanonischen Rechts, wie z.B. Annullierungen, zu entscheiden.",
    },
  },
  {
    id: "triduum",
    term: {
      en: "Triduum",
      fr: "Triduum",
      es: "Triduo",
      de: "Triduum",
    },
    definition: {
      en: "The three-day liturgical season from the evening of Holy Thursday to the evening of Easter Sunday.",
      fr: "La saison liturgique de trois jours allant du soir du Jeudi Saint au soir du Dimanche de Pâques.",
      es: "El tiempo litúrgico de tres días desde la tarde del Jueves Santo hasta la tarde del Domingo de Pascua.",
      de: "Die dreitägige liturgische Zeit vom Abend des Gründonnerstags bis zum Abend des Ostersonntags.",
    },
  },
  {
    id: "trinity",
    term: {
      en: "Trinity",
      fr: "Trinité",
      es: "Trinidad",
      de: "Dreifaltigkeit",
    },
    definition: {
      en: "The central mystery of the Christian faith: one God in three Divine Persons (Father, Son, and Holy Spirit).",
      fr: "Le mystère central de la foi chrétienne : un seul Dieu en trois Personnes Divines (Père, Fils et Saint-Esprit).",
      es: "El misterio central de la fe cristiana: un solo Dios en tres Personas Divinas (Padre, Hijo y Espíritu Santo).",
      de: "Das zentrale Geheimnis des christlichen Glaubens: ein Gott in drei göttlichen Personen (Vater, Sohn und Heiliger Geist).",
    },
  },
  {
    id: "truth",
    term: {
      en: "Truth",
      fr: "Vérité",
      es: "Verdad",
      de: "Wahrheit",
    },
    definition: {
      en: "Conformity of the mind and intellect to reality. Jesus said, 'I am the way, and the truth, and the life.'",
      fr: "Conformité de l'esprit et de l'intelligence à la réalité. Jésus a dit : 'Je suis le chemin, la vérité et la vie.'",
      es: "Conformidad de la mente y el intelecto con la realidad. Jesús dijo: 'Yo soy el camino, y la verdad, y la vida'.",
      de: "Übereinstimmung des Verstandes und Intellekts mit der Wirklichkeit. Jesus sagte: 'Ich bin der Weg und die Wahrheit und das Leben.'",
    },
  },
  {
    id: "typology",
    term: {
      en: "Typology",
      fr: "Typologie",
      es: "Tipología",
      de: "Typologie",
    },
    definition: {
      en: "The discernment of persons, events, or things in the Old Testament which prefigured and thereby served as a 'type' of the fulfillment in Christ.",
      fr: "Le discernement de personnes, d'événements ou de choses dans l'Ancien Testament qui préfiguraient et servaient ainsi de 'type' à l'accomplissement en Christ.",
      es: "El discernimiento de personas, eventos o cosas en el Antiguo Testamento que prefiguraban y servían como 'tipo' del cumplimiento en Cristo.",
      de: "Die Unterscheidung von Personen, Ereignissen oder Dingen im Alten Testament, die die Erfüllung in Christus vorausbildeten und somit als 'Typus' dienten.",
    },
  },
  {
    id: "unity",
    term: {
      en: "Unity",
      fr: "Unité",
      es: "Unidad",
      de: "Einheit",
    },
    definition: {
      en: "The gift of the Holy Spirit to the Church whereby she is undivided in herself and distinct from all other bodies.",
      fr: "Le don du Saint-Esprit à l'Église par lequel elle est indivise en elle-même et distincte de tous les autres corps.",
      es: "El don del Espíritu Santo a la Iglesia por el cual ella es indivisa en sí misma y distinta de todos los otros cuerpos.",
      de: "Die Gabe des Heiligen Geistes an die Kirche, durch die sie in sich ungeteilt und von allen anderen Körperschaften unterschieden ist.",
    },
  },
  {
    id: "universal",
    term: {
      en: "Universal",
      fr: "Universel",
      es: "Universal",
      de: "Universell",
    },
    definition: {
      en: "The meaning of the word 'Catholic.' The Church is universal because Christ is present in her and her mission is to the whole human race.",
      fr: "La signification du mot 'Catholique'. L'Église est universelle parce que le Christ est présent en elle et que sa mission s'adresse à tout le genre humain.",
      es: "El significado de la palabra 'Católica'. La Iglesia es universal porque Cristo está presente en ella y su misión es para toda la raza humana.",
      de: "Die Bedeutung des Wortes 'Katholisch'. Die Kirche ist universell, weil Christus in ihr gegenwärtig ist und ihre Sendung an das ganze Menschengeschlecht gerichtet ist.",
    },
  },
  {
    id: "unleavened-bread",
    term: {
      en: "Unleavened Bread",
      fr: "Pain sans levain",
      es: "Pan Ácimo",
      de: "Ungesäuertes Brot",
    },
    definition: {
      en: "Bread made without yeast, used in the Latin Rite of the Catholic Church for the Eucharist.",
      fr: "Pain fait sans levure, utilisé dans le rite latin de l'Église catholique pour l'Eucharistie.",
      es: "Pan hecho sin levadura, utilizado en el Rito Latino de la Iglesia Católica para la Eucaristía.",
      de: "Brot ohne Hefe, das im lateinischen Ritus der katholischen Kirche für die Eucharistie verwendet wird.",
    },
  },
  {
    id: "upper-room",
    term: {
      en: "Upper Room",
      fr: "Cénacle",
      es: "Cenáculo",
      de: "Obergemach",
    },
    definition: {
      en: "The room where Jesus celebrated the Last Supper and where the Holy Spirit descended at Pentecost.",
      fr: "La salle où Jésus a célébré la Cène et où le Saint-Esprit est descendu à la Pentecôte.",
      es: "La sala donde Jesús celebró la Última Cena y donde el Espíritu Santo descendió en Pentecostés.",
      de: "Der Raum, in dem Jesus das letzte Abendmahl feierte und in dem der Heilige Geist zu Pfingsten herabkam.",
    },
  },
  {
    id: "usury",
    term: {
      en: "Usury",
      fr: "Usure",
      es: "Usura",
      de: "Wucher",
    },
    definition: {
      en: "The taking of excessive interest on a loan; condemned by the Church as contrary to justice.",
      fr: "Le fait de prendre un intérêt excessif sur un prêt ; condamné par l'Église comme contraire à la justice.",
      es: "El cobro de intereses excesivos en un préstamo; condenado por la Iglesia como contrario a la justicia.",
      de: "Das Nehmen von übermäßigen Zinsen für ein Darlehen; von der Kirche als ungerecht verurteilt.",
    },
  },
  {
    id: "validity",
    term: {
      en: "Validity",
      fr: "Validité",
      es: "Validez",
      de: "Gültigkeit",
    },
    definition: {
      en: "The quality of a sacrament having been performed according to proper matter and form, ensuring it actually took place.",
      fr: "La qualité d'un sacrement ayant été accompli selon la matière et la forme appropriées, assurant qu'il a réellement eu lieu.",
      es: "La cualidad de un sacramento de haber sido realizado según la materia y forma adecuadas, asegurando que realmente tuvo lugar.",
      de: "Die Eigenschaft eines Sakraments, gemäß der richtigen Materie und Form vollzogen worden zu sein, was sicherstellt, dass es tatsächlich stattgefunden hat.",
    },
  },
  {
    id: "vatican",
    term: {
      en: "Vatican City",
      fr: "Cité du Vatican",
      es: "Ciudad del Vaticano",
      de: "Vatikanstadt",
    },
    definition: {
      en: "The independent sovereign state governed by the Pope, located within Rome.",
      fr: "L'État souverain indépendant gouverné par le Pape, situé à l'intérieur de Rome.",
      es: "El estado soberano independiente gobernado por el Papa, ubicado dentro de Roma.",
      de: "Der unabhängige souveräne Staat, der vom Papst regiert wird und innerhalb Roms liegt.",
    },
  },
  {
    id: "vatican-council",
    term: {
      en: "Vatican Council (II)",
      fr: "Concile Vatican II",
      es: "Concilio Vaticano II",
      de: "Zweites Vatikanisches Konzil",
    },
    definition: {
      en: "The 21st ecumenical council (1962-1965) which addressed the Church's relation to the modern world.",
      fr: "Le 21e concile œcuménique (1962-1965) qui a abordé la relation de l'Église avec le monde moderne.",
      es: "El 21º concilio ecuménico (1962-1965) que abordó la relación de la Iglesia con el mundo moderno.",
      de: "Das 21. ökumenische Konzil (1962-1965), das sich mit dem Verhältnis der Kirche zur modernen Welt befasste.",
    },
  },
  {
    id: "venerable",
    term: {
      en: "Venerable",
      fr: "Vénérable",
      es: "Venerable",
      de: "Ehrwürdiger Diener Gottes",
    },
    definition: {
      en: "The title given to a candidate for canonization whose heroic virtue has been recognized by the Pope.",
      fr: "Le titre donné à un candidat à la canonisation dont la vertu héroïque a été reconnue par le Pape.",
      es: "El título dado a un candidato a la canonización cuya virtud heroica ha sido reconocida por el Papa.",
      de: "Der Titel, der einem Kandidaten für die Heiligsprechung verliehen wird, dessen heroische Tugend vom Papst anerkannt wurde.",
    },
  },
  {
    id: "veneration",
    term: {
      en: "Veneration",
      fr: "Vénération",
      es: "Veneración",
      de: "Verehrung",
    },
    definition: {
      en: "Honor given to saints and sacred objects (dulia), distinguished from the adoration due to God alone (latria).",
      fr: "Honneur rendu aux saints et aux objets sacrés (dulie), distingué de l'adoration due à Dieu seul (latrie).",
      es: "Honor dado a los santos y objetos sagrados (dulía), distinguido de la adoración debida solo a Dios (latría).",
      de: "Ehre, die Heiligen und heiligen Gegenständen erwiesen wird (Dulia), unterschieden von der Anbetung, die allein Gott gebührt (Latria).",
    },
  },
  {
    id: "venial-sin",
    term: {
      en: "Venial Sin",
      fr: "Péché véniel",
      es: "Pecado Venial",
      de: "Lässliche Sünde",
    },
    definition: {
      en: "A sin that weakens charity but does not destroy the divine life in the soul.",
      fr: "Un péché qui affaiblit la charité mais ne détruit pas la vie divine dans l'âme.",
      es: "Un pecado que debilita la caridad pero no destruye la vida divina en el alma.",
      de: "Eine Sünde, die die Nächstenliebe schwächt, aber das göttliche Leben in der Seele nicht zerstört.",
    },
  },
  {
    id: "veracity",
    term: {
      en: "Veracity",
      fr: "Véracité",
      es: "Veracidad",
      de: "Wahrhaftigkeit",
    },
    definition: {
      en: "The virtue of being truthful in word and deed; honesty.",
      fr: "La vertu d'être véridique en paroles et en actes ; l'honnêteté.",
      es: "La virtud de ser veraz en palabras y hechos; honestidad.",
      de: "Die Tugend, in Wort und Tat wahrhaftig zu sein; Ehrlichkeit.",
    },
  },
  {
    id: "vespers",
    term: {
      en: "Vespers",
      fr: "Vêpres",
      es: "Vísperas",
      de: "Vesper",
    },
    definition: {
      en: "The evening prayer of the Church in the Liturgy of the Hours.",
      fr: "La prière du soir de l'Église dans la Liturgie des Heures.",
      es: "La oración de la tarde de la Iglesia en la Liturgia de las Horas.",
      de: "Das Abendgebet der Kirche im Stundengebet.",
    },
  },
  {
    id: "vestments",
    term: {
      en: "Vestments",
      fr: "Vêtements liturgiques",
      es: "Vestimentas",
      de: "Liturgische Gewänder",
    },
    definition: {
      en: "Special garments worn by the clergy during liturgical services, symbolizing their spiritual function.",
      fr: "Vêtements spéciaux portés par le clergé lors des services liturgiques, symbolisant leur fonction spirituelle.",
      es: "Prendas especiales usadas por el clero durante los servicios litúrgicos, simbolizando su función espiritual.",
      de: "Besondere Gewänder, die vom Klerus während der liturgischen Dienste getragen werden und ihre geistliche Funktion symbolisieren.",
    },
  },
  {
    id: "viaticum",
    term: {
      en: "Viaticum",
      fr: "Viatique",
      es: "Viático",
      de: "Wegzehrung",
    },
    definition: {
      en: "Latin for 'food for the journey.' The Eucharist given to a dying person.",
      fr: "Latin pour 'nourriture pour le voyage'. L'Eucharistie donnée à une personne mourante.",
      es: "Latín para 'alimento para el viaje'. La Eucaristía dada a una persona moribunda.",
      de: "Lateinisch für 'Nahrung für die Reise'. Die Eucharistie, die einem Sterbenden gereicht wird.",
    },
  },
  {
    id: "vicar-of-christ",
    term: {
      en: "Vicar of Christ",
      fr: "Vicaire du Christ",
      es: "Vicario de Cristo",
      de: "Stellvertreter Christi",
    },
    definition: {
      en: "A title for the Pope, indicating he acts as Christ's representative on earth to govern the Church.",
      fr: "Un titre pour le Pape, indiquant qu'il agit comme représentant du Christ sur terre pour gouverner l'Église.",
      es: "Un título para el Papa, indicando que actúa como representante de Cristo en la tierra para gobernar la Iglesia.",
      de: "Ein Titel für den Papst, der anzeigt, dass er als Vertreter Christi auf Erden handelt, um die Kirche zu leiten.",
    },
  },
  {
    id: "vice",
    term: { en: "Vice", fr: "Vice", es: "Vicio", de: "Laster" },
    definition: {
      en: "A bad habit acquired by repeated sin, which inclines a person to sin.",
      fr: "Une mauvaise habitude acquise par la répétition du péché, qui incline une personne à pécher.",
      es: "Un mal hábito adquirido por el pecado repetido, que inclina a una persona a pecar.",
      de: "Eine schlechte Gewohnheit, die durch wiederholte Sünde erworben wurde und eine Person zur Sünde neigen lässt.",
    },
  },
  {
    id: "victim",
    term: {
      en: "Victim",
      fr: "Victime",
      es: "Víctima",
      de: "Opfergabe",
    },
    definition: {
      en: "A living being sacrificed to God. Christ is the pure Victim offered on the Cross for our salvation.",
      fr: "Un être vivant sacrifié à Dieu. Le Christ est la Victime pure offerte sur la Croix pour notre salut.",
      es: "Un ser vivo sacrificado a Dios. Cristo es la Víctima pura ofrecida en la Cruz para nuestra salvación.",
      de: "Ein lebendes Wesen, das Gott geopfert wird. Christus ist die reine Opfergabe, die am Kreuz für unser Heil dargebracht wurde.",
    },
  },
  {
    id: "vigil",
    term: {
      en: "Vigil",
      fr: "Vigile",
      es: "Vigilia",
      de: "Vigil",
    },
    definition: {
      en: "A period of keeping awake for prayer, usually the night before a major feast (e.g., Easter Vigil).",
      fr: "Une période de veille pour la prière, généralement la nuit précédant une grande fête (par ex. Vigile Pascale).",
      es: "Un período de mantenerse despierto para la oración, generalmente la noche anterior a una fiesta importante (ej. Vigilia Pascual).",
      de: "Eine Zeit des Wachens zum Gebet, meist in der Nacht vor einem Hochfest (z.B. Osternacht).",
    },
  },
  {
    id: "virgin-birth",
    term: {
      en: "Virgin Birth",
      fr: "Naissance virginale",
      es: "Nacimiento Virginal",
      de: "Jungfrauengeburt",
    },
    definition: {
      en: "The doctrine that Jesus was conceived by the power of the Holy Spirit and born of the Virgin Mary without a human father.",
      fr: "La doctrine selon laquelle Jésus a été conçu par la puissance du Saint-Esprit et est né de la Vierge Marie sans père humain.",
      es: "La doctrina de que Jesús fue concebido por el poder del Espíritu Santo y nació de la Virgen María sin padre humano.",
      de: "Die Lehre, dass Jesus durch die Kraft des Heiligen Geistes empfangen und von der Jungfrau Maria ohne menschlichen Vater geboren wurde.",
    },
  },
  {
    id: "virginity",
    term: {
      en: "Virginity",
      fr: "Virginité",
      es: "Virginidad",
      de: "Jungfräulichkeit",
    },
    definition: {
      en: "The state of bodily integrity and the abstention from sexual relations, consecrated to God for the sake of the Kingdom.",
      fr: "L'état d'intégrité corporelle et l'abstention de relations sexuelles, consacrés à Dieu pour le Royaume.",
      es: "El estado de integridad corporal y la abstención de relaciones sexuales, consagrado a Dios por el Reino.",
      de: "Der Zustand körperlicher Unversehrtheit und der Enthaltung von sexuellen Beziehungen, der Gott um des Himmelreichs willen geweiht ist.",
    },
  },
  {
    id: "virtue",
    term: {
      en: "Virtue",
      fr: "Vertu",
      es: "Virtud",
      de: "Tugend",
    },
    definition: {
      en: "A habitual and firm disposition to do the good.",
      fr: "Une disposition habituelle et ferme à faire le bien.",
      es: "Una disposición habitual y firme a hacer el bien.",
      de: "Eine beständige und feste Neigung, das Gute zu tun.",
    },
  },
  {
    id: "virtues-cardinal",
    term: {
      en: "Virtues, Cardinal",
      fr: "Vertus cardinales",
      es: "Virtudes Cardinales",
      de: "Kardinaltugenden",
    },
    definition: {
      en: "The four hinge virtues upon which all others depend: Prudence, Justice, Fortitude, and Temperance.",
      fr: "Les quatre vertus charnières dont dépendent toutes les autres : Prudence, Justice, Force et Tempérance.",
      es: "Las cuatro virtudes cardinales de las que dependen todas las demás: Prudencia, Justicia, Fortaleza y Templanza.",
      de: "Die vier Scharniertugenden, von denen alle anderen abhängen: Klugheit, Gerechtigkeit, Tapferkeit und Mäßigung.",
    },
  },
  {
    id: "virtues-theological",
    term: {
      en: "Virtues, Theological",
      fr: "Vertus théologales",
      es: "Virtudes Teologales",
      de: "Theologische Tugenden",
    },
    definition: {
      en: "The three virtues infused by God that relate directly to Him: Faith, Hope, and Charity.",
      fr: "Les trois vertus infuses par Dieu qui se rapportent directement à Lui : Foi, Espérance et Charité.",
      es: "Las tres virtudes infundidas por Dios que se relacionan directamente con Él: Fe, Esperanza y Caridad.",
      de: "Die drei von Gott eingegossenen Tugenden, die sich direkt auf Ihn beziehen: Glaube, Hoffnung und Liebe.",
    },
  },
  {
    id: "visitation",
    term: {
      en: "Visitation",
      fr: "Visitation",
      es: "Visitación",
      de: "Mariä Heimsuchung",
    },
    definition: {
      en: "The visit of the Virgin Mary to her cousin Elizabeth, who was pregnant with John the Baptist.",
      fr: "La visite de la Vierge Marie à sa cousine Élisabeth, qui était enceinte de Jean-Baptiste.",
      es: "La visita de la Virgen María a su prima Isabel, que estaba embarazada de Juan el Bautista.",
      de: "Der Besuch der Jungfrau Maria bei ihrer Cousine Elisabeth, die mit Johannes dem Täufer schwanger war.",
    },
  },
  {
    id: "vocation",
    term: {
      en: "Vocation",
      fr: "Vocation",
      es: "Vocación",
      de: "Berufung",
    },
    definition: {
      en: "A call from God to a distinctive state of life (marriage, priesthood, religious life, single life) in which the person can reach holiness.",
      fr: "Un appel de Dieu à un état de vie distinct (mariage, prêtrise, vie religieuse, vie célibataire) dans lequel la personne peut atteindre la sainteté.",
      es: "Un llamado de Dios a un estado de vida distintivo (matrimonio, sacerdocio, vida religiosa, vida soltera) en el cual la persona puede alcanzar la santidad.",
      de: "Ein Ruf Gottes zu einem bestimmten Lebensstand (Ehe, Priestertum, Ordensleben, eheloses Leben), in dem die Person zur Heiligkeit gelangen kann.",
    },
  },
  {
    id: "vow",
    term: { en: "Vow", fr: "Vœu", es: "Voto", de: "Gelübde" },
    definition: {
      en: "A deliberate and free promise made to God concerning a possible and better good which must be fulfilled by reason of the virtue of religion.",
      fr: "Une promesse délibérée et libre faite à Dieu concernant un bien possible et meilleur qui doit être accompli en raison de la vertu de religion.",
      es: "Una promesa deliberada y libre hecha a Dios sobre un bien posible y mejor que debe cumplirse por razón de la virtud de la religión.",
      de: "Ein überlegtes und freies Versprechen an Gott über ein mögliches und besseres Gut, das aufgrund der Tugend der Religion erfüllt werden muss.",
    },
  },
  {
    id: "vulgate",
    term: {
      en: "Vulgate",
      fr: "Vulgate",
      es: "Vulgata",
      de: "Vulgata",
    },
    definition: {
      en: "The Latin translation of the Bible completed by St. Jerome in the late 4th century, which became the official Bible of the Western Church.",
      fr: "La traduction latine de la Bible réalisée par Saint Jérôme à la fin du 4ème siècle, qui est devenue la Bible officielle de l'Église d'Occident.",
      es: "La traducción latina de la Biblia completada por San Jerónimo a finales del siglo IV, que se convirtió en la Biblia oficial de la Iglesia Occidental.",
      de: "Die lateinische Übersetzung der Bibel, die der heilige Hieronymus im späten 4. Jahrhundert fertigstellte und die zur offiziellen Bibel der Westkirche wurde.",
    },
  },

  {
    id: "washing-feet",
    term: {
      en: "Washing of Feet",
      fr: "Lavement des pieds",
      es: "Lavatorio de los pies",
      de: "Fußwaschung",
    },
    definition: {
      en: "The ritual performed by Jesus at the Last Supper and repeated on Holy Thursday, symbolizing humble service and charity.",
      fr: "Le rituel accompli par Jésus lors de la Cène et répété le Jeudi Saint, symbolisant le service humble et la charité.",
      es: "El ritual realizado por Jesús en la Última Cena y repetido el Jueves Santo, que simboliza el servicio humilde y la caridad.",
      de: "Der Ritus, den Jesus beim letzten Abendmahl vollzog und der am Gründonnerstag wiederholt wird, als Symbol für demütigen Dienst und Nächstenliebe.",
    },
  },
  {
    id: "way-of-cross",
    term: {
      en: "Way of the Cross",
      fr: "Chemin de Croix",
      es: "Vía Crucis",
      de: "Kreuzweg",
    },
    definition: {
      en: "A pious devotion meditating on the journey of Jesus to Calvary, usually consisting of 14 stations.",
      fr: "Une dévotion pieuse méditant sur le chemin de Jésus vers le Calvaire, consistant généralement en 14 stations.",
      es: "Una devoción piadosa que medita sobre el viaje de Jesús al Calvario, que generalmente consta de 14 estaciones.",
      de: "Eine fromme Andacht, die den Weg Jesu nach Golgatha meditiert, meist bestehend aus 14 Stationen.",
    },
  },
  {
    id: "whitsunday",
    term: {
      en: "Whitsunday",
      fr: "Pentecôte",
      es: "Pentecostés",
      de: "Pfingstsonntag",
    },
    definition: {
      en: "An older English name for the feast of Pentecost, named for the white garments worn by the newly baptized.",
      fr: "Un ancien nom anglais pour la fête de la Pentecôte, nommé d'après les vêtements blancs portés par les nouveaux baptisés.",
      es: "Un nombre inglés antiguo para la fiesta de Pentecostés, llamado así por las vestiduras blancas que llevaban los recién bautizados.",
      de: "Ein älterer englischer Name für das Pfingstfest, benannt nach den weißen Gewändern der Neugetauften.",
    },
  },
  {
    id: "will-of-god",
    term: {
      en: "Will of God",
      fr: "Volonté de Dieu",
      es: "Voluntad de Dios",
      de: "Wille Gottes",
    },
    definition: {
      en: "The divine plan for humanity, which is always directed toward the good and the salvation of souls.",
      fr: "Le plan divin pour l'humanité, qui est toujours dirigé vers le bien et le salut des âmes.",
      es: "El plan divino para la humanidad, que siempre está dirigido hacia el bien y la salvación de las almas.",
      de: "Der göttliche Plan für die Menschheit, der immer auf das Gute und das Heil der Seelen ausgerichtet ist.",
    },
  },
  {
    id: "wine",
    term: { en: "Wine", fr: "Vin", es: "Vino", de: "Wein" },
    definition: {
      en: "Fermented grape juice which, along with unleavened bread, constitutes the matter of the Sacrament of the Eucharist.",
      fr: "Jus de raisin fermenté qui, avec le pain sans levain, constitue la matière du Sacrement de l'Eucharistie.",
      es: "Jugo de uva fermentado que, junto con el pan ácimo, constituye la materia del Sacramento de la Eucaristía.",
      de: "Vergorener Traubensaft, der zusammen mit ungesäuertem Brot die Materie des Sakraments der Eucharistie bildet.",
    },
  },
  {
    id: "wisdom",
    term: {
      en: "Wisdom",
      fr: "Sagesse",
      es: "Sabiduría",
      de: "Weisheit",
    },
    definition: {
      en: "The first gift of the Holy Spirit, enabling one to value spiritual things over worldly things and view life from God's perspective.",
      fr: "Le premier don du Saint-Esprit, permettant d'apprécier les choses spirituelles plus que les choses mondaines et de voir la vie du point de vue de Dieu.",
      es: "El primer don del Espíritu Santo, que permite valorar las cosas espirituales sobre las mundanas y ver la vida desde la perspectiva de Dios.",
      de: "Die erste Gabe des Heiligen Geistes, die es ermöglicht, geistliche Dinge höher zu schätzen als weltliche und das Leben aus Gottes Perspektive zu sehen.",
    },
  },
  {
    id: "witness",
    term: {
      en: "Witness",
      fr: "Témoin",
      es: "Testigo",
      de: "Zeuge",
    },
    definition: {
      en: "One who testifies to the truth of the faith, often by the example of their life (and sometimes death, i.e., martyrdom).",
      fr: "Celui qui témoigne de la vérité de la foi, souvent par l'exemple de sa vie (et parfois de sa mort, c'est-à-dire le martyre).",
      es: "Aquel que da testimonio de la verdad de la fe, a menudo con el ejemplo de su vida (y a veces muerte, es decir, martirio).",
      de: "Einer, der die Wahrheit des Glaubens bezeugt, oft durch das Beispiel seines Lebens (und manchmal seines Todes, d.h. Martyrium).",
    },
  },
  {
    id: "word-of-god",
    term: {
      en: "Word of God",
      fr: "Parole de Dieu",
      es: "Palabra de Dios",
      de: "Wort Gottes",
    },
    definition: {
      en: "A title for both the Sacred Scriptures and Jesus Christ himself (the Logos).",
      fr: "Un titre pour les Saintes Écritures et pour Jésus-Christ lui-même (le Logos).",
      es: "Un título tanto para las Sagradas Escrituras como para el mismo Jesucristo (el Logos).",
      de: "Ein Titel sowohl für die Heilige Schrift als auch für Jesus Christus selbst (der Logos).",
    },
  },
  {
    id: "works-of-mercy",
    term: {
      en: "Works of Mercy",
      fr: "Œuvres de miséricorde",
      es: "Obras de Misericordia",
      de: "Werke der Barmherzigkeit",
    },
    definition: {
      en: "Charitable actions by which we come to the aid of our neighbor in his spiritual and bodily necessities.",
      fr: "Actions charitables par lesquelles nous venons en aide à notre prochain dans ses nécessités spirituelles et corporelles.",
      es: "Acciones caritativas mediante las cuales socorremos a nuestro prójimo en sus necesidades espirituales y corporales.",
      de: "Barmherzige Handlungen, durch die wir unserem Nächsten in seinen geistigen und körperlichen Nöten zu Hilfe kommen.",
    },
  },
  {
    id: "worship",
    term: {
      en: "Worship",
      fr: "Culte (Adoration)",
      es: "Culto (Adoración)",
      de: "Gottesdienst",
    },
    definition: {
      en: "Adoration and honor given to God, which is the first act of the virtue of religion.",
      fr: "Adoration et honneur rendus à Dieu, qui est le premier acte de la vertu de religion.",
      es: "Adoración y honor dados a Dios, que es el primer acto de la virtud de la religión.",
      de: "Anbetung und Ehre, die Gott erwiesen wird, was der erste Akt der Tugend der Religion ist.",
    },
  },
  {
    id: "wrath",
    term: { en: "Wrath", fr: "Colère", es: "Ira", de: "Zorn" },
    definition: {
      en: "One of the seven capital sins; an uncontrolled feeling of anger and desire for revenge.",
      fr: "L'un des sept péchés capitaux ; un sentiment incontrôlé de colère et de désir de vengeance.",
      es: "Uno de los siete pecados capitales; un sentimiento incontrolado de enojo y deseo de venganza.",
      de: "Eine der sieben Todsünden; ein unkontrolliertes Gefühl von Wut und Rachegelüsten.",
    },
  },
  {
    id: "yahweh",
    term: {
      en: "Yahweh",
      fr: "Yahvé",
      es: "Yahvé",
      de: "Jahwe",
    },
    definition: {
      en: "The personal name of the God of Israel, revealed to Moses on Mount Sinai, meaning 'I Am who I Am.'",
      fr: "Le nom personnel du Dieu d'Israël, révélé à Moïse sur le mont Sinaï, signifiant 'Je Suis qui Je Suis'.",
      es: "El nombre personal del Dios de Israel, revelado a Moisés en el Monte Sinaí, que significa 'Yo Soy el que Soy'.",
      de: "Der persönliche Name des Gottes Israels, der Moses auf dem Berg Sinai offenbart wurde und 'Ich bin, der ich bin' bedeutet.",
    },
  },
  {
    id: "year-liturgical",
    term: {
      en: "Year, Liturgical",
      fr: "Année liturgique",
      es: "Año Litúrgico",
      de: "Kirchenjahr",
    },
    definition: {
      en: "The celebration throughout the year of the mysteries of the Lord's birth, life, death, and resurrection.",
      fr: "La célébration tout au long de l'année des mystères de la naissance, de la vie, de la mort et de la résurrection du Seigneur.",
      es: "La celebración a lo largo del año de los misterios del nacimiento, vida, muerte y resurrección del Señor.",
      de: "Die Feier der Geheimnisse der Geburt, des Lebens, des Todes und der Auferstehung des Herrn im Laufe des Jahres.",
    },
  },
  {
    id: "yoke",
    term: { en: "Yoke", fr: "Joug", es: "Yugo", de: "Joch" },
    definition: {
      en: "A metaphor used by Jesus for submission to his teaching: 'My yoke is easy and my burden is light.'",
      fr: "Une métaphore utilisée par Jésus pour la soumission à son enseignement : 'Mon joug est doux et mon fardeau léger.'",
      es: "Una metáfora utilizada por Jesús para la sumisión a su enseñanza: 'Mi yugo es suave y mi carga ligera'.",
      de: "Eine Metapher, die Jesus für die Unterwerfung unter seine Lehre verwendet: 'Mein Joch ist sanft und meine Last ist leicht.'",
    },
  },
  {
    id: "zeal",
    term: { en: "Zeal", fr: "Zèle", es: "Celo", de: "Eifer" },
    definition: {
      en: "Energetic and unflagging devotion to a cause, especially to the glory of God and the salvation of souls.",
      fr: "Dévouement énergique et inlassable à une cause, en particulier à la gloire de Dieu et au salut des âmes.",
      es: "Devoción enérgica e incansable a una causa, especialmente a la gloria de Dios y la salvación de las almas.",
      de: "Tatkräftige und unermüdliche Hingabe an eine Sache, insbesondere für die Ehre Gottes und das Heil der Seelen.",
    },
  },
  {
    id: "zion",
    term: { en: "Zion", fr: "Sion", es: "Sión", de: "Zion" },
    definition: {
      en: "A hill in Jerusalem; symbolically refers to the City of God, the Church, or Heaven.",
      fr: "Une colline à Jérusalem ; fait symboliquement référence à la Cité de Dieu, à l'Église ou au Ciel.",
      es: "Una colina en Jerusalén; simbólicamente se refiere a la Ciudad de Dios, la Iglesia o el Cielo.",
      de: "Ein Hügel in Jerusalem; bezieht sich symbolisch auf die Stadt Gottes, die Kirche oder den Himmel.",
    },
  },
  {
    id: "zucchetto",
    term: {
      en: "Zucchetto",
      fr: "Calotte",
      es: "Solideo",
      de: "Scheitelkäppchen",
    },
    definition: {
      en: "The small, round skullcap worn by Catholic clergy. The color denotes rank (White: Pope, Red: Cardinal, Purple: Bishop).",
      fr: "La petite calotte ronde portée par le clergé catholique. La couleur indique le rang (Blanc : Pape, Rouge : Cardinal, Violet : Évêque).",
      es: "El pequeño casquete redondo usado por el clero católico. El color denota el rango (Blanco: Papa, Rojo: Cardenal, Púrpura: Obispo).",
      de: "Das kleine, runde Käppchen, das vom katholischen Klerus getragen wird. Die Farbe zeigt den Rang an (Weiß: Papst, Rot: Kardinal, Violett: Bischof).",
    },
  },
  {
    id: "alb",
    term: { en: "Alb", fr: "Aube", es: "Alba", de: "Albe" },
    definition: {
      en: "A white vestment reaching to the feet, worn by clergy at Mass, symbolizing purity.",
      fr: "Un vêtement blanc descendant jusqu'aux pieds, porté par le clergé à la messe, symbolisant la pureté.",
      es: "Una vestidura blanca que llega hasta los pies, usada por el clero en la Misa, simbolizando la pureza.",
      de: "Ein weißes Gewand, das bis zu den Füßen reicht, vom Klerus bei der Messe getragen wird und Reinheit symbolisiert.",
    },
  },
  {
    id: "ambo",
    term: { en: "Ambo", fr: "Ambon", es: "Ambón", de: "Ambo" },
    definition: {
      en: "The stand or lectern in the sanctuary from which the Scripture readings are proclaimed and the homily is preached.",
      fr: "Le pupitre ou lutrin dans le sanctuaire d'où sont proclamées les lectures de l'Écriture et où est prêchée l'homélie.",
      es: "El atril o soporte en el presbiterio desde el cual se proclaman las lecturas de la Escritura y se predica la homilía.",
      de: "Das Pult oder Lesepult im Altarraum, von dem aus die Schriftlesungen verkündet und die Predigt gehalten wird.",
    },
  },
  {
    id: "cassock",
    term: {
      en: "Cassock",
      fr: "Soutane",
      es: "Sotana",
      de: "Soutane",
    },
    definition: {
      en: "A long, close-fitting garment worn by members of the clergy, usually black (for priests).",
      fr: "Un long vêtement ajusté porté par les membres du clergé, généralement noir (pour les prêtres).",
      es: "Una prenda larga y ajustada usada por miembros del clero, generalmente negra (para sacerdotes).",
      de: "Ein langes, eng anliegendes Gewand, das von Geistlichen getragen wird, meist schwarz (für Priester).",
    },
  },
  {
    id: "censer",
    term: {
      en: "Censer",
      fr: "Encensoir",
      es: "Incensario",
      de: "Rauchfass",
    },
    definition: {
      en: "A metal vessel suspended from chains, in which incense is burned during liturgical services.",
      fr: "Un récipient en métal suspendu à des chaînes, dans lequel on brûle de l'encens pendant les services liturgiques.",
      es: "Un recipiente de metal suspendido de cadenas, en el cual se quema incienso durante los servicios litúrgicos.",
      de: "Ein an Ketten aufgehängtes Metallgefäß, in dem während liturgischer Dienste Weihrauch verbrannt wird.",
    },
  },
  {
    id: "crozier",
    term: {
      en: "Crozier",
      fr: "Crosse",
      es: "Báculo",
      de: "Krummstab",
    },
    definition: {
      en: "The staff carried by a bishop, shaped like a shepherd's crook, symbolizing his role as pastor of the flock.",
      fr: "Le bâton porté par un évêque, en forme de houlette de berger, symbolisant son rôle de pasteur du troupeau.",
      es: "El bastón llevado por un obispo, con forma de cayado de pastor, que simboliza su papel como pastor del rebaño.",
      de: "Der Stab, den ein Bischof trägt, geformt wie ein Hirtenstab, der seine Rolle als Hirte der Herde symbolisiert.",
    },
  },
  {
    id: "dalmatic",
    term: {
      en: "Dalmatic",
      fr: "Dalmatique",
      es: "Dalmática",
      de: "Dalmatik",
    },
    definition: {
      en: "The wide-sleeved outer vestment worn by a deacon during the celebration of Mass.",
      fr: "Le vêtement extérieur à manches larges porté par un diacre lors de la célébration de la messe.",
      es: "La vestidura exterior de mangas anchas usada por un diácono durante la celebración de la Misa.",
      de: "Das weitärmelige Obergewand, das von einem Diakon während der Messfeier getragen wird.",
    },
  },
  {
    id: "humeral-veil",
    term: {
      en: "Humeral Veil",
      fr: "Voile huméral",
      es: "Paño de hombros",
      de: "Velum",
    },
    definition: {
      en: "A long cloth worn over the shoulders by the priest when holding the monstrance during Benediction.",
      fr: "Un long tissu porté sur les épaules par le prêtre lorsqu'il tient l'ostensoir pendant la Bénédiction.",
      es: "Un paño largo usado sobre los hombros por el sacerdote cuando sostiene la custodia durante la Bendición.",
      de: "Ein langes Tuch, das der Priester über den Schultern trägt, wenn er die Monstranz während des Segens hält.",
    },
  },
  {
    id: "paten",
    term: {
      en: "Paten",
      fr: "Patène",
      es: "Patena",
      de: "Patene",
    },
    definition: {
      en: "A small shallow plate, usually gold or silver, used to hold the Eucharistic host.",
      fr: "Une petite assiette peu profonde, généralement en or ou en argent, utilisée pour contenir l'hostie eucharistique.",
      es: "Un plato pequeño y poco profundo, generalmente de oro o plata, utilizado para sostener la hostia eucarística.",
      de: "Ein kleiner flacher Teller, meist aus Gold oder Silber, der die eucharistische Hostie trägt.",
    },
  },
  {
    id: "stole",
    term: {
      en: "Stole",
      fr: "Étole",
      es: "Estola",
      de: "Stola",
    },
    definition: {
      en: "A long, narrow strip of cloth worn around the neck by priests and bishops; a sign of priestly authority.",
      fr: "Une longue bande de tissu étroite portée autour du cou par les prêtres et les évêques ; un signe de l'autorité sacerdotale.",
      es: "Una tira larga y estrecha de tela usada alrededor del cuello por sacerdotes y obispos; un signo de autoridad sacerdotal.",
      de: "Ein langer, schmaler Stoffstreifen, der von Priestern und Bischöfen um den Hals getragen wird; ein Zeichen priesterlicher Autorität.",
    },
  },
  {
    id: "surplice",
    term: {
      en: "Surplice",
      fr: "Surplis",
      es: "Roquete",
      de: "Chorrock",
    },
    definition: {
      en: "A white linen vestment with wide sleeves, worn over a cassock by clergy and altar servers.",
      fr: "Un vêtement en lin blanc à manches larges, porté sur une soutane par le clergé et les servants d'autel.",
      es: "Una vestidura de lino blanco con mangas anchas, usada sobre una sotana por el clero y los monaguillos.",
      de: "Ein weißes Leinengewand mit weiten Ärmeln, das von Klerikern und Messdienern über einer Soutane getragen wird.",
    },
  },
  {
    id: "thurible",
    term: {
      en: "Thurible",
      fr: "Encensoir",
      es: "Incensario",
      de: "Rauchfass",
    },
    definition: {
      en: "The metal container in which incense is burned; another name for a censer.",
      fr: "Le récipient en métal dans lequel l'encens est brûlé ; un autre nom pour l'encensoir.",
      es: "El recipiente de metal en el que se quema el incienso; otro nombre para el incensario.",
      de: "Der Metallbehälter, in dem Weihrauch verbrannt wird; ein anderer Name für das Rauchfass.",
    },
  },

  // --- Thomistic Words ---
  {
    id: "accident",
    term: {
      en: "Accident",
      fr: "Accident",
      es: "Accidente",
      de: "Akzidens",
    },
    definition: {
      en: "In philosophy, a property or quality that inheres in a substance and is not essential to its nature (e.g., color, size).",
      fr: "En philosophie, une propriété ou qualité qui réside dans une substance et n'est pas essentielle à sa nature (par ex. couleur, taille).",
      es: "En filosofía, una propiedad o cualidad que inhere en una sustancia y no es esencial a su naturaleza (p. ej., color, tamaño).",
      de: "In der Philosophie eine Eigenschaft oder Qualität, die einer Substanz innewohnt und nicht wesentlich für ihre Natur ist (z. B. Farbe, Größe).",
    },
  },
  {
    id: "act-actus",
    term: {
      en: "Act (Actus)",
      fr: "Acte (Actus)",
      es: "Acto (Actus)",
      de: "Akt (Actus)",
    },
    definition: {
      en: "The perfection or realization of a potentiality; the state of being actual or fully real.",
      fr: "La perfection ou la réalisation d'une potentialité ; l'état d'être actuel ou pleinement réel.",
      es: "La perfección o realización de una potencialidad; el estado de ser actual o plenamente real.",
      de: "Die Vollkommenheit oder Verwirklichung einer Potenz; der Zustand des Wirklichen oder voll Realen.",
    },
  },
  {
    id: "agent-intellect",
    term: {
      en: "Agent Intellect",
      fr: "Intellect Agent",
      es: "Intelecto Agente",
      de: "Tätiger Verstand (Intellectus Agens)",
    },
    definition: {
      en: "The power of the mind that abstracts universal forms from sensory images (phantasms) to make them intelligible.",
      fr: "Le pouvoir de l'esprit qui abstrait les formes universelles des images sensorielles (phantasmes) pour les rendre intelligibles.",
      es: "El poder de la mente que abstrae formas universales de las imágenes sensoriales (fantasmas) para hacerlas inteligibles.",
      de: "Die Kraft des Geistes, die universale Formen von Sinnesbildern (Phantasmen) abstrahiert, um sie verständlich zu machen.",
    },
  },
  {
    id: "analogia-entis",
    term: {
      en: "Analogia Entis",
      fr: "Analogie de l'Être",
      es: "Analogía del Ser",
      de: "Analogia Entis",
    },
    definition: {
      en: "The 'Analogy of Being'; the doctrine that being is predicted of God and creatures not univocally or equivocally, but analogically.",
      fr: "L'« Analogie de l'Être » ; la doctrine selon laquelle l'être est prédiqué de Dieu et des créatures ni univoquement ni équivoquement, mais analogiquement.",
      es: "La 'Analogía del Ser'; la doctrina de que el ser se predica de Dios y de las criaturas no unívocamente ni equívocamente, sino analógicamente.",
      de: "Die 'Analogie des Seins'; die Lehre, dass das Sein von Gott und den Geschöpfen weder univok noch äquivok, sondern analog ausgesagt wird.",
    },
  },
  {
    id: "appetite",
    term: {
      en: "Appetite",
      fr: "Appétit",
      es: "Apetito",
      de: "Appetit (Strebevermögen)",
    },
    definition: {
      en: "An internal inclination or tendency of a thing toward a good; can be natural, sensitive, or rational (will).",
      fr: "Une inclination ou tendance interne d'une chose vers un bien ; peut être naturel, sensible ou rationnel (volonté).",
      es: "Una inclinación o tendencia interna de una cosa hacia un bien; puede ser natural, sensible o racional (voluntad).",
      de: "Eine innere Neigung oder Tendenz einer Sache zu einem Gut hin; kann natürlich, sinnlich oder rational (Wille) sein.",
    },
  },
  {
    id: "aseity",
    term: {
      en: "Aseity",
      fr: "Aséité",
      es: "Aseidad",
      de: "Aseität",
    },
    definition: {
      en: "The attribute of God whereby He exists of Himself (a se), deriving His existence from no other source.",
      fr: "L'attribut de Dieu par lequel Il existe par Lui-même (a se), ne tirant Son existence d'aucune autre source.",
      es: "El atributo de Dios por el cual Él existe por Sí mismo (a se), sin derivar Su existencia de ninguna otra fuente.",
      de: "Das Attribut Gottes, durch das Er aus sich selbst heraus existiert (a se) und Seine Existenz aus keiner anderen Quelle ableitet.",
    },
  },
  {
    id: "beatitude",
    term: {
      en: "Beatitude",
      fr: "Béatitude",
      es: "Beatitud",
      de: "Beseligung",
    },
    definition: {
      en: "Perfect happiness or blessedness; the ultimate end of human existence, consisting in the vision of God.",
      fr: "Bonheur parfait ou félicité ; la fin ultime de l'existence humaine, consistant en la vision de Dieu.",
      es: "Felicidad perfecta o bienaventuranza; el fin último de la existencia humana, que consiste en la visión de Dios.",
      de: "Vollkommenes Glück oder Seligkeit; das letzte Ziel der menschlichen Existenz, bestehend in der Schau Gottes.",
    },
  },
  {
    id: "being-ens",
    term: {
      en: "Being (Ens)",
      fr: "Être (Ens)",
      es: "Ser (Ens)",
      de: "Sein (Ens)",
    },
    definition: {
      en: "That which exists or has existence; the most universal concept in Thomistic metaphysics.",
      fr: "Ce qui existe ou a l'existence ; le concept le plus universel de la métaphysique thomiste.",
      es: "Aquello que existe o tiene existencia; el concepto más universal en la metafísica tomista.",
      de: "Das, was existiert oder Existenz hat; der universellste Begriff in der thomistischen Metaphysik.",
    },
  },
  {
    id: "cause",
    term: {
      en: "Cause",
      fr: "Cause",
      es: "Causa",
      de: "Ursache",
    },
    definition: {
      en: "A principle from which something else proceeds with a dependence in being; Aristotle/Aquinas distinguish four types (material, formal, efficient, final).",
      fr: "Un principe d'où procède quelque chose d'autre avec une dépendance dans l'être ; Aristote/Aquin en distinguent quatre types (matérielle, formelle, efficiente, finale).",
      es: "Un principio del cual procede algo más con una dependencia en el ser; Aristóteles/Aquino distinguen cuatro tipos (material, formal, eficiente, final).",
      de: "Ein Prinzip, aus dem etwas anderes mit einer Abhängigkeit im Sein hervorgeht; Aristoteles/Thomas unterscheiden vier Typen (Stoff-, Form-, Wirk-, Zweckursache).",
    },
  },
  {
    id: "common-good",
    term: {
      en: "Common Good",
      fr: "Bien Commun",
      es: "Bien Común",
      de: "Gemeinwohl",
    },
    definition: {
      en: "The sum total of social conditions which allow people, either as groups or as individuals, to reach their fulfillment more fully and more easily.",
      fr: "L'ensemble des conditions sociales qui permettent aux personnes, tant en groupe qu'individuellement, d'atteindre leur accomplissement plus pleinement et plus facilement.",
      es: "El conjunto de condiciones sociales que permiten a las personas, ya sea como grupos o como individuos, alcanzar su plenitud más total y fácilmente.",
      de: "Die Gesamtheit der sozialen Bedingungen, die es den Menschen ermöglichen, entweder als Gruppen oder als Individuen ihre Erfüllung vollständiger und leichter zu erreichen.",
    },
  },
  {
    id: "concupiscible",
    term: {
      en: "Concupiscible Appetite",
      fr: "Appétit Concupiscible",
      es: "Apetito Concupiscible",
      de: "Begehrungsvermögen",
    },
    definition: {
      en: "The sensory appetite concerned with sensible goods that are easy to obtain or avoid (e.g., love, hate, desire, aversion).",
      fr: "L'appétit sensoriel concerné par les biens sensibles faciles à obtenir ou à éviter (par ex. amour, haine, désir, aversion).",
      es: "El apetito sensorial que se ocupa de los bienes sensibles que son fáciles de obtener o evitar (p. ej., amor, odio, deseo, aversión).",
      de: "Das sinnliche Begehren, das sich auf sinnliche Güter bezieht, die leicht zu erlangen oder zu vermeiden sind (z. B. Liebe, Hass, Begierde, Abneigung).",
    },
  },
  {
    id: "contingency",
    term: {
      en: "Contingency",
      fr: "Contingence",
      es: "Contingencia",
      de: "Kontingenz",
    },
    definition: {
      en: "The state of beings that exist but could have not existed; dependency on a necessary being (God) for existence.",
      fr: "L'état des êtres qui existent mais auraient pu ne pas exister ; dépendance à l'égard d'un être nécessaire (Dieu) pour l'existence.",
      es: "El estado de los seres que existen pero podrían no haber existido; dependencia de un ser necesario (Dios) para la existencia.",
      de: "Der Zustand von Wesen, die existieren, aber auch nicht hätten existieren können; Abhängigkeit von einem notwendigen Wesen (Gott) für die Existenz.",
    },
  },
  {
    id: "corporeal",
    term: {
      en: "Corporeal",
      fr: "Corporel",
      es: "Corpóreo",
      de: "Körperlich",
    },
    definition: {
      en: "Having a body; material. Angels are incorporeal; humans are corporeal beings.",
      fr: "Ayant un corps ; matériel. Les anges sont incorporels ; les humains sont des êtres corporels.",
      es: "Que tiene cuerpo; material. Los ángeles son incorpóreos; los humanos son seres corpóreos.",
      de: "Einen Körper habend; materiell. Engel sind unkörperlich; Menschen sind körperliche Wesen.",
    },
  },
  {
    id: "divine-simplicity",
    term: {
      en: "Divine Simplicity",
      fr: "Simplicité Divine",
      es: "Simplicidad Divina",
      de: "Göttliche Einfachheit",
    },
    definition: {
      en: "The doctrine that God has no parts, whether spatial, temporal, or metaphysical; His essence is identical to His existence.",
      fr: "La doctrine selon laquelle Dieu n'a pas de parties, qu'elles soient spatiales, temporelles ou métaphysiques ; Son essence est identique à Son existence.",
      es: "La doctrina de que Dios no tiene partes, ya sean espaciales, temporales o metafísicas; Su esencia es idéntica a Su existencia.",
      de: "Die Lehre, dass Gott keine Teile hat, weder räumliche, zeitliche noch metaphysische; Sein Wesen ist identisch mit Seiner Existenz.",
    },
  },
  {
    id: "efficient-cause",
    term: {
      en: "Efficient Cause",
      fr: "Cause Efficiente",
      es: "Causa Eficiente",
      de: "Wirkursache",
    },
    definition: {
      en: "The agent or force that brings something into being or initiates change (e.g., the sculptor of a statue).",
      fr: "L'agent ou la force qui fait exister quelque chose ou initie un changement (par ex., le sculpteur d'une statue).",
      es: "El agente o fuerza que trae algo a la existencia o inicia un cambio (p. ej., el escultor de una estatua).",
      de: "Der Akteur oder die Kraft, die etwas ins Dasein bringt oder eine Veränderung einleitet (z. B. der Bildhauer einer Statue).",
    },
  },
  {
    id: "essence-essentia",
    term: {
      en: "Essence",
      fr: "Essence",
      es: "Esencia",
      de: "Wesen (Essenz)",
    },
    definition: {
      en: "What a thing is; the nature or 'quiddity' of a thing, distinct from its act of existing (except in God).",
      fr: "Ce qu'est une chose ; la nature ou la « quiddité » d'une chose, distincte de son acte d'exister (sauf en Dieu).",
      es: "Lo que una cosa es; la naturaleza o 'quididad' de una cosa, distinta de su acto de existir (excepto en Dios).",
      de: "Was ein Ding ist; die Natur oder 'Quidditas' eines Dinges, unterschieden von seinem Existenzakt (außer in Gott).",
    },
  },
  {
    id: "eternal-law",
    term: {
      en: "Eternal Law",
      fr: "Loi Éternelle",
      es: "Ley Eterna",
      de: "Ewiges Gesetz",
    },
    definition: {
      en: "The plan of divine wisdom as directing all acts and movements; the source of natural and human law.",
      fr: "Le plan de la sagesse divine dirigeant tous les actes et mouvements ; la source de la loi naturelle et humaine.",
      es: "El plan de la sabiduría divina que dirige todos los actos y movimientos; la fuente de la ley natural y humana.",
      de: "Der Plan der göttlichen Weisheit, der alle Handlungen und Bewegungen lenkt; die Quelle des natürlichen und menschlichen Gesetzes.",
    },
  },
  {
    id: "eternity",
    term: {
      en: "Eternity",
      fr: "Éternité",
      es: "Eternidad",
      de: "Ewigkeit",
    },
    definition: {
      en: "The simultaneously whole and perfect possession of interminable life; the mode of existence proper to God.",
      fr: "La possession simultanément entière et parfaite d'une vie interminable ; le mode d'existence propre à Dieu.",
      es: "La posesión simultáneamente entera y perfecta de una vida interminable; el modo de existencia propio de Dios.",
      de: "Der zugleich ganze und vollkommene Besitz unbegrenzbaren Lebens; die Gott eigene Existenzweise.",
    },
  },
  {
    id: "evil-privation",
    term: {
      en: "Evil (as Privation)",
      fr: "Mal (comme Privation)",
      es: "Mal (como Privación)",
      de: "Böses (als Mangel)",
    },
    definition: {
      en: "Evil is not a positive substance but the lack (privatio) of a due good in a subject.",
      fr: "Le mal n'est pas une substance positive mais le manque (privatio) d'un bien dû dans un sujet.",
      es: "El mal no es una sustancia positiva sino la falta (privatio) de un bien debido en un sujeto.",
      de: "Das Böse ist keine positive Substanz, sondern der Mangel (privatio) eines geschuldeten Gutes in einem Subjekt.",
    },
  },
  {
    id: "existence-esse",
    term: {
      en: "Existence (Esse)",
      fr: "Existence (Esse)",
      es: "Existencia (Esse)",
      de: "Existenz (Esse)",
    },
    definition: {
      en: "The act of being; that by which a thing is real. In creatures, existence is distinct from essence.",
      fr: "L'acte d'être ; ce par quoi une chose est réelle. Chez les créatures, l'existence est distincte de l'essence.",
      es: "El acto de ser; aquello por lo cual una cosa es real. En las criaturas, la existencia es distinta de la esencia.",
      de: "Der Akt des Seins; das, wodurch ein Ding wirklich ist. Bei Geschöpfen ist die Existenz vom Wesen verschieden.",
    },
  },
  {
    id: "faculty",
    term: {
      en: "Faculty",
      fr: "Faculté",
      es: "Facultad",
      de: "Vermögen",
    },
    definition: {
      en: "A power or ability of the soul to perform specific operations (e.g., the intellect is a faculty of the soul).",
      fr: "Un pouvoir ou une capacité de l'âme à accomplir des opérations spécifiques (par ex., l'intellect est une faculté de l'âme).",
      es: "Un poder o capacidad del alma para realizar operaciones específicas (p. ej., el intelecto es una facultad del alma).",
      de: "Eine Kraft oder Fähigkeit der Seele, bestimmte Operationen auszuführen (z. B. ist der Verstand ein Vermögen der Seele).",
    },
  },
  {
    id: "final-cause",
    term: {
      en: "Final Cause",
      fr: "Cause Finale",
      es: "Causa Final",
      de: "Zweckursache",
    },
    definition: {
      en: "The end, goal, or purpose for which a thing exists or an action is performed; 'that for the sake of which'.",
      fr: "La fin, le but ou l'objectif pour lequel une chose existe ou une action est accomplie ; « ce en vue de quoi ».",
      es: "El fin, meta o propósito por el cual existe una cosa o se realiza una acción; 'aquello por lo cual'.",
      de: "Das Ende, Ziel oder der Zweck, für den ein Ding existiert oder eine Handlung ausgeführt wird; 'das, um dessentwillen'.",
    },
  },
  {
    id: "first-mover",
    term: {
      en: "First Mover",
      fr: "Premier Moteur",
      es: "Primer Motor",
      de: "Erster Beweger",
    },
    definition: {
      en: "God considered as the ultimate source of all motion and change, Himself unmoved.",
      fr: "Dieu considéré comme la source ultime de tout mouvement et changement, Lui-même immobile.",
      es: "Dios considerado como la fuente última de todo movimiento y cambio, Él mismo inmóvil.",
      de: "Gott als die letzte Quelle aller Bewegung und Veränderung, Er selbst unbewegt.",
    },
  },
  {
    id: "form-forma",
    term: {
      en: "Form (Forma)",
      fr: "Forme (Forma)",
      es: "Forma (Forma)",
      de: "Form (Forma)",
    },
    definition: {
      en: "The principle that determines matter to be a specific kind of thing; the essence or nature of an object.",
      fr: "Le principe qui détermine la matière à être un type spécifique de chose ; l'essence ou la nature d'un objet.",
      es: "El principio que determina que la materia sea un tipo específico de cosa; la esencia o naturaleza de un objeto.",
      de: "Das Prinzip, das die Materie dazu bestimmt, eine bestimmte Art von Ding zu sein; das Wesen oder die Natur eines Objekts.",
    },
  },
  {
    id: "formal-cause",
    term: {
      en: "Formal Cause",
      fr: "Cause Formelle",
      es: "Causa Formal",
      de: "Formursache",
    },
    definition: {
      en: "The pattern, structure, or essence that makes a thing what it is (e.g., the shape of a statue).",
      fr: "Le modèle, la structure ou l'essence qui fait qu'une chose est ce qu'elle est (par ex., la forme d'une statue).",
      es: "El patrón, estructura o esencia que hace que una cosa sea lo que es (p. ej., la forma de una estatua).",
      de: "Das Muster, die Struktur oder das Wesen, das ein Ding zu dem macht, was es ist (z. B. die Form einer Statue).",
    },
  },
  {
    id: "habit-habitus",
    term: {
      en: "Habit (Habitus)",
      fr: "Habitus",
      es: "Hábito",
      de: "Habitus",
    },
    definition: {
      en: "A stable disposition or quality of the soul that inclines one to act in a certain way (e.g., virtues are good habits).",
      fr: "Une disposition stable ou une qualité de l'âme qui incline à agir d'une certaine manière (par ex., les vertus sont de bons habitus).",
      es: "Una disposición estable o cualidad del alma que inclina a actuar de cierta manera (p. ej., las virtudes son buenos hábitos).",
      de: "Eine stabile Neigung oder Qualität der Seele, die dazu neigt, auf eine bestimmte Weise zu handeln (z. B. sind Tugenden gute Gewohnheiten).",
    },
  },
  {
    id: "hylomorphism",
    term: {
      en: "Hylomorphism",
      fr: "Hylémorphisme",
      es: "Hilomorfismo",
      de: "Hylomorphismus",
    },
    definition: {
      en: "The theory that every physical object is composed of two principles: matter (hyle) and form (morphe).",
      fr: "La théorie selon laquelle tout objet physique est composé de deux principes : la matière (hyle) et la forme (morphè).",
      es: "La teoría de que todo objeto físico está compuesto por dos principios: materia (hylé) y forma (morphé).",
      de: "Die Theorie, dass jedes physische Objekt aus zwei Prinzipien besteht: Materie (Hyle) und Form (Morphe).",
    },
  },
  {
    id: "hypostatic-union",
    term: {
      en: "Hypostatic Union",
      fr: "Union Hypostatique",
      es: "Unión Hipostática",
      de: "Hypostatische Union",
    },
    definition: {
      en: "The union of the divine and human natures in the one divine Person (Hypostasis) of Jesus Christ.",
      fr: "L'union des natures divine et humaine dans la seule Personne divine (Hypostase) de Jésus-Christ.",
      es: "La unión de las naturalezas divina y humana en la única Persona divina (Hipóstasis) de Jesucristo.",
      de: "Die Vereinigung der göttlichen und menschlichen Natur in der einen göttlichen Person (Hypostase) Jesu Christi.",
    },
  },
  {
    id: "immutability",
    term: {
      en: "Immutability",
      fr: "Immutabilité",
      es: "Inmutabilidad",
      de: "Unveränderlichkeit",
    },
    definition: {
      en: "The attribute of God meaning He is unchanging in His nature, will, and existence.",
      fr: "L'attribut de Dieu signifiant qu'Il est immuable dans Sa nature, Sa volonté et Son existence.",
      es: "El atributo de Dios que significa que Él es inmutable en Su naturaleza, voluntad y existencia.",
      de: "Das Attribut Gottes, das bedeutet, dass Er in Seinem Wesen, Seinem Willen und Seiner Existenz unveränderlich ist.",
    },
  },
  {
    id: "incorporeal",
    term: {
      en: "Incorporeal",
      fr: "Incorporel",
      es: "Incorpóreo",
      de: "Unkörperlich",
    },
    definition: {
      en: "Lacking a physical body; purely spiritual (e.g., God, angels, the human soul).",
      fr: "Dépourvu de corps physique ; purement spirituel (par ex., Dieu, les anges, l'âme humaine).",
      es: "Que carece de cuerpo físico; puramente espiritual (p. ej., Dios, los ángeles, el alma humana).",
      de: "Ohne physischen Körper; rein geistig (z. B. Gott, Engel, die menschliche Seele).",
    },
  },
  {
    id: "intellect",
    term: {
      en: "Intellect",
      fr: "Intellect",
      es: "Intelecto",
      de: "Intellekt (Verstand)",
    },
    definition: {
      en: "The faculty of the soul used for thinking, understanding, and grasping universal truths.",
      fr: "La faculté de l'âme utilisée pour penser, comprendre et saisir les vérités universelles.",
      es: "La facultad del alma utilizada para pensar, comprender y captar verdades universales.",
      de: "Das Vermögen der Seele, das zum Denken, Verstehen und Erfassen universaler Wahrheiten dient.",
    },
  },
  {
    id: "intelligible-species",
    term: {
      en: "Intelligible Species",
      fr: "Espèce Intelligible",
      es: "Especie Inteligible",
      de: "Erkenntnisbild (Species Intelligibilis)",
    },
    definition: {
      en: "The cognitive likeness of an object in the mind, by which the intellect understands the object.",
      fr: "La ressemblance cognitive d'un objet dans l'esprit, par laquelle l'intellect comprend l'objet.",
      es: "La semejanza cognitiva de un objeto en la mente, mediante la cual el intelecto comprende el objeto.",
      de: "Das erkenntnismäßige Abbild eines Objekts im Geist, durch das der Verstand das Objekt begreift.",
    },
  },
  {
    id: "irascible",
    term: {
      en: "Irascible Appetite",
      fr: "Appétit Irascible",
      es: "Apetito Irascible",
      de: "Irascible (Zornmütiges Begehren)",
    },
    definition: {
      en: "The sensory appetite concerned with arduous goods—goods that are difficult to attain or evils difficult to avoid (e.g., hope, despair, courage, anger).",
      fr: "L'appétit sensoriel concerné par les biens ardus — les biens difficiles à atteindre ou les maux difficiles à éviter (par ex., espoir, désespoir, courage, colère).",
      es: "El apetito sensorial que se ocupa de los bienes arduos: bienes difíciles de alcanzar o males difíciles de evitar (p. ej., esperanza, desesperación, valentía, ira).",
      de: "Das sinnliche Begehren, das sich auf schwierige Güter bezieht – Güter, die schwer zu erreichen oder Übel, die schwer zu vermeiden sind (z. B. Hoffnung, Verzweiflung, Mut, Zorn).",
    },
  },
  {
    id: "justice-virtue",
    term: {
      en: "Justice",
      fr: "Justice",
      es: "Justicia",
      de: "Gerechtigkeit",
    },
    definition: {
      en: "The cardinal virtue consisting in the constant and firm will to give their due to God and neighbor.",
      fr: "La vertu cardinale consistant en la volonté constante et ferme de rendre leur dû à Dieu et au prochain.",
      es: "La virtud cardinal que consiste en la constante y firme voluntad de dar lo debido a Dios y al prójimo.",
      de: "Die Kardinaltugend, die in dem beständigen und festen Willen besteht, Gott und dem Nächsten das zu geben, was ihnen gebührt.",
    },
  },
  {
    id: "matter-materia",
    term: {
      en: "Matter (Materia)",
      fr: "Matière (Materia)",
      es: "Materia (Materia)",
      de: "Materie (Materia)",
    },
    definition: {
      en: "The principle of potentiality in physical things; that out of which something is made.",
      fr: "Le principe de potentialité dans les choses physiques ; ce dont quelque chose est fait.",
      es: "El principio de potencialidad en las cosas físicas; aquello de lo que algo está hecho.",
      de: "Das Prinzip der Potenzialität in physischen Dingen; das, woraus etwas gemacht ist.",
    },
  },
  {
    id: "metaphysics",
    term: {
      en: "Metaphysics",
      fr: "Métaphysique",
      es: "Metafísica",
      de: "Metaphysik",
    },
    definition: {
      en: "The branch of philosophy investigating the fundamental nature of being and reality (being as being).",
      fr: "La branche de la philosophie qui étudie la nature fondamentale de l'être et de la réalité (l'être en tant qu'être).",
      es: "La rama de la filosofía que investiga la naturaleza fundamental del ser y la realidad (el ser en cuanto ser).",
      de: "Der Zweig der Philosophie, der die fundamentale Natur des Seins und der Realität untersucht (das Sein als Sein).",
    },
  },
  {
    id: "motion-motus",
    term: {
      en: "Motion (Motus)",
      fr: "Mouvement (Motus)",
      es: "Movimiento (Motus)",
      de: "Bewegung (Motus)",
    },
    definition: {
      en: "The reduction of potentiality to actuality; change.",
      fr: "La réduction de la potentialité à l'actualité ; le changement.",
      es: "La reducción de la potencialidad a la actualidad; el cambio.",
      de: "Die Überführung von Potenz in Akt; Veränderung.",
    },
  },
  {
    id: "natural-reason",
    term: {
      en: "Natural Reason",
      fr: "Raison Naturelle",
      es: "Razón Natural",
      de: "Natürliche Vernunft",
    },
    definition: {
      en: "The capacity of the human mind to know truth without the aid of divine revelation.",
      fr: "La capacité de l'esprit humain à connaître la vérité sans l'aide de la révélation divine.",
      es: "La capacidad de la mente humana para conocer la verdad sin la ayuda de la revelación divina.",
      de: "Die Fähigkeit des menschlichen Geistes, die Wahrheit ohne die Hilfe göttlicher Offenbarung zu erkennen.",
    },
  },
  {
    id: "necessity",
    term: {
      en: "Necessity",
      fr: "Nécessité",
      es: "Necesidad",
      de: "Notwendigkeit",
    },
    definition: {
      en: "The state of a being that must exist and cannot not exist (God). Opposed to contingency.",
      fr: "L'état d'un être qui doit exister et ne peut pas ne pas exister (Dieu). Opposé à la contingence.",
      es: "El estado de un ser que debe existir y no puede no existir (Dios). Opuesto a la contingencia.",
      de: "Der Zustand eines Wesens, das existieren muss und nicht nicht existieren kann (Gott). Entgegengesetzt zur Kontingenz.",
    },
  },
  {
    id: "participation",
    term: {
      en: "Participation",
      fr: "Participation",
      es: "Participación",
      de: "Teilhabe (Partizipation)",
    },
    definition: {
      en: "The metaphysical concept where a limited being shares in a perfection (like being or goodness) from a higher source, without exhausting it.",
      fr: "Le concept métaphysique où un être limité partage une perfection (comme l'être ou la bonté) d'une source supérieure, sans l'épuiser.",
      es: "El concepto metafísico donde un ser limitado participa en una perfección (como el ser o la bondad) de una fuente superior, sin agotarla.",
      de: "Das metaphysische Konzept, bei dem ein begrenztes Wesen an einer Vollkommenheit (wie Sein oder Güte) aus einer höheren Quelle teilhat, ohne sie zu erschöpfen.",
    },
  },
  {
    id: "passive-intellect",
    term: {
      en: "Passive Intellect",
      fr: "Intellect Passif (Possible)",
      es: "Intelecto Pasivo (Posible)",
      de: "Möglicher Verstand (Intellectus Possibilis)",
    },
    definition: {
      en: "The aspect of the mind that receives the intelligible forms abstracted by the agent intellect; the 'slate' on which thoughts are written.",
      fr: "L'aspect de l'esprit qui reçoit les formes intelligibles abstraites par l'intellect agent ; l'« ardoise » sur laquelle les pensées sont écrites.",
      es: "El aspecto de la mente que recibe las formas inteligibles abstraídas por el intelecto agente; la 'pizarra' en la que se escriben los pensamientos.",
      de: "Der Aspekt des Geistes, der die vom tätigen Verstand abstrahierten intelligiblen Formen empfängt; die 'Tafel', auf die Gedanken geschrieben werden.",
    },
  },
  {
    id: "phantasm",
    term: {
      en: "Phantasm",
      fr: "Phantasme",
      es: "Fantasma",
      de: "Phantasma",
    },
    definition: {
      en: "A sensory image stored in the imagination, from which the intellect abstracts universal concepts.",
      fr: "Une image sensorielle stockée dans l'imagination, à partir de laquelle l'intellect abstrait des concepts universels.",
      es: "Una imagen sensorial almacenada en la imaginación, de la cual el intelecto abstrae conceptos universales.",
      de: "Ein in der Vorstellung gespeichertes Sinnesbild, von dem der Verstand universale Konzepte abstrahiert.",
    },
  },
  {
    id: "potency",
    term: {
      en: "Potency (Potentia)",
      fr: "Puissance (Potentia)",
      es: "Potencia (Potentia)",
      de: "Potenz (Potentia)",
    },
    definition: {
      en: "The capacity or potential to be or to change; opposed to act (actuality).",
      fr: "La capacité ou le potentiel d'être ou de changer ; opposé à l'acte (actualité).",
      es: "La capacidad o potencial de ser o cambiar; opuesto al acto (actualidad).",
      de: "Die Fähigkeit oder das Potenzial zu sein oder sich zu ändern; im Gegensatz zum Akt (Wirklichkeit).",
    },
  },
  {
    id: "preambula-fidei",
    term: {
      en: "Preambula Fidei",
      fr: "Préambules de la Foi",
      es: "Preámbulos de la Fe",
      de: "Präambeln des Glaubens",
    },
    definition: {
      en: "Truths about God (e.g., His existence) that can be known by natural reason, serving as a foundation for faith.",
      fr: "Vérités sur Dieu (par ex., Son existence) qui peuvent être connues par la raison naturelle, servant de fondement à la foi.",
      es: "Verdades sobre Dios (p. ej., Su existencia) que pueden conocerse por la razón natural, sirviendo como fundamento para la fe.",
      de: "Wahrheiten über Gott (z. B. Seine Existenz), die durch die natürliche Vernunft erkannt werden können und als Grundlage für den Glauben dienen.",
    },
  },
  {
    id: "prime-matter",
    term: {
      en: "Prime Matter",
      fr: "Matière Première",
      es: "Materia Prima",
      de: "Urmaterie (Materia Prima)",
    },
    definition: {
      en: "Pure potentiality; matter without any form, which underlies all physical change.",
      fr: "Pure potentialité ; matière sans aucune forme, qui sous-tend tout changement physique.",
      es: "Pura potencialidad; materia sin ninguna forma, que subyace a todo cambio físico.",
      de: "Reine Potenzialität; Materie ohne jegliche Form, die jeder physischen Veränderung zugrunde liegt.",
    },
  },
  {
    id: "privation",
    term: {
      en: "Privation",
      fr: "Privation",
      es: "Privación",
      de: "Privation (Mangel)",
    },
    definition: {
      en: "The lack of a good that ought to be present; the metaphysical definition of evil.",
      fr: "Le manque d'un bien qui devrait être présent ; la définition métaphysique du mal.",
      es: "La falta de un bien que debería estar presente; la definición metafísica del mal.",
      de: "Das Fehlen eines Gutes, das vorhanden sein sollte; die metaphysische Definition des Bösen.",
    },
  },
  {
    id: "quiddity",
    term: {
      en: "Quiddity",
      fr: "Quiddité",
      es: "Quididad",
      de: "Quidditas (Washeit)",
    },
    definition: {
      en: "The 'whatness' of a thing; its definition or essence.",
      fr: "La « ceité » d'une chose ; sa définition ou son essence.",
      es: "La 'quididad' de una cosa; su definición o esencia.",
      de: "Die 'Washeit' eines Dinges; seine Definition oder sein Wesen.",
    },
  },
  {
    id: "secondary-cause",
    term: {
      en: "Secondary Cause",
      fr: "Cause Secondaire",
      es: "Causa Secundaria",
      de: "Zweitursache",
    },
    definition: {
      en: "A created agent that causes an effect, acting under the influence of the First Cause (God).",
      fr: "Un agent créé qui cause un effet, agissant sous l'influence de la Première Cause (Dieu).",
      es: "Un agente creado que causa un efecto, actuando bajo la influencia de la Primera Causa (Dios).",
      de: "Ein geschaffener Akteur, der eine Wirkung verursacht und unter dem Einfluss der Ersten Ursache (Gott) handelt.",
    },
  },
  {
    id: "sensible-species",
    term: {
      en: "Sensible Species",
      fr: "Espèce Sensible",
      es: "Especie Sensible",
      de: "Sinnesbild (Species Sensibilis)",
    },
    definition: {
      en: "The likeness of an object as received by the senses.",
      fr: "La ressemblance d'un objet telle que reçue par les sens.",
      es: "La semejanza de un objeto tal como es recibida por los sentidos.",
      de: "Das Abbild eines Objekts, wie es von den Sinnen empfangen wird.",
    },
  },
  {
    id: "summum-bonum",
    term: {
      en: "Summum Bonum",
      fr: "Souverain Bien",
      es: "Sumo Bien",
      de: "Summum Bonum (Höchstes Gut)",
    },
    definition: {
      en: "The 'Highest Good'; God, who is the ultimate end of all human desire.",
      fr: "Le « Souverain Bien » ; Dieu, qui est la fin ultime de tout désir humain.",
      es: "El 'Sumo Bien'; Dios, que es el fin último de todo deseo humano.",
      de: "Das 'Höchste Gut'; Gott, der das letzte Ziel allen menschlichen Begehrens ist.",
    },
  },
  {
    id: "synderesis",
    term: {
      en: "Synderesis",
      fr: "Syndérèse",
      es: "Sindéresis",
      de: "Synderesis",
    },
    definition: {
      en: "The innate habit of the practical intellect that knows the first principles of moral action (e.g., 'do good, avoid evil').",
      fr: "L'habitude innée de l'intellect pratique qui connaît les premiers principes de l'action morale (par ex., « faire le bien, éviter le mal »).",
      es: "El hábito innato del intelecto práctico que conoce los primeros principios de la acción moral (p. ej., 'hacer el bien, evitar el mal').",
      de: "Die angeborene Gewohnheit des praktischen Verstandes, die die ersten Prinzipien des moralischen Handelns kennt (z. B. 'Gutes tun, Böses meiden').",
    },
  },
  {
    id: "teleology",
    term: {
      en: "Teleology",
      fr: "Téléologie",
      es: "Teleología",
      de: "Teleologie",
    },
    definition: {
      en: "The study of ends or purposes; the principle that things are directed toward a goal (telos).",
      fr: "L'étude des fins ou des buts ; le principe selon lequel les choses sont dirigées vers un but (telos).",
      es: "El estudio de los fines o propósitos; el principio de que las cosas están dirigidas hacia una meta (telos).",
      de: "Die Lehre von den Zielen oder Zwecken; das Prinzip, dass Dinge auf ein Ziel (Telos) ausgerichtet sind.",
    },
  },
  {
    id: "transcendentals",
    term: {
      en: "Transcendentals",
      fr: "Transcendantaux",
      es: "Trascendentales",
      de: "Transzendentalien",
    },
    definition: {
      en: "Properties that apply to all being: the One (Unum), the True (Verum), and the Good (Bonum), and often the Beautiful (Pulchrum).",
      fr: "Propriétés qui s'appliquent à tout être : l'Un (Unum), le Vrai (Verum), le Bien (Bonum), et souvent le Beau (Pulchrum).",
      es: "Propiedades que se aplican a todo ser: el Uno (Unum), el Verdadero (Verum), y el Bueno (Bonum), y a menudo el Bello (Pulchrum).",
      de: "Eigenschaften, die auf alles Sein zutreffen: das Eine (Unum), das Wahre (Verum) und das Gute (Bonum), und oft das Schöne (Pulchrum).",
    },
  },
  {
    id: "universal",
    term: {
      en: "Universal",
      fr: "Universel",
      es: "Universal",
      de: "Universal",
    },
    definition: {
      en: "A concept or nature shared by many particular things (e.g., 'humanity' shared by all humans).",
      fr: "Un concept ou une nature partagée par de nombreuses choses particulières (par ex., 'l'humanité' partagée par tous les humains).",
      es: "Un concepto o naturaleza compartida por muchas cosas particulares (p. ej., 'humanidad' compartida por todos los humanos).",
      de: "Ein Konzept oder eine Natur, die von vielen einzelnen Dingen geteilt wird (z. B. 'Menschheit', die von allen Menschen geteilt wird).",
    },
  },
  {
    id: "will-voluntas",
    term: {
      en: "Will (Voluntas)",
      fr: "Volonté (Voluntas)",
      es: "Voluntad (Voluntas)",
      de: "Wille (Voluntas)",
    },
    definition: {
      en: "The rational appetite; the faculty of the soul that desires the good apprehended by the intellect.",
      fr: "L'appétit rationnel ; la faculté de l'âme qui désire le bien appréhendé par l'intellect.",
      es: "El apetito racional; la facultad del alma que desea el bien aprehendido por el intelecto.",
      de: "Das rationale Begehren; das Vermögen der Seele, das das vom Verstand erkannte Gute begehrt.",
    },
  },

  // --- Encyclicals & Key Documents ---
  {
    id: "aeterni-patris",
    term: {
      en: "Aeterni Patris",
      fr: "Aeterni Patris",
      es: "Aeterni Patris",
      de: "Aeterni Patris",
    },
    definition: {
      en: "Encyclical by Pope Leo XIII (1879) restoring the study of St. Thomas Aquinas as the foundation of Catholic philosophy.",
      fr: "Encyclique du Pape Léon XIII (1879) rétablissant l'étude de Saint Thomas d'Aquin comme fondement de la philosophie catholique.",
      es: "Encíclica del Papa León XIII (1879) que restaura el estudio de Santo Tomás de Aquino como fundamento de la filosofía católica.",
      de: "Enzyklika von Papst Leo XIII. (1879), die das Studium des hl. Thomas von Aquin als Grundlage der katholischen Philosophie wiederherstellt.",
    },
  },
  {
    id: "caritas-in-veritate",
    term: {
      en: "Caritas in Veritate",
      fr: "Caritas in Veritate",
      es: "Caritas in Veritate",
      de: "Caritas in Veritate",
    },
    definition: {
      en: "Encyclical by Pope Benedict XVI (2009) on integral human development in charity and truth.",
      fr: "Encyclique du Pape Benoît XVI (2009) sur le développement humain intégral dans la charité et la vérité.",
      es: "Encíclica del Papa Benedicto XVI (2009) sobre el desarrollo humano integral en la caridad y la verdad.",
      de: "Enzyklika von Papst Benedikt XVI. (2009) über die ganzheitliche Entwicklung des Menschen in der Liebe und in der Wahrheit.",
    },
  },
  {
    id: "casti-connubii",
    term: {
      en: "Casti Connubii",
      fr: "Casti Connubii",
      es: "Casti Connubii",
      de: "Casti Connubii",
    },
    definition: {
      en: "Encyclical by Pope Pius XI (1930) on Christian marriage, condemning contraception and reaffirming the sanctity of matrimony.",
      fr: "Encyclique du Pape Pie XI (1930) sur le mariage chrétien, condamnant la contraception et réaffirmant la sainteté du mariage.",
      es: "Encíclica del Papa Pío XI (1930) sobre el matrimonio cristiano, condenando la anticoncepción y reafirmando la santidad del matrimonio.",
      de: "Enzyklika von Papst Pius XI. (1930) über die christliche Ehe, die Empfängnisverhütung verurteilt und die Heiligkeit der Ehe bekräftigt.",
    },
  },
  {
    id: "centesimus-annus",
    term: {
      en: "Centesimus Annus",
      fr: "Centesimus Annus",
      es: "Centesimus Annus",
      de: "Centesimus Annus",
    },
    definition: {
      en: "Encyclical by Pope John Paul II (1991) marking the 100th anniversary of Rerum Novarum, critiquing both socialism and unbridled capitalism.",
      fr: "Encyclique du Pape Jean-Paul II (1991) marquant le 100e anniversaire de Rerum Novarum, critiquant à la fois le socialisme et le capitalisme débridé.",
      es: "Encíclica del Papa Juan Pablo II (1991) que marca el centenario de Rerum Novarum, criticando tanto el socialismo como el capitalismo desenfrenado.",
      de: "Enzyklika von Papst Johannes Paul II. (1991) zum 100. Jahrestag von Rerum Novarum, die sowohl den Sozialismus als auch den ungezügelten Kapitalismus kritisiert.",
    },
  },
  {
    id: "deus-caritas-est",
    term: {
      en: "Deus Caritas Est",
      fr: "Deus Caritas Est",
      es: "Deus Caritas Est",
      de: "Deus Caritas Est",
    },
    definition: {
      en: "Encyclical by Pope Benedict XVI (2005) on Christian love (agape) and its relationship to human love (eros).",
      fr: "Encyclique du Pape Benoît XVI (2005) sur l'amour chrétien (agapé) et sa relation avec l'amour humain (éros).",
      es: "Encíclica del Papa Benedicto XVI (2005) sobre el amor cristiano (ágape) y su relación con el amor humano (eros).",
      de: "Enzyklika von Papst Benedikt XVI. (2005) über die christliche Liebe (Agape) und ihr Verhältnis zur menschlichen Liebe (Eros).",
    },
  },
  {
    id: "dilexit-nos",
    term: {
      en: "Dilexit Nos",
      fr: "Dilexit Nos",
      es: "Dilexit Nos",
      de: "Dilexit Nos",
    },
    definition: {
      en: "Encyclical by Pope Francis (2024) on the human and divine love of the Heart of Jesus Christ.",
      fr: "Encyclique du Pape François (2024) sur l'amour humain et divin du Cœur de Jésus-Christ.",
      es: "Encíclica del Papa Francisco (2024) sobre el amor humano y divino del Corazón de Jesucristo.",
      de: "Enzyklika von Papst Franziskus (2024) über die menschliche und göttliche Liebe des Herzens Jesu Christi.",
    },
  },
  {
    id: "dives-in-misericordia",
    term: {
      en: "Dives in Misericordia",
      fr: "Dives in Misericordia",
      es: "Dives in Misericordia",
      de: "Dives in Misericordia",
    },
    definition: {
      en: "Encyclical by Pope John Paul II (1980) on God as the Father of mercies.",
      fr: "Encyclique du Pape Jean-Paul II (1980) sur Dieu comme Père des miséricordes.",
      es: "Encíclica del Papa Juan Pablo II (1980) sobre Dios como Padre de las misericordias.",
      de: "Enzyklika von Papst Johannes Paul II. (1980) über Gott als den Vater der Barmherzigkeit.",
    },
  },
  {
    id: "divini-illius-magistri",
    term: {
      en: "Divini Illius Magistri",
      fr: "Divini Illius Magistri",
      es: "Divini Illius Magistri",
      de: "Divini Illius Magistri",
    },
    definition: {
      en: "Encyclical by Pope Pius XI (1929) on Christian education of youth.",
      fr: "Encyclique du Pape Pie XI (1929) sur l'éducation chrétienne de la jeunesse.",
      es: "Encíclica del Papa Pío XI (1929) sobre la educación cristiana de la juventud.",
      de: "Enzyklika von Papst Pius XI. (1929) über die christliche Erziehung der Jugend.",
    },
  },
  {
    id: "divini-redemptoris",
    term: {
      en: "Divini Redemptoris",
      fr: "Divini Redemptoris",
      es: "Divini Redemptoris",
      de: "Divini Redemptoris",
    },
    definition: {
      en: "Encyclical by Pope Pius XI (1937) on Atheistic Communism, condemning it as intrinsically wrong.",
      fr: "Encyclique du Pape Pie XI (1937) sur le communisme athée, le condamnant comme intrinsèquement pervers.",
      es: "Encíclica del Papa Pío XI (1937) sobre el comunismo ateo, condenándolo como intrínsecamente perverso.",
      de: "Enzyklika von Papst Pius XI. (1937) über den atheistischen Kommunismus, der als in sich schlecht verurteilt wird.",
    },
  },
  {
    id: "dominum-et-vivificantem",
    term: {
      en: "Dominum et Vivificantem",
      fr: "Dominum et Vivificantem",
      es: "Dominum et Vivificantem",
      de: "Dominum et Vivificantem",
    },
    definition: {
      en: "Encyclical by Pope John Paul II (1986) on the Holy Spirit in the life of the Church and the world.",
      fr: "Encyclique du Pape Jean-Paul II (1986) sur le Saint-Esprit dans la vie de l'Église et du monde.",
      es: "Encíclica del Papa Juan Pablo II (1986) sobre el Espíritu Santo en la vida de la Iglesia y del mundo.",
      de: "Enzyklika von Papst Johannes Paul II. (1986) über den Heiligen Geist im Leben der Kirche und der Welt.",
    },
  },
  {
    id: "ecclesia-de-eucharistia",
    term: {
      en: "Ecclesia de Eucharistia",
      fr: "Ecclesia de Eucharistia",
      es: "Ecclesia de Eucharistia",
      de: "Ecclesia de Eucharistia",
    },
    definition: {
      en: "Encyclical by Pope John Paul II (2003) on the Eucharist in its relationship to the Church.",
      fr: "Encyclique du Pape Jean-Paul II (2003) sur l'Eucharistie dans son rapport à l'Église.",
      es: "Encíclica del Papa Juan Pablo II (2003) sobre la Eucaristía en su relación con la Iglesia.",
      de: "Enzyklika von Papst Johannes Paul II. (2003) über die Eucharistie in ihrer Beziehung zur Kirche.",
    },
  },
  {
    id: "evangelium-vitae",
    term: {
      en: "Evangelium Vitae",
      fr: "Evangelium Vitae",
      es: "Evangelium Vitae",
      de: "Evangelium Vitae",
    },
    definition: {
      en: "Encyclical by Pope John Paul II (1995) on the value and inviolability of human life (The Gospel of Life).",
      fr: "Encyclique du Pape Jean-Paul II (1995) sur la valeur et l'inviolabilité de la vie humaine (L'Évangile de la Vie).",
      es: "Encíclica del Papa Juan Pablo II (1995) sobre el valor y el carácter inviolable de la vida humana (El Evangelio de la Vida).",
      de: "Enzyklika von Papst Johannes Paul II. (1995) über den Wert und die Unantastbarkeit des menschlichen Lebens (Das Evangelium des Lebens).",
    },
  },
  {
    id: "fides-et-ratio",
    term: {
      en: "Fides et Ratio",
      fr: "Fides et Ratio",
      es: "Fides et Ratio",
      de: "Fides et Ratio",
    },
    definition: {
      en: "Encyclical by Pope John Paul II (1998) on the relationship between faith and reason.",
      fr: "Encyclique du Pape Jean-Paul II (1998) sur les rapports entre la foi et la raison.",
      es: "Encíclica del Papa Juan Pablo II (1998) sobre las relaciones entre la fe y la razón.",
      de: "Enzyklika von Papst Johannes Paul II. (1998) über das Verhältnis von Glaube und Vernunft.",
    },
  },
  {
    id: "fratelli-tutti",
    term: {
      en: "Fratelli Tutti",
      fr: "Fratelli Tutti",
      es: "Fratelli Tutti",
      de: "Fratelli Tutti",
    },
    definition: {
      en: "Encyclical by Pope Francis (2020) on fraternity and social friendship.",
      fr: "Encyclique du Pape François (2020) sur la fraternité et l'amitié sociale.",
      es: "Encíclica del Papa Francisco (2020) sobre la fraternidad y la amistad social.",
      de: "Enzyklika von Papst Franziskus (2020) über die Geschwisterlichkeit und die soziale Freundschaft.",
    },
  },
  {
    id: "gaudium-et-spes",
    term: {
      en: "Gaudium et Spes",
      fr: "Gaudium et Spes",
      es: "Gaudium et Spes",
      de: "Gaudium et Spes",
    },
    definition: {
      en: "Pastoral Constitution of Vatican II (1965) on the Church in the Modern World.",
      fr: "Constitution pastorale de Vatican II (1965) sur l'Église dans le monde de ce temps.",
      es: "Constitución Pastoral del Vaticano II (1965) sobre la Iglesia en el mundo actual.",
      de: "Pastoralkonstitution des Zweiten Vatikanischen Konzils (1965) über die Kirche in der Welt von heute.",
    },
  },
  {
    id: "haurietis-aquas",
    term: {
      en: "Haurietis Aquas",
      fr: "Haurietis Aquas",
      es: "Haurietis Aquas",
      de: "Haurietis Aquas",
    },
    definition: {
      en: "Encyclical by Pope Pius XII (1956) on devotion to the Sacred Heart of Jesus.",
      fr: "Encyclique du Pape Pie XII (1956) sur la dévotion au Sacré-Cœur de Jésus.",
      es: "Encíclica del Papa Pío XII (1956) sobre la devoción al Sagrado Corazón de Jesús.",
      de: "Enzyklika von Papst Pius XII. (1956) über die Verehrung des Heiligsten Herzens Jesu.",
    },
  },
  {
    id: "humanae-vitae",
    term: {
      en: "Humanae Vitae",
      fr: "Humanae Vitae",
      es: "Humanae Vitae",
      de: "Humanae Vitae",
    },
    definition: {
      en: "Encyclical by Pope Paul VI (1968) regarding the regulation of birth, reaffirming the Church's teaching against artificial contraception.",
      fr: "Encyclique du Pape Paul VI (1968) sur la régulation des naissances, réaffirmant l'enseignement de l'Église contre la contraception artificielle.",
      es: "Encíclica del Papa Pablo VI (1968) sobre la regulación de la natalidad, reafirmando la enseñanza de la Iglesia contra la anticoncepción artificial.",
      de: "Enzyklika von Papst Paul VI. (1968) über die Weitergabe des menschlichen Lebens, die die Lehre der Kirche gegen künstliche Empfängnisverhütung bekräftigt.",
    },
  },
  {
    id: "humani-generis",
    term: {
      en: "Humani Generis",
      fr: "Humani Generis",
      es: "Humani Generis",
      de: "Humani Generis",
    },
    definition: {
      en: "Encyclical by Pope Pius XII (1950) concerning false opinions threatening the foundations of Catholic doctrine (e.g., evolution, polygenism).",
      fr: "Encyclique du Pape Pie XII (1950) concernant certaines opinions fausses qui menacent les fondements de la doctrine catholique.",
      es: "Encíclica del Papa Pío XII (1950) sobre las falsas opiniones que amenazan los fundamentos de la doctrina católica.",
      de: "Enzyklika von Papst Pius XII. (1950) über falsche Ansichten, die die Grundlagen der katholischen Lehre bedrohen.",
    },
  },
  {
    id: "immortale-dei",
    term: {
      en: "Immortale Dei",
      fr: "Immortale Dei",
      es: "Immortale Dei",
      de: "Immortale Dei",
    },
    definition: {
      en: "Encyclical by Pope Leo XIII (1885) on the Christian constitution of States.",
      fr: "Encyclique du Pape Léon XIII (1885) sur la constitution chrétienne des États.",
      es: "Encíclica del Papa León XIII (1885) sobre la constitución cristiana de los Estados.",
      de: "Enzyklika von Papst Leo XIII. (1885) über die christliche Staatsverfassung.",
    },
  },
  {
    id: "ineffabilis-deus",
    term: {
      en: "Ineffabilis Deus",
      fr: "Ineffabilis Deus",
      es: "Ineffabilis Deus",
      de: "Ineffabilis Deus",
    },
    definition: {
      en: "Apostolic Constitution by Pope Pius IX (1854) defining the dogma of the Immaculate Conception of Mary.",
      fr: "Constitution apostolique du Pape Pie IX (1854) définissant le dogme de l'Immaculée Conception de Marie.",
      es: "Constitución Apostólica del Papa Pío IX (1854) que define el dogma de la Inmaculada Concepción de María.",
      de: "Apostolische Konstitution von Papst Pius IX. (1854), die das Dogma der Unbefleckten Empfängnis Mariens definiert.",
    },
  },
  {
    id: "laborem-exercens",
    term: {
      en: "Laborem Exercens",
      fr: "Laborem Exercens",
      es: "Laborem Exercens",
      de: "Laborem Exercens",
    },
    definition: {
      en: "Encyclical by Pope John Paul II (1981) on human work.",
      fr: "Encyclique du Pape Jean-Paul II (1981) sur le travail humain.",
      es: "Encíclica del Papa Juan Pablo II (1981) sobre el trabajo humano.",
      de: "Enzyklika von Papst Johannes Paul II. (1981) über die menschliche Arbeit.",
    },
  },
  {
    id: "laudato-si",
    term: {
      en: "Laudato Si'",
      fr: "Laudato Si'",
      es: "Laudato Si'",
      de: "Laudato Si'",
    },
    definition: {
      en: "Encyclical by Pope Francis (2015) on care for our common home (the environment).",
      fr: "Encyclique du Pape François (2015) sur la sauvegarde de la maison commune (l'environnement).",
      es: "Encíclica del Papa Francisco (2015) sobre el cuidado de la casa común (el medio ambiente).",
      de: "Enzyklika von Papst Franziskus (2015) über die Sorge für das gemeinsame Haus (die Umwelt).",
    },
  },
  {
    id: "libertas",
    term: {
      en: "Libertas",
      fr: "Libertas",
      es: "Libertas",
      de: "Libertas",
    },
    definition: {
      en: "Encyclical by Pope Leo XIII (1888) on the nature of human liberty.",
      fr: "Encyclique du Pape Léon XIII (1888) sur la nature de la liberté humaine.",
      es: "Encíclica del Papa León XIII (1888) sobre la naturaleza de la libertad humana.",
      de: "Enzyklika von Papst Leo XIII. (1888) über das Wesen der menschlichen Freiheit.",
    },
  },
  {
    id: "lumen-fidei",
    term: {
      en: "Lumen Fidei",
      fr: "Lumen Fidei",
      es: "Lumen Fidei",
      de: "Lumen Fidei",
    },
    definition: {
      en: "Encyclical by Pope Francis (2013) on the light of faith.",
      fr: "Encyclique du Pape François (2013) sur la lumière de la foi.",
      es: "Encíclica del Papa Francisco (2013) sobre la luz de la fe.",
      de: "Enzyklika von Papst Franziskus (2013) über das Licht des Glaubens.",
    },
  },
  {
    id: "lumen-gentium",
    term: {
      en: "Lumen Gentium",
      fr: "Lumen Gentium",
      es: "Lumen Gentium",
      de: "Lumen Gentium",
    },
    definition: {
      en: "Dogmatic Constitution on the Church from the Second Vatican Council (1964).",
      fr: "Constitution dogmatique sur l'Église du Concile Vatican II (1964).",
      es: "Constitución Dogmática sobre la Iglesia del Concilio Vaticano II (1964).",
      de: "Dogmatische Konstitution über die Kirche des Zweiten Vatikanischen Konzils (1964).",
    },
  },
  {
    id: "mater-et-magistra",
    term: {
      en: "Mater et Magistra",
      fr: "Mater et Magistra",
      es: "Mater et Magistra",
      de: "Mater et Magistra",
    },
    definition: {
      en: "Encyclical by Pope John XXIII (1961) on Christianity and Social Progress.",
      fr: "Encyclique du Pape Jean XXIII (1961) sur le christianisme et le progrès social.",
      es: "Encíclica del Papa Juan XXIII (1961) sobre el cristianismo y el progreso social.",
      de: "Enzyklika von Papst Johannes XXIII. (1961) über Christentum und sozialen Fortschritt.",
    },
  },
  {
    id: "mediator-dei",
    term: {
      en: "Mediator Dei",
      fr: "Mediator Dei",
      es: "Mediator Dei",
      de: "Mediator Dei",
    },
    definition: {
      en: "Encyclical by Pope Pius XII (1947) on the sacred liturgy.",
      fr: "Encyclique du Pape Pie XII (1947) sur la sainte liturgie.",
      es: "Encíclica del Papa Pío XII (1947) sobre la sagrada liturgia.",
      de: "Enzyklika von Papst Pius XII. (1947) über die heilige Liturgie.",
    },
  },
  {
    id: "miserentissimus-redemptor",
    term: {
      en: "Miserentissimus Redemptor",
      fr: "Miserentissimus Redemptor",
      es: "Miserentissimus Redemptor",
      de: "Miserentissimus Redemptor",
    },
    definition: {
      en: "Encyclical by Pope Pius XI (1928) on reparation to the Sacred Heart.",
      fr: "Encyclique du Pape Pie XI (1928) sur la réparation au Sacré-Cœur.",
      es: "Encíclica del Papa Pío XI (1928) sobre la reparación al Sagrado Corazón.",
      de: "Enzyklika von Papst Pius XI. (1928) über die Wiedergutmachung gegenüber dem Heiligen Herzen.",
    },
  },
  {
    id: "mit-brennender-sorge",
    term: {
      en: "Mit Brennender Sorge",
      fr: "Mit Brennender Sorge",
      es: "Mit Brennender Sorge",
      de: "Mit Brennender Sorge",
    },
    definition: {
      en: "Encyclical by Pope Pius XI (1937) written in German, condemning Nazism and racism.",
      fr: "Encyclique du Pape Pie XI (1937) écrite en allemand, condamnant le nazisme et le racisme.",
      es: "Encíclica del Papa Pío XI (1937) escrita en alemán, condenando el nazismo y el racismo.",
      de: "Enzyklika von Papst Pius XI. (1937), die den Nationalsozialismus und Rassismus verurteilt.",
    },
  },
  {
    id: "mortalium-animos",
    term: {
      en: "Mortalium Animos",
      fr: "Mortalium Animos",
      es: "Mortalium Animos",
      de: "Mortalium Animos",
    },
    definition: {
      en: "Encyclical by Pope Pius XI (1928) on religious unity, condemning religious indifferentism.",
      fr: "Encyclique du Pape Pie XI (1928) sur l'unité religieuse, condamnant l'indifférentisme religieux.",
      es: "Encíclica del Papa Pío XI (1928) sobre la unidad religiosa, condenando el indiferentismo religioso.",
      de: "Enzyklika von Papst Pius XI. (1928) über die religiöse Einheit, die den religiösen Indifferentismus verurteilt.",
    },
  },
  {
    id: "munificentissimus-deus",
    term: {
      en: "Munificentissimus Deus",
      fr: "Munificentissimus Deus",
      es: "Munificentissimus Deus",
      de: "Munificentissimus Deus",
    },
    definition: {
      en: "Apostolic Constitution by Pope Pius XII (1950) defining the dogma of the Assumption of Mary.",
      fr: "Constitution apostolique du Pape Pie XII (1950) définissant le dogme de l'Assomption de Marie.",
      es: "Constitución Apostólica del Papa Pío XII (1950) que define el dogma de la Asunción de María.",
      de: "Apostolische Konstitution von Papst Pius XII. (1950), die das Dogma der Aufnahme Mariens in den Himmel definiert.",
    },
  },
  {
    id: "mysterium-fidei",
    term: {
      en: "Mysterium Fidei",
      fr: "Mysterium Fidei",
      es: "Mysterium Fidei",
      de: "Mysterium Fidei",
    },
    definition: {
      en: "Encyclical by Pope Paul VI (1965) on the Holy Eucharist.",
      fr: "Encyclique du Pape Paul VI (1965) sur la Sainte Eucharistie.",
      es: "Encíclica del Papa Pablo VI (1965) sobre la Sagrada Eucaristía.",
      de: "Enzyklika von Papst Paul VI. (1965) über die Heilige Eucharistie.",
    },
  },
  {
    id: "mystici-corporis",
    term: {
      en: "Mystici Corporis Christi",
      fr: "Mystici Corporis Christi",
      es: "Mystici Corporis Christi",
      de: "Mystici Corporis Christi",
    },
    definition: {
      en: "Encyclical by Pope Pius XII (1943) on the Church as the Mystical Body of Christ.",
      fr: "Encyclique du Pape Pie XII (1943) sur l'Église comme Corps Mystique du Christ.",
      es: "Encíclica del Papa Pío XII (1943) sobre la Iglesia como Cuerpo Místico de Cristo.",
      de: "Enzyklika von Papst Pius XII. (1943) über die Kirche als den Mystischen Leib Christi.",
    },
  },
  {
    id: "non-abbiamo-bisogno",
    term: {
      en: "Non Abbiamo Bisogno",
      fr: "Non Abbiamo Bisogno",
      es: "Non Abbiamo Bisogno",
      de: "Non Abbiamo Bisogno",
    },
    definition: {
      en: "Encyclical by Pope Pius XI (1931) against Italian Fascism.",
      fr: "Encyclique du Pape Pie XI (1931) contre le fascisme italien.",
      es: "Encíclica del Papa Pío XI (1931) contra el fascismo italiano.",
      de: "Enzyklika von Papst Pius XI. (1931) gegen den italienischen Faschismus.",
    },
  },
  {
    id: "pacem-in-terris",
    term: {
      en: "Pacem in Terris",
      fr: "Pacem in Terris",
      es: "Pacem in Terris",
      de: "Pacem in Terris",
    },
    definition: {
      en: "Encyclical by Pope John XXIII (1963) on establishing universal peace.",
      fr: "Encyclique du Pape Jean XXIII (1963) sur l'établissement de la paix universelle.",
      es: "Encíclica del Papa Juan XXIII (1963) sobre el establecimiento de la paz universal.",
      de: "Enzyklika von Papst Johannes XXIII. (1963) über den Frieden auf Erden.",
    },
  },
  {
    id: "pascendi-dominici-gregis",
    term: {
      en: "Pascendi Dominici Gregis",
      fr: "Pascendi Dominici Gregis",
      es: "Pascendi Dominici Gregis",
      de: "Pascendi Dominici Gregis",
    },
    definition: {
      en: "Encyclical by Pope Pius X (1907) condemning the doctrines of the Modernists.",
      fr: "Encyclique du Pape Pie X (1907) condamnant les doctrines des modernistes.",
      es: "Encíclica del Papa Pío X (1907) condenando las doctrinas de los modernistas.",
      de: "Enzyklika von Papst Pius X. (1907), die die Lehren der Modernisten verurteilt.",
    },
  },
  {
    id: "populorum-progressio",
    term: {
      en: "Populorum Progressio",
      fr: "Populorum Progressio",
      es: "Populorum Progressio",
      de: "Populorum Progressio",
    },
    definition: {
      en: "Encyclical by Pope Paul VI (1967) on the development of peoples.",
      fr: "Encyclique du Pape Paul VI (1967) sur le développement des peuples.",
      es: "Encíclica del Papa Pablo VI (1967) sobre el desarrollo de los pueblos.",
      de: "Enzyklika von Papst Paul VI. (1967) über den Fortschritt der Völker.",
    },
  },
  {
    id: "providentissimus-deus",
    term: {
      en: "Providentissimus Deus",
      fr: "Providentissimus Deus",
      es: "Providentissimus Deus",
      de: "Providentissimus Deus",
    },
    definition: {
      en: "Encyclical by Pope Leo XIII (1893) on the study of Holy Scripture.",
      fr: "Encyclique du Pape Léon XIII (1893) sur l'étude de la Sainte Écriture.",
      es: "Encíclica del Papa León XIII (1893) sobre el estudio de la Sagrada Escritura.",
      de: "Enzyklika von Papst Leo XIII. (1893) über das Studium der Heiligen Schrift.",
    },
  },
  {
    id: "quadragesimo-anno",
    term: {
      en: "Quadragesimo Anno",
      fr: "Quadragesimo Anno",
      es: "Quadragesimo Anno",
      de: "Quadragesimo Anno",
    },
    definition: {
      en: "Encyclical by Pope Pius XI (1931) commemorating the 40th anniversary of Rerum Novarum, on the reconstruction of the social order.",
      fr: "Encyclique du Pape Pie XI (1931) commémorant le 40e anniversaire de Rerum Novarum, sur la reconstruction de l'ordre social.",
      es: "Encíclica del Papa Pío XI (1931) conmemorando el 40º aniversario de Rerum Novarum, sobre la restauración del orden social.",
      de: "Enzyklika von Papst Pius XI. (1931) zum 40. Jahrestag von Rerum Novarum, über die Wiederherstellung der gesellschaftlichen Ordnung.",
    },
  },
  {
    id: "quas-primas",
    term: {
      en: "Quas Primas",
      fr: "Quas Primas",
      es: "Quas Primas",
      de: "Quas Primas",
    },
    definition: {
      en: "Encyclical by Pope Pius XI (1925) establishing the Feast of Christ the King.",
      fr: "Encyclique du Pape Pie XI (1925) instituant la fête du Christ-Roi.",
      es: "Encíclica del Papa Pío XI (1925) que establece la Fiesta de Cristo Rey.",
      de: "Enzyklika von Papst Pius XI. (1925) zur Einsetzung des Christkönigsfestes.",
    },
  },
  {
    id: "redemptor-hominis",
    term: {
      en: "Redemptor Hominis",
      fr: "Redemptor Hominis",
      es: "Redemptor Hominis",
      de: "Redemptor Hominis",
    },
    definition: {
      en: "First encyclical by Pope John Paul II (1979) on Jesus Christ, the Redeemer of Man.",
      fr: "Première encyclique du Pape Jean-Paul II (1979) sur Jésus-Christ, le Rédempteur de l'homme.",
      es: "Primera encíclica del Papa Juan Pablo II (1979) sobre Jesucristo, Redentor del hombre.",
      de: "Erste Enzyklika von Papst Johannes Paul II. (1979) über Jesus Christus, den Erlöser des Menschen.",
    },
  },
  {
    id: "redemptoris-mater",
    term: {
      en: "Redemptoris Mater",
      fr: "Redemptoris Mater",
      es: "Redemptoris Mater",
      de: "Redemptoris Mater",
    },
    definition: {
      en: "Encyclical by Pope John Paul II (1987) on the Blessed Virgin Mary in the life of the Pilgrim Church.",
      fr: "Encyclique du Pape Jean-Paul II (1987) sur la Bienheureuse Vierge Marie dans la vie de l'Église en marche.",
      es: "Encíclica del Papa Juan Pablo II (1987) sobre la Bienaventurada Virgen María en la vida de la Iglesia peregrina.",
      de: "Enzyklika von Papst Johannes Paul II. (1987) über die selige Jungfrau Maria im Leben der pilgernden Kirche.",
    },
  },
  {
    id: "redemptoris-missio",
    term: {
      en: "Redemptoris Missio",
      fr: "Redemptoris Missio",
      es: "Redemptoris Missio",
      de: "Redemptoris Missio",
    },
    definition: {
      en: "Encyclical by Pope John Paul II (1990) on the permanent validity of the Church's missionary mandate.",
      fr: "Encyclique du Pape Jean-Paul II (1990) sur la valeur permanente du précepte missionnaire de l'Église.",
      es: "Encíclica del Papa Juan Pablo II (1990) sobre la permanente validez del mandato misionero de la Iglesia.",
      de: "Enzyklika von Papst Johannes Paul II. (1990) über die ständige Gültigkeit des missionarischen Auftrags der Kirche.",
    },
  },
  {
    id: "rerum-novarum",
    term: {
      en: "Rerum Novarum",
      fr: "Rerum Novarum",
      es: "Rerum Novarum",
      de: "Rerum Novarum",
    },
    definition: {
      en: "Encyclical by Pope Leo XIII (1891) on capital and labor; the foundation of modern Catholic social teaching.",
      fr: "Encyclique du Pape Léon XIII (1891) sur le capital et le travail ; le fondement de la doctrine sociale catholique moderne.",
      es: "Encíclica del Papa León XIII (1891) sobre el capital y el trabajo; el fundamento de la doctrina social católica moderna.",
      de: "Enzyklika von Papst Leo XIII. (1891) über Kapital und Arbeit; die Grundlage der modernen katholischen Soziallehre.",
    },
  },
  {
    id: "sacrosanctum-concilium",
    term: {
      en: "Sacrosanctum Concilium",
      fr: "Sacrosanctum Concilium",
      es: "Sacrosanctum Concilium",
      de: "Sacrosanctum Concilium",
    },
    definition: {
      en: "Constitution on the Sacred Liturgy from the Second Vatican Council (1963).",
      fr: "Constitution sur la Sainte Liturgie du Concile Vatican II (1963).",
      es: "Constitución sobre la Sagrada Liturgia del Concilio Vaticano II (1963).",
      de: "Konstitution über die heilige Liturgie des Zweiten Vatikanischen Konzils (1963).",
    },
  },
  {
    id: "satis-cognitum",
    term: {
      en: "Satis Cognitum",
      fr: "Satis Cognitum",
      es: "Satis Cognitum",
      de: "Satis Cognitum",
    },
    definition: {
      en: "Encyclical by Pope Leo XIII (1896) on the unity of the Church.",
      fr: "Encyclique du Pape Léon XIII (1896) sur l'unité de l'Église.",
      es: "Encíclica del Papa León XIII (1896) sobre la unidad de la Iglesia.",
      de: "Enzyklika von Papst Leo XIII. (1896) über die Einheit der Kirche.",
    },
  },
  {
    id: "sollicitudo-rei-socialis",
    term: {
      en: "Sollicitudo Rei Socialis",
      fr: "Sollicitudo Rei Socialis",
      es: "Sollicitudo Rei Socialis",
      de: "Sollicitudo Rei Socialis",
    },
    definition: {
      en: "Encyclical by Pope John Paul II (1987) on the 20th anniversary of Populorum Progressio, addressing social concerns.",
      fr: "Encyclique du Pape Jean-Paul II (1987) pour le 20e anniversaire de Populorum Progressio, traitant des questions sociales.",
      es: "Encíclica del Papa Juan Pablo II (1987) en el 20º aniversario de Populorum Progressio, abordando preocupaciones sociales.",
      de: "Enzyklika von Papst Johannes Paul II. (1987) zum 20. Jahrestag von Populorum Progressio, die sich mit sozialen Fragen befasst.",
    },
  },
  {
    id: "spe-salvi",
    term: {
      en: "Spe Salvi",
      fr: "Spe Salvi",
      es: "Spe Salvi",
      de: "Spe Salvi",
    },
    definition: {
      en: "Encyclical by Pope Benedict XVI (2007) on Christian hope.",
      fr: "Encyclique du Pape Benoît XVI (2007) sur l'espérance chrétienne.",
      es: "Encíclica del Papa Benedicto XVI (2007) sobre la esperanza cristiana.",
      de: "Enzyklika von Papst Benedikt XVI. (2007) über die christliche Hoffnung.",
    },
  },
  {
    id: "splendor-veritatis",
    term: {
      en: "Veritatis Splendor",
      fr: "Veritatis Splendor",
      es: "Veritatis Splendor",
      de: "Veritatis Splendor",
    },
    definition: {
      en: "Encyclical by Pope John Paul II (1993) regarding fundamental questions of the Church's moral teaching.",
      fr: "Encyclique du Pape Jean-Paul II (1993) concernant des questions fondamentales de l'enseignement moral de l'Église.",
      es: "Encíclica del Papa Juan Pablo II (1993) sobre algunas cuestiones fundamentales de la enseñanza moral de la Iglesia.",
      de: "Enzyklika von Papst Johannes Paul II. (1993) über einige grundlegende Fragen der Moraltheologie der Kirche.",
    },
  },
  {
    id: "summi-pontificatus",
    term: {
      en: "Summi Pontificatus",
      fr: "Summi Pontificatus",
      es: "Summi Pontificatus",
      de: "Summi Pontificatus",
    },
    definition: {
      en: "Encyclical by Pope Pius XII (1939) on the unity of human society, issued at the outbreak of WWII.",
      fr: "Encyclique du Pape Pie XII (1939) sur l'unité de la société humaine, publiée au début de la Seconde Guerre mondiale.",
      es: "Encíclica del Papa Pío XII (1939) sobre la unidad de la sociedad humana, emitida al estallar la Segunda Guerra Mundial.",
      de: "Enzyklika von Papst Pius XII. (1939) über die Einheit der menschlichen Gesellschaft, herausgegeben bei Ausbruch des Zweiten Weltkriegs.",
    },
  },
  {
    id: "ut-unum-sint",
    term: {
      en: "Ut Unum Sint",
      fr: "Ut Unum Sint",
      es: "Ut Unum Sint",
      de: "Ut Unum Sint",
    },
    definition: {
      en: "Encyclical by Pope John Paul II (1995) on commitment to Ecumenism.",
      fr: "Encyclique du Pape Jean-Paul II (1995) sur l'engagement œcuménique.",
      es: "Encíclica del Papa Juan Pablo II (1995) sobre el compromiso ecuménico.",
      de: "Enzyklika von Papst Johannes Paul II. (1995) über den Einsatz für die Ökumene.",
    },
  },

  // --- Popes ---
  {
    id: "pope-peter",
    term: {
      en: "Peter (Saint)",
      fr: "Pierre (Saint)",
      es: "Pedro (San)",
      de: "Petrus (Heiliger)",
    },
    definition: {
      en: "The first Pope, chosen by Christ as the 'Rock' on which the Church is built. Martyred in Rome c. 64-67 AD.",
      fr: "Le premier Pape, choisi par le Christ comme le « Roc » sur lequel l'Église est bâtie. Martyrisé à Rome vers 64-67 ap. J.-C.",
      es: "El primer Papa, elegido por Cristo como la 'Roca' sobre la cual se construye la Iglesia. Martirizado en Roma c. 64-67 d.C.",
      de: "Der erste Papst, von Christus als der 'Fels' erwählt, auf dem die Kirche gebaut ist. In Rom gemartert ca. 64-67 n. Chr.",
    },
  },
  {
    id: "pope-linus",
    term: {
      en: "Linus (Saint)",
      fr: "Lin (Saint)",
      es: "Lino (San)",
      de: "Linus (Heiliger)",
    },
    definition: {
      en: "The second Pope (c. 67-76 AD), immediate successor to St. Peter, mentioned by St. Paul in 2 Timothy 4:21.",
      fr: "Le deuxième Pape (v. 67-76), successeur immédiat de Saint Pierre, mentionné par Saint Paul dans 2 Timothée 4:21.",
      es: "El segundo Papa (c. 67-76 d.C.), sucesor inmediato de San Pedro, mencionado por San Pablo en 2 Timoteo 4:21.",
      de: "Der zweite Papst (ca. 67-76 n. Chr.), unmittelbarer Nachfolger des hl. Petrus, erwähnt von hl. Paulus in 2. Timotheus 4,21.",
    },
  },
  {
    id: "pope-clement-i",
    term: {
      en: "Clement I (Saint)",
      fr: "Clément Ier (Saint)",
      es: "Clemente I (San)",
      de: "Klemens I. (Heiliger)",
    },
    definition: {
      en: "The fourth Pope (c. 88-99 AD); author of the 'Epistle to the Corinthians,' a key document for early papal authority.",
      fr: "Le quatrième Pape (v. 88-99) ; auteur de l'« Épître aux Corinthiens », un document clé pour l'autorité papale primitive.",
      es: "El cuarto Papa (c. 88-99 d.C.); autor de la 'Epístola a los Corintios', un documento clave para la autoridad papal primitiva.",
      de: "Der vierte Papst (ca. 88-99 n. Chr.); Autor des 'Briefes an die Korinther', ein Schlüsseldokument für die frühe päpstliche Autorität.",
    },
  },
  {
    id: "pope-victor-i",
    term: {
      en: "Victor I (Saint)",
      fr: "Victor Ier (Saint)",
      es: "Víctor I (San)",
      de: "Viktor I. (Heiliger)",
    },
    definition: {
      en: "Pope (189-199 AD) who asserted Roman authority in the Quartodeciman controversy regarding the date of Easter.",
      fr: "Pape (189-199) qui affirma l'autorité romaine dans la controverse quartodécimaine concernant la date de Pâques.",
      es: "Papa (189-199 d.C.) que afirmó la autoridad romana en la controversia cuartodecimana sobre la fecha de la Pascua.",
      de: "Papst (189-199 n. Chr.), der die römische Autorität im Quartodezimani-Streit bezüglich des Osterdatums geltend machte.",
    },
  },
  {
    id: "pope-damasus-i",
    term: {
      en: "Damasus I (Saint)",
      fr: "Damase Ier (Saint)",
      es: "Dámaso I (San)",
      de: "Damasus I. (Heiliger)",
    },
    definition: {
      en: "Pope (366-384 AD) who commissioned St. Jerome to translate the Vulgate and presided over the Council of Rome (382) defining the biblical canon.",
      fr: "Pape (366-384) qui a chargé Saint Jérôme de traduire la Vulgate et a présidé le Concile de Rome (382) définissant le canon biblique.",
      es: "Papa (366-384 d.C.) que encargó a San Jerónimo traducir la Vulgata y presidió el Concilio de Roma (382) definiendo el canon bíblico.",
      de: "Papst (366-384 n. Chr.), der den hl. Hieronymus mit der Übersetzung der Vulgata beauftragte und dem Konzil von Rom (382) vorstand, das den Bibelkanon definierte.",
    },
  },
  {
    id: "pope-leo-i",
    term: {
      en: "Leo I (The Great, Saint)",
      fr: "Léon Ier (Le Grand, Saint)",
      es: "León I (El Magno, San)",
      de: "Leo I. (Der Große, Heiliger)",
    },
    definition: {
      en: "Pope (440-461 AD) who dissuaded Attila the Hun from sacking Rome and whose 'Tome' was decisive at the Council of Chalcedon.",
      fr: "Pape (440-461) qui a dissuadé Attila le Hun de saccager Rome et dont le « Tome » fut décisif au Concile de Chalcédoine.",
      es: "Papa (440-461 d.C.) que disuadió a Atila el Huno de saquear Roma y cuyo 'Tomo' fue decisivo en el Concilio de Calcedonia.",
      de: "Papst (440-461 n. Chr.), der Attila den Hunnen davon abhielt, Rom zu plündern, und dessen 'Tomus' auf dem Konzil von Chalcedon entscheidend war.",
    },
  },
  {
    id: "pope-gelasius-i",
    term: {
      en: "Gelasius I (Saint)",
      fr: "Gélase Ier (Saint)",
      es: "Gelasio I (San)",
      de: "Gelasius I. (Heiliger)",
    },
    definition: {
      en: "Pope (492-496 AD) who articulated the doctrine of the 'two swords' (sacred and royal power) defining Church-State relations.",
      fr: "Pape (492-496) qui a articulé la doctrine des « deux glaives » (pouvoir sacré et royal) définissant les relations Église-État.",
      es: "Papa (492-496 d.C.) que articuló la doctrina de las 'dos espadas' (poder sagrado y real) definiendo las relaciones Iglesia-Estado.",
      de: "Papst (492-496 n. Chr.), der die Lehre der 'zwei Schwerter' (geistliche und königliche Macht) formulierte und die Beziehungen zwischen Kirche und Staat definierte.",
    },
  },
  {
    id: "pope-gregory-i",
    term: {
      en: "Gregory I (The Great, Saint)",
      fr: "Grégoire Ier (Le Grand, Saint)",
      es: "Gregorio I (El Magno, San)",
      de: "Gregor I. (Der Große, Heiliger)",
    },
    definition: {
      en: "Pope (590-604 AD) known for liturgical reforms (Gregorian Chant), missionary work in England, and pastoral writings.",
      fr: "Pape (590-604) connu pour ses réformes liturgiques (chant grégorien), son œuvre missionnaire en Angleterre et ses écrits pastoraux.",
      es: "Papa (590-604 d.C.) conocido por sus reformas litúrgicas (canto gregoriano), obra misionera en Inglaterra y escritos pastorales.",
      de: "Papst (590-604 n. Chr.), bekannt für liturgische Reformen (Gregorianischer Choral), Missionsarbeit in England und pastorale Schriften.",
    },
  },
  {
    id: "pope-leo-iii",
    term: {
      en: "Leo III (Saint)",
      fr: "Léon III (Saint)",
      es: "León III (San)",
      de: "Leo III. (Heiliger)",
    },
    definition: {
      en: "Pope (795-816 AD) who crowned Charlemagne as Holy Roman Emperor, establishing the foundation of Western Christendom.",
      fr: "Pape (795-816) qui couronna Charlemagne comme Empereur du Saint-Empire romain, établissant les fondations de la chrétienté occidentale.",
      es: "Papa (795-816 d.C.) que coronó a Carlomagno como Emperador del Sacro Imperio Romano, estableciendo los cimientos de la cristiandad occidental.",
      de: "Papst (795-816 n. Chr.), der Karl den Großen zum Kaiser des Heiligen Römischen Reiches krönte und damit das Fundament des westlichen Christentums legte.",
    },
  },
  {
    id: "pope-nicholas-i",
    term: {
      en: "Nicholas I (The Great, Saint)",
      fr: "Nicolas Ier (Le Grand, Saint)",
      es: "Nicolás I (El Magno, San)",
      de: "Nikolaus I. (Der Große, Heiliger)",
    },
    definition: {
      en: "Pope (858-867 AD) who vigorously defended papal supremacy and the indissolubility of marriage against royal pressure.",
      fr: "Pape (858-867) qui défendit vigoureusement la suprématie papale et l'indissolubilité du mariage contre la pression royale.",
      es: "Papa (858-867 d.C.) que defendió vigorosamente la supremacía papal y la indisolubilidad del matrimonio contra la presión real.",
      de: "Papst (858-867 n. Chr.), der die päpstliche Vorherrschaft und die Unauflöslichkeit der Ehe energisch gegen königlichen Druck verteidigte.",
    },
  },
  {
    id: "pope-gregory-vii",
    term: {
      en: "Gregory VII (Saint)",
      fr: "Grégoire VII (Saint)",
      es: "Gregorio VII (San)",
      de: "Gregor VII. (Heiliger)",
    },
    definition: {
      en: "Pope (1073-1085) key to the Gregorian Reforms, asserting papal authority over secular rulers in the Investiture Controversy.",
      fr: "Pape (1073-1085) clé des Réformes Grégoriennes, affirmant l'autorité papale sur les dirigeants séculiers dans la Querelle des Investitures.",
      es: "Papa (1073-1085) clave en las Reformas Gregorianas, afirmando la autoridad papal sobre gobernantes seculares en la Querella de las Investiduras.",
      de: "Papst (1073-1085), Schlüsselfigur der Gregorianischen Reformen, der im Investiturstreit die päpstliche Autorität gegenüber weltlichen Herrschern durchsetzte.",
    },
  },
  {
    id: "pope-urban-ii",
    term: {
      en: "Urban II (Blessed)",
      fr: "Urbain II (Bienheureux)",
      es: "Urbano II (Beato)",
      de: "Urban II. (Seliger)",
    },
    definition: {
      en: "Pope (1088-1099) who initiated the First Crusade at the Council of Clermont to aid Eastern Christians.",
      fr: "Pape (1088-1099) qui initia la Première Croisade au Concile de Clermont pour aider les chrétiens d'Orient.",
      es: "Papa (1088-1099) que inició la Primera Cruzada en el Concilio de Clermont para ayudar a los cristianos orientales.",
      de: "Papst (1088-1099), der auf dem Konzil von Clermont den Ersten Kreuzzug zur Unterstützung der östlichen Christen initiierte.",
    },
  },
  {
    id: "pope-innocent-iii",
    term: {
      en: "Innocent III",
      fr: "Innocent III",
      es: "Inocencio III",
      de: "Innozenz III.",
    },
    definition: {
      en: "Pope (1198-1216) under whom the medieval papacy reached the height of its temporal power; convened the Fourth Lateran Council.",
      fr: "Pape (1198-1216) sous lequel la papauté médiévale a atteint l'apogée de son pouvoir temporel ; a convoqué le IVe Concile du Latran.",
      es: "Papa (1198-1216) bajo el cual el papado medieval alcanzó la cima de su poder temporal; convocó el Cuarto Concilio de Letrán.",
      de: "Papst (1198-1216), unter dem das mittelalterliche Papsttum den Höhepunkt seiner weltlichen Macht erreichte; berief das Vierte Laterankonzil ein.",
    },
  },
  {
    id: "pope-boniface-viii",
    term: {
      en: "Boniface VIII",
      fr: "Boniface VIII",
      es: "Bonifacio VIII",
      de: "Bonifatius VIII.",
    },
    definition: {
      en: "Pope (1294-1303) who issued 'Unam Sanctam,' famously declaring that subjection to the Roman Pontiff is necessary for salvation.",
      fr: "Pape (1294-1303) qui publia 'Unam Sanctam', déclarant célèbrement que la soumission au Pontife Romain est nécessaire au salut.",
      es: "Papa (1294-1303) que emitió 'Unam Sanctam', declarando famosamente que la sujeción al Romano Pontífice es necesaria para la salvación.",
      de: "Papst (1294-1303), der 'Unam Sanctam' erließ und damit berühmt erklärte, dass die Unterwerfung unter den Römischen Papst heilsnotwendig ist.",
    },
  },
  {
    id: "pope-pius-v",
    term: {
      en: "Pius V (Saint)",
      fr: "Pie V (Saint)",
      es: "Pío V (San)",
      de: "Pius V. (Heiliger)",
    },
    definition: {
      en: "Pope (1566-1572) who implemented the Council of Trent, standardized the Roman Missal, and organized the Holy League (Battle of Lepanto).",
      fr: "Pape (1566-1572) qui a mis en œuvre le Concile de Trente, standardisé le Missel Romain et organisé la Sainte Ligue (Bataille de Lépante).",
      es: "Papa (1566-1572) que implementó el Concilio de Trento, estandarizó el Misal Romano y organizó la Liga Santa (Batalla de Lepanto).",
      de: "Papst (1566-1572), der das Konzil von Trient umsetzte, das Römische Messbuch standardisierte und die Heilige Liga organisierte (Schlacht von Lepanto).",
    },
  },
  {
    id: "pope-gregory-xiii",
    term: {
      en: "Gregory XIII",
      fr: "Grégoire XIII",
      es: "Gregorio XIII",
      de: "Gregor XIII.",
    },
    definition: {
      en: "Pope (1572-1585) best known for reforming the calendar (Gregorian Calendar) and promoting education/seminaries.",
      fr: "Pape (1572-1585) surtout connu pour la réforme du calendrier (calendrier grégorien) et la promotion de l'éducation/séminaires.",
      es: "Papa (1572-1585) mejor conocido por reformar el calendario (Calendario Gregoriano) y promover la educación/seminarios.",
      de: "Papst (1572-1585), am besten bekannt für die Kalenderreform (Gregorianischer Kalender) und die Förderung von Bildung/Seminaren.",
    },
  },
  {
    id: "pope-sixtus-v",
    term: {
      en: "Sixtus V",
      fr: "Sixte V",
      es: "Sixto V",
      de: "Sixtus V.",
    },
    definition: {
      en: "Pope (1585-1590) who reorganized the Roman Curia and limited the College of Cardinals to 70 members.",
      fr: "Pape (1585-1590) qui réorganisa la Curie Romaine et limita le Collège des Cardinaux à 70 membres.",
      es: "Papa (1585-1590) que reorganizó la Curia Romana y limitó el Colegio Cardenalicio a 70 miembros.",
      de: "Papst (1585-1590), der die Römische Kurie neu organisierte und das Kardinalskollegium auf 70 Mitglieder begrenzte.",
    },
  },
  {
    id: "pope-benedict-xiv",
    term: {
      en: "Benedict XIV",
      fr: "Benoît XIV",
      es: "Benedicto XIV",
      de: "Benedikt XIV.",
    },
    definition: {
      en: "Pope (1740-1758) known for his immense scholarship and formalizing the rules for canonization of saints.",
      fr: "Pape (1740-1758) connu pour son immense érudition et la formalisation des règles de canonisation des saints.",
      es: "Papa (1740-1758) conocido por su inmensa erudición y por formalizar las reglas para la canonización de los santos.",
      de: "Papst (1740-1758), bekannt für seine immense Gelehrsamkeit und die Formalisierung der Regeln für die Heiligsprechung.",
    },
  },
  {
    id: "pope-pius-vii",
    term: {
      en: "Pius VII",
      fr: "Pie VII",
      es: "Pío VII",
      de: "Pius VII.",
    },
    definition: {
      en: "Pope (1800-1823) who resisted Napoleon Bonaparte, was imprisoned, and later restored the Jesuit order.",
      fr: "Pape (1800-1823) qui résista à Napoléon Bonaparte, fut emprisonné et restaura plus tard l'ordre des Jésuites.",
      es: "Papa (1800-1823) que resistió a Napoleón Bonaparte, fue encarcelado y más tarde restauró la orden de los jesuitas.",
      de: "Papst (1800-1823), der Napoleon Bonaparte widerstand, inhaftiert wurde und später den Jesuitenorden wiederherstellte.",
    },
  },
  {
    id: "pope-gregory-xvi",
    term: {
      en: "Gregory XVI",
      fr: "Grégoire XVI",
      es: "Gregorio XVI",
      de: "Gregor XVI.",
    },
    definition: {
      en: "Pope (1831-1846) known for his conservatism and for condemning the slave trade in 'In Supremo Apostolatus'.",
      fr: "Pape (1831-1846) connu pour son conservatisme et pour avoir condamné la traite des esclaves dans 'In Supremo Apostolatus'.",
      es: "Papa (1831-1846) conocido por su conservadurismo y por condenar el comercio de esclavos en 'In Supremo Apostolatus'.",
      de: "Papst (1831-1846), bekannt für seinen Konservatismus und die Verurteilung des Sklavenhandels in 'In Supremo Apostolatus'.",
    },
  },
  {
    id: "pope-pius-ix",
    term: {
      en: "Pius IX (Blessed)",
      fr: "Pie IX (Bienheureux)",
      es: "Pío IX (Beato)",
      de: "Pius IX. (Seliger)",
    },
    definition: {
      en: "Longest-reigning elected Pope (1846-1878); defined the Immaculate Conception, convened Vatican I, and lost the Papal States.",
      fr: "Pape élu au règne le plus long (1846-1878) ; a défini l'Immaculée Conception, convoqué Vatican I et perdu les États pontificaux.",
      es: "El Papa electo con el reinado más largo (1846-1878); definió la Inmaculada Concepción, convocó el Vaticano I y perdió los Estados Pontificios.",
      de: "Am längsten regierender gewählter Papst (1846-1878); definierte die Unbefleckte Empfängnis, berief das Erste Vatikanum ein und verlor den Kirchenstaat.",
    },
  },
  {
    id: "pope-leo-xiii",
    term: {
      en: "Leo XIII",
      fr: "Léon XIII",
      es: "León XIII",
      de: "Leo XIII.",
    },
    definition: {
      en: "Pope (1878-1903) known as the 'Pope of the Rosary' and for initiating Catholic Social Teaching with 'Rerum Novarum'.",
      fr: "Pape (1878-1903) connu comme le « Pape du Rosaire » et pour avoir initié la doctrine sociale catholique avec « Rerum Novarum ».",
      es: "Papa (1878-1903) conocido como el 'Papa del Rosario' y por iniciar la Doctrina Social Católica con 'Rerum Novarum'.",
      de: "Papst (1878-1903), bekannt als 'Rosenkranzpapst' und für die Begründung der katholischen Soziallehre mit 'Rerum Novarum'.",
    },
  },
  {
    id: "pope-pius-x",
    term: {
      en: "Pius X (Saint)",
      fr: "Pie X (Saint)",
      es: "Pío X (San)",
      de: "Pius X. (Heiliger)",
    },
    definition: {
      en: "Pope (1903-1914) who lowered the age for First Communion, promoted Gregorian Chant, and fought Modernism.",
      fr: "Pape (1903-1914) qui abaissa l'âge de la Première Communion, promut le chant grégorien et combattit le modernisme.",
      es: "Papa (1903-1914) que redujo la edad para la Primera Comunión, promovió el canto gregoriano y combatió el modernismo.",
      de: "Papst (1903-1914), der das Alter für die Erstkommunion herabsetzte, den Gregorianischen Choral förderte und den Modernismus bekämpfte.",
    },
  },
  {
    id: "pope-benedict-xv",
    term: {
      en: "Benedict XV",
      fr: "Benoît XV",
      es: "Benedicto XV",
      de: "Benedikt XV.",
    },
    definition: {
      en: "Pope (1914-1922) during WWI, known for his peace efforts and for promulgating the 1917 Code of Canon Law.",
      fr: "Pape (1914-1922) durant la Première Guerre mondiale, connu pour ses efforts de paix et pour avoir promulgué le Code de droit canonique de 1917.",
      es: "Papa (1914-1922) durante la Primera Guerra Mundial, conocido por sus esfuerzos de paz y por promulgar el Código de Derecho Canónico de 1917.",
      de: "Papst (1914-1922) während des Ersten Weltkriegs, bekannt für seine Friedensbemühungen und die Promulgation des Kirchenrechtkodex von 1917.",
    },
  },
  {
    id: "pope-pius-xi",
    term: {
      en: "Pius XI",
      fr: "Pie XI",
      es: "Pío XI",
      de: "Pius XI.",
    },
    definition: {
      en: "Pope (1922-1939) who established the Feast of Christ the King, signed the Lateran Treaty, and condemned Communism and Nazism.",
      fr: "Pape (1922-1939) qui institua la fête du Christ-Roi, signa les accords du Latran et condamna le communisme et le nazisme.",
      es: "Papa (1922-1939) que estableció la Fiesta de Cristo Rey, firmó los Pactos de Letrán y condenó el comunismo y el nazismo.",
      de: "Papst (1922-1939), der das Christkönigsfest einführte, die Lateranverträge unterzeichnete und Kommunismus sowie Nationalsozialismus verurteilte.",
    },
  },
  {
    id: "pope-pius-xii",
    term: {
      en: "Pius XII (Venerable)",
      fr: "Pie XII (Vénérable)",
      es: "Pío XII (Venerable)",
      de: "Pius XII. (Ehrwürdiger)",
    },
    definition: {
      en: "Pope (1939-1958) during WWII; defined the Assumption of Mary and wrote foundational encyclicals on the Church and Scripture.",
      fr: "Pape (1939-1958) durant la Seconde Guerre mondiale ; a défini l'Assomption de Marie et écrit des encycliques fondamentales sur l'Église et l'Écriture.",
      es: "Papa (1939-1958) durante la Segunda Guerra Mundial; definió la Asunción de María y escribió encíclicas fundamentales sobre la Iglesia y la Escritura.",
      de: "Papst (1939-1958) während des Zweiten Weltkriegs; definierte die Aufnahme Mariens in den Himmel und schrieb grundlegende Enzykliken über Kirche und Schrift.",
    },
  },
  {
    id: "pope-john-xxiii",
    term: {
      en: "John XXIII (Saint)",
      fr: "Jean XXIII (Saint)",
      es: "Juan XXIII (San)",
      de: "Johannes XXIII. (Heiliger)",
    },
    definition: {
      en: "Pope (1958-1963) who convened the Second Vatican Council to 'open the windows' of the Church.",
      fr: "Pape (1958-1963) qui a convoqué le Concile Vatican II pour « ouvrir les fenêtres » de l'Église.",
      es: "Papa (1958-1963) que convocó el Concilio Vaticano II para 'abrir las ventanas' de la Iglesia.",
      de: "Papst (1958-1963), der das Zweite Vatikanische Konzil einberief, um die 'Fenster der Kirche zu öffnen'.",
    },
  },
  {
    id: "pope-paul-vi",
    term: {
      en: "Paul VI (Saint)",
      fr: "Paul VI (Saint)",
      es: "Pablo VI (San)",
      de: "Paul VI. (Heiliger)",
    },
    definition: {
      en: "Pope (1963-1978) who concluded Vatican II, implemented its reforms, and wrote 'Humanae Vitae'.",
      fr: "Pape (1963-1978) qui a conclu Vatican II, mis en œuvre ses réformes et écrit « Humanae Vitae ».",
      es: "Papa (1963-1978) que concluyó el Vaticano II, implementó sus reformas y escribió 'Humanae Vitae'.",
      de: "Papst (1963-1978), der das Zweite Vatikanum abschloss, dessen Reformen umsetzte und 'Humanae Vitae' schrieb.",
    },
  },
  {
    id: "pope-john-paul-i",
    term: {
      en: "John Paul I (Blessed)",
      fr: "Jean-Paul Ier (Bienheureux)",
      es: "Juan Pablo I (Beato)",
      de: "Johannes Paul I. (Seliger)",
    },
    definition: {
      en: "The 'Smiling Pope' who reigned for only 33 days in 1978.",
      fr: "Le « Pape du sourire » qui ne régna que 33 jours en 1978.",
      es: "El 'Papa de la Sonrisa' que reinó solo 33 días en 1978.",
      de: "Der 'Lächelnde Papst', der 1978 nur 33 Tage regierte.",
    },
  },
  {
    id: "pope-john-paul-ii",
    term: {
      en: "John Paul II (Saint)",
      fr: "Jean-Paul II (Saint)",
      es: "Juan Pablo II (San)",
      de: "Johannes Paul II. (Heiliger)",
    },
    definition: {
      en: "Pope (1978-2005) known for his travels, Theology of the Body, role in ending Communism, and World Youth Days.",
      fr: "Pape (1978-2005) connu pour ses voyages, la Théologie du Corps, son rôle dans la fin du communisme et les JMJ.",
      es: "Papa (1978-2005) conocido por sus viajes, la Teología del Cuerpo, su papel en el fin del comunismo y las JMJ.",
      de: "Papst (1978-2005), bekannt für seine Reisen, die Theologie des Leibes, seine Rolle beim Ende des Kommunismus und die Weltjugendtage.",
    },
  },
  {
    id: "pope-benedict-xvi",
    term: {
      en: "Benedict XVI",
      fr: "Benoît XVI",
      es: "Benedicto XVI",
      de: "Benedikt XVI.",
    },
    definition: {
      en: "Pope (2005-2013) and brilliant theologian who focused on the relationship between faith and reason; the first pope to resign in 600 years.",
      fr: "Pape (2005-2013) et brillant théologien qui s'est concentré sur la relation entre foi et raison ; premier pape à démissionner en 600 ans.",
      es: "Papa (2005-2013) y brillante teólogo que se centró en la relación entre fe y razón; el primer papa en renunciar en 600 años.",
      de: "Papst (2005-2013) und brillanter Theologe, der sich auf das Verhältnis von Glaube und Vernunft konzentrierte; der erste Papst seit 600 Jahren, der zurücktrat.",
    },
  },
  {
    id: "pope-francis",
    term: {
      en: "Francis",
      fr: "François",
      es: "Francisco",
      de: "Franziskus",
    },
    definition: {
      en: "Pope (2013-Present), the first Jesuit and Latin American pope, known for his emphasis on mercy and care for the poor.",
      fr: "Pape (2013-Présent), premier jésuite et pape latino-américain, connu pour son accent sur la miséricorde et le soin des pauvres.",
      es: "Papa (2013-Presente), el primer jesuita y papa latinoamericano, conocido por su énfasis en la misericordia y el cuidado de los pobres.",
      de: "Papst (2013-Gegenwart), der erste Jesuit und lateinamerikanische Papst, bekannt für seine Betonung der Barmherzigkeit und Sorge für die Armen.",
    },
  },
  {
    id: "pope-julius-ii",
    term: {
      en: "Julius II",
      fr: "Jules II",
      es: "Julio II",
      de: "Julius II.",
    },
    definition: {
      en: "The 'Warrior Pope' (1503-1513) who commissioned Michelangelo to paint the Sistine Chapel and began rebuilding St. Peter's Basilica.",
      fr: "Le « Pape Guerrier » (1503-1513) qui commanda à Michel-Ange de peindre la Chapelle Sixtine et commença la reconstruction de la Basilique Saint-Pierre.",
      es: "El 'Papa Guerrero' (1503-1513) que encargó a Miguel Ángel pintar la Capilla Sixtina y comenzó la reconstrucción de la Basílica de San Pedro.",
      de: "Der 'Kriegerpapst' (1503-1513), der Michelangelo mit der Ausmalung der Sixtinischen Kapelle beauftragte und den Neubau des Petersdoms begann.",
    },
  },
  {
    id: "pope-leo-x",
    term: {
      en: "Leo X",
      fr: "Léon X",
      es: "León X",
      de: "Leo X.",
    },
    definition: {
      en: "Pope (1513-1521) during the beginning of the Protestant Reformation; he excommunicated Martin Luther.",
      fr: "Pape (1513-1521) au début de la Réforme protestante ; il excommunia Martin Luther.",
      es: "Papa (1513-1521) durante el inicio de la Reforma Protestante; excomulgó a Martín Lutero.",
      de: "Papst (1513-1521) zu Beginn der protestantischen Reformation; er exkommunizierte Martin Luther.",
    },
  },
  {
    id: "pope-paul-iii",
    term: {
      en: "Paul III",
      fr: "Paul III",
      es: "Pablo III",
      de: "Paul III.",
    },
    definition: {
      en: "Pope (1534-1549) who convened the Council of Trent and approved the Jesuit order.",
      fr: "Pape (1534-1549) qui a convoqué le Concile de Trente et approuvé l'ordre des Jésuites.",
      es: "Papa (1534-1549) que convocó el Concilio de Trento y aprobó la orden de los jesuitas.",
      de: "Papst (1534-1549), der das Konzil von Trient einberief und den Jesuitenorden approbierte.",
    },
  },
  {
    id: "pope-alexander-vi",
    term: {
      en: "Alexander VI",
      fr: "Alexandre VI",
      es: "Alejandro VI",
      de: "Alexander VI.",
    },
    definition: {
      en: "Pope (1492-1503) of the Borgia family, known for corruption but also for dividing the New World between Spain and Portugal.",
      fr: "Pape (1492-1503) de la famille Borgia, connu pour sa corruption mais aussi pour avoir divisé le Nouveau Monde entre l'Espagne et le Portugal.",
      es: "Papa (1492-1503) de la familia Borgia, conocido por su corrupción pero también por dividir el Nuevo Mundo entre España y Portugal.",
      de: "Papst (1492-1503) aus der Familie Borgia, bekannt für Korruption, aber auch für die Aufteilung der Neuen Welt zwischen Spanien und Portugal.",
    },
  },
  {
    id: "pope-clement-vii",
    term: {
      en: "Clement VII",
      fr: "Clément VII",
      es: "Clemente VII",
      de: "Klemens VII.",
    },
    definition: {
      en: "Pope (1523-1534) who refused to annul King Henry VIII's marriage, leading to the English Reformation.",
      fr: "Pape (1523-1534) qui refusa d'annuler le mariage du roi Henri VIII, conduisant à la Réforme anglaise.",
      es: "Papa (1523-1534) que se negó a anular el matrimonio del rey Enrique VIII, lo que condujo a la Reforma inglesa.",
      de: "Papst (1523-1534), der die Annullierung der Ehe von König Heinrich VIII. verweigerte, was zur englischen Reformation führte.",
    },
  },
  {
    id: "pope-martin-v",
    term: {
      en: "Martin V",
      fr: "Martin V",
      es: "Martín V",
      de: "Martin V.",
    },
    definition: {
      en: "Pope (1417-1431) whose election ended the Western Schism.",
      fr: "Pape (1417-1431) dont l'élection mit fin au Grand Schisme d'Occident.",
      es: "Papa (1417-1431) cuya elección puso fin al Cisma de Occidente.",
      de: "Papst (1417-1431), dessen Wahl das Abendländische Schisma beendete.",
    },
  },
  {
    id: "pope-leo-ix",
    term: {
      en: "Leo IX (Saint)",
      fr: "Léon IX (Saint)",
      es: "León IX (San)",
      de: "Leo IX. (Heiliger)",
    },
    definition: {
      en: "Pope (1049-1054) whose legates excommunicated the Patriarch of Constantinople, triggering the Great Schism.",
      fr: "Pape (1049-1054) dont les légats ont excommunié le Patriarche de Constantinople, déclenchant le Grand Schisme.",
      es: "Papa (1049-1054) cuyos legados excomulgaron al Patriarca de Constantinopla, desencadenando el Gran Cisma.",
      de: "Papst (1049-1054), dessen Legaten den Patriarchen von Konstantinopel exkommunizierten, was das Große Schisma auslöste.",
    },
  },
  {
    id: "pope-fabian",
    term: {
      en: "Fabian (Saint)",
      fr: "Fabien (Saint)",
      es: "Fabián (San)",
      de: "Fabianus (Heiliger)",
    },
    definition: {
      en: "Pope (236-250) famously elected when a dove landed on his head; organized Rome into seven districts.",
      fr: "Pape (236-250) célèbrement élu lorsqu'une colombe se posa sur sa tête ; a organisé Rome en sept districts.",
      es: "Papa (236-250) famosamente elegido cuando una paloma se posó en su cabeza; organizó Roma en siete distritos.",
      de: "Papst (236-250), berühmt für seine Wahl, als eine Taube auf seinem Kopf landete; teilte Rom in sieben Bezirke ein.",
    },
  },
  {
    id: "pope-cornelius",
    term: {
      en: "Cornelius (Saint)",
      fr: "Corneille (Saint)",
      es: "Cornelio (San)",
      de: "Cornelius (Heiliger)",
    },
    definition: {
      en: "Pope (251-253) who defended the ability of the Church to absolve those who had lapsed during persecution (lapsi).",
      fr: "Pape (251-253) qui défendit la capacité de l'Église à absoudre ceux qui avaient failli durant la persécution (lapsi).",
      es: "Papa (251-253) que defendió la capacidad de la Iglesia para absolver a los que habían caído durante la persecución (lapsi).",
      de: "Papst (251-253), der die Fähigkeit der Kirche verteidigte, jene loszusprechen, die während der Verfolgung abgefallen waren (lapsi).",
    },
  },
  {
    id: "pope-sixtus-ii",
    term: {
      en: "Sixtus II (Saint)",
      fr: "Sixte II (Saint)",
      es: "Sixto II (San)",
      de: "Sixtus II. (Heiliger)",
    },
    definition: {
      en: "Pope (257-258) martyred in the catacombs while celebrating Mass; patron of the minor orders.",
      fr: "Pape (257-258) martyrisé dans les catacombes alors qu'il célébrait la messe ; patron des ordres mineurs.",
      es: "Papa (257-258) martirizado en las catacumbas mientras celebraba Misa; patrón de las órdenes menores.",
      de: "Papst (257-258), der in den Katakomben während der Messe gemartert wurde; Patron der niederen Weihen.",
    },
  },
  {
    id: "pope-sylvester-i",
    term: {
      en: "Sylvester I (Saint)",
      fr: "Sylvestre Ier (Saint)",
      es: "Silvestre I (San)",
      de: "Silvester I. (Heiliger)",
    },
    definition: {
      en: "Pope (314-335) during the reign of Constantine and the Council of Nicaea; oversaw the building of major Roman basilicas.",
      fr: "Pape (314-335) sous le règne de Constantin et lors du Concile de Nicée ; a supervisé la construction des grandes basiliques romaines.",
      es: "Papa (314-335) durante el reinado de Constantino y el Concilio de Nicea; supervisó la construcción de las principales basílicas romanas.",
      de: "Papst (314-335) während der Herrschaft Konstantins und des Konzils von Nicäa; beaufsichtigte den Bau der großen römischen Basiliken.",
    },
  },
  {
    id: "pope-celestine-i",
    term: {
      en: "Celestine I (Saint)",
      fr: "Célestin Ier (Saint)",
      es: "Celestino I (San)",
      de: "Coelestin I. (Heiliger)",
    },
    definition: {
      en: "Pope (422-432) who sent St. Patrick to Ireland and supported St. Cyril against Nestorius at the Council of Ephesus.",
      fr: "Pape (422-432) qui envoya Saint Patrick en Irlande et soutint Saint Cyrille contre Nestorius au Concile d'Éphèse.",
      es: "Papa (422-432) que envió a San Patricio a Irlanda y apoyó a San Cirilo contra Nestorio en el Concilio de Éfeso.",
      de: "Papst (422-432), der den hl. Patrick nach Irland sandte und den hl. Kyrill gegen Nestorius auf dem Konzil von Ephesus unterstützte.",
    },
  },
  {
    id: "pope-agatho",
    term: {
      en: "Agatho (Saint)",
      fr: "Agathon (Saint)",
      es: "Agatón (San)",
      de: "Agatho (Heiliger)",
    },
    definition: {
      en: "Pope (678-681) whose letter to the Third Council of Constantinople helped define the two wills of Christ.",
      fr: "Pape (678-681) dont la lettre au Troisième Concile de Constantinople a aidé à définir les deux volontés du Christ.",
      es: "Papa (678-681) cuya carta al Tercer Concilio de Constantinopla ayudó a definir las dos voluntades de Cristo.",
      de: "Papst (678-681), dessen Brief an das Dritte Konzil von Konstantinopel half, die zwei Willen Christi zu definieren.",
    },
  },
  {
    id: "pope-adrian-i",
    term: {
      en: "Adrian I",
      fr: "Adrien Ier",
      es: "Adriano I",
      de: "Hadrian I.",
    },
    definition: {
      en: "Pope (772-795) who presided over the Second Council of Nicaea, restoring the veneration of icons.",
      fr: "Pape (772-795) qui présida le Second Concile de Nicée, rétablissant la vénération des icônes.",
      es: "Papa (772-795) que presidió el Segundo Concilio de Nicea, restaurando la veneración de los iconos.",
      de: "Papst (772-795), der dem Zweiten Konzil von Nicäa vorstand, das die Verehrung von Ikonen wiederherstellte.",
    },
  },
  {
    id: "pope-clement-xi",
    term: {
      en: "Clement XI",
      fr: "Clément XI",
      es: "Clemente XI",
      de: "Klemens XI.",
    },
    definition: {
      en: "Pope (1700-1721) known for condemning Jansenism in the bull 'Unigenitus'.",
      fr: "Pape (1700-1721) connu pour avoir condamné le jansénisme dans la bulle 'Unigenitus'.",
      es: "Papa (1700-1721) conocido por condenar el jansenismo en la bula 'Unigenitus'.",
      de: "Papst (1700-1721), bekannt für die Verurteilung des Jansenismus in der Bulle 'Unigenitus'.",
    },
  },
  {
    id: "pope-pius-xii",
    term: {
      en: "Pius XII (Venerable)",
      fr: "Pie XII (Vénérable)",
      es: "Pío XII (Venerable)",
      de: "Pius XII. (Ehrwürdiger)",
    },
    definition: {
      en: "Pope (1939-1958) who defined the Assumption of Mary and guided the Church during WWII.",
      fr: "Pape (1939-1958) qui a défini l'Assomption de Marie et guidé l'Église durant la Seconde Guerre mondiale.",
      es: "Papa (1939-1958) que definió la Asunción de María y guió a la Iglesia durante la Segunda Guerra Mundial.",
      de: "Papst (1939-1958), der die Aufnahme Mariens in den Himmel definierte und die Kirche während des Zweiten Weltkriegs leitete.",
    },
  },
  {
    id: "pope-urban-viii",
    term: {
      en: "Urban VIII",
      fr: "Urbain VIII",
      es: "Urbano VIII",
      de: "Urban VIII.",
    },
    definition: {
      en: "Pope (1623-1644) who consecrated St. Peter's Basilica and patronized Bernini; involved in the Galileo trial.",
      fr: "Pape (1623-1644) qui a consacré la Basilique Saint-Pierre et mécéné le Bernin ; impliqué dans le procès de Galilée.",
      es: "Papa (1623-1644) que consagró la Basílica de San Pedro y patrocinó a Bernini; involucrado en el juicio de Galileo.",
      de: "Papst (1623-1644), der den Petersdom weihte und Bernini förderte; in den Galileo-Prozess verwickelt.",
    },
  },
  {
    id: "pope-marcellus-ii",
    term: {
      en: "Marcellus II",
      fr: "Marcel II",
      es: "Marcelo II",
      de: "Marcellus II.",
    },
    definition: {
      en: "Pope (1555) who reigned for only 22 days; Palestrina's 'Missa Papae Marcelli' is named after him.",
      fr: "Pape (1555) qui ne régna que 22 jours ; la 'Missa Papae Marcelli' de Palestrina porte son nom.",
      es: "Papa (1555) que reinó solo 22 días; la 'Missa Papae Marcelli' de Palestrina lleva su nombre.",
      de: "Papst (1555), der nur 22 Tage regierte; Palestrinas 'Missa Papae Marcelli' ist nach ihm benannt.",
    },
  },

  // --- Conciliar & Historical Terms ---
  {
    id: "aggiornamento",
    term: {
      en: "Aggiornamento",
      fr: "Aggiornamento",
      es: "Aggiornamento",
      de: "Aggiornamento",
    },
    definition: {
      en: "Italian for 'updating.' A term used by Pope John XXIII to describe the aim of the Second Vatican Council to bring the Church's presentation of the faith up to date.",
      fr: "Italien pour 'mise à jour'. Terme utilisé par le Pape Jean XXIII pour décrire le but du Concile Vatican II de mettre à jour la présentation de la foi par l'Église.",
      es: "Italiano para 'puesta al día'. Término utilizado por el Papa Juan XXIII para describir el objetivo del Concilio Vaticano II de actualizar la presentación de la fe.",
      de: "Italienisch für 'Verheutigung'. Ein Begriff, den Papst Johannes XXIII. verwendete, um das Ziel des Zweiten Vatikanischen Konzils zu beschreiben, die Glaubensverkündigung der Kirche zu aktualisieren.",
    },
  },
  {
    id: "anathema",
    term: {
      en: "Anathema",
      fr: "Anathème",
      es: "Anatema",
      de: "Anathema",
    },
    definition: {
      en: "A formal ecclesiastical ban, curse, or excommunication. In conciliar documents, it condemns a specific heresy (e.g., 'let him be anathema').",
      fr: "Une interdiction, malédiction ou excommunication ecclésiastique formelle. Dans les documents conciliaires, elle condamne une hérésie spécifique (par ex., 'qu'il soit anathème').",
      es: "Una prohibición, maldición o excomunión eclesiástica formal. En los documentos conciliares, condena una herejía específica (p. ej., 'sea anatema').",
      de: "Ein formeller kirchlicher Bann, Fluch oder eine Exkommunikation. In Konzilsdokumenten verurteilt es eine bestimmte Häresie (z. B. 'der sei ausgeschlossen').",
    },
  },
  {
    id: "apollinarianism",
    term: {
      en: "Apollinarianism",
      fr: "Apollinarisme",
      es: "Apolinarismo",
      de: "Apollinarismus",
    },
    definition: {
      en: "A 4th-century heresy asserting that Christ had a human body but a divine mind instead of a human rational soul; condemned by Constantinople I.",
      fr: "Une hérésie du 4ème siècle affirmant que le Christ avait un corps humain mais un esprit divin au lieu d'une âme rationnelle humaine ; condamnée par Constantinople I.",
      es: "Una herejía del siglo IV que afirmaba que Cristo tenía un cuerpo humano pero una mente divina en lugar de un alma racional humana; condenada por Constantinopla I.",
      de: "Eine Häresie des 4. Jahrhunderts, die behauptete, Christus habe einen menschlichen Körper, aber einen göttlichen Geist anstelle einer menschlichen Vernunftseele; verurteilt durch Konstantinopel I.",
    },
  },
  {
    id: "chalcedon-council",
    term: {
      en: "Chalcedon, Council of",
      fr: "Chalcédoine, Concile de",
      es: "Calcedonia, Concilio de",
      de: "Chalcedon, Konzil von",
    },
    definition: {
      en: "The 4th Ecumenical Council (451 AD), which defined that Christ has two natures (divine and human) united in one Person (hypostasis) without confusion or division.",
      fr: "Le 4ème Concile Œcuménique (451), qui a défini que le Christ a deux natures (divine et humaine) unies en une seule Personne (hypostase) sans confusion ni division.",
      es: "El 4º Concilio Ecuménico (451 d.C.), que definió que Cristo tiene dos naturalezas (divina y humana) unidas en una Persona (hipóstasis) sin confusión ni división.",
      de: "Das 4. Ökumenische Konzil (451 n. Chr.), das definierte, dass Christus zwei Naturen (göttlich und menschlich) hat, die in einer Person (Hypostase) unvermischt und ungetrennt vereint sind.",
    },
  },
  {
    id: "collegiality",
    term: {
      en: "Collegiality",
      fr: "Collégialité",
      es: "Colegialidad",
      de: "Kollegialität",
    },
    definition: {
      en: "The principle that the bishops of the Church with the Pope at their head form a single 'college' that shares responsibility for the universal Church.",
      fr: "Le principe selon lequel les évêques de l'Église avec le Pape à leur tête forment un seul 'collège' qui partage la responsabilité de l'Église universelle.",
      es: "El principio de que los obispos de la Iglesia con el Papa a la cabeza forman un solo 'colegio' que comparte la responsabilidad de la Iglesia universal.",
      de: "Das Prinzip, dass die Bischöfe der Kirche mit dem Papst an der Spitze ein einziges 'Kollegium' bilden, das die Verantwortung für die Weltkirche teilt.",
    },
  },
  {
    id: "conciliarism",
    term: {
      en: "Conciliarism",
      fr: "Conciliarisme",
      es: "Conciliarismo",
      de: "Konziliarismus",
    },
    definition: {
      en: "A theory (condemned by the Church) claiming that an ecumenical council has supreme authority over the Church, superior even to the Pope.",
      fr: "Une théorie (condamnée par l'Église) affirmant qu'un concile œcuménique a l'autorité suprême sur l'Église, supérieure même au Pape.",
      es: "Una teoría (condenada por la Iglesia) que afirma que un concilio ecuménico tiene autoridad suprema sobre la Iglesia, superior incluso a la del Papa.",
      de: "Eine (von der Kirche verurteilte) Theorie, die besagt, dass ein ökumenisches Konzil die höchste Autorität über die Kirche hat, sogar über dem Papst.",
    },
  },
  {
    id: "constance-council",
    term: {
      en: "Constance, Council of",
      fr: "Constance, Concile de",
      es: "Constanza, Concilio de",
      de: "Konstanz, Konzil von",
    },
    definition: {
      en: "The council (1414-1418) that ended the Western Schism by electing Pope Martin V.",
      fr: "Le concile (1414-1418) qui mit fin au Grand Schisme d'Occident en élisant le Pape Martin V.",
      es: "El concilio (1414-1418) que puso fin al Cisma de Occidente al elegir al Papa Martín V.",
      de: "Das Konzil (1414-1418), das das Abendländische Schisma durch die Wahl von Papst Martin V. beendete.",
    },
  },
  {
    id: "constantinople-i",
    term: {
      en: "Constantinople I, Council of",
      fr: "Constantinople I, Concile de",
      es: "Constantinopla I, Concilio de",
      de: "Konstantinopel I, Konzil von",
    },
    definition: {
      en: "The 2nd Ecumenical Council (381 AD), which affirmed the divinity of the Holy Spirit and finalized the Nicene Creed.",
      fr: "Le 2ème Concile Œcuménique (381), qui a affirmé la divinité du Saint-Esprit et finalisé le Credo de Nicée.",
      es: "El 2º Concilio Ecuménico (381 d.C.), que afirmó la divinidad del Espíritu Santo y finalizó el Credo Niceno.",
      de: "Das 2. Ökumenische Konzil (381 n. Chr.), das die Gottheit des Heiligen Geistes bekräftigte und das Nizänische Glaubensbekenntnis finalisierte.",
    },
  },
  {
    id: "constantinople-iii",
    term: {
      en: "Constantinople III, Council of",
      fr: "Constantinople III, Concile de",
      es: "Constantinopla III, Concilio de",
      de: "Konstantinopel III, Konzil von",
    },
    definition: {
      en: "The 6th Ecumenical Council (680-681 AD), which condemned Monothelitism and defined that Christ has two wills (divine and human).",
      fr: "Le 6ème Concile Œcuménique (680-681), qui a condamné le monothélisme et défini que le Christ a deux volontés (divine et humaine).",
      es: "El 6º Concilio Ecuménico (680-681 d.C.), que condenó el monotelismo y definió que Cristo tiene dos voluntades (divina y humana).",
      de: "Das 6. Ökumenische Konzil (680-681 n. Chr.), das den Monotheletismus verurteilte und definierte, dass Christus zwei Willen hat (göttlich und menschlich).",
    },
  },
  {
    id: "constitution-dogmatic",
    term: {
      en: "Constitution, Dogmatic",
      fr: "Constitution Dogmatique",
      es: "Constitución Dogmática",
      de: "Dogmatische Konstitution",
    },
    definition: {
      en: "A high-level conciliar document dealing with fundamental matters of faith (e.g., Dei Verbum, Lumen Gentium).",
      fr: "Un document conciliaire de haut niveau traitant de questions fondamentales de la foi (par ex., Dei Verbum, Lumen Gentium).",
      es: "Un documento conciliar de alto nivel que trata asuntos fundamentales de la fe (p. ej., Dei Verbum, Lumen Gentium).",
      de: "Ein hochrangiges Konzilsdokument, das sich mit grundlegenden Glaubensfragen befasst (z. B. Dei Verbum, Lumen Gentium).",
    },
  },
  {
    id: "decree",
    term: {
      en: "Decree",
      fr: "Décret",
      es: "Decreto",
      de: "Dekret",
    },
    definition: {
      en: "A legislative act or order issued by a church authority (council or pope) concerning a specific matter of discipline or administration.",
      fr: "Un acte législatif ou un ordre émis par une autorité ecclésiale (concile ou pape) concernant une question spécifique de discipline ou d'administration.",
      es: "Un acto legislativo u orden emitida por una autoridad eclesiástica (concilio o papa) sobre un asunto específico de disciplina o administración.",
      de: "Ein gesetzgebender Akt oder Befehl, der von einer kirchlichen Autorität (Konzil oder Papst) bezüglich einer bestimmten Disziplin- oder Verwaltungsangelegenheit erlassen wird.",
    },
  },
  {
    id: "dei-filius",
    term: {
      en: "Dei Filius",
      fr: "Dei Filius",
      es: "Dei Filius",
      de: "Dei Filius",
    },
    definition: {
      en: "The Dogmatic Constitution on the Catholic Faith issued by Vatican I (1870), affirming the relationship between faith and reason.",
      fr: "La Constitution dogmatique sur la foi catholique publiée par Vatican I (1870), affirmant la relation entre la foi et la raison.",
      es: "La Constitución Dogmática sobre la Fe Católica emitida por el Vaticano I (1870), afirmando la relación entre fe y razón.",
      de: "Die Dogmatische Konstitution über den katholischen Glauben, erlassen vom Ersten Vatikanum (1870), die das Verhältnis von Glaube und Vernunft bekräftigt.",
    },
  },
  {
    id: "dei-verbum",
    term: {
      en: "Dei Verbum",
      fr: "Dei Verbum",
      es: "Dei Verbum",
      de: "Dei Verbum",
    },
    definition: {
      en: "The Dogmatic Constitution on Divine Revelation from Vatican II (1965), emphasizing Scripture, Tradition, and Magisterium.",
      fr: "La Constitution dogmatique sur la Révélation divine de Vatican II (1965), mettant l'accent sur l'Écriture, la Tradition et le Magistère.",
      es: "La Constitución Dogmática sobre la Divina Revelación del Vaticano II (1965), enfatizando la Escritura, la Tradición y el Magisterio.",
      de: "Die Dogmatische Konstitution über die göttliche Offenbarung des Zweiten Vatikanums (1965), die Schrift, Tradition und Lehramt betont.",
    },
  },
  {
    id: "deposit-faith",
    term: {
      en: "Deposit of Faith",
      fr: "Dépôt de la Foi",
      es: "Depósito de la Fe",
      de: "Glaubensgut",
    },
    definition: {
      en: "The body of revealed truth in the Scriptures and Tradition proposed by the Roman Catholic Church for the belief of the faithful.",
      fr: "L'ensemble de la vérité révélée dans les Écritures et la Tradition proposée par l'Église catholique romaine à la croyance des fidèles.",
      es: "El cuerpo de verdad revelada en las Escrituras y la Tradición propuesto por la Iglesia Católica Romana para la creencia de los fieles.",
      de: "Die Gesamtheit der in Schrift und Tradition geoffenbarten Wahrheit, die von der römisch-katholischen Kirche den Gläubigen zum Glauben vorgelegt wird.",
    },
  },
  {
    id: "development-doctrine",
    term: {
      en: "Development of Doctrine",
      fr: "Développement de la Doctrine",
      es: "Desarrollo de la Doctrina",
      de: "Dogmenentwicklung",
    },
    definition: {
      en: "The process by which the Church's understanding of the Deposit of Faith deepens over time without changing the essential truth (concept by Newman).",
      fr: "Le processus par lequel la compréhension de l'Église du Dépôt de la Foi s'approfondit avec le temps sans changer la vérité essentielle (concept de Newman).",
      es: "El proceso por el cual la comprensión de la Iglesia del Depósito de la Fe se profundiza con el tiempo sin cambiar la verdad esencial (concepto de Newman).",
      de: "Der Prozess, durch den sich das Verständnis der Kirche vom Glaubensgut im Laufe der Zeit vertieft, ohne die wesentliche Wahrheit zu ändern (Konzept von Newman).",
    },
  },
  {
    id: "dignitatis-humanae",
    term: {
      en: "Dignitatis Humanae",
      fr: "Dignitatis Humanae",
      es: "Dignitatis Humanae",
      de: "Dignitatis Humanae",
    },
    definition: {
      en: "Vatican II Declaration on Religious Freedom (1965), asserting the human right to religious liberty based on human dignity.",
      fr: "Déclaration de Vatican II sur la liberté religieuse (1965), affirmant le droit humain à la liberté religieuse basé sur la dignité humaine.",
      es: "Declaración del Vaticano II sobre la Libertad Religiosa (1965), afirmando el derecho humano a la libertad religiosa basado en la dignidad humana.",
      de: "Erklärung des Zweiten Vatikanums über die Religionsfreiheit (1965), die das Menschenrecht auf Religionsfreiheit aufgrund der Menschenwürde bekräftigt.",
    },
  },
  {
    id: "donatism",
    term: {
      en: "Donatism",
      fr: "Donatisme",
      es: "Donatismo",
      de: "Donatismus",
    },
    definition: {
      en: "A heresy stating that the validity of sacraments depends on the moral character of the minister; opposed by St. Augustine.",
      fr: "Une hérésie affirmant que la validité des sacrements dépend du caractère moral du ministre ; combattue par Saint Augustin.",
      es: "Una herejía que afirmaba que la validez de los sacramentos depende del carácter moral del ministro; opuesta por San Agustín.",
      de: "Eine Häresie, die besagte, dass die Gültigkeit von Sakramenten vom moralischen Charakter des Spenders abhängt; bekämpft vom hl. Augustinus.",
    },
  },
  {
    id: "ephesus-council",
    term: {
      en: "Ephesus, Council of",
      fr: "Éphèse, Concile d'",
      es: "Éfeso, Concilio de",
      de: "Ephesus, Konzil von",
    },
    definition: {
      en: "The 3rd Ecumenical Council (431 AD), which condemned Nestorianism and declared Mary to be Theotokos (God-bearer).",
      fr: "Le 3ème Concile Œcuménique (431), qui a condamné le nestorianisme et déclaré Marie Theotokos (Mère de Dieu).",
      es: "El 3er Concilio Ecuménico (431 d.C.), que condenó el nestorianismo y declaró a María como Theotokos (Madre de Dios).",
      de: "Das 3. Ökumenische Konzil (431 n. Chr.), das den Nestorianismus verurteilte und Maria als Theotokos (Gottesgebärerin) erklärte.",
    },
  },
  {
    id: "florence-council",
    term: {
      en: "Florence, Council of",
      fr: "Florence, Concile de",
      es: "Florencia, Concilio de",
      de: "Florenz, Konzil von",
    },
    definition: {
      en: "The council (1431-1445) that attempted reunion with the Greek and other Eastern churches and defined the seven sacraments.",
      fr: "Le concile (1431-1445) qui a tenté la réunion avec les Églises grecques et autres Églises orientales et a défini les sept sacrements.",
      es: "El concilio (1431-1445) que intentó la reunión con las iglesias griegas y otras orientales y definió los siete sacramentos.",
      de: "Das Konzil (1431-1445), das die Wiedervereinigung mit den griechischen und anderen Ostkirchen versuchte und die sieben Sakramente definierte.",
    },
  },
  {
    id: "gallicanism",
    term: {
      en: "Gallicanism",
      fr: "Gallicanisme",
      es: "Galicanismo",
      de: "Gallikanismus",
    },
    definition: {
      en: "A French movement that sought to restrict papal authority and increase the power of the state over the church.",
      fr: "Un mouvement français qui cherchait à restreindre l'autorité papale et à accroître le pouvoir de l'État sur l'Église.",
      es: "Un movimiento francés que buscaba restringir la autoridad papal y aumentar el poder del estado sobre la iglesia.",
      de: "Eine französische Bewegung, die versuchte, die päpstliche Autorität einzuschränken und die Macht des Staates über die Kirche zu vergrößern.",
    },
  },
  {
    id: "heresy",
    term: {
      en: "Heresy",
      fr: "Hérésie",
      es: "Herejía",
      de: "Häresie",
    },
    definition: {
      en: "The obstinate post-baptismal denial of some truth which must be believed with divine and catholic faith.",
      fr: "La négation obstinée, après le baptême, d'une vérité qui doit être crue de foi divine et catholique.",
      es: "La negación obstinada, después del bautismo, de alguna verdad que debe creerse con fe divina y católica.",
      de: "Die hartnäckige Leugnung einer Wahrheit nach der Taufe, die mit göttlichem und katholischem Glauben geglaubt werden muss.",
    },
  },
  {
    id: "homoousios",
    term: {
      en: "Homoousios",
      fr: "Homoousios",
      es: "Homoousios",
      de: "Homoousios",
    },
    definition: {
      en: "Greek term ('consubstantial' or 'of the same substance') used at Nicaea to define Jesus as sharing the same divine essence as the Father.",
      fr: "Terme grec ('consubstantiel' ou 'de la même substance') utilisé à Nicée pour définir Jésus comme partageant la même essence divine que le Père.",
      es: "Término griego ('consubstancial' o 'de la misma sustancia') usado en Nicea para definir a Jesús como compartiendo la misma esencia divina que el Padre.",
      de: "Griechischer Begriff ('wesensgleich' oder 'von derselben Substanz'), der in Nicäa verwendet wurde, um zu definieren, dass Jesus dieselbe göttliche Wesenheit wie der Vater teilt.",
    },
  },
  {
    id: "hypostasis",
    term: {
      en: "Hypostasis",
      fr: "Hypostase",
      es: "Hipóstasis",
      de: "Hypostase",
    },
    definition: {
      en: "A term used in Trinitarian and Christological theology to denote a 'Person' or distinct subsistence.",
      fr: "Un terme utilisé en théologie trinitaire et christologique pour désigner une 'Personne' ou une subsistance distincte.",
      es: "Un término utilizado en la teología trinitaria y cristológica para denotar una 'Persona' o subsistencia distinta.",
      de: "Ein Begriff, der in der trinitarischen und christologischen Theologie verwendet wird, um eine 'Person' oder eine eigenständige Existenz zu bezeichnen.",
    },
  },
  {
    id: "iconodule",
    term: {
      en: "Iconodule",
      fr: "Iconodule",
      es: "Iconódulo",
      de: "Ikonodule",
    },
    definition: {
      en: "One who supports the veneration of religious images (icons), in opposition to iconoclasm.",
      fr: "Celui qui soutient la vénération des images religieuses (icônes), en opposition à l'iconoclasme.",
      es: "Aquel que apoya la veneración de imágenes religiosas (iconos), en oposición a la iconoclasia.",
      de: "Jemand, der die Verehrung religiöser Bilder (Ikonen) unterstützt, im Gegensatz zum Ikonoklasmus.",
    },
  },
  {
    id: "jansenism",
    term: {
      en: "Jansenism",
      fr: "Jansénisme",
      es: "Jansenismo",
      de: "Jansenismus",
    },
    definition: {
      en: "A theological movement emphasizing original sin, human depravity, the necessity of divine grace, and predestination; condemned as heretical.",
      fr: "Un mouvement théologique mettant l'accent sur le péché originel, la dépravation humaine, la nécessité de la grâce divine et la prédestination ; condamné comme hérétique.",
      es: "Un movimiento teológico que enfatiza el pecado original, la depravación humana, la necesidad de la gracia divina y la predestinación; condenado como herético.",
      de: "Eine theologische Bewegung, die die Erbsünde, die menschliche Verderbtheit, die Notwendigkeit der göttlichen Gnade und die Prädestination betont; als ketzerisch verurteilt.",
    },
  },
  {
    id: "justification-decree",
    term: {
      en: "Justification (Decree on)",
      fr: "Justification (Décret sur la)",
      es: "Justificación (Decreto sobre la)",
      de: "Rechtfertigung (Dekret über die)",
    },
    definition: {
      en: "A key document of the Council of Trent defining how a sinner is made righteous by God's grace through faith and works, opposing Sola Fide.",
      fr: "Un document clé du Concile de Trente définissant comment un pécheur est rendu juste par la grâce de Dieu à travers la foi et les œuvres, s'opposant à Sola Fide.",
      es: "Un documento clave del Concilio de Trento que define cómo un pecador se hace justo por la gracia de Dios a través de la fe y las obras, oponiéndose a Sola Fide.",
      de: "Ein Schlüsseldokument des Konzils von Trient, das definiert, wie ein Sünder durch Gottes Gnade durch Glauben und Werke gerecht gemacht wird, im Gegensatz zu Sola Fide.",
    },
  },
  {
    id: "lateran-iv",
    term: {
      en: "Lateran Council IV",
      fr: "Latran IV",
      es: "Letrán IV",
      de: "Viertes Laterankonzil",
    },
    definition: {
      en: "The 12th Ecumenical Council (1215), which defined transubstantiation and mandated annual confession and communion.",
      fr: "Le 12ème Concile Œcuménique (1215), qui a défini la transsubstantiation et imposé la confession et la communion annuelles.",
      es: "El 12º Concilio Ecuménico (1215), que definió la transubstanciación y ordenó la confesión y comunión anuales.",
      de: "Das 12. Ökumenische Konzil (1215), das die Transsubstantiation definierte und die jährliche Beichte und Kommunion vorschrieb.",
    },
  },
  {
    id: "lateran-v",
    term: {
      en: "Lateran Council V",
      fr: "Latran V",
      es: "Letrán V",
      de: "Fünftes Laterankonzil",
    },
    definition: {
      en: "The council (1512-1517) held just before the Reformation, addressing Church reform and the immortality of the soul.",
      fr: "Le concile (1512-1517) tenu juste avant la Réforme, traitant de la réforme de l'Église et de l'immortalité de l'âme.",
      es: "El concilio (1512-1517) celebrado justo antes de la Reforma, que abordó la reforma de la Iglesia y la inmortalidad del alma.",
      de: "Das Konzil (1512-1517), das kurz vor der Reformation stattfand und sich mit der Kirchenreform und der Unsterblichkeit der Seele befasste.",
    },
  },
  {
    id: "lyons-ii",
    term: {
      en: "Lyons II, Council of",
      fr: "Lyon II, Concile de",
      es: "Lyon II, Concilio de",
      de: "Lyon II, Konzil von",
    },
    definition: {
      en: "The council (1274) that attempted a reunion with the Eastern Church and regulated papal elections.",
      fr: "Le concile (1274) qui a tenté une réunion avec l'Église orientale et réglementé les élections papales.",
      es: "El concilio (1274) que intentó una reunión con la Iglesia Oriental y reguló las elecciones papales.",
      de: "Das Konzil (1274), das eine Wiedervereinigung mit der Ostkirche versuchte und die Papstwahlen regelte.",
    },
  },
  {
    id: "modernism",
    term: {
      en: "Modernism",
      fr: "Modernisme",
      es: "Modernismo",
      de: "Modernismus",
    },
    definition: {
      en: "Called the 'synthesis of all heresies' by Pius X; a movement attempting to adapt the faith to modern culture by denying objective supernatural truth.",
      fr: "Appelé la 'synthèse de toutes les hérésies' par Pie X ; un mouvement tentant d'adapter la foi à la culture moderne en niant la vérité surnaturelle objective.",
      es: "Llamado la 'síntesis de todas las herejías' por Pío X; un movimiento que intenta adaptar la fe a la cultura moderna negando la verdad sobrenatural objetiva.",
      de: "Von Pius X. als 'Zusammenfassung aller Häresien' bezeichnet; eine Bewegung, die versucht, den Glauben an die moderne Kultur anzupassen, indem sie objektive übernatürliche Wahrheit leugnet.",
    },
  },
  {
    id: "monophysitism",
    term: {
      en: "Monophysitism",
      fr: "Monophysisme",
      es: "Monofisismo",
      de: "Monophysitismus",
    },
    definition: {
      en: "The heresy asserting that Christ has only one nature (divine), which absorbed his human nature.",
      fr: "L'hérésie affirmant que le Christ n'a qu'une seule nature (divine), qui a absorbé sa nature humaine.",
      es: "La herejía que afirma que Cristo tiene una sola naturaleza (divina), que absorbió su naturaleza humana.",
      de: "Die Häresie, die behauptet, dass Christus nur eine Natur (die göttliche) hat, die seine menschliche Natur absorbiert hat.",
    },
  },
  {
    id: "monothelitism",
    term: {
      en: "Monothelitism",
      fr: "Monothélisme",
      es: "Monotelismo",
      de: "Monotheletismus",
    },
    definition: {
      en: "The heresy asserting that Christ has only one will (divine), denying his human will.",
      fr: "L'hérésie affirmant que le Christ n'a qu'une seule volonté (divine), niant sa volonté humaine.",
      es: "La herejía que afirma que Cristo tiene una sola voluntad (divina), negando su voluntad humana.",
      de: "Die Häresie, die behauptet, dass Christus nur einen Willen (den göttlichen) hat und seinen menschlichen Willen leugnet.",
    },
  },
  {
    id: "nestorianism",
    term: {
      en: "Nestorianism",
      fr: "Nestorianisme",
      es: "Nestorianismo",
      de: "Nestorianismus",
    },
    definition: {
      en: "The heresy teaching that Christ is two separate persons (one divine, one human) and that Mary is only the mother of the human Jesus.",
      fr: "L'hérésie enseignant que le Christ est deux personnes distinctes (une divine, une humaine) et que Marie n'est que la mère du Jésus humain.",
      es: "La herejía que enseña que Cristo son dos personas separadas (una divina, una humana) y que María es solo la madre del Jesús humano.",
      de: "Die Häresie, die lehrt, dass Christus zwei getrennte Personen ist (eine göttliche, eine menschliche) und dass Maria nur die Mutter des menschlichen Jesus ist.",
    },
  },
  {
    id: "nicaea-i",
    term: {
      en: "Nicaea I, Council of",
      fr: "Nicée I, Concile de",
      es: "Nicea I, Concilio de",
      de: "Nicäa I, Konzil von",
    },
    definition: {
      en: "The 1st Ecumenical Council (325 AD), which condemned Arianism and defined the Son as 'consubstantial' (homoousios) with the Father.",
      fr: "Le 1er Concile Œcuménique (325), qui a condamné l'arianisme et défini le Fils comme 'consubstantiel' (homoousios) au Père.",
      es: "El 1er Concilio Ecuménico (325 d.C.), que condenó el arrianismo y definió al Hijo como 'consubstancial' (homoousios) con el Padre.",
      de: "Das 1. Ökumenische Konzil (325 n. Chr.), das den Arianismus verurteilte und den Sohn als 'wesensgleich' (homoousios) mit dem Vater definierte.",
    },
  },
  {
    id: "nicaea-ii",
    term: {
      en: "Nicaea II, Council of",
      fr: "Nicée II, Concile de",
      es: "Nicea II, Concilio de",
      de: "Nicäa II, Konzil von",
    },
    definition: {
      en: "The 7th Ecumenical Council (787 AD), which condemned iconoclasm and restored the veneration of sacred images.",
      fr: "Le 7ème Concile Œcuménique (787), qui a condamné l'iconoclasme et rétabli la vénération des images sacrées.",
      es: "El 7º Concilio Ecuménico (787 d.C.), que condenó la iconoclasia y restauró la veneración de las imágenes sagradas.",
      de: "Das 7. Ökumenische Konzil (787 n. Chr.), das den Ikonoklasmus verurteilte und die Verehrung heiliger Bilder wiederherstellte.",
    },
  },
  {
    id: "nostra-aetate",
    term: {
      en: "Nostra Aetate",
      fr: "Nostra Aetate",
      es: "Nostra Aetate",
      de: "Nostra Aetate",
    },
    definition: {
      en: "Vatican II Declaration on the Relation of the Church to Non-Christian Religions (1965).",
      fr: "Déclaration de Vatican II sur les relations de l'Église avec les religions non chrétiennes (1965).",
      es: "Declaración del Vaticano II sobre las relaciones de la Iglesia con las religiones no cristianas (1965).",
      de: "Erklärung des Zweiten Vatikanums über das Verhältnis der Kirche zu den nichtchristlichen Religionen (1965).",
    },
  },
  {
    id: "pastor-aeternus",
    term: {
      en: "Pastor Aeternus",
      fr: "Pastor Aeternus",
      es: "Pastor Aeternus",
      de: "Pastor Aeternus",
    },
    definition: {
      en: "The Dogmatic Constitution of Vatican I (1870) defining papal primacy and papal infallibility.",
      fr: "La Constitution dogmatique de Vatican I (1870) définissant la primauté papale et l'infaillibilité papale.",
      es: "La Constitución Dogmática del Vaticano I (1870) que define la primacía papal y la infalibilidad papal.",
      de: "Die Dogmatische Konstitution des Ersten Vatikanums (1870), die den päpstlichen Primat und die päpstliche Unfehlbarkeit definiert.",
    },
  },
  {
    id: "peritus",
    term: {
      en: "Peritus",
      fr: "Peritus",
      es: "Perito",
      de: "Peritus",
    },
    definition: {
      en: "A theological expert or advisor to a bishop at a church council.",
      fr: "Un expert théologique ou conseiller d'un évêque lors d'un concile de l'Église.",
      es: "Un experto teológico o asesor de un obispo en un concilio de la iglesia.",
      de: "Ein theologischer Experte oder Berater eines Bischofs auf einem Kirchenkonzil.",
    },
  },
  {
    id: "quo-primum",
    term: {
      en: "Quo Primum",
      fr: "Quo Primum",
      es: "Quo Primum",
      de: "Quo Primum",
    },
    definition: {
      en: "The Apostolic Constitution by Pope Pius V (1570) promulgating the Tridentine Mass (Traditional Latin Mass).",
      fr: "La Constitution apostolique du Pape Pie V (1570) promulguant la Messe tridentine (Messe latine traditionnelle).",
      es: "La Constitución Apostólica del Papa Pío V (1570) que promulga la Misa Tridentina (Misa Tradicional en Latín).",
      de: "Die Apostolische Konstitution von Papst Pius V. (1570), die die Tridentinische Messe (Traditionelle Lateinische Messe) promulgiert.",
    },
  },
  {
    id: "ressourcement",
    term: {
      en: "Ressourcement",
      fr: "Ressourcement",
      es: "Ressourcement",
      de: "Ressourcement",
    },
    definition: {
      en: "A theological movement involving a 'return to the sources' (Scripture and Church Fathers) that influenced Vatican II.",
      fr: "Un mouvement théologique impliquant un 'retour aux sources' (Écriture et Pères de l'Église) qui a influencé Vatican II.",
      es: "Un movimiento teológico que implica un 'retorno a las fuentes' (Escritura y Padres de la Iglesia) que influyó en el Vaticano II.",
      de: "Eine theologische Bewegung, die eine 'Rückkehr zu den Quellen' (Schrift und Kirchenväter) beinhaltet und das Zweite Vatikanum beeinflusste.",
    },
  },
  {
    id: "schism",
    term: {
      en: "Schism",
      fr: "Schisme",
      es: "Cisma",
      de: "Schisma",
    },
    definition: {
      en: "A willful separation from the unity of the Church; refusing submission to the Pope or communion with church members.",
      fr: "Une séparation volontaire de l'unité de l'Église ; refus de se soumettre au Pape ou de communier avec les membres de l'Église.",
      es: "Una separación voluntaria de la unidad de la Iglesia; rechazar la sumisión al Papa o la comunión con los miembros de la iglesia.",
      de: "Eine willentliche Trennung von der Einheit der Kirche; Verweigerung der Unterwerfung unter den Papst oder der Gemeinschaft mit den Kirchenmitgliedern.",
    },
  },
  {
    id: "syllabus-of-errors",
    term: {
      en: "Syllabus of Errors",
      fr: "Syllabus",
      es: "Syllabus",
      de: "Syllabus errorum",
    },
    definition: {
      en: "A document issued by Pope Pius IX (1864) condemning 80 errors of modern times (e.g., liberalism, rationalism).",
      fr: "Un document publié par le Pape Pie IX (1864) condamnant 80 erreurs des temps modernes (par ex., libéralisme, rationalisme).",
      es: "Un documento emitido por el Papa Pío IX (1864) condenando 80 errores de los tiempos modernos (p. ej., liberalismo, racionalismo).",
      de: "Ein Dokument von Papst Pius IX. (1864), das 80 Irrtümer der modernen Zeit verurteilt (z. B. Liberalismus, Rationalismus).",
    },
  },
  {
    id: "theotokos",
    term: {
      en: "Theotokos",
      fr: "Théotokos",
      es: "Theotokos",
      de: "Theotokos",
    },
    definition: {
      en: "Greek for 'God-bearer' or 'Mother of God.' The title affirmed for Mary at the Council of Ephesus (431).",
      fr: "Grec pour 'Porteuse de Dieu' ou 'Mère de Dieu'. Le titre affirmé pour Marie au Concile d'Éphèse (431).",
      es: "Griego para 'Portadora de Dios' o 'Madre de Dios'. El título afirmado para María en el Concilio de Éfeso (431).",
      de: "Griechisch für 'Gottesgebärerin' oder 'Mutter Gottes'. Der Titel, der Maria auf dem Konzil von Ephesus (431) zugesprochen wurde.",
    },
  },
  {
    id: "trent-council",
    term: {
      en: "Trent, Council of",
      fr: "Trente, Concile de",
      es: "Trento, Concilio de",
      de: "Trient, Konzil von",
    },
    definition: {
      en: "The 19th Ecumenical Council (1545-1563), which responded to the Protestant Reformation by clarifying doctrine and reforming abuses.",
      fr: "Le 19ème Concile Œcuménique (1545-1563), qui a répondu à la Réforme protestante en clarifiant la doctrine et en réformant les abus.",
      es: "El 19º Concilio Ecuménico (1545-1563), que respondió a la Reforma Protestante aclarando la doctrina y reformando los abusos.",
      de: "Das 19. Ökumenische Konzil (1545-1563), das auf die protestantische Reformation reagierte, indem es die Lehre klärte und Missbräuche reformierte.",
    },
  },
  {
    id: "ultramontanism",
    term: {
      en: "Ultramontanism",
      fr: "Ultramontanisme",
      es: "Ultramontanismo",
      de: "Ultramontanismus",
    },
    definition: {
      en: "A 19th-century movement emphasizing strong papal authority and centralization in Rome ('beyond the mountains').",
      fr: "Un mouvement du 19ème siècle mettant l'accent sur une forte autorité papale et la centralisation à Rome ('au-delà des montagnes').",
      es: "Un movimiento del siglo XIX que enfatizaba una fuerte autoridad papal y la centralización en Roma ('más allá de las montañas').",
      de: "Eine Bewegung des 19. Jahrhunderts, die starke päpstliche Autorität und Zentralisierung in Rom ('jenseits der Berge') betonte.",
    },
  },
  {
    id: "unitatis-redintegratio",
    term: {
      en: "Unitatis Redintegratio",
      fr: "Unitatis Redintegratio",
      es: "Unitatis Redintegratio",
      de: "Unitatis Redintegratio",
    },
    definition: {
      en: "Vatican II Decree on Ecumenism (1964), setting principles for Catholic engagement with other Christians.",
      fr: "Décret de Vatican II sur l'œcuménisme (1964), fixant les principes de l'engagement catholique avec les autres chrétiens.",
      es: "Decreto del Vaticano II sobre el Ecumenismo (1964), estableciendo principios para el compromiso católico con otros cristianos.",
      de: "Dekret des Zweiten Vatikanums über den Ökumenismus (1964), das Prinzipien für das katholische Engagement mit anderen Christen festlegt.",
    },
  },
  {
    id: "vatican-i",
    term: {
      en: "Vatican Council I",
      fr: "Concile Vatican I",
      es: "Concilio Vaticano I",
      de: "Erstes Vatikanisches Konzil",
    },
    definition: {
      en: "The 20th Ecumenical Council (1869-1870), which defined papal infallibility and the relationship between faith and reason.",
      fr: "Le 20ème Concile Œcuménique (1869-1870), qui a défini l'infaillibilité papale et la relation entre la foi et la raison.",
      es: "El 20º Concilio Ecuménico (1869-1870), que definió la infalibilidad papal y la relación entre fe y razón.",
      de: "Das 20. Ökumenische Konzil (1869-1870), das die päpstliche Unfehlbarkeit und das Verhältnis von Glaube und Vernunft definierte.",
    },
  },
  {
    id: "vienne-council",
    term: {
      en: "Vienne, Council of",
      fr: "Vienne, Concile de",
      es: "Vienne, Concilio de",
      de: "Vienne, Konzil von",
    },
    definition: {
      en: "The council (1311-1312) that suppressed the Knights Templar and addressed reform and the Franciscan poverty controversy.",
      fr: "Le concile (1311-1312) qui a supprimé les Templiers et traité de la réforme et de la controverse sur la pauvreté franciscaine.",
      es: "El concilio (1311-1312) que suprimió a los Caballeros Templarios y abordó la reforma y la controversia sobre la pobreza franciscana.",
      de: "Das Konzil (1311-1312), das den Templerorden auflöste und sich mit Reformen und dem Armutsstreit der Franziskaner befasste.",
    },
  },

  // --- Theological Terms ---
  {
    id: "adoptionism",
    term: {
      en: "Adoptionism",
      fr: "Adoptionisme",
      es: "Adopcionismo",
      de: "Adoptionismus",
    },
    definition: {
      en: "A heresy claiming that Jesus was a human being who was 'adopted' by God as His Son, typically at his baptism.",
      fr: "Une hérésie prétendant que Jésus était un être humain qui a été « adopté » par Dieu comme Son Fils, généralement lors de son baptême.",
      es: "Una herejía que afirma que Jesús era un ser humano que fue 'adoptado' por Dios como su Hijo, típicamente en su bautismo.",
      de: "Eine Häresie, die behauptet, Jesus sei ein Mensch gewesen, der von Gott als sein Sohn 'adoptiert' wurde, typischerweise bei seiner Taufe.",
    },
  },
  {
    id: "anamnesis",
    term: {
      en: "Anamnesis",
      fr: "Anamnèse",
      es: "Anamnesis",
      de: "Anamnese",
    },
    definition: {
      en: "A Greek word meaning 'remembrance' or 'memorial'; in the Mass, it refers to the memorial of Christ's Passion, Resurrection, and Ascension.",
      fr: "Un mot grec signifiant « souvenir » ou « mémorial » ; dans la messe, il fait référence au mémorial de la Passion, de la Résurrection et de l'Ascension du Christ.",
      es: "Una palabra griega que significa 'recuerdo' o 'memorial'; en la Misa, se refiere al memorial de la Pasión, Resurrección y Ascensión de Cristo.",
      de: "Ein griechisches Wort für 'Erinnerung' oder 'Gedächtnis'; in der Messe bezieht es sich auf das Gedächtnis an Christi Leiden, Auferstehung und Himmelfahrt.",
    },
  },
  {
    id: "anthropomorphism",
    term: {
      en: "Anthropomorphism",
      fr: "Anthropomorphisme",
      es: "Antropomorfismo",
      de: "Anthropomorphismus",
    },
    definition: {
      en: "Attributing human characteristics, emotions, or physical parts to God (who is pure spirit) to make Him understandable to us.",
      fr: "Attribuer des caractéristiques, émotions ou parties physiques humaines à Dieu (qui est pur esprit) pour nous le rendre compréhensible.",
      es: "Atribuir características, emociones o partes físicas humanas a Dios (que es puro espíritu) para hacerlo comprensible para nosotros.",
      de: "Das Zuschreiben menschlicher Eigenschaften, Emotionen oder körperlicher Teile an Gott (der reiner Geist ist), um Ihn für uns verständlich zu machen.",
    },
  },
  {
    id: "antinomianism",
    term: {
      en: "Antinomianism",
      fr: "Antinomisme",
      es: "Antinomianismo",
      de: "Antinomismus",
    },
    definition: {
      en: "The heretical belief that Christians are freed from the moral law by grace and faith, and thus need not obey the Ten Commandments.",
      fr: "La croyance hérétique selon laquelle les chrétiens sont libérés de la loi morale par la grâce et la foi, et n'ont donc pas besoin d'obéir aux Dix Commandements.",
      es: "La creencia herética de que los cristianos están liberados de la ley moral por la gracia y la fe, y por lo tanto no necesitan obedecer los Diez Mandamientos.",
      de: "Der ketzerische Glaube, dass Christen durch Gnade und Glauben vom Sittengesetz befreit sind und daher die Zehn Gebote nicht befolgen müssen.",
    },
  },
  {
    id: "apostolicity",
    term: {
      en: "Apostolicity",
      fr: "Apostolicité",
      es: "Apostolicidad",
      de: "Apostolizität",
    },
    definition: {
      en: "The quality of the Church being founded on the Apostles, preserving their teaching, and being governed by their successors.",
      fr: "La qualité de l'Église d'être fondée sur les Apôtres, de préserver leur enseignement et d'être gouvernée par leurs successeurs.",
      es: "La cualidad de la Iglesia de estar fundada en los Apóstoles, preservando su enseñanza y siendo gobernada por sus sucesores.",
      de: "Die Eigenschaft der Kirche, auf die Apostel gegründet zu sein, ihre Lehre zu bewahren und von ihren Nachfolgern geleitet zu werden.",
    },
  },
  {
    id: "beatitudes",
    term: {
      en: "Beatitudes",
      fr: "Béatitudes",
      es: "Bienaventuranzas",
      de: "Seligpreisungen",
    },
    definition: {
      en: "The eight blessings preached by Jesus in the Sermon on the Mount (Matthew 5), describing the character of the Kingdom of God.",
      fr: "Les huit bénédictions prêchées par Jésus dans le Sermon sur la montagne (Matthieu 5), décrivant le caractère du Royaume de Dieu.",
      es: "Las ocho bendiciones predicadas por Jesús en el Sermón de la Montaña (Mateo 5), que describen el carácter del Reino de Dios.",
      de: "Die acht Seligpreisungen, die Jesus in der Bergpredigt (Matthäus 5) verkündete und die den Charakter des Reiches Gottes beschreiben.",
    },
  },
  {
    id: "canon-scripture",
    term: {
      en: "Canon of Scripture",
      fr: "Canon des Écritures",
      es: "Canon de las Escrituras",
      de: "Bibelkanon",
    },
    definition: {
      en: "The official list of inspired books of the Bible accepted by the Catholic Church (46 Old Testament, 27 New Testament).",
      fr: "La liste officielle des livres inspirés de la Bible acceptés par l'Église catholique (46 Ancien Testament, 27 Nouveau Testament).",
      es: "La lista oficial de libros inspirados de la Biblia aceptados por la Iglesia Católica (46 Antiguo Testamento, 27 Nuevo Testamento).",
      de: "Die offizielle Liste der inspirierten Bücher der Bibel, die von der katholischen Kirche anerkannt sind (46 Altes Testament, 27 Neues Testament).",
    },
  },
  {
    id: "clericalism",
    term: {
      en: "Clericalism",
      fr: "Cléricalisme",
      es: "Clericalismo",
      de: "Klerikalismus",
    },
    definition: {
      en: "A disordered attitude that overemphasizes the role of the clergy and separates them from the laity, often leading to abuse of power.",
      fr: "Une attitude désordonnée qui surestime le rôle du clergé et le sépare des laïcs, conduisant souvent à des abus de pouvoir.",
      es: "Una actitud desordenada que enfatiza demasiado el papel del clero y lo separa de los laicos, a menudo conduciendo al abuso de poder.",
      de: "Eine ungeordnete Haltung, die die Rolle des Klerus überbetont und ihn von den Laien trennt, was oft zu Machtmissbrauch führt.",
    },
  },
  {
    id: "communicatio-idiomatum",
    term: {
      en: "Communicatio Idiomatum",
      fr: "Communication des idiomes",
      es: "Comunicación de idiomas",
      de: "Idiomenkommunikation",
    },
    definition: {
      en: "The theological principle that properties of both the human and divine natures can be attributed to the one Person of Christ.",
      fr: "Le principe théologique selon lequel les propriétés des natures humaine et divine peuvent être attribuées à l'unique Personne du Christ.",
      es: "El principio teológico de que las propiedades de las naturalezas humana y divina pueden atribuirse a la única Persona de Cristo.",
      de: "Das theologische Prinzip, dass Eigenschaften sowohl der menschlichen als auch der göttlichen Natur der einen Person Christi zugeschrieben werden können.",
    },
  },
  {
    id: "concupiscence",
    term: {
      en: "Concupiscence",
      fr: "Concupiscence",
      es: "Concupiscencia",
      de: "Konkupiszenz",
    },
    definition: {
      en: "The inclination to sin that remains in human beings even after Baptism, resulting from Original Sin.",
      fr: "L'inclination au péché qui demeure chez l'être humain même après le baptême, résultant du péché originel.",
      es: "La inclinación al pecado que permanece en los seres humanos incluso después del Bautismo, como resultado del Pecado Original.",
      de: "Die Neigung zur Sünde, die auch nach der Taufe im Menschen verbleibt und aus der Erbsünde resultiert.",
    },
  },
  {
    id: "co-redemptrix",
    term: {
      en: "Co-Redemptrix",
      fr: "Co-rédemptrice",
      es: "Corredentora",
      de: "Miterlöserin",
    },
    definition: {
      en: "A title for Mary (not a dogma) highlighting her unique cooperation with Christ in the work of redemption.",
      fr: "Un titre pour Marie (pas un dogme) soulignant sa coopération unique avec le Christ dans l'œuvre de la rédemption.",
      es: "Un título para María (no un dogma) que destaca su cooperación única con Cristo en la obra de la redención.",
      de: "Ein Titel für Maria (kein Dogma), der ihre einzigartige Mitwirkung mit Christus am Erlösungswerk hervorhebt.",
    },
  },
  {
    id: "deification-theosis",
    term: {
      en: "Deification (Theosis)",
      fr: "Déification (Théosis)",
      es: "Deificación (Theosis)",
      de: "Vergöttlichung (Theosis)",
    },
    definition: {
      en: "The process by which grace transforms a person to share in the divine nature/life of God.",
      fr: "Le processus par lequel la grâce transforme une personne pour qu'elle participe à la nature/vie divine de Dieu.",
      es: "El proceso por el cual la gracia transforma a una persona para participar en la naturaleza/vida divina de Dios.",
      de: "Der Prozess, durch den die Gnade eine Person verwandelt, damit sie an der göttlichen Natur/dem Leben Gottes teilhat.",
    },
  },
  {
    id: "docetism",
    term: {
      en: "Docetism",
      fr: "Docétisme",
      es: "Docetismo",
      de: "Doketismus",
    },
    definition: {
      en: "An early heresy claiming that Jesus only 'seemed' to be human and only 'appeared' to suffer and die.",
      fr: "Une hérésie primitive prétendant que Jésus a seulement « semblé » être humain et a seulement « paru » souffrir et mourir.",
      es: "Una herejía temprana que afirmaba que Jesús solo 'parecía' ser humano y solo 'aparentaba' sufrir y morir.",
      de: "Eine frühe Häresie, die behauptete, Jesus habe nur so 'geschienen', als sei er Mensch, und habe nur 'scheinbar' gelitten und sei gestorben.",
    },
  },
  {
    id: "dogmatic-fact",
    term: {
      en: "Dogmatic Fact",
      fr: "Fait dogmatique",
      es: "Hecho dogmático",
      de: "Dogmatische Tatsache",
    },
    definition: {
      en: "A fact that is not divinely revealed but is so connected to revelation that the Church must hold it definitively (e.g., the legitimacy of a Pope).",
      fr: "Un fait qui n'est pas divinement révélé mais qui est tellement lié à la révélation que l'Église doit le tenir pour définitif (par ex. la légitimité d'un Pape).",
      es: "Un hecho que no está divinamente revelado pero que está tan conectado con la revelación que la Iglesia debe sostenerlo definitivamente (p. ej., la legitimidad de un Papa).",
      de: "Eine Tatsache, die nicht göttlich offenbart ist, aber so mit der Offenbarung verbunden ist, dass die Kirche sie definitiv festhalten muss (z. B. die Legitimität eines Papstes).",
    },
  },
  {
    id: "double-effect",
    term: {
      en: "Double Effect, Principle of",
      fr: "Double effet (Principe du)",
      es: "Doble Efecto (Principio del)",
      de: "Doppelwirkung (Prinzip der)",
    },
    definition: {
      en: "A moral principle allowing an action that has both a good and an evil effect, provided the evil is not intended or the means to the good.",
      fr: "Un principe moral autorisant une action qui a à la fois un bon et un mauvais effet, à condition que le mal ne soit pas voulu ou le moyen d'obtenir le bien.",
      es: "Un principio moral que permite una acción que tiene tanto un efecto bueno como uno malo, siempre que el mal no sea intencionado ni el medio para el bien.",
      de: "Ein moralisches Prinzip, das eine Handlung zulässt, die sowohl eine gute als auch eine schlechte Wirkung hat, vorausgesetzt, das Übel ist nicht beabsichtigt oder das Mittel zum Guten.",
    },
  },
  {
    id: "economy-salvation",
    term: {
      en: "Economy of Salvation",
      fr: "Économie du Salut",
      es: "Economía de la Salvación",
      de: "Heilsökonomie",
    },
    definition: {
      en: "The management or arrangement of God's plan for the salvation of the world through history.",
      fr: "La gestion ou l'arrangement du plan de Dieu pour le salut du monde à travers l'histoire.",
      es: "La gestión o disposición del plan de Dios para la salvación del mundo a través de la historia.",
      de: "Die Verwaltung oder Anordnung von Gottes Plan für das Heil der Welt durch die Geschichte hindurch.",
    },
  },
  {
    id: "efficacious-grace",
    term: {
      en: "Efficacious Grace",
      fr: "Grâce efficace",
      es: "Gracia Eficaz",
      de: "Wirksame Gnade",
    },
    definition: {
      en: "Grace that infallibly produces the effect of salvation or a good act, without violating free will.",
      fr: "Grâce qui produit infailliblement l'effet du salut ou d'un bon acte, sans violer le libre arbitre.",
      es: "Gracia que produce infaliblemente el efecto de la salvación o un buen acto, sin violar el libre albedrío.",
      de: "Gnade, die unfehlbar die Wirkung des Heils oder einer guten Tat hervorruft, ohne den freien Willen zu verletzen.",
    },
  },
  {
    id: "evangelical-counsels",
    term: {
      en: "Evangelical Counsels",
      fr: "Conseils évangéliques",
      es: "Consejos Evangélicos",
      de: "Evangelische Räte",
    },
    definition: {
      en: "Poverty, Chastity, and Obedience; counsels given by Christ for those who wish to seek perfection.",
      fr: "Pauvreté, Chasteté et Obéissance ; conseils donnés par le Christ à ceux qui veulent rechercher la perfection.",
      es: "Pobreza, Castidad y Obediencia; consejos dados por Cristo para aquellos que desean buscar la perfección.",
      de: "Armut, Keuschheit und Gehorsam; Räte, die Christus denen gab, die nach Vollkommenheit streben wollen.",
    },
  },
  {
    id: "fideism",
    term: {
      en: "Fideism",
      fr: "Fidéisme",
      es: "Fideísmo",
      de: "Fideismus",
    },
    definition: {
      en: "The view that faith is independent of reason, or that reason and faith are hostile to each other; condemned by the Church.",
      fr: "L'opinion selon laquelle la foi est indépendante de la raison, ou que la raison et la foi sont hostiles l'une à l'autre ; condamnée par l'Église.",
      es: "La opinión de que la fe es independiente de la razón, o que la razón y la fe son hostiles entre sí; condenada por la Iglesia.",
      de: "Die Ansicht, dass der Glaube unabhängig von der Vernunft ist oder dass Vernunft und Glaube einander feindlich gesinnt sind; von der Kirche verurteilt.",
    },
  },
  {
    id: "fundamental-option",
    term: {
      en: "Fundamental Option",
      fr: "Option fondamentale",
      es: "Opción Fundamental",
      de: "Grundentscheidung",
    },
    definition: {
      en: "A theory in moral theology about the basic orientation of a person's life toward or against God; controversially used to diminish individual sins.",
      fr: "Une théorie en théologie morale sur l'orientation fondamentale de la vie d'une personne vers ou contre Dieu ; utilisée de manière controversée pour diminuer les péchés individuels.",
      es: "Una teoría en teología moral sobre la orientación básica de la vida de una persona hacia o contra Dios; utilizada controversialmente para disminuir los pecados individuales.",
      de: "Eine Theorie in der Moraltheologie über die grundlegende Ausrichtung des Lebens einer Person auf Gott hin oder gegen ihn; kontrovers verwendet, um einzelne Sünden abzuschwächen.",
    },
  },
  {
    id: "grace-state",
    term: {
      en: "Grace of State",
      fr: "Grâce d'état",
      es: "Gracia de Estado",
      de: "Standesgnade",
    },
    definition: {
      en: "Specific graces given by God to help a person fulfill the duties of their particular state in life (e.g., marriage, priesthood).",
      fr: "Grâces spécifiques données par Dieu pour aider une personne à accomplir les devoirs de son état de vie particulier (par ex. mariage, prêtrise).",
      es: "Gracias específicas dadas por Dios para ayudar a una persona a cumplir los deberes de su estado de vida particular (p. ej., matrimonio, sacerdocio).",
      de: "Spezifische Gnaden, die Gott gibt, um einer Person zu helfen, die Pflichten ihres besonderen Lebensstandes zu erfüllen (z. B. Ehe, Priestertum).",
    },
  },
  {
    id: "hierarchy-truths",
    term: {
      en: "Hierarchy of Truths",
      fr: "Hiérarchie des vérités",
      es: "Jerarquía de verdades",
      de: "Hierarchie der Wahrheiten",
    },
    definition: {
      en: "The principle that Catholic doctrines vary in their relation to the foundation of the Christian faith (though all must be believed).",
      fr: "Le principe selon lequel les doctrines catholiques varient dans leur relation au fondement de la foi chrétienne (bien que toutes doivent être crues).",
      es: "El principio de que las doctrinas católicas varían en su relación con el fundamento de la fe cristiana (aunque todas deben ser creídas).",
      de: "Das Prinzip, dass katholische Lehren in ihrer Beziehung zum Fundament des christlichen Glaubens variieren (obwohl alle geglaubt werden müssen).",
    },
  },
  {
    id: "hyperdulia",
    term: {
      en: "Hyperdulia",
      fr: "Hyperdulie",
      es: "Hiperdulía",
      de: "Hyperdulie",
    },
    definition: {
      en: "The special veneration due to the Virgin Mary, higher than that given to other saints (dulia) but lower than adoration (latria).",
      fr: "La vénération spéciale due à la Vierge Marie, supérieure à celle donnée aux autres saints (dulie) mais inférieure à l'adoration (latrie).",
      es: "La veneración especial debida a la Virgen María, superior a la dada a otros santos (dulía) pero inferior a la adoración (latría).",
      de: "Die besondere Verehrung, die der Jungfrau Maria gebührt, höher als die anderen Heiligen (Dulia), aber niedriger als die Anbetung (Latria).",
    },
  },
  {
    id: "iconostasis",
    term: {
      en: "Iconostasis",
      fr: "Iconostase",
      es: "Iconostasio",
      de: "Ikonostase",
    },
    definition: {
      en: "A wall of icons and religious paintings, separating the nave from the sanctuary in Eastern Churches.",
      fr: "Un mur d'icônes et de peintures religieuses, séparant la nef du sanctuaire dans les Églises orientales.",
      es: "Una pared de iconos y pinturas religiosas, que separa la nave del santuario en las Iglesias Orientales.",
      de: "Eine Wand aus Ikonen und religiösen Gemälden, die in den Ostkirchen das Kirchenschiff vom Altarraum trennt.",
    },
  },
  {
    id: "immaculate-conception",
    term: {
      en: "Immaculate Conception",
      fr: "Immaculée Conception",
      es: "Inmaculada Concepción",
      de: "Unbefleckte Empfängnis",
    },
    definition: {
      en: "The dogma that the Virgin Mary was conceived without Original Sin from the first moment of her existence.",
      fr: "Le dogme selon lequel la Vierge Marie a été conçue sans péché originel dès le premier instant de son existence.",
      es: "El dogma de que la Virgen María fue concebida sin Pecado Original desde el primer momento de su existencia.",
      de: "Das Dogma, dass die Jungfrau Maria vom ersten Augenblick ihres Daseins an ohne Erbsünde empfangen wurde.",
    },
  },
  {
    id: "impeccability",
    term: {
      en: "Impeccability",
      fr: "Impeccabilité",
      es: "Impecabilidad",
      de: "Sündlosigkeit",
    },
    definition: {
      en: "The inability to sin. A quality of Christ and the glorified saints; distinct from infallibility (inability to err in teaching).",
      fr: "L'incapacité de pécher. Une qualité du Christ et des saints glorifiés ; distincte de l'infaillibilité (incapacité d'errer dans l'enseignement).",
      es: "La incapacidad de pecar. Una cualidad de Cristo y de los santos glorificados; distinta de la infalibilidad (incapacidad de errar al enseñar).",
      de: "Die Unfähigkeit zu sündigen. Eine Eigenschaft Christi und der verherrlichten Heiligen; unterschieden von der Unfehlbarkeit (Unfähigkeit, im Lehren zu irren).",
    },
  },
  {
    id: "incarnation",
    term: {
      en: "Incarnation",
      fr: "Incarnation",
      es: "Encarnación",
      de: "Menschwerdung",
    },
    definition: {
      en: "The central Christian mystery that the Son of God assumed a human nature and became man in Jesus Christ.",
      fr: "Le mystère chrétien central selon lequel le Fils de Dieu a assumé une nature humaine et est devenu homme en Jésus-Christ.",
      es: "El misterio cristiano central de que el Hijo de Dios asumió una naturaleza humana y se hizo hombre en Jesucristo.",
      de: "Das zentrale christliche Geheimnis, dass der Sohn Gottes eine menschliche Natur annahm und in Jesus Christus Mensch wurde.",
    },
  },
  {
    id: "indefectibility",
    term: {
      en: "Indefectibility",
      fr: "Indéfectibilité",
      es: "Indefectibilidad",
      de: "Unzerstörbarkeit",
    },
    definition: {
      en: "The quality of the Church that she will remain until the end of time as Christ founded her, without corruption in her essential nature.",
      fr: "La qualité de l'Église selon laquelle elle demeurera jusqu'à la fin des temps telle que le Christ l'a fondée, sans corruption dans sa nature essentielle.",
      es: "La cualidad de la Iglesia de que permanecerá hasta el fin de los tiempos tal como Cristo la fundó, sin corrupción en su naturaleza esencial.",
      de: "Die Eigenschaft der Kirche, dass sie bis zum Ende der Zeiten so bleiben wird, wie Christus sie gegründet hat, ohne Verderbnis in ihrem wesentlichen Wesen.",
    },
  },
  {
    id: "indifferentism",
    term: {
      en: "Indifferentism",
      fr: "Indifférentisme",
      es: "Indiferentismo",
      de: "Indifferentismus",
    },
    definition: {
      en: "The false belief that all religions are equally valid or that it does not matter which religion one belongs to.",
      fr: "La fausse croyance que toutes les religions sont également valables ou qu'il importe peu à quelle religion on appartient.",
      es: "La falsa creencia de que todas las religiones son igualmente válidas o que no importa a qué religión se pertenezca.",
      de: "Der falsche Glaube, dass alle Religionen gleich gültig sind oder dass es egal ist, welcher Religion man angehört.",
    },
  },
  {
    id: "infallibility",
    term: {
      en: "Infallibility",
      fr: "Infaillibilité",
      es: "Infalibilidad",
      de: "Unfehlbarkeit",
    },
    definition: {
      en: "The immunity from error in matters of faith and morals, given by Christ to the Church (and the Pope under specific conditions).",
      fr: "L'immunité contre l'erreur en matière de foi et de mœurs, donnée par le Christ à l'Église (et au Pape sous des conditions spécifiques).",
      es: "La inmunidad del error en asuntos de fe y moral, dada por Cristo a la Iglesia (y al Papa bajo condiciones específicas).",
      de: "Die Freiheit von Irrtum in Glaubens- und Sittenfragen, die Christus der Kirche (und dem Papst unter bestimmten Bedingungen) gegeben hat.",
    },
  },
  {
    id: "just-war",
    term: {
      en: "Just War Theory",
      fr: "Guerre juste (Théorie de la)",
      es: "Guerra Justa (Teoría de la)",
      de: "Gerechter Krieg (Lehre vom)",
    },
    definition: {
      en: "The doctrine that war is morally justifiable only if it meets specific criteria (e.g., just cause, last resort, proportionality).",
      fr: "La doctrine selon laquelle la guerre n'est moralement justifiable que si elle répond à des critères spécifiques (ex. cause juste, dernier recours, proportionnalité).",
      es: "La doctrina de que la guerra es moralmente justificable solo si cumple criterios específicos (p. ej., causa justa, último recurso, proporcionalidad).",
      de: "Die Lehre, dass Krieg moralisch nur gerechtfertigt ist, wenn er bestimmte Kriterien erfüllt (z. B. gerechter Grund, letztes Mittel, Verhältnismäßigkeit).",
    },
  },
  {
    id: "kenosis",
    term: {
      en: "Kenosis",
      fr: "Kénose",
      es: "Kénosis",
      de: "Kenosis",
    },
    definition: {
      en: "Greek for 'emptying.' The self-emptying of the Son of God in becoming man and humbling himself even to death (Phil 2:7).",
      fr: "Grec pour 'vidage'. L'auto-dépouillement du Fils de Dieu en devenant homme et en s'humiliant jusqu'à la mort (Phil 2:7).",
      es: "Griego para 'vaciamiento'. El autovaciamiento del Hijo de Dios al hacerse hombre y humillarse hasta la muerte (Fil 2:7).",
      de: "Griechisch für 'Entleerung'. Die Selbstentäußerung des Sohnes Gottes, indem er Mensch wurde und sich bis zum Tod erniedrigte (Phil 2,7).",
    },
  },
  {
    id: "kerygma",
    term: {
      en: "Kerygma",
      fr: "Kérygme",
      es: "Kerigma",
      de: "Kerygma",
    },
    definition: {
      en: "Greek for 'proclamation.' The core message of the Gospel: Christ has died, Christ is risen, Christ will come again.",
      fr: "Grec pour 'proclamation'. Le message central de l'Évangile : Christ est mort, Christ est ressuscité, Christ reviendra.",
      es: "Griego para 'proclamación'. El mensaje central del Evangelio: Cristo ha muerto, Cristo ha resucitado, Cristo vendrá de nuevo.",
      de: "Griechisch für 'Verkündigung'. Die Kernbotschaft des Evangeliums: Christus ist gestorben, Christus ist auferstanden, Christus wird wiederkommen.",
    },
  },
  {
    id: "laicization",
    term: {
      en: "Laicization",
      fr: "Réduction à l'état laïc",
      es: "Laicización",
      de: "Laisierung",
    },
    definition: {
      en: "The process by which an ordained clergyman is relieved of his obligations and returned to the status of a layperson.",
      fr: "Le processus par lequel un clerc ordonné est relevé de ses obligations et ramené au statut de laïc.",
      es: "El proceso por el cual un clérigo ordenado es relevado de sus obligaciones y devuelto al estado laical.",
      de: "Der Prozess, durch den ein geweihter Geistlicher von seinen Verpflichtungen entbunden und in den Laienstand zurückversetzt wird.",
    },
  },
  {
    id: "latria",
    term: {
      en: "Latria",
      fr: "Latrie",
      es: "Latría",
      de: "Latria",
    },
    definition: {
      en: "The supreme worship and adoration due to God alone, as distinct from the veneration (dulia) given to saints.",
      fr: "Le culte suprême et l'adoration dus à Dieu seul, distincts de la vénération (dulie) accordée aux saints.",
      es: "El culto supremo y la adoración debida solo a Dios, a diferencia de la veneración (dulía) dada a los santos.",
      de: "Die höchste Anbetung und Verehrung, die allein Gott gebührt, im Unterschied zur Verehrung (Dulia), die den Heiligen erwiesen wird.",
    },
  },
  {
    id: "law-gradualness",
    term: {
      en: "Law of Gradualness",
      fr: "Loi de gradualité",
      es: "Ley de la gradualidad",
      de: "Gesetz der Gradualität",
    },
    definition: {
      en: "A moral principle recognizing that people advance gradually in the practice of virtue, without compromising the moral ideal.",
      fr: "Un principe moral reconnaissant que les gens avancent progressivement dans la pratique de la vertu, sans compromettre l'idéal moral.",
      es: "Un principio moral que reconoce que las personas avanzan gradualmente en la práctica de la virtud, sin comprometer el ideal moral.",
      de: "Ein moralisches Prinzip, das anerkennt, dass Menschen in der Praxis der Tugend schrittweise vorankommen, ohne das moralische Ideal zu kompromittieren.",
    },
  },
  {
    id: "lex-orandi",
    term: {
      en: "Lex Orandi, Lex Credendi",
      fr: "Lex Orandi, Lex Credendi",
      es: "Lex Orandi, Lex Credendi",
      de: "Lex Orandi, Lex Credendi",
    },
    definition: {
      en: "Latin for 'the law of prayer is the law of belief.' The Church's liturgy is a normative expression of her faith.",
      fr: "Latin pour 'la loi de la prière est la loi de la foi'. La liturgie de l'Église est une expression normative de sa foi.",
      es: "Latín para 'la ley de la oración es la ley de la creencia'. La liturgia de la Iglesia es una expresión normativa de su fe.",
      de: "Lateinisch für 'das Gesetz des Betens ist das Gesetz des Glaubens'. Die Liturgie der Kirche ist ein normativer Ausdruck ihres Glaubens.",
    },
  },
  {
    id: "limbo",
    term: {
      en: "Limbo",
      fr: "Limbes",
      es: "Limbo",
      de: "Limbus",
    },
    definition: {
      en: "A theological hypothesis (never a dogma) regarding the state of unbaptized infants who die without personal sin.",
      fr: "Une hypothèse théologique (jamais un dogme) concernant l'état des enfants non baptisés qui meurent sans péché personnel.",
      es: "Una hipótesis teológica (nunca un dogma) sobre el estado de los niños no bautizados que mueren sin pecado personal.",
      de: "Eine theologische Hypothese (niemals ein Dogma) bezüglich des Zustands ungetaufter Kinder, die ohne persönliche Sünde sterben.",
    },
  },
  {
    id: "magisterium",
    term: {
      en: "Magisterium",
      fr: "Magistère",
      es: "Magisterio",
      de: "Lehramt",
    },
    definition: {
      en: "The teaching authority of the Church, exercised by the Pope and the bishops in communion with him.",
      fr: "L'autorité enseignante de l'Église, exercée par le Pape et les évêques en communion avec lui.",
      es: "La autoridad docente de la Iglesia, ejercida por el Papa y los obispos en comunión con él.",
      de: "Das Lehramt der Kirche, ausgeübt durch den Papst und die Bischöfe in Gemeinschaft mit ihm.",
    },
  },
  {
    id: "mariology",
    term: {
      en: "Mariology",
      fr: "Mariologie",
      es: "Mariología",
      de: "Mariologie",
    },
    definition: {
      en: "The theological study of the Virgin Mary, her role in salvation history, and her relationship to Christ and the Church.",
      fr: "L'étude théologique de la Vierge Marie, de son rôle dans l'histoire du salut et de sa relation au Christ et à l'Église.",
      es: "El estudio teológico de la Virgen María, su papel en la historia de la salvación y su relación con Cristo y la Iglesia.",
      de: "Die theologische Lehre von der Jungfrau Maria, ihrer Rolle in der Heilsgeschichte und ihrer Beziehung zu Christus und der Kirche.",
    },
  },
  {
    id: "matter-form",
    term: {
      en: "Matter and Form",
      fr: "Matière et Forme",
      es: "Materia y Forma",
      de: "Materie und Form",
    },
    definition: {
      en: "In sacramental theology, the physical element/action (matter) and the words spoken (form) required for a valid sacrament.",
      fr: "En théologie sacramentelle, l'élément physique/l'action (matière) et les paroles prononcées (forme) nécessaires pour un sacrement valide.",
      es: "En teología sacramental, el elemento físico/acción (materia) y las palabras pronunciadas (forma) requeridas para un sacramento válido.",
      de: "In der Sakramententheologie das physische Element/die Handlung (Materie) und die gesprochenen Worte (Form), die für ein gültiges Sakrament erforderlich sind.",
    },
  },
  {
    id: "mediatrix",
    term: {
      en: "Mediatrix",
      fr: "Médiatrice",
      es: "Mediadora",
      de: "Mittlerin",
    },
    definition: {
      en: "A title for Mary indicating her role in interceding for us and distributing graces, always subordinate to Christ the one Mediator.",
      fr: "Un titre pour Marie indiquant son rôle d'intercession pour nous et de distribution des grâces, toujours subordonné au Christ, l'unique Médiateur.",
      es: "Un título para María que indica su papel en la intercesión por nosotros y la distribución de las gracias, siempre subordinado a Cristo, el único Mediador.",
      de: "Ein Titel für Maria, der ihre Rolle als Fürsprecherin für uns und als Verteilerin von Gnaden anzeigt, immer Christus, dem einen Mittler, untergeordnet.",
    },
  },
  {
    id: "merit",
    term: {
      en: "Merit",
      fr: "Mérite",
      es: "Mérito",
      de: "Verdienst",
    },
    definition: {
      en: "The reward which God promises and gives to those who love Him and by His grace perform good works.",
      fr: "La récompense que Dieu promet et donne à ceux qui L'aiment et accomplissent de bonnes œuvres par Sa grâce.",
      es: "La recompensa que Dios promete y da a quienes lo aman y por su gracia realizan buenas obras.",
      de: "Der Lohn, den Gott denen verspricht und gibt, die Ihn lieben und durch Seine Gnade gute Werke tun.",
    },
  },
  {
    id: "millenarianism",
    term: {
      en: "Millenarianism",
      fr: "Millénarisme",
      es: "Milenarismo",
      de: "Millenarismus",
    },
    definition: {
      en: "The false belief in a literal 1000-year reign of Christ on earth before the final judgment; condemned by the Church.",
      fr: "La fausse croyance en un règne littéral de 1000 ans du Christ sur terre avant le jugement dernier ; condamnée par l'Église.",
      es: "La falsa creencia en un reino literal de 1000 años de Cristo en la tierra antes del juicio final; condenada por la Iglesia.",
      de: "Der falsche Glaube an ein wörtliches 1000-jähriges Reich Christi auf Erden vor dem Jüngsten Gericht; von der Kirche verurteilt.",
    },
  },
  {
    id: "mystagogy",
    term: {
      en: "Mystagogy",
      fr: "Mystagogie",
      es: "Mistagogia",
      de: "Mystagogie",
    },
    definition: {
      en: "The period of post-baptismal catechesis where the newly initiated (neophytes) deepen their understanding of the mysteries (sacraments).",
      fr: "La période de catéchèse post-baptismale où les nouveaux initiés (néophytes) approfondissent leur compréhension des mystères (sacrements).",
      es: "El período de catequesis post-bautismal donde los recién iniciados (neófitos) profundizan su comprensión de los misterios (sacramentos).",
      de: "Die Zeit der nach-tauflichen Katechese, in der die Neuinitiierten (Neophyten) ihr Verständnis der Mysterien (Sakramente) vertiefen.",
    },
  },
  {
    id: "mysticism",
    term: {
      en: "Mysticism",
      fr: "Mysticisme",
      es: "Misticismo",
      de: "Mystik",
    },
    definition: {
      en: "Spiritual knowledge of God attained through direct experience or union, often beyond the intellect.",
      fr: "Connaissance spirituelle de Dieu atteinte par une expérience directe ou une union, souvent au-delà de l'intellect.",
      es: "Conocimiento espiritual de Dios alcanzado a través de la experiencia directa o unión, a menudo más allá del intelecto.",
      de: "Geistliche Erkenntnis Gottes, die durch direkte Erfahrung oder Vereinigung erlangt wird, oft jenseits des Intellekts.",
    },
  },
  {
    id: "natural-theology",
    term: {
      en: "Natural Theology",
      fr: "Théologie naturelle",
      es: "Teología Natural",
      de: "Natürliche Theologie",
    },
    definition: {
      en: "Knowledge of God obtained through human reason and the observation of nature, without the aid of revelation.",
      fr: "Connaissance de Dieu obtenue par la raison humaine et l'observation de la nature, sans l'aide de la révélation.",
      es: "Conocimiento de Dios obtenido a través de la razón humana y la observación de la naturaleza, sin la ayuda de la revelación.",
      de: "Erkenntnis Gottes, die durch menschliche Vernunft und die Beobachtung der Natur ohne Hilfe der Offenbarung erlangt wird.",
    },
  },
  {
    id: "original-justice",
    term: {
      en: "Original Justice",
      fr: "Justice originelle",
      es: "Justicia Original",
      de: "Urstandsgerechtigkeit",
    },
    definition: {
      en: "The state of grace and harmony with God, self, and creation that Adam and Eve possessed before the Fall.",
      fr: "L'état de grâce et d'harmonie avec Dieu, soi-même et la création qu'Adam et Ève possédaient avant la Chute.",
      es: "El estado de gracia y armonía con Dios, uno mismo y la creación que Adán y Eva poseían antes de la Caída.",
      de: "Der Zustand der Gnade und Harmonie mit Gott, sich selbst und der Schöpfung, den Adam und Eva vor dem Sündenfall besaßen.",
    },
  },
  {
    id: "orthopraxy",
    term: {
      en: "Orthopraxy",
      fr: "Orthopraxie",
      es: "Ortopraxis",
      de: "Orthopraxie",
    },
    definition: {
      en: "Correct conduct or practice of the faith, as opposed to orthodoxy (correct belief). Both are necessary.",
      fr: "Conduite ou pratique correcte de la foi, par opposition à l'orthodoxie (croyance correcte). Les deux sont nécessaires.",
      es: "Conducta o práctica correcta de la fe, en oposición a la ortodoxia (creencia correcta). Ambas son necesarias.",
      de: "Richtiges Handeln oder Praxis des Glaubens, im Gegensatz zur Orthodoxie (rechter Glaube). Beides ist notwendig.",
    },
  },
  {
    id: "paschal-mystery",
    term: {
      en: "Paschal Mystery",
      fr: "Mystère Pascal",
      es: "Misterio Pascual",
      de: "Pascha-Mysterium",
    },
    definition: {
      en: "The work of salvation accomplished by Jesus Christ mainly through his Passion, death, Resurrection, and Ascension.",
      fr: "L'œuvre du salut accomplie par Jésus-Christ principalement par sa Passion, sa mort, sa Résurrection et son Ascension.",
      es: "La obra de salvación realizada por Jesucristo principalmente a través de su Pasión, muerte, Resurrección y Ascensión.",
      de: "Das Heilswerk, das Jesus Christus hauptsächlich durch sein Leiden, seinen Tod, seine Auferstehung und seine Himmelfahrt vollbracht hat.",
    },
  },
  {
    id: "patristics",
    term: {
      en: "Patristics",
      fr: "Patristique",
      es: "Patrística",
      de: "Patristik",
    },
    definition: {
      en: "The study of the writings, lives, and theology of the Fathers of the Church (early Christian era).",
      fr: "L'étude des écrits, des vies et de la théologie des Pères de l'Église (ère chrétienne primitive).",
      es: "El estudio de los escritos, vidas y teología de los Padres de la Iglesia (era cristiana primitiva).",
      de: "Das Studium der Schriften, des Lebens und der Theologie der Kirchenväter (frühchristliche Ära).",
    },
  },
  {
    id: "pneumatology",
    term: {
      en: "Pneumatology",
      fr: "Pneumatologie",
      es: "Neumatología",
      de: "Pneumatologie",
    },
    definition: {
      en: "The branch of theology studying the Holy Spirit (Pneuma).",
      fr: "La branche de la théologie étudiant le Saint-Esprit (Pneuma).",
      es: "La rama de la teología que estudia al Espíritu Santo (Pneuma).",
      de: "Der Zweig der Theologie, der den Heiligen Geist (Pneuma) untersucht.",
    },
  },
  {
    id: "prevenient-grace",
    term: {
      en: "Prevenient Grace",
      fr: "Grâce prévenante",
      es: "Gracia Preveniente",
      de: "Zuvorkommende Gnade",
    },
    definition: {
      en: "The grace that comes *before* any human response to God; God taking the initiative in conversion.",
      fr: "La grâce qui vient *avant* toute réponse humaine à Dieu ; Dieu prenant l'initiative de la conversion.",
      es: "La gracia que viene *antes* de cualquier respuesta humana a Dios; Dios tomando la iniciativa en la conversión.",
      de: "Die Gnade, die *vor* jeder menschlichen Antwort an Gott kommt; Gott ergreift die Initiative zur Bekehrung.",
    },
  },
  {
    id: "probabilism",
    term: {
      en: "Probabilism",
      fr: "Probabilisme",
      es: "Probabilismo",
      de: "Probabilismus",
    },
    definition: {
      en: "A moral system stating one may follow a probable opinion in favor of liberty even if a stricter opinion is more probable.",
      fr: "Un système moral affirmant qu'on peut suivre une opinion probable en faveur de la liberté même si une opinion plus stricte est plus probable.",
      es: "Un sistema moral que afirma que uno puede seguir una opinión probable a favor de la libertad incluso si una opinión más estricta es más probable.",
      de: "Ein Moralsystem, das besagt, dass man einer wahrscheinlichen Meinung zugunsten der Freiheit folgen darf, auch wenn eine strengere Meinung wahrscheinlicher ist.",
    },
  },
  {
    id: "propitiation",
    term: {
      en: "Propitiation",
      fr: "Propitiation",
      es: "Propiciación",
      de: "Sühnopfer",
    },
    definition: {
      en: "An offering that turns away wrath and restores favor; Christ's death is the propitiation for our sins.",
      fr: "Une offrande qui détourne la colère et rétablit la faveur ; la mort du Christ est la propitiation pour nos péchés.",
      es: "Una ofrenda que aparta la ira y restaura el favor; la muerte de Cristo es la propiciación por nuestros pecados.",
      de: "Ein Opfer, das den Zorn abwendet und die Gunst wiederherstellt; Christi Tod ist das Sühnopfer für unsere Sünden.",
    },
  },
  {
    id: "quietism",
    term: {
      en: "Quietism",
      fr: "Quiétisme",
      es: "Quietismo",
      de: "Quietismus",
    },
    definition: {
      en: "A heresy teaching that perfection consists in total passivity of the soul, negating the need for effort or active prayer.",
      fr: "Une hérésie enseignant que la perfection consiste en la passivité totale de l'âme, niant le besoin d'effort ou de prière active.",
      es: "Una herejía que enseña que la perfección consiste en la pasividad total del alma, negando la necesidad de esfuerzo u oración activa.",
      de: "Eine Häresie, die lehrt, dass Vollkommenheit in völliger Passivität der Seele besteht, was die Notwendigkeit von Anstrengung oder aktivem Gebet verneint.",
    },
  },
  {
    id: "resurrection-body",
    term: {
      en: "Resurrection of the Body",
      fr: "Résurrection de la chair",
      es: "Resurrección de la carne",
      de: "Auferstehung des Fleisches",
    },
    definition: {
      en: "The doctrine that at the end of time, all souls will be reunited with their bodies, which will be glorified for the just.",
      fr: "La doctrine selon laquelle à la fin des temps, toutes les âmes seront réunies à leur corps, qui sera glorifié pour les justes.",
      es: "La doctrina de que al final de los tiempos, todas las almas se reunirán con sus cuerpos, que serán glorificados para los justos.",
      de: "Die Lehre, dass am Ende der Zeiten alle Seelen wieder mit ihren Körpern vereint werden, die für die Gerechten verherrlicht sein werden.",
    },
  },
  {
    id: "sacrilege",
    term: {
      en: "Sacrilege",
      fr: "Sacrilège",
      es: "Sacrilegio",
      de: "Sakrileg",
    },
    definition: {
      en: "The profanation or unworthy treatment of sacraments, liturgical actions, persons, things, or places consecrated to God.",
      fr: "La profanation ou le traitement indigne des sacrements, actions liturgiques, personnes, choses ou lieux consacrés à Dieu.",
      es: "La profanación o trato indigno de sacramentos, acciones litúrgicas, personas, cosas o lugares consagrados a Dios.",
      de: "Die Entweihung oder unwürdige Behandlung von Sakramenten, liturgischen Handlungen, Personen, Dingen oder Orten, die Gott geweiht sind.",
    },
  },
  {
    id: "sola-scriptura",
    term: {
      en: "Sola Scriptura",
      fr: "Sola Scriptura",
      es: "Sola Scriptura",
      de: "Sola Scriptura",
    },
    definition: {
      en: "The Protestant doctrine that the Bible alone is the infallible rule of faith, rejecting Sacred Tradition and the Magisterium.",
      fr: "La doctrine protestante selon laquelle la Bible seule est la règle infaillible de la foi, rejetant la Sainte Tradition et le Magistère.",
      es: "La doctrina protestante de que la Biblia sola es la regla infalible de fe, rechazando la Sagrada Tradición y el Magisterio.",
      de: "Die protestantische Lehre, dass allein die Bibel die unfehlbare Glaubensregel ist, unter Ablehnung der Heiligen Tradition und des Lehramtes.",
    },
  },
  {
    id: "soteriology",
    term: {
      en: "Soteriology",
      fr: "Sotériologie",
      es: "Soteriología",
      de: "Soteriologie",
    },
    definition: {
      en: "The branch of theology studying salvation (soteria) and the work of the Redeemer.",
      fr: "La branche de la théologie étudiant le salut (soteria) et l'œuvre du Rédempteur.",
      es: "La rama de la teología que estudia la salvación (soteria) y la obra del Redentor.",
      de: "Der Zweig der Theologie, der das Heil (soteria) und das Werk des Erlösers untersucht.",
    },
  },
  // --- Traditional Latin Mass & Liturgy ---
  {
    id: "ad-orientem",
    term: {
      en: "Ad Orientem",
      fr: "Ad Orientem",
      es: "Ad Orientem",
      de: "Ad Orientem",
    },
    definition: {
      en: "Latin for 'toward the East.' The posture where the priest faces the altar (and God) together with the people, rather than facing the people.",
      fr: "Latin pour 'vers l'Orient'. La posture où le prêtre fait face à l'autel (et à Dieu) avec le peuple, plutôt que de faire face au peuple.",
      es: "Latín para 'hacia el Oriente'. La postura donde el sacerdote mira hacia el altar (y a Dios) junto con el pueblo, en lugar de mirar al pueblo.",
      de: "Lateinisch für 'nach Osten'. Die Haltung, bei der der Priester gemeinsam mit dem Volk zum Altar (und zu Gott) blickt, anstatt zum Volk.",
    },
  },
  {
    id: "amice",
    term: {
      en: "Amice",
      fr: "Amict",
      es: "Amitos",
      de: "Schultertuch",
    },
    definition: {
      en: "A rectangular piece of white linen cloth worn around the neck and shoulders of the priest under the alb.",
      fr: "Une pièce rectangulaire de toile de lin blanc portée autour du cou et des épaules du prêtre sous l'aube.",
      es: "Una pieza rectangular de tela de lino blanco que se usa alrededor del cuello y los hombros del sacerdote debajo del alba.",
      de: "Ein rechteckiges weißes Leinentuch, das der Priester unter der Albe um Hals und Schultern trägt.",
    },
  },
  {
    id: "asperges",
    term: {
      en: "Asperges",
      fr: "Asperges",
      es: "Asperges",
      de: "Asperges",
    },
    definition: {
      en: "The rite of sprinkling the congregation with holy water before the principal Sunday Mass, accompanied by the chanting of Psalm 50.",
      fr: "Le rite d'aspersion de l'assemblée avec de l'eau bénite avant la messe dominicale principale, accompagné du chant du Psaume 50.",
      es: "El rito de rociar a la congregación con agua bendita antes de la Misa dominical principal, acompañado del canto del Salmo 50.",
      de: "Der Ritus der Besprengung der Gemeinde mit Weihwasser vor der sonntäglichen Hauptmesse, begleitet vom Gesang des Psalms 50.",
    },
  },
  {
    id: "biretta",
    term: {
      en: "Biretta",
      fr: "Barrette",
      es: "Birrete",
      de: "Birett",
    },
    definition: {
      en: "A square cap with three or four peaks (ridges) worn by clergy. It is removed during the Mass.",
      fr: "Un chapeau carré à trois ou quatre pics (arêtes) porté par le clergé. Il est retiré pendant la messe.",
      es: "Un gorro cuadrado con tres o cuatro picos (crestas) usado por el clero. Se quita durante la Misa.",
      de: "Eine quadratische Mütze mit drei oder vier Hörnern (Kanten), die vom Klerus getragen wird. Sie wird während der Messe abgenommen.",
    },
  },
  {
    id: "burse",
    term: {
      en: "Burse",
      fr: "Bourse",
      es: "Bolsa de corporales",
      de: "Bursa",
    },
    definition: {
      en: "A stiff, flat, square case covered in silk of the liturgical color, used to carry the corporal to and from the altar.",
      fr: "Un étui carré, plat et rigide, recouvert de soie de la couleur liturgique, utilisé pour transporter le corporal vers et depuis l'autel.",
      es: "Un estuche cuadrado, plano y rígido cubierto de seda del color litúrgico, utilizado para llevar el corporal hacia y desde el altar.",
      de: "Eine steife, flache, quadratische Tasche, die mit Seide in der liturgischen Farbe bezogen ist und dazu dient, das Korporale zum und vom Altar zu tragen.",
    },
  },
  {
    id: "canon-missae",
    term: {
      en: "Canon of the Mass",
      fr: "Canon de la Messe",
      es: "Canon de la Misa",
      de: "Messkanon",
    },
    definition: {
      en: "The central part of the Mass (Eucharistic Prayer) in the Roman Rite, which was essentially unchanged from the time of Gregory the Great until 1970.",
      fr: "La partie centrale de la messe (Prière Eucharistique) dans le Rite Romain, qui est restée essentiellement inchangée de l'époque de Grégoire le Grand jusqu'en 1970.",
      es: "La parte central de la Misa (Plegaria Eucarística) en el Rito Romano, que permaneció esencialmente inalterada desde la época de Gregorio Magno hasta 1970.",
      de: "Der zentrale Teil der Messe (Eucharistisches Hochgebet) im Römischen Ritus, der von der Zeit Gregors des Großen bis 1970 im Wesentlichen unverändert blieb.",
    },
  },
  {
    id: "catafalque",
    term: {
      en: "Catafalque",
      fr: "Catafalque",
      es: "Catafalco",
      de: "Katafalk",
    },
    definition: {
      en: "A decorated wooden framework supporting the coffin of a deceased person during a funeral or representing the corpse during a Requiem Mass when the body is not present.",
      fr: "Une structure en bois décorée soutenant le cercueil d'une personne décédée lors des funérailles ou représentant le corps lors d'une messe de Requiem en l'absence du corps.",
      es: "Una estructura de madera decorada que sostiene el ataúd de un difunto durante un funeral o representa el cadáver durante una Misa de Réquiem cuando el cuerpo no está presente.",
      de: "Ein dekoriertes Holzgestell, das den Sarg eines Verstorbenen während einer Beerdigung trägt oder den Leichnam während einer Requiemmesse repräsentiert, wenn der Körper nicht anwesend ist.",
    },
  },
  {
    id: "chalice-veil",
    term: {
      en: "Chalice Veil",
      fr: "Voile de calice",
      es: "Velo del cáliz",
      de: "Kelchvelum",
    },
    definition: {
      en: "A cloth piece of the same color as the vestments, used to cover the chalice and paten when they are not in use.",
      fr: "Une pièce de tissu de la même couleur que les vêtements liturgiques, utilisée pour couvrir le calice et la patène lorsqu'ils ne sont pas utilisés.",
      es: "Un trozo de tela del mismo color que las vestiduras, utilizado para cubrir el cáliz y la patena cuando no están en uso.",
      de: "Ein Stoffstück in der gleichen Farbe wie die Gewänder, das verwendet wird, um den Kelch und die Patene abzudecken, wenn sie nicht in Gebrauch sind.",
    },
  },
  {
    id: "cincture",
    term: {
      en: "Cincture",
      fr: "Cordon (Cingulum)",
      es: "Cíngulo",
      de: "Zingulum",
    },
    definition: {
      en: "A cord used as a belt to gird the alb. It symbolizes chastity and purity.",
      fr: "Un cordon utilisé comme ceinture pour ceindre l'aube. Il symbolise la chasteté et la pureté.",
      es: "Un cordón usado como cinturón para ceñir el alba. Simboliza la castidad y la pureza.",
      de: "Eine Kordel, die als Gürtel verwendet wird, um die Albe zu gürten. Sie symbolisiert Keuschheit und Reinheit.",
    },
  },
  {
    id: "collect",
    term: {
      en: "Collect",
      fr: "Collecte",
      es: "Colecta",
      de: "Tagesgebet",
    },
    definition: {
      en: "The opening prayer of the Mass, which 'collects' the petitions of the faithful. It varies according to the feast or season.",
      fr: "La prière d'ouverture de la messe, qui 'rassemble' les demandes des fidèles. Elle varie selon la fête ou la saison.",
      es: "La oración de apertura de la Misa, que 'recolecta' las peticiones de los fieles. Varía según la fiesta o el tiempo litúrgico.",
      de: "Das Eröffnungsgebet der Messe, das die Bitten der Gläubigen 'sammelt'. Es variiert je nach Fest oder Jahreszeit.",
    },
  },
  {
    id: "communion-rail",
    term: {
      en: "Communion Rail",
      fr: "Banc de communion",
      es: "Comulgatorio",
      de: "Kommunionbank",
    },
    definition: {
      en: "A low rail surrounding the sanctuary where the faithful kneel to receive Holy Communion.",
      fr: "Une balustrade basse entourant le sanctuaire où les fidèles s'agenouillent pour recevoir la Sainte Communion.",
      es: "Una barandilla baja que rodea el presbiterio donde los fieles se arrodillan para recibir la Sagrada Comunión.",
      de: "Eine niedrige Schranke, die den Altarraum umgibt, an der die Gläubigen niederknien, um die Heilige Kommunion zu empfangen.",
    },
  },
  {
    id: "confiteor",
    term: {
      en: "Confiteor",
      fr: "Confiteor",
      es: "Yo confieso",
      de: "Schuldbekenntnis",
    },
    definition: {
      en: "Latin for 'I confess.' A prayer of confession of sins recited at the beginning of Mass (Prayers at the Foot of the Altar).",
      fr: "Latin pour 'Je confesse'. Une prière de confession des péchés récitée au début de la messe (Prières au bas de l'autel).",
      es: "Latín para 'Yo confieso'. Una oración de confesión de los pecados recitada al comienzo de la Misa (Oraciones al pie del altar).",
      de: "Lateinisch für 'Ich bekenne'. Ein Gebet des Sündenbekenntnisses, das zu Beginn der Messe gesprochen wird (Stufengebet).",
    },
  },
  {
    id: "cope",
    term: {
      en: "Cope",
      fr: "Chape",
      es: "Capa pluvial",
      de: "Rauchmantel",
    },
    definition: {
      en: "A long mantle or cloak, open in front and fastened at the breast, worn by clergy for processions and Benediction (but not for Mass).",
      fr: "Un long manteau ou cape, ouvert devant et attaché à la poitrine, porté par le clergé pour les processions et le Salut (mais pas pour la messe).",
      es: "Un manto o capa larga, abierta por delante y abrochada en el pecho, usada por el clero para procesiones y la Bendición (pero no para la Misa).",
      de: "Ein langer Mantel oder Umhang, vorne offen und an der Brust befestigt, der vom Klerus bei Prozessionen und beim Segen getragen wird (aber nicht bei der Messe).",
    },
  },
  {
    id: "dies-irae",
    term: {
      en: "Dies Irae",
      fr: "Dies Irae",
      es: "Dies Irae",
      de: "Dies Irae",
    },
    definition: {
      en: "Latin for 'Day of Wrath.' A famous sequence chant about the Last Judgment, traditionally sung at Requiem Masses.",
      fr: "Latin pour 'Jour de Colère'. Une célèbre séquence chantée sur le Jugement Dernier, traditionnellement chantée aux messes de Requiem.",
      es: "Latín para 'Día de la Ira'. Un famoso canto de secuencia sobre el Juicio Final, tradicionalmente cantado en las Misas de Réquiem.",
      de: "Lateinisch für 'Tag des Zorns'. Ein berühmter Sequenzgesang über das Jüngste Gericht, der traditionell bei Requiemmessen gesungen wird.",
    },
  },
  {
    id: "dominus-vobiscum",
    term: {
      en: "Dominus Vobiscum",
      fr: "Dominus Vobiscum",
      es: "Dominus Vobiscum",
      de: "Dominus Vobiscum",
    },
    definition: {
      en: "Latin for 'The Lord be with you.' An ancient salutation used frequently by the priest during the Mass.",
      fr: "Latin pour 'Le Seigneur soit avec vous'. Une ancienne salutation utilisée fréquemment par le prêtre pendant la messe.",
      es: "Latín para 'El Señor esté con vosotros'. Un antiguo saludo utilizado frecuentemente por el sacerdote durante la Misa.",
      de: "Lateinisch für 'Der Herr sei mit euch'. Ein alter Gruß, der vom Priester während der Messe häufig verwendet wird.",
    },
  },
  {
    id: "epistle-side",
    term: {
      en: "Epistle Side",
      fr: "Côté Épître",
      es: "Lado de la Epístola",
      de: "Epistelseite",
    },
    definition: {
      en: "The right side of the altar (from the congregation's view) where the Epistle is read.",
      fr: "Le côté droit de l'autel (du point de vue de la congrégation) où l'Épître est lue.",
      es: "El lado derecho del altar (desde la vista de la congregación) donde se lee la Epístola.",
      de: "Die rechte Seite des Altars (aus der Sicht der Gemeinde), auf der die Epistel gelesen wird.",
    },
  },
  {
    id: "fiddleback",
    term: {
      en: "Fiddleback (Chasuble)",
      fr: "Chasuble romaine",
      es: "Casulla de guitarra",
      de: "Bassgeige (Kasel)",
    },
    definition: {
      en: "A colloquial term for the Roman-style chasuble, which has a shape resembling a violin case or fiddle.",
      fr: "Un terme familier pour la chasuble de style romain, qui a une forme ressemblant à un étui de violon.",
      es: "Un término coloquial para la casulla de estilo romano, que tiene una forma parecida a una caja de violín o guitarra.",
      de: "Ein umgangssprachlicher Begriff für die Kasel im römischen Stil, die eine Form hat, die einem Geigenkasten ähnelt.",
    },
  },
  {
    id: "gospel-side",
    term: {
      en: "Gospel Side",
      fr: "Côté Évangile",
      es: "Lado del Evangelio",
      de: "Evangelienseite",
    },
    definition: {
      en: "The left side of the altar (from the congregation's view) where the Gospel is read.",
      fr: "Le côté gauche de l'autel (du point de vue de la congrégation) où l'Évangile est lu.",
      es: "El lado izquierdo del altar (desde la vista de la congregación) donde se lee el Evangelio.",
      de: "Die linke Seite des Altars (aus der Sicht der Gemeinde), auf der das Evangelium gelesen wird.",
    },
  },
  {
    id: "gradual",
    term: {
      en: "Gradual",
      fr: "Graduel",
      es: "Gradual",
      de: "Graduale",
    },
    definition: {
      en: "A chant sung after the Epistle. Named because it was originally sung from the steps (gradus) of the ambo.",
      fr: "Un chant chanté après l'Épître. Nommé ainsi parce qu'il était à l'origine chanté depuis les marches (gradus) de l'ambon.",
      es: "Un canto entonado después de la Epístola. Llamado así porque originalmente se cantaba desde los escalones (gradus) del ambón.",
      de: "Ein Gesang, der nach der Epistel gesungen wird. Benannt, weil er ursprünglich von den Stufen (gradus) des Ambo aus gesungen wurde.",
    },
  },
  {
    id: "high-mass",
    term: {
      en: "High Mass",
      fr: "Grand-Messe",
      es: "Misa Solemne",
      de: "Hochamt",
    },
    definition: {
      en: "A Mass sung by a priest with a deacon and subdeacon, utilizing incense and full ceremonial (Missa Solemnis).",
      fr: "Une messe chantée par un prêtre avec un diacre et un sous-diacre, utilisant de l'encens et tout le cérémonial (Missa Solemnis).",
      es: "Una Misa cantada por un sacerdote con un diácono y un subdiácono, utilizando incienso y todo el ceremonial (Misa Solemne).",
      de: "Eine Messe, die von einem Priester mit Diakon und Subdiakon gesungen wird, unter Verwendung von Weihrauch und vollem Zeremoniell (Missa Solemnis).",
    },
  },
  {
    id: "introit",
    term: {
      en: "Introit",
      fr: "Introït",
      es: "Introito",
      de: "Introitus",
    },
    definition: {
      en: "The entrance chant of the Mass, consisting of an antiphon, a Psalm verse, and the Gloria Patri.",
      fr: "Le chant d'entrée de la messe, composé d'une antienne, d'un verset de psaume et du Gloria Patri.",
      es: "El canto de entrada de la Misa, que consiste en una antífona, un verso del Salmo y el Gloria Patri.",
      de: "Der Eingangsgesang der Messe, bestehend aus einer Antiphon, einem Psalmvers und dem Gloria Patri.",
    },
  },
  {
    id: "ite-missa-est",
    term: {
      en: "Ite, Missa Est",
      fr: "Ite, Missa Est",
      es: "Ite, Missa Est",
      de: "Ite, Missa Est",
    },
    definition: {
      en: "The dismissal at the end of Mass. Meaning 'Go, it is the dismissal' (or 'Go, she is sent').",
      fr: "L'envoi à la fin de la messe. Signifiant 'Allez, c'est l'envoi'.",
      es: "La despedida al final de la Misa. Significa 'Id, es la despedida'.",
      de: "Die Entlassung am Ende der Messe. Bedeutet 'Gehet hin, es ist die Entlassung'.",
    },
  },
  {
    id: "judica-me",
    term: {
      en: "Judica Me",
      fr: "Judica Me",
      es: "Judica Me",
      de: "Judica Me",
    },
    definition: {
      en: "Psalm 42 (43), recited by the priest at the foot of the altar at the beginning of the Traditional Latin Mass.",
      fr: "Psaume 42 (43), récité par le prêtre au bas de l'autel au début de la Messe traditionnelle en latin.",
      es: "Salmo 42 (43), recitado por el sacerdote al pie del altar al comienzo de la Misa Tradicional en Latín.",
      de: "Psalm 42 (43), der vom Priester zu Beginn der traditionellen lateinischen Messe am Fuße des Altars rezitiert wird.",
    },
  },
  {
    id: "last-gospel",
    term: {
      en: "Last Gospel",
      fr: "Dernier Évangile",
      es: "Último Evangelio",
      de: "Schlussevangelium",
    },
    definition: {
      en: "The beginning of the Gospel of John (1:1-14), read at the very end of the Traditional Latin Mass.",
      fr: "Le début de l'Évangile de Jean (1:1-14), lu à la toute fin de la Messe traditionnelle en latin.",
      es: "El comienzo del Evangelio de Juan (1:1-14), leído al final de la Misa Tradicional en Latín.",
      de: "Der Anfang des Johannesevangeliums (1,1-14), der ganz am Ende der traditionellen lateinischen Messe gelesen wird.",
    },
  },
  {
    id: "lavabo",
    term: {
      en: "Lavabo",
      fr: "Lavabo",
      es: "Lavabo",
      de: "Lavabo",
    },
    definition: {
      en: "The ritual washing of the priest's hands after the Offertory, accompanied by Psalm 25.",
      fr: "Le lavage rituel des mains du prêtre après l'Offertoire, accompagné du Psaume 25.",
      es: "El lavado ritual de las manos del sacerdote después del Ofertorio, acompañado del Salmo 25.",
      de: "Die rituelle Waschung der Hände des Priesters nach der Opferung, begleitet von Psalm 25.",
    },
  },
  {
    id: "leonine-prayers",
    term: {
      en: "Leonine Prayers",
      fr: "Prières léonines",
      es: "Oraciones Leoninas",
      de: "Leonianische Gebete",
    },
    definition: {
      en: "Prayers recited after Low Mass, prescribed by Pope Leo XIII (including the Hail Mary, Salve Regina, and St. Michael Prayer).",
      fr: "Prières récitées après la messe basse, prescrites par le pape Léon XIII (incluant le Je vous salue Marie, le Salve Regina et la prière à Saint Michel).",
      es: "Oraciones recitadas después de la Misa rezada, prescritas por el Papa León XIII (incluyendo el Ave María, la Salve y la Oración a San Miguel).",
      de: "Gebete, die nach der Stillen Messe rezitiert werden, vorgeschrieben von Papst Leo XIII. (einschließlich Ave Maria, Salve Regina und das Gebet zum Heiligen Michael).",
    },
  },
  {
    id: "low-mass",
    term: {
      en: "Low Mass",
      fr: "Messe basse",
      es: "Misa Rezada",
      de: "Stille Messe",
    },
    definition: {
      en: "A Mass spoken rather than sung, typically with only two candles lit and without a deacon or subdeacon.",
      fr: "Une messe parlée plutôt que chantée, généralement avec seulement deux bougies allumées et sans diacre ni sous-diacre.",
      es: "Una Misa hablada en lugar de cantada, típicamente con solo dos velas encendidas y sin diácono ni subdiácono.",
      de: "Eine gesprochene statt gesungene Messe, typischerweise mit nur zwei brennenden Kerzen und ohne Diakon oder Subdiakon.",
    },
  },
  {
    id: "maniple",
    term: {
      en: "Maniple",
      fr: "Manipule",
      es: "Manípulo",
      de: "Manipel",
    },
    definition: {
      en: "An ornamental band of silk worn on the left arm of the priest, deacon, and subdeacon. Symbolizes the toll and labor of the priesthood.",
      fr: "Une bande ornementale de soie portée sur le bras gauche du prêtre, du diacre et du sous-diacre. Symbolise la peine et le travail du sacerdoce.",
      es: "Una banda ornamental de seda que se lleva en el brazo izquierdo del sacerdote, diácono y subdiácono. Simboliza el esfuerzo y el trabajo del sacerdocio.",
      de: "Ein ornamentales Seidenband, das am linken Arm des Priesters, Diakons und Subdiakons getragen wird. Symbolisiert die Mühe und Arbeit des Priestertums.",
    },
  },
  {
    id: "missa-cantata",
    term: {
      en: "Missa Cantata",
      fr: "Messe chantée",
      es: "Misa Cantada",
      de: "Gesungenes Amt",
    },
    definition: {
      en: "A 'Sung Mass' celebrated by a priest without a deacon or subdeacon, but with the parts of the Mass sung.",
      fr: "Une 'Messe chantée' célébrée par un prêtre sans diacre ni sous-diacre, mais avec les parties de la messe chantées.",
      es: "Una 'Misa Cantada' celebrada por un sacerdote sin diácono ni subdiácono, pero con las partes de la Misa cantadas.",
      de: "Eine 'Gesungene Messe', die von einem Priester ohne Diakon oder Subdiakon gefeiert wird, bei der aber die Teile der Messe gesungen werden.",
    },
  },
  {
    id: "nobis-quoque",
    term: {
      en: "Nobis Quoque Peccatoribus",
      fr: "Nobis Quoque Peccatoribus",
      es: "Nobis Quoque Peccatoribus",
      de: "Nobis Quoque Peccatoribus",
    },
    definition: {
      en: "Latin for 'To us also, sinners.' A phrase in the Roman Canon spoken aloud by the priest while striking his breast.",
      fr: "Latin pour 'À nous aussi, pécheurs'. Une phrase du Canon romain prononcée à voix haute par le prêtre en se frappant la poitrine.",
      es: "Latín para 'También a nosotros, pecadores'. Una frase en el Canon Romano dicha en voz alta por el sacerdote mientras se golpea el pecho.",
      de: "Lateinisch für 'Auch uns Sündern'. Ein Satz im Römischen Kanon, den der Priester laut spricht, während er sich an die Brust schlägt.",
    },
  },
  {
    id: "orate-fratres",
    term: {
      en: "Orate Fratres",
      fr: "Orate Fratres",
      es: "Orate Fratres",
      de: "Orate Fratres",
    },
    definition: {
      en: "The invitation to prayer ('Pray, brethren...') given by the priest after the Offertory and before the Secret.",
      fr: "L'invitation à la prière ('Priez, mes frères...') donnée par le prêtre après l'Offertoire et avant la Secrète.",
      es: "La invitación a la oración ('Orad, hermanos...') dada por el sacerdote después del Ofertorio y antes de la Secreta.",
      de: "Die Einladung zum Gebet ('Betet, Brüder...'), die der Priester nach der Opferung und vor dem Stillgebet spricht.",
    },
  },
  {
    id: "pall",
    term: {
      en: "Pall",
      fr: "Palle",
      es: "Palia",
      de: "Palla",
    },
    definition: {
      en: "A stiff square card covered with white linen, used to cover the chalice to prevent dust or insects from falling into it.",
      fr: "Un carton carré rigide recouvert de lin blanc, utilisé pour couvrir le calice afin d'empêcher la poussière ou les insectes d'y tomber.",
      es: "Un cartón cuadrado rígido cubierto de lino blanco, utilizado para cubrir el cáliz y evitar que caiga polvo o insectos en él.",
      de: "Eine steife quadratische Karte, die mit weißem Leinen bedeckt ist und dazu dient, den Kelch abzudecken, um zu verhindern, dass Staub oder Insekten hineinfallen.",
    },
  },
  {
    id: "pontifical-mass",
    term: {
      en: "Pontifical Mass",
      fr: "Messe pontificale",
      es: "Misa Pontifical",
      de: "Pontifikalamt",
    },
    definition: {
      en: "A Solemn High Mass celebrated by a bishop, involving specific vestments and ministers.",
      fr: "Une Grande Messe Solennelle célébrée par un évêque, impliquant des vêtements et des ministres spécifiques.",
      es: "Una Misa Solemne celebrada por un obispo, que implica vestiduras y ministros específicos.",
      de: "Ein feierliches Hochamt, das von einem Bischof gefeiert wird und bestimmte Gewänder und Diener erfordert.",
    },
  },
  {
    id: "postcommunion",
    term: {
      en: "Postcommunion",
      fr: "Postcommunion",
      es: "Postcomunión",
      de: "Postcommunio",
    },
    definition: {
      en: "The prayer said by the priest after Communion, thanking God and asking for the fruits of the sacrament.",
      fr: "La prière dite par le prêtre après la Communion, remerciant Dieu et demandant les fruits du sacrement.",
      es: "La oración dicha por el sacerdote después de la Comunión, dando gracias a Dios y pidiendo los frutos del sacramento.",
      de: "Das Gebet, das der Priester nach der Kommunion spricht, um Gott zu danken und um die Früchte des Sakraments zu bitten.",
    },
  },
  {
    id: "preface",
    term: {
      en: "Preface",
      fr: "Préface",
      es: "Prefacio",
      de: "Präfation",
    },
    definition: {
      en: "The introductory prayer to the Canon of the Mass, beginning with the dialogue 'Sursum Corda' and ending with the 'Sanctus'.",
      fr: "La prière d'introduction au Canon de la Messe, commençant par le dialogue 'Sursum Corda' et se terminant par le 'Sanctus'.",
      es: "La oración introductoria al Canon de la Misa, que comienza con el diálogo 'Sursum Corda' y termina con el 'Sanctus'.",
      de: "Das Einführungsgebet zum Messkanon, beginnend mit dem Dialog 'Sursum Corda' und endend mit dem 'Sanctus'.",
    },
  },
  {
    id: "propers",
    term: {
      en: "Propers",
      fr: "Propres",
      es: "Propios",
      de: "Proprium",
    },
    definition: {
      en: "The parts of the Mass that change according to the day or feast (Introit, Gradual, Collect, etc.), as opposed to the Ordinary.",
      fr: "Les parties de la messe qui changent selon le jour ou la fête (Introït, Graduel, Collecte, etc.), par opposition à l'Ordinaire.",
      es: "Las partes de la Misa que cambian según el día o la fiesta (Introito, Gradual, Colecta, etc.), en oposición al Ordinario.",
      de: "Die Teile der Messe, die sich je nach Tag oder Fest ändern (Introitus, Graduale, Tagesgebet usw.), im Gegensatz zum Ordinarium.",
    },
  },
  {
    id: "purificator",
    term: {
      en: "Purificator",
      fr: "Purificatoire",
      es: "Purificador",
      de: "Purifikatorium",
    },
    definition: {
      en: "A rectangular white linen cloth used to wipe the chalice and the priest's lips and fingers.",
      fr: "Un linge blanc rectangulaire utilisé pour essuyer le calice ainsi que les lèvres et les doigts du prêtre.",
      es: "Un paño de lino blanco rectangular utilizado para limpiar el cáliz y los labios y dedos del sacerdote.",
      de: "Ein rechteckiges weißes Leinentuch, das zum Abwischen des Kelches sowie der Lippen und Finger des Priesters verwendet wird.",
    },
  },
  {
    id: "quinquagesima",
    term: {
      en: "Quinquagesima",
      fr: "Quinquagésime",
      es: "Quincuagésima",
      de: "Quinquagesima",
    },
    definition: {
      en: "The Sunday before Lent (50 days before Easter) in the traditional calendar.",
      fr: "Le dimanche avant le Carême (50 jours avant Pâques) dans le calendrier traditionnel.",
      es: "El domingo antes de Cuaresma (50 días antes de Pascua) en el calendario tradicional.",
      de: "Der Sonntag vor der Fastenzeit (50 Tage vor Ostern) im traditionellen Kalender.",
    },
  },
  {
    id: "rorate-mass",
    term: {
      en: "Rorate Mass",
      fr: "Messe Rorate",
      es: "Misa Rorate",
      de: "Rorate-Messe",
    },
    definition: {
      en: "A Votive Mass of the Blessed Virgin Mary celebrated in Advent by candlelight before dawn.",
      fr: "Une messe votive de la Bienheureuse Vierge Marie célébrée pendant l'Avent à la lueur des bougies avant l'aube.",
      es: "Una Misa votiva de la Santísima Virgen María celebrada en Adviento a la luz de las velas antes del amanecer.",
      de: "Eine Votivmesse der seligen Jungfrau Maria, die im Advent bei Kerzenschein vor Sonnenaufgang gefeiert wird.",
    },
  },
  {
    id: "sacristy",
    term: {
      en: "Sacristy",
      fr: "Sacristie",
      es: "Sacristía",
      de: "Sakristei",
    },
    definition: {
      en: "The room where vestments and sacred vessels are kept and where clergy vest for Mass.",
      fr: "La pièce où sont conservés les vêtements et les vases sacrés et où le clergé s'habille pour la messe.",
      es: "La habitación donde se guardan las vestiduras y los vasos sagrados y donde el clero se reviste para la Misa.",
      de: "Der Raum, in dem Gewänder und heilige Gefäße aufbewahrt werden und wo sich der Klerus für die Messe ankleidet.",
    },
  },
  {
    id: "sanctus",
    term: {
      en: "Sanctus",
      fr: "Sanctus",
      es: "Sanctus",
      de: "Sanctus",
    },
    definition: {
      en: "The 'Holy, Holy, Holy' hymn sung at the end of the Preface, combining Isaiah 6:3 and Matthew 21:9.",
      fr: "L'hymne 'Saint, Saint, Saint' chantée à la fin de la Préface, combinant Isaïe 6:3 et Matthieu 21:9.",
      es: "El himno 'Santo, Santo, Santo' cantado al final del Prefacio, combinando Isaías 6:3 y Mateo 21:9.",
      de: "Der Hymnus 'Heilig, Heilig, Heilig', der am Ende der Präfation gesungen wird und Jesaja 6,3 mit Matthäus 21,9 verbindet.",
    },
  },
  {
    id: "secret-prayer",
    term: {
      en: "Secret (Prayer)",
      fr: "Secrète",
      es: "Secreta",
      de: "Stillgebet",
    },
    definition: {
      en: "A variable prayer said by the priest in a low voice (secreto) after the Offertory and before the Preface.",
      fr: "Une prière variable dite par le prêtre à voix basse (secreto) après l'Offertoire et avant la Préface.",
      es: "Una oración variable dicha por el sacerdote en voz baja (secreto) después del Ofertorio y antes del Prefacio.",
      de: "Ein variables Gebet, das der Priester nach der Opferung und vor der Präfation mit leiser Stimme (secreto) spricht.",
    },
  },
  {
    id: "septuagesima",
    term: {
      en: "Septuagesima",
      fr: "Septuagésime",
      es: "Septuagésima",
      de: "Septuagesima",
    },
    definition: {
      en: "The third Sunday before Lent (70 days before Easter), marking the beginning of the pre-Lenten season.",
      fr: "Le troisième dimanche avant le Carême (70 jours avant Pâques), marquant le début de la saison de pré-Carême.",
      es: "El tercer domingo antes de Cuaresma (70 días antes de Pascua), marcando el comienzo del tiempo de pre-Cuaresma.",
      de: "Der dritte Sonntag vor der Fastenzeit (70 Tage vor Ostern), der den Beginn der Vorfastenzeit markiert.",
    },
  },
  {
    id: "sequence",
    term: {
      en: "Sequence",
      fr: "Séquence",
      es: "Secuencia",
      de: "Sequenz",
    },
    definition: {
      en: "A liturgical hymn sung after the Gradual or Alleluia on certain feasts (e.g., Victimae Paschali Laudes at Easter).",
      fr: "Un hymne liturgique chanté après le Graduel ou l'Alléluia lors de certaines fêtes (par ex., Victimae Paschali Laudes à Pâques).",
      es: "Un himno litúrgico cantado después del Gradual o Aleluya en ciertas fiestas (p. ej., Victimae Paschali Laudes en Pascua).",
      de: "Ein liturgischer Hymnus, der an bestimmten Festen nach dem Graduale oder Alleluja gesungen wird (z. B. Victimae Paschali Laudes zu Ostern).",
    },
  },
  {
    id: "sexagesima",
    term: {
      en: "Sexagesima",
      fr: "Sexagésime",
      es: "Sexagésima",
      de: "Sexagesima",
    },
    definition: {
      en: "The second Sunday before Lent (approx. 60 days before Easter).",
      fr: "Le deuxième dimanche avant le Carême (environ 60 jours avant Pâques).",
      es: "El segundo domingo antes de Cuaresma (aprox. 60 días antes de Pascua).",
      de: "Der zweite Sonntag vor der Fastenzeit (ca. 60 Tage vor Ostern).",
    },
  },
  {
    id: "subdeacon",
    term: {
      en: "Subdeacon",
      fr: "Sous-diacre",
      es: "Subdiácono",
      de: "Subdiakon",
    },
    definition: {
      en: "A major order in the traditional rite, ranking below the deacon. His role includes singing the Epistle and holding the paten.",
      fr: "Un ordre majeur dans le rite traditionnel, se classant en dessous du diacre. Son rôle inclut le chant de l'Épître et la tenue de la patène.",
      es: "Un orden mayor en el rito tradicional, de rango inferior al diácono. Su papel incluye cantar la Epístola y sostener la patena.",
      de: "Ein höherer Weihegrad im traditionellen Ritus, im Rang unter dem Diakon. Seine Rolle umfasst das Singen der Epistel und das Halten der Patene.",
    },
  },
  {
    id: "sursum-corda",
    term: {
      en: "Sursum Corda",
      fr: "Sursum Corda",
      es: "Sursum Corda",
      de: "Sursum Corda",
    },
    definition: {
      en: "Latin for 'Lift up your hearts.' The dialogue opening the Preface of the Mass.",
      fr: "Latin pour 'Élevez vos cœurs'. Le dialogue ouvrant la Préface de la messe.",
      es: "Latín para 'Levantemos el corazón'. El diálogo que abre el Prefacio de la Misa.",
      de: "Lateinisch für 'Erhebet die Herzen'. Der Dialog, der die Präfation der Messe eröffnet.",
    },
  },
  {
    id: "thurifer",
    term: {
      en: "Thurifer",
      fr: "Thuriféraire",
      es: "Turiferario",
      de: "Thuriferar",
    },
    definition: {
      en: "The altar server responsible for carrying the thurible (censer) and incense boat.",
      fr: "Le servant d'autel responsable de porter l'encensoir et la navette d'encens.",
      es: "El monaguillo responsable de llevar el incensario y la naveta.",
      de: "Der Messdiener, der für das Tragen des Rauchfasses und des Schiffchens verantwortlich ist.",
    },
  },
  {
    id: "tract",
    term: {
      en: "Tract",
      fr: "Trait",
      es: "Tracto",
      de: "Tractus",
    },
    definition: {
      en: "A chant that replaces the Alleluia during penitential seasons like Lent and in Requiem Masses.",
      fr: "Un chant qui remplace l'Alléluia pendant les saisons de pénitence comme le Carême et dans les messes de Requiem.",
      es: "Un canto que reemplaza el Aleluya durante los tiempos penitenciales como la Cuaresma y en las Misas de Réquiem.",
      de: "Ein Gesang, der das Alleluja in Bußzeiten wie der Fastenzeit und in Requiemmessen ersetzt.",
    },
  },
  {
    id: "vidi-aquam",
    term: {
      en: "Vidi Aquam",
      fr: "Vidi Aquam",
      es: "Vidi Aquam",
      de: "Vidi Aquam",
    },
    definition: {
      en: "The antiphon sung during the sprinkling of holy water (Asperges) during the Easter season, replacing the 'Asperges Me'.",
      fr: "L'antienne chantée pendant l'aspersion d'eau bénite (Asperges) durant le temps pascal, remplaçant l''Asperges Me'.",
      es: "La antífona cantada durante la aspersión de agua bendita (Asperges) durante el tiempo de Pascua, reemplazando el 'Asperges Me'.",
      de: "Die Antiphon, die während der Besprengung mit Weihwasser (Asperges) in der Osterzeit gesungen wird und das 'Asperges Me' ersetzt.",
    },
  },

  // --- Early Church Fathers & Documents ---
  {
    id: "ambrose",
    term: {
      en: "Ambrose (Saint)",
      fr: "Ambroise (Saint)",
      es: "Ambrosio (San)",
      de: "Ambrosius (Heiliger)",
    },
    definition: {
      en: "Bishop of Milan (c. 340-397), Doctor of the Church, known for his preaching which converted St. Augustine, and for introducing hymnody.",
      fr: "Évêque de Milan (v. 340-397), Docteur de l'Église, connu pour sa prédication qui a converti Saint Augustin et pour l'introduction de l'hymnodie.",
      es: "Obispo de Milán (c. 340-397), Doctor de la Iglesia, conocido por su predicación que convirtió a San Agustín y por introducir la himnodia.",
      de: "Bischof von Mailand (ca. 340-397), Kirchenlehrer, bekannt für seine Predigten, die den hl. Augustinus bekehrten, und für die Einführung der Hymnologie.",
    },
  },
  {
    id: "anthony-egypt",
    term: {
      en: "Anthony of Egypt (Saint)",
      fr: "Antoine le Grand (Saint)",
      es: "Antonio Abad (San)",
      de: "Antonius der Große (Heiliger)",
    },
    definition: {
      en: "The 'Father of All Monks' (c. 251-356); his life in the desert inspired the monastic movement in East and West.",
      fr: "Le « Père de tous les moines » (v. 251-356) ; sa vie dans le désert a inspiré le mouvement monastique en Orient et en Occident.",
      es: "El 'Padre de todos los monjes' (c. 251-356); su vida en el desierto inspiró el movimiento monástico en Oriente y Occidente.",
      de: "Der 'Vater aller Mönche' (ca. 251-356); sein Leben in der Wüste inspirierte die monastische Bewegung in Ost und West.",
    },
  },
  {
    id: "apologists",
    term: {
      en: "Apologists (Early)",
      fr: "Apologistes (Premiers)",
      es: "Apologistas (Primeros)",
      de: "Apologeten (Frühe)",
    },
    definition: {
      en: "Writers of the 2nd and 3rd centuries (e.g., Justin Martyr) who defended Christianity against pagan accusations and philosophy.",
      fr: "Écrivains des 2ème et 3ème siècles (par ex. Justin Martyr) qui ont défendu le christianisme contre les accusations païennes et la philosophie.",
      es: "Escritores de los siglos II y III (p. ej., Justino Mártir) que defendieron el cristianismo contra las acusaciones paganas y la filosofía.",
      de: "Schriftsteller des 2. und 3. Jahrhunderts (z. B. Justin der Märtyrer), die das Christentum gegen heidnische Anschuldigungen und Philosophie verteidigten.",
    },
  },
  {
    id: "apostolic-constitutions",
    term: {
      en: "Apostolic Constitutions",
      fr: "Constitutions apostoliques",
      es: "Constituciones Apostólicas",
      de: "Apostolische Konstitutionen",
    },
    definition: {
      en: "A 4th-century collection of ecclesiastical law and liturgy, claiming to be the work of the Twelve Apostles.",
      fr: "Une collection du 4ème siècle de droit ecclésiastique et de liturgie, prétendant être l'œuvre des Douze Apôtres.",
      es: "Una colección del siglo IV de derecho eclesiástico y liturgia, que pretende ser obra de los Doce Apóstoles.",
      de: "Eine Sammlung von Kirchenrecht und Liturgie aus dem 4. Jahrhundert, die vorgibt, das Werk der Zwölf Apostel zu sein.",
    },
  },
  {
    id: "apostolic-tradition",
    term: {
      en: "Apostolic Tradition (Hippolytus)",
      fr: "Tradition apostolique",
      es: "Tradición Apostólica",
      de: "Traditio Apostolica",
    },
    definition: {
      en: "An early 3rd-century text attributed to Hippolytus of Rome, containing the earliest known Eucharistic Prayer.",
      fr: "Un texte du début du 3ème siècle attribué à Hippolyte de Rome, contenant la plus ancienne Prière Eucharistique connue.",
      es: "Un texto de principios del siglo III atribuido a Hipólito de Roma, que contiene la Plegaria Eucarística más antigua conocida.",
      de: "Ein Text aus dem frühen 3. Jahrhundert, der Hippolyt von Rom zugeschrieben wird und das älteste bekannte eucharistische Hochgebet enthält.",
    },
  },
  {
    id: "athanasius",
    term: {
      en: "Athanasius (Saint)",
      fr: "Athanase (Saint)",
      es: "Atanasio (San)",
      de: "Athanasius (Heiliger)",
    },
    definition: {
      en: "Bishop of Alexandria (c. 296-373), the champion of orthodoxy against Arianism at Nicaea; author of 'On the Incarnation'.",
      fr: "Évêque d'Alexandrie (v. 296-373), le champion de l'orthodoxie contre l'arianisme à Nicée ; auteur de 'Sur l'Incarnation'.",
      es: "Obispo de Alejandría (c. 296-373), el campeón de la ortodoxia contra el arrianismo en Nicea; autor de 'Sobre la Encarnación'.",
      de: "Bischof von Alexandria (ca. 296-373), der Vorkämpfer der Orthodoxie gegen den Arianismus in Nicäa; Autor von 'Über die Menschwerdung'.",
    },
  },
  {
    id: "athenagoras",
    term: {
      en: "Athenagoras",
      fr: "Athénagore",
      es: "Atenágoras",
      de: "Athenagoras",
    },
    definition: {
      en: "A 2nd-century Christian apologist who wrote 'A Plea for the Christians' to Emperor Marcus Aurelius.",
      fr: "Un apologiste chrétien du 2ème siècle qui a écrit 'Supplique pour les chrétiens' à l'empereur Marc Aurèle.",
      es: "Un apologista cristiano del siglo II que escribió 'Súplica por los cristianos' al emperador Marco Aurelio.",
      de: "Ein christlicher Apologet des 2. Jahrhunderts, der eine 'Bittschrift für die Christen' an Kaiser Marcus Aurelius schrieb.",
    },
  },
  {
    id: "augustine",
    term: {
      en: "Augustine of Hippo (Saint)",
      fr: "Augustin d'Hippone (Saint)",
      es: "Agustín de Hipona (San)",
      de: "Augustinus von Hippo (Heiliger)",
    },
    definition: {
      en: "One of the greatest theologians (354-430), author of 'Confessions' and 'City of God'; influenced almost all Western Christian thought.",
      fr: "L'un des plus grands théologiens (354-430), auteur des 'Confessions' et de 'La Cité de Dieu' ; a influencé presque toute la pensée chrétienne occidentale.",
      es: "Uno de los más grandes teólogos (354-430), autor de 'Confesiones' y 'La Ciudad de Dios'; influyó en casi todo el pensamiento cristiano occidental.",
      de: "Einer der größten Theologen (354-430), Autor der 'Bekenntnisse' und 'Vom Gottesstaat'; beeinflusste fast das gesamte westliche christliche Denken.",
    },
  },
  {
    id: "barnabas-epistle",
    term: {
      en: "Barnabas, Epistle of",
      fr: "Barnabé, Épître de",
      es: "Bernabé, Epístola de",
      de: "Barnabasbrief",
    },
    definition: {
      en: "An early Christian treatise (c. 70-130 AD) focusing on the relationship between Judaism and Christianity, using allegorical interpretation.",
      fr: "Un traité chrétien primitif (v. 70-130) se concentrant sur la relation entre le judaïsme et le christianisme, utilisant l'interprétation allégorique.",
      es: "Un tratado cristiano primitivo (c. 70-130 d.C.) que se centra en la relación entre el judaísmo y el cristianismo, utilizando la interpretación alegórica.",
      de: "Eine frühchristliche Abhandlung (ca. 70-130 n. Chr.), die sich auf das Verhältnis zwischen Judentum und Christentum konzentriert und allegorische Auslegung verwendet.",
    },
  },
  {
    id: "basil-great",
    term: {
      en: "Basil the Great (Saint)",
      fr: "Basile le Grand (Saint)",
      es: "Basilio el Grande (San)",
      de: "Basilius der Große (Heiliger)",
    },
    definition: {
      en: "Cappadocian Father (330-379), author of monastic rules used in the East, and defender of the Holy Spirit's divinity.",
      fr: "Père cappadocien (330-379), auteur de règles monastiques utilisées en Orient et défenseur de la divinité du Saint-Esprit.",
      es: "Padre capadocio (330-379), autor de reglas monásticas utilizadas en Oriente y defensor de la divinidad del Espíritu Santo.",
      de: "Kappadokischer Vater (330-379), Verfasser von Mönchsregeln, die im Osten verwendet werden, und Verteidiger der Gottheit des Heiligen Geistes.",
    },
  },
  {
    id: "bede",
    term: {
      en: "Bede the Venerable (Saint)",
      fr: "Bède le Vénérable (Saint)",
      es: "Beda el Venerable (San)",
      de: "Beda Venerabilis (Heiliger)",
    },
    definition: {
      en: "English monk and historian (672-735), Doctor of the Church, author of 'Ecclesiastical History of the English People'.",
      fr: "Moine et historien anglais (672-735), Docteur de l'Église, auteur de l'« Histoire ecclésiastique du peuple anglais ».",
      es: "Monje e historiador inglés (672-735), Doctor de la Iglesia, autor de la 'Historia eclesiástica del pueblo inglés'.",
      de: "Englischer Mönch und Historiker (672-735), Kirchenlehrer, Autor der 'Kirchengeschichte des englischen Volkes'.",
    },
  },
  {
    id: "benedict-nursia",
    term: {
      en: "Benedict of Nursia (Saint)",
      fr: "Benoît de Nursie (Saint)",
      es: "Benito de Nursia (San)",
      de: "Benedikt von Nursia (Heiliger)",
    },
    definition: {
      en: "The 'Father of Western Monasticism' (c. 480-547); his Rule established the standard for monastic life in Europe (Ora et Labora).",
      fr: "Le « Père du monachisme occidental » (v. 480-547) ; sa Règle a établi la norme de la vie monastique en Europe (Ora et Labora).",
      es: "El 'Padre del monacato occidental' (c. 480-547); su Regla estableció el estándar para la vida monástica en Europa (Ora et Labora).",
      de: "Der 'Vater des abendländischen Mönchtums' (ca. 480-547); seine Regel setzte den Standard für das klösterliche Leben in Europa (Ora et Labora).",
    },
  },
  {
    id: "boethius",
    term: {
      en: "Boethius",
      fr: "Boèce",
      es: "Boecio",
      de: "Boethius",
    },
    definition: {
      en: "Christian philosopher (c. 480-524) who wrote 'The Consolation of Philosophy'; key in transmitting Aristotelian logic to the Middle Ages.",
      fr: "Philosophe chrétien (v. 480-524) qui a écrit « La Consolation de la Philosophie » ; clé dans la transmission de la logique aristotélicienne au Moyen Âge.",
      es: "Filósofo cristiano (c. 480-524) que escribió 'La Consolación de la Filosofía'; clave en la transmisión de la lógica aristotélica a la Edad Media.",
      de: "Christlicher Philosoph (ca. 480-524), der 'Der Trost der Philosophie' schrieb; Schlüsselfigur bei der Übermittlung der aristotelischen Logik an das Mittelalter.",
    },
  },
  {
    id: "cappadocian-fathers",
    term: {
      en: "Cappadocian Fathers",
      fr: "Pères Cappadociens",
      es: "Padres Capadocios",
      de: "Kappadokische Väter",
    },
    definition: {
      en: "Basil the Great, Gregory of Nazianzus, and Gregory of Nyssa; 4th-century theologians who advanced the doctrine of the Trinity.",
      fr: "Basile le Grand, Grégoire de Nazianze et Grégoire de Nysse ; théologiens du 4ème siècle qui ont fait progresser la doctrine de la Trinité.",
      es: "Basilio el Grande, Gregorio Nacianceno y Gregorio de Nisa; teólogos del siglo IV que avanzaron la doctrina de la Trinidad.",
      de: "Basilius der Große, Gregor von Nazianz und Gregor von Nyssa; Theologen des 4. Jahrhunderts, die die Trinitätslehre voranbrachten.",
    },
  },
  {
    id: "cassian-john",
    term: {
      en: "Cassian, John (Saint)",
      fr: "Cassien, Jean (Saint)",
      es: "Casiano, Juan (San)",
      de: "Cassianus, Johannes (Heiliger)",
    },
    definition: {
      en: "Monk (c. 360-435) who brought Eastern monastic wisdom to the West through his 'Institutes' and 'Conferences'.",
      fr: "Moine (v. 360-435) qui a apporté la sagesse monastique orientale en Occident à travers ses « Institutions » et « Conférences ».",
      es: "Monje (c. 360-435) que trajo la sabiduría monástica oriental a Occidente a través de sus 'Instituciones' y 'Conferencias'.",
      de: "Mönch (ca. 360-435), der durch seine 'Einrichtungen' und 'Unterredungen' die östliche monastische Weisheit in den Westen brachte.",
    },
  },
  {
    id: "clement-alexandria",
    term: {
      en: "Clement of Alexandria",
      fr: "Clément d'Alexandrie",
      es: "Clemente de Alejandría",
      de: "Clemens von Alexandria",
    },
    definition: {
      en: "Theologian (c. 150-215) who attempted to unite Greek philosophy with Christian doctrine; head of the Catechetical School of Alexandria.",
      fr: "Théologien (v. 150-215) qui a tenté d'unir la philosophie grecque à la doctrine chrétienne ; chef de l'École catéchétique d'Alexandrie.",
      es: "Teólogo (c. 150-215) que intentó unir la filosofía griega con la doctrina cristiana; jefe de la Escuela Catequética de Alejandría.",
      de: "Theologe (ca. 150-215), der versuchte, die griechische Philosophie mit der christlichen Lehre zu verbinden; Leiter der Katechetenschule von Alexandria.",
    },
  },
  {
    id: "cyprian",
    term: {
      en: "Cyprian of Carthage (Saint)",
      fr: "Cyprien de Carthage (Saint)",
      es: "Cipriano de Cartago (San)",
      de: "Cyprian von Karthago (Heiliger)",
    },
    definition: {
      en: "Bishop and martyr (c. 200-258) who emphasized Church unity ('He cannot have God for his Father who has not the Church for his mother').",
      fr: "Évêque et martyr (v. 200-258) qui a souligné l'unité de l'Église ('Il ne peut avoir Dieu pour Père celui qui n'a pas l'Église pour mère').",
      es: "Obispo y mártir (c. 200-258) que enfatizó la unidad de la Iglesia ('No puede tener a Dios por Padre quien no tiene a la Iglesia por madre').",
      de: "Bischof und Märtyrer (ca. 200-258), der die Einheit der Kirche betonte ('Wer die Kirche nicht zur Mutter hat, kann Gott nicht zum Vater haben').",
    },
  },
  {
    id: "cyril-alexandria",
    term: {
      en: "Cyril of Alexandria (Saint)",
      fr: "Cyrille d'Alexandrie (Saint)",
      es: "Cirilo de Alejandría (San)",
      de: "Kyrill von Alexandria (Heiliger)",
    },
    definition: {
      en: "Patriarch (c. 376-444) who defended the title 'Theotokos' for Mary against Nestorius at the Council of Ephesus.",
      fr: "Patriarche (v. 376-444) qui a défendu le titre 'Théotokos' pour Marie contre Nestorius au Concile d'Éphèse.",
      es: "Patriarca (c. 376-444) que defendió el título 'Theotokos' para María contra Nestorio en el Concilio de Éfeso.",
      de: "Patriarch (ca. 376-444), der den Titel 'Theotokos' für Maria gegen Nestorius auf dem Konzil von Ephesus verteidigte.",
    },
  },
  {
    id: "cyril-jerusalem",
    term: {
      en: "Cyril of Jerusalem (Saint)",
      fr: "Cyrille de Jérusalem (Saint)",
      es: "Cirilo de Jerusalén (San)",
      de: "Kyrill von Jerusalem (Heiliger)",
    },
    definition: {
      en: "Bishop (c. 313-386) famous for his 'Catechetical Lectures' instructing new Christians in the sacraments and creed.",
      fr: "Évêque (v. 313-386) célèbre pour ses « Catéchèses » instruisant les nouveaux chrétiens sur les sacrements et le credo.",
      es: "Obispo (c. 313-386) famoso por sus 'Catequesis' instruyendo a los nuevos cristianos en los sacramentos y el credo.",
      de: "Bischof (ca. 313-386), berühmt für seine 'Katechesen', in denen er neue Christen in Sakramenten und Glaubensbekenntnis unterwies.",
    },
  },
  {
    id: "desert-fathers",
    term: {
      en: "Desert Fathers",
      fr: "Pères du désert",
      es: "Padres del Desierto",
      de: "Wüstenväter",
    },
    definition: {
      en: "Early Christian hermits and monks (3rd-4th centuries) who lived in the Egyptian desert (e.g., Anthony, Pachomius).",
      fr: "Ermites et moines chrétiens primitifs (3ème-4ème siècles) qui vivaient dans le désert égyptien (par ex. Antoine, Pacôme).",
      es: "Ermitaños y monjes cristianos primitivos (siglos III-IV) que vivían en el desierto egipcio (p. ej., Antonio, Pacomio).",
      de: "Frühchristliche Einsiedler und Mönche (3.-4. Jahrhundert), die in der ägyptischen Wüste lebten (z. B. Antonius, Pachomius).",
    },
  },
  {
    id: "didache",
    term: {
      en: "Didache",
      fr: "Didachè",
      es: "Didaché",
      de: "Didache",
    },
    definition: {
      en: "The 'Teaching of the Twelve Apostles' (c. 50-120 AD), an early manual on Christian ethics, baptism, and Eucharist.",
      fr: "L'« Enseignement des Douze Apôtres » (v. 50-120), un manuel ancien sur l'éthique chrétienne, le baptême et l'Eucharistie.",
      es: "La 'Enseñanza de los Doce Apóstoles' (c. 50-120 d.C.), un manual antiguo sobre ética cristiana, bautismo y Eucaristía.",
      de: "Die 'Lehre der Zwölf Apostel' (ca. 50-120 n. Chr.), ein frühes Handbuch über christliche Ethik, Taufe und Eucharistie.",
    },
  },
  {
    id: "diognetus",
    term: {
      en: "Diognetus, Epistle to",
      fr: "À Diognète, Épître",
      es: "A Diogneto, Carta",
      de: "Diognetbrief",
    },
    definition: {
      en: "An anonymous 2nd-century apologetic work describing Christians as being 'in the world but not of the world.'",
      fr: "Une œuvre apologétique anonyme du 2ème siècle décrivant les chrétiens comme étant « dans le monde mais pas du monde ».",
      es: "Una obra apologética anónima del siglo II que describe a los cristianos como estando 'en el mundo pero no son del mundo'.",
      de: "Ein anonymes apologetisches Werk aus dem 2. Jahrhundert, das Christen als 'in der Welt, aber nicht von der Welt' beschreibt.",
    },
  },
  {
    id: "dionysius-areopagite",
    term: {
      en: "Pseudo-Dionysius the Areopagite",
      fr: "Pseudo-Denys l'Aréopagite",
      es: "Pseudo-Dionisio Areopagita",
      de: "Pseudo-Dionysius Areopagita",
    },
    definition: {
      en: "A mystic author (c. 500 AD) whose writings on the celestial hierarchy and negative theology heavily influenced medieval thought.",
      fr: "Un auteur mystique (v. 500) dont les écrits sur la hiérarchie céleste et la théologie négative ont fortement influencé la pensée médiévale.",
      es: "Un autor místico (c. 500 d.C.) cuyos escritos sobre la jerarquía celestial y la teología negativa influyeron mucho en el pensamiento medieval.",
      de: "Ein mystischer Autor (ca. 500 n. Chr.), dessen Schriften über die himmlische Hierarchie und negative Theologie das mittelalterliche Denken stark beeinflussten.",
    },
  },
  {
    id: "ephrem-syrian",
    term: {
      en: "Ephrem the Syrian (Saint)",
      fr: "Éphrem le Syrien (Saint)",
      es: "Efrén el Sirio (San)",
      de: "Ephräm der Syrer (Heiliger)",
    },
    definition: {
      en: "Deacon and hymnographer (c. 306-373), Doctor of the Church, known as the 'Harp of the Spirit' for his poetic theology.",
      fr: "Diacre et hymnographe (v. 306-373), Docteur de l'Église, connu comme la « Harpe de l'Esprit » pour sa théologie poétique.",
      es: "Diácono e himnógrafo (c. 306-373), Doctor de la Iglesia, conocido como el 'Arpa del Espíritu' por su teología poética.",
      de: "Diakon und Hymnograph (ca. 306-373), Kirchenlehrer, bekannt als 'Harfe des Geistes' für seine poetische Theologie.",
    },
  },
  {
    id: "eusebius",
    term: {
      en: "Eusebius of Caesarea",
      fr: "Eusèbe de Césarée",
      es: "Eusebio de Cesarea",
      de: "Eusebius von Caesarea",
    },
    definition: {
      en: "Bishop and historian (c. 260-340), known as the 'Father of Church History' for his 'Ecclesiastical History'.",
      fr: "Évêque et historien (v. 260-340), connu comme le « Père de l'histoire ecclésiastique » pour son « Histoire ecclésiastique ».",
      es: "Obispo e historiador (c. 260-340), conocido como el 'Padre de la Historia de la Iglesia' por su 'Historia Eclesiástica'.",
      de: "Bischof und Historiker (ca. 260-340), bekannt als 'Vater der Kirchengeschichte' für seine 'Kirchengeschichte'.",
    },
  },
  {
    id: "gregory-nazianzus",
    term: {
      en: "Gregory of Nazianzus (Saint)",
      fr: "Grégoire de Nazianze (Saint)",
      es: "Gregorio Nacianceno (San)",
      de: "Gregor von Nazianz (Heiliger)",
    },
    definition: {
      en: "The 'Theologian' (329-390), Cappadocian Father, known for his sermons on the Trinity and his defense of Christ's full humanity.",
      fr: "Le « Théologien » (329-390), Père cappadocien, connu pour ses sermons sur la Trinité et sa défense de la pleine humanité du Christ.",
      es: "El 'Teólogo' (329-390), Padre capadocio, conocido por sus sermones sobre la Trinidad y su defensa de la plena humanidad de Cristo.",
      de: "Der 'Theologe' (329-390), Kappadokischer Vater, bekannt für seine Predigten über die Dreifaltigkeit und seine Verteidigung der vollen Menschheit Christi.",
    },
  },
  {
    id: "gregory-nyssa",
    term: {
      en: "Gregory of Nyssa (Saint)",
      fr: "Grégoire de Nysse (Saint)",
      es: "Gregorio de Nisa (San)",
      de: "Gregor von Nyssa (Heiliger)",
    },
    definition: {
      en: "Cappadocian Father (c. 335-395), mystic and philosopher, who articulated the distinction between essence and energies in God.",
      fr: "Père cappadocien (v. 335-395), mystique et philosophe, qui a articulé la distinction entre essence et énergies en Dieu.",
      es: "Padre capadocio (c. 335-395), místico y filósofo, que articuló la distinción entre esencia y energías en Dios.",
      de: "Kappadokischer Vater (ca. 335-395), Mystiker und Philosoph, der die Unterscheidung zwischen Wesen und Energien in Gott formulierte.",
    },
  },
  {
    id: "hilary-poitiers",
    term: {
      en: "Hilary of Poitiers (Saint)",
      fr: "Hilaire de Poitiers (Saint)",
      es: "Hilario de Poitiers (San)",
      de: "Hilarius von Poitiers (Heiliger)",
    },
    definition: {
      en: "The 'Athanasius of the West' (c. 310-367), Doctor of the Church, who defended the Trinity against Arianism in Gaul.",
      fr: "L'« Athanase de l'Occident » (v. 310-367), Docteur de l'Église, qui a défendu la Trinité contre l'arianisme en Gaule.",
      es: "El 'Atanasio de Occidente' (c. 310-367), Doctor de la Iglesia, que defendió la Trinidad contra el arrianismo en la Galia.",
      de: "Der 'Athanasius des Westens' (ca. 310-367), Kirchenlehrer, der die Dreifaltigkeit gegen den Arianismus in Gallien verteidigte.",
    },
  },
  {
    id: "hippolytus",
    term: {
      en: "Hippolytus of Rome (Saint)",
      fr: "Hippolyte de Rome (Saint)",
      es: "Hipólito de Roma (San)",
      de: "Hippolyt von Rom (Heiliger)",
    },
    definition: {
      en: "Theologian and martyr (c. 170-235), at one point an antipope, reconciled before death; important witness to early liturgy.",
      fr: "Théologien et martyr (v. 170-235), un temps antipape, réconcilié avant sa mort ; témoin important de la liturgie primitive.",
      es: "Teólogo y mártir (c. 170-235), en un momento antipapa, reconciliado antes de morir; testigo importante de la liturgia primitiva.",
      de: "Theologe und Märtyrer (ca. 170-235), zeitweise Gegenpapst, vor dem Tod versöhnt; wichtiger Zeuge der frühen Liturgie.",
    },
  },
  {
    id: "ignatius-antioch",
    term: {
      en: "Ignatius of Antioch (Saint)",
      fr: "Ignace d'Antioche (Saint)",
      es: "Ignacio de Antioquía (San)",
      de: "Ignatius von Antiochien (Heiliger)",
    },
    definition: {
      en: "Apostolic Father and martyr (c. 35-107) who wrote seven letters emphasizing the real presence in the Eucharist and the authority of bishops.",
      fr: "Père apostolique et martyr (v. 35-107) qui a écrit sept lettres soulignant la présence réelle dans l'Eucharistie et l'autorité des évêques.",
      es: "Padre Apostólico y mártir (c. 35-107) que escribió siete cartas enfatizando la presencia real en la Eucaristía y la autoridad de los obispos.",
      de: "Apostolischer Vater und Märtyrer (ca. 35-107), der sieben Briefe schrieb, in denen er die Realpräsenz in der Eucharistie und die Autorität der Bischöfe betonte.",
    },
  },
  {
    id: "irenaeus",
    term: {
      en: "Irenaeus of Lyons (Saint)",
      fr: "Irénée de Lyon (Saint)",
      es: "Ireneo de Lyon (San)",
      de: "Irenäus von Lyon (Heiliger)",
    },
    definition: {
      en: "Bishop and martyr (c. 130-202), a disciple of Polycarp, who wrote 'Against Heresies' to refute Gnosticism.",
      fr: "Évêque et martyr (v. 130-202), disciple de Polycarpe, qui a écrit « Contre les hérésies » pour réfuter le gnosticisme.",
      es: "Obispo y mártir (c. 130-202), discípulo de Policarpo, que escribió 'Contra las Herejías' para refutar el gnosticismo.",
      de: "Bischof und Märtyrer (ca. 130-202), ein Schüler von Polykarp, der 'Gegen die Häresien' schrieb, um den Gnostizismus zu widerlegen.",
    },
  },
  {
    id: "isidore-seville",
    term: {
      en: "Isidore of Seville (Saint)",
      fr: "Isidore de Séville (Saint)",
      es: "Isidoro de Sevilla (San)",
      de: "Isidor von Sevilla (Heiliger)",
    },
    definition: {
      en: "Bishop and scholar (c. 560-636), regarded as the last of the Western Church Fathers; his 'Etymologies' was an encyclopedia of universal knowledge.",
      fr: "Évêque et érudit (v. 560-636), considéré comme le dernier des Pères de l'Église d'Occident ; ses « Étymologies » étaient une encyclopédie du savoir universel.",
      es: "Obispo y erudito (c. 560-636), considerado el último de los Padres de la Iglesia Occidental; sus 'Etimologías' eran una enciclopedia del saber universal.",
      de: "Bischof und Gelehrter (ca. 560-636), gilt als der letzte der westlichen Kirchenväter; seine 'Etymologien' waren eine Enzyklopädie des Universalwissens.",
    },
  },
  {
    id: "jerome",
    term: {
      en: "Jerome (Saint)",
      fr: "Jérôme (Saint)",
      es: "Jerónimo (San)",
      de: "Hieronymus (Heiliger)",
    },
    definition: {
      en: "Scholar and hermit (c. 347-420), Doctor of the Church, who translated the Bible into Latin (the Vulgate).",
      fr: "Érudit et ermite (v. 347-420), Docteur de l'Église, qui a traduit la Bible en latin (la Vulgate).",
      es: "Erudito y ermitaño (c. 347-420), Doctor de la Iglesia, que tradujo la Biblia al latín (la Vulgata).",
      de: "Gelehrter und Einsiedler (ca. 347-420), Kirchenlehrer, der die Bibel ins Lateinische übersetzte (die Vulgata).",
    },
  },
  {
    id: "john-chrysostom",
    term: {
      en: "John Chrysostom (Saint)",
      fr: "Jean Chrysostome (Saint)",
      es: "Juan Crisóstomo (San)",
      de: "Johannes Chrysostomus (Heiliger)",
    },
    definition: {
      en: "Patriarch of Constantinople (c. 347-407), known as 'Golden Mouth' for his eloquence; Doctor of the Church.",
      fr: "Patriarche de Constantinople (v. 347-407), connu sous le nom de « Bouche d'or » pour son éloquence ; Docteur de l'Église.",
      es: "Patriarca de Constantinopla (c. 347-407), conocido como 'Boca de Oro' por su elocuencia; Doctor de la Iglesia.",
      de: "Patriarch von Konstantinopel (ca. 347-407), bekannt als 'Goldmund' wegen seiner Beredsamkeit; Kirchenlehrer.",
    },
  },
  {
    id: "john-damascus",
    term: {
      en: "John of Damascus (Saint)",
      fr: "Jean Damascène (Saint)",
      es: "Juan Damasceno (San)",
      de: "Johannes von Damaskus (Heiliger)",
    },
    definition: {
      en: "Monk and theologian (c. 675-749), considered the last of the Eastern Fathers; defended icons against iconoclasm.",
      fr: "Moine et théologien (v. 675-749), considéré comme le dernier des Pères orientaux ; a défendu les icônes contre l'iconoclasme.",
      es: "Monje y teólogo (c. 675-749), considerado el último de los Padres orientales; defendió los iconos contra la iconoclasia.",
      de: "Mönch und Theologe (ca. 675-749), gilt als der letzte der östlichen Väter; verteidigte Ikonen gegen den Ikonoklasmus.",
    },
  },
  {
    id: "justin-martyr",
    term: {
      en: "Justin Martyr (Saint)",
      fr: "Justin Martyr (Saint)",
      es: "Justino Mártir (San)",
      de: "Justin der Märtyrer (Heiliger)",
    },
    definition: {
      en: "Philosopher and martyr (c. 100-165) who wrote the 'First Apology', giving a detailed description of the early Mass.",
      fr: "Philosophe et martyr (v. 100-165) qui a écrit la « Première Apologie », donnant une description détaillée de la messe primitive.",
      es: "Filósofo y mártir (c. 100-165) que escribió la 'Primera Apología', dando una descripción detallada de la Misa primitiva.",
      de: "Philosoph und Märtyrer (ca. 100-165), der die 'Erste Apologie' schrieb und eine detaillierte Beschreibung der frühen Messe gab.",
    },
  },
  {
    id: "lactantius",
    term: {
      en: "Lactantius",
      fr: "Lactance",
      es: "Lactancio",
      de: "Laktanz",
    },
    definition: {
      en: "Christian rhetorician (c. 240-320), tutor to Constantine's son, known as the 'Christian Cicero' for his elegant style.",
      fr: "Rhétoricien chrétien (v. 240-320), tuteur du fils de Constantin, connu comme le « Cicéron chrétien » pour son style élégant.",
      es: "Retórico cristiano (c. 240-320), tutor del hijo de Constantino, conocido como el 'Cicerón cristiano' por su estilo elegante.",
      de: "Christlicher Rhetoriker (ca. 240-320), Erzieher von Konstantins Sohn, bekannt als der 'christliche Cicero' für seinen eleganten Stil.",
    },
  },
  {
    id: "leo-great",
    term: {
      en: "Leo the Great (Saint)",
      fr: "Léon le Grand (Saint)",
      es: "León Magno (San)",
      de: "Leo der Große (Heiliger)",
    },
    definition: {
      en: "Pope (c. 400-461) whose 'Tome' established the doctrine of Christ's two natures at the Council of Chalcedon.",
      fr: "Pape (v. 400-461) dont le « Tome » a établi la doctrine des deux natures du Christ au Concile de Chalcédoine.",
      es: "Papa (c. 400-461) cuyo 'Tomo' estableció la doctrina de las dos naturalezas de Cristo en el Concilio de Calcedonia.",
      de: "Papst (ca. 400-461), dessen 'Tomus' auf dem Konzil von Chalcedon die Lehre von den zwei Naturen Christi festlegte.",
    },
  },
  {
    id: "maximus-confessor",
    term: {
      en: "Maximus the Confessor (Saint)",
      fr: "Maxime le Confesseur (Saint)",
      es: "Máximo el Confesor (San)",
      de: "Maximus der Bekenner (Heiliger)",
    },
    definition: {
      en: "Monk and theologian (c. 580-662) who suffered martyrdom for defending Christ's two wills against Monothelitism.",
      fr: "Moine et théologien (v. 580-662) qui a subi le martyre pour avoir défendu les deux volontés du Christ contre le monothélisme.",
      es: "Monje y teólogo (c. 580-662) que sufrió el martirio por defender las dos voluntades de Cristo contra el monotelismo.",
      de: "Mönch und Theologe (ca. 580-662), der das Martyrium erlitt, weil er die zwei Willen Christi gegen den Monotheletismus verteidigte.",
    },
  },
  {
    id: "minucius-felix",
    term: {
      en: "Minucius Felix",
      fr: "Minucius Felix",
      es: "Minucio Félix",
      de: "Minucius Felix",
    },
    definition: {
      en: "Early Latin apologist (2nd/3rd century), author of 'Octavius', a dialogue defending Christianity against paganism.",
      fr: "Apologiste latin primitif (2ème/3ème siècle), auteur de « Octavius », un dialogue défendant le christianisme contre le paganisme.",
      es: "Apologista latino primitivo (siglo II/III), autor de 'Octavius', un diálogo que defiende el cristianismo contra el paganismo.",
      de: "Früher lateinischer Apologet (2./3. Jahrhundert), Autor von 'Octavius', einem Dialog, der das Christentum gegen das Heidentum verteidigt.",
    },
  },
  {
    id: "muratorian-fragment",
    term: {
      en: "Muratorian Fragment",
      fr: "Fragment de Muratori",
      es: "Fragmento Muratoriano",
      de: "Muratorisches Fragment",
    },
    definition: {
      en: "The oldest known list of New Testament books (c. 170 AD), showing the early recognition of the canon.",
      fr: "La plus ancienne liste connue de livres du Nouveau Testament (v. 170), montrant la reconnaissance précoce du canon.",
      es: "La lista más antigua conocida de libros del Nuevo Testamento (c. 170 d.C.), que muestra el reconocimiento temprano del canon.",
      de: "Die älteste bekannte Liste der neutestamentlichen Bücher (ca. 170 n. Chr.), die die frühe Anerkennung des Kanons zeigt.",
    },
  },
  {
    id: "nicene-fathers",
    term: {
      en: "Nicene Fathers",
      fr: "Pères de Nicée",
      es: "Padres de Nicea",
      de: "Väter von Nicäa",
    },
    definition: {
      en: "The 318 bishops who attended the First Council of Nicaea in 325 AD to define the divinity of Christ.",
      fr: "Les 318 évêques qui ont assisté au Premier Concile de Nicée en 325 pour définir la divinité du Christ.",
      es: "Los 318 obispos que asistieron al Primer Concilio de Nicea en 325 d.C. para definir la divinidad de Cristo.",
      de: "Die 318 Bischöfe, die am Ersten Konzil von Nicäa im Jahr 325 n. Chr. teilnahmen, um die Gottheit Christi zu definieren.",
    },
  },
  {
    id: "origen",
    term: {
      en: "Origen",
      fr: "Origène",
      es: "Orígenes",
      de: "Origenes",
    },
    definition: {
      en: "Prolific theologian and biblical scholar (c. 184-253); though some of his ideas were later condemned, he laid the groundwork for biblical exegesis.",
      fr: "Théologien prolifique et bibliste (v. 184-253) ; bien que certaines de ses idées aient été condamnées plus tard, il a jeté les bases de l'exégèse biblique.",
      es: "Teólogo prolífico y erudito bíblico (c. 184-253); aunque algunas de sus ideas fueron condenadas más tarde, sentó las bases para la exégesis bíblica.",
      de: "Fruchtbarer Theologe und Bibelgelehrter (ca. 184-253); obwohl einige seiner Ideen später verurteilt wurden, legte er den Grundstein für die biblische Exegese.",
    },
  },
  {
    id: "pachomius",
    term: {
      en: "Pachomius (Saint)",
      fr: "Pacôme (Saint)",
      es: "Pacomio (San)",
      de: "Pachomius (Heiliger)",
    },
    definition: {
      en: "Founder of cenobitic (communal) monasticism (c. 292-348) in Egypt.",
      fr: "Fondateur du monachisme cénobitique (communautaire) (v. 292-348) en Égypte.",
      es: "Fundador del monacato cenobítico (comunal) (c. 292-348) en Egipto.",
      de: "Begründer des zönobitischen (gemeinschaftlichen) Mönchtums (ca. 292-348) in Ägypten.",
    },
  },
  {
    id: "papias",
    term: {
      en: "Papias",
      fr: "Papias",
      es: "Papías",
      de: "Papias",
    },
    definition: {
      en: "Bishop of Hierapolis (c. 60-130), a hearer of John; his fragments provide early tradition on the authorship of the Gospels.",
      fr: "Évêque de Hiérapolis (v. 60-130), auditeur de Jean ; ses fragments fournissent une tradition ancienne sur la paternité des Évangiles.",
      es: "Obispo de Hierápolis (c. 60-130), oyente de Juan; sus fragmentos proporcionan tradición temprana sobre la autoría de los Evangelios.",
      de: "Bischof von Hierapolis (ca. 60-130), ein Hörer des Johannes; seine Fragmente liefern frühe Überlieferungen zur Verfasserschaft der Evangelien.",
    },
  },
  {
    id: "patrick",
    term: {
      en: "Patrick (Saint)",
      fr: "Patrick (Saint)",
      es: "Patricio (San)",
      de: "Patrick (Heiliger)",
    },
    definition: {
      en: "Missionary bishop (5th century) who converted Ireland to Christianity; wrote the 'Confessio'.",
      fr: "Évêque missionnaire (5ème siècle) qui a converti l'Irlande au christianisme ; a écrit la « Confessio ».",
      es: "Obispo misionero (siglo V) que convirtió a Irlanda al cristianismo; escribió la 'Confessio'.",
      de: "Missionsbischof (5. Jahrhundert), der Irland zum Christentum bekehrte; schrieb die 'Confessio'.",
    },
  },
  {
    id: "paulinus-nola",
    term: {
      en: "Paulinus of Nola (Saint)",
      fr: "Paulin de Nole (Saint)",
      es: "Paulino de Nola (San)",
      de: "Paulinus von Nola (Heiliger)",
    },
    definition: {
      en: "Roman senator turned monk and bishop (c. 354-431), known for his poetry and friendship with Augustine and Jerome.",
      fr: "Sénateur romain devenu moine et évêque (v. 354-431), connu pour sa poésie et son amitié avec Augustin et Jérôme.",
      es: "Senador romano convertido en monje y obispo (c. 354-431), conocido por su poesía y amistad con Agustín y Jerónimo.",
      de: "Römischer Senator, der Mönch und Bischof wurde (ca. 354-431), bekannt für seine Dichtung und Freundschaft mit Augustinus und Hieronymus.",
    },
  },
  {
    id: "polycarp",
    term: {
      en: "Polycarp (Saint)",
      fr: "Polycarpe (Saint)",
      es: "Policarpo (San)",
      de: "Polykarp (Heiliger)",
    },
    definition: {
      en: "Bishop of Smyrna and martyr (69-155), disciple of St. John; his 'Martyrdom' is the oldest authentic account of a Christian martyrdom.",
      fr: "Évêque de Smyrne et martyr (69-155), disciple de Saint Jean ; son « Martyre » est le plus ancien récit authentique d'un martyre chrétien.",
      es: "Obispo de Esmirna y mártir (69-155), discípulo de San Juan; su 'Martirio' es el relato auténtico más antiguo de un martirio cristiano.",
      de: "Bischof von Smyrna und Märtyrer (69-155), Schüler des hl. Johannes; sein 'Martyrium' ist der älteste authentische Bericht über ein christliches Martyrium.",
    },
  },
  {
    id: "shepherd-hermas",
    term: {
      en: "Shepherd of Hermas",
      fr: "Pasteur d'Hermas",
      es: "Pastor de Hermas",
      de: "Hirt des Hermas",
    },
    definition: {
      en: "An early Christian literary work (2nd century) valued by the early Church, focusing on penance and morality.",
      fr: "Une œuvre littéraire chrétienne primitive (2ème siècle) appréciée par l'Église primitive, se concentrant sur la pénitence et la moralité.",
      es: "Una obra literaria cristiana primitiva (siglo II) valorada por la Iglesia primitiva, centrada en la penitencia y la moralidad.",
      de: "Ein frühchristliches literarisches Werk (2. Jahrhundert), das von der frühen Kirche geschätzt wurde und sich auf Buße und Moral konzentriert.",
    },
  },
  {
    id: "tertullian",
    term: {
      en: "Tertullian",
      fr: "Tertullien",
      es: "Tertuliano",
      de: "Tertullian",
    },
    definition: {
      en: "Prolific early Christian author from Carthage (c. 155-240); coined the term 'Trinity'. Later joined the Montanist sect.",
      fr: "Auteur chrétien prolifique de Carthage (v. 155-240) ; a inventé le terme « Trinité ». A rejoint plus tard la secte montaniste.",
      es: "Prolífico autor cristiano de Cartago (c. 155-240); acuñó el término 'Trinidad'. Más tarde se unió a la secta montanista.",
      de: "Fruchtbarer frühchristlicher Autor aus Karthago (ca. 155-240); prägte den Begriff 'Trinität'. Schloss sich später der Montanisten-Sekte an.",
    },
  },
  {
    id: "theodore-studite",
    term: {
      en: "Theodore the Studite (Saint)",
      fr: "Théodore Studite (Saint)",
      es: "Teodoro Estudita (San)",
      de: "Theodor Studites (Heiliger)",
    },
    definition: {
      en: "Byzantine monk and abbot (759-826) who defended the veneration of icons and reformed monastic life.",
      fr: "Moine et abbé byzantin (759-826) qui a défendu la vénération des icônes et réformé la vie monastique.",
      es: "Monje y abad bizantino (759-826) que defendió la veneración de los iconos y reformó la vida monástica.",
      de: "Byzantinischer Mönch und Abt (759-826), der die Ikonenverehrung verteidigte und das monastische Leben reformierte.",
    },
  },
  {
    id: "vincent-lerins",
    term: {
      en: "Vincent of Lérins (Saint)",
      fr: "Vincent de Lérins (Saint)",
      es: "Vicente de Lerins (San)",
      de: "Vinzenz von Lérins (Heiliger)",
    },
    definition: {
      en: "Monk and theologian (d. 445) famous for the Vincentian Canon: 'What has been believed everywhere, always, and by all'.",
      fr: "Moine et théologien (m. 445) célèbre pour le Canon de Vincent : « Ce qui a été cru partout, toujours et par tous ».",
      es: "Monje y teólogo (m. 445) famoso por el Canon Vicenciano: 'Lo que ha sido creído en todas partes, siempre y por todos'.",
      de: "Mönch und Theologe (gest. 445), berühmt für den Kanon des Vinzenz: 'Was überall, immer und von allen geglaubt wurde'.",
    },
  },
  {
    id: "works-apostolic-fathers",
    term: {
      en: "Apostolic Fathers (Writings)",
      fr: "Pères apostoliques (Écrits)",
      es: "Padres Apostólicos (Escritos)",
      de: "Apostolische Väter (Schriften)",
    },
    definition: {
      en: "The collection of earliest Christian writings (e.g., Clement, Ignatius, Polycarp, Didache) originating from authors who knew the Apostles.",
      fr: "La collection des premiers écrits chrétiens (par ex. Clément, Ignace, Polycarpe, Didachè) provenant d'auteurs qui ont connu les Apôtres.",
      es: "La colección de los primeros escritos cristianos (p. ej., Clemente, Ignacio, Policarpo, Didaché) que provienen de autores que conocieron a los Apóstoles.",
      de: "Die Sammlung der frühesten christlichen Schriften (z. B. Clemens, Ignatius, Polykarp, Didache), die von Autoren stammen, die die Apostel kannten.",
    },
  },
  // --- Old Testament: Pentateuch ---
  {
    id: "book-genesis",
    term: {
      en: "Genesis",
      fr: "Genèse",
      es: "Génesis",
      de: "Genesis",
    },
    definition: {
      en: "The first book of the Bible, recounting the creation of the world, the fall of man, and the patriarchs (Abraham, Isaac, Jacob).",
      fr: "Le premier livre de la Bible, relatant la création du monde, la chute de l'homme et les patriarches (Abraham, Isaac, Jacob).",
      es: "El primer libro de la Biblia, que relata la creación del mundo, la caída del hombre y los patriarcas (Abraham, Isaac, Jacob).",
      de: "Das erste Buch der Bibel, das von der Erschaffung der Welt, dem Sündenfall und den Patriarchen (Abraham, Isaak, Jakob) erzählt.",
    },
  },
  {
    id: "book-exodus",
    term: {
      en: "Exodus",
      fr: "Exode",
      es: "Éxodo",
      de: "Exodus",
    },
    definition: {
      en: "The second book of the Bible, telling of the liberation of Israel from slavery in Egypt and the giving of the Law on Sinai.",
      fr: "Le deuxième livre de la Bible, racontant la libération d'Israël de l'esclavage en Égypte et le don de la Loi sur le Sinaï.",
      es: "El segundo libro de la Biblia, que narra la liberación de Israel de la esclavitud en Egipto y la entrega de la Ley en el Sinaí.",
      de: "Das zweite Buch der Bibel, das von der Befreiung Israels aus der Sklaverei in Ägypten und der Übergabe des Gesetzes am Sinai berichtet.",
    },
  },
  {
    id: "book-leviticus",
    term: {
      en: "Leviticus",
      fr: "Lévitique",
      es: "Levítico",
      de: "Levitikus",
    },
    definition: {
      en: "The third book of the Bible, containing laws regarding worship, sacrifices, and the holiness of the people of Israel.",
      fr: "Le troisième livre de la Bible, contenant les lois concernant le culte, les sacrifices et la sainteté du peuple d'Israël.",
      es: "El tercer libro de la Biblia, que contiene leyes sobre el culto, los sacrificios y la santidad del pueblo de Israel.",
      de: "Das dritte Buch der Bibel, das Gesetze über Gottesdienst, Opfer und die Heiligkeit des Volkes Israel enthält.",
    },
  },
  {
    id: "book-numbers",
    term: {
      en: "Numbers",
      fr: "Nombres",
      es: "Números",
      de: "Numeri",
    },
    definition: {
      en: "The fourth book of the Bible, detailing the census of the tribes and their forty years of wandering in the desert.",
      fr: "Le quatrième livre de la Bible, détaillant le recensement des tribus et leurs quarante années d'errance dans le désert.",
      es: "El cuarto libro de la Biblia, que detalla el censo de las tribus y sus cuarenta años de vagar por el desierto.",
      de: "Das vierte Buch der Bibel, das die Volkszählung der Stämme und ihre vierzigjährige Wanderung in der Wüste beschreibt.",
    },
  },
  {
    id: "book-deuteronomy",
    term: {
      en: "Deuteronomy",
      fr: "Deutéronome",
      es: "Deuteronomio",
      de: "Deuteronomium",
    },
    definition: {
      en: "The fifth book of the Bible, containing Moses' final speeches and a restatement of the Law before entering the Promised Land.",
      fr: "Le cinquième livre de la Bible, contenant les derniers discours de Moïse et une reformulation de la Loi avant l'entrée en Terre Promise.",
      es: "El quinto libro de la Biblia, que contiene los discursos finales de Moisés y una reformulación de la Ley antes de entrar a la Tierra Prometida.",
      de: "Das fünfte Buch der Bibel, das die Abschiedsreden von Moses und eine Wiederholung des Gesetzes vor dem Einzug in das Gelobte Land enthält.",
    },
  },

  // --- Old Testament: Historical Books ---
  {
    id: "book-joshua",
    term: {
      en: "Joshua",
      fr: "Josué",
      es: "Josué",
      de: "Josua",
    },
    definition: {
      en: "The book recounting the conquest of the Promised Land under the leadership of Joshua.",
      fr: "Le livre relatant la conquête de la Terre Promise sous la direction de Josué.",
      es: "El libro que relata la conquista de la Tierra Prometida bajo el liderazgo de Josué.",
      de: "Das Buch, das von der Eroberung des Gelobten Landes unter der Führung von Josua berichtet.",
    },
  },
  {
    id: "book-judges",
    term: {
      en: "Judges",
      fr: "Juges",
      es: "Jueces",
      de: "Richter",
    },
    definition: {
      en: "The book describing the period between the conquest and the monarchy, where leaders (judges) delivered Israel from oppression.",
      fr: "Le livre décrivant la période entre la conquête et la monarchie, où des chefs (juges) délivraient Israël de l'oppression.",
      es: "El libro que describe el período entre la conquista y la monarquía, donde líderes (jueces) libraban a Israel de la opresión.",
      de: "Das Buch, das die Zeit zwischen der Eroberung und der Monarchie beschreibt, in der Führer (Richter) Israel von Unterdrückung befreiten.",
    },
  },
  {
    id: "book-ruth",
    term: {
      en: "Ruth",
      fr: "Ruth",
      es: "Rut",
      de: "Rut",
    },
    definition: {
      en: "A short story of loyalty and providence concerning Ruth, a Moabite woman who became an ancestor of King David.",
      fr: "Une courte histoire de loyauté et de providence concernant Ruth, une femme moabite devenue ancêtre du roi David.",
      es: "Una historia corta de lealtad y providencia sobre Rut, una mujer moabita que se convirtió en antepasada del rey David.",
      de: "Eine kurze Geschichte von Treue und Vorsehung über Rut, eine Moabiterin, die eine Vorfahrin von König David wurde.",
    },
  },
  {
    id: "book-1-samuel",
    term: {
      en: "1 Samuel",
      fr: "1 Samuel",
      es: "1 Samuel",
      de: "1 Samuel",
    },
    definition: {
      en: "Historical book covering the life of Samuel, the reign of King Saul, and the rise of young David.",
      fr: "Livre historique couvrant la vie de Samuel, le règne du roi Saül et l'ascension du jeune David.",
      es: "Libro histórico que cubre la vida de Samuel, el reinado del rey Saúl y el ascenso del joven David.",
      de: "Historisches Buch über das Leben Samuels, die Herrschaft König Sauls und den Aufstieg des jungen David.",
    },
  },
  {
    id: "book-2-samuel",
    term: {
      en: "2 Samuel",
      fr: "2 Samuel",
      es: "2 Samuel",
      de: "2 Samuel",
    },
    definition: {
      en: "Historical book detailing the reign of King David, his triumphs, and his sins.",
      fr: "Livre historique détaillant le règne du roi David, ses triomphes et ses péchés.",
      es: "Libro histórico que detalla el reinado del rey David, sus triunfos y sus pecados.",
      de: "Historisches Buch, das die Herrschaft von König David, seine Triumphe und seine Sünden beschreibt.",
    },
  },
  {
    id: "book-1-kings",
    term: {
      en: "1 Kings",
      fr: "1 Rois",
      es: "1 Reyes",
      de: "1 Könige",
    },
    definition: {
      en: "Book narrating the reign of Solomon, the building of the Temple, and the division of the kingdom into Israel and Judah.",
      fr: "Livre racontant le règne de Salomon, la construction du Temple et la division du royaume en Israël et Juda.",
      es: "Libro que narra el reinado de Salomón, la construcción del Templo y la división del reino en Israel y Judá.",
      de: "Buch, das von der Herrschaft Salomos, dem Bau des Tempels und der Teilung des Reiches in Israel und Juda erzählt.",
    },
  },
  {
    id: "book-2-kings",
    term: {
      en: "2 Kings",
      fr: "2 Rois",
      es: "2 Reyes",
      de: "2 Könige",
    },
    definition: {
      en: "Book chronicling the history of the divided kingdoms until the destruction of Israel by Assyria and Judah by Babylon.",
      fr: "Livre relatant l'histoire des royaumes divisés jusqu'à la destruction d'Israël par l'Assyrie et de Juda par Babylone.",
      es: "Libro que narra la historia de los reinos divididos hasta la destrucción de Israel por Asiria y de Judá por Babilonia.",
      de: "Buch, das die Geschichte der geteilten Königreiche bis zur Zerstörung Israels durch Assyrien und Judas durch Babylon aufzeichnet.",
    },
  },
  {
    id: "book-1-chronicles",
    term: {
      en: "1 Chronicles",
      fr: "1 Chroniques",
      es: "1 Crónicas",
      de: "1 Chronik",
    },
    definition: {
      en: "A retelling of Israel's history focusing on the genealogies and the reign of David from a priestly perspective.",
      fr: "Une relecture de l'histoire d'Israël se concentrant sur les généalogies et le règne de David d'un point de vue sacerdotal.",
      es: "Un recuento de la historia de Israel centrado en las genealogías y el reinado de David desde una perspectiva sacerdotal.",
      de: "Eine Nacherzählung der Geschichte Israels mit Schwerpunkt auf den Genealogien und der Herrschaft Davids aus priesterlicher Sicht.",
    },
  },
  {
    id: "book-2-chronicles",
    term: {
      en: "2 Chronicles",
      fr: "2 Chroniques",
      es: "2 Crónicas",
      de: "2 Chronik",
    },
    definition: {
      en: "Continuation of the history focusing on Solomon, the Temple, and the kings of Judah up to the Exile.",
      fr: "Suite de l'histoire se concentrant sur Salomon, le Temple et les rois de Juda jusqu'à l'Exil.",
      es: "Continuación de la historia centrada en Salomón, el Templo y los reyes de Judá hasta el Exilio.",
      de: "Fortsetzung der Geschichte mit Schwerpunkt auf Salomo, dem Tempel und den Königen von Juda bis zum Exil.",
    },
  },
  {
    id: "book-ezra",
    term: {
      en: "Ezra",
      fr: "Esdras",
      es: "Esdras",
      de: "Esra",
    },
    definition: {
      en: "Book describing the return of the Jews from Babylonian exile and the rebuilding of the Temple.",
      fr: "Livre décrivant le retour des Juifs de l'exil babylonien et la reconstruction du Temple.",
      es: "Libro que describe el regreso de los judíos del exilio babilónico y la reconstrucción del Templo.",
      de: "Buch, das die Rückkehr der Juden aus dem babylonischen Exil und den Wiederaufbau des Tempels beschreibt.",
    },
  },
  {
    id: "book-nehemiah",
    term: {
      en: "Nehemiah",
      fr: "Néhémie",
      es: "Nehemías",
      de: "Nehemia",
    },
    definition: {
      en: "Book recounting the rebuilding of Jerusalem's walls and the religious reforms after the Exile.",
      fr: "Livre relatant la reconstruction des murs de Jérusalem et les réformes religieuses après l'Exil.",
      es: "Libro que relata la reconstrucción de los muros de Jerusalén y las reformas religiosas después del Exilio.",
      de: "Buch, das vom Wiederaufbau der Mauern Jerusalems und den religiösen Reformen nach dem Exil berichtet.",
    },
  },
  {
    id: "book-tobit",
    term: {
      en: "Tobit",
      fr: "Tobie",
      es: "Tobías",
      de: "Tobit",
    },
    definition: {
      en: "A deuterocanonical book telling the story of a righteous Israelite, his son Tobias, and the angel Raphael.",
      fr: "Un livre deutérocanonique racontant l'histoire d'un Israélite juste, de son fils Tobie et de l'ange Raphaël.",
      es: "Un libro deuterocanónico que cuenta la historia de un israelita justo, su hijo Tobías y el ángel Rafael.",
      de: "Ein deuterokanonisches Buch, das die Geschichte eines gerechten Israeliten, seines Sohnes Tobias und des Engels Raphael erzählt.",
    },
  },
  {
    id: "book-judith",
    term: {
      en: "Judith",
      fr: "Judith",
      es: "Judit",
      de: "Judit",
    },
    definition: {
      en: "A deuterocanonical book about a pious widow who saves Israel by beheading the Assyrian general Holofernes.",
      fr: "Un livre deutérocanonique sur une veuve pieuse qui sauve Israël en décapitant le général assyrien Holopherne.",
      es: "Un libro deuterocanónico sobre una viuda piadosa que salva a Israel decapitando al general asirio Holofernes.",
      de: "Ein deuterokanonisches Buch über eine fromme Witwe, die Israel rettet, indem sie den assyrischen General Holofernes enthauptet.",
    },
  },
  {
    id: "book-esther",
    term: {
      en: "Esther",
      fr: "Esther",
      es: "Ester",
      de: "Ester",
    },
    definition: {
      en: "The story of a Jewish queen of Persia who saves her people from a plot to exterminate them.",
      fr: "L'histoire d'une reine juive de Perse qui sauve son peuple d'un complot visant à l'exterminer.",
      es: "La historia de una reina judía de Persia que salva a su pueblo de un complot para exterminarlo.",
      de: "Die Geschichte einer jüdischen Königin von Persien, die ihr Volk vor einem Vernichtungskomplott rettet.",
    },
  },
  {
    id: "book-1-maccabees",
    term: {
      en: "1 Maccabees",
      fr: "1 Maccabées",
      es: "1 Macabeos",
      de: "1 Makkabäer",
    },
    definition: {
      en: "A deuterocanonical history of the Jewish revolt against the Seleucid Empire to protect their religion.",
      fr: "Une histoire deutérocanonique de la révolte juive contre l'Empire séleucide pour protéger leur religion.",
      es: "Una historia deuterocanónica de la revuelta judía contra el Imperio Seleúcida para proteger su religión.",
      de: "Eine deuterokanonische Geschichte des jüdischen Aufstands gegen das Seleukidenreich zum Schutz ihrer Religion.",
    },
  },
  {
    id: "book-2-maccabees",
    term: {
      en: "2 Maccabees",
      fr: "2 Maccabées",
      es: "2 Macabeos",
      de: "2 Makkabäer",
    },
    definition: {
      en: "A deuterocanonical book focusing on the religious meaning of the Maccabean revolt, including the concept of prayer for the dead.",
      fr: "Un livre deutérocanonique se concentrant sur la signification religieuse de la révolte des Maccabées, incluant le concept de prière pour les morts.",
      es: "Un libro deuterocanónico centrado en el significado religioso de la revuelta de los Macabeos, incluyendo el concepto de oración por los muertos.",
      de: "Ein deuterokanonisches Buch, das sich auf die religiöse Bedeutung des Makkabäeraufstands konzentriert, einschließlich des Konzepts des Gebets für die Toten.",
    },
  },

  // --- Old Testament: Wisdom Books ---
  {
    id: "book-job",
    term: {
      en: "Job",
      fr: "Job",
      es: "Job",
      de: "Ijob (Hiob)",
    },
    definition: {
      en: "A wisdom book exploring the mystery of suffering and God's justice through the story of a righteous man who loses everything.",
      fr: "Un livre de sagesse explorant le mystère de la souffrance et de la justice de Dieu à travers l'histoire d'un homme juste qui perd tout.",
      es: "Un libro de sabiduría que explora el misterio del sufrimiento y la justicia de Dios a través de la historia de un hombre justo que lo pierde todo.",
      de: "Ein Weisheitsbuch, das das Geheimnis des Leidens und der Gerechtigkeit Gottes anhand der Geschichte eines gerechten Mannes, der alles verliert, erforscht.",
    },
  },
  {
    id: "book-psalms",
    term: {
      en: "Psalms",
      fr: "Psaumes",
      es: "Salmos",
      de: "Psalmen",
    },
    definition: {
      en: "A collection of 150 hymns and prayers expressing the full range of human emotion before God.",
      fr: "Une collection de 150 hymnes et prières exprimant toute la gamme des émotions humaines devant Dieu.",
      es: "Una colección de 150 himnos y oraciones que expresan toda la gama de emociones humanas ante Dios.",
      de: "Eine Sammlung von 150 Hymnen und Gebeten, die die ganze Bandbreite menschlicher Emotionen vor Gott ausdrücken.",
    },
  },
  {
    id: "book-proverbs",
    term: {
      en: "Proverbs",
      fr: "Proverbes",
      es: "Proverbios",
      de: "Sprüche",
    },
    definition: {
      en: "A collection of moral and religious sayings and instructions for living a wise life.",
      fr: "Une collection de dictons moraux et religieux et d'instructions pour mener une vie sage.",
      es: "Una colección de dichos morales y religiosos e instrucciones para vivir una vida sabia.",
      de: "Eine Sammlung von moralischen und religiösen Sprüchen und Anweisungen für ein weises Leben.",
    },
  },
  {
    id: "book-ecclesiastes",
    term: {
      en: "Ecclesiastes (Qoheleth)",
      fr: "Ecclésiaste (Qohelet)",
      es: "Eclesiastés (Qohélet)",
      de: "Kohelet (Prediger)",
    },
    definition: {
      en: "A philosophical reflection on the vanity of earthly things and the importance of fearing God.",
      fr: "Une réflexion philosophique sur la vanité des choses terrestres et l'importance de craindre Dieu.",
      es: "Una reflexión filosófica sobre la vanidad de las cosas terrenales y la importancia de temer a Dios.",
      de: "Eine philosophische Reflexion über die Nichtigkeit irdischer Dinge und die Wichtigkeit der Gottesfurcht.",
    },
  },
  {
    id: "book-song-of-songs",
    term: {
      en: "Song of Songs",
      fr: "Cantique des Cantiques",
      es: "Cantar de los Cantares",
      de: "Hohelied",
    },
    definition: {
      en: "A poetic book celebrating human love, often interpreted allegorically as the love between God and Israel or Christ and the Church.",
      fr: "Un livre poétique célébrant l'amour humain, souvent interprété allégoriquement comme l'amour entre Dieu et Israël ou le Christ et l'Église.",
      es: "Un libro poético que celebra el amor humano, a menudo interpretado alegóricamente como el amor entre Dios e Israel o Cristo y la Iglesia.",
      de: "Ein poetisches Buch, das die menschliche Liebe feiert, oft allegorisch als Liebe zwischen Gott und Israel oder Christus und der Kirche gedeutet.",
    },
  },
  {
    id: "book-wisdom",
    term: {
      en: "Wisdom of Solomon",
      fr: "Sagesse de Salomon",
      es: "Sabiduría",
      de: "Weisheit Salomos",
    },
    definition: {
      en: "A deuterocanonical book praising divine wisdom and contrasting the destiny of the righteous with the wicked.",
      fr: "Un livre deutérocanonique louant la sagesse divine et contrastant le destin des justes avec celui des méchants.",
      es: "Un libro deuterocanónico que alaba la sabiduría divina y contrasta el destino de los justos con el de los malvados.",
      de: "Ein deuterokanonisches Buch, das die göttliche Weisheit preist und das Schicksal der Gerechten mit dem der Gottlosen kontrastiert.",
    },
  },
  {
    id: "book-sirach",
    term: {
      en: "Sirach (Ecclesiasticus)",
      fr: "Siracide (Ecclésiastique)",
      es: "Eclesiástico (Sirácida)",
      de: "Jesus Sirach",
    },
    definition: {
      en: "A deuterocanonical wisdom book containing ethical teachings and instructions on duties towards God and others.",
      fr: "Un livre de sagesse deutérocanonique contenant des enseignements éthiques et des instructions sur les devoirs envers Dieu et les autres.",
      es: "Un libro de sabiduría deuterocanónico que contiene enseñanzas éticas e instrucciones sobre los deberes hacia Dios y los demás.",
      de: "Ein deuterokanonisches Weisheitsbuch, das ethische Lehren und Anweisungen zu Pflichten gegenüber Gott und anderen enthält.",
    },
  },

  // --- Old Testament: Prophets ---
  {
    id: "book-isaiah",
    term: {
      en: "Isaiah",
      fr: "Isaïe",
      es: "Isaías",
      de: "Jesaja",
    },
    definition: {
      en: "A major prophet containing prophecies about the Messiah (the Suffering Servant) and the restoration of Israel.",
      fr: "Un prophète majeur contenant des prophéties sur le Messie (le Serviteur souffrant) et la restauration d'Israël.",
      es: "Un profeta mayor que contiene profecías sobre el Mesías (el Siervo Sufriente) y la restauración de Israel.",
      de: "Ein großer Prophet, der Prophezeiungen über den Messias (den leidenden Gottesknecht) und die Wiederherstellung Israels enthält.",
    },
  },
  {
    id: "book-jeremiah",
    term: {
      en: "Jeremiah",
      fr: "Jérémie",
      es: "Jeremías",
      de: "Jeremia",
    },
    definition: {
      en: "A major prophet who warned Judah of the coming Babylonian exile and promised a New Covenant.",
      fr: "Un prophète majeur qui a averti Juda de l'exil babylonien imminent et a promis une Nouvelle Alliance.",
      es: "Un profeta mayor que advirtió a Judá del inminente exilio babilónico y prometió una Nueva Alianza.",
      de: "Ein großer Prophet, der Juda vor dem kommenden babylonischen Exil warnte und einen Neuen Bund verhieß.",
    },
  },
  {
    id: "book-lamentations",
    term: {
      en: "Lamentations",
      fr: "Lamentations",
      es: "Lamentaciones",
      de: "Klagelieder",
    },
    definition: {
      en: "A collection of poetic laments for the destruction of Jerusalem.",
      fr: "Une collection de lamentations poétiques pour la destruction de Jérusalem.",
      es: "Una colección de lamentos poéticos por la destrucción de Jerusalén.",
      de: "Eine Sammlung poetischer Klagelieder über die Zerstörung Jerusalems.",
    },
  },
  {
    id: "book-baruch",
    term: {
      en: "Baruch",
      fr: "Baruch",
      es: "Baruc",
      de: "Baruch",
    },
    definition: {
      en: "A deuterocanonical book attributed to Jeremiah's scribe, containing prayers of repentance and hope for the exiles.",
      fr: "Un livre deutérocanonique attribué au scribe de Jérémie, contenant des prières de repentance et d'espoir pour les exilés.",
      es: "Un libro deuterocanónico atribuido al escriba de Jeremías, que contiene oraciones de arrepentimiento y esperanza para los exiliados.",
      de: "Ein deuterokanonisches Buch, das Jeremias Schreiber zugeschrieben wird und Gebete der Reue und Hoffnung für die Verbannten enthält.",
    },
  },
  {
    id: "book-ezekiel",
    term: {
      en: "Ezekiel",
      fr: "Ézéchiel",
      es: "Ezequiel",
      de: "Ezechiel",
    },
    definition: {
      en: "A major prophet of the Exile, known for his visions (e.g., the dry bones) and emphasis on the Temple and God's glory.",
      fr: "Un prophète majeur de l'Exil, connu pour ses visions (par ex., les ossements desséchés) et son accent sur le Temple et la gloire de Dieu.",
      es: "Un profeta mayor del Exilio, conocido por sus visiones (p. ej., los huesos secos) y su énfasis en el Templo y la gloria de Dios.",
      de: "Ein großer Prophet des Exils, bekannt für seine Visionen (z. B. die toten Gebeine) und die Betonung des Tempels und der Herrlichkeit Gottes.",
    },
  },
  {
    id: "book-daniel",
    term: {
      en: "Daniel",
      fr: "Daniel",
      es: "Daniel",
      de: "Daniel",
    },
    definition: {
      en: "A book combining stories of faith under persecution (the lions' den) with apocalyptic visions of future empires and the Son of Man.",
      fr: "Un livre combinant des histoires de foi sous la persécution (la fosse aux lions) avec des visions apocalyptiques des empires futurs et du Fils de l'homme.",
      es: "Un libro que combina historias de fe bajo persecución (el foso de los leones) con visiones apocalípticas de imperios futuros y el Hijo del Hombre.",
      de: "Ein Buch, das Geschichten des Glaubens unter Verfolgung (die Löwengrube) mit apokalyptischen Visionen zukünftiger Reiche und des Menschensohns verbindet.",
    },
  },
  {
    id: "book-hosea",
    term: {
      en: "Hosea",
      fr: "Osée",
      es: "Oseas",
      de: "Hosea",
    },
    definition: {
      en: "A minor prophet who used his unfaithful marriage as a metaphor for God's relationship with unfaithful Israel.",
      fr: "Un petit prophète qui a utilisé son mariage infidèle comme métaphore de la relation de Dieu avec l'Israël infidèle.",
      es: "Un profeta menor que usó su matrimonio infiel como metáfora de la relación de Dios con el Israel infiel.",
      de: "Ein kleiner Prophet, der seine untreue Ehe als Metapher für Gottes Beziehung zum untreuen Israel verwendete.",
    },
  },
  {
    id: "book-joel",
    term: {
      en: "Joel",
      fr: "Joël",
      es: "Joel",
      de: "Joel",
    },
    definition: {
      en: "A minor prophet who prophesied about the 'Day of the Lord' and the outpouring of the Spirit.",
      fr: "Un petit prophète qui a prophétisé sur le 'Jour du Seigneur' et l'effusion de l'Esprit.",
      es: "Un profeta menor que profetizó sobre el 'Día del Señor' y el derramamiento del Espíritu.",
      de: "Ein kleiner Prophet, der über den 'Tag des Herrn' und die Ausgießung des Geistes prophezeite.",
    },
  },
  {
    id: "book-amos",
    term: {
      en: "Amos",
      fr: "Amos",
      es: "Amós",
      de: "Amos",
    },
    definition: {
      en: "A minor prophet known for his strong condemnation of social injustice and empty religious rituals.",
      fr: "Un petit prophète connu pour sa forte condamnation de l'injustice sociale et des rituels religieux vides.",
      es: "Un profeta menor conocido por su fuerte condena de la injusticia social y los rituales religiosos vacíos.",
      de: "Ein kleiner Prophet, bekannt für seine scharfe Verurteilung sozialer Ungerechtigkeit und hohler religiöser Rituale.",
    },
  },
  {
    id: "book-obadiah",
    term: {
      en: "Obadiah",
      fr: "Abdias",
      es: "Abdías",
      de: "Obadja",
    },
    definition: {
      en: "The shortest book of the Old Testament, prophesying judgment against Edom.",
      fr: "Le livre le plus court de l'Ancien Testament, prophétisant le jugement contre Édom.",
      es: "El libro más corto del Antiguo Testamento, que profetiza el juicio contra Edom.",
      de: "Das kürzeste Buch des Alten Testaments, das Gericht gegen Edom prophezeit.",
    },
  },
  {
    id: "book-jonah",
    term: {
      en: "Jonah",
      fr: "Jonas",
      es: "Jonás",
      de: "Jona",
    },
    definition: {
      en: "The story of a reluctant prophet swallowed by a great fish, teaching the universality of God's mercy.",
      fr: "L'histoire d'un prophète réticent avalé par un grand poisson, enseignant l'universalité de la miséricorde de Dieu.",
      es: "La historia de un profeta reacio tragado por un gran pez, que enseña la universalidad de la misericordia de Dios.",
      de: "Die Geschichte eines widerwilligen Propheten, der von einem großen Fisch verschluckt wurde, was die Universalität der Barmherzigkeit Gottes lehrt.",
    },
  },
  {
    id: "book-micah",
    term: {
      en: "Micah",
      fr: "Michée",
      es: "Miqueas",
      de: "Micha",
    },
    definition: {
      en: "A minor prophet who prophesied that the Messiah would be born in Bethlehem.",
      fr: "Un petit prophète qui a prophétisé que le Messie naîtrait à Bethléem.",
      es: "Un profeta menor que profetizó que el Mesías nacería en Belén.",
      de: "Ein kleiner Prophet, der prophezeite, dass der Messias in Bethlehem geboren würde.",
    },
  },
  {
    id: "book-nahum",
    term: {
      en: "Nahum",
      fr: "Nahum",
      es: "Nahúm",
      de: "Nahum",
    },
    definition: {
      en: "A prophecy concerning the fall of Nineveh, the capital of Assyria.",
      fr: "Une prophétie concernant la chute de Ninive, la capitale de l'Assyrie.",
      es: "Una profecía sobre la caída de Nínive, la capital de Asiria.",
      de: "Eine Prophezeiung über den Fall von Ninive, der Hauptstadt Assyriens.",
    },
  },
  {
    id: "book-habakkuk",
    term: {
      en: "Habakkuk",
      fr: "Habacuc",
      es: "Habacuc",
      de: "Habakuk",
    },
    definition: {
      en: "A dialogue between the prophet and God questioning divine justice, ending with a hymn of trust.",
      fr: "Un dialogue entre le prophète et Dieu questionnant la justice divine, se terminant par un hymne de confiance.",
      es: "Un diálogo entre el profeta y Dios cuestionando la justicia divina, terminando con un himno de confianza.",
      de: "Ein Dialog zwischen dem Propheten und Gott, der die göttliche Gerechtigkeit hinterfragt und mit einem Hymnus des Vertrauens endet.",
    },
  },
  {
    id: "book-zephaniah",
    term: {
      en: "Zephaniah",
      fr: "Sophonie",
      es: "Sofonías",
      de: "Zefanja",
    },
    definition: {
      en: "A prophecy about the 'Day of the Lord' and the purification of a faithful remnant.",
      fr: "Une prophétie sur le 'Jour du Seigneur' et la purification d'un reste fidèle.",
      es: "Una profecía sobre el 'Día del Señor' y la purificación de un resto fiel.",
      de: "Eine Prophezeiung über den 'Tag des Herrn' und die Läuterung eines treuen Restes.",
    },
  },
  {
    id: "book-haggai",
    term: {
      en: "Haggai",
      fr: "Aggée",
      es: "Hageo",
      de: "Haggai",
    },
    definition: {
      en: "A post-exilic prophet who urged the people to rebuild the Temple.",
      fr: "Un prophète post-exilique qui a exhorté le peuple à reconstruire le Temple.",
      es: "Un profeta post-exílico que instó al pueblo a reconstruir el Templo.",
      de: "Ein nachexilischer Prophet, der das Volk drängte, den Tempel wiederaufzubauen.",
    },
  },
  {
    id: "book-zechariah",
    term: {
      en: "Zechariah",
      fr: "Zacharie",
      es: "Zacarías",
      de: "Sacharja",
    },
    definition: {
      en: "A post-exilic prophet with apocalyptic visions of the Messiah's humble entry into Jerusalem on a donkey.",
      fr: "Un prophète post-exilique avec des visions apocalyptiques de l'entrée humble du Messie à Jérusalem sur un âne.",
      es: "Un profeta post-exílico con visiones apocalípticas de la entrada humilde del Mesías en Jerusalén sobre un asno.",
      de: "Ein nachexilischer Prophet mit apokalyptischen Visionen vom demütigen Einzug des Messias in Jerusalem auf einem Esel.",
    },
  },
  {
    id: "book-malachi",
    term: {
      en: "Malachi",
      fr: "Malachie",
      es: "Malaquías",
      de: "Maleachi",
    },
    definition: {
      en: "The final book of the Old Testament, predicting the coming of Elijah (John the Baptist) before the Lord.",
      fr: "Le dernier livre de l'Ancien Testament, prédisant la venue d'Élie (Jean-Baptiste) devant le Seigneur.",
      es: "El último libro del Antiguo Testamento, que predice la venida de Elías (Juan el Bautista) antes que el Señor.",
      de: "Das letzte Buch des Alten Testaments, das das Kommen des Elija (Johannes der Täufer) vor dem Herrn vorhersagt.",
    },
  },

  // --- New Testament: Gospels ---
  {
    id: "book-matthew",
    term: {
      en: "Matthew",
      fr: "Matthieu",
      es: "Mateo",
      de: "Matthäus",
    },
    definition: {
      en: "The first Gospel, written for a Jewish audience, presenting Jesus as the fulfillment of Old Testament prophecy and the new Moses.",
      fr: "Le premier Évangile, écrit pour un public juif, présentant Jésus comme l'accomplissement des prophéties de l'Ancien Testament et le nouveau Moïse.",
      es: "El primer Evangelio, escrito para una audiencia judía, presentando a Jesús como el cumplimiento de la profecía del Antiguo Testamento y el nuevo Moisés.",
      de: "Das erste Evangelium, geschrieben für ein jüdisches Publikum, das Jesus als Erfüllung der alttestamentlichen Prophezeiungen und als neuen Mose darstellt.",
    },
  },
  {
    id: "book-mark",
    term: {
      en: "Mark",
      fr: "Marc",
      es: "Marcos",
      de: "Markus",
    },
    definition: {
      en: "The shortest and likely earliest Gospel, emphasizing the suffering servant aspect of Jesus and his actions.",
      fr: "L'Évangile le plus court et probablement le plus ancien, soulignant l'aspect de serviteur souffrant de Jésus et ses actions.",
      es: "El Evangelio más corto y probablemente el más antiguo, que enfatiza el aspecto de siervo sufriente de Jesús y sus acciones.",
      de: "Das kürzeste und wahrscheinlich älteste Evangelium, das den Aspekt des leidenden Gottesknechts Jesu und seine Taten betont.",
    },
  },
  {
    id: "book-luke",
    term: {
      en: "Luke",
      fr: "Luc",
      es: "Lucas",
      de: "Lukas",
    },
    definition: {
      en: "The Gospel written by a physician, emphasizing God's mercy, the role of the Holy Spirit, and Jesus' care for the poor and marginalized.",
      fr: "L'Évangile écrit par un médecin, soulignant la miséricorde de Dieu, le rôle du Saint-Esprit et le soin de Jésus pour les pauvres et les marginaux.",
      es: "El Evangelio escrito por un médico, que enfatiza la misericordia de Dios, el papel del Espíritu Santo y el cuidado de Jesús por los pobres y marginados.",
      de: "Das von einem Arzt geschriebene Evangelium, das Gottes Barmherzigkeit, die Rolle des Heiligen Geistes und Jesu Sorge für die Armen und Ausgegrenzten betont.",
    },
  },
  {
    id: "book-john",
    term: {
      en: "John",
      fr: "Jean",
      es: "Juan",
      de: "Johannes",
    },
    definition: {
      en: "The fourth Gospel, highly theological and symbolic, focusing on the divinity of Jesus as the Eternal Word (Logos).",
      fr: "Le quatrième Évangile, hautement théologique et symbolique, se concentrant sur la divinité de Jésus en tant que Verbe éternel (Logos).",
      es: "El cuarto Evangelio, altamente teológico y simbólico, centrado en la divinidad de Jesús como el Verbo Eterno (Logos).",
      de: "Das vierte Evangelium, hochtheologisch und symbolisch, das sich auf die Gottheit Jesu als das Ewige Wort (Logos) konzentriert.",
    },
  },

  // --- New Testament: History ---
  {
    id: "book-acts",
    term: {
      en: "Acts of the Apostles",
      fr: "Actes des Apôtres",
      es: "Hechos de los Apóstoles",
      de: "Apostelgeschichte",
    },
    definition: {
      en: "The sequel to Luke's Gospel, recounting the descent of the Holy Spirit at Pentecost and the spread of the early Church.",
      fr: "La suite de l'Évangile de Luc, relatant la descente du Saint-Esprit à la Pentecôte et l'expansion de l'Église primitive.",
      es: "La secuela del Evangelio de Lucas, que relata el descenso del Espíritu Santo en Pentecostés y la expansión de la Iglesia primitiva.",
      de: "Die Fortsetzung des Lukasevangeliums, die von der Herabkunft des Heiligen Geistes zu Pfingsten und der Ausbreitung der frühen Kirche berichtet.",
    },
  },

  // --- New Testament: Pauline Epistles ---
  {
    id: "book-romans",
    term: {
      en: "Romans",
      fr: "Romains",
      es: "Romanos",
      de: "Römer",
    },
    definition: {
      en: "Paul's longest letter, a systematic theological exposition of justification by faith and the universality of salvation.",
      fr: "La plus longue lettre de Paul, une exposition théologique systématique de la justification par la foi et de l'universalité du salut.",
      es: "La carta más larga de Pablo, una exposición teológica sistemática de la justificación por la fe y la universalidad de la salvación.",
      de: "Paulus' längster Brief, eine systematische theologische Darlegung der Rechtfertigung durch den Glauben und der Universalität des Heils.",
    },
  },
  {
    id: "book-1-corinthians",
    term: {
      en: "1 Corinthians",
      fr: "1 Corinthiens",
      es: "1 Corintios",
      de: "1 Korinther",
    },
    definition: {
      en: "A letter addressing problems in the church at Corinth, including divisions, immorality, and questions about spiritual gifts and the Resurrection.",
      fr: "Une lettre traitant des problèmes de l'église de Corinthe, incluant les divisions, l'immoralité et les questions sur les dons spirituels et la Résurrection.",
      es: "Una carta que aborda los problemas en la iglesia de Corinto, incluyendo divisiones, inmoralidad y preguntas sobre los dones espirituales y la Resurrección.",
      de: "Ein Brief, der Probleme in der Gemeinde von Korinth anspricht, einschließlich Spaltungen, Unmoral und Fragen zu geistlichen Gaben und der Auferstehung.",
    },
  },
  {
    id: "book-2-corinthians",
    term: {
      en: "2 Corinthians",
      fr: "2 Corinthiens",
      es: "2 Corintios",
      de: "2 Korinther",
    },
    definition: {
      en: "A deeply personal letter in which Paul defends his apostolic authority and speaks of his sufferings and the 'thorn in the flesh'.",
      fr: "Une lettre profondément personnelle dans laquelle Paul défend son autorité apostolique et parle de ses souffrances et de l'« écharde dans la chair ».",
      es: "Una carta profundamente personal en la que Pablo defiende su autoridad apostólica y habla de sus sufrimientos y la 'espina en la carne'.",
      de: "Ein zutiefst persönlicher Brief, in dem Paulus seine apostolische Autorität verteidigt und von seinen Leiden und dem 'Stachel im Fleisch' spricht.",
    },
  },
  {
    id: "book-galatians",
    term: {
      en: "Galatians",
      fr: "Galates",
      es: "Gálatas",
      de: "Galater",
    },
    definition: {
      en: "A passionate defense of Christian freedom from the Mosaic Law, emphasizing that salvation comes through Christ, not the Law.",
      fr: "Une défense passionnée de la liberté chrétienne vis-à-vis de la Loi mosaïque, soulignant que le salut vient par le Christ, et non par la Loi.",
      es: "Una defensa apasionada de la libertad cristiana de la Ley Mosaica, enfatizando que la salvación viene a través de Cristo, no de la Ley.",
      de: "Eine leidenschaftliche Verteidigung der christlichen Freiheit vom mosaischen Gesetz, die betont, dass das Heil durch Christus kommt, nicht durch das Gesetz.",
    },
  },
  {
    id: "book-ephesians",
    term: {
      en: "Ephesians",
      fr: "Éphésiens",
      es: "Efesios",
      de: "Epheser",
    },
    definition: {
      en: "A letter meditating on the Church as the Body of Christ and the mystery of God's plan to unite all things in Christ.",
      fr: "Une lettre méditant sur l'Église comme Corps du Christ et le mystère du plan de Dieu pour réunir toutes choses en Christ.",
      es: "Una carta que medita sobre la Iglesia como Cuerpo de Cristo y el misterio del plan de Dios para unir todas las cosas en Cristo.",
      de: "Ein Brief, der über die Kirche als Leib Christi und das Geheimnis von Gottes Plan meditiert, alles in Christus zu vereinen.",
    },
  },
  {
    id: "book-philippians",
    term: {
      en: "Philippians",
      fr: "Philippiens",
      es: "Filipenses",
      de: "Philipper",
    },
    definition: {
      en: "A letter of joy and gratitude written from prison, containing the famous 'Christ Hymn' about Jesus' humility (Kenosis).",
      fr: "Une lettre de joie et de gratitude écrite depuis la prison, contenant le célèbre « Hymne au Christ » sur l'humilité de Jésus (Kénose).",
      es: "Una carta de alegría y gratitud escrita desde la prisión, que contiene el famoso 'Himno a Cristo' sobre la humildad de Jesús (Kénosis).",
      de: "Ein Brief der Freude und Dankbarkeit, aus dem Gefängnis geschrieben, der den berühmten 'Christushymnus' über Jesu Demut (Kenosis) enthält.",
    },
  },
  {
    id: "book-colossians",
    term: {
      en: "Colossians",
      fr: "Colossiens",
      es: "Colosenses",
      de: "Kolosser",
    },
    definition: {
      en: "A letter emphasizing the supremacy and sufficiency of Christ over all powers and philosophies.",
      fr: "Une lettre soulignant la suprématie et la suffisance du Christ sur toutes les puissances et philosophies.",
      es: "Una carta que enfatiza la supremacía y suficiencia de Cristo sobre todos los poderes y filosofías.",
      de: "Ein Brief, der die Vorrangstellung und Genügsamkeit Christi über alle Mächte und Philosophien betont.",
    },
  },
  {
    id: "book-1-thessalonians",
    term: {
      en: "1 Thessalonians",
      fr: "1 Thessaloniciens",
      es: "1 Tesalonicenses",
      de: "1 Thessalonicher",
    },
    definition: {
      en: "One of Paul's earliest letters, encouraging new believers and addressing questions about the Second Coming of Christ.",
      fr: "L'une des premières lettres de Paul, encourageant les nouveaux croyants et abordant des questions sur le Second Avènement du Christ.",
      es: "Una de las primeras cartas de Pablo, animando a los nuevos creyentes y abordando preguntas sobre la Segunda Venida de Cristo.",
      de: "Einer der frühesten Briefe von Paulus, der neue Gläubige ermutigt und Fragen zur Wiederkunft Christi behandelt.",
    },
  },
  {
    id: "book-2-thessalonians",
    term: {
      en: "2 Thessalonians",
      fr: "2 Thessaloniciens",
      es: "2 Tesalonicenses",
      de: "2 Thessalonicher",
    },
    definition: {
      en: "A follow-up letter correcting misunderstandings that the Day of the Lord had already arrived.",
      fr: "Une lettre de suivi corrigeant les malentendus selon lesquels le Jour du Seigneur était déjà arrivé.",
      es: "Una carta de seguimiento que corrige los malentendidos de que el Día del Señor ya había llegado.",
      de: "Ein Folgebrief, der Missverständnisse korrigiert, dass der Tag des Herrn bereits gekommen sei.",
    },
  },
  {
    id: "book-1-timothy",
    term: {
      en: "1 Timothy",
      fr: "1 Timothée",
      es: "1 Timoteo",
      de: "1 Timotheus",
    },
    definition: {
      en: "A pastoral letter giving instructions on church order, leadership (bishops/deacons), and guarding against false teaching.",
      fr: "Une lettre pastorale donnant des instructions sur l'ordre de l'église, la direction (évêques/diacres) et la garde contre les faux enseignements.",
      es: "Una carta pastoral que da instrucciones sobre el orden de la iglesia, el liderazgo (obispos/diáconos) y la protección contra falsas enseñanzas.",
      de: "Ein Pastoralbrief, der Anweisungen zur Gemeindeordnung, Leitung (Bischöfe/Diakone) und zur Abwehr falscher Lehren gibt.",
    },
  },
  {
    id: "book-2-timothy",
    term: {
      en: "2 Timothy",
      fr: "2 Timothée",
      es: "2 Timoteo",
      de: "2 Timotheus",
    },
    definition: {
      en: "Paul's final letter, written from prison before his death, encouraging Timothy to remain faithful to the Gospel.",
      fr: "La dernière lettre de Paul, écrite depuis la prison avant sa mort, encourageant Timothée à rester fidèle à l'Évangile.",
      es: "La última carta de Pablo, escrita desde la prisión antes de su muerte, animando a Timoteo a permanecer fiel al Evangelio.",
      de: "Paulus' letzter Brief, geschrieben aus dem Gefängnis vor seinem Tod, der Timotheus ermutigt, dem Evangelium treu zu bleiben.",
    },
  },
  {
    id: "book-titus",
    term: {
      en: "Titus",
      fr: "Tite",
      es: "Tito",
      de: "Titus",
    },
    definition: {
      en: "A pastoral letter to Titus on Crete, advising him on appointing elders and teaching sound doctrine.",
      fr: "Une lettre pastorale à Tite en Crète, le conseillant sur la nomination des anciens et l'enseignement de la saine doctrine.",
      es: "Una carta pastoral a Tito en Creta, aconsejándole sobre el nombramiento de ancianos y la enseñanza de la sana doctrina.",
      de: "Ein Pastoralbrief an Titus auf Kreta, der ihn bei der Ernennung von Ältesten und der Lehre der gesunden Doktrin berät.",
    },
  },
  {
    id: "book-philemon",
    term: {
      en: "Philemon",
      fr: "Philémon",
      es: "Filemón",
      de: "Philemon",
    },
    definition: {
      en: "A short personal letter asking Philemon to forgive and welcome back his runaway slave, Onesimus, as a brother in Christ.",
      fr: "Une courte lettre personnelle demandant à Philémon de pardonner et d'accueillir à nouveau son esclave en fuite, Onésime, comme un frère en Christ.",
      es: "Una breve carta personal pidiendo a Filemón que perdone y reciba de nuevo a su esclavo fugitivo, Onésimo, como un hermano en Cristo.",
      de: "Ein kurzer persönlicher Brief, der Philemon bittet, seinem entlaufenen Sklaven Onesimus zu vergeben und ihn als Bruder in Christus wieder aufzunehmen.",
    },
  },
  {
    id: "book-hebrews",
    term: {
      en: "Hebrews",
      fr: "Hébreux",
      es: "Hebreos",
      de: "Hebräer",
    },
    definition: {
      en: "A letter (or homily) demonstrating that Jesus is the supreme High Priest and the fulfillment of the Old Covenant sacrifices.",
      fr: "Une lettre (ou homélie) démontrant que Jésus est le Grand Prêtre suprême et l'accomplissement des sacrifices de l'Ancienne Alliance.",
      es: "Una carta (u homilía) que demuestra que Jesús es el Sumo Sacerdote supremo y el cumplimiento de los sacrificios de la Antigua Alianza.",
      de: "Ein Brief (oder eine Homilie), der zeigt, dass Jesus der höchste Hohepriester und die Erfüllung der Opfer des Alten Bundes ist.",
    },
  },

  // --- New Testament: Catholic Epistles ---
  {
    id: "book-james",
    term: {
      en: "James",
      fr: "Jacques",
      es: "Santiago",
      de: "Jakobus",
    },
    definition: {
      en: "A practical letter emphasizing that faith without works is dead and calling for patience and control of the tongue.",
      fr: "Une lettre pratique soulignant que la foi sans les œuvres est morte et appelant à la patience et au contrôle de la langue.",
      es: "Una carta práctica que enfatiza que la fe sin obras está muerta y llama a la paciencia y al control de la lengua.",
      de: "Ein praktischer Brief, der betont, dass der Glaube ohne Werke tot ist, und zu Geduld und Beherrschung der Zunge aufruft.",
    },
  },
  {
    id: "book-1-peter",
    term: {
      en: "1 Peter",
      fr: "1 Pierre",
      es: "1 Pedro",
      de: "1 Petrus",
    },
    definition: {
      en: "A letter of encouragement to Christians suffering persecution, reminding them of their living hope in Christ.",
      fr: "Une lettre d'encouragement aux chrétiens souffrant de persécution, leur rappelant leur espérance vivante en Christ.",
      es: "Una carta de aliento a los cristianos que sufren persecución, recordándoles su esperanza viva en Cristo.",
      de: "Ein Ermutigungsbrief an Christen, die unter Verfolgung leiden, der sie an ihre lebendige Hoffnung in Christus erinnert.",
    },
  },
  {
    id: "book-2-peter",
    term: {
      en: "2 Peter",
      fr: "2 Pierre",
      es: "2 Pedro",
      de: "2 Petrus",
    },
    definition: {
      en: "A letter warning against false teachers and affirming the certainty of Christ's return.",
      fr: "Une lettre mettant en garde contre les faux enseignants et affirmant la certitude du retour du Christ.",
      es: "Una carta que advierte contra los falsos maestros y afirma la certeza del regreso de Cristo.",
      de: "Ein Brief, der vor falschen Lehrern warnt und die Gewissheit der Wiederkunft Christi bekräftigt.",
    },
  },
  {
    id: "book-1-john",
    term: {
      en: "1 John",
      fr: "1 Jean",
      es: "1 Juan",
      de: "1 Johannes",
    },
    definition: {
      en: "A letter emphasizing God as Love, the assurance of salvation, and the command to love one another.",
      fr: "Une lettre soulignant que Dieu est Amour, l'assurance du salut et le commandement de s'aimer les uns les autres.",
      es: "Una carta que enfatiza a Dios como Amor, la seguridad de la salvación y el mandamiento de amarse unos a otros.",
      de: "Ein Brief, der Gott als Liebe, die Gewissheit des Heils und das Gebot, einander zu lieben, betont.",
    },
  },
  {
    id: "book-2-john",
    term: {
      en: "2 John",
      fr: "2 Jean",
      es: "2 Juan",
      de: "2 Johannes",
    },
    definition: {
      en: "A brief letter to 'the elect lady,' warning against deceivers who deny the incarnation.",
      fr: "Une brève lettre à « l'dame élue », mettant en garde contre les séducteurs qui nient l'incarnation.",
      es: "Una breve carta a 'la señora elegida', advirtiendo contra los engañadores que niegan la encarnación.",
      de: "Ein kurzer Brief an die 'auserwählte Herrin', der vor Verführern warnt, die die Menschwerdung leugnen.",
    },
  },
  {
    id: "book-3-john",
    term: {
      en: "3 John",
      fr: "3 Jean",
      es: "3 Juan",
      de: "3 Johannes",
    },
    definition: {
      en: "A personal letter to Gaius, commending his hospitality to traveling teachers.",
      fr: "Une lettre personnelle à Gaïus, louant son hospitalité envers les enseignants itinérants.",
      es: "Una carta personal a Gayo, elogiando su hospitalidad hacia los maestros itinerantes.",
      de: "Ein persönlicher Brief an Gajus, der seine Gastfreundschaft gegenüber reisenden Lehrern lobt.",
    },
  },
  {
    id: "book-jude",
    term: {
      en: "Jude",
      fr: "Jude",
      es: "Judas",
      de: "Judas",
    },
    definition: {
      en: "A letter exhorting believers to contend for the faith and warning against intruders who abuse God's grace.",
      fr: "Une lettre exhortant les croyants à combattre pour la foi et mettant en garde contre les intrus qui abusent de la grâce de Dieu.",
      es: "Una carta que exhorta a los creyentes a luchar por la fe y advierte contra los intrusos que abusan de la gracia de Dios.",
      de: "Ein Brief, der die Gläubigen ermahnt, für den Glauben zu kämpfen, und vor Eindringlingen warnt, die Gottes Gnade missbrauchen.",
    },
  },

  // --- New Testament: Prophecy ---
  {
    id: "book-revelation",
    term: {
      en: "Revelation (Apocalypse)",
      fr: "Apocalypse",
      es: "Apocalipsis",
      de: "Offenbarung",
    },
    definition: {
      en: "The final book of the Bible, containing visions of the end times, the ultimate victory of Christ, and the New Jerusalem.",
      fr: "Le dernier livre de la Bible, contenant des visions de la fin des temps, de la victoire ultime du Christ et de la Nouvelle Jérusalem.",
      es: "El último libro de la Biblia, que contiene visiones de los últimos tiempos, la victoria final de Cristo y la Nueva Jerusalén.",
      de: "Das letzte Buch der Bibel, das Visionen der Endzeit, des endgültigen Sieges Christi und des Neuen Jerusalems enthält.",
    },
  },

  // --- Doctors of the Church & Great Theologians ---
  {
    id: "thomas-aquinas",
    term: {
      en: "Thomas Aquinas (Saint)",
      fr: "Thomas d'Aquin (Saint)",
      es: "Tomás de Aquino (Santo)",
      de: "Thomas von Aquin (Heiliger)",
    },
    definition: {
      en: "The 'Angelic Doctor' (1225-1274); a Dominican friar whose 'Summa Theologiae' is the pinnacle of scholastic theology and a primary reference for Catholic doctrine.",
      fr: "Le « Docteur Angélique » (1225-1274) ; un frère dominicain dont la « Somme Théologique » est le sommet de la théologie scolastique et une référence primaire pour la doctrine catholique.",
      es: "El 'Doctor Angélico' (1225-1274); un fraile dominico cuya 'Suma Teológica' es la cumbre de la teología escolástica y una referencia principal para la doctrina católica.",
      de: "Der 'Angelicus Doctor' (1225-1274); ein Dominikanermönch, dessen 'Summa Theologiae' der Höhepunkt der scholastischen Theologie und eine Hauptreferenz für die katholische Lehre ist.",
    },
  },
  {
    id: "john-henry-newman",
    term: {
      en: "Newman, John Henry (Saint)",
      fr: "Newman, John Henry (Saint)",
      es: "Newman, John Henry (Santo)",
      de: "Newman, John Henry (Heiliger)",
    },
    definition: {
      en: "Convert from Anglicanism and Cardinal (1801-1890); known for his 'Essay on the Development of Christian Doctrine' and 'Apologia Pro Vita Sua'.",
      fr: "Converti de l'anglicanisme et cardinal (1801-1890) ; connu pour son « Essai sur le développement de la doctrine chrétienne » et « Apologia Pro Vita Sua ».",
      es: "Converso del anglicanismo y cardenal (1801-1890); conocido por su 'Ensayo sobre el desarrollo de la doctrina cristiana' y 'Apologia Pro Vita Sua'.",
      de: "Konvertit vom Anglikanismus und Kardinal (1801-1890); bekannt für seinen 'Essay über die Entwicklung der christlichen Lehre' und 'Apologia Pro Vita Sua'.",
    },
  },
  {
    id: "albert-great",
    term: {
      en: "Albert the Great (Saint)",
      fr: "Albert le Grand (Saint)",
      es: "Alberto Magno (San)",
      de: "Albertus Magnus (Heiliger)",
    },
    definition: {
      en: "Dominican bishop, scientist, and philosopher (c. 1200-1280); teacher of St. Thomas Aquinas and patron saint of scientists.",
      fr: "Évêque dominicain, scientifique et philosophe (v. 1200-1280) ; maître de Saint Thomas d'Aquin et saint patron des scientifiques.",
      es: "Obispo dominico, científico y filósofo (c. 1200-1280); maestro de Santo Tomás de Aquino y santo patrón de los científicos.",
      de: "Dominikaner, Bischof, Naturforscher und Philosoph (ca. 1200-1280); Lehrer des hl. Thomas von Aquin und Schutzpatron der Naturwissenschaftler.",
    },
  },
  {
    id: "alphonsus-liguori",
    term: {
      en: "Alphonsus Liguori (Saint)",
      fr: "Alphonse de Liguori (Saint)",
      es: "Alfonso María de Ligorio (San)",
      de: "Alfons von Liguori (Heiliger)",
    },
    definition: {
      en: "Founder of the Redemptorists (1696-1787) and Doctor of the Church; a master of moral theology and devotion to Mary.",
      fr: "Fondateur des Rédemptoristes (1696-1787) et Docteur de l'Église ; un maître de la théologie morale et de la dévotion à Marie.",
      es: "Fundador de los Redentoristas (1696-1787) y Doctor de la Iglesia; un maestro de la teología moral y la devoción a María.",
      de: "Gründer der Redemptoristen (1696-1787) und Kirchenlehrer; ein Meister der Moraltheologie und der Marienverehrung.",
    },
  },
  {
    id: "anselm",
    term: {
      en: "Anselm of Canterbury (Saint)",
      fr: "Anselme de Cantorbéry (Saint)",
      es: "Anselmo de Canterbury (San)",
      de: "Anselm von Canterbury (Heiliger)",
    },
    definition: {
      en: "Benedictine monk and bishop (1033-1109); known as the 'Father of Scholasticism' and for his ontological argument for God's existence.",
      fr: "Moine bénédictin et évêque (1033-1109) ; connu comme le « Père de la scolastique » et pour son argument ontologique de l'existence de Dieu.",
      es: "Monje benedictino y obispo (1033-1109); conocido como el 'Padre de la Escolástica' y por su argumento ontológico de la existencia de Dios.",
      de: "Benediktinermönch und Bischof (1033-1109); bekannt als 'Vater der Scholastik' und für seinen ontologischen Gottesbeweis.",
    },
  },
  {
    id: "anthony-padua",
    term: {
      en: "Anthony of Padua (Saint)",
      fr: "Antoine de Padoue (Saint)",
      es: "Antonio de Padua (San)",
      de: "Antonius von Padua (Heiliger)",
    },
    definition: {
      en: "Franciscan preacher (1195-1231) and Doctor of the Church; known for his miracles and profound knowledge of Scripture.",
      fr: "Prédicateur franciscain (1195-1231) et Docteur de l'Église ; connu pour ses miracles et sa profonde connaissance de l'Écriture.",
      es: "Predicador franciscano (1195-1231) y Doctor de la Iglesia; conocido por sus milagros y profundo conocimiento de la Escritura.",
      de: "Franziskanerprediger (1195-1231) und Kirchenlehrer; bekannt für seine Wunder und seine tiefe Kenntnis der Schrift.",
    },
  },
  {
    id: "bellarmine",
    term: {
      en: "Bellarmine, Robert (Saint)",
      fr: "Bellarmine, Robert (Saint)",
      es: "Belarmino, Roberto (San)",
      de: "Bellarmin, Robert (Heiliger)",
    },
    definition: {
      en: "Jesuit Cardinal (1542-1621) and Doctor of the Church; a key figure in the Counter-Reformation and apologist against Protestantism.",
      fr: "Cardinal jésuite (1542-1621) et Docteur de l'Église ; une figure clé de la Contre-Réforme et apologiste contre le protestantisme.",
      es: "Cardenal jesuita (1542-1621) y Doctor de la Iglesia; una figura clave en la Contrarreforma y apologista contra el protestantismo.",
      de: "Jesuitenkardinal (1542-1621) und Kirchenlehrer; eine Schlüsselfigur der Gegenreformation und Apologet gegen den Protestantismus.",
    },
  },
  {
    id: "bernard-clairvaux",
    term: {
      en: "Bernard of Clairvaux (Saint)",
      fr: "Bernard de Clairvaux (Saint)",
      es: "Bernardo de Claraval (San)",
      de: "Bernhard von Clairvaux (Heiliger)",
    },
    definition: {
      en: "Cistercian abbot (1090-1153) and Doctor of the Church; known as the 'Mellifluous Doctor' for his eloquent writings on love and Mary.",
      fr: "Abbé cistercien (1090-1153) et Docteur de l'Église ; connu sous le nom de « Docteur Melliflu » pour ses écrits éloquents sur l'amour et Marie.",
      es: "Abad cisterciense (1090-1153) y Doctor de la Iglesia; conocido como el 'Doctor Melifluo' por sus elocuentes escritos sobre el amor y María.",
      de: "Zisterzienserabt (1090-1153) und Kirchenlehrer; bekannt als der 'honigfließende Lehrer' (Doctor Mellifluus) für seine eloquenten Schriften über die Liebe und Maria.",
    },
  },
  {
    id: "bonaventure",
    term: {
      en: "Bonaventure (Saint)",
      fr: "Bonaventure (Saint)",
      es: "Buenaventura (San)",
      de: "Bonaventura (Heiliger)",
    },
    definition: {
      en: "Franciscan theologian and Cardinal (1221-1274); the 'Seraphic Doctor' who synthesized faith and mystical theology.",
      fr: "Théologien franciscain et cardinal (1221-1274) ; le « Docteur Séraphique » qui a synthétisé la foi et la théologie mystique.",
      es: "Teólogo franciscano y cardenal (1221-1274); el 'Doctor Seráfico' que sintetizó la fe y la teología mística.",
      de: "Franziskanertheologe und Kardinal (1221-1274); der 'Seraphische Lehrer', der Glauben und mystische Theologie synthetisierte.",
    },
  },
  {
    id: "catherine-siena",
    term: {
      en: "Catherine of Siena (Saint)",
      fr: "Catherine de Sienne (Sainte)",
      es: "Catalina de Siena (Santa)",
      de: "Katharina von Siena (Heilige)",
    },
    definition: {
      en: "Dominican tertiary and mystic (1347-1380); Doctor of the Church who influenced the return of the Pope from Avignon to Rome.",
      fr: "Tertiaire dominicaine et mystique (1347-1380) ; Docteur de l'Église qui a influencé le retour du Pape d'Avignon à Rome.",
      es: "Terciaria dominica y mística (1347-1380); Doctora de la Iglesia que influyó en el regreso del Papa de Aviñón a Roma.",
      de: "Dominikaner-Terziarin und Mystikerin (1347-1380); Kirchenlehrerin, die die Rückkehr des Papstes von Avignon nach Rom beeinflusste.",
    },
  },
  {
    id: "chesterton",
    term: {
      en: "Chesterton, G.K.",
      fr: "Chesterton, G.K.",
      es: "Chesterton, G.K.",
      de: "Chesterton, G.K.",
    },
    definition: {
      en: "English writer and apologist (1874-1936); known for 'Orthodoxy' and 'The Everlasting Man', influencing C.S. Lewis.",
      fr: "Écrivain et apologiste anglais (1874-1936) ; connu pour « Orthodoxie » et « L'Homme éternel », ayant influencé C.S. Lewis.",
      es: "Escritor y apologista inglés (1874-1936); conocido por 'Ortodoxia' y 'El Hombre Eterno', influyendo en C.S. Lewis.",
      de: "Englischer Schriftsteller und Apologet (1874-1936); bekannt für 'Orthodoxie' und 'Der unsterbliche Mensch', der C.S. Lewis beeinflusste.",
    },
  },
  {
    id: "cyril-methodius",
    term: {
      en: "Cyril and Methodius (Saints)",
      fr: "Cyrille et Méthode (Saints)",
      es: "Cirilo y Metodio (Santos)",
      de: "Kyrill und Method (Heilige)",
    },
    definition: {
      en: "The 'Apostles to the Slavs' (9th century); brothers who translated the liturgy into Slavonic and patron saints of Europe.",
      fr: "Les « Apôtres des Slaves » (9ème siècle) ; frères qui ont traduit la liturgie en slavon et saints patrons de l'Europe.",
      es: "Los 'Apóstoles de los Eslavos' (siglo IX); hermanos que tradujeron la liturgia al eslavo y santos patronos de Europa.",
      de: "Die 'Apostel der Slawen' (9. Jahrhundert); Brüder, die die Liturgie ins Slawische übersetzten und Schutzpatrone Europas sind.",
    },
  },
  {
    id: "faustina",
    term: {
      en: "Faustina Kowalska (Saint)",
      fr: "Faustine Kowalska (Sainte)",
      es: "Faustina Kowalska (Santa)",
      de: "Faustina Kowalska (Heilige)",
    },
    definition: {
      en: "Polish nun (1905-1938) known as the 'Apostle of Divine Mercy'; her diary recorded revelations from Jesus about His mercy.",
      fr: "Religieuse polonaise (1905-1938) connue comme l'« Apôtre de la Miséricorde Divine » ; son journal a consigné des révélations de Jésus sur Sa miséricorde.",
      es: "Monja polaca (1905-1938) conocida como la 'Apóstol de la Divina Misericordia'; su diario registró revelaciones de Jesús sobre Su misericordia.",
      de: "Polnische Nonne (1905-1938), bekannt als 'Apostelin der Barmherzigkeit Gottes'; ihr Tagebuch zeichnete Offenbarungen Jesu über Seine Barmherzigkeit auf.",
    },
  },
  {
    id: "francis-sales",
    term: {
      en: "Francis de Sales (Saint)",
      fr: "François de Sales (Saint)",
      es: "Francisco de Sales (San)",
      de: "Franz von Sales (Heiliger)",
    },
    definition: {
      en: "Bishop of Geneva (1567-1622) and Doctor of the Church; author of 'Introduction to the Devout Life', emphasizing holiness for laypeople.",
      fr: "Évêque de Genève (1567-1622) et Docteur de l'Église ; auteur de « l'Introduction à la vie dévote », soulignant la sainteté pour les laïcs.",
      es: "Obispo de Ginebra (1567-1622) y Doctor de la Iglesia; autor de 'Introducción a la vida devota', enfatizando la santidad para los laicos.",
      de: "Bischof von Genf (1567-1622) und Kirchenlehrer; Autor der 'Anleitung zum frommen Leben', der die Heiligkeit für Laien betont.",
    },
  },
  {
    id: "francis-assisi",
    term: {
      en: "Francis of Assisi (Saint)",
      fr: "François d'Assise (Saint)",
      es: "Francisco de Asís (San)",
      de: "Franz von Assisi (Heiliger)",
    },
    definition: {
      en: "Founder of the Franciscan Order (1181-1226); known for his love of poverty, peace, and creation. Received the stigmata.",
      fr: "Fondateur de l'Ordre Franciscain (1181-1226) ; connu pour son amour de la pauvreté, de la paix et de la création. A reçu les stigmates.",
      es: "Fundador de la Orden Franciscana (1181-1226); conocido por su amor a la pobreza, la paz y la creación. Recibió los estigmas.",
      de: "Gründer des Franziskanerordens (1181-1226); bekannt für seine Liebe zu Armut, Frieden und Schöpfung. Empfing die Stigmata.",
    },
  },
  {
    id: "francis-xavier",
    term: {
      en: "Francis Xavier (Saint)",
      fr: "François Xavier (Saint)",
      es: "Francisco Javier (San)",
      de: "Franz Xaver (Heiliger)",
    },
    definition: {
      en: "Jesuit missionary (1506-1552) who evangelized India and Japan; co-founder of the Jesuits with St. Ignatius.",
      fr: "Missionnaire jésuite (1506-1552) qui a évangélisé l'Inde et le Japon ; co-fondateur des Jésuites avec Saint Ignace.",
      es: "Misionero jesuita (1506-1552) que evangelizó la India y Japón; cofundador de los jesuitas con San Ignacio.",
      de: "Jesuitenmissionar (1506-1552), der Indien und Japan evangelisierte; Mitbegründer der Jesuiten mit dem hl. Ignatius.",
    },
  },
  {
    id: "gregory-narek",
    term: {
      en: "Gregory of Narek (Saint)",
      fr: "Grégoire de Narek (Saint)",
      es: "Gregorio de Narek (San)",
      de: "Gregor von Narek (Heiliger)",
    },
    definition: {
      en: "Armenian monk and poet (c. 950-1003); declared a Doctor of the Church in 2015 for his mystical writings.",
      fr: "Moine et poète arménien (v. 950-1003) ; déclaré Docteur de l'Église en 2015 pour ses écrits mystiques.",
      es: "Monje y poeta armenio (c. 950-1003); declarado Doctor de la Iglesia en 2015 por sus escritos místicos.",
      de: "Armenischer Mönch und Dichter (ca. 950-1003); 2015 zum Kirchenlehrer erklärt für seine mystischen Schriften.",
    },
  },
  {
    id: "hildegard-bingen",
    term: {
      en: "Hildegard of Bingen (Saint)",
      fr: "Hildegarde de Bingen (Sainte)",
      es: "Hildegarda de Bingen (Santa)",
      de: "Hildegard von Bingen (Heilige)",
    },
    definition: {
      en: "Benedictine abbess, mystic, and composer (1098-1179); declared a Doctor of the Church in 2012.",
      fr: "Abbesse bénédictine, mystique et compositrice (1098-1179) ; déclarée Docteur de l'Église en 2012.",
      es: "Abadesa benedictina, mística y compositora (1098-1179); declarada Doctora de la Iglesia en 2012.",
      de: "Benediktiner-Äbtissin, Mystikerin und Komponistin (1098-1179); 2012 zur Kirchenlehrerin erklärt.",
    },
  },
  {
    id: "ignatius-loyola",
    term: {
      en: "Ignatius of Loyola (Saint)",
      fr: "Ignace de Loyola (Saint)",
      es: "Ignacio de Loyola (San)",
      de: "Ignatius von Loyola (Heiliger)",
    },
    definition: {
      en: "Founder of the Society of Jesus (Jesuits) (1491-1556); author of the 'Spiritual Exercises'.",
      fr: "Fondateur de la Compagnie de Jésus (Jésuites) (1491-1556) ; auteur des « Exercices Spirituels ».",
      es: "Fundador de la Compañía de Jesús (Jesuitas) (1491-1556); autor de los 'Ejercicios Espirituales'.",
      de: "Gründer der Gesellschaft Jesu (Jesuiten) (1491-1556); Autor der 'Geistlichen Übungen'.",
    },
  },
  {
    id: "john-avila",
    term: {
      en: "John of Avila (Saint)",
      fr: "Jean d'Avila (Saint)",
      es: "Juan de Ávila (San)",
      de: "Johannes von Avila (Heiliger)",
    },
    definition: {
      en: "Spanish priest and mystic (1499-1569); declared a Doctor of the Church in 2012; a reformer of the clergy.",
      fr: "Prêtre et mystique espagnol (1499-1569) ; déclaré Docteur de l'Église en 2012 ; un réformateur du clergé.",
      es: "Sacerdote y místico español (1499-1569); declarado Doctor de la Iglesia en 2012; un reformador del clero.",
      de: "Spanischer Priester und Mystiker (1499-1569); 2012 zum Kirchenlehrer erklärt; ein Reformer des Klerus.",
    },
  },
  {
    id: "john-cross",
    term: {
      en: "John of the Cross (Saint)",
      fr: "Jean de la Croix (Saint)",
      es: "Juan de la Cruz (San)",
      de: "Johannes vom Kreuz (Heiliger)",
    },
    definition: {
      en: "Carmelite mystic and Doctor of the Church (1542-1591); author of 'Dark Night of the Soul', friend of Teresa of Avila.",
      fr: "Mystique carme et Docteur de l'Église (1542-1591) ; auteur de « La Nuit obscure de l'âme », ami de Thérèse d'Avila.",
      es: "Místico carmelita y Doctor de la Iglesia (1542-1591); autor de 'Noche oscura del alma', amigo de Teresa de Ávila.",
      de: "Karmelitermystiker und Kirchenlehrer (1542-1591); Autor der 'Dunklen Nacht der Seele', Freund von Teresa von Avila.",
    },
  },
  {
    id: "josemaria-escriva",
    term: {
      en: "Josemaría Escrivá (Saint)",
      fr: "Josémaria Escrivá (Saint)",
      es: "Josemaría Escrivá (San)",
      de: "Josemaría Escrivá (Heiliger)",
    },
    definition: {
      en: "Spanish priest (1902-1975) and founder of Opus Dei; taught the universal call to holiness in everyday life.",
      fr: "Prêtre espagnol (1902-1975) et fondateur de l'Opus Dei ; a enseigné l'appel universel à la sainteté dans la vie quotidienne.",
      es: "Sacerdote español (1902-1975) y fundador del Opus Dei; enseñó la llamada universal a la santidad en la vida ordinaria.",
      de: "Spanischer Priester (1902-1975) und Gründer des Opus Dei; lehrte den allgemeinen Ruf zur Heiligkeit im Alltag.",
    },
  },
  {
    id: "juan-diego",
    term: {
      en: "Juan Diego (Saint)",
      fr: "Juan Diego (Saint)",
      es: "Juan Diego (San)",
      de: "Juan Diego (Heiliger)",
    },
    definition: {
      en: "Indigenous Mexican peasant (1474-1548) to whom Our Lady of Guadalupe appeared in 1531.",
      fr: "Paysan indigène mexicain (1474-1548) à qui Notre-Dame de Guadalupe est apparue en 1531.",
      es: "Campesino indígena mexicano (1474-1548) a quien se le apareció Nuestra Señora de Guadalupe en 1531.",
      de: "Einheimischer mexikanischer Bauer (1474-1548), dem 1531 Unsere Liebe Frau von Guadalupe erschien.",
    },
  },
  {
    id: "junipero-serra",
    term: {
      en: "Junípero Serra (Saint)",
      fr: "Junípero Serra (Saint)",
      es: "Junípero Serra (San)",
      de: "Junípero Serra (Heiliger)",
    },
    definition: {
      en: "Franciscan friar (1713-1784) who founded the California missions, evangelizing the western United States.",
      fr: "Frère franciscain (1713-1784) qui a fondé les missions de Californie, évangélisant l'ouest des États-Unis.",
      es: "Fraile franciscano (1713-1784) que fundó las misiones de California, evangelizando el oeste de los Estados Unidos.",
      de: "Franziskanermönch (1713-1784), der die kalifornischen Missionen gründete und den Westen der Vereinigten Staaten evangelisierte.",
    },
  },
  {
    id: "kateri-tekakwitha",
    term: {
      en: "Kateri Tekakwitha (Saint)",
      fr: "Kateri Tekakwitha (Sainte)",
      es: "Kateri Tekakwitha (Santa)",
      de: "Kateri Tekakwitha (Heilige)",
    },
    definition: {
      en: "The 'Lily of the Mohawks' (1656-1680); the first Native American saint, known for her chastity and piety.",
      fr: "Le « Lys des Mohawks » (1656-1680) ; la première sainte amérindienne, connue pour sa chasteté et sa piété.",
      es: "El 'Lirio de los Mohawks' (1656-1680); la primera santa nativa americana, conocida por su castidad y piedad.",
      de: "Die 'Lilie der Mohawks' (1656-1680); die erste indianische Heilige, bekannt für ihre Keuschheit und Frömmigkeit.",
    },
  },
  {
    id: "lawrence-brindisi",
    term: {
      en: "Lawrence of Brindisi (Saint)",
      fr: "Laurent de Brindisi (Saint)",
      es: "Lorenzo de Brindis (San)",
      de: "Laurentius von Brindisi (Heiliger)",
    },
    definition: {
      en: "Capuchin friar (1559-1619) and Doctor of the Church; a linguist and preacher who led the spiritual defense against the Ottomans.",
      fr: "Frère capucin (1559-1619) et Docteur de l'Église ; un linguiste et prédicateur qui a dirigé la défense spirituelle contre les Ottomans.",
      es: "Fraile capuchino (1559-1619) y Doctor de la Iglesia; lingüista y predicador que lideró la defensa espiritual contra los otomanos.",
      de: "Kapuzinermönch (1559-1619) und Kirchenlehrer; Linguist und Prediger, der die geistliche Verteidigung gegen die Osmanen anführte.",
    },
  },
  {
    id: "louis-montfort",
    term: {
      en: "Louis de Montfort (Saint)",
      fr: "Louis-Marie Grignion de Montfort (Saint)",
      es: "Luis María Grignion de Montfort (San)",
      de: "Ludwig Maria Grignion von Montfort (Heiliger)",
    },
    definition: {
      en: "French priest (1673-1716) known for his devotion to the Blessed Virgin Mary and book 'True Devotion to Mary'.",
      fr: "Prêtre français (1673-1716) connu pour sa dévotion à la Sainte Vierge Marie et son livre « Traité de la vraie dévotion à la Sainte Vierge ».",
      es: "Sacerdote francés (1673-1716) conocido por su devoción a la Santísima Virgen María y su libro 'Tratado de la Verdadera Devoción a la Santísima Virgen'.",
      de: "Französischer Priester (1673-1716), bekannt für seine Verehrung der seligen Jungfrau Maria und sein Buch 'Abhandlung über die wahre Marienverehrung'.",
    },
  },
  {
    id: "maximilian-kolbe",
    term: {
      en: "Maximilian Kolbe (Saint)",
      fr: "Maximilien Kolbe (Saint)",
      es: "Maximiliano Kolbe (San)",
      de: "Maximilian Kolbe (Heiliger)",
    },
    definition: {
      en: "Polish Franciscan (1894-1941) who volunteered to die in place of a stranger in the Nazi concentration camp of Auschwitz.",
      fr: "Franciscain polonais (1894-1941) qui s'est porté volontaire pour mourir à la place d'un étranger dans le camp de concentration nazi d'Auschwitz.",
      es: "Franciscano polaco (1894-1941) que se ofreció a morir en lugar de un extraño en el campo de concentración nazi de Auschwitz.",
      de: "Polnischer Franziskaner (1894-1941), der sich freiwillig meldete, um im Nazi-Konzentrationslager Auschwitz anstelle eines Fremden zu sterben.",
    },
  },
  {
    id: "peter-canisius",
    term: {
      en: "Peter Canisius (Saint)",
      fr: "Pierre Canisius (Saint)",
      es: "Pedro Canisio (San)",
      de: "Petrus Canisius (Heiliger)",
    },
    definition: {
      en: "Jesuit priest (1521-1597) and Doctor of the Church; key figure in the Catholic Restoration in Germany through his catechisms.",
      fr: "Prêtre jésuite (1521-1597) et Docteur de l'Église ; figure clé de la Restauration catholique en Allemagne grâce à ses catéchismes.",
      es: "Sacerdote jesuita (1521-1597) y Doctor de la Iglesia; figura clave en la Restauración Católica en Alemania a través de sus catecismos.",
      de: "Jesuitenpriester (1521-1597) und Kirchenlehrer; Schlüsselfigur der katholischen Restauration in Deutschland durch seine Katechismen.",
    },
  },
  {
    id: "peter-chrysologus",
    term: {
      en: "Peter Chrysologus (Saint)",
      fr: "Pierre Chrysologue (Saint)",
      es: "Pedro Crisólogo (San)",
      de: "Petrus Chrysologus (Heiliger)",
    },
    definition: {
      en: "Bishop of Ravenna (c. 406-450) and Doctor of the Church; named 'Golden Word' for his concise and eloquent homilies.",
      fr: "Évêque de Ravenne (v. 406-450) et Docteur de l'Église ; nommé « Parole d'Or » pour ses homélies concises et éloquentes.",
      es: "Obispo de Rávena (c. 406-450) y Doctor de la Iglesia; llamado 'Palabra de Oro' por sus homilías concisas y elocuentes.",
      de: "Bischof von Ravenna (ca. 406-450) und Kirchenlehrer; genannt 'Goldenes Wort' wegen seiner prägnanten und eloquenten Predigten.",
    },
  },
  {
    id: "peter-damian",
    term: {
      en: "Peter Damian (Saint)",
      fr: "Pierre Damien (Saint)",
      es: "Pedro Damián (San)",
      de: "Petrus Damiani (Heiliger)",
    },
    definition: {
      en: "Benedictine monk, Cardinal (1007-1072), and Doctor of the Church; a reformer who fought corruption in the clergy.",
      fr: "Moine bénédictin, cardinal (1007-1072) et Docteur de l'Église ; un réformateur qui a combattu la corruption dans le clergé.",
      es: "Monje benedictino, cardenal (1007-1072) y Doctor de la Iglesia; un reformador que luchó contra la corrupción en el clero.",
      de: "Benediktinermönch, Kardinal (1007-1072) und Kirchenlehrer; ein Reformer, der die Korruption im Klerus bekämpfte.",
    },
  },
  {
    id: "philip-neri",
    term: {
      en: "Philip Neri (Saint)",
      fr: "Philippe Néri (Saint)",
      es: "Felipe Neri (San)",
      de: "Philipp Neri (Heiliger)",
    },
    definition: {
      en: "The 'Apostle of Rome' (1515-1595); known for his joy, humor, and founding the Oratory.",
      fr: "L'« Apôtre de Rome » (1515-1595) ; connu pour sa joie, son humour et la fondation de l'Oratoire.",
      es: "El 'Apóstol de Roma' (1515-1595); conocido por su alegría, humor y por fundar el Oratorio.",
      de: "Der 'Apostel von Rom' (1515-1595); bekannt für seine Freude, seinen Humor und die Gründung des Oratoriums.",
    },
  },
  {
    id: "teresa-avila",
    term: {
      en: "Teresa of Avila (Saint)",
      fr: "Thérèse d'Avila (Sainte)",
      es: "Teresa de Ávila (Santa)",
      de: "Teresa von Avila (Heilige)",
    },
    definition: {
      en: "Carmelite mystic (1515-1582) and Doctor of the Church; author of 'The Interior Castle' and reformer of the Carmelite Order.",
      fr: "Mystique carmélite (1515-1582) et Docteur de l'Église ; auteur du « Château intérieur » et réformatrice de l'Ordre du Carmel.",
      es: "Mística carmelita (1515-1582) y Doctora de la Iglesia; autora de 'El Castillo Interior' y reformadora de la Orden Carmelita.",
      de: "Karmelitermystikerin (1515-1582) und Kirchenlehrerin; Autorin der 'Inneren Burg' und Reformatorin des Karmeliterordens.",
    },
  },
  {
    id: "teresa-benedicta",
    term: {
      en: "Teresa Benedicta of the Cross (Saint)",
      fr: "Thérèse-Bénédicte de la Croix (Sainte)",
      es: "Teresa Benedicta de la Cruz (Santa)",
      de: "Teresa Benedicta vom Kreuz (Heilige)",
    },
    definition: {
      en: "Edith Stein (1891-1942); Jewish philosopher convert to Catholicism, Carmelite nun, and martyr at Auschwitz.",
      fr: "Edith Stein (1891-1942) ; philosophe juive convertie au catholicisme, religieuse carmélite et martyre à Auschwitz.",
      es: "Edith Stein (1891-1942); filósofa judía conversa al catolicismo, monja carmelita y mártir en Auschwitz.",
      de: "Edith Stein (1891-1942); jüdische Philosophin, konvertiert zum Katholizismus, Karmelitin und Märtyrerin in Auschwitz.",
    },
  },
  {
    id: "therese-lisieux",
    term: {
      en: "Thérèse of Lisieux (Saint)",
      fr: "Thérèse de Lisieux (Sainte)",
      es: "Teresa de Lisieux (Santa)",
      de: "Therese von Lisieux (Heilige)",
    },
    definition: {
      en: "The 'Little Flower' (1873-1897) and Doctor of the Church; known for her 'Little Way' of spiritual childhood.",
      fr: "La « Petite Fleur » (1873-1897) et Docteur de l'Église ; connue pour sa « Petite Voie » d'enfance spirituelle.",
      es: "La 'Pequeña Flor' (1873-1897) y Doctora de la Iglesia; conocida por su 'Caminito' de infancia espiritual.",
      de: "Die 'Kleine Blume' (1873-1897) und Kirchenlehrerin; bekannt für ihren 'Kleinen Weg' der geistlichen Kindschaft.",
    },
  },
  {
    id: "thomas-more",
    term: {
      en: "Thomas More (Saint)",
      fr: "Thomas More (Saint)",
      es: "Tomás Moro (Santo)",
      de: "Thomas Morus (Heiliger)",
    },
    definition: {
      en: "Lord Chancellor of England and martyr (1478-1535); executed for refusing to recognize King Henry VIII as head of the Church.",
      fr: "Lord Chancelier d'Angleterre et martyr (1478-1535) ; exécuté pour avoir refusé de reconnaître le roi Henri VIII comme chef de l'Église.",
      es: "Lord Canciller de Inglaterra y mártir (1478-1535); ejecutado por negarse a reconocer al rey Enrique VIII como cabeza de la Iglesia.",
      de: "Lordkanzler von England und Märtyrer (1478-1535); hingerichtet, weil er sich weigerte, König Heinrich VIII. als Oberhaupt der Kirche anzuerkennen.",
    },
  },
  {
    id: "vincent-depaul",
    term: {
      en: "Vincent de Paul (Saint)",
      fr: "Vincent de Paul (Saint)",
      es: "Vicente de Paúl (San)",
      de: "Vinzenz von Paul (Heiliger)",
    },
    definition: {
      en: "French priest (1581-1660) dedicated to serving the poor; founder of the Congregation of the Mission.",
      fr: "Prêtre français (1581-1660) dédié au service des pauvres ; fondateur de la Congrégation de la Mission.",
      es: "Sacerdote francés (1581-1660) dedicado al servicio de los pobres; fundador de la Congregación de la Misión.",
      de: "Französischer Priester (1581-1660), der sich dem Dienst an den Armen widmete; Gründer der Kongregation der Mission.",
    },
  },
  {
    id: "scheeben-matthias",
    term: {
      en: "Scheeben, Matthias",
      fr: "Scheeben, Matthias",
      es: "Scheeben, Matthias",
      de: "Scheeben, Matthias",
    },
    definition: {
      en: "German theologian (1835-1888) known for his mystical theology and work on the Trinity and grace.",
      fr: "Théologien allemand (1835-1888) connu pour sa théologie mystique et ses travaux sur la Trinité et la grâce.",
      es: "Teólogo alemán (1835-1888) conocido por su teología mística y obra sobre la Trinidad y la gracia.",
      de: "Deutscher Theologe (1835-1888), bekannt für seine mystische Theologie und Arbeiten über die Dreifaltigkeit und Gnade.",
    },
  },
  {
    id: "fulton-sheen",
    term: {
      en: "Sheen, Fulton (Venerable)",
      fr: "Sheen, Fulton (Vénérable)",
      es: "Sheen, Fulton (Venerable)",
      de: "Sheen, Fulton (Ehrwürdiger)",
    },
    definition: {
      en: "American Archbishop and television evangelist (1895-1979), known for his ability to preach the Gospel to the modern world.",
      fr: "Archevêque américain et télévangéliste (1895-1979), connu pour sa capacité à prêcher l'Évangile au monde moderne.",
      es: "Arzobispo estadounidense y televangelista (1895-1979), conocido por su capacidad para predicar el Evangelio al mundo moderno.",
      de: "Amerikanischer Erzbischof und Fernsehevangelist (1895-1979), bekannt für seine Fähigkeit, dem modernen Menschen das Evangelium zu predigen.",
    },
  },
  {
    id: "stein-edith",
    term: {
      en: "Stein, Edith (Saint)",
      fr: "Stein, Edith (Sainte)",
      es: "Stein, Edith (Santa)",
      de: "Stein, Edith (Heilige)",
    },
    definition: {
      en: "See 'Teresa Benedicta of the Cross'.",
      fr: "Voir « Thérèse-Bénédicte de la Croix ».",
      es: "Ver 'Teresa Benedicta de la Cruz'.",
      de: "Siehe 'Teresa Benedicta vom Kreuz'.",
    },
  },
  {
    id: "hahn-scott",
    term: {
      en: "Hahn, Scott",
      fr: "Hahn, Scott",
      es: "Hahn, Scott",
      de: "Hahn, Scott",
    },
    definition: {
      en: "Contemporary Catholic theologian and convert, known for his work on covenant theology and biblical apologetics.",
      fr: "Théologien catholique contemporain et converti, connu pour ses travaux sur la théologie de l'alliance et l'apologétique biblique.",
      es: "Teólogo católico contemporáneo y converso, conocido por su trabajo sobre la teología del pacto y la apologética bíblica.",
      de: "Zeitgenössischer katholischer Theologe und Konvertit, bekannt für seine Arbeit zur Bundestheologie und biblischen Apologetik.",
    },
  },
  {
    id: "ratzinger-joseph",
    term: {
      en: "Ratzinger, Joseph",
      fr: "Ratzinger, Joseph",
      es: "Ratzinger, Joseph",
      de: "Ratzinger, Joseph",
    },
    definition: {
      en: "See 'Pope Benedict XVI'.",
      fr: "Voir « Pape Benoît XVI ».",
      es: "Ver 'Papa Benedicto XVI'.",
      de: "Siehe 'Papst Benedikt XVI'.",
    },
  },
  {
    id: "wojtyla-karol",
    term: {
      en: "Wojtyla, Karol",
      fr: "Wojtyla, Karol",
      es: "Wojtyla, Karol",
      de: "Wojtyla, Karol",
    },
    definition: {
      en: "See 'Pope John Paul II'.",
      fr: "Voir « Pape Jean-Paul II ».",
      es: "Ver 'Papa Juan Pablo II'.",
      de: "Siehe 'Papst Johannes Paul II'.",
    },
  },
  {
    id: "belloc-hilaire",
    term: {
      en: "Belloc, Hilaire",
      fr: "Belloc, Hilaire",
      es: "Belloc, Hilaire",
      de: "Belloc, Hilaire",
    },
    definition: {
      en: "Anglo-French writer and historian (1870-1953); known for his defense of the Catholic faith and critique of modern secularism.",
      fr: "Écrivain et historien anglo-français (1870-1953) ; connu pour sa défense de la foi catholique et sa critique du sécularisme moderne.",
      es: "Escritor e historiador anglo-francés (1870-1953); conocido por su defensa de la fe católica y crítica del secularismo moderno.",
      de: "Anglo-französischer Schriftsteller und Historiker (1870-1953); bekannt für seine Verteidigung des katholischen Glaubens und Kritik am modernen Säkularismus.",
    },
  },
  {
    id: "knox-ronald",
    term: {
      en: "Knox, Ronald",
      fr: "Knox, Ronald",
      es: "Knox, Ronald",
      de: "Knox, Ronald",
    },
    definition: {
      en: "English priest and theologian (1888-1957); known for his translation of the Bible and detective stories.",
      fr: "Prêtre et théologien anglais (1888-1957) ; connu pour sa traduction de la Bible et ses romans policiers.",
      es: "Sacerdote y teólogo inglés (1888-1957); conocido por su traducción de la Biblia y novelas de detectives.",
      de: "Englischer Priester und Theologe (1888-1957); bekannt für seine Bibelübersetzung und Kriminalgeschichten.",
    },
  },
  {
    id: "lubac-henri",
    term: {
      en: "Lubac, Henri de",
      fr: "Lubac, Henri de",
      es: "Lubac, Henri de",
      de: "Lubac, Henri de",
    },
    definition: {
      en: "French Jesuit theologian (1896-1991); influential in the 'Ressourcement' movement and Vatican II.",
      fr: "Théologien jésuite français (1896-1991) ; influent dans le mouvement de « Ressourcement » et Vatican II.",
      es: "Teólogo jesuita francés (1896-1991); influyente en el movimiento de 'Ressourcement' y el Vaticano II.",
      de: "Französischer Jesuitentheologe (1896-1991); einflussreich in der 'Ressourcement'-Bewegung und beim Zweiten Vatikanum.",
    },
  },
  {
    id: "balthasar-hans-urs",
    term: {
      en: "Balthasar, Hans Urs von",
      fr: "Balthasar, Hans Urs von",
      es: "Balthasar, Hans Urs von",
      de: "Balthasar, Hans Urs von",
    },
    definition: {
      en: "Swiss theologian (1905-1988); known for his emphasis on beauty and dramatic theology.",
      fr: "Théologien suisse (1905-1988) ; connu pour son accent sur la beauté et la théologie dramatique.",
      es: "Teólogo suizo (1905-1988); conocido por su énfasis en la belleza y la teología dramática.",
      de: "Schweizer Theologe (1905-1988); bekannt für seine Betonung von Schönheit und dramatischer Theologie.",
    },
  },
  {
    id: "garrigou-lagrange",
    term: {
      en: "Garrigou-Lagrange, Reginald",
      fr: "Garrigou-Lagrange, Réginald",
      es: "Garrigou-Lagrange, Réginald",
      de: "Garrigou-Lagrange, Reginald",
    },
    definition: {
      en: "Dominican theologian (1877-1964); a leading neo-Thomist known for his work 'The Three Ages of the Interior Life'.",
      fr: "Théologien dominicain (1877-1964) ; un néo-thomiste de premier plan connu pour son ouvrage « Les Trois Âges de la vie intérieure ».",
      es: "Teólogo dominico (1877-1964); un destacado neotomista conocido por su obra 'Las tres edades de la vida interior'.",
      de: "Dominikanertheologe (1877-1964); ein führender Neuthomist, bekannt für sein Werk 'Die drei Alter des inneren Lebens'.",
    },
  },
  {
    id: "hildebrand-dietrich",
    term: {
      en: "Hildebrand, Dietrich von",
      fr: "Hildebrand, Dietrich von",
      es: "Hildebrand, Dietrich von",
      de: "Hildebrand, Dietrich von",
    },
    definition: {
      en: "German Catholic philosopher and theologian (1889-1977); known for his work on ethics and personalism.",
      fr: "Philosophe et théologien catholique allemand (1889-1977) ; connu pour ses travaux sur l'éthique et le personnalisme.",
      es: "Filósofo y teólogo católico alemán (1889-1977); conocido por su trabajo sobre ética y personalismo.",
      de: "Deutscher katholischer Philosoph und Theologe (1889-1977); bekannt für seine Arbeiten zu Ethik und Personalismus.",
    },
  },
  {
    id: "seton-elizabeth-ann",
    term: {
      en: "Seton, Elizabeth Ann (Saint)",
      fr: "Seton, Elizabeth Ann (Sainte)",
      es: "Seton, Elizabeth Ann (Santa)",
      de: "Seton, Elizabeth Ann (Heilige)",
    },
    definition: {
      en: "The first native-born citizen of the United States to be canonized (1774-1821); founder of the Sisters of Charity.",
      fr: "La première citoyenne née aux États-Unis à être canonisée (1774-1821) ; fondatrice des Sœurs de la Charité.",
      es: "La primera ciudadana nacida en los Estados Unidos en ser canonizada (1774-1821); fundadora de las Hermanas de la Caridad.",
      de: "Die erste in den Vereinigten Staaten geborene Bürgerin, die heiliggesprochen wurde (1774-1821); Gründerin der Barmherzigen Schwestern.",
    },
  },

  {
    id: "deuterocanonical",
    term: {
      en: "Deuterocanonical Books",
      fr: "Livres deutérocanoniques",
      es: "Libros deuterocanónicos",
      de: "Deuterokanonische Bücher",
    },
    definition: {
      en: "Books of the Old Testament found in the Greek Septuagint but not the Hebrew Bible (e.g., Tobit, Maccabees), accepted by Catholics as inspired.",
      fr: "Livres de l'Ancien Testament trouvés dans la Septante grecque mais pas dans la Bible hébraïque (ex. Tobie, Maccabées), acceptés par les catholiques comme inspirés.",
      es: "Libros del Antiguo Testamento encontrados en la Septuaginta griega pero no en la Biblia hebrea (ej. Tobías, Macabeos), aceptados por los católicos como inspirados.",
      de: "Bücher des Alten Testaments, die in der griechischen Septuaginta, aber nicht in der hebräischen Bibel zu finden sind (z. B. Tobit, Makkabäer) und von Katholiken als inspiriert anerkannt werden.",
    },
  },
  {
    id: "protocanonical",
    term: {
      en: "Protocanonical",
      fr: "Protocanoniques",
      es: "Protocanónicos",
      de: "Protokanonisch",
    },
    definition: {
      en: "Books of the Bible that have always been accepted by the universal Church without serious dispute (e.g., Genesis, Gospels).",
      fr: "Livres de la Bible qui ont toujours été acceptés par l'Église universelle sans contestation sérieuse (ex. Genèse, Évangiles).",
      es: "Libros de la Biblia que siempre han sido aceptados por la Iglesia universal sin disputa seria (ej. Génesis, Evangelios).",
      de: "Bücher der Bibel, die von der Weltkirche immer ohne ernsthaften Streit anerkannt wurden (z. B. Genesis, Evangelien).",
    },
  },
  {
    id: "septuagint",
    term: {
      en: "Septuagint (LXX)",
      fr: "Septante",
      es: "Septuaginta",
      de: "Septuaginta",
    },
    definition: {
      en: "The ancient Greek translation of the Old Testament (c. 3rd century BC), quoted by the Apostles and adopted by the early Church.",
      fr: "L'ancienne traduction grecque de l'Ancien Testament (v. 3e siècle av. J.-C.), citée par les Apôtres et adoptée par l'Église primitive.",
      es: "La antigua traducción griega del Antiguo Testamento (c. siglo III a.C.), citada por los Apóstoles y adoptada por la Iglesia primitiva.",
      de: "Die altgriechische Übersetzung des Alten Testaments (ca. 3. Jh. v. Chr.), die von den Aposteln zitiert und von der frühen Kirche übernommen wurde.",
    },
  },
  {
    id: "ascension",
    term: {
      en: "Ascension",
      fr: "Ascension",
      es: "Ascensión",
      de: "Christi Himmelfahrt",
    },
    definition: {
      en: "The entry of Jesus' humanity into divine glory forty days after his Resurrection.",
      fr: "L'entrée de l'humanité de Jésus dans la gloire divine quarante jours après sa Résurrection.",
      es: "La entrada de la humanidad de Jesús en la gloria divina cuarenta días después de su Resurrección.",
      de: "Der Eintritt der Menschheit Jesu in die göttliche Herrlichkeit vierzig Tage nach seiner Auferstehung.",
    },
  },
  {
    id: "all-saints",
    term: {
      en: "All Saints' Day",
      fr: "Toussaint",
      es: "Día de Todos los Santos",
      de: "Allerheiligen",
    },
    definition: {
      en: "A solemnity celebrated on November 1st honoring all the saints, known and unknown, who are in Heaven.",
      fr: "Une solennité célébrée le 1er novembre honorant tous les saints, connus et inconnus, qui sont au Ciel.",
      es: "Una solemnidad celebrada el 1 de noviembre en honor a todos los santos, conocidos y desconocidos, que están en el Cielo.",
      de: "Ein Hochfest, das am 1. November gefeiert wird, um alle Heiligen, bekannte und unbekannte, die im Himmel sind, zu ehren.",
    },
  },
  {
    id: "corporal",
    term: {
      en: "Corporal",
      fr: "Corporal",
      es: "Corporal",
      de: "Korporale",
    },
    definition: {
      en: "A square white linen cloth placed on the altar, upon which the chalice and paten are placed during Mass.",
      fr: "Un linge de lin blanc carré placé sur l'autel, sur lequel le calice et la patène sont posés pendant la messe.",
      es: "Un paño de lino blanco cuadrado colocado sobre el altar, sobre el cual se colocan el cáliz y la patena durante la Misa.",
      de: "Ein quadratisches weißes Leinentuch, das auf den Altar gelegt wird und auf dem Kelch und Patene während der Messe stehen.",
    },
  },
  {
    id: "nihil-obstat",
    term: {
      en: "Nihil Obstat",
      fr: "Nihil Obstat",
      es: "Nihil Obstat",
      de: "Nihil Obstat",
    },
    definition: {
      en: "Latin for 'nothing stands in the way.' An official declaration by a censor that a book contains nothing contrary to faith or morals.",
      fr: "Latin pour 'rien ne s'y oppose'. Une déclaration officielle d'un censeur selon laquelle un livre ne contient rien de contraire à la foi ou aux mœurs.",
      es: "Latín para 'nada se interpone'. Una declaración oficial de un censor de que un libro no contiene nada contrario a la fe o la moral.",
      de: "Lateinisch für 'nichts steht im Weg'. Eine offizielle Erklärung eines Zensors, dass ein Buch nichts enthält, was gegen Glauben oder Sitten verstößt.",
    },
  },
  {
    id: "motu-proprio",
    term: {
      en: "Motu Proprio",
      fr: "Motu Proprio",
      es: "Motu Proprio",
      de: "Motu Proprio",
    },
    definition: {
      en: "Latin for 'on his own impulse.' A document issued by the Pope on his own initiative, not in response to a request.",
      fr: "Latin pour 'de son propre chef'. Un document publié par le Pape de sa propre initiative, et non en réponse à une demande.",
      es: "Latín para 'por su propio impulso'. Un documento emitido por el Papa por su propia iniciativa, no en respuesta a una solicitud.",
      de: "Lateinisch für 'aus eigenem Antrieb'. Ein Dokument, das der Papst aus eigener Initiative und nicht als Antwort auf eine Bitte erlässt.",
    },
  },
  {
    id: "servant-of-god",
    term: {
      en: "Servant of God",
      fr: "Serviteur de Dieu",
      es: "Siervo de Dios",
      de: "Diener Gottes",
    },
    definition: {
      en: "The title given to a candidate for sainthood whose cause for canonization has officially been opened by the Church.",
      fr: "Le titre donné à un candidat à la sainteté dont la cause de canonisation a été officiellement ouverte par l'Église.",
      es: "El título dado a un candidato a la santidad cuya causa de canonización ha sido abierta oficialmente por la Iglesia.",
      de: "Der Titel, der einem Kandidaten für die Heiligkeit verliehen wird, dessen Kanonisationsprozess offiziell von der Kirche eröffnet wurde.",
    },
  },
  {
    id: "solidarity",
    term: {
      en: "Solidarity",
      fr: "Solidarité",
      es: "Solidaridad",
      de: "Solidarität",
    },
    definition: {
      en: "A firm and persevering determination to commit oneself to the common good; social charity and friendship.",
      fr: "Une détermination ferme et persévérante à s'engager pour le bien commun ; charité sociale et amitié.",
      es: "Una determinación firme y perseverante de comprometerse con el bien común; caridad social y amistad.",
      de: "Eine feste und beharrliche Entschlossenheit, sich für das Gemeinwohl einzusetzen; soziale Nächstenliebe und Freundschaft.",
    },
  },

  {
    id: "fruit-love",
    term: {
      en: "Love (Charity)",
      fr: "Amour (Charité)",
      es: "Amor (Caridad)",
      de: "Liebe (Agape)",
    },
    definition: {
      en: "The ability to love God above all things for His own sake and our neighbor as ourselves for the love of God; the perfection of the virtue of charity.",
      fr: "La capacité d'aimer Dieu par-dessus tout pour Lui-même et notre prochain comme nous-mêmes par amour de Dieu ; la perfection de la vertu de charité.",
      es: "La capacidad de amar a Dios sobre todas las cosas por Él mismo y a nuestro prójimo como a nosotros mismos por amor a Dios.",
      de: "Die Fähigkeit, Gott über alles um Seinetwillen zu lieben und unseren Nächsten wie uns selbst aus Liebe zu Gott; die Vollendung der Tugend der Nächstenliebe.",
    },
  },
  {
    id: "fruit-joy",
    term: {
      en: "Joy",
      fr: "Joie",
      es: "Gozo",
      de: "Freude",
    },
    definition: {
      en: "The supernatural happiness that rests in God, whose source is spiritual and independent of earthly circumstances.",
      fr: "Le bonheur surnaturel qui repose en Dieu, dont la source est spirituelle et indépendante des circonstances terrestres.",
      es: "La felicidad sobrenatural que descansa en Dios, cuya fuente es espiritual e independiente de las circunstancias terrenales.",
      de: "Die übernatürliche Freude, die in Gott ruht und deren Quelle geistlich und unabhängig von irdischen Umständen ist.",
    },
  },
  {
    id: "fruit-peace",
    term: {
      en: "Peace",
      fr: "Paix",
      es: "Paz",
      de: "Friede",
    },
    definition: {
      en: "The tranquility of order; the serenity that results from submission to God's will and the harmony between mind, will, and desires.",
      fr: "La tranquillité de l'ordre; la sérénité qui résulte de la soumission à la volonté de Dieu et de l'harmonie entre l'esprit, la volonté et les désirs.",
      es: "La tranquilidad del orden; la serenidad que resulta de la sumisión a la voluntad de Dios y la armonía entre la mente, la voluntad y los deseos.",
      de: "Die Ruhe der Ordnung; die Gelassenheit, die aus der Unterwerfung unter Gottes Willen und der Harmonie zwischen Verstand, Willen und Begierden resultiert.",
    },
  },
  {
    id: "fruit-patience",
    term: {
      en: "Patience",
      fr: "Patience",
      es: "Paciencia",
      de: "Geduld",
    },
    definition: {
      en: "The ability to endure suffering and adversity without giving in to sadness, discouragement, or complaint.",
      fr: "La capacité d'endurer la souffrance et l'adversité sans céder à la tristesse, au découragement ou à la plainte.",
      es: "La capacidad de soportar el sufrimiento y la adversidad sin caer en la tristeza, el desánimo o la queja.",
      de: "Die Fähigkeit, Leid und Widrigkeiten zu ertragen, ohne Traurigkeit, Entmutigung oder Klage nachzugeben.",
    },
  },
  {
    id: "fruit-kindness",
    term: {
      en: "Kindness",
      fr: "Bonté (Benignité)",
      es: "Benignidad",
      de: "Freundlichkeit",
    },
    definition: {
      en: "A tender disposition towards others, demonstrating gentleness and sympathy in word and action.",
      fr: "Une disposition tendre envers les autres, démontrant douceur et sympathie en paroles et en actes.",
      es: "Una disposición tierna hacia los demás, demostrando dulzura y simpatía en palabras y acciones.",
      de: "Eine zärtliche Haltung gegenüber anderen, die Sanftheit und Mitgefühl in Wort und Tat zeigt.",
    },
  },
  {
    id: "fruit-goodness",
    term: {
      en: "Goodness",
      fr: "Bienveillance",
      es: "Bondad",
      de: "Güte",
    },
    definition: {
      en: "The inclination to always seek the good and to be upright in character and conduct, reflecting God's own nature.",
      fr: "L'inclination à toujours rechercher le bien et à être droit dans son caractère et sa conduite, reflétant la nature même de Dieu.",
      es: "La inclinación a buscar siempre el bien y a ser recto en carácter y conducta, reflejando la propia naturaleza de Dios.",
      de: "Die Neigung, stets das Gute zu suchen und in Charakter und Verhalten aufrichtig zu sein, was Gottes eigene Natur widerspiegelt.",
    },
  },
  {
    id: "fruit-faithfulness",
    term: {
      en: "Faithfulness",
      fr: "Fidélité",
      es: "Fe",
      de: "Treue",
    },
    definition: {
      en: "Steadfast devotion and loyalty to God, His promises, and the duties of one’s state in life.",
      fr: "Une dévotion et une loyauté inébranlables envers Dieu, Ses promesses et les devoirs de son état de vie.",
      es: "Devoción y lealtad inquebrantables a Dios, Sus promesas y los deberes del propio estado de vida.",
      de: "Beständige Hingabe und Loyalität gegenüber Gott, Seinen Verheißungen und den Pflichten des eigenen Lebensstandes.",
    },
  },
  {
    id: "fruit-gentleness",
    term: {
      en: "Gentleness",
      fr: "Douceur",
      es: "Mansedumbre",
      de: "Sanftmut",
    },
    definition: {
      en: "The virtue that tempers wrath and avoids harshness, helping one respond calmly even when provoked or angered.",
      fr: "La vertu qui modère la colère et évite la rudesse, aidant à répondre calmement même en cas de provocation ou de colère.",
      es: "La virtud que modera la ira y evita la dureza, ayudando a responder con calma incluso cuando es provocado o enojado.",
      de: "Die Tugend, die Zorn mäßigt und Härte vermeidet und hilft, auch bei Provokation oder Ärger gelassen zu reagieren.",
    },
  },
  {
    id: "fruit-self-control",
    term: {
      en: "Self-control (Continence)",
      fr: "Maîtrise de soi (Continence)",
      es: "Dominio Propio (Continencia)",
      de: "Selbstbeherrschung (Enthaltsamkeit)",
    },
    definition: {
      en: "The mastery over one's bodily desires and impulses, ensuring the passions are subject to reason and faith.",
      fr: "La maîtrise de ses désirs et impulsions corporels, assurant que les passions sont soumises à la raison et à la foi.",
      es: "El dominio sobre los deseos e impulsos corporales, asegurando que las pasiones estén sujetas a la razón y la fe.",
      de: "Die Herrschaft über die eigenen körperlichen Begierden und Impulse, die gewährleistet, dass die Leidenschaften der Vernunft und dem Glauben unterliegen.",
    },
  },
];
