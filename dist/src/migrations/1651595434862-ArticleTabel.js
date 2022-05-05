"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesTable1651394636945 = void 0;
class ArticlesTable1651394636945 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.query(`
            CREATE TABLE "article" (
                id uuid DEFAULT uuid_generate_v4() NOT NULL,
                "name" varchar NOT NULL,
                "createdAt" timestamp NOT NULL DEFAULT NOW(),
                "updatedAt" timestamp NOT NULL DEFAULT NOW()
                )`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE article`);
    }
}
exports.ArticlesTable1651394636945 = ArticlesTable1651394636945;
//# sourceMappingURL=1651595434862-ArticleTabel.js.map