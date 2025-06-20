"use server"

import { updateMyPassword } from "@/lib/api"
import getUserinfo from "@/lib/server/getUserinfo"

export default async function updatePassword({ old_password, new_password }) {
    try {
        const user = await getUserinfo()

        if (!user?.token) {
            return { status: false, message: "Unauthorized. Please login." }
        }

        const response = await updateMyPassword({ old_password, new_password }, user.token)

        if (response.success) {
            return { status: true, message: "Password updated successfully." }
        }

        return { status: false, message: response.message || "Update failed." }
    } catch (error) {
        return { status: false, message: error.message || "Something went wrong." }
    }
}
