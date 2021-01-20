const ToggleClass = () => {
    getEles('[data-toggle-class]').forEach(btn => {
        let toggleTargets = btn.dataset.toggleTarget ? btn.dataset.toggleTarget.split(', ') : btn;
        // console.log(btn.dataset.relpLevel);
        // console.log(btn);
        
        let relpLevels = btn.dataset.relpLevel ? JSON.parse(btn.dataset.relpLevel).class: '';
        
        let toggleClasses = btn.dataset.toggleClass.split(', ');
        
        btn.addEventListener('click', () => {
            for (const i in toggleClasses) {
                let relpLevel = parseInt(relpLevels[i]);
                let targetEle = btn; 
                // Lấy dựa vào phần tử cha
                if (relpLevel > 0) {
                    targetEle = btn;
                    for (let t = 0; t < relpLevels; t++) {
                        targetEle = targetEle.parentElement;
                    }
                    
                    targetEle.classList.toggle(toggleClasses[i])
                }
                //Lấy nội trong btn
                else if (!toggleTargets[i] || relpLevel == 0) {
                    targetEle.classList.toggle(toggleClasses[i]?toggleClasses[i]:'active');
                }
                //Lấy từ documment
                else {
                    getEle(toggleTargets[i]).classList.toggle(toggleClasses[i]?toggleClasses[i]:'active');
                }
            }
            
        })
    })
}
const SwitchClass = () => {
    getEles('[data-switch-class]').forEach(btn => {
        btn.dataset.switchClass.split(', ').forEach(dataTargetEle => {
            classArr = dataTargetEle.split(' ');
            class_1 = classArr[0];
            class_2 = classArr[1];

        })
    })
}
setTimeout(() => {
    ToggleClass();
    SwitchClass();
},600);