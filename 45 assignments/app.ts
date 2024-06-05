//Assignment 1: Install Node.js, Typescript and VS Code on your computer.

//Assignment 2:
// Personal Message: Store a person's name in a variable, and print a message to that person. Your message should be simple, such as,
// "Hello Eric, would you like to learn some Python today?"
//let personName: string= "ERIC";
//console.log(`hello ${personName}, would you like to learn some Python today?`);
 
//Assignment 3:
// Name Cases: Store a persons name in a variable, and then print that persons name in lowercase, uppercase, and titlecase. 
// lower case:
//let personName: string ="Mujtaba"
//let personName = "Mujtaba"
//console.log("lowercase:", personName.toLowerCase());

// upper case:
//console.log("uppercase:", personName.toLocaleUpperCase());

// Title case: 
//console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));

//Assignment 4:
// Famous Qoute: Find qoute from a famous person you admire. Print the quote and the name of its author.Your output should look
// something like the following, including the qoutation marks:
// Albert Einstein once said, "A person who never made a mistake never tried anything new."
//let qoute: string= "A person who never made a mistake never tried anything new";
//let author: string= "Albert Einstein"
//console.log(`${author} once said, "${qoute}`);

// Assignment 5:
// Famous Quote 2: RepeatExercise 4, but this time store the famous person`s name in a variable called famous person.
// Then compose your message and store it in a new variable called message. Print your message
//let qoute: string = "A person who never made a mistake never tried anything new";
//let famous_person="Albert Einstein"
//let message=`${famous_person} once said, ${qoute}`;
//console.log(message);

// Assignment 6:
// Stripping Names: Store a person`s name, and include some whitespace character at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace
// around the name is displayed. Then print the name after striping tthe white spaces.
// \t tab 4 word space 
// \n next line

//let personName: string = `\n\t BABAR AZAM\t\n`;
//console.log(personName);
//let stripped: string = personName.trim();
//console.log(stripped);

// Assignment 7 and 8:
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
// Be sure to enclose your operators in priny statements to see the results.
// You should create four lines that look like this:
// console.log(5+3)
// Your output should simply be four lines with the number 8 appearing once on each line.

//console.log(5+3);
//console.log(11-3);
//console.log(4*2);
//console.log(16/2);

// Assignment 9:
// Favourite Number: Store your favourite number in a variable. Then, using that variable, create a message that reveals your favourite
// number. Print that message.

// let favouriteNumber: number = 4;
// console.log(`My favourite number is ${favouriteNumber}`);

// Assignment 10:
// Adding Comments: Choose two of the programs you have written, and add at least one comment to each. If you dont have anything specific
// to write because your programs are too simple at this point, just add your name and the current date at the top of each program file.
// Then write one sentence describing what the program does.

// my name is Mujtaba 
// Dated: 28/04/2024
// this program will run simple code just like hello world
// console.log('hello world simple program');

// Assignment 11:
// Names: Store the names of a few of your friends in a array called names. Print each person's name by accessing each element in the 
// list, one at a time.

// let members: string [] =['muskan', 'ayesha', 'aqsa', 'taha','arham'];
// for(let i=0; i<members.length; i++){
  //  console.log(members[i]);
// }

// Assignment 12:
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person's name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person's name.

// let members: string [] =['muskan', 'ayesha', 'aqsa', 'taha','arham'];
// let message: string= 'kal birthday hai kis ki:';
// for(let i=0; i<members.length; i++){
   // console.log(message + members[i]);
// }

// Assignment 13:
// Your Own Array: Think of your favourite mode of transportation, such as a motorcycle or a car, and make a list that stores several
// examples. Use your list to print a series of statements about these items, such as "I would like to own a Honda motorcycle."

// let transportation : string [] = ['civic','bus','bike','train','areoplane'];
// for(let i=0; i<transportation.length; i++){
   // console.log('I would like to own a ' + transportation[i]);
// }

// Assignment 14:
// Guest List: if you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three
// people you will like to invite to dinner. Then use your list to print a mesage to each person, inviting them to dinner.

 // let guest_list : string [] =['muskan', 'ayesha', 'aqsa', 'taha','arham'];
// for(let i=0; i<guest_list.length; i++){
   // console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank You');
// }

