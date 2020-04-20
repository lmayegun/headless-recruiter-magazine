import axios from 'axios'

export const CONTENT = '[CURRENT CONTENT]';

export function getContent( id ){
  const request = axios.get('https://recruiter.tsample.co.uk/content/'+id,
                            {
                              params:{
                                id: id
                              }
                          })

  return (dispatch) => {
    request.then( function(response){
      dispatch({
        type: CONTENT,
        contentData: response.data
      })
    });
  }
}
