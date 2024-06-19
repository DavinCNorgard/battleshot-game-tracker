document.addEventListener('DOMContentLoaded', () => {
    const letters = 'ABCDEFGHIJ'.split('');
    const app = Vue.createApp({
        data() {
            return {
                rows: 10,
                cols: 10,
                letters: 'ABCDEFGHIJ'.split(''),
                board: Array(11).fill().map((_, rowIndex) => 
                    rowIndex === 0 ? 
                    Array(11).fill(null).map((_, colIndex) => colIndex === 0 ? '' : colIndex) : 
                    Array(11).fill('').map((_, colIndex) => colIndex === 0 ? letters[rowIndex - 1] : '')
                )
            };
        },
        methods: {
            setMove(row, col) {
                if (row === 0 || col === 0) return; // Prevent setting moves on headers
                const currentValue = this.board[row][col];
                if (currentValue === '') {
                    this.board[row][col] = 'hit';
                } else if (currentValue === 'hit') {
                    this.board[row][col] = 'miss';
                } else {
                    this.board[row][col] = '';
                }
            }
        }
    });

    app.mount('#app');
});