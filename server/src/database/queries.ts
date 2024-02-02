import { PlaceHolder } from "../types";
import { db, helpers } from "./database";

export async function insertCropSeasons(placeHolders: PlaceHolder[]) {
    if (placeHolders.length === 0) {
        return;
    }
    const values = helpers.values(
        placeHolders.map((placeHolder) => ({
            id: placeHolder.id,
            property_1: placeHolder.property_1,
            property_2: placeHolder.property_2,
        })),
        ["id", "property_1", "property_2"]
    );
    const query = `INSERT INTO "PlaceHolder" ("id", "property_1", "property_2")
                        VALUES $1:raw;`;
    try {
        await db.none(query, values);
    } catch (error) {
        console.error("Error inserting cropSeasons:", error);
        throw error; // Propagate error
    }
}

export async function deleteCropSeason(id: string) {
    const deleteQuery = `DELETE FROM "PlaceHolder" WHERE "id" = $1;`;

    try {
        await db.none(deleteQuery, [id]);
    } catch (error) {
        console.error("Error deleting data:", error);
    }
}
