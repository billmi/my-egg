'use strict';

const Controller = require('egg').Controller;
const Parameter = require('parameter'); //验证组件


class HomeController extends Controller {

    async index() {
        const {ctx, service} = this;
        let data = {};
        data.home = await service.homeService.GetHome();
        await this.ctx.render('./home.ejs', data);
    }

    async login() {
        let data = {};
        data.userError = "";
        await this.ctx.render('./login.ejs', data);
    }
}

module.exports = HomeController;
