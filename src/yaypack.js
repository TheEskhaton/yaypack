var packer = Object.create(null);
var fs = require('fs');
packer.unpack = function(config){
    var path = config.path || './';
    for(var fileName in config.files){
        fs.writeFile(fileName,JSON.stringify(config.files[fileName]));
    }
};
module.exports = packer;
