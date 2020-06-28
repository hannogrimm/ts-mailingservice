module.exports = {
  verbose: true,
  coveragePathIgnorePatterns: ["./node_modules"],
  setupFiles: ["./src/testingSetup.ts"],
  moduleFileExtensions: ["js", "ts"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  }
};
