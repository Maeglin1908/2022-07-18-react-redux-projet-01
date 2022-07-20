import { useState } from "react";
import Formulaire from "../components/Formulaire";
import MyCard from "../components/MyCard";
import MyHeader from "../components/MyHeader";
import ErrorBanner from "./../components/ErrorBanner";
import FakeGameDao from "./../utils/dao/FakeGameDao";
const fakeDao = new FakeGameDao();
// const games = [];
// for (let idx = 0; idx < 5; idx++) {
//     games.push(fakeDao.getById(idx));
// }

const Home = () => {
    const [games, setGames] = useState([]);

    function addGame(game) {
        const updated = [...games];
        if (games.length > 0) {
            game.id = updated[updated.length - 1].id + 1;
        } else {
            game.id = 0;
        }
        updated.push(game);
        setGames(updated);
    }

    function deleteFct(game) {
        const updated = [...games];
        const idx = updated.indexOf(game);
        if (idx && idx >= 0) {
            updated.splice(idx, 1);
            setGames(updated);
        }
    }
    function updateGame(game) {
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
                    {!games || games.length === 0 ? (
                        <ErrorBanner message="Aucun jeu en base" />
                    ) : (
                        games.map((g, index) => (
                            <MyCard key={g.id} jeu={g} updateGame={updateGame} deleteFct={deleteFct} />
                        ))
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
