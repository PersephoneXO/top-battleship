# setup-template
My Setup Code Template

Next functions to run after starting from this template:

ESLint:
npm install eslint

(If I need a ESLint config file):
npx eslint --init


---

Prettier:
npm install prettier -D --save-exact


---


eslint-config-prettier:
(necessary to avoid errors while using both)

1. Install eslint-config-prettier:
-
npm install --save-dev eslint-config-prettier
-

2. Add eslint-config-prettier to your ESLint configuration – either to eslintrc or to eslint.config.js (flat config).

a) Add eslint-config-prettier to your ESLint configuration – either to eslintrc or to eslint.config.js (flat config).
-
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
-

b) eslint.config.js (flat config): Import eslint-config-prettier, and put it in the configuration array – after other configs that you want to override.
-
import someConfig from "some-other-config-you-use";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  someConfig,
  eslintConfigPrettier,
];
-


3. Finally, run the CLI helper tool to find problems in the "rules" sections of your config.

CLI helper:
(run it with this command)
-
npx eslint-config-prettier path/to/main.js
-

Exit codes:
0: No problems found.
1: Unexpected error.
2: Conflicting rules found.
