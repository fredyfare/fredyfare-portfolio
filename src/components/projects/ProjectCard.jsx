import { Col } from "react-bootstrap";
import githubIcon from "../../assets/icons/github-icon.svg";
import "../../styles/ProjectCard.css";

function ProjectCard({ title, description, technologies, imgUrl, repUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div style={{ padding: 20 }}>{technologies}</div>
          {repUrl && (
            <div className="social-icon">
              <a href={repUrl}>
                <img
                  src={githubIcon}
                  alt="GitHub Icon"
                  style={{ width: "100px", alignItems: "right" }}
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
