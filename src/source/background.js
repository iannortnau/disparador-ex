chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    const tab = await getCurrentTab();

    if (request.code === "send") {
        chrome.scripting.executeScript(
            {
                target: {tabId: tab.id},
                func: senderWhats,
                args: [JSON.stringify(request)]
            },
            () => {
            });
    }
});

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

function senderWhats(args){
    const numbers = JSON.parse(args).numbers;
    const message = JSON.parse(args).message;
    window.document.body.removeChild(window.document.getElementById("app"));
    const element = document.createElement("div");
    element.id = "load";
    element.style = "background-color: #4adadc;width:0px;height:100vh;";
    window.document.body.append(element);

    sendPopup(numbers,message,0,numbers.length)

    function sendPopup(numbers,message,i,length){
        if(i === length){
            window.location.reload();
            return true;
        }
        let h = 1000,
            w = 1000,
            l = Math.floor(((screen.availWidth || 1024) - w) / 2),
            t = Math.floor(((screen.availHeight || 700) - h) / 2)
        let options = `height=600,width=550,top=${t},left=${l},location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=0`
        let popup = window.open(`https://web.whatsapp.com/send?phone=${numbers[i]}&text=${message}&app_absent=0`, 'self', options);

        getFooter(0);

        function getFooter(attempt){
            if(popup.document.getElementsByClassName("_2cYbV")[0] !== undefined){
                popup.document.getElementsByClassName( "tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq")[0].click();
                setTimeout(function () {
                    popup.close();
                    if(i<length) {
                        console.log(i);
                        i++;
                        window.document.getElementById("load").style.width = i * (100 / length) + "vw";
                        sendPopup(numbers, message, i, length);
                    }
                },2000);
            }else {
                if(attempt<=10){
                    setTimeout(function () {
                        attempt++;
                        getFooter(attempt);
                    },10000);
                }else{
                    popup.close();
                    if(i<length) {
                        console.log(i);
                        i++;
                        window.document.getElementById("load").style.width = i * (100 / length) + "vw";
                        sendPopup(numbers, message, i, length);
                    }
                }
            }
        }
    }
}

function addWidth(divisor,att){
    const auxWidth = 100/divisor;
    att+=auxWidth;
    window.document.getElementById("app").style.width = att+"vw";
    setTimeout(function () {
        console.log(att);
        if(att<100){
            addWidth(100,att);
        }
    },1000);

}


