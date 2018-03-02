// Your code goes here

var root = document.querySelector("#root");

var creator = function(tag, tagClass) {
  var created = document.createElement(tag);
  created.classList.add(tagClass);
  return created;
};

var tankDiv = function(arr) {
  var link = creator("a", "link");
  link.href = "#" + arr.model;
  var div = creator("div", "tank_D");
  link.appendChild(div);
  var tankImg = creator("img", "tank_I");
  tankImg.src = arr.preview;
  div.appendChild(tankImg);
  var div_text = creator("div", "div_T");
  div.appendChild(div_text);
  var ic = creator("img", "main_img");
  ic.src = arr.country_image;
  div_text.appendChild(ic);
  var lvl = creator("h4", "bold");
  lvl.innerHTML = arr.level;
  div_text.appendChild(lvl);
  var tankName = creator("h4", "tank_N");
  tankName.innerHTML = arr.model;
  div_text.appendChild(tankName);
  return link;
};

var mainPage = function(arr) {
  var header = creator("h2", "header");
  header.innerHTML = "Most popular tanks";
  root.appendChild(header);
  var div_All = creator("div", "tanks");
  root.appendChild(div_All);
  for (var i = 0; i < arr.length; i++) {
    div_All.appendChild(tankDiv(arr[i]));
  }
};

window.addEventListener("hashchange", function() {
  var current = location.hash.slice(1);
  for (var j = 0; j < tanks.length; j++) {
    if (current === tanks[j].model) {
      detailPage(tanks[j]);
      break;
    }
  }
});

var detailPage = function(obj) {
  var d = document.getElementsByClassName("tanks");
  var h = document.getElementsByClassName("header");
  if (d.length) {
    d[0].remove();
    h[0].remove();
  }
  var detail_Div = creator("div", "detail_Div");
  root.appendChild(detail_Div);
  var div_Head = creator("div", "div_Head");
  var ic = creator("img", "main_img");
  ic.src = obj.country_image;
  div_Head.appendChild(ic);
  var tankName = creator("h4", "tank_N");
  tankName.innerHTML = obj.model + " (level " + obj.level + ")";
  div_Head.appendChild(tankName);
  detail_Div.appendChild(div_Head);
  var div_Cont = creator("div", "div_Cont");
  detail_Div.appendChild(div_Cont);
  var div_Preview = creator("div", "div_Preview");
  div_Preview.innerHTML = "<p>Preview</p>";
  var div_Img = creator("div", "div_Img");
  var tankImg = creator("img", "tank_I");
  tankImg.src = obj.preview;
  div_Img.appendChild(tankImg);
  div_Preview.appendChild(div_Img);
  div_Cont.appendChild(div_Preview);
  var div_Table = creator("div", "div_Table");
  div_Table.innerHTML = "<p>Characteristic</p>";
  var table = creator("table", "table");
  table.innerHTML =
    "<tr><td>damage</td><td>" +
    obj.details.damage +
    "</td></tr>" +
    "<tr><td>breoning</td><td>" +
    obj.details.breoning +
    "</td></tr>" +
    "<tr><td>attack speed</td><td>" +
    obj.details.attack_speed +
    "</td></tr>" +
    "<tr><td>time of targeting</td><td>" +
    obj.details.time_of_targeting +
    "</td></tr>" +
    "<tr><td>ammunition</td><td>" +
    obj.details.ammunition +
    "</td></tr>";
  div_Table.appendChild(table);
  div_Cont.appendChild(div_Table);
  var back = creator("a", "back");
  back.href = "#";
  back.innerHTML = "Back to list view";
  detail_Div.appendChild(back);
  back.addEventListener("click", function() {
    var d = document.getElementsByClassName("detail_Div");
    if (d.length) {
      d[0].remove();
    }
    mainPage(tanks);
  });
};

mainPage(tanks);
