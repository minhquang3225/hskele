
setTimeout(()=>{
    getEles('[data-toggle="modal"]').forEach(button => {
        button.addEventListener('click', (e) => {
            let target = getEle(button.dataset.target);
            target.classList.add('active');
        })
    })
    // getEle('#close-btn').addEventListener('click', () =>{
    //     clearActive('#rating-modal');
    // });
}, 1200)