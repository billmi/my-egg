'use strict';

// had enabled by egg
// exports.static = true;
exports.nunjucks ={  //官方模板
    enable: false,
    package: 'egg-view-nunjucks'
};
exports.ejs = {  //ejs 模板
    enable: true,
    package: 'egg-view-ejs'
};
exports.mysql = {
    enable:true,
    package:'egg-mysql',
}
exports.sequelize = {
    enable: false,
    package: 'egg-sequelize'
}
exports.security = {
    enable: false
};

exports.validate = { //验证插件
    enable: true,
    package: 'egg-validate'
};
