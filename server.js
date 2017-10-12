/**
 * Created by oyhanyu on 2017/10/10.
 */
const express = require('express');
const next = require('next');
const program = require('commander');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        let port = 8080;
        program
            .option('-p, --port', 'Add port')
            .parse(process.argv);
        const server = express();
        /*server.get('/p/:name/:repo', (req, res) => {
            const actualPage = '/post'
            const queryParams = { name: req.params.name, repo: req.params.repo }
            app.render(req, res, actualPage, queryParams)
        })*/
        if (program.port && program.args.length) {
            port = program.args[0];
        }
        server.get('*', (req, res) => {
            return handle(req, res);
        })
        server.listen(port, (err) => {
            if (err) throw err;
            console.log('> Ready on http://localhost:' + port);
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });