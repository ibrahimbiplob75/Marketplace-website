import errorLogo from "../assets/404.gif"

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center">
            
            <img src={errorLogo}></img>
        </div>
    );
};

export default ErrorPage;