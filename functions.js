var ById = function (id) {
    return document.getElementById(id);
}

var view = ById('view');

const buttons = document.getElementsByTagName("button");

const buttonPressed = async e => {

    console.log(e.target.id);

    if (e.target.id == 'skype') {
        view.src = "https://web.skype.com/";
        await view.src
    } else if (e.target.id == 'messenger') {
        view.src = "https://messenger.com/";
        await view.src
    } else if (e.target.id == 'whatsapp') {
        view.src = "https://web.whatsapp.com/";
        await view.src
    } else if (e.target.id == 'discord') {
        view.src = "https://discord.com/app";
        await view.src
    } else {
        view.src = ""
        await view.src
    }
}

for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
}