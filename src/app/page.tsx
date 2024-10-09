import { LandingPageAccordion } from "@/components/accordion";

export default function Home() {
  return (
    <div className="flex flex-col px-12">
      <div className="grid grid-cols-12 h-[calc(100vh-64px)]">
        <div className="col-span-7 flex flex-col justify-center">
          <p className="text-7xl font-bold">Say no to meth but yes to cannabis!</p>
          <p className="text-xl py-2">
            Drugs are bad for your health. But alcohol? that's different.
          </p>
        </div>
        <div className="col-span-5 flex flex-col justify-center items-center">

        </div>
      </div>
      <div className="h-[calc(100vh-64px)]">
        <LandingPageAccordion />
      </div>
    </div>
  );
}
