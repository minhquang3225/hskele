setTimeout(() => {
    // getEles('cmt__wrapper')
    // getEles('.funcbar__edit--btn').forEach((btn=>{
    //     btn.addEventListener('click',()=>{
    //         getEles('.comment__content .content').forEach((t)=>{
    //             t.contentEditable=true;
    //         })
    //     })
    // }))
    //heart toggle active btn
    getEles('.funcbar__love--btn').forEach(btn=>{
        btn.addEventListener('click', ()=>{
            btn.classList.toggle('active');
        })
    })
}, 900);
