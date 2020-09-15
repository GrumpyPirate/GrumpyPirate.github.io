import path from 'path';

export default {
  process: (_: string, filename: string) =>
    `module.exports = ${JSON.stringify(path.basename(filename))};`,
};
