import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import * as React from "react";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";
import image6 from "../../assets/6.png";

export default function StandardImageList() {
  return (
    <ImageList cols={2} gap={16} id="productImages">
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ mt: 0 }}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: image1,
    title: "Breakfast",
  },
  {
    img: image2,
    title: "Burger",
  },
  {
    img: image3,
    title: "Camera",
  },
  {
    img: image4,
    title: "Coffee",
  },
  {
    img: image5,
    title: "Hats",
  },
];
