import {Link} from "react-router-dom";
import {NewsOption} from "../../hooks/useNews";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import EventIcon from "@mui/icons-material/Event";
import Highlighter from "react-highlight-words";

const Article = ({data, index, string}: any & NewsOption) => {
  const searchWords = string.split(' ')
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{maxWidth: 500, height: 360, m: "0 auto"}}>
        <CardMedia
          sx={{height: 140}}
          image={data.imageUrl}
          title={data.title}
        />
        <CardContent sx={{paddingTop: "0.5rem"}}>
          <Typography
            variant="overline"
            sx={{display: "flex", alignItems: "center", color: "grey"}}
          >
            <EventIcon sx={{fontSize: "medium", mr: ".5rem"}}/>
            {data.publishedAt && data.publishedAt}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              lineHeight: "1.2rem",
              mb: ".5rem",
              mt: ".5rem",
            }}
          >
            <Highlighter
              searchWords={searchWords}
              textToHighlight={data.title}
            />
          </Typography>

          <Typography
            variant="body2"
            sx={{overflow: "hidden", height: "2.5rem"}}
          >
            <Highlighter
              searchWords={searchWords}
              textToHighlight={data.summary}
            />
          </Typography>
        </CardContent>

        <CardActions>
          <Link to={`/article/${index}`}>
            <Button
              variant="text"
              size="small"
              endIcon={<EastIcon/>}
              sx={{fontWeight: "600"}}
            >
              Read more
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Article;
