import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";

export const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  function addToCollection() {
    dispatch(addCollection(item));
    dispatch(addedToast());
  }

  return (
    <div className="w-80 h-80 bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
      
      <div className="h-[70%] w-full">
        {item?.type === 'photo' && (
          <img
            src={item?.thumbnail}
            alt={item?.title}
            className="h-full w-full object-cover"
          />
        )}

        {item?.type === 'video' && (
          <video
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
          >
            <source src={item?.src} type="video/mp4" />
          </video>
        )}

        {item?.type === 'gif' && (
          <img
            src={item?.thumbnail}
            alt={item?.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="h-[30%] p-4 flex justify-between items-center">
        <h1 className="text-black font-semibold capitalize line-clamp-2">
          {item?.title}
        </h1>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
          onClick={() => addToCollection(item)}>
          Save
        </button>
      </div>

    </div>
  );
};