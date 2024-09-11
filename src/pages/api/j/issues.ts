import { NextApiRequest, NextApiResponse } from "next";

import getLatestProjectIssue from "@/lib/jira/issues";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    return await getLatestProjectIssue(req, res)
}
