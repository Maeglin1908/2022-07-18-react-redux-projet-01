import PropTypes from "prop-types";
import "../styles/MyCard.css";
import Game from "./../utils/models/Game";

const MyCard = ({ jeu: game }) => {
  //La propriété "jeu" est passé dans la variable game (déstructuration, renommage de var)
  const getClassName = () => {
    let className = "card";
    if (game.finished) {
      return className.concat(" finished");
    }
    return className;
  };

  return (
    <div className={getClassName()}>
      <div className="card-header">
        <img src={game.image} alt={`Image du jeu ${game.title}`} />
      </div>
      <div className="card-body">
        <h3>
          (#{game.id + 1}) {game.title}
        </h3>
        <p>-- {game.studio}</p>
        <p>{game.description}</p>
      </div>
    </div>
  );
};

export default MyCard;

MyCard.propTypes = {
  jeu: PropTypes.instanceOf(Game),
};
