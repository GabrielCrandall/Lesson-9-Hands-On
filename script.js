var biography = "";

let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        document.getElementById("hisName").innerHTML = myObj.name;
        document.getElementById("hisBirthday").innerHTML = myObj.birthday;
        biography = myObj.bio;
    }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();

$(document).ready(function () {
    $("#btnBio").click(function () {
        document.getElementById("hisBiography").innerHTML = biography;
    });
});