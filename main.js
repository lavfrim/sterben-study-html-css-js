 console.log('--- run main.js ----');

 const contentContainer = document.querySelector('#content');
 const title = document.querySelector('#title');

 const createButton = (name, className, onClickHandler) => {
    const buttonElement = document.createElement('button');

    buttonElement.textContent = name;
    buttonElement.className = className;
    buttonElement.addEventListener('click', onClickHandler);

    return buttonElement;
 }

 const createRandomNumberFrom0To255 = () => {
    return Math.floor(Math.random() * 255);
 };
 const getRandomColor = () => {
    return `rgb(${createRandomNumberFrom0To255()}, ${createRandomNumberFrom0To255()}, ${createRandomNumberFrom0To255()})`
 }
 const randomColarButtonOnClickHandler = () => {
    title.style.color = getRandomColor();
 }

const randomColarButton = createButton('Change Color', 'button-style',  randomColarButtonOnClickHandler);

contentContainer.appendChild(randomColarButton);