import Link from "next/link";

// this button is used to log users in or send them to the dashboard
    // object deconstructuring
const ButtonLogin = ( { isLoggedIn, name, } ) => {
    if (isLoggedIn) {
        return<Link href="/dashboard" className="btn btn-primary"> Welcome back {name} </Link>;
    }

    return <button>Login</button>;
};

export default ButtonLogin; // exporting the function