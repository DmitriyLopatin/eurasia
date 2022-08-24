import React from 'react'


const Digits = () => {

  const digitsData = [
    {
      title: "24",
      titleDescription: '.года на рынке'
    },
    {
      title: '>12K',
      titleDescription: '.единиц техники'
    },
    {
      title: "10",
      titleDescription: '.лет на рынке ирригации'
    },
    {
      title: '>200',
      titleDescription: '.человек работают в Aftersales'
    },
    {
      title: "20",
      titleDescription: '.лет как национальный диллер John Deer'
    },
    {
      title: "470",
      titleDescription: '.сотрудников во всех регионах'
    },
    {
      title: "14",
      titleDescription: '.складов запчастей на сумму более $16 млн'
    },
    {
      title: "14",
      titleDescription: '. представительств в Казахстане и 1 в Кыргызстане'
    },
    {
      title: "250",
      titleDescription: '.служебных автомобилей'
    },
    {
      title: '$65',
      titleDescription: '.млн прямых инвестиций в Казахстан'
    },
    {
      title: '35%',
      titleDescription: '.доля рынка в Premium сегменте'
    },
    {
      title: '35%',
      titleDescription: '.доля рынка в Premium сегменте'
    }
  ]

  return (
    <section className='digits'>
      <p className='digits-heading'>МЫ В <span>ЦИФРАХ</span></p>
        <div className='digits-content'>
          {digitsData.map((item, index) => 
          <div key={index+'a'} className={index==0||index==1?"digits-item":'digits-item digits-item__borderTop'}>
            <p className='digits-item__title'>{item.title}</p>
            <p className='digits-item__titleDescription'>{item.titleDescription}</p>
            </div>
          )}
        </div>
      
    </section>
  )
}

export default Digits