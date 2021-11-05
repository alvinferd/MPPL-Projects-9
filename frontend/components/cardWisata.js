import * as React from 'react'
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import { useRouter } from "next/dist/client/router"
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
      boxShadow: "2px 4px rgba(0,0,0,0.4)"
    }
});

export default function CardWisata({ images, name, description, price, rating }) {
    const classes = useStyles();
    const router = useRouter();
    return (
        <Card className={classes.root} sx={{ maxWidth: 554 }} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} onClick={() => router.push(`/wisata/${name}`)}>
            <CardActionArea sx={{ height: "inherit" }}>
                <CardMedia
                    component="img"
                    height="228"
                    image={images}
                    alt={name}
                />
                <CardContent >
                    <Typography gutterBottom variant="body1" component="div" fontWeight="500">
                        {name}
                    </Typography>
                    <Box sx={{ height: 74 }}>
                        <Typography variant="body2" color="text.primary" gutterBottom>
                            {description}
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" flexDirection="row">
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            RP {price}
                        </Typography>
                        <Box display="flex" justifyContent="flex-start" flexDirection="row">
                            <StarBorderOutlinedIcon fontSize="small" sx={{color:"#FFF626"}}/>
                            <Typography variant="body2" color="text.primary" sx={{paddingInline: 0.5}}>
                                {rating} / 5.0
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
