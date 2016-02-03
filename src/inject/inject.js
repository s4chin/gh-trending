var ul = document.getElementsByClassName("header-nav")[0];
var li = document.createElement("li");
li.setAttribute("class", "header-nav-item");
var a = document.createElement("a");
a.appendChild(document.createTextNode("Trending"));
a.setAttribute("href", "https://www.github.com/trending");
a.setAttribute("class", "header-nav-link");
li.appendChild(a);
ul.appendChild(li);
