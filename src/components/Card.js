import "bootstrap/dist/css/bootstrap.css";
import "./../styles/card.css";

const Card = (props) => {
  const jeu = {
    titre: "No Man's Sky ( IDX : " + props.idx + ")",
    studio: "Hello Games",
    description:
      "Le joueur incarne un pilote de vaisseau spatial (marchand, explorateur, chasseur de primes, mineur, pirate, etc.) traversant l'espace pour percer un mystère caché au centre de la galaxie. Dans ce dernier, des milliards de milliards de planètesN 2 sont à visiter, chacune accueillant un écosystème différent des autres6. Le but premier étant d'atteindre le centre de la première galaxie dans laquelle le joueur apparaît, il est crucial de récolter des ressources pour progresser, tout en ayant la possibilité de créer une alliance avec certains groupes ou races présents dans le jeu7. En tant que découvreur du monde, il est proposé au joueur de lui donner un nom, ainsi qu'aux espèces qu'il abrite.",
    image: "images/nms.jpg",
    status: true,
  };

  let isChecked;
  let jeuDejaJoue;
  let classPlayed;
  if (jeu.status) {
    isChecked = <input className="form-check-input" type="checkbox" checked />;
    jeuDejaJoue = "Jeu joué";
    classPlayed = "card played";
  } else {
    isChecked = <input className="form-check-input" type="checkbox" />;
    jeuDejaJoue = "Pas encore joué";
    classPlayed = "card notPlayed";
  }
  return (
    <div className="col-lg-6">
      <div className={classPlayed}>
        <div className="card-body">
          <img src={jeu.image} />
          <h5 className="card-title">{jeu.titre}</h5>
          <p className="card-text">
            <p>Studio : {jeu.studio}</p>
            <p>Description</p>
            <p>{jeu.description}</p>
          </p>
          <div className="form-check form-switch">
            {isChecked}
            {jeuDejaJoue}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
