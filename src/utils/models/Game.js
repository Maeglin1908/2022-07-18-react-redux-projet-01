class Game {
  constructor(title, description, studio, image, finished = false) {
    this.title = title;
    this.description = description;
    this.studio = studio;
    this.image = image;
    this.finished = finished;
  }
}

export default Game;
