import { cookies } from "next/headers";
import { cache } from "react";

const getUserInfo = async () => {
    try {
        // Cookies
        const cookie = await cookies();
        const cookieValue = cookie.get("pr-cd-ud")?.value;

        // Return nothing if cookie is missing
        if (!cookieValue) {
            return {}
        }

        // Split the JWT into its three parts
        const [header, payload, signature] = cookieValue.split(".");

        // Validate the JWT structure
        if (!header || !payload || !signature) {
            throw new Error("Invalid JWT structure.");
        }

        // Decode the payload
        const decodedPayload = decodeBase64Url(payload);

        // Parse the decoded payload into a JSON object
        const payloadObj = JSON.parse(decodedPayload);

        // Return the parsed payload
        return payloadObj;

        //
    } catch (error) {
        log("error", "ERROR WHILE GETTING USER INFO", error);
        return {};
    }
};

export default cache(getUserInfo)


function decodeBase64Url(base64Url) {
    // Convert Base64Url to Base64
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    // Pad the Base64 string with '=' to make its length a multiple of 4
    const padLength = (4 - (base64.length % 4)) % 4;
    base64 = base64.padEnd(base64.length + padLength, '=');

    // Decode the Base64 string to a binary string
    const binaryString = atob(base64);

    // Convert the binary string to a UTF-8 string
    const utf8String = decodeURIComponent(
        Array.prototype.map.call(binaryString, (c) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join('')
    );

    // Return the decoded UTF-8 string
    return utf8String;
}