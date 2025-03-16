import Reaact from "react";

function Clock(props){
    return(
        <div>
            <h1>안녕, 리엑트!</h1>
            <h2> 오늘 날짜 : {new Date().toLocaleDateString()}</h2>
            <h2> 현재 시간 : {new Date().toLocaleTimeString()}</h2> 
            {/* toLocalDateString() : 날짜, toLocalTimeString() : 시간 */}
        </div>
    )
}
export default Clock;