import MyCard from "../components/MyCard";
import MyHeader from "../components/MyHeader";
import ErrorBanner from "./../components/ErrorBanner";
import FakeGameDao from "./../utils/dao/FakeGameDao";
const fakeDao = new FakeGameDao();
const games = [];
for (let idx = 0; idx < 5; idx++) {
  games.push(fakeDao.getById(idx));
}
const Home = () => (
  <>
    <MyHeader />
    <main>
      <h2>Mes Jeux</h2>

      <div className="grid">
        {!games || games.length === 0 ? (
          <ErrorBanner message="Aucun jeu en base" />
        ) : (
          games.map((g, index) => <MyCard key={g.id} jeu={g} />)
        )}
      </div>
    </main>
  </>
);

export default Home;
