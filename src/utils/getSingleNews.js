export const getSingleNews = async (id) => {

  const res = await fetch(
    
    `https://the-news-portal-server.vercel.app/news/${id}`,
    {
      cache: "no-store", // fetch data as per user request
    }

  );

  return res.json();
};
