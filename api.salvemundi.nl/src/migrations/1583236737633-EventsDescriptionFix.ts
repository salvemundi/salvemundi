import {MigrationInterface, QueryRunner} from "typeorm";

export class EventsDescriptionFix1583236737633 implements MigrationInterface {
    name = 'EventsDescriptionFix1583236737633'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `event` DROP COLUMN `description`", undefined);
        await queryRunner.query("ALTER TABLE `event` ADD `description` longtext NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `event` DROP COLUMN `description`", undefined);
        await queryRunner.query("ALTER TABLE `event` ADD `description` varchar(255) NOT NULL", undefined);
    }

}
