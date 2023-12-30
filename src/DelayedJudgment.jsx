import { useEffect, useState } from "react"

export default function DelayedJudgment({answer, setShowModal}) {
    const [delay, setDelay] = useState("")

    // delay answer, rendering dots
    useEffect(() => {
        let count = ".  ";
        setDelay(count)
        let myInterval = setInterval(() => {
            count += ".  ";
            if (count.length > 12){
                clearInterval(myInterval)
            }        
            setDelay (count)
        } , 750)   
        }, [])
    
  return (
  <div>
    {delay.length < 12 ? <p>{delay}</p> : <>
            <p>{answer.wording}</p>
            <button onClick={()=>setShowModal(false)}>Continue</button>
            </>
    }
   </div>
   
  )
}
