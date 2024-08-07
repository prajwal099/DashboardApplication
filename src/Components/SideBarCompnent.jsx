
import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AcUnitIcon from '@mui/icons-material/AcUnit';
const SideBarCompnent = () => {
  return (
   <div className='SideBar'>
    <div className='SideBarData'>
    <AcUnitIcon id='icons' /></div>
    <div className='SideBarData'>
     <HomeRoundedIcon id='icons' /></div>
     <div className='SideBarData'>
     <EqualizerOutlinedIcon id='icons' /></div>
     <div className='SideBarData'>
     <ListAltOutlinedIcon id='icons' /></div>
     <div className='SideBarData'>

     <AccountBalanceWalletOutlinedIcon id='icons'/></div>
     <div className='SideBarData'>
     <ShoppingBagOutlinedIcon id='icons'/></div>
     <div className='SideBarData' style={{"marginTop":"40vh"
     }}>
     <ExitToAppOutlinedIcon id='icons'/></div>

   </div>
  )
}

export default SideBarCompnent