import fs from 'fs';
import path from 'path';

const root = process.cwd();

export const getFiles = async () => fs.readdirSync(path.join(root, 'contents'));
