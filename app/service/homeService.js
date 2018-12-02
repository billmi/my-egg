'use strict';

const Service = require('egg').Service; //固定语法  sevice 层
const commonFuncs = require("../func/commonFuncs");
/**
 * 业务逻辑部分
 */
class homeService extends Service {
    constructor(ctx){
        super(ctx); // 调用父类的constructor()
        const { query,params,request } = ctx; //获取入参和模型实例
        this.query = query;  //  a=xxxx参数模式 获取
        this.params = params; // /user/:id 模式
        this.request = request.body; // /form表单来的参数
    }

    async GetHome(){
        return "homeService" + commonFuncs.get_one();
    }
}

module.exports = homeService;
