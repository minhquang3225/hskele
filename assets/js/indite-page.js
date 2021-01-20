//Check button
setTimeout(()=>{
    ShowingEle();
    getEles('[name=series]').forEach(radioBtn=>{
        radioBtn.addEventListener('change', (e)=>{
            if(getEle('#series2').checked){
                getEle('#post-number').disabled = false;
                getEle('#post-number').value='2';
                // console.log(getEle('#post-number').value);
                
            }
            else{
                getEle('#post-number').disabled = true;
                getEle('#post-number').value='1';
            }
        })
    })
}, 400)
