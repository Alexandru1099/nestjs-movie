import { MigrationInterface, QueryRunner } from 'typeorm';

export class addTitleInArticle1653162650273 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.query(`
                                    ALTER TABLE "article" 
                                    ADD COLUMN "title" VARCHAR 
                                 `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE article`);
  }
}
