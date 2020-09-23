import express from 'express';
import { add } from '@cato/common';

console.log('hello from the server page ');

const PORT = 5000;

const app = express();

app.disable('etag');

app.use((req, res, next) => {
	res.setHeader('Surrogate-Control', 'no-store');
	res.setHeader(
		'Cache-Control',
		'no-store, no-cache, must-revalidate, proxy-revalidate'
	);
	res.setHeader('Pragma', 'no-cache');
	res.setHeader('Expires', '0');
	next();
});

// app.disable('view cache');

app.get('/hello/:number', (req, res) => {
	let x = add(999, parseInt(req.params.number));
	console.log('addind 4 and 5 - ', x);
	return res.json({ message: x + 1, qwe: '123' });
});

app.listen(PORT, () => {
	console.log('server running sqwe - ', 5000);
});
