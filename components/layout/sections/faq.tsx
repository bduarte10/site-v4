import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "A Manycontent funciona ?",
    answer:
      "Sim! O serviço de automação de conteúdo oferecido pela Manycontent é baseado nos fundamentos do Marketing de Conteúdo. Isso significa que a nossa inteligência entende tanto as suas necessidades quanto as de seu público para gerar um conteúdo de valor, que seja completamente relevante.",
    value: "item-1",
  },
  {
    question: "Os conteúdos gerados são exclusivos ?",
    answer:
      "Além de exclusivos, eles são únicos para você. Cada conteúdo desenvolvido pela Manycontent é pensado 100% em seu negócio e área de atuação, além da maior possibilidade de engajamento possível. Fique tranquilo, não há possibilidade de conteúdos idênticos!",
    value: "item-2",
  },
  {
    question: "Como funcionam os planos ?",
    answer:
      "Os planos da Manycontent são recorrentes, como uma assinatura de streaming. O pagamento é realizado através do seu cartão de crédito e todo mês o valor será cobrado em sua fatura, tornando o pagamento fácil, simples e muito rápido!",
    value: "item-3",
  },
  {
    question: "existe alguma taxa de cancelamento ?",
    answer:
      "Não trabalhamos com contrato de fidelidade, nem nas letras miúdas. Você poderá cancelar a sua assinatura a qualquer momento, e não será cobrada nenhuma taxa por isso.",
    value: "item-4",
  },
  {
    question: "Como são produzidos os conteúdos ?",
    answer:
      "Após a efetivação de sua assinatura, você passa por um pequeno questionário e conecta suas redes sociais dentro da Manycontent (pode ficar tranquilo, somos 100% homologados por elas, é totalmente seguro!).",
    value: "item-5",
  },
  {
    question: "Como a Manyconytent gera as ideias de conteúdo ?",
    answer:
      "A Manycontent utiliza uma inteligência artificial única e super avançada para criar ideias de conteúdos incríveis, específicas e atualizadas para a sua necessidade. Além disso, temos os melhores profissionais de criação de conteúdo do mundo ensinando a nossa inteligência para podermos trazer cada vez mais ideias melhores e atualizadas para você.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container  py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg mb-2 text-center tracking-wider text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-semibold">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold text-headline mb-4">
          Perguntas frequentes
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
