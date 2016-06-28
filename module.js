//math.js
exports.add = function(){
    var sum = 0,
        i = 0,
        args = arguments,
        l = args.length;
    while(i<l){
        sum += args[i++]
    }
    return sum;
};
//模块引用，使用户完全不必考虑变量污染
//program.js
var math = require('math');
exports.increment = function(val){
    return math.add(val,1);
};

模块引入步骤：
1.路径分析
2.文件定位
3.编译执行

模块分为两类：1.核心模块 2.文件模块
