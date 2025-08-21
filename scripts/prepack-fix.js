// scripts/prepack-fix.js
const fs = require("fs");
const path = require("path");

if (process.platform === "win32") process.exit(0);

["react-component-template-generator", "cli.js"].forEach((file) => {
	const p = path.join(__dirname, "..", "bin", file);
	if (fs.existsSync(p)) {
		try {
			fs.chmodSync(p, 0o755);
		} catch (e) {
			/* ignore */
		}
	}
});
