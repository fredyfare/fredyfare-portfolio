import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import "../../styles/Newsletter.css";

function Newsletter({ status, message, onValidated }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Like I said, nothing would happen.`);
    // email &&
    //   email.indexOf("@") > -1 &&
    //   onValidated({
    //     EMAIL: email,
    //   });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          {/* <Col lg={12} md={6} xl={5}> */}
          <h3>
            "Life before death, strength before weakness, journey before
            destination" Sanderson, The Stormlight Archive
          </h3>
          {/* {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>} */}
          {/* </Col> */}
          {/* <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address (Nothing will happen either)"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col> */}
        </Row>
      </div>
    </Col>
  );
}

export default Newsletter;
