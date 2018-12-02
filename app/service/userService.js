const Service = require('egg').Service;

/**
 * 后期提取
 */
class userService extends Service {

    async add(params={}){
        let res = await this.app.mysql.insert('user', params);
        return res;
    }

    async delete(id) {
        const res = await this.app.mysql.delete('user', { id: id });
        return res;
    }

    async update(params = {}) {
        const res = await this.app.mysql.update('user', params);
        return res;
    }

    async item(id=0){
        let res = await this.app.mysql.get('user',{id:id});
        return res;
    }

    async list(params={}){
        let pageSize = parseFloat(params.pageSize||'10');
        let offset = ((params.page || 1) - 1) * params.pageSize;

        let query = {
            limit: pageSize,
            offset:offset
        };

        let where = {};
        if( params.q ){
            where.name = params.q;
        }
        query.where = where;

        if( params.orders ){
            query.orders = params.orders;
        }

        if (params.columns ){
            query.columns = params.columns;
        }
        let res = await this.app.mysql.select('user',query);
        return res;
    }

    async query(sql, params) {
        const res = await this.app.mysql.query(sql,params);
        return res;
    }

}

module.exports = userService;