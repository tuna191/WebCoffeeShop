

function contactValidator(options)
{
    const checkForm = document.querySelector(options.form)

    if(checkForm)
    {
        options.rules.forEach(function(rule)
        {
            var inputElement = document.querySelector(rule.selector)
            var formMessage = inputElement.parentElement.querySelector('.form_message')
            if(inputElement)
            {
                inputElement.onblur = () => {
                    var errorMessage = rule.check(inputElement.value)
                    
                    if(errorMessage)
                    {
                        formMessage.innerHTML = `<i class="fa-sharp fa-solid fa-circle-exclamation"></i> ${errorMessage}`
                        inputElement.parentElement.classList.add('invalid');
                        
                    } else
                    {
                        formMessage.innerText = ''
                        inputElement.parentElement.classList.remove('invalid')
                        options.data.push(
                                `${inputElement.name}:${inputElement.value}`
                            )
                    }    
                }
            }
        })
    }
checkForm.onsubmit = (e) =>{
    e.preventDefault();
    console.log(options.data)
}

}

contactValidator.isName = (selector,mess) =>
{
    return {
        selector,
        check: function(e)
        {
            return e.trim() ? undefined: `Vui lòng nhập ${mess}`
        }
    }
}

contactValidator.isEmail = (selector,mess) =>
{
    return {
        selector,
        check: function(e)
        {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(e) ? undefined: `Vui lòng nhập ${mess}`
        }
    }
}

contactValidator.isYourMessage = (selector,mess) => 
{
    return {
        selector,
        check: function(e)
        {
            return e.trim() ? undefined: `Vui lòng nhập ${mess}`
        }
    }
}
