import request from 'supertest';
import server from './server';


describe('Test /api', () => {
  it ('Success!', (done) => {
    request(server).get('/api').then((response) => {

      // Check JSON "username" : "changhyun"
      expect(response.text).toBe("{\"username\":\"changhyun\"}");
      done();
    });
  });
});