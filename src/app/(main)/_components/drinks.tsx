import Image from "next/image";

export const Drinks = () => {
  return (
    <div className="relative h-[800px]  lg:h-screen flex items-center justify-center">
      <Image
        src="/images/aboutUsBg.jpeg"
        alt="About Us"
        fill
        className="w-full h-full object-cover  "
      />

      <div className="box absolute w-full h-full flex flex-col">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-20 h-full w-full items-center justify-center py-16">
          <div className="w-full h-full hidden lg:block relative">
            <Image
              src="/images/drinks1.jpeg"
              alt="Drinks"
              fill
              className="w-full h-full object-cover  "
            />
          </div>

          <div className="flex flex-col items-start gap-7 h-full">

            <div className="relative h-[300px] w-full">
                <Image
                    src="/images/drinks2.jpeg"
                    alt="Drinks"
                    fill
                    className="w-full h-full object-cover  "
                />


            </div>

            <h3 className="text-4xl lg:text-5xl font-semibold font-cormorant text-white">
                Food, Drinks, Entertainment in One

            </h3>

            <p className="text-base lg:text-lg text-dhusarGrey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};
