const fs = require('fs');
const path = require('path');

const target = process.env.DEPLOY_TARGET;
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = require(packageJsonPath);

if (target === 'github') {
  packageJson.homepage = "http://wasifaleem2.github.io/Begin-with-Github-Actions";
} else {
  delete packageJson.homepage;
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log(`Set homepage for ${target}`);
