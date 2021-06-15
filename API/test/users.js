import supertest from 'supertest';
const request=supertest('https://gorest.co.in/public-api/');

const TOKEN=
'1039a084ecd97fefa505d9ec8f06afb7137681b1232b70350d7ea214a30ad1a9';

//mport{expect} from 'chai';
import pkg from 'chai'
const {expect} =pkg

describe('Users',()=>{
    it('GET/users',()=>{
        request.get('users?access-token=${TOKEN}').end((err,res)=>{
            console.log(res.body)
           //expect(res.body.data).to.not.be.empty;

        });

    });
});
