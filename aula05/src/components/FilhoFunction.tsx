import React from 'react'


const FilhoFunction = ({ onChildClick }: { onChildClick: () => void }) => {
    
  return (
    <button onClick={onChildClick}>Clique aqui</button>
  );
  
}

export default FilhoFunction

