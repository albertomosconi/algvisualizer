let cellSize = 10;
const ruleSketch = (p, rule, init) => {
  let population = [];
  let board = [];

  p.setup = () => {
    p.createCanvas(p.windowWidth - 30, p.windowHeight - 120);

    for (let i = 0; i < p.width - cellSize; i += cellSize) {
      population.push(0);
    }

    for (let i = 0; i < init.length; i++) {
      population[init[i]] = 1;
    }
    board.push(population);
  };

  function displayBoard() {
    for (let y = 0; y < board.length; y++) {
      let currentPop = board[y];
      for (let x = 0; x < currentPop.length; x++) {
        p.noStroke();
        if (currentPop[x]) {
          p.fill("white");
        } else {
          p.fill(20);
        }
        p.rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }

  function nextGeneration() {
    let lastPop = board[board.length - 1];
    let newPop = [];

    for (let i = 0; i < lastPop.length; i++) {
      let conf = "";

      if (i === 0) {
        conf += "0";
        conf += lastPop[i].toString();
        conf += lastPop[i + 1].toString();
      } else if (i == lastPop.length - 1) {
        conf += lastPop[i - 1].toString();
        conf += lastPop[i].toString();
        conf += "0";
      } else {
        conf += lastPop[i - 1].toString();
        conf += lastPop[i].toString();
        conf += lastPop[i + 1].toString();
      }

      newPop[i] = rule[conf];
    }

    board.push(newPop);
  }

  p.draw = () => {
    p.background(20);
    displayBoard();
    if (board.length * cellSize < p.height) {
      nextGeneration();
    } else {
      p.noLoop();
    }
  };
};

export const rule30 = (p) => {
  let rule = {
    "000": 0,
    "001": 1,
    "010": 1,
    "011": 1,
    "100": 1,
    "101": 0,
    "110": 0,
    "111": 0,
  };
  return ruleSketch(p, rule, [
    p.floor((p.windowWidth - 30) / (2 * cellSize)),
    p.floor((p.windowWidth - 30) / cellSize - 1),
  ]);
};

export const rule90 = (p) => {
  let rule = {
    "000": 0,
    "001": 1,
    "010": 0,
    "011": 1,
    "100": 1,
    "101": 0,
    "110": 1,
    "111": 0,
  };
  return ruleSketch(p, rule, [
    0,
    p.floor((p.windowWidth - 30) / (2 * cellSize)),
  ]);
};

export const rule110 = (p) => {
  let rule = {
    "000": 0,
    "001": 1,
    "010": 1,
    "011": 1,
    "100": 0,
    "101": 1,
    "110": 1,
    "111": 0,
  };
  return ruleSketch(p, rule, [
    p.floor((((p.windowWidth - 30) / cellSize) * 2) / 3),
    p.floor((p.windowWidth - 30) / cellSize / 3),
    p.floor((p.windowWidth - 30) / cellSize / 2),
    p.floor((p.windowWidth - 30) / cellSize / 2 + 3),
    p.floor((p.windowWidth - 30) / cellSize - 10),
  ]);
};

export const rule184 = (p) => {
  let rule = {
    "000": 0,
    "001": 0,
    "010": 0,
    "011": 1,
    "100": 1,
    "101": 1,
    "110": 0,
    "111": 1,
  };
  return ruleSketch(p, rule, [0, 1, 3, 4, 5, 6, 7, 8, 14, 15, 16, 17, 18]);
};
