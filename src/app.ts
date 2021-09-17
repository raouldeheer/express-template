import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import RateLimit from 'express-rate-limit';
import express from 'express';

export default function getApp() {
    const app = express();

    app.use(RateLimit({
        windowMs: 1 * 60 * 1000, // 1 minute
        max: 200
    }));
    app.use(helmet());
    app.use(morgan('common'));
    app.use(express.json()); // for parsing application/json
    app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    app.use(cors());

    app.get("/", (req, res) => {
        res.send("OK");
    });

    return app;
}
