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
