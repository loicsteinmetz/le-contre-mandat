import React, {FC} from 'react';
import '../styles/Home.scss';
import Line from './Line';

interface Props {
    onAction: () => void;
}

const Home: FC<Props> = ({onAction}) => {
    return (
        <div className="home">
            <div className={'home__logo'}><img className={'home__logo__image'} src={'/logo.png'} alt={'L\'avenir en commun'}/></div>
            <h1 className={'home__title'}>Le contre mandat</h1>
            <h2 className={'home__subtitle'}>2017-2022 : Le mandat alternatif de la France Insoumise</h2>
            <Line />
            <div className={'home__action'}>
                <button className={'home__action__button'} onClick={onAction}>Consulter le mandat alternatif</button>
            </div>
        </div>
    );
}

export default Home;
