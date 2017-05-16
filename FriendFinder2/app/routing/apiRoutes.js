
var friends = require("../data/friends");

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("../data/friends", function(request, response) {
    response.json(friends);
});

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("../data/friends", function(request, response){
    
    for (var i = 0; i < friends.length, i++) {

        var friendSum =  friends[i].scores.reduce(add, 0);

        function add (a, b) {
            return a + b;
        }
    }

    // Find a way to compare scores
    for (var i = 0; friends.length, i++) {

        function comparison(friends[i], user) {

            if (Math.abs(friendSum - userSum) = 0) {
                console.log("Perfect match");
            }
            else if (Math.abs()) {

            }
        }
    }


});