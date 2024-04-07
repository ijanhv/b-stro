import Image from "next/image";

export const BarMenu = () => {
  const wine = [
    {
      name: "Irish Guinness",
      ingredient: "IE / 750 ml",
      price: "$ 126",
    },
    {
      name: "Jack Daniels",
      ingredient: "USA / 750 ml",
      price: "$ 150",
    },
    {
      name: "Chivas Regal",
      ingredient: "Scotland / 750 ml",
      price: "$ 175",
    },
    {
      name: "CLa Vieille Rosé",
      ingredient: "FR / 750 ml",
      price: "$ 44",
    },
    {
      name: "Chapel Hill Shiraz",
      ingredient: "AUS / 750 ml",
      price: "$ 50",
    },
  ];

  const cocktails = [
    {
      name: "Negroni",
      ingredient: "Gin, Sweet Vermouth, Campari, Orange garnish",
      price: "$26",
    },
    {
      name: "Old Fashioned",
      ingredient: "Bourbon, Brown sugar, Angostura Bitters",
      price: "$31",
    },
    {
      name: "Daiquiri",
      ingredient: "Rum, Citrus juice, Sugar",
      price: "$10",
    },
    {
      name: "Dark 'N' Stormy",
      ingredient: "Dark rum, Ginger beer, Slice of lime",
      price: "$16",
    },
    {
      name: "Aperol Spritz",
      ingredient: "Aperol, Villa Marchesi prosecco, Soda",
      price: "$20",
    },
  ];

  return (
    <div className="h-full lg:h-screen">
      <div className="box flex flex-col gap-10 items-center justify-center py-20">
        <div className="flex flex-col items-center justify-center gap-4 w-full h-full text-center">
          <p className="text-base  text-diplomatic">
            Menu That Fits You Palatte
          </p>

          <hr className="w-28 border-diplomatic" />
        </div>

        <h3 className="text-3xl lg:text-6xl font-semibold font-cormorant text-white">
          Today’s Special Special
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full h-full">
          <div className="flex flex-col gap-5 h-full">
            <h3 className="text-3xl font-cormorant text-white text-center">Wine</h3>
            {wine.map((wine, index) => (
              <BarMenuCard key={index} item={wine} />
            ))}
          </div>

          <div className="relative h-[400px] lg:h-full w-full">
            <Image
                src="/images/bar-menu.jpeg"
                alt="Wine"
                fill
                className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col gap-5 h-full">
            <h3 className="text-3xl font-cormorant text-white text-center">Cocktails</h3>
            {cocktails.map((wine, index) => (
              <BarMenuCard key={index} item={wine} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

const BarMenuCard = ({
  item,
}: {
  item: {
    name: string;
    ingredient: string;
    price: string;
  };
}) => {
  return (
    <div className="flex items-start justify-between h-full">
      <div className="flex flex-col gap-2 items-start">
        <h3 className="text-2xl font-cormorant text-white">{item.name}</h3>
        <p className="text-base text-dhusarGrey text-left">
          {item.ingredient}
        </p>
      </div>

      <p className="text-base text-dhusarGrey text-center">{item.price}</p>
    </div>
  );
};
