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
        const link = doc!.querySelectorAll('p')[3];
        flux.forEach((f: Flux, i) => {
            itemsRefs[i].addEventListener('click', () => {
                doc!.setAttribute('data', doc!.getAttribute('data')!.split('#pagemode=bookmarks&page=')[0] + `#pagemode=bookmarks&page=${f.ref}`)
                link!.innerHTML = `(${f.label} : p. ${f.ref})`
                $('html, body').animate({
                    scrollTop: $('.doc').offset()!.top - ($(window).width()! <= 700 ? 70 : 110)
                }, 500);
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

    const displayAmount = (a: number) => a >= 1 ? `${a} milliard(s)` : `${a * 1000} million(s)`

    const displayFlux = (f: Flux) => {
        return (
            <div className={'detail__flux'}>
                <div className={'detail__flux__infos'}>
                    <h4 className={'detail__flux__infos__label'}>{f.label}</h4>
                    {f.amount > 0 ? <p className={'detail__flux__infos__amount'}>{displayAmount(f.amount)} €</p> : null}
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
