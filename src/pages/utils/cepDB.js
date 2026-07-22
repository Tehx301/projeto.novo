import { dbPromise } from "./db";

export const getPokemonDB = async (nome) => {
    const db = await dbPromise;
    return db.get("cep", nome);
};
