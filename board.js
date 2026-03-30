// board.js - Backgammon Game Board Management

class Board {
    constructor() {
        this.pieces = this.initializePieces();
        this.boardElement = document.getElementById('backgammon-board');
        this.render();
    }

    initializePieces() {
        // Initialize pieces on the board
        // For simplicity, let's assume 15 pieces for each player
        return {
            player1: Array(15).fill(null),
            player2: Array(15).fill(null)
        };
    }

    render() {
        this.clearBoard();
        this.renderPieces();
        // Visual updates or other rendering logic can be added here
    }

    clearBoard() {
        this.boardElement.innerHTML = '';
    }

    renderPieces() {
        for (let player in this.pieces) {
            this.pieces[player].forEach((piece, index) => {
                // Render each piece. This is a placeholder logic.
                const pieceElement = document.createElement('div');
                pieceElement.className = 'piece ' + player;
                pieceElement.draggable = true;
                pieceElement.dataset.player = player;
                pieceElement.dataset.index = index;
                pieceElement.addEventListener('dragstart', (e) => this.onDragStart(e));
                this.boardElement.appendChild(pieceElement);
            });
        }
    }

    onDragStart(e) {
        e.dataTransfer.setData('text/plain', JSON.stringify({
            player: e.target.dataset.player,
            index: e.target.dataset.index
        }));
    }

    onDrop(e) {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));
        // Update piece position based on drop location
        // Add logic to update the board state accordingly
        this.render();
    }

    enableDragAndDrop() {
        this.boardElement.addEventListener('dragover', (e) => e.preventDefault());
        this.boardElement.addEventListener('drop', (e) => this.onDrop(e));
    }
}

const gameBoard = new Board();
gameBoard.enableDragAndDrop();
