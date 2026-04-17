const epochDisplay = document.getElementById('current-time');


function tick() {
    const now = Date.now();
    epochDisplay.textContent = now;
    epochDisplay.setAttribute('datetime', new Date(now).toISOString());
}

tick();
setInterval(tick, 500);     