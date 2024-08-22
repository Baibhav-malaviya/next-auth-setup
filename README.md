# Next.js Project with Clerk Authentication, Shadcn, and Tailwind

## Overview

This Next.js project provides a complete setup for starting a new project with authentication using Clerk, styling with Shadcn UI and Tailwind CSS, and additional features such as video uploading with support for m3u8 and HLS format URLs. The project includes various reusable components for enhanced user interface and experience.

## Features

- **Authentication**: Integrated Clerk for user authentication.
- **Styling**: Utilizes Shadcn UI and Tailwind CSS for modern, responsive design.
- **Video Upload**: Upload videos with Cloudinary, providing m3u8 and HLS format URLs.
- **Reusable Components**:
  - `FadeIn`: Component for fade-in animation.
  - `SlideIn`: Component for slide-in animation.
  - `Container`: Wrapper for responsive layout.
  - `PopupModal`: Modal component with transition effects using Headless UI and Lucide icons.

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Baibhav-malaviya/next-auth-setup.git
   cd next-auth-setup
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.test` file in the root directory and add your environment variables. For example:

   ```
   # cloudinary secret

   CLOUDINARY_CLOUD_NAME=""
   CLOUDINARY_API_KEY=""
   CLOUDINARY_API_SECRET=""

   # clerk secret

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
   CLERK_SECRET_KEY=""

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Reusable Components

### `FadeIn`

A component that applies a fade-in animation to its children. This is useful for smooth, gradual content visibility.

```tsx
import FadeIn from "./components/FadeIn";

// Usage
<FadeIn>
	<p>Your content here</p>
</FadeIn>;
```
