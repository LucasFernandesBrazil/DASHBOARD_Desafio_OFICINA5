function sideBar_recall (){
    var sideBar = document.getElementById("Sidebar")

    if (sideBar.style.width === "11%") {
        document.getElementById("Sidebar").style.width = "2%";
        document.getElementById("main").style.marginLeft = "2%";
    }

    else {
        document.getElementById("Sidebar").style.width = "11%";
        document.getElementById("main").style.marginLeft = "11%";
    }
}