# Security remediation — 2026-10-16

Both npm projects now audit clean. The frontend uses Vite and Vitest in place of the vulnerable react-scripts dependency tree; `npm start` still serves port 3000, `npm run build` still writes build/. The backend uses a maintained Axios release and Node's built-in watch mode instead of nodemon. Removed committed node_modules.

Use Node >=22.12.0 and run `npm ci` separately in backend/backend and frontend/frontend. Provide TIMEZONEDB_API_KEY in the backend process environment (the .env.example is documentation; the application does not auto-load .env). Start each project with `npm run dev` (backend) and `npm start` (frontend).

The old hardcoded TimeZoneDB credential was removed. Revoke/rotate that credential with the provider; it remains in Git history. The upstream request now uses HTTPS, validated coordinates, a timeout, disabled redirects, and sanitized failure responses.

Validation: TypeScript compilation; backend invalid-input/missing-configuration/success/upstream-failure checks; production frontend build; form submission test; zero npm vulnerabilities in both projects. External TimeZoneDB account integration was not invoked.
