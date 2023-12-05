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

const LatestNews = () => {
  return (
    <Box className="my-3">
      <Card className="w-full">
        <CardActionArea>
          <CardMedia>
            <Image src={topNews} alt="top news" width={800} />
          </CardMedia>
          <CardContent>
            <p className="w-[150px] rounded mt-2 mb-4 px-2 py-1 bg-[#FF0000] text-gray-100">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom className="my-3">
              By Awlad Hossain - Mar 18 2023{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
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
          <Grid item xs={6}>
            <Card className="w-full">
              <CardActionArea>
                <CardMedia>
                  <Image src={leftNews} alt="top news" width={800} />
                </CardMedia>
                <CardContent>
                  <p className="w-[150px] rounded mt-2 mb-4 px-2 py-1 bg-[#FF0000] text-gray-100">
                    Technology
                  </p>
                  <Typography gutterBottom variant="h5" component="div">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By Awlad Hossain - Mar 18 2023{" "}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className="w-full">
              <CardActionArea>
                <CardMedia>
                  <Image src={leftNews} alt="top news" width={800} />
                </CardMedia>
                <CardContent>
                  <p className="w-[150px] rounded mt-2 mb-4 px-2 py-1 bg-[#FF0000] text-gray-100">
                    Technology
                  </p>
                  <Typography gutterBottom variant="h5" component="div">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By Awlad Hossain - Mar 18 2023{" "}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className="w-full">
              <CardActionArea>
                <CardMedia>
                  <Image src={leftNews} alt="top news" width={800} />
                </CardMedia>
                <CardContent>
                  <p className="w-[150px] rounded mt-2 mb-4 px-2 py-1 bg-[#FF0000] text-gray-100">
                    Technology
                  </p>
                  <Typography gutterBottom variant="h5" component="div">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By Awlad Hossain - Mar 18 2023{" "}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className="w-full">
              <CardActionArea>
                <CardMedia>
                  <Image src={leftNews} alt="top news" width={800} />
                </CardMedia>
                <CardContent>
                  <p className="w-[150px] rounded mt-2 mb-4 px-2 py-1 bg-[#FF0000] text-gray-100">
                    Technology
                  </p>
                  <Typography gutterBottom variant="h5" component="div">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By Awlad Hossain - Mar 18 2023{" "}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LatestNews;
