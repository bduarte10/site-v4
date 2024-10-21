"use client";
import { ChevronsDown, Github, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import { LogIn } from "lucide-react";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Funcionalidades",
  },
  {
    href: "#pricing",
    label: "Planos",
  },
  {
    href: "#contact",
    label: "contato",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Cinteúdos personalizados",
    description:
      "A IA da Manycontent cria conteúdos personalizados para otimizar sua presença nas redes sociais.",
  },
  {
    title: "Agendamento Automático",
    description:
      "Usamos IA para agendar automaticamente seus conteúdos com um clique.",
  },
  {
    title: "Relatórios",
    description:
      " Com a Manycontent, você terá acesso a informações detalhadas sobre como seu perfil.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[80%] lg:max-w-screen-xl top-5 mx-auto sticky border border-tertiary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href={"#/"}>
        <Image
          src={"/logoMarca.svg"}
          width={190}
          height={33}
          alt="Logo marca da manycontent"
          className="ml-4"
        />
      </Link>

      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href={"#/"}>
                    <Image
                      src={"/logoMarca.svg"}
                      width={190}
                      height={33}
                      alt="Logo marca da manycontent"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <div className="flex px-4 mt-4">
                <Button
                  asChild
                  size="sm"
                  variant={"secondary"}
                  aria-label="View on GitHub"
                >
                  <Link
                    aria-label="View on GitHub"
                    href="https://github.com/nobruf/shadcn-landing-page.git"
                    target="_blank"
                  >
                    {/* <Github className="size-5" /> */}
                    <LogIn className="text-secondary" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  aria-label="View on GitHub"
                  className="mr-4 ml-2"
                >
                  <Link
                    aria-label="View on GitHub"
                    href="https://github.com/nobruf/shadcn-landing-page.git"
                    target="_blank"
                  >
                    {/* <Github className="size-5" /> */}
                    Assinar agora
                  </Link>
                </Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-tertiary text-base mr-2">
              Benefícios
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[800px] grid-cols-2 gap-5 p-4">
                <Image
                  src="/demo-img.jpg"
                  alt="RadixLogo"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link
                  href={href}
                  className="text-base p-2 rounded-md hover:bg-tertiary"
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <Button
          asChild
          size="sm"
          variant={"secondary"}
          aria-label="View on GitHub"
        >
          <Link
            aria-label="View on GitHub"
            href="https://github.com/nobruf/shadcn-landing-page.git"
            target="_blank"
          >
            {/* <Github className="size-5" /> */}
            <LogIn className="text-secondary" />
          </Link>
        </Button>
        <Button
          asChild
          size="sm"
          aria-label="View on GitHub"
          className="mr-4 ml-2"
        >
          <Link
            aria-label="View on GitHub"
            href="https://github.com/nobruf/shadcn-landing-page.git"
            target="_blank"
          >
            {/* <Github className="size-5" /> */}
            Assinar agora
          </Link>
        </Button>
      </div>
    </header>
  );
};
