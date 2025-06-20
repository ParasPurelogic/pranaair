import LoginForm from "@/Components/CustomerDetails/login-form";
import { domain } from "@/config";
import getUserinfo from "@/lib/server/getUserinfo";
import { redirect } from "next/navigation";

export default async function HomePage() {
    // userinfo
    const userInfo = await getUserinfo();

    // If logged in, redirect to dashboard
    if (userInfo?.token) {
        redirect(`${domain}/dashboard`)
    }
    // return
    return <LoginForm />
}