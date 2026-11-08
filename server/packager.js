import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

export function createZipFromFolder(sourceFolder, zipFilePath) {
  return new Promise((resolve, reject) => {
    const resolvedSource = path.resolve(sourceFolder);
    const resolvedZip = path.resolve(zipFilePath);
    const parentDir = path.dirname(resolvedZip);

    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true });
    }

    // Use Windows PowerShell Compress-Archive
    const cmd = `powershell -NoProfile -Command "Compress-Archive -Path '${resolvedSource}\\*' -DestinationPath '${resolvedZip}' -Force"`;

    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        return reject(err);
      }
      if (fs.existsSync(resolvedZip)) {
        const stats = fs.statSync(resolvedZip);
        resolve({
          totalBytes: stats.size,
          sizeFormatted: (stats.size / 1024).toFixed(1) + ' KB'
        });
      } else {
        reject(new Error('Zip file was not generated'));
      }
    });
  });
}
