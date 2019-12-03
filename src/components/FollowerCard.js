import React from 'react';

import { Grid, Image, Card } from 'semantic-ui-react';

const FollowerCard = (props) => {
    return (
        <>
            <Grid.Column onClick={() => props.searchUsers(props.follower.login)}>
                <Card>
                    <Image src={props.follower.avatar_url} />
                    <Card.Content>
                        {props.follower.login}
                    </Card.Content>
                </Card>
            </Grid.Column>
        </>
    )
}

export default FollowerCard;