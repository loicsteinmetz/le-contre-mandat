import {FC, useEffect} from 'react';
import '../styles/Laec.scss';
import $ from 'jquery'
import Line from './Line';

const Laec: FC = () => {

    useEffect(() => {
        $('body').addClass('stop-scrolling');
        const button1 = document.querySelector('.laec__cta__buttons__contre-mandat')!;
        button1.addEventListener('click', () => {
            $('.laec__cta').addClass('laec__cta--mini')
            $('body').removeClass('stop-scrolling');
            const background: HTMLDivElement = document.querySelector('.laec__background')!
            background.style.display = 'none';
            const text2022: HTMLParagraphElement = document.querySelector('.laec__2022')!
            text2022.style.display = 'block';
        });
    }, [])


    return (
        <div className={'laec'}>
            <div className={'laec__background'}/>
            <div className={'laec__cta transition'}>
                <div className={'laec__cta__text'}>
                    <p>Le <strong>contre-mandat</strong> rassemble les contre-budgets présentés chaque année par le groupe parlementaire de la France Insoumise.
                    </p>
                    <p>Les mesures présentées ne sont donc pas exhaustives comparées à celles de l'<strong>Avenir En Commun</strong>, le programme de Jean-Luc
                        Mélenchon pour
                        2022</p>
                </div>
                <Line/>
                <div className={'laec__cta__buttons'}>
                    <button className={'laec__cta__buttons__contre-mandat'}>Le Contre-Mandat 2017-2022</button>
                    <a href={process.env.REACT_APP_LAEC} target={'_blank'} rel={'noreferrer'}>
                        <button className={'laec__cta__buttons__laec'}>L'Avenir En Commun 2022</button>
                    </a>
                </div>
                <p className={'laec__2022'}><a href={process.env.REACT_APP_LAEC} target={'_blank'} rel={'noreferrer'}><span className={'blue'}>20</span><span
                    className={'red'}>22</span></a></p>
            </div>
        </div>
    )
}

export default Laec;
