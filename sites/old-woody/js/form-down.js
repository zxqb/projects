import JustValidate from 'just-validate';


const validationDown = new JustValidate('#form-down')


validationDown
.addField('#name-down', [
    {
    rule: 'minLength',
    value: 3,
    },
    {
    rule: 'maxLength',
    value: 30,
    },
    {
    rule: 'required',
    errorMessage: 'ИМЯ',
    },
])
.addField('#tel-down', [
    {
    rule: 'required',
    errorMessage: 'Телефон',
    },
    {
    rule: 'minLength',
    value: 11,
    }
])

.addField('#height', [
    {
    rule: 'minLength',
    value: 1,
    },
    {
    rule: 'maxLength',
    value: 10,
    },
    {
    rule: 'required',
    errorMessage: 'Длинна',
    },
])
.addField('#width', [
    {
    rule: 'minLength',
    value: 1,
    },
    {
    rule: 'maxLength',
    value: 10,
    },
    {
    rule: 'required',
    errorMessage: 'Длинна',
    },
]);
