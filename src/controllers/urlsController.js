import { connection } from '../database.js';
import uniqid from 'uniqid';

export async function shortenUrl(req, res) {
    const { url } = req.body;
    const { user } = res.locals;
    const shortUrl = uniqid.time();

    try {
        await connection.query(`INSERT INTO "shortUrls" ("userId", url, "shortUrl") VALUES ($1, $2, $3)`, [
            user.id, url, shortUrl
        ]);

        res.status(201).send({ shortUrl });
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function getUrl(req, res) {

}

export async function deleteUrl(req, res) {

}

