
const editProfile = document.querySelector(".profile__edit-button");
const modalWindow = document.querySelector(".popup");
const modalCloseBtn = modalWindow.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_name');
let subTextInput = formElement.querySelector('.popup__input_subtext');
let nameProfile = document.querySelector('.profile__name');
let subTextProfile = document.querySelector('.profile__about');


function toggleModalWindow() {
    modalWindow.classList.toggle('popup__open');
}


function formSubmitHandler(evt) {
    evt.preventDefault();

    nameProfile.textContent = nameInput.value;
    subTextProfile.textContent = subTextInput.value;

}


    nameInput.value = nameProfile.innerText;
    subTextInput.value = subTextProfile.innerText;



formElement.addEventListener('submit', formSubmitHandler);
editProfile.addEventListener('click', toggleModalWindow);
modalCloseBtn.addEventListener('click', toggleModalWindow);








