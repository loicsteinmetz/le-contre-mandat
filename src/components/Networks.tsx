import React, {FC} from 'react';
import '../styles/Networks.scss';

interface Props {
    marginTop: number
}

const Networks: FC<Props> = ({marginTop}) => {

    return (
        <div className={'networks'} style={{marginTop}}>
            <p>Le Discord Insoumis</p>
            <a href={process.env.REACT_APP_DI_DISCORD}><img src={'/discord.svg'} alt={'discord'}/></a>
            <a href={process.env.REACT_APP_DI_FACEBOOK}><img src={'/facebook.svg'} alt={'facebook'}/></a>
            <a href={process.env.REACT_APP_DI_TWITTER}><img src={'/twitter.svg'} alt={'twitter'}/></a>
            <a href={process.env.REACT_APP_DI_INSTAGRAM}><img src={'/instagram.svg'} alt={'instagram'}/></a>
            <a href={process.env.REACT_APP_DI_TIKTOK}><img src={'/tiktok.svg'} alt={'tiktok'}/></a>
            <a href={process.env.REACT_APP_DI_YOUTUBE}><img src={'/youtube.svg'} alt={'youtube'}/></a>
            <a href={process.env.REACT_APP_DI_TWITCH}><img src={'/twitch.svg'} alt={'twitch'}/></a>
        </div>
    )
}

export default Networks;
