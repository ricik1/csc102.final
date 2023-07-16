//Erica Egan //
//csc102-input//
function check()

{
// have the first and last name, the zipe code with a length of 5, must be 5 or it wont move forward//

var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var zipCode = document.getElementById("zipCode").value;
var zipCodeLength = zipCode.length;
var fullName = firstName + " " + lastName;

alert(fullName);

alert(zipCodeLength);

if (zipCodeLength !== 5) // zip[ code must 5 numbers no more or less for it work or the alert pops up//
{
    alert("invalid zip code length");
    return; //Stop further execution of the program
}
if (fullName.length > 20)
{
alert("Full name is too long ( no more than 20 characters)."); //my alert for when the full name is over 20 char will not move forward with fixing it//
return; // Stop further execution of the program

}


   //just added this to the end to take you back to the schoo website// 
{
    location.replace ("https://www.uat.edu/")
}
}