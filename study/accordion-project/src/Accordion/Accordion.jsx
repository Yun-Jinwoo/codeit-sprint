import "./Accordion.css";
import AccordionItem from "./AccordionItem";
import AccordionTrigger from "./AccordionTrigger";
import AccordionPannel from "./AccordionPannel";

const Accordion = ({ children }) => {
  return <div className="accordion-list">{children}</div>;
};

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Pannel = AccordionPannel;

export default Accordion;
