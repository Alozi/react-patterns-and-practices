import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionTitle({ children, className }) {
  const { toogleItem } = useAccordionContext();
  const id = useAccordionItemContext();

  return (
    <h3
      className={className}
      onClick={() => {
        toogleItem(id);
      }}
    >
      {children}
    </h3>
  );
}
