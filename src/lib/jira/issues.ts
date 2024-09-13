import { NextApiRequest, NextApiResponse } from "next";

import JiraClient from 'jira-client';

export default async function getLatestProjectIssue(req: NextApiRequest, res: NextApiResponse) {
    try {
        const jira = new JiraClient({
            protocol: process.env.JIRA_PROTOCOL,
            host: process.env.JIRA_HOST as string,
            username: process.env.JIRA_EMAIL,
            password: process.env.JIRA_API_TOKEN,
            apiVersion: process.env.JIRA_API_VERSION,
            strictSSL: true
        });
        const projectKey = "SCRUM"
        const issues = await jira.searchJira(
            `project=${projectKey} ORDER BY updated DESC`,
            {
                maxResults: 1, // Only fetch the latest issue
                fields: ['summary', 'updated', 'status', 'assignee'],
            }
        );
        res.status(200).json(issues);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Jira projects' });
    }
}