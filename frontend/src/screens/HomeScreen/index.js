import React from 'react'
import classes from './HomeScreen.module.css'

// My Components
import CenterContainer from '../../components/CenterContainer'

// Assets

const HomeScreen = () => {
  return (
    <div className={classes.screen_container}>
      <CenterContainer bgColor='#f2f2f2' bgPadding='25px 0'></CenterContainer>
    </div>
  )
}

export default HomeScreen
