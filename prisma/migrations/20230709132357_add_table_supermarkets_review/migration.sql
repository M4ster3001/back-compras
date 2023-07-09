-- CreateTable
CREATE TABLE "supermarket_review" (
    "id" TEXT NOT NULL,
    "oldName" TEXT NOT NULL,
    "newName" TEXT NOT NULL,
    "supermarketId" TEXT NOT NULL,
    "reviewed" BOOLEAN NOT NULL,

    CONSTRAINT "supermarket_review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "supermarket_review" ADD CONSTRAINT "supermarket_review_supermarketId_fkey" FOREIGN KEY ("supermarketId") REFERENCES "supermarkets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
