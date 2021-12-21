import React, {FC} from 'react';
import '../styles/Line.scss'

const Line: FC = () => {
    return (
        <div className={'line'}>
            <div className={'line__drawing'}/>
            <div className={'line__logo'}><img className={'line__logo__image'} src={'/logo.png'} alt={'L\'avenir en commun'}/></div>
            <div className={'line__drawing'}/>
        </div>
    );
}

export default Line;
