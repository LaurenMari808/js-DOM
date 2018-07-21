/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
name1.innerHTML = 'Tay-Tay';

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
position2.innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

alias3.innerHTML = 'Concatenation';


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var profileElem = document.getElementsByClassName('profile');
profileElem[0].innerHTML = 'Purple Rain';

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
var profileElem = document.getElementsByClassName('profile');
profileElem[1].innerHTML = 'Be water, my friend.';



/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
var aliasElem = document.getElementsByClassName('alias');
aliasElem[2].innerHTML = 'Nick Fury';


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

// var name = document.getElementsById('nameParent');
// var nameParent = document.createElement('div');
// nameParent.id = 'name7';
// nameParent.innerHTML = "Peter Griffin";
// data.appendChild(nameParent);
var familyGuy = document.createElement('div');
familyGuy.id = 'name7';
familyGuy.innerHTML = 'Peter Griffin';

var parentDiv = document.getElementById('nameParent');
parentDiv.appendChild(familyGuy);
 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/
var aliasS = document.createElement('div');
aliasS.id = 'alias8';
aliasS.innerHTML = 'Old Man River Walk';

var Duncan = document.getElementById('aliasParent');
Duncan.appendChild(aliasS);

//Final Boss
/*9. Create your own profile.*/

var profileImage = document.getElementsByTagName('img');
profileImage[8].src = 'https://i.pinimg.com/280x280_RS/f5/b2/7f/f5b27f71fad05f1b7bab9c38356d0c83.jpg';
var myName = document.createElement('div');
myName.id = 'fullName'
myName.innerHTML = 'Lauren Mari Lahelahi`ileiokawaolani Ceria';
data.appendChild(myName);
