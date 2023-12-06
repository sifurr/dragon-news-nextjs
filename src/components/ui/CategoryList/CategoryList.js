import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

        
        
const CategoryList = async () => {
    const {data:categories} = await getAllCategories();
    // console.log(categories)
    return (
        <Box className="bg-gray-100 px-5 py-2 mt-3" >
           <Typography variant="h6" >Categories</Typography>
           <Divider/>
           <Stack rowGap={1} sx={{mt:3}}>
            {
                categories.map(category =>(
                    <Button key={category.id} variant="outlined">
                        <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>{category.title}</Link>
                    </Button>
                ))
            }
           </Stack>
        </Box>
    );
};

export default CategoryList;