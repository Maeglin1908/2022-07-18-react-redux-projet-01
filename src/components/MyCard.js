import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/MyCard.css";
import Game from "./../utils/models/Game";
const MyCard = ({ jeu: game, deleteFct, updateGame }) => {
    //La propriété "jeu" est passé dans la variable game (déstructuration, renommage de var)
    const getClassName = () => {
        let className = "card";
        if (game.finished) {
            return className.concat(" finished");
        }
        return className;
    };

    const [finished, setFinished] = useState(game.finished);
    const [classname, setClassname] = useState(getClassName());

    function finishGame() {
        game.finished = !game.finished;
        updateGame(game);
        setFinished(game.finished);
        setClassname(getClassName());
    }

    return (
        <div className={classname}>
            <div className="card-header">
                <img src={game.image} alt={`Image du jeu ${game.title}`} />
            </div>
            <div className="card-body">
                <h3>
                    (#{game.id + 1}) {game.title}
                </h3>
                <p>-- {game.studio}</p>
                <p>{game.description}</p>
                <div>
                    <input type="checkbox" name="finished" onClick={finishGame} />
                </div>
                <div>
                    <button onClick={() => deleteFct(game)}>Supprimer</button>
                </div>
            </div>
        </div>
    );
};

export default MyCard;

MyCard.propTypes = {
    jeu: PropTypes.instanceOf(Game),
};
