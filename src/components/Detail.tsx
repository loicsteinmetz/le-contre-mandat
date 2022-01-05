import {FC, useEffect, useState} from 'react';
import '../styles/Detail.scss';
import $ from 'jquery';

interface Props {
    select: number;
}

const Detail: FC<Props> = ({select}) => {
    const [incomes, setIncomes] = useState<Flux[]>()
    const [outcomes, setOutcomes] = useState<Flux[]>()

    const initRefs = (json: any) => {
        const itemsRefs = document.querySelectorAll('.detail__flux__link__icon');
        const flux = [...json.incomes, ...json.outcomes];
        const doc = document.querySelector('.doc');
        flux.forEach((f: Flux, i) => {
            itemsRefs[i].addEventListener('click', () => {
                doc!.setAttribute('data', doc!.getAttribute('data')!.split('#pagemode=bookmarks&page=')[0] + `#pagemode=bookmarks&page=${f.ref}`)
                window.scrollTo({top: $('.doc').offset()!.top - 110, left: 0, behavior: 'smooth'});
            })
        })
    }

    useEffect(() => {
        import(`../data/${select}.json`).then(json => {
            setIncomes(json.incomes);
            setOutcomes(json.outcomes);
            initRefs(json);
        });
    }, [select]);

    const displayFlux = (f: Flux) => {
        return (
            <div className={'detail__flux'}>
                <div className={'detail__flux__infos'}>
                    <h4 className={'detail__flux__infos__label'}>{f.label}</h4>
                    <p className={'detail__flux__infos__amount'}>{f.amount} milliards €</p>
                </div>
                <div className={'detail__flux__link'}>
                    <i className={'detail__flux__link__icon'}/>
                </div>
            </div>
        )
    }

    return (
        <div className={'detail'}>
            <div className={'detail__incomes'}>
                <h3 className={'detail__incomes__title'}>Recettes</h3>
                {incomes?.map(displayFlux)}
            </div>
            <div className={'detail__outcomes'}>
                <h3 className={'detail__outcomes__title'}>Dépenses</h3>
                {outcomes?.map(displayFlux)}
            </div>
        </div>
    )
}

export default Detail;
