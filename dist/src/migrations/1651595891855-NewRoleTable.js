"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewRoleTable1651595891855 = void 0;
class NewRoleTable1651595891855 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.query(`
                CREATE TABLE "role" (
                    id uuid DEFAULT uuid_generate_v4() NOT NULL,
                    "name" varchar NOT NULL,
                    "createdAt" timestamp NOT NULL DEFAULT NOW(),
                    "updatedAt" timestamp NOT NULL DEFAULT NOW()
                    )`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE role`);
    }
}
exports.NewRoleTable1651595891855 = NewRoleTable1651595891855;
//# sourceMappingURL=1651595891855-NewRoleTable.js.map