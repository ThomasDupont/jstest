
/***********************************************************************************************
 * Javascript library for javascript test  - Using jQuery 3.1.1
 *   Version: 0.1.2
 * Copyright 2016-2017 Thomas DUPONT
 * MIT License
 ************************************************************************************************/
"use strict";

/**
* @param {object} jQuery The instance of jQuery
*/
var JsTest = function(jQuery)
{
    //Old browsers
    jQuery = jQuery !== false ;

    /**
    * @var {object} jQuery instance
    */
    this.$ = {};

    /**
    * @var {object} private parameters
    *      {int} timer, setTimeout parameter
    *      {int} timerSet, Time in millisecond between each action
    */
    var params = {
        timer   : 0,
        timerSet: 500
    }

    /**
    * @var {object} all private methods
    */
    var privateM = {};

    /**
    * @function {constructor} void
    * @param {bool} jQuery usage
    */
    this.init = function (jQuery)
    {
        if(typeof jQuery !== "boolean") {

            throw "The jQuery usage parameter must be a boolean, "+ typeof jQuery +" given";

        } else if (typeof window.jQuery === 'undefined' && jQuery) {

            var _this = this;
            var script = document.createElement("SCRIPT");
            script.src = '//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js';
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);

            if (script.readyState){  //IE

                script.onreadystatechange = function()
                {
                    if (script.readyState == "loaded" ||
                        script.readyState == "complete"){
                            script.onreadystatechange = null;
                            _this.$ = window.jQuery;
                    }
                };

            } else {  //Others

                script.onload = function()
                {
                    _this.$ = window.jQuery;
                };

            }

        } else if (!jQuery) {

            this.$ = {};

        } else {

            this.$ = window.jQuery;

        }
    };

    /**
    * @function {public} int
    * @return {int} the current timer
    */
    this.getTimer = function()
    {
        return params.timerSet;
    };

    /**
    * @function {public} void
    * @param {object} jobject, list of all test you need to launch
    */
    this.launchTest = function (jobject)
    {
        if(typeof jobject !== 'object') {

            throw "The parameter send for the test is not an object";

        }
        for(var i in jobject) {

            privateM.timeOut(jobject[i]);

        }
    };

    /**
    * @function {public} void
    * @param {int} t timer, timer in milliseconds
    */
    this.setTimer = function(t)
    {
        var i = parseInt(t);
        if(isNaN(i)) {

            throw "The timerSet parameter is not a valid number "+i+" given";

        } else {

            params.timerSet = i;

        }
    };

    /**
    * @function {private} void
    * @param {object} callback, single instruction
    * {breadcrumb} launchTest->timeOut
    */
    privateM.timeOut = function (callback)
    {
        params.timer += params.timerSet;
        setTimeout(
            function ()
            {
                callback();
            },
            params.timer
        );
    };

    this.init(jQuery);
}
