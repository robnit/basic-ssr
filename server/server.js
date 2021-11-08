import initialRenderRoutes from './initialRenderRoutes.js';
import path from 'path';
import express from 'express';

const app = express();
app.use('^/$', initialRenderRoutes);

app.use(express.static(path.resolve(__dirname, '../build')));

const port = 42069;

app.listen(port, () => console.log(`Server running on port ${port}`));