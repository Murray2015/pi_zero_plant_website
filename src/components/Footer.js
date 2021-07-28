import React from 'react';

export default function Footer(){
    return <footer className="bg-green-500 h-20 flex justify-between">
        <p className="text-white text-lg font-bold p-7">Created with love (and very little time) by <a href="https://murrayhoggett.com/" className="underline hover:text-gray-200">Murray Hoggett</a></p>


		<div class="flex p-5">
            <a href="mailto:murrayhoggett@gmail.com"><i class="flex items-center justify-center h-12 w-12 mx-1 fas fill-current text-white text-2xl fa-envelope"></i></a>
            <a href="https://www.linkedin.com/in/murray-hoggett/"><i class="flex items-center justify-center h-12 w-12 mx-1 fab fill-current text-white text-2xl fa-linkedin"></i></a>
            <a href="https://twitter.com/MurrayHoggett"><i class="flex items-center justify-center h-12 w-12 mx-1 fab fill-current text-white text-2xl fa-twitter"></i></a>
	    </div>
    </footer>
}