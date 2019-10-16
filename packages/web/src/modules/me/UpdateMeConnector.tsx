import React from 'react'
import { RouteComponentProps } from 'react-router'
import { UpdateMeController } from '@airbnb-fullstack/controller'
import { UpdateMeView } from './ui/UpdateMeView'

export class UpdateMeConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    const { history } = this.props
    history.push('/home')
  }

  render() {
    return (
      <React.Fragment>
        <UpdateMeController>
          {({ updateMeSubmit, updateMeMediaSubmit }) => (
            <UpdateMeView
              onFinish={this.onFinish}
              updateMeMediaSubmit={updateMeMediaSubmit}
              updateMeSubmit={updateMeSubmit}
            />
          )}
        </UpdateMeController>
      </React.Fragment>
    )
  }
}
