import React from 'react'

export default function Alert(props) {
    // to capitalize ‘s’ letter of success. 
    const Capitalise=(word)=>{ 
        let lower = word.toLowerCase();
        return  lower.charAt(0).toUpperCase()+lower.slice(1)
    }
 
    return (
       <div style={{height:"50px"}}>
        {props.alert  &&<div> 
        {/* This code uses the JavaScript "short-circuit evaluation" feature of the logical AND (&&) operator. Essentially, the code after the && will only be executed and returned if the value before it is truthy (i.e. not null, undefined, or false). In this case, if props.alert is null or undefined, the code inside the div tags will not be executed or displayed.If props.alert is a truthy value, the code inside the div tags will be executed and the resulting JSX will be displayed on the page. */}
            <div className={`alert alert-${props.alert.type}` }role="alert">
               <b> {Capitalise(props.alert.type)}:</b>{props.alert.msg}
            </div>
        </div>} 
        </div>
    //    the reason it we pur curly braces around inner div is because it is a javascript object.
    // because props.alert is basically an if conditon[see below] and it ends at end of inner div
    // therefore the whole inner div is javascript 
       
    )
   //note we can also use if condition that to return JSX only when props.alert!=null
    // if(props.alert!=null){
    //     return(
    //         <div className={`alert alert-${props.alert.type}` }role="alert">
    //                     <b> {Capitalise(props.alert.type)}:</b>{props.alert.msg}
    //                  </div>
    //         )
    // }

   
}
