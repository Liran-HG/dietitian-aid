ALTER TABLE "public"."patients" 
ADD gov_id VARCHAR(9);
ALTER TABLE "public"."patients" 
ADD CONSTRAINT unique_government_id UNIQUE (gov_id);