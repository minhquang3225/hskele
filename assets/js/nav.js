setTimeout(() => {
    //nav__item-active
    getEles('.nav__item').forEach(item=>{
        item.addEventListener('click', (e)=>{
            clearActive('.nav__item')
            item.classList.add('active');
        })
    });
    //topic active
    getEles('.optCard').forEach(opt => {
        opt.addEventListener('click', () => {
            clearActive('.optCard');
            opt.classList.add('active');
        })
    })
    getEle('#navTopic').addEventListener('click', () => {
        getEle('#navTopic').classList.add('active');
        getEle('.overlay').classList.add('overlay-active');
        isEffect = true;
        bodyScroll(false);
    })

    //dialog
    // window.addEventListener('click', e => {
    //     if (getEle('.garget__setting').contains(e.target)) {
    //         getEle('#setting-box').classList.add('active')
    //     } else {
    //         getEle('#setting-box').classList.remove('active')
    //     }
    //     if (getEle('.garget__noti').contains(e.target)) {
    //         getEle('#noti-box').classList.add('active')
    //     } else {
    //         BackToTop('.noti-box__wrapper');
    //         getEle('#noti-box').classList.remove('active') //quá nhanh
    //     }
    // });

    //nav hide and show
    // var lastScrollTop = 0;
    // navbar = document.getElementById('navbar');
    // window.addEventListener("scroll", () => {
    //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     if (scrollTop > lastScrollTop) {
    //         navbar.style.top = "-80px";
    //     }
    //     else {
    //         navbar.style.top = "0"
    //     }
    //     lastScrollTop = scrollTop;                                //=0 nếu muốn lên top mới hiện lại
    // })

}, 800);