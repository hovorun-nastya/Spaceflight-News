import {useNavigate, useParams} from "react-router-dom";
import {Box, Button, CircularProgress, Typography, Link} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useArticle} from "../../hooks/useArticle";

type ArticleParams = {
  id: string
}
const ArticlePage = () => {

  const {id} = useParams<ArticleParams>();
  const {isLoading, error, article} = useArticle(id as string);
  const navigate = useNavigate();

  return (
    <>
      {isLoading && <CircularProgress/>}
      {error && <Typography variant="subtitle1" sx={{fontStyle: "italic", color: "red"}}>
        {error}
      </Typography>}
      <Box
        component="img"
        sx={{
          height: 500,
          width: "100%",
          maxHeight: {xs: 200, sm: 300, md: 400}
        }}
        alt={article?.title}
        src={article?.imageUrl}
      />
      <Box
        sx={{
          margin: {md: '4rem', xs: '1rem'},
          position: "absolute",
          top: {xs: 130, sm: 200, md: 250},
          backgroundColor: "white",
          p: {md: "2rem 4rem", xs: '1rem 1.5rem'},
          width: {sm: '90%', md: '80%'},
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h4"
          sx={{textAlign: "center", mb: "3rem", fontSize: {xs: "1.5rem"}}}
        >
          {article?.title}{" "}
        </Typography>
        <Typography variant="body1">{article?.summary}</Typography>
        <Typography
          variant="subtitle1"
          sx={{marginTop: "1rem", fontWeight: "600"}}
        >
          Learn more:{" "}
          <Link href={article?.url} underline="hover" color="inherit">
            {article?.title}
          </Link>
        </Typography>

        <Button
          onClick={() => navigate("/")}
          startIcon={<ArrowBackIcon/>}
          sx={{marginTop: "3rem"}}
        >
          Back to homepage
        </Button>
      </Box>
    </>
  );
};

export default ArticlePage;
