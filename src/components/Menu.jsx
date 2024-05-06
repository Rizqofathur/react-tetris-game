import './Menu.css';

const Menu = ({ onClick }) => {
  return (
    <div className="Menu">
      <div className="Menu-Wrapper">
        <h1 className="Menu-Header">Tetris Group</h1>
      </div>
      <button className="Button" onClick={onClick}>
        Start Game
      </button>
    </div>
  );
};

export default Menu;
