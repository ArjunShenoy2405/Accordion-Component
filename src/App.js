import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "In general, what is an Accordion?",
    text: `Accordions (from 19th-century German Akkordeon, from Akkord—"musical chord, concord of sounds") are a family of box-shaped musical instruments of the bellows-driven free reed aerophone type (producing sound as air flows past a reed in a frame).`,
  },
  {
    title: "What it means in the context of React?",
    text: `The Accordion component lets users show and hide sections of related content on a page.`,
  },
  {
    title: "More details about the Accordion Component...",
    text: `The Material UI Accordion component includes several complementary utility components to handle various use cases:

    Accordion: the wrapper for grouping related components.
    1. Accordion Summary: the wrapper for the Accordion header, which expands or collapses the content when clicked.
    2. Accordion Details: the wrapper for the Accordion content.
    3. Accordion Actions: an optional wrapper that groups a set of buttons.`,
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
