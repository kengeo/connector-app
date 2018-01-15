import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import branch from 'react-native-branch'
import { deepLinkData, deepLinkEmpty, deepLinkError } from '../store'

class DeepLink extends PureComponent {
  // TODO: Fix this
  // Problem with below function is that it will not work if
  // app is moved in background and then a universal link is clicked
  // from phone, then this function will not get the deep link data
  // and we will not be able to load connections
  // However, it will work if we kill the app and then open universal link
  // it will also work in case of fresh app installation, then also
  // we should be able to get the deep link data
  onDeepLinkData = bundle => {
    // this.props.deepLinkData('47e05837')
    if (bundle.error) {
      this.props.deepLinkError(bundle.error)
    } else if (bundle.params) {
      if (bundle.params['+clicked_branch_link'] === true) {
        // update store with deep link params
        this.props.deepLinkData(bundle.params.t)
      } else {
        // update store that deep link was not clicked
        this.props.token === null && this.props.deepLinkEmpty()
      }
    } else {
      this.props.token === null && this.props.deepLinkEmpty()
    }
  }

  componentDidMount() {
    branch.subscribe(this.onDeepLinkData)
  }

  render() {
    return null
  }
}

const mapStateToProps = state => ({
  token: state.deepLink.token,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deepLinkData,
      deepLinkEmpty,
      deepLinkError,
    },
    dispatch
  )

const DeepLinkConnected = connect(mapStateToProps, mapDispatchToProps)(DeepLink)

export default DeepLinkConnected
