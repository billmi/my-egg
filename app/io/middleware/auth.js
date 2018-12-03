'use strict';

module.exports = () => {
    return async (ctx, next) => {
        const say = "auth say";
        ctx.socket.emit('res', 'auth!' + say);
        await next();
        // tslint:disable-next-line:no-console
        console.log('disconnect!');
    };
// tslint:disable-next-line:eofline
};