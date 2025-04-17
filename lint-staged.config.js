// Root lint-staged.config.js
module.exports = {
  "frontend/**/*.{ts,tsx}": [
    "npx eslint --fix",
    "npx prettier --write",
    () => "npx tsc-files --noEmit",
  ],
  "backend/**/*.ts": [
    "npx eslint --fix",
    "npx prettier --write",
    () => "npx tsc-files --noEmit",
  ],
  "{frontend,backend}/**/*.{json,css,md}": ["npx prettier --write"],
};
