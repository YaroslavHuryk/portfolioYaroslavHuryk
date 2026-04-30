// import React, { lazy, Suspense } from "react";
// import Loader from "./Loader";

// function Contact() {
//     const VITE_API_URL = import.meta.env.VITE_API_URL;
//     const handleSubmit = async (e) => { // 1. Змінили назву на 'e' (event)
//         e.preventDefault(); // 2. Викликаємо preventDefault у об'єкта події

//         // Отримуємо дані з полів
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const message = document.getElementById('message').value;

//         // 3. Створюємо окремий чистий об'єкт для відправки
//         const dataToSend = { name, email, message };

//         try {
//             const response = await fetch(`${VITE_API_URL}/api/contact`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(dataToSend), // Відправляємо чистий об'єкт
//             });

//             if (response.ok) {
//                 alert('Message sent successfully!');
//             } else {
//                 alert('Failed to send message.');
//             }
//         } catch (error) {
//             alert('An error occurred: ' + error.message);
//         }
//     };
//     return (
//         <Suspense fallback={<Loader />}>
//             <div className="h-fit w-full flex flex-col items-center justify-center bg-gray-10 pt-36 p-10">
//                 <form action="" className="w-full max-w-md">
//                     <h1 className="text-4xl font-bold text-gray-200 pb-4">Contact Me</h1>
//                 <p className="text-gray-600">Feel free to reach out to us with any questions or inquiries!</p>
//                     <div className="mb-4">
//                         <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
//                         <input type="text" id="name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-800" />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
//                         <input type="email" id="email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-800" />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
//                         <textarea id="message" rows="4" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-800"></textarea>
//                     </div>
//                     <button type="submit" onClick={handleSubmit} className="bg-orange-800  hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//                         Send Message
//                     </button>
//                 </form>
//             </div>
//         </Suspense>   
//     );
// }

// export default Contact;
import React, { useState } from 'react';

function Contact() {
    const VITE_API_URL = import.meta.env.VITE_API_URL;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(null); // Додано для відображення результату

    const handleSubmit = async (e) => {
        e.preventDefault(); // Зупиняємо перезавантаження сторінки
        setIsSubmitting(true);

        // Зручний спосіб отримати всі дані форми відразу
        const formData = new FormData(e.currentTarget);
        const dataToSend = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(`${VITE_API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend),
            });

            if (response.ok) {
                e.target.reset(); // Очищуємо форму
                setIsSuccess(true);
            } else {
                setIsSuccess(false);
            }
        } catch (error) {
            setIsSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="h-fit w-full flex flex-col items-center justify-center pt-36 p-10">
            {/* Додаємо onSubmit сюди */}
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <h1 className="text-4xl font-sans font-bold text-gray-200 pb-4 text-center">Contact Me</h1>
                <p className="text-gray-600  font-mono mb-6">Feel free to reach out!</p>
                
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    {/* ВАЖЛИВО: додаємо атрибут name, щоб FormData його знайшла */}
                    <input name="name" type="text" id="name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-zinc-800" />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input name="email" type="email" id="email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-zinc-800" />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea name="message" id="message" rows="4" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-zinc-800"></textarea>
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-orange-800 font-sans hover:bg-orange-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {isSuccess === true && <p className="text-green-500 font-sans mt-4">Message sent successfully!</p>}
                {isSuccess === false && <p className="text-red-500 font-sans mt-4">Failed to send message. Please try again.</p>}
            </form>
        </div>
    );
}

export default Contact;