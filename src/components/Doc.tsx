import React, {FC} from 'react';
import '../styles/Doc.scss';

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
