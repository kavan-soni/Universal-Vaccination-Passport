# Universal Vaccination Passport

## Title: Universal Vaccination Passport

![Project-Idea](https://user-images.githubusercontent.com/99461999/156113422-a81741d1-13cf-4acf-becf-6c31f6194969.jpg)

**Introduction:**
In the Covid-19 pandemic, almost every country in the world conducted campaigns worldwide to vaccinate its population. As a result, many countries have been asking for proof of vaccination for travel. However, there is no single reliable source of health records available. Thus, It isn't easy to build a vaccine passport accepted everywhere. We intend to solve this problem by leveraging the blockchain's distributed ledger technology (DLT).

**Abstract:** 
Healthcare facilities process millions of patients every day all around the world. These institutions are the backbone of the healthcare system in any country. Each prescription and purchase made is considered as an event in our approach. Healthcare and pharmaceutical facilities will generate millions of events every day. We intend to design a data pipeline leveraging Apache Kafka to process and transform this data. These events will be interpreted in real-time. We want to build a distributed ledger of medical records for patients by consuming these events. An event is only consumed if it passes certain checks. We can enforce that by writing smart contracts on top of our ledger. A simple web application will be built to display vaccine passports. 

The benefit of using DLT (Distributed Ledger Technology) is the elimination of middlemen in maintaining a global ledger of medical records. Also, we shall have total automation in building vaccine passports with no one authority having an absolute monopoly over the records. 

**Approach:** 
(1) Build Apache Kafka Cluster to process millions of health records from healthcare facilites around the world. 
(2) Leverage Kafka Streams to interprete and transform the data in different formats. 
(3) Build a scalable backend (could be serverless?) to write/append to the blockchain of health records maintained in cloud. (We could leverage IBM cloud) 
(4) Write smart contracts to enforce integrity checks on the health records.
(5) Build a minimalist front-end to display Vaccine passport. 

**Reference:**
IBM Blockchain Renaltu Usecase https://www.ibm.com/case-studies/renault/
Microsoft Blog on fighting piracy with Blockchain https://markets.businessinsider.com/news/currencies/microsoft-msft-ethereum-blockchain-fight-piracy-digital-tech-public-ledger-2021-8


