import 'testcafe';
import { Selector } from 'testcafe';

// tslint:disable-next-line: no-unused-expression
fixture `Balance page - Accountancy - No language`
    .page `localhost:8080/dashboard/accountancy/incomeStatement`;

test('Should show a complete list of three income statements + two rows summing up everything', async (t) => {
    await t
        .expect(Selector('#income-statement-table tbody').childElementCount).eql(5)
        .expect(Selector('#income-statement-table tbody tr').nth(0).child('td').nth(2).innerText).eql('')
        .expect(Selector('#income-statement-table tbody tr').nth(0).child('td').nth(3).innerText).eql('€2000.00')
        .expect(Selector('#income-statement-table tbody tr').nth(1).child('td').nth(2).innerText).eql('€9000.00')
        .expect(Selector('#income-statement-table tbody tr').nth(1).child('td').nth(3).innerText).eql('')
        .expect(Selector('#income-statement-table tbody tr').nth(2).child('td').nth(2).innerText).eql('')
        .expect(Selector('#income-statement-table tbody tr').nth(2).child('td').nth(3).innerText).eql('€6000.00');
});

test('Added name filer - Should show a list of one income statement + two rows summing up everything', async (t) => {
    await t
        .typeText('#name-filter', 'Bestuur')
        .click('#confirm-filter')
        .expect(Selector('#income-statement-table tbody').childElementCount).eql(3)
        .expect(Selector('#income-statement-table tbody tr').nth(0).child('td').nth(2).innerText).eql('')
        .expect(Selector('#income-statement-table tbody tr').nth(0).child('td').nth(3).innerText).eql('€2000.00');
});

test('Added date filer - Should show a complete list of income statements + two rows summing up everything, but with other values', async (t) => {
    await t
        .typeText('#date-filter', '2020-01-08')
        .click('#confirm-filter')
        .expect(Selector('#income-statement-table tbody').childElementCount).eql(5)
        .expect(Selector('#income-statement-table tbody tr').nth(0).child('td').nth(2).innerText).eql('')
        .expect(Selector('#income-statement-table tbody tr').nth(0).child('td').nth(3).innerText).eql('€6000.00')
        .expect(Selector('#income-statement-table tbody tr').nth(1).child('td').nth(2).innerText).eql('€2000.00')
        .expect(Selector('#income-statement-table tbody tr').nth(1).child('td').nth(3).innerText).eql('')
        .expect(Selector('#income-statement-table tbody tr').nth(2).child('td').nth(2).innerText).eql('')
        .expect(Selector('#income-statement-table tbody tr').nth(2).child('td').nth(3).innerText).eql('');
});

test('Added date and name filer - Should show a list of one income statement + two rows summing up everything, but with other values', async (t) => {
    await t
        .typeText('#name-filter', 'Bestuur')
        .typeText('#date-filter', '2020-01-08')
        .click('#confirm-filter')
        .expect(Selector('#income-statement-table tbody').childElementCount).eql(3)
        .expect(Selector('#income-statement-table tbody tr').nth(0).child('td').nth(2).innerText).eql('')
        .expect(Selector('#income-statement-table tbody tr').nth(0).child('td').nth(3).innerText).eql('€6000.00');
});
