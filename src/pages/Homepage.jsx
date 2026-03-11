import SearchBar from '../components/SearchBar.jsx';
import { Tabs } from '../components/Tabs.jsx';
import { ResultGrid } from '../components/ResultGrid.jsx';
import { useSelector } from 'react-redux';
import { store } from '../redux/store.js';

export const Homepage = () => {
    const { query } = useSelector((store) => store.search);

  return (
    <div>
        <SearchBar/>
        {query && <Tabs/>}
        {query && <ResultGrid/>}
    </div>
  )
}
