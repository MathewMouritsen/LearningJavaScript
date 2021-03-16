town_text = document.createElement("div");
town_text.appendChild(document.createTextNode("You enter a bustling, vibrant town."));
town_text.classList.add("intro");
document.body.appendChild(town_text);

buy_button = document.createElement("button");
buy_button.innerHTML = "BUY";
buy_button.classList.add("center");
document.body.appendChild(buy_button);

function go_home() {
    location.replace("Date_Time.html")
}