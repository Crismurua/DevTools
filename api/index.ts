import express from 'express';
const app = express();
const port = process.env.PORT || 3001;
import db from './models';
import routes from './routes/index';
app.use(express.json())
app.use('/', routes)

db.sequelize.sync({force: false}).then(() => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})