// Assignment 15:
// Changing Guest List: You just heard that one of your guests can't make the dinner, so you need to send out a new set of invitations.
// You will have to think of someone else to invite.
// Start with your program for exercise 14. Add a print statement at the end of your program stating the name of the guest who can't
// make it.
// Modify your list, replacing the name of the guest who can't make it with the name of the new person you are inviting
// Print a second set of invitation messages, one for each person who is still in your list.

// let guest_list : string [] =['muskan', 'ayesha', 'aqsa', 'taha','arham'];
 // for(let i=0; i<guest_list.length; i++){
  //  console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
 // }
// let not_present : string = 'arham';
// let new_guest : string = 'Babar Azam';
// guest_list[3] = new_guest;
// for(let i=0; i<guest_list.length; i++){
 //   console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
// }
// console.log(`Mr.${not_present} will not coming tomorrow dinner.`) 

// Assignment 16:
// More Guests: You just found a bigger dinner table, so now more space is available. Think more three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger
// dinner table.
// Add one new guest to the beginning of your array.

// let guest_list : string [] =['muskan', 'ayesha', 'aqsa', 'taha','arham'];
 // for(let i=0; i<guest_list.length; i++){
  //  console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
 // }
// let not_present : string = 'arham';
// let new_guest : string = 'Babar Azam';
// guest_list[4] = new_guest;
// for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
// guest_list.unshift('shaheen','sarfaraz','rizwan');
// for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }

// Assignment 17:
// Shrinking Guest List: You just found out that your new dinner table won't arrive in time for the dinner, and you have space for only two guests.
// Start with your program from exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print 
// a message to that person letting them know you are sorry you can't invite them dnner. 
// Print a message to each of the two people still on your list, letting them know they are still invited. 
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the 
// end of your program.

// let guest_list : string [] =['muskan', 'ayesha', 'aqsa', 'taha','arham'];
 // for(let i=0; i<guest_list.length; i++){
  //  console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
 // }
// let not_present : string = 'arham';
// let new_guest : string = 'Babar Azam';
// guest_list[4] = new_guest;
// for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
// guest_list.unshift('shaheen','sarfaraz','rizwan');
// for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
// console.log('\nUnfortunately we can not arrange big table , Only two people allow.')
// while(guest_list.length>3){
   // let remove_guest = guest_list.pop();
   // console.log(`Sorry Sir/Madam.${remove_guest} you are not invited for dinner.`)
// }
// for(let i=0; i<guest_list.length; i++){
 //  console.log('Respected Sir/Madam ' + guest_list[i] + ',\nYes you are still invited on tomorrow dinner\nThank You\n')
//  }
// guest_list.splice(0,2)
// console.log(guest_list)

// Assignment 18:
// Seeing the world: Think of at least five places in the world you will like to visit.
// Store the location in array. Make sure the array is not in alphabetical order. 
// Print your array in its original order. 
// Print your array in alphabetical order without modifying the actual list.
// Show that your array is still in its original order by printing it.
// Print your array in reverse alphabetical order without changing the order of the original list.
// Show that your array is still in its original order by printing it again.
// Reverse the order of your list. Print the array to show that its order has changed.
// Reverse the order of your list again. Print the list to show it's back to its original order.
// Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed.

// let places : string [] = ['cape town','delhi','islamabad','bankok','ahmedabad']
// console.log('original :' + places);
// console.log('copy ' + [...places].sort());
// console.log('original :' + places);
// console.log('copy ' + [...places].sort().reverse());
// console.log('copy ' + [...places].sort().reverse());
// console.log('original :' + places.sort);

// Assignment 19:
// Dinner Guests; Working with one of the programs from Exercise 14 through 18, print a message indicating the number of people you are inviting 
// to dinner.

// import{ guest_list } from '../45 assignments/appguest'
// console.log(`n\PRINTING NUMBER OF GUEST INVITED`)
// console.log(`we had finally invited ${guest_list.length} from exercise 14`);

// Assignment 20:
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, 
// languages, or anything else you will like. Write a program that creates a list containing these items.

// let languages : string [] = ['english','urdu','hindi','french','arabic']
// console.log("list of languages:")
// for(let top of languages){
// console.log(top)
// }

// Assignment 21:
// interface item {
 //  name:string
 //  price:Number
// }
// create two objects
// const book: item ={
//   name:'ESSENTIAL TYPESCRIPT'
//   price:450
// }
// const apple: item ={
 //  name:'apple'
 //  price: 200
