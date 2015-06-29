/*Copyright (c) 2015, Craig McNaught
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE CREATOR OF THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

function toggleMenu(parent, menu, posX, posY){
  var parentLink = parent.getElementsByTagName("a")[0];
  if (menu.style.display == "block"){
    menu.style.display = "none";
    parentLink.className = "";
  } else {
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
