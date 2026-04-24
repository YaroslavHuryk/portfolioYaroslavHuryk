import VITE_API_URL from 'import.meta.env.NEXT_PUBLIC_API_URL';
function Contact() {
    const handleSubmit = async (e) => { // 1. Змінили назву на 'e' (event)
        e.preventDefault(); // 2. Викликаємо preventDefault у об'єкта події

        // Отримуємо дані з полів
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // 3. Створюємо окремий чистий об'єкт для відправки
        const dataToSend = { name, email, message };

        try {
            const response = await fetch(`${VITE_API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend), // Відправляємо чистий об'єкт
            });

            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            alert('An error occurred: ' + error.message);
        }
    };
    return (
        <div className="h-fit w-full flex flex-col items-center justify-center bg-gray-10 pt-36 p-10">
            <form action="" className="w-full max-w-md">
                 <h1 className="text-4xl font-bold text-gray-200 pb-4">Contact Me</h1>
            <p className="text-gray-600">Feel free to reach out to us with any questions or inquiries!</p>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-800" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" id="email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-800" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea id="message" rows="4" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-800"></textarea>
                </div>
                <button type="submit" onClick={handleSubmit} className="bg-orange-800  hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Send Message
                </button>
            </form>
        </div>
           
    );
}

export default Contact;