// }
// console.log(`book name: ${book.name}, price: $${book.price}`)
// console.log(`book name: ${apple.name}, price: $${apple.price}`)


// Assignment 22:
// Intentional Error: If you havent received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// let array: (string | number) [] = ['babar','taha',3,5,8]
// console.log(array[5]);
// console.log(array[0]);
// console.log(array[1]); 
// console.log(array[2]); 
// console.log(array[4]); 

// Assignment 23:
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results
// of each tests. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// Look closely at your results, and make sure you understand why each line evaluates to True or False.
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to false.
// let cars: string = 'subaru';
// Test 1 : Equality comparison (True)
// console.log("Is car == 'subaru'? I predict True.");
// console.log(cars == 'subaru');
// Test 2: strict equality comparision (True)
// console.log("Is car === 'subaru'? I predict True.");
// console.log(cars === 'subaru'); 
// Test 3: inequality comparision (False)
// console.log("Is car != 'subaru'? I predict False.");
// console.log(cars != 'subaru');
// Test 4: strict inequality comparision (False)
// console.log("Is car !== 'subaru'? I predict False.");
// console.log(cars !== 'subaru');
// Test 5: less than comparision (False)
// console.log("Is car < 'subaru'? I predict False.");
// console.log(cars < 'subaru');
// Test 6: greater than comparision (False)
// console.log("Is car > 'subaru'? I predict False.");
// console.log(cars > 'subaru');
// Test 7: less than or equal comparision (True)
// console.log("Is car <= 'subaru'? I predict True.");
// console.log(cars <= 'subaru');
// Test 8: greater than or equal comparision (True)
// console.log("Is car >= 'subaru'? I predict True.");
// console.log(cars >= 'subaru');
// Test 9: checking truthiness (True)
// console.log("Is car? I predict True.");
// console.log(cars);
// Test 10: checking falsiness (False)
// console.log("Is !car? I predict True.");
// console.log(!cars);

// Assignment 24:
// More Conditional Tests: You dont have to limit the number of tests you create to 10. if you want to try more comparisions,
// write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with string
// Tests using the lower case function 
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Tests using "and" and "or" operators
// Tests whether an item is in a array
// Tests whether an item is not in a array
// let car: string = 'subaru';
// let age: number = 25;
// let numbers: number[] = [1,2,3,4]
// string tests
// Test 1: equality (True)
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');
// Test 2: strict equality (False)
// console.log("Is car === 'subaru'? I predict False.");
// console.log(car === 'subaru');
// Test 3: inequality (true)
// console.log("Is car != 'Toyota'? I predict True.");
// console.log(car != 'Toyota');
// Test 4: inequality (False)
// console.log("Is car !== 'subaru'? I predict False.");
// console.log(car !== 'subaru');
// lower case function tests
// Test 5: Lowercase conversion (True)
// console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
// console.log(car.toLowerCase() == 'subaru');
// Test 6: Lowercase conversion (False)
// console.log("Is car === car.toLowerCase()? I predict False.");
// console.log(car === car.toLowerCase());
// numerical tests
// Test 7: equality (True)
// console.log("Is age == 25? I predict True.");
// console.log(age == 25);
// Test 8: inequality (False)
// console.log("Is age != 30? I predict False.");
// console.log(age != 30);
// Test 9: greater than (False)
// console.log("Is age > 30? I predict False.");
// console.log(age > 30);
// Test 10: less than or equal (True)
// console.log("Is age <= 25? I predict True.");
// console.log(age <= 25);
// logical operators 
// Test 11: AND (True)
// console.log("Is age > 20 && age < 30? I predict True.");
// console.log(age > 20 && age < 30);
// Test 12: OR (False)
// console.log("Is age > 30 || age < 18? I predict False.");
// console.log(age > 30 || age <18);
// array tests
// Test 13: in array (True)
// console.log("Is 3 in numbers? I predict True.");
// console.log(3 in numbers);
// Test 14: not in array (False)
// console.log("Is 5 not in numbers? I predict True.");
// console.log(5 not in numbers);

// Assignment 25:
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien color and assign it a value of 'green'
// ,'yellow', or 'red'.
// write an if statement to test whether the aliens color is green. If it is, print a message that the player just earned 5 points.
// write one version of this program that passes the if test and another that fails.(The version that fails will have no output.)
// Create a variable called alien color
// let alien_color: string = "green";
// if(alien_color == "green"){
//   console.log("the player just earned 5 points.");
// }
// alien_color = "red";
// if(alien_color == "green"){
//   console.log("the player just earned 5 points. ");
// }

