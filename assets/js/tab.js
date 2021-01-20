setTimeout(()=>{
    const tabs = getEles('[data-tab-target]');
        const tabContents = getEles('[data-tab-content]')

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                target =  getEle(tab.dataset.tabTarget); // Quan trọng: tabTarget ở đây nghĩa là sao ==> nó chính là data-tab-target ở trên với việc bỏ đi data- và thay thế -target thành Taget(dấu từ bị biến thành chữ viết hoa)

                tabContents.forEach(tabContent => {
                    tabContent.classList.remove('tab-active');
                });

                //target nhắm tới thằng có id nằm trong dataset
                target.classList.add('tab-active');

                tabs.forEach(tab => {
                    tab.classList.remove('tab-active');
                });
                tab.classList.add('tab-active')

                //target nhắm tới thằng có id nằm trong dataset
                target.classList.add('tab-active');
            })
        });
}, 500);
()=>{
    
}