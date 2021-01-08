import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/Home.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row className="">
          <Col sm={12} md={9}>
            <h1 className="home__title">It's time to have fun!</h1>
            <p className="home__info-test">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </Col>
          <Col sm={12} md={3}>
            <span className="home__play-btn">
              <PlayArrowIcon />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
