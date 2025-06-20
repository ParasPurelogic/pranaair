import DashboardLayout from "@/Components/CustomerDetails/dashboard-layout";
import { domain } from "@/config";
import getUserinfo from "@/lib/server/getUserinfo";
import { redirect } from "next/navigation";

export default async function Page() {
    // userinfo
    const userInfo = await getUserinfo();

    // If logged in, redirect to dashboard
    if (!userInfo?.token) {
        redirect(`${domain}/customer-login`)
    }
    return <DashboardLayout />
}