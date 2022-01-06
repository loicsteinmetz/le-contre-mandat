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
            resizeDivs(json);
            initBoxes(json);
        });
        initDetailsButton();
        // eslint-disable-next-line
    }, [select])

    const initDetailsButton = () => {
        const btn: any = document.querySelector('.chart__infos');
        btn.onclick = () => {
            $('html, body').animate({
                scrollTop: $('.detail').offset()!.top - ($(window).width()! <= 700 ? 70 : 110)
            }, 500);
        }
    }

    const resizeDivs = (json: any) => {
        doResizeDivs(json.incomes, incomeDivs());
        doResizeDivs(json.outcomes, outcomeDivs());
    }

    const doResizeDivs = (jsonData: any, divs: any) => {
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
            <button className={'chart__infos'}>Toutes les mesures</button>
            <div className={'chart__flux'}>
                <div className={'chart__incomes'} ref={incomes}>
                    {Array.from(Array(6), (e, i) => (
                        <div key={i}>
                            <div className={'chart__incomes__box'}/>
                            <div className={'chart__incomes__income'}/>
                        </div>
                    ))}
                </div>
                <div className={'chart__outcomes'} ref={outcomes}>
                    {Array.from(Array(6), (e, i) => (
                        <div key={i}>
                            <div className={'chart__outcomes__box'}/>
                            <div className={'chart__outcomes__outcome'}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Chart;
