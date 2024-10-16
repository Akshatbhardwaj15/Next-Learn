import {useRouter} from "next/router";
import {useEffect} from "react";

const useUser = () => ({ user : { name: "Akshat"}, loading: false});

const Page = () => {
    const router = useRouter();
    const user = useUser();

    console.log(router);

    return (
        <div>
            <h1>This is a index page for {router.query.user}</h1>
            <button 
            onClick={(e) => router.push({
                pathname: "/user/[user]/settings",
                query: { user: router.query.user },
            })}>
                Open Settings Page
            </button>

            <button
            onClick={(e) => router.push("/")}>
                Home Page
            </button>

            <button 
            onClick={(e) => router.replace("/")}>
                Replace func
            </button>
        </div>
    );
};

export default Page;