import { useSession, signOut } from 'next-auth/react'

export default function Home() {
  const { data } = useSession()

  return (
    <>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      <button onClick={() => signOut()}>SignOut</button>
    </>
  )
}
