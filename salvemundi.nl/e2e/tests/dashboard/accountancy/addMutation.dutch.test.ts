import 'testcafe';
import { Selector } from 'testcafe';
import * as fs from 'fs';

// tslint:disable-next-line: no-unused-expression
fixture `Add mutation page - Accountancy - Dutch`
    .page `localhost:8080/dashboard/accountancy/mutation`;

const languageFile = JSON.parse(fs.readFileSync('./src/lang/dashboard/accountancy/addMutation.json', 'utf-8')).nl;

test('Should fail with nothing filled in and show error', async (t) => {
    await t
        .click('#language')
        .click('#language #dutch')
        .click('#add-mutation-form__submit')
        .expect(Selector('.toasted.error').innerText).eql(languageFile.error.form_not_filled_correctly);
});

test('Should succeed', async (t) => {
    const paymentMethod = Selector('#add-mutation-form__payment-method').find('option');
    const incomeStatememt = Selector('#add-mutation-form__income-statement').find('option');

    await t
        .click('#language')
        .click('#language #dutch')
        .typeText('#add-mutation-form__date', '2020-01-08')
        .typeText('#add-mutation-form__description', 'Test')
        .typeText('#add-mutation-form__iban', 'NL82ABNA0123456789')
        .typeText('#add-mutation-form__amount', '100')
        .click('#add-mutation-form__payment-method')
        .click(paymentMethod.withText('Kas - 100'))
        .click('#add-mutation-form__income-statement')
        .click(incomeStatememt.withText('Bestuur - 4000'))
        .click('#add-mutation-form__submit')
        .expect(Selector('.toasted.success').innerText).eql(languageFile.form.succes);
});
