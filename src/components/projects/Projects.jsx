import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import ProjectCard from "./ProjectCard";
import professionalExperience from "../../utils/professionalExperience";
import projects from "../../utils/projects";
import tutorialProjects from "../../utils/tutorialProjects";
import colorSharp2 from "../../assets/images/color-sharp2.png";
import "animate.css";
import "../../styles/Projects.css";

function Projects() {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 style={{ paddingBottom: 20 }}>Projects</h2>
                  {/* <p>
                    I've worked with JS frameworks/libraries, learning about web
                    development with React, API consumption, databases, and
                    other skills. I am currently working on a personal mobile
                    app for quotes called
                    <strong>
                      <em> WisdomQuill</em>
                    </strong>
                    .
                  </p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Professional Experience
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tutorial Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {professionalExperience.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {/* <p>
                          All the projects I've completed by myself, usually
                          related to things I like such as videogames, reading,
                          and music. More details available in each project's
                          GitHub repository.
                          <br />
                          <br />
                          "Even if you are good, you can always be better"
                        </p> */}
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          All the projects I've completed by following
                          tutorials. More details in each project's GitHub
                          repository. Improving my skills by modifying the
                          design and adding features.
                          <br />
                          <br />
                          "Learning by doing"
                        </p>
                        <Row>
                          {tutorialProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}

export default Projects;
