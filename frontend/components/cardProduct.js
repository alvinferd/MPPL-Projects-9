import * as React from 'react'
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

export default function CardProduct({ images, name, description, price, rating }) {
    return (
        <Card sx={{ maxWidth: 291 }} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <CardActionArea sx={{ height: "inherit" }}>
                <CardMedia
                    component="img"
                    height="182"
                    image={images}
                    alt={name}
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
                    <Box display="flex" justifyContent="flex-start" flexDirection="row">
                        <StarBorderOutlinedIcon fontSize="small" sx={{color:"#FFF626"}}/>
                        <Typography variant="body2" color="text.primary" sx={{paddingInline: 0.5}}>
                            {rating} / 5.0
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}