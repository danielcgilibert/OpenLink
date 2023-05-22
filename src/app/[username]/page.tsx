import getBio from '@/actions/getBio'
import getLinks from '@/actions/getLinks'

export default async function Page({
  params,
}: {
  params: { username: string }
}) {
  const { username } = params

  const bio = await getBio(username)
  const links = await getLinks(bio?.id as number)
  console.log(links)

  return (
    <main className="flex flex-col   bg-slate-300  text-black max-w-4xl mx-auto p-5 h-full gap-12 md:px-44">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl text-center">{bio?.name}</h1>
        <img
          className="rounded-full border-2 border-black  w-24 h-24 mx-auto mt-5 "
          src={bio?.avatar}
          alt="asdasd"
        />
        <div>
          <p className="text-center">{bio?.description}</p>
        </div>
      </header>

      <section className="flex flex-col gap-5">
        {links?.map(link => (
          <div className="bg-red-500 text-white p-5 w-full rounded">
            {link.title}
          </div>
        ))}
      </section>
    </main>
  )
}
