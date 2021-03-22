import { Container } from '@material-ui/core';
import './App.css';
import ProductList from './component/ProductList';

function App() {
  // const [searchText, setSearchText] = useState("")

  // const onHandleSearchTextChange = (e) => {
  //   const searchText = e.target.value
  //   setSearchText(searchText)
  // }

  return (
    <Container>
      {/* <SearchBar onHandleSearchTextChange={onHandleSearchTextChange}></SearchBar> */}
      <ProductList />
    </Container>
  );
}

export default App;
