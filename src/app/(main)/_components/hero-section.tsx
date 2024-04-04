import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className=" box grid grid-cols-1 lg:grid-cols-2 lg:gap-16  h-full my-10 lg:my-0 lg:h-screen items-center">
      <div className="flex flex-col gap-6 w-full items-start  lg:justify-center h-full ">
        <div className="space-y-3">
          <h3 className="text-3xl font-semibold font-cormorant text-white">
            Chase The New Flavour
          </h3>

          <hr className="h-0.5 w-28 bg-diplomatic" />
        </div>

        <h3 className="text-5xl lg:text-8xl font-semibold font-cormorant text-diplomatic">
          The Key To Fine Dining
        </h3>

        <p className="text-base lg:text-lg text-dhusarGrey">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>

        <div className="relative border group border-diplomatic bg-diplomatic p-2">
          <span className="absolute left-0 bottom-0 h-full w-0 z-0 bottom transition-all duration-500 ease-in-out bg-black group-hover:w-full" />
          <Link href="/" className="text-black z-50 group-hover:text-diplomatic font-cormorant py-2 px-5 text-xl font-semibold relative">
              Explore Menu
                
          </Link>
        </div>
      </div>

      <div className="w-full  h-full flex items-start">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero1.png"
            alt="Hero Image"
            fill
            className="w-full h-full object-cover lg:object-contain"
          />


        </div>

        
      </div>
    </div>
  );
};
