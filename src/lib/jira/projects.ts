import { NextApiRequest, NextApiResponse } from "next";

import JiraClient from 'jira-client';

export default async function getProjectsList(req: NextApiRequest, res: NextApiResponse) {
    try {
        const jira = new JiraClient({
            protocol: process.env.JIRA_PROTOCOL,
            host: process.env.JIRA_HOST as string,
            username: process.env.JIRA_EMAIL,
            password: process.env.JIRA_API_TOKEN,
            apiVersion: process.env.JIRA_API_VERSION,
            strictSSL: true
        });
        // console.log("process.env: ", process.env)
        var asdf = await jira.listProjects()
        res.status(200).json(asdf);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to fetch Jira projects' });
    }
}