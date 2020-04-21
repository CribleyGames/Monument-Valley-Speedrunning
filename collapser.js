/* Ctrl + C, Ctrl + V from W3SCHOOLS
From here: https://www.w3schools.com/howto/howto_js_collapsible.asp */

var coll = document.getElementsByClassName("collapsible");
let idx;
var content;

for (idx = 0; idx < coll.length; idx++) {
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