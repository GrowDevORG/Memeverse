"use client"

import { useUser } from "@clerk/nextjs"

export default function useFetchUser () {
    const { isSignedIn, isLoaded } = useUser();

    return {
      isAuthenticated: isSignedIn ?? false,
      isPending: !isLoaded, // `isLoaded` is false while Clerk is loading
    };
}