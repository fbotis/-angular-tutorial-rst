System.register([], function(exports_1) {
    var Dictionary;
    return {
        setters:[],
        execute: function() {
            Dictionary = (function () {
                function Dictionary() {
                    this._keys = new Array();
                    this._values = new Array();
                }
                Dictionary.prototype.add = function (key, value) {
                    this[key] = value;
                    this._keys.push(key);
                    this._values.push(value);
                };
                Dictionary.prototype.remove = function (key) {
                    var index = this._keys.indexOf(key, 0);
                    this._keys.splice(index, 1);
                    this._values.splice(index, 1);
                    delete this[key];
                };
                Dictionary.prototype.keys = function () {
                    return this._keys;
                };
                Dictionary.prototype.values = function () {
                    return this._values;
                };
                Dictionary.prototype.containsKey = function (key) {
                    if (typeof this[key] === "undefined") {
                        return false;
                    }
                    return true;
                };
                Dictionary.prototype.toLookup = function () {
                    return this;
                };
                return Dictionary;
            })();
            exports_1("Dictionary", Dictionary);
        }
    }
});
//# sourceMappingURL=Dictionary.js.map