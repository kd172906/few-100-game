import './styles.css';
import { ready } from "./utils";

const button = document.getElementById('setName');
const name = document.getElementById('name');
const nameInput = document.getElementById('name-input') as HTMLInputElement;

button.addEventListener('click', function () {
    name.innerText = nameInput.value;
});

ready(() => {
    alert('I am ready!')
})