import { Monster } from '../../interfaces';
import CardItem from './card-item.component';


interface CardListProps {
    monsters: Monster[]
}

const CardList = (props: CardListProps) => {

    const { monsters } = props;

    return (
        <div className='flex flex-wrap overflow-hidden'>
            {
                monsters.map(monster => {
                    const { id, name, company } = monster;
                    const image = { src: `https://robohash.org/${id}?set=set2`, alt: `Monster called ${name}` }
                    return (
                        <CardItem key={id} id={id} title={name} description={company.name} image={image} />
                    )
                })
            }
        </div>
    )
}

export default CardList;