module.exports = async function (context, req) {
    context.log('Salida para verificar el funcionamiento');
    context.res = {
        body: "Twitter de la Práctica 1"
    };
};
