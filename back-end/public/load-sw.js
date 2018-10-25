

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
        navigator.serviceWorker.register('sw.js')
        .then(registration => console.log('Service Worker registered'))
        .catch(err => 'SW registration failed')
    );
    
    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        // e.preventDefault();
        // // Stash the event so it can be triggered later.
        // deferredPrompt = e;
        // console.log('before install');
        // e.prompt();
      });
}