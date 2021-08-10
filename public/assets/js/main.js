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


//FAQ PAGE
const faqButtons = document.querySelectorAll(".accordion__btn");

faqButtons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        e.stopPropagation();
        const collapse = document.querySelector(`[data-collapse=${btn.getAttribute("data-btn")}]`);
        faqButtons.forEach((active)=>{
            if(active!==btn){
                const activeCollapse = document.querySelector(`[data-collapse=${active.getAttribute("data-btn")}]`);
                activeCollapse.classList.add("h-0");
            }
        })
        collapse.classList.toggle("h-0");
    })
})

//TARIFF PAGE
const tabsCountryTariffsPage = document.querySelectorAll(".tariffs-page .tabs__separate");
tabsCountryTariffsPage.forEach((tab)=>{
    tab.addEventListener("click",()=>{
        tabsCountryTariffsPage.forEach((activeTab)=>{
            activeTab.classList.remove("tabs__separate--isActiveTariffs");
        })
        tab.classList.add("tabs__separate--isActiveTariffs");
    })
})


//signup
const tabsChooseSignUp = document.querySelectorAll(".signup .tabs__adjacent");
tabsChooseSignUp.forEach((tab)=>{
    tab.addEventListener("click",()=>{
        tabsChooseSignUp.forEach((activeTab)=>{
            activeTab.classList.remove("tabs__adjacent--isActive");
        })
        tab.classList.add("tabs__adjacent--isActive");
    })
})

//form
const inputs = document.querySelectorAll(".form__input");


inputs.forEach((input)=>{
    const label = input.nextElementSibling;
    const warning = label.nextElementSibling;
    const formIcon = input.previousElementSibling;
        formIcon?.addEventListener("click",()=>{
            if(input.getAttribute("type")==="text"){
                input.setAttribute("type","password");
            }
            else{
                input.setAttribute("type","text");
            }
        })
        input.addEventListener("focusin",(e)=>{
            input.style.paddingBottom = "0";
            label.style.left="17px";
            label.style.top="4px";
            label.style.fontSize="14px";
            label.style.color="rgba(white, .2)";
        })
        input.addEventListener("focusout",(e)=>{
            input.style.paddingBottom = "0";
                label.style.left="17px";
                label.style.top="16px";
                label.style.fontSize="16px";
                label.style.color="rgba(white, .3)";
        })
    input.addEventListener("input",(event)=>{
        input.addEventListener("focusout",(e)=>{
            if(event.target.value){
                input.style.paddingBottom = "0";
                label.style.left="17px";
                label.style.top="4px";
                label.style.fontSize="14px";
                label.style.color="rgba(white, .2)";
                warning?.classList.add("d-none");
                
            }
            else{
                input.style.paddingBottom = "0";
                label.style.left="17px";
                label.style.top="16px";
                label.style.fontSize="16px";
                label.style.color="rgba(white, .3)";
                warning?.classList.remove("d-none");
            }
            
        });

        

        
        
    })
})
 




