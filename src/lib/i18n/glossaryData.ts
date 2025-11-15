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
      en: "Perfections that the Holy Spirit forms in us as the first fruits of eternal glory (e.g., charity, joy, peace, patience).",
      fr: "Perfections que le Saint-Esprit forme en nous comme prémices de la gloire éternelle (par ex. charité, joie, paix, patience).",
      es: "Perfecciones que el Espíritu Santo forma en nosotros como primicias de la gloria eterna (ej. caridad, gozo, paz, paciencia).",
      de: "Vollkommenheiten, die der Heilige Geist in uns als erste Früchte der ewigen Herrlichkeit bildet (z.B. Liebe, Freude, Friede, Geduld).",
    },
  },
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
      en: "The plan of God by which He guides rational creatures to their supernatural end. Catholicism rejects 'double predestination' (predestination to hell).",
      fr: "Le plan de Dieu par lequel Il guide les créatures rationnelles vers leur fin surnaturelle. Le catholicisme rejette la 'double prédestination' (prédestination à l'enfer).",
      es: "El plan de Dios mediante el cual guía a las criaturas racionales a su fin sobrenatural. El catolicismo rechaza la 'doble predestinación' (predestinación al infierno).",
      de: "Der Plan Gottes, durch den Er vernunftbegabte Geschöpfe zu ihrem übernatürlichen Ziel führt. Der Katholizismus lehnt die 'doppelte Prädestination' (Vorherbestimmung zur Hölle) ab.",
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
      en: "The Protestant doctrine of justification by 'faith alone,' excluding good works or merit.",
      fr: "La doctrine protestante de la justification par la 'foi seule', excluant les bonnes œuvres ou le mérite.",
      es: "La doctrina protestante de la justificación por la 'fe sola', excluyendo las buenas obras o el mérito.",
      de: "Die protestantische Lehre der Rechtfertigung 'allein durch Glauben', unter Ausschluss guter Werke oder Verdienste.",
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
    term: { en: "Washing of Feet", fr: "Lavement des pieds", es: "Lavatorio de los pies", de: "Fußwaschung" },
    definition: {
      en: "The ritual performed by Jesus at the Last Supper and repeated on Holy Thursday, symbolizing humble service and charity.",
      fr: "Le rituel accompli par Jésus lors de la Cène et répété le Jeudi Saint, symbolisant le service humble et la charité.",
      es: "El ritual realizado por Jesús en la Última Cena y repetido el Jueves Santo, que simboliza el servicio humilde y la caridad.",
      de: "Der Ritus, den Jesus beim letzten Abendmahl vollzog und der am Gründonnerstag wiederholt wird, als Symbol für demütigen Dienst und Nächstenliebe."
    }
  },
  {
    id: "way-of-cross",
    term: { en: "Way of the Cross", fr: "Chemin de Croix", es: "Vía Crucis", de: "Kreuzweg" },
    definition: {
      en: "A pious devotion meditating on the journey of Jesus to Calvary, usually consisting of 14 stations.",
      fr: "Une dévotion pieuse méditant sur le chemin de Jésus vers le Calvaire, consistant généralement en 14 stations.",
      es: "Una devoción piadosa que medita sobre el viaje de Jesús al Calvario, que generalmente consta de 14 estaciones.",
      de: "Eine fromme Andacht, die den Weg Jesu nach Golgatha meditiert, meist bestehend aus 14 Stationen."
    }
  },
  {
    id: "whitsunday",
    term: { en: "Whitsunday", fr: "Pentecôte", es: "Pentecostés", de: "Pfingstsonntag" },
    definition: {
      en: "An older English name for the feast of Pentecost, named for the white garments worn by the newly baptized.",
      fr: "Un ancien nom anglais pour la fête de la Pentecôte, nommé d'après les vêtements blancs portés par les nouveaux baptisés.",
      es: "Un nombre inglés antiguo para la fiesta de Pentecostés, llamado así por las vestiduras blancas que llevaban los recién bautizados.",
      de: "Ein älterer englischer Name für das Pfingstfest, benannt nach den weißen Gewändern der Neugetauften."
    }
  },
  {
    id: "will-of-god",
    term: { en: "Will of God", fr: "Volonté de Dieu", es: "Voluntad de Dios", de: "Wille Gottes" },
    definition: {
      en: "The divine plan for humanity, which is always directed toward the good and the salvation of souls.",
      fr: "Le plan divin pour l'humanité, qui est toujours dirigé vers le bien et le salut des âmes.",
      es: "El plan divino para la humanidad, que siempre está dirigido hacia el bien y la salvación de las almas.",
      de: "Der göttliche Plan für die Menschheit, der immer auf das Gute und das Heil der Seelen ausgerichtet ist."
    }
  },
  {
    id: "wine",
    term: { en: "Wine", fr: "Vin", es: "Vino", de: "Wein" },
    definition: {
      en: "Fermented grape juice which, along with unleavened bread, constitutes the matter of the Sacrament of the Eucharist.",
      fr: "Jus de raisin fermenté qui, avec le pain sans levain, constitue la matière du Sacrement de l'Eucharistie.",
      es: "Jugo de uva fermentado que, junto con el pan ácimo, constituye la materia del Sacramento de la Eucaristía.",
      de: "Vergorener Traubensaft, der zusammen mit ungesäuertem Brot die Materie des Sakraments der Eucharistie bildet."
    }
  },
  {
    id: "wisdom",
    term: { en: "Wisdom", fr: "Sagesse", es: "Sabiduría", de: "Weisheit" },
    definition: {
      en: "The first gift of the Holy Spirit, enabling one to value spiritual things over worldly things and view life from God's perspective.",
      fr: "Le premier don du Saint-Esprit, permettant d'apprécier les choses spirituelles plus que les choses mondaines et de voir la vie du point de vue de Dieu.",
      es: "El primer don del Espíritu Santo, que permite valorar las cosas espirituales sobre las mundanas y ver la vida desde la perspectiva de Dios.",
      de: "Die erste Gabe des Heiligen Geistes, die es ermöglicht, geistliche Dinge höher zu schätzen als weltliche und das Leben aus Gottes Perspektive zu sehen."
    }
  },
  {
    id: "witness",
    term: { en: "Witness", fr: "Témoin", es: "Testigo", de: "Zeuge" },
    definition: {
      en: "One who testifies to the truth of the faith, often by the example of their life (and sometimes death, i.e., martyrdom).",
      fr: "Celui qui témoigne de la vérité de la foi, souvent par l'exemple de sa vie (et parfois de sa mort, c'est-à-dire le martyre).",
      es: "Aquel que da testimonio de la verdad de la fe, a menudo con el ejemplo de su vida (y a veces muerte, es decir, martirio).",
      de: "Einer, der die Wahrheit des Glaubens bezeugt, oft durch das Beispiel seines Lebens (und manchmal seines Todes, d.h. Martyrium)."
    }
  },
  {
    id: "word-of-god",
    term: { en: "Word of God", fr: "Parole de Dieu", es: "Palabra de Dios", de: "Wort Gottes" },
    definition: {
      en: "A title for both the Sacred Scriptures and Jesus Christ himself (the Logos).",
      fr: "Un titre pour les Saintes Écritures et pour Jésus-Christ lui-même (le Logos).",
      es: "Un título tanto para las Sagradas Escrituras como para el mismo Jesucristo (el Logos).",
      de: "Ein Titel sowohl für die Heilige Schrift als auch für Jesus Christus selbst (der Logos)."
    }
  },
  {
    id: "works-of-mercy",
    term: { en: "Works of Mercy", fr: "Œuvres de miséricorde", es: "Obras de Misericordia", de: "Werke der Barmherzigkeit" },
    definition: {
      en: "Charitable actions by which we come to the aid of our neighbor in his spiritual and bodily necessities.",
      fr: "Actions charitables par lesquelles nous venons en aide à notre prochain dans ses nécessités spirituelles et corporelles.",
      es: "Acciones caritativas mediante las cuales socorremos a nuestro prójimo en sus necesidades espirituales y corporales.",
      de: "Barmherzige Handlungen, durch die wir unserem Nächsten in seinen geistigen und körperlichen Nöten zu Hilfe kommen."
    }
  },
  {
    id: "worship",
    term: { en: "Worship", fr: "Culte (Adoration)", es: "Culto (Adoración)", de: "Gottesdienst" },
    definition: {
      en: "Adoration and honor given to God, which is the first act of the virtue of religion.",
      fr: "Adoration et honneur rendus à Dieu, qui est le premier acte de la vertu de religion.",
      es: "Adoración y honor dados a Dios, que es el primer acto de la virtud de la religión.",
      de: "Anbetung und Ehre, die Gott erwiesen wird, was der erste Akt der Tugend der Religion ist."
    }
  },
  {
    id: "wrath",
    term: { en: "Wrath", fr: "Colère", es: "Ira", de: "Zorn" },
    definition: {
      en: "One of the seven capital sins; an uncontrolled feeling of anger and desire for revenge.",
      fr: "L'un des sept péchés capitaux ; un sentiment incontrôlé de colère et de désir de vengeance.",
      es: "Uno de los siete pecados capitales; un sentimiento incontrolado de enojo y deseo de venganza.",
      de: "Eine der sieben Todsünden; ein unkontrolliertes Gefühl von Wut und Rachegelüsten."
    }
  },
  {
    id: "yahweh",
    term: { en: "Yahweh", fr: "Yahvé", es: "Yahvé", de: "Jahwe" },
    definition: {
      en: "The personal name of the God of Israel, revealed to Moses on Mount Sinai, meaning 'I Am who I Am.'",
      fr: "Le nom personnel du Dieu d'Israël, révélé à Moïse sur le mont Sinaï, signifiant 'Je Suis qui Je Suis'.",
      es: "El nombre personal del Dios de Israel, revelado a Moisés en el Monte Sinaí, que significa 'Yo Soy el que Soy'.",
      de: "Der persönliche Name des Gottes Israels, der Moses auf dem Berg Sinai offenbart wurde und 'Ich bin, der ich bin' bedeutet."
    }
  },
  {
    id: "year-liturgical",
    term: { en: "Year, Liturgical", fr: "Année liturgique", es: "Año Litúrgico", de: "Kirchenjahr" },
    definition: {
      en: "The celebration throughout the year of the mysteries of the Lord's birth, life, death, and resurrection.",
      fr: "La célébration tout au long de l'année des mystères de la naissance, de la vie, de la mort et de la résurrection du Seigneur.",
      es: "La celebración a lo largo del año de los misterios del nacimiento, vida, muerte y resurrección del Señor.",
      de: "Die Feier der Geheimnisse der Geburt, des Lebens, des Todes und der Auferstehung des Herrn im Laufe des Jahres."
    }
  },
  {
    id: "yoke",
    term: { en: "Yoke", fr: "Joug", es: "Yugo", de: "Joch" },
    definition: {
      en: "A metaphor used by Jesus for submission to his teaching: 'My yoke is easy and my burden is light.'",
      fr: "Une métaphore utilisée par Jésus pour la soumission à son enseignement : 'Mon joug est doux et mon fardeau léger.'",
      es: "Una metáfora utilizada por Jesús para la sumisión a su enseñanza: 'Mi yugo es suave y mi carga ligera'.",
      de: "Eine Metapher, die Jesus für die Unterwerfung unter seine Lehre verwendet: 'Mein Joch ist sanft und meine Last ist leicht.'"
    }
  },
  {
    id: "zeal",
    term: { en: "Zeal", fr: "Zèle", es: "Celo", de: "Eifer" },
    definition: {
      en: "Energetic and unflagging devotion to a cause, especially to the glory of God and the salvation of souls.",
      fr: "Dévouement énergique et inlassable à une cause, en particulier à la gloire de Dieu et au salut des âmes.",
      es: "Devoción enérgica e incansable a una causa, especialmente a la gloria de Dios y la salvación de las almas.",
      de: "Tatkräftige und unermüdliche Hingabe an eine Sache, insbesondere für die Ehre Gottes und das Heil der Seelen."
    }
  },
  {
    id: "zion",
    term: { en: "Zion", fr: "Sion", es: "Sión", de: "Zion" },
    definition: {
      en: "A hill in Jerusalem; symbolically refers to the City of God, the Church, or Heaven.",
      fr: "Une colline à Jérusalem ; fait symboliquement référence à la Cité de Dieu, à l'Église ou au Ciel.",
      es: "Una colina en Jerusalén; simbólicamente se refiere a la Ciudad de Dios, la Iglesia o el Cielo.",
      de: "Ein Hügel in Jerusalem; bezieht sich symbolisch auf die Stadt Gottes, die Kirche oder den Himmel."
    }
  },
  {
    id: "zucchetto",
    term: { en: "Zucchetto", fr: "Calotte", es: "Solideo", de: "Scheitelkäppchen" },
    definition: {
      en: "The small, round skullcap worn by Catholic clergy. The color denotes rank (White: Pope, Red: Cardinal, Purple: Bishop).",
      fr: "La petite calotte ronde portée par le clergé catholique. La couleur indique le rang (Blanc : Pape, Rouge : Cardinal, Violet : Évêque).",
      es: "El pequeño casquete redondo usado por el clero católico. El color denota el rango (Blanco: Papa, Rojo: Cardenal, Púrpura: Obispo).",
      de: "Das kleine, runde Käppchen, das vom katholischen Klerus getragen wird. Die Farbe zeigt den Rang an (Weiß: Papst, Rot: Kardinal, Violett: Bischof)."
    }
  },
  {
    id: "alb",
    term: { en: "Alb", fr: "Aube", es: "Alba", de: "Albe" },
    definition: {
      en: "A white vestment reaching to the feet, worn by clergy at Mass, symbolizing purity.",
      fr: "Un vêtement blanc descendant jusqu'aux pieds, porté par le clergé à la messe, symbolisant la pureté.",
      es: "Una vestidura blanca que llega hasta los pies, usada por el clero en la Misa, simbolizando la pureza.",
      de: "Ein weißes Gewand, das bis zu den Füßen reicht, vom Klerus bei der Messe getragen wird und Reinheit symbolisiert."
    }
  },
  {
    id: "ambo",
    term: { en: "Ambo", fr: "Ambon", es: "Ambón", de: "Ambo" },
    definition: {
      en: "The stand or lectern in the sanctuary from which the Scripture readings are proclaimed and the homily is preached.",
      fr: "Le pupitre ou lutrin dans le sanctuaire d'où sont proclamées les lectures de l'Écriture et où est prêchée l'homélie.",
      es: "El atril o soporte en el presbiterio desde el cual se proclaman las lecturas de la Escritura y se predica la homilía.",
      de: "Das Pult oder Lesepult im Altarraum, von dem aus die Schriftlesungen verkündet und die Predigt gehalten wird."
    }
  },
  {
    id: "cassock",
    term: { en: "Cassock", fr: "Soutane", es: "Sotana", de: "Soutane" },
    definition: {
      en: "A long, close-fitting garment worn by members of the clergy, usually black (for priests).",
      fr: "Un long vêtement ajusté porté par les membres du clergé, généralement noir (pour les prêtres).",
      es: "Una prenda larga y ajustada usada por miembros del clero, generalmente negra (para sacerdotes).",
      de: "Ein langes, eng anliegendes Gewand, das von Geistlichen getragen wird, meist schwarz (für Priester)."
    }
  },
  {
    id: "censer",
    term: { en: "Censer", fr: "Encensoir", es: "Incensario", de: "Rauchfass" },
    definition: {
      en: "A metal vessel suspended from chains, in which incense is burned during liturgical services.",
      fr: "Un récipient en métal suspendu à des chaînes, dans lequel on brûle de l'encens pendant les services liturgiques.",
      es: "Un recipiente de metal suspendido de cadenas, en el cual se quema incienso durante los servicios litúrgicos.",
      de: "Ein an Ketten aufgehängtes Metallgefäß, in dem während liturgischer Dienste Weihrauch verbrannt wird."
    }
  },
  {
    id: "crozier",
    term: { en: "Crozier", fr: "Crosse", es: "Báculo", de: "Krummstab" },
    definition: {
      en: "The staff carried by a bishop, shaped like a shepherd's crook, symbolizing his role as pastor of the flock.",
      fr: "Le bâton porté par un évêque, en forme de houlette de berger, symbolisant son rôle de pasteur du troupeau.",
      es: "El bastón llevado por un obispo, con forma de cayado de pastor, que simboliza su papel como pastor del rebaño.",
      de: "Der Stab, den ein Bischof trägt, geformt wie ein Hirtenstab, der seine Rolle als Hirte der Herde symbolisiert."
    }
  },
  {
    id: "dalmatic",
    term: { en: "Dalmatic", fr: "Dalmatique", es: "Dalmática", de: "Dalmatik" },
    definition: {
      en: "The wide-sleeved outer vestment worn by a deacon during the celebration of Mass.",
      fr: "Le vêtement extérieur à manches larges porté par un diacre lors de la célébration de la messe.",
      es: "La vestidura exterior de mangas anchas usada por un diácono durante la celebración de la Misa.",
      de: "Das weitärmelige Obergewand, das von einem Diakon während der Messfeier getragen wird."
    }
  },
  {
    id: "humeral-veil",
    term: { en: "Humeral Veil", fr: "Voile huméral", es: "Paño de hombros", de: "Velum" },
    definition: {
      en: "A long cloth worn over the shoulders by the priest when holding the monstrance during Benediction.",
      fr: "Un long tissu porté sur les épaules par le prêtre lorsqu'il tient l'ostensoir pendant la Bénédiction.",
      es: "Un paño largo usado sobre los hombros por el sacerdote cuando sostiene la custodia durante la Bendición.",
      de: "Ein langes Tuch, das der Priester über den Schultern trägt, wenn er die Monstranz während des Segens hält."
    }
  },
  {
    id: "paten",
    term: { en: "Paten", fr: "Patène", es: "Patena", de: "Patene" },
    definition: {
      en: "A small shallow plate, usually gold or silver, used to hold the Eucharistic host.",
      fr: "Une petite assiette peu profonde, généralement en or ou en argent, utilisée pour contenir l'hostie eucharistique.",
      es: "Un plato pequeño y poco profundo, generalmente de oro o plata, utilizado para sostener la hostia eucarística.",
      de: "Ein kleiner flacher Teller, meist aus Gold oder Silber, der die eucharistische Hostie trägt."
    }
  },
  {
    id: "stole",
    term: { en: "Stole", fr: "Étole", es: "Estola", de: "Stola" },
    definition: {
      en: "A long, narrow strip of cloth worn around the neck by priests and bishops; a sign of priestly authority.",
      fr: "Une longue bande de tissu étroite portée autour du cou par les prêtres et les évêques ; un signe de l'autorité sacerdotale.",
      es: "Una tira larga y estrecha de tela usada alrededor del cuello por sacerdotes y obispos; un signo de autoridad sacerdotal.",
      de: "Ein langer, schmaler Stoffstreifen, der von Priestern und Bischöfen um den Hals getragen wird; ein Zeichen priesterlicher Autorität."
    }
  },
  {
    id: "surplice",
    term: { en: "Surplice", fr: "Surplis", es: "Roquete", de: "Chorrock" },
    definition: {
      en: "A white linen vestment with wide sleeves, worn over a cassock by clergy and altar servers.",
      fr: "Un vêtement en lin blanc à manches larges, porté sur une soutane par le clergé et les servants d'autel.",
      es: "Una vestidura de lino blanco con mangas anchas, usada sobre una sotana por el clero y los monaguillos.",
      de: "Ein weißes Leinengewand mit weiten Ärmeln, das von Klerikern und Messdienern über einer Soutane getragen wird."
    }
  },
  {
    id: "thurible",
    term: { en: "Thurible", fr: "Encensoir", es: "Incensario", de: "Rauchfass" },
    definition: {
      en: "The metal container in which incense is burned; another name for a censer.",
      fr: "Le récipient en métal dans lequel l'encens est brûlé ; un autre nom pour l'encensoir.",
      es: "El recipiente de metal en el que se quema el incienso; otro nombre para el incensario.",
      de: "Der Metallbehälter, in dem Weihrauch verbrannt wird; ein anderer Name für das Rauchfass."
    }
  },
];