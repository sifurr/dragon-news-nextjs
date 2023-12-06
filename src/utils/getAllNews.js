        
        
export const getAllNews = async () => {
    const res = await fetch('https://the-news-portal-server.vercel.app/all-news',
    {
        // fetch data after every 30 seconds
        next:{
            revalidate: 30
        }
    }
    )

    return res.json();
};

