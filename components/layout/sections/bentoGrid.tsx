import { cn } from "@/lib/utils";
import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { ArrowUpRight } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import { Motion } from "@/components/ui/motion";

export function BentoGridDemo() {
  return (
    <Motion
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="py-24 sm:py-32">
        <div className="mx-auto container mb-6 max-w-7xl">
          <h2 className="text-lg text-left mb-2 tracking-wider text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-semibold">
            Artigos e notícias
          </h2>

          <div className="sm:flex sm:justify-between sm:flex-row">
            <h2 className="text-3xl md:text-4xl text-left font-bold text-headline">
              Confira o blog da{" "}
              <span className="text-transparent px-1 bg-gradient-to-r from-primary to-secondary bg-clip-text">
                manycontent
              </span>{" "}
            </h2>
            <div className="flex items-center gap-3 mt-1">
              <h2 className="text-lg text-left mt-2 tracking-wider text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-semibold w-24">
                Veja mais
              </h2>
              <ArrowUpRight className="mt-2 text-secondary/80" size={32} />
            </div>
          </div>
        </div>

        <BentoGrid className="container mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={item.title}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </Motion>
  );
}
const Skeleton = ({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
}) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl">
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className="w-full"
    />
    .
  </div>
);
const items = [
  {
    title: "O que saber sobre marketing ?",
    description: "Aprenda as conceitos básicos sobre marketing na era digital.",
    header: (
      <Skeleton
        src="/marketingConteudo.png"
        width={728}
        height={538}
        alt="marketing de conteúdo imagem"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "A revolução digital",
    description: "Como as redes sociais impactam as nossas vidas.",
    header: (
      <Skeleton
        src="/podcast1.png"
        width={728}
        height={538}
        alt="marketing de conteúdo imagem"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "A arte do design",
    description: "Descubra a beleza de um design inteligente e funcional",
    header: (
      <Skeleton
        src="/podcast2.png"
        width={728}
        height={538}
        alt="marketing de conteúdo imagem"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
