function HTMLInjector (size, gridContainerQuerySelector) {
    this.size = size;
    this.gridContainer = document.querySelector(gridContainerQuerySelector);
    this.gridRowClassName = 'grid-row';
    this.gridCellClassName = 'grid-cell';

    this.grid = [];
}

HTMLInjector.prototype.injectGrid = function () {

    for (let i = 0; i < this.size; i++) {
        let gridRow = document.createElement('div');
        gridRow.setAttribute('class', this.gridRowClassName);
        for (let i = 0; i < this.size; i++) {
            let gridCell = document.createElement('div');
            gridCell.setAttribute('class', this.gridCellClassName);
            gridRow.appendChild(gridCell);
        }
        this.grid.push(gridRow);
    }

    console.log('we got this far...', this.grid)
    for (const row of this.grid) {
        this.gridContainer.appendChild(row);
    }
}

HTMLInjector.prototype.injectCSS = function (gridSize) {
    var elements = document.getElementsByClassName('css-item');
    while(elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
    }

    let css = document.createElement('link');
    css.href = `style/out/main-${gridSize}.css`;
    css.rel = "stylesheet";
    css.type = "text/css";
    css.classList.add('css-item');
    document.head.appendChild(css);
}

// Can't use this yet cause it's called in application.js and... well... just look at index.html's script list...
HTMLInjector.prototype.injectJavascript = function (jsPaths) {
    let jsDiv = document.getElementById('js');
    for (const jsPath of jsPaths) {
        let script = document.createElement('script');
        script.setAttribute('src', jsPath);
        jsDiv.appendChild(script);
    }
}