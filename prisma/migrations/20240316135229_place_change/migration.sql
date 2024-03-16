/*
  Warnings:

  - You are about to drop the column `address` on the `places` table. All the data in the column will be lost.
  - Added the required column `district` to the `places` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `places` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `places` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "places" DROP COLUMN "address",
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL;
