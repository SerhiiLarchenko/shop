import React from 'react';

const Loader = () => {
  return (
    <div className='blank-page'>
      <div class="lds-roller">
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div>
      </div>
    </div>
  )
}

export default Loader;