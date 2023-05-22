import getBio from '@/actions/getBio'
import getLinks from '@/actions/getLinks'
import FormAddLink from '@/components/FormAddLink'
import LinkCard from '@/components/LinkCard'
import Modal from '@/components/Modal'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const bio = await getBio()

  if (!bio) {
    redirect('/create-bio')
  }

  const links = await getLinks(bio.id)

  return (
    <>
      <div className="grid grid-cols-2 w-full ">
        <section className="flex flex-col gap-5 p-5 ">
          <FormAddLink />
          <div className="flex flex-col gap-5">
            {links?.map(link => (
              <LinkCard key={link.id} link={link} />
            ))}
          </div>
        </section>
        <section>
          <div className="  relative z-30 border-[10px] border-black rounded-[3rem]   w-[352px] h-[754px]    m-auto left-0 right-0 top-10">
            <iframe
              src={`/${bio?.username}`}
              className="absolute  h-full  w-full  rounded-[3rem] "
            />
          </div>
        </section>
      </div>
    </>
  )
}
