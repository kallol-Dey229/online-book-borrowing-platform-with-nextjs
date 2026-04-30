import Link from "next/link";


const NotFoundPage = () => {
    return (
        <div className="h-[80vh] flex justify-center items-center flex-col gap-10">
            <h2 className="font-bold text-5xl text-gray-600">This page is not found</h2>


            <Link href={'/'}>
            <button className="btn bg-gray-700 rounded-md p-3 cursor-pointer text-white">Go Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;