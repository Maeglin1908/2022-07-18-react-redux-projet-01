class Game {
    #id;
    title;
    description;
    studio;
    image;
    finished;

    static count = 0;

    constructor(title, description, studio, image, finished = false) {
        Game.count++;
        this.#id = Game.count;
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
