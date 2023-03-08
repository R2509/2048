function JSONDataManager () {
    this.map = {
        size: ['size', Number],
    }
}
let _json = {}
JSONDataManager.prototype.json = function (jsonData) {
    if (this.jsonData[0] == '<') { // If it is really HTML...
        this.jsonData = new DOMParser().parseFromString(this.jsonData, 'text/html').body.firstChild.innerHTML
    }
    // SETUP
    // >> 1: Replace original params with URL params.
    let urlParams = new URL(window.location.href).searchParams;
    for (const key in this.map) {
        let value = this.map[key][0]; // the key in the JSON output...
        let type = this.map[key][1]; // the type of value e.g. Number()
        if (urlParams.has(key)) {
            let temp = urlParams.get(key);
            console.log(temp)
            _json[value] = 5
            console.log(`replaced ${key} (${value}) with ${_json[value]}`, this.jsonData);
        }
    }

    this.jsonData = JSON.parse(json);
    return this.jsonData;
}