// Assignment 26:
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// If the aliens color is green, print a statement that the player just earned 5 points for shooting the alien.
// If the aliens color isnt green, print a statement that the player just earned 10 points.
// Write one version of this program that runs the if block and another that runs the else block.
// Choose a color for an alien as you 
// did in Exercise 25, and write an if-else chain.
// let alien_color: string = "green";
// if(alien_color == "green"){
   // console.log("the player just earned 5 points for shooting the alien. ")
// } 
// else{
   // console.log("the player just earned 10 points.")
// }
// alien_color="red"
// if(alien_color == "green"){
   // console.log("the player just earned 5 points for shooting the alien.");
// }

// Assignment 27:
// Alien Colors #3: Turn your if-else chain from exercise 25-26 into an if-else-chain
// if the alien is green, print a message that the player earned 5 points.
// if the alien is yellow, print a message that the player earned 10 points.
// if the alien is red, print a message that the palyer earned 15 points.
// write three versions of this program, making sure each message is printed for the appropriate color alien.
// let alien_color: string = "green";
// if(alien_color == "green"){
 //  console.log("the player just earned 5 points. ")
// }
// else if(alien_color == "yellow"){
 //  console.log("the player just earned 10 points.")
// }
// else if(alien_color == "red"){
//   console.log("the player just earned 15 points.")
// }
// else{
//   console.log("Please select right color")
// }
// version 2
// alien_color = "red";
// if(alien_color == "green"){
//   console.log("the player earned 5 points.")
// }
// else if(alien_color == "yellow"){
//   console.log("the player just earned 10 points.")
// }
// else if(alien_color == "red"){
 //  console.log("the player just earned 15 points.")
// }
// else{
//   console.log("Please select right color")
// }
// version 3
// alien_color = "yellow"
// if(alien_color == "green"){
   // console.log("the player just earned 5 points. ")
// }
//else if(alien_color == "yellow"){
   // console.log("the player just earned 10 points.")
// }
// else if(alien_color == "red"){
   // console.log("the player just earned 15 points.")
// }
// else{
 //  console.log("Please select right color")
// }


// Assignment 28:
// Stages of Life: Write an if-else chain that determines a persons stage of life. Set a value for the variable age, and then:
// If the person is less than 2 years old, print a message that the person is a baby.
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// If the person is age 65 or older, print a message that the person is an elder.
// let age: number = 25;
// if(age<2){
//   console.log("the person is a baby.")
// }
// else if(age>=2 && age <4){
 //  console.log("person is a toddler.")
// }
// else if(age>=2 && age <13){
 //  console.log("person is a kid.")
// }
// else if(age>=13 && age <20){
 //  console.log("person is a teenager.")
// }
// else if(age>=20 && age <65){
//   console.log("person is a adult.")
// }
// else{
 //  console.log("Person is an elder.")
// }


//Assignment 29:
// Fvourite Fruit: Make a array of your favourite fruits, and then write a series of independent if statements that checks for certain 
// fruits in your array.
// make a array of your three favorite fruits and call it favorite fruits.
// write five if statements. each should check whether a certain kind of fruits is in your array.if the fruit is in your array, the
// if block should print a statement, such as you really like bananas!
// let favorite_fruits : string [] = ['apple','orange','grapes']
// if(favorite_fruits.includes('apple')){
//   console.log('You really like apple!')
// }
// if(favorite_fruits.includes('orange')){
 //  console.log('You really like orange!')
// }
// if(favorite_fruits.includes('mango')){
//   console.log('You really like mango!')
// }
// if(favorite_fruits.includes('grapes')){
 //  console.log('You really like grapes!')
// }
// if(favorite_fruits.includes('bananas')){
 //  console.log('You really like bananas!')
//}

// Assignment 30:
// Hello Admin: Make a array of five or more usernames, including the name 'admin'.Imagine you are writing code that will print a 
// greeeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// If the username is 'admin',print a special greeting, such as Hello admin, would you like to see a status report?
// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// let users : string [] = ['sana','babar','saba','taha','admin'] 
// for(let user of users){
//   if(user === "admin"){
 //     console.log("Hello admin, would you like to see a status report?")
 //  }
