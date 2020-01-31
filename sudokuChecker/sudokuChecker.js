/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {

  var array = board.split('\n')
  var newboard = []
  for (var i = 0; i < array.length; i++) {
    newboard.push(array[i].split(''))
  }
  rows = newboard;
  cols = [];
  grid = [];


  for (var i = 0; i < 9; i++) {
    cols.push([]);
    grid.push([]);
  }

  for (var row = 0; row < 9; row++) {

    for (var col = 0; col < 9; col++) {


      cols[col][row] = newboard[row][col];

      gridRow = Math.floor(row / 3);
      gridCol = Math.floor(col / 3);
      gridIndex = gridRow * 3 + gridCol;


      grid[gridIndex].push(newboard[row][col]);

    }
  }

  return (validate(rows) && validate(cols) && validate(grid));


}




validate = function (data) {

  for (var row = 0; row < 9; row++) {

    data[row].sort();

    for (var col = 0; col < 9; col++) {

      var value = data[row][col], next_value = data[row][col + 1];


      if (!(value && value > 0 && value < 10)) {
        return false;
      }

      if (col !== 8 && value === next_value) {
        return false;
      }

    }
  }
  return true;
};