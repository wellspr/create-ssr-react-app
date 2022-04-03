#!/usr/bin/env node

const {execSync} = require("child_process");

const runCommand = command => {
    try {
        execSync(`${command}`, {stdio: "inherit"});
    }
    catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/wellspr/create-ssr-react-app ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;
const buildCommand = `cd ${repoName} && npm run build`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exitCode = -1;

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exitCode = -1;

console.log(`Building development server.`);
const builtProject = runCommand(buildCommand);
if (!builtProject) process.exitCode = -1;

console.log("Ready!");