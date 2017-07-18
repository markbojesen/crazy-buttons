
// Select HTML element
const crazyButtons = document.querySelectorAll('.btn-crazy');

function moveButtonRandomly() {
    // const button = e.target;
    // Subtract crazyButton to make sure it stays on screen/page
    const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
    const offsetTop = Math.random() * (window.innerHeight - this.clientHeight);
    // CSS styles takes effect on mouseenter/hover
    this.style.top = offsetTop + 'px';
    this.style.left = offsetLeft + 'px';

    console.log(offsetLeft, offsetTop)
}

crazyButtons.forEach(button => button.addEventListener('mouseenter', moveButtonRandomly)); // 'mouseenter' = hover