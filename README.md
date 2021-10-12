# Project-5-Pitch
For this project, I want to build a web app containing multiple games. I am choosing to create an app like this because games are heavy in frontend functionality, which I find to be the most enjoyable part of programming! My MVP will be to create an app with auth and have it include only game 3 and game 3's corresponding routes/backend functionality.

## User Stories
  As a user, I can log in or create an account, then choose from various games to play, and have my results from each game I play saved to my account.
  - Game 1:
    - This will be essentially the same game that I created for our first project, where a user can create a customized pet and save it to the database. There will be a frontend route where you can create your pet, and a frontend route where you can view your saved pets and delete if desired.
    - STRETCH: Add more ways to customize than we provided in the first project.
  - Game 2:
    - This will be essentially the same game I created for our second project. This game will track the user's score each time they play, and save their scores to the database. There will be a frontend route where you can play the game and a frontend route where you can view the five highest scores out of all users.
     - STRETCH: Instead of the same game I created for project 2, I could create a different game (like a memory game or something) which still tracks and saves high scores.
  - Game 3:
    - This will be a "Choose Your Own Adventure" game. A user will be presented with multiple prompts, one at a time, and the next prompt they recieve will always be dependent on their answer to the previous prompt. They will have to answer all of the prompts correctly to win. There will be a summary of the game saved to their account each time they win. There will be a frontend route to play the game and a frontend route to view the summaries.
    - STRETCH: Each time they play, they will be able to save a summary of their "adventure", regardless of whether they win or lose, to review and try to figure where they went wrong or right. The summary will be different each time depending on what each of their answers were.
    
## Models and Relationships
  - Users: A user has_many pets, a user has_many scores, and a user has_many adventures
    - username:string
    - password:string
  - Pets: A pet belongs_to a user
    - user_id:integer
    - pet_type:string
    - pet_accessory:string
    - background_image:string
    - pet_name:string
    - pet_message:string
    - pet_food:string
  - Scores: A score belongs_to a user include: :user
    - user_id:integer
    - score:integer
 - Adventures: an adventure belongs_to a user
    - character_name:string
    - choice_1:boolean
    - choice_2:boolean
    - choice_3:boolean
    - (will add more choices depending on how hard this ends up being)
    - result:boolean
    
## Backend Routes
  ### GET/user/pets: Returns all pets associated with logged in user
    {
      id: 1,
      pet_type: "Dog",
      type_image: "(image url)",
      pet_accessory: "Glasses",
      accessory_image: "(image url)",
      pet_background: "City",
      background_image: "(image url)",
      pet_name: "Pedro",
      pet_message: "Hello I am pet",
      pet_food: "Spaghetti",
      food_image: "(image url)"
    }
  ### POST/pets: Posts all info needed for a pet from frontend input fields, validates all attributes are present, displays error on frontend if all forms have not been filled out
    {
      user_id: (current user's id),
      pet_type: "Dog",
      type_image: "(image url)",
      pet_accessory: "Glasses",
      accessory_image: "(image url)",
      pet_background: "City",
      background_image: "(image url)",
      pet_name: "Pedro",
      pet_message: "Hello I am pet",
      pet_food: "Spaghetti",
      food_image: "(image url)"
    }
  ### DELETE/pets#{id}: Deletes pet
    {
      id: 1
    }
  
  ### GET/high_scores: Returns highest scores using custom rendering to render only the five highest scores out of all the high scores of all of the users
    {
      id: 1,
      user_id: 1,
      score: 20
    },
    {
      id: 3,
      user_id: 3,
      score: 18
    },
    {
      id: 7,
      user_id: 3,
      score: 17
    },
    {
      id: 4,
      user_id: 5,
      score: 15
    },
    {
      id: 12,
      user_id: 4,
      score: 14
    }
  ### POST/scores: Posts the results of each game the user plays
    {
      user_id: (current user's id), 
      score: 13
    }
    
  ### GET/user/adventure_summaries: Returns a string using custom rendering and string interpolation that summarizes the current user's choices for each game
    {
      id: 3,
      summary: "You, (character_name corresponding w/ this adventure), chose to (some text corresponding with choice_1), which led to (some more text corresponding with choice_1). You then (some text corresponding with choice_2), which led to (some more text corresponding with choice_2). You then (some text corresponding with choice__3), which led to your (either win or loss, depending on result). You (either won or lost, depending on result)!"
    },
    {
      id: 4,
      summary: "You, (character_name corresponding w/ this adventure), chose to (some text corresponding with choice_1), which led to (some more text corresponding with choice_1). You then (some text corresponding with choice_2), which led to (some more text corresponding with choice_2). You then (some text corresponding with choice__3), which led to your (either win or loss, depending on result). You (either won or lost, depending on result)!"
    }
  ### GET/user/adventures: Would return the attributes of each adventure belonging to the current user, not sure this one will be needed
    {
      id: 3,
      user_id: (current user's id),
      character_name: "Cameryn",
      choice_1: true,
      choice_2: false,
      choice_3: false,
      result: false
    },
    {
      id: 4,
      user_id: (current user's id),
      character_name: "Dinner",
      choice_1: true,
      choice_2: false,
      choice_3: false,
      result: true
    }
  ### POST/user/adventures: Post option will not be available until the end of the game play, after all forms have been filled out
    {
      user_id: (current user's id),
      character_name: "Cameryn",
      choice_1: true,
      choice_2: false,
      choice_3: false,
      result: false
    }
   

![F882867C-83ED-4D30-AAE6-31457BB8D1D7](https://user-images.githubusercontent.com/82423065/137009642-3f84e0ac-e0c4-46d4-8757-a1e9f90f5d0e.jpeg)

      
      
