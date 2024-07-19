import { useState } from "react";

function Num(props){
    return(
        <>
            <div className="border-2 p-2 rounded-lg w-10 hover" key={props.number}>{props.number}</div>
        </>
    )
}
function Element(props){
    return (
        <>
            <div className="border-2 p-2 rounded-lg w-10" key={props.sign}>{props.sign}</div>
        </>
    )
}
function Container(){
    let numbers = []
    let signs = ['+','x','-',"/","=",'.']
    let sum = 0;
    while (sum < 10){
        numbers.push(sum)
        sum++
    }
    return (
        <>
            <div className="border-4 rounded-lg w-fit grid grid-cols-4 gap-8  p-6 m-20 text-center mx-auto">
                <div className="display col-span-4 border-2 p-6 bg-gray-200 text-end">1 + 1</div>
                {numbers.map((el)=>{
                    return <Num number={el}/>
                })}
                {signs.map((el,i)=> <Element key={i} sign={el}/>)}
                <div className="col-span-4 border-4 rounded-lg">Clear</div>

            </div>
        </>
    )
}

export default Container