const navEl = document.querySelector('header .header');
const scrollEl = document.querySelector('main .visual');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if(window.scrollY >820) {
        // navEl.classList.remove('active');
    } else {
navEl.classList.add('active');
    }
}, 300));


const fadeinEls = document.querySelectorAll('.visual .fade-in');
fadeinEls.forEach(function(fadeinEls, index) {
    gsap.to(fadeinEls, 1, {
        // x: -100,
        delay: (index + 1) * .8,
        opacity: 1
    })
})

new Swiper('.more .swiper-container', {
    slidesPerView: 1,
    loop: false,
    // autoplay: {
    //     delay: 5000
    // },
    pagination: {
        el: '.more .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.more .swiper-prev',
        nextEl:  '.more .swiper-next'
    }
});

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

// fetch("https://starbugs.herokuapp.com/api/menus")
// .then((response)=>(response.json()))
// .then((data)=>console.log(data))


   

// fetch('https://starbugs.herokuapp.com/api/menus',{
//     method:"POST",
//     headers : {"Content-Type" : "application/json"},
//     body : JSON.stringify({
//       key : value
//     })
//     }).then(response=>response.json())
//     .then(data=>console.log(data))
//     .catch(error=>console.log(error));



    // function products() {
    //     return fetch("data/data.json")
    //     .then((response) => response.json())
    //     .then((json) => json.product);

    // }

    // products().then((product) => {
    //     console.log(product);
    // })

    const stepEl = document.querySelector('.step1Show');
    const step1ShowBtn = document.querySelector('.step1');

    const step1Change = document.getElementsByClassName('.step1');

    let isShowInformation = false;
    step1ShowBtn.addEventListener('click', function () {
        isShowInformation = !isShowInformation
        if (isShowInformation) {
            stepEl.classList.add('hide');
            step1Change.appendChild('<i class="fa-solid fa-minus"></i>');
          
        } else {
            stepEl.classList.remove('hide');
        }
    });
 
    $('.media-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
    })