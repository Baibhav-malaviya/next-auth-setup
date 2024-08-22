import { NextRequest, NextResponse } from "next/server";
import { clerkClient, getAuth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
	try {
		const { userId } = await getAuth(req);
		if (!userId)
			return NextResponse.json(
				{
					message: "userId not found",
					success: false,
				},
				{ status: 404 }
			);

		const user = await clerkClient.users.getUser(userId);
		return NextResponse.json(
			{
				message: "userId found successfully",
				success: true,
				user,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Error in  user GET api route", success: false },
			{ status: 500 }
		);
	}
}
