const editProfile = document.querySelector(".profile__edit-button");
const modalWindow = document.querySelector(".popup");
const modalCloseBtn = modalWindow.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input-name');
let subTextInput = formElement.querySelector('.popup__input-subtext');
let nameProfile = document.querySelector('.profile__name');
let subTextProfile = document.querySelector('.profile__about');
const openPopupHandler = () => modalWindow.classList.contains('popup')  && modalWindow.classList.add('popup_open');
const closePopupHandler = () => modalWindow.classList.contains('popup') && (nameInput.value = nameProfile.textContent)
    && (subTextInput.value = subTextProfile.textContent)  &&  modalWindow.classList.remove('popup_open');

nameInput.value = nameProfile.textContent;
subTextInput.value = subTextProfile.textContent;


function formSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    subTextProfile.textContent = subTextInput.value;
    closePopupHandler();
}


editProfile.addEventListener('click', openPopupHandler);
modalCloseBtn.addEventListener('click', closePopupHandler);
formElement.addEventListener('submit', formSubmitHandler);
