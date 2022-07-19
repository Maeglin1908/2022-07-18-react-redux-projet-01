import MyCard from "../components/MyCard";
import MyHeader from "../components/MyHeader";
import FakeGameDao from "./../utils/dao/FakeGameDao";
const fakeDao = new FakeGameDao();
const games = [];
for (let idx = 0; idx < 5; idx++) {
  games.push(fakeDao.getById(idx));
}
console.log(games);
const Home = () => (
  <>
    <MyHeader />
    <main>
      <h2>Mes Jeux</h2>

      <div className="grid">
        {games.map((g) => (
          <MyCard game={g} />
        ))}
      </div>
    </main>
  </>
);

export default Home;
