import * as React from 'react';
import "../PageCss/news.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import edudron from "./images/edu-dron.jpeg";

  export default function News() {
  return (
    <>
    <h2 className='newsandblogs' >News & Blogs</h2>
    <div className='container-news'>
    <Card className="cardd" sx={{ maxWidth: 345 }}>
      <CardActionArea  >
        <CardMedia
          component="img"
          height="140"
          image={edudron}
          alt="News and blog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            News And Blogs
          </Typography>
          <Typography variant="body2" color="text.secondary">
            News And Blogss Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo possimus voluptates dolorum at non sapiente 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read more
        </Button>
      </CardActions>
    </Card>

<Card className="cardd" sx={{ maxWidth: 345 }}>
<CardActionArea>
  <CardMedia
    component="img"
    height="140"
    image={edudron}
    alt="News and blog"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      News And Blogs
    </Typography>
    <Typography variant="body2" color="text.secondary">
    News And Blogss Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo possimus voluptates dolorum at non sapiente 
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary">
    Read more
  </Button>
</CardActions>
</Card>

<Card className="cardd" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={edudron}
          alt="News and blog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            News And Blogs
          </Typography>
          <Typography variant="body2" color="text.secondary">
          News And Blogss Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo possimus voluptates dolorum at non sapiente 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read more
        </Button>
      </CardActions>
    
    </Card>
    <Card className="cardd" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={edudron}
          alt="News and blog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            News And Blogs
          </Typography>
          <Typography variant="body2" color="text.secondary">
          News And Blogss Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo possimus voluptates dolorum at non sapiente 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read more
        </Button>
      </CardActions>
    
    </Card>
    <Card className="cardd" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={edudron}
          alt="News and blog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            News And Blogs
          </Typography>
          <Typography variant="body2" color="text.secondary">
          News And Blogss Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo possimus voluptates dolorum at non sapiente 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read more
        </Button>
      </CardActions>
    
    </Card>

    <Card className="cardd" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={edudron}
          alt="News and blog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            News And Blogs
          </Typography>
          <Typography variant="body2" color="text.secondary">
          News And Blogss Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo possimus voluptates dolorum at non sapiente 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read more
        </Button>
      </CardActions>
    
    </Card>

    <Card className="cardd" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={edudron}
          alt="News and blog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            News And Blogs
          </Typography>
          <Typography variant="body2" color="text.secondary">
          News And Blogss Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo possimus voluptates dolorum at non sapiente 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read more
        </Button>
      </CardActions>
    
    </Card>
    <Card className="cardd" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={edudron}
          alt="News and blog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            News And Blogs
          </Typography>
          <Typography variant="body2" color="text.secondary">
          News And Blogss Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo possimus voluptates dolorum at non sapiente 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read more
        </Button>
      </CardActions>
    
    </Card>

    </div>
    </>
  );
}