import React, {FC, useState} from 'react';
import '../styles/Doc.scss';
import $ from 'jquery';

interface Props {
    select: number;
}

const Doc: FC<Props> = ({select}) => {
    const getDocHeight = () => {
        if (!navigator.userAgent.toLowerCase().includes('android')) {
            return $(window).height()! - ($(window).width()! <= 700 ? 100 : 130)
        } else {
            return null;
        }
    }

    const [height, setHeight] = useState(getDocHeight());

    window.addEventListener('resize', () => {
        setHeight(getDocHeight());
    })

    return (
        <object className={'doc'} data={'https://mozilla.github.io/pdf.js/web/viewer.html?file=' + process.env['REACT_APP_CB_' + select]}
                style={{height: height || 'inherit', paddingBottom: height ? 0 : 120}}
                type="application/pdf">
            <p>Contre-budget 20{select}</p>
            <p>Impossible de visualiser le document sur Android</p>
            <p><a href={process.env['REACT_APP_CB_' + select]} target={'_blank'} rel="noreferrer">Consulter ici le contre-budget 20{select}</a></p>
            <p/>
        </object>
    );
}

export default Doc;
