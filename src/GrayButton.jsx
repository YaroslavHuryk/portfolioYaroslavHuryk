function GrayButton({ text, onClick }) {

  const downloadCV = async () => {
    try {
      // 1. Отримуємо посилання від нашого Express-сервера
      const response = await fetch('/api/cv/download');
      const data = await response.json();

      if (!data.url) return;

      // 2. Виконуємо запит за самим файлом
      const fileResponse = await fetch(data.url);
      const blob = await fileResponse.blob();

      // 3. Створюємо об'єкт у пам'яті браузера
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = "Yaroslav_CV.pdf"; // Назва файлу

      document.body.appendChild(link);
      link.click();

      // 4. Чистимо за собою
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Download error:", err);
    }
  }

  return (
    <button className='bg-[#fd6e0000] border-2 pt-2 pb-2 pr-5 pl-5 lg:pt-3 lg:pb-3 lg:pr-10 lg:pl-10 border-gray-400 rounded-md font-semibold text-gray-400 md:text-xl' onClick={downloadCV}>
      {text}
    </button>
  );
}

export default GrayButton;
