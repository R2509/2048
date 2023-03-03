function JSONDataManager (jsonData) {
    this.jsonData = jsonData;
    this.map = {
        size: ['grid-size', Number],
    }
}

JSONDataManager.prototype.json = function () {
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