import {useRouter} from "next/router";

const Page = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <h1>This is setting page of {router.query.name}</h1>
        </div>
    );
};

export default Page;