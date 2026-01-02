import {test, expect, chromium} from "@playwright/test";

var userID;

//GET
test('GET Users', async ({request}) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    console.log(await response.json());
    expect(response.status()).toBe(200);

});

//POST
test('Create Users', async ({request}) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/users',
                                        {
                                            data: {
                                                "name": "Indrajeet",
                                                "username": "indra",
                                                "email": "indra@example.com",
                                                "job": "QA Engineer"
                                            },
                                            headers: {
                                                "Content-Type": "application/json",
                                                "Accept": "application/json"
                                            }

                                        });
    
    console.log(await response.json());  //print the response
    await expect(response.status()).toBe(201);
    
    var res = await response.json();  //Save json respone in variable
    userID = res.id;
    console.log("Created User ID:", userID);
});

//PUT
test('Update User', async ({request}) => {

   const response = await request.put('https://jsonplaceholder.typicode.com/users/'+userID,
                                        {
                                            data: {
                                                "name": "Updated User",
                                                "username": "devindra",
                                                "email": "new@example.com"
                                            },
                                            headers: {
                                                "Content-Type": "application/json",
                                                "Accept": "application/json"
                                            }

                                        });
    console.log("User ID = ", userID);
    console.log("Status = ", response.status());
    console.log(response.text());                                    
    //console.log(await response.json());  //print the response
    await expect(response.status()).toBe(500);

});

//DELETE
test('Delet User', async ({request}) => {

    const response = await request.delete('https://jsonplaceholder.typicode.com/users/'+userID);
    expect(await response.status()).toBe(200);
});
