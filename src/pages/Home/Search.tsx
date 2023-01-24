import React, {useState} from 'react';
import News from "./News";
import {Box, Button, Container, InputAdornment, TextField, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [limit, setLimit] = useState(5)
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');
  const handleChange = (event: { target: { value: any; }; }) => {
    setInput(event.target.value);
  };
  const handleClick = () => {
    setSearch(input);
  };
  const options = {limit, search}


  return (
    <Container>
      <Box>
        <Typography variant="subtitle1" sx={{
          fontWeight: "600",
          fontSize: 16,
        }}>
          Filter by keywords
        </Typography>
        <TextField type="search"
                   placeholder="I'm searching for..."
                   variant="outlined"
                   sx={{
                     my: "2rem",
                     maxWidth: "30rem",
                   }}
                   fullWidth
                   size="small"
                   InputProps={{
                     startAdornment: (
                       <InputAdornment position="start">
                         <SearchIcon onClick={() => handleClick()}/>
                       </InputAdornment>
                     ),
                   }}
                   onChange={handleChange} value={input}/>
      </Box>
      <News options={options}/>
      <Button variant="contained" onClick={() => setLimit((prevState) => prevState + 5)}>CLICK ME FOR MORE!</Button>
    </Container>
  );
};

export default Search;
