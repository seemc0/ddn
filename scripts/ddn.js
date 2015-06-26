//

function toggleMenu(parent, menu, posX, posY){
  
  if (menu.style.display == "block"){
    menu.style.display = "none";
    var parentLink = parent.getElementsByTagName("a")[0];
    parentLink.className = "";
  } else {
    var parentLink = parent.getElementsByTagName("a")[0];
    parentLink.className += " t1Hover";
    menu.style.left = posX;
    menu.style.top = posY;
    menu.style.display = "block";
  }
}

function initT1() {
  console.log("Initialising T1");
  t1 = document.getElementsByClassName("t1");
  for (i = 0; i < t1.length; i++) {
    if (t1[i].getElementsByClassName("t2").length > 0) {
      //create watch for onclick
      t1[i].onmouseover = function(){
        
        var rect = this.getBoundingClientRect();
        var aTag = this.getElementsByTagName("a")[0];
        var bottomOffset = window.getComputedStyle(aTag, null).getPropertyValue('padding-bottom');
        bottomOffset = parseInt(bottomOffset, 10);
        var posX = rect.left;
        var posY = rect.bottom + bottomOffset;
        var secondTierToShow = this.getElementsByClassName("t2");
        toggleMenu(this, secondTierToShow[0], posX, posY);
      }
      
      t1[i].onmouseout = function(){
        var secondTierToHide = this.getElementsByClassName("t2");
        toggleMenu(this, secondTierToHide[0]);
      }
      
    }
  }
}

window.onload = function(){
  initT1();
};
