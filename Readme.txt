Instructions for setting up and running the server.

=================================Frameworks & Libraries========================
Express server.
postgres DB.
React Frontend(Under Development)
================================================================================






------------setup and running server-----------
Download the repository 

go into the git folder

run : npm install   (for installing all the dependencies)
run: npm start (for starting the server)
-----------------------------------------------



----------------------------------------------------------------
## For making GET calls: You can call it form a browser and You will receive a response there and the details in console. 
## For details of Object Please see console.
-----------------------------------------------------------------


*******************FLOW*********************************
List of Orders -> Order Grouping -> Order Aggregation
********************************************************


======================================================Structure of App===========================================================
The app contains 3 api as follows:

*      http://localhost:5000/orders
 This contains 2 methods GET and POST:
    ** POST
        You can pass a json object in the POST call to above api and this will save the object in the orders table in the Database.
        
        The format of json object with curl command is as follows:

            curl --header "Content-Type: application/json" \
            --request POST \
            --data '{"portfolio":"P2","details":{"E1":"231","E2":"11"}}' \
            http://localhost:5000/orders            
        

        portfolio is of type string i.e P1,P2,P3 etc.
        details is a json.
        E1,E2 are Equity.
        We can have much more Equity ,i.e E1,E2,E3 etc.

        You can copy the command above and run it to post object with above details.
        We are making an assumption that when passing the value of any equity ,if it is a postive number then it is used as BUY
        and if it is negative number then it used as SELL .


        For Reference:
        The following command will have portfolio P3 and SELL 20 units of E1 and BUY 51 units of E2.

            curl --header "Content-Type: application/json" \
            --request POST \
            --data '{"portfolio":"P3","details":{"E1":"-20","E2":"51"}}' \
            http://localhost:5000/orders     


    ** GET
        This GET call to above api will list all the orders placed till now and json object will be diplayed in console as well.
        The api can be called by using a browser for above url and You will get a response there and details on console.


*      http://localhost:5000/net  (Grouped Orders)
 This contains a GET method
 You can call this Api and get the grouped orders and in console you can see the detailed details of grouped orders.
 See console for output with statements.


 *     http://localhost:5000/aggregate   (Aggregated Orders )
 This contains a GET method
 You will get all the aggregated orders as mentioned in Problem from calling this Api and you can see the Detailed output in console.
 See console for output with statements.

 *     http://localhost:5000/reset
 This Api is GET method
 calling this api will truncate the orders table and all the received orders till now will be deleted.

=================================================================================================================================




======================================Test=================================
There is test folder inside which I have written some test for testing the API
You can run : npm run test   
for running all the test and see the details of passing and failing test.
In case the test fails Due to timeout Please try to run the test once more , it Should ideally pass.
============================================================================





=================================Database=================================
I am using a postgres Database in Aws for storing the records of orders.

==========================================================================

===============================Frontend using react=====================
I am trying to develop the Frontend part for my practice but its not fully developed yet.

Still you can go to crudfrontend folder and run
npm install 

npm start 

for starting the server and seeing the progress.

Its not linked with backend yet.
=========================================================================