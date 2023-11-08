import LanguagesCarousel from "./LanguagesCarousel";
import FrameworksCarousel from "./FrameworksCarousel";
import DevToolsCarousel from "./DevToolsCarousel";
import colorSharp from "../../assets/images/color-sharp.png";
import "react-multi-carousel/lib/styles.css";
import "../../styles/Skills.css";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              {/* <h2>Languages</h2> */}
              <p>Languages</p>
              <LanguagesCarousel responsive={responsive} />
              {/* <h2>Frameworks</h2> */}
              <p>Frameworks</p>
              <FrameworksCarousel responsive={responsive} />
              {/* <h2>Dev Tools</h2> */}
              <p>Dev Tools</p>
              <DevToolsCarousel responsive={responsive} />
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}

export default Skills;
