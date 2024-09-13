import { NextApiRequest, NextApiResponse } from "next";
import JiraClient from 'jira-client';

export default async function getIssueByKey(req: NextApiRequest, res: NextApiResponse) {
    try {
        const jira = new JiraClient({
            protocol: process.env.JIRA_PROTOCOL,
            host: process.env.JIRA_HOST as string,
            username: process.env.JIRA_EMAIL,
            password: process.env.JIRA_API_TOKEN,
            apiVersion: process.env.JIRA_API_VERSION,
            strictSSL: true
        });

        const projectKey = req.query.key;
        const issues = await jira.searchJira(
            `project=${projectKey} ORDER BY updated DESC`,
            {
                maxResults: 1, // Only fetch the latest issue
                fields: ['summary', 'updated', 'status', 'assignee'],
            }
        );

        res.status(200).json(issues);

    } catch (error: any) {
        console.error("Full error object: ", error);
        let errorMessage = "An unknown error occurred";
        // Check for JiraClient error message
        if (error.errorMessages) {
            errorMessage = error.errorMessages.join(', ');
            console.error("JiraClient error message");
        }
        // Check if it's an HTTP error (e.g., from axios or fetch)
        else if (error.response && error.response.data && error.response.data.errorMessages) {
            errorMessage = error.response.data.errorMessages.join(', ');
            console.error("Data Response error message");
        }
        // Fallback to generic error message
        else if (error.message) {
            errorMessage = error.message;
            console.error("Generic error message");
        }

        res.status(500).json({
            error: 'Failed to fetch Jira issues.',
            message: errorMessage,
        });
    }
}
