import { execute } from "./../utils/mysql.connector";
import { GeckoQueries } from "./geckos.queries";
import { IGecko } from "./geckos.model";

export const getGeckos = async () => {
    return execute<IGecko[]>(GeckoQueries.GetGeckos, []);
};
/**
 * gets a team based on id provided
 */
export const getGeckoById = async (id: IGecko['id']) => {
    return execute<IGecko>(GeckoQueries.GetGeckosById, [id]);
};

/**
 * adds a new active gecko record
 */
export const insertGecko = async (gecko: IGecko) => {
    const result = await execute<{ affectedRows: number }>(GeckoQueries.AddGecko, [
        gecko.name,
    ]);
    return result.affectedRows > 0;
};

/**
 * updates gecko information based on the id provided
 */
export const updateGecko = async (gecko: IGecko) => {
    const result = await execute<{ affectedRows: number }>(GeckoQueries.UpdateGeckoById, [
        gecko.name,
        gecko.id
    ]);
    return result.affectedRows > 0;
};

/**
 * updates gecko information based on the id provided
 */
export const deleteGecko = async (id: IGecko['id']) => {
    const result = await execute<{ affectedRows: number }>(GeckoQueries.DeleteGeckoById, [
        id
    ]);
    return result.affectedRows > 0;
};
