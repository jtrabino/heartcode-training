import { LandingPageAccordion } from "@/components/accordion";

export default function Home() {
  return (
    <div className="flex flex-col px-12">
      <div className="h-[calc(100vh-64px)]">
        <p className="text-7xl my-72 font-bold">Say no to drugs!</p>
      </div>
      <div className="h-[calc(100vh-64px)]">
        <p className="py-6">They are bad for your health.</p>
        <LandingPageAccordion />
      </div>
    </div>
  );
}
