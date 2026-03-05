import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

export async function GET() {
  try {
    const dbPath = path.resolve(process.cwd(), 'sentient_sync.db');
    
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    // Fetching the last 10 audit logs from the checkpoint/state history
    const logs = await db.all('SELECT * FROM checkpoints ORDER BY thread_id DESC LIMIT 10');
    
    await db.close();

    return NextResponse.json(logs);
  } catch (error) {
    console.error('Database connection failed:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}