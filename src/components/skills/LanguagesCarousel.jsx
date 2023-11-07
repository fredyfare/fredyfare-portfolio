import Carousel from "react-multi-carousel";
import javascriptIcon from "../../assets/icons/javascript-icon.svg";
import htmlIcon from "../../assets/icons/html-icon.svg";
import cssIcon from "../../assets/icons/css-icon.svg";
import cppIcon from "../../assets/icons/cpp-icon.svg";
import csIcon from "../../assets/icons/cs-icon.svg";
import pythonIcon from "../../assets/icons/python-icon.svg";
import javaIcon from "../../assets/icons/java-icon.svg";
import "react-multi-carousel/lib/styles.css";
import "../../styles/Skills.css";

function LanguagesCarousel({ responsive }) {
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        className="skill-slider"
      >
        <div className="item">
          <img src={htmlIcon} alt="HTML Icon" />
          <h5>Html</h5>
        </div>
        <div className="item">
          <img src={cssIcon} alt="CSS Icon" />
          <h5>CSS</h5>
        </div>
        <div className="item">
          <img src={javascriptIcon} alt="JavaScript Icon" />
          <h5>JavaScript</h5>
        </div>
        <div className="item">
          <img src={cppIcon} alt="C++ Icon" />
          <h5>C++</h5>
        </div>
        <div className="item">
          <img src={csIcon} alt="C# Icon" />
          <h5>C#</h5>
        </div>
        <div className="item">
          <img src={pythonIcon} alt="Python Icon" />
          <h5>Python</h5>
        </div>
        <div className="item">
          <img src={javaIcon} alt="Java" />
          <h5>Java</h5>
        </div>
      </Carousel>
    </>
  );
}

export default LanguagesCarousel;
