import Image from "next/image";

export const WideRange = () => {
  const cocktails = [
    {
      name: "Mojito",
      description:
        "A classic Cuban cocktail made with rum, lime, sugar, mint, and soda water.",
      image: "/images/cocktail1.jpg",
    },
    {
      name: "Margarita",
      description:
        "A Mexican cocktail made with tequila, lime juice, and Cointreau.",
      image: "/images/cocktail2.jpg",
    },
    {
      name: "Pina Colada",
      description:
        "A sweet cocktail made with rum, coconut cream, and pineapple juice.",
      image: "/images/cocktail3.jpg",
    },
  ];
  return (
    <div className="h-full lg:h-screen">
      <div className="box flex flex-col gap-10 items-center justify-center py-20">
        <div
          className="flex flex-col items-center justify-center gap-4 w-full h-full text-center"
        >
          <p className="text-base  text-diplomatic">
            Wide Range To Choose From
          </p>

          <hr className="w-28 border-diplomatic" />
        </div>

        <h3 className="text-3xl lg:text-6xl font-semibold font-cormorant text-diplomatic">
          What’s Your Poison?
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 w-full h-full">
          {cocktails.map((cocktail, index) => (
            <CocktailCard key={index} cocktail={cocktail} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CocktailCard = ({
  cocktail,
}: {
  cocktail: {
    name: string;
    description: string;
    image: string;
  };
}) => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="h-[400px] w-full relative">
        <Image
          src={cocktail.image}
          alt={cocktail.name}
          fill
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-2xl font-cormorant text-white">{cocktail.name}</h3>

        <p className="text-base text-dhusarGrey text-center">
          {cocktail.description}
        </p>
      </div>
    </div>
  );
};
