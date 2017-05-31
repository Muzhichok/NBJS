
Feature('Authorization');

Scenario('test authorization', (I) => {
    I.amOnPage('/');
    I.fillField(".//*[@id='txtUsername']", "Admin");
    I.fillField(".//*[@id='txtPassword']", "admin");
    I.click(".//*[@id='btnLogin']");
    I.see("Dashboard");
});



