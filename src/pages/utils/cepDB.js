import { dbPromise } from "./db";

export const getPokemonDB = async (nome) => {
    const db = await dbPromise;
    return db.get("cep", nome);
};

export const savePokemonDB = async (ceps) => {
    const db = await dbPromise;
    return db.put("cep", ceps);
};