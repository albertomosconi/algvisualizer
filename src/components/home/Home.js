import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const types = [
    {
      route: "sorting",
      name: "Sorting",
      desc:
        "In computer science, a sorting algorithm is an algorithm that puts elements of a list in a certain order. Efficient sorting is important for optimizing the efficiency of other algorithms (such as search and merge algorithms) that require input data to be in sorted lists.",
    },
    {
      route: "automata",
      name: "Cellular Automata",
      desc:
        "A cellular automaton consists of a regular grid of cells, each in one of a finite number of states, such as on and off. The grid can be in any finite number of dimensions. For each cell, a set of cells called its neighborhood is defined relative to the specified cell. An initial state (time t = 0) is selected by assigning a state for each cell. A new generation is created (advancing t by 1), according to some fixed rule (generally, a mathematical function) that determines the new state of each cell in terms of the current state of the cell and the states of the cells in its neighborhood. Typically, the rule for updating the state of cells is the same for each cell and does not change over time, and is applied to the whole grid simultaneously.",
    },
    {
      route: "pathfinding",
      name: "Pathfinding",
      desc:
        "Pathfinding or pathing is the plotting, by a computer application, of the shortest route between two points. It is a more practical variant on solving mazes. At its core, a pathfinding method searches a graph by starting at one vertex and exploring adjacent nodes until the destination node is reached, generally with the intent of finding the cheapest route.",
    },
    {
      route: "genetic",
      name: "Genetic",
      desc:
        "A genetic algorithm (GA) is a metaheuristic inspired by the process of natural selection that belongs to the larger class of evolutionary algorithms (EA). Genetic algorithms are commonly used to generate high-quality solutions to optimization and search problems by relying on biologically inspired operators such as mutation, crossover and selection.",
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
        <Link key={i} style={{ textDecoration: "none" }} to={"/" + t.route}>
          <Button
            disabled={i > 1 ? true : false}
            className="mt-4"
            block
            variant="light"
          >
            <h4>{t.name}</h4>
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
