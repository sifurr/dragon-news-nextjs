import { getCategorizedNews } from "@/utils/getCategorizedNews";
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

const DynamicNewsPage = async ({ params, searchParams }) => {
  // console.log(searchParams?.category)
  const { data } = await getCategorizedNews(searchParams?.category);
  //   console.log(data);
  return (
    <Box>
      <h2 className="text-2xl">
        Total <strong>{searchParams?.category}</strong> news: {data.length}
      </h2>

      <Box>
        <Grid
          className="mt-5"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {data.map((news) => (
            <Grid key={news.id} item xs={6}>
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
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DynamicNewsPage;
