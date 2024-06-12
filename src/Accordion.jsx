import { useState } from "react";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => {
        return (
          <AccordionItem
            curOpen={curOpen}
            onCurOpen={setCurOpen}
            title={el.title}
            num={i}
          >
            {el.text}
          </AccordionItem>
        );
      })}
      <AccordionItem
        curOpen={curOpen}
        onCurOpen={setCurOpen}
        title="Thinking in React"
        num={23}
      >
        <p>Allow React develeopers to:</p>
        <ul>
          <li>Break up Ui into components</li>
          <li>Make components reusable</li>
          <li>Place state efficientky</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onCurOpen, children }) {
  const isOpen = curOpen === num;
  function handleToggle() {
    onCurOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? "open" : " "}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
