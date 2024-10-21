"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContainerScrollDemo } from "@/components/ui/caontainerScrollDemo";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Motion } from "@/components/ui/motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-2xl gap-8 mx-auto py-20 md:py-28">
        <BackgroundLines className="text-center space-y-8">
          <Motion
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="text-sm py-2">
              <span className="mr-2 text-primary">
                <Badge>Novo</Badge>
              </span>
              <span>
                14.000 contas com mais de 83 milhões de conteúdos aprovados.
              </span>
            </Badge>
          </Motion>

          <Motion
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 0.3 }}
          >
            <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
              <h1>
                Utilize a
                <span className="text-transparent px-2 bg-gradient-to-r from-primary to-secondary bg-clip-text">
                  manycontent
                </span>
                para alavancar sua presença digital
              </h1>
            </div>
          </Motion>

          <Motion
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 0.7 }}
          >
            <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
              {`A IA que descobre o que funciona para as suas Redes Sociais, cria seus conteúdos e agenda seus posts de forma automática.`}
            </p>
          </Motion>

          <Motion
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1, delay: 1 }}
          >
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                Comece Agora
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>

              <Button
                asChild
                variant="secondary"
                className="w-5/6 md:w-1/4 font-bold"
              >
                <Link
                  href="https://github.com/nobruf/shadcn-landing-page.git"
                  target="_blank"
                >
                  Repositório no Github
                </Link>
              </Button>
            </div>
          </Motion>
        </BackgroundLines>

        <div className="relative group mt-14 w-full">
          <Motion
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1.1 }}
          >
            <div className="absolute top-2 lg:top-12 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-96 bg-primary/60 rounded-full blur-3xl"></div>
            <ContainerScrollDemo />
          </Motion>
        </div>
      </div>
    </section>
  );
};
