import { MigrationInterface, QueryRunner } from 'typeorm';

export class movieTable1661961539905 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.query(`
                CREATE TABLE "movie" (
                    id uuid DEFAULT uuid_generate_v4() NOT NULL,
                    "title" varchar NOT NULL,
                    "context" varchar NOT NULL,
                    "starring" varchar NOT NULL,
                    "release" varchar NOT NULL,
                    "content" varchar NOT NULL,
                    "runtime" varchar NOT NULL,
                    "photo" varchar NOT NULL,
                    "user_id" varchar NOT NULL,
                    "createdAt" timestamp NOT NULL DEFAULT NOW(),
                    "updatedAt" timestamp NOT NULL DEFAULT NOW()
                    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE movie`);
  }
}
