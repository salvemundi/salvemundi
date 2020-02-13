import 'testcafe';
import { Selector } from 'testcafe';

// tslint:disable-next-line: no-unused-expression
fixture `Balance page - Accountancy - No language`
    .page `localhost:8080/dashboard/accountancy`;

test('Should show a complete list of three payment methods + two rows summing up everything', async (t) => {
    await t
        .expect(Selector('#balance-table tbody').childElementCount).eql(5)
        .expect(Selector('#balance-table tbody tr').nth(0).child('td').nth(2).innerText).eql('€7600.00')
        .expect(Selector('#balance-table tbody tr').nth(0).child('td').nth(3).innerText).eql('')
        .expect(Selector('#balance-table tbody tr').nth(1).child('td').nth(2).innerText).eql('€8000.00')
        .expect(Selector('#balance-table tbody tr').nth(1).child('td').nth(3).innerText).eql('')
        .expect(Selector('#balance-table tbody tr').nth(2).child('td').nth(2).innerText).eql('')
        .expect(Selector('#balance-table tbody tr').nth(2).child('td').nth(3).innerText).eql('');
});

test('Added name filer - Should show a list of one payment method + two rows summing up everything', async (t) => {
    await t
        .typeText('#name-filter', 'Kas')
        .click('#confirm-filter')
        .expect(Selector('#balance-table tbody').childElementCount).eql(3)
        .expect(Selector('#balance-table tbody tr').nth(0).child('td').nth(2).innerText).eql('€7600.00')
        .expect(Selector('#balance-table tbody tr').nth(0).child('td').nth(3).innerText).eql('');
});

test('Added date filer - Should show a complete list of payment methods + two rows summing up everything, but with other values', async (t) => {
    await t
        .typeText('#date-filter', '2020-01-08')
        .click('#confirm-filter')
        .expect(Selector('#balance-table tbody').childElementCount).eql(5)
        .expect(Selector('#balance-table tbody tr').nth(0).child('td').nth(2).innerText).eql('€6800.00')
        .expect(Selector('#balance-table tbody tr').nth(0).child('td').nth(3).innerText).eql('')
        .expect(Selector('#balance-table tbody tr').nth(1).child('td').nth(2).innerText).eql('€7000.00')
        .expect(Selector('#balance-table tbody tr').nth(1).child('td').nth(3).innerText).eql('')
        .expect(Selector('#balance-table tbody tr').nth(2).child('td').nth(2).innerText).eql('')
        .expect(Selector('#balance-table tbody tr').nth(2).child('td').nth(3).innerText).eql('€1000.00');
});

test('Added date and name filer - Should show a list of one payment method + two rows summing up everything, but with other values', async (t) => {
    await t
        .typeText('#name-filter', 'Kas')
        .typeText('#date-filter', '2020-01-08')
        .click('#confirm-filter')
        .expect(Selector('#balance-table tbody').childElementCount).eql(3)
        .expect(Selector('#balance-table tbody tr').nth(0).child('td').nth(2).innerText).eql('€6800.00')
        .expect(Selector('#balance-table tbody tr').nth(0).child('td').nth(3).innerText).eql('');
});
