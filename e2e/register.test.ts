import 'testcafe';
import { Selector } from 'testcafe';

fixture `Register page - e2e tests`
    .page `localhost:8080/home/register`;

test('is my first test', async (t) => {
    await t
        .click('button[type=submit]')
});
