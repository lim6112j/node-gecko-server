import { Request } from 'express';
export interface IGecko {
    id: number;
    name: string;
    age: number;
    origin: string;
    color: string;
    desc: string;
    father: number;
    mother: number;
    thumbnail: string;
    images: string;
    ancestry: string;
}
export interface IGetGeckoReq extends Request<{ id: IGecko['id'] }> { }
export interface IAddGeckoReq extends Request { }
export interface IUpdateGeckoReq extends Request<{ id: IGecko['id'] }, any, IGecko> { }
export interface IDeleteGeckoReq extends Request<{ id: IGecko['id'] }> { }
