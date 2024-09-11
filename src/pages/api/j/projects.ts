import { NextApiRequest, NextApiResponse } from "next";

import getProjectsList from "@/lib/jira/projects";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    return await getProjectsList(req, res)
}
