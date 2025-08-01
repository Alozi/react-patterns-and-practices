import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionContent({ children, className }) {
  const id = useAccordionItemContext();
  const { openItemId } = useAccordionContext();
  const isOpen = openItemId === id;

  return (
    <div className={isOpen ? `${className} open` : `${className} close`}>
      {children}
    </div>
  );
}
