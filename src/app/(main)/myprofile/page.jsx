import Link from "next/link";


const MyProfilePage = () => {
    return (
        <div className="mx-5 md:mx-30 lg:mx-65 mt-10 shadow-sm h-[50vh] pt-20">
            <div className="text-center space-y-5">
                <h2>Name: Hello</h2>
                <p>Email: kalloldey067@gmail.com</p>
                <Link href={'/updateprofile'}>
                <button className="btn btn-primary">Update</button>
                </Link>
            </div>
        </div>
    );
};

export default MyProfilePage;