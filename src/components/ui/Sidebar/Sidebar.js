import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import sidebarNews from "@/assets/side-news.png";
import globe from "@/assets/globe.png";

const Sidebar = () => {
  return (
    <Box className="my-3">
      <Card className="w-full">
        <CardActionArea>
          <CardMedia>
            <Image src={sidebarNews} alt="top news" width={800} />
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

      <Box className="mt-3">
        <>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Image
                src={sidebarNews}
                height={100}
                width={100}
                alt="most read news"
              />
            </Grid>
            <Grid item xs={8}>
              <Typography className="text-sm front-bold">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography className="text-xs" color="text.secondary">
                Mar 18 2023
              </Typography>
            </Grid>
          </Grid>
          <Divider className="my-3" variant="middle" />
        </>
        <>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Image
                src={sidebarNews}
                height={100}
                width={100}
                alt="most read news"
              />
            </Grid>
            <Grid item xs={8}>
              <Typography className="text-sm front-bold">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography className="text-xs" color="text.secondary">
                Mar 18 2023
              </Typography>
            </Grid>
          </Grid>
          <Divider className="my-3" variant="middle" />
        </>
        <>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Image
                src={sidebarNews}
                height={100}
                width={100}
                alt="most read news"
              />
            </Grid>
            <Grid item xs={8}>
              <Typography className="text-sm front-bold">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography className="text-xs" color="text.secondary">
                Mar 18 2023
              </Typography>
            </Grid>
          </Grid>
          <Divider className="my-3" variant="middle" />
        </>
        <>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Image
                src={sidebarNews}
                height={100}
                width={100}
                alt="most read news"
              />
            </Grid>
            <Grid item xs={8}>
              <Typography className="text-sm front-bold">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography className="text-xs" color="text.secondary">
                Mar 18 2023
              </Typography>
            </Grid>
          </Grid>
          <Divider className="my-3" variant="middle" />
        </>
        <>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Image
                src={sidebarNews}
                height={100}
                width={100}
                alt="most read news"
              />
            </Grid>
            <Grid item xs={8}>
              <Typography className="text-sm front-bold">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography className="text-xs" color="text.secondary">
                Mar 18 2023
              </Typography>
            </Grid>
          </Grid>
          <Divider className="my-3" variant="middle" />
        </>
      </Box>
      <Box>
        <Image src={globe} alt="globe" width={400} height={400} />
      </Box>
    </Box>
  );
};

export default Sidebar;
