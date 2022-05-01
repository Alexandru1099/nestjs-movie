import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersTable1651341944553 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" int NOT NULL AUTO_INCREMENT,
                "name" varchar NOT NULL,
                "email" varchar NOT NULL,
                "createdAt" timestamp NOT NULL DEFAULT NOW()
                "updatedAt" timestamp NOT NULL DEFAULT NOW()
                )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE user`);
    }
}
