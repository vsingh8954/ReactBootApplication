# Full Stack Application using React JS and Java 8.
Prerequisite:
1. Node JS
2. Jdk 1.8
3. Maven
4. Postgres Database

Steps to Run this Spring Boot and React CRUD Application.
1. Install React and setup Java 8.
2. Run Spring Boot Application by Running main class - DemoApplication.java. PORT No - 8090
3. Execute Command npm start inside react-boot-crud directory to start react app. PORT No - 3000

API Details:
1. /getAllRecords - To fetch all records. Method Type - GET
2. /record/{id} - To fetch record with id. Method Type - GET
3. /record/{id} - To delete record with specific id. Method Type - DELETE
4. /record - To save new record. Method Type - POST.  Request Body - Object of DataModel.
5. /record - To update a record. Method Type - PUT. Request Body - Object of DataModel.
6. /fetchByStartDate - To fetch record by start date range. Method Type - GET. Request Param - String startDate and String endDate. Format - mm/dd/yyyy
6. /fetchByEndDate - To fetch record by end date range. Method Type - GET. Request Param - String startDate and String endDate. Format - mm/dd/yyyy
