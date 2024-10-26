function addCharacter() {
    var char = document.getElementById("inputChar").value.toLowerCase();
    // if (char.length !== 1) {
    //     alert("Please enter only one character.");
    //     return;
    // }
    if (!isNaN(char)) {
        alert("Not a character; please enter an alphabet character.");
        return;
    }
    var vowels = "aeiou";
    var vowelsDiv = document.getElementById("vowelsDiv");
    var consonantsDiv = document.getElementById("consonantsDiv");
    if (vowels.indexOf(char) !== -1) {
        vowelsDiv.innerHTML += "<p>" + char + "</p>";
    } else {
        consonantsDiv.innerHTML += "<p>" + char + "</p>";
    }
    document.getElementById("inputChar").value = "";
}