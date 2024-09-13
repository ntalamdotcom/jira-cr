import { NextApiRequest, NextApiResponse } from "next";
export declare function getIssueByKey(req: NextApiRequest, res: NextApiResponse): Promise<void>;
export declare function getLatestProjectIssue(req: NextApiRequest, res: NextApiResponse): Promise<void>;
export declare function getProjectsList(req: NextApiRequest, res: NextApiResponse): Promise<void>;
