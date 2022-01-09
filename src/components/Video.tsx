import {FC} from 'react';
import '../styles/Video.scss';

interface Props {
    select: number;
}

const Video: FC<Props> = ({select}) => {

    return (process.env['REACT_APP_VIDEO_' + select] ?
        <div className={'video'}>
            <h2>En vidéo</h2>
            <iframe title={'En vidéo'}
                    src={"https://www.youtube.com/embed/" + process.env['REACT_APP_VIDEO_' + select]}>
            </iframe>
        </div>
        : null)
}

export default Video;
