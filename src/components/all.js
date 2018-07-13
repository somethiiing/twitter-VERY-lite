import React from 'react';

class All extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('/api/all')
      .then(res => res.json())
      .then(data => this.setState({ users: data.users }));
  }

  render() {
    let { users } = this.state;
    return (
      <div>
        ALL!!!
        { users.map( (user, idx) => {
          return <div id={'user-' + idx} >{`user: ${user.user}. tweet: ${user.tweet}`}</div>
        })}
      </div>
    );
  }
}

export default All;