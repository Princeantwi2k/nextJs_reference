import NextAuth from 'next-auth'
import CognitoProvider from "next-auth/providers/cognito";


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
   
      ],
    
})

