// Функция возвращает текущее время (часы:минуты:секунды)
const getTimeString = () => {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  return `${hh}:${mm}:${ss}`;
};

const logInfo = (message) => {
  console.log(`[INFO ${getTimeString()}] ${message}`);
};

const logError = (message) => {
  console.error(`[ERROR ${getTimeString()}] ${message}`);
};

module.exports = {
  logInfo,
  logError,
  getTimeString
};