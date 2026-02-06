import React from 'react'

const BtnCounter = () => {
  const [qntsClicks, setQntClicks] = React.useState(0);

  const handleClick = () => {

    if (qntsClicks >= 3) {
        console.log('Limite de cliques atingido!, reiniciando contador...');
        setQntClicks(0);
    }

    setQntClicks((prevQnts) => prevQnts + 1);
  };

  return (
    <div>
        <button onClick={handleClick}>Clique</button>
        <p>Quantidade de vezes clicadas: {qntsClicks}</p>
    </div>
  )
}

export default BtnCounter;
