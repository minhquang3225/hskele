setTimeout(() => {
    // window.addEventListener("click", (e) => {
    //     getEles("[data-toggle='dialog']").forEach((dialogBtn) => {
    //         let isDialogBtn = false;
    //         let isToggleBtn = dialogBtn.dataset.toggleBtn;
    //         let relpLevel = dialogBtn.dataset.relpLevel;
    //         let dialogTarget =getEle(dialogBtn.dataset.target);
    //         if (relpLevel) {
    //             dialogTarget = dialogBtn;
    //             for (let t = 0; t < relpLevel; t++) {
    //                 dialogTarget = dialogTarget.parentElement;
    //             }
    //             console.log(dialogTarget);
    //             dialogTarget = getEle(dialogBtn.dataset.target, dialogTarget)
    //             // console.log(dialogTarget);


    //         }
    //         else{
    //             dialogTarget = getEle(dialogBtn.dataset.target);;
    //         }
    //         // console.log(dialogBtn);

    //         let dialogBtnEles = getEles("[data-toggle='dialog'][data-target='" + dialogBtn.dataset.target + "']")

    //         for (let i = 0; i < dialogBtnEles.length; i++) {
    //             if (dialogBtnEles[i].contains(e.target) && !isToggleBtn) {
    //                 isDialogBtn = true;
    //                 break;
    //             }
    //         }
    //         // if (!isToggleBtn) {
    //         //     isDialogBtn = false;
    //         // }

    //         if (!dialogTarget.contains(e.target) && !isDialogBtn) {
    //             if (e.target.dataset.scroll) {
    //                 BackToTop(e.target.dataset.scroll);
    //             }
    //             dialogTarget.classList.remove("active");
    //         }
    //     });
    //     if (e.target.dataset.toggle == "dialog") {
    //         getEle(e.target.dataset.target).classList.toggle("active");
    //         if (e.target.dataset.dialogScroll) {
    //             getEle(e.target.getAttribute('data-target')).scrollIntoView({ block: 'center', behavior: 'smooth' });
    //         }
    //     }
    // });
    let dialogBtns = getEles('[data-toggle="dialog"]');
    let arrayTargets = [];
    let arrayBtns = [];
    let arrayKeys = []; //Nhận biết 2 button tác động vào cùng một target

    dialogBtns.forEach((btn) => {
        let relpLevel = btn.dataset.relpLevel;
        let targetWrapper = getEle(btn.dataset.targetWrapper);
        let dialogWrapper;
        let dialogTarget;
        let typeAttribute = getEle(btn.dataset.typeAtrribute);
        let key;

        if (relpLevel) {
            dialogWrapper = btn;
            for (let i = 0; i < relpLevel; i++) {
                dialogWrapper = dialogWrapper.parentElement;
            }
        }
        dialogTarget = getEle(btn.dataset.target, dialogWrapper);

        arrayTargets.push(dialogTarget);
        arrayBtns.push(btn);

        if (dialogWrapper) {
            key = dialogWrapper.id;
        } else if (targetWrapper) {
            key = targetWrapper.id;
        } else {
            key = dialogTarget.id;
        }

        arrayKeys.push(key);

        btn.addEventListener("click", () => {
            dialogTarget.classList.toggle("active");
            if (btn.dataset.toTop) {
                BackToTop(btn.dataset.toTop);
            }
            if (btn.hasAttribute("scroll-to-dialog")) {
                dialogTarget.scrollIntoView({ block: "center", behavior: "smooth" });
            }
        });
    });

    //Xác định 2 wrapper trùng nhau
    let result = new Object();
    for (let i = 0; i < arrayKeys.length; i++) {
        if (result[arrayKeys[i]]) {
            result[arrayKeys[i]].push(i);
        } else {
            result[arrayKeys[i]] = [i];
        }
    }

    window.addEventListener("click", (e) => {
        for (let i in arrayTargets) {
            let isValidBtn = testValidBtn(e, result[arrayKeys[i]], arrayBtns);

            if (!arrayTargets[i].contains(e.target) && !isValidBtn) {
                arrayTargets[i].classList.remove("active");
            }
        }
    });

    let testValidBtn = (e, arrayIndex, arrayBtns) => {
        // console.log(arrayIndex);
        for (let j in arrayIndex) {
            // console.log(arrayIndex[j]);
            if (arrayBtns[arrayIndex[j]].contains(e.target)) {
                return true;
            }
        }
    };
}, 1800)
