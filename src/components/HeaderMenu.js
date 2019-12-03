import React from 'react';
import logo from '../lambdalogo.png';

import { Container, Menu, Form } from 'semantic-ui-react';

class FollowersHeader extends React.Component {
    state = {
        searchText: ''
    }

    handleChange = e => {
        this.setState({searchText: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.searchUsers(this.state.searchText);
        this.setState({searchText: ''})
    }

    render () {
        return (
            <Menu borderless inverted style={{borderRadius: 0}}>
                <Container>
                    <Menu.Item>
                        <img src={logo} alt="Lambda School logo" />
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group style={{marginBottom: 0}}>
                                    <Form.Input type="text" value={this.state.searchText} onChange={this.handleChange} placeholder="User search..." />
                                    <Form.Button content="Search" />
                                </Form.Group>
                            </Form>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}

export default FollowersHeader;