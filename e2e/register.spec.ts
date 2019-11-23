import 'testcafe';
import { Selector } from 'testcafe';

fixture `Register page - e2e tests`
    .page `http://localhost:8080/register`;

test('is my first test', async (t) => {
    await t
        .typeText('#first_name', 'jojo!')
        .expect(Selector('#first_name').value).eql('jojo!');
});
