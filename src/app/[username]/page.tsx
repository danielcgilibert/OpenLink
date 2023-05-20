import getBio from '@/actions/getBio'

export default async function Page({
  params,
}: {
  params: { username: string }
}) {
  const { username } = params

  const bio = await getBio(username)

  console.log(username)

  console.log(bio)

  return (
    <main className="bg-white text-black max-w-4xl mx-auto p-5">
      <header>
        <h1 className="text-3xl text-center">{bio?.name}</h1>

        <img
          className="rounded-full border-2 border-black  w-24 h-24 mx-auto mt-5 "
          src={bio?.avatar}
          alt="asdasd"
        />
      </header>
      hoLA HOA
    </main>
  )
}
