const AuthLayout=({children}:{children:React.ReactNode})=>{
    return(
        <div className= "h-full flex items-center justfy-center align-center">
            {children}
        </div>
    );
} 

export default AuthLayout;