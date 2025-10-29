# Personal Dashboard 

The goal is to create a cute personal dashboard with a mind dump feature and extras that makes the space interesting to use. This was inspired by the codeacademy project called ["Inspirational Homepage](https://www.codecademy.com/projects/portfolio/inspirational-homepage)


### Project Requirements

- Build the application using React with Typescript 
- Start the project with Vite 
- Version control your application with Git and host the repository on GitHub
- Write a README (using Markdown) that documents your project
- You can use any library you like
- Deploy application (suggestion: Netlify )


### Features (v1)

- Users can write down what's in their mind as a note (mind dump)
- Users can delete notes already posted 
- Users can click on a button or press backspace to post the note 
- Users receive a alert message when they try to post an empty note 

### Features (v2)
- Users can check the current weather in their location
    - Use an weather app API to fetch the weather, based on the users location 
    - Suggestions: https://open-meteo.com/ // https://www.weatherapi.com/ // https://openweathermap.org/api

EXTRA: Create some kind of interaction with the post its -> could be like, adding the current weather to each post it, together with the current day 

- Users can see a motivational quote every day 
    - Suggestions: https://api-ninjas.com/api/quotes // https://github.com/lukePeavey/quotable // https://zenquotes.io/
 
### Visual 
- You can be creative with the UI of your project, but I would recommend to not use style libraries for now 
- You can draw your goal UI in paper, at Figma or any other tool 
- Inspiration ideas: [LINK 1 ](https://site.xtiles.app/wp-content/uploads/2024/04/brain_dump.webp) | [LINK 2](https://goofy-hopper-a9bd1f.netlify.app/) | [LINK 3](https://dribbble.com/shots/3603745-Notes-app-page) | [LINK 4](https://dribbble.com/shots/24368885-My-take-on-Notes-app)

-- 

 ### Features (v2) 
 - Implement a mock authentication, managing everything using localStorage 
 -     Create a Sign Up Page -> suggestion: use react-hook-form and Zod for Input Validation 
 -     Save user, password and email at localStorage - use all the possible functions for that
 - Create a <ProtectedRoute> that checks if an token exists at the localStorage
 - Handle the non happy paths - Invalid credentials, for example



