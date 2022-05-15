var coll = document.getElementsByClassName("collapsible"),
	contents = document.getElementsByClassName("collapse-content");

for (let idx = 0; idx < coll.length; idx++) {
	const ii = idx;
	coll[ii].addEventListener("click", function () {
		console.log("clicked " + ii);
		this.classList.toggle("active");
		var content = contents[ii];
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
			setTimeout(function () {
				content.style.display = "none";
			}, 200);
		} else {
			content.style.display = null;
			content.style.maxHeight = content.scrollHeight + "px";
		}

		return false;
	});
}

for (const toExpand of document.querySelectorAll(".collapse-content.expanded")) {
	toExpand.style.maxHeight = toExpand.scrollHeight + "px";
	toExpand.classList.toggle("expanded");
}