# Group-24

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

