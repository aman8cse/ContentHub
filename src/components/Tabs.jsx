import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabs } from '../redux/features/searchSlice';

export const Tabs = () => {
    const dispatch = useDispatch();
    const tabs = ['photos', 'videos', 'GIF'];

    const activeTab = useSelector((state) => state.search.activeTabs);

  return (
    <div className='flex gap-5 p-10'>
        {tabs.map((t, idx) => {
            return <button
            className={`${activeTab === t ? 'bg-blue-600' : 'bg-gray-600'} cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
            onClick={() => dispatch(setActiveTabs(t))}
             key={idx}>{t}
             </button>
        })}
    </div>
  )
}
