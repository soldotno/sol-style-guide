var notify = require("gulp-notify");
var production = process.env.NODE_ENV === 'production';

module.exports = function () {

    var args = Array.prototype.slice.call(arguments);

    // Send error to notification center with gulp-notify
    notify.onError({
        title: "Compile Error",
        message: "<%= error %>"
    }).apply(this, args);

    // Keep gulp from hanging on this task
    if(production) {
        throw new Error("Error in the gulp process, exiting");
    }
    this.emit('end');
};
