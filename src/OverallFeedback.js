import {useState} from 'react'
import HappinessPicker from "./HappinessPicker"

function OverallFeedback(){
    
    const [foodScore, setFoodScore] = useState(0)
    const [serviceScore, setServiceScore] = useState(0)
    const [valueScore, setValueScore] = useState(0)

    // const[foodColor, setFoodColor] = useState()
    // const[serviceColor, setServiceColor] = useState()
    // const[valueColor, setValueColor] = useState()

    let totalScore
    // setFoodColor("blue")
    // setServiceColor("blue")
    // setValueColor("blue")

    totalScore = foodScore + serviceScore + valueScore

    return(
        <div>
            <h5>Let us know how we did</h5>
            <h6>Food</h6>
            <HappinessPicker setParentState={setFoodScore} />       

            <h6>Service</h6>
            <HappinessPicker setParentState={setServiceScore} />

            <h6>Value for money</h6>
            <HappinessPicker setParentState={setValueScore} />

            <h6>Total Score: {totalScore}/12</h6>
        </div>
    )
}
export default OverallFeedback