module.exports = {
    verbose: true,
    testTimeout: 30000,
    testMatch: [
        '<rootDir>/src/**/*.test.ts',
        '<rootDir>/src/**/*.test.tsx'
    ], // looks for your test
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    transform: {
        '^.+\\.(tsx|ts)}?$': 'babel-jest'
    },
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect'
    ],
    setupFiles: ['./src/tests/globalSetup.ts'],
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules'
    }
};
