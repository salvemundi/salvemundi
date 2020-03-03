import {MigrationInterface, QueryRunner} from "typeorm";

export class EventsFix1583236484702 implements MigrationInterface {
    name = 'EventsFix1583236484702'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_a009c5a137b87f7bb1cc24f7d0` ON `event`", undefined);
        await queryRunner.query("ALTER TABLE `form_entry_field` ADD `entryId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `form_entry` ADD `email` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `form` ADD `requireEmail` tinyint NOT NULL DEFAULT 1", undefined);
        await queryRunner.query("ALTER TABLE `event` ADD `extraMailInformation` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` ADD `createdById` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `form_field` CHANGE `description` `description` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `form_field` CHANGE `label` `label` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `form_field` CHANGE `placeholder` `placeholder` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `form_field` CHANGE `type` `type` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `form_field` CHANGE `pattern` `pattern` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `form_field` CHANGE `autocomplete` `autocomplete` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `form_field` CHANGE `required` `required` tinyint NOT NULL DEFAULT 0", undefined);
        await queryRunner.query("ALTER TABLE `event` CHANGE `startDate` `startDate` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` CHANGE `endDate` `endDate` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` CHANGE `memberOnly` `memberOnly` tinyint NULL DEFAULT 1", undefined);
        await queryRunner.query("ALTER TABLE `event` CHANGE `paymentAfter` `paymentAfter` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` CHANGE `active` `active` tinyint NOT NULL DEFAULT 0", undefined);
        await queryRunner.query("ALTER TABLE `event` CHANGE `signupBefore` `signupBefore` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` CHANGE `memberPrice` `memberPrice` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` CHANGE `notMemberPrice` `notMemberPrice` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `form_entry_field` ADD CONSTRAINT `FK_06be75268567bbb08029a268399` FOREIGN KEY (`entryId`) REFERENCES `form_entry`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `event` ADD CONSTRAINT `FK_1d5a6b5f38273d74f192ae552a6` FOREIGN KEY (`createdById`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `event` DROP FOREIGN KEY `FK_1d5a6b5f38273d74f192ae552a6`", undefined);
        await queryRunner.query("ALTER TABLE `form_entry_field` DROP FOREIGN KEY `FK_06be75268567bbb08029a268399`", undefined);
        await queryRunner.query("ALTER TABLE `event` CHANGE `notMemberPrice` `notMemberPrice` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` CHANGE `memberPrice` `memberPrice` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` CHANGE `signupBefore` `signupBefore` datetime NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` CHANGE `active` `active` tinyint NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` CHANGE `paymentAfter` `paymentAfter` datetime NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` CHANGE `memberOnly` `memberOnly` tinyint NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` CHANGE `endDate` `endDate` datetime NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` CHANGE `startDate` `startDate` datetime NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `form_field` CHANGE `required` `required` tinyint NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `form_field` CHANGE `autocomplete` `autocomplete` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `form_field` CHANGE `pattern` `pattern` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `form_field` CHANGE `type` `type` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `form_field` CHANGE `placeholder` `placeholder` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `form_field` CHANGE `label` `label` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `form_field` CHANGE `description` `description` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` DROP COLUMN `createdById`", undefined);
        await queryRunner.query("ALTER TABLE `event` DROP COLUMN `extraMailInformation`", undefined);
        await queryRunner.query("ALTER TABLE `form` DROP COLUMN `requireEmail`", undefined);
        await queryRunner.query("ALTER TABLE `form_entry` DROP COLUMN `email`", undefined);
        await queryRunner.query("ALTER TABLE `form_entry_field` DROP COLUMN `entryId`", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_a009c5a137b87f7bb1cc24f7d0` ON `event` (`formId`)", undefined);
    }

}
