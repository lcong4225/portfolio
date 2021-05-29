//Portfolio Item Filter

const filterContainer = document.querySelector('.portfolio-filter'),
    filterBtns = filterContainer.children;
totalFilterBtn = filterBtns.length;
portfolioItems = document.querySelectorAll('.portfolio-item'),
    totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener('click', function () {
        filterContainer.querySelector('.active').classList.remove('active');
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');
        for (let k = 0; k < totalPortfolioItem; k++) {
            if (filterValue === portfolioItems[k].getAttribute('data-category')) {
                portfolioItems[k].classList.add('show');
                portfolioItems[k].classList.remove('hide');
            } else {
                portfolioItems[k].classList.add('hide');
                portfolioItems[k].classList.remove('show');
            }
            if (filterValue === 'all') {
                portfolioItems[k].classList.add('show');
                portfolioItems[k].classList.remove('hide');
            }
        }
    })
}

//Portfolio lightbox

const lightbox = document.querySelector('.lightbox'),
    lightboxImg = lightbox.querySelector('.lightbox-img'),
    lightboxClose = lightbox.querySelector('.fa-times-circle'),
    lightboxText = lightbox.querySelector('.caption-text'),
    lightboxCounter = lightbox.querySelector('.caption-counter');

let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener('click', function () {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}

function nextItem() {
    if (itemIndex === totalPortfolioItem - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem();
}

function prevItem() {
    if (itemIndex === 0) {
        itemIndex = totalPortfolioItem - 1;
    } else {
        itemIndex--;
    }
    changeItem();
}

function changeItem() {
    imgSrc = portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src');
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector('h4').innerHTML;

    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItem;
}

function toggleLightbox() {
    lightbox.classList.toggle('open');
}

//close lightbox

lightbox.addEventListener('click', function (event) {
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
        console.log(event.target);
    }  
})

// Aside Navbar

const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll('li'),
totalNavList = navList.length;

for(let i = 0; i< totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        for(let j = 0; j<totalNavList;j++){
            navList[j].querySelector("a").classList.remove('active');
        }
        this.classList.add("active");
        
    })
}

const navTogglerBtn=document.querySelector('.nav-toggler'),
aside=document.querySelector('.aside'),
mainContent=document.querySelector('.main-content');

navTogglerBtn.addEventListener('click', function(){
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    mainContent.classList.toggle('open');
}
//top-link
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    
    // setup back to top link

    if (scrollHeight > 500) {
        //console.log("helo");

        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});