import React, {FC, useState} from 'react';
import '../styles/Doc.scss';
import $ from 'jquery';

interface Props {
    select: number;
}

const Doc: FC<Props> = ({select}) => {
    const [height, setHeight] = useState($(window).height()! - ($(window).width()! <= 700 ? 100 : 130));

    window.addEventListener('resize', () => {
        setHeight($(window).height()! - ($(window).width()! <= 700 ? 100 : 130));
    })

    return (
        <object className={'doc'} data={process.env['REACT_APP_CB_' + select]} style={{height}} type="application/pdf">
            <p>Contre-budget 20{select}</p>
            <p>Impossible de visualiser le document sur Android</p>
            <p>Le contre-budget 20{select} peut être consulté <a href={process.env['REACT_APP_CB_RES_' + select]}>ici</a>.</p>
        </object>
    );
}

export default Doc;
