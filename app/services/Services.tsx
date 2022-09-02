import http from '../utils/http'

//-----------------------------------------------------

const getAboutCompanyMain = (Language:string)=>{
    return http.get('about-companies/main',{
        headers: {'Accept-Language': Language}
    })
}
const getAboutCompanyDigits = (Language:string)=>{
    return http.get('about-companies/digits',{
        headers: {'Accept-Language': Language}
    })
}
const getAboutCompanySolutions = (Language:string)=>{
    return http.get('about-companies/unique-solutions',{
        headers: {'Accept-Language': Language}
    })
}

//-------------------------------------------------------

const getOurMissionMain = (Language:string)=>{
    return http.get('our-missions/main',{
        headers: {'Accept-Language': Language}
    })
}
const getOurMissionValues = (Language:string)=>{
    return http.get('our-missions/values',{
        headers: {'Accept-Language': Language}
    })
}

//-------------------------------------------------------

const getWhatsNewRecords = (Language:string)=>{
    return http
}

//-------------------------------------------------------

export const EurasiaData = {
    getAboutCompanyMain,
    getAboutCompanyDigits,
    getAboutCompanySolutions,
    getOurMissionMain,
    getOurMissionValues
}