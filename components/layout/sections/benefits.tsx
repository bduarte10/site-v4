import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Construir Confiança na Marca",
    description:
      "Fortaleça a confiança na sua marca com conteúdos personalizados que refletem seu tom de voz e identidade visual. Garanta consistência em todas as contas de forma simples e eficiente.",
  },
  {
    icon: "LineChart",
    title: "Mais Leads",
    description:
      "Gere mais leads com conteúdos estratégicos e segmentados, criados para atrair seu público ideal. Deixe nossa IA otimizar seus resultados e aumentar seu alcance.",
  },
  {
    icon: "Wallet",
    title: "Maior Conversão",
    description:
      "Aumente suas conversões com conteúdos relevantes e personalizados, criados para engajar e direcionar seu público. Nossa IA ajusta cada detalhe para maximizar seus resultados.",
  },
  {
    icon: "Sparkle",
    title: "Testar Ideias de Marketing",
    description:
      "Teste novas ideias de marketing facilmente com conteúdos gerados por IA, ajustados ao seu público. Veja o que funciona melhor e otimize suas campanhas com dados precisos de desempenho",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg font-semibold mb-2 tracking-wider text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
            Benefícios
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-headline">
            Crie conteúdos de acordo com a sua audiência
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            95% milhões de conteúdos são postados diariamente nas redes sociais
            e apenas 0.7% tem bons resultados. A Manycontent pode te ajudar a
            entrar nesse valioso grupo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-gradient-to-r from-primary/20 to-secondary/15 dark:bg-card hover:from-transparent hover:to-transparent group/number transition-all p-3 lg:p-0 xl:p-3"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6"
                  />
                  <span className="text-5xl text-muted-foreground/35 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
