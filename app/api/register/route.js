import { connectDB } from "@/lib/db";

export async function POST(req) {
    const { username, password } = await req.json();

    const db = await connectDB();

    const existing = await db.query(`SELECT * FROM user WHERE username = $username`, {
        username,
    });

    if (existing[0].length > 0) {
        return new Response(JSON.stringify({ error: 'Username already exists' }), { status: 400 });
    }

    const user = await db.create('user', {
        username,
        password, // You should hash this in production!
    });

    return new Response(JSON.stringify(user[0]), { status: 201 });
}
