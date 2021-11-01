import * as React from 'react'
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material'

export default function CardProduct({ images, name, description, price, rating }) {
    return (
        <Card sx={{ maxWidth: 291}} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
            <CardActionArea sx={{ height: "inherit"}}>
                <CardMedia
                    component="img"
                    height="182"
                    image={images}
                    alt="Wafer Poncokusumo"
                />
                <CardContent >
                    <Typography gutterBottom variant="body1" component="div" fontWeight="500">
                        {name}
                    </Typography>
                    <Box sx={{ height: 85 }}>
                        <Typography variant="body2" color="text.primary" gutterBottom>
                            {description}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        RP {price}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        {rating} / 5.0
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
