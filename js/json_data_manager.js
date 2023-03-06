function JSONDataManager (jsonData) {
    this.jsonData = jsonData;
    this.map = {
        size: ['grid-size', Number],
    }
}

JSONDataManager.prototype.json = function () {
    if (this.jsonData[0] == '<') { // If it is really HTML...
        this.jsonData = new DOMParser().parseFromString(this.jsonData, 'text/html').firstChild.firstChild.innerHTML;
    }
    // SETUP
    // >> 1: Replace original params with URL params.
    let urlParams = new URL(window.location.href).searchParams;
    for (const key in this.map) {
        let value = this.map[key][0];
        let type = this.map[key][1];
        if (urlParams.has(value)) {
            this.jsonData[key] = type(urlParams.get(value));
        }
    }

    return this.jsonData;
}