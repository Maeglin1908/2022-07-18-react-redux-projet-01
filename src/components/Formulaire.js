import { useForm } from "react-hook-form";
import { create } from "../utils/services/GameService";
import "./../styles/Formulaire.css";

const Formulaire = function ({ action: submit }) {
    async function saveGame(game) {
        const res = await create(game);
        submit(res);
        reset();
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    return (
        <>
            <form style={{ textAlign: "left" }} onSubmit={handleSubmit(saveGame)}>
                <div>
                    <label htmlFor="title">Title :</label>
                    <input type="text" name="title" {...register("title", { required: "Un titre est obligatoire" })} />
                    {errors.title && <p className="error">{errors.title.message}</p>}
                </div>
                <div>
                    <label htmlFor="description">Description :</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="5"
                        cols="33"
                        {...register("description", {
                            required: true,
                            minLength: { value: 20, message: "Un minimum de descriptif serait le bienvenue." },
                        })}
                    ></textarea>
                    {errors.description && <p className="error">{errors.description.message}</p>}
                </div>
                <div>
                    <label htmlFor="studio">Studio :</label>
                    <input type="text" name="studio" {...register("studio")} />
                </div>
                <div>
                    <label htmlFor="image">URL de l'image :</label>
                    <input type="text" name="image" {...register("image")} />
                </div>
                <div>
                    <label></label>
                    <button type="submit">Save game</button>
                </div>
            </form>
        </>
    );
};

export default Formulaire;
