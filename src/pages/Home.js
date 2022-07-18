import Card from "./../components/Card";
import "./../styles/home.css";
const Home = () => {
  return (
    <div id="home">
      <article>
        <h2>Home page</h2>
        <p>
          Aliquip in et nulla incididunt ex excepteur adipisicing elit consectetur enim voluptate exercitation proident.
          Veniam aute incididunt non nulla qui aliquip ullamco proident. Deserunt Lorem adipisicing tempor sint officia
          duis laboris labore occaecat sint laborum ex est. Mollit enim enim Lorem sit anim do ut do fugiat esse aliqua
          id velit sint. Aute id sunt incididunt laborum deserunt in labore commodo mollit sit cillum velit ipsum.
          Aliquip adipisicing et ut laboris sunt. Eu enim occaecat exercitation fugiat commodo mollit deserunt.
        </p>
        <p>
          Veniam aliquip pariatur culpa est aliquip dolore nulla qui enim enim. Laborum proident ea culpa elit Lorem et
          cupidatat Lorem minim enim magna adipisicing nostrud. Consectetur dolor ipsum eu velit fugiat. Culpa officia
          eu nisi non. Occaecat deserunt Lorem eiusmod voluptate cupidatat adipisicing do nostrud non tempor.
        </p>
        <p>
          Commodo ad magna duis Lorem fugiat ullamco magna reprehenderit ea Lorem aliquip duis dolor. Sint qui proident
          cillum id Lorem occaecat laboris ea anim eu duis. Aliqua qui est do magna anim cupidatat est laborum eiusmod
          enim consequat excepteur adipisicing. Esse enim proident occaecat sunt dolor irure duis. Consectetur
          exercitation consectetur Lorem pariatur Lorem aute est incididunt est occaecat ad dolor voluptate commodo. Ut
          elit exercitation labore fugiat.
        </p>
      </article>
      <div className="row cards">
        <Card idx={1} />
        <Card idx={2} />
        <Card idx={3} />
        <Card idx={4} />
        <Card idx={5} />
        <Card idx={6} />
        <Card idx={7} />
      </div>
    </div>
  );
};

export default Home;
