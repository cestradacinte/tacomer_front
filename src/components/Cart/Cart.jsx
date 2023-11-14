import { Item, Icon } from 'semantic-ui-react'
export const Cart = () => {
  return (
    <>
    <div className='resume'>
        <h1>Resumen de pedido</h1>
    <Item.Group divided>
    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content verticalAlign='middle'>
        <Item.Header>
          <Icon link name='times' />
          Justen Kitsune
        </Item.Header>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content verticalAlign='middle'>
        <Item.Header>
          <Icon link name='times' />
          Justen Kitsune
        </Item.Header>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content verticalAlign='middle'>
        <Item.Header>
          <Icon link name='times' />
          Justen Kitsune
        </Item.Header>
      </Item.Content>
    </Item>
  </Item.Group>
    </div>
    </>
  )
}


