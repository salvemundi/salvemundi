import {MigrationInterface, QueryRunner} from "typeorm";

export class EventsFix21583238483137 implements MigrationInterface {
    name = 'EventsFix21583238483137'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `event` DROP COLUMN `extraMailInformation`", undefined);
        await queryRunner.query("ALTER TABLE `event` ADD `extraMailInformation` longtext NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `event` DROP COLUMN `extraMailInformation`", undefined);
        await queryRunner.query("ALTER TABLE `event` ADD `extraMailInformation` varchar(255) NULL", undefined);
    }

}
