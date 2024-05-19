-- AlterTable
ALTER TABLE `user` ADD COLUMN `employeerId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Employeer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_employeerId_fkey` FOREIGN KEY (`employeerId`) REFERENCES `Employeer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
