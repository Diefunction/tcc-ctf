const { spawn } = require('child_process');

const execute = async (command) => {
    const child = spawn(command);
    
    let output = '';
    for await (const chunk of child.stdout) {
        output = output + chunk;
    }
    let error = '';
    for await (const chunk of child.stderr) {
        error = error + chunk;
    }
    await new Promise( (resolve, reject) => {
        child.on('close', resolve);
    });
    if (error) {
        throw new Error(`ERROR: ${error}`);
    }
    return output;
};

module.exports = { execute };