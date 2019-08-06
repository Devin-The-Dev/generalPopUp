document.getElementById('pop-up').onclick = function popUpAppear() {
    popup();
    disappear();
};

function popup() {
    document.getElementById('pop-up-message').innerHTML = 'You clicked me!'
    // Now this needs to go away after awhile
    // display: none after 3 seconds
};

function disappear() {
    document.getElementById('pop-up-message').setTimeout(popup(), 3000).onclick.innerHTML = ' '
};