// else{
//   console.log(`Hello ${user}, 'thank you for logging in again.'`)
// }
// }

// Assignment 31:
// No Users: Add an if test to exercise 30 to make sure the list of users is not empty.
// If the list is empty, print the message we need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed.
// let users : string [] = ['sana','babar','saba','taha','admin'] 
// if(users.length === 0){
 //  console.log("we need to find some users!")
// }
// else{
//   users =[];
//   console.log("All user have been removed " + users.length)
// }

// Assignment 32:
// Checking Usernames: Do the following to create a program that simulates how website ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users
// Make a another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// Loop through the new_users list to see if each new usernames has already been used.If it has, print a message that the will need to 
// enter a new username. if a username has not been used, print a message saying that the username is available.
// Make sure your comparison is case insensitive. if 'John' has been used, 'JOHN' should not be accepted.
// let current_users:string [] = ['sana','babar','saba','taha','admin'] 
// let new_users:string [] = ['mujtaba','muskan','user7','admin','user9',]
// new_users.forEach((newUser) => {
//   if (
//   current_users.some(
//      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
//   )
   
// ){
//   console.log(`${newUser} will need to enter a new username.`)
// } else {
//   console.log(`${newUser} is available.`)
// }
// });

// Assignment 33:
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st and 2nd. Most ordinal numbers end in th,except 1,2 and 3
// store the numbers 1 through 9 in a array.
// loop through the array.
// use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th"
// and each result should be on a separate line.
// let myNumbers = [1,2,3,4,5,6,7,8,9]
// for(let i = 0; i < myNumbers.length; i++){
//   if(myNumbers[i] == 1){
//      console.log(`${myNumbers[i]}st`)
//   }else if(myNumbers[i] == 2){
//      console.log(`${myNumbers[i]}nd`)
//   }else if(myNumbers[i] == 3){
//      console.log(`${myNumbers[i]}rd`)
//   }else if(myNumbers[i] >= 4 && myNumbers[i] <= 9){
//      console.log(`${myNumbers[i]}th`)
//   }
// }

// Assignment 34:
// Pizzas: Think of at least three kind of your favourite pizza. Store these pizza names in a array, and then use a for loop to print 
// the name of each pizza
// Modify your loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you 
// should have one line of output containing a simple statement like I like pepperoni pizza
// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of
// three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// let myPizza = ["Cheese Pizza", "Pepperoni Pizza", "Vegeterian Pizza"];
// for (let i =0; i < myPizza.length; i++) {
//   console.log(myPizza[i]);
// }  
// for (let i =0; i < myPizza.length; i++) {
//   console.log(`I like to eat ${myPizza[i]}`);
// }
// console.log(
//   `\nI really like to eat Pizzas. Pizza comes in a variety of flavours and toopings, allowing individuals to customize it to their liking`
// );

// Assignment 35:
// Animals: Think of at least three different animals that have a common characteristics.Store the names of these animals in a list,
// and then use a for loop to print put the name of each animal. Modify your program to print a statement about each animal, such as
// a dog would make a great pet. Add a line at the end of ypur program stating what these animals have in common. You could print a sentence
// such as any of these animals would make a great a pet!
// let animals: string[] = ["dog","elephant","rabbit"];
// animals.forEach(animal => {
//   console.log(`A ${animal} would be a great pet.`);
// });
// console.log("Any of these animals would be a great pet!");

