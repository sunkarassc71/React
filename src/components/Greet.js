import { React } from 'react';

// function Greet(){
//     return <h1>Hi Sunkara ! Welcome To SCS Systems</h1>
// }

const Greet = (props) => (
    <div>
        <h1>{props.name}, {props.heroName}</h1>
        {props.children}

    </div>
)

export default Greet;