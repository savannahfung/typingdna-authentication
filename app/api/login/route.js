import { connectDB } from '@/lib/db';

export async function POST(req) {
    const { username, password } = await req.json();

    const db = await connectDB();

    const result = await db.query(`SELECT * FROM user WHERE username = $username AND password = $password`, {
        username,
        password, // Compare hashed password in production
    });

    const user = result[0];

    if (user.length === 0) {
        return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
    }

    return new Response(JSON.stringify({ success: true, user }), { status: 200 });
}
