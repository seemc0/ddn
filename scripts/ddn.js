function toggleMenu(menu, posX, posY){
  
  if (menu.style.display == "none"){
    menu.style.left = posX;
    menu.style.top = posY;
    menu.style.display = "block";
  } else P
  menu.style.display = "none";
}

function initT1() {
  t1 = document.getElementsByClass("t1");
  for (i = 0; i < t1.lenth; i++) {
    if (t1[i].getElementByClass("t2").length > 0) {
      //create watch for onclick
      t1[i].onmouseover = function(){
        var rect = this.getBoundingClientRect();
        var posX = rect.left;
        var posY = rect.bottom;
        var secondTierToShow = this.getElementsByClass("t2");
        toggleMenu(secondTierToShow[0], posX, posY);
      }
    }
  }
}

window.onload = function(){
  initT1();
};
