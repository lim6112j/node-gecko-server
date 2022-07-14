export const GeckoQueries = {
    GetGeckos: `
SELECT *
FROM geckodb.geckos
`,
    GetGeckosById: `
SELECT
*
FROM geckodb.geckos
WHERE
id = ?
`,
    AddGecko: `
INSERT INTO geckodb.geckos (name, age, origin, color, desc, father, mother, thumbnail, images, ancestry)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
`,
    UpdateGeckoById: `
UPDATE geckodb.geckos
SET name = ?,
age =?
WHERE
id = ?
`,
    DeleteGeckoById: `
UPDATE geckodb.geckos
WHERE
id = ?
`
};
