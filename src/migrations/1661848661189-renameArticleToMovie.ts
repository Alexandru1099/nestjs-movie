import {MigrationInterface, QueryRunner} from "typeorm";

export class renameArticleToMovie1661848661189 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE "article"
        RENAME TO "movie";
                                                 `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(`DROP TABLE users`);
  }
}
