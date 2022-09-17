

function contactValidator(options)
{
    const checkForm = document.querySelector(options.form)

    if(checkForm)
    {
        options.rules.forEach(function(rule)
        {
            var inputElement = document.querySelector(rule.selector)
            var formMessage = inputElement.parentElement.querySelector('.form_message')
            console.log(inputElement.parentElement)
            if(inputElement)
            {
                inputElement.onblur = () => {
                    var errorMessage = rule.check(inputElement.value)
                    console.log(errorMessage)
                    
                    if(errorMessage)
                    {
                        formMessage.innerHTML = `<i class="fa-sharp fa-solid fa-circle-exclamation"></i> ${errorMessage}`
                        inputElement.parentElement.classList.add('invalid')
                    } else
                    {
                        formMessage.innerText = ''
                        inputElement.parentElement.classList.remove('invalid')
                    }

                    
                }
            }
        })
    }
}

contactValidator.isName = (selector) =>
{
    return {
        selector,
        check: function(e)
        {
            return e.trim() ? undefined: 'Please write name down'
        }
    }
}

contactValidator.isEmail = (selector) =>
{
    return {
        selector,
        check: function(e)
        {
            return e.trim() ? undefined: 'Please write email down'
        }
    }
}

contactValidator.isYourMessage = (selector) => 
{
    return {
        selector,
        check: function(e)
        {
            return e.trim() ? undefined: 'Please write your message down'
        }
    }
}
