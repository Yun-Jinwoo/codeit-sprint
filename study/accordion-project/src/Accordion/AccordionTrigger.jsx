import { useContext } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import AccordionContext from "./AccordionContext";

const AccordionTrigger = ({ children }) => {
  const { isOpen, onShow } = useContext(AccordionContext);
  return (
    <button onClick={onShow} className={`trigger-button show-${isOpen}`}>
      {children}
      <div className="arrow">{isOpen ? <SlArrowUp /> : <SlArrowDown />}</div>
    </button>
  );
};

export default AccordionTrigger;
