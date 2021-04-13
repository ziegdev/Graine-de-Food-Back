BEGIN;

DROP TABLE IF EXISTS "user",
"promo",
"order";

CREATE TABLE IF NOT EXISTS "user" (
    "id" serial PRIMARY KEY,
    "email" varchar NOT NULL,
    "password" varchar NOT NULL,
    "last_name" varchar NOT NULL,
    "first_name" varchar NOT NULL,
    "delivery_address" varchar NOT NULL,
    "invoice_address" varchar NOT NULL,
    "delivery_postcode" integer NOT NULL,
    "invoice_postcode" integer NOT NULL,
    "delivery_city" varchar NOT NULL,
    "invoice_city" varchar NOT NULL,
    "status" boolean,
    "points" integer,
    "role" varchar NOT NULL,
    "vegan" boolean
);

CREATE TABLE IF NOT EXISTS "promo" (
    "id" serial PRIMARY KEY,
    "code" varchar NOT NULL,
    "start_date" date NOT NULL,
    "end_date" date NOT NULL,
    "pourcent" integer NOT NULL
);

CREATE TABLE IF NOT EXISTS "order" (
    "id" serial PRIMARY KEY,
    "start_subscribe" date NOT NULL,
    "end_subscribe" date NOT NULL,
    "amount" integer NOT NULL,
    "points" integer NOT NULL
);

COMMIT;