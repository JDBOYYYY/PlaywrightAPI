import { test, expect } from '@playwright/test';

//page used for testing  https://reqres.in/

test('Basic get request to get users list', async ({ request }) => {
    const req = await request.get(`/api/users?page=2`);
    expect(req.ok()).toBeTruthy();
    const users = await req.json();
    console.log(users);

    //get user with number 7
    const userWithID7 = users.data.find((user) => user.id === 7);

    if (userWithID7) {
        console.log('User with ID 7:', userWithID7);
    } else {
        console.log('User with ID 7 not found');
    }
    //check if user number 7  has a correct mail
    expect(await userWithID7).toMatchObject(
        expect.objectContaining({
            email: 'michael.lawson@reqres.in',
        })
    );
});

test('Create an user and check if he exists', async ({ request }) => {
    const req = await request.post(`/api/users`, {
        data: {
            name: 'morpheus',
            job: 'leader',
        },
    });
    console.log(req);
    expect(req.ok()).toBeTruthy();
});

test('Api put test', async ({ request }) => {
    const req = await request.put(`/api/users/2`, {
        data: {
            name: 'morpheus',
            job: 'zion resident',
        },
    });
    console.log(req);
    expect(req.ok()).toBeTruthy();
});

test('Api login test', async ({ request }) => {
    const req = await request.post(`/api/login`, {
        data: {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka',
        },
    });
    console.log(req);
    expect(req.ok()).toBeTruthy();
});
