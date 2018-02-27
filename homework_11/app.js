var rootNode = document.getElementById("root");

var tree = function(ar, list) {
  var ol = document.createElement("ol");
  for (var i = 0; i < ar.length; i++) {
    var li = document.createElement("li");
    ol.appendChild(li);
    li.className = "folder";
    li.innerHTML = ar[i].title;
    if (ar[i].children) {
      tree(ar[i].children, li);
      li.addEventListener("click", function() {
        li.firstElementChild.classList.toggle("hidden");
      });
    }
    //Add folders icons
    if (ar[i].folder) {
      var ic = document.createElement("i");
      ic.className = "material-icons";
      ic.innerHTML = "folder";
      ol.insertBefore(ic, li);
    }
  }
  list.appendChild(ol);
};
tree(structure, rootNode);

//rootNode.appendChild();
