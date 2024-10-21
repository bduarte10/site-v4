import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Motion } from "@/components/ui/motion";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number | string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Iniciante",
    popular: 0,
    price: "74,8",
    description: "Tudo que você precisa para iniciar suas redes socias",
    buttonText: "Assinar agora",
    benefitList: [
      "8 Conteúdos personalizados",
      "15 Posts da biblioteca de conteúdos",
      "10 mil tokens mês",
      "Conteúdos autorais ilimitados",
      "Hashtags por inteligência artificial",
      "Diagnóstico das redes sociais com IA",
      "Editor de imagens integrado",
      "Imagens HD Roalty Free",
    ],
  },
  {
    title: "Avançado",
    popular: 1,
    price: "140,8",
    description:
      "Desbloqueie recursos avançados para potencializar suas campanhas e maximizar resultados com nossa IA.",
    buttonText: "Assinar agora",
    benefitList: [
      "16 Conteúdos personalizados",
      "30 Posts da biblioteca de conteúdos",
      "10 mil tokens mês",
      "Conteúdos autorais ilimitados",
      "Hashtags por inteligência artificial",
      "Diagnóstico das redes sociais com IA",
      "Editor de imagens integrado",
      "Imagens HD Roalty Free",
    ],
  },
  {
    title: "Premium",
    popular: 0,
    price: "330,1",
    description:
      "Experimente o plano Premium e tenha acesso total a ferramentas exclusivas para impulsionar seu sucesso.",
    buttonText: "Assinar agora",
    benefitList: [
      "24 Conteúdos personalizados",
      "Posts da biblioteca de conteúdos ilimitados",
      "10 mil tokens mês",
      "Conteúdos autorais ilimitados",
      "Hashtags por inteligência artificial",
      "Editor de imagens integrado",
      "Suporte prioritário",
      "Imagens HD Roalty Free",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <Motion
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-lg mb-2 text-center tracking-wider text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-semibold">
          Planos
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold text-headline mb-4">
          Tenha acesso ilimitado
        </h2>

        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8 xl:w-3/5">
          Pensado para que você tenha o melhor custo benefício do mercado.
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 mt-16">
          {plans.map(
            ({
              title,
              popular,
              price,
              description,
              buttonText,
              benefitList,
            }) => (
              <>
                <Card
                  key={title}
                  className={
                    popular === PopularPlan?.YES
                      ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                      : ""
                  }
                >
                  <div className="p-3">
                    {" "}
                    <CardHeader>
                      <CardTitle className="pb-2">{title}</CardTitle>

                      <CardDescription className="pb-4">
                        {description}
                      </CardDescription>

                      <div>
                        <span className="text-3xl font-bold">R${price}</span>
                        <span className="text-muted-foreground"> /month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex">
                      <div className="space-y-4">
                        {benefitList.map((benefit) => (
                          <span key={benefit} className="flex">
                            <Check className="text-primary mr-2" />
                            <h3>{benefit}</h3>
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant={
                          popular === PopularPlan?.YES ? "default" : "secondary"
                        }
                        className="w-full"
                      >
                        {buttonText}
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </>
            )
          )}
        </div>
      </Motion>
    </section>
  );
};
