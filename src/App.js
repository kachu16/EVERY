import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Withdraw from './components/Withdraw/Withdraw';
import ReferralCode from './components/ReferralCode/ReferralCode';
import GradientBox from './components/GradientBox/GradientBox';
import DescriptioNbox from './components/Description/DescriptionBox';
const App = () => {
  return (
    <div>
      <Navbar/>
      <DescriptioNbox/>
      {/* <Withdraw/> */}
      {/* <ReferralCode/> */}
      <GradientBox/>
    </div>
  )
}

export default App
