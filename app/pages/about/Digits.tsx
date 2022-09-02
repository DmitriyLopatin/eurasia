import React from 'react'
import { EurasiaData } from '../../services/Services'


const Digits = ({digits}) => {
  // EurasiaData.getAboutCompanyDigits().then(response=>console.log(response.data))

  if(digits.length % 2 !== 0){
    digits.push(
      {
        id: 100,
        title: '',
        subtitle:''
      }
      )
  }
  
  console.log(digits)
  return (
    <section className='digits'>
      <p className='digits-heading'>МЫ В <span>ЦИФРАХ</span></p>
        <div className='digits-content'>
          {digits.map((item:any,index:number) => 
          <div key={item.id} className={index==0||index==1?"digits-item":'digits-item digits-item__borderTop'}>
            <p className='digits-item__title'>{item.title}</p>
            <p className='digits-item__titleDescription'>{item.subtitle}</p>
            </div>
          )}
        </div>
      
    </section>
  )
}

export default Digits