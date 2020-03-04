import {MigrationInterface, QueryRunner} from "typeorm";

export class FormEntities1582113175189 implements MigrationInterface {
    name = 'FormEntities1582113175189'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `form_field` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `label` varchar(255) NOT NULL, `placeholder` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, `pattern` varchar(255) NOT NULL, `autocomplete` varchar(255) NOT NULL, `required` tinyint NOT NULL, `formId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `form_entry_field` (`id` int NOT NULL AUTO_INCREMENT, `value` varchar(255) NOT NULL, `fieldId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `form_entry` (`id` int NOT NULL AUTO_INCREMENT, `cancelled` tinyint NOT NULL DEFAULT 0, `userId` int NULL, `formId` int NULL, `transactionId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `form` (`id` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `event` ADD `paymentAfter` datetime NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` ADD `active` tinyint NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` ADD `formId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `event` ADD UNIQUE INDEX `IDX_a009c5a137b87f7bb1cc24f7d0` (`formId`)", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_a009c5a137b87f7bb1cc24f7d0` ON `event` (`formId`)", undefined);
        await queryRunner.query("ALTER TABLE `form_field` ADD CONSTRAINT `FK_2d83d8a334dd66445db13f92b77` FOREIGN KEY (`formId`) REFERENCES `form`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `form_entry_field` ADD CONSTRAINT `FK_8b670d2f595196d8f9dff4add39` FOREIGN KEY (`fieldId`) REFERENCES `form_field`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `form_entry` ADD CONSTRAINT `FK_b30c50753bceac7494660702718` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `form_entry` ADD CONSTRAINT `FK_c3dfedb7e2e684bd22123f1914e` FOREIGN KEY (`formId`) REFERENCES `form`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `form_entry` ADD CONSTRAINT `FK_5498e62df2dd18b4a56412165db` FOREIGN KEY (`transactionId`) REFERENCES `transaction`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `event` ADD CONSTRAINT `FK_a009c5a137b87f7bb1cc24f7d08` FOREIGN KEY (`formId`) REFERENCES `form`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `event` DROP FOREIGN KEY `FK_1d5a6b5f38273d74f192ae552a6`")
        await queryRunner.query("ALTER TABLE `event` DROP COLUMN `createdById`, DROP INDEX `FK_1d5a6b5f38273d74f192ae552a6`")
        await queryRunner.query("DROP TABLE `event_signup`", undefined);

        
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `event_signup` (`id` int NOT NULL AUTO_INCREMENT, `cancelled` tinyint NOT NULL DEFAULT 0, `userId` int NULL, `eventId` int NULL, `transactionId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `event` ADD CONSTRAINT `FK_1d5a6b5f38273d74f192ae552a6` FOREIGN KEY (`createdById`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `form_entry` DROP FOREIGN KEY `FK_5498e62df2dd18b4a56412165db`", undefined);
        await queryRunner.query("ALTER TABLE `form_entry` DROP FOREIGN KEY `FK_c3dfedb7e2e684bd22123f1914e`", undefined);
        await queryRunner.query("ALTER TABLE `form_entry` DROP FOREIGN KEY `FK_b30c50753bceac7494660702718`", undefined);
        await queryRunner.query("ALTER TABLE `form_entry_field` DROP FOREIGN KEY `FK_8b670d2f595196d8f9dff4add39`", undefined);
        await queryRunner.query("ALTER TABLE `form_field` DROP FOREIGN KEY `FK_2d83d8a334dd66445db13f92b77`", undefined);
        await queryRunner.query("DROP INDEX `REL_a009c5a137b87f7bb1cc24f7d0` ON `event`", undefined);
        await queryRunner.query("ALTER TABLE `event` DROP INDEX `IDX_a009c5a137b87f7bb1cc24f7d0`", undefined);
        await queryRunner.query("ALTER TABLE `event` DROP COLUMN `formId`", undefined);
        await queryRunner.query("ALTER TABLE `event` DROP COLUMN `active`", undefined);
        await queryRunner.query("ALTER TABLE `event` DROP COLUMN `paymentAfter`", undefined);
        await queryRunner.query("DROP TABLE `form`", undefined);
        await queryRunner.query("DROP TABLE `form_entry`", undefined);
        await queryRunner.query("DROP TABLE `form_entry_field`", undefined);
        await queryRunner.query("DROP TABLE `form_field`", undefined);
    }

}
