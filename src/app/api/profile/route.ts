import { auth } from "@/lib/auth";
import { db } from "@/db";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

export async function PATCH(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();

    const { name, image } = body;

    if (!name || name.trim().length < 2) {
      return Response.json(
        { error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    await db
      .update(user)
      .set({
        name: name.trim(),
        image: image?.trim() || null,
        updatedAt: new Date(),
      })
      .where(eq(user.id, session.user.id));

    return Response.json({
      success: true,
      message: "Profile updated successfully",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}