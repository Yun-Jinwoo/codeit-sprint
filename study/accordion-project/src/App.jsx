import "./App.css";
import Accordion from "./Accordion/Accordion";

function App() {
  return (
    <Accordion>
      <Accordion.Item value="a">
        <Accordion.Trigger>Title-1</Accordion.Trigger>
        <Accordion.Pannel>Content-1</Accordion.Pannel>
      </Accordion.Item>
      <Accordion.Item value="b">
        <Accordion.Trigger>Title-2</Accordion.Trigger>
        <Accordion.Pannel>Content-2</Accordion.Pannel>
      </Accordion.Item>
      <Accordion.Item value="c">
        <Accordion.Trigger>Title-3</Accordion.Trigger>
        <Accordion.Pannel>Content-3</Accordion.Pannel>
      </Accordion.Item>
      <Accordion.Item value="d">
        <Accordion.Trigger>Title-4</Accordion.Trigger>
        <Accordion.Pannel>Content-4</Accordion.Pannel>
      </Accordion.Item>
      <Accordion.Item value="e">
        <Accordion.Trigger>Title-5</Accordion.Trigger>
        <Accordion.Pannel>Content-5</Accordion.Pannel>
      </Accordion.Item>
      <Accordion.Item value="f">
        <Accordion.Trigger>Title-6</Accordion.Trigger>
        <Accordion.Pannel>Content-6</Accordion.Pannel>
      </Accordion.Item>
    </Accordion>
  );
}

export default App;
