import * as React from 'react';
import { Monster } from '../../interfaces';
import CardItem from './card-item.component';


interface CardListProps {
    monsters: Monster[]
}

interface CardListState {

}

class CardList extends React.Component<CardListProps, CardListState> {
    // state = { :  }    

    render() {

        return (
            <div className='flex flex-wrap overflow-hidden'>
                {
                    this.props.monsters.map(monster => {
                        const { id, name, company } = monster;
                        const image = { src: `https://robohash.org/${id}?set=set2`, alt: `Monster called ${name}` }
                        return (
                            <CardItem id={id} title={name} description={company.name} image={image} />
                        )
                    })
                }
            </div>
        );
    }
}

export default CardList;