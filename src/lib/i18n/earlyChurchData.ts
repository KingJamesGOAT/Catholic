import { Language } from './LanguageContext';

export interface QuoteData {
  text: { en: string; fr: string; es: string; de: string };
  reference: { en: string; fr: string; es: string; de: string };
  theme?: string;
}

export interface DocumentData {
  title: { en: string; fr: string; es: string; de: string };
  author: { en: string; fr: string; es: string; de: string };
  date: { en: string; fr: string; es: string; de: string };
  summary: { en: string; fr: string; es: string; de: string };
  primaryQuote: QuoteData;
  additionalQuotes?: QuoteData[];
  pdfFile: string;
  themes?: string[];
}

export const earlyChurchDocumentsData: DocumentData[] = [
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
      de: 'Ein früher Brief, der Barnabas, dem Gefährten des Hl. Paulus, zugeschrieben wird. Zeigt die frühchristliche Verwendung der deuterokanonischen Bücher als Heilige Schrift.'
    },
    primaryQuote: {
      text: {
        en: 'Since, therefore, He was about to be manifested and to suffer in the flesh, His suffering was foreshown. For the prophet speaks against Israel, "Woe to their soul, because they have counseled an evil counsel against themselves" saying, "Let us bind the just one, because he is displeasing to us."',
        fr: 'Puisque, par conséquent, Il devait être manifesté et souffrir dans la chair, Sa souffrance a été préfigurée. Car le prophète parle contre Israël : « Malheur à leur âme, car ils ont délibéré un mauvais conseil contre eux-mêmes » disant : « Lions le juste, car il nous déplaît. »',
        es: 'Puesto que, por lo tanto, Él iba a ser manifestado y a sufrir en la carne, Su sufrimiento fue prefigurado. Porque el profeta habla contra Israel: "Ay de su alma, porque han deliberado un mal consejo contra sí mismos" diciendo: "Atemos al justo, porque nos desagrada."',
        de: 'Da Er nun im Fleisch offenbart werden und leiden sollte, wurde Sein Leiden vorhergesagt. Denn der Prophet spricht gegen Israel: „Wehe ihrer Seele, denn sie haben bösen Rat gegen sich selbst beschlossen", indem er sagte: „Lasst uns den Gerechten binden, denn er missfällt uns."'
      },
      reference: {
        en: 'Letter of Barnabas §6, citing Isaiah 3:9 and Wisdom 2:12',
        fr: 'Lettre de Barnabé §6, citant Isaïe 3:9 et Sagesse 2:12',
        es: 'Carta de Bernabé §6, citando Isaías 3:9 y Sabiduría 2:12',
        de: 'Brief des Barnabas §6, Zitat aus Jesaja 3:9 und Weisheit 2:12'
      },
      theme: 'Deuterocanon'
    },
    pdfFile: 'Letter_of_Barnabas.pdf',
    themes: ['Deuterocanon', 'Scripture', 'Prophecy']
  },
  {
    title: {
      en: 'First Epistle of Clement to the Corinthians',
      fr: 'Première Épître de Clément aux Corinthiens',
      es: 'Primera Epístola de Clemente a los Corintios',
      de: 'Erster Brief des Klemens an die Korinther'
    },
    author: {
      en: 'St. Pope Clement I',
      fr: 'Saint Pape Clément Ier',
      es: 'San Papa Clemente I',
      de: 'Hl. Papst Klemens I.'
    },
    date: {
      en: 'c. 80 AD',
      fr: 'vers 80 apr. J.-C.',
      es: 'c. 80 d.C.',
      de: 'ca. 80 n. Chr.'
    },
    summary: {
      en: 'Written by the fourth Pope to restore order in Corinth. Demonstrates papal authority, apostolic succession, and early use of deuterocanonical books.',
      fr: 'Écrit par le quatrième Pape pour rétablir l\'ordre à Corinthe. Démontre l\'autorité papale, la succession apostolique et l\'utilisation précoce des livres deutérocanoniques.',
      es: 'Escrito por el cuarto Papa para restaurar el orden en Corinto. Demuestra la autoridad papal, la sucesión apostólica y el uso temprano de los libros deuterocanónicos.',
      de: 'Vom vierten Papst geschrieben, um die Ordnung in Korinth wiederherzustellen. Zeigt päpstliche Autorität, apostolische Sukzession und frühen Gebrauch der deuterokanonischen Bücher.'
    },
    primaryQuote: {
      text: {
        en: 'The apostles have preached the gospel to us from the Lord Jesus Christ... they appointed the first fruits of their labors, having first proved them by the Spirit, to be bishops and deacons... they appointed those ministers already mentioned, and afterwards gave instructions, that when these should fall asleep, other approved men should succeed them in their ministry.',
        fr: 'Les apôtres nous ont prêché l\'évangile de la part du Seigneur Jésus-Christ... ils ont établi les prémices de leurs travaux, les ayant d\'abord éprouvés par l\'Esprit, comme évêques et diacres... ils ont établi ces ministres déjà mentionnés, et ont ensuite donné des instructions pour que, lorsqu\'ils s\'endormiraient, d\'autres hommes approuvés leur succèdent dans leur ministère.',
        es: 'Los apóstoles nos han predicado el evangelio del Señor Jesucristo... nombraron las primicias de sus labores, habiéndolos probado primero por el Espíritu, como obispos y diáconos... nombraron a esos ministros ya mencionados, y luego dieron instrucciones para que, cuando estos durmieran, otros hombres aprobados les sucedieran en su ministerio.',
        de: 'Die Apostel haben uns das Evangelium vom Herrn Jesus Christus gepredigt... sie setzten die Erstlinge ihrer Arbeit ein, nachdem sie sie durch den Geist geprüft hatten, als Bischöfe und Diakone... sie setzten jene bereits erwähnten Diener ein und gaben danach Anweisungen, dass, wenn diese entschlafen sollten, andere bewährte Männer ihnen in ihrem Dienst nachfolgen sollten.'
      },
      reference: {
        en: '1 Clement §§42, 44',
        fr: '1 Clément §§42, 44',
        es: '1 Clemente §§42, 44',
        de: '1. Klemens §§42, 44'
      },
      theme: 'Succession'
    },
    additionalQuotes: [
      {
        text: {
          en: 'By the word of His might He established all things, and by His word He can overthrow them. "Who shall say unto Him, \'What have you done?\' or, \'Who shall resist the power of His strength?\'"',
          fr: 'Par la parole de Sa puissance, Il a établi toutes choses, et par Sa parole Il peut les renverser. « Qui Lui dira : "Qu\'as-tu fait ?" ou "Qui résistera à la puissance de Sa force ?" »',
          es: 'Por la palabra de Su poder Él estableció todas las cosas, y por Su palabra Él puede derribarlas. "¿Quién le dirá: \'Qué has hecho?\' o \'¿Quién resistirá el poder de Su fuerza?\'"',
          de: 'Durch das Wort Seiner Macht hat Er alles geschaffen, und durch Sein Wort kann Er es stürzen. „Wer wird zu Ihm sagen: \'Was hast du getan?\' oder \'Wer wird der Macht Seiner Stärke widerstehen?\'"'
        },
        reference: {
          en: '1 Clement §27, citing Wisdom 12:12',
          fr: '1 Clément §27, citant Sagesse 12:12',
          es: '1 Clemente §27, citando Sabiduría 12:12',
          de: '1. Klemens §27, Zitat aus Weisheit 12:12'
        },
        theme: 'Deuterocanon'
      },
      {
        text: {
          en: 'You therefore, who laid the foundation of this sedition, submit yourselves to the presbyters... If, however, any shall disobey the words spoken by Him through us, let them know that they will involve themselves in transgression and serious danger.',
          fr: 'Vous donc, qui avez posé les fondements de cette sédition, soumettez-vous aux presbytres... Si toutefois quelqu\'un désobéit aux paroles prononcées par Lui à travers nous, qu\'il sache qu\'il s\'impliquera dans la transgression et le danger grave.',
          es: 'Ustedes, por lo tanto, que pusieron el fundamento de esta sedición, sométanse a los presbíteros... Si, sin embargo, alguien desobedece las palabras habladas por Él a través de nosotros, que sepa que se involucrará en transgresión y peligro grave.',
          de: 'Ihr also, die ihr den Grundstein zu diesem Aufruhr gelegt habt, unterwerfet euch den Presbytern... Wenn jedoch jemand den Worten, die Er durch uns gesprochen hat, nicht gehorcht, so soll er wissen, dass er sich in Übertretung und ernste Gefahr begibt.'
        },
        reference: {
          en: '1 Clement §§57-59',
          fr: '1 Clément §§57-59',
          es: '1 Clemente §§57-59',
          de: '1. Klemens §§57-59'
        },
        theme: 'Authority'
      },
      {
        text: {
          en: 'The church of God which sojourns at Rome, to the church of God sojourning at Corinth... that shameful and detestable sedition... has suffered grievous injury. It is right and holy therefore, men and brethren, rather to obey God than to follow those who, through pride and sedition, have become the leaders of a detestable emulation.',
          fr: 'L\'église de Dieu qui séjourne à Rome, à l\'église de Dieu séjournant à Corinthe... cette sédition honteuse et détestable... a subi une blessure grave. Il est donc juste et saint, hommes et frères, d\'obéir plutôt à Dieu que de suivre ceux qui, par orgueil et sédition, sont devenus les meneurs d\'une émulation détestable.',
          es: 'La iglesia de Dios que peregrina en Roma, a la iglesia de Dios que peregrina en Corinto... esa sedición vergonzosa y detestable... ha sufrido una grave lesión. Es justo y santo, por lo tanto, hombres y hermanos, obedecer a Dios antes que seguir a aquellos que, por orgullo y sedición, se han convertido en líderes de una emulación detestable.',
          de: 'Die Kirche Gottes, die in Rom weilt, an die Kirche Gottes, die in Korinth weilt... diese schändliche und verabscheuungswürdige Rebellion... hat schweren Schaden erlitten. Es ist daher recht und heilig, Männer und Brüder, Gott zu gehorchen, anstatt denen zu folgen, die durch Stolz und Aufruhr zu Anführern einer verabscheuungswürdigen Nachahmung geworden sind.'
        },
        reference: {
          en: '1 Clement §§1, 14',
          fr: '1 Clément §§1, 14',
          es: '1 Clemente §§1, 14',
          de: '1. Klemens §§1, 14'
        },
        theme: 'Primacy'
      }
    ],
    pdfFile: 'Clement_of_Rome.pdf',
    themes: ['Authority', 'Succession', 'Primacy', 'Deuterocanon']
  },
  {
    title: {
      en: 'Letters of Ignatius of Antioch',
      fr: 'Lettres d\'Ignace d\'Antioche',
      es: 'Cartas de Ignacio de Antioquía',
      de: 'Briefe des Ignatius von Antiochien'
    },
    author: {
      en: 'St. Ignatius of Antioch',
      fr: 'Saint Ignace d\'Antioche',
      es: 'San Ignacio de Antioquía',
      de: 'Hl. Ignatius von Antiochien'
    },
    date: {
      en: 'c. 107 AD',
      fr: 'vers 107 apr. J.-C.',
      es: 'c. 107 d.C.',
      de: 'ca. 107 n. Chr.'
    },
    summary: {
      en: 'Seven letters written en route to martyrdom in Rome. First use of "Catholic Church," affirms episcopal structure, Real Presence, and Roman primacy.',
      fr: 'Sept lettres écrites en route vers le martyre à Rome. Première utilisation de « l\'Église catholique », affirme la structure épiscopale, la Présence réelle et la primauté romaine.',
      es: 'Siete cartas escritas en camino al martirio en Roma. Primer uso de "Iglesia Católica", afirma la estructura episcopal, la Presencia Real y la primacía romana.',
      de: 'Sieben Briefe, geschrieben auf dem Weg zum Martyrium in Rom. Erste Verwendung von „Katholische Kirche", bestätigt die bischöfliche Struktur, die wirkliche Gegenwart und den römischen Primat.'
    },
    primaryQuote: {
      text: {
        en: 'Let no man do anything connected with the Church without the bishop. Let that be deemed a proper Eucharist, which is administered either by the bishop, or by one to whom he has entrusted it. Wherever the bishop shall appear, there let the multitude also be; even as, wherever Jesus Christ is, there is the Catholic Church.',
        fr: 'Que personne ne fasse rien qui concerne l\'Église sans l\'évêque. Que soit considérée comme une Eucharistie légitime celle qui est célébrée soit par l\'évêque, soit par celui à qui il l\'a confiée. Là où paraît l\'évêque, que soit aussi la multitude ; de même que là où est Jésus-Christ, là est l\'Église catholique.',
        es: 'Que nadie haga nada relacionado con la Iglesia sin el obispo. Que se considere como una Eucaristía apropiada aquella que es administrada por el obispo, o por uno a quien él se la ha confiado. Dondequiera que aparezca el obispo, allí esté también la multitud; así como, dondequiera que esté Jesucristo, allí está la Iglesia Católica.',
        de: 'Niemand soll irgendetwas tun, was mit der Kirche zu tun hat, ohne den Bischof. Als rechtmäßige Eucharistie gelte jene, die vom Bischof oder von einem, dem er es anvertraut hat, gefeiert wird. Wo der Bischof erscheint, dort sei auch die Menge; ebenso wie dort, wo Jesus Christus ist, dort ist die katholische Kirche.'
      },
      reference: {
        en: 'Letter to the Smyrnaeans §8',
        fr: 'Lettre aux Smyrniotes §8',
        es: 'Carta a los Esmirnenses §8',
        de: 'Brief an die Smyrnäer §8'
      },
      theme: 'Catholic Church'
    },
    additionalQuotes: [
      {
        text: {
          en: 'Ignatius... to the Church which has obtained mercy... which is beloved and enlightened... which also presides in the place of the region of the Romans, worthy of God, worthy of honor, worthy of the highest happiness... and which presides over love, is named from Christ, and from the Father.',
          fr: 'Ignace... à l\'Église qui a obtenu miséricorde... qui est aimée et éclairée... qui préside aussi dans la région des Romains, digne de Dieu, digne d\'honneur, digne du plus grand bonheur... et qui préside à la charité, nommée du Christ et du Père.',
          es: 'Ignacio... a la Iglesia que ha obtenido misericordia... que es amada e iluminada... que también preside en la región de los Romanos, digna de Dios, digna de honor, digna de la mayor felicidad... y que preside en el amor, nombrada de Cristo y del Padre.',
          de: 'Ignatius... an die Kirche, die Barmherzigkeit erlangt hat... die geliebt und erleuchtet ist... die auch im Gebiet der Römer den Vorsitz führt, Gottes würdig, der Ehre würdig, des höchsten Glücks würdig... und die über die Liebe den Vorsitz führt, benannt nach Christus und dem Vater.'
        },
        reference: {
          en: 'Letter to the Romans, Introduction',
          fr: 'Lettre aux Romains, Introduction',
          es: 'Carta a los Romanos, Introducción',
          de: 'Brief an die Römer, Einleitung'
        },
        theme: 'Primacy'
      },
      {
        text: {
          en: 'You have never envied anyone; you have taught others... I do not, as Peter and Paul, issue commandments unto you.',
          fr: 'Vous n\'avez jamais envié personne ; vous avez enseigné aux autres... Je ne vous donne pas de commandements comme Pierre et Paul.',
          es: 'Nunca han envidiado a nadie; han enseñado a otros... No les doy mandamientos como Pedro y Pablo.',
          de: 'Ihr habt niemals jemanden beneidet; ihr habt andere gelehrt... Ich gebe euch keine Gebote wie Petrus und Paulus.'
        },
        reference: {
          en: 'Letter to the Romans §§3-4',
          fr: 'Lettre aux Romains §§3-4',
          es: 'Carta a los Romanos §§3-4',
          de: 'Brief an die Römer §§3-4'
        },
        theme: 'Primacy'
      }
    ],
    pdfFile: 'Ignatius_of_Antioch.pdf',
    themes: ['Catholic Church', 'Eucharist', 'Authority', 'Primacy']
  },
  {
    title: {
      en: 'Epistle to the Philippians',
      fr: 'Épître aux Philippiens',
      es: 'Epístola a los Filipenses',
      de: 'Brief an die Philipper'
    },
    author: {
      en: 'St. Polycarp',
      fr: 'Saint Polycarpe',
      es: 'San Policarpo',
      de: 'Hl. Polykarp'
    },
    date: {
      en: 'c. 110–140 AD',
      fr: 'vers 110-140 apr. J.-C.',
      es: 'c. 110-140 d.C.',
      de: 'ca. 110-140 n. Chr.'
    },
    summary: {
      en: 'Letter from direct disciple of St. John the Apostle. Affirms faith and works, cites deuterocanonical Scripture as authoritative.',
      fr: 'Lettre d\'un disciple direct de saint Jean l\'Apôtre. Affirme la foi et les œuvres, cite l\'Écriture deutérocanonique comme faisant autorité.',
      es: 'Carta de un discípulo directo de San Juan Apóstol. Afirma la fe y las obras, cita las Escrituras deuterocanónicas como autoritativas.',
      de: 'Brief eines direkten Schülers des Hl. Johannes des Apostels. Bekräftigt Glaube und Werke, zitiert die deuterokanonische Schrift als maßgebend.'
    },
    primaryQuote: {
      text: {
        en: 'Stand fast, therefore, in these things... When you can do good, defer it not, because "alms delivers from death." Be all of you subject one to another, "having your conduct blameless among the Gentiles," that you may both receive praise for your good works, and the Lord may not be blasphemed through you.',
        fr: 'Tenez-vous donc fermes dans ces choses... Quand vous pouvez faire le bien, ne le différez pas, car « l\'aumône délivre de la mort ». Soyez tous soumis les uns aux autres, « ayant une conduite irréprochable parmi les Gentils », afin que vous receviez des louanges pour vos bonnes œuvres et que le Seigneur ne soit pas blasphémé à cause de vous.',
        es: 'Permanezcan firmes, por lo tanto, en estas cosas... Cuando puedan hacer el bien, no lo difieran, porque "la limosna libra de la muerte." Sean todos sujetos unos a otros, "teniendo su conducta intachable entre los gentiles," para que reciban alabanza por sus buenas obras y el Señor no sea blasfemado por ustedes.',
        de: 'Stehet daher fest in diesen Dingen... Wenn ihr Gutes tun könnt, zögert nicht, denn „Almosen rettet vom Tod." Seid alle einander untertan, „führet euren Wandel untadelig unter den Heiden," damit ihr Lob für eure guten Werke empfanget und der Herr nicht euretwegen gelästert werde.'
      },
      reference: {
        en: 'Epistle to the Philippians §10, citing Tobit 4:10, 12:9',
        fr: 'Épître aux Philippiens §10, citant Tobie 4:10, 12:9',
        es: 'Epístola a los Filipenses §10, citando Tobías 4:10, 12:9',
        de: 'Brief an die Philipper §10, Zitat aus Tobit 4:10, 12:9'
      },
      theme: 'Deuterocanon'
    },
    pdfFile: 'Polycarp_Epistle_Philippians.pdf',
    themes: ['Faith', 'Works', 'Deuterocanon']
  },
  {
    title: {
      en: 'Memoirs of Hegesippus',
      fr: 'Mémoires d\'Hégésippe',
      es: 'Memorias de Hegesipo',
      de: 'Erinnerungen des Hegesippus'
    },
    author: {
      en: 'St. Hegesippus',
      fr: 'Saint Hégésippe',
      es: 'San Hegesipo',
      de: 'Hl. Hegesippus'
    },
    date: {
      en: 'c. 130 AD',
      fr: 'vers 130 apr. J.-C.',
      es: 'c. 130 d.C.',
      de: 'ca. 130 n. Chr.'
    },
    summary: {
      en: 'Early Church historian who documented apostolic succession in Rome. His testimony establishes the continuity of papal succession.',
      fr: 'Historien de l\'Église primitive qui a documenté la succession apostolique à Rome. Son témoignage établit la continuité de la succession papale.',
      es: 'Historiador de la Iglesia primitiva que documentó la sucesión apostólica en Roma. Su testimonio establece la continuidad de la sucesión papal.',
      de: 'Früher Kirchenhistoriker, der die apostolische Sukzession in Rom dokumentierte. Sein Zeugnis begründet die Kontinuität der päpstlichen Nachfolge.'
    },
    primaryQuote: {
      text: {
        en: 'And when I had come to Rome I remained there until Pope Anicetus, whose deacon was Eleutherus. And Anicetus was succeeded by Soter, and he by Eleutherus. In every succession, and in every city that is held which is preached by the law and the prophets and the Lord.',
        fr: 'Et lorsque je suis arrivé à Rome, j\'y suis resté jusqu\'au Pape Anicet, dont le diacre était Éleuthère. Et Anicet a été succédé par Soter, et lui par Éleuthère. Dans chaque succession, et dans chaque ville est maintenu ce qui est prêché par la loi, les prophètes et le Seigneur.',
        es: 'Y cuando llegué a Roma permanecí allí hasta el Papa Aniceto, cuyo diácono era Eleuterio. Y Aniceto fue sucedido por Sotero, y él por Eleuterio. En cada sucesión, y en cada ciudad se mantiene lo que es predicado por la ley, los profetas y el Señor.',
        de: 'Und als ich nach Rom kam, blieb ich dort bis zu Papst Anicetus, dessen Diakon Eleutherus war. Und Anicetus wurde von Soter nachgefolgt, und er von Eleutherus. In jeder Nachfolge und in jeder Stadt wird das gehalten, was durch das Gesetz, die Propheten und den Herrn gepredigt wird.'
      },
      reference: {
        en: 'Memoirs, quoted in Eusebius, Church History Book 4, Ch. 22, §3',
        fr: 'Mémoires, cité dans Eusèbe, Histoire Ecclésiastique Livre 4, Ch. 22, §3',
        es: 'Memorias, citado en Eusebio, Historia Eclesiástica Libro 4, Cap. 22, §3',
        de: 'Erinnerungen, zitiert in Eusebius, Kirchengeschichte Buch 4, Kap. 22, §3'
      },
      theme: 'Succession'
    },
    pdfFile: 'Hegesippus_Memoirs.pdf',
    themes: ['Succession', 'Primacy', 'Tradition']
  },
  {
    title: {
      en: 'Martyrdom of Polycarp',
      fr: 'Martyre de Polycarpe',
      es: 'Martirio de Policarpo',
      de: 'Martyrium des Polykarp'
    },
    author: {
      en: 'Eyewitness (Church of Smyrna)',
      fr: 'Témoin oculaire (Église de Smyrne)',
      es: 'Testigo ocular (Iglesia de Esmirna)',
      de: 'Augenzeuge (Kirche von Smyrna)'
    },
    date: {
      en: 'c. 155 AD',
      fr: 'vers 155 apr. J.-C.',
      es: 'c. 155 d.C.',
      de: 'ca. 155 n. Chr.'
    },
    summary: {
      en: 'Eyewitness account of St. Polycarp\'s martyrdom. Second use of term "Catholic Church" in Christian literature.',
      fr: 'Récit de témoin oculaire du martyre de saint Polycarpe. Deuxième utilisation du terme « Église catholique » dans la littérature chrétienne.',
      es: 'Relato de testigo ocular del martirio de San Policarpo. Segundo uso del término "Iglesia Católica" en la literatura cristiana.',
      de: 'Augenzeugenberichte über das Martyrium des Hl. Polykarp. Zweite Verwendung des Begriffs „Katholische Kirche" in der christlichen Literatur.'
    },
    primaryQuote: {
      text: {
        en: 'This, then, is the account of the blessed Polycarp... He was not merely an illustrious teacher, but also a pre-eminent martyr... having through patience overcome the unjust governor, and thus acquired the crown of immortality, he now, with the apostles and all the righteous, rejoicingly glorifies God... and blesses our Lord Jesus Christ, the Savior of our souls, the Governor of our bodies, and the Shepherd of the Catholic Church throughout the world.',
        fr: 'Voici donc le récit du bienheureux Polycarpe... Il n\'était pas seulement un enseignant illustre, mais aussi un martyr éminent... ayant par la patience vaincu le gouverneur injuste, et ainsi acquis la couronne d\'immortalité, il glorifie maintenant avec joie Dieu, avec les apôtres et tous les justes... et bénit notre Seigneur Jésus-Christ, le Sauveur de nos âmes, le Gouverneur de nos corps, et le Pasteur de l\'Église catholique dans le monde entier.',
        es: 'Este, entonces, es el relato del bienaventurado Policarpo... No fue meramente un maestro ilustre, sino también un mártir preeminente... habiendo superado con paciencia al gobernador injusto, y así adquirido la corona de inmortalidad, ahora, con los apóstoles y todos los justos, glorifica gozosamente a Dios... y bendice a nuestro Señor Jesucristo, el Salvador de nuestras almas, el Gobernador de nuestros cuerpos, y el Pastor de la Iglesia Católica en todo el mundo.',
        de: 'Dies ist nun der Bericht über den seligen Polykarp... Er war nicht nur ein herausragender Lehrer, sondern auch ein hervorragender Märtyrer... nachdem er durch Geduld den ungerechten Statthalter überwunden und so die Krone der Unsterblichkeit erlangt hatte, verherrlicht er nun freudig mit den Aposteln und allen Gerechten Gott... und segnet unseren Herrn Jesus Christus, den Retter unserer Seelen, den Lenker unserer Leiber und den Hirten der katholischen Kirche in der ganzen Welt.'
      },
      reference: {
        en: 'Martyrdom of Polycarp §19',
        fr: 'Martyre de Polycarpe §19',
        es: 'Martirio de Policarpo §19',
        de: 'Martyrium des Polykarp §19'
      },
      theme: 'Catholic Church'
    },
    additionalQuotes: [
      {
        text: {
          en: 'Like a noble ram... he was ready to be offered as a whole burnt offering to God.',
          fr: 'Comme un bélier noble... il était prêt à être offert comme holocauste entier à Dieu.',
          es: 'Como un carnero noble... estaba listo para ser ofrecido como holocausto completo a Dios.',
          de: 'Wie ein edler Widder... war er bereit, als ganzes Brandopfer Gott dargebracht zu werden.'
        },
        reference: {
          en: 'Martyrdom §14',
          fr: 'Martyre §14',
          es: 'Martirio §14',
          de: 'Martyrium §14'
        },
        theme: 'Martyrdom'
      }
    ],
    pdfFile: 'Martyrdom_of_Polycarp.pdf',
    themes: ['Martyrdom', 'Catholic Church', 'Witness']
  },
  {
    title: {
      en: 'First Apology & Dialogue with Trypho',
      fr: 'Première Apologie & Dialogue avec Tryphon',
      es: 'Primera Apología & Diálogo con Trifón',
      de: 'Erste Apologie & Dialog mit Tryphon'
    },
    author: {
      en: 'St. Justin Martyr',
      fr: 'Saint Justin Martyr',
      es: 'San Justino Mártir',
      de: 'Hl. Justin der Märtyrer'
    },
    date: {
      en: 'c. 155–165 AD',
      fr: 'vers 155-165 apr. J.-C.',
      es: 'c. 155-165 d.C.',
      de: 'ca. 155-165 n. Chr.'
    },
    summary: {
      en: 'Defense of Christianity to Roman Emperor. Explains Real Presence in Eucharist, references "Catholic faith," and develops Marian typology.',
      fr: 'Défense du christianisme à l\'Empereur romain. Explique la Présence réelle dans l\'Eucharistie, fait référence à la « foi catholique » et développe la typologie mariale.',
      es: 'Defensa del cristianismo al Emperador Romano. Explica la Presencia Real en la Eucaristía, hace referencia a la "fe católica" y desarrolla la tipología mariana.',
      de: 'Verteidigung des Christentums vor dem römischen Kaiser. Erklärt die wirkliche Gegenwart in der Eucharistie, verweist auf den „katholischen Glauben" und entwickelt die marianische Typologie.'
    },
    primaryQuote: {
      text: {
        en: 'Not as common bread and common drink do we receive these; but... we have been taught that the food which is blessed by the prayer of His word, and from which our blood and flesh by transmutation are nourished, is the flesh and blood of that Jesus who was made flesh.',
        fr: 'Nous ne recevons pas cela comme du pain ordinaire et une boisson ordinaire ; mais... on nous a enseigné que la nourriture bénie par la prière de Sa parole, et dont notre sang et notre chair sont nourris par transmutation, est la chair et le sang de ce Jésus qui s\'est fait chair.',
        es: 'No recibimos esto como pan común y bebida común; pero... se nos ha enseñado que el alimento que es bendecido por la oración de Su palabra, y del cual nuestra sangre y carne son nutridas por transmutación, es la carne y sangre de ese Jesús que se hizo carne.',
        de: 'Nicht als gewöhnliches Brot und gewöhnliches Getränk empfangen wir dies; sondern... uns wurde gelehrt, dass die Speise, die durch das Gebet Seines Wortes gesegnet ist und durch die unser Blut und Fleisch durch Verwandlung genährt werden, das Fleisch und Blut jenes Jesus ist, der Fleisch geworden ist.'
      },
      reference: {
        en: 'First Apology §66',
        fr: 'Première Apologie §66',
        es: 'Primera Apología §66',
        de: 'Erste Apologie §66'
      },
      theme: 'Eucharist'
    },
    additionalQuotes: [
      {
        text: {
          en: 'For the men of former generations, who instituted private and public rites in honor of such as were more powerful, caused forgetfulness of the Catholic faith to take possession of their posterity.',
          fr: 'Car les hommes des générations précédentes, qui ont institué des rites privés et publics en l\'honneur de ceux qui étaient plus puissants, ont causé l\'oubli de la foi catholique à s\'emparer de leur postérité.',
          es: 'Porque los hombres de generaciones anteriores, que instituyeron ritos privados y públicos en honor de los más poderosos, causaron que el olvido de la fe católica se apoderara de su posteridad.',
          de: 'Denn die Menschen früherer Generationen, die private und öffentliche Riten zu Ehren der Mächtigeren einführten, verursachten, dass die Vergessenheit des katholischen Glaubens von ihrer Nachkommenschaft Besitz ergriff.'
        },
        reference: {
          en: 'On the Sole Government of God, Ch. 1',
          fr: 'Sur le Gouvernement Unique de Dieu, Ch. 1',
          es: 'Sobre el Gobierno Único de Dios, Cap. 1',
          de: 'Über die alleinige Herrschaft Gottes, Kap. 1'
        },
        theme: 'Catholic Church'
      },
      {
        text: {
          en: '[Jesus] became man by the Virgin, in order that the disobedience which proceeded from the serpent might receive its destruction in the same manner in which it derived its origin. For Eve, who was a virgin and undefiled, having conceived the word of the serpent, brought forth disobedience and death. But the Virgin Mary received faith and joy... And by her has He been born... and by whom God destroys both the serpent and those angels and men who are like him.',
          fr: '[Jésus] est devenu homme par la Vierge, afin que la désobéissance qui venait du serpent reçoive sa destruction de la même manière qu\'elle a eu son origine. Car Ève, qui était vierge et sans souillure, ayant conçu la parole du serpent, a enfanté la désobéissance et la mort. Mais la Vierge Marie a reçu la foi et la joie... Et par elle Il est né... et par qui Dieu détruit à la fois le serpent et ces anges et hommes qui lui ressemblent.',
          es: '[Jesús] se hizo hombre por la Virgen, para que la desobediencia que procedió de la serpiente recibiera su destrucción de la misma manera en que tuvo su origen. Porque Eva, que era virgen e inmaculada, habiendo concebido la palabra de la serpiente, dio a luz desobediencia y muerte. Pero la Virgen María recibió fe y alegría... Y por ella Él ha nacido... y por quien Dios destruye tanto a la serpiente como a aquellos ángeles y hombres que son como él.',
          de: '[Jesus] wurde durch die Jungfrau Mensch, damit der Ungehorsam, der von der Schlange ausging, auf dieselbe Weise seine Zerstörung empfange, wie er seinen Ursprung hatte. Denn Eva, die eine Jungfrau und unbefleckt war, empfing das Wort der Schlange und brachte Ungehorsam und Tod hervor. Aber die Jungfrau Maria empfing Glauben und Freude... Und durch sie wurde Er geboren... und durch den Gott sowohl die Schlange als auch jene Engel und Menschen vernichtet, die ihm gleichen.'
        },
        reference: {
          en: 'Dialogue with Trypho §100',
          fr: 'Dialogue avec Tryphon §100',
          es: 'Diálogo con Trifón ��100',
          de: 'Dialog mit Tryphon §100'
        },
        theme: 'Mary'
      }
    ],
    pdfFile: 'Justin_martyr.pdf',
    themes: ['Eucharist', 'Catholic Church', 'Mary', 'Apologetics']
  },
  {
    title: {
      en: 'Diatessaron',
      fr: 'Diatessaron',
      es: 'Diatessaron',
      de: 'Diatessaron'
    },
    author: {
      en: 'Tatian the Syrian',
      fr: 'Tatien le Syrien',
      es: 'Taciano el Sirio',
      de: 'Tatian der Syrer'
    },
    date: {
      en: 'c. 160–175 AD',
      fr: 'vers 160-175 apr. J.-C.',
      es: 'c. 160-175 d.C.',
      de: 'ca. 160-175 n. Chr.'
    },
    summary: {
      en: 'Gospel harmony demonstrating early recognition of Peter as the Rock upon which Christ built His Church.',
      fr: 'Harmonie évangélique démontrant la reconnaissance précoce de Pierre comme le Roc sur lequel le Christ a bâti Son Église.',
      es: 'Armonía evangélica que demuestra el reconocimiento temprano de Pedro como la Roca sobre la cual Cristo edificó Su Iglesia.',
      de: 'Evangelienharmonie, die die frühe Anerkennung des Petrus als den Felsen zeigt, auf dem Christus Seine Kirche gebaut hat.'
    },
    primaryQuote: {
      text: {
        en: 'He said unto them, "And you, what say you that I am?" Simon Cephas answered and said, "Thou art the Messiah, the Son of the living God." Jesus answered and said unto him, "Blessed art thou, Simon son of Jonah... thou art Cephas, and on this rock will I build my church; and the gates of Hades shall not prevail against it."',
        fr: 'Il leur dit : « Et vous, que dites-vous que je suis ? » Simon Céphas répondit et dit : « Tu es le Messie, le Fils du Dieu vivant. » Jésus répondit et lui dit : « Heureux es-tu, Simon fils de Jonas... tu es Céphas, et sur ce roc je bâtirai mon église ; et les portes de l\'Hadès ne prévaudront pas contre elle. »',
        es: 'Él les dijo: "Y ustedes, ¿qué dicen que soy?" Simón Cefas respondió y dijo: "Tú eres el Mesías, el Hijo del Dios viviente." Jesús respondió y le dijo: "Bienaventurado eres, Simón hijo de Jonás... tú eres Cefas, y sobre esta roca edificaré mi iglesia; y las puertas del Hades no prevalecerán contra ella."',
        de: 'Er sprach zu ihnen: „Und ihr, was sagt ihr, wer ich bin?" Simon Kephas antwortete und sprach: „Du bist der Messias, der Sohn des lebendigen Gottes." Jesus antwortete und sprach zu ihm: „Selig bist du, Simon, Sohn des Jona... du bist Kephas, und auf diesem Felsen werde ich meine Kirche bauen; und die Pforten der Hölle werden sie nicht überwältigen."'
      },
      reference: {
        en: 'Diatessaron §23, citing Matthew 16:16-18',
        fr: 'Diatessaron §23, citant Matthieu 16:16-18',
        es: 'Diatessaron §23, citando Mateo 16:16-18',
        de: 'Diatessaron §23, Zitat aus Matthäus 16:16-18'
      },
      theme: 'Primacy'
    },
    pdfFile: 'Tatian_Diatessaron.pdf',
    themes: ['Primacy', 'Rock', 'Authority']
  },
  {
    title: {
      en: 'To Diognetus',
      fr: 'À Diognète',
      es: 'A Diogneto',
      de: 'An Diognet'
    },
    author: {
      en: 'Mathetes',
      fr: 'Mathètes',
      es: 'Matetes',
      de: 'Mathetes'
    },
    date: {
      en: 'c. 160 AD',
      fr: 'vers 160 apr. J.-C.',
      es: 'c. 160 d.C.',
      de: 'ca. 160 n. Chr.'
    },
    summary: {
      en: 'Anonymous letter defending Christianity. References preservation of apostolic tradition through the Church.',
      fr: 'Lettre anonyme défendant le christianisme. Fait référence à la préservation de la tradition apostolique par l\'Église.',
      es: 'Carta anónima defendiendo el cristianismo. Hace referencia a la preservación de la tradición apostólica a través de la Iglesia.',
      de: 'Anonymer Brief zur Verteidigung des Christentums. Verweist auf die Bewahrung der apostolischen Tradition durch die Kirche.'
    },
    primaryQuote: {
      text: {
        en: 'This is He who, being from everlasting, is today called the Son; through whom the Church is enriched, and grace, widely spread, increases in the saints... Then the fear of the law is chanted, and the grace of the prophets is known, and the faith of the gospels is established, and the tradition of the Apostles is preserved, and the grace of the Church exults.',
        fr: 'C\'est Lui qui, étant de toute éternité, est aujourd\'hui appelé le Fils ; par qui l\'Église est enrichie, et la grâce, largement répandue, augmente dans les saints... Alors la crainte de la loi est chantée, et la grâce des prophètes est connue, et la foi des évangiles est établie, et la tradition des Apôtres est préservée, et la grâce de l\'Église exulte.',
        es: 'Este es Él quien, siendo desde siempre, hoy es llamado el Hijo; por quien la Iglesia es enriquecida, y la gracia, ampliamente difundida, aumenta en los santos... Entonces el temor de la ley es cantado, y la gracia de los profetas es conocida, y la fe de los evangelios es establecida, y la tradición de los Apóstoles es preservada, y la gracia de la Iglesia se regocija.',
        de: 'Dies ist Er, der von Ewigkeit her ist und heute der Sohn genannt wird; durch den die Kirche bereichert wird, und die Gnade, weit verbreitet, in den Heiligen zunimmt... Dann wird die Furcht des Gesetzes besungen, und die Gnade der Propheten wird erkannt, und der Glaube der Evangelien wird begründet, und die Tradition der Apostel wird bewahrt, und die Gnade der Kirche jubelt.'
      },
      reference: {
        en: 'To Diognetus §11',
        fr: 'À Diognète §11',
        es: 'A Diogneto §11',
        de: 'An Diognet §11'
      },
      theme: 'Tradition'
    },
    pdfFile: 'To_Diognetus.pdf',
    themes: ['Tradition', 'Church', 'Apostles']
  },
  {
    title: {
      en: 'Letter to Pope Soter',
      fr: 'Lettre au Pape Soter',
      es: 'Carta al Papa Sotero',
      de: 'Brief an Papst Soter'
    },
    author: {
      en: 'St. Dionysius of Corinth',
      fr: 'Saint Denys de Corinthe',
      es: 'San Dionisio de Corinto',
      de: 'Hl. Dionysius von Korinth'
    },
    date: {
      en: 'c. 170 AD',
      fr: 'vers 170 apr. J.-C.',
      es: 'c. 170 d.C.',
      de: 'ca. 170 n. Chr.'
    },
    summary: {
      en: 'Letter to Pope Soter affirming Peter and Paul\'s joint founding of Rome and Corinth, and Roman charitable primacy.',
      fr: 'Lettre au Pape Soter affirmant la fondation conjointe de Rome et Corinthe par Pierre et Paul, et la primauté charitable romaine.',
      es: 'Carta al Papa Sotero afirmando la fundación conjunta de Roma y Corinto por Pedro y Pablo, y la primacía caritativa romana.',
      de: 'Brief an Papst Soter, der die gemeinsame Gründung Roms und Korinths durch Petrus und Paulus sowie den römischen karitativen Primat bestätigt.'
    },
    primaryQuote: {
      text: {
        en: 'You have thus by such an admonition bound together the planting of Peter and of Paul at Rome and Corinth. For both of them planted and likewise taught us in our Corinth. And they taught together in like manner in Italy, and suffered martyrdom at the same time.',
        fr: 'Vous avez ainsi par une telle admonition lié ensemble la plantation de Pierre et de Paul à Rome et Corinthe. Car tous deux ont planté et également enseigné chez nous à Corinthe. Et ils ont enseigné ensemble de la même manière en Italie, et ont subi le martyre en même temps.',
        es: 'Ustedes han así, por tal amonestación, unido la plantación de Pedro y Pablo en Roma y Corinto. Porque ambos plantaron y también nos enseñaron en nuestra Corinto. Y enseñaron juntos de la misma manera en Italia, y sufrieron el martirio al mismo tiempo.',
        de: 'Ihr habt somit durch solche Ermahnung die Pflanzung von Petrus und Paulus in Rom und Korinth miteinander verbunden. Denn beide haben gepflanzt und uns auch in unserem Korinth gelehrt. Und sie lehrten zusammen in gleicher Weise in Italien und erlitten zur gleichen Zeit das Martyrium.'
      },
      reference: {
        en: 'Letter to Pope Soter, quoted in Eusebius, Church History Book 2, Ch. 28, §8',
        fr: 'Lettre au Pape Soter, cité dans Eusèbe, Histoire Ecclésiastique Livre 2, Ch. 28, §8',
        es: 'Carta al Papa Sotero, citado en Eusebio, Historia Eclesiástica Libro 2, Cap. 28, §8',
        de: 'Brief an Papst Soter, zitiert in Eusebius, Kirchengeschichte Buch 2, Kap. 28, §8'
      },
      theme: 'Primacy'
    },
    additionalQuotes: [
      {
        text: {
          en: 'From the beginning it has been your practice to do good to all the brethren in various ways... Thus relieving the want of the needy... you Romans keep up the hereditary customs of the Romans, which your blessed bishop Soter has not only maintained, but also added to.',
          fr: 'Depuis le début, il a été votre pratique de faire du bien à tous les frères de diverses manières... Soulageant ainsi le besoin des nécessiteux... vous Romains maintenez les coutumes héréditaires des Romains, que votre bienheureux évêque Soter a non seulement maintenues, mais aussi augmentées.',
          es: 'Desde el principio ha sido su práctica hacer el bien a todos los hermanos de diversas maneras... Aliviando así la necesidad de los necesitados... ustedes romanos mantienen las costumbres hereditarias de los romanos, que su bendito obispo Sotero no solo ha mantenido, sino también aumentado.',
          de: 'Von Anfang an war es eure Praxis, allen Brüdern auf verschiedene Weise Gutes zu tun... So lindert ihr die Not der Bedürftigen... ihr Römer bewahrt die ererbten Bräuche der Römer, die euer seliger Bischof Soter nicht nur beibehalten, sondern auch vermehrt hat.'
        },
        reference: {
          en: 'Quoted in Eusebius, Church History Book 4, Ch. 23, §§9-11',
          fr: 'Cité dans Eusèbe, Histoire Ecclésiastique Livre 4, Ch. 23, §§9-11',
          es: 'Citado en Eusebio, Historia Eclesiástica Libro 4, Cap. 23, §§9-11',
          de: 'Zitiert in Eusebius, Kirchengeschichte Buch 4, Kap. 23, §§9-11'
        },
        theme: 'Primacy'
      },
      {
        text: {
          en: 'To-day we have passed the Lord\'s holy day, in which we have read your epistle. From it, whenever we read it, we shall always be able to draw advice, as also from the former epistle, which was written to us through Clement.',
          fr: 'Aujourd\'hui nous avons passé le jour saint du Seigneur, dans lequel nous avons lu votre épître. De celle-ci, chaque fois que nous la lirons, nous pourrons toujours tirer des conseils, comme aussi de l\'épître précédente, qui nous a été écrite par Clément.',
          es: 'Hoy hemos pasado el día santo del Señor, en el cual hemos leído su epístola. De ella, siempre que la leamos, siempre podremos sacar consejo, como también de la epístola anterior, que nos fue escrita por Clemente.',
          de: 'Heute haben wir den heiligen Tag des Herrn verbracht, an dem wir euren Brief gelesen haben. Daraus werden wir, wann immer wir ihn lesen, immer Rat schöpfen können, wie auch aus dem früheren Brief, der uns durch Klemens geschrieben wurde.'
        },
        reference: {
          en: 'Quoted in Eusebius, Church History Book 4, Ch. 23, §11',
          fr: 'Cité dans Eusèbe, Histoire Ecclésiastique Livre 4, Ch. 23, §11',
          es: 'Citado en Eusebio, Historia Eclesiástica Libro 4, Cap. 23, §11',
          de: 'Zitiert in Eusebius, Kirchengeschichte Buch 4, Kap. 23, §11'
        },
        theme: 'Tradition'
      }
    ],
    pdfFile: 'Dionysius_of_Corinth.pdf',
    themes: ['Primacy', 'Rome', 'Tradition']
  },
  {
    title: {
      en: 'Against Heresies',
      fr: 'Contre les Hérésies',
      es: 'Contra las Herejías',
      de: 'Gegen die Häresien'
    },
    author: {
      en: 'St. Irenaeus of Lyon',
      fr: 'Saint Irénée de Lyon',
      es: 'San Ireneo de Lyon',
      de: 'Hl. Irenäus von Lyon'
    },
    date: {
      en: 'c. 180 AD',
      fr: 'vers 180 apr. J.-C.',
      es: 'c. 180 d.C.',
      de: 'ca. 180 n. Chr.'
    },
    summary: {
      en: 'Monumental defense of orthodoxy against Gnosticism. Establishes apostolic succession, Roman primacy, Marian typology, deuterocanonical authority, and universal Catholic faith.',
      fr: 'Défense monumentale de l\'orthodoxie contre le gnosticisme. Établit la succession apostolique, la primauté romaine, la typologie mariale, l\'autorité deutérocanonique et la foi catholique universelle.',
      es: 'Defensa monumental de la ortodoxia contra el gnosticismo. Establece la sucesión apostólica, la primacía romana, la tipología mariana, la autoridad deuterocanónica y la fe católica universal.',
      de: 'Monumentale Verteidigung der Orthodoxie gegen den Gnostizismus. Begründet die apostolische Sukzession, den römischen Primat, die marianische Typologie, die deuterokanonische Autorität und den universellen katholischen Glauben.'
    },
    primaryQuote: {
      text: {
        en: 'It is within the power of all, therefore, in every Church, who may wish to see the truth, to contemplate clearly the tradition of the apostles... Since, however, it would be very tedious to reckon up the successions of all the Churches, we do put to confusion all those who assemble in unauthorized meetings by indicating that tradition derived from the apostles, of the very great, the very ancient, and universally known Church founded and organized at Rome by the two most glorious apostles, Peter and Paul... For it is a matter of necessity that every Church should agree with this Church, on account of its pre-eminent authority.',
        fr: 'Il est au pouvoir de tous, donc, dans chaque Église, qui souhaitent voir la vérité, de contempler clairement la tradition des apôtres... Cependant, puisqu\'il serait très fastidieux d\'énumérer les successions de toutes les Églises, nous confondons tous ceux qui s\'assemblent dans des réunions non autorisées en indiquant cette tradition dérivée des apôtres, de la très grande, très ancienne et universellement connue Église fondée et organisée à Rome par les deux apôtres les plus glorieux, Pierre et Paul... Car il est nécessaire que chaque Église soit d\'accord avec cette Église, en raison de son autorité prééminente.',
        es: 'Está al alcance de todos, por lo tanto, en cada Iglesia, que deseen ver la verdad, contemplar claramente la tradición de los apóstoles... Sin embargo, dado que sería muy tedioso enumerar las sucesiones de todas las Iglesias, confundimos a todos aquellos que se reúnen en asambleas no autorizadas indicando esa tradición derivada de los apóstoles, de la muy grande, muy antigua y universalmente conocida Iglesia fundada y organizada en Roma por los dos apóstoles más gloriosos, Pedro y Pablo... Porque es necesario que cada Iglesia esté de acuerdo con esta Iglesia, debido a su autoridad preeminente.',
        de: 'Es steht daher in der Macht aller, in jeder Kirche, die die Wahrheit sehen möchten, die Tradition der Apostel klar zu betrachten... Da es jedoch sehr mühsam wäre, die Nachfolgen aller Kirchen aufzuzählen, verwirren wir all jene, die sich in nicht autorisierten Versammlungen zusammenfinden, indem wir auf jene Tradition hinweisen, die von den Aposteln stammt, der sehr großen, sehr alten und allgemein bekannten Kirche, die in Rom von den beiden glorreichsten Aposteln, Petrus und Paulus, gegründet und organisiert wurde... Denn es ist notwendig, dass jede Kirche mit dieser Kirche übereinstimmt, aufgrund ihrer herausragenden Autorität.'
      },
      reference: {
        en: 'Against Heresies Book 3, Ch. 3, §§1-2',
        fr: 'Contre les Hérésies Livre 3, Ch. 3, §§1-2',
        es: 'Contra las Herejías Libro 3, Cap. 3, §§1-2',
        de: 'Gegen die Häresien Buch 3, Kap. 3, §§1-2'
      },
      theme: 'Primacy'
    },
    additionalQuotes: [
      {
        text: {
          en: 'The Universal Church, moreover, through the whole world, has received this tradition from the apostles... But [the superior skill spoken of] is not found in this... while the Catholic Church possesses one and the same faith throughout the whole world, as we have already said.',
          fr: 'L\'Église universelle, en outre, à travers le monde entier, a reçu cette tradition des apôtres... Mais [l\'habileté supérieure dont on parle] ne se trouve pas en cela... tandis que l\'Église catholique possède une seule et même foi dans le monde entier, comme nous l\'avons déjà dit.',
          es: 'La Iglesia Universal, además, a través de todo el mundo, ha recibido esta tradición de los apóstoles... Pero [la habilidad superior de la que se habla] no se encuentra en esto... mientras que la Iglesia Católica posee una y la misma fe en todo el mundo, como ya hemos dicho.',
          de: 'Die universelle Kirche hat überdies in der ganzen Welt diese Tradition von den Aposteln empfangen... Aber [die erwähnte überlegene Fähigkeit] findet sich nicht darin... während die katholische Kirche ein und denselben Glauben in der ganzen Welt besitzt, wie wir bereits gesagt haben.'
        },
        reference: {
          en: 'Against Heresies Book 1, Ch. 10, §3; Book 2, Ch. 9, §1',
          fr: 'Contre les Hérésies Livre 1, Ch. 10, §3 ; Livre 2, Ch. 9, §1',
          es: 'Contra las Herejías Libro 1, Cap. 10, §3; Libro 2, Cap. 9, §1',
          de: 'Gegen die Häresien Buch 1, Kap. 10, §3; Buch 2, Kap. 9, §1'
        },
        theme: 'Catholic Church'
      },
      {
        text: {
          en: 'The Church, having received this preaching and this faith, although scattered throughout the whole world, yet, as if occupying but one house, carefully preserves it... For the Churches which have been planted in Germany do not believe or hand down anything different, nor do those in Spain, nor those in Gaul, nor those in the East, nor those in Egypt, nor those in Libya... But as the sun, that creature of God, is one and the same throughout the whole world, so also the preaching of the truth shines everywhere.',
          fr: 'L\'Église, ayant reçu cette prédication et cette foi, bien que dispersée dans le monde entier, les conserve soigneusement comme si elle n\'occupait qu\'une seule maison... Car les Églises qui ont été plantées en Allemagne ne croient ni ne transmettent rien de différent, ni celles d\'Espagne, ni celles de Gaule, ni celles d\'Orient, ni celles d\'Égypte, ni celles de Libye... Mais comme le soleil, cette créature de Dieu, est un et le même dans le monde entier, ainsi la prédication de la vérité brille partout.',
          es: 'La Iglesia, habiendo recibido esta predicación y esta fe, aunque dispersa por todo el mundo, las conserva cuidadosamente como si ocupara una sola casa... Porque las Iglesias que han sido plantadas en Germania no creen ni transmiten nada diferente, ni las de España, ni las de Galia, ni las de Oriente, ni las de Egipto, ni las de Libia... Pero así como el sol, esa criatura de Dios, es uno y el mismo en todo el mundo, así también la predicación de la verdad brilla en todas partes.',
          de: 'Die Kirche hat diese Verkündigung und diesen Glauben empfangen und bewahrt sie sorgfältig, obwohl sie über die ganze Welt verstreut ist, als ob sie nur ein Haus bewohnen würde... Denn die Kirchen, die in Germanien gepflanzt wurden, glauben oder überliefern nichts Anderes, noch die in Spanien, noch die in Gallien, noch die im Osten, noch die in Ägypten, noch die in Libyen... Aber wie die Sonne, jenes Geschöpf Gottes, in der ganzen Welt ein und dieselbe ist, so leuchtet auch die Verkündigung der Wahrheit überall.'
        },
        reference: {
          en: 'Against Heresies Book 1, Ch. 10, §2',
          fr: 'Contre les Hérésies Livre 1, Ch. 10, §2',
          es: 'Contra las Herejías Libro 1, Cap. 10, §2',
          de: 'Gegen die Häresien Buch 1, Kap. 10, §2'
        },
        theme: 'Catholic Church'
      },
      {
        text: {
          en: 'Matthew also issued a written Gospel among the Hebrews in their own dialect, while Peter and Paul were preaching at Rome, and laying the foundations of the Church.',
          fr: 'Matthieu a également publié un Évangile écrit parmi les Hébreux dans leur propre dialecte, pendant que Pierre et Paul prêchaient à Rome et posaient les fondements de l\'Église.',
          es: 'Mateo también publicó un Evangelio escrito entre los hebreos en su propio dialecto, mientras Pedro y Pablo predicaban en Roma y ponían los cimientos de la Iglesia.',
          de: 'Matthäus gab auch ein schriftliches Evangelium unter den Hebräern in ihrer eigenen Mundart heraus, während Petrus und Paulus in Rom predigten und die Grundlagen der Kirche legten.'
        },
        reference: {
          en: 'Against Heresies Book 3, Ch. 1, §1',
          fr: 'Contre les Hérésies Livre 3, Ch. 1, §1',
          es: 'Contra las Herejías Libro 3, Cap. 1, §1',
          de: 'Gegen die Häresien Buch 3, Kap. 1, §1'
        },
        theme: 'Primacy'
      },
      {
        text: {
          en: 'The blessed apostles, then, having founded and built up the Church, committed into the hands of Linus the office of the episcopate... To this Clement there succeeded Evaristus. Alexander followed Evaristus; then, sixth from the apostles, Sixtus was appointed... Soter having succeeded Anicetus, Eleutherius does now, in the twelfth place from the apostles, hold the inheritance of the episcopate.',
          fr: 'Les bienheureux apôtres, donc, ayant fondé et édifié l\'Église, ont confié entre les mains de Lin la charge de l\'épiscopat... À ce Clément succéda Évariste. Alexandre suivit Évariste ; puis, sixième depuis les apôtres, Sixte fut nommé... Soter ayant succédé à Anicet, Éleuthère tient maintenant, en douzième place depuis les apôtres, l\'héritage de l\'épiscopat.',
          es: 'Los bienaventurados apóstoles, entonces, habiendo fundado y edificado la Iglesia, confiaron en manos de Lino el oficio del episcopado... A este Clemente le sucedió Evaristo. Alejandro siguió a Evaristo; luego, sexto desde los apóstoles, fue nombrado Sixto... Sotero habiendo sucedido a Aniceto, Eleuterio ahora, en el duodécimo lugar desde los apóstoles, tiene la herencia del episcopado.',
          de: 'Die seligen Apostel haben dann, nachdem sie die Kirche gegründet und aufgebaut hatten, das Amt des Episkopats in die Hände von Linus gelegt... Diesem Klemens folgte Evaristus. Alexander folgte Evaristus; dann wurde Sixtus, der sechste von den Aposteln, ernannt... Nachdem Soter Anicetus nachgefolgt war, hält Eleutherius nun, an zwölfter Stelle von den Aposteln, das Erbe des Episkopats.'
        },
        reference: {
          en: 'Against Heresies Book 3, Ch. 3, §3',
          fr: 'Contre les Hérésies Livre 3, Ch. 3, §3',
          es: 'Contra las Herejías Libro 3, Cap. 3, §3',
          de: 'Gegen die Häresien Buch 3, Kap. 3, §3'
        },
        theme: 'Succession'
      },
      {
        text: {
          en: 'But Polycarp also was not only instructed by apostles, and conversed with many who had seen Christ, but was also, by apostles in Asia, appointed bishop of the Church in Smyrna... having always taught the things which he had learned from the apostles, and which the Church has handed down, and which alone are true.',
          fr: 'Mais Polycarpe aussi a non seulement été instruit par les apôtres et a conversé avec beaucoup de ceux qui avaient vu le Christ, mais il a aussi été, par les apôtres en Asie, nommé évêque de l\'Église de Smyrne... ayant toujours enseigné les choses qu\'il avait apprises des apôtres, et que l\'Église a transmises, et qui seules sont vraies.',
          es: 'Pero Policarpo también no solo fue instruido por los apóstoles y conversó con muchos que habían visto a Cristo, sino que también fue, por los apóstoles en Asia, nombrado obispo de la Iglesia en Esmirna... habiendo enseñado siempre las cosas que había aprendido de los apóstoles, y que la Iglesia ha transmitido, y que solo son verdaderas.',
          de: 'Aber auch Polykarp wurde nicht nur von Aposteln unterwiesen und unterhielt sich mit vielen, die Christus gesehen hatten, sondern wurde auch von Aposteln in Asien zum Bischof der Kirche in Smyrna ernannt... wobei er immer die Dinge gelehrt hat, die er von den Aposteln gelernt hatte und die die Kirche überliefert hat und die allein wahr sind.'
        },
        reference: {
          en: 'Against Heresies Book 3, Ch. 3, §4',
          fr: 'Contre les Hérésies Livre 3, Ch. 3, §4',
          es: 'Contra las Herejías Libro 3, Cap. 3, §4',
          de: 'Gegen die Häresien Buch 3, Kap. 3, §4'
        },
        theme: 'Tradition'
      },
      {
        text: {
          en: 'Those, however, who are believed to be presbyters by many, but serve their own lusts... shall be convicted by the Word... and they shall hear those words, to be found in Daniel the prophet: "O you seed of Canaan, and not of Judah, beauty has deceived you, and lust perverted your heart. You that are waxen old in wicked days, now your sins which you have committed aforetime have come to light."',
          fr: 'Ceux, cependant, qui sont crus être des presbytres par beaucoup, mais qui servent leurs propres convoitises... seront convaincus par la Parole... et ils entendront ces paroles, qui se trouvent dans le prophète Daniel : « Ô semence de Canaan, et non de Juda, la beauté t\'a trompé, et la convoitise a perverti ton cœur. Toi qui as vieilli dans les jours mauvais, maintenant tes péchés que tu as commis autrefois ont été révélés. »',
          es: 'Aquellos, sin embargo, que son creídos ser presbíteros por muchos, pero sirven a sus propias concupiscencias... serán convencidos por la Palabra... y escucharán esas palabras, que se encuentran en el profeta Daniel: "Oh semilla de Canaán, y no de Judá, la belleza te ha engañado, y la lujuria ha pervertido tu corazón. Tú que has envejecido en días malvados, ahora tus pecados que cometiste anteriormente han salido a la luz."',
          de: 'Diejenigen jedoch, die von vielen für Presbyter gehalten werden, aber ihren eigenen Begierden dienen... werden durch das Wort überführt werden... und sie werden jene Worte hören, die beim Propheten Daniel zu finden sind: „O Same Kanaans und nicht Judas, die Schönheit hat dich betört, und die Begierde hat dein Herz verdreht. Du, der du in bösen Tagen alt geworden bist, nun sind deine Sünden, die du zuvor begangen hast, ans Licht gekommen."'
        },
        reference: {
          en: 'Against Heresies Book 4, Ch. 26, §3, citing Daniel 13:56 (Deuterocanon)',
          fr: 'Contre les Hérésies Livre 4, Ch. 26, §3, citant Daniel 13:56 (Deutérocanonique)',
          es: 'Contra las Herejías Libro 4, Cap. 26, §3, citando Daniel 13:56 (Deuterocanónico)',
          de: 'Gegen die Häresien Buch 4, Kap. 26, §3, Zitat aus Daniel 13:56 (Deuterokanonisch)'
        },
        theme: 'Deuterocanon'
      },
      {
        text: {
          en: 'In accordance with this design, Mary the Virgin is found obedient, saying, "Behold the handmaid of the Lord; be it unto me according to your word." But Eve was disobedient... And even as she, having indeed a husband, Adam, but being nevertheless as yet a virgin... having become disobedient, was made the cause of death, both to herself and to the entire human race; so also did Mary... by yielding obedience, become the cause of salvation, both to herself and the whole human race.',
          fr: 'Conformément à ce dessein, Marie la Vierge se trouve obéissante, disant : « Voici la servante du Seigneur ; qu\'il me soit fait selon ta parole. » Mais Ève était désobéissante... Et de même qu\'elle, ayant en effet un mari, Adam, mais étant néanmoins encore vierge... étant devenue désobéissante, a été la cause de la mort, tant pour elle-même que pour toute la race humaine ; de même Marie... en rendant obéissance, est devenue la cause du salut, tant pour elle-même que pour toute la race humaine.',
          es: 'De acuerdo con este designio, María la Virgen se encuentra obediente, diciendo: "He aquí la sierva del Señor; hágase en mí según tu palabra." Pero Eva fue desobediente... Y así como ella, teniendo ciertamente un esposo, Adán, pero siendo sin embargo aún virgen... habiendo llegado a ser desobediente, se convirtió en causa de muerte, tanto para sí misma como para toda la raza humana; así también María... al rendirse en obediencia, se convirtió en causa de salvación, tanto para sí misma como para toda la raza humana.',
          de: 'Gemäß diesem Plan wird die Jungfrau Maria gehorsam gefunden, indem sie sagt: „Siehe, die Magd des Herrn; mir geschehe nach deinem Wort." Aber Eva war ungehorsam... Und gerade wie sie, obwohl sie einen Mann hatte, Adam, aber dennoch noch Jungfrau war... ungehorsam wurde und zur Ursache des Todes wurde, sowohl für sich selbst als auch für das gesamte Menschengeschlecht; so wurde auch Maria... durch Gehorsam zur Ursache der Erlösung, sowohl für sich selbst als auch für das gesamte Menschengeschlecht.'
        },
        reference: {
          en: 'Against Heresies Book 3, Ch. 22, §4',
          fr: 'Contre les Hérésies Livre 3, Ch. 22, §4',
          es: 'Contra las Herejías Libro 3, Cap. 22, §4',
          de: 'Gegen die Häresien Buch 3, Kap. 22, §4'
        },
        theme: 'Mary'
      },
      {
        text: {
          en: 'That the Lord then was manifestly coming to His own things... through the obedience which was exhibited by Himself when He hung upon a tree, the effects also of that deception being done away with, by which that virgin Eve... was unhappily misled—was happily announced, through means of the truth spoken by the angel to the Virgin Mary... And thus, as the human race fell into bondage to death by means of a virgin, so is it rescued by a virgin; virginal disobedience having been balanced in the opposite scale by virginal obedience.',
          fr: 'Que le Seigneur venait manifestement à Ses propres choses... par l\'obéissance qu\'Il a manifestée lorsqu\'Il était suspendu à un arbre, les effets aussi de cette tromperie étant abolis, par laquelle cette vierge Ève... a été malheureusement trompée—a été heureusement annoncé, par la vérité prononcée par l\'ange à la Vierge Marie... Et ainsi, comme la race humaine est tombée dans l\'esclavage de la mort par une vierge, elle est aussi sauvée par une vierge ; la désobéissance virginale ayant été équilibrée dans la balance opposée par l\'obéissance virginale.',
          es: 'Que el Señor entonces venía manifiestamente a Sus propias cosas... a través de la obediencia que Él mismo exhibió cuando colgó de un árbol, los efectos también de ese engaño siendo abolidos, por el cual esa virgen Eva... fue desgraciadamente engañada—fue felizmente anunciado, por medio de la verdad hablada por el ángel a la Virgen María... Y así, como la raza humana cayó en esclavitud a la muerte por medio de una virgen, así es rescatada por una virgen; la desobediencia virginal habiendo sido equilibrada en la balanza opuesta por la obediencia virginal.',
          de: 'Dass der Herr dann offenkundig zu Seinen eigenen Dingen kam... durch den Gehorsam, den Er selbst zeigte, als Er an einem Baum hing, wurden auch die Wirkungen jener Täuschung beseitigt, durch die jene Jungfrau Eva... unglücklich getäuscht wurde—wurde glücklich verkündet, durch die Wahrheit, die der Engel der Jungfrau Maria sprach... Und so, wie das Menschengeschlecht durch eine Jungfrau in die Knechtschaft des Todes fiel, so wird es durch eine Jungfrau gerettet; jungfräulicher Ungehorsam wurde auf der Gegenseite durch jungfräulichen Gehorsam aufgewogen.'
        },
        reference: {
          en: 'Against Heresies Book 5, Ch. 19, §1',
          fr: 'Contre les Hérésies Livre 5, Ch. 19, §1',
          es: 'Contra las Herejías Libro 5, Cap. 19, §1',
          de: 'Gegen die Häresien Buch 5, Kap. 19, §1'
        },
        theme: 'Mary'
      }
    ],
    pdfFile: 'Irenaeu.pdf',
    themes: ['Primacy', 'Succession', 'Catholic Church', 'Mary', 'Deuterocanon', 'Tradition']
  },
  {
    title: {
      en: 'The Stromata',
      fr: 'Les Stromates',
      es: 'Los Stromata',
      de: 'Die Stromateis'
    },
    author: {
      en: 'St. Clement of Alexandria',
      fr: 'Saint Clément d\'Alexandrie',
      es: 'San Clemente de Alejandría',
      de: 'Hl. Klemens von Alexandria'
    },
    date: {
      en: 'c. 190–200 AD',
      fr: 'vers 190-200 apr. J.-C.',
      es: 'c. 190-200 d.C.',
      de: 'ca. 190-200 n. Chr.'
    },
    summary: {
      en: 'Theological work affirming the antiquity and singularity of the Catholic Church as the true Church of Christ.',
      fr: 'Œuvre théologique affirmant l\'antiquité et la singularité de l\'Église catholique comme la véritable Église du Christ.',
      es: 'Obra teológica que afirma la antigüedad y singularidad de la Iglesia Católica como la verdadera Iglesia de Cristo.',
      de: 'Theologisches Werk, das die Antike und Einzigartigkeit der katholischen Kirche als wahre Kirche Christi bekräftigt.'
    },
    primaryQuote: {
      text: {
        en: 'For that the human assemblies which they held were posterior to the Catholic Church requires not many words to show... For from the very reason that God is one, and the Lord one, that which is in the highest degree honorable is lauded in consequence of its singleness, being an imitation of the one first principle... Therefore in substance and idea, in origin, in pre-eminence, we say that the ancient and Catholic Church is alone.',
        fr: 'Car que les assemblées humaines qu\'ils tenaient étaient postérieures à l\'Église catholique ne nécessite pas beaucoup de mots pour le montrer... Car pour la raison même que Dieu est un, et le Seigneur un, ce qui est au plus haut degré honorable est loué en raison de son unicité, étant une imitation du premier principe unique... Par conséquent, en substance et en idée, en origine, en prééminence, nous disons que l\'Église catholique ancienne est seule.',
        es: 'Porque que las asambleas humanas que celebraban eran posteriores a la Iglesia Católica no requiere muchas palabras para demostrarlo... Porque por la misma razón de que Dios es uno, y el Señor uno, lo que es en el más alto grado honorable es alabado en consecuencia de su singularidad, siendo una imitación del primer principio único... Por lo tanto, en sustancia e idea, en origen, en preeminencia, decimos que la Iglesia Católica antigua está sola.',
        de: 'Dass die menschlichen Versammlungen, die sie abhielten, der katholischen Kirche nachfolgten, erfordert nicht viele Worte, um es zu zeigen... Denn aus dem Grund, dass Gott einer ist und der Herr einer, wird das, was im höchsten Maße ehrenhaft ist, aufgrund seiner Einzigkeit gepriesen, als Nachahmung des einen ersten Prinzips... Daher sagen wir, dass die alte und katholische Kirche in Substanz und Idee, in Ursprung, in Vorrang allein ist.'
      },
      reference: {
        en: 'The Stromata Book 7, Ch. 17',
        fr: 'Les Stromates Livre 7, Ch. 17',
        es: 'Los Stromata Libro 7, Cap. 17',
        de: 'Die Stromateis Buch 7, Kap. 17'
      },
      theme: 'Catholic Church'
    },
    pdfFile: 'Clement_of_Alexandria_Stromata.pdf',
    themes: ['Catholic Church', 'Unity', 'Authority']
  }
];
