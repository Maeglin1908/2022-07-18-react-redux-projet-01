import "bootstrap/dist/css/bootstrap.css";
import "./../styles/card.css";

const Card = (props) => {
  const game01 = {
    titre: "Uncharted: Legacy of Thieves",
    studio: "Naughty Dog, Iron Galaxy",
    description:
      "The Uncharted series at a time was one of the system sellers for pre-PS5 generations of PlayStation, and it remains one of the finest action-adventure series in video games.",
    image: "images/uncharted.jfif",
    status: false,
  };
  const game02 = {
    titre: "God of War",
    studio: "Santa Monica Studio",
    description:
      "2018’s God of War revitalised the series in a big way. Since Kratos murdered his way through the entire Greek pantheon and there was no god left to kill, he had a several crises and decided to go north.",
    image: "images/god-of-war.webp",
    status: false,
  };
  const game03 = {
    titre: "Total War: Warhammer III",
    studio: "Creative Assembly",
    description:
      "The final part of the Warhammer Fantasy-based subseries of Total War is also the final stage of the evolution of this fascinating venture.",
    image: "images/total-war.webp",
    status: true,
  };
  const game04 = {
    titre: "No Man's Sky ( IDX : " + props.idx + ")",
    studio: "Hello Games",
    description:
      "Le joueur incarne un pilote de vaisseau spatial (marchand, explorateur, chasseur de primes, mineur, pirate, etc.) traversant l'espace pour percer un mystère caché au centre de la galaxie. Dans ce dernier, des milliards de milliards de planètesN 2 sont à visiter, chacune accueillant un écosystème différent des autres6. Le but premier étant d'atteindre le centre de la première galaxie dans laquelle le joueur apparaît, il est crucial de récolter des ressources pour progresser, tout en ayant la possibilité de créer une alliance avec certains groupes ou races présents dans le jeu7. En tant que découvreur du monde, il est proposé au joueur de lui donner un nom, ainsi qu'aux espèces qu'il abrite.",
    image: "images/nms.jpg",
    status: true,
  };
  const game05 = {
    titre: "Red Dead Redemption 2",
    studio: "Remedy Entertainment",
    description:
      "Rockstar Games’ cowboy epic presents one of the most incredibly detailed, immersive, stunning open worlds of its generation.",
    image: "images/red-dead-2.webp",
    status: true,
  };
  let game;
  switch (props.idx) {
    case 1:
      game = game01;
      break;
    case 2:
      game = game02;
      break;
    case 3:
      game = game03;
      break;
    case 4:
      game = game04;
      break;
    case 5:
      game = game05;
      break;
    default:
      game = game01;
  }

  let isChecked;
  let jeuDejaJoue;
  let classPlayed;
  if (game.status) {
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
          <img src={game.image} />
          <h5 className="card-title">{game.titre}</h5>
          <p className="card-text">
            <p>Studio : {game.studio}</p>
            <p>Description</p>
            <p>{game.description}</p>
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
