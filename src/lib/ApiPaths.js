const origin = process.env.NODE_ENV === 'development' ?
  'http://localhost:3003' :
  'https://admin-api.weipoint.com';

const paths = {
  metadata: {
    unapproved: origin + '/api/v1/metadata/unapproved',
    review: origin + '/api/v1/metadata/review'
  }
}

export default paths;
