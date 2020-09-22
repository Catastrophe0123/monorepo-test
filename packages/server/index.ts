import express from 'express';
import { add } from '@cato/common';

console.log('hello from the server page ');

const PORT = 5000;

const app = express();

app.disable('etag');

app.get('/hello/:number', (req, res) => {
	let x = add(4, parseInt(req.params.number), 0);
	console.log('addind 4 and 5 - ', x);
	return res.json({ message: x });
});

app.listen(PORT, () => {
	console.log('server running sqwe - ', 5000);
});
