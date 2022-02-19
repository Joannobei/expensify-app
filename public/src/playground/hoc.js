import React from 'react';
import ReactDOM from 'react-dom';

const Info= (props)=> (
    <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
    </div>
   );

// const withAdminWarning =(WrappedComponent) =>{
//     return (props)=> (
//         <div>
//             {props.isAdmin && <p>This is private info. Do not share!</p>}
//         <WrappedComponent  />
//         </div>
//     )}
//     const AdminInfo = withAdminWarning(info);
    


    const requireAuthenticationInfo = (WrappedComponent) =>{
     return (props) => (
        <div>
            {props.isAuthenticated ? ( 
           <WrappedComponent {...props}/>) :(
               <p>This is authenticated</p>
           )
        }
        </div>
    )
     }


     const AuthInfo = requireAuthenticationInfo(Info);

    ReactDOM.render(<AuthInfo  isAuthenticated={false} info ='these are the details'/>, document.getElementById('app'));