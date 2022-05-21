import { MigrationInterface, QueryRunner } from 'typeorm';

export class addContextArticle1653162703579 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.query(`
                                        ALTER TABLE "article" 
                                        ADD COLUMN "context" VARCHAR 
                                     `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE article`);
  }
}
