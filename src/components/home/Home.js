import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const types = ["sorting"];

  return (
    <Container className="text-center mt-4">
      <h2>AlgVisualizer</h2>
      <p className="muted">Alberto Mosconi</p>
      {types.map((t, i) => (
        <Link key={i} style={{ textDecoration: "none" }} to={"/" + t}>
          <Button className="mt-4" block variant="light">
            <h4> {t[0].toUpperCase() + t.slice(1)}</h4>
          </Button>
        </Link>
      ))}
    </Container>
  );
};

export default Home;
