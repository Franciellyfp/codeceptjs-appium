Feature('login');

const { I, login_page } = inject()

Before(() => {

});

After(() => {

});

Scenario('Login successfully', ({home_page}) => {
    login_page.doLogin('teste@teste.com', '123456')
    home_page.checkLoginSuccess()
});

Scenario('Login unsuccessful', () => {
    login_page.doLogin('xteste@teste.com', '123456')
    login_page.checkLoginError()
});
