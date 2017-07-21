/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/
var newRank = document.getElementById("rating1");
newRank.innerHTML= "5 stars";

//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/


var newPrice = document.getElementById("price2");
newPrice.innerHTML= "$1,000";

var newAddy = document.getElementById("addy2");
newAddy.innerHTML= "525 Kapahulu Ave, Honolulu, HI 96815";

//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/


var divElem = document.createElement("div"); //<= creating a new div element
divElem.id = "hours3"; //<= giving it an id so that you can easily access to add styles
divElem.innerHTML = "Hours: 6pm - 12am Sun - Sat";
text3.appendChild(divElem); //<= appending to the parent element



// Append this div element to the nameParent div*/

 
//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/

var divElemKam = document.createElement("div"); //<= creating a new div element
divElemKam.id = "price4"; //<= giving it an id so that you can easily access to add styles
divElemKam.innerHTML = "Price: $1Million";
text4.appendChild(divElemKam); //<= appending to the parent element

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/

var divElemKamAd = document.createElement("div"); //<= creating a new div element
divElemKamAd.id = "addy4"; //<= giving it an id so that you can easily access to add styles
divElemKamAd.innerHTML = "1620 N. School St, Honolulu, HI 96817";
text4.appendChild(divElemKamAd); //<= appending to the parent element



/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/

var divElKHours = document.createElement("div"); //<= creating a new div element
divElKHours.id = "hours4"; //<= giving it an id so that you can easily access to add styles
divElKHours.innerHTML = "Hours: 9am - 10pm Sun - Sat";
text4.appendChild(divElKHours); //<= appending to the parent element


/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/


var newP = document.createElement("p"); //<= creating a new div element
newP.id = "update4"; //<= giving it an id so that you can easily access to add styles
newP.innerHTML = "I'd leave a blank space for this oxtail soup!";
comment4.appendChild(newP); //<= appending to the parent element

//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/

var newDivD = document.createElement("div"); //<= creating a new div element
newDivD.id = "name5"; //<= giving it an id so that you can easily access to add styles
newDivD.innerHTML = "5. the Death Star Cafe";
text5.appendChild(newDivD); //<= appending to the parent element


var newDivR = document.createElement("div"); //<= creating a new div element
newDivR.id = "rating5"; //<= giving it an id so that you can easily access to add styles
newDivR.innerHTML = "Rating: 2 Stars";
text5.appendChild(newDivR); //<= appending to the parent element

var newDivPr = document.createElement("div"); //<= creating a new div element
newDivPr.id = "price5"; //<= giving it an id so that you can easily access to add styles
newDivPr.innerHTML = "Price: Free";
text5.appendChild(newDivPr); //<= appending to the parent element


var newDivAd = document.createElement("div"); //<= creating a new div element
newDivAd.id = "addy5"; //<= giving it an id so that you can easily access to add styles
newDivAd.innerHTML = "A galaxy far, far away";
text5.appendChild(newDivAd); //<= appending to the parent element

var newDivH = document.createElement("div"); //<= creating a new div element
newDivH.id = "hours5"; //<= giving it an id so that you can easily access to add styles
newDivH.innerHTML = "We never close";
text5.appendChild(newDivH); //<= appending to the parent element

