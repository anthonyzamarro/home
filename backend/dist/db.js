import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
// --- dotenv setup first ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });
import { Pool } from "pg";
const sslConfig = process.env.ENV === "development" ? false : { rejectUnauthorized: false };
const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: sslConfig,
});
export default pool;
