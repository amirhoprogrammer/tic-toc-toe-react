/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//class Square extends React.Component {
    // TODO: remove the constructor
    //constructor(props){
      //super(props);
      //this.state={
        //value: null,
      //};
    //}
    //render() {
      // TODO: use onClick={this.props.onClick}
      // TODO: replace this.state.value with this.props.value
      //return (
        //<button className="square"
        //onClick={() => this.props.onClick()}
        //>
          //{this.props.value}
        //</button>
      //);
    //}
  //}
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}   
class Board extends React.Component {
  //constructor(props) {
    //super(props);
    //this.state = {
      //squares: Array(9).fill(null),
      //xIsNext : true,
      //};
    //}
  //handleClick(i){
    //const squares = this.state.squares.slice();
    //if (calculateWinner(squares) || squares[i]) {
      //return;
    //}
    //squares[i] = this.state.xIsNext ? 'X' : 'O';
    //this.setState({
      //squares: squares,
      //xIsNext: !this.state.xIsNext,
    //});  
  //}
  renderSquare(i) {
    return (<Square
    //value={this.state.squares[i]}
    //onClick={() => this.handleClick(i)}
    value={this.props.squares[i]}
    onClick={() => this.props.onClick(i)}
  />);
  }
  render() {
    //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    //const winner = calculateWinner(this.state.squares);
    //let status;
    //if (winner) {
      //status = 'Winner: ' + winner;
    //} else {
      //status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    //}
    return (
      <div>
      <div className="board-row">
        {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
      </div>
      <div className="board-row">
        {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
      </div>
      <div className="board-row">
        {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
      </div>
      </div>
      );
  }
}
//<div className="status">{status}</div> marboot be return render
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }
  handleClick(i){
    //const squares = this.state.squares.slice()
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
    });  
  }
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'y' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
//<div>{/* status */}</div> marboot be chand khat balatar

  
// ========================================
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
   
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}