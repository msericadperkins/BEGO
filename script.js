//added and event listener to the submit button

var btn = document.getElementById("uBtn");
btn.addEventListener('click', populateAll);

//grab a reference to state picker
var states = document.getElementById("uStates");

//Created an array object

var stateData = {
  AL: ["Birmingham", "Montgomary", "Huntsville", "Mobile", "Tuscaloosa"],
  AK: ["Anchorage", "Juneau", "Fairbanks", "Ketchikan", "Sitea"],
  AZ: ["Phoenix","Tucson","Scottdale","Mesa","Tempe"],
  AR: ["Little Rock","Fayetteville","Hot Springs","Fort Smith","Bentonville"],
  CA: ["Los Angeles", "San Francisco","San Diego","Sacramento","Oakland"],
  CO: ['Denver','Colorado Springs','Boulder','Aspen','Fort Collins'],
  CT: ["Hartford", "New Haven","Stamford", 'Bridgeport', 'Greenwhich'],
  DE: ['Wilminton','Newark','Doever','Reho', 'New Castle'],
  FL: ['Miami','Ft. Lauderdale','Orlando','Tampa'],
  GA: ['Atlanta','Savannah','Augusta','Marietta','Athens'],
  HI: ['Honolulu','Kailua','Kaneohe','Kapolie'],
  ID: ['Boise','Idaho Falls','Nampa','Meridian','Pocatello'],
  IL: ['Chicago','Springfield','Peoria','Rockford','Naperville'],
  IN: ['Indianapolis','Fort Wayne','Bloomington','Evansville','South Bend'],
  IA: ['Des Moines','Cedar Rapids','Iowa City','Davenport','Ames'],
  KS: ['Wichita','Kansas City','Topeka','Overland Park','Lawrence'],
  KY: ['Louisville','Lexington','Bowling Green','Frankfort','Paducah'],
  LA: ['New Orleans','Baton Rouge','Lafayette','Shreveport','Lake Charles'],
  ME: ['Portland','Bangor','Augusta','Bar Harbor','Lewiston'],
  MD: ['Baltimore','Annapolis','Frederick','Rockville','Silver Spring'],
  MA: ['Boston','Worcester','Salem','Plymouth','Waltham'],
  MI: ['Detroit','Grand Rapids','Ann Arbor','Lansing','Kalamazoo'],
  MN: ['Minneapolis','Saint Paul','Duluth','St. Cloud','Minnetonka'],
  MS: ['Jackson','Biloxi','Hattiesburg','Gulfport','Tupelo'],
  MO: ['St. Louis','Kansas City','Springfield','Columbia','Branson'],
  MT: ['Billings','Missoula','Bozeman','Helena','Great Falls'],
  NE: ['Omaha','Lincoln','Grand Island','Kearney','North Platte'],
  NV: ['Las Vegas','Reno','Henderson','Carson City','Sparks'],
  NH: ['Manchester','Nashua','Concord','Portsmouth','Keene'],
  NJ: ['Newark','Jersey City','Trenton','Atlantic','Hoboken'],
  NM: ['Albuquerque','Santa Fe','Las Cruces','Taos','Roswell'],
  NY: ['New York City','Buffalo','Syracuse','Albany','Rochester'],
  NC: ['Charlotte','Raleigh','Asheville','Greenboro','Durham'],
  ND: ['Fargo','Bismarck','Grand Forks','Minot','Wiliston'],
  OH: ['Cleveland','Columbus','Cincinnti','Dayton','Akron'],
  OK: ['Oklahoma City','Tulsa','Norman','Edmnd','Lawton'],
  OR: ['Portland','Eugene','Salem','Bend','Beaverton'],
  PA: ['Philadelphia','Pittsburgh','Harrisburgh','Lancaster','Allentown'],
  RI: ['Providence','Newport','Warwick','Cranston','Woonsocket'],
  SC: ['Charleston','Columbia','Greenville','Myrtle Beach','Hilton Head Island'],
  SD: ['Sioux Falls','Rapid City','Aberdeen','Pierre','Brookings'],
  TN: ['Nashville','Memphis','Gatlinburg','Knoxville','Chattanooga'],
  TX: ['Houston','Dallas','Austin','San Antonio','Fort Worth'],
  UT: ['Salt Lake City','Ogden','Provo','Park City','St. George'],
  VT: ['Burlington','Montpelier','Rutland City','Brattleboro','South Burlington'],
  VA: ['Richmond','Virginia Beach','Norfolk','Alexandria','Charlottesville'],
  WA: ['Seattle','Spokane','Tacoma','Bellevue','Olympia'],
  WV: ['Charleston','Morgantown','Huntington','Beckley','Martinsburg'],
  WI: ['Milwaukee','Madison','Green Bay','Appleton','Wisconsin Dells'],
  WY: ['Cheyenne','Jackson','Casper','Laramie','Sheridan']
 };

//Validating user input
function validateInfo() {
	if( document.uform.usal.value == "" ||
         isNaN( document.uform.usal.value ) )
	{
        alert( "Please provide a valid number in ###### format." );
        document.uform.usal.focus() ;
        return false;
     }
}
//Iterating through the array to output cities
function populateCities(){
 	// get the cities for the current state
 	var cities=stateData[states.value]
 	console.log(cities)
 
 	//loop through the cities
 	for(var i = 0; i < cities.length; i++){
   		var li = document.getElementById("city"+(i+1))
   		li.innerHTML = cities[i]
 	}
 }	

//Having fun with math! Lol

function populateFinances(){
var s =document.getElementById("uSalary").value	

	if ((s<=93325)){
	var taxes=(s*0.1);
    var taxBracket="1/7";
	}
	else if (s>9325&&s<37951){
	var taxes=((s-9325)*0.15+(932.5));
    var taxBracket="2/7";
	}
	else if (s>37950&&s<91901){
	var taxes=((s-37950)*0.25+(5226.25));
    var taxBracket="3/7";
	}	
	else if (s>91900&&s<191651){
	var taxes=((s-91900)*0.28+(18713.75));
    var taxBracket="4/7";
	}
	else if (s>191650&&s<416701){
	var taxes=((s-191650)*0.33+(46643.75));
    var taxBracket="5/7";
	}
	else if (s>416700&&s<418401){
	var taxes= ((s-416700)*0.35+(120910.25));
    var taxBracket="6/7";
	}
	else{
  	var taxes=((s-418400)*0.396+(120910.25));
    var taxBracket="7/7";
	}
	
var taxes=Math.round(taxes);
var newSalary=Math.round(s-taxes);
var rentRange=Math.round((newSalary/12)/3);
var securityDeposit=Math.round(rentRange*2);

var mysal = document.getElementById("mysal");
   mysal.innerHTML = "<b>Net Salary:</b>" + " " + newSalary;
var mytax = document.getElementById("mytax");
   mytax.innerHTML = "<b>Taxes:</b>" + " " + taxes;
var mytaxbrack = document.getElementById("mytaxbrack");
   mytaxbrack.innerHTML = "<b>Tax Bracket:</b>" + " " + taxBracket;
var myrent = document.getElementById("myrent");
   myrent.innerHTML = "<b>Max Rent:</b>" + " " + rentRange;
var mysec = document.getElementById("mysec");
   mysec.innerHTML = "<b>Deposit:</b>" + " " + securityDeposit;
}	


//Calling all functions
function populateAll(){
	validateInfo();
	populateCities();
	populateFinances();	
}
