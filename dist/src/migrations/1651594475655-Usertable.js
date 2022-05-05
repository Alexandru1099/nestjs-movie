"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersTable1651341944553 = void 0;
class UsersTable1651341944553 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.query(`
            CREATE TABLE "user" (
                id uuid DEFAULT uuid_generate_v4() NOT NULL,
                "name" varchar NOT NULL,
                "email" varchar NOT NULL,
                "createdAt" timestamp NOT NULL DEFAULT NOW(),
                "updatedAt" timestamp NOT NULL DEFAULT NOW()
                 )`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE user`);
    }
}
exports.UsersTable1651341944553 = UsersTable1651341944553;
//# sourceMappingURL=1651594475655-Usertable.js.map