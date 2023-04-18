let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displauTime() {
    let date = new Date();

    // Getting hours, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform  = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}
setInterval(displauTime, 1000);

// bubbles

let color = ['red', 'green', 'brown', 'blue']
function square() {
    let section = document.querySelector('.banner');

    let square = document.createElement('spanBox');

    let size = Math.random() * 30;

    square.style.width = 20 + size + 'px';

    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';

    square.style.left = Math.random() * innerWidth + 'px';

    let bg = color[Math.floor(Math.random() * color.length)];

    square.style.background = bg;

    section.appendChild(square);

    setTimeout(() => {
        square.remove();
    }, 5000)
}
setInterval(square, 50);

