const string_fixed = document.getElementsByClassName('fixed')[0];
const string = document.getElementsByClassName('string')[0];

window.onscroll = function() {
    if(window.pageYOffset != 0) {
        string_fixed.style.display = 'flex';
        string.style.display = 'none';    
    } else {
        string_fixed.style.display = 'none';
        string.style.display = 'flex';
    }
}
