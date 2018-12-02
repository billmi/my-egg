/**
 * 工具
 * @type {moment | ((inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, language?: string, strict?: boolean) => moment.Moment) | ((inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, strict?: boolean) => moment.Moment)}
 */
const  moment = require('moment');
class Common {
    constructor(ctx){
       this.ctx =ctx;
       this.db = this.ctx.model;
       this.date= moment().format('YYYY-MM-DD- HH:mm:ss');
    }

    /***
     * 查询数据方法
     * @returns {Promise.<void>}
     */
    async query(dataSource,sql,sqlData) {
        let  _this = this ;
        let resultVo ={}; //放回结果
        try {
            let result = await  _this.db.query(sql,sqlData);
            if (result && result.length != 0 ){
                    resultVo.state =200;
                    resultVo.sucMsg ='成功';
                 let command =result[1].command;
                 if (command ==='SELECT' ||command ==='UPDATE' || command ==='INSERT'){
                     resultVo.rowCount =result[1].rowCount;
                     resultVo.rowsList =result[1].rows;
                 }else if (result[1] ===1 && sql.indexOf('returning') > -1){ // 'returing id  '
                     resultVo.rowCount =result[1];
                     resultVo.rowsList =result[0];
                 }
                 //commit  begin close 等
            }else{
                resultVo.state ='400';
                resultVo.sucMsg ='执行失败';
            }
        }catch (e){
            resultVo.errMsg = e.name;
            this.ctx.logger.error(this.date+'发送sql错误：'+e); //日志
            resultVo.state = '400';
           // resultVo.sql = sql ;
        }

        return resultVo;

    }
}

module.exports = Common;
