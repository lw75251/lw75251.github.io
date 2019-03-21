
// Each Card has Three Footer Tabs, body ( h5 and p)
function changeTab(id) {  
    
    // Gets Tab that was Clicked
    var tab = document.getElementById(id);
    tab.classList.add("active");

    var about_text = "Provides a platform for users to group up with each other, coordinate long-distance trips to the airport, and split the cost efficiently among the group.";
    var github_text = "Github URL";
    var technologies_text = "Technologies Used Include:";
    var map = {"About":about_text, "Github":github_text, "Tech":technologies_text};

    // Changes Body content of Card
    var body =tab.parentNode.parentNode.parentNode.previousSibling.previousSibling;
    body.querySelector("h6").innerHTML = tab.innerHTML;
    body.querySelector("p").innerHTML = map[tab.innerHTML];

    // Changes Active Status of Tab
    var other_tabs = getSiblings(tab.parentNode);
    other_tabs.forEach( function(tab){
        tab.querySelector("a").classList.remove("active");
    });
};

// Gets the sibling nodes of current node
var getSiblings = function (elem) {

	// Setup siblings array and get the first sibling
	var siblings = [];
	var sibling = elem.parentNode.firstChild;

	// Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling;
	}

	return siblings;

};