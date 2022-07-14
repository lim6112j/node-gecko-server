import { Request, RequestHandler, Response } from 'express';
import { IGetGeckoReq, IAddGeckoReq, IGecko } from './geckos.model';
import * as GeckoService from './geckos.service';
const TEAMS = [
    { id: 1, name: 'Real Madrid', league: 'La Liga' },
    { id: 2, name: 'Barcelona', league: 'La Liga' },
    { id: 3, name: 'Manchester United', league: 'Premier League' },
    { id: 4, name: 'Liverpool', league: 'Premier League' },
    { id: 5, name: 'Arsenal', league: 'Premier League' },
    { id: 6, name: 'Inter', league: 'Serie A' },
    { id: 7, name: 'Milan', league: 'Serie A' },
    { id: 8, name: 'Juventus', league: 'Serie A' },
];

export const getGeckos: RequestHandler = async (req: Request, res: Response) => {
    try {
        const geckos = await GeckoService.getGeckos();
        res.status(200).json({ geckos });
    } catch (error) {
        console.error("[geckos.controller][getGeckos][Error] ", typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'There was an erro when fethcing geckos'
        });
    }
    res.send(TEAMS);
};
//@ts-ignore
export const getGeckoById: RequestHandler = (req: IGetGeckoReq, res: Response) => {
    const gecko = TEAMS.find((gecko) => gecko.id === req.params.id);
    res.send(gecko);
};
export const addGecko: RequestHandler = (req: IAddGeckoReq, res: Response) => {
    const lastGeckoIndex = TEAMS.length - 1;
    const lastId = TEAMS[lastGeckoIndex].id;
    const id = lastId + 1;
    const newGecko: IGecko = {
        ...req.body,
        id,
    };
    //TEAMS.push(newGecko);
    res.send(newGecko);
};

// @ts-ignore
export const updateTeamById: RequestHandler = (req: IUpdateGeckoReq, res: Response) => {
    const currentTeam = TEAMS.find((team) => team.id === +req.params.id);
    //currentTeam.name = req.body.name || currentTeam.name;
    //currentTeam.league = req.body.league || currentTeam.league;

    res.send({ success: true });
};

/**
 * deletes a team
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const deleteTeamById: RequestHandler = (req: IDeleteGeckoReq, res: Response) => {
    const teamIndex = TEAMS.findIndex((team) => team.id === +req.params.id);
    TEAMS.splice(teamIndex, 1);

    res.send({ success: true });
};
