-- CreateTable
CREATE TABLE `User` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT false,
    `verifyToken` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tutor` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `avatar` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `position` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NOT NULL,
    `experience` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category_Class` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Class` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `tutorId` BIGINT NOT NULL,
    `categoryClassId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `My_Class` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `status` BOOLEAN NOT NULL,
    `progress` INTEGER NOT NULL,
    `totalModule` INTEGER NOT NULL,
    `totalTime` INTEGER NOT NULL,
    `userId` BIGINT NOT NULL,
    `classId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `totalPayment` INTEGER NOT NULL,
    `totalPrice` INTEGER NOT NULL,
    `userId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `price` INTEGER NOT NULL,
    `paymentId` BIGINT NOT NULL,
    `ClassId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Module` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('video', 'summary', 'quiz') NOT NULL DEFAULT 'video',
    `note` VARCHAR(191) NOT NULL,
    `number` INTEGER NOT NULL,
    `classId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Video` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `video_url` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `moduleId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Summary` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `moduleId` BIGINT NOT NULL,

    UNIQUE INDEX `Summary_moduleId_key`(`moduleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Quiz` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('pretest', 'quiz', 'final_test') NOT NULL,
    `moduleId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Quiz_Item` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `question` VARCHAR(191) NOT NULL,
    `quizId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Option_Quiz` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `isCorrect` BOOLEAN NOT NULL,
    `quizItemId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Answered_Quiz` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `userId` BIGINT NOT NULL,
    `optionQuizId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Class` ADD CONSTRAINT `Class_tutorId_fkey` FOREIGN KEY (`tutorId`) REFERENCES `Tutor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Class` ADD CONSTRAINT `Class_categoryClassId_fkey` FOREIGN KEY (`categoryClassId`) REFERENCES `Category_Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `My_Class` ADD CONSTRAINT `My_Class_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `My_Class` ADD CONSTRAINT `My_Class_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_paymentId_fkey` FOREIGN KEY (`paymentId`) REFERENCES `Payment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_ClassId_fkey` FOREIGN KEY (`ClassId`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Module` ADD CONSTRAINT `Module_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Video` ADD CONSTRAINT `Video_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Summary` ADD CONSTRAINT `Summary_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Quiz` ADD CONSTRAINT `Quiz_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Quiz_Item` ADD CONSTRAINT `Quiz_Item_quizId_fkey` FOREIGN KEY (`quizId`) REFERENCES `Quiz`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Option_Quiz` ADD CONSTRAINT `Option_Quiz_quizItemId_fkey` FOREIGN KEY (`quizItemId`) REFERENCES `Quiz_Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Answered_Quiz` ADD CONSTRAINT `Answered_Quiz_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Answered_Quiz` ADD CONSTRAINT `Answered_Quiz_optionQuizId_fkey` FOREIGN KEY (`optionQuizId`) REFERENCES `Option_Quiz`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
