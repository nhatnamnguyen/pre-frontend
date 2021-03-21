import { Container } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import ProductList from './component/ProductList';
import SearchBar from './component/SearchBar';

function App() {
  const [searchText, setSearchText] = useState("")

  const onHandleSearchTextChange = (e) => {
    const searchText = e.target.value
    setSearchText(searchText)
  }

  return (
    <Container>
      <SearchBar onHandleSearchTextChange={onHandleSearchTextChange}></SearchBar>
      <ProductList searchText={searchText}></ProductList>
    </Container>
  );
}

export default App;
