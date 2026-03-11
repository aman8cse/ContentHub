import { useSelector } from "react-redux"
import { CollectionsCard } from "../components/CollectionsCard";

export const CollectionPage = () => {
    const collection = useSelector(state => state.collection.items);

  return (
    <div className='overflow-auto px-10'>
        <div className="flex justify-between mb-6">
            <h2 className="text-xl font-medium">Your Collection</h2>
            <button className="active:scale-95 transition cursor-pointer bg-red-600 px-5 py-2 text-base font-medium rounded">Clear Collection</button>
        </div>
    <div className='flex justify-center flex-wrap gap-5'>
        {collection.map(item => (
            <CollectionsCard key={item.id} item={item} />
        ))}
    </div>
    </div>
  )
}
