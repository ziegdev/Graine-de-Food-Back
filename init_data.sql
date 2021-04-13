BEGIN;

INSERT INTO "user" ("id","email","password","last_name","first_name","delivery_address","invoice_address","delivery_postcode","invoice_postcode","delivery_city","invoice_city","status","points","role","vegan") VALUES
(1,'pipo@test.fr','1234','PIPO','PIPOPRENOM','5 rue Republique','6 rue République',11100,74000,'NARBONNE','VERSAILLES',true,1,'user',true);


INSERT INTO "promo"("id","code","start_date","end_date","pourcent")VALUES
(1,'pascher','2021-01-12','2021-04-15',30),
(2,'toujourscher','2021-01-12','2021-04-15',20);

INSERT INTO "order"( "id","start_subscribe","end_subscribe","amount","points","user_id","promo_id") VALUES
(1, '2021-04-13', '2021-05-13', 29,1,1,2);

COMMIT;