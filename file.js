let width = window.innerWidth;
let height = window.innerHeight;
const inputTagArray = document.getElementsByTagName("input")

// collecting div through box class
let boxArray = document.getElementsByClassName("box")

setTimeout(() => {
    //to fire my box animtation
    animateBox();
    let inputDateTimeTag = new Date()
    document.getElementById("date").setAttribute("min", inputDateTimeTag.getFullYear() + "-" + inputDateTimeTag.getMonth() + "-" + inputDateTimeTag.getDate() + "T" + "" + inputDateTimeTag.getHours() + ":" + inputDateTimeTag.getMinutes());
}, 1000)

let positionOfEachBox = [];

let randomXValue = 0;
let randomYValue = 0;

const postLoadFun = () => {
    console.log("postLoadFun")
}

let timeInterval
let counter = 0
let resizeFunCall = 0

//relocation our box on screen re-size
let resizeFunction = () => {
    animateBox();
}

const ClearTimeOutFunction = (x) => {
    // clearTimeout(x)
    console.log("xlear", x)
}

let animateBox = () => {
    let length = boxArray.length;
    width = window.innerWidth;
    height = window.innerHeight;
    for (let i = 0; i < length; i++) {
        randomXValue = Math.random() * (width - 10)
        randomYValue = Math.random() * (height - 50)
        boxArray[i].style.left = randomXValue + "px"
        boxArray[i].style.top = randomYValue + "px"
    }
}


function Focus() {
    animateBox();
}

function TakeAction(tag, flag) {
    console.log(flag)
    if (flag) {
        tag.classList.add("error")
        tag.classList.remove("sucess")
    }
    else {
        tag.classList.add("sucess")
        tag.classList.remove("error")

    }
}

function vaidateNormalText(data, index, dataType) {
    let tag = inputTagArray[index];
    if (index == "textarea") {
        console.log(data, data.length)
        tag = document.getElementsByTagName("textarea")[0]
        TakeAction(tag, data.length < 3)
        return
    }
    if (dataType == "str") {
        TakeAction(tag, data.length < 3)
        return
    }
    else {
        if (data == "" || data < 0)
            TakeAction(tag, true)
        else
            TakeAction(tag, false)

        return
    }

}

function ValidateForm(item, index) {
    let data;
    if (index != "textarea") {
        data = inputTagArray[index].value;
    }
    switch (item) {
        case "Etitle":
        case "Location":
        case "OrganizerName":
        case "Co-OrdinatorName":
        case "addRole":
            vaidateNormalText(data, index, "str")
            return;
        case "Description":
            data = document.getElementsByTagName("textarea")[0].value;
            vaidateNormalText(data, index, "str")
            return;
        case "Tcost":
        case "Eamount":
        case "funds":
        case "AmntToRaise":
        case "ParticipantsExpected":
            vaidateNormalText(data, index, "number")
            return;
            dafault:
            return;
    }
}

function transformBtnToFile(i) {
    inputTagArray[i].setAttribute("type", "file");
}
