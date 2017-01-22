
/***********************************************************************************************
 * Javascript library for javascript test  - Using jQuery 3.1.1
 *   Version: 0.1.2
 * Copyright 2016-2017 Thomas DUPONT
 * MIT License
 ************************************************************************************************/
"use strict";

/**
* @param int t time out between each test
*/
var JsTest = function(t = 500) {

    this.timer = 0;
    this.timerSet = parseInt(t);

    this.init = function () {
        if(isNaN(this.timerSet)) {
            throw "The timerSet parameter is not a valid number "+this.timerSet+" given";
        } else {
            if (typeof window.jQuery === 'undefined') {
                var script = document.createElement("SCRIPT");
                script.src = '//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js';
                script.type = 'text/javascript';
                document.getElementsByTagName("head")[0].appendChild(script);
                var _this = this;
                if (script.readyState){  //IE
                    script.onreadystatechange = function(){
                        if (script.readyState == "loaded" ||
                            script.readyState == "complete"){
                                script.onreadystatechange = null;
                                _this.$ = window.jQuery;
                        }
                    };
                } else {  //Others
                    script.onload = function(){
                        _this.$ = window.jQuery;
                    };
                }
            } else {
                this.$ = window.jQuery;
            }
        }
    };
    this.launchTest = function (jobject) {
        if(typeof jobject !== 'object') {
            throw "The test is not an object parameter";
        }
        for(var i in jobject) {
            this.timeOut(jobject[i]);
        }
    };
    this.timeOut = function (callback) {
        this.timer += this.timerSet;
        setTimeout(function () {callback();}, this.timer);
    };
    this.init();
}
