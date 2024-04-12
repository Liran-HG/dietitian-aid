
ALTER TABLE ONLY "public"."patient_addresses" DROP CONSTRAINT "public_patient_addresses_patient_id_fkey";
ALTER TABLE ONLY "public"."patient_addresses" DROP COLUMN IF EXISTS "patient_id";


ALTER TABLE ONLY "public"."patients" ADD "addresses_id" bigint;
ALTER TABLE ONLY "public"."patients" ADD CONSTRAINT "patient_addresses_patient_id_fkey" FOREIGN KEY ("addresses_id") REFERENCES "public"."patient_addresses"("id");