// Assignment 36:
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt(size: string, message: string) {
//   console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`)
// }
// make_shirt("medium","Code is Life");

// Assignmnet 37:
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love Typescript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different messsage.
// function make_shirt(size: string = "large", message: string = "I love Typescript") {
//   console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// }
// make_shirt();
// make_shirt("medium")
// make_shirt("small", "Dive into coding");

// Assignment 38:
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should  print 
// a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three
// different cities, at least one of which is not in the default country.
// function describe_city(nameOfCity: string, country: string = "Pakistan"){
//   return `${nameOfCity} is in ${country}`
// };
// let city1 = describe_city("South africa,cape town");
// let city2 = describe_city("India,delhi");
// let city3 = describe_city("Pakistan,Hyderabad");
// let city4 = describe_city("Dubai","UAE")
// console.log(city1);
// console.log(city2);
// console.log(city3);
// console.log(city4);

// Assignment 39:
// City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
// "Lahore,Pakistan"
// Call your function with at least three city-country pairs, and print the value thats returned
// function city_country(city: string, country: string){
//   console.log(`"${city}, ${country}"`)
// }
// city_country("Karachi", "Pakistan");
// let mycities = city_country("Karachi", "Pakistan");
// console.log(mycities)
// console.log(city_country("Dubai", "UAE"));
// console.log(city_country("London", "United Kingdom"));
// console.log(city_country("Riyaz", "Saudi Arabia"));

// Assignment 40:
// Album : Write a function called make_album() that builds an Object describing a music album. The function  should take in an artist 
// name and an album title, and it should return a object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. Print each return value to show that objects are storing
// the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes
// a value for the number of tracks, add that value to the album object. Make at least one new function call that includes the number of
// tracks on an album
// function myAlbum(artistName: string, albumTitle: string){
//   return {artistName, albumTitle}
// }
// let album1 = myAlbum("Ali", "Rang-e-Mohabat")
// let album2 = myAlbum("Madad", "Roshan Andhera")
// let album3 =myAlbum("Ayaz", "Mausam-e-Dil")
// console.log(album1);
// console.log(album2);
// console.log(album3);
// Number of tracks
// function myAlbum2(artistName: string, albumTitle: string, numberOfTracks?: number){
//   return {artistName, albumTitle, numberOfTracks}
// }
// let album4 = myAlbum2("Ali", "dil hai", 30)
// let album5 = myAlbum2("Madad", "ajeeb kahani", 55)
// let album6 =myAlbum2("Ayaz", "typescript ki coding")
// console.log(album4);
// console.log(album5);
// console.log(album6);

// Assignment 41:
// Magicians: Make a array of magicians names. Pass the array to a function called show_magicians(), which prnts the name of each 
// magician in the array.
// let magicians: string[] = ["brad", "Rameez", "ainak wala"];
// function show_magicians(magicians: string[]){
//   magicians.forEach(magician => {
//      console.log(magician)
//   })
// }
// show_magicians(magicians);

// Assignment 42:
// Great Magicians: Start with a copy of your program from exercise 41.
// Write a function called make_great() that modifies the array of magicians 
// by adding the phrase the Great to each magicians name. Call show_magicians() to see that the list has actually been modified.
// let magicians: string[] = ["DON", "Rameez", "CChris"];
// function make_great(magicians: string[]){
//   for (let i=0; i < magicians.length; i++) {
//      magicians[i] = magicians[i] + "the Great";
//   }
// }
// make_great(magicians); // Modifies the original array 
// show_magicians(magicians);

// Assignment 43:
// Unchanged Magicians: Start with your work from exercise 42.
// Call the function make_great() with a copy of the array of magicians names.
// Because the original array will be unchanged, return the new array and store it in a seperate array. Call show_magicians() with
// array to show that you have one array of the original names and one array with the Great added to each magicians names
// let magicians: string[] = ["Alice", "David", "Chris"];
// function make_great(magicians: string[]): string[] {
//   let greatMagicians = [];
//   magicians.forEach(magicians => {
//      greatMagicians.push(`${magician} the Great`);
//   });
//   return greatMagicians;
//} 
// let greatMagicians = make_great(magicians.slice());
// console.log("Original magicians:");
// show_magicians(magicians);
// console.log("Great magicians:");
// show_magicians(greatMagicians);

// Assignment 44:
// Snadwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides, and it should print a summary of
// the sandwich that is being ordered. Call the function three times, using a different number of arguments each times.
// function make_sandwich(...items: string[]) {
//   console.log(`Making a sandwich with: ${items.join(', ')}.`);
// }
// make_sandwich("ham", "cheese");
// make_sandwich("turkey", "lettuce", "tomato");
// make_sandwich("avocado", "sprouts", "mustard", "mayo");

// Assignment 45:
// Cars: Write a function that stores information about a car in a object. The function should always receive a manufacture and a model
// name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other
// name-value pairs, such as colors or an optional feature. Print the object thats returned to amke sure all the information was stored
// correctly
// function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
   // let car = {manufacturer, model };
   // options.forEach(([key, value]) => car [key] = value);
   // return carl
// }
// console.log(make_car("Toyota", "Corolla", ["color", "red",], ["year", 2020]))
// console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]))






