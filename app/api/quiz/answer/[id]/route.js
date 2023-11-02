import questions from '@/data/quiz.json'
import { NextResponse } from 'next/server'


export async function GET(req,{params}) { 

    try {
        const question = questions.data.find(item=>item.id==params.id)

        if (!question){
            return new NextResponse('not found', { status: 404 })

        }

        const {correct_ans} = question
        console.log(correct_ans)

        const remainingQuestions = questions.data.filter(item=>item.id!==params.id)

        const random = Math.floor(Math.random()*remainingQuestions.length)

        return NextResponse.json({
            correct: correct_ans,
            random: remainingQuestions[random].id
        })
        
    } catch (error) {
        return new NextResponse('Internal server Error',{status:500})
        
        
    }
 }