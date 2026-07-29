import tsParser from "@typescript-eslint/parser";
export default [{ ignores: [".next/**", "dist/**", "node_modules/**"] }, { files: ["**/*.ts", "**/*.tsx"], languageOptions: { parser: tsParser, parserOptions: { ecmaFeatures: { jsx: true } } } }];
