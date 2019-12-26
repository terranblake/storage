require('dotenv').config();
import { existsSync } from 'fs';

export { Supported } from './src/enums/Supported';

export function open(sources: string[]) {
	for (let source of sources) {
		const sourcePath = `${process.cwd()}/src/${source}.js`;

		if (!existsSync(sourcePath)) {
			console.error(`no implementation exists for source ${source}`);
			continue;
		}

		if (!process.env[source.toUpperCase()]) {
			console.error(`no credentials exists for source ${source}`);
			continue;
		}

		require(sourcePath);
	}
}