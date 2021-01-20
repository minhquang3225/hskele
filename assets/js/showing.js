const ShowingEle = () => {
    getEles('[data-toggle*=showing]').forEach(btn => {
        let showingModes = btn.dataset.showingModes.split(' ');
        let eventNames = btn.dataset.eventNames ? btn.dataset.eventNames.split(' ') : ['click'];
        for (let modeIndex in showingModes) {
            let mode = showingModes[modeIndex];
            let eventName = eventNames[modeIndex]?eventNames[modeIndex]:'click';
            btn.addEventListener(eventName, () => {

                let targetEle;
                // let targetsEleName;
                switch (mode) {
                    case 'toggle-showing':
                        targetsEleName = btn.dataset.targets.split(', ');
                        break;

                    case 'showing':
                        targetsEleName = btn.dataset.targetsIn.split(', ');
                        console.log(targetsEleName)
                        break;

                    case 'hiding':
                        targetsEleName = btn.dataset.targetsOut.split(', ');
                        break;
                }

                let relpLevel = parseInt(btn.dataset.relpLevel);

                targetsEleName.forEach(targetEleName => {
                    if (relpLevel) {
                        targetEle = btn;
                        for (let t = 0; t < relpLevel; t++) {
                            targetEle = targetEle.parentElement;
                        }
                        targetEle = getEle(targetEleName, targetEle)
                    }
                    else {
                        targetEle = getEle(targetEleName);
                    }
                    switch (mode) {
                        case 'toggle-showing':
                            targetEle.classList.toggle('hide');
                            break;

                        case 'showing':
                            targetEle.classList.remove('hide');
                            break;

                        case 'hiding':
                            targetEle.classList.add('hide');
                            break;
                    }
                })
            });

        }

    })
}
const CheckHideStatus = (ele) => {
    if (typeof (ele) === 'string') {
        return getEle(ele).classList.contains('hide');
    }
    else if (typeof (ele) === 'object') {
        return ele.classList.contains('hide');
    }
}
// ShowingEle();

