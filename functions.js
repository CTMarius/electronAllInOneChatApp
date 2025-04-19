const getElementById = (id) => document.getElementById(id);

const view = getElementById('view');
const buttons = document.getElementsByTagName('button');

const CHAT_URLS = {
    skype: 'https://web.skype.com/',
    messenger: 'https://messenger.com/',
    whatsapp: 'https://web.whatsapp.com/',
    discord: 'https://discord.com/app'
};

const buttonPressed = async (event) => {
    const { id } = event.target;
    console.log(id);
    
    try {
        view.src = CHAT_URLS[id] || '';
        await view.load(); // Better than awaiting src directly
    } catch (error) {
        console.error(`Error loading ${id}:`, error);
    }
};

Array.from(buttons).forEach(button => {
    button.addEventListener('click', buttonPressed);
});