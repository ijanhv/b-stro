import Image from "next/image";
import Link from "next/link";

export const AboutUs = () => {
  return (
    <div className="relative h-full lg:h-screen">
      <Image
        src="/images/aboutUsBg.jpeg"
        alt="About Us"
        fill
        className="w-full h-full object-cover  "
      />

   

      <div className="absolute top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="box h-full grid grid-cols-1 lg:grid-cols-3 gap-3 items-center">
          <div className="flex flex-col items-center  lg:items-end gap-7">
            <h3 className="text-6xl font-semibold font-cormorant text-white">
              About Us
            </h3>
            <p className="text-base lg:text-lg text-dhusarGrey text-center lg:text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>

            <Link
              href="/"
              className="text-black bg-diplomatic border border-diplomatic hover:bg-black hover:text-diplomatic
                transition-all duration-500 ease-in-out
                font-cormorant py-2 px-5 text-xl font-semibold relative"
            >
              Know More
            </Link>
          </div>
          <div className="relative h-[700px] lg:h-full w-full">
            <Image
              src="/images/knife.png"
              alt="About Us"
              fill
              className="w-full h-full object-contain py-36"
            />
               <div className="top-0 absolute  z-0 h-full w-full  flex flex-col items-center justify-center pb-38">
        <h3 className="text-[400px] lg:text-[800px] font-semibold text-center text-white opacity-10 font-cormorant">
          G
        </h3>
      </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-7">
            <h3 className="text-6xl font-semibold font-cormorant text-white">
              Our History
            </h3>
            <p className="text-base lg:text-lg text-dhusarGrey text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>

            <Link
              href="/"
              className="text-black bg-diplomatic border border-diplomatic hover:bg-black hover:text-diplomatic
                transition-all duration-500 ease-in-out
                font-cormorant py-2 px-5 text-xl font-semibold relative"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
