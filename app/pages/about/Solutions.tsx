import React from 'react'
import { EurasiaData } from '../../services/Services'

const Solutions = ({solutions}) => {
  // EurasiaData.getAboutCompanySolutions().then(response=>console.log(response.data))
  console.log(solutions)
  const solutionsData = [
    {
      title: '3,6',
      titleDescription:'. млн га засеваются решениями для посева John Deere'
    },
    {
      title: '6,5',
      titleDescription:'. млн га убираются решениями для уборки John Deere'
    },
    {
      title: '2,5',
      titleDescription:'. млн га оцифровано решениями John Deere'
    },
    {
      title: '16,3',
      titleDescription:'. тысячи га орошается решениями для полива'
    },
    {
      title: '>2K',
      titleDescription:'. фермеров зарабытвают с нашими решениями'
    },
  ]
  return (
    <section className='solutions'>
      <p className='solutions__title'>УНИКАЛЬНЫЕ РЕШЕНИЯ</p>
      <div className='solutions__text'>
        <p >За эти годы мы создали развитую сеть по обеспечению фермеров уникальными комплексными решениями
          в сельском хозяйстве Казахстана и Кыргызстана</p>
      </div>
      <div  className='solutions__content'>
        {solutions.map((item:any)=>
        <div key={item.id} className='solutions__item'>
          <p className='solutions__item--title'>{item.title}</p>
          <p className='solutions__item--titleDescription'>{item.subtitle}</p>
        </div>
        )}
      </div>
    </section>
  )
}

export default Solutions