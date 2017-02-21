jstest library
==========

**A Javascript library to help developper to test the javascript (including AJAX) of Their web application.**

## Documentation
- Developer Docs: [https://github.com/ThomasDupont/jstest/wiki](https://github.com/ThomasDupont/jstest/wiki)

## Current Release
- <b>0.1.2</b> : Add exception if the launchTest parameter is not an object.

## Changes
- <b>0.1.2</b> : Add exception if the launchTest parameter is not an object.
- <b>0.1.1</b> : First stable version, include jQuery by default.

## Requirement for using
**No requirement**

### Installation instructions:

1. Include the file in your test webpage.

2. Launch the module like this example:

```javascript
var test = new JsTest();
test.launchTest(
    {
        test1 : function() {
            console.log("hello world");
        },
        test2 : function() {
            test.$.get('url.html');//jQuery is natively include to simplify the test process
            // ......
        }
        // .....
    }
);
```


## Test and example
<a href="https://github.com/ThomasDupont/jstest/tree/master/test">Some test and example</a>

## Bugs
If you find a bug, please post it as a new issue on the GitHub repository with <a https://github.com/setni/Angular.js-project/issues">this information in your report</a>.

## Contribute
If you would like to contribute to the project, have at it.  <a href="https://help.github.com/articles/fork-a-repo">Fork the Tweetledee project</a>, include your changes, and <a href="https://help.github.com/articles/using-pull-requests">submit a pull request</a> back to the main repository.

## License
MIT License - see the LICENSE.txt file in the source distribution

✪ Thomas
