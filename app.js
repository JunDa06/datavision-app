const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    res.end(`
        <html>
            <head>
                <title>DataVision</title>
            </head>
            <body>
                <h1>DataVision - Aplicación Node.js</h1>
                <p>Aplicación desplegada correctamente mediante AWS CodeDeploy.</p>
            </body>
        </html>
    `);
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor DataVision ejecutándose en el puerto ${PORT}`);
});