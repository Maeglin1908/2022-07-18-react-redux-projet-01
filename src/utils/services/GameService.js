import axios from "axios";
const url = "http://localhost:6789/games";

export function getAll() {
    return axios
        .get(url)
        .then((res) => res.data)
        .catch((err) => {
            throw new Error("Le serveur d'API semble être arrêté ...");
        });
}

// Avec async, juste pour avoir les deux façons de faire.
export async function getById(id) {
    try {
        const { data } = await axios.get(`${url}/${id}`);
        return data;
    } catch {
        alert("Nope (get by id)");
    }
}

export function getByTitle(title) {
    return axios
        .get(url, {
            params: { title },
        })
        .then((res) => res.data)
        .catch(() => alert("C'est cassé (get by title)"));
}

export function getByStudio(studio) {
    return axios
        .get(url, {
            params: { studio },
        })
        .then((res) => res.data)
        .catch(() => alert("C'est cassé (get by studio)"));
}

export function create(game) {
    return axios
        .post(url, game)
        .then((res) => res.data)
        .catch(() => alert("C'est cassé (create)"));
}

export function update(game) {
    return axios
        .put(`${url}/${game.id}`, game)
        .then((res) => res.data)
        .catch(() => alert("C'est cassé (update)"));
}

export function remove(game) {
    const id = typeof game === "number" ? game : game.id;
    return axios
        .delete(`${url}/${id}`)
        .then(() => true)
        .catch(() => alert("C'est cassé (delete)"));
}
