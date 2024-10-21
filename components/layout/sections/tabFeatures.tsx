"use client";

import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { text } from "stream/consumers";

export function TabsDemo() {
  const tabs = [
    {
      title: "Profissionais liberais",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 md:p-10 text-2xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary to-secondary">
          <p>Mais de 635 segmentos diferentes</p>
          <div className="bg-background mt-10 p-10 items-center grid sm:flex-row sm:flex h-full sm:gap-5">
            <div className="w-full sm:w-1/2">
              <p className="text-base font-medium text-muted-foreground">
                Profissionais liberais, vocês são nossos aliados na
                criatividade. Com a Manycontent, desenvolvemos conteúdos
                personalizados e de alta qualidade para qualquer área de
                atuação, por mais específica que seja. Seja você médico,
                designer, advogado ou chef, estamos prontos para destacar sua
                presença nas redes sociais.
              </p>
              <Button className="font-bold group/arrow">
                Comece Agora
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </div>
            <Image
              className="w-full sm:w-1/2"
              src={"/profissionaisLiberais.png"}
              width={500}
              height={497.5}
              alt="Profissionais liberais imagem"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Social Media",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary to-secondary">
          <p>Social Media</p>
          <div className="bg-background mt-10 p-10 items-center grid sm:flex-row sm:flex h-full sm:gap-5">
            <div className="w-full sm:w-1/2">
              <p className="text-base font-medium text-muted-foreground">
                Na Manycontent, sabemos o quão desafiador é gerenciar várias
                contas e nichos. Por isso, oferecemos suporte a mais de 635
                segmentos diferentes. Não importa o cliente que você atende,
                estamos prontos para ajudar. Experimente e descubra como nossa
                IA facilita seu trabalho, aumentando sua produtividade e
                faturamento, com um desconto especial para você.
              </p>
              <Button className="font-bold group/arrow">
                Comece Agora
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </div>
            <Image
              className="w-full sm:w-1/2"
              src={"/socialMedia.png"}
              width={500}
              height={497.5}
              alt="Profissionais liberais imagem"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Agências",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary to-secondary">
          <p>Agências</p>
          <div className="bg-background mt-10 p-10 items-center grid sm:flex-row sm:flex h-full sm:gap-5">
            <div className="w-full sm:w-1/2">
              <p className="text-base font-medium text-muted-foreground">
                Com um único login, você e sua equipe podem gerenciar todas as
                contas dos seus clientes em segundos. Oferecemos conteúdos
                personalizados, agendamento de posts, relatórios de desempenho e
                um dashboard exclusivo para cada cliente. E ainda, você conta
                com um desconto especial para otimizar ainda mais sua gestão.
              </p>
              <Button className="font-bold group/arrow">
                Comece Agora
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </div>
            <Image
              className="w-full sm:w-1/2"
              src={"/agencias.png"}
              width={500}
              height={497.5}
              alt="Profissionais liberais imagem"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Franquias",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary to-secondary">
          <p>Franquias</p>
          <div className="bg-background mt-10 p-10 items-center grid sm:flex-row sm:flex h-full sm:gap-5">
            <div className="w-full sm:w-1/2">
              <p className="text-base font-medium text-muted-foreground">
                Sabemos como é desafiador para franquias garantir que os
                franqueados mantenham a identidade visual e o tom de voz da
                marca nas redes sociais. A Manycontent simplifica esse processo,
                criando conteúdos alinhados ao seu tom de voz e identidade
                visual, aprovados por você e disponibilizados para os
                franqueados postarem diretamente pela nossa plataforma.
              </p>
              <Button className="font-bold group/arrow">
                Comece Agora
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </div>
            <Image
              className="w-full sm:w-1/2"
              src={"/franquias.png"}
              width={500}
              height={497.5}
              alt="Profissionais liberais imagem"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[50.5rem] sm:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

// const DummyContent = () => {
//   return (
//     <div className="bg-background mt-5 p-5">
//       <div>
//         <Button className="font-bold group/arrow p-5">
//           Comece Agora
//           <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
//         </Button>
//       </div>
//     </div>
//   );
// };
