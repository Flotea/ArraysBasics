//Arrays: a single variable used to store different elements, list of variable elements
/*Syntax:
var arrayName = ["element", "element", 0, 1];
*/

// array with 4 elements, a max index number of 3

var exArray = ["Draw", "Sing", "Watch YouTube", "Listen to music", "Talk to my parents"];
var exVar = 1;

/*how to access specific elements in my array
arrayName[indexNumber];
first element in your array = 0
second element = 1
third element = 2

IF I WANT TO ACESS MY ELEMENT "DRAW"
*/
console.log(exArray[0]);

//1. Create an array listing ingredients to your favorite recipe.  
//Name your array the recipe name.
var butterMochi = ["coconut milk", "mochiko flour", "butter"];
//2. Create an array listing the classes you are taking this semester.
//Name your array "SpringSem19"
var SpringSem19 = ["Algebra II","Creative Writing","Web Dev II", "Chemistry"];
//3. Create an array listing your favorite all time movies.
//Name your array "FaveMovies"
var FaveMovies = ["Breakfast Club", "Spirit", "Prince of Egypt"];
//4. Create an array listing any other "favorites" you have.
//Name your array the category it is.
var tvShows = ["Xena the Warrior Princess", "The Dragon Prince", "My Hero Academia"]
//5. Access the second element in your recipe array and print it as part of the following sentence 
//"The second ingredient to my favorite recipe is ________."
function recipe(){
    console.log("The second ingredient to my favorite recipe is "+ butterMochi[1] + ".");
}
recipe();
//6. Access the third element in your class list array and print it as part of the following sentence 
//"One of the classes I'm taking this semester is ________."
function thirdClass(){
    console.log("One of the classes I'm taking this semester is " + SpringSem19[2] + ".");
}
thirdClass();
//7. Access the first element in your movie list array and print it as part of the following sentence 
//"One of my favorite movies is ________."
function movies(){
    console.log("One of my favorite movies is " + FaveMovies[0] + ".");
}
movies();
//8. Access the first element in your last  array and print it as part of the following sentence 
//"One of my favorite __(fill in)__ is ________."
function favShow(){
    console.log("One of my favorite TV shows is " + tvShows[0]+ ".");
}
favShow();




/*for(i=0;i<10;i=i+3){
    console.log("Hi everyone, I can count to "+i);
}*/

/*for(i=1;i<10;i= i+2){
    console.log("Hi everyone, I can count to "+i);
    
}*/

//create a loop that prints "HTA rocks. " 3 times 
for(i=1;i<4;i=i+1){
    console.log("HTA Rocks");
}
//create a loop that prints even numbers
for(i=0;i<10;i=i+2){
    console.log(i);
}
