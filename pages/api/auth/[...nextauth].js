import NextAuth from 'next-auth'
import CognitoProvider from "next-auth/providers/cognito";
import GoogleProvider  from "next-auth/providers/google"

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
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            domain: process.env.GOOGLE_DOMAIN,
          })
   
      ],
      secret:process.env.JWT_SECRET,
     pages: {
        signin: '/login'
       },
    
      
})

