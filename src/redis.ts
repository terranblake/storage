const Redis = require('ioredis');

const url: string = String(process.env.REDIS);
const redis = new Redis(url);

export default redis;