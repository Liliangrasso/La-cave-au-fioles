
/*Door*/
const door = document.getElementsByClassName('door');
const leftDoor = door[0];
const rightDoor = door[1];

const openLeft = function () {
    leftDoor.classList.add("openLeft");
}
const openRight = function () {
    rightDoor.classList.add("openRight");
}

document.getElementById('welcome').addEventListener('click', function () {
    openLeft();
    openRight();
})
