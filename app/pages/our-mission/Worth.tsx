import React from 'react'
import Star from '../../icons/OurMission/Star'
import Awareness from '../../icons/OurMission/Awareness'
import Command from '../../icons/OurMission/Command'
import Heart from '../../icons/OurMission/Heart'
import Innovations from '../../icons/OurMission/Innovations'
import Synergy from '../../icons/OurMission/Synergy'
import Welfare from '../../icons/OurMission/Welfare'

const Worth = () => {
    const worthData: any = [
        { id: 'a', img: <Star />, title: 'ГОЛОД К УСПЕХУ', titleDescription: 'Мы всегда амбициозны, страстны и энергичны в наших мечтах и достижениях' },
        { id: 'b', img: <Welfare />, title: 'ГОЛОД К УСПЕХУ', titleDescription: 'Любовь - это фундамент, на котором мы строим наш бизнес, отношения в команде, с клиентами и партнёрами' },
        { id: 'c', img: <Heart />, title: 'ГОЛОД К УСПЕХУ', titleDescription: 'Мы высокомотивированные на успех профессионалы, эксперты и консультанты, всегда готовы прийти на помощь и оказать поддержку' },
        { id: 'd', img: <Synergy />, title: 'ГОЛОД К УСПЕХУ', titleDescription: 'Инноавции - неотъемлемая часть нашей жизни, а безграничность в росте и развитии всего, что нас окружает, делает нас уникальными' },
        { id: 'e', img: <Awareness />, title: 'ГОЛОД К УСПЕХУ', titleDescription: 'Мы четко знаем, чего мы хотим в жизни, зачем пришли в нашу компанию и что необходимо для наших любимых клиентов и партнеров' },
        { id: 'f', img: <Command />, title: 'ГОЛОД К УСПЕХУ', titleDescription: 'Мы всегда амбициозны, страстны и энергичны в наших мечтах и достижениях' },
        { id: 'g', img: <Innovations></Innovations>, title: 'ГОЛОД К УСПЕХУ', titleDescription: 'Мы постоянно работаем над тем, чтобы увеличить прибыль наших клиентов партнеров, сотрудников и акционеров. Партнерство с нами - это взаимовыгодное сотрудничество, которое приводит к росту благосостояния всех сторон' },
    ]
    if (worthData.length % 2 !== 0){
        worthData.push({})
    }
    return (
        <section className='worth'>
                <p className='worth-heading'>ЦЕННОСТИ</p>
                <p className='worth-heading__text'>которые помогают выполнять нашу миссию</p>
                <div className='worth-content'>
                    {worthData.map((item: any, index: number) =>
                        <div key={index + 'a'} className={index == 0 || index == 1 ? "worth-item" : 'worth-item worth-item__borderTop'}>
                            {item.img}
                            <p className='worth-item__title'>{item.title}</p>
                            <p className='worth-item__titleDescription'>{item.titleDescription}</p>
                        </div>
                    )}

                </div>
        </section>
    )
}

export default Worth