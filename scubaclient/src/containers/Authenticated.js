import React from 'react'
import { connect } from 'react-redux'

class Authenticated extends React.Component {

  componentWillMount() {
    console.log('this.props.user', this.props.user);
    this.checkAuth(this.props.user)
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps.user', nextProps.user);
    this.checkAuth(nextProps.user)
  }

  checkAuth(currentUser) {
    console.log('props changed', currentUser);
    console.log(location.pathname);
    if (!currentUser.token) {
      //redirect to  /login
      this.props.router.push('/login')
    } else if (location.pathname === '/login') {
      // redirect to /
      this.props.router.push('/')

    }
  }

  render() {
    return this.props.children
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Authenticated)
