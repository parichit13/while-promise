module.exports = function (Promise) {
	return function (condition, action) {
    	function loop() {
       		if (!condition()) return;
       		return Promise.resolve(action()).then(loop);
    	}
    	return Promise.resolve().then(loop);
	}
}
