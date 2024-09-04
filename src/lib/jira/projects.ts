import { NextApiRequest, NextApiResponse } from "next";

import JiraClient from 'jira-client';

export default async function getProjectsList(req: NextApiRequest, res: NextApiResponse) {
    try {
        const jira = new JiraClient({
            // protocol: 'https',
            host: process.env.JIRA_HOST as string,
            username: process.env.JIRA_EMAIL,
            password: process.env.JIRA_API_TOKEN,
            apiVersion: process.env.JIRA_API_VERSION,
            strictSSL: true
        });
        var asdf = await jira.listProjects()
        // console.log(asdf)
        res.status(200).json(asdf);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Jira projects' });
    }
}
