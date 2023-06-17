import NextAuth from "next-auth/next";
import gitHubProvider from "next-auth/providers/github";
import googleProvider from "next-auth/providers/google";
export default NextAuth({
    providers: [
        gitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        googleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET
        })
    ]
});