import { useState } from "react";
import AccordionContext from "./AccordionContext";

const AccordionItem = ({ value, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onShow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContext.Provider value={{ isOpen, onShow }}>
      <div className={`accordion-item ${value}`}>{children}</div>
    </AccordionContext.Provider>
  );
};

export default AccordionItem;
