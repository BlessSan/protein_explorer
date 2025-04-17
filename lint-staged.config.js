// Root lint-staged.config.js
module.exports = {
  "frontend/**/*.{ts,tsx}": [
    "cd frontend && eslint --fix",
    "cd frontend && prettier --write",
    () => "cd frontend && tsc-files --noEmit",
  ],
  "backend/**/*.ts": [
    "cd backend && eslint --fix",
    "cd backend && prettier --write",
    () => "cd backend && tsc-files --noEmit",
  ],
  "{frontend,backend}/**/*.{json,css,md}": ["prettier --write"],
};
