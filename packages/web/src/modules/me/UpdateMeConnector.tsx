import React from 'react'
import { RouteComponentProps } from 'react-router'
import { UpdateMeView, FormValues } from './ui/UpdateMeView'

export class UpdateMeConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    const { history } = this.props
    history.push('/home')
  }
  dummySubmit = async (values: FormValues) => {
    console.log('here')
  }

  render() {
    return (
      <React.Fragment>
        <UpdateMeView onFinish={this.onFinish} submit={this.dummySubmit} />
      </React.Fragment>
    )
  }
}
