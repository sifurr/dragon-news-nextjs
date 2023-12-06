import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import topNews from "@/assets/latest-news.png";
import leftNews from "@/assets/left-news.png";
import { getAllNews } from "@/utils/getAllNews";
import Link from "next/link";

const LatestNews = async () => {
  const { data } = await getAllNews();
  // console.log(data)
  return (
    <Box className="my-3">
     <Card className="w-full">
                  <CardActionArea>
                    <CardMedia
                      sx={{
                        "& img": {
                          width: "100%",
                          height: "500px",
                        },
                      }}
                    >
                      <Image
                        src={data[0]?.thumbnail_url}
                        alt="main post"
                        height={800}
                        width={100}
                      />
                    </CardMedia>
                    <CardContent>
                      <span className="rounded mt-2 px-2 py-1 bg-[#FF0000] text-gray-100">
                        {data[0].category}
                      </span>
                      <Typography gutterBottom variant="h6" component="div">
                        {data[0].title.length > 30
                          ? data[0]?.title?.slice(0, 30) + "..."
                          : data[0]?.title}
                      </Typography>
                      <Typography gutterBottom className="mb-2">
                        {data[0]?.author?.name} - {data[0]?.author?.published_date}{" "}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data[0]?.details.length > 200
                          ? data[0]?.details.slice(0, 200) + "..."
                          : data[0]?.details}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

      <Box>
        <Grid
          className="mt-5"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {data?.slice(0,4).map((news) => (
            <Grid key={news.id} item xs={6}>
              <Link href={`/${news.category}/${news._id}`}>
                <Card className="w-full">
                  <CardActionArea>
                    <CardMedia
                      sx={{
                        "& img": {
                          width: "100%",
                          height: "250px",
                        },
                      }}
                    >
                      <Image
                        src={news?.thumbnail_url}
                        alt="categorized news"
                        height={800}
                        width={100}
                      />
                    </CardMedia>
                    <CardContent>
                      <span className="rounded mt-2 px-2 py-1 bg-[#FF0000] text-gray-100">
                        {news.category}
                      </span>
                      <Typography gutterBottom variant="h6" component="div">
                        {news.title.length > 30
                          ? news?.title?.slice(0, 30) + "..."
                          : news?.title}
                      </Typography>
                      <Typography gutterBottom className="mb-2">
                        {news?.author?.name} - {news?.author?.published_date}{" "}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {news?.details.length > 200
                          ? news?.details.slice(0, 200) + "..."
                          : news?.details}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default LatestNews;
