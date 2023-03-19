import React from "react";
import "./homecards.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Person from "../../assets/person/user.JPG";
import Person6 from "../../assets/person/person6.jpg";
import Person7 from "../../assets/person/person7.jpg";
import Person8 from "../../assets/person/person8.jpg";
import Person2 from "../../assets/person/person2.jpg";
import Friend4 from "../../assets/person/friend4.jpg";
import Friend5 from "../../assets/person/friend5.jpg";
import Friend6 from "../../assets/person/friend6.jpg";
import Friend7 from "../../assets/person/friend7.jpg";
import Friend12 from "../../assets/person/friend32.jpg";
import Person5 from "../../assets/person/person5.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const HomeCards = () => {
  return (
    <>
      <Card sx={{ maxWidth: 800 }} className="card">
        <CardMedia
          component="img"
          height="500"
          image={Person5}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sakshi Mehra
          </Typography>
          <div className="caption">
            <span className="caption1">Happy sundayssssssss </span>
            <span className="caption2">10min ago</span>
          </div>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions disableSpacing>
          <FavoriteIcon className="homecardIcon" />
          <ChatBubbleIcon className="homecardChat" />

          <ShareIcon className="homecardShare" />
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 800 }} className="card">
        <CardMedia
          component="img"
          height="500"
          image={Friend5}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Aditi Jaiswal
          </Typography>
          <div className="caption">
            <span className="caption1">Be You </span>
            <span className="caption2">19min ago</span>
          </div>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions disableSpacing>
          <FavoriteIcon className="homecardIcon" />
          <ChatBubbleIcon className="homecardChat" />

          <ShareIcon className="homecardShare" />
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 800 }} className="card">
        <CardMedia
          component="img"
          
          height="500"
          image={Person7}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rohan Mishra
          </Typography>
          <div className="caption">
            <span className="caption1">Always Yes To Adventures</span>
            <span className="caption2">45min ago</span>
          </div>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions disableSpacing>
          <FavoriteIcon className="homecardIcon" />
          <ChatBubbleIcon className="homecardChat" />

          <ShareIcon className="homecardShare" />
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 800 }} className="card">
        <CardMedia
          component="img"
          
          height="500"
          image={Friend12}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ashish Jaiswal
          </Typography>
          <div className="caption">
            <span className="caption1">Stay Tuned For More </span>
            <span className="caption2">2hr ago</span>
          </div>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions disableSpacing>
          <FavoriteIcon className="homecardIcon" />
          <ChatBubbleIcon className="homecardChat" />

          <ShareIcon className="homecardShare" />
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 800 }} className="card">
        <CardMedia
          component="img"
          height="500"
          image={Friend7}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rashi Mishra
          </Typography>
          <div className="caption">
            <span className="caption1">Work mode on #Gym #Workout</span>
            <span className="caption2">2hr ago</span>
          </div>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions disableSpacing>
          <FavoriteIcon className="homecardIcon" />
          <ChatBubbleIcon className="homecardChat" />

          <ShareIcon className="homecardShare" />
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 800 }} className="card">
        <CardMedia
          component="img"
         
          height="500"
          image={Friend6}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sneha Rathore
          </Typography>
          <div className="caption">
            <span className="caption1"> Feel the Breeze</span>
            <span className="caption2">4hr ago</span>
          </div>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions disableSpacing>
          <FavoriteIcon className="homecardIcon" />
          <ChatBubbleIcon className="homecardChat" />

          <ShareIcon className="homecardShare" />
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 800 }} className="card">
        <CardMedia
          component="img"
          
          height="500"
          image={Friend4}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pankhuri Mohanty
          </Typography>
          <div className="caption">
            <span className="caption1">Accomplishing Daily Goals</span>
            <span className="caption2">Yesterday</span>
          </div>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions disableSpacing>
          <FavoriteIcon className="homecardIcon" />
          <ChatBubbleIcon className="homecardChat" />

          <ShareIcon className="homecardShare" />
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 800 }} className="card">
        <CardMedia
          component="img"
          height="500"
          image={Person2}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Vidhi Chouhan
          </Typography>
          <div className="caption">
            <span className="caption1">Happy sundayssssssss </span>
            <span className="caption2">Yesterday</span>
          </div>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions disableSpacing>
          <FavoriteIcon className="homecardIcon" />
          <ChatBubbleIcon className="homecardChat" />

          <ShareIcon className="homecardShare" />
        </CardActions>
      </Card>
    </>
  );
};

export default HomeCards;
