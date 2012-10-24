// gwers 7
// JavaScript Objects

var dude = { 
			enw : "Dude", 
			oed : 50 
			};


// creu object gwag
var walter = {};
// properties
walter.enw = "Walter";
walter.oed = 52;
// */


// ychwanegu method (neu function)
walter.info = function()
{
	print('Mae '+this.enw+' yn '+this.oed+' mlwydd oed');
}
walter.info();
// */


dude.is_lebowski = FALSE;
walter.is_lebowski = FALSE;
geoff.is_lebowski = TRUE;
// */