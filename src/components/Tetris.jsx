import './Tetris.css';
import Board from './Board';
import GameStats from './GameStats';
import GameController from './GameController';
import Previews from './Previews';
import { useBoard } from '../hooks/useBoard';
import { useGameStats } from '../hooks/useGameStats';
import { usePlayer } from '../hooks/usePlayer';

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({ rows, columns, player, resetPlayer, addLinesCleared });

  return (
    <div className="Tetris">
      <Board board={board} />
      <div className="Tetris-right">
        <div className="Right-layout">
          <GameStats gameStats={gameStats} />
          <Previews tetrominoes={player.tetrominoes} />
        </div>
      </div>
      <GameController board={board} gameStats={gameStats} player={player} setGameOver={setGameOver} setPlayer={setPlayer} />
    </div>
  );
};
export default Tetris;
