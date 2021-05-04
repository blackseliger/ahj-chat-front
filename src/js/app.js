import NicknameForm from './NicknameForm';
import OnlineChatWidget from './OnlineChatWidget';


const form = new NicknameForm();
form.bindToDOM(document.body);
form.init();

const chat = new OnlineChatWidget('http://localhost:7070/', form);
chat.bindToDOM(document.querySelector('#online_chat_widget_container'));
chat.init();
