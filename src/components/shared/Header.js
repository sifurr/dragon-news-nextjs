import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerTitle from "@/assets/The-Dragon-News-Title.png";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className="w-full my-4" >
      <Container>
        <Image
          src={headerTitle}
          width={500}
          height={500}
          alt="header title"
          className="mx-auto pt-5"
        />
        <Typography variant="body2" color="gray" textAlign="center" className="my-2" >
          Journalism Without Fear or Favour
        </Typography>
        <Typography textAlign="center">
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
