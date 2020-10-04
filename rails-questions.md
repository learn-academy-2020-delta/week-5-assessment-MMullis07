# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new (filename) -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - will display the resource
library - refers to the file and first portion of the url
:id - :id is the route tacked onto the url
book - book is the controller that is being referenced
show - show refers to the function we defined in our main controller file.


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

In order to remedy this all you have to do is make a new migration file. 

1) Inside your rails app on terminal type in "rails g(enerate) migration add_foreign_key_to_belongs_model" then hit enter.

2) After that go to your code editor look for the folder "db" drop that down and open your newly created migration file.

3) Now define the change you are making "add_column :belongs_to_models, :owner_model_id, :integer"

4) Save that file and run "rails db:migrate" in your terminal

5) To check it worked properly you can look at your schema.rb file and see the change has been implemented.

4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:string pants:string shoes:string



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

1) You would locate the file "person.rb" in your models folder which is found within your app respository

2) within the class Person you would type in "validates :shirt, :pants, :shoes, presence: true"

3) click save 


6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

For a Rails model the naming convention is PascalCased (all words get captitalized no spaces). The the table that is generated will be plural and snake_case (no words get capitalized and must use underscore for spaces)