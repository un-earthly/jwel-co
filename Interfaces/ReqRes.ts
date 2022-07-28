import { NextApiRequest, NextApiResponse, } from "next";

export interface ReqRes {
    req: NextApiRequest,
    res: NextApiResponse
}