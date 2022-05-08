import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addPassword1651943908452 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\``);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABEL\`user\`DROP COLUMN\`password\``);
  }
}
