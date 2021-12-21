import React, {FC} from 'react';
import '../styles/Selector.scss'

interface Props {
    select: number;
    onSelectLeft: () => void;
    onSelectRight: () => void;
    onSelect2018: () => void;
    onSelect2019: () => void;
    onSelect2020: () => void;
    onSelect2021: () => void;
    onSelect2022: () => void;
}

const Selector: FC<Props> = ({select, onSelect2018, onSelect2019, onSelect2020, onSelect2021, onSelect2022, onSelectLeft, onSelectRight}) => {
    return (
        <div className="selector">
            <div className={'selector__arrows'}>
                <div className={'selector__arrows__arrow ' + (select === 18 ? 'selector__arrows__arrow--inactive' : '')} onClick={onSelectLeft}><img
                    src={'/arrow-left.png'} alt={'année précédente'}/></div>
                <div className={'selector__arrows__arrow ' + (select === 22 ? 'selector__arrows__arrow--inactive' : '')} onClick={onSelectRight}><img
                    src={'/arrow-right.png'} alt={'année suivante'}/></div>
            </div>
            <div className={'selector__timeline'}>
                <div className={'selector__timeline__line'}/>
                <div className={'selector__timeline__year ' + (select === 18 ? 'selector__timeline__year--active' : '')} onClick={onSelect2018}>
                    <div className={'selector__timeline__year__icon'}/>
                    <p>2018</p></div>
                <div className={'selector__timeline__line'}/>
                <div className={'selector__timeline__year ' + (select === 19 ? 'selector__timeline__year--active' : '')} onClick={onSelect2019}>
                    <div className={'selector__timeline__year__icon'}/>
                    <p>2019</p></div>
                <div className={'selector__timeline__line'}/>
                <div className={'selector__timeline__year ' + (select === 20 ? 'selector__timeline__year--active' : '')} onClick={onSelect2020}>
                    <div className={'selector__timeline__year__icon'}/>
                    <p>2020</p></div>
                <div className={'selector__timeline__line'}/>
                <div className={'selector__timeline__year ' + (select === 21 ? 'selector__timeline__year--active' : '')} onClick={onSelect2021}>
                    <div className={'selector__timeline__year__icon'}/>
                    <p>2021</p></div>
                <div className={'selector__timeline__line'}/>
                <div className={'selector__timeline__year ' + (select === 22 ? 'selector__timeline__year--active' : '')} onClick={onSelect2022}>
                    <div className={'selector__timeline__year__icon'}/>
                    <p>2022</p></div>
                <div className={'selector__timeline__line'}/>
            </div>
        </div>
    );
}

export default Selector;
