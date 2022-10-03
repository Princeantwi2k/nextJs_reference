import NextAuth from 'next-auth'
import CognitoProvider from "next-auth/providers/cognito";
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
    session:{
        jwt:true
      },
    providers: [
        CognitoProvider({
          clientId: process.env.COGNITO_CLIENT_ID,
          clientSecret: process.env.COGNITO_CLIENT_SECRET,
          domain: process.env.COGNITO_DOMAIN,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
          }),
          // Sign in with passwordless email link
          FacebookProvider({
              clientId: process.env.FACEBOOK_CLIENT_ID,
              clientSecret: process.env.FACEBOOK_CLIENT_SECRET
            }),
            GitHubProvider({
              clientId: process.env.GITHUB_ID,
              clientSecret: process.env.GITHUB_SECRET
          
            }),
      ],
      pages: {
        signIn: '/login'
       },
    
      database:process.env.DATABASE_URL,
})

