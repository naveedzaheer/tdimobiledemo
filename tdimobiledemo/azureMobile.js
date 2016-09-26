console.info("Loaded azureMobile.js");
module.exports = {
    cors: {
        origins: ['localhost']
    },
    data: {
        provider: 'mssql',
        server: '127.0.0.1',
        database: 'demoappdb',
        user: 'hradmin',
        password: 'P@ssw0rd1'
    },
    //data: {
    //    provider: 'mssql',
    //    server: '192.168.1.18',
    //    database: 'HR',
    //    user: 'hradmin',
    //    password: 'P@ssw0rd1'
    //},
    logging: {
        level: 'verbose'
    },
    auth: {
        audience: 'https://nzmobiledemo.azurewebsites.net',
        issuer: 'https://sts.windows.net/f0e35cf1-b7b9-452d-bcf8-76d522dc0c1d/',
        azureSigningKey: '08E419F48C8D50DCA918AB6B7BD5A84525568529D9444E2EC087C42039D724B1',
        validateTokens: false
    }
};