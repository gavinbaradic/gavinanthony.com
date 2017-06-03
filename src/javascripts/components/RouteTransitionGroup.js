import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const RouteTransitionGroup = ({ children }) => (
  <Route render={({ location }) => (
    <CSSTransitionGroup
      transitionName='example'
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={0}
      transitionAppear
    >
      <div key={location.key}>
        {children}
      </div>
    </CSSTransitionGroup>
  )} />
)

RouteTransitionGroup.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RouteTransitionGroup
