//HOME PAGE
//lang
const lang = document.querySelector(".header__lang");
const langDropdown =document.querySelector(".header__lang__list");
lang.addEventListener("click",(e)=>{
    e.stopPropagation();
    langDropdown.classList.toggle("d-none");
    if(langDropdown.getAttribute("class").includes("d-none")){
        lang.style.backgroundColor="transparent"
    }
    else{
        lang.style.backgroundColor="#22252C";
    }
});
langDropdown.addEventListener("click",(e)=>{
    e.stopPropagation();
});
document.body.addEventListener("click",()=>{
    langDropdown.classList.add("d-none");
    lang.style.backgroundColor="transparent"
})

//calc
const tabsCountryCalc = document.querySelectorAll(".calculator__tabs .tabs__separate");
const tabsChoose = document.querySelectorAll(".calculator .tabs__adjacent");
tabsCountryCalc.forEach((tab)=>{
    tab.addEventListener("click",()=>{
        tabsCountryCalc.forEach((activeTab)=>{
            activeTab.classList.remove("tabs__separate--isActive");
        })
        tab.classList.add("tabs__separate--isActive");
    })
})
tabsChoose.forEach((tab)=>{
    tab.addEventListener("click",()=>{
        tabsChoose.forEach((activeTab)=>{
            activeTab.classList.remove("tabs__adjacent--isActive");
        })
        tab.classList.add("tabs__adjacent--isActive");
    })
})

//tariffs
const tabsCountryTariffs = document.querySelectorAll(".tariffs .tabs__separate");
tabsCountryTariffs.forEach((tab)=>{
    tab.addEventListener("click",()=>{
        tabsCountryTariffs.forEach((activeTab)=>{
            activeTab.classList.remove("tabs__separate--isActive");
        })
        tab.classList.add("tabs__separate--isActive");
    })
})

const chooseMeasure = document.querySelectorAll(".range__measure");
chooseMeasure.forEach((measureBox)=>{
    measureBox.addEventListener("click",(e)=>{
        e.stopPropagation();
        const dropdown = measureBox.querySelector(".range__dropdown");
        dropdown.addEventListener("click",(e)=>{
            e.stopPropagation();
        })
        dropdown.classList.toggle("d-none");
    })
    document.body.addEventListener("click",()=>{
        const dropdown = measureBox.querySelector(".range__dropdown");
        dropdown.classList.add("d-none");
    })
})

//hamburger-menu
const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu__close-icon");
const mediaQueryXs = window.matchMedia('(max-width: 576px)')
const mediaQueryMd = window.matchMedia('(min-width: 992px)')

menuBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    menu.style.left="0%";
})
menuClose.addEventListener("click",()=>{
    menu.style.left="-100%";
})
menu.addEventListener("click",(e)=>{
    e.stopPropagation();
})
document.body.addEventListener("click",()=>{
    menu.style.left="-100%";
})

mediaQueryXs.addEventListener( "change", (e) => {
    if (e.matches) {
        menu.style.width="100vw";
  } else {
        menu.style.width="70%"
  }
})

mediaQueryMd.addEventListener( "change", (e) => {
    if (e.matches) {
        menuClose.click();
    } 
})




 


