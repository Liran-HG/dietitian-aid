-- Edit secret_seed.sql and add a device record for your test device. Example:
-- INSERT INTO "public"."device" ("id", "created_at", "factory_name", "pretty_name", "data", "active") 
-- VALUES ('10', '2022-11-26T00:41:13.000Z', 'rd545', 'D-Tanita Scale RD 545', '{
--     "header": {
--         "Accept": "/",
--         "Authorization": "Basic Og==",
--         "User-Agent": "okhttp/4.4.0",
--         "Api-Key": "API KEY",
--         "Application-Authorization": "Bearer AUTH"
--     }
-- }', 'true');


-- The device ID you added in secret_seed.sql
DO $$
DECLARE TEST_DEVICE_ID INTEGER := 10;

BEGIN
INSERT INTO "public"."patients" ("id","gov_id", "first_name", "last_name", "eng_name", "gender", "type", "date_of_birth") VALUES 
('1000','200699263', 'ישראל', 'גבירול', 'Israel_Gebirul', 'Male', '1', '1998-07-04T00:41:13.000Z'), 
('1001','050012343', 'שלמה', 'ארצי', 'Shlomo_Artzi', 'Male', '1', '1949-11-26T00:41:13.000Z'), 
('1002','999694540', 'רביץ', 'יהודית', 'Yehudit_Ravitz', 'Female', '2', '1956-12-29T00:41:13.000Z');

INSERT INTO "public"."meetings" ("patient_id","id", "start_time", "end_time", "active", "location") VALUES 
('1001','20001', '2022-11-26T00:41:13.000Z', '2022-11-26T01:41:13.000Z','false', 'ClientHouse'),
('1001','20002', '2022-04-10T14:41:13.000Z', '2022-04-10T15:41:13.000Z','false', 'FreelanceOffice'),
('1001','20003', '2023-11-26T11:54:13.000Z', '2023-11-26T12:22:00.000Z','false', 'Office'),
('1002','20004', '2022-01-26T10:33:13.000Z', '2022-01-26T11:12:00.000Z','false', 'Office'),
('1000','20005', '2022-10-22T07:50:13.000Z', '2022-10-22T08:15:00.000Z','true', 'Office');

