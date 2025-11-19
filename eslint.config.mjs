import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser } 
  },
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      // React 17+ doesn't require React import for JSX
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      // Allow unused vars that start with uppercase (React components)
      "no-unused-vars": ["error", { 
        "varsIgnorePattern": "^[A-Z]", 
        "argsIgnorePattern": "^_" 
      }]
    }
  },
  // Jest globals for test files
  {
    files: ["**/*.test.{js,jsx}", "**/__tests__/**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node
      }
    },
    rules: {
      // Allow unused vars in test files (components are imported for testing)
      "no-unused-vars": ["error", { 
        "varsIgnorePattern": "^[A-Z]", 
        "argsIgnorePattern": "^_" 
      }]
    }
  }
]);
