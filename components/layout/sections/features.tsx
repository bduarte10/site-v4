import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Motion } from "@/components/ui/motion";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Conteúdos personalizados",
    description:
      "Na Manycontent, a nossa IA produz imagens, textos e hashtags especiais para você, e criados para resolver as dores da sua audiência. ",
  },
  {
    icon: "BadgeCheck",
    title: "Agendamento",
    description:
      "Usamos inteligência artificial para agendar automaticamente seus conteúdos com apenas um clique, caso você queira.",
  },
  {
    icon: "Goal",
    title: "Relatórios",
    description:
      "Oferecemos insights detalhados sobre seu desempenho e o de seus concorrentes, ajudando a melhorar sua estratégia e superar a concorrência.",
  },
  {
    icon: "PictureInPicture",
    title: "Biblioteca de Conteúdos",
    description:
      "A Manycontent oferece conteúdos prontos com imagens, textos e hashtags relevantes para diversos nichos, economizando seu tempo. Basta aprovar e deixar a IA agendar, ampliando sua presença online.",
  },
  {
    icon: "MousePointerClick",
    title: "Editor de imagem/vídeo",
    description:
      "Oferecemos um super editor de imagem e vídeo, incrivelmente fácil de usar, para você dar o seu toque final sempre que quiser.",
  },
  {
    icon: "Newspaper",
    title: "Manybot",
    description:
      "Imagine poder criar conteúdo de blog com até 2 mil palavras, copy para anúncios, scripts de vídeo, e-mails de marketing, tudo com o toque mágico do Manybot.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <Motion
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <>
          <h2 className="text-lg text-center mb-2 tracking-wider text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-semibold">
            Funcionalidades
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 text-headline">
            Quais funcionalidades a{" "}
            <span className="text-transparent px-1 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              manycontent
            </span>{" "}
            oferece ?
          </h2>

          <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8 xl:w-3/5">
            As nossas funcionalidades foram pensadas e desenvolvidas para que
            você tenha o melhor resultado na busca pelo crescimento digital
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 xl:gap-4">
            {featureList.map(({ icon, title, description }) => (
              <div key={title}>
                <Card className="h-full bg-background border-0 shadow-none">
                  <CardHeader className="flex justify-center items-center">
                    <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                      <Icon
                        name={icon as keyof typeof icons}
                        size={24}
                        color="hsl(var(--primary))"
                        className="text-primary"
                      />
                    </div>

                    <CardTitle>{title}</CardTitle>
                  </CardHeader>

                  <CardContent className="text-muted-foreground text-center">
                    {description}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </>
      </Motion>
    </section>
  );
};
