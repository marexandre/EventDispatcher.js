# EventDispatcher.js

```javascript

	// CarBase Klass or something, add EventDispatcher functionality to it.
	var CarBase = Object.create( EventDispatcher );
	// add CarBase specific functionality
	CarBase.start = function() {
	    console.log('car start');
	}
	
	
	// 
	var carA = Object.create( CarBase );
	carA.on('start', function() {
	    carA.start();
	});
    carA.fire('start');

```