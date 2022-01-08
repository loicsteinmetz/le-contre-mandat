import React, {FC, useEffect, useRef} from 'react';
import '../styles/Chart.scss';
import $ from 'jquery';

interface Props {
    select: number;
}

const Chart: FC<Props> = ({select}) => {
    const incomes = useRef<HTMLDivElement>(null);
    const incomeDivs: any = () => incomes.current!.querySelectorAll('.chart__incomes__income');
    const incomeBoxes: any = () => incomes.current!.querySelectorAll('.chart__incomes__box');
    const outcomes = useRef<HTMLDivElement>(null);
    const outcomeDivs: any = () => outcomes.current!.querySelectorAll('.chart__outcomes__outcome');
    const outcomeBoxes: any = () => outcomes.current!.querySelectorAll('.chart__outcomes__box');

    useEffect(() => {
        resetBoxes();
        initEvents();
        import(`../data/${select}.json`).then(json => {
            initDivs(json);
            initBoxes(json);
        });
        // eslint-disable-next-line
    }, [select])

    const initDivs = (json: any) => {
        doInitDivs(json.incomes, incomeDivs());
        doInitDivs(json.outcomes, outcomeDivs());
    }

    const doInitDivs = (jsonData: any, divs: any) => {
        divs.forEach((div: HTMLDivElement) => div.style.height = '0');
        const sorted = jsonData.sort((a: Flux, b: Flux) => b.amount - a.amount)
        let total = 0;
        for (let i = 0; i < 5; i++) {
            if (sorted[i]) total += sorted[i].amount;
        }
        for (let i = 0; i < 5; i++) {
            if (sorted[i]) {
                divs[5 - i].style.height = (400) / total * sorted[i].amount + 'px';
                divs[5 - i].style.marginTop = '5px';
                divs[5 - i].firstChild.innerHTML = sorted[i].short ? sorted[i].short : sorted[i].label;
            }
        }
    }

    const initBoxes = (json: any) => {
        doInitBoxes(json.incomes, incomeBoxes(), 'Recettes attendues');
        doInitBoxes(json.outcomes, outcomeBoxes(), 'Coût attendu');
    }

    const doInitBoxes = (jsonData: any, boxes: any, amountPrefix: string) => {
        boxes.forEach((box: any) => box.innerHTML = '');
        for (let i = 0; i < 5; i++) {
            if (jsonData[i]) {
                boxes[5 - i].innerHTML = `<i></i><h1>${jsonData[i].label}</h1><p>${amountPrefix} : ${jsonData[i].amount} milliard(s)</p><button>Voir plus</button>`;
                boxes[5 - i].querySelector('i').addEventListener('click', () => {
                    resetBoxes();
                })
                boxes[5 - i].querySelector('button').addEventListener('click', () => {
                    const doc: any = document.querySelector('.doc');
                    doc!.setAttribute('data', doc!.getAttribute('data')!.split('#pagemode=bookmarks&page=')[0] + `#pagemode=bookmarks&page=${jsonData[i].ref}`);
                    $('html, body').animate({
                        scrollTop: $('.doc').offset()!.top - ($(window).width()! <= 700 ? 70 : 110)
                    }, 500);
                })
            }
        }
    }

    const initEvents = () => {
        doInitEvents(incomeDivs());
        doInitEvents(outcomeDivs());
    }

    const doInitEvents = (divs: any) => {
        divs.forEach((div: any) => {
            div.addEventListener('click', () => {
                resetBoxes();
                div.parentNode.firstChild.style.display = 'block';
                div.parentNode.classList.add('box-active');
            })
        })
    }

    const resetBoxes = () => {
        doResetBoxes(incomeBoxes());
        doResetBoxes(outcomeBoxes());
    }

    const doResetBoxes = (boxes: any) => {
        boxes.forEach((box: any) => {
            box.style.display = 'none';
            box.parentNode.classList.remove('box-active');
        });
    }

    return (
        <div className="chart">
            <div className={'chart__flux'}>
                <div className={'chart__incomes'} ref={incomes}>
                    <h2 className={'chart__incomes__label'}>Recettes</h2>
                    {Array.from(Array(6), (e, i) => (
                        <div key={i}>
                            <div className={'chart__incomes__box'}/>
                            <div className={'chart__incomes__income'}>
                                <p className={'chart__incomes__income__label'}/>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={'chart__outcomes'} ref={outcomes}>
                    <h2 className={'chart__outcomes__label'}>Dépenses</h2>
                    {Array.from(Array(6), (e, i) => (
                        <div key={i}>
                            <div className={'chart__outcomes__box'}/>
                            <div className={'chart__outcomes__outcome'}>
                                <p className={'chart__outcomes__outcome__label'}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Chart;
