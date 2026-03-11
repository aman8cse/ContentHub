import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setQuery(input));
        setInput('');
    }

  return (
    <div className="searchBar">
        <form className='flex w-full gap-5 bg-(--c1) p-10' onSubmit={(e) => submitHandler(e)}>
            <input className='border-2 px-4 py-2 text-xl rounded outline-none' type="text" value={input} placeholder='search anything...' onChange={(e) => setInput(e.target.value)} />
            <button className='border-2 px-4 py-2 text-xl rounded outline-none'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar