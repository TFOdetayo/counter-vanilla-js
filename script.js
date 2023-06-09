// Set initial count
let count = 0;

// Select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if(styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "#3e5f7a";
        }

        if (count < 0) {
            value.style.color = "#5a3e42";
        }

        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});