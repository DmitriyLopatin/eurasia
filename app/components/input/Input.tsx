import React, { useState,useRef } from 'react'
// inputRef.current?.setSelectionRange(5,5)

const Input = () => {
    let [num, setNum] = useState('+7 (___) ___-__-__')
    const [position, setPosition] = useState(4);
    
    let inputRef: any = useRef<HTMLInputElement>(null)
    
    const inputHandler = (event:any)=>{
        setNum(event.target.value.replace(/_/,''))
        setPosition(event.target.selectionStart)
    }
    const setInput = ()=>{
        inputRef.current.selectionStart = position
        inputRef.current.selectionEnd = position
        
    }
    React.useEffect(() => {
      if(position == 7 || position == 8){
        inputRef.current.selectionStart = 9;
          inputRef.current.selectionEnd = 9;
          console.log('position', position);
      }else if(position==12){
        inputRef.current.selectionStart = 13;
          inputRef.current.selectionEnd = 13;
          console.log('position', position);
      }else if(position==15){
        inputRef.current.selectionStart = 16;
          inputRef.current.selectionEnd = 16;
          console.log('position', position);
      }else{
        inputRef.current.selectionStart = position;
          inputRef.current.selectionEnd = position;
      }
      console.log(position)
          
          // возвращаем курсор на оригинальную позицию
  }, [position]);

  return (
    <input type='tel' maxLength={(num.split("_").length-1)>0?19:18} onChange={inputHandler} onClick={setInput} ref={inputRef} value={num}/>
  )
}

export default Input