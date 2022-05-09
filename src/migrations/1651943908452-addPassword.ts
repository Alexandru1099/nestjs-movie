import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addPassword1651943908452 implements MigrationInterface {
  name?: string;
  down(queryRunner: QueryRunner): Promise<any> {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async up(queryRunner: QueryRunner): Promise<void> {}
}
