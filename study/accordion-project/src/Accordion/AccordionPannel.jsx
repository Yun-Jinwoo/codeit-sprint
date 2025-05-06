import { useContext } from "react";
import AccordionContext from "./AccordionContext";

const AccordionPannel = ({ children }) => {
  const { isOpen } = useContext(AccordionContext);
  return isOpen ? <div className="content">{children}</div> : null;
};

export default AccordionPannel;
