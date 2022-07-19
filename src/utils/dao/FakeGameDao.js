import Game from "./../models/Game";
class FakeGameDao {
  constructor() {
    this.title = "NONE";
    this.description = "NONE";
    this.studio = "NONE";
    this.image = "NONE";
    this.finished = false;
  }
  getById(id) {
    switch (id) {
      case 0:
        this.title = "Uncharted: Legacy of Thieves";
        this.studio = "Naughty Dog, Iron Galaxy";
        this.description =
          "The Uncharted series at a time was one of the system sellers for pre-PS5 generations of PlayStation, and it remains one of the finest action-adventure series in video games.";
        this.image = "images/uncharted.jfif";
        this.finished = false;
        break;
      case 1:
        this.title = "God of War";
        this.studio = "Santa Monica Studio";
        this.description =
          "2018’s God of War revitalised the series in a big way. Since Kratos murdered his way through the entire Greek pantheon and there was no god left to kill, he had a several crises and decided to go north.";
        this.image = "images/god-of-war.webp";
        this.finished = false;
        break;
      case 2:
        this.title = "Total War: Warhammer III";
        this.studio = "Creative Assembly";
        this.description =
          "The final part of the Warhammer Fantasy-based subseries of Total War is also the final stage of the evolution of this fascinating venture.";
        this.image = "images/total-war.webp";
        this.finished = true;
        break;
      case 3:
        this.title = "No Man's Sky";
        this.studio = "Hello Games";
        this.description =
          "Le joueur incarne un pilote de vaisseau spatial (marchand, explorateur, chasseur de primes, mineur, pirate, etc.) traversant l'espace pour percer un mystère caché au centre de la galaxie. Dans ce dernier, des milliards de milliards de planètesN 2 sont à visiter, chacune accueillant un écosystème différent des autres6. Le but premier étant d'atteindre le centre de la première galaxie dans laquelle le joueur apparaît, il est crucial de récolter des ressources pour progresser, tout en ayant la possibilité de créer une alliance avec certains groupes ou races présents dans le jeu7. En tant que découvreur du monde, il est proposé au joueur de lui donner un nom, ainsi qu'aux espèces qu'il abrite.";
        this.image = "images/nms.jpg";
        this.finished = true;
        break;
      case 4:
        this.title = "Red Dead Redemption 2";
        this.studio = "Remedy Entertainment";
        this.description =
          "Rockstar Games’ cowboy epic presents one of the most incredibly detailed, immersive, stunning open worlds of its generation.";
        this.image = "images/red-dead-2.webp";
        this.finished = true;
        break;
      default:
        break;
    }
    return new Game(this.title, this.description, this.studio, this.image, this.finished);
  }
}

export default FakeGameDao;
