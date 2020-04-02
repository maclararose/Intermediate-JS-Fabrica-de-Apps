var total = 0;

function createBallon(){
    
    var ballon = document.createElement("div");
    ballon.setAttribute("class", "ballon");

    var x = Math.floor(Math.random() * 600);
    var y = Math.floor(Math.random() * 400);

    ballon.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
    ballon.setAttribute("onclick", "popped(this)");

    document.body.appendChild(ballon);

}

function popped(object){
    document.body.removeChild(object);

    total++;
    var score = document.getElementById("total");
    score.innerHTML = "Popped ballons: " + total;

}

function loadGame(){
    setInterval(createBallon, 1000);

}