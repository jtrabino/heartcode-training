import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function LandingPageAccordion() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Will it feel good?</AccordionTrigger>
          <AccordionContent>
            Maybe.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Should you do it?</AccordionTrigger>
          <AccordionContent>
            Probably not.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What if I do it?</AccordionTrigger>
          <AccordionContent>
            Try not to.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  