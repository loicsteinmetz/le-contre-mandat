import React, {FC, useEffect, useRef} from 'react';
import '../styles/Chart.scss';
import $ from 'jquery';

interface Props {
    select: number;
}

type Flux = { amount: number, label: string, ref: string };

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
    }, [select])

    const resizeDivs = (json: any) => {
        doResizeDivs(json.incomes, incomeDivs());
        doResizeDivs(json.outcomes, outcomeDivs());
    }

    const doResizeDivs = (jsonData: any, divs: any) => {
        divs.forEach((outcomeDiv: HTMLDivElement) => outcomeDiv.style.height = '0');
        const total = jsonData.reduce((acc: number, obj: Flux) => {
            return acc + obj.amount;
        }, 0)
        const sortedOutcomes = jsonData.sort((a: Flux, b: Flux) => b.amount - a.amount)
        sortedOutcomes.forEach((outcome: Flux, index: number) => {
            divs[9 - index].style.height = 450 / total * outcome.amount + 'px';
        });
    }

    const initBoxes = (json: any) => {
        doInitBoxes(json.incomes, incomeBoxes());
        doInitBoxes(json.outcomes, outcomeBoxes());
    }

    const doInitBoxes = (jsonData: any, boxes: any) => {
        boxes.forEach((box: any) => box.innerHTML = '');
        jsonData.forEach((data: Flux, index: number) => {
            boxes[9 - index].innerHTML = `<i></i><h1>${data.label}</h1><p>Recettes attendues : ${data.amount} milliard(s)</p><button>Voir plus</button>`;
            boxes[9 - index].querySelector('i').addEventListener('click', () => {
                resetBoxes();
            })
            boxes[9 - index].querySelector('button').addEventListener('click', () => {
                window.scrollTo({top: $(`#${data.ref}`).offset()!.top - 110, left: 0, behavior: 'smooth'});
            })
        });
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
            <div className={'chart__incomes'} ref={incomes}>
                {Array.from(Array(10), (e, i) => (
                    <div key={i}>
                        <div className={'chart__incomes__box'}/>
                        <div className={'chart__incomes__income'}/>
                    </div>
                ))}
            </div>
            <div className={'chart__outcomes'} ref={outcomes}>
                {Array.from(Array(10), (e, i) => (
                    <div key={i}>
                        <div className={'chart__outcomes__box'}/>
                        <div className={'chart__outcomes__outcome'}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chart;
