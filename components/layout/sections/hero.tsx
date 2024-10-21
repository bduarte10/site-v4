"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContainerScrollDemo } from "@/components/ui/caontainerScrollDemo";
import { MacbookScrollDemo } from "@/components/ui/macbookScrollDemo";
import { Motion } from "@/components/ui/motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-2xl gap-8 mx-auto py-20 md:py-36">
        <div className="text-center space-y-8">
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
            {" "}
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
        </div>

        <div className="relative group mt-14 w-full">
          <Motion
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1.1 }}
          >
            <div className="absolute top-2 lg:top-10 left-1/2 transform -translate-x-1/2 w-[94%] mx-auto h-24 lg:h-96 bg-primary/60 rounded-full blur-3xl"></div>
            <ContainerScrollDemo />
            {/* <Image
              width={1200}
              height={1200}
              className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
              src={
                theme === "light"
                  ? "/hero-image-light.jpeg"
                  : "/hero-image-dark.jpeg"
              }
              alt="dashboard"
            /> */}
          </Motion>

          {/* <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div> */}
        </div>
      </div>
    </section>
  );
};
