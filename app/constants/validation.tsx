import * as yup from 'yup'

// email: string;
// phoneNumber: string;
export const SendMessageSheme = yup.object().shape({
    Name: yup.string().max(255,'Длина имени должна быть не более 255 символов').required('Обязательное поле ввода'),
    email: yup.string().email('Поле email должно обязательно содержать символы @').required('Обязательное поле ввода'),
    phoneNumber: yup.string().test({
        test: (value)=>{
            if(!value){
                return false
            }else if(value.replace(/_/g,'').length !==18){
                return false
            }
            return true
        }
    })
})
