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
            <p>Impossible de charger le document...</p>
        </object>
    );
}

export default Doc;
