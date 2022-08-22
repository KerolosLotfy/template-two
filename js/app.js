// Global  varilbes
const search_icon = document.querySelector("#search-icon");
const search_input = document.querySelector("#search");
const header_sec = document.querySelector(".header");
const left_arr = document.querySelector("#left-arrow");
const rigth_arr = document.getElementById("right-arrow");
const cricles = document.querySelectorAll(".cricle span");
const menuList = document.querySelectorAll("#menu-list li");
const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("nav ul");
const filter = document.querySelectorAll(".fil li");
const scrollUp = document.getElementById("scroll-up");
const sections = document.querySelectorAll("section")

// addition click event for search icon to show search input
search_icon.addEventListener("click", () => {
    search_input.classList.toggle("show-search");
});

// addition click event for menu list to active menu link
menuList.forEach((list) => {
    list.addEventListener("click", (e) => {
        e.preventDefault();
        menuList.forEach((list) => {
            list.classList.remove("active-link");
        })

        list.classList.add("active-link");
        
        // to smooth scroll to active section
        sections.forEach((sec) => {
            if (list.innerText.toLocaleLowerCase() === sec.id && list.classList.contains("active-link")) {
                sec.scrollIntoView({behavior: "smooth"});
                
            }
        })
        
    });
    
    
});




// forward arrow
let count = 0;
rigth_arr.addEventListener("click", () => {
    rigth_arr.classList.add("i");
    if (count < cricles.length - 1) {
        cricles.forEach((el) => {
            if (el.classList.contains("active")) {
                el.classList.remove("active");
                cricles[count + 1].classList.add("active");
            }
        })
        count += 1;
    } else {
        count = 0;
        cricles.forEach((el) => {
            el.classList.remove("active");
        })
        cricles[count].classList.add('active');
    }

    setTimeout(() => {
        rigth_arr.classList.remove("i");
    }, 100);
})

// back arrow
left_arr.addEventListener("click", () => {
    left_arr.classList.add("i");
    if (count > 0) {
        cricles.forEach((el) => {
            if (el.classList.contains("active")) {
                el.classList.remove("active");
                cricles[count - 1].classList.add("active");
            }
        })
        count -= 1;
    } else {
        count = cricles.length - 1;
        cricles.forEach((el) => {
            el.classList.remove("active");
        })
        cricles[count].classList.add('active');
    }
    setTimeout(() => {
        left_arr.classList.remove("i");
    }, 100);

})


cricles.forEach((el) => {
    el.addEventListener("click", () => {
        cricles.forEach((el) => {
            el.classList.remove("active");
        })
        el.classList.add("active");
    });
});


// show menu 
menuIcon.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
});


// filter to image in portfolio
filter.forEach((li) => {
    li.addEventListener("click", () => {
        filter.forEach((li) => {
            li.classList.remove("active");
        });
        li.classList.add("active");
    });
});

// add scroll event to show / hide  scroll top icon 
document.addEventListener("scroll", () => {
    if (scrollY > 400) {
        scrollUp.classList.add("show-up");
    } else {
        scrollUp.classList.remove("show-up");
    }
})