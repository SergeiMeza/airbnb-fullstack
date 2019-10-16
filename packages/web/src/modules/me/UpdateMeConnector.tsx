import React from 'react'
import { RouteComponentProps } from 'react-router'
import { UpdateMeController } from '@airbnb-fullstack/controller'
import { UpdateMeView, FormValues } from './ui/UpdateMeView'

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
          {({ submit }) => (
            <UpdateMeView onFinish={this.onFinish} submit={submit} />
          )}
        </UpdateMeController>
      </React.Fragment>
    )
  }
}
