# Pokemon in Numbers

The world of Pokemon is vast and complex. Different types of pokemons with different skills and power configuration. 
Have you wonder which type is the most powerful?
Are there any legendary pokemons?
Are there any differences in the attack, defense and health points between one and other pokemon?
If you have ever wonder this, this site is perfect for you. Here you will see all those differences and much more. 
After reviewing the site you will have an idea of which type of pokemon is the most powerful and why is that. 
Enjoy!

To go now to the project website please click the following [GitHub Pages link](https://nitr-am.github.io/first-project-creative-code/).


## UX
This project is intended to people who have interest for the world of pokemon and as it is a big world with many pokemons, each one of them with different powers of attack, defense, speed, heath points, I realized that the best way to let the users easily know the most relevant information was dividing all the charts not by name, but by type, as the majority of pokemons with the same type are pretty similar. That is also why I opted for a single page website only with the most relevant charts in order to get the information as simple as possible. 
There is a navigation bar right at the top with a button in the center of it called "info", if you click on it you will get a sense of what is this site about. Also I mantion that if you click on any graph, all the other graphs in the page will be immediately modified to show you data exclusively related on the topic you just clicked. 

In the website there are many features available to interact with, like selectors, bar charts, pie charts, scatter plots and a table, all of them with the intention to give you the a clear sense of the power of each pokemon. 

- As a user I want to know since the very beginning what is the website about.
- As a user I want to clear and easy b able to read charts.
- As a user I want to see what are the main skills of a pokemon. 
- As a user I want to see the different properties that give power to a pokemon.
- As a user I want to see which type of pokemon is the most powerful.
- As a user I want to see a specific chart for the attack property. 
- As a user I want to see a specific chart for the defense property. 
- As a user I want to see a conclusion right at the end that summarizes what I just saw.

As the world of pokemon is big with many many charachters, I give relevance to charts that show what the user wants to know and the user in this case is mostly interested on knowing which pokemon is more powerful or, expanding the knowledge, which type of pokemon is the most powerful.

I took the structure of my project from a combination of two diferent projects. One from a project done prior to this one in the Code Institute topic called "*Data visualization mini project*" from the "*Interactive Frontend Development*" unit and also from a project made by a Code Institute student with GitHub profile [RobSimons1](https://github.com/RobSimons1) and the following link to the project: [global-white-shark-attack-dashboard](https://github.com/RobSimons1/global-white-shark-attack-dashboard).
I also clarified some concepts regarding Javascript libraries with the following websites: [W3Schools.com](https://www.w3schools.com/) and [Stack Overflow](https://stackoverflow.com/).

#### Wireframes:

The wireframe for the webpage was made using Balsamiq and can be found in the folder, inside of the *img* folder and is called *wireframe.png*.

[Pokemon webpage wireframe](https://balsamiq.cloud/s7sxsgs/p5jvjlb/r2278)

## Features
This web page can be looked and analized in different ways.
It can be seen comparing all the different types of pokemons all together.
It can be also seen as a story in which, since the beginning you choose what you want to focus in and then you scroll down looking and analyzing the selected situation in all the different charts/sections. 

#### Existing Features
* **Navigation bar:** Thisis the welcome to the page. It resumes what is it all about. It also has a "Info" button with some information insiide and an instruciton at the right motivating the user to click on any desired part of any graph. 
    * **Info button:** This is the "selling pitch" of the web page. Is a scrill down/up description. 
* **Section 1:** In this section the user will get a quick introduction to intro to select any desired pokemon in the select bar. And also see the percentages of pokemons that are legendary vs the percentage of non legendaries. 
* **Section 2:** Here you have verious options. You have a bar chart that selects "Legendary" or "Non legendary"; There is also a selector in which you can choose any desired type of pokemon and there is a pie chart that shows how many pokemons are there in the selected type. There are also descriptions about the generalities of the charts.
* **Average Attack Power:** This shows the average attack power of the different types of pokemons. Here the user can compare specifically on the attack power. There is a description that states on which are the most powerful ones.
* **Average Defense Power:** This shows the average defense power of the different types of pokemons. Here the user can compare specifically on the defense power. There is a description that states on which are the most powerful ones.
* **Average Hit Points:** Hit points or health points are the same. This is very important because it shows how easily the pokemon can die. This is why I decided to make an average graph on this as well. 
* **Average Spped:** This is a scatter plot that shows in blue the non legandary pokemons and in green the legendary ones. The user can hover on any dot and it will return the name of that specific pokemon with its speed and at the x axis is the total power. The intention of this graph is to show the correlation between the speed and the total power.
* **Table:** This feature shows the user the most powerful pokemons on any preselected group. It is linked to all the graphs above so it resumes any groups selected above and shows the top most powerful 10. 
* **Footer:** This section has the ability to take the user up to the top again. It contains a "Reset" button which will rest all the graphs, a contact button to send me an email whaterver the request and it also contain social media links to go and follow me. 

#### Features Left to Implement
- This data set only focuses on generation one of the pokemons, it woud be really nice to hace the complete data set of all the generations and to be able to have the full story on the process of development of each one of this characters. 


## Technologies Used
The technologies used for the development of the project so far are: 
- HTML: to edit the content.
- CSS: to style the content regardig colors and size.
- Javascript: To provide dynamic interactivity to the web page.
- jQuery: javascript library used to sipmplify and write code easier to make the web page more interactive.
- [D3.js](https://d3js.org/): Javascript library used in order to easily manipulate the data related to the page.
- [Crossfilter](https://cdnjs.com/libraries/crossfilter): Javascript library used in order to link all the graphs together and make them in an integrated manner.
- [DC.js](https://cdnjs.com/libraries/dc)Javascript library used in order to render charts in a friendly manner with scalable vector graphics.
- [Google fonts](https://fonts.google.com/): To style the website fonts. 
- [Bootstrap](https://bootswatch.com/): to style, distribution of the web page and simplify some processes.
- [Cloud9 from Amazon Web Services](https://aws.amazon.com/es/education/awseducate/): As Integrated Development Environment to integrate all the resources and facilitate the development of the project.
- [GitHub](https://github.com/): As online repository and for version control. 

## Testing

The process of develpment of this web page has passed through a series of test of its funcitonality. Since the very beginning the pages has been tested via Chrome Dveloper Tools.

The use of Bootstrap which focuses mainly on small screens has facilitated things. All the paragraphs and charts have been done with the intention to fit all the screens sizes available, since mobile phones to computer screens. 

The site has been viewed in different browsers such as Safari, Chrome, Firefox, Edge and Explorer and screen sizes proper of tablets and mobile phones. 

#### Client stories testing:

 - A user will immediately know what the web page is about.
 - By interaction with the graphs the user will be able deep down on the types and pokemons of interest.
 - The user will be able to notice which are the most powerful types of pokemons, and its main characters. 
 - The user will have special approach to attack, defense and health points which are the most important properties of a pokemon, besides to the type of pokemon.
 - At the end the user will get a final conlusion of the foundings of the project. 
 
#### Testing of functionality on every section.

The project has been tested in different screen sizes, like mobile phone, tablet and desktop size.

- The Title and percentages section was test in different formats, the percentages below, as a column, the selector at the right, right next to the title, and finally got the current shape which is elegant and simple.

- The “Section 1” was always wanted to be in a same row and at the beginning the bar chart and the pie chart were occupying the same space, but then realized the bars could be a little bit thiner and the pie a litle bit more strong so I got more space to it reducing te one of the bars chart. 

- The bar chart graphs below work in a simmilar manner and they work well. They show the information in a clear way and let the user make some conclusions. 

- The Scatter plot was having some problems when displaying because all the dots were not appearing at the top and the bottom. I had to make some arrangements in size to be able to see all the dots. 

- In the navbar section, the "info" button was dissapearing when on smaller screens but after adding some classes it worked properly.
 
##### Main issues:

| Issue  |                 Description                     |       Solution                      |  
| ------ |:-----------------------------------------------:|:-----------------------------------:|
|   1    |Finding a good data set in order to produce a good project|Downloaded an old document I had worked on learning to make charts in Python|
|   2    |The first csv file downloaded did not have the "Total" column |Added the "Total" column at the end with the result of summing up all the existant columns.|
|   3   |Building up the charts I did not have clear the process to obtain them.|I went to the Code Institute videos showing step by step on how to build DC charts and followed them.|
|   4   |Building up percentages I did not know how to get a percentage from the total number of cases using a var.|After research, found out was easier to put the total number insted.|
|   5   |The text above the percentage numbers was not working properly.|Added some divs in the html.|
|   6   |The bar chart at the beginning was occupying big space important for the pie chart.|Reduced the thickness of the bars.|
|   7   |Wanted to add the attack power of each character but there are too many.|Using averages by type was a good option to get a feeling of the power of each pokemon depending its type.|
|   8   |Same problem above with "Defense", "Health Points".|It is very difficult to show the power of each one of the characters, so the best way is to use averages by type which is the best identifier.|
|   9   |Wanted to show some correlation between any of the properties and the total power they have.|The scatter plot was the best option to see if there was any correlation. I used the speed property because is one with big importance.|
|   10  |Somehow wanted to show the names of the pokemons with all of its properties but I couldnt show the 800.|I made a table showing the top 10 on any pre selected category.|
|   11  |Jquery was not working for the "info" button in the nav bar.|Went back to the Jquery topic in the Code Institute course and found out I was lacking a function in the beginning.|
|   12  |The text that appear after I click on the "info" button was not appearing in the main page but in the navbar.|I went to add the properties in the main body and not in the navbar with proper Jquery and worked.|


## Deployment

This project was developed using the Cloud9 IDE from [Amazon Web Services](https://www.awseducate.com/student/s/awssite), committed to git and pushed to [GitHub](https://github.com/) online repository throughout a built in cloud9 function so everybody get access to it.

To run this project directly form your browser, please click on the following [GitHub Pages link]().

To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

1. Log into GitHub.
2. From the list of repositories available, **milestone2_pokemon_in_numbers** was selected.
3. From the menu items below the navigation bar, Settings was selected.
4. Scroll down to the **GitHub Pages** section.
5. In the Source option with a default *None* clicked the drop-down menu selected **Master Branch**.
6. After selecting *Master Branch* the page was deployed automatically and ready to use and the link was released in the same **GitHub Pages** section mentioned in point 4. 


#### To run this project locally

Clone this project from GitHub following the steps below:

1. Open the following [link](https://github.com/nitr-am/milestone2_pokemon_in_numbers) in a new tab by pressing right click and then clicking on the "open link in a new tab", that will open my Project GitHub repository.
2. Under the repository name, click "Clone or download" at the top right.
3. Copy the clone URL for the repository.
4. In your local IDE open your terminal and type: "git clone" , and paste the URL you copied in Step 3.
5. Now you will be able to open the project from your local IDE and see how it works. 

## Credits

#### Contents: 
- The graphs on the web page were constructed by me but with the help of:
    - Code Institute instructions. 
    - [RobSimons1](https://github.com/RobSimons1) project [global-white-shark-attack-dashboard](https://github.com/RobSimons1/global-white-shark-attack-dashboard) was also very helpful on building some graphs like the pie and the table and also in getting an idea about how in the project could be structured.
    - Styling and other functions were possible to achieve thanks to: [W3Schools.com](https://www.w3schools.com/) and [Stack Overflow](https://stackoverflow.com/).

#### Media

- The csv pokemon file was extracted from [Keith Galli](https://github.com/KeithGalli), [Pandas repository](https://github.com/KeithGalli/pandas).
- The PNG image that containing the frame in which I inspired the structure of the web page available in the *img* folder was done using [Balsamiq](https://balsamiq.com/).

#### Aknowledgements

Special thanks to [Rob Simons](https://github.com/RobSimons1) who's White Shark project was an inspiration for me and helped me doing this difficult project. Also to Code Institute and its instructive videos specially from the "*Interactive Frontend Development*" unit. 