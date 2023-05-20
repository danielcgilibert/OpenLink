import getBio from '@/actions/getBio'
import LinkCard from '@/components/LinkCard'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const bio = await getBio()

  if (!bio) {
    redirect('/create-bio')
  }

  return (
    <main>
      <div className="grid grid-cols-2 w-full ">
        <section className="flex flex-col gap-5 p-5 ">
          <button className="bg-purple-700 text-white py-2  rounded-full">
            + Add Link
          </button>
          <div className="flex flex-col gap-5">
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
          </div>
        </section>

        <section className="relative ">
          <div className="border-[20px] border-black rounded-[3rem]  w-[352px] h-[754px] p-4 absolute  m-auto left-0 right-0 top-10">
            <div>movil</div>
          </div>
        </section>
      </div>
    </main>
  )
}
