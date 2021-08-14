import React, { useEffect, useState } from 'react'
import request from 'request';

const Get = () => {

    var options = {
        method: 'GET',
        url: 'http://localhost:5000/posts',
        headers:
        {
            'postman-token': '46dad266-1c21-7985-8c22-3a2d36fa92c5',
            'cache-control': 'no-cache',
            'content-type': 'application/json'
        },
        body:
        {
            title: 'text11',
            message: 'text text text text',
            creator: 'Prem Biswas',
            tags: 'Pooja Roy'
        },
        json: true
    };

    const loadUser = async () => {
        await request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
        });
    }

    useEffect(() => {
        loadUser();
    }, []);
    return (
        <div className="container">
            <div class="card" style={{ width: '18rem', marginTop: 20 }}>
                <ul class="list-group list-group-flush">
                    {/* <li class="list-group-item" key={_id} /> */}
                    <li class="list-group-item">.</li>
                    <li class="list-group-item">.</li>
                    <li class="list-group-item">.</li>
                    <li class="list-group-item">.</li>
                </ul>
            </div>
        </div>
    )
}

export default Get
