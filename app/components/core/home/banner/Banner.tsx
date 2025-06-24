import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { hamburgers } from "@/domain/constants/hamburgerList";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full bg-gradient-to-t from-red-600 to-red-400 py-12 rounded-3xl shadow-lg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Las Mejores Hamburguesas
          </h1>
          <p className="text-lg text-gray-200">
            Descubre nuestras deliciosas creaciones
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {hamburgers.map((burger, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={burger.image || "/placeholder.svg"}
                        alt={burger.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-1">
                          {burger.name}
                        </h3>
                        <p className="text-sm opacity-90">
                          {burger.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </div>
  );
};
export default Banner;
