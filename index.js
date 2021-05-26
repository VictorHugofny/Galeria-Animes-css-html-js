    var container = document.querySelector(".grid-container")
    var dir = "../imgs/" + document.getElementById("dir").innerHTML + "/"
 
    frases.forEach((e,i) =>{
        var item = document.createElement("div");
            item.className="grid-item";

        var frase = document.createElement("i");
            frase.innerHTML= e;
            item.append(frase)


        var img = document.createElement("img");
            img.src= dir + "g" + i + ".gif";
            img.width= 513;
            img.height=342;
            img.alt = "foto fullmetal"
            item.append(img);

        container.append(item)
    })
