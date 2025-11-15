export interface BibleVerse {
  book: string;
  chapter: string;
  verse: string;
  text: string;
}

// Updated interface to include 'council' and 'papal'
export interface TraditionContent {
  id: string;
  type: 'father' | 'doctor' | 'theology' | 'council' | 'papal';
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
    title: { en: "The Eucharist", fr: "L'Eucharistie", es: "La Eucaristía", de: "Die Eucharistie" },
    subtitle: { en: "Real Presence", fr: "Présence Réelle", es: "Presencia Real", de: "Realpräsenz" },
    verses: {
      en: [
        { book: "John", chapter: "6", verse: "53-56", text: "Amen, amen, I say to you, unless you eat the flesh of the Son of Man and drink his blood, you do not have life within you... For my flesh is true food, and my blood is true drink." },
        { book: "Matthew", chapter: "26", verse: "26-28", text: "Take, eat; this is my body... Drink of it, all of you, for this is my blood of the covenant." },
        { book: "1 Corinthians", chapter: "10", verse: "16", text: "The cup of blessing that we bless, is it not a participation in the blood of Christ? The bread that we break, is it not a participation in the body of Christ?" },
        { book: "1 Corinthians", chapter: "11", verse: "27-29", text: "Whoever, therefore, eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty concerning the body and blood of the Lord." },
      ],
      fr: [
        { book: "Jean", chapter: "6", verse: "53-56", text: "Amen, amen, je vous le dis : si vous ne mangez pas la chair du Fils de l'homme, et si vous ne buvez pas son sang, vous n'avez pas la vie en vous... Car ma chair est la vraie nourriture, et mon sang est la vraie boisson." },
        { book: "Matthieu", chapter: "26", verse: "26-28", text: "Prenez, mangez ; ceci est mon corps... Buvez-en tous, car ceci est mon sang de l'alliance." },
        { book: "1 Corinthiens", chapter: "10", verse: "16", text: "La coupe de bénédiction que nous bénissons, n'est-elle pas une communion au sang du Christ ? Le pain que nous rompons, n'est-il pas une communion au corps du Christ ?" },
        { book: "1 Corinthiens", chapter: "11", verse: "27-29", text: "C'est pourquoi celui qui mangera le pain ou boira la coupe du Seigneur indignement, sera coupable envers le corps et le sang du Seigneur." },
      ],
      es: [
        { book: "Juan", chapter: "6", verse: "53-56", text: "En verdad, en verdad os digo: si no coméis la carne del Hijo del hombre y no bebéis su sangre, no tenéis vida en vosotros... Porque mi carne es verdadera comida y mi sangre verdadera bebida." },
        { book: "Mateo", chapter: "26", verse: "26-28", text: "Tomad, comed; esto es mi cuerpo... Bebed de ella todos, porque esto es mi sangre de la alianza." },
        { book: "1 Corintios", chapter: "10", verse: "16", text: "La copa de bendición que bendecimos, ¿no es acaso comunión con la sangre de Cristo? Y el pan que partimos, ¿no es comunión con el cuerpo de Cristo?" },
        { book: "1 Corintios", chapter: "11", verse: "27-29", text: "Por tanto, quien coma el pan o beba la copa del Señor indignamente, será reo del cuerpo y de la sangre del Señor." },
      ],
      de: [
        { book: "Johannes", chapter: "6", verse: "53-56", text: "Wahrlich, wahrlich, ich sage euch: Wenn ihr das Fleisch des Menschensohnes nicht esst und sein Blut nicht trinkt, habt ihr das Leben nicht in euch... Denn mein Fleisch ist wahrhaftig eine Speise und mein Blut ist wahrhaftig ein Trank." },
        { book: "Matthäus", chapter: "26", verse: "26-28", text: "Nehmet, esset; das ist mein Leib... Trinket alle daraus; denn das ist mein Blut des Bundes." },
        { book: "1. Korinther", chapter: "10", verse: "16", text: "Der Kelch des Segens, den wir segnen, ist er nicht die Gemeinschaft des Blutes Christi? Das Brot, das wir brechen, ist es nicht die Gemeinschaft des Leibes Christi?" },
        { book: "1. Korinther", chapter: "11", verse: "27-29", text: "Wer nun unwürdig von dem Brot isst oder aus dem Kelch des Herrn trinkt, der wird schuldig sein am Leib und Blut des Herrn." },
      ],
    },
    tradition: [
      {
        id: "ignatius-eucharist",
        type: "father",
        author: { en: "St. Ignatius of Antioch", fr: "St Ignace d'Antioche", es: "San Ignacio de Antioquía", de: "Hl. Ignatius von Antiochien" },
        source: "Epistle to the Smyrnaeans, 7",
        date: "c. 110 AD",
        text: { en: "They abstain from the Eucharist and from prayer, because they confess not the Eucharist to be the flesh of our Saviour Jesus Christ.", fr: "Ils s'abstiennent de l'Eucharistie et de la prière, parce qu'ils ne confessent pas que l'Eucharistie est la chair de notre Sauveur.", es: "Se abstienen de la Eucaristía y de la oración, porque no confiesan que la Eucaristía es la carne de nuestro Salvador.", de: "Sie enthalten sich der Eucharistie und des Gebets, weil sie nicht bekennen, dass die Eucharistie das Fleisch unseres Erlösers ist." }
      },
      {
        id: "irenaeus-eucharist",
        type: "father",
        author: { en: "St. Irenaeus", fr: "St Irénée", es: "San Ireneo", de: "Hl. Irenäus" },
        source: "Against Heresies 4.18.5",
        date: "c. 180 AD",
        text: { en: "For as the bread, which is produced from the earth, when it receives the invocation of God, is no longer common bread, but the Eucharist, consisting of two realities, earthly and heavenly.", fr: "Car comme le pain, qui vient de la terre, après avoir reçu l'invocation de Dieu, n'est plus du pain ordinaire, mais l'Eucharistie, constituée de deux réalités, terrestre et céleste.", es: "Porque así como el pan que es de la tierra, recibiendo la invocación de Dios, ya no es pan común, sino la Eucaristía, compuesta de dos realidades, terrena y celestial.", de: "Denn wie das Brot, das von der Erde stammt, wenn es die Anrufung Gottes empfängt, nicht mehr gemeines Brot ist, sondern die Eucharistie, die aus zwei Wirklichkeiten besteht, einer irdischen und einer himmlischen." }
      },
      {
        id: "trent-transubstantiation",
        type: "council", // TYPE: COUNCIL
        author: { en: "Council of Trent", fr: "Concile de Trente", es: "Concilio de Trento", de: "Konzil von Trient" },
        source: "Session 13, Chapter 4",
        date: "1551 AD",
        text: { en: "By the consecration of the bread and of the wine, a conversion is made of the whole substance of the bread into the substance of the body of Christ our Lord, and of the whole substance of the wine into the substance of His blood.", fr: "Par la consécration du pain et du vin s'opère le changement de toute la substance du pain en la substance du corps du Christ notre Seigneur...", es: "Por la consagración del pan y del vino se realiza la conversión de toda la sustancia del pan en la sustancia del cuerpo de Cristo nuestro Señor...", de: "Durch die Konsekration des Brotes und Weines geschieht eine Wandlung der ganzen Substanz des Brotes in die Substanz des Leibes Christi..." }
      },
      {
        id: "aquinas-transubstantiation",
        type: "doctor",
        author: { en: "St. Thomas Aquinas", fr: "St Thomas d'Aquin", es: "Sto. Tomás de Aquino", de: "Hl. Thomas von Aquin" },
        source: "Summa Theologiae, III, q. 75, a. 1",
        date: "1265-1274",
        text: { en: "The presence of Christ's true body and blood in this sacrament cannot be detected by sense, nor understanding, but by faith alone, which rests upon Divine authority.", fr: "La présence du vrai corps et du sang du Christ dans ce sacrement ne peut être détectée par les sens... mais par la foi seule.", es: "La presencia del verdadero cuerpo y sangre de Cristo en este sacramento no puede ser detectada por los sentidos... sino solo por la fe.", de: "Die Gegenwart des wahren Leibes und Blutes Christi in diesem Sakrament kann weder durch die Sinne... sondern allein durch den Glauben erkannt werden." }
      },
      {
        id: "theology-eucharist",
        type: "theology",
        author: { en: "Theological Argument", fr: "Argument Théologique", es: "Argumento Teológico", de: "Theologisches Argument" },
        text: { en: "If the Eucharist were merely a symbol, Paul's warning about being 'guilty concerning the body and blood of the Lord' (1 Cor 11:27) would be disproportionate.", fr: "Si l'Eucharistie n'était qu'un symbole, l'avertissement de Paul... serait disproportionné.", es: "Si la Eucaristía fuera meramente un símbolo, la advertencia de Pablo... sería desproporcionada.", de: "Wäre die Eucharistie nur ein Symbol, wäre Paulus' Warnung... unverhältnismäßig." }
      }
    ]
  },
  // 2. BAPTISM
  {
    id: "baptism",
    title: { en: "Baptism", fr: "Baptême", es: "Bautismo", de: "Taufe" },
    subtitle: { en: "Regeneration", fr: "Régénération", es: "Regeneración", de: "Wiedergeburt" },
    verses: {
      en: [
        { book: "1 Peter", chapter: "3", verse: "21", text: "Baptism, which corresponds to this, now saves you, not as a removal of dirt from the body but as an appeal to God for a good conscience." },
        { book: "Acts", chapter: "22", verse: "16", text: "And now why do you wait? Rise and be baptized and wash away your sins, calling on his name." },
        { book: "John", chapter: "3", verse: "5", text: "Truly, truly, I say to you, unless one is born of water and the Spirit, he cannot enter the kingdom of God." },
        { book: "Titus", chapter: "3", verse: "5", text: "He saved us, not because of works done by us in righteousness, but according to his own mercy, by the washing of regeneration and renewal of the Holy Spirit." }
      ],
      fr: [
        { book: "1 Pierre", chapter: "3", verse: "21", text: "C'est le baptême qui vous sauve à présent... non pas l'enlèvement des souillures du corps, mais l'engagement d'une bonne conscience envers Dieu." },
        { book: "Actes", chapter: "22", verse: "16", text: "Et maintenant, que tardes-tu ? Lève-toi, sois baptisé et lavé de tes péchés, en invoquant son nom." },
        { book: "Jean", chapter: "3", verse: "5", text: "Amen, amen, je te le dis : à moins de naître d'eau et d'Esprit, nul ne peut entrer dans le royaume de Dieu." },
        { book: "Tite", chapter: "3", verse: "5", text: "Il nous a sauvés... par le bain de la régénération et de la rénovation en l'Esprit Saint." }
      ],
      es: [
        { book: "1 Pedro", chapter: "3", verse: "21", text: "El bautismo, que corresponde a esto, ahora os salva... no quitando la suciedad de la carne, sino como una petición a Dios de una buena conciencia." },
        { book: "Hechos", chapter: "22", verse: "16", text: "Y ahora, ¿por qué te detienes? Levántate, bautízate y lava tus pecados, invocando su nombre." },
        { book: "Juan", chapter: "3", verse: "5", text: "De cierto, de cierto te digo: el que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios." },
        { book: "Tito", chapter: "3", verse: "5", text: "Nos salvó... por el lavamiento de la regeneración y por la renovación en el Espíritu Santo." }
      ],
      de: [
        { book: "1. Petrus", chapter: "3", verse: "21", text: "Das ist ein Vorbild der Taufe, die jetzt auch euch rettet... nicht als Ablegung der Unreinheit des Fleisches, sondern als Bitte an Gott um ein gutes Gewissen." },
        { book: "Apostelgeschichte", chapter: "22", verse: "16", text: "Und nun, was zögerst du? Steh auf und lass dich taufen und deine Sünden abwaschen, indem du seinen Namen anrufst." },
        { book: "Johannes", chapter: "3", verse: "5", text: "Wahrlich, wahrlich, ich sage dir: Wenn jemand nicht aus Wasser und Geist geboren wird, so kann er nicht in das Reich Gottes kommen." },
        { book: "Titus", chapter: "3", verse: "5", text: "Machte er uns selig... durch das Bad der Wiedergeburt und Erneuerung im Heiligen Geist." }
      ],
    },
    tradition: [
       {
        id: "justin-baptism",
        type: "father",
        author: { en: "St. Justin Martyr", fr: "St Justin Martyr", es: "San Justino Mártir", de: "Hl. Justin der Märtyrer" },
        source: "First Apology, 61",
        date: "c. 150 AD",
        text: { en: "Then they are brought by us where there is water, and are regenerated in the same manner in which we were ourselves regenerated... For Christ also said, 'Except ye be born again, ye shall not enter into the kingdom of heaven.'", fr: "Ensuite, nous les amenons là où il y a de l'eau, et ils sont régénérés...", es: "Luego son llevados por nosotros donde hay agua, y son regenerados...", de: "Dann werden sie von uns dorthin gebracht, wo Wasser ist, und werden auf dieselbe Weise wiedergeboren..." }
      },
      {
        id: "augustine-baptism",
        type: "doctor",
        author: { en: "St. Augustine", fr: "St Augustin", es: "San Agustín", de: "Hl. Augustinus" },
        source: "Sermon 219",
        date: "c. 420 AD",
        text: { en: "The Holy Spirit has marked us with the seal of the Lord ('Dominicus character') for the day of redemption. Baptism indeed is the seal of eternal life.", fr: "Le Saint-Esprit nous a marqués du sceau du Seigneur...", es: "El Espíritu Santo nos ha marcado con el sello del Señor...", de: "Der Heilige Geist hat uns mit dem Siegel des Herrn gezeichnet..." }
      },
      {
        id: "trent-baptism",
        type: "council", // TYPE: COUNCIL
        author: { en: "Council of Trent", fr: "Concile de Trente", es: "Concilio de Trento", de: "Konzil von Trient" },
        source: "Session 7, Canon 5",
        date: "1547 AD",
        text: { en: "If any one shall say, that baptism is free, that is, not necessary unto salvation; let him be anathema.", fr: "Si quelqu'un dit que le baptême est libre, c'est-à-dire non nécessaire au salut ; qu'il soit anathème.", es: "Si alguno dijere que el bautismo es libre, es decir, no necesario para la salvación; sea anatema.", de: "Wer sagt, die Taufe sei frei, das heißt, nicht heilsnotwendig; der sei ausgeschlossen." }
      }
    ]
  },
  // 3. AUTHORITY
  {
    id: "authority",
    title: { en: "Church Authority", fr: "Autorité de l'Église", es: "Autoridad de la Iglesia", de: "Kirchenautorität" },
    subtitle: { en: "The Papacy & Peter", fr: "La Papauté & Pierre", es: "El Papado y Pedro", de: "Das Papsttum & Petrus" },
    verses: {
      en: [
        { book: "Matthew", chapter: "16", verse: "18-19", text: "And I tell you, you are Peter, and on this rock I will build my church... I will give you the keys of the kingdom of heaven." },
        { book: "Isaiah", chapter: "22", verse: "22", text: "I will place on his shoulder the key of the house of David. He shall open, and none shall shut." },
        { book: "Luke", chapter: "22", verse: "31-32", text: "Simon, Simon... I have prayed for you that your faith may not fail. And when you have turned again, strengthen your brothers." },
        { book: "1 Timothy", chapter: "3", verse: "15", text: "...the church of the living God, the pillar and foundation of the truth." }
      ],
      fr: [
        { book: "Matthieu", chapter: "16", verse: "18-19", text: "Et moi, je te dis que tu es Pierre, et que sur cette pierre je bâtirai mon Église... Je te donnerai les clefs du royaume des cieux." },
        { book: "Isaïe", chapter: "22", verse: "22", text: "Je mettrai sur son épaule la clé de la maison de David : s'il ouvre, personne ne fermera." },
        { book: "Luc", chapter: "22", verse: "31-32", text: "Simon, Simon... j'ai prié pour toi, afin que ta foi ne défaille point ; et toi, quand tu seras converti, affermis tes frères." },
        { book: "1 Timothée", chapter: "3", verse: "15", text: "...l'Église du Dieu vivant, la colonne et l'appui de la vérité." }
      ],
      es: [
        { book: "Mateo", chapter: "16", verse: "18-19", text: "Y yo también te digo, que tú eres Pedro, y sobre esta roca edificaré mi iglesia... Y a ti te daré las llaves del reino de los cielos." },
        { book: "Isaías", chapter: "22", verse: "22", text: "Y pondré la llave de la casa de David sobre su hombro; y abrirá, y nadie cerrará." },
        { book: "Lucas", chapter: "22", verse: "31-32", text: "Simón, Simón... yo he rogado por ti, que tu fe no falte; y tú, una vez vuelto, confirma a tus hermanos." },
        { book: "1 Timoteo", chapter: "3", verse: "15", text: "...la iglesia del Dios viviente, columna y baluarte de la verdad." }
      ],
      de: [
        { book: "Matthäus", chapter: "16", verse: "18-19", text: "Und ich sage dir auch: Du bist Petrus, und auf diesen Felsen will ich meine Gemeinde bauen... Ich will dir die Schlüssel des Himmelreichs geben." },
        { book: "Jesaja", chapter: "22", verse: "22", text: "Und ich will die Schlüssel des Hauses Davids auf seine Schulter legen, dass er auftue und niemand zuschließe." },
        { book: "Lukas", chapter: "22", verse: "31-32", text: "Simon, Simon... ich habe für dich gebeten, dass dein Glaube nicht aufhöre. Und wenn du dereinst dich bekehrst, so stärke deine Brüder." },
        { book: "1. Timotheus", chapter: "3", verse: "15", text: "...welche ist die Gemeinde des lebendigen Gottes, ein Pfeiler und eine Grundfeste der Wahrheit." }
      ],
    },
    tradition: [
      {
        id: "irenaeus-authority",
        type: "father",
        author: { en: "St. Irenaeus", fr: "St Irénée", es: "San Ireneo", de: "Hl. Irenäus" },
        source: "Against Heresies 3.3.2",
        date: "c. 180 AD",
        text: { en: "For it is a matter of necessity that every Church should agree with this Church [of Rome], on account of its pre-eminent authority...", fr: "Car il est nécessaire que toute Église s'accorde avec cette Église [de Rome], en raison de son autorité prééminente...", es: "Porque es necesario que toda Iglesia esté de acuerdo con esta Iglesia [de Roma], a causa de su preeminente autoridad...", de: "Denn es ist notwendig, dass jede Kirche mit dieser Kirche [von Rom] übereinstimmt, wegen ihrer vorzüglichen Autorität..." }
      },
      {
        id: "cyprian-unity",
        type: "father",
        author: { en: "St. Cyprian of Carthage", fr: "St Cyprien de Carthage", es: "San Cipriano", de: "Hl. Cyprian" },
        source: "The Unity of the Catholic Church, 4",
        date: "251 AD",
        text: { en: "If someone does not hold fast to this unity of Peter, can he imagine that he still holds the faith? If he [should] desert the chair of Peter... can he still be confident that he is in the Church?", fr: "Si quelqu'un ne tient pas ferme à cette unité de Pierre, peut-il imaginer qu'il détient encore la foi ?", es: "Si alguien no se mantiene firme en esta unidad de Pedro, ¿puede imaginar que todavía tiene la fe?", de: "Wenn jemand nicht an dieser Einheit Petri festhält, kann er sich dann einbilden, den Glauben noch zu haben?" }
      },
      {
        id: "vatican1-infallibility",
        type: "council", // TYPE: COUNCIL
        author: { en: "Vatican Council I", fr: "Concile Vatican I", es: "Concilio Vaticano I", de: "Vatikanisches Konzil I" },
        source: "Pastor Aeternus, Ch 4",
        date: "1870 AD",
        text: { en: "The Roman Pontiff, when he speaks ex cathedra... possesses, by the divine assistance promised to him in blessed Peter, that infallibility which the divine Redeemer willed his Church to enjoy...", fr: "Le Pontife Romain, lorsqu'il parle ex cathedra... possède cette infaillibilité dont le divin Rédempteur a voulu que son Église soit pourvue...", es: "El Romano Pontífice, cuando habla ex cathedra... posee aquella infalibilidad de la que el divino Redentor quiso que gozara su Iglesia...", de: "Der Römische Papst, wenn er ex cathedra spricht... besitzt jene Unfehlbarkeit, mit der der göttliche Erlöser seine Kirche ausgestattet wissen wollte..." }
      },
      {
        id: "augustine-roma",
        type: "doctor",
        author: { en: "St. Augustine", fr: "St Augustin", es: "San Agustín", de: "Hl. Augustinus" },
        source: "Sermon 131:10",
        date: "c. 400 AD",
        text: { en: "Rome has spoken; the case is concluded. (Roma locuta est, causa finita est).", fr: "Rome a parlé ; la cause est entendue.", es: "Roma ha hablado; la causa ha concluido.", de: "Rom hat gesprochen; der Fall ist abgeschlossen." }
      },
      {
        id: "theology-keys",
        type: "theology",
        author: { en: "Theological Argument", fr: "Argument Théologique", es: "Argumento Teológico", de: "Theologisches Argument" },
        text: { en: "The giving of 'keys' denotes succession. In Isaiah 22, the key of David is passed from Shebna to Eliakim. If Jesus gives Peter the keys of the Kingdom, He establishes an office that must continue as long as the Kingdom is on earth.", fr: "Le don des « clés » indique une succession...", es: "La entrega de las 'llaves' denota sucesión...", de: "Die Übergabe der 'Schlüssel' bezeichnet Nachfolge..." }
      }
    ]
  },
  // 4. SALVATION
  {
    id: "salvation",
    title: { en: "Salvation", fr: "Le Salut", es: "La Salvación", de: "Das Heil" },
    subtitle: { en: "Faith & Works", fr: "Foi et Œuvres", es: "Fe y Obras", de: "Glaube und Werke" },
    verses: {
      en: [
        { book: "James", chapter: "2", verse: "24-26", text: "You see that a person is justified by works and not by faith alone. For as the body apart from the spirit is dead, so also faith apart from works is dead." },
        { book: "Matthew", chapter: "7", verse: "21", text: "Not everyone who says to me, 'Lord, Lord,' will enter the kingdom of heaven, but the one who does the will of my Father who is in heaven." },
        { book: "Philippians", chapter: "2", verse: "12", text: "Work out your own salvation with fear and trembling." },
        { book: "Romans", chapter: "2", verse: "6-7", text: "He will render to each one according to his works: to those who by patience in well-doing seek for glory and honor and immortality, he will give eternal life." },
        { book: "Galatians", chapter: "5", verse: "6", text: "For in Christ Jesus neither circumcision nor uncircumcision counts for anything, but only faith working through love." }
      ],
      fr: [
        { book: "Jacques", chapter: "2", verse: "24-26", text: "Vous voyez que l'homme est justifié par les œuvres, et non par la foi seulement... Comme le corps sans âme est mort, de même la foi sans les œuvres est morte." },
        { book: "Matthieu", chapter: "7", verse: "21", text: "Ceux qui me disent : Seigneur, Seigneur ! n'entreront pas tous dans le royaume des cieux, mais celui-là seul qui fait la volonté de mon Père." },
        { book: "Philippiens", chapter: "2", verse: "12", text: "Travaillez à votre salut avec crainte et tremblement." },
        { book: "Romains", chapter: "2", verse: "6-7", text: "Qui rendra à chacun selon ses œuvres : la vie éternelle à ceux qui, par la persévérance à bien faire, cherchent l'honneur, la gloire et l'immortalité." },
        { book: "Galates", chapter: "5", verse: "6", text: "Car, en Jésus-Christ... ce qui est efficace, c'est la foi qui agit par la charité." }
      ],
      es: [
        { book: "Santiago", chapter: "2", verse: "24-26", text: "Vosotros veis, pues, que el hombre es justificado por las obras, y no solamente por la fe... Porque como el cuerpo sin espíritu está muerto, así también la fe sin obras está muerta." },
        { book: "Mateo", chapter: "7", verse: "21", text: "No todo el que me dice: Señor, Señor, entrará en el reino de los cielos, sino el que hace la voluntad de mi Padre." },
        { book: "Filipenses", chapter: "2", verse: "12", text: "Ocupaos en vuestra salvación con temor y temblor." },
        { book: "Romanos", chapter: "2", verse: "6-7", text: "El cual pagará a cada uno conforme a sus obras: vida eterna a los que, perseverando en bien hacer, buscan gloria y honra e inmortalidad." },
        { book: "Gálatas", chapter: "5", verse: "6", text: "Porque en Cristo Jesús... lo que vale es la fe que obra por el amor." }
      ],
      de: [
        { book: "Jakobus", chapter: "2", verse: "24-26", text: "So seht ihr nun, dass der Mensch durch Werke gerechtfertigt wird und nicht durch den Glauben allein... Denn wie der Leib ohne Geist tot ist, so ist auch der Glaube ohne Werke tot." },
        { book: "Matthäus", chapter: "7", verse: "21", text: "Es werden nicht alle, die zu mir sagen: Herr, Herr!, in das Himmelreich kommen, sondern die den Willen tun meines Vaters." },
        { book: "Philipper", chapter: "2", verse: "12", text: "Schaffet, dass ihr selig werdet, mit Furcht und Zittern." },
        { book: "Römer", chapter: "2", verse: "6-7", text: "Der einem jeden geben wird nach seinen Werken: ewiges Leben denen, die in aller Geduld mit guten Werken trachten nach Herrlichkeit, Ehre und unvergänglichem Leben." },
        { book: "Galater", chapter: "5", verse: "6", text: "Denn in Christus Jesus... gilt der Glaube, der durch die Liebe tätig ist." }
      ],
    },
    tradition: [
      {
        id: "clement-works",
        type: "father",
        author: { en: "St. Clement of Rome", fr: "St Clément de Rome", es: "San Clemente de Roma", de: "Hl. Klemens von Rom" },
        source: "1 Clement 34",
        date: "c. 96 AD",
        text: { en: "Let us hasten with all energy and readiness of mind to perform every good work. For the Creator and Lord of all Himself rejoices in His works.", fr: "Hâtons-nous avec toute l'énergie et la promptitude d'esprit d'accomplir toute bonne œuvre.", es: "Apresurémonos con toda energía y prontitud de ánimo a realizar toda buena obra.", de: "Lasst uns mit aller Energie und Bereitschaft des Geistes eilen, jedes gute Werk zu vollbringen." }
      },
      {
        id: "augustine-grace",
        type: "doctor",
        author: { en: "St. Augustine", fr: "St Augustin", es: "San Agustín", de: "Hl. Augustinus" },
        source: "Sermon 169",
        date: "c. 416 AD",
        text: { en: "He who created thee without thee, will not save thee without thee.", fr: "Celui qui t'a créé sans toi, ne te sauvera pas sans toi.", es: "El que te creó sin ti, no te salvará sin ti.", de: "Der dich ohne dich geschaffen hat, wird dich nicht ohne dich retten." }
      },
      {
        id: "trent-justification",
        type: "council", // TYPE: COUNCIL
        author: { en: "Council of Trent", fr: "Concile de Trente", es: "Concilio de Trento", de: "Konzil von Trient" },
        source: "Session 6, Canon 24",
        date: "1547 AD",
        text: { en: "If any one saith, that the justice received is not preserved and also increased before God through good works; but that the said works are merely the fruits and signs of Justification obtained, but not a cause of the increase thereof; let him be anathema.", fr: "Si quelqu'un dit que la justice reçue n'est pas conservée...", es: "Si alguno dijere que la justicia recibida no se conserva...", de: "Wenn jemand sagt, dass die empfangene Gerechtigkeit nicht durch gute Werke vor Gott bewahrt wird..." }
      },
       {
        id: "theology-sola-fide",
        type: "theology",
        author: { en: "Theological Argument", fr: "Argument Théologique", es: "Argumento Teológico", de: "Theologisches Argument" },
        text: { en: "The only time the phrase 'faith alone' appears in the Bible is in James 2:24, where it says we are NOT justified by faith alone. Salvation is a process of sanctification where grace transforms the soul, not merely a legal declaration.", fr: "La seule fois où l'expression « foi seule » apparaît dans la Bible est dans Jacques 2:24, où il est dit que nous ne sommes PAS justifiés par la foi seule.", es: "La única vez que la frase 'solo fe' aparece en la Biblia es en Santiago 2:24, donde dice que NO somos justificados solo por la fe.", de: "Das einzige Mal, dass der Ausdruck 'Glaube allein' in der Bibel vorkommt, ist in Jakobus 2,24, wo es heißt, dass wir NICHT allein durch Glauben gerechtfertigt werden." }
      }
    ]
  },

  // 5. CONFESSION
  {
    id: "confession",
    title: { en: "Confession", fr: "Confession", es: "Confesión", de: "Beichte" },
    subtitle: { en: "Forgiving Sins", fr: "Pardonner les péchés", es: "Perdonar pecados", de: "Sünden vergeben" },
    verses: {
      en: [
        { book: "John", chapter: "20", verse: "21-23", text: "Jesus said to them... 'Receive the Holy Spirit. If you forgive the sins of any, they are forgiven them; if you withhold forgiveness from any, it is withheld.'" },
        { book: "James", chapter: "5", verse: "16", text: "Therefore, confess your sins to one another and pray for one another, that you may be healed." },
        { book: "Matthew", chapter: "18", verse: "18", text: "Truly, I say to you, whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven." },
        { book: "2 Corinthians", chapter: "5", verse: "18", text: "All this is from God, who through Christ reconciled us to himself and gave us the ministry of reconciliation." }
      ],
      fr: [
        { book: "Jean", chapter: "20", verse: "21-23", text: "Recevez le Saint-Esprit. Ceux à qui vous pardonnerez les péchés, ils leur seront pardonnés ; et ceux à qui vous les retiendrez, ils leur seront retenus." },
        { book: "Jacques", chapter: "5", verse: "16", text: "Confessez donc vos péchés les uns aux autres, et priez les uns pour les autres, afin que vous soyez guéris." },
        { book: "Matthieu", chapter: "18", verse: "18", text: "Je vous le dis en vérité, tout ce que vous lierez sur la terre sera lié dans le ciel, et tout ce que vous délierez sur la terre sera délié dans le ciel." },
        { book: "2 Corinthiens", chapter: "5", verse: "18", text: "Et tout cela vient de Dieu, qui nous a réconciliés avec lui par Christ, et qui nous a donné le ministère de la réconciliation." }
      ],
      es: [
        { book: "Juan", chapter: "20", verse: "21-23", text: "Recibid el Espíritu Santo. A quienes remitiereis los pecados, les son remitidos; y a quienes se los retuviereis, les son retenidos." },
        { book: "Santiago", chapter: "5", verse: "16", text: "Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados." },
        { book: "Mateo", chapter: "18", verse: "18", text: "De cierto os digo que todo lo que atéis en la tierra, será atado en el cielo; y todo lo que desatéis en la tierra, será desatado en el cielo." },
        { book: "2 Corintios", chapter: "5", verse: "18", text: "Y todo esto proviene de Dios, quien nos reconcilió consigo mismo por Cristo, y nos dio el ministerio de la reconciliación." }
      ],
      de: [
        { book: "Johannes", chapter: "20", verse: "21-23", text: "Nehmt hin den Heiligen Geist! Welchen ihr die Sünden erlasst, denen sind sie erlassen; und welchen ihr sie behaltet, denen sind sie behalten." },
        { book: "Jakobus", chapter: "5", verse: "16", text: "Bekennt also einander eure Sünden und betet für einander, dass ihr gesund werdet." },
        { book: "Matthäus", chapter: "18", verse: "18", text: "Wahrlich, ich sage euch: Was ihr auf Erden binden werdet, soll auch im Himmel gebunden sein, und was ihr auf Erden lösen werdet, soll auch im Himmel gelöst sein." },
        { book: "2. Korinther", chapter: "5", verse: "18", text: "Das alles aber von Gott, der uns mit sich selber versöhnt hat durch Christus und uns das Amt gegeben, das die Versöhnung predigt." }
      ],
    },
    tradition: [
      {
        id: "basil-confession",
        type: "father",
        author: { en: "St. Basil the Great", fr: "St Basile le Grand", es: "San Basilio el Grande", de: "Hl. Basilius der Große" },
        source: "Rules Briefly Treated, 288",
        date: "c. 370 AD",
        text: { en: "It is necessary to confess our sins to those to whom the dispensation of God's mysteries is entrusted.", fr: "Il est nécessaire de confesser nos péchés à ceux à qui l'administration des mystères de Dieu est confiée.", es: "Es necesario confesar nuestros pecados a aquellos a quienes se les ha confiado la dispensación de los misterios de Dios.", de: "Es ist notwendig, unsere Sünden denen zu bekennen, denen die Verwaltung der Geheimnisse Gottes anvertraut ist." }
      },
      {
        id: "chrysostom-priests",
        type: "father",
        author: { en: "St. John Chrysostom", fr: "St Jean Chrysostome", es: "San Juan Crisóstomo", de: "Hl. Johannes Chrysostomus" },
        source: "On the Priesthood, 3.5",
        date: "c. 387 AD",
        text: { en: "Priests have received a power which God has given neither to angels nor to archangels... The Father has given all judgment to the Son. And now I see the Son handing all this power to the Son... putting it into the hands of these men.", fr: "Les prêtres ont reçu un pouvoir que Dieu n'a donné ni aux anges ni aux archanges...", es: "Los sacerdotes han recibido un poder que Dios no ha dado ni a los ángeles ni a los arcángeles...", de: "Priester haben eine Macht empfangen, die Gott weder Engeln noch Erzengeln gegeben hat..." }
      },
      {
        id: "trent-absolution",
        type: "council", // TYPE: COUNCIL
        author: { en: "Council of Trent", fr: "Concile de Trente", es: "Concilio de Trento", de: "Konzil von Trient" },
        source: "Session 14, Chapter 6",
        date: "1551 AD",
        text: { en: "The sacramental absolution of the priest is not a bare ministry, only of announcing the Gospel... but is a judicial act, which by him is pronounced as by a judge.", fr: "L'absolution sacramentelle du prêtre n'est pas un simple ministère... mais un acte judiciaire...", es: "La absolución sacramental del sacerdote no es un mero ministerio... sino un acto judicial...", de: "Die sakramentale Lossprechung des Priesters ist kein bloßer Dienst... sondern ein richterlicher Akt..." }
      },
      {
        id: "theology-priesthood",
        type: "theology",
        author: { en: "Theological Argument", fr: "Argument Théologique", es: "Argumento Teológico", de: "Theologisches Argument" },
        text: { en: "Christ had the power to forgive sins and delegated this power to His Apostles (John 20). If it were merely a matter of confessing privately to God, Christ would not have given the Apostles the specific power to 'retain' or 'withhold' forgiveness, which requires hearing the sin.", fr: "Christ avait le pouvoir de pardonner les péchés et a délégué ce pouvoir à Ses Apôtres (Jean 20).", es: "Cristo tenía el poder de perdonar los pecados y delegó este poder a Sus Apóstoles (Juan 20).", de: "Christus hatte die Macht, Sünden zu vergeben, und delegierte diese Macht an Seine Apostel (Johannes 20)." }
      }
    ]
  },

  // 6. MARY
  {
    id: "mary",
    title: { en: "Mary", fr: "Marie", es: "María", de: "Maria" },
    subtitle: { en: "Mother of God", fr: "Mère de Dieu", es: "Madre de Dios", de: "Mutter Gottes" },
    verses: {
      en: [
        { book: "Luke", chapter: "1", verse: "28", text: "And he came to her and said, 'Hail, full of grace, the Lord is with you!'" },
        { book: "Luke", chapter: "1", verse: "42-43", text: "Blessed are you among women, and blessed is the fruit of your womb! And why is this granted to me that the mother of my Lord should come to me?" },
        { book: "Luke", chapter: "1", verse: "48", text: "For behold, from now on all generations will call me blessed." },
        { book: "Revelation", chapter: "12", verse: "1", text: "And a great sign appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars." }
      ],
      fr: [
        { book: "Luc", chapter: "1", verse: "28", text: "Je te salue, toi à qui une grâce a été faite ; le Seigneur est avec toi." },
        { book: "Luc", chapter: "1", verse: "42-43", text: "Tu es bénie entre les femmes, et le fruit de ton sein est béni. Comment m'est-il accordé que la mère de mon Seigneur vienne auprès de moi ?" },
        { book: "Luc", chapter: "1", verse: "48", text: "Désormais toutes les générations me diront bienheureuse." },
        { book: "Apocalypse", chapter: "12", verse: "1", text: "Un grand signe parut dans le ciel : une femme enveloppée du soleil, la lune sous ses pieds, et une couronne de douze étoiles sur sa tête." }
      ],
      es: [
        { book: "Lucas", chapter: "1", verse: "28", text: "¡Salve, muy favorecida! El Señor es contigo; bendita tú entre las mujeres." },
        { book: "Lucas", chapter: "1", verse: "42-43", text: "Bendita tú entre las mujeres, y bendito el fruto de tu vientre. ¿Por qué se me concede esto a mí, que la madre de mi Señor venga a mí?" },
        { book: "Lucas", chapter: "1", verse: "48", text: "Desde ahora me dirán bienaventurada todas las generaciones." },
        { book: "Apocalipsis", chapter: "12", verse: "1", text: "Apareció en el cielo una gran señal: una mujer vestida del sol, con la luna debajo de sus pies, y sobre su cabeza una corona de doce estrellas." }
      ],
      de: [
        { book: "Lukas", chapter: "1", verse: "28", text: "Sei gegrüßt, du Begnadete! Der Herr ist mit dir!" },
        { book: "Lukas", chapter: "1", verse: "42-43", text: "Gesegnet bist du unter den Frauen, und gesegnet ist die Frucht deines Leibes! Und wie geschieht mir das, dass die Mutter meines Herrn zu mir kommt?" },
        { book: "Lukas", chapter: "1", verse: "48", text: "Siehe, von nun an werden mich seligpreisen alle Kindeskinder." },
        { book: "Offenbarung", chapter: "12", verse: "1", text: "Und ein großes Zeichen erschien im Himmel: eine Frau, mit der Sonne bekleidet, und der Mond unter ihren Füßen und auf ihrem Haupt eine Krone von zwölf Sternen." }
      ],
    },
    tradition: [
      {
        id: "irenaeus-eve",
        type: "father",
        author: { en: "St. Irenaeus", fr: "St Irénée", es: "San Ireneo", de: "Hl. Irenäus" },
        source: "Against Heresies 3.22.4",
        date: "c. 180 AD",
        text: { en: "The knot of Eve's disobedience was loosed by the obedience of Mary. For what the virgin Eve had bound fast through unbelief, this did the virgin Mary set free through faith.", fr: "Le nœud de la désobéissance d'Ève a été dénoué par l'obéissance de Marie...", es: "El nudo de la desobediencia de Eva fue desatado por la obediencia de María...", de: "Der Knoten des Ungehorsams Evas wurde durch den Gehorsam Marias gelöst..." }
      },
      {
        id: "ephrem-mary",
        type: "doctor",
        author: { en: "St. Ephrem the Syrian", fr: "St Éphrem le Syrien", es: "San Efrén el Sirio", de: "Hl. Ephräm der Syrer" },
        source: "Nisibene Hymns 27:8",
        date: "c. 370 AD",
        text: { en: "You alone and your Mother are more beautiful than any others, for there is no blemish in you nor any stains upon your Mother.", fr: "Vous seul et votre Mère êtes plus beaux que tous les autres, car il n'y a aucune tache en vous ni aucune souillure sur votre Mère.", es: "Tú solo y tu Madre sois más hermosos que cualquier otro, pues no hay mancha en ti ni mancha alguna en tu Madre.", de: "Du allein und deine Mutter seid schöner als alle anderen, denn es ist kein Makel an dir noch irgendein Flecken an deiner Mutter." }
      },
      {
        id: "assumption-dogma",
        type: "papal", // TYPE: PAPAL (Red Badge)
        author: { en: "Pope Pius XII", fr: "Pape Pie XII", es: "Papa Pío XII", de: "Papst Pius XII." },
        source: "Munificentissimus Deus (Ex Cathedra)",
        date: "1950 AD",
        text: { en: "The Immaculate Mother of God, the ever Virgin Mary, having completed the course of her earthly life, was assumed body and soul into heavenly glory.", fr: "L'Immaculée Mère de Dieu, Marie toujours Vierge, après avoir achevé le cours de sa vie terrestre, a été élevée corps et âme à la gloire céleste.", es: "La Inmaculada Madre de Dios, la siempre Virgen María, cumplido el curso de su vida terrestre, fue asunta en cuerpo y alma a la gloria celestial.", de: "Die unbefleckte Gottesmutter, die immerwährende Jungfrau Maria, ist nach Ablauf ihres irdischen Lebens mit Leib und Seele in die himmlische Herrlichkeit aufgenommen worden." }
      },
      {
        id: "council-ephesus",
        type: "council", // TYPE: COUNCIL
        author: { en: "Council of Ephesus", fr: "Concile d'Éphèse", es: "Concilio de Éfeso", de: "Konzil von Ephesus" },
        source: "Definition of Theotokos",
        date: "431 AD",
        text: { en: "If anyone does not confess that Emmanuel is God in truth, and therefore that the holy virgin is the mother of God (Theotokos)... let him be anathema.", fr: "Si quelqu'un ne confesse pas qu'Emmanuel est Dieu en vérité, et que par conséquent la sainte vierge est mère de Dieu (Théotokos)... qu'il soit anathème.", es: "Si alguno no confiesa que el Emmanuel es Dios en verdad, y que por tanto la santa virgen es madre de Dios (Theotokos)... sea anatema.", de: "Wer nicht bekennt, dass der Emmanuel in Wahrheit Gott ist und dass deshalb die heilige Jungfrau Gottesgebärerin (Theotokos) ist... der sei ausgeschlossen." }
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
        { book: "Matthew", chapter: "5", verse: "26", text: "Truly, I say to you, you will never get out until you have paid the last penny." }
      ],
      fr: [
        { book: "2 Maccabées", chapter: "12", verse: "46", text: "Voilà pourquoi il fit ce sacrifice expiatoire pour les morts, afin qu'ils fussent délivrés de leur péché." },
        { book: "1 Corinthiens", chapter: "3", verse: "15", text: "Si l'œuvre de quelqu'un est consumée, il perdra sa récompense ; pour lui, il sera sauvé, mais comme au travers du feu." },
        { book: "Matthieu", chapter: "12", verse: "32", text: "Mais quiconque parlera contre le Saint-Esprit, il ne lui sera pardonné ni dans ce siècle ni dans le siècle à venir." },
        { book: "Apocalypse", chapter: "21", verse: "27", text: "Il n'entrera chez elle rien de souillé, ni personne qui se livre à l'abomination et au mensonge." },
        { book: "Matthieu", chapter: "5", verse: "26", text: "Je te le dis en vérité, tu ne sortiras pas de là que tu n'aies payé le dernier quadrant." }
      ],
      es: [
        { book: "2 Macabeos", chapter: "12", verse: "46", text: "Es, pues, un pensamiento santo y saludable el rogar por los difuntos, a fin de que sean libres de sus pecados." },
        { book: "1 Corintios", chapter: "3", verse: "15", text: "Si la obra de alguno se quemare, él sufrirá pérdida, si bien él mismo será salvo, aunque así como por fuego." },
        { book: "Mateo", chapter: "12", verse: "32", text: "Pero a cualquiera que hable contra el Espíritu Santo, no le será perdonado, ni en este siglo ni en el venidero." },
        { book: "Apocalipsis", chapter: "21", verse: "27", text: "No entrará en ella ninguna cosa inmunda, o que hace abominación y mentira." },
        { book: "Mateo", chapter: "5", verse: "26", text: "De cierto te digo que no saldrás de allí, hasta que pagues el último cuadrante." }
      ],
      de: [
        { book: "2. Makkabäer", chapter: "12", verse: "46", text: "Darum hat er für die Verstorbenen das Sühnopfer dargebracht, damit sie von der Sünde befreit würden." },
        { book: "1. Korinther", chapter: "3", verse: "15", text: "Wird aber jemandes Werk verbrennen, so wird er Schaden leiden; er selbst aber wird gerettet werden, doch so wie durchs Feuer hindurch." },
        { book: "Matthäus", chapter: "12", verse: "32", text: "Wer aber wider den Heiligen Geist redet, dem wird es nicht vergeben werden, weder in dieser noch in jener Welt." },
        { book: "Offenbarung", chapter: "21", verse: "27", text: "Und nichts Unreines wird hineinkommen, keiner, der Gräuel tut und lügt." },
        { book: "Matthäus", chapter: "5", verse: "26", text: "Wahrlich, ich sage dir: Du wirst nicht von dort herauskommen, bis du auch den letzten Heller bezahlt hast." }
      ],
    },
    tradition: [
      {
        id: "chrysostom-prayers",
        type: "father",
        author: { en: "St. John Chrysostom", fr: "St Jean Chrysostome", es: "San Juan Crisóstomo", de: "Hl. Johannes Chrysostomus" },
        source: "Homilies on 1 Corinthians 41:5",
        date: "c. 392 AD",
        text: { en: "Let us help and commemorate them. If Job's sons were purified by their father's sacrifice, why would we doubt that our offerings for the dead bring them some consolation? Let us not hesitate to help those who have died and to offer our prayers for them.", fr: "Aidons-les et commémorons-les. Si les fils de Job ont été purifiés...", es: "Ayudémosles y conmemorémoslos. Si los hijos de Job fueron purificados...", de: "Lasst uns ihnen helfen und ihrer gedenken. Wenn die Söhne Hiobs gereinigt wurden..." }
      },
      {
        id: "augustine-purgatory",
        type: "doctor",
        author: { en: "St. Augustine", fr: "St Augustin", es: "San Agustín", de: "Hl. Augustinus" },
        source: "Enchiridion, 110",
        date: "c. 421 AD",
        text: { en: "That there should be some such fire even after this life is not incredible, and it can be inquired into and either be discovered or remain hidden... some of the faithful may be saved... through a certain purgatorial fire.", fr: "Qu'il y ait un tel feu même après cette vie n'est pas incroyable...", es: "Que haya tal fuego incluso después de esta vida no es increíble...", de: "Dass es auch nach diesem Leben ein solches Feuer geben sollte, ist nicht unglaublich..." }
      },
      {
        id: "gregory-great-purgatory",
        type: "father",
        author: { en: "St. Gregory the Great", fr: "St Grégoire le Grand", es: "San Gregorio Magno", de: "Hl. Gregor der Große" },
        source: "Dialogues 4:39",
        date: "c. 593 AD",
        text: { en: "Each one will be presented to the Judge exactly as he was when he came out of this life. But there must be a cleansing fire before judgment, because of some minor faults that may remain to be purged away.", fr: "Chacun sera présenté au Juge exactement comme il était...", es: "Cada uno será presentado al Juez exactamente como era...", de: "Jeder wird dem Richter genau so vorgestellt werden, wie er war..." }
      },
      {
        id: "florence-purgatory",
        type: "council", // TYPE: COUNCIL
        author: { en: "Council of Florence", fr: "Concile de Florence", es: "Concilio de Florencia", de: "Konzil von Florenz" },
        source: "Decree for the Greeks",
        date: "1439 AD",
        text: { en: "If they have died penitent for their sins and having love of God, but have not made satisfaction for things they have done or omitted by fruits worthy of penance, their souls are cleansed after death by cleansing pains.", fr: "S'ils sont morts pénitents pour leurs péchés...", es: "Si han muerto arrepentidos de sus pecados...", de: "Wenn sie reuig für ihre Sünden gestorben sind..." }
      },
      {
        id: "theology-purification",
        type: "theology",
        author: { en: "Theological Argument", fr: "Argument Théologique", es: "Argumento Teológico", de: "Theologisches Argument" },
        text: { en: "If 'nothing unclean shall enter heaven' (Rev 21:27), and yet we die with minor attachments to sin that do not merit hell, there must be a state of final purification. God's love purifies us so we can endure His holiness.", fr: "Si 'rien d'impur n'entrera au ciel' (Ap 21:27), et pourtant nous mourons avec des attachements mineurs au péché...", es: "Si 'nada impuro entrará en el cielo' (Ap 21:27), y sin embargo morimos con apegos menores al pecado...", de: "Wenn 'nichts Unreines in den Himmel kommen soll' (Offb 21,27), und wir dennoch mit geringfügigen Bindungen an die Sünde sterben..." }
      }
    ]
  }
];