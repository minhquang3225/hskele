function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("insert");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("insert");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;

        }

    }
};
includeHTML();



const getEle = (ele, parentEle) => {
    if (parentEle) {
        return parentEle.querySelector(ele);
    }
    return document.querySelector(ele);
}

const getEles = (ele, parentEle) => {
    if (parentEle) {
        return parentEle.querySelectorAll(ele);
    }
    return document.querySelectorAll(ele);
}

const clearActive = (objectName, activeName) => {
    getEles(objectName).forEach(item => {
        if (!activeName) {
            item.classList.remove('active')
        }
        else {
            item.classList.remove(className)
        }

    })
}
const bodyScroll = (bool) => {
    document.body.style.overflow = bool ? '' : 'hidden';
}
function MakeClone(dataObjArr) {     //className: Tên class muốn tạo clone, numClone: số dữ liệu muốn fetch từ data, loop: Muốn tạo ra bao nhiêu bản sao (0 là mặc định)
    dataObjArr.forEach((obj) => {
        let origins = document.querySelectorAll(obj.eleName);
        origins.forEach(origin => {
            let parentOrigin = origin.parentElement;            //Nơi chứa cụm bản sao
            let levelData = obj.levelData ? obj.levelData : 1;
            let content = ''                               //Cụm bản sao sau khi copy ra
            let finalContent = '';
            
            for (let numClone = 0; numClone < obj.numClone; numClone++) {
                content += ChangeOrigin(origin, parentOrigin, numClone, levelData).outerHTML;
            }
            for (let i = 0; i < obj.loopTimes; i++) {
                finalContent += content;
            }
            parentOrigin.innerHTML = finalContent;

        })
    })


};
const ChangeOrigin = (origin, parentOrigin, numClone, levelData) => {

    switch (levelData) {
        case 1:
            dataElements = parentOrigin.querySelectorAll("[data-sets^=data]");   // hiểu thế này: Sau lần chạy đầu tiên, data-sets bị biến đổi và không dùng đc nữa
            dataBindings = parentOrigin.querySelectorAll("[data-binding]");
            break;
        case 2:
            dataElements = parentOrigin.querySelectorAll("[data-sets^=lv2-data]");
            break;
        case 3:
            dataElements = parentOrigin.querySelectorAll("[data-sets^=lv3-data]");
            break;
    }
    dataElements.forEach(dataElement => {


        let E_data_sets = dataElement.getAttribute('data-sets') ? dataElement.getAttribute('data-sets').split(' ') : [];
        let E_data_props = dataElement.getAttribute('data-props') ? dataElement.getAttribute('data-props').split(' ') : [];

        for (const i in E_data_sets) {
            let E_data_set = E_data_sets[i];
            let E_data_prop = E_data_props[i];


            switch (E_data_prop) {
                case 'text':
                    let textNode = dataElement.childNodes[0];

                    textNode.nodeValue = data[E_data_set][numClone];
                    break;

                case 'src':
                    dataElement.src = data[E_data_set][numClone]
                    break;
                case 'link':
                    dataElement.href = data[E_data_set][numClone];
                    break;
                case 'linkText':
                    dataElement.href = data[E_data_set][numClone];
                    let linkTextNode = dataElement.childNodes[0];
                    linkTextNode.nodeValue = data[E_data_set][numClone];
                    break;
                case 'data-src':
                    dataElement.setAttribute("data-src", data[E_data_set][numClone]);
                    let srcNode = dataElement.childNodes[0];
                    srcNode.nodeValue = data[E_data_set][numClone];
                    break;
                case 'class':
                    for (let i = 0; i < data[E_data_set].length; i++) {
                        if (data[E_data_set][i]) {
                            dataElement.classList.remove(data[E_data_set][i]);
                        }
                    }
                    if (data[E_data_set][numClone]) {
                        dataElement.classList.add(data[E_data_set][numClone])
                    }
                    break;
                default:
                    dataElement.setAttribute(E_data_prop, data[E_data_set][numClone])
                    break;
            }
        }

    })

    dataBindings.forEach(dataBinding => {
        dataValue = data[dataBinding.getAttribute('data-binding')][numClone] ? data[dataBinding.getAttribute('data-binding')][numClone].split(', ') : [];
        dataNames = dataValue[0];
        dataProps = dataValue[1];

        dataBinding.setAttribute('data-props', dataProps);
        dataBinding.setAttribute('data-sets', dataNames);
    })

    return origin;


}


//Chuyển về đầu của phần scroll (body(bỏ trống) hoặc className bất kì)
const BackToTop = (className) => {
    if (!className) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    else {
        getEle(className).scrollTop = 0;
    }
}
let data
getData = async () => {
    await axios.get('./../../assets/js/data.json')
        .then((res) => {
            data = res.data;
        }).catch((err) => {
            console.log(err);
        })
    // await console.log(data);
}
getData();

setTimeout(() => {
    var darkMode = document.querySelector('#dark-mode-toggle');

    darkMode.addEventListener('change', () => {
        console.log(darkMode);

        if (darkMode.checked == true) {
            document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme");
        }
        else {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
        }
    })
}, 500);




