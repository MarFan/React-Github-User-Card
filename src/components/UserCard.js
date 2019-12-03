import React, { useEffect } from 'react';

import 'github-calendar/dist/github-calendar-responsive.css';
import GitHubCalendar from 'github-calendar';

import { Header, Image, Icon } from 'semantic-ui-react';

const UserCard = (props) => {

    GitHubCalendar('.calendar', props.myDetails.login, {responsive: true});

    return (
        <>
            <Image src={props.myDetails.avatar_url} alt={props.myDetails.login} size='medium' />
            <Header as='h2'>
                <Header.Content>
                    {props.myDetails.name}
                    <Header.Subheader>
                    {props.myDetails.login}
                    </Header.Subheader>
                </Header.Content>
            </Header>
            
            <div>{props.myDetails.bio}</div>
            <div><a href={props.myDetails.html_url} target="_blank"><Icon name="globe" color="grey" /> {(props.myDetails.html_url) ? props.myDetails.html_url.split('//')[1] : ''}</a></div>
            <div><Icon name="map marker alternate" color="grey" /> {props.myDetails.location}</div>
            <div className="calendar"></div>
        </>
    )
}

export default UserCard;