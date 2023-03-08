// Load grid size from global JSON file...
fetch('../info.json')
    .then(response => response.text())
    .then(data => new JSONDataManager(data).json())
    .then((jsonData) => {
        // Inject dynamically generated HTML background grid
        let injector = new HTMLInjector(jsonData.size, '.grid-container')
        injector.injectGrid();
        injector.injectCSS(jsonData.size);

        // Wait till the browser is ready to render the game (avoids glitches)
        window.requestAnimationFrame(function () {
            new GameManager(jsonData, KeyboardInputManager, HTMLActuator, LocalStorageManager);
        });
    })
//  .catch(err => console.log(`An error occurred: ${err}`));