import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyProfilePage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return (
        <div className="mx-5 md:mx-30 lg:mx-65 mt-10 shadow-sm h-[50vh] pt-20">
            <div className="text-center space-y-5">


                {
                    session?.user?.image && (
                        <Image
                            src={session.user.image}
                            alt="profile"
                            width={80}
                            height={80}
                            className="rounded-full mx-auto"
                        />
                    )
                }


                <h2>Name: {session?.user?.name}</h2>
                <p>Email: {session?.user?.email}</p>



                <a href="/updateprofile">
                    <button className="btn btn-primary">Update</button>
                </a>

            </div>
        </div>
    );
};

export default MyProfilePage;