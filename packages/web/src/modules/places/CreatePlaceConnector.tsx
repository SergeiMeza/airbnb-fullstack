import React from 'react'
import { RouteComponentProps } from 'react-router'
import { CreatePlaceView } from './ui/CreatePlaceView'

export class CreatePlaceConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    const { history } = this.props
    history.push('/home')
  }

  render() {
    return (
      <React.Fragment>
        <CreatePlaceView />
      </React.Fragment>
    )
  }
}
