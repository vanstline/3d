const package = require('../package.json');
const protoBuild = require('protoc-build');

let protoList = package.protoList || ['./src/api/protos/**/'];

protoList.forEach(dir => {
    dir && protoBuild.genProto(dir);
})
