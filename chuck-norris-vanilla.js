/**
 * Vanilla Version of this awesome Chuck Norris plugin. Because Chuck Norris can't risk any delay with jQuery
 */

function chucknorrisJokes() {

    var json = new XMLHttpRequest();

    // Oepn the request
    json.open("GET", "http://api.icndb.com/jokes/random", true);
    json.onreadystatechange = function () {

        var divMain = document.getElementById("chuck-norris");

        // check that the ID exists on some element somewhere on the site
        if (divMain) {

            // Quit if the json status is not 200!
            if (json.readyState != 4 || json.status != 200) return;

            var result = JSON.parse(json.responseText);
            var div = document.getElementById("chuck-norris");
            div.textContent = result.value.joke;
            var text = div.textContent;
        }

    };
    json.send();

}
window.onload = chucknorrisJokes;
