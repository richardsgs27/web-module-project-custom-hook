import React from 'react'

export default function useDarkMode() {
   const [dark, setDark] = useState(false)
   const onChange = ({target: {value}}) => {
       setDark(!value)
   }
   return [dark,onChange]
}