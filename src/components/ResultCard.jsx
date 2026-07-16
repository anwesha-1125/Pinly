
import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({ item }) => {

    const dispatch = useDispatch()

    const addToCollection = (item) => {
        dispatch(addCollection(item))
        dispatch(addedToast())
        
    }

    return (
            <div className='card w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden my-5'
            

            onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();

                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateY = ((x / rect.width) - 0.5) * 20;   // Left ↔ Right
                const rotateX = ((0.5 - y / rect.height)) * 20;  // Top ↕ Bottom

                card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.04)
                `;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
            }}
            >

                <a target='_blank' className='block h-full w-full' href={item.url}>
                    {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
                    {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
                    {item.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
                </a>
                <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
                    <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
                    <button
                        onClick={() => {
                            addToCollection(item)
                        }}
                        className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'
                    >
                        Save
                    </button>
                </div>
            </div>
    )
}

export default ResultCard