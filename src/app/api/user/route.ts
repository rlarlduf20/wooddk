import { NextResponse } from "next/server";

import { getUser } from "@/app/_lib/db/user";
import { auth } from "@/auth";

export async function GET() {
  try {
    const session = await auth();

    const user = await getUser(session?.user?.id);

    return NextResponse.json({ success: true, user });
  } catch {
    return NextResponse.json(
      { error: "Failed to find user." },
      { status: 500 },
    );
  }
}
