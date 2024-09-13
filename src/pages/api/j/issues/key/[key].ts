import { NextApiRequest, NextApiResponse } from "next";
import getIssueByKey from "@/lib/jira/issues/ByKey";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    return await getIssueByKey(req, res)
}
