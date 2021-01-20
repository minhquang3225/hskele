
setTimeout(() => {
    
    //Search input focus
    getEle('.search__input').addEventListener('focusin', () => {
        getEle('.navRight__search').classList.add('active');
        getEle('.overlay').classList.add('overlay-active');
        bodyScroll(false);
        isEffect = false;
    })
    
    getEle('.overlay').addEventListener('click', () => {
        BackToTop('.search-sug__wrapper');
        clearActive('.navRight__search')
        clearActive('#navTopic')
        getEle('.overlay').classList.remove('overlay-active');
        isEffect = true;
        bodyScroll(true);
    })

}, 900);