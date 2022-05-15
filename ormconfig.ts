import { ConnectionOptions } from 'typeorm';

export default {
  type: 'postgres',
  database: process.env.DATABASE_NAME || 'development',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  port: parseInt(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USERNAME || 'postgres',
  entities: ['dist/**/*{.entity,.index}.js'],
  migrations: ['dist/src/migrations/*.js'],
  synchronize: false,
  logging: true,
  cli: {
    migrationsDir: 'src/migrations',
  },
} as ConnectionOptions;
