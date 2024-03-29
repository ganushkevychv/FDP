
    let deferredPrompt = null;
    let setupButton;

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;

      if (setupButton == undefined) {
        setupButton = document.getElementById("install-btn");
        }
        // Show the setup button
        setupButton.style.display = "inline";
        setupButton.disabled = false;
    });
    
    async function install() {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        setupButton.disabled = true;
        console.log(deferredPrompt)
        deferredPrompt.userChoice.then(function(choiceResult){
    
          if (choiceResult.outcome === 'accepted') {
          console.log('Your PWA has been installed');
        } else {
          console.log('User chose to not install your PWA');
        }
    
        deferredPrompt = null;
    
        });
    
     
      }
    }

    
    
    