import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { getAllCharacters } from '@/lib/characters'
import Head from 'next/head';


export default async function Page(){
  const data = await getAllCharacters();

  return (

    

    <main>
      
      <Container className="grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4">
        {data?.characters?.map(item => {
          return (
            <Link
              href={`/characters/${item.slug}`}
              key={item.name}
              className="overflow-hidden rounded-md"
            >
              <Image
                src={item.avatar}
                alt=""
                className="transition-all duration-500 hover:scale-110 hover:-rotate-2"
                width={500}
                height={500}
              />
            </Link>
          )
        })}
      </Container>
    </main>




  )

}
