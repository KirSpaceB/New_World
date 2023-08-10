import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name:'Credentials',
      credentials: {
        username: {label:"username", type:"text"},
        password: {label:"password", type:"password"},
      },
      async authorize(credentials,req) {
        const user = {id:"1",name:credentials?.username, password:credentials?.password}
        if(user) {
          return user
        } else {
          return null
        }
      }
    })
  ]
});


export { handler as GET, handler as POST };