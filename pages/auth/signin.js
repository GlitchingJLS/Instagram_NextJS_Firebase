import { getProviders, signIn } from "next-auth/react"

export default function SignIn({ providers }) {
  return (
    <div className="h-[calc(100vh-205px)] flex flex-col items-center justify-center text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="instagram" />
        <p className="font-xs">
            This is not a REAL app, it is a build for educational purposes only
        </p>

        <div className="mt-5">
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button 
                  onClick={() => signIn(provider.id, { callbackUrl: '/'})}
                  className="p-3 bg-blue-500 rounded-lg text-white"
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
        </div>
    </div>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}