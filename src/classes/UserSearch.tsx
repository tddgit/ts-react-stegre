import React, { Component } from 'react';

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User[];
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: '',
        user: undefined,
    };

    onClick = (): void => {
        const { users } = this.props;
        const { name } = this.state;
        const foundUser: User | undefined = users.find((_user: User) => {
            return _user.name === name;
        });
        if (foundUser) {
            this.setState({ user: foundUser });
        }
    };

    render() {
        const { name, user } = this.state;
        return (
            <div>
                User Search
                <input
                    type="text"
                    value={name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                />
                <button type="button" onClick={this.onClick}>
                    Find User
                </button>
                <div>{user && user.name}</div>
            </div>
        );
    }
}

export default UserSearch;
