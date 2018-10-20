 document.addEventListener('DOMContentLoaded', (event) => { // event listener for when all DOM as loaded
  
 if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      // logs Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      //logs registration failed 
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

});