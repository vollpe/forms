class Field {
    constructor(label, value, required) {
        this.label = label;
        this.value = value;
        this.required = required;
    };

    changeValue(event) {
        this.value = event.target.value;
        if (!this.validate()) {
            this.validationElement.innerText = 'Please check input validity';
            this.inputElement.setAttribute('class', 'invalid-input');
        } else {
            this.validationElement.innerText = this.value;
        }
    };

    validate() {
        return this.required && this.value || !this.required;
    };

    render() {
        let block = document.createElement('div');
        let labelElement = document.createElement('label');
        labelElement.setAttribute('for', 'field');
        labelElement.innerText = this.label;
        block.appendChild(labelElement);
        let inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('id', 'field');
        inputElement.setAttribute('name', 'field');
        inputElement.setAttribute('value', this.value);
        inputElement.setAttribute('class', 'input');
        this.inputElement = inputElement;
        inputElement.addEventListener('change', this.changeValue.bind(this));
        block.appendChild(inputElement);
        let validationElement = document.createElement('div');
        validationElement.setAttribute('id', 'fieldValidation');
        this.validationElement = validationElement;
        block.appendChild(validationElement);
        document.getElementById('form').appendChild(block);
    };
}

class PhoneField extends Field {
    validate() {
        return (!this.required && !this.value) || super.validate() && this.value.match('\\+\\d{5} \\d{7}');
    }
}

class DateField extends Field {
    validate() {
        return (!this.required && !this.value) || super.validate() && this.value.match('^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$');
    }
}

class TimeField extends Field {
    validate() {
        return (!this.required && !this.value) || super.validate() && this.value.match('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$');
    }
}

export {Field, PhoneField, DateField, TimeField};