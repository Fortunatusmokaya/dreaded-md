import { spawn } from 'child_process';
import path from 'path';

async function start() {
   const currentFilePath = new URL(import.meta.url).pathname;
   const currentDirPath = path.dirname(currentFilePath);
   const args = [path.join(currentDirPath, 'start.js'), ...process.argv.slice(2)];
   console.log([process.argv[0], ...args].join('\n'));
   let p = spawn(process.argv[0], args, {
      stdio: ['inherit', 'inherit', 'inherit', 'ipc']
   });

   p.on('message', (data) => {
      if (data === 'reset') {
         console.log('Restarting Bot...');
         p.kill();
         start();
         p = null;
      }
   });

   p.on('exit', (code) => {
      console.error('Exited with code:', code);
      if (code === '.' || code === 1 || code === 0) start();
   });
}

start();