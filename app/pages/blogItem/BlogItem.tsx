import Link from 'next/link'
import React from 'react'
import ArrowLeft from '../../icons/ArrowLeft'

const BlogItem = () => {
    return (
        <section className='blogItem'>
            <div className='blogItem__container'>
                <small>09.08.2022</small>
                <Link href='/blogs'><span><ArrowLeft/> Назад</span></Link>
                <h1>Такой закон «О Зерне» нам не нужен</h1>
                <img src="/assets/images/Blog.jpg" alt="" />
                <p>На заседании Комитета по аграрным вопросам Региональной палаты предпринимателей Костанайской области обсудили новый законопроект «О зерне». Представители регионального совета, аграрии, уверены, что законопроект требует разъяснения, так как многие механизмы, заложенные в нем, необходимо адаптировать к нынешним реалиям.</p>
                <p>– Самый главный вопрос, который волнует аграриев – это статья 39-1. В ней указано, что регистрация зернового токена должна проводиться с 1 августа по 1 ноября, но в нашем регионе есть озимые, и их уборка начинается с середины июля, а 2 ноября уборка масличных, чаще всего, не закончена. </p>
                <p>Ежегодно погодно-климатические условия меняются, и я думаю, что такая норма – ограничение права фермеров. Надо вернуться к тому, чтобы, как и зерновая расписка, токен работал круглый год, потому что многие сельхозпроизводители не продают зерно в тот же год. Думаю, что временные рамки с августа по ноябрь нужно убрать, – отметил заместитель руководителя управления сельского хозяйства и земельных отношений Костанайской области Сембай Сагандыков. </p>
                <p>Во время обсуждения аграрии пришли к единому мнению, что проект сырой, его нужно доработать и вложить в него четкое направление и смысл, чего планируют добиться благодаря дополнительному широкому обсуждению. </p>
                <p>Главные вопросы, которыми задаются костанайские аграрии – это какую цель несет внедрение токена, идентичны ли понятия «токена» и «электронных денег»? </p>
                <p>– Участники заседания пришли к выводу, что эти вопросы необходимо адресовать разработчикам поправок, – отметил директор ТОО «Мелитопольское» Эдуард Двуреченский.</p>
                <p>В свою очередь представитель регионального совета Палаты предпринимателей Костанайской области, директор ТОО «Зуевка» Александр Бородин высказал мнение о том, что необходимо не только отправить предложения костанайских аграриев в НПП, но и нужно вынести предлагаемые изменения в закон на широкое обсуждение.</p>
            </div>
        </section>
    )
}

export default BlogItem