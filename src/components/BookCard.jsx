import Image from "next/image";
import Link from "next/link";


const BookCard = ({book}) => {
    const {image_url, title, author, category} = book;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="px-5 pt-10">
                <Image src={image_url} alt={title} height={100} width={100}></Image>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{author}</p>
                <p>Type: {category}</p>
                <div className="card-actions mt-5">
                    <Link href={`/books/${book.id}`}>
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;