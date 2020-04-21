/* Ctrl + C, Ctrl + V from W3SCHOOLS
From here: https://www.w3schools.com/howto/howto_js_collapsible.asp */

var coll = document.getElementsByClassName("collapsible");
let idx;
var content;

for (idx = 0; idx < coll.length; idx++) {
    if(coll[idx].classList.contains("only-one-a")) {
        const ii = idx;
        coll[idx].addEventListener("click", function() {
            for (let j = 0; j < coll.length; j++) {
                if(j != ii && coll[j].classList.contains("only-one-a")) {
                    coll[j].classList.remove("active");

                    coll[j].nextElementSibling.style.maxHeight = null;
                    setTimeout(function() {
                        coll[j].nextElementSibling.style.display = "none";
                    }, 200);
                }
            }
            this.classList.toggle("active");
            content = this.nextElementSibling;
            console.info("ii=" + ii);
            if (content.style.maxHeight){
                content.style.maxHeight = null;
                setTimeout(function() {
                    content.style.display = "none";
                }, 200);
            } else {
                content.style.display = null;
                content.style.maxHeight = content.scrollHeight + "px";
            }

            return false;
        });
    } else if(coll[idx].classList.contains("only-one-b")) {
       const ii = idx;
       coll[idx].addEventListener("click", function() {
           for (let j = 0; j < coll.length; j++) {
               if(j != ii && coll[j].classList.contains("only-one-b")) {
                   coll[j].classList.remove("active");

                   coll[j].nextElementSibling.style.maxHeight = null;
                   setTimeout(function() {
                        coll[j].nextElementSibling.style.display = "none";
                   }, 200);
               }
           }
           this.classList.toggle("active");
           content = this.nextElementSibling;
           console.info("ii=" + ii);
           if (content.style.maxHeight){
               content.style.maxHeight = null;
               setTimeout(function() {
                   content.style.display = "none";
               }, 200);
           } else {
               content.style.display = null;
               content.style.maxHeight = content.scrollHeight + "px";
           }

           return false;
       });
   } else {
        coll[idx].addEventListener("click", function() {
            this.classList.toggle("active");
            content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
                setTimeout(function() {
                    content.style.display = "none";
                }, 200);
            } else {
                content.style.display = null;
                content.style.maxHeight = content.scrollHeight + "px";
            }

            return false;
        });
    }
}