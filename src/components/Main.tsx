import React, {FC, useEffect, useState} from 'react';
import Nav from './Nav';
import Title from './Title';
import Chart from './Chart';
import Selector from './Selector';
import Doc from './Doc';
import '../styles/Main.scss';
import Line from './Line';
import $ from 'jquery';
import Detail from './Detail';
import Networks from './Networks';
import Video from './Video';
import Laec from './Laec';

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
        const w = $(window);
        window.addEventListener('scroll', () => {
            const topScreen = w.scrollTop()!;
            if (topScreen > 0 && scrollBtn.style.opacity !== '1') {
                scrollBtn.style.display = 'block'
                scrollBtn.style.opacity = '1';
            } else if (topScreen === 0 && scrollBtn.style.opacity !== '0') {
                scrollBtn.style.display = 'none';
                scrollBtn.style.opacity = '0';
            }
        });
        scrollBtn.addEventListener('click', () => {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });
        const btn: any = document.querySelector('.main__infos');
        btn.onclick = () => {
            $('html, body').animate({
                scrollTop: $('.detail').offset()!.top - 70
            }, 500);
        }

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
            <button className={'main__infos'}>Toutes les mesures</button>
            <Networks marginTop={50}/>
            <Video select={year}/>
            <Detail select={year}/>
            <Line/>
            <Doc select={year}/>
            <div className={'main__scroll-top'}/>
            <Laec />
        </div>
    );
}

export default Main;
