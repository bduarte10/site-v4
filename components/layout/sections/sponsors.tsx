"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
import Image from "next/image";
interface sponsorsProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const sponsors: sponsorsProps[] = [
  {
    src: "/vivo.png",
    width: 89,
    height: 33,
    alt: "vivo",
  },
  {
    src: "/twitter.png",
    width: 60,
    height: 45,
    alt: "twitter",
  },
  {
    src: "/sebrae.png",
    width: 82,
    height: 43,
    alt: "sebrae",
  },
  {
    src: "/sap.png",
    width: 54,
    height: 27,
    alt: "sap",
  },
  {
    src: "/nvidia.png",
    width: 143,
    height: 25,
    alt: "nvidia",
  },
  {
    src: "/meta.png",
    width: 74,
    height: 44,
    alt: "meta",
  },
  {
    src: "/microsoft.png",
    width: 120,
    height: 25,
    alt: "microsoft",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto py-14">
      <h2 className="text-lg md:text-3xl text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-semibold text-center mb-10">
        Nossos parceiros
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[5rem]"
          fade
          innerClassName="gap-[5rem]"
          pauseOnHover
        >
          {sponsors.map(({ src, width, height, alt }) => (
            <div
              key={alt}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <Image src={src} width={width} height={height} alt={alt} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
