import { getProjectsList } from "@/lib/jira";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    return await getProjectsList(req, res)
}
