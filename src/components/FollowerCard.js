import React from 'react';

import { Grid, Image, Card, Icon } from 'semantic-ui-react';

const FollowerCard = (props) => {
    return (
        <>
            <Grid.Column>
                <Card>
                    <Image src={props.follower.avatar_url} onClick={() => props.searchUsers(props.follower.login)} />
                    <Card.Content>
                        <div><a href={props.follower.html_url} target="_blank" rel="noopener noreferrer"><Icon name="globe" color="grey" /> {(props.follower.html_url) ? props.follower.html_url.split('//')[1].split('/')[1] : ''}</a></div>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </>
    )
}

export default FollowerCard;