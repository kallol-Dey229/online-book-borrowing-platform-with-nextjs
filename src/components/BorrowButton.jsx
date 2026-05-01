'use client'

import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const BorrowButton = ({title}) => {

    
  const handleBorrowBook = () => {
    toast.success(`${title} is borrowed successfully`);
    redirect('/allbooks');
  };

  return (
    <button onClick={handleBorrowBook} className="btn btn-primary">
      Borrow Book
    </button>
  );
};

export default BorrowButton;