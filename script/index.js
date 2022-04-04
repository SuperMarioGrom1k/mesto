const editProfile = document.querySelector(".profile__edit-button");
const modalWindow = document.querySelector(".popup");
const modalCloseBtn = modalWindow.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_name');
let subTextInput = formElement.querySelector('.popup__input_subtext');
let nameProfile = document.querySelector('.profile__name');
let subTextProfile = document.querySelector('.profile__about');


function toggleModalWindow() {
    modalWindow.classList.toggle('popup_open');

}

function toggleModalCloseBtn() {
    modalCloseBtn.classList.toggle('popup__close')


}

    nameInput.value = nameProfile.textContent;
    subTextInput.value = subTextProfile.textContent;




    function formSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    subTextProfile.textContent = subTextInput.value;
    toggleModalWindow()

}


modalCloseBtn.addEventListener('click', toggleModalCloseBtn);
editProfile.addEventListener('click', toggleModalWindow);
modalCloseBtn.addEventListener('click', toggleModalWindow);
formElement.addEventListener('submit', formSubmitHandler);
