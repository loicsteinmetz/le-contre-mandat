import React, {FC, useEffect, useState} from 'react';
import Nav from './Nav';
import Title from './Title';
import Chart from './Chart';
import Selector from './Selector';
import TextContent from './TextContent';
import '../styles/Main.scss';
import Line from './Line';
import $ from 'jquery';

const Main: FC = () => {
    const [year, setYear] = useState(18);

    const onSelect = (year: number) => () => setYear(year);
    const onSelectLeft = () => {
        if (year > 18) {
            setYear(year - 1);
        }
    }
    const onSelectRight = () => {
        if (year < 22) {
            setYear(year + 1);
        }
    }

    useEffect(() => {
        const scrollBtn: any = document.querySelector('.main__scroll-top');
        const element = $('.chart')
        const w = $(window);
        window.addEventListener('scroll', () => {
            const topElement = element.offset()!.top;
            const bottomElement = element.offset()!.top + element.outerHeight()!;
            const bottomScreen = w.scrollTop()! + w.innerHeight()!;
            const topScreen = w.scrollTop()!;
            if ((bottomScreen > topElement) && (topScreen < bottomElement)) {
                scrollBtn.style.opacity = '0';
            } else {
                scrollBtn.style.opacity = '1';
            }
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        });
    }, [])

    return (
        <div className="main">
            <Nav/>
            <Title year={String(year)}/>
            <Line/>
            <Chart select={year}/>
            <Selector
                select={year}
                onSelect2018={onSelect(18)}
                onSelect2019={onSelect(19)}
                onSelect2020={onSelect(20)}
                onSelect2021={onSelect(21)}
                onSelect2022={onSelect(22)}
                onSelectLeft={onSelectLeft}
                onSelectRight={onSelectRight}
            />
            <TextContent select={year}/>
            <div className={'main__scroll-top'}/>
        </div>
    );
}

export default Main;
