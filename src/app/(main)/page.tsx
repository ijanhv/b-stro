import { AboutUs } from "./_components/about-us";
import { BookTable } from "./_components/book-table";
import { Drinks } from "./_components/drinks";
import { HeroSection } from "./_components/hero-section";
import { BarMenu } from "./_components/menu";
import { WideRange } from "./_components/wide-range";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <AboutUs />
      <BookTable />
      <Drinks />
      <WideRange />
      <BarMenu />
    </div>
  );
}
