"use client";

import * as React from "react";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";

// Define the props for the component
interface InputOTPControlledProps {
	otp: string; // The current OTP value
	setOtp: (value: string) => void; // Function to update the OTP value
	maxLength?: number; // Optional: Define the max length of OTP (default to 6)
}

export const InputOTPControlled: React.FC<InputOTPControlledProps> = ({
	otp,
	setOtp,
	maxLength = 6, // Default max length is 6
}) => {
	return (
		<div className="space-y-2">
			{/* OTP Input Field */}
			<InputOTP
				maxLength={maxLength} // Number of OTP digits
				value={otp} // Controlled value from props
				onChange={(value) => setOtp(value)} // Update OTP through prop function
			>
				<InputOTPGroup>
					{/* Generate InputOTPSlot components based on maxLength */}
					{Array.from({ length: maxLength }).map((_, index) => (
						<InputOTPSlot key={index} index={index} />
					))}
				</InputOTPGroup>
			</InputOTP>

			{/* Display Entered OTP */}
			<div className="text-center text-sm">
				{otp === "" ? (
					<>Enter your one-time password.</>
				) : (
					<>You entered: {otp}</>
				)}
			</div>
		</div>
	);
};
