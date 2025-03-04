import next from "@next/eslint-plugin-next";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  next.configs.recommended,
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }], // Warn only on console.log
    },
  },
];
