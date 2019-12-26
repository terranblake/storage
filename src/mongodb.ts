import { default as mongoose } from 'mongoose';

const url: string = String(process.env.MONGODB);
mongoose.connect(url);

mongoose.connection.on('connected', () => console.log('mongodb connection established'))