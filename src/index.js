var newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('../collections/randomuser.json'),
    reporters: 'cli'
}, function (error) {
	if (error) { throw err; }
    console.log('collection run complete!');
});