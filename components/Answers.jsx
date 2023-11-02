// 'use client'

// // this is a react component which gets answers and questions id


// import { useEffect, useState } from 'react'
// import cn from 'classnames'
// import Link from 'next/link'
// import { FiRepeat } from 'react-icons/fi'
// import { MdNearbyError } from 'react-icons/md'
// import { FaCheck } from 'react-icons/fa'


// export const Answer = ({answers,questionId})=>{
//     const [selected,setSelected] = useState(null)
//     const [data,setData] = useState(null)
//     const [loading,setLoading] = useState(false)

//     useEffect(()=>{
//         let subscribed = true
//         if (selected){
//             setLoading(true);
//             fetch(`/api/quiz/answers/${questionId}`)
//              .then(res=>res.json())
//                .then(data=>{
//                 setLoading(false)
//                 if (subscribed){
//                     setData(data)
//                 }
//                })
//         }

//         return ()=>{
//             console.log('Cancelled')
//             subscribed = false
//         }
//     },[questionId,selected])


//     return (
//         <>

//         <ul>
//             {answers.map(item=>{
//                 const isLoading = selected===item && loading
//                 const isCorrect = data?.correct === item
//                 const isWrong = selected ===item && data && data?.correct !== selected


//                 return (
//                     <li key={item}>
//                         <button 
//                           disabled = {data || loading}
//                           onClick={()=>setSelected(item)}
//                           className={cn(
//                             'p-2 flex rounded-md justify-between items-center w-full text-sm font-semibold disabled:cursor-not-allowed transition-all',
//                             isLoading && 'animate-pulse',
//                             isWrong ? 'bg-red-700' : 'bg-slate-800',
//                             isCorrect && 'outline text-green-500')
//                           }
//                         > {item}
//                          {isCorrect && <FaCheck/>}
//                          {isWrong && <MdNearbyError />}
    
//                         </button>
    
//                     </li>
//                 )
//             })
//          }


//         </ul>


//         {
//             data?.random && (
//                 <Link 
//                 href={`/quiz/${data.random}`}
//                 className='text-blue-400 flex items-center gap-1'>
//                 <FiRepeat className="mt-1" />
//                    Do it again
                   
//                 </Link>
//             )
//         }
        
        
        
        
        
        
        
//         </>
//     )


// }





'use client'

import { useEffect, useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { FiRepeat } from 'react-icons/fi'
import { MdNearbyError } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa'

export const Answer = ({ answers, questionId }) => {
  const [selected, setSeleceted] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let subscribed = true
    if (selected) {
      setLoading(true)
      fetch(`/api/quiz/answer/${questionId}`)
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          if (subscribed) {
            setData(data)
          }
        })
    }

    return () => {
      console.log('cancelled!')
      subscribed = false
    }
  }, [questionId, selected])

  return (
    <>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {answers.map(item => {
          const isLoading = selected === item && loading
          const isWrong =
            selected === item && data && data?.correct !== selected
          const isCorrect = data?.correct === item

          return (
            <li key={item}>
              <button
                disabled={data || loading}
                onClick={() => setSeleceted(item)}
                className={cn(
                  'p-2 rounded-md  items-center justify-between w-full flex text-sm font-semibold disabled:cursor-not-allowed transition-all',
                  isLoading && 'animate-pulse',
                  isCorrect && 'outline text-green-500',
                  isWrong? 'bg-red-700' : 'bg-slate-800',
                  
                )}
              >
                {item}
                {isCorrect && <FaCheck />}
                {isWrong && <MdNearbyError />}
              </button>
            </li>
          )
        })}
      </ul>
      {data?.random && (
        <Link
          href={`/quiz/${data.random}`}
          className="flex items-center gap-1 text-blue-400"
        >
          <FiRepeat className="mt-1" />
          Do it again
        </Link>
      )}
    </>
  )
}



