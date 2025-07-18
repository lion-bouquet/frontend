import { NextResponse } from "next/server";

export async function POST(req) {
  const { tokenCode } = await req.json();

  const response = await fetch(
    "https://likelion.patulus.com/api/v1/users/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tokenCode }),
    }
  );

  if (!response.ok) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const result = await response.json();
  const { accessToken, refreshToken } = result.data;

  return NextResponse.json({
    success: true,
    data: {
      accessToken,
      refreshToken,
    },
  });
}
