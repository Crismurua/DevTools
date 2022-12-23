import express from 'express';
const app = express();
const port = process.env.PORT || 3001;
import db from './models';
import routes from './routes/index';

app.use('/', routes)

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})