class Game {
  #id;
  title;
  description;
  studio;
  image;
  finished;

  constructor(id, title, description, studio, image, finished = false) {
    this.#id = id;
    this.title = title;
    this.description = description;
    this.studio = studio;
    this.image = image;
    this.finished = finished;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }
}

export default Game;
