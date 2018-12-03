'use strict';

module.exports = (app) => {
    class chatController extends app.Controller {
        async index() {
            const message = this.ctx.args[0];
            // tslint:disable-next-line:no-console
            console.log('chat :', message + ' : ' + process.pid);
            const say = "chat 1234";
            this.ctx.socket.emit('res', say);
        }
    }

    return chatController;
};