INSERT INTO "public"."weighing" ("id","patient_id", "meeting_id", "device_id","data", "external_id") VALUES ('300000','1001', '20003',TEST_DEVICE_ID, '
   {
      "id":0,
      "externalId":"4bfb4faf-d61e-49ea-8eb8-8a41d19b41bf",
      "datetime":1711241607,
      "userProfileId":1587872,
      "availableDeviceAbbrv":"rd545",
      "number":0,
      "measurementEntries":[
         {
            "id":0,
            "externalId":"3fae3530-9c57-4135-a56f-501c9075036e",
            "value":87.95,
            "indicatorAbbrv":"weight",
            "measurementsBodyParts":[
               
            ]
         },
         {
            "id":0,
            "externalId":"5081acd6-6b0f-4624-8c41-b21b225ec390",
            "value":27.1,
            "indicatorAbbrv":"bmi",
            "measurementsBodyParts":[
               
            ]
         },
         {
            "id":0,
            "externalId":"0e847d7c-7f5f-4583-91fa-365720eee109",
            "value":24.7,
            "indicatorAbbrv":"body_fat",
            "measurementsBodyParts":[
               {
                  "id":0,
                  "externalId":"0cca6049-9c1b-42fc-a9e4-c6363375d8c6",
                  "value":22.8,
                  "judgement":2,
                  "bodyPartAbbrv":"left_arm"
               },
               {
                  "id":0,
                  "externalId":"f0af9114-d9f4-4181-b2e4-1ba8ba3d6aea",
                  "value":22.3,
                  "judgement":2,
                  "bodyPartAbbrv":"right_arm"
               },
               {
                  "id":0,
                  "externalId":"f2c94b3d-e020-4f86-ac7a-aee54f40f52e",
                  "value":20.3,
                  "judgement":2,
                  "bodyPartAbbrv":"left_leg"
               },
               {
                  "id":0,
                  "externalId":"c76e9661-1b77-404f-a6c6-43d73c7216cb",
                  "value":13.9,
                  "judgement":1,
                  "bodyPartAbbrv":"right_leg"
               },
               {
                  "id":0,
                  "externalId":"f9785bba-aaee-48e9-9a3d-68359c4a28fa",
                  "value":29.5,
                  "judgement":2,
                  "bodyPartAbbrv":"trunk"
               }
            ]
         },
         {
            "id":0,
            "externalId":"9b765d5e-18f3-4bc8-8115-3ecfdd4900cf",
            "value":1952.0,
            "indicatorAbbrv":"bmr",
            "measurementsBodyParts":[
               
            ]
         },
         {
            "id":0,
            "externalId":"6bf27fcc-5796-463c-a98c-735cb9535732",
            "value":55.7,
            "indicatorAbbrv":"body_water",
            "measurementsBodyParts":[
               
            ]
         },
         {
            "id":0,
            "externalId":"06daf1e9-3534-4461-903d-5f96394223a4",
            "value":62.95,
            "indicatorAbbrv":"muscle_mass",
            "measurementsBodyParts":[
               {
                  "id":0,
                  "externalId":"7d7af7cc-4682-460d-ada3-d43361a950d0",
                  "value":3.7,
                  "judgement":2,
                  "bodyPartAbbrv":"left_arm"
               },
               {
                  "id":0,
                  "externalId":"95e82871-8e12-45e2-8cb1-13bbfb113072",
                  "value":3.6,
                  "judgement":2,
                  "bodyPartAbbrv":"right_arm"
               },
               {
                  "id":0,
                  "externalId":"1fd1e085-d564-4e8c-89e0-0a3edef7e678",
                  "value":10.8,
                  "judgement":2,
                  "bodyPartAbbrv":"left_leg"
               },
               {
                  "id":0,
                  "externalId":"8b93fcb2-5511-42a6-b4b2-79a425075f1d",
                  "value":11.6,
                  "judgement":2,
                  "bodyPartAbbrv":"right_leg"
               },
               {
                  "id":0,
                  "externalId":"de902f9d-d909-48f3-879c-e36f6c17498c",
                  "value":33.25,
                  "judgement":2,
                  "bodyPartAbbrv":"trunk"
               }
            ]
         },
         {
            "id":0,
            "externalId":"22510c13-621e-4c28-9744-f317c20916e7",
            "value":49.0,
            "indicatorAbbrv":"metabolic_age",
            "measurementsBodyParts":[
               
            ]
         },
         {
            "id":0,
            "externalId":"321895a2-be0c-4a97-b420-c5c747f36eb7",
            "value":8.5,
            "indicatorAbbrv":"visceral_fat",
            "measurementsBodyParts":[
               
            ]
         },
         {
            "id":0,
            "externalId":"78a47c24-2116-4b26-818b-b75e3cce8081",
            "value":3.3,
            "indicatorAbbrv":"bone_mass",
            "measurementsBodyParts":[
               
            ]
         },
         {
            "id":0,
            "externalId":"046328b9-02fd-4eb5-96d3-6e204cb6003f",
            "value":56.0,
            "indicatorAbbrv":"muscle_quality",
            "measurementsBodyParts":[
               {
                  "id":0,
                  "externalId":"66f6f443-75e4-485a-b36c-b2000765931c",
                  "value":66.0,
                  "judgement":6,
                  "bodyPartAbbrv":"left_arm"
               },
               {
                  "id":0,
                  "externalId":"7540dd51-2785-4aca-94a6-c092207d9aee",
                  "value":67.0,
                  "judgement":7,
                  "bodyPartAbbrv":"right_arm"
               },
               {
                  "id":0,
                  "externalId":"ebc9df31-bfc1-43dc-aa6c-ddc2f23ad2a2",
                  "value":62.0,
                  "judgement":5,
                  "bodyPartAbbrv":"left_leg"
               },
               {
                  "id":0,
                  "externalId":"a5045b16-d499-4e77-8e95-d70badeef28b",
                  "value":45.0,
                  "judgement":2,
                  "bodyPartAbbrv":"right_leg"
               }
            ]
         },
         {
            "id":0,
            "externalId":"5f9fdb19-31e5-4a34-8bc5-cca113277d6d",
            "value":2.0,
            "indicatorAbbrv":"physique_rating",
            "measurementsBodyParts":[
               
            ]
         },
         {
            "id":0,
            "externalId":"4e3295f5-0d59-4219-9686-388cee724264",
            "value":70.0,
            "indicatorAbbrv":"heart_rate",
            "measurementsBodyParts":[
               
            ]
         },
         {
            "id":0,
            "externalId":"50b2e2c2-b798-4f44-898f-3a57680edced",
            "value":2.0,
            "indicatorAbbrv":"muscle_mass_j",
            "measurementsBodyParts":[
               
            ]
         }
      ]
   }','23299793');

END $$