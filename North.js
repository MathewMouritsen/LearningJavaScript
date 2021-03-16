var dragon = new Image();
dragon.src="dragon.png";
dragon.class="center";
dragon.setAttribute("width", "600");
dragon.setAttribute("height", "350");
dragon.setAttribute("alt", "Dragon");
dragon.classList.add("center")
document.body.appendChild(dragon);

document.write("<br>")

dragon_text = document.createElement("div");
dragon_text.appendChild(document.createTextNode("You see the colossal white dragon " +
    "stand above you and bare his teeth!!!"));
dragon_text.classList.add("intro");
document.body.appendChild(dragon_text);

attack_button = document.createElement("button");
attack_button.innerHTML = "ATTACK";
attack_button.classList.add("attack");
document.body.appendChild(attack_button);
//attack_button.addEventListener("click", do_attack)

dodge_button = document.createElement("button");
dodge_button.innerHTML = "DODGE";
dodge_button.classList.add("dodge");
document.body.appendChild(dodge_button);

heal_button = document.createElement("button");
heal_button.innerHTML = "HEAL";
heal_button.classList.add("heal");
document.body.appendChild(heal_button);

function go_home() {
    location.replace("Date_Time.html")
}