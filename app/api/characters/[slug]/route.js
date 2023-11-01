



import characters from '@/data/characters.json'
import quotes from '@/data/quotes.json'
import { NextResponse } from 'next/server'

export async function GET(req,{params}){
   try {
    const character  = characters.data.find(item=>item.slug===params.slug)
    if (!character){
      return new NextResponse('not found', { status: 404 })
    }

    const character_quotes = quotes.data.filter(item=>item.character_id === character.id,)

    return NextResponse.json({
      character,
      character_quotes: character_quotes.lenght>0?character_quotes:null,
    })





   } catch (error) {
    return new NextResponse('Internal Server Error',{status: 500})
    
   }

}