Feature('students');

const { I, login_page, home_page } = inject();
const code = require('../utils/code')
const name = require('../utils/name')

Scenario('Add studentes successfully', () => {

    const my_code = code.getCode()
    const my_name = name.getName()

    login_page.doLogin('teste@teste.com', '123456')
    home_page.registerStudent(my_code, my_name)
    home_page.searchStudent(my_name, my_code)
});
