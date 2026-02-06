import React from 'react'

interface WarningProps {
  warning: string | null | undefined
}

const Warning = ({warning}: WarningProps) => {

    if (warning == "") {
        return null
    }else{
        return (
            <div>Sua mensagem foi enviada:{warning}</div>
        )
    }

}

export default Warning