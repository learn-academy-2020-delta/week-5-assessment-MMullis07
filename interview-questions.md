# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC stands for Model View Controller. Each part of the acronym can be addressed using Rails. The models and controller handles the logic and the View is what we see. This may be inaccurate and I will find out more.

  Researched answer: In Rails M stands for model and it houses our database. We can create, update, modify, delete, and migrate our database. V stands for view it is what is used to display our application. C is the controller, it our "switchboard" for our apps. It directs the flow of our application.


2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: If an application has CRUD that means it is a full fledged and complete application. CRUD stands for Create, Read, Update, Delete. 

  Researched answer:
  An application that has CRUD means it has the four basic functionalities that our models possess in an application. If we are building a cosplay tutorial application we would want it to Create new tutorials, Read(Show) those tutorials, Update(edit) the tutorials, and Delete them if necessary. 




3. What is a migration? Why would you use one?

  Your answer: Migrations are used in a Rails app when you need to modify anything in an existing database.

  Researched answer: NEVER MODIFY DIRECTLY! Only use Migration files. Migration allows you to use Ruby to modify your database schema. 



4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer: The relationships between Person and Computer would be a person could have many computers so we will add the "has_many" to it. A computer can only belong to one person at a time so it will get the "belongs_to". Being that computer is the model is second it will hold the foreign key. A person could have a name, order date, received date, and payment type. The computer could have a name, category of computer, laptop or desktop, operating system, processing power, serial number, color, and price to name a few.

  Researched answer: I'm not really sure how to research this. It seems more of a brainstorming kind of response that will be unique to every person.



5. What is object-relational mapping?

  Your answer: "and I...OOP." allows us to write postgreSQL in our preferred programming language (Ruby on Rails).

  Researched answer: Object relational mapping allows us to interact with a database using the language of our choise instead of SQL. 



6. What is a gem?

  Your answer: A gem is an extention for either Ruby or Ruby on Rails. Due to Ruby and Rails being an open-source language people can create their own gem packages and add them.

  Researched answer: A gem is an equivalent to a plugin or extension for Ruby. Rails itself is technically a gem. You can have a standalone gem or gems that a dependent of other already made gems.



7. Why is it important to have validations in your application?

  Your answer: Validations are important so that your database is filled in properly and completely. We are going to typically have validations in place for our columns. Either they are required to be filled out. Must be a number, etc.

  Researched answer: Validations are important to ensure only the valid data is saved into your database.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes: RESTful routes are ones that provide mapping between HTTP verbs (get, post, put, delete, patch) to our CRUD actions. They depend on the HTTP verb and URL. REST itself stands for representational state transfer. 

- JSON: JSON Stands for JavaScript Object Notation. It is a lightweight format for storing and then transporting adata. This helps from when the data is transferred from a server to a web page. 

- API: Application Programming Interface it allows two aplications to talk to each other. 

- Endpoints: They are one end of the communication between APIs. Where the channels of communication meet and transfer information is called the endpoint.

- Strong params: A feature on Rails that prohibits assigning request parameters on objects unless explicitly allowed.
