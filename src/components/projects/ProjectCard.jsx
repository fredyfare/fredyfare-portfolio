import { Col } from "react-bootstrap";
import "../../styles/ProjectCard.css";

function ProjectCard({ title, description, technologies ,imgUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>{technologies}</div>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
