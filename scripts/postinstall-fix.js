// scripts/postinstall-fix.js
const fs = require('fs');
const path = require('path');

try {
  if (process.platform === 'win32') {
    // nothing to do on Windows
    process.exit(0);
  }

  const binPath = path.join(__dirname, '..', 'bin', 'react-component-template-generator');
  if (fs.existsSync(binPath)) {
    try {
      fs.chmodSync(binPath, 0o755); // make executable on POSIX
    } catch (err) {
      console.warn('postinstall: chmod failed (non-fatal):', err.message);
    }
  }
} catch (err) {
  console.warn('postinstall: unexpected error (non-fatal):', err.message);
}
