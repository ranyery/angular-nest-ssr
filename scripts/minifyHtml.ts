const { default: minify } = require('@node-minify/core');
const { default: htmlMinifier } = require('@node-minify/html-minifier');

const path = require('path');
const { existsSync, readdirSync, lstatSync } = require('fs');

function fromDir(startPath: string, filter: string) {
  if (!existsSync(startPath)) {
    console.log('no dir ', startPath);
    return;
  }

  const files = readdirSync(startPath);
  for (const element of files) {
    const filename = path.join(startPath, element);
    const stat = lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter);
    } else if (filename.endsWith(filter)) {
      minify({
        compressor: htmlMinifier,
        input: filename,
        output: filename,
        callback: (err: any) => {
          const [icon, result] = [err ? '🔴' : '🟢', err ? 'Error' : 'Success'];
          console.log(`${icon} ${result} minify: ${filename}`);
        },
      });
    }
  }
}

fromDir('./dist/browser', '.html');
