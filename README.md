# Project description

This is a repository for clean architecture using Node.js, Express.js and MongoDB.

# Overview
This is a simple project with simple CRUD(create, read, update, delete) function and by using the clean architecture. This project also apply the DDD (domain driven design) concept.
From all of the resources that I learned, Clean architecture basically separate the framework or library and the business logic in the application. So whenever there is a change with the framework, we do not need to change the entire application. 
In clean architecture, the main concept that we need to follow is the dependency rules. So the higher level layer can only communicate with only 1 lower level layer. In clean architecture, there are some layers: 

![image](https://user-images.githubusercontent.com/43567254/167520768-9652fb49-ff81-4e13-baaa-bcaee2240a9d.png)


In the above picture, the “Presentation” layer can only depend with the “Use cases” layer and cannot directly depend with the “Entity” layer. And also the “Entity” layer cannot have any dependency with the other layer. 

-	Presentation\
In this layer, control the event from the web or device. It responsible for the incoming request and send back the response. 

-	Infrastructure\
In this layer, contains all the framework or libraries that is used for the application. For example the database configuration, or axios (javascript library to send http request). So if there is a change with the database, we just have to update this layer.

-	Use cases\
This layer contains all the business rules. All the activity that the system can do is specified in here. For example, AddUser, UpdateUser, DeleteUser, AddProduct, etc.

-	Domain\
This layer consists of all the entity or model that are used in the application. Entity or model is an object and contains all of its attributes. User, Product, Order are the example of entity. Name, Age, Address are the example of User attributes.

To apply the DDD concept, there are 2 types of domain model that you should know:
- Anemic domain model\
This model only contains all the attributes that a model has. 

- Rich domain model\
This model contains all the attributes that a model has, and also contains all the business rules that should be applied with the attributes. 

The example for anemic and rich domain model can be seen in the project.

DDD (Domain Driven Design) basically is a concept to create the application based on the business capabilities. So in the business, there are usually the same objects but have different function between every unit. Example, we have the object “User”. The “User” in finance is responsible for the accounting, while the “User” in marketing is responsible for the promotion. From my understanding, in DDD, we have to create 2 “User” domain for each unit, and cannot place the function in the same domain. The example can be seen in the repository.

# Project structure

This is the planned structure that will be applied in the project. \
Backend\
|-- Context\
&emsp;|-- Service1\
&emsp;&emsp;|-- Route\
&emsp;&emsp;&emsp; [domain]-route.js\
&emsp;|-- Controller\
&emsp;&emsp; [domain]-controller.js\
&emsp;&emsp; index.js\
&emsp;|-- DTO\
&emsp;&emsp; [domain]DTO.js\
&emsp;|-- Usecase\
&emsp;&emsp;|-- [domain]\
&emsp;&emsp;&emsp; [functionname].js\
&emsp;&emsp;|-- ...\
&emsp;&emsp; index.js\
&emsp;|-- Domain\
&emsp;&emsp; [domain].js\
&emsp;&emsp; [domain2].js\
&emsp;&emsp; index.js\
&emsp;|-- Infrastructure\
&emsp;&emsp;|-- database\
&emsp;&emsp;&emsp;|-- [database_framework]\
&emsp;&emsp;&emsp;&emsp;|-- db.js\
&emsp;&emsp;|-- index.js\
&emsp;app.js\
|-- Service2\
&emsp;|-- ...

# How to run

1. Go to the service that want to be run
2. In terminal, run command "npm install" to install all the needed dependencies
3. Change the connection string and db name in /Infrastructure/Database/MongoDB/index.js with yours.
4. Do not forget to create the collections in your Mongo DB. The name of the collection should be "materials" but you can change it and follow the one in the /UseCases/Material/index.js file.
5. After that, run command "npm start" to run the application.
6. Go to the browser or postman and go to http://localhost:{port}/material
7. The sample data for POST or PUT method can be found in sampledata.js inside the service folder.

NOTE: If something goes wrong while running the "npm start", try to change the port number. You can change it in the app.js file.

NOTE: you can change the database from MongoDB to LocalVariable by simply update the import makeDB path in the /UseCases/Material/index.js file. But if you want to use another database, for example MySQL, you can create a new MySQL folder then implement the method inside DB.js and index.js file. Remember that the method and parameter should be the same with other DB.js file, to avoid changes in the business logic (Usecase layer).


