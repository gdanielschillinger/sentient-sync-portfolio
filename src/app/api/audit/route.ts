import { NextResponse } from 'next/server';

// Serverless-compatible audit endpoint
// Returns mock audit data — replace with a cloud DB (e.g., Vercel Postgres, PlanetScale)
// when ready to wire to a persistent backend
export async function GET() {
  const mockLogs = [
    {
      thread_id: 'node-alpha-01',
      integrity_hash: 'a3f9c2e1b8d74051',
      collusion_score: '0.02',
      security_flag: false,
      timestamp: new Date().toISOString(),
    },
    {
      thread_id: 'node-beta-02',
      integrity_hash: 'f7a1d3c9e2b50847',
      collusion_score: '0.87',
      security_flag: true,
      timestamp: new Date(Date.now() - 15000).toISOString(),
    },
    {
      thread_id: 'node-gamma-03',
      integrity_hash: 'b2e5f8a0c4d71639',
      collusion_score: '0.01',
      security_flag: false,
      timestamp: new Date(Date.now() - 30000).toISOString(),
    },
  ];

  return NextResponse.json(mockLogs);
}
