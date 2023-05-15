import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

const bioData: Prisma.BioCreateInput[] = [
  {
    name: 'John Doe',
    avatar: 'https://avatars.githubusercontent.com/u/8186664?v=4',
    description: 'description text',
    footerDesc: 'footer description',
    userId: 'asdasd',
    username: 'user',
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const bio of bioData) {
    const user = await prisma.bio.create({
      data: bio,
    })
    console.log(`Created bio with id: ${bio.name}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
