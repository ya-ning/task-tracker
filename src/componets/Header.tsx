import React from 'react'

type HeaderProps = {
    title: string;
};

// Use destructuring to extract the title prop directly in the function signature
// const Header = ({ title }: HeaderProps) => {
//     return (
//         <div>
//             <h1>{title}</h1>
//         </div>
//     )
// }

// Define a type for the props instead of using a generic string type
const Header = (props: HeaderProps) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Header