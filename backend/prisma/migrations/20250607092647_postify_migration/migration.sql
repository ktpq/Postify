/*
  Warnings:

  - Added the required column `user_password` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `user_password` VARCHAR(191) NOT NULL;
