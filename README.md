### Usage ###
```javascript
var packer = require('yaypack');
packer.unpack({
    path: './', 
    files: {
        "some.json" : {
            "testProp" : "testValue",
            "testObject" : {
                "someObjects" : "contents"
            }
        },
        "cooltool.json" : {
            "coolconf" : 1
        }
    }
});
```

This writes the contents of "some.json" and "cooltool.json" to files with the same names to the given path.
Useful as a pre-build step when various tools require a lot of different json cofiguration files.
