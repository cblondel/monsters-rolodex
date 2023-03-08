interface CardItemProps {
    id: number;
    title: string;
    image: {
        src: string;
        alt: string;
    }
    description: string;
}

const CardItem = (props: CardItemProps) => {

    const { title, image: { src, alt }, description } = props;

    return (
        <div className='my-2 px-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
            <div className='bg-zinc-100 overflow-hidden rounded shadow-sm hover:shadow-lg dark:bg-zinc-800'>
                <img className="w-full" src={src} alt={alt} />
                <div className='p-6 text-center'>
                    <h1 className='text-cyan-500 font-bold uppercase '>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardItem;