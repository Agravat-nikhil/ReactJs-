import React from "react";
function Employee(props)
{
    return <h1>The name of Employee :{props.name} </h1>
}

function EmployeeDetails(props)
{
    return (
        <>
          <Employee name="Brijesh" />

        The details of Employee {props.details}
        
        </>

    )
}

export default EmployeeDetails;
