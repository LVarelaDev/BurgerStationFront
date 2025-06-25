"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { BurgersEndpointEnum } from "@/Infrastructure/services/burgers/BurgersEndpointEnum";
import { getAllBurgers } from "@/Infrastructure/services/burgers/getAllBurgers";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const BurgersList = () => {
  const { data, isLoading } = useSWR([BurgersEndpointEnum.burgers], () =>
    getAllBurgers()
  );

  if (isLoading || !data) {
    return (
      <>
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full mx-auto"
    >
      <CarouselContent className="-ml-2 md:-ml-4 ">
        {data && (
          <>
            {data.map((burger, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={burger.image || "/burger5.jpg"}
                        alt={burger.name}
                        width={400}
                        height={300}
                        className="w-full h-74 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-1">
                          {burger.name}
                        </h3>
                        <p className="text-sm opacity-90">
                          {burger.description}
                        </p>
                        <Link
                          href={`/checkout/${burger.id}`}
                          className="flex gap-1 items-center justify-center text-center p-2 px-3 rounded-3xl bg-green-700 mt-4 hover:bg-green-600 shadow-md hover:shadow-inner"
                        >
                          Comprar: ${burger.price}
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </>
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default BurgersList;
