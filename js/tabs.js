const tabsBtn = document.querySelectorAll('.navigation-tab__tablinks');
const tabsContent = document.querySelectorAll('.tabcontent');

tabsBtn.forEach(setOnTabClick);

function setOnTabClick(item) {
    item.addEventListener("click", function() {
        const currentBtn = item;
        const tabId = currentBtn.getAttribute("data-tab");
        const currentTab = document.querySelector(tabId);

        if ( !currentBtn.classList.contains('active-tab') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active-tab');
            });
    
            tabsContent.forEach(function(item) {
                item.classList.remove('active-tab');
            });
    
            currentBtn.classList.add('active-tab');
            currentTab.classList.add('active-tab');
        }
    });
}

document.querySelector(".navigation-tab__tablinks").click();


