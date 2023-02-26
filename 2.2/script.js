"use strict";

$('.forms').on('submit', function(e) {
    var Form = document['form'];
    
    var validation = new Validation(Form); 
    if(!validation.validateForm()) {            
        e.preventDefault();
    }
});

class Validation {  
    constructor(Form) {
        this._Form = Form;
        this._valid = true;
        
        this._errors = $('.validation-errors');
    }   

    validateForm() {
        this._errors.empty();

        for (var i = 0; i < this._Form.elements.length; i++) {
            var formField = this._Form.elements[i];    
            
            if (formField.classList.contains('required')) {
                this.validateRequired(formField);
            }
            if (formField.classList.contains('email')) { 
                this.validateEmail(formField);
            }
            if (formField.classList.contains('phone')) {
                this.validatePhone(formField);
            }
        }
        return this._valid;
    }

    validateRequired(formField) {       
        if (formField.value == '') {                    
            formField.classList.add('invalid');
            this._errors.append('<p class="req-fail">Обязательное поле, требуется ввести текст.</p>')                
            return this._valid = false;
        } else {
            formField.classList.remove('invalid');
            return true;            
        }       
    }

    validateEmail(formField) {      
        var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;  

        if (!pattern.test(formField.value)) {   
            this._errors.append('<p class="email-fail">Неверный формат e-mail.</p>')                
            formField.classList.add('invalid'); 
            return this._valid = false;             
        } else {
            formField.classList.remove('invalid');
            return true;
        }           
    }

    validatePhone(formField) {      
        var pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;            
        
        if (!pattern.test(formField.value)) {   
            this._errors.append('<p class="tel-fail">Неверный формат телефона.</p>')                
            formField.classList.add('invalid'); 
            return this._valid = false;
        } else {
            formField.classList.remove('invalid');
            return true;
        }       
    }   
}
