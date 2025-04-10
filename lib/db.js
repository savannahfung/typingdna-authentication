import Surreal from 'surrealdb';

const db = new Surreal();

export async function connectDB() {
    console.log('Connecting to SurrealDB Cloud...');
    try {
        await db.connect('wss://typingdna-authe-06b1tabmllte525tko2vlfd4lc.aws-euw1.surreal.cloud/rpc');
        await db.signin({
            username: 'admin',
            password: 'admin',
        });
        await db.use({
            namespace: 'test',
            database: 'user',
        });

        console.log('Connected to SurrealDB Cloud');
    } catch (error) {
        console.error('Failed to connect to SurrealDB Cloud:', error);
    }

    return db;
}
