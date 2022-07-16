import { Request, RequestHandler, Response } from 'express';
import { IGetGeckoReq, IAddGeckoReq, IGecko } from './geckos.model';
import * as GeckoService from './geckos.service';

export const getGeckos: RequestHandler = async (req: Request, res: Response) => {
    try {
        const geckos = await GeckoService.getGeckos();
        res.status(200).json( geckos );
    } catch (error) {
        console.error("[geckos.controller][getGeckos][Error] ", typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'There was an erro when fethcing geckos'
        });
    }
};
//@ts-ignore
export const getGeckoById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const gecko = await GeckoService.getGeckoById(+req.params.id);
        res.status(200).json( ...gecko );
    } catch (error) {
        console.error('[geckos.controller][getGeckoById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'There was an error when fetching gecko'
        });
    }
};
export const addGecko: RequestHandler = async (req: IAddGeckoReq, res: Response) => {
    try {
        const result = await GeckoService.insertGecko(req.body);

        res.status(200).json({
            result
        });
    } catch (error) {
        console.error('[geckos.controller][addGecko][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'There was an error when adding new gecko'
        });
    }
};

// @ts-ignore
export const updateGeckoById: RequestHandler = async (req: IUpdateGeckoReq, res: Response) => {
    try {
        const result = await GeckoService.updateGecko({ ...req.body, id: req.params.id });

        res.status(200).json({
            result
        });
    } catch (error) {
        console.error('[geckos.controller][updateGeckoById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'There was an error when updating gecko'
        });
    }
};

/**
 * deletes a gecko
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const deleteGeckoById: RequestHandler = async (req: IDeleteGeckoReq, res: Response) => {
    try {
        const result = await GeckoService.deleteGecko(req.params.id);

        res.status(200).json({
            result
        });
    } catch (error) {
        console.error('[geckos.controller][deleteGeckoById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'There was an error when deleting gecko'
        });
    }
};
