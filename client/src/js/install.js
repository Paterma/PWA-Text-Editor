const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => { 
window.deferredPrompt = event;
butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const windPrompt = window.deferredPrompt;

    if (!windPrompt) {
    return;
    }
    windPrompt.prompt();
    window.deferredPrompt = null;
    // butInstall.classList.toggle('hidden', true);
    butInstall.style.visibility = 'hidden';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});



// const installBtn = document.getElementById('installBtn');
// 

// window.addEventListener('beforeinstallprompt', (event) => {
//   event.preventDefault();
//   installBtn.style.visibility = 'visible';
//   

//   installBtn.addEventListener('click', () => {
//     event.prompt();
//     installBtn.setAttribute('disabled', true);
//     installBtn.textContent = 'Installed!';
//   });
// });

// window.addEventListener('appinstalled', (event) => {
//   textHeader.textContent = 'Successfully installed!';
//   console.log('👍', 'appinstalled', event);
// });
