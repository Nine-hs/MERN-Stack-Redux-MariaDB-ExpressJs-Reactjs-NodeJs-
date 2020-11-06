import React from "react"
import { Redirect, Route } from "react-router-dom"

const PrivateAdvisor = ({children, ...rest})=>{
    return(
        <Route 
        {...rest}
            render={({location})=>{
                if(localStorage.getItem("status") === "advisor"){
                    return (children) 
                }
                else{
                    return <Redirect
                    to={{
                        pathname: "/login",
                        state:{
                            from: location
                        }
                    }}
                    />
                }
                }
            }
        />
    )
}
{/*return <Component {...props} />*/}
export default PrivateAdvisor