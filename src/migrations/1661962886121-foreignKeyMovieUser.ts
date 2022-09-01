import { MigrationInterface, QueryRunner } from 'typeorm';

export class foreignKeyMovieUser1661962886121 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                          ALTER TABLE "movie"
                          ADD CONSTRAINT "fk_movies_user" FOREIGN KEY (user_id) REFERENCES "users" (id);
                                           `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP CONSTRAINT fk_movie_user`);
  }
}
