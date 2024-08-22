// hooks/useSignUpLogic.ts

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export const useSignUpLogic = () => {
	const { isLoaded, signUp, setActive } = useSignUp();
	const router = useRouter();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isUserTutor, setIsUserTutor] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isGoogleLoading, setIsGoogleLoading] = useState(false);
	const [error, setError] = useState("");
	const [otp, setOtp] = useState("");
	const [isOtpSent, setIsOtpSent] = useState(false);

	const handleCredentialSignUp = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");

		try {
			if (!isLoaded) return;

			const userResponse = await signUp.create({
				password,
				firstName: name.split(" ")[0],
				lastName: name.split(" ")[1] || "",
				emailAddress: email,
				unsafeMetadata: { role: isUserTutor ? "tutor" : "user" },
			});

			if (userResponse.status === "missing_requirements") {
				await signUp.prepareVerification({ strategy: "email_code" });
				setIsOtpSent(true);
			} else if (userResponse.status === "complete") {
				await setActive({ session: userResponse.createdSessionId });
				router.push("/");
			}
		} catch (error) {
			console.error("Error in signup handler:", error);
			setError("An error occurred during sign-up. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	const handleOtpVerification = async () => {
		setIsLoading(true);
		setError("");

		try {
			if (!isLoaded) return;

			const verificationResponse = await signUp.attemptVerification({
				strategy: "email_code",
				code: otp,
			});

			if (verificationResponse.status === "complete") {
				await setActive({ session: verificationResponse.createdSessionId });
				router.push("/");
			} else {
				setError("Invalid OTP. Please try again.");
			}
		} catch (error) {
			console.error("Error in OTP verification:", error);
			setError("An error occurred during OTP verification. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	const handleGoogleSignUp = async () => {
		setIsGoogleLoading(true);
		try {
			if (!isLoaded) return;

			await signUp.authenticateWithRedirect({
				strategy: "oauth_google",
				redirectUrl: "/sso-callback",
				redirectUrlComplete: "/",
			});
			await signUp.update({
				unsafeMetadata: { role: isUserTutor ? "tutor" : "user" },
			});
		} catch (err) {
			console.error("Error signing up with Google", err);
			setError("An error occurred during Google sign-up. Please try again.");
		} finally {
			setIsGoogleLoading(false);
		}
	};

	return {
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
	};
};
