ALTER TABLE ONLY "public"."patients" 
ADD reference_physique_id bigint;
ALTER TABLE ONLY "public"."patients" 
ADD CONSTRAINT "public_patient_reference_physique_fkey" FOREIGN KEY ("reference_physique_id") REFERENCES "public"."patient_physique"("id");