export async function enableNavigation() {
    const menuButton = document.querySelector("#global-header-button");
    if (!menuButton) return;

    menuButton.addEventListener("click", (ev) => {
        let target = ev.target;
        
        if (target.tagName != "BUTTON") {
            target = target.closest("button");
        }

        let globalNavSplitBtn = document.querySelector("#global-nav");
        let closedButton = document.querySelector('#global-header-button-closed');
        let openButton = document.querySelector('#global-header-button-open');
        
        
        if (openButton.classList.contains("hidden")) {
            openButton.classList.remove('hidden');
            closedButton.classList.add('hidden');
        }
        
        else if (closedButton.classList.contains("hidden")) {
            openButton.classList.add('hidden');
            closedButton.classList.remove('hidden');    
        }
        
        if (globalNavSplitBtn.classList.contains("global-nav-toggle")) {
            globalNavSplitBtn.classList.remove("global-nav-toggle");
        }
        else {
            globalNavSplitBtn.classList.add("global-nav-toggle");
        }

        if (target.classList.contains("global-header-toggle")) {
            target.classList.remove("global-header-toggle");
        }
        else {
            target.classList.add("global-header-toggle");
        }
        
        //--------------------// 

        if (target.classList.contains("global-header-toggle")) {  
            target.setAttribute("aria-expanded", true);
        } 
        else {  
            target.setAttribute("aria-expanded", false);
        }
    });
}

export async function enableSubNavigation() {
    const subMenuButton = document.querySelector("#global-nav-button-open");
    if (!subMenuButton) return;

    subMenuButton.addEventListener("click", (ev) => {
        let target = ev.target;
        let globalNavHeader = document.querySelector("#global-nav-heading2");
        let globalNavSubMenu = document.querySelector("#global-nav-submenu1");
        let globalNavLearn = document.querySelector("#global-nav-list2");
        let globalNavInvolved = document.querySelector("#global-nav-list3");


        if (target.tagName != "BUTTON") {
            target = target.closest("button");
        }
        
        target.classList.toggle("global-nav-button-toggle")
        globalNavHeader.classList.toggle("global-nav-heading-toggle");
        globalNavSubMenu.classList.toggle("global-nav-submenu-toggle");
        globalNavLearn.classList.toggle("global-nav-list-toggle");
        globalNavInvolved.classList.toggle("global-nav-list-toggle");

        // --------------------// 
        if (globalNavHeader.classList.contains("global-nav-heading-toggle")) {
            globalNavHeader.setAttribute("aria-expanded", true);
        } else {
            globalNavHeader.setAttribute("aria-expanded", false);
        }

        if (globalNavSubMenu.classList.contains("global-nav-submenu-toggle")) {
            globalNavSubMenu.setAttribute("aria-expanded", true);
        } else {
            globalNavSubMenu.setAttribute("aria-expanded", false);
        }

        if (target.classList.contains("global-nav-button-toggle")) {  
                target.setAttribute("aria-expanded", true);
            } 
        else {  
            target.setAttribute("aria-expanded", false);
        }
    });
}