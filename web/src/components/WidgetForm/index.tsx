import CloseButton from "../CloseButton";

import bugImageUrl from '../../assets/bug.png';
import ideaImageUrl from '../../assets/idea.png';
import thoughtImageUrl from '../../assets/thought.png';
import { useState } from "react";
import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import FeedbackContentStep from "./Steps/FeedbackContentStep";
import FeedBackSucessStep from "./Steps/FeedbackSucessStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image:{
            source: bugImageUrl,
            alt:'Imagem de um inseto',
        }
    },
    IDEA: {
        title: 'Ideia',
        image:{
            source:ideaImageUrl,
            alt:'Imagem de uma lâmpada',
        }
    },
    OTHER: {
        title: 'Outro',
        image:{
            source:thoughtImageUrl,
            alt:'Imagem de uma nuvem',
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes; //chave

const WidgetForm = () =>{

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const[feedbackSent, setFeedbackSent] = useState(false);

    const handleRestartFeedback = ()=>{
        setFeedbackType(null);
        setFeedbackSent(false);
    }

    return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem) md:w-auto]">
        
        {feedbackSent ? (
            <FeedBackSucessStep onFeedbackRestartRequested ={handleRestartFeedback} />
        ) : (
            <>
             {!feedbackType ? (
           <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
       ) : (
       
       < FeedbackContentStep
            feedbackType={feedbackType}
            onFeedbackRestartRequested ={handleRestartFeedback}
            onFeedbackSent={() => setFeedbackSent(true)}
       
       />
       )}
            </>
        )}
      

        <footer className="text-xs text-neutral-400">
            Feiro com ♥ pela <a className="underline underline-offset-2" href="https://github.com/haileicristina">Hailei Cristina</a> 
        </footer>
    </div>
    );
}
export default WidgetForm;