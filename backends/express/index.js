import app from './app.js'
import config from './config'

app.listen(config.server.port, config.server.host, () => {
    console.log(`app running on http://${config.server.host}:${config.server.port}`);
});

export default app;
