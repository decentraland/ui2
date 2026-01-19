module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageProvider: "v8",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  fakeTimers: {
    enableGlobally: true,
  },
}
