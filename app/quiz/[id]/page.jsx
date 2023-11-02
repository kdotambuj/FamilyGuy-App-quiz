import { getQuizQuestion } from "@/lib/quiz"
import { Container } from '@/components/Container'
import { Answer } from '@/components/Answers'

export default async function Page({ params }) {
    const { question } = await getQuizQuestion(params.id)
  
    return (
      <Container as="main" className="flex flex-col gap-5 py-5">
        <h1 className="text-lg font-semibold">{question.title}</h1>
        <Answer answers={question.answers} questionId={params.id} />
      </Container>
    )
  }
