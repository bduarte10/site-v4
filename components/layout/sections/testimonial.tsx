"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Motion } from "@/components/ui/motion";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe",
    userName: "Product Manager",
    comment:
      "A Manycontent revolucionou minha estratégia de marketing! Os resultados são surpreendentes.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sophia Collins",
    userName: "Cybersecurity Analyst",
    comment:
      "Estou encantado com a qualidade dos conteúdos! A equipe sempre atende minhas necessidades.",
    rating: 4.8,
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Adam Johnson",
    userName: "Chief Technology Officer",
    comment:
      "A plataforma é intuitiva e fácil de usar. Aumento significativo de leads em poucas semanas!",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ethan Parker",
    userName: "Data Scientist",
    comment:
      "O suporte da Manycontent é excepcional! Sempre prontos para ajudar e otimizar meus posts.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ava Mitchell",
    userName: "IT Project Manager",
    comment:
      "As análises de desempenho são valiosas! Agora, posso ajustar minha estratégia de forma eficaz.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Isabella Reed",
    userName: "DevOps Engineer",
    comment:
      "Estou impressionado com a agilidade do agendamento. Menos estresse e mais tempo para criar!",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <Motion
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-4">
          <h2 className="text-lg mb-2 tracking-wider text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-semibold">
            Avaliações
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold text-headline">
            Saiba o que os nossos clientes dizem
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
        >
          <CarouselContent>
            {reviewList.map((review) => (
              <CarouselItem
                key={review.name}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-muted/70 dark:bg-card drop-shadow-xl shadow-md">
                  <div className="p-3">
                    {" "}
                    <CardContent className="pt-6 pb-0">
                      <div className="flex gap-1 pb-6">
                        <Star className="size-4 fill-primary text-secondary" />
                        <Star className="size-4 fill-primary text-secondary" />
                        <Star className="size-4 fill-primary text-secondary" />
                        <Star className="size-4 fill-primary text-secondary" />
                        <Star className="size-4 fill-primary text-secondary" />
                      </div>
                      {`"${review.comment}"`}
                    </CardContent>
                    <CardHeader>
                      <div className="flex flex-row items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src="https://avatars.githubusercontent.com/u/75042455?v=4"
                            alt="radix"
                          />
                          <AvatarFallback>SV</AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col">
                          <CardTitle className="text-lg">
                            {review.name}
                          </CardTitle>
                          <CardDescription>{review.userName}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Motion>
    </section>
  );
};
