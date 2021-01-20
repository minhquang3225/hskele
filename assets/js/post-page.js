setTimeout(() => {
    const GetSelectedText = () =>{
        if (window.getSelection) {
            const stext = window.getSelection();
            // console.log(stext.toString());
        }
        else {
            if (document.selection.createRange) {
                const stext = document.selection.createRange();
            
            }
        }
    }
    ShowingEle()
    GetSelectedText();
    getEles('.funcbar__answer--btn').forEach(btn => {
        btn.addEventListener('click', () => {
            let relpLevel = 2;
            targetEle = btn;

            for (let t = 0; t < relpLevel; t++) {
                targetEle = targetEle.parentElement
            }

            getEle('textarea', targetEle).focus();

        })
    })
    getEles('.comment-form__cancel--btn').forEach(btn => {
        btn.addEventListener('click', () => {
            let relpLevel = 2;
            targetEle = btn;

            for (let t = 0; t < relpLevel; t++) {
                targetEle = targetEle.parentElement
            }

            getEle('textarea', targetEle).value = "";
            getEle('textarea', targetEle).style.height = "fit-content";
            getEle('.comment-form__wrapper', targetEle).style.gridColumn = ""
            getEle('.comment-form__input', targetEle).classList.remove("grid-fill")

        })
    })
    getEles('[class^="funcbar__edit--btn"]').forEach(btn => {
        btn.addEventListener('click', () => {
            let relpLevel = btn.getAttribute('data-relp-level');
            // console.log(relpLevel);

            targetEle = btn;

            for (let t = 0; t < relpLevel; t++) {
                targetEle = targetEle.parentElement
            }
            textContentEle = getEle('textarea', targetEle);
            console.log(textContentEle);

            textContentEle.value = textContentEle.value ? '' : getEle('[class^="content"]', targetEle).innerText;

            getEle('.comment-form__input textarea', targetEle).focus();
            getEle('.comment-form__input textarea', targetEle).dispatchEvent(new Event('input'));

            getEle('.comment-form__wrapper', targetEle).style.gridColumn = "3 / span 22"
            getEle('.comment-form__input', targetEle).classList.add("grid-fill")
        })
    })

    // PostPageFn();
}, 1200)