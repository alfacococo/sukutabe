const menu = document.getElementById('hamburger_btn')
const bars = document.querySelectorAll('.hamburger_btn span')
const menuArea = document.getElementById('hamburger_area')
let isMenuOpen = false
const pageToTop = document.getElementById('pageToTop')


const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

window.onscroll = () => {
    const scrollY = window.scrollY
    if (310 < scrollY) {
        pageToTop.style.display = 'flex'
    } else if (310 > scrollY) {
        pageToTop.style.display = 'none'
    }

}

// ヘッダーの高さ分だけコンテンツを下げる
// $(function () {
//     const height = $(".js-header").height();
//     $("main").css("margin-top", height);
// });
// ページ内スクロール
$(function () {
    // ヘッダーの高さ取得
    const headerHeight = $(".js-header").height();
    $('a[href^="#"]').click(function () {
        const speed = 600;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        // ヘッダーの高さ分下げる
        let position = target.offset().top - headerHeight - 55;
        $("body,html").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

menu.onclick = () => {
    if (isMenuOpen === true) {
        bars.forEach((element, index) => {
            if (index === 0) {
                element.style.transform = 'rotate(0)'
                element.style.top = '0'
            } else if (index === 1) {
                element.style.opacity = '1'
            } else if (index === 2) {
                element.style.transform = 'rotate(0)'
                element.style.top = '20px'
            }
        })
        menuArea.style.transform = 'scaleX(0)'
        menuArea.style.opacity = '0'
        isMenuOpen = false
    } else {
        bars.forEach((element, index) => {
            if (index === 0) {
                element.style.transform = 'rotate(45deg)'
                element.style.top = '14px'
            } else if (index === 1) {
                element.style.opacity = '0'
            } else if (index === 2) {
                element.style.transform = 'rotate(-45deg)'
                element.style.top = '14px'
            }
        })
        menuArea.style.transform = 'scaleX(1)'
        menuArea.style.opacity = '1'
        isMenuOpen = true
    }
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
