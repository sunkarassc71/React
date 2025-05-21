import { React } from 'react';

// function Greet(){
//     return <h1>Hi Sunkara ! Welcome To SCS Systems</h1>
// }

// const Greet = (props) => (
//     <div>
//         <h1>{props.name}, {props.heroName}</h1>
//         {props.children}

//     </div>
// )

// destructuring props in parameter

// const Greet = ({name, heroName}) => (
//     <div>
//         <h1>{name},{heroName}</h1>
//     </div>
// )

// destructuring props in function body

const Greet = (props) => {
    const {name,heroName}=props;
    return(
    <div>
        <h1>{name},{heroName}</h1>
    </div>
)}

export default Greet;