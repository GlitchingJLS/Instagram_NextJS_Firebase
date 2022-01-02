import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: '619809791888-a14ufvmeb33ioe1d5c69l2ev17vleoeh.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],

  pages: {
      signIn: "/auth/signin"
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name.split(' ').join('').toLocaleLowerCase()
    
      session.user.uid = token.sub
      return session
    }
  }
})