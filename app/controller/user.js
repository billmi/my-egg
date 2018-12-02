'use strict';

const Controller = require('egg').Controller;


class UserController extends Controller {

    async allUser() {
        let params = {
            page: this.ctx.query.page || 1,
            pageSize: this.ctx.query.pageSize || 10,
            q: this.ctx.query.q,
            orders: [['id', 'desc']],
            columns: ['id', 'name', 'age']
        };
        console.log(params);
        this.ctx.status = 200;
        this.ctx.body = await this.ctx.service.userService.list(params);
    }

    async user() {
        await this.ctx.render('./user.ejs', {data: 'ycc'});
    }
}

module.exports = UserController;