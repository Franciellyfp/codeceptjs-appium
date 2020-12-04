Feature: Login
  As a customer
  I want to sign-in on the application
  To access the system

  @regression
  Scenario: Login successfully
    Given I fill email
    And I fill password
    When I tap on Entrar
    Then I see the Salvar button