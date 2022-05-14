# Title: Universal Vaccination Passport 

**Team Members:**
1. Shubhada Sanjay Paithankar 
2. Sri Ram V N V
3. Arun Sarvik Mallampali
4. Nikhil Konduru

**Landing Page URL**  

https://shubhadasanjaypait.wixsite.com/my-site-5  

**Project Report**

https://docs.google.com/document/d/1rXuTM82lZnZFbb0MjY-njIQSNTi5qWxF9ajmbkyuK4M/edit#

## Problem Statment:
In the Covid-19 pandemic, almost every country in the world conducted campaigns worldwide to vaccinate people. As a result, many countries have been asking for proof of vaccination for travel. However, there is no single reliable source of health records available. Thus, It isn't easy to build a vaccine passport accepted everywhere. We intend to solve this problem by leveraging the blockchain's distributed ledger technology (DLT).

## Abstract:
Healthcare facilities process millions of patients every day all around the world. These institutions are the backbone of the healthcare system in any country. Each prescription and purchase made is considered as an event in our approach. Healthcare and pharmaceutical facilities will generate millions of events every day. We intend to design a data pipeline leveraging Apache Kafka to process and transform this data. These events will be interpreted in real-time. We want to build a distributed ledger of medical records for patients by consuming these events. An event is only consumed if it passes certain checks. We can enforce that by writing smart contracts on top of our ledger. A simple web application will be built to display vaccine passports. 

The benefit of using DLT (Distributed Ledger Technology) is the elimination of middlemen in maintaining a global ledger of medical records. Also, we shall have total automation in building vaccine passports with no one authority having an absolute monopoly over the records. 

## Use Case-business value:

1. Our Portal generates vaccination passports for anyone in the world.
2. The portal is built on blockchain where tamper-proof vaccination records are stored and maintained. 
3. It can be used for verifications anywhere in the world.

## Persona:

1. Governments All Over the World
2. WHO (World Health Organizations)
3. Private Medical Facilities 

## Architecture Diagram:

![Untitled presentation](https://user-images.githubusercontent.com/99461999/167273804-f5038713-52cf-4675-af9b-661420b507b4.jpg)


1. Client-Side Apps will stream vaccination records to the Lambda Function in the AWS cloud.
Lambda Function scales with the rate of load.
2. Lambda Function will hit our API layer which has GET and POST APIs.
3. The APIs will call Smart Contracts and write transactions to the blockchain in the cloud. 
4. For the Demo, we are using Ganache and rock to simulate one node blockchain for testing.

![ganache_record_fetched](https://user-images.githubusercontent.com/99461999/167273858-d5e583ad-7a4b-4512-8128-19e7d0adfb6e.png)

5. Our Vaccination Portal will use the same API layer to generate a Vaccination Passport with a QR code.

![EnterYourGovernmentId](https://user-images.githubusercontent.com/99461999/167273882-94d4b0c5-a42d-42a9-bc73-fa6de3d3950a.png)

![YourVaccinationPassport](https://user-images.githubusercontent.com/99461999/167273906-88490d21-02af-4aa9-b7f9-57aa3c0d128b.png)

## Deployment Diagram :

![Untitled presentation (7)](https://user-images.githubusercontent.com/99461999/167480687-d34e8f19-6c9f-4a86-b446-58eee85c5fde.png)

## Tools used in the project:

1. Frontend : Reactjs
2. Backend Api : Nodejs 
3. Blockchain Enviroment :  Ganache ( to create and deploy smart contracts on one node blockchain ) and Truffle(manage and compile smart contract)
4. Lambda : Consume vaccination events.

## Steps to run the program

1. Go to the landing page (home page) of the application:
https://shubhadasanjaypait.wixsite.com/my-site-5 
2. Go to the Services tab and click on the view button, it will redirect you to the vaccination Portal.
https://shubhadasanjaypait.wixsite.com/my-site-5/services
3. To verify the vaccination record,
You can verify it via our sample record
Type Government ID as follows
1. 12345
2. 123456789
3. 6692386654 
