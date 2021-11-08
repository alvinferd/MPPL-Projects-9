import { Grid, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'

export default function DetailProduct() {
    return (
        <Grid container spacing={2} direction="row">
            <Grid item lg={4}>
                <Carousel autoPlay infiniteLoop interval={3000} showStatus={false} showThumbs={false} >
                    {CarouselItems.map(item => {
                        return (
                            <div key={item.id} style={{ position: 'relative', borderRadius: '50px', overflow: 'hidden' }}>
                                <Image src={item.img}
                                    alt={item.name}
                                    height={668}
                                    width={1788}
                                />
                                <div className={styles.legend}>
                                    <Typography variant="h4" fontFamily="Poppins" color="#FFFFFF">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="h5" fontFamily="Poppins" color="#FFFFFF">
                                        {item.desc}
                                    </Typography>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </Grid>
            <Grid item lg={4}>

            </Grid>
            <Grid item lg={4}>

            </Grid>
        </Grid>
    )
}