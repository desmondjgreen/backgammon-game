class Dice {
    constructor() {
        this.dice = [0, 0];
    }

    roll() {
        this.dice[0] = Math.floor(Math.random() * 6) + 1; // Roll first die
        this.dice[1] = Math.floor(Math.random() * 6) + 1; // Roll second die
        return this.dice;
    }

    getValidMoves(position, board) {
        const [die1, die2] = this.dice;
        const moves = [];

        // Check moves for die1
        if (this.isValidMove(position, die1, board)) {
            moves.push(position + die1);
        }

        // Check moves for die2
        if (this.isValidMove(position, die2, board)) {
            moves.push(position + die2);
        }

        return moves;
    }

    isValidMove(position, diceValue, board) {
        // Logic for valid moves based on the game rules
        // For example, checking if the destination is within the board and not blocked
        const newPosition = position + diceValue;
        return newPosition >= 0 && newPosition < board.length && board[newPosition] <= 1; // Example condition
    }
}

module.exports = Dice;