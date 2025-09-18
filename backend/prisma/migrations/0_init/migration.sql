-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "public"."app_user" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255),
    "cognito_sub" VARCHAR(255),

    CONSTRAINT "app_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."food_item" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "date_bought" DATE,
    "expiration" DATE,
    "inventory_list_id" INTEGER NOT NULL,

    CONSTRAINT "food_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."inventory_list" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "inventory_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."meal" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "portions" INTEGER,
    "link" VARCHAR(255),
    "calories" INTEGER,
    "protein" INTEGER,
    "fat" INTEGER,
    "carbs" INTEGER,

    CONSTRAINT "meal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."meal_ingredient" (
    "id" SERIAL NOT NULL,
    "meal_id" INTEGER NOT NULL,
    "food_item_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "meal_ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."meal_plan" (
    "id" SERIAL NOT NULL,
    "planned_date" DATE NOT NULL,
    "meal_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "meal_plan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "app_user_username_key" ON "public"."app_user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "app_user_email_key" ON "public"."app_user"("email");

-- AddForeignKey
ALTER TABLE "public"."food_item" ADD CONSTRAINT "food_item_inventory_list_id_fkey" FOREIGN KEY ("inventory_list_id") REFERENCES "public"."inventory_list"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."inventory_list" ADD CONSTRAINT "inventory_list_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."app_user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."meal_ingredient" ADD CONSTRAINT "meal_ingredient_food_item_id_fkey" FOREIGN KEY ("food_item_id") REFERENCES "public"."food_item"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."meal_ingredient" ADD CONSTRAINT "meal_ingredient_meal_id_fkey" FOREIGN KEY ("meal_id") REFERENCES "public"."meal"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."meal_plan" ADD CONSTRAINT "meal_plan_meal_id_fkey" FOREIGN KEY ("meal_id") REFERENCES "public"."meal"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."meal_plan" ADD CONSTRAINT "meal_plan_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."app_user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

