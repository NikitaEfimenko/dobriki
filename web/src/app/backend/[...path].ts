import { IncomingMessage, ServerResponse } from 'http';
import httpProxy from 'http-proxy';

const API_URL = process.env.NEXTAUTH_BACKEND_URL;

const proxy = httpProxy.createProxyServer();

export const config = {
	api: {
		bodyParser: false,
	},
};

export default (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
	return new Promise<void>((resolve, reject) => {
		proxy.web(req, res, { target: API_URL, changeOrigin: true }, (err) => {
			if (err) {
				return reject(err);
			}
			resolve();
		});
	});
};
