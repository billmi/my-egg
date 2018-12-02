
/**
 * Created by sufer on 2018/3/30.
 */

const moment = require('moment');
module.exports = app => {
    app.beforeStart(async function () {
        console.log("start before....");
    });

    //上下文
    app.on('request', ctx => {
      ctx.date = moment().format('YYYY-MM-DD HH:mm:ss') ; //时间插件
    });
};