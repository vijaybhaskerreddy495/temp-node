const os = require('os');

const   user = os.userInfo();

console.log(user);

console.log(`${os.uptime()} seconds`)


const currentOs={

    name :os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem :os.freemem(),
}

console.log(currentOs);