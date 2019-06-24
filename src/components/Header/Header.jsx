import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Tabs } from '@material-ui/core'

import { HEADER_TABS as tabs } from '../../App.constants'
import HeaderTab from './HeaderTab/HeaderTab'

import './Header.css'

export class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  componentWillMount() {
    const { history } = this.props
    const { pathname } = history.location
    const currentTabIndex = tabs.findIndex(({ path }) => pathname === path)
    const newState = {
      value: currentTabIndex
    }
    this.setState(newState)
  }

  handleChange = (event, value) => {
    this.props.history.push(tabs[value].path)
    this.setState({ value })
  }

  render() {
    return (
      <header>
      <Paper>
        <Tabs value={this.state.value}
          centered
          onChange={this.handleChange}
          indicatorColor={"primary"}>
          {tabs.map(HeaderTab)}
        </Tabs>
      </Paper>
      </header>
    )
  }
}

Header.propTypes = {
  history: PropTypes.object.isRequired
}

export default Header
