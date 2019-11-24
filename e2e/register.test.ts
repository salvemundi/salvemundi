import 'testcafe';
import { Selector } from 'testcafe';
import * as fs from 'fs';

fixture `Register page - Dutch`
    .page `localhost:8080/home/register`;

const languageFile = JSON.parse(fs.readFileSync('./src/lang/Register.json', 'utf-8'));

test('Should fail with nothing filled in and show error', async (t) => {
    await t
        .click('button[type=submit]')
        .expect(Selector('.toasted-container.top-right div.error').innerText).eql(languageFile.nl.error.form_not_filled_in_correctly);
});

test('Should fail with existing email and show error', async (t) => {
    await t
        .typeText('#register-form__first_name', 'Salve')
        .typeText('#register-form__last_name', 'Mundi')
        .typeText('#register-form__birthday', '2017-02-01')
        .typeText('#register-form__address', 'Rachelsmolen 1')
        .typeText('#register-form__postalcode', '5612MA')
        .typeText('#register-form__city', 'Eindhoven')
        .typeText('#register-form__country', 'Nederland')
        .typeText('#register-form__phonenumber', '+31 6 24827777')
        .typeText('#register-form__email', 'admin@salvemundi.nl')
        .click('button[type=submit]')
        .expect(Selector('.toasted-container.top-right div.error').innerText).eql(languageFile.nl.error.email_already_exists);
});

test('Should succeed', async (t) => {
    await t
        .typeText('#register-form__first_name', 'Salve')
        .typeText('#register-form__last_name', 'Mundi')
        .typeText('#register-form__birthday', '2017-02-01')
        .typeText('#register-form__address', 'Rachelsmolen 1')
        .typeText('#register-form__postalcode', '5612MA')
        .typeText('#register-form__city', 'Eindhoven')
        .typeText('#register-form__country', 'Nederland')
        .typeText('#register-form__phonenumber', '+31 6 24827777')
        .typeText('#register-form__email', 'ict@salvemundi.nl')
        .click('button[type=submit]');

    await t
        .expect((await Selector('.check-email_center #title').innerText).toLowerCase()).eql(languageFile.nl.check_email.title.toLowerCase())
        .expect((await Selector('.check-email_center #description').innerText).toLowerCase()).eql(languageFile.nl.check_email.description.toLowerCase());
});
