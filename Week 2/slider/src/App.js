import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import { useState } from "react";
function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideLength = data.length;
  const handleClassName = (index) => {
    // easy code :]
    // if (index === activeSlide) {
    //   return "activeSlide";
    // }
    // if (activeSlide === slideLength - 1) {
    //   // latest slide
    //   if (index === 0) {
    //     return "nextSlide";
    //   }
    //   if (index === activeSlide - 1) {
    //     return "lastSlide";
    //   }
    // }
    // if (activeSlide === 0) {
    //   // first slide
    //   if (index === activeSlide + 1) {
    //     return "nextSlide";
    //   }
    //   if (index === slideLength - 1) {
    //     return "lastSlide";
    //   }
    // }
    // if (index === activeSlide - 1) {
    //   return "lastSlide";
    // }
    // if (index === activeSlide + 1) {
    //   return "nextSlide";
    // }
    //short code :[]
    if (index === activeSlide) return "activeSlide";
    if (index === (activeSlide + 1) % slideLength) return "nextSlide";
    if (index === (activeSlide - 1 + slideLength) % slideLength)
      return "lastSlide";
  };
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>slider
        </h2>
      </div>
      <div className="section-center">
        {data.map((item, index) => (
          <article key={item.id} className={handleClassName(index)}>
            <img className="person-img" src={item.image} />
            <h4>{item.name}</h4>
            <p className="title">{item.title}</p>
            <p className="text">{item.quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        ))}
        <button
          className="prev"
          aria-label="prev"
          onClick={() =>
            setActiveSlide((prev) => (prev === 0 ? slideLength - 1 : prev - 1))
          }
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          aria-label="next"
          onClick={() =>
            setActiveSlide((prev) => (prev === slideLength - 1 ? 0 : prev + 1))
          }
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
