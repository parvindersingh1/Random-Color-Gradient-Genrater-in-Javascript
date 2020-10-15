colorCodes = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

 var btn = document.getElementById('btn');
 var gradientBox = document.getElementById('gradient');
 var box = document.getElementById('box');
 var gradientBox = document.getElementById('gradient');
 var colorBox1 = document.getElementById('colorBox1');
 var colorBox2 = document.getElementById('colorBox2');
 var body = document.body;

 btn.addEventListener('click',randomGradient);

function randomGradient(){
    var color1 = "#"+colorCodes[Math.round(Math.random()*15)]
                    +colorCodes[Math.round(Math.random()*15)]
                    +colorCodes[Math.round(Math.random()*15)]
                    +colorCodes[Math.round(Math.random()*15)]
                    +colorCodes[Math.round(Math.random()*15)]
                    +colorCodes[Math.round(Math.random()*15)]+
                    "";
    var color2 = "#"+colorCodes[Math.round(Math.random()*15)]
                    +colorCodes[Math.round(Math.random()*15)]
                    +colorCodes[Math.round(Math.random()*15)]
                    +colorCodes[Math.round(Math.random()*15)]
                    +colorCodes[Math.round(Math.random()*15)]
                    +colorCodes[Math.round(Math.random()*15)]+
                    "";

    body.style.background = "linear-gradient(90deg,"+color1+","+color2+")";
    gradientBox.style.background = "linear-gradient(90deg,"+color1+","+color2+")";
    box.style.background = "linear-gradient(90deg,"+color2+","+color1+")";

    
    var div = document.querySelector('.color').appendChild(document.createElement("div"));
        div.className = "colors1";

    var  coptBtn1 = div.appendChild(document.createElement("button"));
        coptBtn1.setAttribute('data-clipboard-text',color1);
        coptBtn1.className = "btn";
        coptBtn1.innerText = "Copy";
        
        
        

    var  child = div.appendChild(document.createElement("div"));
        child.className= "color3";

    var  child1 = div.appendChild(document.createElement("div"));
        child1.className= "color4";

        child.innerHTML = color1;
        child1.innerHTML = color2;
        child.style.background = color1;
        child1.style.background = color2;


    colorBox1.innerHTML = color1;
    colorBox1.style.background = color1;
    colorBox2.innerHTML = color2;
    colorBox2.style.background = color2;

    var  coptBtn2 = div.appendChild(document.createElement("button"));
        coptBtn2.setAttribute('data-clipboard-text',color2);
        coptBtn2.className = "btn";
        coptBtn2.innerText = "Copy";

        document.querySelectorAll('.btn').forEach(function(element){

            element.addEventListener('click',copy);
        })

        function copy(){

                document.querySelector('.helper-text').innerHTML = "Color Copyed to Clipboard";
                document.querySelector('.helper-text').style.animation =  "fade 1s linear ";
                
                setTimeout( function(){
                document.querySelector('.helper-text').style.animation =  "";
                },1000)

        }


}


var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.log(e);
});

clipboard.on('error', function(e) {
    console.log(e);
});
