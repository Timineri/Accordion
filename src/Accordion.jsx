export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map(({ title, text }, i) => {
        return (
          <div className="item">
            <p className="number">{i < 9 ? `0${i + 1}` : i + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">-</p>
            <div className="content-box">{text}</div>
          </div>
        );
      })}
    </div>
  );
}
