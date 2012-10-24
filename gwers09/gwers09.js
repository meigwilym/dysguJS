// gwers 09
// JSON
// JavaScript Object Notation

// ar gyfer data yn unig, dim methods

var guys = [
				{ enw : "Dude", oed : 50, isLebowski : false },
				{ enw : "Walter", oed : 52, isLebowski : false },
				{ enw : "Donny", oed : 48, isLebowski : false },
				{ enw : "Jesus", oed : 44, isLebowski : false },
				{ enw : "Geoff", oed : 60, isLebowski : true }
];

for(i in guys)
{
	print(guys[i].enw);
	print(guys[i].oed);
}


// check if it's the real Lebowski.
function isLebowski(the_object)
{
	for(i in the_object)
	{
		if(the_object[i].isLebowski == true)
		{
			print(the_object[i].enw+' IS the Lebowski');
		}
		else
		{
			print(the_object[i].enw+' is NOT the Lebowski');
		}
	}
}

// call the function
// , isLebowski : true
isLebowski(guys);
// */