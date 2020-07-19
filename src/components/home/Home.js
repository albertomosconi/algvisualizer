import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const types = [
    {
      name: "sorting",
      desc:
        "In computer science, a sorting algorithm is an algorithm that puts elements of a list in a certain order. Efficient sorting is important for optimizing the efficiency of other algorithms (such as search and merge algorithms) that require input data to be in sorted lists.",
    },
  ];

  return (
    <Container className="text-center mt-4">
      <h2>AlgVisualizer</h2>
      <a
        href="https://www.github.com/albertomosconi/algvisualizer"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted"
      >
        view source code
      </a>
      <hr />
      {types.map((t, i) => (
        <Link key={i} style={{ textDecoration: "none" }} to={"/" + t.name}>
          <Button className="mt-4" block variant="light">
            <h4> {t.name[0].toUpperCase() + t.name.slice(1)}</h4>
            {t.desc}
          </Button>
        </Link>
      ))}
      <Button block variant="light" className="mt-4" disabled>
        <h4 className="muted">more soon...</h4>
      </Button>
      <div className="mt-4">
        <p>
          Made by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.albertomosconi.it"
          >
            Alberto Mosconi
          </a>
        </p>
      </div>
    </Container>
  );
};

export default Home;
