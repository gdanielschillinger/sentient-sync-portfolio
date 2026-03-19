import { NextResponse } from "next/server";

export async function GET() {
  const policy = [
    "version: STSv1",
    "mode: enforce",
    "mx: *.mx.cloudflare.net",
    "max_age: 604800",
  ].join("\n");

  return new NextResponse(policy, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

