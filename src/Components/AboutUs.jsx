import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const AboutUs = () => {
  return (
    <div>
      <div
        className="bg-light"
        style={{
          backgroundImage: `url(${require("../Images/aboutUs.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
        }}
      >
        <div className="text-center pt-5">
          <h1>About Us</h1>
          <p className="lead">
            "Bringing the world of news to your fingertips, one click at a
            time."
          </p>
        </div>
      </div>
      <Container className="py-5">
        <Row>
          <Col>
            <h2>Our Story</h2>
            <p>
              Our story at NewsPe is centered on the mission to make news
              reading convenient for anyone, anywhere, and anytime. We
              understand that people have different preferences when it comes to
              accessing news, which is why we offer this solution where user can
              access news articles from multiple sources through an url.
            </p>
            <p>
              We also believe that paid news articles should be accessible to a
              wider audience. We aim to remove barriers to access and give
              everyone the opportunity to read quality news content from
              reputable sources. By doing this, we hope to increase the revenue
              of publishers and help them sustain their businesses.
            </p>
            <p>
              At NewsPe, we value diversity and believe that readers should have
              the option to access news from a variety of sources. We strive to
              provide an easy-to-use platform that aggregates news articles from
              multiple sources, allowing readers to access different
              perspectives on current events.
            </p>
            <p>
              Our story is one of innovation, inclusivity, and accessibility. We
              are committed to providing a seamless news reading experience that
              connects readers with the news they need, wherever they are.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="bg-light text-center py-5">
        <p className="lead">
          "The true test of a good news is not how many likes it gets on social
          media, but how it impacts the lives of those who read it." - Anderson
          Cooper
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
