import Carousel from "react-multi-carousel";
import github2Icon from "../../assets/icons/github2-icon.svg";
import dockerIcon from "../../assets/icons/docker-icon.svg";
import postmanIcon from "../../assets/icons/postman-icon.svg";
import azureIcon from "../../assets/icons/azure-icon.svg";
import mysqlIcon from "../../assets/icons/mysql-icon.svg";
import mongodbIcon from "../../assets/icons/mongodb-icon.svg";
import "react-multi-carousel/lib/styles.css";
import "../../styles/Skills.css";

function DevToolsCarousel({ responsive }) {
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        className="skill-slider"
      >
        <div className="item">
          <img src={github2Icon} alt="GitHub Icon" />
          <h5>GitHub</h5>
        </div>
        <div className="item">
          <img src={dockerIcon} alt="Docker Icon" />
          <h5>Docker</h5>
        </div>
        <div className="item">
          <img src={postmanIcon} alt="Postman Icon" />
          <h5>Postman</h5>
        </div>
        <div className="item">
          <img src={azureIcon} alt="Azure Icon" />
          <h5>Azure</h5>
        </div>
        <div className="item">
          <img src={mysqlIcon} alt="MySQL Icon" />
          <h5>MySQL</h5>
        </div>
        <div className="item">
          <img src={mongodbIcon} alt="MongoDB Icon" />
          <h5>MongoDB</h5>
        </div>
      </Carousel>
    </>
  );
}

export default DevToolsCarousel;
