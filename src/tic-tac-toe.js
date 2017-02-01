class TicTacToe {
    constructor() {
    	this.matrix = [[null,null,null],
					   [null,null,null],
					   [null,null,null]
					  ];
		this.freeFields = 9;
    }

    getCurrentPlayerSymbol() {
    	return (this.freeFields % 2) ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
    	if (this.matrix[rowIndex][columnIndex]) return
    		else {
    			this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
    			this.freeFields--;
    		}
    	return
    
    }

    isFinished() {
    	return (this.isDraw() || this.getWinner()) ? true : false;
    }

    getWinner() {

    	function checkFields (value) {
    		// check rows
    		if ((this.matrix[0][0] == value && this.matrix[0][0] == this.matrix[0][1] && this.matrix[0][1] == this.matrix[0][2]) ||
    			(this.matrix[1][0] == value && this.matrix[1][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[1][2]) ||
    			(this.matrix[2][0] == value && this.matrix[2][0] == this.matrix[2][1] && this.matrix[2][1] == this.matrix[2][2]) ||
    		// check columns
    			(this.matrix[0][0] == value && this.matrix[0][0] == this.matrix[1][0] && this.matrix[1][0] == this.matrix[2][0]) ||
    			(this.matrix[0][1] == value && this.matrix[0][1] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][1]) ||
    			(this.matrix[0][2] == value && this.matrix[0][2] == this.matrix[1][2] && this.matrix[1][2] == this.matrix[2][2]) ||
    		// check diagonals
    			(this.matrix[0][0] == value && this.matrix[0][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][2]) ||
    			(this.matrix[0][2] == value && this.matrix[0][2] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][0]))  {
    			return value
    		} else return null
    	}

    	return checkFields.call(this, 'x') || checkFields.call(this, 'o');
    	
    }

    noMoreTurns() {
    	return (!this.freeFields);
    }

    isDraw() {
    	return (this.noMoreTurns() && !this.getWinner()) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
    	return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
