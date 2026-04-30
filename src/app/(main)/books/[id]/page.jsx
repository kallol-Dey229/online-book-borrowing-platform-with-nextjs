import Image from "next/image";



const BooksDetails = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("http://localhost:3000/books.json");
    const books = await res.json();
    const { image_url, title, author, category, description, available_quantity } = books.find(b => b.id.toString() === id);
    return (
        <div className="flex p-5 bg-base-100 shadow-sm mx-5 md:mx-30 lg:mx-65 mt-20">
            <figure className="">
                <Image  src={image_url} alt={title} height={250} width={250}></Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Author: {author}</p>
                <p>Type: {category}</p>
                <p>Available: {available_quantity}</p>
                <p>{description}</p>
                <button className="btn btn-primary">Borrow Book</button>
                
            </div>
        </div>
    );
};

export default BooksDetails;