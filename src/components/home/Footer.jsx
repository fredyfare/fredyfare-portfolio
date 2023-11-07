import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "../connect/MailchimpForm";
import logo from "../../assets/images/logo.svg";
import linkedIn from "../../assets/icons/linkedin-icon.svg";
import githubIcon from "../../assets/icons/github-icon.svg";
import "../../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/alfredo-fabila-482b51267">
                <img src={linkedIn} alt="LinkedIn Icon" />
              </a>
              <a href="https://github.com/fredyfare">
                <img src={githubIcon} alt="GitHub Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
