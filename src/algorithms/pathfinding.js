export const aStar = (p) => {
  let cols = 50;
  let rows = 50;
  let grid = new Array(cols);

  let openSet = [];
  let closedSet = [];
  let start;
  let end;
  let w, h;
  let path = [];
  let wall_chance = 0.4;

  function removeFromArray(arr, elem) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === elem) {
        arr.splice(i, 1);
      }
    }
  }

  function Spot(i, j) {
    this.i = i;
    this.j = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.neighbors = [];
    this.previous = undefined;
    this.wall = false;

    if (p.random(1) < wall_chance) {
      this.wall = true;
    }

    this.show = function (col) {
      if (this.wall === true) {
        p.fill(0);
        p.noStroke(0);
        p.ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
      }
    };

    this.addNeighbors = function (grid) {
      let i = this.i;
      let j = this.j;

      if (i < cols - 1) {
        this.neighbors.push(grid[i + 1][j]);
      }
      if (i > 0) {
        this.neighbors.push(grid[i - 1][j]);
      }
      if (j < rows - 1) {
        this.neighbors.push(grid[i][j + 1]);
      }
      if (j > 0) {
        this.neighbors.push(grid[i][j - 1]);
      }
      if (i > 0 && j > 0) {
        this.neighbors.push(grid[i - 1][j - 1]);
      }
      if (i < cols - 1 && j > 0) {
        this.neighbors.push(grid[i + 1][j - 1]);
      }
      if (i < cols - 1 && j < rows - 1) {
        this.neighbors.push(grid[i + 1][j + 1]);
      }
      if (i > 0 && j < rows - 1) {
        this.neighbors.push(grid[i - 1][j + 1]);
      }
    };
  }

  function heuristic(a, b) {
    let d = p.dist(a.i, a.j, b.i, b.j);
    // let d = abs(a.i - b.i) + abs(a.j - b.j);
    return d;
  }

  p.setup = () => {
    p.createCanvas(
      p.min(p.windowWidth - 30, p.windowHeight - 125),
      p.min(p.windowWidth - 30, p.windowHeight - 125)
    );
    console.log("A*");

    w = p.width / cols;
    h = p.height / rows;

    // making 2d array
    for (let i = 0; i < cols; i++) {
      grid[i] = new Array(rows);
    }

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = new Spot(i, j);
      }
    }
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j].addNeighbors(grid);
      }
    }

    start = grid[0][0];
    end = grid[cols - 1][rows - 1];
    start.wall = false;
    end.wall = false;

    openSet.push(start);
  };

  p.draw = () => {
    if (openSet.length > 0) {
      let winner = 0;
      for (let i = 0; i < openSet.length; i++) {
        if (openSet[i].f < openSet[winner].f) {
          winner = i;
        }
      }

      var current = openSet[winner];

      if (current === end) {
        p.noLoop();
        console.log("Done.");
      }

      removeFromArray(openSet, current);
      closedSet.push(current);

      let neighbors = current.neighbors;
      for (let i = 0; i < neighbors.length; i++) {
        let neighbor = neighbors[i];

        if (!closedSet.includes(neighbor) && !neighbor.wall) {
          let tempG = current.g + 1;

          let newPath = false;

          if (openSet.includes(neighbor)) {
            if (tempG < neighbor.g) {
              neighbor.g = tempG;
              newPath = true;
            }
          } else {
            neighbor.g = tempG;
            newPath = true;
            openSet.push(neighbor);
          }

          if (newPath) {
            neighbor.h = heuristic(neighbor, end);
            neighbor.f = neighbor.g + neighbor.h;
            neighbor.previous = current;
          }
        }
      }

      // keep going
    } else {
      console.log("No solution.");
      p.noLoop();
      return;
      // no solution
    }

    p.background(255);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j].show(p.color(255));
      }
    }

    for (let i = 0; i < closedSet.length; i++) {
      closedSet[i].show(p.color(255, 0, 0));
    }

    for (let i = 0; i < openSet.length; i++) {
      openSet[i].show(p.color(0, 255, 0));
    }

    path = [];
    let temp = current;
    path.push(temp);
    while (temp.previous) {
      path.push(temp.previous);
      temp = temp.previous;
    }

    for (let i = 0; i < path.length; i++) {
      // path[i].show(color(0, 0, 255));
    }

    p.noFill();
    p.stroke(255, 0, 200);
    p.strokeWeight(w / 2);

    p.beginShape();
    for (let i = 0; i < path.length; i++) {
      p.vertex(path[i].i * w + w / 2, path[i].j * h + h / 2);
    }

    p.endShape();
  };
};
