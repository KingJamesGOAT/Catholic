import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import PageSection from './PageSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export default function EssentialQuestions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const questions = [
    {
      question: "Why do Catholics pray to Mary and the saints?",
      answer: `Catholics don't pray to Mary and the saints in the same way we pray to God. Rather, we ask them 
      to intercede for us, just as we might ask a friend to pray for us. The saints in heaven are alive in Christ 
      and remain part of the Body of Christ. Mary holds a special place as the Mother of God and our spiritual 
      mother. When we honor Mary, we honor her Son. As St. Augustine said, "Let us not reject what the Church has 
      always held." The practice of invoking the saints dates back to the early Church and is rooted in the 
      communion of saints—the unity of all believers across earth, heaven, and purgatory.`,
    },
    {
      question: "Isn't salvation by faith alone?",
      answer: `While faith is essential for salvation, the Catholic Church teaches that faith must be accompanied 
      by works of love. James 2:24 explicitly states, "You see that a person is justified by works and not by faith 
      alone"—the only time "faith alone" appears in Scripture, and it's preceded by "not." Faith and works are 
      inseparable; genuine faith naturally produces good works (James 2:17). We are saved by grace through faith, 
      but this living faith expresses itself in love and obedience. Catholics believe salvation is a process of 
      sanctification, not just a one-time declaration.`,
    },
    {
      question: "Why do Catholics have a Pope?",
      answer: `Jesus explicitly established Peter as the leader of His Church, giving him the keys of the kingdom 
      and the authority to bind and loose (Matthew 16:18-19). The early Church recognized Rome's primacy from the 
      beginning. St. Irenaeus wrote in 180 AD that all churches must agree with Rome "because of its superior 
      origin." The papacy ensures unity in teaching and preserves the deposit of faith across centuries. While 
      individual popes are not sinless, the office itself—when exercising its full teaching authority—is protected 
      from error by the Holy Spirit.`,
    },
    {
      question: "Where is Purgatory in the Bible?",
      answer: `While the word "purgatory" isn't in the Bible, the concept is clearly present. 2 Maccabees 12:46 
      speaks of prayers for the dead "that they might be delivered from their sin." 1 Corinthians 3:15 describes 
      being saved "but only as through fire." Matthew 12:32 mentions sins forgiven "in the age to come." 
      Revelation 21:27 states nothing unclean enters heaven. Purgatory is the final purification of souls who 
      die in God's grace but still bear the temporal effects of sin. It's an expression of God's mercy, not His 
      wrath—a hospital for the soul before entering heaven.`,
    },
    {
      question: "Why do Catholics baptize infants?",
      answer: `Infant baptism has been practiced since apostolic times. The New Testament records whole households 
      being baptized (Acts 16:15, 16:33, 1 Cor 1:16), which would have included children. Jesus said we must become 
      like children to enter the kingdom (Matthew 18:3) and commanded "let the children come to me" (Mark 10:14). 
      Baptism is the New Covenant parallel to circumcision, which was given to infants on the eighth day. The early 
      Church Fathers, including Origen and Augustine, testified that infant baptism was an apostolic tradition. 
      Children need God's grace no less than adults, and loving parents desire to share the gift of salvation with 
      their children from the beginning.`,
    },
    {
      question: "Is the Eucharist really Jesus' body and blood?",
      answer: `Yes. Jesus said "This IS my body" and "This IS my blood" (Matthew 26:26-28), not "This represents 
      my body." In John 6, Jesus teaches extensively about eating His flesh and drinking His blood, and when many 
      disciples left over this "hard teaching," He didn't call them back to explain He was speaking symbolically. 
      The early Christians universally understood the Eucharist as truly Christ's body and blood. St. Ignatius of 
      Antioch (110 AD) wrote that heretics "abstain from the Eucharist...because they do not confess that the 
      Eucharist is the flesh of our Savior Jesus Christ." This belief has been constant for 2,000 years.`,
    },
    {
      question: "Why do Catholics confess sins to a priest?",
      answer: `Jesus gave His apostles the authority to forgive sins: "Whose sins you forgive are forgiven them, 
      and whose sins you retain are retained" (John 20:23). For the apostles to make this judgment, they needed 
      to hear the sins. Confession is deeply biblical and practical—it brings sins into the light, provides 
      accountability, offers pastoral counsel, and bestows sacramental grace. James 5:16 instructs us to "confess 
      your sins to one another." The priest acts in persona Christi (in the person of Christ), and it is ultimately 
      God who forgives through the sacrament.`,
    },
  ];

  return (
    <PageSection>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16 pb-8 border-b border-gray-800"
        >
          <p className="text-gray-300 italic text-lg mb-2">
            "Let us not reject what the Church has always held."
          </p>
          <p className="text-gray-500">— St. Augustine</p>
        </motion.div>

        <h2 className="text-white mb-8 text-center">Essential Questions & Misconceptions</h2>
        <p className="text-gray-400 text-center mb-12">
          Common objections addressed with clarity, charity, and historical evidence.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {questions.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-900/50 border border-gray-800 rounded-lg px-6 hover:bg-gray-900/70 transition-colors"
              >
                <AccordionTrigger className="text-white hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </PageSection>
  );
}
