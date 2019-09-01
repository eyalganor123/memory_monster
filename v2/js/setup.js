var gridSize = 3;

init();

function init() {
  createGrid();
}

function createGrid() {
  var grid = document.querySelector('.grid');

  for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
    var row = document.createElement('div');
    row.setAttribute('class', 'row');

    for (let cellIndex = 0; cellIndex < gridSize; cellIndex++) {
      var cell = document.createElement('div');
      cell.setAttribute('class', 'cell');
      row.appendChild(cell);
    }

    grid.appendChild(row);
  }
}
