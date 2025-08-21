#!/usr/bin/env node
const path = require("path");
const { spawn } = require("child_process");
const fs = require("fs");

const isWin = process.platform === "win32";
const binName = isWin
	? "react-component-template-generator.exe"
	: "react-component-template-generator";
const binPath = path.join(__dirname, binName);

let args = process.argv.slice(2);

// Show help
if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
	console.log(`
rctg - React Component Generator

Usage:
  rctg <componentCategoryName> <componentName>

Example:
  rctg ui Button
  rctg layout Header
  rctg Button   # defaults to "feature" category
`);
	process.exit(0);
}

// If only one argument is given, assume it's the componentName
if (args.length === 1) {
	args = ["feature", args[0]];
}

const child = spawn(binPath, args, { stdio: "inherit", cwd: process.cwd() });
child.on("exit", (code) => process.exit(code ?? 1));
