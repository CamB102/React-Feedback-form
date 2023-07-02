import {useState} from 'react'
import HappinessPicker from "./HappinessPicker"

function OverallFeedback(){
    
    const [foodScore, setFoodScore] = useState(0)
    const [serviceScore, setServiceScore] = useState(0)
    const [valueScore, setValueScore] = useState(0)

    let totalScore = foodScore + serviceScore + valueScore

    return(
        <div>
            <h5>Let us know how we did</h5>
            <h6>Food</h6>
            <HappinessPicker setParentState={setFoodScore} score={foodScore}/>       

            <h6>Service</h6>
            <HappinessPicker setParentState={setServiceScore} score={serviceScore}/>

            <h6>Value for money</h6>
            <HappinessPicker setParentState={setValueScore} score={valueScore}/>

            <h6>Total Score: {totalScore}/12</h6>
        </div>
    )
}
export default OverallFeedback