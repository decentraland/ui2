const preset = "ts-jest"
const testEnvironment = "node"
const coverageProvider = "v8"
const fakeTimers = {
  enableGlobally: true,
}
const testMatch = ["**/src/**/*.(test|spec).(ts|tsx|js|jsx)"]
const testPathIgnorePatterns = ["/node_modules/", "/dist/"]

export {
  preset,
  testEnvironment,
  coverageProvider,
  fakeTimers,
  testMatch,
  testPathIgnorePatterns,
}
