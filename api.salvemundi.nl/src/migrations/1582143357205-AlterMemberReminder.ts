import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterMemberReminder1582143357205 implements MigrationInterface {
    name = 'AlterMemberReminder1582143357205'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `membership` ADD `reminderRenewal` datetime NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `membership` DROP COLUMN `reminderRenewal`", undefined);
    }

}
