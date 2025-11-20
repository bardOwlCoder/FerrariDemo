const fetchData = async (url, options = {}) => {
  try {
    const res = await fetch(import.meta.env.VITE_BASE_API + url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
