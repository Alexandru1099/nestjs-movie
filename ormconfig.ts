import { ConnectionOptions } from "typeorm";

export default {
  type: "postgres",
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  entities: ["dist/**/*{.entity,.index}.js"],
  migrations: ["dist/src/migrations/*.js"],
  synchronize: false,
  logging: true,
  cli: {
    migrationsDir: "src/migrations",
  },
} as ConnectionOptions;
