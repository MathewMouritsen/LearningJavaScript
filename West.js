mountain_text = document.createElement("div");
mountain_text.appendChild(document.createTextNode("You enter a majestic mountain range."));
mountain_text.classList.add("intro");
document.body.appendChild(mountain_text);

explore_button = document.createElement("button");
explore_button.innerHTML = "EXPLORE";
explore_button.classList.add("center");
document.body.appendChild(explore_button);

function go_home() {
    location.replace("Date_Time.html")
}