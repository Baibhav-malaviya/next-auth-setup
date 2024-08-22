import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
	"/sign-in",
	"/sign-up",
	//! we can add more public routes here
]);

// Define public API routes that don't require authentication
const isPublicApiRoute = createRouteMatcher([
	"/api/ask",
	//! we can add more public API routes here
]);

// Middleware function to handle authentication and routing
export default clerkMiddleware((auth, req) => {
	const { userId } = auth();
	const currentUrl = new URL(req.url);
	const isHomePage = currentUrl.pathname === "/browse-courses"; // home route is available to all the users
	const isApiRequest = currentUrl.pathname === "/api";

	// Redirect authenticated users to home page if they're on a public route
	if (userId && isPublicRoute(req) && !isHomePage) {
		return NextResponse.redirect(new URL("/home", req.url));
	}

	// Handle unauthenticated users
	if (!userId) {
		// Redirect to sign-in page if trying to access a protected route
		if (!isPublicApiRoute(req) && !isPublicRoute(req)) {
			return NextResponse.redirect(new URL("/sign-in", req.url));
		}

		// Redirect to sign-in page if trying to access a protected API route
		if (isApiRequest && !isPublicApiRoute(req)) {
			return NextResponse.redirect(new URL("/sign-in", req.url));
		}
	}

	// Allow the request to proceed
	return NextResponse.next();
});

// Configuration for the middleware
export const config = {
	// Apply this middleware to all routes except static files and _next
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
