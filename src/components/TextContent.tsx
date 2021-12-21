import React, {FC, useEffect, useState} from 'react';
import '../styles/TextContent.scss';

interface Props {
    select: number;
}

const TextContent: FC<Props> = ({select}) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        import(`../data/${select}.json`).then(json => {
            setContent(json.text);
        });
    }, [select]);

    return (
        <div className="text-content" dangerouslySetInnerHTML={{__html: content}}/>
    );
}

export default TextContent;
