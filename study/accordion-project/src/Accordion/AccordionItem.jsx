import { useState } from "react";
import AccordionContext from "./AccordionContext";

const AccordionItem = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onShow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContext.Provider value={{ isOpen, onShow }}>
      <div className={`accordion-item`}>{children}</div>
    </AccordionContext.Provider>
  );
};

export default AccordionItem;
