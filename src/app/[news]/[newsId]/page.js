import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailsPage = async ({ params }) => {
  const { data: news } = await getSingleNews(params?.newsId);
  //   console.log(data);
  return (
    <Box sx={{ mt: "20px" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Image
              src={news?.thumbnail_url}
              width={800}
              height={500}
              alt="product detail image"
            />
            <Box sx={{ mt: "20px" }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Image
                    src={news?.image_url}
                    width={800}
                    height={500}
                    alt="product detail image"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Image
                    src={news?.image_url}
                    width={800}
                    height={500}
                    alt="product detail image"
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" component="h2">
              {news?.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginTop:"10px"
              }}
            >
              <Avatar alt="Author image" src={news?.author?.img} />
              <Box>
                <Typography><strong>{news?.author?.name}</strong></Typography>
                <Typography className="text-xs">
                  <strong>Published:</strong> {news?.author?.published_date}
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                marginTop:"20px"
              }}
            >
              {news?.details}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailsPage;
