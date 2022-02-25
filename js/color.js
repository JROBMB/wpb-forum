var dropdownlist = document.getElementById("color");

dropdownlist.addEventListener("change", function(){
    var selectedIndex = dropdownlist.options.selectedIndex;
    var hexCodeColor = dropdownlist.options[selectedIndex].value;

    var body = document.body;

    body.style.backgroundColor = hexCodeColor;
});