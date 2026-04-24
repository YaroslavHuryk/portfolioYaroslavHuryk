// src/services/cvService.js
export const handleCVDownload = async () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  try {
    const response = await fetch(`${VITE_API_URL}/api/cv/download`);
    const data = await response.json();

    if (data.url) {
      const link = document.createElement('a');
      link.href = data.url;
      // Вказуємо 'target="_blank"', щоб відкрити в новій вкладці, 
      // або 'download', щоб одразу почати завантаження
      link.setAttribute('download', 'Yaroslav_Huryk_CV.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  } catch (error) {
    console.error("Помилка:", error);
    alert("Не вдалося завантажити файл.");
  }
};