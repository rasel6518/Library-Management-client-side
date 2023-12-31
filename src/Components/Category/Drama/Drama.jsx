import { Link } from "react-router-dom";
import useBooks from "../../../Hooks/useBooks";
import ReactStars from "react-rating-stars-component";


const Drama = () => {

    const books = useBooks()
    // console.log(books);

    const dramaBooks = books?.filter(
        book => book.category.toLowerCase() == 'drama')


    console.log(dramaBooks);

    // 

    return (
        <div>

            <div className='grid md:grid-cols-2 gap-10 mx-auto w-9/12 '>
                {dramaBooks?.map((book) => (

                    <div key={book._id}>
                        <div className="card md:w-[560px] card-side text-black bg-gray-300 p-5 shadow-xl">
                            <div className='flex-1 mx-auto my-auto'>
                                <img src={book.image} className="h-[350px]" alt="Movie" />
                            </div>
                            <div className="card-body flex-1">
                                <h2 className="card-title w-full h-full ">  {book.name}</h2>
                                <h1 className="capitalize font-serif">  Genre: {book.category}</h1>
                                <p className='flex items-center gap-2'>By {book.author}</p>

                                <div className="text-sm text-yellow-500 mb-2"> <ReactStars
                                    count={5}
                                    value={book.rating}
                                    size={24}
                                    activeColor="#ffd700"
                                /></div>

                                <Link to={`/detailbook/${book._id}`}>
                                    <button className="bg-btn-bg rounded-md text-white px-5 py-3">Details button
                                    </button>
                                </Link>



                            </div>
                        </div>

                    </div>



                    // <li key={book._id}>
                    //     <h3>{book.name}</h3>
                    //     <p>Author: {book.author}</p>
                    //     <p>Description: {book.description}</p>
                    //     <p>Quantity: {book.quantity}</p>
                    //     <p>Rating: {book.rating}</p>
                    //     <img src={book.image} alt={book.name} />
                    // </li>
                ))}
            </div>
        </div>
    );
};

export default Drama;