import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'components/ui/accordion';

function Contact() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Via Email</AccordionTrigger>
        <AccordionContent>test@gamil.com</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Via phone num</AccordionTrigger>
        <AccordionContent>0123456789</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Via FB</AccordionTrigger>
        <AccordionContent>Vinh</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Contact;
