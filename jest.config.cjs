module.exports = {
  verbose: true,
  coveragePathIgnorePatterns: ["./node_modules"],
  collectCoverageFrom: ["**/*.spec.js"],
  setupFiles: ["./src/testingSetup.ts"],
  moduleFileExtensions: ["js", "ts"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  }
};
