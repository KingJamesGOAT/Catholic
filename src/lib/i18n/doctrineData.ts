export interface BibleVerse {
  book: string;
  chapter: string;
  verse: string;
  text: string;
}

// Updated interface to include 'council' and 'papal'
export interface TraditionContent {
  id: string;
  type: "father" | "doctor" | "theology" | "council" | "papal";
  author: { en: string; fr: string; es: string; de: string };
  source?: string;
  date?: string;
  text: { en: string; fr: string; es: string; de: string };
}

export interface Doctrine {
  id: string;
  title: { en: string; fr: string; es: string; de: string };
  subtitle: { en: string; fr: string; es: string; de: string };
  verses: { [key: string]: BibleVerse[] };
  tradition: TraditionContent[];
}

export const doctrineData: Doctrine[] = [
  // 1. EUCHARIST
  {
    id: "eucharist",
    title: {
      en: "The Eucharist",
      fr: "L'Eucharistie",
      es: "La Eucaristía",
      de: "Die Eucharistie",
    },
    subtitle: {
      en: "Real Presence & Sacrifice",
      fr: "Présence Réelle & Sacrifice",
      es: "Presencia Real y Sacrificio",
      de: "Realpräsenz & Opfer",
    },
    verses: {
      en: [
        {
          book: "John",
          chapter: "6",
          verse: "53-56",
          text: "Amen, amen, I say to you, unless you eat the flesh of the Son of Man and drink his blood, you do not have life within you... For my flesh is true food, and my blood is true drink.",
        },
        {
          book: "Matthew",
          chapter: "26",
          verse: "26-28",
          text: "Take, eat; this is my body... Drink of it, all of you, for this is my blood of the covenant.",
        },
        {
          book: "Luke",
          chapter: "22",
          verse: "19",
          text: "And he took bread, and when he had given thanks, he broke it and gave it to them, saying, 'This is my body, which is given for you. Do this in remembrance of me.'",
        },
        {
          book: "1 Corinthians",
          chapter: "10",
          verse: "16",
          text: "The cup of blessing that we bless, is it not a participation in the blood of Christ? The bread that we break, is it not a participation in the body of Christ?",
        },
        {
          book: "1 Corinthians",
          chapter: "11",
          verse: "27-29",
          text: "Whoever, therefore, eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty concerning the body and blood of the Lord.",
        },
        {
          book: "Malachi",
          chapter: "1",
          verse: "11",
          text: "For from the rising of the sun to its setting my name is great among the nations, and in every place incense is offered to my name, and a pure offering.",
        },
      ],
      fr: [
        {
          book: "Jean",
          chapter: "6",
          verse: "53-56",
          text: "Amen, amen, je vous le dis : si vous ne mangez pas la chair du Fils de l'homme, et si vous ne buvez pas son sang, vous n'avez pas la vie en vous... Car ma chair est la vraie nourriture, et mon sang est la vraie boisson.",
        },
        {
          book: "Matthieu",
          chapter: "26",
          verse: "26-28",
          text: "Prenez, mangez ; ceci est mon corps... Buvez-en tous, car ceci est mon sang de l'alliance.",
        },
        {
          book: "Luc",
          chapter: "22",
          verse: "19",
          text: "Puis il prit du pain, et, après avoir rendu grâces, il le rompit et le leur donna, en disant : 'Ceci est mon corps, qui est donné pour vous ; faites ceci en mémoire de moi.'",
        },
        {
          book: "1 Corinthiens",
          chapter: "10",
          verse: "16",
          text: "La coupe de bénédiction que nous bénissons, n'est-elle pas une communion au sang du Christ ? Le pain que nous rompons, n'est-il pas une communion au corps du Christ ?",
        },
        {
          book: "1 Corinthiens",
          chapter: "11",
          verse: "27-29",
          text: "C'est pourquoi celui qui mangera le pain ou boira la coupe du Seigneur indignement, sera coupable envers le corps et le sang du Seigneur.",
        },
        {
          book: "Malachie",
          chapter: "1",
          verse: "11",
          text: "Car du lever du soleil jusqu'à son couchant, mon nom est grand parmi les nations, et en tout lieu on offre à mon nom de l'encens et une offrande pure.",
        },
      ],
      es: [
        {
          book: "Juan",
          chapter: "6",
          verse: "53-56",
          text: "En verdad, en verdad os digo: si no coméis la carne del Hijo del hombre y no bebéis su sangre, no tenéis vida en vosotros... Porque mi carne es verdadera comida y mi sangre verdadera bebida.",
        },
        {
          book: "Mateo",
          chapter: "26",
          verse: "26-28",
          text: "Tomad, comed; esto es mi cuerpo... Bebed de ella todos, porque esto es mi sangre de la alianza.",
        },
        {
          book: "Lucas",
          chapter: "22",
          verse: "19",
          text: "Y tomó el pan y dio gracias, y lo partió y les dio, diciendo: 'Esto es mi cuerpo, que por vosotros es dado; haced esto en memoria de mí.'",
        },
        {
          book: "1 Corintios",
          chapter: "10",
          verse: "16",
          text: "La copa de bendición que bendecimos, ¿no es acaso comunión con la sangre de Cristo? Y el pan que partimos, ¿no es comunión con el cuerpo de Cristo?",
        },
        {
          book: "1 Corintios",
          chapter: "11",
          verse: "27-29",
          text: "Por tanto, quien coma el pan o beba la copa del Señor indignamente, será reo del cuerpo y de la sangre del Señor.",
        },
        {
          book: "Malaquías",
          chapter: "1",
          verse: "11",
          text: "Porque desde donde el sol nace hasta donde se pone, es grande mi nombre entre las naciones; y en todo lugar se ofrece a mi nombre incienso y ofrenda pura.",
        },
      ],
      de: [
        {
          book: "Johannes",
          chapter: "6",
          verse: "53-56",
          text: "Wahrlich, wahrlich, ich sage euch: Wenn ihr das Fleisch des Menschensohnes nicht esst und sein Blut nicht trinkt, habt ihr das Leben nicht in euch... Denn mein Fleisch ist wahrhaftig eine Speise und mein Blut ist wahrhaftig ein Trank.",
        },
        {
          book: "Matthäus",
          chapter: "26",
          verse: "26-28",
          text: "Nehmet, esset; das ist mein Leib... Trinket alle daraus; denn das ist mein Blut des Bundes.",
        },
        {
          book: "Lukas",
          chapter: "22",
          verse: "19",
          text: "Und er nahm das Brot, dankte und brach es und gab es ihnen und sprach: 'Das ist mein Leib, der für euch gegeben wird; das tut zu meinem Gedächtnis.'",
        },
        {
          book: "1. Korinther",
          chapter: "10",
          verse: "16",
          text: "Der Kelch des Segens, den wir segnen, ist er nicht die Gemeinschaft des Blutes Christi? Das Brot, das wir brechen, ist es nicht die Gemeinschaft des Leibes Christi?",
        },
        {
          book: "1. Korinther",
          chapter: "11",
          verse: "27-29",
          text: "Wer nun unwürdig von dem Brot isst oder aus dem Kelch des Herrn trinkt, der wird schuldig sein am Leib und Blut des Herrn.",
        },
        {
          book: "Maleachi",
          chapter: "1",
          verse: "11",
          text: "Denn vom Aufgang der Sonne bis zu ihrem Untergang ist mein Name groß unter den Völkern, und an jedem Ort wird meinem Namen Räucherwerk dargebracht und ein reines Speisopfer.",
        },
      ],
    },
    tradition: [
      {
        id: "ignatius-eucharist",
        type: "father",
        author: {
          en: "St. Ignatius of Antioch",
          fr: "St Ignace d'Antioche",
          es: "San Ignacio de Antioquía",
          de: "Hl. Ignatius von Antiochien",
        },
        source: "Epistle to the Smyrnaeans, 7",
        date: "c. 110 AD",
        text: {
          en: "They abstain from the Eucharist and from prayer, because they confess not the Eucharist to be the flesh of our Saviour Jesus Christ, which suffered for our sins, and which the Father, of His goodness, raised up again.",
          fr: "Ils s'abstiennent de l'Eucharistie et de la prière, parce qu'ils ne confessent pas que l'Eucharistie est la chair de notre Sauveur Jésus-Christ, qui a souffert pour nos péchés, et que le Père, dans sa bonté, a ressuscité.",
          es: "Se abstienen de la Eucaristía y de la oración, porque no confiesan que la Eucaristía es la carne de nuestro Salvador Jesucristo, la cual sufrió por nuestros pecados y la cual el Padre, en su bondad, resucitó.",
          de: "Sie enthalten sich der Eucharistie und des Gebets, weil sie nicht bekennen, dass die Eucharistie das Fleisch unseres Erlösers Jesus Christus ist, das für unsere Sünden gelitten hat und das der Vater in seiner Güte auferweckt hat.",
        },
      },
      {
        id: "justin-eucharist",
        type: "father",
        author: {
          en: "St. Justin Martyr",
          fr: "St Justin Martyr",
          es: "San Justino Mártir",
          de: "Hl. Justin der Märtyrer",
        },
        source: "First Apology, 66",
        date: "c. 150 AD",
        text: {
          en: "For not as common bread and common drink do we receive these... but... the food which is blessed by the prayer of His word... is the flesh and blood of that Jesus who was made flesh.",
          fr: "Car nous ne prenons pas ces choses comme un pain commun ou un breuvage commun... mais... la nourriture bénie par la prière de Sa parole... est la chair et le sang de ce Jésus qui s'est incarné.",
          es: "Porque no tomamos estos alimentos como pan común ni bebida común... sino... el alimento bendecido por la oración de Su palabra... es la carne y la sangre de aquel Jesús que se encarnó.",
          de: "Denn wir nehmen dies nicht als gewöhnliches Brot und gewöhnlichen Trank... sondern... die durch das Gebet seines Wortes gesegnete Speise... ist Fleisch und Blut jenes Jesus, der Fleisch geworden ist.",
        },
      },
      {
        id: "irenaeus-eucharist",
        type: "father",
        author: {
          en: "St. Irenaeus",
          fr: "St Irénée",
          es: "San Ireneo",
          de: "Hl. Irenäus",
        },
        source: "Against Heresies 4.18.5",
        date: "c. 180 AD",
        text: {
          en: "For as the bread, which is produced from the earth, when it receives the invocation of God, is no longer common bread, but the Eucharist, consisting of two realities, earthly and heavenly.",
          fr: "Car comme le pain, qui vient de la terre, après avoir reçu l'invocation de Dieu, n'est plus du pain ordinaire, mais l'Eucharistie, constituée de deux réalités, terrestre et céleste.",
          es: "Porque así como el pan que es de la tierra, recibiendo la invocación de Dios, ya no es pan común, sino la Eucaristía, compuesta de dos realidades, terrena y celestial.",
          de: "Denn wie das Brot, das von der Erde stammt, wenn es die Anrufung Gottes empfängt, nicht mehr gemeines Brot ist, sondern die Eucharistie, die aus zwei Wirklichkeiten besteht, einer irdischen und einer himmlischen.",
        },
      },
      {
        id: "ambrose-mystery",
        type: "doctor",
        author: {
          en: "St. Ambrose of Milan",
          fr: "St Ambroise de Milan",
          es: "San Ambrosio de Milán",
          de: "Hl. Ambrosius von Mailand",
        },
        source: "On the Mysteries, 9",
        date: "c. 390 AD",
        text: {
          en: "Could not Christ's word, which can make from nothing what did not exist, change existing things into what they were not before? For it is not less to give a new nature to things than to change them.",
          fr: "La parole du Christ, qui a pu faire de rien ce qui n'existait pas, ne pourrait-elle pas changer les choses existantes en ce qu'elles n'étaient pas auparavant ? Car ce n'est pas moins que de donner une nouvelle nature aux choses que de les changer.",
          es: "¿Acaso la palabra de Cristo, que pudo hacer de la nada lo que no existía, no podría cambiar las cosas existentes en lo que no eran antes? Pues no es menos dar una nueva naturaleza a las cosas que cambiarlas.",
          de: "Sollte das Wort Christi, das aus dem Nichts machen kann, was nicht war, nicht bestehende Dinge in das verwandeln können, was sie vorher nicht waren? Denn es ist nicht geringer, den Dingen eine neue Natur zu geben, als sie zu verändern.",
        },
      },
      {
        id: "trent-transubstantiation",
        type: "council",
        author: {
          en: "Council of Trent",
          fr: "Concile de Trente",
          es: "Concilio de Trento",
          de: "Konzil von Trient",
        },
        source: "Session 13, Chapter 4",
        date: "1551 AD",
        text: {
          en: "By the consecration of the bread and of the wine, a conversion is made of the whole substance of the bread into the substance of the body of Christ our Lord, and of the whole substance of the wine into the substance of His blood.",
          fr: "Par la consécration du pain et du vin s'opère le changement de toute la substance du pain en la substance du corps du Christ notre Seigneur, et de toute la substance du vin en la substance de son sang.",
          es: "Por la consagración del pan y del vino se realiza la conversión de toda la sustancia del pan en la sustancia del cuerpo de Cristo nuestro Señor, y de toda la sustancia del vino en la sustancia de su sangre.",
          de: "Durch die Konsekration des Brotes und Weines geschieht eine Wandlung der ganzen Substanz des Brotes in die Substanz des Leibes Christi unseres Herrn und der ganzen Substanz des Weines in die Substanz seines Blutes.",
        },
      },
      {
        id: "aquinas-transubstantiation",
        type: "doctor",
        author: {
          en: "St. Thomas Aquinas",
          fr: "St Thomas d'Aquin",
          es: "Sto. Tomás de Aquino",
          de: "Hl. Thomas von Aquin",
        },
        source: "Summa Theologiae, III, q. 75, a. 1",
        date: "1265-1274",
        text: {
          en: "The presence of Christ's true body and blood in this sacrament cannot be detected by sense, nor understanding, but by faith alone, which rests upon Divine authority.",
          fr: "La présence du vrai corps et du sang du Christ dans ce sacrement ne peut être détectée par les sens, ni par l'intelligence, mais par la foi seule, qui repose sur l'autorité divine.",
          es: "La presencia del verdadero cuerpo y sangre de Cristo en este sacramento no puede ser detectada por los sentidos, ni por el entendimiento, sino solo por la fe, que descansa en la autoridad divina.",
          de: "Die Gegenwart des wahren Leibes und Blutes Christi in diesem Sakrament kann weder durch die Sinne noch durch den Verstand, sondern allein durch den Glauben erkannt werden, der sich auf die göttliche Autorität stützt.",
        },
      },
      {
        id: "theology-eucharist",
        type: "theology",
        author: {
          en: "Theological Argument",
          fr: "Argument Théologique",
          es: "Argumento Teológico",
          de: "Theologisches Argument",
        },
        text: {
          en: "If the Eucharist were merely a symbol, Paul's warning about being 'guilty concerning the body and blood of the Lord' (1 Cor 11:27) would be disproportionate. One cannot be guilty of a person's blood by mistreating a picture of them.",
          fr: "Si l'Eucharistie n'était qu'un symbole, l'avertissement de Paul d'être « coupable envers le corps et le sang du Seigneur » (1 Cor 11:27) serait disproportionné. On ne peut être coupable du sang d'une personne en maltraitant sa photo.",
          es: "Si la Eucaristía fuera meramente un símbolo, la advertencia de Pablo sobre ser 'reo del cuerpo y de la sangre del Señor' (1 Cor 11:27) sería desproporcionada. Uno no puede ser culpable de la sangre de una persona por maltratar su foto.",
          de: "Wäre die Eucharistie nur ein Symbol, wäre Paulus' Warnung, sich 'am Leib und Blut des Herrn schuldig' zu machen (1 Kor 11,27), unverhältnismäßig. Man kann sich nicht am Blut einer Person schuldig machen, indem man ihr Bild misshandelt.",
        },
      },
    ],
  },

  // 2. BAPTISM
  {
    id: "baptism",
    title: {
      en: "Baptism",
      fr: "Baptême",
      es: "Bautismo",
      de: "Taufe",
    },
    subtitle: {
      en: "Regeneration & Salvation",
      fr: "Régénération & Salut",
      es: "Regeneración y Salvación",
      de: "Wiedergeburt & Heil",
    },
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
        {
          book: "John",
          chapter: "3",
          verse: "5",
          text: "Truly, truly, I say to you, unless one is born of water and the Spirit, he cannot enter the kingdom of God.",
        },
        {
          book: "Mark",
          chapter: "16",
          verse: "16",
          text: "He who believes and is baptized will be saved; but he who does not believe will be condemned.",
        },
        {
          book: "Titus",
          chapter: "3",
          verse: "5",
          text: "He saved us, not because of works done by us in righteousness, but according to his own mercy, by the washing of regeneration and renewal of the Holy Spirit.",
        },
        {
          book: "Colossians",
          chapter: "2",
          verse: "11-12",
          text: "In him also you were circumcised... having been buried with him in baptism, in which you were also raised with him through faith in the powerful working of God.",
        },
      ],
      fr: [
        {
          book: "1 Pierre",
          chapter: "3",
          verse: "21",
          text: "C'est le baptême qui vous sauve à présent... non pas l'enlèvement des souillures du corps, mais l'engagement d'une bonne conscience envers Dieu.",
        },
        {
          book: "Actes",
          chapter: "22",
          verse: "16",
          text: "Et maintenant, que tardes-tu ? Lève-toi, sois baptisé et lavé de tes péchés, en invoquant son nom.",
        },
        {
          book: "Jean",
          chapter: "3",
          verse: "5",
          text: "Amen, amen, je te le dis : à moins de naître d'eau et d'Esprit, nul ne peut entrer dans le royaume de Dieu.",
        },
        {
          book: "Marc",
          chapter: "16",
          verse: "16",
          text: "Celui qui croira et qui sera baptisé sera sauvé, mais celui qui ne croira pas sera condamné.",
        },
        {
          book: "Tite",
          chapter: "3",
          verse: "5",
          text: "Il nous a sauvés... par le bain de la régénération et de la rénovation en l'Esprit Saint.",
        },
        {
          book: "Colossiens",
          chapter: "2",
          verse: "11-12",
          text: "En lui aussi vous avez été circoncis... ayant été ensevelis avec lui par le baptême, vous êtes aussi ressuscités en lui et avec lui, par la foi en la puissance de Dieu.",
        },
      ],
      es: [
        {
          book: "1 Pedro",
          chapter: "3",
          verse: "21",
          text: "El bautismo, que corresponde a esto, ahora os salva... no quitando la suciedad de la carne, sino como una petición a Dios de una buena conciencia.",
        },
        {
          book: "Hechos",
          chapter: "22",
          verse: "16",
          text: "Y ahora, ¿por qué te detienes? Levántate, bautízate y lava tus pecados, invocando su nombre.",
        },
        {
          book: "Juan",
          chapter: "3",
          verse: "5",
          text: "De cierto, de cierto te digo: el que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios.",
        },
        {
          book: "Marcos",
          chapter: "16",
          verse: "16",
          text: "El que creyere y fuere bautizado, será salvo; mas el que no creyere, será condenado.",
        },
        {
          book: "Tito",
          chapter: "3",
          verse: "5",
          text: "Nos salvó... por el lavamiento de la regeneración y por la renovación en el Espíritu Santo.",
        },
        {
          book: "Colosenses",
          chapter: "2",
          verse: "11-12",
          text: "En él también fuisteis circuncidados... sepultados con él en el bautismo, en el cual fuisteis también resucitados con él, mediante la fe en el poder de Dios.",
        },
      ],
      de: [
        {
          book: "1. Petrus",
          chapter: "3",
          verse: "21",
          text: "Das ist ein Vorbild der Taufe, die jetzt auch euch rettet... nicht als Ablegung der Unreinheit des Fleisches, sondern als Bitte an Gott um ein gutes Gewissen.",
        },
        {
          book: "Apostelgeschichte",
          chapter: "22",
          verse: "16",
          text: "Und nun, was zögerst du? Steh auf und lass dich taufen und deine Sünden abwaschen, indem du seinen Namen anrufst.",
        },
        {
          book: "Johannes",
          chapter: "3",
          verse: "5",
          text: "Wahrlich, wahrlich, ich sage dir: Wenn jemand nicht aus Wasser und Geist geboren wird, so kann er nicht in das Reich Gottes kommen.",
        },
        {
          book: "Markus",
          chapter: "16",
          verse: "16",
          text: "Wer da glaubt und getauft wird, der wird selig werden; wer aber nicht glaubt, der wird verdammt werden.",
        },
        {
          book: "Titus",
          chapter: "3",
          verse: "5",
          text: "Machte er uns selig... durch das Bad der Wiedergeburt und Erneuerung im Heiligen Geist.",
        },
        {
          book: "Kolosser",
          chapter: "2",
          verse: "11-12",
          text: "In ihm seid ihr auch beschnitten... indem ihr mit ihm begraben seid in der Taufe, in der ihr auch auferstanden seid durch den Glauben an die Kraft Gottes.",
        },
      ],
    },
    tradition: [
      {
        id: "didache-baptism",
        type: "father",
        author: {
          en: "The Didache",
          fr: "La Didaché",
          es: "La Didaché",
          de: "Die Didache",
        },
        source: "Chapter 7",
        date: "c. 70 AD",
        text: {
          en: "Concerning baptism, baptize thus: Having first rehearsed all these things, 'baptize in the name of the Father and of the Son and of the Holy Spirit,' in running water.",
          fr: "Quant au baptême, baptisez ainsi : après avoir enseigné tout ce qui précède, baptisez au nom du Père et du Fils et du Saint-Esprit dans de l'eau vive.",
          es: "En cuanto al bautismo, bautizad así: habiendo enseñado previamente todas estas cosas, bautizad en el nombre del Padre y del Hijo y del Espíritu Santo en agua viva.",
          de: "Was aber die Taufe betrifft, so tauft so: Nachdem ihr dies alles zuvor gesagt habt, tauft auf den Namen des Vaters und des Sohnes und des Heiligen Geistes in fließendem Wasser.",
        },
      },
      {
        id: "justin-baptism",
        type: "father",
        author: {
          en: "St. Justin Martyr",
          fr: "St Justin Martyr",
          es: "San Justino Mártir",
          de: "Hl. Justin der Märtyrer",
        },
        source: "First Apology, 61",
        date: "c. 150 AD",
        text: {
          en: "Then they are brought by us where there is water, and are regenerated in the same manner in which we were ourselves regenerated... For Christ also said, 'Except ye be born again, ye shall not enter into the kingdom of heaven.'",
          fr: "Ensuite, nous les amenons là où il y a de l'eau, et ils sont régénérés de la même manière que nous avons été nous-mêmes régénérés... Car Christ a dit aussi : 'Si vous ne naissez de nouveau, vous n'entrerez pas dans le royaume des cieux.'",
          es: "Luego son llevados por nosotros donde hay agua, y son regenerados de la misma manera en que nosotros mismos fuimos regenerados... Porque Cristo también dijo: 'A menos que nazcáis de nuevo, no entraréis en el reino de los cielos'.",
          de: "Dann werden sie von uns dorthin gebracht, wo Wasser ist, und werden auf dieselbe Weise wiedergeboren, auf die auch wir wiedergeboren wurden... Denn auch Christus sprach: 'Wenn ihr nicht wiedergeboren werdet, werdet ihr nicht in das Himmelreich kommen.'",
        },
      },
      {
        id: "cyril-baptism",
        type: "doctor",
        author: {
          en: "St. Cyril of Jerusalem",
          fr: "St Cyrille de Jérusalem",
          es: "San Cirilo de Jerusalén",
          de: "Hl. Kyrill von Jerusalem",
        },
        source: "Catechetical Lectures, 3:10",
        date: "c. 350 AD",
        text: {
          en: "If any man receive not Baptism, he hath not salvation; except only Martyrs, who even without the water receive the Kingdom.",
          fr: "Si quelqu'un ne reçoit pas le baptême, il n'a pas le salut ; sauf seulement les martyrs, qui même sans l'eau reçoivent le Royaume.",
          es: "Si algún hombre no recibe el Bautismo, no tiene salvación; excepto solo los Mártires, quienes aun sin el agua reciben el Reino.",
          de: "Wenn jemand die Taufe nicht empfängt, hat er das Heil nicht; ausgenommen nur die Märtyrer, die auch ohne das Wasser das Reich empfangen.",
        },
      },
      {
        id: "augustine-baptism",
        type: "doctor",
        author: {
          en: "St. Augustine",
          fr: "St Augustin",
          es: "San Agustín",
          de: "Hl. Augustinus",
        },
        source: "Sermon 219",
        date: "c. 420 AD",
        text: {
          en: "The Holy Spirit has marked us with the seal of the Lord ('Dominicus character') for the day of redemption. Baptism indeed is the seal of eternal life.",
          fr: "Le Saint-Esprit nous a marqués du sceau du Seigneur ('Dominicus character') pour le jour de la rédemption. Le baptême est en effet le sceau de la vie éternelle.",
          es: "El Espíritu Santo nos ha marcado con el sello del Señor ('Dominicus character') para el día de la redención. El bautismo es de hecho el sello de la vida eterna.",
          de: "Der Heilige Geist hat uns mit dem Siegel des Herrn ('Dominicus character') für den Tag der Erlösung gezeichnet. Die Taufe ist in der Tat das Siegel des ewigen Lebens.",
        },
      },
      {
        id: "trent-baptism",
        type: "council",
        author: {
          en: "Council of Trent",
          fr: "Concile de Trente",
          es: "Concilio de Trento",
          de: "Konzil von Trient",
        },
        source: "Session 7, Canon 5",
        date: "1547 AD",
        text: {
          en: "If any one shall say, that baptism is free, that is, not necessary unto salvation; let him be anathema.",
          fr: "Si quelqu'un dit que le baptême est libre, c'est-à-dire non nécessaire au salut ; qu'il soit anathème.",
          es: "Si alguno dijere que el bautismo es libre, es decir, no necesario para la salvación; sea anatema.",
          de: "Wer sagt, die Taufe sei frei, das heißt, nicht heilsnotwendig; der sei ausgeschlossen.",
        },
      },
    ],
  },

  // 3. AUTHORITY
  {
    id: "authority",
    title: {
      en: "Church Authority",
      fr: "Autorité de l'Église",
      es: "Autoridad de la Iglesia",
      de: "Kirchenautorität",
    },
    subtitle: {
      en: "The Papacy & Magisterium",
      fr: "La Papauté & le Magistère",
      es: "El Papado y el Magisterio",
      de: "Das Papsttum & Lehramt",
    },
    verses: {
      en: [
        {
          book: "Matthew",
          chapter: "16",
          verse: "18-19",
          text: "And I tell you, you are Peter, and on this rock I will build my church... I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven.",
        },
        {
          book: "Isaiah",
          chapter: "22",
          verse: "22",
          text: "I will place on his shoulder the key of the house of David. He shall open, and none shall shut; and he shall shut, and none shall open.",
        },
        {
          book: "John",
          chapter: "21",
          verse: "15-17",
          text: "Jesus said to Simon Peter... 'Feed my lambs... Tend my sheep... Feed my sheep.' (Three times commissioning him as shepherd).",
        },
        {
          book: "Luke",
          chapter: "22",
          verse: "31-32",
          text: "Simon, Simon... I have prayed for you that your faith may not fail. And when you have turned again, strengthen your brothers.",
        },
        {
          book: "Matthew",
          chapter: "18",
          verse: "17",
          text: "If he refuses to listen to them, tell it to the church. And if he refuses to listen even to the church, let him be to you as a Gentile and a tax collector.",
        },
        {
          book: "1 Timothy",
          chapter: "3",
          verse: "15",
          text: "...the church of the living God, the pillar and foundation of the truth.",
        },
      ],
      fr: [
        {
          book: "Matthieu",
          chapter: "16",
          verse: "18-19",
          text: "Et moi, je te dis que tu es Pierre, et que sur cette pierre je bâtirai mon Église... Je te donnerai les clefs du royaume des cieux, et tout ce que tu lieras sur la terre sera lié dans les cieux.",
        },
        {
          book: "Isaïe",
          chapter: "22",
          verse: "22",
          text: "Je mettrai sur son épaule la clé de la maison de David : s'il ouvre, personne ne fermera ; s'il ferme, personne n'ouvrira.",
        },
        {
          book: "Jean",
          chapter: "21",
          verse: "15-17",
          text: "Jésus dit à Simon Pierre... 'Pais mes agneaux... Pais mes brebis... Pais mes brebis.' (Il lui confie trois fois la charge de pasteur).",
        },
        {
          book: "Luc",
          chapter: "22",
          verse: "31-32",
          text: "Simon, Simon... j'ai prié pour toi, afin que ta foi ne défaille point ; et toi, quand tu seras converti, affermis tes frères.",
        },
        {
          book: "Matthieu",
          chapter: "18",
          verse: "17",
          text: "S'il refuse de les écouter, dis-le à l'Église ; et s'il refuse aussi d'écouter l'Église, qu'il soit pour toi comme un païen et un publicain.",
        },
        {
          book: "1 Timothée",
          chapter: "3",
          verse: "15",
          text: "...l'Église du Dieu vivant, la colonne et l'appui de la vérité.",
        },
      ],
      es: [
        {
          book: "Mateo",
          chapter: "16",
          verse: "18-19",
          text: "Y yo también te digo, que tú eres Pedro, y sobre esta roca edificaré mi iglesia... Y a ti te daré las llaves del reino de los cielos, y todo lo que atares en la tierra será atado en los cielos.",
        },
        {
          book: "Isaías",
          chapter: "22",
          verse: "22",
          text: "Y pondré la llave de la casa de David sobre su hombro; y abrirá, y nadie cerrará; cerrará, y nadie abrirá.",
        },
        {
          book: "Juan",
          chapter: "21",
          verse: "15-17",
          text: "Jesús dijo a Simón Pedro... 'Apacienta mis corderos... Pastorea mis ovejas... Apacienta mis ovejas.' (Tres veces encargándole ser pastor).",
        },
        {
          book: "Lucas",
          chapter: "22",
          verse: "31-32",
          text: "Simón, Simón... yo he rogado por ti, que tu fe no falte; y tú, una vez vuelto, confirma a tus hermanos.",
        },
        {
          book: "Mateo",
          chapter: "18",
          verse: "17",
          text: "Si no los oyere a ellos, dilo a la iglesia; y si no oyere a la iglesia, tenle por gentil y publicano.",
        },
        {
          book: "1 Timoteo",
          chapter: "3",
          verse: "15",
          text: "...la iglesia del Dios viviente, columna y baluarte de la verdad.",
        },
      ],
      de: [
        {
          book: "Matthäus",
          chapter: "16",
          verse: "18-19",
          text: "Und ich sage dir auch: Du bist Petrus, und auf diesen Felsen will ich meine Gemeinde bauen... Ich will dir die Schlüssel des Himmelreichs geben, und alles, was du auf Erden binden wirst, soll auch im Himmel gebunden sein.",
        },
        {
          book: "Jesaja",
          chapter: "22",
          verse: "22",
          text: "Und ich will die Schlüssel des Hauses Davids auf seine Schulter legen, dass er auftue und niemand zuschließe, dass er zuschließe und niemand auftue.",
        },
        {
          book: "Johannes",
          chapter: "21",
          verse: "15-17",
          text: "Spricht Jesus zu Simon Petrus... 'Weide meine Lämmer... Weide meine Schafe... Weide meine Schafe.' (Er beauftragt ihn dreimal als Hirten).",
        },
        {
          book: "Lukas",
          chapter: "22",
          verse: "31-32",
          text: "Simon, Simon... ich habe für dich gebeten, dass dein Glaube nicht aufhöre. Und wenn du dereinst dich bekehrst, so stärke deine Brüder.",
        },
        {
          book: "Matthäus",
          chapter: "18",
          verse: "17",
          text: "Hört er auf diese nicht, so sage es der Gemeinde. Hört er auch auf die Gemeinde nicht, so sei er dir wie ein Heide und Zöllner.",
        },
        {
          book: "1. Timotheus",
          chapter: "3",
          verse: "15",
          text: "...welche ist die Gemeinde des lebendigen Gottes, ein Pfeiler und eine Grundfeste der Wahrheit.",
        },
      ],
    },
    tradition: [
      {
        id: "irenaeus-authority",
        type: "father",
        author: {
          en: "St. Irenaeus",
          fr: "St Irénée",
          es: "San Ireneo",
          de: "Hl. Irenäus",
        },
        source: "Against Heresies 3.3.2",
        date: "c. 180 AD",
        text: {
          en: "For it is a matter of necessity that every Church should agree with this Church [of Rome], on account of its pre-eminent authority...",
          fr: "Car il est nécessaire que toute Église s'accorde avec cette Église [de Rome], en raison de son autorité prééminente...",
          es: "Porque es necesario que toda Iglesia esté de acuerdo con esta Iglesia [de Roma], a causa de su preeminente autoridad...",
          de: "Denn es ist notwendig, dass jede Kirche mit dieser Kirche [von Rom] übereinstimmt, wegen ihrer vorzüglichen Autorität...",
        },
      },
      {
        id: "cyprian-unity",
        type: "father",
        author: {
          en: "St. Cyprian of Carthage",
          fr: "St Cyprien de Carthage",
          es: "San Cipriano",
          de: "Hl. Cyprian",
        },
        source: "The Unity of the Catholic Church, 4-6",
        date: "251 AD",
        text: {
          en: "If someone does not hold fast to this unity of Peter, can he imagine that he still holds the faith? ...He can no longer have God for his Father, who has not the Church for his mother.",
          fr: "Si quelqu'un ne tient pas ferme à cette unité de Pierre, peut-il imaginer qu'il détient encore la foi ? ...Il ne peut plus avoir Dieu pour Père, celui qui n'a pas l'Église pour mère.",
          es: "Si alguien no se mantiene firme en esta unidad de Pedro, ¿puede imaginar que todavía tiene la fe? ...Ya no puede tener a Dios por Padre, quien no tiene a la Iglesia por madre.",
          de: "Wenn jemand nicht an dieser Einheit Petri festhält, kann er sich dann einbilden, den Glauben noch zu haben? ...Er kann Gott nicht mehr zum Vater haben, der die Kirche nicht zur Mutter hat.",
        },
      },
      {
        id: "ambrose-petrus",
        type: "doctor",
        author: {
          en: "St. Ambrose of Milan",
          fr: "St Ambroise de Milan",
          es: "San Ambrosio de Milán",
          de: "Hl. Ambrosius von Mailand",
        },
        source: "Commentary on Twelve Psalms 40:30",
        date: "c. 389 AD",
        text: {
          en: "Where Peter is, there is the Church. And where the Church is, no death is there, but life eternal.",
          fr: "Là où est Pierre, là est l'Église. Et là où est l'Église, il n'y a pas de mort, mais la vie éternelle.",
          es: "Donde está Pedro, allí está la Iglesia. Y donde está la Iglesia, no hay muerte, sino vida eterna.",
          de: "Wo Petrus ist, da ist die Kirche. Und wo die Kirche ist, da ist kein Tod, sondern ewiges Leben.",
        },
      },
      {
        id: "jerome-damasus",
        type: "doctor",
        author: {
          en: "St. Jerome",
          fr: "St Jérôme",
          es: "San Jerónimo",
          de: "Hl. Hieronymus",
        },
        source: "Letter to Pope Damasus, 15",
        date: "c. 376 AD",
        text: {
          en: "I follow no leader but Christ and join in communion with none but your blessedness, that is, with the chair of Peter. I know that this is the rock on which the Church has been built.",
          fr: "Je ne suis d'autre chef que le Christ et je ne communie avec personne d'autre que votre béatitude, c'est-à-dire avec la chaire de Pierre. Je sais que c'est là le rocher sur lequel l'Église a été bâtie.",
          es: "No sigo a otro líder que a Cristo y no me uno en comunión con nadie más que con vuestra beatitud, es decir, con la cátedra de Pedro. Sé que esta es la roca sobre la cual la Iglesia ha sido edificada.",
          de: "Ich folge keinem Führer außer Christus und verbinde mich in Gemeinschaft mit niemandem außer Eurer Heiligkeit, das heißt, mit dem Stuhl Petri. Ich weiß, dass dies der Fels ist, auf den die Kirche gebaut wurde.",
        },
      },
      {
        id: "vatican1-infallibility",
        type: "council",
        author: {
          en: "Vatican Council I",
          fr: "Concile Vatican I",
          es: "Concilio Vaticano I",
          de: "Vatikanisches Konzil I",
        },
        source: "Pastor Aeternus, Ch 4",
        date: "1870 AD",
        text: {
          en: "The Roman Pontiff, when he speaks ex cathedra... possesses, by the divine assistance promised to him in blessed Peter, that infallibility which the divine Redeemer willed his Church to enjoy in defining doctrine concerning faith or morals.",
          fr: "Le Pontife Romain, lorsqu'il parle ex cathedra... possède, par l'assistance divine qui lui a été promise dans le bienheureux Pierre, cette infaillibilité dont le divin Rédempteur a voulu que son Église soit pourvue en définissant la doctrine concernant la foi ou les mœurs.",
          es: "El Romano Pontífice, cuando habla ex cathedra... posee, por la asistencia divina prometida a él en el bienaventurado Pedro, aquella infalibilidad de la que el divino Redentor quiso que gozara su Iglesia al definir la doctrina sobre la fe o las costumbres.",
          de: "Der Römische Papst, wenn er ex cathedra spricht... besitzt durch den ihm im seligen Petrus verheißenen göttlichen Beistand jene Unfehlbarkeit, mit der der göttliche Erlöser seine Kirche bei der Definition der Glaubens- oder Sittenlehre ausgestattet wissen wollte.",
        },
      },
      {
        id: "augustine-roma",
        type: "doctor",
        author: {
          en: "St. Augustine",
          fr: "St Augustin",
          es: "San Agustín",
          de: "Hl. Augustinus",
        },
        source: "Sermon 131:10",
        date: "c. 400 AD",
        text: {
          en: "Rome has spoken; the case is concluded. (Roma locuta est, causa finita est).",
          fr: "Rome a parlé ; la cause est entendue (Roma locuta est, causa finita est).",
          es: "Roma ha hablado; la causa ha concluido (Roma locuta est, causa finita est).",
          de: "Rom hat gesprochen; der Fall ist abgeschlossen (Roma locuta est, causa finita est).",
        },
      },
      {
        id: "theology-keys",
        type: "theology",
        author: {
          en: "Theological Argument",
          fr: "Argument Théologique",
          es: "Argumento Teológico",
          de: "Theologisches Argument",
        },
        text: {
          en: "The giving of 'keys' denotes succession. In Isaiah 22, the key of David is passed from Shebna to Eliakim. If Jesus gives Peter the keys of the Kingdom, He establishes an office that must continue as long as the Kingdom is on earth.",
          fr: "Le don des « clés » indique une succession. Dans Isaïe 22, la clé de David passe de Shebna à Éliakim. Si Jésus donne à Pierre les clés du Royaume, il établit une charge qui doit perdurer aussi longtemps que le Royaume est sur terre.",
          es: "La entrega de las 'llaves' denota sucesión. En Isaías 22, la llave de David pasa de Sebna a Eliaquim. Si Jesús da a Pedro las llaves del Reino, establece un oficio que debe continuar mientras el Reino esté en la tierra.",
          de: "Die Übergabe der 'Schlüssel' bezeichnet Nachfolge. In Jesaja 22 geht der Schlüssel Davids von Schebna auf Eljakim über. Wenn Jesus Petrus die Schlüssel des Reiches gibt, setzt er ein Amt ein, das fortdauern muss, solange das Reich auf Erden ist.",
        },
      },
    ],
  },

  // 4. SALVATION
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
    verses: {
      en: [
        {
          book: "James",
          chapter: "2",
          verse: "24-26",
          text: "You see that a person is justified by works and not by faith alone. For as the body apart from the spirit is dead, so also faith apart from works is dead.",
        },
        {
          book: "Matthew",
          chapter: "7",
          verse: "21",
          text: "Not everyone who says to me, 'Lord, Lord,' will enter the kingdom of heaven, but the one who does the will of my Father who is in heaven.",
        },
        {
          book: "1 Corinthians",
          chapter: "13",
          verse: "2",
          text: "And if I have prophetic powers... and if I have all faith, so as to remove mountains, but have not love, I am nothing.",
        },
        {
          book: "Matthew",
          chapter: "25",
          verse: "40",
          text: "And the King will answer them, 'Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.' (Judgment based on works).",
        },
        {
          book: "Philippians",
          chapter: "2",
          verse: "12",
          text: "Therefore, my beloved... work out your own salvation with fear and trembling.",
        },
        {
          book: "Romans",
          chapter: "2",
          verse: "6-7",
          text: "He will render to each one according to his works: to those who by patience in well-doing seek for glory and honor and immortality, he will give eternal life.",
        },
        {
          book: "Hebrews",
          chapter: "5",
          verse: "9",
          text: "And being made perfect, he became the source of eternal salvation to all who obey him.",
        },
      ],
      fr: [
        {
          book: "Jacques",
          chapter: "2",
          verse: "24-26",
          text: "Vous voyez que l'homme est justifié par les œuvres, et non par la foi seulement... Comme le corps sans âme est mort, de même la foi sans les œuvres est morte.",
        },
        {
          book: "Matthieu",
          chapter: "7",
          verse: "21",
          text: "Ceux qui me disent : Seigneur, Seigneur ! n'entreront pas tous dans le royaume des cieux, mais celui-là seul qui fait la volonté de mon Père.",
        },
        {
          book: "1 Corinthiens",
          chapter: "13",
          verse: "2",
          text: "Et quand j'aurais le don de prophétie... quand j'aurais même toute la foi jusqu'à transporter des montagnes, si je n'ai pas la charité, je ne suis rien.",
        },
        {
          book: "Matthieu",
          chapter: "25",
          verse: "40",
          text: "Et le roi leur répondra : 'Je vous le dis en vérité, toutes les fois que vous avez fait ces choses à l'un de ces plus petits de mes frères, c'est à moi que vous les avez faites.'",
        },
        {
          book: "Philippiens",
          chapter: "2",
          verse: "12",
          text: "Ainsi, mes bien-aimés... travaillez à votre salut avec crainte et tremblement.",
        },
        {
          book: "Romains",
          chapter: "2",
          verse: "6-7",
          text: "Qui rendra à chacun selon ses œuvres : la vie éternelle à ceux qui, par la persévérance à bien faire, cherchent l'honneur, la gloire et l'immortalité.",
        },
        {
          book: "Hébreux",
          chapter: "5",
          verse: "9",
          text: "Et, après avoir été élevé à la perfection, il est devenu pour tous ceux qui lui obéissent l'auteur d'un salut éternel.",
        },
      ],
      es: [
        {
          book: "Santiago",
          chapter: "2",
          verse: "24-26",
          text: "Vosotros veis, pues, que el hombre es justificado por las obras, y no solamente por la fe... Porque como el cuerpo sin espíritu está muerto, así también la fe sin obras está muerta.",
        },
        {
          book: "Mateo",
          chapter: "7",
          verse: "21",
          text: "No todo el que me dice: Señor, Señor, entrará en el reino de los cielos, sino el que hace la voluntad de mi Padre.",
        },
        {
          book: "1 Corintios",
          chapter: "13",
          verse: "2",
          text: "Y si tuviese profecía... y si tuviese toda la fe, de tal manera que trasladase los montes, y no tengo amor, nada soy.",
        },
        {
          book: "Mateo",
          chapter: "25",
          verse: "40",
          text: "Y respondiendo el Rey, les dirá: 'De cierto os digo que en cuanto lo hicisteis a uno de estos mis hermanos más pequeños, a mí lo hicisteis.'",
        },
        {
          book: "Filipenses",
          chapter: "2",
          verse: "12",
          text: "Por tanto, amados míos... ocupaos en vuestra salvación con temor y temblor.",
        },
        {
          book: "Romanos",
          chapter: "2",
          verse: "6-7",
          text: "El cual pagará a cada uno conforme a sus obras: vida eterna a los que, perseverando en bien hacer, buscan gloria y honra e inmortalidad.",
        },
        {
          book: "Hebreos",
          chapter: "5",
          verse: "9",
          text: "Y habiendo sido perfeccionado, vino a ser autor de eterna salvación para todos los que le obedecen.",
        },
      ],
      de: [
        {
          book: "Jakobus",
          chapter: "2",
          verse: "24-26",
          text: "So seht ihr nun, dass der Mensch durch Werke gerechtfertigt wird und nicht durch den Glauben allein... Denn wie der Leib ohne Geist tot ist, so ist auch der Glaube ohne Werke tot.",
        },
        {
          book: "Matthäus",
          chapter: "7",
          verse: "21",
          text: "Es werden nicht alle, die zu mir sagen: Herr, Herr!, in das Himmelreich kommen, sondern die den Willen tun meines Vaters.",
        },
        {
          book: "1. Korinther",
          chapter: "13",
          verse: "2",
          text: "Und wenn ich prophetisch reden könnte... und wenn ich allen Glauben hätte, sodass ich Berge versetzen könnte, und hätte die Liebe nicht, so wäre ich nichts.",
        },
        {
          book: "Matthäus",
          chapter: "25",
          verse: "40",
          text: "Und der König wird antworten und zu ihnen sagen: 'Wahrlich, ich sage euch: Was ihr getan habt einem von diesen meinen geringsten Brüdern, das habt ihr mir getan.'",
        },
        {
          book: "Philipper",
          chapter: "2",
          verse: "12",
          text: "Meine Lieben... schaffet, dass ihr selig werdet, mit Furcht und Zittern.",
        },
        {
          book: "Römer",
          chapter: "2",
          verse: "6-7",
          text: "Der einem jeden geben wird nach seinen Werken: ewiges Leben denen, die in aller Geduld mit guten Werken trachten nach Herrlichkeit, Ehre und unvergänglichem Leben.",
        },
        {
          book: "Hebräer",
          chapter: "5",
          verse: "9",
          text: "Und da er vollendet war, ist er geworden allen, die ihm gehorsam sind, der Urheber des ewigen Heils.",
        },
      ],
    },
    tradition: [
      {
        id: "clement-works",
        type: "father",
        author: {
          en: "St. Clement of Rome",
          fr: "St Clément de Rome",
          es: "San Clemente de Roma",
          de: "Hl. Klemens von Rom",
        },
        source: "1 Clement 34",
        date: "c. 96 AD",
        text: {
          en: "Let us hasten with all energy and readiness of mind to perform every good work. For the Creator and Lord of all Himself rejoices in His works.",
          fr: "Hâtons-nous avec toute l'énergie et la promptitude d'esprit d'accomplir toute bonne œuvre. Car le Créateur et Seigneur de tout se réjouit Lui-même de Ses œuvres.",
          es: "Apresurémonos con toda energía y prontitud de ánimo a realizar toda buena obra. Porque el Creador y Señor de todo se regocija Él mismo en Sus obras.",
          de: "Lasst uns mit aller Energie und Bereitschaft des Geistes eilen, jedes gute Werk zu vollbringen. Denn der Schöpfer und Herr von allem freut sich selbst an seinen Werken.",
        },
      },
      {
        id: "polycarp-faith",
        type: "father",
        author: {
          en: "St. Polycarp",
          fr: "St Polycarpe",
          es: "San Policarpo",
          de: "Hl. Polykarp",
        },
        source: "Epistle to the Philippians, 3",
        date: "c. 110 AD",
        text: {
          en: "Faith is the mother of us all, followed by hope, and preceded by love towards God and Christ and our neighbor.",
          fr: "La foi est notre mère à tous, suivie par l'espérance, et précédée par l'amour envers Dieu et le Christ et notre prochain.",
          es: "La fe es la madre de todos nosotros, seguida de la esperanza, y precedida por el amor hacia Dios y Cristo y nuestro prójimo.",
          de: "Der Glaube ist unser aller Mutter, gefolgt von der Hoffnung und vorangegangen von der Liebe zu Gott und Christus und unserem Nächsten.",
        },
      },
      {
        id: "augustine-grace",
        type: "doctor",
        author: {
          en: "St. Augustine",
          fr: "St Augustin",
          es: "San Agustín",
          de: "Hl. Augustinus",
        },
        source: "Sermon 169",
        date: "c. 416 AD",
        text: {
          en: "He who created thee without thee, will not save thee without thee. He created thee without thy knowing it; He justifies thee without thy willing it? No.",
          fr: "Celui qui t'a créé sans toi, ne te sauvera pas sans toi. Il t'a créé sans que tu le saches ; te justifiera-t-il sans que tu le veuilles ? Non.",
          es: "El que te creó sin ti, no te salvará sin ti. Te creó sin que lo supieras; ¿te justificará sin que lo quieras? No.",
          de: "Der dich ohne dich geschaffen hat, wird dich nicht ohne dich retten. Er hat dich geschaffen, ohne dass du es wusstest; wird er dich rechtfertigen, ohne dass du es willst? Nein.",
        },
      },
      {
        id: "trent-justification",
        type: "council",
        author: {
          en: "Council of Trent",
          fr: "Concile de Trente",
          es: "Concilio de Trento",
          de: "Konzil von Trient",
        },
        source: "Session 6, Canon 24",
        date: "1547 AD",
        text: {
          en: "If any one saith, that the justice received is not preserved and also increased before God through good works; but that the said works are merely the fruits and signs of Justification obtained, but not a cause of the increase thereof; let him be anathema.",
          fr: "Si quelqu'un dit que la justice reçue n'est pas conservée et aussi accrue devant Dieu par les bonnes œuvres ; mais que lesdites œuvres ne sont que les fruits et les signes de la Justification obtenue, et non une cause de son augmentation ; qu'il soit anathème.",
          es: "Si alguno dijere que la justicia recibida no se conserva y también aumenta delante de Dios por las buenas obras; sino que dichas obras son meramente frutos y signos de la Justificación obtenida, pero no causa de su aumento; sea anatema.",
          de: "Wer sagt, die empfangene Gerechtigkeit werde durch gute Werke vor Gott nicht bewahrt und auch nicht vermehrt, sondern diese Werke seien nur Früchte und Zeichen der erlangten Rechtfertigung, nicht aber eine Ursache ihrer Vermehrung, der sei ausgeschlossen.",
        },
      },
      {
        id: "francis-sales-love",
        type: "doctor",
        author: {
          en: "St. Francis de Sales",
          fr: "St François de Sales",
          es: "San Francisco de Sales",
          de: "Hl. Franz von Sales",
        },
        source: "Treatise on the Love of God",
        date: "1616 AD",
        text: {
          en: "Faith is the best friend of our spirit, but charity is the life of faith. Faith without charity is dead, but charity is the soul of faith.",
          fr: "La foi est la meilleure amie de notre esprit, mais la charité est la vie de la foi. La foi sans la charité est morte, mais la charité est l'âme de la foi.",
          es: "La fe es la mejor amiga de nuestro espíritu, pero la caridad es la vida de la fe. La fe sin caridad está muerta, pero la caridad es el alma de la fe.",
          de: "Der Glaube ist der beste Freund unseres Geistes, aber die Liebe ist das Leben des Glaubens. Glaube ohne Liebe ist tot, aber die Liebe ist die Seele des Glaubens.",
        },
      },
      {
        id: "theology-sola-fide",
        type: "theology",
        author: {
          en: "Theological Argument",
          fr: "Argument Théologique",
          es: "Argumento Teológico",
          de: "Theologisches Argument",
        },
        text: {
          en: "The only time the phrase 'faith alone' appears in the Bible is in James 2:24, where it says we are NOT justified by faith alone. Catholics distinguish between 'Initial Justification' (unmerited grace in Baptism) and 'Final Salvation' (requiring perseverance and works).",
          fr: "La seule fois où l'expression « foi seule » apparaît dans la Bible est dans Jacques 2:24, où il est dit que nous ne sommes PAS justifiés par la foi seule. Les catholiques distinguent entre la « Justification Initiale » (grâce non méritée au baptême) et le « Salut Final » (exigeant persévérance et œuvres).",
          es: "La única vez que la frase 'solo fe' aparece en la Biblia es en Santiago 2:24, donde dice que NO somos justificados solo por la fe. Los católicos distinguen entre 'Justificación Inicial' (gracia no merecida en el Bautismo) y 'Salvación Final' (que requiere perseverancia y obras).",
          de: "Das einzige Mal, dass der Ausdruck 'Glaube allein' in der Bibel vorkommt, ist in Jakobus 2,24, wo es heißt, dass wir NICHT allein durch Glauben gerechtfertigt werden. Katholiken unterscheiden zwischen 'anfänglicher Rechtfertigung' (unverdiente Gnade in der Taufe) und 'endgültigem Heil' (das Ausdauer und Werke erfordert).",
        },
      },
    ],
  },

  // 5. CONFESSION
  {
    id: "confession",
    title: {
      en: "Confession",
      fr: "Confession",
      es: "Confesión",
      de: "Beichte",
    },
    subtitle: {
      en: "Sacrament of Reconciliation",
      fr: "Sacrement de Réconciliation",
      es: "Sacramento de la Reconciliación",
      de: "Sakrament der Versöhnung",
    },
    verses: {
      en: [
        {
          book: "John",
          chapter: "20",
          verse: "21-23",
          text: "Jesus said to them... 'Receive the Holy Spirit. If you forgive the sins of any, they are forgiven them; if you withhold forgiveness from any, it is withheld.' (The power to 'withhold' requires hearing the sin).",
        },
        {
          book: "James",
          chapter: "5",
          verse: "16",
          text: "Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working.",
        },
        {
          book: "Leviticus",
          chapter: "5",
          verse: "5-6",
          text: "When a man is guilty in any of these, he shall confess the sin he has committed... and the priest shall make atonement for him for his sin.",
        },
        {
          book: "Matthew",
          chapter: "18",
          verse: "18",
          text: "Truly, I say to you, whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven.",
        },
        {
          book: "Acts",
          chapter: "19",
          verse: "18",
          text: "Also many of those who were now believers came, confessing and divulging their practices.",
        },
        {
          book: "2 Corinthians",
          chapter: "5",
          verse: "18",
          text: "All this is from God, who through Christ reconciled us to himself and gave us the ministry of reconciliation.",
        },
      ],
      fr: [
        {
          book: "Jean",
          chapter: "20",
          verse: "21-23",
          text: "Jésus leur dit... 'Recevez le Saint-Esprit. Ceux à qui vous pardonnerez les péchés, ils leur seront pardonnés ; et ceux à qui vous les retiendrez, ils leur seront retenus.' (Le pouvoir de 'retenir' exige d'entendre le péché).",
        },
        {
          book: "Jacques",
          chapter: "5",
          verse: "16",
          text: "Confessez donc vos péchés les uns aux autres, et priez les uns pour les autres, afin que vous soyez guéris. La prière fervente du juste a une grande efficacité.",
        },
        {
          book: "Lévitique",
          chapter: "5",
          verse: "5-6",
          text: "Lorsqu'un homme se sera rendu coupable... il confessera son péché... et le prêtre fera pour lui l'expiation de son péché.",
        },
        {
          book: "Matthieu",
          chapter: "18",
          verse: "18",
          text: "Je vous le dis en vérité, tout ce que vous lierez sur la terre sera lié dans le ciel, et tout ce que vous délierez sur la terre sera délié dans le ciel.",
        },
        {
          book: "Actes",
          chapter: "19",
          verse: "18",
          text: "Plusieurs de ceux qui avaient cru venaient confesser et déclarer ce qu'ils avaient fait.",
        },
        {
          book: "2 Corinthiens",
          chapter: "5",
          verse: "18",
          text: "Et tout cela vient de Dieu, qui nous a réconciliés avec lui par Christ, et qui nous a donné le ministère de la réconciliation.",
        },
      ],
      es: [
        {
          book: "Juan",
          chapter: "20",
          verse: "21-23",
          text: "Jesús les dijo... 'Recibid el Espíritu Santo. A quienes remitiereis los pecados, les son remitidos; y a quienes se los retuviereis, les son retenidos.' (El poder de 'retener' requiere escuchar el pecado).",
        },
        {
          book: "Santiago",
          chapter: "5",
          verse: "16",
          text: "Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados. La oración eficaz del justo puede mucho.",
        },
        {
          book: "Levítico",
          chapter: "5",
          verse: "5-6",
          text: "Cuando alguno pecare... confesará aquello en que pecó... y el sacerdote hará expiación por él de su pecado.",
        },
        {
          book: "Mateo",
          chapter: "18",
          verse: "18",
          text: "De cierto os digo que todo lo que atéis en la tierra, será atado en el cielo; y todo lo que desatéis en la tierra, será desatado en el cielo.",
        },
        {
          book: "Hechos",
          chapter: "19",
          verse: "18",
          text: "Y muchos de los que habían creído venían, confesando y dando cuenta de sus hechos.",
        },
        {
          book: "2 Corintios",
          chapter: "5",
          verse: "18",
          text: "Y todo esto proviene de Dios, quien nos reconcilió consigo mismo por Cristo, y nos dio el ministerio de la reconciliación.",
        },
      ],
      de: [
        {
          book: "Johannes",
          chapter: "20",
          verse: "21-23",
          text: "Jesus sprach zu ihnen... 'Nehmt hin den Heiligen Geist! Welchen ihr die Sünden erlasst, denen sind sie erlassen; und welchen ihr sie behaltet, denen sind sie behalten.' (Die Macht, Sünden zu 'behalten', erfordert das Hören der Sünde).",
        },
        {
          book: "Jakobus",
          chapter: "5",
          verse: "16",
          text: "Bekennt also einander eure Sünden und betet für einander, dass ihr gesund werdet. Des Gerechten Gebet vermag viel, wenn es ernstlich ist.",
        },
        {
          book: "3. Mose",
          chapter: "5",
          verse: "5-6",
          text: "Wenn sich nun jemand an einem von diesen Dingen versündigt, so soll er bekennen, woran er gesündigt hat... und der Priester soll ihm Sühnung erwirken wegen seiner Sünde.",
        },
        {
          book: "Matthäus",
          chapter: "18",
          verse: "18",
          text: "Wahrlich, ich sage euch: Was ihr auf Erden binden werdet, soll auch im Himmel gebunden sein, und was ihr auf Erden lösen werdet, soll auch im Himmel gelöst sein.",
        },
        {
          book: "Apostelgeschichte",
          chapter: "19",
          verse: "18",
          text: "Es kamen auch viele von denen, die gläubig geworden waren, und bekannten und verkündeten, was sie getrieben hatten.",
        },
        {
          book: "2. Korinther",
          chapter: "5",
          verse: "18",
          text: "Das alles aber von Gott, der uns mit sich selber versöhnt hat durch Christus und uns das Amt gegeben, das die Versöhnung predigt.",
        },
      ],
    },
    tradition: [
      {
        id: "didache-confession",
        type: "father",
        author: {
          en: "The Didache",
          fr: "La Didaché",
          es: "La Didaché",
          de: "Die Didache",
        },
        source: "Chapter 4:14",
        date: "c. 70 AD",
        text: {
          en: "In the church you shall confess your transgressions, and you shall not approach your prayer with an evil conscience. This is the way of life.",
          fr: "Dans l'église, tu confesseras tes transgressions, et tu ne t'approcheras pas de ta prière avec une mauvaise conscience. C'est là le chemin de la vie.",
          es: "En la iglesia confesarás tus transgresiones, y no te acercarás a tu oración con mala conciencia. Este es el camino de la vida.",
          de: "In der Gemeinde sollst du deine Verfehlungen bekennen und nicht mit schlechtem Gewissen zum Gebet gehen. Das ist der Weg des Lebens.",
        },
      },
      {
        id: "basil-confession",
        type: "father",
        author: {
          en: "St. Basil the Great",
          fr: "St Basile le Grand",
          es: "San Basilio el Grande",
          de: "Hl. Basilius der Große",
        },
        source: "Rules Briefly Treated, 288",
        date: "c. 370 AD",
        text: {
          en: "It is necessary to confess our sins to those to whom the dispensation of God's mysteries is entrusted. For those doing penance of old are found to have done it before the saints.",
          fr: "Il est nécessaire de confesser nos péchés à ceux à qui l'administration des mystères de Dieu est confiée. Car ceux qui faisaient pénitence autrefois le faisaient devant les saints.",
          es: "Es necesario confesar nuestros pecados a aquellos a quienes se les ha confiado la dispensación de los misterios de Dios. Porque los que hacían penitencia antiguamente, lo hacían ante los santos.",
          de: "Es ist notwendig, unsere Sünden denen zu bekennen, denen die Verwaltung der Geheimnisse Gottes anvertraut ist. Denn die, die früher Buße taten, haben es vor den Heiligen getan.",
        },
      },
      {
        id: "chrysostom-priests",
        type: "father",
        author: {
          en: "St. John Chrysostom",
          fr: "St Jean Chrysostome",
          es: "San Juan Crisóstomo",
          de: "Hl. Johannes Chrysostomus",
        },
        source: "On the Priesthood, 3.5",
        date: "c. 387 AD",
        text: {
          en: "Priests have received a power which God has given neither to angels nor to archangels... The Father has given all judgment to the Son. And now I see the Son handing all this power to the Son... putting it into the hands of these men.",
          fr: "Les prêtres ont reçu un pouvoir que Dieu n'a donné ni aux anges ni aux archanges... Le Père a remis tout jugement au Fils. Et maintenant je vois le Fils remettre tout ce pouvoir... entre les mains de ces hommes.",
          es: "Los sacerdotes han recibido un poder que Dios no ha dado ni a los ángeles ni a los arcángeles... El Padre ha dado todo el juicio al Hijo. Y ahora veo al Hijo entregando todo este poder... en las manos de estos hombres.",
          de: "Priester haben eine Macht empfangen, die Gott weder Engeln noch Erzengeln gegeben hat... Der Vater hat das ganze Gericht dem Sohn übergeben. Und nun sehe ich, wie der Sohn all diese Macht... in die Hände dieser Männer legt.",
        },
      },
      {
        id: "ambrose-penance",
        type: "doctor",
        author: {
          en: "St. Ambrose of Milan",
          fr: "St Ambroise de Milan",
          es: "San Ambrosio de Milán",
          de: "Hl. Ambrosius von Mailand",
        },
        source: "On Penance 1:2",
        date: "c. 388 AD",
        text: {
          en: "For this right [to forgive sins] is granted to priests only. The Church holds fast its obedience on either side, by both retaining and remitting sin.",
          fr: "Car ce droit [de pardonner les péchés] n'est accordé qu'aux prêtres. L'Église maintient son obéissance des deux côtés, à la fois en retenant et en remettant les péchés.",
          es: "Porque este derecho [de perdonar los pecados] se concede solo a los sacerdotes. La Iglesia mantiene firme su obediencia en ambos lados, reteniendo y perdonando el pecado.",
          de: "Denn dieses Recht [Sünden zu vergeben] ist nur den Priestern verliehen. Die Kirche hält an ihrem Gehorsam auf beiden Seiten fest, indem sie Sünden sowohl behält als auch erlässt.",
        },
      },
      {
        id: "trent-absolution",
        type: "council",
        author: {
          en: "Council of Trent",
          fr: "Concile de Trente",
          es: "Concilio de Trento",
          de: "Konzil von Trient",
        },
        source: "Session 14, Chapter 6",
        date: "1551 AD",
        text: {
          en: "The sacramental absolution of the priest is not a bare ministry, only of announcing the Gospel... but is a judicial act, which by him is pronounced as by a judge.",
          fr: "L'absolution sacramentelle du prêtre n'est pas un simple ministère, consistant seulement à annoncer l'Évangile... mais c'est un acte judiciaire, prononcé par lui comme par un juge.",
          es: "La absolución sacramental del sacerdote no es un mero ministerio, solo de anunciar el Evangelio... sino un acto judicial, que por él es pronunciado como por un juez.",
          de: "Die sakramentale Lossprechung des Priesters ist kein bloßer Dienst, nur das Evangelium zu verkünden... sondern ein richterlicher Akt, der von ihm wie von einem Richter ausgesprochen wird.",
        },
      },
      {
        id: "theology-priesthood",
        type: "theology",
        author: {
          en: "Theological Argument",
          fr: "Argument Théologique",
          es: "Argumento Teológico",
          de: "Theologisches Argument",
        },
        text: {
          en: "Christ delegated the power to forgive sins to His Apostles (John 20). If it were merely a matter of confessing privately to God, Christ would not have given the Apostles the specific power to 'retain' or 'withhold' forgiveness. To retain or forgive requires hearing the specific sin to make a judgment.",
          fr: "Christ a délégué le pouvoir de pardonner les péchés à Ses Apôtres (Jean 20). S'il s'agissait simplement de se confesser en privé à Dieu, le Christ n'aurait pas donné aux Apôtres le pouvoir spécifique de 'retenir' le pardon. Retenir ou pardonner exige d'entendre le péché spécifique pour rendre un jugement.",
          es: "Cristo delegó el poder de perdonar los pecados a Sus Apóstoles (Juan 20). Si fuera meramente una cuestión de confesarse en privado con Dios, Cristo no habría dado a los Apóstoles el poder específico de 'retener' el perdón. Retener o perdonar requiere escuchar el pecado específico para hacer un juicio.",
          de: "Christus hat die Macht, Sünden zu vergeben, an seine Apostel delegiert (Johannes 20). Wäre es nur eine Angelegenheit, sich privat vor Gott zu bekennen, hätte Christus den Aposteln nicht die spezifische Macht gegeben, die Vergebung zu 'behalten'. Zu behalten oder zu vergeben erfordert das Hören der spezifischen Sünde, um ein Urteil zu fällen.",
        },
      },
    ],
  },

  // 6. MARY
  {
    id: "mary",
    title: { en: "Mary", fr: "Marie", es: "María", de: "Maria" },
    subtitle: { en: "Mother of God & The Church", fr: "Mère de Dieu & de l'Église", es: "Madre de Dios y de la Iglesia", de: "Mutter Gottes & der Kirche" },
    verses: {
      en: [
        { book: "Luke", chapter: "1", verse: "28", text: "And he came to her and said, 'Hail, full of grace, the Lord is with you!' (Kecharitomene: perfected in grace)." },
        { book: "Genesis", chapter: "3", verse: "15", text: "I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel." },
        { book: "Luke", chapter: "1", verse: "42-43", text: "Blessed are you among women, and blessed is the fruit of your womb! And why is this granted to me that the mother of my Lord should come to me?" },
        { book: "John", chapter: "19", verse: "26-27", text: "When Jesus saw his mother and the disciple whom he loved standing nearby, he said to his mother, 'Woman, behold, your son!' Then he said to the disciple, 'Behold, your mother!'" },
        { book: "Revelation", chapter: "11", verse: "19", text: "Then God's temple in heaven was opened, and the ark of his covenant was seen... (Immediately followed by the vision of the Woman)." },
        { book: "Revelation", chapter: "12", verse: "1", text: "And a great sign appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars." },
        { book: "Luke", chapter: "1", verse: "48", text: "For behold, from now on all generations will call me blessed." }
      ],
      fr: [
        { book: "Luc", chapter: "1", verse: "28", text: "Je te salue, toi à qui une grâce a été faite ; le Seigneur est avec toi. (Kecharitomene : comblée de grâce)." },
        { book: "Genèse", chapter: "3", verse: "15", text: "Je mettrai une inimitié entre toi et la femme, entre ta descendance et sa descendance : celle-ci t'écrasera la tête, et tu lui blesseras le talon." },
        { book: "Luc", chapter: "1", verse: "42-43", text: "Tu es bénie entre les femmes, et le fruit de ton sein est béni. Comment m'est-il accordé que la mère de mon Seigneur vienne auprès de moi ?" },
        { book: "Jean", chapter: "19", verse: "26-27", text: "Jésus... dit à sa mère : 'Femme, voilà ton fils.' Puis il dit au disciple : 'Voilà ta mère.' Et, dès ce moment, le disciple la prit chez lui." },
        { book: "Apocalypse", chapter: "11", verse: "19", text: "Et le temple de Dieu dans le ciel fut ouvert, et l'arche de son alliance apparut... (Suivi immédiatement par la vision de la Femme)." },
        { book: "Apocalypse", chapter: "12", verse: "1", text: "Un grand signe parut dans le ciel : une femme enveloppée du soleil, la lune sous ses pieds, et une couronne de douze étoiles sur sa tête." },
        { book: "Luc", chapter: "1", verse: "48", text: "Désormais toutes les générations me diront bienheureuse." }
      ],
      es: [
        { book: "Lucas", chapter: "1", verse: "28", text: "¡Salve, muy favorecida! El Señor es contigo; bendita tú entre las mujeres. (Kecharitomene: llena eres de gracia)." },
        { book: "Génesis", chapter: "3", verse: "15", text: "Pondré enemistad entre ti y la mujer, y entre tu linaje y su linaje: él te pisará la cabeza, y tú le herirás en el calcañar." },
        { book: "Lucas", chapter: "1", verse: "42-43", text: "Bendita tú entre las mujeres, y bendito el fruto de tu vientre. ¿Por qué se me concede esto a mí, que la madre de mi Señor venga a mí?" },
        { book: "Juan", chapter: "19", verse: "26-27", text: "Jesús... dijo a su madre: 'Mujer, he ahí tu hijo.' Después dijo al discípulo: 'He ahí tu madre.' Y desde aquella hora el discípulo la recibió en su casa." },
        { book: "Apocalipsis", chapter: "11", verse: "19", text: "Y el templo de Dios fue abierto en el cielo, y el arca de su pacto se dejó ver... (Seguido inmediatamente por la visión de la Mujer)." },
        { book: "Apocalipsis", chapter: "12", verse: "1", text: "Apareció en el cielo una gran señal: una mujer vestida del sol, con la luna debajo de sus pies, y sobre su cabeza una corona de doce estrellas." },
        { book: "Lucas", chapter: "1", verse: "48", text: "Desde ahora me dirán bienaventurada todas las generaciones." }
      ],
      de: [
        { book: "Lukas", chapter: "1", verse: "28", text: "Sei gegrüßt, du Begnadete! Der Herr ist mit dir! (Kecharitomene: voll der Gnade)." },
        { book: "Genesis", chapter: "3", verse: "15", text: "Ich will Feindschaft setzen zwischen dir und der Frau und zwischen deinem Nachkommen und ihrem Nachkommen; der soll dir den Kopf zertreten, und du wirst ihn in die Ferse stechen." },
        { book: "Lukas", chapter: "1", verse: "42-43", text: "Gesegnet bist du unter den Frauen, und gesegnet ist die Frucht deines Leibes! Und wie geschieht mir das, dass die Mutter meines Herrn zu mir kommt?" },
        { book: "Johannes", chapter: "19", verse: "26-27", text: "Jesus... sprach zu seiner Mutter: 'Frau, siehe, das ist dein Sohn!' Danach spricht er zu dem Jünger: 'Siehe, das ist deine Mutter!'" },
        { book: "Offenbarung", chapter: "11", verse: "19", text: "Und der Tempel Gottes im Himmel wurde aufgetan, und die Lade seines Bundes wurde sichtbar... (Sofort gefolgt von der Vision der Frau)." },
        { book: "Offenbarung", chapter: "12", verse: "1", text: "Und ein großes Zeichen erschien im Himmel: eine Frau, mit der Sonne bekleidet, und der Mond unter ihren Füßen und auf ihrem Haupt eine Krone von zwölf Sternen." },
        { book: "Lukas", chapter: "1", verse: "48", text: "Siehe, von nun an werden mich seligpreisen alle Kindeskinder." }
      ],
    },
    tradition: [
      {
        id: "sub-tuum",
        type: "father", // Early Prayer
        author: { en: "Sub Tuum Praesidium", fr: "Sub Tuum Praesidium", es: "Sub Tuum Praesidium", de: "Sub Tuum Praesidium" },
        source: "Earliest Marian Prayer",
        date: "c. 250 AD",
        text: { 
          en: "We fly to Thy protection, O Holy Mother of God; do not despise our petitions in our necessities, but deliver us always from all dangers, O Glorious and Blessed Virgin.", 
          fr: "Sous l'abri de ta miséricorde, nous nous réfugions, Sainte Mère de Dieu. Ne méprise pas nos prières quand nous sommes dans l'épreuve, mais de tous les dangers délivre-nous toujours, Vierge glorieuse et bénie.", 
          es: "Bajo tu amparo nos acogemos, Santa Madre de Dios; no deseches las súplicas que te dirigimos en nuestras necesidades, antes bien, líbranos de todo peligro, ¡oh siempre Virgen, gloriosa y bendita!", 
          de: "Unter deinen Schutz und Schirm fliehen wir, o heilige Gottesgebärerin. Verschmähe nicht unser Gebet in unseren Nöten, sondern erlöse uns jederzeit von allen Gefahren, o du glorreiche und gebenedeite Jungfrau." 
        }
      },
      {
        id: "irenaeus-eve",
        type: "father",
        author: { en: "St. Irenaeus", fr: "St Irénée", es: "San Ireneo", de: "Hl. Irenäus" },
        source: "Against Heresies 3.22.4",
        date: "c. 180 AD",
        text: { 
          en: "The knot of Eve's disobedience was loosed by the obedience of Mary. For what the virgin Eve had bound fast through unbelief, this did the virgin Mary set free through faith.", 
          fr: "Le nœud de la désobéissance d'Ève a été dénoué par l'obéissance de Marie. Car ce que la vierge Ève avait lié par l'incrédulité, la vierge Marie l'a délié par la foi.", 
          es: "El nudo de la desobediencia de Eva fue desatado por la obediencia de María. Porque lo que la virgen Eva ató por su incredulidad, la virgen María lo desató por su fe.", 
          de: "Der Knoten des Ungehorsams Evas wurde durch den Gehorsam Marias gelöst. Denn was die Jungfrau Eva durch Unglauben gebunden hatte, das hat die Jungfrau Maria durch den Glauben gelöst." 
        }
      },
      {
        id: "ephrem-mary",
        type: "doctor",
        author: { en: "St. Ephrem the Syrian", fr: "St Éphrem le Syrien", es: "San Efrén el Sirio", de: "Hl. Ephräm der Syrer" },
        source: "Nisibene Hymns 27:8",
        date: "c. 370 AD",
        text: { 
          en: "You alone and your Mother are more beautiful than any others, for there is no blemish in you nor any stains upon your Mother.", 
          fr: "Vous seul et votre Mère êtes plus beaux que tous les autres, car il n'y a aucune tache en vous ni aucune souillure sur votre Mère.", 
          es: "Tú solo y tu Madre sois más hermosos que cualquier otro, pues no hay mancha en ti ni mancha alguna en tu Madre.", 
          de: "Du allein und deine Mutter seid schöner als alle anderen, denn es ist kein Makel an dir noch irgendein Flecken an deiner Mutter." 
        }
      },
      {
        id: "augustine-sinless",
        type: "doctor",
        author: { en: "St. Augustine", fr: "St Augustin", es: "San Agustín", de: "Hl. Augustinus" },
        source: "On Nature and Grace, 36",
        date: "415 AD",
        text: { 
          en: "Having excepted the holy Virgin Mary, concerning whom, on account of the honor of the Lord, I wish to have absolutely no question when treating of sins...", 
          fr: "Je fais exception pour la sainte Vierge Marie, au sujet de laquelle, pour l'honneur du Seigneur, je ne veux absolument pas qu'il soit question lorsqu'on traite des péchés...", 
          es: "Exceptuando a la santa Virgen María, acerca de la cual, por el honor del Señor, no quiero que se plantee absolutamente ninguna cuestión cuando se trata de pecados...", 
          de: "Mit Ausnahme der heiligen Jungfrau Maria, über die ich wegen der Ehre des Herrn absolut keine Frage zulassen möchte, wenn von Sünden gehandelt wird..." 
        }
      },
      {
        id: "jerome-perpetual",
        type: "doctor",
        author: { en: "St. Jerome", fr: "St Jérôme", es: "San Jerónimo", de: "Hl. Hieronymus" },
        source: "Against the Pelagians 2:4",
        date: "c. 417 AD",
        text: { 
          en: "Only Christ opened the closed doors of the virginal womb, which continued to remain closed, however. This is the closed eastern gate [of Ezekiel], through which only the High Priest enters and goes out.", 
          fr: "Seul le Christ a ouvert les portes closes du sein virginal, qui sont cependant restées closes. C'est la porte orientale fermée [d'Ézéchiel], par laquelle seul le Grand Prêtre entre et sort.", 
          es: "Solo Cristo abrió las puertas cerradas del seno virginal, que sin embargo permanecieron cerradas. Esta es la puerta oriental cerrada [de Ezequiel], por la cual solo entra y sale el Sumo Sacerdote.", 
          de: "Nur Christus hat die verschlossenen Tore des jungfräulichen Schoßes geöffnet, die jedoch verschlossen blieben. Das ist das verschlossene Osttor [bei Ezechiel], durch das nur der Hohepriester ein- und ausgeht." 
        }
      },
      {
        id: "council-ephesus",
        type: "council",
        author: { en: "Council of Ephesus", fr: "Concile d'Éphèse", es: "Concilio de Éfeso", de: "Konzil von Ephesus" },
        source: "Definition of Theotokos",
        date: "431 AD",
        text: { 
          en: "If anyone does not confess that Emmanuel is God in truth, and therefore that the holy virgin is the mother of God (Theotokos)... let him be anathema.", 
          fr: "Si quelqu'un ne confesse pas qu'Emmanuel est Dieu en vérité, et que par conséquent la sainte vierge est mère de Dieu (Théotokos)... qu'il soit anathème.", 
          es: "Si alguno no confiesa que el Emmanuel es Dios en verdad, y que por tanto la santa virgen es madre de Dios (Theotokos)... sea anatema.", 
          de: "Wer nicht bekennt, dass der Emmanuel in Wahrheit Gott ist und dass deshalb die heilige Jungfrau Gottesgebärerin (Theotokos) ist... der sei ausgeschlossen." 
        }
      },
      {
        id: "assumption-dogma",
        type: "papal",
        author: { en: "Pope Pius XII", fr: "Pape Pie XII", es: "Papa Pío XII", de: "Papst Pius XII." },
        source: "Munificentissimus Deus (Ex Cathedra)",
        date: "1950 AD",
        text: { 
          en: "The Immaculate Mother of God, the ever Virgin Mary, having completed the course of her earthly life, was assumed body and soul into heavenly glory.", 
          fr: "L'Immaculée Mère de Dieu, Marie toujours Vierge, après avoir achevé le cours de sa vie terrestre, a été élevée corps et âme à la gloire céleste.", 
          es: "La Inmaculada Madre de Dios, la siempre Virgen María, cumplido el curso de su vida terrestre, fue asunta en cuerpo y alma a la gloria celestial.", 
          de: "Die unbefleckte Gottesmutter, die immerwährende Jungfrau Maria, ist nach Ablauf ihres irdischen Lebens mit Leib und Seele in die himmlische Herrlichkeit aufgenommen worden." 
        }
      },
      {
        id: "theology-veneration",
        type: "theology",
        author: { en: "Theological Argument", fr: "Argument Théologique", es: "Argumento Teológico", de: "Theologisches Argument" },
        text: { 
          en: "Catholics do NOT worship Mary (latria), which is due to God alone. We honor her (hyperdulia) as the masterpiece of God's creation. To honor the artist's masterpiece is to honor the Artist.", 
          fr: "Les catholiques n'adorent PAS Marie (latrie), culte dû à Dieu seul. Nous l'honorons (hyperdulie) comme le chef-d'œuvre de la création de Dieu. Honorer le chef-d'œuvre de l'artiste, c'est honorer l'Artiste.", 
          es: "Los católicos NO adoran a María (latría), culto debido solo a Dios. La honramos (hiperdulía) como la obra maestra de la creación de Dios. Honrar la obra maestra del artista es honrar al Artista.", 
          de: "Katholiken beten Maria NICHT an (Latria), eine Anbetung, die allein Gott gebührt. Wir ehren sie (Hyperdulia) als das Meisterwerk der Schöpfung Gottes. Das Meisterwerk des Künstlers zu ehren, heißt den Künstler zu ehren." 
        }
      }
    ]
  },

  // 7. PURGATORY
  {
    id: "purgatory",
    title: { en: "Purgatory", fr: "Purgatoire", es: "Purgatorio", de: "Fegefeuer" },
    subtitle: { en: "Purification After Death", fr: "Purification après la mort", es: "Purificación después de la muerte", de: "Reinigung nach dem Tod" },
    verses: {
      en: [
        { book: "2 Maccabees", chapter: "12", verse: "46", text: "It is therefore a holy and wholesome thought to pray for the dead, that they may be loosed from sins." },
        { book: "1 Corinthians", chapter: "3", verse: "15", text: "If anyone's work is burned up, he will suffer loss, though he himself will be saved, but only as through fire." },
        { book: "Matthew", chapter: "12", verse: "32", text: "And whoever speaks a word against the Son of Man will be forgiven, but whoever speaks against the Holy Spirit will not be forgiven, either in this age or in the age to come." },
        { book: "Revelation", chapter: "21", verse: "27", text: "But nothing unclean will ever enter it [Heaven], nor anyone who does what is detestable or false." },
        { book: "Matthew", chapter: "5", verse: "25-26", text: "Come to terms quickly with your accuser... lest you be thrown into prison. Truly, I say to you, you will never get out until you have paid the last penny." },
        { book: "2 Timothy", chapter: "1", verse: "16-18", text: "May the Lord grant mercy to the household of Onesiphorus... May the Lord grant him to find mercy from the Lord on that Day." },
        { book: "Malachi", chapter: "3", verse: "2-3", text: "For he is like a refiner's fire... and he will purify the sons of Levi and refine them like gold and silver." }
      ],
      fr: [
        { book: "2 Maccabées", chapter: "12", verse: "46", text: "Voilà pourquoi il fit ce sacrifice expiatoire pour les morts, afin qu'ils fussent délivrés de leur péché." },
        { book: "1 Corinthiens", chapter: "3", verse: "15", text: "Si l'œuvre de quelqu'un est consumée, il perdra sa récompense ; pour lui, il sera sauvé, mais comme au travers du feu." },
        { book: "Matthieu", chapter: "12", verse: "32", text: "Mais quiconque parlera contre le Saint-Esprit, il ne lui sera pardonné ni dans ce siècle ni dans le siècle à venir." },
        { book: "Apocalypse", chapter: "21", verse: "27", text: "Il n'entrera chez elle rien de souillé, ni personne qui se livre à l'abomination et au mensonge." },
        { book: "Matthieu", chapter: "5", verse: "25-26", text: "Accorde-toi promptement avec ton adversaire... de peur qu'on ne te jette en prison. Je te le dis en vérité, tu ne sortiras pas de là que tu n'aies payé le dernier quadrant." },
        { book: "2 Timothée", chapter: "1", verse: "16-18", text: "Que le Seigneur fasse miséricorde à la maison d'Onésiphore... Que le Seigneur lui donne de trouver miséricorde auprès du Seigneur en ce jour-là." },
        { book: "Malachie", chapter: "3", verse: "2-3", text: "Car il est comme le feu du fondeur... il purifiera les fils de Lévi et les épurera comme on épure l'or et l'argent." }
      ],
      es: [
        { book: "2 Macabeos", chapter: "12", verse: "46", text: "Es, pues, un pensamiento santo y saludable el rogar por los difuntos, a fin de que sean libres de sus pecados." },
        { book: "1 Corintios", chapter: "3", verse: "15", text: "Si la obra de alguno se quemare, él sufrirá pérdida, si bien él mismo será salvo, aunque así como por fuego." },
        { book: "Mateo", chapter: "12", verse: "32", text: "Pero a cualquiera que hable contra el Espíritu Santo, no le será perdonado, ni en este siglo ni en el venidero." },
        { book: "Apocalipsis", chapter: "21", verse: "27", text: "No entrará en ella ninguna cosa inmunda, o que hace abominación y mentira." },
        { book: "Mateo", chapter: "5", verse: "25-26", text: "Ponte de acuerdo con tu adversario pronto... no sea que te echen en la cárcel. De cierto te digo que no saldrás de allí, hasta que pagues el último cuadrante." },
        { book: "2 Timoteo", chapter: "1", verse: "16-18", text: "Que el Señor conceda misericordia a la casa de Onesíforo... Que el Señor le conceda hallar misericordia cerca del Señor en aquel día." },
        { book: "Malaquías", chapter: "3", verse: "2-3", text: "Porque él es como fuego purificador... y purificará a los hijos de Leví, y los afinará como a oro y como a plata." }
      ],
      de: [
        { book: "2. Makkabäer", chapter: "12", verse: "46", text: "Darum hat er für die Verstorbenen das Sühnopfer dargebracht, damit sie von der Sünde befreit würden." },
        { book: "1. Korinther", chapter: "3", verse: "15", text: "Wird aber jemandes Werk verbrennen, so wird er Schaden leiden; er selbst aber wird gerettet werden, doch so wie durchs Feuer hindurch." },
        { book: "Matthäus", chapter: "12", verse: "32", text: "Wer aber wider den Heiligen Geist redet, dem wird es nicht vergeben werden, weder in dieser noch in jener Welt." },
        { book: "Offenbarung", chapter: "21", verse: "27", text: "Und nichts Unreines wird hineinkommen, keiner, der Gräuel tut und lügt." },
        { book: "Matthäus", chapter: "5", verse: "25-26", text: "Einige dich schnell mit deinem Widersacher... damit du nicht ins Gefängnis geworfen wirst. Wahrlich, ich sage dir: Du wirst nicht von dort herauskommen, bis du auch den letzten Heller bezahlt hast." },
        { book: "2. Timotheus", chapter: "1", verse: "16-18", text: "Der Herr gebe Barmherzigkeit dem Hause des Onesiphorus... Der Herr gebe ihm, dass er Barmherzigkeit finde bei dem Herrn an jenem Tage." },
        { book: "Maleachi", chapter: "3", verse: "2-3", text: "Denn er ist wie das Feuer eines Schmelzers... und er wird die Söhne Levi reinigen und läutern wie Gold und Silber." }
      ],
    },
    tradition: [
      {
        id: "tertullian-offerings",
        type: "father",
        author: { en: "Tertullian", fr: "Tertullien", es: "Tertuliano", de: "Tertullian" },
        source: "The Crown, 3:3",
        date: "c. 211 AD",
        text: { 
          en: "We offer sacrifices for the dead on their birthday anniversaries [the date of death].", 
          fr: "Nous offrons des sacrifices pour les morts le jour anniversaire de leur décès.", 
          es: "Ofrecemos sacrificios por los muertos en el aniversario de su nacimiento [fecha de muerte].", 
          de: "Wir bringen Opfer für die Toten an ihren Jahrestagen [Todestag] dar." 
        }
      },
      {
        id: "cyril-purgatory",
        type: "doctor",
        author: { en: "St. Cyril of Jerusalem", fr: "St Cyrille de Jérusalem", es: "San Cirilo de Jerusalén", de: "Hl. Kyrill von Jerusalem" },
        source: "Catechetical Lectures 23:10",
        date: "c. 350 AD",
        text: {
          en: "We offer to Him Christ who was slain for our sins, propitiating the loving God for them [the dead] and for ourselves.",
          fr: "Nous Lui offrons le Christ immolé pour nos péchés, rendant le Dieu aimant propice pour eux [les morts] et pour nous-mêmes.",
          es: "Le ofrecemos a Él a Cristo inmolado por nuestros pecados, propiciando al Dios amoroso por ellos [los muertos] y por nosotros mismos.",
          de: "Wir opfern Ihm Christus, der für unsere Sünden geschlachtet wurde, und versöhnen den liebenden Gott für sie [die Toten] und für uns selbst."
        }
      },
      {
        id: "chrysostom-prayers",
        type: "father",
        author: { en: "St. John Chrysostom", fr: "St Jean Chrysostome", es: "San Juan Crisóstomo", de: "Hl. Johannes Chrysostomus" },
        source: "Homilies on 1 Corinthians 41:5",
        date: "c. 392 AD",
        text: { 
          en: "Let us help and commemorate them. If Job's sons were purified by their father's sacrifice, why would we doubt that our offerings for the dead bring them some consolation? Let us not hesitate to help those who have died and to offer our prayers for them.", 
          fr: "Aidons-les et commémorons-les. Si les fils de Job ont été purifiés par le sacrifice de leur père, pourquoi douterions-nous que nos offrandes pour les morts leur apportent quelque consolation ? N'hésitons pas à aider ceux qui sont morts et à offrir nos prières pour eux.", 
          es: "Ayudémosles y conmemorémoslos. Si los hijos de Job fueron purificados por el sacrificio de su padre, ¿por qué dudaríamos de que nuestras ofrendas por los muertos les brinden algún consuelo? No dudemos en ayudar a los que han muerto y ofrecer nuestras oraciones por ellos.", 
          de: "Lasst uns ihnen helfen und ihrer gedenken. Wenn die Söhne Hiobs durch das Opfer ihres Vaters gereinigt wurden, warum sollten wir zweifeln, dass unsere Opfer für die Toten ihnen Trost bringen? Zögern wir nicht, denen zu helfen, die gestorben sind, und unsere Gebete für sie darzubringen." 
        }
      },
      {
        id: "augustine-monica",
        type: "doctor",
        author: { en: "St. Monica (via St. Augustine)", fr: "St Monique (via St Augustin)", es: "Santa Mónica (vía San Agustín)", de: "Hl. Monika (via Hl. Augustinus)" },
        source: "Confessions 9.11.27",
        date: "387 AD",
        text: {
          en: "Lay this body anywhere; let not the care for that trouble you in any way. Only this I ask, that you remember me at the altar of the Lord, wherever you may be.",
          fr: "Déposez ce corps n'importe où ; que le souci de cela ne vous trouble en rien. Je vous demande seulement ceci : souvenez-vous de moi à l'autel du Seigneur, où que vous soyez.",
          es: "Poned este cuerpo en cualquier lugar; no os preocupe su cuidado. Solo os pido esto: que os acordéis de mí ante el altar del Señor, dondequiera que estéis.",
          de: "Legt diesen Leib irgendwohin; lasst euch die Sorge darum in keiner Weise bekümmern. Nur das eine bitte ich euch, dass ihr meiner am Altar des Herrn gedenkt, wo immer ihr auch seid."
        }
      },
      {
        id: "gregory-great-purgatory",
        type: "father",
        author: { en: "St. Gregory the Great", fr: "St Grégoire le Grand", es: "San Gregorio Magno", de: "Hl. Gregor der Große" },
        source: "Dialogues 4:39",
        date: "c. 593 AD",
        text: { 
          en: "Each one will be presented to the Judge exactly as he was when he came out of this life. But there must be a cleansing fire before judgment, because of some minor faults that may remain to be purged away.", 
          fr: "Chacun sera présenté au Juge exactement comme il était en sortant de cette vie. Mais il doit y avoir un feu purificateur avant le jugement, à cause de certaines fautes mineures qui peuvent rester à purger.", 
          es: "Cada uno será presentado al Juez exactamente como era al salir de esta vida. Pero debe haber un fuego purificador antes del juicio, debido a algunas faltas menores que puedan quedar por purgar.", 
          de: "Jeder wird dem Richter genau so vorgestellt werden, wie er war, als er aus diesem Leben schied. Aber es muss vor dem Gericht ein reinigendes Feuer geben, wegen einiger geringfügiger Fehler, die noch zu läutern sind." 
        }
      },
      {
        id: "theology-purification",
        type: "theology",
        author: { en: "Theological Argument", fr: "Argument Théologique", es: "Argumento Teológico", de: "Theologisches Argument" },
        text: { 
          en: "If 'nothing unclean shall enter heaven' (Rev 21:27), and yet we die with minor attachments to sin that do not merit hell, there must be a state of final purification. God's love purifies us so we can endure His holiness. It is the 'mud room' of Heaven.", 
          fr: "Si 'rien d'impur n'entrera au ciel' (Ap 21:27), et pourtant nous mourons avec des attachements mineurs au péché qui ne méritent pas l'enfer, il doit y avoir un état de purification finale. L'amour de Dieu nous purifie pour que nous puissions supporter Sa sainteté.", 
          es: "Si 'nada impuro entrará en el cielo' (Ap 21:27), y sin embargo morimos con apegos menores al pecado que no merecen el infierno, debe haber un estado de purificación final. El amor de Dios nos purifica para que podamos soportar Su santidad.", 
          de: "Wenn 'nichts Unreines in den Himmel kommen soll' (Offb 21,27), und wir dennoch mit geringfügigen Bindungen an die Sünde sterben, die nicht die Hölle verdienen, muss es einen Zustand der endgültigen Reinigung geben. Gottes Liebe reinigt uns, damit wir seine Heiligkeit ertragen können." 
        }
      },

    ],
  },
];