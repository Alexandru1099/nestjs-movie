import { MigrationInterface, QueryRunner } from "typeorm";

export class RolesTable1651347996282 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "role" (
                "id" int NOT NULL AUTO_INCREMENT,
                "name" varchar NOT NULL,
                "createdAt" timestamp NOT NULL DEFAULT NOW()
                "updatedAt" timestamp NOT NULL DEFAULT NOW()
                "deletedAt" timestamp NOT NULL DEFAULT NOW()
                )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE role`);
    }
}
