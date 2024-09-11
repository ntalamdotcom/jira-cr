require('dotenv').config();
const path = require('path');
const dotenv = require('dotenv');

// Determine the environment and load the corresponding .env file
const envFile = '.env.development';
dotenv.config({ path: path.resolve(process.cwd(), envFile) });
const requiredEnvVars: { [key: string]: (value: string | undefined) => boolean } = {
    CLOCKIFY_API_KEY: (value) => typeof value === 'string' && value.length > 0,
    ORGANIZATION_ID: (value) => typeof value === 'string' && value.length > 0,
    JIRA_ADMIN_API_KEY: (value) => typeof value === 'string' && value.length > 0,
    JIRA_EMAIL: (value) => typeof value === 'string' && value.length > 0,
    JIRA_API_TOKEN: (value) => typeof value === 'string' && value.length > 0,
    JIRA_API_VERSION: (value) => typeof value === 'string' && value.length > 0,
    JIRA_HOST: (value) => typeof value === 'string' && value.length > 0,
};
const invalidVars = Object.keys(requiredEnvVars).filter(
    (envVar) => !process.env[envVar] || !requiredEnvVars[envVar](process.env[envVar])
);
if (invalidVars.length > 0) {
    console.error(`Error: Invalid or missing environment variables: ${invalidVars.join(', ')}`);
    console.error(`Update validate-env.ts and .env file`);
    process.exit(1);
} else {
    console.log('All required environment variables are set and valid.');
}