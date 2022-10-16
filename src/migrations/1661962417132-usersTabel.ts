import { MigrationInterface, QueryRunner } from 'typeorm';

export class usersTabel1661962417132 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.query(`
                    CREATE TABLE "users" (
                        id uuid DEFAULT uuid_generate_v4() NOT NULL,
                        "name" varchar NOT NULL,
                        "email" varchar NOT NULL,
                        "password" varchar NOT NULL,
                        "gender" varchar NOT NULL,
                        "age" varchar NOT NULL,
                        "rol_id" INT NOT NULL,
                        "createdAt" timestamp NOT NULL DEFAULT NOW(),
                        "updatedAt" timestamp NOT NULL DEFAULT NOW()
                        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE users`);
  }
}
