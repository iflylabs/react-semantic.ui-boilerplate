import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Card, Image, Button, Icon} from 'semantic-ui-react'

export default class DashboardCardComponent extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string,
    id: PropTypes.number
  }

  render () {
    const {title, body, id, footer} = this.props

    return (
      <Card raised>
        <Image alt="Dummy image" src="./images/task.svg" />
        <Card.Content>
          <Card.Header>
            {title}
          </Card.Header>
          <Card.Meta>
            <span className="date">
              Post `id` is {id}
            </span>
          </Card.Meta>
          <Card.Description>
            {body}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='sticky note' />
          {footer}
        </Card.Content>
      </Card>
    )
  }
}
