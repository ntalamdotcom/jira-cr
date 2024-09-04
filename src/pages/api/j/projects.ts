import { NextApiRequest, NextApiResponse } from "next";

import getProjectsList from "@/lib/jira/projects";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    return getProjectsList(req, res)
}
