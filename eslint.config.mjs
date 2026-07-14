import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
	...nextVitals,
	globalIgnores([".next/**", "tina/__generated__/**", "public/admin/**"]),
]);
