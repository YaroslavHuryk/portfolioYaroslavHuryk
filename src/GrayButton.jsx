import { handleCVDownload} from './services/cvService';

function GrayButton({ text, onClick }) {

  // const downloadCV = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3001/api/cv/download');
  //     const data = await response.json();
  //     console.log("Download response:", data);
  //     if (data.url) {
  //       // Просто створюємо посилання і клікаємо. 
  //       // Завдяки fl_attachment у URL, Cloudinary сам скаже браузеру "завантаж мене"
  //       const link = document.createElement('a');
  //       link.href = data.url;
  //       link.target = '_blank'; // На всякий випадок відкриваємо в новій вкладці
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //     }
  //   } catch (err) {
  //     console.error("Download error:", err);
  //   }
  // }

  return (
    <button className='bg-[#fd6e0000] border-2 pt-2 pb-2 pr-5 pl-5 lg:pt-3 lg:pb-3 lg:pr-10 lg:pl-10 border-gray-400 rounded-md font-semibold text-gray-400 md:text-xl hover:bg-gray-700' onClick={handleCVDownload}>
      {text}
    </button>
  );
}

export default GrayButton;
