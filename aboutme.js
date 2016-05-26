document.body.style.fontFamily='verdana,arial';
// look in the body section of the document.  I want you to change the style, specifically the font fontFamily.  Make it now be sans-serif.
document.getElementById('fullname').innerHTML='Mary Beth Clark';
//look in the document for the id named fullname.  Place this visible text in it.
document.getElementById('hometown').innerHTML='Charlotte';
document.getElementById('movie').innerHTML='Fried Green Tomatoes';
document.getElementById('food').innerHTML='creme brulee';

// MY futile EFFORTS BELOW TO CHANGE THE CLASS TO listitem.  I was hopeful with this method:http://callmenick.com/post/add-remove-classes-with-javascript-property-classlist
var li = document.getElementsByTagName('li');
// console.log(li);
li.classList.add('listitem');
//
// if (li.length>0){
//   var listIts=li[0];
//   listIts.className='listitem';//perhaps this isn't working yet because I haven't correctly GIVEN each li a class attribute yet?

//   var listIts[0];
//   listIts.className='listitem';//Hmm...this un-did the sans-serif change from line 1
// }

//TORI HELPED ME WITH THE STRATEGY BELOW in late afternoon, but I hit a wall and tried other methods above:
// for (var count = 0; count< li.length; count++) { //the counter variable is named "count"
//  addClass('listitem');

//   function classNames (li) {//Uh...DON'T REMEMBER WHY THIS IS HERE.

// A HINT FROM KELLY: loops will be used to add a new html element for my img through javascript
