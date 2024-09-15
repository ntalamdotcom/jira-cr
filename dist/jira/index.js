"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIssueByKey = getIssueByKey;
exports.getLatestProjectIssue = getLatestProjectIssue;
exports.getProjectsList = getProjectsList;
const jira_client_1 = __importDefault(require("jira-client"));
function getIssueByKey(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const jira = createJiraClient();
            const projectKey = req.query.key;
            const issues = yield jira.searchJira(`project=${projectKey} ORDER BY updated DESC`, {
                maxResults: 1, // Only fetch the latest issue
                fields: ['summary', 'updated', 'status', 'assignee'],
            });
            res.status(200).json(issues);
        }
        catch (error) {
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
    });
}
function getLatestProjectIssue(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const jira = createJiraClient();
            const projectKey = "SCRUM";
            const issues = yield jira.searchJira(`project=${projectKey} ORDER BY updated DESC`, {
                maxResults: 1, // Only fetch the latest issue
                fields: ['summary', 'updated', 'status', 'assignee'],
            });
            res.status(200).json(issues);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch Jira projects' });
        }
    });
}
function getProjectsList(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const jira = createJiraClient();
            // console.log("process.env: ", process.env)
            var asdf = yield jira.listProjects();
            res.status(200).json(asdf);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch Jira projects' });
        }
    });
}
function createJiraClient() {
    return new jira_client_1.default({
        protocol: process.env.JIRA_PROTOCOL,
        host: process.env.JIRA_HOST,
        username: process.env.JIRA_EMAIL,
        password: process.env.JIRA_API_TOKEN,
        apiVersion: process.env.JIRA_API_VERSION,
        strictSSL: true
    });
}
//# sourceMappingURL=index.js.map