var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  document.write("Today is: " + daylist[day] + "." + "<br>".repeat(2));
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
document.write("Current Time: "+ hour + ":" + minute + ":" + second + prepand + "<br>".repeat(2));

intro_text = document.createElement("div");
intro_text.appendChild(document.createTextNode("You appear in a flowing green field!! " +
    "You see a dragon to the north! You see a town to the east! You see a mountain range to the west!"));
intro_text.classList.add("intro");
document.body.appendChild(intro_text);

north_button = document.createElement("button");
north_button.innerHTML = "NORTH";
north_button.classList.add("north");
document.body.appendChild(north_button);
north_button.addEventListener("click", do_north)

east_button = document.createElement("button");
east_button.innerHTML = "EAST";
east_button.classList.add("east")
document.body.appendChild(east_button);
east_button.addEventListener("click", do_east)

west_button = document.createElement("button");
west_button.innerHTML = "WEST";
west_button.classList.add("west")
document.body.appendChild(west_button);
west_button.addEventListener("click", do_west)


function do_north() {
    location.replace("North.html")
}

function do_east() {
    location.replace("East.html")
}

function do_west() {
    location.replace("West.html")
}
