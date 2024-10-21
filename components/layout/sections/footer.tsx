import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-tertiary rounded-2xl shadow-lg">
        <div className="w-full md:flex md:flex-row justify-between">
          <div className="md:w-[40%] mb-8 md:mb-0">
            <Link href="#" className="flex font-bold items-center">
              <Image
                src={"/logoMarca.svg"}
                width={190}
                height={33}
                alt="Logo marca da manycontent"
                className=""
              />
            </Link>
          </div>
          <div className="flex justify-between mt-1 md:w-[60%] mb-8 md:mb-0 gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">Redes sociais</h3>
              <div>
                <Link href="#" className="opacity-60 hover:opacity-100">
                  Github
                </Link>
              </div>

              <div>
                <Link href="#" className="opacity-60 hover:opacity-100">
                  Twitter
                </Link>
              </div>

              <div>
                <Link href="#" className="opacity-60 hover:opacity-100">
                  Instagram
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">Minha conta</h3>
              <div>
                <Link href="#" className="opacity-60 hover:opacity-100">
                  Login
                </Link>
              </div>

              <div>
                <Link href="#" className="opacity-60 hover:opacity-100">
                  Esqueci minha senha
                </Link>
              </div>

              <div>
                <Link href="#" className="opacity-60 hover:opacity-100">
                  Termos de uso
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">Help</h3>
              <div>
                <Link href="#" className="opacity-60 hover:opacity-100">
                  Planos
                </Link>
              </div>

              <div>
                <Link href="#" className="opacity-60 hover:opacity-100">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2024 developed by
            <Link
              target="_blank"
              href="https://github.com/bduarte10"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Bruno Duarte
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
