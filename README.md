# simple-clock
Simple package to manage clock in your projects.

[![NPM version](https://img.shields.io/npm/v/simple-clock.svg)](https://www.npmjs.com/package/simple-clock)

## How to use

#### Install it as npm dependencies

```bash
npm install simple-clock
```

#### Run the app

Then, to run app, you just have to run command :

```bash
node index.js
```

This will show you results of the operations performed


#### Possibles configurations

##### Setting simple parameters

Call the getTime function to get clock time value with a type of a result. 
Types arguments which are possible are :

	- h 		: to get hour
	- min 		: to get minute
	- s 		: to get seconds
	- ms 		: to get Milliseconds
	- toMilli 	: to convert time format to millis
	- d 		: to get day
	- m 		: to get month
	- y 		: to get year
	- full 		: to get full date with format : h:m:s-d/m/y


###### Example

```js
	var fullTime = require("./index.js").getTime("h");
	var fullTime = require("./index.js").getTime("min");
	var fullTime = require("./index.js").getTime("toMilli");
	var fullTime = require("./index.js").getTime("full");
```


##### Combine parameters
You can combine multiples parameters to format your result and get what you want
For example, you can get time by combine hour, minute and second like: h:min:s or h/min/s

You can get full data by doing : 
	"h:min:s-d/m/y" or "h/min/s-d-m-y" or ...

NB: only these separators are available 
	
    ":" 		: only to separate arguments, but not group, for example, we can do "h:min:s-d/m/y" but not "h:min:s:d/m/y"
	"/" 		: only to separate arguments, but not group, for example, we can do "h:min:s-d/m/y" but not "h:min:s/d/m/y"
	"-" 		: when use to separate arguments, it can't been use to separate group of arguments, for example, we can do 
		  "h-min-s d/m/y" but not "h-min-s-d/m/y"
	espace(" ") : only to separate group of arguments, for example, we can do "h:min:s d/m/y" but not "h min s-d/m/y"



## License

[MIT](LICENSE)


Enjoy it !