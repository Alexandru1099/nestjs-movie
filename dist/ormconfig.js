"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: 'postgres',
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: parseInt(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USERNAME,
    entities: ['dist/**/*{.entity,.index}.js'],
    migrations: ['dist/src/migrations/*.js'],
    synchronize: false,
    logging: true,
    cli: {
        migrationsDir: 'src/migrations',
    },
};
//# sourceMappingURL=ormconfig.js.map