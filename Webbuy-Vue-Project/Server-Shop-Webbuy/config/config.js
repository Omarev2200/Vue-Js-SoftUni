

module.exports = {
    development: {
        port: process.env.PORT || 9999,
        dbPath: 'mongodb://localhost:27017/rest-api-webbuy',
        authCookieName: 'x-auth-token'
    },
    production: {}
};