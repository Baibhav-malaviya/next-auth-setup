// components/SignUpForm.tsx

"use client";

import Link from "next/link";
import { Loader2, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Container from "@/components/myComponents/Container";
import Section from "@/components/myComponents/Section";
import { InputOTPControlled } from "@/components/myComponents/InputOTPControlled";
import { useSignUpLogic } from "@/hooks/useSignupLogic";

export default function SignUpPage() {
	return <SignUpForm />;
}

const SignUpForm = () => {
	const {
		isLoaded,
		name,
		setName,
		email,
		setEmail,
		password,
		setPassword,
		isUserTutor,
		setIsUserTutor,
		isLoading,
		isGoogleLoading,
		error,
		otp,
		setOtp,
		isOtpSent,
		handleCredentialSignUp,
		handleOtpVerification,
		handleGoogleSignUp,
	} = useSignUpLogic();

	if (!isLoaded) return null;

	return (
		<Section className="bg-background rounded-lg shadow-md">
			<Container className="space-y-6 max-w-md w-full sm:w-96 mx-auto px-2 sm:px-4 md:px-6">
				<div className="flex items-center flex-col">
					<h2 className="mx-auto font-bold">Create your account</h2>
					<p className="text-sm text-muted-foreground text-center">
						Welcome! Please fill in the details to get started.
					</p>
				</div>

				{error && (
					<Alert variant="destructive">
						<AlertDescription>{error}</AlertDescription>
					</Alert>
				)}

				{!isOtpSent ? (
					<form onSubmit={handleCredentialSignUp} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="name">Name</Label>
							<Input
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
								className="w-full"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className="w-full"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								className="w-full"
							/>
						</div>
						<div className="flex space-x-2">
							<Checkbox
								id="is-tutor"
								checked={isUserTutor}
								onCheckedChange={(checked: boolean) => setIsUserTutor(checked)}
							/>
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="is-tutor"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									I am a tutor
								</label>
								<p className="text-sm text-muted-foreground">
									You can change this later in settings.
								</p>
							</div>
						</div>
						<Button type="submit" className="w-full" disabled={isLoading}>
							{isLoading ? (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									Sending OTP...
								</>
							) : (
								"Sign Up"
							)}
						</Button>
					</form>
				) : (
					<>
						<InputOTPControlled otp={otp} setOtp={setOtp} />
						<Button
							onClick={handleOtpVerification}
							className="w-full"
							disabled={isLoading}
						>
							{isLoading ? (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									Verifying OTP...
								</>
							) : (
								"Verify OTP"
							)}
						</Button>
					</>
				)}

				<Button
					type="button"
					variant="secondary"
					onClick={handleGoogleSignUp}
					className="w-full flex items-center justify-center gap-2"
					disabled={isGoogleLoading}
				>
					{isGoogleLoading ? (
						<>
							<RefreshCw className="mr-2 h-4 w-4 animate-spin" />
							Signing up with Google...
						</>
					) : (
						<>
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
									<path
										fill="#4285F4"
										d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
									/>
									<path
										fill="#34A853"
										d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
									/>
									<path
										fill="#FBBC05"
										d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
									/>
									<path
										fill="#EA4335"
										d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
									/>
								</g>
							</svg>
							Sign Up with Google
						</>
					)}
				</Button>

				<div className="text-center">
					<p className="text-sm text-muted-foreground">
						Already have an account?
						<Link
							href="/sign-in"
							className="hover:underline ml-2 text-foreground font-semibold"
						>
							Sign in
						</Link>
					</p>
				</div>
			</Container>
		</Section>
	);
};
