import React from 'react';

export default function Error() {
  return (
    <div style={{ 
      position:"absolute",
      left:"0%",
      top:"10%",
      width:"100%",
      height:"90%",
      backgroundColor: 'black', 
      color: 'white', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <h2>Page Not Found</h2>
    </div>
  );
}
