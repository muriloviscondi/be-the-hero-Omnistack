const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// sudo sysctl fs.inotify.max_user_watches=582222 && sudo sysctl -p

app.listen(3333);
