

function loginValidator(options)
{
    const getForm = document.querySelector(options.form)
    if(getForm)
    {
        let i = 0
        options.rules.forEach(rule =>
        {
            const inputElement = document.querySelector(rule.selection)
            inputElement.onblur = () =>
            {

                const errorMessage = rule.check(inputElement.value)
                const formMessage = inputElement.parentElement.querySelector('.form_message')

                if(errorMessage)
                {
                    formMessage.innerHTML = `<i class="fa-sharp fa-solid fa-circle-exclamation"></i> ${errorMessage}`
                    inputElement.parentElement.classList.add('invalid')
                } else
                {
                    formMessage.innerText = ''
                    inputElement.parentElement.classList.remove('invalid')
                    options.showImformations.imformations = {...options.showImformations.imformations,name:inputElement.value}
                }
            }
        })
    }
    document.querySelector(options.showImformations.selection).onclick = () => 
    {
        const im = options.showImformations.imformations
        console.log(im);
    }

}

loginValidator.isAccount = (selection) =>
{
    return {
        selection,
        check: (e) => {
            return e ? undefined: 'Please write your account'
        }
    }
}

loginValidator.isEmail = (selection) =>
{
    return {
        selection,
        check: (e) => {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(e)
            {
                return regex.test(e) ? undefined : `This is not an email.
                Please write your email again.`
            }
            else if(e === '')
            {
                return 'Please write your email'
            }
        }
    }
}

loginValidator.isPassword = (selection) =>
{
    return {
        selection,
        check: (e) => {
            const len = e.length
            
            if(e)
            {
                return len >= 6 ? undefined : `Your password is not six characters long`
            }
            else if(e === '')
            {
                return 'Please write your password'
            }
        }
    }
}

loginValidator.submit = (selection) => 
{
    return{
        selection,
        imformations:[]
    }
}
