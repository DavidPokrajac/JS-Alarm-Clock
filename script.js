window.onload = function(){
    
    var p = document.querySelector("p");    

    function tick(){
                
        var date = new Date();

        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();

        var hours = h < 10 ? "0" + h : h;
        var minutes = m < 10 ? "0" + m : m;
        var seconds = s < 10 ? "0" + s : s;
                
        var html = hours + ":" + minutes + ":" + seconds;
        p.textContent = html;
                
    }

    setInterval(tick, 1000);

    var monday = document.querySelector("#days span:first-child");
    var tuesday = document.querySelector("#days span:nth-child(2)");
    var wednesday = document.querySelector("#days span:nth-child(3)");
    var thursday = document.querySelector("#days span:nth-child(4)");
    var friday = document.querySelector("#days span:nth-child(5)");
    var saturday = document.querySelector("#days span:nth-child(6)");
    var sunday = document.querySelector("#days span:last-child");

    var el = new Date();
    var yo = el.getDay();

    switch(yo){
        
        case 1:
            monday.style.color = "green";
            monday.style.fontWeight = "bold";
            break;
        case 2:
            tuesday.style.color = "green";
            tuesday.style.fontWeight = "bold";
            break;
        case 3:
            wednesday.style.color = "green";
            wednesday.style.fontWeight = "bold";
            break;
        case 4:
            thursday.style.color = "green";
            thursday.style.fontWeight = "bold";
            break;
        case 5:
            friday.style.color = "green";
            friday.style.fontWeight = "bold";
            break;
        case 6:
            saturday.style.color = "green";
            saturday.style.fontWeight = "bold";
            break;
        case 7:
            sunday.style.color = "green";
            sunday.style.fontWeight = "bold";
            break;
    
    }

    var date = document.getElementById("date");

    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    date.innerHTML = month[el.getMonth()] + ' ' + el.getDate() + ', ' + el.getFullYear();
}