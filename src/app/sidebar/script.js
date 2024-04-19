/*const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click", function() {
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("collapsed");

    // If you need to adjust any other elements (like the main content area) to reclaim the space
    const mainContent = document.querySelector(".main");
    if (sidebar.classList.contains("collapsed")) {
        mainContent.style.marginLeft = "0"; // Adjust as needed
    } else {
        mainContent.style.marginLeft = "264px"; // Adjust as needed
    }
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelector('#sidebar').style.visibility = 'visible';
    });
    
});


function toggleRootClass(){
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme',inverted);
}

function toggleLocalStorage(){
    if(isLight()){
        localStorage.removeItem("light");
    }else{
        localStorage.setItem("light","set");
    }
}

function isLight(){
    return localStorage.getItem("light");
}

if(isLight()){
    toggleRootClass();
}