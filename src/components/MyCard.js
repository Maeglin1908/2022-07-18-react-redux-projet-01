import PropTypes from "prop-types";
import "../styles/MyCard.css";
import Game from "./../utils/models/Game";
import { remove, update } from "./../utils/services/GameService";
const MyCard = ({ jeu: game, updateGame }) => {
    //La propriété "jeu" est passé dans la variable game (déstructuration, renommage de var)
    const getClassName = () => {
        let className = "card";
        if (game.finished) {
            return className.concat(" finished");
        }
        return className;
    };

    const finishGame = () => {
        game.finished = !game.finished;
        update(game).then(updateGame());
    };
    const removeGame = () => {
        remove(game).then(updateGame());
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
            <div className="card-footer">
                <button onClick={() => finishGame()}>{game.finished ? "Vu" : "Pas vu"}</button>
                <button className="secondary" onClick={() => removeGame(game)}>
                    Supprimer
                </button>
            </div>
        </div>
    );
};

export default MyCard;

MyCard.propTypes = {
    game: PropTypes.instanceOf(Game),
};
