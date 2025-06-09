-- CreateTable
CREATE TABLE `Users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_username` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `user_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_updatedAt` DATETIME(3) NOT NULL,
    `user_description` VARCHAR(191) NULL,
    `user_website` VARCHAR(191) NULL,
    `user_address` VARCHAR(191) NULL,
    `user_profile` VARCHAR(191) NULL,
    `user_role` VARCHAR(191) NOT NULL DEFAULT 'user',
    `user_status` VARCHAR(191) NOT NULL DEFAULT 'unbanned',

    UNIQUE INDEX `Users_user_email_key`(`user_email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Posts` (
    `post_id` INTEGER NOT NULL AUTO_INCREMENT,
    `post_title` VARCHAR(191) NOT NULL,
    `post_description` VARCHAR(191) NOT NULL,
    `post_content` VARCHAR(191) NOT NULL,
    `post_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `post_updatedAt` DATETIME(3) NOT NULL,
    `post_category` VARCHAR(191) NOT NULL,
    `post_view` INTEGER NOT NULL DEFAULT 0,
    `post_status` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`post_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Posts` ADD CONSTRAINT `Posts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
