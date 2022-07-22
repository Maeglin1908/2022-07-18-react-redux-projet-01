import { useEffect, useState } from "react";
import Formulaire from "../components/Formulaire";
import MyCard from "../components/MyCard";
import MyHeader from "../components/MyHeader";
import ErrorBanner from "./../components/ErrorBanner";
import { create, getAll } from "./../utils/services/GameService";

const Home = () => {
    const [games, setGames] = useState([]);
    const [updated, setUpdated] = useState(0);
    const [message, setMessage] = useState("Aucun jeu en base...");
    useEffect(() => {
        getAll()
            .then((games_res) => {
                setGames(games_res);
                setMessage("Aucun jeu en base");
            })
            .catch((err) => {
                setMessage(err.message);
            });
    }, [updated]);

    // async function cleanGames() {
    //     CANT WORK FOR NOW, JSON-SERVER KEEP CRASHING
    //     const gamesIds = games.map((game) => game.id);
    //     gamesIds.forEach((id) => remove(id));
    //     setUpdated(updated + 1);
    // }

    return (
        <>
            <MyHeader />
            <main>
                <h2>Ajouter un jeu</h2>
                <Formulaire
                    action={(game) => {
                        create(game).then(setUpdated(updated + 1));
                    }}
                />
                {/* <div>
                    <button onClick={() => cleanGames()}>Vider les jeux !</button>
                </div> */}
                <h2>Mes Jeux ({games.length})</h2>

                <div className="grid">
                    {games?.length ? (
                        games.map((g) => <MyCard key={g.id} jeu={g} updateGame={() => setUpdated(updated + 1)} />)
                    ) : (
                        <ErrorBanner message={message} />
                    )}
                </div>
            </main>
        </>
    );
};

export default Home;
