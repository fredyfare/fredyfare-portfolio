import Carousel from "react-multi-carousel";
import bootstrapIcon from "../../assets/icons/bootstrap-icon.svg";
import reactIcon from "../../assets/icons/react-icon.svg";
import nodejsIcon from "../../assets/icons/nodejs-icon.svg";
import jestIcon from "../../assets/icons/jest-icon.svg";
import "react-multi-carousel/lib/styles.css";
import "../../styles/Skills.css";

function FrameworksCarousel({ responsive }) {
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        className="skill-slider"
      >
        <div className="item">
          <img src={bootstrapIcon} alt="Bootstrap" />
          <h5>Bootstrap</h5>
        </div>
        <div className="item">
          <img src={reactIcon} alt="React" />
          <h5>React, React-Native</h5>
        </div>
        <div className="item">
          <img src={nodejsIcon} alt="Node.JS" />
          <h5>Node.JS</h5>
        </div>
        <div className="item">
          <img src={jestIcon} alt="Jest" />
          <h5>Jest</h5>
        </div>
      </Carousel>
    </>
  );
}

export default FrameworksCarousel;
