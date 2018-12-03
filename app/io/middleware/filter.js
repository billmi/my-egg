'use strict';

module.exports = () => {
    return async (ctx, next) => {
        // tslint:disable-next-line:no-console
        console.log(ctx.packet);
        const say = "filter";
        ctx.socket.emit('res', 'packet!' + say);
        await next();
        // tslint:disable-next-line:no-console
        console.log('packet response!');
    };
// tslint:disable-next-line:eofline
};