# Group-24


Hello Professor,

How about this idea?

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
## PROJECT IDEA 1:

**Title**: Real time house prices predictions.

**Introduction to the Problem Statement**: A number of factors influence home buyer's decision. With using the given data set of 79 explanetary variables describing every aspect of residential homes, predict final price of any house.and build a real time data pipline to predict prices real time.

**Abstract**: We will consume data from different home buying applications apply real time transformations using Kafka Streams. Use housing dataset and predict prices of homes in real time. Build a house predictor application that gives the price of house in real time.

**Approach:** : 
1. Produce housing data into Kafka topic. Data can be from SQL or No SQL sources.
2. Apply real time trasformation on the data using Kafka Streams.
3. Consume this data and train an ML model.
4. Predict housing prices by querying the ML model.
5. Build a UI to select the houses and display the predicted price.

**Persona:** Home Buyers

**link to the data set**: https://www.kaggle.com/c/house-prices-advanced-regression-techniques/data



## PROJECT IDEA 2:
**Title** : Chat Bot to predict Amazon produt buy percentage.

**Introduction to the Problem Statement:** a number of factors influence product buyers such as reviews, ratings, price, company etc. with the given dataset, predict buy percentage of any product given by user, or suggest best related product in its similarity.

**Abstract:** Use Amazon product review dataset, build a kafka based application chatbot and predict the buy percentage of a product / suggest a similar good product.

**Approach:** build a machine learning model to predict the the buy percentage and the best similar product and create a data pipeline using kafka, a chat bot application where buyers can get details like product buy percentage and similar best products.

**Persona:** Amazon product Buyers

**link to data set:** https://www.kaggle.com/yasserh/amazon-product-reviews-dataset


## PROJECT IDEA 3:
**Title** : Real time movie review predictions pattern

**Introduction to the Problem Statement:** Movie reviews are important because they can be used not only as a marketing tool by film production studios, but also as a predictor as to how a film will perform financially. Here we take user review's posted on movie website  using kafka topic as input and returns a prediction of sentiment that has five values (very negtive, negative , neutral , positive and very positive ) using this data film productions can increase or decrease the number of theaters.

**Abstract:**  Take  movie reviews input from kafka topic (which are taken from movie websites) and to predict sentiment of reviews and post to an outgoing topic

**Aproach:** 
Use an http service to predict the sentiment of each review and publish sentiments to an outgoing topic.The http service takes text content as input and returns a sentiment that has five values (very negtive, negative , neutral , positive and very positive )

**Persona:** Movie Reviewers

**link to data set:** https://www.kaggle.com/vipulgandhi/movie-review-dataset

