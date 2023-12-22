export const validate = (value, name) => {
    // validate function
    function vlf() {
        return {
            letter8: (value) => {
                return value.length < 8 ? true : false
            },
            haveChar: (value) => {
                const regex = /^[a-zA-Z\s]*$/;

                return regex.test(value) ? true : false
            },
            haveSpace: (value) => {
                return value.includes(' ') ? true : false
            },
            emptyValue: (value) => {
                return value.trim() === '' ? true : false
            },
            emailRegex: (value) => {
                const check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                return check.test(value) ? true : false
            }
        }
    }


    switch (name) {
        case 'fullname':
            // letter 8 character
            let errorName = ''
            if (vlf().emptyValue(value)) {
                console.log(vlf().emptyValue(value))
                errorName = 'please enter value'
            }
            else if (vlf().letter8(value)) {
                errorName = 'letter 8 character'
            }
            // have % $ # and more 
            else if (!vlf().haveChar(value)) {
                errorName = 'invalid name '
            }
            return { value, error: errorName }

        case 'password':
            let errorPassword = ''
            if (vlf().emptyValue(value)) {
                errorPassword = 'please enter value'
            }
            // letter 8 character
            if (vlf().letter8(value)) {
                errorPassword = 'letter 8 character'
            }

            // don't use space 
            else if (vlf().haveSpace(value)) {
                errorPassword = `dont use space!`
            }
            return { value: value, error: errorPassword }
        case 'email':
            let errorEmail = ''
            if (vlf().emptyValue(value)) {
                errorEmail = 'please enter value'
            } else if (!vlf().emailRegex(value)) {
                errorEmail = 'please enter valid email address'
            }
            return { value: value, error: errorEmail }

        case 'profileUser':
            return { value, error: '' }

            break;

        default:
            break;
    }
}