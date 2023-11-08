import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import astronautImg from "../../assets/images/astronaut-img.svg";
import astronaut2Img from "../../assets/images/astronaut2-img.png";
import astronaut3Img from "../../assets/images/astronaut3-img.png";
import "animate.css";
import "../../styles/Banner.css";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  const toRotate = ["Web Developer...", "...In Progress", "And A Gamer"];
  const period = 200;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  useEffect(() => {
    const images = [astronautImg, astronaut2Img, astronaut3Img];
    const randomIndex = Math.floor(Math.random() * images.length);
    setSelectedImage(images[randomIndex]);
  }, []);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(75);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(3000);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(period);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Alfredo`}{" "}
                    <span className="txt-rotate">
                      <div className="wrap">
                        {text}
                        <span className={isDeleting ? "cursor" : "cursor"}>
                          |
                        </span>
                      </div>
                    </span>
                  </h1>
                  <p>
                    Strong interest in full-stack web development, and AI. My
                    goal is to become part of an organization that will enable
                    me to further develop my skills in line with my career
                    goals, providing me opportunities for growth in the
                    software development field.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={selectedImage} alt="Astronaut Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
