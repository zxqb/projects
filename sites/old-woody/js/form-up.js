import JustValidate from 'just-validate';

const validation = new JustValidate('#form-up')
validation
.addField('#name-up', [
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
.addField('#tel-up', [
    {
    rule: 'required',
    errorMessage: 'Телефон',
    },
    {
    rule: 'minLength',
    value: 11,
    }
]);