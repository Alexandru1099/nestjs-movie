import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class newUserTabel1651902590991 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'contact_attributes',
      new TableColumn({
        name: 'attribute_index',
        type: 'integer',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropColumn('contact_attributes', 'attribute_index');
  }
}
