import { useState } from "react";
import Formulaire from "../components/Formulaire";
import MyCard from "../components/MyCard";
import MyHeader from "../components/MyHeader";
import ErrorBanner from "./../components/ErrorBanner";
import FakeGameDao from "./../utils/dao/FakeGameDao";
import Game from "./../utils/models/Game";
const fakeDao = new FakeGameDao();
// const games = [];
// for (let idx = 0; idx < 5; idx++) {
//     games.push(fakeDao.getById(idx));
// }

const Home = () => {
    const [games, setGames] = useState([]);

    function addGame({ title, description, studio, image }) {
        const newGame = new Game(title, description, studio, image);
        const updated = [...games];
        updated.push(newGame);
        setGames(updated);
    }

    function deleteGame(game) {
        const updated = [...games];
        const idx = updated.indexOf(game);
        if (idx >= 0) {
            updated.splice(idx, 1);
            setGames(updated);
        }
    }
    function updateGame(game) {
        game.finished = !game.finished;
        const updated = [...games];
        const idx = updated.indexOf(game);
        updated[idx] = game;
        setGames(updated);
    }

    function cleanGames() {
        setGames([]);
    }

    return (
        <>
            <MyHeader />
            <main>
                <h2>Mes Jeux</h2>

                <div className="grid">
                    {games?.length ? (
                        games.map((g) => (
                            <MyCard key={g.id} jeu={g} changeStatus={updateGame} deleteGame={deleteGame} />
                        ))
                    ) : (
                        <ErrorBanner message="Aucun jeu en base" />
                    )}
                </div>

                <h2>Ajouter un jeu</h2>
            </main>
            <Formulaire action={addGame} />
            <div>
                <button onClick={() => cleanGames()}>Vider les jeux !</button>
            </div>
        </>
    );
};

export default Home;
