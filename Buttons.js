function msg()
{  
    myBTN = document.getElementsByClassName("nav_options")
    //alert(myBTN[0].innerHTML);  
    myBTN[0].innerHTML = '<h1>Coleccion</h1><button class="B1"type="button" value="imgs 1" onclick="msg()">Try it</button><input class="B2" type="button" value="imgs 2" onclick="msg2()"/>'

    myIMG = document.getElementsByTagName("div")
    //alert(myIMG[0].innerHTML);  

    myIMG[0].innerHTML = '<div class="column"><img src="img/IMG (1).jpg"><img src="img/IMG (6).jpg"><img src="img/IMG (3).jpg"><img src="img/IMG (8).jpg"><img src="img/IMG (11).jpg"></div><div class="column"><img src="img/IMG (9).jpg"><img src="img/IMG (5).jpg"><img src="img/IMG (3).jpg"><img src="img/IMG (6).jpg"><img src="img/IMG (10).jpg"></div><div class="column"><img src="img/IMG (11).jpg"><img src="img/IMG (2).jpg"><img src="img/IMG (6).jpg"><img src="img/IMG (10).jpg"><img src="img/IMG (5).jpg"></div><div class="column"><img class="img" src="img/IMG (10).jpg"><img class="img" src="img/IMG (6).jpg"><img class="img" src="img/IMG (9).jpg"><img class="img" src="img/IMG (4).jpg"><img class="img" src="img/IMG (5).jpg"></div>'
} 

function msg2()
{  

    myBTN = document.getElementsByClassName("nav_options")
    //alert(myBTN[0].innerHTML);  
    myBTN[0].innerHTML = '<h1>Coleccion</h1><button class="B2"type="button" value="imgs 1" onclick="msg()">Try it</button><input class="B1" type="button" value="imgs 2" onclick="msg2()"/>'



    myIMG = document.getElementsByTagName("div")
    //alert(myIMG[0].innerHTML);  
 
    myIMG[0].innerHTML = '\n        <div class="column">\n            <img src="img/IMG (4).jpg">\n            <img src="img/IMG (6).jpg">\n            <img src="img/IMG (3).jpg">\n            <img src="img/IMG (8).jpg">\n            <img src="img/IMG (11).jpg">\n        </div>\n\n        <div class="column">\n            <img src="img/IMG (9).jpg">\n            <img src="img/IMG (5).jpg">\n            <img src="img/IMG (3).jpg">\n            <img src="img/IMG (6).jpg">\n            <img src="img/IMG (10).jpg">\n        </div>\n\n        <div class="column">\n            <img src="img/IMG (11).jpg">\n            <img src="img/IMG (2).jpg">\n            <img src="img/IMG (6).jpg">\n            <img src="img/IMG (10).jpg">\n            <img src="img/IMG (5).jpg">\n        </div>\n\n        <div class="column">\n            <img class="img" src="img/IMG (10).jpg">\n            <img class="img" src="img/IMG (6).jpg">\n            <img class="img" src="img/IMG (9).jpg">\n            <img class="img" src="img/IMG (4).jpg">\n            <img class="img" src="img/IMG (5).jpg">\n        </div>\n\n    '
}

