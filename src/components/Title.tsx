import React, {FC} from 'react';
import '../styles/Title.scss'

interface Props {
    year: string;
}

const Title: FC<Props> = ({year}) => {
    return (
        <h1 className={'title'}>
            <span className={'title--blue'}>20</span>
            <span className={'title--red'}>{year}</span>
        </h1>
    );
}

export default Title;
