"use server"

import { cookies } from "next/headers";


const logout = async () => {
    try {

        // Cookie
        const cookieStore = await cookies();

        // Remove all cookies starting with "aqi_tv_"
        cookieStore.set("pr-cd-ud", "", {
            maxAge: 0,
        });

        // Return Action Response
        return {
            status: true,
            message: "Logged out successfully"
        }

    } catch (error) {
        return {
            status: false,
            message: "Something went wrong"
        }
    }
}

export default logout