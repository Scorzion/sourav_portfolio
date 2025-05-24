import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend Next.js core-web-vitals config and add custom rules
export default [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Note: fixed typo in rule name
      "@typescript-eslint/quotes": "off",
      "quotes": "off",
      "no-useless-escape": "off"
    }
  }
];
