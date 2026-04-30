import Link from "next/link";

const UpdateFormPage = () => {
  return (
    <div className="mx-5 md:mx-30 lg:mx-65 shadow-sm h-[50vh] mt-10 pt-20 text-center">

      <div className="flex flex-col gap-10 items-center">

        
        <div className="w-1/3 flex flex-col gap-6">
          <input className="border border-black p-2" type="text" placeholder="Type your name"/>

          <input
            className="border border-black p-2" type="text" placeholder="Type your image url"/>

          
          <div className="flex justify-end">
            <Link href="/myprofile">
              <button className="btn btn-primary">Done</button>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default UpdateFormPage;