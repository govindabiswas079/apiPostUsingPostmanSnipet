import React, { useState } from 'react';
import request from 'request';

const Add = () => {
    const [body, setBody] = useState({
        posts: {
            title: '',
            message: '',
            creator: '',
            tags: ''
        }
    });
    console.log(body)

    var options = {
        method: 'POST',
        url: 'http://localhost:5000/posts',
        headers:
        {

            'cache-control': 'no-cache',
            'content-type': 'application/json'
        },
        body: body,
        /* {
            title: 'text12',
            message: 'text text text text',
            creator: 'Govinda Biswas',
            tags: 'Pooja Roy'
        }, */
        json: true
    };

    const handeSubmit = async (e) => {
        e.preventDefault();
        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
        });
    }


    return (
        <div>
            <form onSubmit={handeSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">title</label>
                    <input type="title" class="form-control" id="exampleInputtitle" value={body.title} name="title" onChange={(e) => setBody({ ...body, title: e.target.value })} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">message</label>
                    <input type="message" class="form-control" id="exampleInputmessage" value={body.message} name="message" onChange={(e) => setBody({ ...body, message: e.target.value })} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">creator</label>
                    <input type="creator" class="form-control" id="exampleInputcreator" value={body.creator} name="creator" onChange={(e) => setBody({ ...body, creator: e.target.value })} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">tags</label>
                    <input type="tags" class="form-control" id="exampleInputtags" value={body.tags} name="tags" onChange={(e) => setBody({ ...body, tags: e.target.value })} />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Add;
