import React, {FC, useEffect, useState} from 'react';
import '../styles/Doc.scss';
import {Document, Page} from 'react-pdf';

interface Props {
    select: number;
}

const Doc: FC<Props> = ({select}) => {

    return (
        <object className={'doc'} data={process.env['REACT_APP_CB_' + select]} type="application/pdf" width="100%" height="100%">
            <p>Impossible de charger le document...</p>
        </object>
    );
}

export default Doc;
