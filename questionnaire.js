document.addEventListener("DOMContentLoaded", function() {
    const yesRadio = document.getElementById('yes');
    const noRadio = document.getElementById('no');
    yesRadio.addEventListener('change', function() {
        if (yesRadio.checked) {
            covidOptions.style.display = 'block';
        } else {
            covidOptions.style.display = 'none';
        }
    });

    noRadio.addEventListener('change', function() {
        if (noRadio.checked) {
            covidoptions.style.display = 'none';
        } else {
            covidoptions.style.display = 'block';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('covidForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert("Form submitted successfully!");
        form.reset();
    });
});

document.addEventListener("keydown", function (event){
    if (event.ctrlKey){
       event.preventDefault();
    }
    if(event.keyCode == 123){
       event.preventDefault();
    }
});

document.addEventListener('contextmenu', 
    event => event.preventDefault()
);

var menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px"

        function togglemenu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "500px"
            }
            else
            {  
                menuList.style.maxHeight = "0px"
            }
        }
