# Universal Vaccination Passport using Blockchain

## Title: Universal Vaccination Passport

**Problem Statment:**
In the Covid-19 pandemic, almost every country in the world conducted campaigns worldwide to vaccinate its population. As a result, many countries have been asking for proof of vaccination for travel. However, there is no single reliable source of health records available. Thus, It isn't easy to build a vaccine passport accepted everywhere. We intend to solve this problem by leveraging the blockchain's distributed ledger technology (DLT).

**Abstract:** 
Healthcare facilities process millions of patients every day all around the world. These institutions are the backbone of the healthcare system in any country. Each prescription and purchase made is considered as an event in our approach. Healthcare and pharmaceutical facilities will generate millions of events every day. We intend to design a data pipeline leveraging Apache Kafka to process and transform this data. These events will be interpreted in real-time. We want to build a distributed ledger of medical records for patients by consuming these events. An event is only consumed if it passes certain checks. We can enforce that by writing smart contracts on top of our ledger. A simple web application will be built to display vaccine passports. 

The benefit of using DLT (Distributed Ledger Technology) is the elimination of middlemen in maintaining a global ledger of medical records. Also, we shall have total automation in building vaccine passports with no one authority having an absolute monopoly over the records. 

**Use Case-business value:** 
(1) Our Portal generates vaccination passports for anyone in the world.
(2)The portal is built on blockchain where tamper-proof vaccination records are stored and maintained. 
(3)It can be used for verifications anywhere in the world.

​**Persona:**
(1) Governments All Over the World
(2) WHO (World Health Organizations)
(3) Private Medical Facilities 

**Architecture Diagram:**

(1)Client-Side Apps will stream vaccination records to the Lambda Function in the AWS cloud.
Lambda Function scales with the rate of load.
(2)Lambda Function will hit our API layer which has GET and POST APIs.
(3)The APIs will call Smart Contracts and write transactions to the blockchain in the cloud. 
(4)For the Demo, we are using Ganache and rock to simulate one node blockchain for testing.
(5)Our Vaccination Portal will use the same API layer to generate a Vaccination Passport with a QR code.


