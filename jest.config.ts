import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        '^@/lib/(.*)$': '<rootDir>/lib/$1',
        '^@/pages/(.*)$': '<rootDir>/pages/$1',
        '^@/services/(.*)$': '<rootDir>/services/$1',
    },
};
export default config;