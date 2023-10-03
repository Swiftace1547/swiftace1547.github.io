var clickCount = 0;
var update = document.getElementById('update');

document.getElementById('ClickButton1').onclick=function(){
 clickCount+= 1;
 if (clickCount === 1){
 update.innerHTML='Yay, you clicked me'
 } 
 else if (clickCount === 2) {
  update.innerHTML='You clicked me again?'
  } 
  else if (clickCount === 3) {
   update.innerHTML='Ok, you can stop now'
   } 
   else if (clickCount >= 4 && clickCount <= 10) {
    update.innerHTML=`you are annoying me now (${clickCount})`
   } 
   else if (clickCount > 10 && clickCount <= 25) {
    update.innerHTML=`You have clicked me ${clickCount} times, please stop...`
   } else if (clickCount > 25 && clickCount < 100) {
   update.innerHTML=`Ok there is no way you click me 100 times, but seriously, PLEASE STOP (${clickCount})`
   } else if (clickCount >= 100 && clickCount <= 250) {
   update.innerHTML=`ok, I get it, you are addicted to clicking a button, but please, is there any way you could stop..., at least you haven't clicked me 250 times... (${clickCount})`
   } else if (clickCount > 250 && clickCount < 1000) {
   update.innerHTML=`BRUUHHHH you actually clicked me ${clickCount} times! You better not click me 1000 times, I am warning you`
   } else if (clickCount >= 1000 && clickCount < 5000) {
   update.innerHTML=`ok, you win..., I give up... (${clickCount})`
   } else if (clickCount >= 5000 && clickCount < 10000) {
   update.innerHTML=`You realize when I said click me, I meant once, not 10000 times, right? (${clickCount})`
        } else if (clickCount >= 10000 && clickCount < 20000) {
        update.innerHTML=`You are making me go crazy!!!!! PLEASE DON'T CLICK ME (${clickCount})`
        } else if (clickCount >= 20000 && clickCount < 25000) {
        update.innerHTML=`I have no words... (${clickCount})`
        } else if (clickCount >= 25000) {
        update.innerHTML=`You really kept clicking.., I really don't know what to say, how, and why did you click a quarter of 100000 times? (${clickCount})`
        }
    };
    document.getElementById('ClickButton2').onclick=function(){
 clickCount+= 2;
 if (clickCount === 1){
 update.innerHTML='Yay, you clicked me'
 } 
 else if (clickCount === 2) {
  update.innerHTML='You clicked me again?'
  } 
  else if (clickCount === 3) {
   update.innerHTML='Ok, you can stop now'
   } 
   else if (clickCount >= 4 && clickCount <= 10) {
    update.innerHTML=`you are annoying me now (${clickCount})`
   } 
   else if (clickCount > 10 && clickCount <= 25) {
    update.innerHTML=`You have clicked me ${clickCount} times, please stop...`
   } else if (clickCount > 25 && clickCount < 100) {
   update.innerHTML=`Ok there is no way you click me 100 times, but seriously, PLEASE STOP (${clickCount})`
   } else if (clickCount >= 100 && clickCount <= 250) {
   update.innerHTML=`ok, I get it, you are addicted to clicking a button, but please, is there any way you could stop..., at least you haven't clicked me 250 times... (${clickCount})`
   } else if (clickCount > 250 && clickCount < 1000) {
   update.innerHTML=`BRUUHHHH you actually clicked me ${clickCount} times! You better not click me 1000 times, I am warning you`
   } else if (clickCount >= 1000 && clickCount < 5000) {
   update.innerHTML=`ok, you win..., I give up... (${clickCount})`
   } else if (clickCount >= 5000 && clickCount < 10000) {
   update.innerHTML=`You realize when I said click me, I meant once, not 10000 times, right? (${clickCount})`
        } else if (clickCount >= 10000 && clickCount < 20000) {
        update.innerHTML=`You are making me go crazy!!!!! PLEASE DON'T CLICK ME (${clickCount})`
        } else if (clickCount >= 20000 && clickCount < 25000) {
        update.innerHTML=`I have no words... (${clickCount})`
        } else if (clickCount >= 25000) {
        update.innerHTML=`You really kept clicking.., I really don't know what to say, how, and why did you click a quarter of 100000 times? (${clickCount})`
        }
    };
    document.getElementById('ClickButton3').onclick=function(){
 clickCount+= 3;
 if (clickCount === 1){
 update.innerHTML='Yay, you clicked me'
 } 
 else if (clickCount === 2) {
  update.innerHTML='You clicked me again?'
  } 
  else if (clickCount === 3) {
   update.innerHTML='Ok, you can stop now'
   } 
   else if (clickCount >= 4 && clickCount <= 10) {
    update.innerHTML=`you are annoying me now (${clickCount})`
   } 
   else if (clickCount > 10 && clickCount <= 25) {
    update.innerHTML=`You have clicked me ${clickCount} times, please stop...`
   } else if (clickCount > 25 && clickCount < 100) {
   update.innerHTML=`Ok there is no way you click me 100 times, but seriously, PLEASE STOP (${clickCount})`
   } else if (clickCount >= 100 && clickCount <= 250) {
   update.innerHTML=`ok, I get it, you are addicted to clicking a button, but please, is there any way you could stop..., at least you haven't clicked me 250 times... (${clickCount})`
   } else if (clickCount > 250 && clickCount < 1000) {
   update.innerHTML=`BRUUHHHH you actually clicked me ${clickCount} times! You better not click me 1000 times, I am warning you`
   } else if (clickCount >= 1000 && clickCount < 5000) {
   update.innerHTML=`ok, you win..., I give up... (${clickCount})`
   } else if (clickCount >= 5000 && clickCount < 10000) {
   update.innerHTML=`You realize when I said click me, I meant once, not 10000 times, right? (${clickCount})`
        } else if (clickCount >= 10000 && clickCount < 20000) {
        update.innerHTML=`You are making me go crazy!!!!! PLEASE DON'T CLICK ME (${clickCount})`
        } else if (clickCount >= 20000 && clickCount < 25000) {
        update.innerHTML=`I have no words... (${clickCount})`
        }  else if (clickCount >= 25000) {
        update.innerHTML=`You really kept clicking.., I really don't know what to say, how, and why did you click a quarter of 100000 times? (${clickCount})`
        }
    };
   document.getElementById('ClickButton4').onclick=function(){
 clickCount+= 4;
 if (clickCount === 1){
 update.innerHTML='Yay, you clicked me'
 } 
 else if (clickCount === 2) {
  update.innerHTML='You clicked me again?'
  } 
  else if (clickCount === 3) {
   update.innerHTML='Ok, you can stop now'
   } 
   else if (clickCount >= 4 && clickCount <= 10) {
    update.innerHTML=`you are annoying me now (${clickCount})`
   } 
   else if (clickCount > 10 && clickCount <= 25) {
    update.innerHTML=`You have clicked me ${clickCount} times, please stop...`
   } else if (clickCount > 25 && clickCount < 100) {
   update.innerHTML=`Ok there is no way you click me 100 times, but seriously, PLEASE STOP (${clickCount})`
   } else if (clickCount >= 100 && clickCount <= 250) {
   update.innerHTML=`ok, I get it, you are addicted to clicking a button, but please, is there any way you could stop..., at least you haven't clicked me 250 times... (${clickCount})`
   } else if (clickCount > 250 && clickCount < 1000) {
   update.innerHTML=`BRUUHHHH you actually clicked me ${clickCount} times! You better not click me 1000 times, I am warning you`
   } else if (clickCount >= 1000 && clickCount < 5000) {
   update.innerHTML=`ok, you win..., I give up... (${clickCount})`
   } else if (clickCount >= 5000 && clickCount < 10000) {
   update.innerHTML=`You realize when I said click me, I meant once, not 10000 times, right? (${clickCount})`
        } else if (clickCount >= 10000 && clickCount < 20000) {
        update.innerHTML=`You are making me go crazy!!!!! PLEASE DON'T CLICK ME (${clickCount})`
        } else if (clickCount >= 20000 && clickCount < 25000) {
        update.innerHTML=`I have no words... (${clickCount})`
        } else if (clickCount >= 25000) {
        update.innerHTML=`You really kept clicking.., I really don't know what to say, how, and why did you click a quarter of 100000 times? (${clickCount})`
        }
    };
    document.getElementById('ClickButton5').onclick=function(){
 clickCount+= 5;
 if (clickCount === 1){
 update.innerHTML='Yay, you clicked me'
 } 
 else if (clickCount === 2) {
  update.innerHTML='You clicked me again?'
  } 
  else if (clickCount === 3) {
   update.innerHTML='Ok, you can stop now'
   } 
   else if (clickCount >= 4 && clickCount <= 10) {
    update.innerHTML=`you are annoying me now (${clickCount})`
   } 
   else if (clickCount > 10 && clickCount <= 25) {
    update.innerHTML=`You have clicked me ${clickCount} times, please stop...`
   } else if (clickCount > 25 && clickCount < 100) {
   update.innerHTML=`Ok there is no way you click me 100 times, but seriously, PLEASE STOP (${clickCount})`
   } else if (clickCount >= 100 && clickCount <= 250) {
   update.innerHTML=`ok, I get it, you are addicted to clicking a button, but please, is there any way you could stop..., at least you haven't clicked me 250 times... (${clickCount})`
   } else if (clickCount > 250 && clickCount < 1000) {
   update.innerHTML=`BRUUHHHH you actually clicked me ${clickCount} times! You better not click me 1000 times, I am warning you`
   } else if (clickCount >= 1000 && clickCount < 5000) {
   update.innerHTML=`ok, you win..., I give up... (${clickCount})`
   } else if (clickCount >= 5000 && clickCount < 10000) {
   update.innerHTML=`You realize when I said click me, I meant once, not 10000 times, right? (${clickCount})`
        } else if (clickCount >= 10000 && clickCount < 20000) {
        update.innerHTML=`You are making me go crazy!!!!! PLEASE DON'T CLICK ME (${clickCount})`
        } else if (clickCount >= 20000 && clickCount < 25000) {
        update.innerHTML=`I have no words... (${clickCount})`
        } else if (clickCount >= 25000) {
        update.innerHTML=`You really kept clicking.., I really don't know what to say, how, and why did you click a quarter of 100000 times? (${clickCount})`
        }
    };
     document.getElementById('button4').onclick=function() {
        (clickCount += 10000);
        alert('YOU FOUND THE SECRET BUTTON! You have been awarded 10000 clicks!')
        document.getElementById('button4').disabled=true;
        };
        var UpgradeButton=document.getElementById('UpgradeButton');
        var UpgradesPopup=document.getElementById('UpgradesPopup');
        var CloseUpgradesButton=document.getElementById('CloseUpgradesButton');
        UpgradeButton.addEventListener(
        "click", function(event) {
    event.preventDefault();
    UpgradesPopup.style.display = "block"
    });
    CloseUpgradesButton.addEventListener("click", function() {
    UpgradesPopup.style.display = "none";
  });
  
 var ButtonUpgrade1=document.getElementById('ButtonUpgrade1');
  ButtonUpgrade1.addEventListener("click", function() {
  if (clickCount >= 500) { 
 (clickCount -= 501); document.getElementById('ClickButton1').style.display = "none";
  document.getElementById('ClickButton2').style.display = "block";
  
  document.getElementById('ButtonUpgrade1').style.display = "none";
  document.getElementById('ButtonUpgrade2').style.display = "block";
  }
 });
 
 ButtonUpgrade2=document.getElementById('ButtonUpgrade2');
  ButtonUpgrade2.addEventListener("click", function() {
  if (clickCount >= 1000) { 
 (clickCount -= 1001); document.getElementById('ClickButton2').style.display = "none";
  document.getElementById('ClickButton3').style.display = "block";
  document.getElementById('ButtonUpgrade2').style.display = "none";
  document.getElementById('ButtonUpgrade3').style.display = "block";
  }
  });
  ButtonUpgrade3=document.getElementById('ButtonUpgrade3');
  ButtonUpgrade3.addEventListener("click", function() {
  if (clickCount >= 3000) { 
 (clickCount -= 3001); document.getElementById('ClickButton3').style.display = "none";
  document.getElementById('ClickButton4').style.display = "block";
  document.getElementById('ButtonUpgrade3').style.display = "none";
  
  document.getElementById('ButtonUpgrade4').style.display = "block";
  }
  });
  ButtonUpgrade4=document.getElementById('ButtonUpgrade4');
  ButtonUpgrade4.addEventListener("click", function() {
  if (clickCount >= 5000) { 
 (clickCount -= 5001); document.getElementById('ClickButton4').style.display = "none";
  document.getElementById('ClickButton5').style.display = "block";
  document.getElementById('ButtonUpgrade4').disabled=true;
  }
  });
  
 var Autoclicker1=document.getElementById('Autoclicker1');
 var
 ClickButton1=document.getElementById('ClickButton1');
 
 Autoclicker1.onclick=function() {
 if (clickCount >= 10000) {
 (clickCount -= 10001);
 document.getElementById('Autoclicker1').style.display = "none";
 document.getElementById ('Autoclicker2').style.display = "block";
 setInterval(function() {
 ClickButton1.click();
 }, 50);
 }
 };
 
 var Autoclicker2=document.getElementById('Autoclicker2');
 var
 ClickButton1=document.getElementById('ClickButton1');
 
 Autoclicker2.onclick=function() {
 if (clickCount >= 15000) {
 (clickCount -= 15001);
 document.getElementById('Autoclicker2').style.display = "none";
 document.getElementById('Autoclicker3').style.display = "block";
 setInterval(function() {
 ClickButton1.click();
 }, 50);
 }
 };
 
 var Autoclicker3=document.getElementById('Autoclicker3');
 var
 ClickButton1=document.getElementById('ClickButton1');
 
 Autoclicker3.onclick=function() {
 if (clickCount >= 25000) {
 (clickCount -= 25001);
 Autoclicker3.disabled = true;
 setInterval(function() {
 ClickButton1.click();
 }, 50);
 }
 };
 
 var TipsButton=document.getElementById('TipsButton');
        var TipsPopup=document.getElementById('TipsPopup');
        var CloseTipsButton=document.getElementById('CloseTipsButton');
        TipsButton.addEventListener(
        "click", function(event) {
    event.preventDefault();
    TipsPopup.style.display = "block"
    });
    CloseTipsButton.addEventListener("click", function() {
    TipsPopup.style.display = "none";
  });
