/* ===== IMPORT ===== */

import express from 'express';
import { join } from 'node:path';
import 'dotenv/config';

/* ==== BRANCHEMENT EXPRESS ===== */
const app = express();

/* ==== BRANCHEMENT EJS ===== */
app.set('views', join(import.meta.dirname, 'app/views'));
app.set('view engine', 'ejs');

/* BRANCHEMENT POUR LES FICHIERS STATICS === */
app.use(express.static(join(import.meta.dirname, 'public')));

/* ==== ROUTES ===== */
app.get('/', (req, res) => {
    res.send('Welcome');
});

/* ==== DEMARRAGE SERVEUR ===== */
const port = process.env.PORT || 3000;
const base_url = process.env.BASE_URL || 'htt://localhost';

app.listen(port, () => {
    console.log(`server ok sur ${base_url}:${port}`);
});