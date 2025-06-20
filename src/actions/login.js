"use server"

import { getMyProfile, loginCustomer } from "@/lib/api"
import { cookies } from "next/headers";
import * as jose from "jose"

const login = async ({ email, password }) => {
    try {
        // Login user
        const loginInfo = await loginCustomer(email, password);

        // If user not logged in
        if (!loginInfo?.token) {
            throw new Error(loginInfo.message)
        }

        // Fetch user details
        const userEmail = (await getMyProfile(loginInfo.token))?.data?.email;

        // Throw error if info. not received
        if (!userEmail) {
            throw new Error("unable to fetch user details")
        }

        // Set Cookie
        const cookie = await cookies();

        // Sign a JWT token
        // Generate JWT
        const secret = new TextEncoder().encode("kokaj))(**7ujhjs___9sdhjshd%%fdgsdsd")
        // JWT Algo
        const alg = 'HS256'
        // Sign JWT
        const signedUserInfo = await new jose.SignJWT({
            token: loginInfo?.token,
            email: userEmail
        })
            .setProtectedHeader({ alg })
            .setIssuedAt()
            .setExpirationTime('6d')
            .sign(secret)

        // Set the token in Cookie
        cookie.set(
            "pr-cd-ud",
            signedUserInfo,
            {
                httpOnly: true,
                sameSite: "strict",
                domain: process.env.NODE_ENV === "production" ? ".pranaair.com" : undefined,
                expires: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
                secure: process.env.NODE_ENV === "production",
            }
        )

        // Return
        return {
            status: true,
            message: "Login successfully",
        }

        // Error
    } catch (error) {
        return {
            status: false,
            message: error.message ?? "Something went wrong",
        }
    }
}

export default login