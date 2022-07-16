import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../PageCss/slider.css"
import IITG from "./images/IITG.jpg";
import IITKGP from "./images/IITKGP.jpg";
import IITMANDI from "./images/iitmandi.jpg";
import IITR from "./images/IITR.jpg";
import MNIT from "./images/MNIT.jpg";

export default function Slider() {
  return (
    <>
    <h3 className='features-colleges'>Featured Colleges</h3>
    <div className="slidercontainer">
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={IITG}
          alt="IIT Guwahati"
 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            IIT Guwahati
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Indian Institutes of Technology (IITs) are central government-owned-public technical institutes located across India. 
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={IITKGP}
          alt="IIT Kharagpur"
 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            IIT Kharagpur
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Indian Institutes of Technology (IITs) are central government-owned-public technical institutes located across India. 
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
    <Card className='card'  sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={IITR}
          alt="IIT Roorkee"
 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           IIT Roorkee
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Indian Institutes of Technology (IITs) are central government-owned-public technical institutes located across India. 
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
    <Card className='card'  sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={MNIT}
          alt="MNIT JAIPUR"
 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MNIT JAIPUR
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Indian Institutes of Technology (IITs) are central government-owned-public technical institutes located across India. 
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={IITMANDI}
          alt="IIT MANDI"
 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            IIT MANDI
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Indian Institutes of Technology (IITs) are central government-owned-public technical institutes located across India. 
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
    <Card className='card'  sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="10"
          image={IITG}
          alt="IITD"
 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            IITD
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Indian Institutes of Technology (IITs) are central government-owned-public technical institutes located across India. 
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
    
       
      </div>
      </>

  );
}
