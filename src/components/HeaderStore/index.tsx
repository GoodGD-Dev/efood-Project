import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/images/logo.png'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import { HContainer, HeaderBar } from './styles'
import { Logo } from '../../styles'

const HeaderStore = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <div>
      <HeaderBar>
        <HContainer>
          <h3>Restaurantes</h3>
          <Link to="/">
            <Logo src={logo} alt="efood" />
          </Link>
          <a onClick={openCart}>{items.length} produto(s) no carrinho</a>
        </HContainer>
      </HeaderBar>
    </div>
  )
}

export default HeaderStore
