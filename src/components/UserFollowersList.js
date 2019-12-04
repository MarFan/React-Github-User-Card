import React from 'react';
import {Header, Grid} from 'semantic-ui-react';

import FollowerCard from './FollowerCard';

const UserFollowers = (props) => {
    return (
        <>
            <Grid.Row>
                <Header as='h3' style={{marginBottom: '1rem'}}>
                    Loyal Followers {(props.myFollowers.length) ? `(${props.myFollowers.length})` : ''}
                </Header>
            </Grid.Row>
            <Grid.Row>
                <Grid columns={4}>
                    {props.myFollowers.map(follower => (
                        <FollowerCard key={follower.id} follower={follower} searchUsers={props.searchUsers} />
                    ))}
                </Grid>
            </Grid.Row>
        </>
    )
}

export default UserFollowers;