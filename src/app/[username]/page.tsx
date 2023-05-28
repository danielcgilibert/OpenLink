import getBio from '@/actions/getBio'
import getLinks from '@/actions/getLinks'
import getPublicBio from '@/actions/getPublicBio'

export default async function Page({
  params,
}: {
  params: { username: string }
}) {
  const { username } = params

  const bio = await getPublicBio(username)
  const links = await getLinks(bio?.id as number)

  return (
    <main className="flex flex-col   bg-neutral-100 shadow-xl h-screen  text-black max-w-4xl mx-auto p-5  gap-12 md:px-44">
      <header className="flex flex-col justify-center items-center gap-3   p-5 border-b-2  border-zinc-800">
        <img
          className="rounded-full border-[4px] border-black  w-24 h-24   "
          src={bio?.avatar}
          alt="avatar"
        />

        <div>
          <h1 className="text-3xl">{bio?.name}</h1>
          <p className="hidden md:text-sm">{bio?.description}</p>
        </div>
      </header>

      <section className="flex flex-col gap-5 text-center">
        {links?.map(link => (
          <div
            key={link.id}
            className="bg-zinc-800 text-white p-5 w-full rounded ">
            {link.title}
          </div>
        ))}
      </section>
    </main>
  )
}
